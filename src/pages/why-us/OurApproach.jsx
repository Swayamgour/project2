import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";

export default function OurApproach() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Our Approach | JJC Systems",
    "How we work: listen first, prove the solution before you buy it, agree fixed pricing, then implement, configure, secure, train and support."
  );
  usePageEffects(mainRef);

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Our Approach",
    },
  ];

  const hero = {
    eyebrow: "Our Approach",

    heading: "We start by asking questions",

    lede:
      "A good first call is one where you do seventy per cent of the talking. Everything else we do — the proofs of concept, the fixed pricing, the delivery model we recommend — depends on having genuinely understood the problem first, which is harder and less impressive than presenting a solution.",

    primaryCtaText: "Start a conversation",
    primaryCtaLink: "/#contact",

    secondaryCtaText: "See the onboarding guide",
    secondaryCtaAnchor: "/why-us/onboarding-guide",

    glance: {
      title: "What to expect",

      items: [
        "A first conversation that is mostly questions",
        "Structured requirements-gathering built from decades of engagements",
        "A working proof of concept before any commercial discussion",
        "Pricing and timeline agreed only once the solution satisfies you",
        "Seven delivery models",
      ],
    },
  };

  return (
    <main id="main" ref={mainRef}>

      <HeroSection
        hero={hero}
        breadcrumbs={breadcrumbs}
      />

      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          <a href="#listen">We listen first</a>
          <a href="#prove">We prove it</a>
          <a href="#agree">We agree the terms</a>
          <a href="#deliver">We deliver</a>
          <a href="#models">Delivery models</a>
          <a href="#working">How we work</a>
          <a href="#culture">What we bring</a>
          <a className="subnav-cta link-more" href="/#contact">Talk to us <svg><use href="#i-arrow-r" /></svg></a>
        </div>
      </nav>


      <section className="section bg-paper" id="listen">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">We listen first</span>
            <h2 className="h-sec wide"> On the first call, you answer, and we ask questions. </h2>
            <p className="lede">We prioritize identifying current challenges, including areas that are slow or require manual effort. </p>
          </div>

          <div className="seg-grid">
            <article className="seg reveal">
              <h3>We ask, then we listen</h3>
              <p>The first meeting is questions. What is slow, what is manual, what keeps being escalated, what did you try before and why did it not stick. We take notes.

              </p>
            </article>
            <article className="seg reveal">
              <h3>Our questions are carefully developed</h3>
              <p>We have built structured requirements-gathering question sets from decades of engagements across multiple industries. They exist because we have learned which questions expose the real constraints and challenges.</p>
            </article>
            <article className="seg reveal">
              <h3>up questions based on answers</h3>
              <p>Most of the valuable information gathered during a discovery call enables us to schedule a follow-up. Our industry-specific solutions ensure client adoption and ROI from day one.</p>
            </article>
          </div>

          {/* <div className="value-note reveal">
            <h3>Why this matters more than it sounds</h3>
            <p>The single most expensive mistake in technology consulting is solving the wrong problem competently. It happens when a supplier arrives with a solution already in mind and asks questions designed to confirm it. By the time the mismatch is obvious, a budget has been committed and everyone involved has a reason not to say so. Talking less at the start is the cheapest possible insurance against that, and it costs us nothing but the temptation to sound impressive.</p>
          </div> */}
        </div>
      </section>

      <section className="section bg-mist" id="prove">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Proven & Adopted Industry-specific solutions</span>
            <h2 className="h-sec wide">See it working before anyone signs anything</h2>
            <p className="lede">We maintain a set of in-house proofs of concept and custom solutions built in Microsoft Dynamics 365 that we can walk you through immediately—and if none of them fit, we will build one for your specific use case.</p>
          </div>
          <div className="chal-grid">
            <article className="chal reveal"><span className="chal-n">01</span><div>
              <h3>Walk through what already exists</h3>
              <p>We hold working demonstrations across the platforms we implement. A demo running environment is available for you to try. We answer all your questions.</p></div></article>
            <article className="chal reveal"><span className="chal-n">02</span><div>
              <h3>Or we build one for your case</h3>
              <p>If your situation is genuinely different, we will put together a proof of concept for it. Give us a real process, some anonymised data and your terminology, and we will show you your own scenario rather than a generic one.</p></div></article>
            <article className="chal reveal"><span className="chal-n">03</span><div>
              <h3>You decide when it is right</h3>
              <p>We do not move to commercials until the solution satisfies you. If the proof of concept shows the approach is wrong, that is a good outcome discovered cheaply, and we work closely until you find your fit. </p></div></article>
          </div>
          {/* <div className="chal-note reveal">
            <svg><use href="#i-target" /></svg>
            <p><b>We believe in relationships, which has a practical consequence.</b> A client who signs something that does not work is a client we lose in eighteen months and never hear from again. Proving the approach first is not generosity &mdash; it is the version of this business that is still here in ten years.</p>
          </div> */}
        </div>
      </section>

      <section className="section bg-paper" id="agree">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">We agree the terms</span>
            <h2 className="h-sec wide">Pricing and timeline come after the solution</h2>
            <p className="lede">Once a solution meets your satisfaction, we put together the pricing and the timeline.</p>
          </div>
          <div className="metric-grid reveal">
            <div className="metric"><span className="m-label">Commercial model</span><b>Fixed price</b><p>Agreed before work starts, for defined scope</p></div>
            <div className="metric"><span className="m-label">Timeline</span><b>Committed</b><p>Dates we plan against and report on weekly</p></div>
            <div className="metric"><span className="m-label">Scope changes</span><b>In writing</b><p>Raised when they arise, never absorbed silently</p></div>
            <div className="metric"><span className="m-label">Success measures</span><b>Baselined</b><p>Agreed with you before design begins</p></div>
          </div>
          {/* <p className="metric-note"><b>What we will not do:</b> quote a range so wide it means nothing, or price a discovery phase whose only deliverable is a proposal to do more work. If a discovery genuinely is needed, we will say what it costs and what you will own at the end of it &mdash; including if you take that document to somebody else.</p> */}
        </div>
      </section>

      <section className="section bg-mist" id="deliver">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">We deliver</span>
            <h2 className="h-sec wide">Implement, configure, secure, train, support</h2>
            <p className="lede">One Relationship. One ongoing responsibility. Provides peace of mind and comprehensive support across Applications, Network & Systems, Security, Monitoring, Training, and Procurement. </p>
          </div>
          <div className="process reveal">
            <div className="step"><span className="step-n">1</span><h4>Implement</h4><p>Build, migrate and integrate to the agreed design, with a rollback path at every wave.</p></div>
            <div className="step"><span className="step-n">2</span><h4>Configure</h4><p>Fit it to how you actually work, as configuration your own team can maintain wherever possible.</p></div>
            <div className="step"><span className="step-n">3</span><h4>Secure</h4><p>Identity, access, data protection and monitoring applied as part of the build, not bolted on after a review.</p></div>
            <div className="step"><span className="step-n">4</span><h4>Train</h4><p>Administrators, makers and end users &mdash; because a system nobody understands produces no return regardless of how well it was built.</p></div>
            <div className="step"><span className="step-n">5</span><h4>Support</h4><p>As much or as little as you need afterwards. Some clients want everything run for them; some want us gone. Both are legitimate.</p></div>
          </div>
          {/* <div className="sol-note reveal">
            <svg><use href="#i-check" /></svg>
            <p>We regard a client who no longer needs us for routine changes as a success rather than a lost account. If the only way to modify your own system is to raise a purchase order with us, we designed it badly.</p>
          </div> */}
        </div>
      </section>

      <section className="section bg-paper" id="models">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Delivery models</span>
            <h2 className="h-sec wide">Seven ways to work with us, with your success at the centre</h2>
            <p className="lede">The right model depends on what you are missing &mdash; a decision, capacity, speed, hands, or someone to run it. Most clients use two or three of these at once, and the mix changes over time.</p>
          </div>
          <div className="model-grid">
            <article className="model reveal"><span className="mi"><svg><use href="#i-strategy" /></svg></span><div><h3>Consulting &amp; Advisory</h3><p>Independent advice on what to do, in what order, and what it is worth. Roadmaps, architecture, licensing strategy and the business case behind them.</p><span className="who">Best when the decision is not yet made</span></div></article>
            <article className="model reveal"><span className="mi"><svg><use href="#i-support" /></svg></span><div><h3>Managed Services</h3><p>We run it. Service desk, monitoring, patching, backup validation and the day-to-day operation of your estate, against agreed response times.</p><span className="who">Best when you need capacity, not a project</span></div></article>
            <article className="model reveal"><span className="mi"><svg><use href="#i-cloud" /></svg></span><div><h3>As-a-Service consumption</h3><p>Industry and business use-case solutions built, tested and ready to deploy. You consume the outcome from day one rather than funding a build first.</p><span className="who">Best when speed matters more than bespoke</span></div></article>
            <article className="model reveal"><span className="mi"><svg><use href="#i-grid" /></svg></span><div><h3>Design, Architect &amp; Implement</h3><p>Professional services: the build itself. Environment design, configuration, migration, integration, testing and go-live to a fixed price and a fixed date.</p><span className="who">Best when the decision is made and the work is defined</span></div></article>
            <article className="model reveal"><span className="mi"><svg><use href="#i-clock" /></svg></span><div><h3>Lifecycle Services</h3><p>The long arc after go-live &mdash; release management, optimisation, technical debt reduction and the periodic review that keeps an estate from drifting.</p><span className="who">Best for platforms you intend to keep for years</span></div></article>
            <article className="model reveal"><span className="mi"><svg><use href="#i-staffing" /></svg></span><div><h3>Technology Resourcing &amp; Support</h3><p>Certified engineers and consultants embedded in your team, on your terms, for as long as the work requires. Your management, our people and our bench behind them.</p><span className="who">Best when you need hands, not a delivery model</span></div></article>
            <article className="model reveal"><span className="mi"><svg><use href="#i-users" /></svg></span><div><h3>Training Services</h3><p>Enablement for your team &mdash; administrators, makers, end users and the champions who drive adoption. Delivered as part of a project or on its own.</p><span className="who">Best when adoption is the constraint, not capability</span></div></article>
          </div>
          {/* <div className="chal-note reveal">
            <svg><use href="#i-target" /></svg>
            <p><b>How to choose:</b> if the decision is not made, start with advisory. If it is made and defined, take professional services. If you need it working next month rather than built, look at the as-a-service options. If you are short of people rather than direction, take resourcing. We will tell you which of these you actually need, including when the answer is the cheapest one.</p>
          </div> */}
        </div>
      </section>

      <section className="section bg-mist" id="working">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How we work</span>
            <h2 className="h-sec wide">Six things that show up in every engagement</h2>
            <p className="lede">Regardless of which delivery model you choose, these are constant &mdash; and they are the parts clients tend to mention when they refer us.</p>
          </div>
          <div className="pillar-grid">
            <article className="pillar reveal"><div className="icon-tile"><svg><use href="#i-target" /></svg></div><h3>Deep Dive Discovery</h3><p>We go further than a requirements workshop. We sit with the people doing the work, watch the process as it really runs, and find the workarounds nobody documented.</p></article>
            <article className="pillar reveal"><div className="icon-tile"><svg><use href="#i-automation" /></svg></div><h3>Customized Solutions</h3><p>Configuration over code wherever possible, custom where the process genuinely differentiates you. We do not make your business fit a product, and we do not build what you could configure.</p></article>
            <article className="pillar reveal"><div className="icon-tile"><svg><use href="#i-check" /></svg></div><h3>Seamless Implementation</h3><p>Phased, sequenced around your calendar, with a rollback path. Go-live should be an ordinary Tuesday, not an event people take leave to avoid.</p></article>
            <article className="pillar reveal"><div className="icon-tile"><svg><use href="#i-chart" /></svg></div><h3>Proactive Management &amp; Monitoring</h3><p>We would rather tell you about a problem than be told. Monitoring, alerting and capacity review so most issues are handled before anyone raises a ticket.</p></article>
            <article className="pillar reveal"><div className="icon-tile"><svg><use href="#i-support" /></svg></div><h3>Ongoing Support &amp; Maintenance</h3><p>Named people, agreed response times, release readiness for platform changes, and a backlog we work through with you rather than a queue you shout into.</p></article>
            <article className="pillar reveal"><div className="icon-tile"><svg><use href="#i-strategy" /></svg></div><h3>Strategic IT Guidance</h3><p>A regular conversation about where you are heading, not just what broke. Roadmap reviews, budget planning and honest advice about what is worth doing next.</p></article>
          </div>
        </div>
      </section>

      <section className="section bg-navy" id="culture">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What we bring</span>
            <h2 className="h-sec wide">The part that is about people rather than process</h2>
            <p className="lede">We put people first, believing that investing in our team drives our growth. Our sole focus is to ensure your digital experience is reliable, secure, and scalable.</p>
          </div>
          <div className="trait-grid">
            <article className="trait reveal"><b>Diverse Expertise</b><span>Applications, infrastructure, security, data and adoption — across multiple industries and three regions. Breadth is what lets us tell you the answer is not the thing you asked about.</span></article>
            <article className="trait reveal"><b>Collaborative Culture</b><span>We work alongside your team, not around them. Your people know things we do not, and an engagement that ignores that produces a system nobody wanted.</span></article>
            <article className="trait reveal"><b>Customer-Centric Approach</b><span> The outcome you need comes before the technology we would enjoy building. We recommend the best solutions for your industry-specific use case.</span></article>
            <article className="trait reveal"><b>Passion for Excellence</b><span>Fixed price, agreed outcomes, measured against a baseline. Work is finished when it does what we said it would, not when the hours are used up.</span></article>
            <article className="trait reveal"><b>Empowered Learning</b><span>Certification is funded and scheduled. Our engineers are current because we make it their job to be.</span></article>
            <article className="trait reveal"><b>Exceptional Customer Service</b><span>Named contacts, independent feedback, and a director you can reach directly. Service quality is measured by someone other than the person who wants your renewal.</span></article>
          </div>
        </div>
      </section>


      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Tell us what is not working</h2>
              <p>You do not need a defined requirement or a budget to have the first conversation. Describe the symptom &mdash; the process that keeps breaking, the report nobody trusts, the thing that takes three weeks and should take three days &mdash; and we will ask the questions that get to the cause.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">Start a conversation <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="/why-us/faq">Read the FAQ <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
