import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";

export default function CompanyCareers() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Careers | JJC Systems",
    "Build a career at JJC Systems. Funded certification, scheduled learning, work across eleven industries and three regions.",
  );
  usePageEffects(mainRef);

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Careers",
    },
  ];

  const hero = {
    eyebrow: "Careers",

    heading: "Diverse expertise. Endless talent. A place to grow.",

    lede:
      "We are an organization that gets hired because our people know what they are doing. That only works if the people are given time to learn, exposure to real problems, and permission to disagree.",

    primaryCtaText: "See open roles",
    primaryCtaLink: "#roles",

    secondaryCtaText: "Read about the firm",
    secondaryCtaAnchor: "/company/about",

    glance: {
      title: "What we offer",

      items: [
        "Competitive pay",
        "Regionally regulated retirement and health care accounts",
        "Personal benefits like fitness, vacation, parental and sick days",
        "Professional growth benefits such as certification funding, in-house training, global team, and events",
        "Work across multiple industries and vendors",
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
          <a href="#why">Why here</a>
          {/* <a href="#growth">How you grow</a> */}
          <a href="#roles">Open roles</a>
          {/* <a href="#hiring">How we hire</a> */}
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
            <span className="eyebrow">Why work here</span>
            <h2 className="h-sec wide">
             A place to grow, with our people first.
            </h2>
            <p className="lede">
              We invest in our people.
            </p>
          </div>
          <div className="val-grid">
            <article className="val reveal">
              <span className="n">01</span>
              <h3>Certification is paid for and planned</h3>
              <p>
               We certify staff as new releases are released. Exam costs and the training itself are our responsibility.
              </p>
            </article>
            {/* <article className="val reveal">
              <span className="n">02</span>
              <h3>You work on the whole problem</h3>
              <p>
                Consultants here are not kept in a lane. If your engagement
                touches identity, integration and change management, you will be
                involved in all three rather than handing off at each boundary.
              </p>
            </article> */}
            <article className="val reveal">
              <span className="n">02</span>
              <h3>Competitive package, Retirement & Health accounts</h3>
              <p>
              We offer a competitive salary package. Regional, regulated retirement and health accounts, personal benefits such as fitness subscriptions, vacation, and maternal and sick days, and more.
              </p>
            </article>
            <article className="val reveal">
              <span className="n">03</span>
              <h3>Diverse expertise, genuinely</h3>
              <p>
               Three regions, multiple industries, and a deliberately broad technical estate. The variety is the point.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* <section className="section bg-navy" id="growth">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How you grow</span>
            <h2 className="h-sec wide">What we actually provide</h2>
            <p className="lede">
              Specific commitments rather than a values statement. If any of
              these stops being true, we would expect people to say so.
            </p>
          </div>
          <ul className="biz-outcomes reveal">
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>In-house training programme</b> — run internally and aligned
                to Microsoft's release waves, not bought in once a year
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Certification funded and scheduled</b> — including the study
                time, which is the part most employers quietly omit
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>A technology watch function</b> — a dedicated team tracks
                what is changing and briefs the rest of us, so nobody is
                guessing
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Business and sales training too</b> — market shifts and use
                cases, because a consultant who cannot explain value to an
                executive is only half useful
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Exposure across industries</b> — regulated, commercial and
                growth organizations, each of which fails differently and
                teaches differently
              </span>
            </li>
            <li>
              <svg>
                <use href="#i-check"></use>
              </svg>
              <span>
                <b>Named progression paths</b> — from service desk into
                specialist engineering, from consultant into practice leadership
              </span>
            </li>
          </ul>
        </div>
      </section> */}
      <section className="section bg-paper" id="roles">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Open roles</span>
            <h2 className="h-sec wide">Where we are hiring</h2>
            <p className="lede">
              We hire for judgement and curiosity ahead of a specific product
              certification. If you can learn a platform properly and explain it
              to someone who does not want a lecture, the certification will
              follow.
            </p>
          </div>
          <div className="role-list">
            <article className="role-row reveal">
              <div className="rmain">
                <h3>Dynamics 365 Functional Consultant</h3>
                <p>
                  Lead ERP and CRM implementations from discovery through
                  go-live. You will scope, configure and be accountable for
                  whether the client can close their first period on the new
                  system.
                </p>
              </div>
              <div className="role-meta">
                <span>Business Applications</span>
                <span className="loc-tag">Hybrid · US</span>
              </div>
            </article>
            <article className="role-row reveal">
              <div className="rmain">
                <h3>Microsoft 365 & Security Engineer</h3>
                <p>
                  Own tenant configuration, conditional access, Intune and
                  Defender across client estates. The role includes design, not
                  only administration.
                </p>
              </div>
              <div className="role-meta">
                <span>Managed IT & Security</span>
                <span className="loc-tag">Hybrid · US / India</span>
              </div>
            </article>
            <article className="role-row reveal">
              <div className="rmain">
                <h3>Azure Cloud Architect</h3>
                <p>
                  Design landing zones, migrations and cost governance for
                  client estates. You will be expected to tell clients when a
                  workload should not move.
                </p>
              </div>
              <div className="role-meta">
                <span>Cloud & Infrastructure</span>
                <span className="loc-tag">Remote · US</span>
              </div>
            </article>
            <article className="role-row reveal">
              <div className="rmain">
                <h3>Power Platform Developer</h3>
                <p>
                  Build applications and automation for processes no product
                  covers, with the governance to keep the estate maintainable as
                  it grows.
                </p>
              </div>
              <div className="role-meta">
                <span>Data, AI & Automation</span>
                <span className="loc-tag">Hybrid · India</span>
              </div>
            </article>
            <article className="role-row reveal">
              <div className="rmain">
                <h3>Service Desk Engineer</h3>
                <p>
                  First and second line support across the managed estate,
                  working the overnight window for North American clients.
                  Career path into specialist engineering.
                </p>
              </div>
              <div className="role-meta">
                <span>Managed Services</span>
                <span className="loc-tag">On-site · India</span>
              </div>
            </article>
            <article className="role-row reveal">
              <div className="rmain">
                <h3>Project Manager (PMP)</h3>
                <p>
                  Own scope, schedule and the fixed-price commitments in the
                  statement of work. You will be measured on whether clients got
                  what was promised.
                </p>
              </div>
              <div className="role-meta">
                <span>Delivery</span>
                <span className="loc-tag">Hybrid · US / UAE</span>
              </div>
            </article>
          </div>
          <div className="ph-note reveal">
            <svg>
              <use href="#i-check"></use>
            </svg>
            <p>
              <b>Placeholder content:</b> these roles are illustrative. Replace
              them with your live vacancies, each linked to a full job
              description with responsibilities, requirements, location, working
              pattern and salary range where your jurisdiction requires or your
              policy allows it. If you have no open roles at a given moment, say
              so plainly and invite speculative applications — an empty careers
              page reads better than one advertising roles that were filled last
              quarter.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="section bg-mist" id="hiring">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How we hire</span>
            <h2 className="h-sec wide">
              Four steps, and no unpaid project work
            </h2>
            <p className="lede">
              Our process is deliberately short. Long hiring processes lose good
              candidates to firms that moved faster, and they rarely produce a
              better decision.
            </p>
          </div>
          <div className="process reveal">
            <div className="step">
              <span className="step-n">1</span>
              <h4>Conversation</h4>
              <p>
                Thirty minutes with someone who does the job you are applying
                for, not with a recruiter reading a checklist.
              </p>
            </div>
            <div className="step">
              <span className="step-n">2</span>
              <h4>Technical discussion</h4>
              <p>
                A real scenario from our work, discussed rather than tested. We
                are interested in how you reason, including when you say you do
                not know.
              </p>
            </div>
            <div className="step">
              <span className="step-n">3</span>
              <h4>Meet the team</h4>
              <p>
                The people you would work with, and a director. Ask them
                anything — including what they would change about working here.
              </p>
            </div>
            <div className="step">
              <span className="step-n">4</span>
              <h4>Decision</h4>
              <p>
                An answer within a week, with feedback either way. If we say no,
                we will tell you why.
              </p>
            </div>
          </div>
          <div className="sol-note reveal">
            <svg>
              <use href="#i-check"></use>
            </svg>
            <p>
              We do not set take-home projects that take a weekend, and we do
              not ask candidates to solve real client problems as an assessment.
              If a process needs a full weekend of your unpaid time to evaluate
              you, it is not a good process.
            </p>
          </div>
        </div>
      </section> */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Nothing here quite fits?</h2>
              <p>
                Please check back in later or follow us on LinkedIn.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Get in touch{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/company/leadership">
               Follow us on Linkedin{" "}
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
