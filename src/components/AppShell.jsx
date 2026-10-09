"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import IconSprite from "./IconSprite.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function scrollToHash(hash) {
  const id = hash.replace(/^#/, "").split("?")[0];
  if (!id) return false;
  const el = document.getElementById(decodeURIComponent(id));
  if (!el) return false;
  requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  return true;
}

/**
 * Client shell (replaces the old react-router <Layout />).
 *  - Intercepts same-origin internal <a href="/..."> clicks anywhere in the tree (CMS rich text,
 *    raw anchors, etc.) so they navigate client-side instead of doing a full reload.
 *  - Scrolls to the hash target (or to top) after every navigation.
 */
export default function AppShell({ children }) {
  const wrapRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const container = wrapRef.current;
    if (!container) return;

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return; // external / mailto / tel / bare "#anchor"
      if (a.target === "_blank" || a.hasAttribute("download")) return;

      e.preventDefault();
      router.push(href);

      // Same-page hash link (e.g. "/#contact" while already on "/"): pathname will not change,
      // so the pathname effect below will not fire — scroll here.
      const [pathPart, hashPart] = href.split("#");
      const cleanPath = pathPart.split("?")[0] || "/";
      if (hashPart && cleanPath === window.location.pathname) {
        scrollToHash(hashPart);
      }
    };

    container.addEventListener("click", onClick);
    return () => container.removeEventListener("click", onClick);
  }, [router]);

  // After every route change: scroll to #hash target, else back to top.
  useEffect(() => {
    const t = setTimeout(() => {
      if (window.location.hash) {
        if (!scrollToHash(window.location.hash)) window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div ref={wrapRef}>
      <IconSprite />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
