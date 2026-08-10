import { useRef, useState } from "react";
import usePageEffects from "../hooks/usePageEffects.js";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { contactInfo, locationIndia, locations, locationSuid } from "../config/data.js";
import { useCreateContactMutation } from "../redux/api.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ContactSection from "../components/ContactForm.jsx";

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

    heading: "Trusted technology experts are only a click away.",

    lede:
      "The first call is to understand your situation. Tell us what is slow, what is manual, and what keeps getting escalated — and we will tell you what we think. ",

    primaryCtaText: "Contact form",
    primaryCtaLink: "#form",

    secondaryCtaText: "Call 888-329-0625",
    secondaryCtaAnchor: "tel:+8883290625",

    glance: {
      title: "AT A GLANCE",

      items: [
        "One accountable partner across applications, infrastructure, security, and support",
        "Decades of combined experience across multiple industries",
        "An account manager as your single point of contact",
        "A global team working 24/7 across three regions",
        "Local presence for data residency and on-site requirements",
        "Ready-to-go industry solutions with an adoption path from day one"
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
          {/* <a href="#routes">Other routes</a> */}
          <a href="#where">Where we are</a>
          <a className="subnav-cta link-more" href="/contact">Contact us <svg><use href="#i-arrow-r" /></svg></a>
        </div>
      </nav>


      <ContactSection />



      {/* <div id="routes">
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
      </div> */}

      {/* <section className="section bg-paper" id="where">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Where we are</span> */}




      <section className="section bg-paper" id="americas">
        <div className="wrap">
          <div class="sec-head reveal">
            <span class="eyebrow">WHERE WE ARE</span>
            {/* <h2 class="h-sec wide">Sorted by most recent</h2> */}
            {/* <p class="lede">Filter by the platform, the service area or the industry you care about. Filters combine, so you can narrow to a single platform within a single sector.</p> */}
          </div>
          <div className="loc-region">
            <div className="loc-head reveal">
              <h3>United States</h3>
              <span>4 offices</span>
              <p>
                Client-facing consulting, project delivery and account
                leadership, with the service desk covering North American
                business hours and out-of-hours escalation.
              </p>
            </div>



            {/* </div> */}
            <div className="loc-grid">
              {locations?.map((e, index) => (
                <article className="loc reveal" key={index}>
                  <b>{e?.title}</b>
                  <span className="tz">{e?.timezone}</span>
                  <p>
                    {e?.address}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-mist" id="mea">
        <div className="wrap">
          <div className="loc-region">
            <div className="loc-head reveal">
              <h3>Middle East</h3>
              <span>2 offices</span>
              <p>
                Regional consulting and delivery for clients across the Gulf,
                with local presence for engagements where data residency,
                procurement rules or on-site working require it.
              </p>
            </div>
            <div className="loc-grid">
              {locationSuid?.map((e, index) => (
                <article className="loc reveal" key={index}>
                  <b>{e?.title}</b>
                  <span className="tz">{e?.timezone}</span>
                  <p>
                    {e?.address}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-paper" id="india">
        <div className="wrap">
          <div className="loc-region">
            <div className="loc-head reveal">
              <h3>India</h3>
              <span>2 offices</span>
              <p>
                Managed services and the overnight half of our follow-the-sun coverage—which is why incidents raised in the evening in the United States are resolved by the next morning.
              </p>
            </div>
            <div className="loc-grid">
              {locationIndia?.map((e, index) => (
                <article className="loc reveal" key={index}>
                  <b>{e?.title}</b>
                  <span className="tz">{e?.timezone}</span>
                  <p>
                    {e?.address}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* </div>
        </div>
      </section> */}
    </main>
  );
}