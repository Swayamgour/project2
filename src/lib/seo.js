import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "./site";

function absolute(url) {
  const u = String(url).trim();
  if (/^https?:\/\//i.test(u)) return u;
  return `${SITE_URL}/${u.replace(/^\/+/, "")}`;
}

/**
 * Server-side replacement for the old useDocumentMeta() hook.
 * Same inputs, returns a Next.js Metadata object for generateMetadata() / `export const metadata`.
 *
 *   buildMetadata(title, description, { keywords, canonicalUrl, ogImage }, { path })
 */
export function buildMetadata(title, description, options = {}, { path = "/" } = {}) {
  const { keywords, canonicalUrl, ogImage } = options || {};

  const cleanPath = path.replace(/\/+$/, "") || "/";
  const canonical =
    canonicalUrl && String(canonicalUrl).trim()
      ? absolute(canonicalUrl)
      : `${SITE_URL}${cleanPath}`;

  const image = ogImage ? absolute(ogImage) : DEFAULT_OG_IMAGE;
  const kw = Array.isArray(keywords) ? keywords.join(", ") : keywords || undefined;

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(kw ? { keywords: kw } : {}),
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: canonical,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images: [image],
    },
  };
}
