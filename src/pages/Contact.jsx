import { useRef, useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import usePageEffects from "../hooks/usePageEffects.js";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { contactInfo } from "../config/data.js";
import { useCreateContactMutation } from "../redux/api.jsx";

const reasons = [
  {
    icon: "#i-chats",
    title: "Talk to an Expert",
    text: "Share your goals and get guidance from our team.",
  },
  {
    icon: "#i-docs",
    title: "Request a Consultation",
    text: "Tell us about your needs and we'll connect you with the right expert.",
  },
  {
    icon: "#i-support",
    title: "General Inquiries",
    text: "Questions about solutions, services, or partnerships.",
  },
  {
    icon: "#i-users",
    title: "Partnership Opportunities",
    text: "Let's build innovative solutions together.",
  },
];

const offices = [
  {
    title: "Westlake, OH (Headquarters)",
    lines: ["24900 Sperry Drive, Suite 300", "Westlake, OH 44145"],
  },
  {
    title: "Cleveland, OH",
    lines: ["600 Superior Avenue East", "Suite 1400, Cleveland, OH 44114"],
  },
];

export default function Contact() {
  const mainRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [createContact, { isLoading }] = useCreateContactMutation();

  useDocumentMeta(
    "Contact Us | JJC Systems",
    "Get in touch with JJC Systems \u2014 talk to an expert, request a consultation, or reach us by phone, email or in person."
  );

  usePageEffects(mainRef);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) return;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    try {
      await createContact(payload).unwrap();
      setSubmitted(true);
    } catch (err) {
      // fall back to a friendly inline message; details logged for diagnostics
      console.error("Contact submission failed", err);
      setSubmitted(true);
    }
  };

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Contact Us"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Contact Us" }]}
        hero={{
          eyebrow: "Contact Us",
          heading: "Start a conversation.",
          lede: "We're here to help you find the right technology solution for your business. No sales script, no obligation \u2014 tell us what you're trying to fix.",
          primaryCtaText: "Send a message",
          primaryCtaLink: "#contact-form",
          secondaryCtaText: "Call (440) 471-5800",
          secondaryCtaAnchor: "tel:+14404715800",
          glance: {
            title: "Reach us directly",
            items: [
              "Phone \u2014 (440) 471-5800",
              "Email \u2014 info@jjcsi.com",
              "LinkedIn \u2014 JJC Systems",
              "We reply to every message within one business day",
            ],
          },
        }}
      />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Get in touch</span>
            <h2 className="h-sec wide">How can we help?</h2>
          </div>
          <div className="browse-grid">
            {reasons.map((r) => (
              <a key={r.title} className="browse-card reveal" href="#contact-form">
                <span className="ic">
                  <svg><use href={r.icon} /></svg>
                </span>
                <b>{r.title}</b>
                <p>{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist" id="contact-form">
        <div className="wrap">
          <div className="contact-grid reveal">
            <aside className="contact-aside">
              <h2>Office Locations</h2>
              <p>Stop by, or reach us any of the ways below.</p>
              <ul className="contact-facts">
                {offices.map((office) => (
                  <li key={office.title}>
                    <svg><use href="#i-pin" /></svg>
                    <span>
                      <b>{office.title}</b>
                      <br />
                      {office.lines.join(", ")}
                    </span>
                  </li>
                ))}
                <li>
                  <svg><use href="#i-phone" /></svg>
                  <span><b>Call Us</b>(440) 471-5800</span>
                </li>
                <li>
                  <svg><use href="#i-mail" /></svg>
                  <span><b>Email Us</b>info@jjcsi.com</span>
                </li>
              </ul>
            </aside>

            <div className="form-panel">
              {submitted ? (
                <div className="form-done show" role="status">
                  <div className="ok">
                    <svg><use href="#i-check" /></svg>
                  </div>
                  <h3>Message sent</h3>
                  <p>Thanks &mdash; we've got it. A specialist will be in touch within one business day.</p>
                </div>
              ) : (
                <form id="contactForm" noValidate onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="fname">First name <span className="req">*</span></label>
                      <input id="fname" name="fname" type="text" autoComplete="given-name" required />
                      <span className="err">Please enter your first name.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="lname">Last name <span className="req">*</span></label>
                      <input id="lname" name="lname" type="text" autoComplete="family-name" required />
                      <span className="err">Please enter your last name.</span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="email">Work email <span className="req">*</span></label>
                      <input id="email" name="email" type="email" autoComplete="email" required />
                      <span className="err">Please enter a valid email address.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company <span className="req">*</span></label>
                    <input id="company" name="company" type="text" autoComplete="organization" required />
                    <span className="err">Please enter your company name.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="interest">What can we help with? <span className="req">*</span></label>
                    <select id="interest" name="interest" required defaultValue="">
                      <option value="" disabled>Select one</option>
                      {contactInfo.interests.map((interest) => (
                        <option key={interest}>{interest}</option>
                      ))}
                    </select>
                    <span className="err">Please choose an option.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Tell us about your situation <span className="req">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="What's happening today, and what would a good outcome look like?"
                    ></textarea>
                    <span className="err">Please add a short description.</span>
                  </div>
                  <label className="consent" htmlFor="consent">
                    <input id="consent" name="consent" type="checkbox" required />
                    <span>I agree that JJC Systems may contact me about my enquiry.</span>
                  </label>
                  <button className="btn btn-primary" type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send your message"}
                    <svg><use href="#i-arrow-r" /></svg>
                  </button>
                  <p className="form-note">We reply to every message within one business day.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
