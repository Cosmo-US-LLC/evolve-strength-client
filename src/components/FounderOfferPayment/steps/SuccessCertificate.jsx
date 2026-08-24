import React, { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

import evolveLogoLight from "@/assets/images/home/navbar/Evolve-logo-light.svg";
import founderBadge from "@/assets/images/PresaleParkRoyal/founder_badge.png";

function SuccessCertificate({ primaryMember, onBack, locationName, submittedAt }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const isAutoSendingRef = useRef(false);

  const CERTIFICATE_EMAIL_STORAGE_PREFIX =
    "founderOfferPayment.certificateSent.v1";
  const certificateApiBase =
    import.meta.env.VITE_CERT_EMAIL_API_URL || "";

  const normalizeEmail = (email) =>
    (email || "").toString().trim().toLowerCase();

  const getSentStorageKey = (email) =>
    `${CERTIFICATE_EMAIL_STORAGE_PREFIX}.${normalizeEmail(email)}`;

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      if (typeof document === "undefined") return reject(new Error("No DOM"));
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (existing.dataset.loaded === "true") return resolve();
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener(
          "error",
          () => reject(new Error("Load failed")),
          {
            once: true,
          },
        );
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.dataset.loaded = "false";
      script.onload = () => {
        script.dataset.loaded = "true";
        resolve();
      };
      script.onerror = () => reject(new Error("Load failed"));
      document.body.appendChild(script);
    });

  const getCertificateElement = () =>
    document.getElementById("certificate");

  const loadPdfLibraries = async () => {
    const html2CanvasUrl =
      "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
    const jsPdfUrl =
      "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";

    await Promise.all([loadScript(html2CanvasUrl), loadScript(jsPdfUrl)]);
  };

  const buildCertificateFilename = (nameValue) => {
    const safeName = (nameValue || "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/gi, "")
      .toLowerCase();
    return safeName
      ? `founder-certificate-${safeName}.pdf`
      : "founder-certificate.pdf";
  };

  const dataUriToBlob = (dataUri) => {
    if (typeof dataUri !== "string") {
      throw new Error("Invalid data URI");
    }

    const commaIndex = dataUri.indexOf(",");
    if (commaIndex === -1) {
      throw new Error("Invalid data URI");
    }

    const meta = dataUri.slice(0, commaIndex);
    const base64 = dataUri.slice(commaIndex + 1);
    const mimeMatch = meta.match(/data:([^;]+);base64/i);
    const mimeType = mimeMatch ? mimeMatch[1] : "application/octet-stream";

    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }

    return new Blob([bytes], { type: mimeType });
  };

  const generateCertificatePdf = async () => {
    const certificateElement = getCertificateElement();
    if (!certificateElement) {
      throw new Error("Certificate element not found");
    }

    await loadPdfLibraries();

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const rect = certificateElement.getBoundingClientRect();
    const scale = Math.min(4, (window.devicePixelRatio || 1) * 2);
    const canvas = await window.html2canvas(certificateElement, {
      scale,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
      windowWidth: Math.ceil(rect.width),
      windowHeight: Math.ceil(rect.height),
    });

    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfModule = window.jspdf || window;
    const jsPDF = pdfModule.jsPDF;

    if (!jsPDF) {
      throw new Error("PDF library not available");
    }

    const orientation =
      canvas.width > canvas.height ? "landscape" : "portrait";
    const pdf = new jsPDF({
      orientation,
      unit: "px",
      format: [canvas.width, canvas.height],
      hotfixes: ["px_scaling"],
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imageRatio = canvas.width / canvas.height;
    let imageWidth = pageWidth;
    let imageHeight = pageWidth / imageRatio;
    if (imageHeight > pageHeight) {
      imageHeight = pageHeight;
      imageWidth = pageHeight * imageRatio;
    }
    const imageX = (pageWidth - imageWidth) / 2;
    const imageY = (pageHeight - imageHeight) / 2;

    pdf.addImage(
      imageData,
      "PNG",
      imageX,
      imageY,
      imageWidth,
      imageHeight,
      undefined,
      "FAST"
    );

    const dataUri = pdf.output("datauristring");
    let pdfBlob = null;
    try {
      const blobOutput = pdf.output("blob");
      if (blobOutput instanceof Blob) {
        pdfBlob = blobOutput;
      } else if (blobOutput) {
        pdfBlob = new Blob([blobOutput], { type: "application/pdf" });
      }
    } catch (error) {
      pdfBlob = null;
    }

    if (!pdfBlob) {
      try {
        const bufferOutput = pdf.output("arraybuffer");
        if (bufferOutput) {
          pdfBlob = new Blob([bufferOutput], { type: "application/pdf" });
        }
      } catch (error) {
        pdfBlob = null;
      }
    }

    return { pdf, dataUri, pdfBlob };
  };

  const handleDownloadCertificate = async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    try {
      const { pdf } = await generateCertificatePdf();
      const filename = buildCertificateFilename(memberName);
      pdf.save(filename);
    } catch (error) {
      console.error("Failed to download certificate:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const sendCertificateEmail = async () => {
    const email = normalizeEmail(primaryMember?.email);
    if (!email) return;

    if (typeof window !== "undefined") {
      const sentKey = getSentStorageKey(email);
      if (window.localStorage.getItem(sentKey) === "1") {
        return;
      }
    }

    if (isAutoSendingRef.current) return;
    isAutoSendingRef.current = true;

    let didSend = false;
    try {
      const { dataUri, pdfBlob } = await generateCertificatePdf();
      const filename = buildCertificateFilename(memberName);
      const certificateBlob = pdfBlob || dataUriToBlob(dataUri);
      const endpoint = certificateApiBase
        ? `${certificateApiBase.replace(/\/$/, "")}/send-certificate`
        : "/send-certificate";

      const formData = new FormData();
      formData.append("email", email);
      if (memberName) {
        formData.append("name", memberName);
      }
      formData.append("fileName", filename);
      formData.append("certificate", certificateBlob, filename);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      let result = null;
      try {
        result = await response.json();
      } catch (error) {
        result = null;
      }

      if (!response.ok) {
        console.error(
          "Failed to send certificate email:",
          result?.error || response.statusText
        );
        return;
      }

      if (typeof window !== "undefined") {
        const sentKey = getSentStorageKey(email);
        window.localStorage.setItem(sentKey, "1");
      }
      didSend = true;
    } catch (error) {
      console.error("Failed to send certificate email:", error);
    } finally {
      if (!didSend) {
        isAutoSendingRef.current = false;
      }
    }
  };

  // Certificate date: the date the member actually submitted, formatted as "25 August 2026"
  const getCertificateDate = () => {
    const parsed = submittedAt ? new Date(submittedAt) : new Date();
    const date = Number.isNaN(parsed.getTime()) ? new Date() : parsed;
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const memberName =
    `${primaryMember?.firstName || "[First Name]"} ${primaryMember?.lastName || "[Last Name]"}`.trim();
  const certificateLocationName = locationName || "Park Royal";

  useEffect(() => {
    if (!primaryMember?.email) return;
    sendCertificateEmail();
    // Intentionally only re-run when the email changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primaryMember?.email]);

  return (
    <div className="w-full flex items-center justify-center min-h-[80vh]">
      <div className="border-[8px] border-[#5B5B5B] bg-[#5B5B5B] rounded-[16px] max-w-[904px] w-full">
        <div className="flex flex-col gap-5 items-center bg-[#fcfcfc] md:p-8 p-4 rounded-[14px]">
          <div className="w-full flex justify-end">
            <button onClick={onBack} className="cursor-pointer">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7L7 21M21 21L7 7"
                  stroke="black"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div>
            <img
              src="https://evolve-strength.tor1.digitaloceanspaces.com/media/1770285600359-c4718eeb-3b12-4e95-bf3f-d4db2faf105e.png"
              alt="Certificate"
              crossOrigin="anonymous"
              className="w-[162px] h-[162px] aspect-square"
            />
          </div>

          {/* Success Message */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[520px]">
            <h2 className="font-['Kanit'] font-bold text-[#000000] md:text-[40px] uppercase leading-[39px]">
              Founder Rate Locked!
            </h2>
            <p className="font-['Vazirmatn'] font-normal text-[#000000] text-[16px] leading-[24px] max-w-[380px]">
            Congratulations! You've secured founder pricing for life.
            </p>
          </div>

          {/* Certificate (rendered offscreen for PDF capture) */}
          <div
            className="fixed -left-[10000px] top-0 z-[-1] w-[700px] pointer-events-none"
            aria-hidden="true"
          >
            <div
              id="certificate"
              className="w-[700px] relative overflow-hidden bg-[#000000] flex-shrink-0 p-8 flex gap-5 flex-col"
            >
              <div className="flex items-start justify-between">
                <img
                  src={evolveLogoLight}
                  alt="Evolve Strength"
                  className="w-[140px] h-[44px] object-contain"
                />
                <img
                  src={founderBadge}
                  alt="Founder Lock Rate badge"
                  className="w-[106px] h-[106px] object-contain"
                />
              </div>

              <div>
                <h2 className="!font-[800] font-[Kanit] !leading-[0.77] !text-[52px] uppercase text-[#ffffff]">
                  CERTIFICATE
                </h2>
                <p className="!text-[30px] !font-[700] font-[Kanit] !leading-[1] uppercase text-[#ffffff] mt-1">
                  of Official Rate Lock
                </p>
                <p className="font-['Meow_Script'] text-[42px] leading-[1.2] mt-2 mb-1 font-[400] text-[#4ab04a]">
                  {memberName}
                </p>
                <p className="text-[14px] max-w-[500px] !leading-[17.5px] font-[300] font-[Kanit] text-[#ffffff]">
                  This certifies that {memberName} is granted founder access
                  to Evolve Strength {certificateLocationName}. This
                  exclusive membership not only provides unique privileges
                  but also ensures protection from any future rate
                  increases, allowing for a seamless fitness experience.
                </p>
              </div>

              <div className="flex flex-row justify-between items-start w-full pt-2 border-t border-white/15">
                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-[10px] !leading-[16px] font-[300] font-[Kanit] text-[#ffffff]">
                    {getCertificateDate()}
                  </p>
                  <p className="text-[10px] !leading-[16px] font-[500] font-[Kanit] text-[#ffffff] uppercase tracking-wide">
                    Date
                  </p>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <p className="font-['Meow_Script'] text-[10px] !leading-[16px] font-[400] text-[#ffffff]">
                    Jon Cheung
                  </p>
                  <p className="text-[10px] !leading-[16px] font-[500] font-[Kanit] text-[#ffffff] uppercase tracking-wide">
                    Founder &amp; CEO, Evolve Strength
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Certificate Button */}
          <button
            type="button"
            onClick={handleDownloadCertificate}
            disabled={isDownloading}
            className="btnPrimary mb-12 h-[53px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="inline-flex items-center gap-2">
              <Download className="size-4" />
              {isDownloading ? "Preparing PDF..." : "Download Your Certificate"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessCertificate;
