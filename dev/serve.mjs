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
const HOST = process.env.HOST || "localhost";

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

function log(status, method, urlPath, extra = "") {
  const color =
    status >= 500
      ? "\x1b[31m"
      : status >= 400
        ? "\x1b[33m"
        : status >= 300
          ? "\x1b[36m"
          : "\x1b[32m";
  const reset = "\x1b[0m";
  const dim = "\x1b[2m";
  const time = new Date().toLocaleTimeString();
  process.stdout.write(
    `  ${dim}${time}${reset}  ${color}${status}${reset}  ${method.padEnd(4)}  ${urlPath}${extra ? `  ${dim}${extra}${reset}` : ""}\n`,
  );
}

const server = createServer(async (req, res) => {
  const method = req.method || "GET";
  const rawUrl = req.url || "/";
  let urlPath = "(unknown)";
  try {
    urlPath = decodeURIComponent(rawUrl.split("?")[0]);
    if (urlPath === "/") urlPath = "/dev/";

    // Resolve and prevent path traversal outside projectRoot.
    const requestedPath = normalize(join(projectRoot, urlPath));
    if (!requestedPath.startsWith(projectRoot + sep) && requestedPath !== projectRoot) {
      res.writeHead(403).end("Forbidden");
      log(403, method, urlPath, "outside project root");
      return;
    }

    let filePath = requestedPath;
    let s;
    try {
      s = await stat(filePath);
    } catch {
      res.writeHead(404).end(`Not found: ${urlPath}`);
      log(404, method, urlPath, `no such path: ${requestedPath}`);
      return;
    }
    if (s.isDirectory()) {
      filePath = join(filePath, "index.html");
      try {
        s = await stat(filePath);
      } catch {
        res.writeHead(404).end(`No index.html in ${urlPath}`);
        log(404, method, urlPath, `no index.html in ${requestedPath}`);
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
    log(200, method, urlPath, `${(data.length / 1024).toFixed(1)} KB`);
  } catch (err) {
    console.error("[serve] error handling", method, urlPath, err);
    res.writeHead(500).end("Internal error");
    log(500, method, urlPath, String(err));
  }
});

function printBanner() {
  const url = `http://${HOST}:${PORT}/dev/`;
  // ANSI: bold cyan for the URL so it pops in the terminal.
  // Most modern terminals render `http://...` URLs as Cmd+click links.
  const bold = "\x1b[1m";
  const cyan = "\x1b[36m";
  const dim = "\x1b[2m";
  const reset = "\x1b[0m";
  const line = "─".repeat(46);
  process.stdout.write(
    `\n${dim}${line}${reset}\n` +
      `  ${bold}Dev server ready${reset}\n` +
      `  → ${bold}${cyan}${url}${reset}\n` +
      `  ${dim}(Cmd+click in most terminals to open)${reset}\n` +
      `${dim}${line}${reset}\n\n`,
  );
}

server.listen(PORT, HOST, () => {
  printBanner();
  // Re-print after a moment so it lands BELOW any rollup --watch chatter
  // that fires concurrently when launched via `npm run dev`.
  setTimeout(printBanner, 1500);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `\nPort ${PORT} is already in use. Stop the other process or run with a different port:\n` +
        `  PORT=5174 npm run serve\n`,
    );
    process.exit(1);
  }
  throw err;
});
