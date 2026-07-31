import { useRef } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const events = [
  { icon: "#i-ai", title: "Preparing Your Organization for Copilot", when: "Upcoming webinar", text: "Planning, governance and user readiness before rolling out Microsoft Copilot." },
  { icon: "#i-shield", title: "Cybersecurity Trends for Mid-Market Organizations", when: "On-demand", text: "A recorded session on the threats most relevant to organizations your size." },
  { icon: "#i-erp", title: "Dynamics 365 Roadmap Session", when: "Upcoming webinar", text: "What's new across Business Applications and what it means for existing deployments." },
];

export default function Events() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Events | Resources | JJC Systems",
    "Upcoming webinars and on-demand sessions from JJC Systems."
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Events"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Resources", link: "/resources" }, { label: "Events" }]}
        hero={{
          eyebrow: "Insights",
          heading: "Upcoming and on-demand sessions",
          lede: "Webinars and educational content on the platforms and problems we work with every day.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Back to Resources",
          secondaryCtaLink: "/resources",
        }}
      />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Events</span>
            <h2 className="h-sec wide">Register or watch on demand</h2>
          </div>
          <div className="browse-grid">
            {events.map((e) => (
              <a key={e.title} className="browse-card reveal" href="/contact">
                <span className="ic">
                  <svg><use href={e.icon} /></svg>
                </span>
                <b>{e.title}</b>
                <p>{e.text}</p>
                <span className="cnt">{e.when} &rarr;</span>
              </a>
            ))}
          </div>
          <div className="ph-note reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <svg><use href="#i-check" /></svg>
            <p>
              <b>Placeholder content:</b> these event titles are illustrative. Connect this
              page to your CMS/backend or event platform to publish real dates and
              registration links.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
