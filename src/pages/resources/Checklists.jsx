import { useRef } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const checklists = [
  { icon: "#i-shield", title: "Cybersecurity Readiness Checklist", text: "20 questions to gauge how exposed your organization actually is right now." },
  { icon: "#i-cloud", title: "Cloud Migration Pre-Flight Checklist", text: "What to confirm before moving a single workload to Azure." },
  { icon: "#i-grid", title: "Microsoft 365 Governance Checklist", text: "The settings and policies most organizations forget to configure." },
  { icon: "#i-erp", title: "Dynamics 365 Go-Live Checklist", text: "The last-mile items that decide whether launch day goes smoothly." },
];

export default function Checklists() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Checklists | Resources | JJC Systems",
    "Quick, actionable checklists for cybersecurity, cloud migration, Microsoft 365 governance and Dynamics 365 go-live."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Checklists"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Resources", link: "/resources" }, { label: "Checklists" }]}
        hero={{
          eyebrow: "Insights",
          heading: "Quick checklists you can run today",
          lede: "No sign-up walls \u2014 short, practical checklists you can hold your own environment up against right now.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Back to Resources",
          secondaryCtaLink: "/resources",
        }}
      />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Checklists</span>
            <h2 className="h-sec wide">Pick the one that matches your situation</h2>
          </div>
          <div className="browse-grid">
            {checklists.map((c) => (
              <a key={c.title} className="browse-card reveal" href="/contact">
                <span className="ic">
                  <svg><use href={c.icon} /></svg>
                </span>
                <b>{c.title}</b>
                <p>{c.text}</p>
                <span className="cnt">Get the checklist &rarr;</span>
              </a>
            ))}
          </div>
          <div className="ph-note reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <svg><use href="#i-check" /></svg>
            <p>
              <b>Placeholder content:</b> these checklist titles are illustrative. Connect
              this page to your CMS/backend to publish the real checklists as downloads or
              individual pages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
