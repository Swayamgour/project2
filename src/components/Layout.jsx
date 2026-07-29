import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import IconSprite from "./IconSprite.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const wrapRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Intercept same-origin internal links anywhere in the tree (header, footer,
  // and page content) so navigation stays client-side (SPA) instead of a full reload.
  useEffect(() => {
    const container = wrapRef.current;
    if (!container) return;

    const onClick = (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return; // external / mailto / tel / bare "#anchor"
      if (a.target === "_blank") return;
      e.preventDefault();
      navigate(href);
    };

    container.addEventListener("click", onClick);
    return () => container.removeEventListener("click", onClick);
  }, [navigate]);

  // Scroll to the hash target after every navigation (home page sections).
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1).split("?")[0];
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div ref={wrapRef}>
      <IconSprite />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
