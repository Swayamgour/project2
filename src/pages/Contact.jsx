import { useRef, useState } from "react";
import usePageEffects from "../hooks/usePageEffects.js";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { contactInfo } from "../config/data.js";
import { useCreateContactMutation } from "../redux/api.jsx";

export default function Contact() {
  const mainRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [createContact, { isLoading }] = useCreateContactMutation();

  useDocumentMeta(
    "Contact Us | JJC Systems",
    "Get in touch with JJC Systems. Tell us what you are trying to fix and we will tell you honestly whether we are the right people for it."
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
      console.error("Contact submission failed", err);
      setSubmitted(true);
    }
  };

  return (
    <main id="main" ref={mainRef}>
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><b>Contact Us</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Contact Us</span>
              <h1>Start with a conversation, not a proposal</h1>
              <p className="lede">The first call is questions from us rather than slides from us. Tell us what is slow, what is manual and what keeps getting escalated &mdash; and we will tell you what we think, including when the answer is that you do not need us.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#form">Jump to the form <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="tel:+13125857555">Call 312-585-7555 <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>What to expect</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>A reply within one business day, from a specialist</span></li>
                <li><svg><use href="#i-check" /></svg><span>A 30-minute call that is mostly questions</span></li>
                <li><svg><use href="#i-check" /></svg><span>An honest view, including when we are not the right fit</span></li>
                <li><svg><use href="#i-check" /></svg><span>No obligation and no follow-up sales sequence</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>1 day</b><span>We reply to every message</span></div>
            <div className="svc-stat"><b>30 min</b><span>First call, no pitch deck</span></div>
            <div className="svc-stat"><b>24/7</b><span>Support coverage</span></div>
            <div className="svc-stat"><b>8</b><span>Offices across three regions</span></div>
          </div>
        </div>
      </section>

      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          <a href="#form">Get in touch</a>
          <a href="#routes">Other routes</a>
          <a href="#where">Where we are</a>
          <a className="subnav-cta link-more" href="/contact">Contact us <svg><use href="#i-arrow-r" /></svg></a>
        </div>
      </nav>

      <section className="section bg-paper" id="form">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Get in touch</span>
            <h2 className="h-sec wide">Tell us what you are trying to fix</h2>
            <p className="lede">No sales script and no obligation. Describe the situation in your own words and we will tell you honestly whether we are the right people for it &mdash; including when we are not.</p>
          </div>

          <div className="contact-grid reveal">
            <aside className="contact-aside">
              <h2>What happens next</h2>
              <p>Three steps, usually inside a week.</p>
              <ol className="next-steps">
                {contactInfo.steps.map((step, i) => (
                  <li key={i}><span className="ns-n">{i + 1}</span><p>{step}</p></li>
                ))}
              </ol>
              <ul className="contact-facts">
                <li><svg><use href="#i-mail" /></svg><span><b>General enquiries</b>hello@jjcsystems.com</span></li>
                <li><svg><use href="#i-phone" /></svg><span><b>Phone</b>312-585-7555</span></li>
                <li><svg><use href="#i-clock" /></svg><span><b>Support hours</b>24/7 global coverage</span></li>
                <li><svg><use href="#i-globe" /></svg><span><b>Offices</b>US, Saudi Arabia, UAE, India</span></li>
              </ul>
            </aside>

            <div className="form-panel">
              {submitted ? (
                <div className="form-done show" role="status">
                  <div className="ok"><svg><use href="#i-check" /></svg></div>
                  <h3>Message sent</h3>
                  <p>Thanks &mdash; we have got it. A specialist will be in touch within one business day.</p>
                </div>
              ) : (
                <form id="contactForm" noValidate onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="c_fname">First name <span className="req">*</span></label>
                      <input id="c_fname" name="fname" type="text" autoComplete="given-name" required />
                      <span className="err">Please enter your first name.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="c_lname">Last name <span className="req">*</span></label>
                      <input id="c_lname" name="lname" type="text" autoComplete="family-name" required />
                      <span className="err">Please enter your last name.</span>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="c_email">Work email <span className="req">*</span></label>
                      <input id="c_email" name="email" type="email" autoComplete="email" required />
                      <span className="err">Please enter a valid email address.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="c_phone">Phone</label>
                      <input id="c_phone" name="phone" type="tel" autoComplete="tel" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="c_company">Company <span className="req">*</span></label>
                      <input id="c_company" name="company" type="text" autoComplete="organization" required />
                      <span className="err">Please enter your company name.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="c_size">Organization size</label>
                      <select id="c_size" name="size" defaultValue="">
                        <option value="">Select one</option>
                        {contactInfo.organizationSizes.map((size) => (
                          <option key={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="interest">What can we help with? <span className="req">*</span></label>
                    <select id="interest" name="interest" required defaultValue="">
                      <option value="">Select one</option>
                      {contactInfo.interests.map((interest) => (
                        <option key={interest}>{interest}</option>
                      ))}
                    </select>
                    <span className="err">Please choose an option.</span>
                  </div>

                  <div className="field">
                    <label htmlFor="c_message">Tell us about your situation <span className="req">*</span></label>
                    <textarea id="c_message" name="message" required placeholder="What is happening today, and what would a good outcome look like?"></textarea>
                    <span className="err">Please add a short description.</span>
                  </div>

                  <label className="consent" htmlFor="c_consent">
                    <input id="c_consent" name="consent" type="checkbox" required />
                    <span>I agree that JJC Systems may contact me about my enquiry.</span>
                  </label>

                  <button className="btn btn-primary" type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send your message"} <svg><use href="#i-arrow-r" /></svg>
                  </button>
                  <p className="form-note">We reply to every message within one business day.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <div id="routes">
        <section className="section bg-mist">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Choose the right route</span>
              <h2 className="h-sec wide">Four ways to reach us, and which one to use</h2>
              <p className="lede">All of them reach a person within one business day. Picking the closest match just means fewer clarifying emails before we can be useful.</p>
            </div>
            <div className="route-pick">
              <a className="rpick is-here" href="/contact"><span className="ri"><svg><use href="#i-mail" /></svg></span><b>Contact Us</b><p>A short form for anything at all. If you are not sure where your question belongs, start here.</p><span className="here-tag">You are here</span></a>
              <a className="rpick" href="/contact#form"><span className="ri"><svg><use href="#i-strategy" /></svg></span><b>Request a Consultation</b><p>You have a project, an RFP or a problem statement. Use the same form so we can route you to the right specialists.</p><span className="link-more">Go to this form <svg><use href="#i-arrow-r" /></svg></span></a>
              <a className="rpick" href="/contact#form"><span className="ri"><svg><use href="#i-chats" /></svg></span><b>General Inquiries</b><p>Questions about our solutions, services or how we work &mdash; before you are ready to discuss a project.</p><span className="link-more">Go to this form <svg><use href="#i-arrow-r" /></svg></span></a>
              <a className="rpick" href="/contact#form"><span className="ri"><svg><use href="#i-award" /></svg></span><b>Partnership Opportunities</b><p>Technology partners, referral partners and organizations who want to build something with us.</p><span className="link-more">Go to this form <svg><use href="#i-arrow-r" /></svg></span></a>
            </div>
          </div>
        </section>
      </div>

      <section className="section bg-paper" id="where">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Where we are</span>
            <h2 className="h-sec wide">Eight offices, three regions</h2>
            <p className="lede">Four locations across the United States, one in Saudi Arabia, one in the United Arab Emirates and two in India &mdash; which is what makes 24/7 mean somebody is at their desk rather than reachable by phone.</p>
          </div>
          <div className="rel-grid">
            <a className="rel reveal" href="/company/locations"><span className="rel-icon"><svg><use href="#i-pin" /></svg></span><span><b>See all locations</b><span>Offices, timezones and how coverage works</span></span></a>
            <a className="rel reveal" href="/why-us/open-a-ticket"><span className="rel-icon"><svg><use href="#i-support" /></svg></span><span><b>Existing client with an issue?</b><span>Open a support ticket, or call 312-585-7555 option 1</span></span></a>
            <a className="rel reveal" href="/why-us/faq"><span className="rel-icon"><svg><use href="#i-docs" /></svg></span><span><b>Read the FAQ first</b><span>33 questions answered plainly, including the awkward ones</span></span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
