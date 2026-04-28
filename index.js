import "dotenv/config";
import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

const app = express();
const PORT = 8080;
const BODY_LIMIT = "15mb";

const DATA_DIR = path.join(process.cwd(), "data");
const SENT_EMAILS_PATH = path.join(DATA_DIR, "sent-emails.json");

const SMTP_SERVICE = "gmail";
const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = Number.parseInt("587", 10);
const SMTP_SECURE = "true";
const SMTP_USER = "marketing@evolvestrength.ca";
const SMTP_PASS = "";
const SMTP_FROM = "marketing@evolvestrength.ca";

const EMAIL_SUBJECT = "Your Lifetime Rate Is Locked";
const MAX_CERTIFICATE_BYTES = 20 * 1024 * 1024;

const certificateUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_CERTIFICATE_BYTES },
});

app.use(express.json({ limit: BODY_LIMIT }));
app.use((req, res, next) => {
  const origin = "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  next();
});

const normalizeEmail = (email) => (email || "").toString().trim().toLowerCase();

const loadSentEmails = async () => {
  try {
    const raw = await fs.readFile(SENT_EMAILS_PATH, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { emails: {} };
    if (!parsed.emails || typeof parsed.emails !== "object") {
      return { emails: {} };
    }
    return parsed;
  } catch (error) {
    if (error?.code === "ENOENT") {
      return { emails: {} };
    }
    throw error;
  }
};

const saveSentEmails = async (data) => {
  await fs.mkdir(path.dirname(SENT_EMAILS_PATH), { recursive: true });
  const tmpPath = `${SENT_EMAILS_PATH}.tmp`;
  await fs.writeFile(tmpPath, JSON.stringify(data, null, 2));
  await fs.rename(tmpPath, SENT_EMAILS_PATH);
};

const createTransporter = () => {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP_USER/SMTP_PASS are required.");
  }

  if (SMTP_SERVICE) {
    return nodemailer.createTransport({
      service: SMTP_SERVICE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }

  if (!SMTP_HOST) {
    throw new Error("SMTP_HOST is required when SMTP_SERVICE is not set.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number.isNaN(SMTP_PORT) ? 587 : SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
};

const htmlEscape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const extractBase64Payload = (value) => {
  if (!value) return null;
  const raw = value.toString().trim();
  if (!raw) return null;

  if (raw.startsWith("data:")) {
    const commaIndex = raw.indexOf(",");
    if (commaIndex === -1) return null;
    return raw.slice(commaIndex + 1).replace(/\s/g, "");
  }

  return raw.replace(/\s/g, "");
};

const isProbablyPdf = (buffer) => buffer?.slice(0, 4).toString() === "%PDF";

const optionalCertificateUpload = (req, res, next) => {
  if (req.is("multipart/form-data")) {
    return certificateUpload.single("certificate")(req, res, next);
  }
  return next();
};

app.post("/send-certificate", optionalCertificateUpload, async (req, res) => {
  try {
    const { email, name, pdfBase64, fileName } = req.body || {};
    const normalizedEmail = normalizeEmail(email);

    if (!normalizedEmail || !normalizedEmail.includes("@")) {
      res.status(400).json({ error: "Valid email is required." });
      return;
    }

    if (!req.file && (!pdfBase64 || typeof pdfBase64 !== "string")) {
      res.status(400).json({
        error: "A PDF is required. Send pdfBase64 or a multipart file.",
      });
      return;
    }

    const sentData = await loadSentEmails();
    if (sentData.emails[normalizedEmail]) {
      res.status(200).json({ status: "skipped", reason: "already_sent" });
      return;
    }

    let pdfBuffer = null;
    if (req.file?.buffer?.length) {
      pdfBuffer = req.file.buffer;
    } else {
      const rawBase64 = extractBase64Payload(pdfBase64);
      if (!rawBase64) {
        res.status(400).json({ error: "Invalid pdfBase64 data." });
        return;
      }
      pdfBuffer = Buffer.from(rawBase64, "base64");
    }

    if (!pdfBuffer?.length || !isProbablyPdf(pdfBuffer)) {
      res.status(400).json({ error: "Invalid PDF data." });
      return;
    }

    const safeName = (
      fileName ||
      req.file?.originalname ||
      "founder-certificate.pdf"
    )
      .toString()
      .replace(/[^a-z0-9._-]/gi, "-");

    const displayName = (name || "").toString().trim();
    const greetingName = displayName ? ` ${htmlEscape(displayName)}` : "";
    const htmlBody = `
      <p>Hi${greetingName},</p>
      <h4 style="margin: 0 0 16px; font-size: 24px; line-height: 1.2;">
        Welcome to the New Standard of Strength
      </h4>
      <p>You are officially part of something extraordinary.</p>
      <p>
        Your founder rate is locked for life. Your membership will never
        increase as long as it stays active. And you will pay nothing until we
        open our doors on May 25, 2026. Terms &amp; conditions apply.
      </p>
      <p>
        This is more than a membership. It is early access to Evolve Strength
        South Edmonton Common, our flagship location designed to set the new
        standard in training.
      </p>
      <p>
        Here is your Rate Lock Certificate, your proof of priority access and
        lifetime rate security.
      </p>
      <p>We are building something exceptional. Your journey starts now.</p>
      <p>The Evolve Strength Team</p>
    `;

    const transporter = createTransporter();

    await transporter.sendMail({
      // from: SMTP_FROM,
      from: '"Evolve South Commons" <' + SMTP_FROM + ">",
      to: normalizedEmail,
      subject: EMAIL_SUBJECT,
      text: `Hi${displayName ? ` ${displayName}` : ""},\n\nWelcome to the New Standard of Strength\n\nYou are officially part of something extraordinary.\n\nYour founder rate is locked for life. Your membership will never increase as long as it stays active. And you will pay nothing until we open our doors on May 25, 2026. Terms & conditions apply.\n\nThis is more than a membership. It is early access to Evolve Strength South Edmonton Common, our flagship location designed to set the new standard in training.\n\nHere is your Rate Lock Certificate, your proof of priority access and lifetime rate security.\n\nWe are building something exceptional. Your journey starts now.\n\nThe Evolve Strength Team\n\n[View Your Rate Lock Certificate]`,
      html: htmlBody,
      attachments: [
        {
          filename: safeName,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    sentData.emails[normalizedEmail] = {
      sentAt: new Date().toISOString(),
      fileName: safeName,
    };
    await saveSentEmails(sentData);

    res.status(200).json({ status: "sent" });
  } catch (error) {
    console.error("Failed to send certificate:", error);
    res.status(500).json({ error: "Failed to send certificate." });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Certificate email server running on port ${PORT}`);
});
