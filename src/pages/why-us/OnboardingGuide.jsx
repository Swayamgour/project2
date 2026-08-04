import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";

export default function OnboardingGuide() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Onboarding Guide | JJC Systems",
    "How onboarding works: your certified project and account managers, an independent customer success team, and six stages from consultation to continuous optimization."
  );
  usePageEffects(mainRef);

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Onboarding Guide",
    },
  ];

  const hero = {
    eyebrow: "Onboarding Guide",

    heading: "Six stages, three named people, and no surprises",

    lede:
      "You are assigned a certified project manager and an account manager as your single point of contact — and an independent customer success team whose only job is to make sure that relationship is working. We believe in a personal touch and in people success first.",

    primaryCtaText: "Start a conversation",
    primaryCtaLink: "/#contact",

    secondaryCtaText: "Read our approach",
    secondaryCtaAnchor: "/why-us/our-approach",

    glance: {
      title: "What you get",

      items: [
        "A PMP-certified project manager, named from day one",
        "An account manager as your single point of contact",
        "An independent customer success team checking on both",
        "A written plan with owners and dates on both sides",
        "A 90-day checklist you can hold us to",
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
          <a href="#team">Your team</a>
          <a href="#stages">The six stages</a>
          <a href="#first90">First 90 days</a>
          <a href="#you">What we need from you</a>
          <a className="subnav-cta link-more" href="/#contact">Talk to us <svg><use href="#i-arrow-r" /></svg></a>
        </div>
      </nav>


      <section className="section bg-paper" id="team">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Your team</span>
            <h2 className="h-sec wide">One point of contact, and somebody independent checking on them</h2>
            <p className="lede">You are assigned a certified project manager and an account manager who together are your single point of contact for every aspect of the relationship. Then there is a third team, which is the part most firms do not have.</p>
          </div>
          <div className="pillar-grid">
            <article className="pillar reveal">
              <div className="icon-tile"><svg><use href="#i-project" /></svg></div>
              <h3>Your project manager</h3>
              <p>PMP-certified, and accountable for scope, schedule and every commitment in the statement of work. They run the plan, chase the dependencies &mdash; including ours &mdash; and tell you early when something is going to slip.</p>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Owns the plan, the dates and the risks</span></li>
                <li><svg><use href="#i-check" /></svg><span>Weekly status against the original commitments</span></li>
                <li><svg><use href="#i-check" /></svg><span>Raises scope changes as they arise, in writing</span></li>
              </ul>
            </article>
            <article className="pillar reveal">
              <div className="icon-tile"><svg><use href="#i-users" /></svg></div>
              <h3>Your account manager</h3>
              <p>Owns the commercial relationship and the things that sit outside any single project &mdash; licensing, procurement, renewals and the question of what you should be thinking about next quarter.</p>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Single point of contact across every engagement</span></li>
                <li><svg><use href="#i-check" /></svg><span>Licensing and renewal calendar visibility</span></li>
                <li><svg><use href="#i-check" /></svg><span>Coordinates specialists so you do not have to</span></li>
              </ul>
            </article>
            <article className="pillar reveal">
              <div className="icon-tile"><svg><use href="#i-star" /></svg></div>
              <h3>Our customer success team</h3>
              <p>Independent of both. Their only job is to make sure the relationship with your project and account managers is working &mdash; and they report to someone other than the people whose work they are checking.</p>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Independent of the delivery and commercial teams</span></li>
                <li><svg><use href="#i-check" /></svg><span>Contacts you directly, not through your account manager</span></li>
                <li><svg><use href="#i-check" /></svg><span>Escalates internally without needing your permission</span></li>
              </ul>
            </article>
          </div>
          <div className="chal-note reveal">
            <svg><use href="#i-target" /></svg>
            <p><b>Why independence matters here.</b> If the person asking whether you are happy is the same person whose renewal depends on the answer, you will get a polite response and we will learn nothing. Separating those two roles is the only structural way to hear about a problem while it is still small.</p>
          </div>
          <div className="ph-note reveal"><svg><use href="#i-check" /></svg><p><b>Placeholder content:</b> the site states a 100% client retention and success rate. Before publishing, state the period this covers and how retention is defined &mdash; by logo, by revenue, or by contract renewal. An unqualified 100% invites scepticism from the executive readers this page is written for; the same figure with a stated period and definition is genuinely persuasive.</p></div>
        </div>
      </section>

      <section className="section bg-mist" id="stages">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The six stages</span>
            <h2 className="h-sec wide">What onboarding actually looks like, week by week</h2>
            <p className="lede">Each stage lists what we do and what we need from you. The second column is the one worth reading &mdash; onboarding projects almost never fail on the supplier's tasks. They fail because the client's people were never actually available, and nobody said so at the start.</p>
          </div>
          <div className="stage-list">
            <article className="stage reveal">
              <div className="stage-n">01</div>
              <div className="stage-b">
                <span className="stage-when">Week 1</span>
                <h3>Initial Consultation and Needs Assessment</h3>
                <p>Before anything is planned, we establish what you actually need &mdash; which is frequently different from what the original enquiry described. Your project manager, account manager and a technical lead all attend, so nothing has to be relayed second-hand.</p>
                <div className="stage-cols">
                  <div><h4>What we do</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Structured discovery against our industry question sets</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Current-state review of the systems in scope</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Success measures and baseline agreed in writing</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Named contacts introduced on both sides</span></li>
                  </ul></div>
                  <div className="yours"><h4>What we need from you</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>The people who actually run the process, for two hours</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Access to review current configuration, read-only</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Your view of what has been tried before and why it did not stick</span></li>
                  </ul></div>
                </div>
              </div>
            </article>
            <article className="stage reveal">
              <div className="stage-n">02</div>
              <div className="stage-b">
                <span className="stage-when">Week 1&ndash;2</span>
                <h3>Customized Onboarding Plan</h3>
                <p>We write the plan for your organization rather than issuing a template. It states what happens in which order, who owns each step, what we need from you and when &mdash; including the dates where your people are the constraint rather than ours.</p>
                <div className="stage-cols">
                  <div><h4>What we do</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Sequenced plan with owners and dates on both sides</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Risks and dependencies stated upfront, not discovered later</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Agreed communication rhythm and escalation path</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Time commitment from your team quantified in hours</span></li>
                  </ul></div>
                  <div className="yours"><h4>What we need from you</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Sign-off on the plan and the success measures</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Confirmation of who can approve decisions, and how quickly</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Your change calendar, including freeze periods</span></li>
                  </ul></div>
                </div>
              </div>
            </article>
            <article className="stage reveal">
              <div className="stage-n">03</div>
              <div className="stage-b">
                <span className="stage-when">Week 2&ndash;4</span>
                <h3>Technical Setup and Configuration</h3>
                <p>The build itself, in a controlled environment before it touches anything live. We configure to the agreed design, and where the design turns out to be wrong we say so immediately rather than building it anyway and noting it in the retrospective.</p>
                <div className="stage-cols">
                  <div><h4>What we do</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Environment provisioning and tenant configuration</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Identity, access and security baseline applied during the build</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Integration to the systems you are keeping, with monitoring</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Configuration documented as we go, for your team</span></li>
                  </ul></div>
                  <div className="yours"><h4>What we need from you</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Access to systems in scope, at the agreed level</span></li>
                    <li><svg><use href="#i-check" /></svg><span>A technical counterpart available for questions</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Decisions on the handful of choices only you can make</span></li>
                  </ul></div>
                </div>
              </div>
            </article>
            <article className="stage reveal">
              <div className="stage-n">04</div>
              <div className="stage-b">
                <span className="stage-when">Week 3&ndash;5</span>
                <h3>Secure Data Migration</h3>
                <p>Data moves in rehearsed waves with a rollback path, and we reconcile the result against a period you have already closed and signed off. If the migrated data cannot reproduce numbers you have already agreed, the migration is not finished.</p>
                <div className="stage-cols">
                  <div><h4>What we do</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Data quality assessment before anything moves</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Rehearsed migration with reconciliation to a closed period</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Encryption in transit and at rest, with access logged</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Rollback tested, not assumed</span></li>
                  </ul></div>
                  <div className="yours"><h4>What we need from you</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Confirmation of what must migrate and what should not</span></li>
                    <li><svg><use href="#i-check" /></svg><span>A finance or data owner to verify the reconciliation</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Retention and disposal decisions for legacy data</span></li>
                  </ul></div>
                </div>
              </div>
            </article>
            <article className="stage reveal">
              <div className="stage-n">05</div>
              <div className="stage-b">
                <span className="stage-when">Week 4&ndash;6</span>
                <h3>Training and Empowerment</h3>
                <p>Separate sessions for administrators, power users and everyone else, because they need different things. The goal is that your team can maintain the configuration themselves &mdash; which is deliberately not in our short-term commercial interest.</p>
                <div className="stage-cols">
                  <div><h4>What we do</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Role-based training rather than one session for everyone</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Administrator enablement so your team can make changes</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Documentation written for your staff, not for us</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Champions identified and equipped to support their peers</span></li>
                  </ul></div>
                  <div className="yours"><h4>What we need from you</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Time in people's calendars, protected and not optional</span></li>
                    <li><svg><use href="#i-check" /></svg><span>A nominated internal owner for the system going forward</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Honest feedback on what did not land</span></li>
                  </ul></div>
                </div>
              </div>
            </article>
            <article className="stage reveal">
              <div className="stage-n">06</div>
              <div className="stage-b">
                <span className="stage-when">Ongoing</span>
                <h3>Continuous Support and Optimization</h3>
                <p>After go-live the relationship changes shape rather than ending. Agreed response times, release readiness for platform changes, and a periodic review against the measures we baselined at the start &mdash; including where we fell short.</p>
                <div className="stage-cols">
                  <div><h4>What we do</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>Named support team with agreed response times</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Release management for platform update waves</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Quarterly review against the original baseline</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Roadmap conversation, not just an incident report</span></li>
                  </ul></div>
                  <div className="yours"><h4>What we need from you</h4><ul>
                    <li><svg><use href="#i-check" /></svg><span>A regular hour for the review, genuinely attended</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Early warning of business changes that affect the estate</span></li>
                    <li><svg><use href="#i-check" /></svg><span>Your continued honesty when something is not working</span></li>
                  </ul></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-navy" id="first90">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">First 90 days</span>
            <h2 className="h-sec wide">What you should expect to have happened</h2>
            <p className="lede">A checklist you can hold us to. If any of these has not happened by day ninety, something has gone wrong and we would rather you raised it than waited for the quarterly review.</p>
          </div>
          <ul className="biz-outcomes reveal">
            <li><svg><use href="#i-check" /></svg><span><b>You know exactly who to call</b> &mdash; three named people, with direct contact details, and a director as escalation</span></li>
            <li><svg><use href="#i-check" /></svg><span><b>The baseline is documented</b> &mdash; the measures we agreed, the starting numbers, and how they will be measured</span></li>
            <li><svg><use href="#i-check" /></svg><span><b>Something is live and useful</b> &mdash; not a whole programme, but a first phase your people are actually using</span></li>
            <li><svg><use href="#i-check" /></svg><span><b>Your team has been trained</b> &mdash; and at least one of your own people can make routine changes without calling us</span></li>
            <li><svg><use href="#i-check" /></svg><span><b>Documentation is in your hands</b> &mdash; written for your staff, in your possession, not held on our systems</span></li>
            <li><svg><use href="#i-check" /></svg><span><b>Customer success has contacted you independently</b> &mdash; and you have told them something you would not have told your account manager</span></li>
          </ul>
        </div>
      </section>

      <section className="section bg-paper" id="you">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What we need from you</span>
            <h2 className="h-sec wide">The three things that decide whether this goes well</h2>
            <p className="lede">We can control our own delivery. These three are yours, and in our experience they predict the outcome more reliably than anything in the technical design.</p>
          </div>
          <div className="chal-grid">
            <article className="chal reveal"><span className="chal-n">01</span><div>
              <h3>People who are genuinely available</h3>
              <p>We will tell you in hours how much of your team's time the project needs, and we hold ourselves to it. What we cannot do is proceed without it. A named person who is too busy to attend is the most common cause of a slipped date, and it is visible from about week two.</p></div></article>
            <article className="chal reveal"><span className="chal-n">02</span><div>
              <h3>A decision-maker who can decide</h3>
              <p>Most projects hit two or three choices only you can make. If those have to go through a committee that meets monthly, the timeline reflects that. Tell us upfront where approval actually sits and we will plan around it rather than being surprised by it.</p></div></article>
            <article className="chal reveal"><span className="chal-n">03</span><div>
              <h3>Honesty when something is not working</h3>
              <p>If our consultant is not landing with your team, or the design feels wrong, say so in week three rather than at close-out. We would much rather have an uncomfortable conversation early than a polite one followed by a non-renewal.</p></div></article>
          </div>
        </div>
      </section>


      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Thinking about what a first engagement would look like?</h2>
              <p>Tell us the scope you have in mind and we will map it against these six stages &mdash; with a realistic timeline, the hours we would need from your team, and the points where your decisions become the critical path.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">Start a conversation <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="/why-us/faq">Read the FAQ <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
