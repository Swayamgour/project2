import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const hdr = document.getElementById("hdr");
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    let onScroll;
    if (hdr) {
      onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    let onBurgerClick, onNavClick;
    if (burger && nav) {
      onBurgerClick = () => {
        const open = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", String(!open));
        burger.setAttribute("aria-label", open ? "Open menu" : "Close menu");
        nav.classList.toggle("open", !open);
      };
      onNavClick = (e) => {
        if (e.target.tagName === "A") {
          nav.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        }
      };
      burger.addEventListener("click", onBurgerClick);
      nav.addEventListener("click", onNavClick);
    }

    return () => {
      if (onScroll) window.removeEventListener("scroll", onScroll);
      if (burger && onBurgerClick) burger.removeEventListener("click", onBurgerClick);
      if (nav && onNavClick) nav.removeEventListener("click", onNavClick);
    };
  }, []);

  return (
    <header className="hdr" id="hdr"><div className="wrap"><a className="brand" href="/#top"><img className="brand-logo-mark" src="/assets/img/jjc-logo.png" alt="" /><span className="brand-name"><strong>JJC</strong><span>Systems</span></span></a><nav className="nav" id="nav" aria-label="Main"><a href="/industries">Industries</a><a href="/#solutions">Solutions</a><a href="/platforms">Platforms</a><a href="/services">Services</a><div className="has-mega"><a className="mega-toggle" href="/success">Client Success <svg viewbox="0 0 12 12" aria-hidden="true"><path d="M1.5 3.75 6 8.25l4.5-4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"></path></svg></a><div className="mega" role="group" aria-label="Client Success"><div className="mega-grid"><div className="mega-col"><div className="mega-head"><span className="ic"><svg><use href="#i-globe"></use></svg></span><b>Browse by industry</b></div><ul className="mega-list"><li><a href="/success/industry-healthcare">Healthcare</a></li><li><a href="/success/industry-legal">Legal</a></li><li><a href="/success/industry-financial-services">Financial Services</a></li><li><a href="/success/industry-public-sector">Public Sector</a></li><li><a href="/success/industry-education">Education</a></li><li><a href="/success/industry-manufacturing">Manufacturing</a></li><li><a href="/success/industry-retail-distribution">Retail & Distribution</a></li><li><a href="/success/industry-construction-field-services">Construction & Field Services</a></li><li><a href="/success/industry-professional-services">Professional Services</a></li><li><a href="/success/industry-small-mid-market">Small & Mid-Market Enterprises</a></li><li><a href="/success/industry-nonprofits-associations">Nonprofits & Associations</a></li></ul></div><div className="mega-col"><div className="mega-head"><span className="ic"><svg><use href="#i-grid"></use></svg></span><b>Browse by capability</b></div><ul className="mega-list"><li><a href="/success/capability-strategy-transformation">Strategy & Transformation</a></li><li><a href="/success/capability-managed-it-security">Managed IT & Security</a></li><li><a href="/success/capability-business-applications">Business Applications</a></li><li><a href="/success/capability-data-ai-integration">Data, AI & Integration</a></li><li><a href="/success/capability-modern-work-automation">Modern Work & Automation</a></li><li><a href="/success/capability-talent">Talent</a></li></ul></div><div className="mega-col mega-feature"><div className="mega-head"><span className="ic"><svg><use href="#i-star"></use></svg></span><b>Featured success story</b></div><div className="fimg"><svg><use href="#i-globe"></use></svg></div><h4>Forty siloed systems into one citizen record</h4><p>How a regional public-sector IT provider unified nearly 40 systems and resolved 30% of citizen cases at first contact within weeks.</p><a className="link-more" href="/success/featured">Read the story <svg><use href="#i-arrow-r"></use></svg></a></div><div className="mega-aside"><div className="ic"><svg><use href="#i-chart"></use></svg></div><h4>Proven results.<br />Practical expertise.</h4><p>We help organizations solve operational and technology challenges to drive measurable outcomes that matter.</p><a className="btn btn-primary" href="/success">View client success <svg><use href="#i-arrow-r"></use></svg></a></div><div className="mega-foot"><a href="/success"><span className="ic"><svg><use href="#i-docs"></use></svg></span><span><b>Explore all success stories</b><span>Browse outcomes across industries and capabilities</span></span></a><a href="/#contact"><span className="ic"><svg><use href="#i-users"></use></svg></span><span><b>Talk to our team</b><span>Let us walk you through similar projects</span></span></a></div></div></div></div><a href="/#insights">Insights</a><a href="/#contact">Contact</a></nav><button className="burger" id="burger" aria-expanded="false" aria-controls="nav" aria-label="Open menu"><span></span><span></span><span></span></button><a className="btn btn-primary" href="/#contact">Book a Consultation <svg><use href="#i-arrow-r"></use></svg></a></div></header>
  );
}
