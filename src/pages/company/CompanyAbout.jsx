import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import { clientLogo } from "../../config/data.js";
import { useGetHomeSectionQuery } from "../../redux/api.jsx";

export default function CompanyAbout() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "About Us | JJC Systems",
    "One partner, one point of contact, one invoice. Four decades of Microsoft consulting and managed IT across eleven industries.",
  );
  usePageEffects(mainRef);

   const { data: clientLogoData } = useGetHomeSectionQuery("clientLogos");
     const clientLogos = clientLogoData?.data?.items || [];

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
    },
  ];

  const hero = {
    eyebrow: "About JJC Systems",

    heading: "One partner. One point of contact. One invoice.",

    lede:
      "We are a technology company delivering industry-specific solutions. Small and mid-size firms rely on us as a one-stop shop for applications, network and systems, security, monitoring, adoption, and procurement. Our Microsoft consulting team includes certified experts in Dynamics 365, Microsoft Azure, and Microsoft 365. Large firms engage us as their comprehensive Microsoft consulting partner.",

    primaryCtaText: "Talk to our team",
    primaryCtaLink: "/#contact",

    secondaryCtaText: "Explore All Services",
    secondaryCtaAnchor: "/services",

    glance: {
      title: "What defines us",

      items: [
        "One accountable partner across applications, infrastructure and security",
        "Decades of combined experience across multiple industries",
        "Certified engineers, project & account managers",
        "Independent customer satisfaction measurement for 100% client retention",
        "A global team working 24/7 across three regions",
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
          <a href="#mission">Our mission</a>
          <a href="#promise">What we promise</a>
          <a href="#values">Values</a>
          <a href="#expertise">Expertise</a>
          <a href="#voice">Voice of the customer</a>
          <a href="#people">Our people</a>
          <a href="#partners">Partners</a>
          <a className="subnav-cta link-more" href="/#contact">
            Talk to us{" "}
            <svg>
              <use href="#i-arrow-r"></use>
            </svg>
          </a>
        </div>
      </nav>
      <section className="section bg-paper" id="mission">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Our mission</span>
            <h2 className="h-sec wide">
              One partner. One point of contact. One invoice.
            </h2>
            <p className="lede">
              Most organizations do not have a technology problem. They have a
              coordination problem — six vendors, four contracts, and nobody who
              owns the outcome when something falls between them. We exist to
              remove that.
            </p>
          </div>
          <div className="seg-grid">
            <article className="seg reveal">
              <h3>For large organizations</h3>
              <p>
                A comprehensive partner for everything Microsoft. Strategy,
                business applications, data and AI, modern work, licensing and
                the managed service around all of it — delivered by one team
                that understands how the pieces depend on each other.
              </p>
            </article>
            <article className="seg reveal">
              <h3>For small and mid-market businesses</h3>
              <p>
                A genuine one-stop solution: applications, network and systems,
                security, monitoring, adoption and procurement. Everything a
                technology function needs, without needing to build and manage
                one.
              </p>
            </article>
            <article className="seg reveal">
              <h3>What that changes day to day</h3>
              <p>
                One relationship to manage instead of six. One number to call
                when something breaks at 2am. One invoice to reconcile. And,
                more importantly, one organization that cannot blame another
                when an outcome is missed.
              </p>
            </article>
          </div>
          <div className="value-note reveal">
            <h3>Why this matters more than it sounds</h3>
            <p>
              Multi-vendor estates fail in the gaps, not in the products. The
              application vendor says it is a network issue; the network vendor
              says it is an identity issue; the identity vendor has not been
              told the application exists. Every hour spent establishing whose
              problem it is, is an hour the problem is not being fixed.
              Consolidating accountability is not a procurement convenience — it
              is the single change that most reliably shortens the time between
              something breaking and something working.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-navy" id="promise">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What we promise</span>
            <h2 className="h-sec wide">
              Reliable Technology Solutions to Empower Your Business
            </h2>
            <p className="lede">
              Five commitments that shape how we scope, staff and price every
              engagement.
            </p>
          </div>
          <div className="promise reveal">
            <div>
              <b>Large enough to serve</b>
              <span>
                Depth across every Microsoft platform, plus the network,
                security and procurement layers around them.
              </span>
            </div>
            <div>
              <b>Small enough to care</b>
              <span>
                You get named people who know your environment, not a ticket
                queue and a rotating cast.
              </span>
            </div>
            <div>
              <b>A global team, working 24/7</b>
              <span>
                Coverage that follows the sun across the Americas, the Middle
                East and India.
              </span>
            </div>
            <div>
              <b>A partnership, not a transaction</b>
              <span>
                We are measured on outcomes we agreed together, not on hours
                billed or licences moved.
              </span>
            </div>
            <div>
              <b>The outcome before the technology</b>
              <span>
                We start from what the business needs to be true, then decide
                what to build.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-paper" id="values">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Core values</span>
            <h2 className="h-sec wide">
              Diverse expertise and endless talent, built on trust
            </h2>
            <p className="lede">
              We are a place to grow — for the people who work here and for the
              organizations that hire us. Four values decide how we behave when
              a decision is genuinely difficult.
            </p>
          </div>
          <div className="val-grid">
            <article className="val reveal">
              <span className="n">01</span>
              <h3>Innovation</h3>
              <p>
                We are paid to know what is coming, not to repeat what worked in
                2019. Our engineers are given time to learn, and our
                recommendations change when the evidence does.
              </p>
            </article>
            <article className="val reveal">
              <span className="n">02</span>
              <h3>Integrity</h3>
              <p>
                We tell clients when the answer is a smaller engagement, a
                licence downgrade, or nothing at all. It costs us revenue
                regularly and it is the reason clients stay.
              </p>
            </article>
            <article className="val reveal">
              <span className="n">03</span>
              <h3>Quality</h3>
              <p>
                Fixed price, agreed outcomes, measured against a baseline we set
                together. Work is finished when it does what we said it would,
                not when the hours run out.
              </p>
            </article>
            <article className="val reveal">
              <span className="n">04</span>
              <h3>Teamwork</h3>
              <p>
                One accountable team across applications, infrastructure,
                security and support — so there is nobody to point at when
                something needs fixing.
              </p>
            </article>
          </div>
          {/* <div className="chal-note reveal">
            <svg>
              <use href="#i-target"></use>
            </svg>
            <p>
              <b>Trust is the one underneath the others.</b> It is also the only
              one we cannot claim — it is either extended to us by clients over
              time or it is not. Everything above is simply what we do to earn
              it.
            </p>
          </div> */}
        </div>
      </section>
      <section className="section bg-mist" id="expertise">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Industry leadership</span>
            <h2 className="h-sec wide">
              Decades of experience doing this, across several industries
            </h2>
            <p className="lede">
              Deep knowledge, broad expertise and a customer focus that shows up
              in how we scope rather than in how we market. Our experience spans
              regulated sectors, commercial operations and growing organizations
              — each of which fails differently.
            </p>
          </div>
          <div className="metric-grid reveal">
            <div className="metric">
              <span className="m-label">CLIENT RELATIONSHIPS </span>
              <b>100%</b>
              <p>Retention across the client base </p>
            </div>

            <div className="metric">
              <span className="m-label">Coverage</span>
              <b>24/7</b>
              <p>Follow-the-sun across three regions</p>
            </div>
            <div className="metric">
              <span className="m-label">Offices</span>
              <b>11</b>
              <p>Strategically located to support wherever you are</p>
            </div>
          </div>

        </div>
      </section>
      <section className="section bg-paper" id="voice">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Voice of the customer</span>
            <h2 className="h-sec wide">
              The only opinion of our service that counts is not ours
            </h2>
            <p className="lede">
              We commission independent third-party surveys rather than running
              our own, because a satisfaction score a supplier collects about
              itself is not evidence. The results shape what we change, not just
              what we publish.
            </p>
          </div>
          <div className="chal-grid">
            <article className="chal reveal">
              <span className="chal-n">01</span>
              <div>
                <h3>Independently collected</h3>
                <p>
                  Feedback is gathered by a third party, not by the account
                  manager who wants the renewal. That distinction is the whole
                  point — it is also why the results are occasionally
                  uncomfortable.
                </p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">02</span>
              <div>
                <h3>Acted on, then reported</h3>
                <p>
                  Every piece of critical feedback is assigned to a named person
                  with a date. We would rather tell you what we changed than
                  tell you what we scored.
                </p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">03</span>
              <div>
                <h3>Published with the method</h3>
                <p>
                  A satisfaction figure without the survey provider, the sample
                  size and the period is a marketing number. Ours should always
                  appear with all three.
                </p>
              </div>
            </article>
          </div>
          <div className="ph-note reveal">
            <svg>
              <use href="#i-check"></use>
            </svg>
            <p>
              <b>Placeholder content:</b> the site currently states 100%
              satisfaction from independent third-party surveys. Before
              publishing, add the survey provider, the sample size and the
              period covered next to that figure. An unqualified 100% invites
              scepticism from exactly the executive buyers this page is written
              for; the same number with a named provider and an <em>n</em> value
              is persuasive. If the survey covers a subset of clients, say
              which.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-mist" id="people">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Our people</span>
            <h2 className="h-sec wide">
              Qualified, experienced, and kept current on purpose
            </h2>
            <p className="lede">
              Certifications age quickly in this industry. What matters is not
              what someone passed three years ago but whether the team has been
              kept current since — which is a management commitment rather than
              an individual one.
            </p>
          </div>
          <div className="pillar-grid">
            <article className="pillar reveal">
              <div className="icon-tile">
                <svg>
                  <use href="#i-award"></use>
                </svg>
              </div>
              <h3>Certified, and kept certified</h3>
              <p>
                Every engineer holds Microsoft certification plus the
                vendor-specific credentials their specialism requires. As new
                releases land, we certify staff against them rather than waiting
                for a client to expose the gap.
              </p>
              <ul>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    PMP-certified project managers on every major engagement
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Dedicated customer experience managers for white-glove
                    service
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Microsoft-certified engineers across every platform we
                    deliver
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Vendor-specific certifications for the wider infrastructure
                    stack
                  </span>
                </li>
              </ul>
            </article>
            <article className="pillar reveal">
              <div className="icon-tile">
                <svg>
                  <use href="#i-users"></use>
                </svg>
              </div>
              <h3>Trained continuously, in-house</h3>
              <p>
                A dedicated team tracks new technology, runs internal training
                and equips engineers with current skills. Learning is scheduled
                work here, not something people are expected to do at the
                weekend.
              </p>
              <ul>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Internal training programme aligned to release waves
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    New features, vulnerabilities and best practice reviewed
                    continuously
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Business and sales teams trained on market shifts and use
                    cases
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Engineers assessed on current capability, not historic
                    certification
                  </span>
                </li>
              </ul>
            </article>
            <article className="pillar reveal">
              <div className="icon-tile">
                <svg>
                  <use href="#i-shield"></use>
                </svg>
              </div>
              <h3>Focused on what is coming</h3>
              <p>
                The technical team follows new features, disclosed
                vulnerabilities and changing best practice, so your
                infrastructure is optimised for where the platforms are going
                rather than where they were.
              </p>
              <ul>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Release-wave readiness reviews before changes reach your
                    tenant
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Vulnerability and advisory monitoring across the vendor
                    estate
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>
                    Architecture guidance that accounts for the next two years
                  </span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Recommendations updated when the evidence changes</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section className="section bg-paper" id="partners">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Vendors and partners</span>
            <h2 className="h-sec wide">
              Relationships that keep you ahead of the curve
            </h2>
            <p className="lede">
              We maintain working relationships with the vendors whose products
              your estate depends on — which gives us roadmap visibility,
              escalation paths and early access to changes that will affect you.
              It also means we can procure through one channel rather than five.
            </p>
          </div>
          <div className="marquee-container reveal">
            <div className="marquee-track">
              {/* First set */}
              {clientLogos?.map((logo, index) => (
                <div key={`first-${index}`} className="marquee-item">
                  <img src={logo.image?.url} alt={logo.alt || logo.placeholder || "JJC Systems client logo"} />

                </div>
              ))}



            </div>
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Fewer vendors. Fewer arguments about whose problem it is.</h2>
              <p>
                Please describe your current technology relationships, including the number of suppliers, contracts, and your process for addressing issues. We will then present our industry-specific approach.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Talk to our team{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/services">
                See our services{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
