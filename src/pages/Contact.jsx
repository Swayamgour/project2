import { useRef, useState } from "react";
import usePageEffects from "../hooks/usePageEffects.js";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { contactInfo } from "../config/data.js";
import { useCreateContactMutation } from "../redux/api.jsx";
import HeroSection from "../components/HeroSection.jsx";

export default function Contact() {
  const mainRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
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

    setError("");
    const fd = new FormData(form);

    // Map frontend form fields to backend schema
    const payload = {
      fname: fd.get("fname"),
      lname: fd.get("lname"),
      email: fd.get("email"),
      phone: fd.get("phone") || "",
      company: fd.get("company"),
      jobTitle: fd.get("jobTitle") || "",
      leadType: fd.get("leadType") || "general",
      serviceArea: fd.get("serviceArea") || "",
      companySize: fd.get("companySize") || "",
      interestedIn: fd.get("interestedIn") || "",
      message: fd.get("message"),
      sourcePageType: "contact",
      sourcePageTitle: "Contact Us",
      consent: fd.get("consent") === "on",
    };

    try {
      await createContact(payload).unwrap();
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Contact submission failed", err);
      setError(err.data?.message || "There was an error submitting your message. Please try again.");
    }
  };

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Contact Us",
    },
  ];

  const hero = {
    eyebrow: "Contact Us",

    heading: "Start with a conversation, not a proposal",

    lede:
      "The first call is questions from us rather than slides from us. Tell us what is slow, what is manual and what keeps getting escalated — and we will tell you what we think, including when the answer is that you do not need us.",

    primaryCtaText: "Jump to the form",
    primaryCtaLink: "#form",

    secondaryCtaText: "Call 312-585-7555",
    secondaryCtaAnchor: "tel:+13125857555",

    glance: {
      title: "What to expect",

      items: [
        "A reply within one business day, from a specialist",
        "A 30-minute call that is mostly questions",
        "An honest view, including when we are not the right fit",
        "No obligation and no follow-up sales sequence",
      ],
    },
  };

  const pageData = {
    breadcrumbs,
    hero,
  };

  return (
    <main id="main" ref={mainRef}>

      <HeroSection
        hero={pageData.hero}
        breadcrumbs={pageData.breadcrumbs}
      />

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
                  {error && (
                    <div className="form-error" style={{ color: 'red', marginBottom: '1rem', padding: '0.75rem', background: '#fee', borderRadius: '4px' }}>
                      {error}
                    </div>
                  )}

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

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="company">Company <span className="req">*</span></label>
                      <input id="company" name="company" type="text" autoComplete="organization" required />
                      <span className="err">Please enter your company name.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="jobTitle">Job Title</label>
                      <input id="jobTitle" name="jobTitle" type="text" autoComplete="organization-title" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="leadType">What brings you here? <span className="req">*</span></label>
                      <select id="leadType" name="leadType" required defaultValue="">
                        <option value="">Select one</option>
                        <option value="consultation">Request a Consultation</option>
                        <option value="assessment">Request an Assessment</option>
                        <option value="expert">Talk to an Expert</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      <span className="err">Please choose an option.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="companySize">Organization size</label>
                      <select id="companySize" name="companySize" defaultValue="">
                        <option value="">Select one</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1,000 employees</option>
                        <option value="1000+">1,000+ people</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="serviceArea">Microsoft Service Area</label>
                    <select id="serviceArea" name="serviceArea" defaultValue="">
                      <option value="">Select one</option>
                      <option value="Microsoft 365">Microsoft 365</option>
                      <option value="Azure">Azure</option>
                      <option value="Dynamics 365">Dynamics 365</option>
                      <option value="Power Platform">Power Platform</option>
                      <option value="SharePoint">SharePoint</option>
                      <option value="Security">Security</option>
                      <option value="Business Central">Business Central</option>
                      <option value="Teams">Teams</option>
                      <option value="Not Sure">Not Sure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="interestedIn">What can we help with? <span className="req">*</span></label>
                    <select id="interestedIn" name="interestedIn" required defaultValue="">
                      <option value="">Select one</option>
                      <option value="Cloud Migration">Cloud Migration</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Security & Compliance">Security & Compliance</option>
                      <option value="Business Process Automation">Business Process Automation</option>
                      <option value="IT Strategy">IT Strategy</option>
                      <option value="Managed Services">Managed Services</option>
                      <option value="Training & Adoption">Training & Adoption</option>
                      <option value="Modern workplace & automation">Modern Workplace & Automation</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="err">Please choose an option.</span>
                  </div>

                  <div className="field">
                    <label htmlFor="message">Tell us about your situation <span className="req">*</span></label>
                    <textarea id="message" name="message" required placeholder="What is happening today, and what would a good outcome look like?"></textarea>
                    <span className="err">Please add a short description.</span>
                  </div>

                  <label className="consent" htmlFor="consent">
                    {/* <input id="consent" name="consent" type="checkbox" required /> */}
                    <input
                      id="footer-consent"
                      name="consent"
                      type="checkbox"
                      defaultChecked
                      required
                    />
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
              <a className="rpick" href="#form"><span className="ri"><svg><use href="#i-strategy" /></svg></span><b>Request a Consultation</b><p>You have a project, an RFP or a problem statement. Use the same form so we can route you to the right specialists.</p><span className="link-more">Go to this form <svg><use href="#i-arrow-r" /></svg></span></a>
              <a className="rpick" href="#form"><span className="ri"><svg><use href="#i-chats" /></svg></span><b>General Inquiries</b><p>Questions about our solutions, services or how we work &mdash; before you are ready to discuss a project.</p><span className="link-more">Go to this form <svg><use href="#i-arrow-r" /></svg></span></a>
              <a className="rpick" href="#form"><span className="ri"><svg><use href="#i-award" /></svg></span><b>Partnership Opportunities</b><p>Technology partners, referral partners and organizations who want to build something with us.</p><span className="link-more">Go to this form <svg><use href="#i-arrow-r" /></svg></span></a>
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