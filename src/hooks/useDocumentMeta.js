import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.jjcsystems.com";

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

export default function useDocumentMeta(title, description) {
  const location = useLocation();

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

    // Keep the canonical tag and og:url pointed at the current route,
    // not always the homepage, to avoid duplicate-content issues.
    const canonicalUrl = `${SITE_URL}${location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "")}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
    setMetaByAttr("property", "og:url", canonicalUrl);
  }, [title, description, location.pathname]);
}
