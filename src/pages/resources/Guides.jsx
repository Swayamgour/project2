import { useRef } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const guides = [
  { icon: "#i-modernize", title: "A Practical Guide to Microsoft 365 Migration", text: "Step-by-step planning for moving mailboxes, files and identity without disrupting the business." },
  { icon: "#i-shield", title: "Building a Realistic Cybersecurity Roadmap", text: "How to sequence identity, endpoint and data protection work when you can't do everything at once." },
  { icon: "#i-erp", title: "Getting Dynamics 365 Adoption Right", text: "Why rollout plans fail after go-live, and what to put in place before launch to prevent it." },
  { icon: "#i-chart", title: "Preparing Your Data Estate for AI", text: "The groundwork \u2014 governance, quality and access controls \u2014 that has to happen before Copilot or any AI layer." },
];

export default function Guides() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Guides | Resources | JJC Systems",
    "Longer-form, step-by-step guides on Microsoft 365, Dynamics 365, cybersecurity, and data & AI initiatives."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Guides"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Resources", link: "/resources" }, { label: "Guides" }]}
        hero={{
          eyebrow: "Insights",
          heading: "Step-by-step guides for bigger initiatives",
          lede: "Longer-form guidance for the projects that need more than a single article \u2014 written to be worked through, not just read.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Back to Resources",
          secondaryCtaLink: "/resources",
        }}
      />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Guides</span>
            <h2 className="h-sec wide">Start here for bigger projects</h2>
          </div>
          <div className="browse-grid">
            {guides.map((g) => (
              <a key={g.title} className="browse-card reveal" href="/contact">
                <span className="ic">
                  <svg><use href={g.icon} /></svg>
                </span>
                <b>{g.title}</b>
                <p>{g.text}</p>
                <span className="cnt">Request this guide &rarr;</span>
              </a>
            ))}
          </div>
          <div className="ph-note reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <svg><use href="#i-check" /></svg>
            <p>
              <b>Placeholder content:</b> these guide titles are illustrative. Connect this
              page to your CMS/backend to publish real downloadable guides and link each
              card to its own page or PDF.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
