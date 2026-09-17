# Fixing Issue #1 & #2: identical titles / pages not indexed

## Why this can't be fixed inside `src/` alone

This zip only contains the app's `src/` folder. It does **not** contain
`index.html`, `vite.config.js`, or `package.json` — the files that live at
the project root and control how the site is actually built and served.

I confirmed the root cause by reading the code:

- Every page **already** calls `useDocumentMeta(title, description, ...)`
  with a unique title/description (see `Home.jsx`, `IndustriesHealthcare.jsx`,
  `ServicesItStrategyConsulting.jsx`, etc.) — so the React components are not
  the bug.
- `useDocumentMeta` (in `src/hooks/useDocumentMeta.js`) sets `document.title`
  and the meta tags inside a `useEffect`, which only runs **after** React has
  mounted in the browser.
- `main.jsx` mounts the app client-side only (`ReactDOM.createRoot(...).render(...)`
  inside a `BrowserRouter`) — there is no server-side rendering and no
  prerendering step.

So every route is served the same static `index.html`, with the same
default `<title>` and `<meta>` tags, and the per-page title only appears
once JavaScript finishes running. A crawler (or any tool) that reads the raw
HTML — which is exactly what Search Console/Googlebot's initial crawl and
most SEO checkers do — sees identical titles on every page, and this is
also very likely why Google isn't indexing individual pages (Issue #2).

**This can only be fixed by changing the root-level build/serve setup**,
which isn't part of this zip. Below is a ready-to-drop-in fix your developer
can add to the actual project repo.

## The fix: prerender every route at build time

Add a prerendering step so each route gets its own static HTML file with the
correct `<title>`/`<meta>` baked in *before* any JavaScript runs. This keeps
your existing React app and `BrowserRouter` exactly as they are — no rewrite
to Next.js or a server needed.

1. Install the plugin (in the real project root, not this zip):
   ```bash
   npm install -D vite-plugin-prerender
   ```

2. In the project's `vite.config.js`, add:
   ```js
   import prerender from "vite-plugin-prerender";
   import { getPrerenderRoutes } from "./scripts/get-prerender-routes.mjs";

   export default {
     // ...existing config
     plugins: [
       // ...existing plugins (react(), etc.)
       prerender({
         staticDir: "dist",
         routes: getPrerenderRoutes(), // pulled from src/data/routes.json
       }),
     ],
   };
   ```
   `scripts/get-prerender-routes.mjs` (included in this zip) reads the same
   `routes.json` the app already uses for routing, so the prerender list
   always matches the live route list — nobody has to maintain it by hand.

3. Run `npm run build`. The plugin launches a headless browser, visits each
   route, waits for React (and `useDocumentMeta`) to finish, and writes a
   static `<route>/index.html` snapshot with the real title/description/canonical
   already in the markup. `BrowserRouter` still takes over for normal
   in-app navigation once JS loads — this only changes what a crawler sees
   on first load.

4. Deploy `dist/` as usual. Confirm the fix by viewing page source (not
   dev tools' Elements panel, which shows the *rendered* DOM) on a couple
   of pages — you should now see a unique `<title>` per page in the raw HTML.

## After this ships

- Re-check Issue #2 in Google Search Console → Pages report; indexing
  should start picking up once Google recrawls with unique, server-delivered
  titles.
- Issue #4 (page speed) is also connected — prerendering means the browser
  can paint real content immediately instead of waiting on JS, which
  usually improves Core Web Vitals too.
