// scripts/get-prerender-routes.mjs
//
// Reads src/data/routes.json (already in this project, used to build the
// React Router routes) and turns it into a flat list of URL paths that a
// prerenderer / static-site crawler should visit.
//
// Used by vite.config.js — see docs/SEO-FIX-SSR-PRERENDERING.md for why
// this exists and how it plugs in.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function getPrerenderRoutes() {
  const raw = readFileSync(
    join(__dirname, "../src/data/routes.json"),
    "utf-8"
  );
  const routes = JSON.parse(raw);

  // De-dupe (routes.json can list the same path more than once) and make
  // sure "/" is always included.
  const paths = new Set(["/"]);
  for (const r of routes) {
    if (r.route) paths.add(r.route);
  }

  return Array.from(paths);
}
