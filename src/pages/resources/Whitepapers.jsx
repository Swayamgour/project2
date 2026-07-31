import { useRef } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const whitepapers = [
  { icon: "#i-strategy", title: "The Case for Consolidating IT Vendors", text: "What fragmented vendor relationships actually cost organizations, in time and in risk." },
  { icon: "#i-shield", title: "Zero Trust in Practice, Not Just in Theory", text: "A realistic rollout sequence for organizations that can't do a green-field security rebuild." },
  { icon: "#i-chart", title: "Data Governance Before AI Adoption", text: "Why AI initiatives stall, and the governance work that has to come first." },
];

export default function Whitepapers() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Whitepapers | Resources | JJC Systems",
    "In-depth whitepapers on IT strategy, security and data governance from JJC Systems."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Whitepapers"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Resources", link: "/resources" }, { label: "Whitepapers" }]}
        hero={{
          eyebrow: "Insights",
          heading: "In-depth papers on strategy and platform decisions",
          lede: "For when a blog post isn't enough \u2014 longer research and analysis behind the recommendations we make.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Back to Resources",
          secondaryCtaLink: "/resources",
        }}
      />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Whitepapers</span>
            <h2 className="h-sec wide">Research behind the recommendations</h2>
          </div>
          <div className="browse-grid">
            {whitepapers.map((w) => (
              <a key={w.title} className="browse-card reveal" href="/contact">
                <span className="ic">
                  <svg><use href={w.icon} /></svg>
                </span>
                <b>{w.title}</b>
                <p>{w.text}</p>
                <span className="cnt">Request a copy &rarr;</span>
              </a>
            ))}
          </div>
          <div className="ph-note reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <svg><use href="#i-check" /></svg>
            <p>
              <b>Placeholder content:</b> these whitepaper titles are illustrative. Connect
              this page to your CMS/backend to publish real downloadable PDFs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
