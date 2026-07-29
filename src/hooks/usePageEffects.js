import { useEffect } from "react";

const $ = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));

export default function usePageEffects(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    // ---------- Hero carousel (home page only) ----------
    const slides = $$(".slide", root);
    const dotsWrap = $("#dots", root);
    if (slides.length && dotsWrap) {
      let idx = 0, timer = null;
      const DELAY = 7000;
      dotsWrap.innerHTML = "";
      slides.forEach((s, i) => {
        const b = document.createElement("button");
        b.setAttribute("aria-label", "Go to slide " + (i + 1));
        b.setAttribute("aria-current", i === 0 ? "true" : "false");
        b.addEventListener("click", () => { go(i); restart(); });
        dotsWrap.appendChild(b);
      });
      const dots = Array.prototype.slice.call(dotsWrap.children);

      function go(n) {
        idx = (n + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle("active", i === idx));
        dots.forEach((d, i) => d.setAttribute("aria-current", i === idx ? "true" : "false"));
      }
      function next() { go(idx + 1); }
      function prev() { go(idx - 1); }
      function start() { if (!reduce) timer = setInterval(next, DELAY); }
      function stop() { clearInterval(timer); }
      function restart() { stop(); start(); }

      const nx = $("#next", root), pv = $("#prev", root);
      const onNext = () => { next(); restart(); };
      const onPrev = () => { prev(); restart(); };
      if (nx) nx.addEventListener("click", onNext);
      if (pv) pv.addEventListener("click", onPrev);

      const hero = $(".hero", root);
      let x0 = null;
      const onEnter = () => stop();
      const onLeave = () => start();
      const onKey = (e) => {
        if (e.key === "ArrowRight") { next(); restart(); }
        if (e.key === "ArrowLeft") { prev(); restart(); }
      };
      const onTouchStart = (e) => { x0 = e.touches[0].clientX; stop(); };
      const onTouchEnd = (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 50) (dx < 0 ? next() : prev());
        x0 = null; start();
      };
      const onVisibility = () => (document.hidden ? stop() : start());

      if (hero) {
        hero.addEventListener("mouseenter", onEnter);
        hero.addEventListener("mouseleave", onLeave);
        hero.addEventListener("focusin", onEnter);
        hero.addEventListener("focusout", onLeave);
        hero.addEventListener("keydown", onKey);
        hero.addEventListener("touchstart", onTouchStart, { passive: true });
        hero.addEventListener("touchend", onTouchEnd);
      }
      document.addEventListener("visibilitychange", onVisibility);
      start();

      cleanups.push(() => {
        stop();
        if (nx) nx.removeEventListener("click", onNext);
        if (pv) pv.removeEventListener("click", onPrev);
        if (hero) {
          hero.removeEventListener("mouseenter", onEnter);
          hero.removeEventListener("mouseleave", onLeave);
          hero.removeEventListener("focusin", onEnter);
          hero.removeEventListener("focusout", onLeave);
          hero.removeEventListener("keydown", onKey);
          hero.removeEventListener("touchstart", onTouchStart);
          hero.removeEventListener("touchend", onTouchEnd);
        }
        document.removeEventListener("visibilitychange", onVisibility);
      });
    }

    // ---------- Scroll reveal ----------
    const revealables = $$(".reveal", root);
    if ("IntersectionObserver" in window && !reduce && revealables.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
      revealables.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealables.forEach((el) => el.classList.add("in"));
    }

    // ---------- Service/industry page sub-nav scroll spy ----------
    const subnav = $(".svc-subnav", root);
    if (subnav) {
      const links = $$("a[href^='#']", subnav);
      const targets = links.map((a) => $(a.getAttribute("href"), root)).filter(Boolean);
      if (targets.length && "IntersectionObserver" in window) {
        const spy = new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            links.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
            });
          });
        }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
        targets.forEach((t) => spy.observe(t));
        cleanups.push(() => spy.disconnect());
      }
    }

    // ---------- Contact form (home page) ----------
    const form = $("#contactForm", root);
    const done = $("#formDone", root);
    if (form) {
      const validateField = (el) => {
        const field = el.closest(".field");
        if (!field) return el.checkValidity();
        const ok = el.checkValidity();
        field.classList.toggle("invalid", !ok);
        return ok;
      };

      const fieldListeners = [];
      $$("input, select, textarea", form).forEach((el) => {
        const onBlur = () => { if (el.value) validateField(el); };
        const onInput = () => {
          const f = el.closest(".field");
          if (f && f.classList.contains("invalid")) validateField(el);
        };
        el.addEventListener("blur", onBlur);
        el.addEventListener("input", onInput);
        fieldListeners.push([el, onBlur, onInput]);
      });

      let topic = new URLSearchParams(window.location.search).get("topic");
      if (!topic) {
        const h = window.location.hash;
        const q = h.indexOf("?");
        if (q > -1) topic = new URLSearchParams(h.slice(q)).get("topic");
      }
      const interest = $("#interest", form);
      if (topic && interest) {
        $$("option", interest).forEach((o) => {
          if (o.value === topic || o.textContent.trim() === topic) interest.value = o.value || o.textContent;
        });
      }

      const onSubmit = (e) => {
        e.preventDefault();
        let ok = true, first = null;
        $$("[required]", form).forEach((el) => {
          const valid = el.type === "checkbox" ? el.checked : validateField(el);
          if (el.type === "checkbox" && !valid) el.style.outline = "2px solid #D93025";
          if (!valid) { ok = false; if (!first) first = el; }
        });
        if (!ok) { if (first) first.focus(); return; }
        form.style.display = "none";
        if (done) {
          done.classList.add("show");
          done.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
        }
      };
      form.addEventListener("submit", onSubmit);

      cleanups.push(() => {
        fieldListeners.forEach(([el, onBlur, onInput]) => {
          el.removeEventListener("blur", onBlur);
          el.removeEventListener("input", onInput);
        });
        form.removeEventListener("submit", onSubmit);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
