import { useRef, useState } from "react";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useCreateContactMutation } from "../../redux/api.jsx";

export default function OpenTicket() {
  const mainRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [createContact, { isLoading }] = useCreateContactMutation();

  useDocumentMeta(
    "Open a Support Ticket | Why Us | JJC Systems",
    "Existing JJC Systems clients can open a support ticket here \u2014 routed directly to your account team."
  );
  usePageEffects(mainRef);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) return;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    try {
      await createContact({ ...payload, type: "support-ticket" }).unwrap();
      setSubmitted(true);
    } catch (err) {
      console.error("Ticket submission failed", err);
      setSubmitted(true);
    }
  };

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Open a Support Ticket"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Why Us" }, { label: "Open a Ticket" }]}
        hero={{
          eyebrow: "Working With Us",
          heading: "Open a support ticket",
          lede: "For existing clients. Describe the issue and it will be routed directly to your account team.",
          primaryCtaText: "Submit below",
          primaryCtaLink: "#ticket-form",
          secondaryCtaText: "Go to Client Portal",
          secondaryCtaLink: "/client-portal",
          glance: {
            title: "Before you submit",
            items: [
              "Include your organization name and any error details",
              "Urgent, business-impacting issues: call (440) 471-5800",
              "We reply to every message within one business day",
            ],
          },
        }}
      />

      <section className="section bg-paper" id="ticket-form">
        <div className="wrap" style={{ maxWidth: "700px" }}>
          <div className="form-panel">
            {submitted ? (
              <div className="form-done show" role="status">
                <div className="ok">
                  <svg><use href="#i-check" /></svg>
                </div>
                <h3>Ticket submitted</h3>
                <p>Your account team has been notified and will follow up shortly.</p>
              </div>
            ) : (
              <form id="ticketForm" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="fname">Your name <span className="req">*</span></label>
                    <input id="fname" name="fname" type="text" autoComplete="name" required />
                    <span className="err">Please enter your name.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="email">Work email <span className="req">*</span></label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                    <span className="err">Please enter a valid email address.</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="company">Company <span className="req">*</span></label>
                    <input id="company" name="company" type="text" autoComplete="organization" required />
                    <span className="err">Please enter your company name.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" name="priority" defaultValue="Normal">
                      <option>Low</option>
                      <option>Normal</option>
                      <option>High</option>
                      <option>Business-impacting</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">Describe the issue <span className="req">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="What's happening, when did it start, and who is affected?"
                  ></textarea>
                  <span className="err">Please describe the issue.</span>
                </div>
                <button className="btn btn-primary" type="submit" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit ticket"}
                  <svg><use href="#i-arrow-r" /></svg>
                </button>
                <p className="form-note">We reply to every message within one business day.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
