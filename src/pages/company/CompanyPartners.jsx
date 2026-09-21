import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import { clientLogo } from "../../config/data.js";
import { useGetHomeSectionQuery } from "../../redux/api.jsx";

export default function CompanyPartners() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Partners | JJC Systems",
    "Our vendor and technology partnerships: Microsoft, Dell, Lenovo, OpenText, ConnectWise, Cisco, Check Point, Fortinet, HPE, SentinelOne, Proofpoint and more.",
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
      label: "Partners",
    },
  ];

  const hero = {
    eyebrow: "Partners",

    heading: "The relationships behind the work",

    lede:
      "We hold partnerships with the vendors whose products your users use every day. Our experts work closely with their teams to provide the roadmap, visibility, escalation paths, and procurement leverage our clients feel—usually on the day something has gone wrong.",

    primaryCtaText: "Talk to our team",
    primaryCtaLink: "/contact",

    secondaryCtaText: "See the platforms we deliver",
    secondaryCtaAnchor: "/services",

    glance: {
      title: "What our partnerships give you",

      items: [
        "Roadmap visibility before changes reach your environment",
        // "Escalation that reaches an engineer, not a support tier",
        "Partner pricing and funding programmes applied by default",
        "One procurement channel, one invoice, one renewal calendar",
        // "Recommendations driven by your requirement, not by partner status",
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
          <a href="#why">Why it matters</a>
          <a href="#ecosystem">Our partners</a>
          <a href="#procurement">Procurement</a>
          <a href="#choose">Talk to us</a>
          <a className="subnav-cta link-more" href="/contact">
            Talk to us{" "}
            <svg>
              <use href="#i-arrow-r"></use>
            </svg>
          </a>
        </div>
      </nav>
      <section className="section bg-paper" id="why">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Why partnerships matter</span>
            <h2 className="h-sec wide">
              What a vendor relationship is actually worth to you
            </h2>
            <p className="lede">
              Many organizations struggle to keep up with rapid technology changes. We simplify decisions and help you stay ahead by working closely with major technology vendors. Our customer service team understands your business and recommends the best solutions to give you a competitive advantage.
            </p>
          </div>
          <div className="chal-grid">
            <article className="chal reveal">
              <span className="chal-n">01</span>
              <div>
                <h3>Roadmap visibility before it affects you</h3>
                <p>
                  We see what is changing in a product before it reaches your
                  tenant. That is the difference between planning for a release
                  wave and reacting to one after a user reports something has
                  moved.
                </p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">02</span>
              <div>
                <h3>An escalation path that bypasses the queue</h3>
                <p>
                  When a vendor issue is genuinely blocking you, a partner
                  escalation reaches an engineer rather than a support tier. It
                  is the single most valuable thing a partnership provides and
                  the hardest to demonstrate until you need it.
                </p>
              </div>
            </article>
            {/* <article className="chal reveal">
              <span className="chal-n">03</span>
              <div>
                <h3>Commercial terms you would not get alone</h3>
                <p>
                  Partner pricing, funding programmes and assessment credits
                  exist and are routinely under-claimed. We apply them by
                  default, including where doing so reduces what we invoice.
                </p>
              </div>
            </article> */}
            <article className="chal reveal">
              <span className="chal-n">03</span>
              <div>
                <h3>One procurement channel instead of nine</h3>
                <p>
                  Licences, hardware and security tooling bought through one
                  relationship, on one invoice, with one renewal calendar. The
                  administrative saving is real and rarely counted.
                </p>
              </div>
            </article>
          </div>
          {/* <div className="chal-note reveal">
            <svg>
              <use href="#i-target"></use>
            </svg>
            <p>
              <b>What a partnership does not mean:</b> that we will recommend
              that vendor's product. We hold these relationships so we can
              deliver and support the estate you have or need — not so we can
              steer you toward whichever partner pays best. If the right answer
              is a product from a vendor we do not partner with, we will say so.
            </p>
          </div> */}
        </div>
      </section>
      <section className="section bg-mist" id="ecosystem">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Our partners</span>
            <h2 className="h-sec wide">
              The Microsoft estate we build most of our work on.
            </h2>
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
          {/* </div>
          </section> */}


        </div>
      </section>
      <section className="section bg-paper" id="ecosystem-1">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Infrastructure & devices</span>
            <h2 className="h-sec wide">
              The hardware layer underneath the platform, procured and managed
              through one channel.
            </h2>
          </div>
          <div className="plogo-grid">
            <article className="plogo reveal">
              <div className="mark">
                <span>Dell</span>
              </div>
              <b>Dell Technologies</b>
              <p>
                Servers, storage and endpoints, including the device supply that
                feeds our Autopilot provisioning.
              </p>
            </article>
            <article className="plogo reveal">
              <div className="mark">
                <span>Lenovo</span>
              </div>
              <b>Lenovo</b>
              <p>
                Endpoints and workstations, with the vendor registration that
                makes zero-touch deployment possible.
              </p>
            </article>
            <article className="plogo reveal">
              <div className="mark">
                <span>HPE</span>
              </div>
              <b>HPE</b>
              <p>
                Server, storage and hybrid infrastructure for estates that keep
                workloads on-premises for good reasons.
              </p>
            </article>
            <article className="plogo reveal">
              <div className="mark">
                <span>Cisco</span>
              </div>
              <b>Cisco</b>
              <p>
                Networking, switching and secure connectivity — the layer most
                often blamed and least often instrumented.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section bg-mist" id="ecosystem-2">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Security</span>
            <h2 className="h-sec wide">
              Threat protection, network security and the human layer attackers
              actually target.
            </h2>
          </div>
          <div className="plogo-grid">
            <article className="plogo reveal">
              <div className="mark">
                <span>Check Point</span>
              </div>
              <b>Check Point</b>
              <p>
                Network security and threat prevention for perimeter and hybrid
                estates.
              </p>
            </article>
            <article className="plogo reveal">
              <div className="mark">
                <span>Fortinet</span>
              </div>
              <b>Fortinet</b>
              <p>
                Network security, secure SD-WAN and the firewall estate for
                distributed organizations.
              </p>
            </article>
            <article className="plogo reveal">
              <div className="mark">
                <span>SentinelOne</span>
              </div>
              <b>SentinelOne</b>
              <p>
                Endpoint detection and response, where a client's environment or
                insurer requires a non-Microsoft endpoint agent.
              </p>
            </article>
            <article className="plogo reveal">
              <div className="mark">
                <span>Proofpoint</span>
              </div>
              <b>Proofpoint</b>
              <p>
                Email security and human-layer protection against phishing and
                business email compromise.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section bg-paper" id="ecosystem-3">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Service delivery</span>
            <h2 className="h-sec wide">
              The tooling our own managed service runs on.
            </h2>
          </div>
          <div className="plogo-grid">
            <article className="plogo reveal">
              <div className="mark">
                <span>ConnectWise</span>
              </div>
              <b>ConnectWise</b>
              <p>
                Service management, monitoring and automation — the platform
                behind our service desk and remote monitoring.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">And more</span>
            <h2 className="h-sec wide">The list above is not the limit</h2>
            <p className="lede">
              We hold additional vendor relationships across backup,
              connectivity, telephony and specialist industry software, and we
              add new ones when a client requirement justifies it rather than
              when a vendor offers a programme.
            </p>
          </div>
          <div className="ph-note reveal">
            <svg>
              <use href="#i-check"></use>
            </svg>
            <p>
              <b>Placeholder content:</b> partner logos are shown as text marks.
              Replace each with the vendor's official logo at the size and
              clear-space their brand guidelines require, and confirm you hold a
              current agreement with each before displaying their mark. Where
              you hold a named designation — a Microsoft Solutions Partner area,
              a Gold or Titanium tier, a specialization — state it specifically
              alongside the logo. A named designation is verifiable and worth
              considerably more than an unlabelled logo wall.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-navy" id="procurement">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Procurement</span>
            <h2 className="h-sec wide">
              One channel, one invoice, one renewal calendar
            </h2>
            <p className="lede">
              For our clients, this is frequently the most immediately valuable thing we do, and the least discussed.
            </p>
          </div>
          <ul className="biz-outcomes reveal">
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Licensing reviewed before renewal</b> — we check what you are
                entitled to and using, which regularly reduces the invoice
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Hardware procured and provisioned together</b> — devices
                arrive registered for zero-touch deployment, not in a box for
                someone to image
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>One renewal calendar</b> — visibility of every expiry across
                every vendor, so nothing auto-renews unnoticed
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Funding and assessment programmes redeemed </b> — vendor
                programmes claimed if applicable
              </span>
            </li>
          </ul>
        </div>
      </section>
      {/* <section className="section bg-mist" id="choose">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How we choose</span>
            <h2 className="h-sec wide">
              Why this list is shorter than it could be
            </h2>
            <p className="lede">
              We could hold three times as many partnerships. We do not, because
              a relationship we cannot staff properly is a badge rather than a
              capability.
            </p>
          </div>
          <div className="process reveal">
            <div className="step">
              <span className="step-n">1</span>
              <h4>Client demand first</h4>
              <p>
                We add a vendor when clients need it, not when a programme is
                offered to us.
              </p>
            </div>
            <div className="step">
              <span className="step-n">2</span>
              <h4>We staff it properly</h4>
              <p>
                Certified engineers before the badge goes on the website, not
                after.
              </p>
            </div>
            <div className="step">
              <span className="step-n">3</span>
              <h4>We keep it current</h4>
              <p>
                Certifications renewed as products change, or the partnership
                comes off the list.
              </p>
            </div>
            <div className="step">
              <span className="step-n">4</span>
              <h4>We stay honest about fit</h4>
              <p>
                Partner status never decides a recommendation. The client's
                requirement does.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Want your renewals reviewed before the next one lands?</h2>
              <p>
                Send us your current vendor list and renewal dates. We will tell
                you what you are paying for and not using, where entitlements
                overlap, and what consolidating procurement would actually save
                — before you commit to anything.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Ask for a licensing review{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/About">
                Read about the firm{" "}
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
