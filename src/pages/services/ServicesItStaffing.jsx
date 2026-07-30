import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useGetServiceBySlugQuery } from "../../redux/api.jsx";
import { useParams } from "react-router-dom";

export default function ServicesItStaffing() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "IT Staffing | JJC Systems",
    "IT staffing and technical talent services \u2014 contract, contract-to-hire and permanent placement for Microsoft, cloud, data, security and business application roles.",
  );
  usePageEffects(mainRef);

  const { slug } = useParams()

  const { data } = useGetServiceBySlugQuery(slug)
  console.log(data)

  return (
    <main id="main" ref={mainRef}>
      {/* ===================== HERO ===================== */}
      <HeroSection />
      {/* ===================== IN-PAGE NAV ===================== */}
      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          <a href="#challenges">The problem</a>
          <a href="#outcomes">Outcomes</a>
          <a href="#help">How we help</a>
          <a href="#included">What's included</a>
          <a href="#approach">Our approach</a>
          <a href="#why-us">Why us</a>
          <a href="#stories">Success stories</a>
          <a href="#insights">Insights</a>
          <a
            className="subnav-cta link-more"
            href="/#contact?topic=IT staffing"
          >
            Talk to us{" "}
            <svg>
              <use href="#i-arrow-r"></use>
            </svg>
          </a>
        </div>
      </nav>
      {/* ===================== 1. WHY DO IT ===================== */}
      <section className="section bg-paper" id="challenges">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Why do it</span>
            <h2 className="h-sec wide">Why technical hiring is difficult</h2>
            <p className="lede">
              The failure modes are specific and expensive.
            </p>
          </div>
          <div className="chal-grid">
            <article className="chal reveal">
              <span className="chal-n">01</span>
              <div>
                <h3>
                  CVs match the keywords and the person cannot do the work
                </h3>
                <p>
                  Screening against a job specification finds people who have
                  listed the right technologies, which is not the same as people
                  who have used them well.
                </p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">02</span>
              <div>
                <h3>Interviews test the wrong things</h3>
                <p>
                  Panels without deep technical knowledge in the specific area
                  rely on general impressions, and the gap emerges weeks into
                  the engagement.
                </p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">03</span>
              <div>
                <h3>Roles stay open for months</h3>
                <p>
                  Scarce skills, slow processes and unrealistic specifications
                  combine so vacancies persist, work does not get done and
                  existing staff absorb the pressure.
                </p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">04</span>
              <div>
                <h3>Contractors need managing you did not budget for</h3>
                <p>
                  An individual arrives with no context, no onboarding and no
                  technical oversight, and productivity takes far longer than
                  expected.
                </p>
              </div>
            </article>
          </div>
          <div className="chal-note reveal">
            <svg>
              <use href="#i-target"></use>
            </svg>
            <p>
              The most expensive outcome is not an unfilled role.{" "}
              <b>It is a filled one that does not work out three months in</b>,
              by which point the project has slipped and the alternative
              candidates are gone.
            </p>
          </div>
        </div>
      </section>
      {/* ===================== 2. MEASURABLE OUTCOMES ===================== */}
      <section className="section bg-navy" id="outcomes">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What you get</span>
            <h2 className="h-sec wide">What we commit to</h2>
            <p className="lede">
              Staffing is judged on quality of match and how quickly the person
              becomes productive.
            </p>
          </div>
          <div className="metric-grid reveal">
            <div className="metric">
              <span className="m-label">Shortlist turnaround</span>
              <b>Days</b>
              <p>
                Typical time to a shortlist of technically screened candidates
                for common Microsoft, cloud and data roles.
              </p>
            </div>
            <div className="metric">
              <span className="m-label">Screening standard</span>
              <b>Practitioner</b>
              <p>
                Candidates assessed by consultants who work in the same
                discipline, so technical claims are tested rather than accepted.
              </p>
            </div>
            <div className="metric">
              <span className="m-label">Availability and rates</span>
              <b>Honest</b>
              <p>
                Realistic guidance on what a role can be filled at in the
                current market, including when a specification needs adjusting
                to be fillable.
              </p>
            </div>
            <div className="metric">
              <span className="m-label">Contractor onboarding</span>
              <b>Supported</b>
              <p>
                Placed contractors given context and technical support, so
                ramp-up is measured in days rather than weeks.
              </p>
            </div>
            <div className="metric">
              <span className="m-label">Engagement models</span>
              <b>Flexible</b>
              <p>
                Contract, contract-to-hire, permanent and managed team
                arrangements, chosen on what the work actually requires.
              </p>
            </div>
            <div className="metric">
              <span className="m-label">Managed teams</span>
              <b>Continuity</b>
              <p>
                Where a capability rather than an individual is needed, a
                managed team with cover, oversight and knowledge retention built
                in.
              </p>
            </div>
          </div>
          <p className="metric-note">
            <b>How to read these:</b> the figures above are typical ranges we
            plan and measure against, not guarantees. In your first engagement
            we agree the baseline, the target and the measurement method in
            writing, then report against them.
          </p>
        </div>
      </section>
      {/* ===================== 3. HOW WE CAN HELP ===================== */}
      <section className="section bg-mist" id="help">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How we can help</span>
            <h2 className="h-sec wide">How we help</h2>
            <p className="lede">
              One specialist, a team, or a managed capability delivered as a
              service.
            </p>
          </div>
          <div className="pillar-grid">
            <article className="pillar reveal">
              <div className="icon-tile">
                <svg>
                  <use href="#i-staffing"></use>
                </svg>
              </div>
              <h3>Find the right people</h3>
              <p>
                Technical screening by practitioners, against what the role
                actually requires rather than what the specification lists.
              </p>
              <ul>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Role definition and specification review</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Practitioner-led technical screening</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Market rate and availability guidance</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Contract, contract-to-hire and permanent</span>
                </li>
              </ul>
            </article>
            <article className="pillar reveal">
              <div className="icon-tile">
                <svg>
                  <use href="#i-users"></use>
                </svg>
              </div>
              <h3>Build a team</h3>
              <p>
                Where one person is not enough: assembling a team with the right
                mix of skills, seniority and delivery experience.
              </p>
              <ul>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Project team assembly</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Skills mix and seniority balance</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Onboarding and knowledge transfer</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Team continuity and cover</span>
                </li>
              </ul>
            </article>
            <article className="pillar reveal">
              <div className="icon-tile">
                <svg>
                  <use href="#i-check"></use>
                </svg>
              </div>
              <h3>Manage the capability</h3>
              <p>
                A managed team option where you want the outcome rather than the
                recruitment, with oversight and continuity included.
              </p>
              <ul>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Managed delivery teams</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Technical oversight and quality</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Absence and turnover cover</span>
                </li>
                <li>
                  <svg>
                    <use href="#i-check"></use>
                  </svg>
                  <span>Knowledge retention and documentation</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      {/* ===================== 4. WHAT'S INCLUDED ===================== */}
      <section className="section bg-paper" id="included">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What's included</span>
            <h2 className="h-sec wide">How we work with you</h2>
            <p className="lede">
              Engagement models vary widely. These are the ways clients
              typically use us.
            </p>
          </div>
          <div className="task-legend reveal">
            <span>
              <i></i>Core — delivered in most engagements
            </span>
            <span>
              <i></i>Industry — shaped by your sector's rules
            </span>
            <span>
              <i></i>Challenge — scoped to a specific problem
            </span>
          </div>
          <div className="task-board">
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-core">Core</span>
                <h3>Role definition and specification review</h3>
              </div>
              <p>
                Reviewing the requirement before searching, because unrealistic
                or keyword-driven specifications are the most common reason
                roles stay open.
              </p>
            </article>
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-core">Core</span>
                <h3>Practitioner-led technical screening</h3>
              </div>
              <p>
                Candidates assessed by consultants working in the same
                discipline, testing actual capability rather than confirming a
                CV.
              </p>
            </article>
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-core">Core</span>
                <h3>Contract and interim placement</h3>
              </div>
              <p>
                Specialist contractors for defined pieces of work, with
                realistic availability and rate guidance provided before the
                search begins.
              </p>
            </article>
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-core">Core</span>
                <h3>Contract-to-hire placement</h3>
              </div>
              <p>
                Engagement models that let both sides assess fit properly before
                a permanent commitment is made.
              </p>
            </article>
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-core">Core</span>
                <h3>Permanent recruitment</h3>
              </div>
              <p>
                Permanent placement for technical and delivery roles, with the
                same practitioner-led screening standard applied.
              </p>
            </article>
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-core">Core</span>
                <h3>Project team assembly</h3>
              </div>
              <p>
                Building a complete team with the right mix of skills and
                seniority, rather than filling roles individually and hoping the
                mix works.
              </p>
            </article>
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-challenge">Challenge</span>
                <h3>Emergency cover for a departure</h3>
              </div>
              <p>
                Where a key technical person has left unexpectedly: rapid
                interim cover, knowledge capture and a plan for permanent
                replacement.
              </p>
            </article>
            <article className="task-row reveal">
              <div className="task-head">
                <span className="task-tag t-industry">Industry</span>
                <h3>Cleared and regulated roles</h3>
              </div>
              <p>
                Placements requiring background checks, security clearance,
                professional registration or sector-specific compliance
                obligations.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* ===================== 5. HOW WE DO IT ===================== */}
      <section className="section bg-mist" id="approach">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Our approach</span>
            <h2 className="h-sec wide">How placements work</h2>
            <p className="lede">
              Deliberately slower at the start, because a poor match costs
              everyone more later.
            </p>
          </div>
          <div className="process reveal">
            <div className="step">
              <span className="step-n">1</span>
              <h4>Discover</h4>
              <p>
                Understand the work, the team, the technical environment and
                what success looks like in the first ninety days.
              </p>
            </div>
            <div className="step">
              <span className="step-n">2</span>
              <h4>Align</h4>
              <p>
                Review the specification for realism, and agree rate,
                availability and engagement model honestly before searching.
              </p>
            </div>
            <div className="step">
              <span className="step-n">3</span>
              <h4>Design</h4>
              <p>
                Define the screening approach, including the technical
                assessment appropriate to the discipline.
              </p>
            </div>
            <div className="step">
              <span className="step-n">4</span>
              <h4>Implement</h4>
              <p>
                Screen, shortlist and support the interview process, with
                candidate feedback provided both ways.
              </p>
            </div>
            <div className="step">
              <span className="step-n">5</span>
              <h4>Optimize</h4>
              <p>
                Check in after placement, resolve onboarding gaps early, and
                review fit at agreed points.
              </p>
            </div>
          </div>
          <div className="sol-note reveal">
            <svg>
              <use href="#i-check"></use>
            </svg>
            <p>
              <b>We will tell you when a role is not fillable as specified.</b>{" "}
              Sometimes the honest answer is that the market rate is higher, the
              skill combination is unrealistic, or the work would be better done
              as a project than a hire.
            </p>
          </div>
        </div>
      </section>
      {/* ===================== 6. WHY CHOOSE US ===================== */}
      <section className="section bg-navy" id="why-us">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Why choose us</span>
            <h2 className="h-sec wide">
              Why organizations use us for technical talent
            </h2>
            <p className="lede">
              We are a consultancy that staffs, not an agency that also mentions
              technology.
            </p>
          </div>
          <div className="reason-grid">
            <article className="reason reveal">
              <span className="reason-icon">
                <svg>
                  <use href="#i-users"></use>
                </svg>
              </span>
              <div>
                <h3>Screened by people who do the job</h3>
                <p>
                  Our consultants assess candidates in their own discipline.
                  They would potentially have to work alongside whoever we
                  place, which concentrates the mind.
                </p>
              </div>
            </article>
            <article className="reason reveal">
              <span className="reason-icon">
                <svg>
                  <use href="#i-check"></use>
                </svg>
              </span>
              <div>
                <h3>Honest about the market</h3>
                <p>
                  If a role cannot be filled at the rate or specification
                  offered, we say so at the outset rather than searching for
                  months.
                </p>
              </div>
            </article>
            <article className="reason reveal">
              <span className="reason-icon">
                <svg>
                  <use href="#i-globe"></use>
                </svg>
              </span>
              <div>
                <h3>Consulting alternative available</h3>
                <p>
                  Sometimes the answer is a project rather than a hire. Because
                  we deliver both, we can offer either without pretending one is
                  the only option.
                </p>
              </div>
            </article>
            <article className="reason reveal">
              <span className="reason-icon">
                <svg>
                  <use href="#i-staffing"></use>
                </svg>
              </span>
              <div>
                <h3>Continuity where it matters</h3>
                <p>
                  Managed team arrangements include cover for absence and
                  turnover, so a departure does not become your problem again.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* ===================== 7. CUSTOMER SUCCESS ===================== */}
      <section className="section bg-paper" id="stories">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Customer success</span>
            <h2 className="h-sec wide">What this looks like in practice</h2>
            <p className="lede">
              Illustrative engagements, written in the structure we use for real
              case studies.
            </p>
          </div>
          <div className="success-grid">
            <article className="story-card reveal">
              <div className="story-top">
                <div className="story-kicker">
                  <span className="story-industry">Financial Services</span>
                  <span className="demo-chip">Sample story</span>
                </div>
                <h3>Interim cover after an unexpected departure</h3>
                <p className="story-summary">
                  A senior platform engineer left mid-programme. Interim cover
                  was placed quickly while a permanent search ran in parallel.
                </p>
              </div>
              <div className="story-metrics">
                <div className="story-metric">
                  <b>Days</b>
                  <span>Sample time to interim cover</span>
                </div>
                <div className="story-metric">
                  <b>0</b>
                  <span>Programme milestones missed</span>
                </div>
              </div>
              <div className="story-body">
                <h4>What changed</h4>
                <ul className="story-outcomes">
                  <li>
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                    <span>
                      Interim contractor onboarded with technical context from
                      our consultants.
                    </span>
                  </li>
                  <li>
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                    <span>
                      Knowledge capture completed during the interim period.
                    </span>
                  </li>
                  <li>
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                    <span>
                      Permanent hire made without programme pressure distorting
                      the decision.
                    </span>
                  </li>
                </ul>
                <a className="link-more" href="/#contact">
                  Talk about a similar outcome{" "}
                  <svg>
                    <use href="#i-arrow-r"></use>
                  </svg>
                </a>
              </div>
            </article>
            <article className="story-card reveal">
              <div className="story-top">
                <div className="story-kicker">
                  <span className="story-industry">Manufacturing</span>
                  <span className="demo-chip">Sample story</span>
                </div>
                <h3>A team rather than a sequence of individual hires</h3>
                <p className="story-summary">
                  A data programme needed several complementary skills.
                  Assembling a balanced team proved faster and more effective
                  than filling roles one at a time.
                </p>
              </div>
              <div className="story-metrics">
                <div className="story-metric">
                  <b>1 team</b>
                  <span>Assembled with skills mix</span>
                </div>
                <div className="story-metric">
                  <b>Managed</b>
                  <span>Oversight and cover included</span>
                </div>
              </div>
              <div className="story-body">
                <h4>What changed</h4>
                <ul className="story-outcomes">
                  <li>
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                    <span>
                      Skills mix and seniority balanced deliberately rather than
                      by availability.
                    </span>
                  </li>
                  <li>
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                    <span>
                      Technical oversight included in the arrangement.
                    </span>
                  </li>
                  <li>
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                    <span>
                      Documentation and knowledge retention built into the
                      engagement.
                    </span>
                  </li>
                </ul>
                <a className="link-more" href="/#contact">
                  Talk about a similar outcome{" "}
                  <svg>
                    <use href="#i-arrow-r"></use>
                  </svg>
                </a>
              </div>
            </article>
          </div>
          <p className="demo-disclaimer">
            <b>Demo content:</b> the organizations and measurements above are
            illustrative placeholders written to show the structure of a real
            story. Replace them with verified client results and approved
            references before publishing.
          </p>
        </div>
      </section>
      {/* ===================== 8. INSIGHTS ===================== */}
      <section className="section bg-mist" id="insights">
        <div className="wrap">
          <div
            className="sec-head reveal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "32px",
              maxWidth: "none",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "700px" }}>
              <span className="eyebrow">Insights</span>
              <h2 className="h-sec wide">Reading on technical hiring</h2>
              <p className="lede">
                Material for leaders trying to fill difficult technical roles.
              </p>
            </div>
            <a className="btn btn-outline" href="/#insights">
              View all resources{" "}
              <svg>
                <use href="#i-arrow-r"></use>
              </svg>
            </a>
          </div>
          <div className="insights-grid">
            <a className="post reveal" href="/#insights">
              <div className="post-img">
                <svg>
                  <use href="#i-staffing"></use>
                </svg>
              </div>
              <div className="post-body">
                <div className="post-meta">
                  <span className="chip">Guide</span>
                  <span>7 min read</span>
                </div>
                <h3>
                  Writing a technical job specification that can be filled
                </h3>
                <p>
                  Which requirements genuinely matter, which combinations are
                  unrealistic, and how keyword-driven specifications exclude
                  capable people.
                </p>
                <span className="link-more">
                  Read more{" "}
                  <svg>
                    <use href="#i-arrow-r"></use>
                  </svg>
                </span>
              </div>
            </a>
            <a className="post reveal" href="/#insights">
              <div className="post-img">
                <svg>
                  <use href="#i-users"></use>
                </svg>
              </div>
              <div className="post-body">
                <div className="post-meta">
                  <span className="chip">Blog</span>
                  <span>5 min read</span>
                </div>
                <h3>Hire, contract or project?</h3>
                <p>
                  How to decide whether a piece of work needs a permanent hire,
                  a contractor, or a delivered project — and the cost of getting
                  it wrong.
                </p>
                <span className="link-more">
                  Read more{" "}
                  <svg>
                    <use href="#i-arrow-r"></use>
                  </svg>
                </span>
              </div>
            </a>
            <a className="post reveal" href="/#insights">
              <div className="post-img">
                <svg>
                  <use href="#i-check"></use>
                </svg>
              </div>
              <div className="post-body">
                <div className="post-meta">
                  <span className="chip">Checklist</span>
                  <span>9 items</span>
                </div>
                <h3>Contractor onboarding checklist</h3>
                <p>
                  Access, context, technical orientation and success criteria to
                  prepare before day one, so ramp-up takes days rather than
                  weeks.
                </p>
                <span className="link-more">
                  Read more{" "}
                  <svg>
                    <use href="#i-arrow-r"></use>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* ===================== 9. NEXT STEP ===================== */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Tell us what you are trying to get done</h2>
              <p>
                Sometimes the answer is a hire, sometimes a contractor, and
                sometimes a delivered project. We will give you an honest view
                of which.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact?topic=IT staffing">
                Book a consultation{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/services">
                Browse all services{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
          <div
            className="sec-head reveal"
            style={{ marginTop: "clamp(52px,7vw,86px)" }}
          >
            <span className="eyebrow">Often combined with</span>
            <h2 className="h-sec wide">Related services</h2>
          </div>
          <div className="rel-grid">
            <a className="rel reveal" href="/services/it-strategy-consulting">
              <span className="rel-icon">
                <svg>
                  <use href="#i-strategy"></use>
                </svg>
              </span>
              <span>
                <b>IT Strategy & Consulting</b>
                <span>
                  A costed, sequenced technology plan tied to business goals.
                </span>
              </span>
            </a>
            <a className="rel reveal" href="/services/managed-it">
              <span className="rel-icon">
                <svg>
                  <use href="#i-support"></use>
                </svg>
              </span>
              <span>
                <b>Managed IT</b>
                <span>
                  24/7 service desk, monitoring and proactive maintenance.
                </span>
              </span>
            </a>
            <a
              className="rel reveal"
              href="/services/enterprise-resource-platform"
            >
              <span className="rel-icon">
                <svg>
                  <use href="#i-erp"></use>
                </svg>
              </span>
              <span>
                <b>Enterprise Resource Platform</b>
                <span>
                  One platform for finance, operations, supply chain and
                  reporting.
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

