import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";

export default function CompanyLocations() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Locations | JJC Systems",
    "JJC Systems offices across the United States, Saudi Arabia, the United Arab Emirates and India, delivering genuine 24/7 follow-the-sun coverage.",
  );
  usePageEffects(mainRef);

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Locations",
    },
  ];

  const hero = {
    eyebrow: "Locations",

    heading:
      "Eight offices, three regions, one working day that never ends",

    lede:
      "Our locations are not a map for a marketing page. They are the reason we can say 24/7 and mean that someone is at their desk rather than reachable by phone — and the reason we can meet data residency and on-site requirements in the Gulf and across the United States.",

    primaryCtaText: "Talk to our team",
    primaryCtaLink: "/#contact",

    secondaryCtaText: "How our support works",
    secondaryCtaAnchor: "/services/managed-it",

    glance: {
      title: "At a glance",

      items: [
        "Four offices across the United States",
        "Saudi Arabia and the United Arab Emirates",
        "Two engineering and service locations in India",
        "Follow-the-sun coverage with documented shift handover",
        "Local presence for data residency and on-site requirements",
      ],
    },
  };
  // Eastern

  const locations = [
    {
      title: "Location one",
      timezone: "Central time",
      city: "Chicago, IL",
      address: "1600 Golf Rd Suite 1200, Rolling Meadows, IL 60008",
    },
    {
      title: "Location two",
      timezone: "Eastern time",
      city: "Atlanta, GA",
      address: "44 Peachtree Pl NW, Atlanta, GA 30309",
    },
    {
      title: "Location three",
      timezone: "Eastern time",
      city: "Westmont, IL",
      address: "999 Oakmont Plaza Dr, Westmont, IL 60559",
    },
    {
      title: "Location four",
      timezone: "Eastern time",
      city: "Houston, TX",
      address: "16821 Buccaneer Ln., Suite 200, Houston, Texas, 77058",
    },

  ];


  const locationSuid = [
    {
      title: "Location five",
      timezone: "Arabian Standard Time",
      city: "Riyadh, Saudi Arabia",
      address:
        "Northern Gate, Ibn Qunjouth Street, Al Safarat, Riyadh 12513, Saudi Arabia",
    },
    {
      title: "Location six",
      timezone: "Arabian Standard Time",
      city: "United, Arab Emirates",
      address:
        "UAE - Business Center, Sharjah, United Arab Emirates",
    },

  ]


  const locationIndia = [
    {
      title: "Location seven",
      timezone: "India Standard Time",
      city: "India",
      address:
        "India - NearWoodbine School, Anoopshar Road, Aligarh, UP 202001",
    },
    {
      title: "Location eight",
      timezone: "India Standard Time",
      city: "India",
      address:
        "India - G.S Center Point Panjagutta Cross Road, Hyderabad, TS 500082",
    },
  ]

  return (
    <main id="main" ref={mainRef}>

      <HeroSection
        hero={hero}
        breadcrumbs={breadcrumbs}
      />


      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          <a href="#americas">Americas</a>
          <a href="#mea">Middle East</a>
          <a href="#india">India</a>
          <a href="#follow">How coverage works</a>
          <a className="subnav-cta link-more" href="/#contact">
            Talk to us{" "}
            <svg>
              <use href="#i-arrow-r"></use>
            </svg>
          </a>
        </div>
      </nav>
      <section className="section bg-paper" id="americas">
        <div className="wrap">
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
              {locations?.map((e) => (
                <article className="loc reveal">
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
              {locationSuid?.map((e) => (
                <article className="loc reveal">
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
                Engineering, managed services and the overnight half of our
                follow-the-sun coverage — which is why an incident raised at 2am
                in the United States is picked up by someone at their desk.
              </p>
            </div>
            <div className="loc-grid">
              {locationIndia?.map((e) => (
                <article className="loc reveal">
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
      <section className="section bg-navy" id="follow">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How coverage works</span>
            <h2 className="h-sec wide">
              24/7 is a staffing model, not a phone number
            </h2>
            <p className="lede">
              Plenty of providers advertise round-the-clock support and deliver
              an on-call engineer who was asleep eight minutes ago. Ours works
              differently, and the difference is where our offices are.
            </p>
          </div>
          <ul className="biz-outcomes reveal">
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Someone is always at their desk</b> — three regions means
                every hour of the day is somebody's working day
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Handover is a process, not a voicemail</b> — open incidents
                are walked between regions at each shift change
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Escalation follows the sun too</b> — a director is reachable
                in every window, not only in North American hours
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Local presence where it is required</b> — for data residency,
                procurement rules or engagements that need people on site
              </span>
            </li>
          </ul>
          <p className="metric-note">
            <b>What this changes:</b> the practical test of a support
            arrangement is what happens at 3am on a Sunday. If the answer
            involves waking somebody up, response times will reflect that. If
            the answer is that a fully staffed team in another timezone is
            already working, they will not.
          </p>
        </div>
      </section>
      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Getting in touch</span>
            <h2 className="h-sec wide">Which office should you contact?</h2>
            <p className="lede">
              Whichever is nearest. Enquiries are routed to the team that will
              actually deliver the work, and a location that cannot help will
              introduce you to the one that can rather than passing you to a
              switchboard.
            </p>
          </div>
          <div className="ph-note reveal">
            <svg>
              <use href="#i-check"></use>
            </svg>
            <p>
              <b>Placeholder content:</b> street addresses, local phone numbers
              and office photographs are not yet filled in. Add the full postal
              address and a direct local number for each location before
              publishing — an office list without addresses reads as
              aspirational, and enterprise buyers with procurement or data
              residency requirements will check.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Need someone in your timezone, or in your country?</h2>
              <p>
                Tell us where your teams are and what hours your systems have to
                be available. We will tell you which of our locations would
                carry your account, who the named contacts would be, and what
                our coverage would actually look like on a bad night.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">
                Talk to our team{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/services/managed-it">
                See our managed IT service{" "}
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
