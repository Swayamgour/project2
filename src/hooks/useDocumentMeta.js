import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.jjcsystems.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

function setMetaByAttr(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMetaByAttr(attr, key) {
  const el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
}

// Stable string form of keywords so an array literal passed on every render
// doesn't retrigger the effect unnecessarily.
function keywordsToString(keywords) {
  return Array.isArray(keywords) ? keywords.join(", ") : keywords || "";
}

/**
 * Sets all the dynamic SEO tags for the current page.
 *
 * @param {string} title - page <title> / og:title / twitter:title
 * @param {string} description - meta description / og:description / twitter:description
 * @param {Object} [options]
 * @param {string[]|string} [options.keywords] - comma-separated string or array, rendered as <meta name="keywords">
 * @param {string} [options.canonicalUrl] - full canonical URL from the backend; falls back to the current route if omitted
 * @param {string} [options.ogImage] - absolute image URL for og:image / twitter:image; falls back to a site default
 */
export default function useDocumentMeta(title, description, options = {}) {
  const location = useLocation();

  const { keywords, canonicalUrl, ogImage } = options;

  const keywordsStr = keywordsToString(keywords);

  useEffect(() => {
    if (title) {
      document.title = title;

      setMetaByAttr("property", "og:title", title);
      setMetaByAttr("name", "twitter:title", title);
    }

    if (description) {
      setMetaByAttr("name", "description", description);
      setMetaByAttr("property", "og:description", description);
      setMetaByAttr("name", "twitter:description", description);
    }

    // Keywords
    if (keywordsStr) {
      setMetaByAttr("name", "keywords", keywordsStr);
    } else {
      removeMetaByAttr("name", "keywords");
    }

    // ==========================================
    // CANONICAL URL
    // ==========================================

    const cleanPath = location.pathname.replace(/\/+$/, "") || "/";

    let resolvedCanonical;

    if (canonicalUrl && canonicalUrl.trim()) {
      const trimmedUrl = canonicalUrl.trim();

      // If API already sends full URL
      if (
        trimmedUrl.startsWith("http://") ||
        trimmedUrl.startsWith("https://")
      ) {
        resolvedCanonical = trimmedUrl;
      } else {
        // API sends relative URL
        resolvedCanonical = `${SITE_URL}/${trimmedUrl.replace(
          /^\/+/,
          ""
        )}`;
      }
    } else {
      // No canonical URL from API → use current route
      resolvedCanonical = `${SITE_URL}${cleanPath}`;
    }

    // Create / Update Canonical Tag
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");

      canonical.setAttribute("rel", "canonical");

      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", resolvedCanonical);

    // OG URL
    setMetaByAttr("property", "og:url", resolvedCanonical);

    // ==========================================
    // OG / TWITTER IMAGE
    // ==========================================

    const resolvedImage = ogImage || DEFAULT_OG_IMAGE;

    setMetaByAttr("property", "og:image", resolvedImage);

    setMetaByAttr("name", "twitter:image", resolvedImage);

    setMetaByAttr(
      "name",
      "twitter:card",
      "summary_large_image"
    );

  }, [
    title,
    description,
    keywordsStr,
    canonicalUrl,
    ogImage,
    location.pathname,
  ]);
}
