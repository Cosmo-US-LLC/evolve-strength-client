import express from "express";
import fs from "fs/promises";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true }));

app.post("/readFile", async (req, res) => {
  const { path } = req.body;
  const content = await fs.readFile(path, "utf8");
  res.json({ content });
});

app.post("/writeFile", async (req, res) => {
  const { path, content } = req.body;
  await fs.writeFile(path, content, "utf8");
  res.json({ ok: true });
});

app.listen(8080, () => console.log("🚀 MCP server → http://localhost:8080"));
