# JJC Systems — React Conversion (proper JSX, one component per page)

Every one of the 124 original pages is now a real React component with actual
JSX markup — no `dangerouslySetInnerHTML`, no raw-HTML injection.

## Structure
- `src/main.jsx` — app entry
- `src/App.jsx` — React Router route table, one explicit `<Route>` + import per page (generated from `src/data/routes.json`, which just records the route→component→file mapping)
- `src/components/Layout.jsx` — persistent shell: icon sprite + header + `<Outlet/>` + footer, SPA link interception, hash-scroll on navigation
- `src/components/Header.jsx`, `Footer.jsx` — real JSX components (converted from the original markup), each with their own small `useEffect` for scroll state / mobile menu / year
- `src/components/IconSprite.jsx` — the shared SVG `<symbol>` sprite, mounted once
- `src/hooks/usePageEffects.js` — re-implements the page-level parts of the original `site.js` (hero carousel, scroll-reveal, sub-nav scroll-spy, contact form validation) as a React hook every page calls
- `src/hooks/useDocumentMeta.js` — sets `document.title` / meta description per page
- `src/pages/**/*.jsx` — **124 real page components** (e.g. `src/pages/industries/IndustriesHealthcare.jsx`), each with genuine JSX (`className`, `strokeWidth`, `style={{...}}` objects, etc.) matching the original markup 1:1
- `public/assets/` — original images + `site.css`, unchanged

Internal links were rewritten from the old relative file paths
(`../industries/healthcare.html`) to router paths (`/industries/healthcare`).

## Run it
```
npm install
npm run dev
```

## Build for production
```
npm run build
npm run preview
```

## Notes
- HTML → JSX conversion handled attribute renaming (`class`→`className`, `for`→`htmlFor`,
  `stroke-width`→`strokeWidth`, inline `style="..."` → `style={{...}}` objects, boolean
  attributes like `required`/`novalidate`, etc.) and escaped stray `<`/`>`/`{`/`}` in text.
- `assets/css/site.css` is loaded globally exactly as before — no CSS changes were made.
- The client-logo placeholder (`logos/name.svg`) was already broken in the original static
  site (no such asset existed in the zip) — left as-is.
