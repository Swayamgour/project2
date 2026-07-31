import { useRef } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We spend time understanding how your organization actually operates before proposing anything \u2014 not a generic assessment template.",
  },
  {
    step: "02",
    title: "Recommendation",
    description: "A written, costed plan with clear scope, sequencing and the tradeoffs we considered along the way.",
  },
  {
    step: "03",
    title: "Delivery",
    description: "Work happens in phases you can see progress on, with a named lead who is accountable for the outcome, not just the task list.",
  },
  {
    step: "04",
    title: "Support",
    description: "Once live, we stay accountable for how it performs \u2014 support and optimization don't stop at go-live.",
  },
];

const principles = [
  {
    icon: "#i-target",
    title: "Scoped individually",
    text: "You are never asked to buy a bundle to get the one service you need.",
  },
  {
    icon: "#i-chats",
    title: "Plain-language recommendations",
    text: "If something isn't worth doing, we say so \u2014 even if it costs us the engagement.",
  },
  {
    icon: "#i-shield",
    title: "Accountability that doesn't dilute",
    text: "One firm, one agreement, and people who talk to each other \u2014 nothing falls between two vendors.",
  },
];

export default function OurApproach() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Our Approach | Why Us | JJC Systems",
    "How JJC Systems guides projects from discovery through delivery and ongoing support."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Our Approach"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Why Us" }, { label: "Our Approach" }]}
        hero={{
          eyebrow: "Working With Us",
          heading: "How we guide projects from discovery to delivery",
          lede: "A consistent process, applied to every engagement regardless of size \u2014 so you always know what happens next and who is accountable for it.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "See our onboarding guide",
          secondaryCtaLink: "/why-us/onboarding-guide",
        }}
      />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The process</span>
            <h2 className="h-sec wide">Four stages, every time</h2>
            <p className="lede">
              The same structure whether the engagement is a single service or a
              multi-year programme.
            </p>
          </div>
          <div className="process reveal">
            {steps.map((s) => (
              <div className="step" key={s.step}>
                <span className="step-n">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Guiding principles</span>
            <h2 className="h-sec wide">What stays constant across every engagement</h2>
          </div>
          <div className="pillar-grid">
            {principles.map((p) => (
              <article className="pillar reveal" key={p.title}>
                <div className="icon-tile">
                  <svg><use href={p.icon} /></svg>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Ready to see how this applies to your situation?</h2>
              <p>Tell us where things stand today and we'll map the stages above to your specific project.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Talk to our team
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <a className="btn btn-ghost" href="/why-us/onboarding-guide">
                See the onboarding guide
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
