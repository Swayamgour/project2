# JJC Systems — Next.js (App Router)

Converted from the React + Vite + react-router app. SSG/ISR + SSR, per-page `generateMetadata()`.

## Setup
1. `npm install`
2. `cp .env.example .env.local`
3. Copy your Vite project's `public/` folder into `./public/` (hero images under `/assets/img/*`, `og-default.jpg`, favicon).
4. Put your global CSS in `src/app/globals.css` (it lived outside `src/` in the Vite app — index.html `<link>` / `public/`).
   Fonts, favicon and analytics tags from the old `index.html` go in `src/app/layout.jsx` (`<head>` block).
5. `npm run dev`  — or —  `npm run build && npm start`

Node >= 20.9.

## How it works
- `src/app/**/page.jsx` — one Server Component per route (37 routes, same URLs as the old `App.jsx`).
  - Static pages: `export const metadata = buildMetadata(...)` (title/description copied from the old `useDocumentMeta` calls).
  - `[slug]` pages: `generateMetadata()` reads `seo.metaTitle / metaDescription / keywords / canonicalUrl / ogImage` from the API,
    `generateStaticParams()` pre-builds known slugs at `next build`, other slugs are rendered on first request (ISR).
    Everything revalidates every 10 min (`export const revalidate = 600`).
  - API 404 → real HTTP 404 (`notFound()`).
- `src/views/**` — the old `pages/` components (renamed: `src/pages` is reserved by Next). Marked `"use client"`; logic unchanged.
- `src/components/PreloadApi.jsx` — seeds the RTK Query cache with the data the server already fetched, so views
  (which still call `useGetXxxQuery`) render real content in the HTML, with no loader flash and no duplicate request.
- `src/lib/endpoints.js` — API paths, shared by RTK Query (browser) and `fetchApi()` (server).
- `src/lib/seo.js` — `buildMetadata()` (replacement for `useDocumentMeta`: title, description, keywords, canonical, og:*, twitter:*).
- `src/lib/server-data.js` — `fetchApi()` + `assertUpstream()`. If the API is down at runtime, the page errors (5xx) instead of
  caching a half-empty page; ISR keeps serving the last good version. During `next build` an unreachable API never fails the build.
- `src/components/AppShell.jsx` — replaces `Layout.jsx` (internal-link interception, hash/top scrolling).
- `src/proxy.js` — `/about` → `/About`, `/featuredsuccess` → `/FeaturedSuccess` (react-router was case-insensitive, Next is not).

## Env
`NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL` (see `.env.example`). Both are inlined at build time.
