/**
 * Tiny zero-dependency static file server for local development.
 * Run with: node dev/serve.mjs   (or via `npm run serve`)
 *
 * Serves the project root so both `dev/` and `dist/` are reachable.
 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const PORT = Number(process.env.PORT) || 5173;
const HOST = process.env.HOST || "127.0.0.1";

const projectRoot = resolve(fileURLToPath(import.meta.url), "../..");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".map": "application/json; charset=utf-8",
};

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath === "/") urlPath = "/dev/";

    // Resolve and prevent path traversal outside projectRoot.
    const requestedPath = normalize(join(projectRoot, urlPath));
    if (!requestedPath.startsWith(projectRoot + sep) && requestedPath !== projectRoot) {
      res.writeHead(403).end("Forbidden");
      return;
    }

    let filePath = requestedPath;
    let s;
    try {
      s = await stat(filePath);
    } catch {
      res.writeHead(404).end(`Not found: ${urlPath}`);
      return;
    }
    if (s.isDirectory()) {
      filePath = join(filePath, "index.html");
      try {
        s = await stat(filePath);
      } catch {
        res.writeHead(404).end(`No index.html in ${urlPath}`);
        return;
      }
    }

    const data = await readFile(filePath);
    const type = MIME[extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": type,
      "Cache-Control": "no-store",
    });
    res.end(data);
  } catch (err) {
    console.error("[serve] error:", err);
    res.writeHead(500).end("Internal error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`\n  Dev server ready → http://${HOST}:${PORT}/dev/\n`);
});
