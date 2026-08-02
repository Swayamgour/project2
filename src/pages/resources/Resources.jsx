import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const resourceTypes = [
  { icon: "#i-docs", title: "Blog", text: "Practical articles on Microsoft platforms, security, data and AI.", path: "/blog" },
  { icon: "#i-project", title: "Guides", text: "Longer-form, step-by-step guidance on specific initiatives.", path: "/resources/guides" },
  { icon: "#i-check", title: "Checklists", text: "Quick, actionable checklists you can run against your own environment.", path: "/resources/checklists" },
  { icon: "#i-award", title: "Whitepapers", text: "In-depth papers on strategy, security and platform decisions.", path: "/resources/whitepapers" },
  { icon: "#i-users", title: "Events", text: "Webinars, sessions and educational content, upcoming and on-demand.", path: "/resources/events" },
];

const topics = [
  { slug: "ai", label: "Artificial Intelligence", icon: "#i-ai" },
  { slug: "cybersecurity", label: "Cybersecurity", icon: "#i-shield" },
  { slug: "microsoft-365", label: "Microsoft 365", icon: "#i-grid" },
  { slug: "dynamics-365", label: "Dynamics 365", icon: "#i-erp" },
  { slug: "data-analytics", label: "Data & Analytics", icon: "#i-chart" },
  { slug: "cloud-infrastructure", label: "Cloud & Infrastructure", icon: "#i-cloud" },
];

export default function Resources() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Resources | JJC Systems",
    "Browse articles, guides, checklists, whitepapers and events from JJC Systems, organized by topic and by type."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><b>Resources</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Insights</span>
              <h1>Browse articles, guides and practical tools</h1>
              <p className="lede">Everything we publish, organized by the kind of resource you're looking for &mdash; or browse by topic if you already know the area.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="/#contact">Talk to our team <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/resources/events">See upcoming events <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>What you'll find here</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Blog articles, guides, checklists and whitepapers</span></li>
                <li><svg><use href="#i-check" /></svg><span>Organized by type and by topic</span></li>
                <li><svg><use href="#i-check" /></svg><span>Grounded in real client engagements</span></li>
                <li><svg><use href="#i-check" /></svg><span>New content added as the work produces something worth sharing</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>5</b><span>Resource types</span></div>
            <div className="svc-stat"><b>6</b><span>Topics covered</span></div>
            <div className="svc-stat"><b>9</b><span>Platforms covered</span></div>
            <div className="svc-stat"><b>1 day</b><span>We reply to every enquiry</span></div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Browse by type</span>
            <h2 className="h-sec wide">What are you looking for?</h2>
          </div>
          <div className="browse-grid">
            {resourceTypes.map((r) => (
              <a key={r.path} className="browse-card reveal" href={r.path}>
                <span className="ic">
                  <svg><use href={r.icon} /></svg>
                </span>
                <b>{r.title}</b>
                <p>{r.text}</p>
                <span className="cnt">Explore &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Browse by topic</span>
            <h2 className="h-sec wide">Or start with the area you care about</h2>
          </div>
          <div className="browse-grid">
            {topics.map((t) => (
              <a key={t.slug} className="browse-card reveal" href={`/resources/topics/${t.slug}`}>
                <span className="ic">
                  <svg><use href={t.icon} /></svg>
                </span>
                <b>{t.label}</b>
                <p>Articles and resources tagged {t.label}.</p>
                <span className="cnt">View topic &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Can't find what you're looking for?</h2>
              <p>Tell us what you're trying to figure out and we'll point you in the right direction.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Talk to our team
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
