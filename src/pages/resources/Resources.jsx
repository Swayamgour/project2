import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";

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

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Resources",
    },
  ];

  const hero = {
    eyebrow: "Insights",

    heading: "Browse articles, guides and practical tools",

    lede:
      "Everything we publish, organized by the kind of resource you're looking for — or browse by topic if you already know the area.",

    primaryCtaText: "Talk to our team",
    primaryCtaLink: "/#contact",

    secondaryCtaText: "See upcoming events",
    secondaryCtaAnchor: "/resources/events",

    glance: {
      title: "What you'll find here",

      items: [
        "Blog articles, guides, checklists and whitepapers",
        "Organized by type and by topic",
        "Grounded in real client engagements",
        "New content added as the work produces something worth sharing",
      ],
    },
  };

  return (
    <main id="main" ref={mainRef}>

      <HeroSection
        hero={hero}
        breadcrumbs={breadcrumbs}
      />


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
