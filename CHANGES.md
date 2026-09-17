# JJC Systems — Fixes Applied (per Simple Fix List, re-verified Sept 14 2026)

Source: this zip contained only the app's `src/` folder (no index.html,
vite.config.js, or package.json). Fixes below are everything addressable
within that scope. Two issues need root-level project files that weren't
included — see docs/SEO-FIX-SSR-PRERENDERING.md for a drop-in fix.

## Fixed directly in code

**Issue #5 — Homepage H1 didn't match target keywords**
`src/config/data.js` (heroSlides[0]): H1 changed from "Feeling overwhelmed
by the new AI wave?" to "Your Single Microsoft Partner for Managed IT,
Dynamics 365 & Azure." AI/Copilot messaging kept, moved to the eyebrow line
above the headline and folded into the supporting paragraph.

**Issue #6 — "managed IT services" missing near the top of the homepage**
`src/pages/Home.jsx`: added the exact phrase "managed IT services" into the
opening "Why JJC Systems" paragraph, next to the existing Dynamics 365 /
Azure / Microsoft 365 mentions.

**Issue #7 — Catchy headings with no real keywords**
`src/pages/Home.jsx`: added a small keyword label line above:
- "Navigate Change. Exceed Expectations." → now preceded by
  "Managed IT, Cloud & Microsoft Consulting Services"
- "Built on Dynamics 365. Measured in business outcomes." → now preceded by
  "Dynamics 365 Business Applications & Custom Software Development"

**Issue #8 — Office location labeled "Chicago, IL" but address is Rolling
Meadows, IL**
Fixed in all three places it appeared:
- `src/components/Header.jsx` (mega-menu "Office Locations")
- `src/config/data.js` → `contactInfo.contactDetails`
- `src/config/data.js` → `locations[0].city`
All now read "Rolling Meadows, IL" to match the street address. (The doc
also flags your Google Business Profile listing — that's outside this
codebase and still needs checking directly on Google.)

**Issue #3 — Sitemap / robots.txt**
Added `public/sitemap.xml` (auto-generated from `src/data/routes.json`,
124 URLs) and `public/robots.txt` pointing to it. Drop the `public/` folder
into your actual project root (Vite serves everything in `public/` at the
site root automatically) and submit the sitemap in Google Search Console.

## Needs root project files not included in this zip

**Issue #1 / #2 — Every page shows the same title to Google; no pages
indexed**
Confirmed root cause: every page component already sets a unique title via
`useDocumentMeta`, but that hook only runs client-side after React mounts
(`main.jsx` is a plain client-rendered `BrowserRouter` app, no SSR/prerender
step). Crawlers reading raw HTML see one static, identical title everywhere.
This can't be fixed by editing files inside `src/` — it needs a build-time
prerendering step added to `vite.config.js` at the project root.
Full instructions + ready code: `docs/SEO-FIX-SSR-PRERENDERING.md` and
`scripts/get-prerender-routes.mjs` (included here).

**Issue #4 — Page speed**
Can't be measured or fixed from source code alone; run
https://pagespeed.web.dev once Issue #1's prerendering ships (it should
improve this too, since content will paint before JS loads).
