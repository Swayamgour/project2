import { NextResponse } from "next/server";

// react-router matched paths case-insensitively; the App Router is case-sensitive.
// Keep old lowercase links/bookmarks working for the two routes that use capitals.
// (Done here with an exact-match check: `redirects()` in next.config is case-insensitive
//  and would redirect /About to itself in a loop.)
const CASE_FIXES = {
  "/about": "/About",
  "/featuredsuccess": "/FeaturedSuccess",
};

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const target = CASE_FIXES[pathname.toLowerCase()];

  if (target && pathname !== target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/about", "/featuredsuccess"],
};
