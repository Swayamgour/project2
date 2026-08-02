import { useRef } from "react";
import usePageEffects from "../hooks/usePageEffects.js";
import useDocumentMeta from "../hooks/useDocumentMeta.js";

const actions = [
  { icon: "#i-support", title: "Open a Support Ticket", text: "Report an issue or request assistance from your account team.", path: "/why-us/open-a-ticket" },
  { icon: "#i-docs", title: "Onboarding Guide", text: "Review the onboarding steps and what's needed at each stage.", path: "/why-us/onboarding-guide" },
  { icon: "#i-chats", title: "Talk to Your Account Team", text: "Reach out directly for anything not covered by a ticket.", path: "/contact" },
];

export default function ClientPortal() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Client Portal | JJC Systems",
    "Access support, onboarding resources and your account team through the JJC Systems client portal."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><b>Client Portal</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">For Existing Clients</span>
              <h1>Client Portal</h1>
              <p className="lede">Sign in to track active work, review documentation, and reach your account team directly. Not signed in yet? Use the options below in the meantime.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="/why-us/open-a-ticket">Open a support ticket <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/contact">Talk to your account team <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>Not a client yet?</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>See how we work in Our Approach</span></li>
                <li><svg><use href="#i-check" /></svg><span>Read the Onboarding Guide for what to expect</span></li>
                <li><svg><use href="#i-check" /></svg><span>Or talk to our team to get started</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>24/7</b><span>Support coverage</span></div>
            <div className="svc-stat"><b>1 day</b><span>We reply to every message</span></div>
            <div className="svc-stat"><b>3</b><span>Named contacts per account</span></div>
            <div className="svc-stat"><b>6</b><span>Onboarding stages</span></div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Quick actions</span>
            <h2 className="h-sec wide">While portal sign-in is being set up for your account</h2>
          </div>
          <div className="browse-grid">
            {actions.map((a) => (
              <a key={a.title} className="browse-card reveal" href={a.path}>
                <span className="ic">
                  <svg><use href={a.icon} /></svg>
                </span>
                <b>{a.title}</b>
                <p>{a.text}</p>
                <span className="cnt">Go &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Need portal access set up?</h2>
              <p>Tell us your organization name and we'll get your account provisioned.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Request access
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <a className="btn btn-ghost" href="/why-us/faq">
                Read the FAQ
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
