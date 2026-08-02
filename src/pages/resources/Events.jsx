import { useRef } from "react";
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
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><a href="/resources">Resources</a><span>/</span><b>Events</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Insights</span>
              <h1>Upcoming and on-demand sessions</h1>
              <p className="lede">Webinars and educational content on the platforms and problems we work with every day.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="/#contact">Talk to our team <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/resources">Back to Resources <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>How to join</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Upcoming webinars are free to register for</span></li>
                <li><svg><use href="#i-check" /></svg><span>On-demand sessions are available any time</span></li>
                <li><svg><use href="#i-check" /></svg><span>All sessions run by our own specialists</span></li>
                <li><svg><use href="#i-check" /></svg><span>Recordings shared with registrants afterward</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>{events.length}</b><span>Sessions listed</span></div>
            <div className="svc-stat"><b>Free</b><span>To register</span></div>
            <div className="svc-stat"><b>On-demand</b><span>Watch any time</span></div>
            <div className="svc-stat"><b>1 day</b><span>We reply to every enquiry</span></div>
          </div>
        </div>
      </section>

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
