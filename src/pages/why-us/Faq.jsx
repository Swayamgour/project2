import { useRef } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const faqs = [
  {
    tag: "Q1",
    q: "How is JJC Systems different from other Microsoft partners?",
    a: "Everything is delivered by one accountable firm under one agreement \u2014 strategy, implementation and ongoing support \u2014 rather than being split across multiple vendors who each own a fragment of the problem.",
  },
  {
    tag: "Q2",
    q: "Do we have to commit to a large programme to start?",
    a: "No. Every service is scoped individually. Many engagements start as a single, clearly bounded project.",
  },
  {
    tag: "Q3",
    q: "What industries do you typically work with?",
    a: "Healthcare, legal, financial services, public sector, education, manufacturing, retail & distribution, construction & field services, professional services, and small-to-mid market enterprises, among others.",
  },
  {
    tag: "Q4",
    q: "How quickly do you respond to a new enquiry?",
    a: "We reply to every message within one business day, and support requests from existing clients are routed to your account team directly.",
  },
  {
    tag: "Q5",
    q: "Can you work alongside our existing IT team or vendors?",
    a: "Yes \u2014 many engagements are scoped specifically to complement an internal team or an existing vendor relationship rather than replace it.",
  },
];

export default function Faq() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Frequently Asked Questions | Why Us | JJC Systems",
    "Answers to common questions about working with JJC Systems."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Why Us" }, { label: "FAQ" }]}
        hero={{
          eyebrow: "Working With Us",
          heading: "Frequently Asked Questions",
          lede: "Quick answers to the questions we hear most often. Don't see yours? Just ask.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Open a support ticket",
          secondaryCtaLink: "/why-us/open-a-ticket",
        }}
      />

      <section className="section bg-paper">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <div className="task-board">
            {faqs.map((item) => (
              <article className="task-row reveal" key={item.tag}>
                <div className="task-head">
                  <span className="app-tag">{item.tag}</span>
                  <h3>{item.q}</h3>
                </div>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Still have a question?</h2>
              <p>Send it to us directly and we'll answer honestly, even if the answer is "that's not something we do."</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Ask us directly
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <a className="btn btn-ghost" href="/why-us/our-approach">
                See our approach
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
