import { useRef } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const steps = [
  {
    step: "01",
    title: "Kickoff call",
    description: "We introduce your named team lead and confirm scope, timeline and success measures together.",
  },
  {
    step: "02",
    title: "Access & environment review",
    description: "Secure access is set up and your current environment is reviewed against the agreed plan.",
  },
  {
    step: "03",
    title: "Working sessions",
    description: "Short, focused sessions with the people who'll actually use what we're building \u2014 not just stakeholders.",
  },
  {
    step: "04",
    title: "Go-live & handover",
    description: "A documented handover, training where needed, and a clear line to support from day one.",
  },
];

const checklist = [
  { tag: "Access", title: "Admin credentials or a temporary account", description: "Whatever the scope requires \u2014 we'll tell you exactly what to prepare before kickoff." },
  { tag: "People", title: "A point of contact on your side", description: "Someone who can make day-to-day decisions so work doesn't stall waiting on approvals." },
  { tag: "Context", title: "Any existing documentation", description: "Architecture diagrams, prior audits, or notes from previous vendors \u2014 helps us avoid repeating discovery." },
];

export default function OnboardingGuide() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Onboarding Guide | Why Us | JJC Systems",
    "What to expect after signing with JJC Systems \u2014 kickoff, access, working sessions and go-live."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Onboarding Guide"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Why Us" }, { label: "Onboarding Guide" }]}
        hero={{
          eyebrow: "Working With Us",
          heading: "What happens after you sign with us",
          lede: "A predictable start, so your team knows exactly what to expect and what to prepare before kickoff.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Read the FAQ",
          secondaryCtaLink: "/why-us/faq",
        }}
      />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The first few weeks</span>
            <h2 className="h-sec wide">From signature to go-live</h2>
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
            <span className="eyebrow">Before we start</span>
            <h2 className="h-sec wide">What's helpful to have ready</h2>
          </div>
          <div className="task-board">
            {checklist.map((item) => (
              <article className="task-row reveal" key={item.title}>
                <div className="task-head">
                  <span className="app-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Already a client and need support?</h2>
              <p>Open a ticket and it'll be routed straight to your account team.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/why-us/open-a-ticket">
                Open a support ticket
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <a className="btn btn-ghost" href="/client-portal">
                Go to Client Portal
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
