import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";

// Leadership team data
const leadershipTeam = [
  {
    id: 1,
    name: "Name to be added",
    role: "Chief Executive Officer",
    description: "Sets the direction and owns the client relationships that matter most. Spends more time in client environments than in the office, which is deliberate.",
    icon: "i-users"
  },
  {
    id: 2,
    name: "Name to be added",
    role: "Chief Technology Officer",
    description: "Owns the technical strategy and the standards every engagement is held to. The person who decides when we say no to an architecture.",
    icon: "i-users"
  },
  {
    id: 3,
    name: "Name to be added",
    role: "VP, Consulting Services",
    description: "Runs the consulting practice across strategy, business applications and data. Accountable for whether engagements deliver what was scoped.",
    icon: "i-users"
  },
  {
    id: 4,
    name: "Name to be added",
    role: "VP, Managed Services",
    description: "Owns the 24/7 service desk and the managed estate. Judged on response times and on how rarely clients need to escalate.",
    icon: "i-users"
  },
  {
    id: 5,
    name: "Name to be added",
    role: "Director, Business Applications",
    description: "Leads the Dynamics 365 practice. Responsible for the implementation methodology and the fixed-price commitments behind it.",
    icon: "i-users"
  },
  {
    id: 6,
    name: "Name to be added",
    role: "Director, Cybersecurity",
    description: "Owns security architecture, incident response and the compliance posture we design clients toward.",
    icon: "i-users"
  },
  {
    id: 7,
    name: "Name to be added",
    role: "Director, Customer Experience",
    description: "Runs the customer experience function — the independent feedback programme and what we do about what it says.",
    icon: "i-users"
  },
  {
    id: 8,
    name: "Name to be added",
    role: "Director, People & Talent",
    description: "Owns certification, in-house training and recruitment. The reason engineers here are current rather than merely credentialed.",
    icon: "i-users"
  }
];

// Hero stats data
const heroStats = [
  { value: "8", label: "Leadership team" },
  { value: "3", label: "Named roles per engagement" },
  { value: "40+ yrs", label: "Combined experience" },
  { value: "1 day", label: "We reply to every enquiry" }
];

// How we lead - pillar data
const pillars = [
  {
    id: 1,
    icon: "i-users",
    title: "Senior people stay on the engagement",
    description: "The person who scoped the work is still involved when it is delivered. We do not staff a pitch with directors and then hand the project to whoever was available.",
    points: [
      "Named leads assigned at scoping and retained through delivery",
      "Escalation reaches a director, not a queue",
      "Handovers documented and introduced, never assumed"
    ]
  },
  {
    id: 2,
    icon: "i-target",
    title: "We say no in writing",
    description: "When a proposed approach will not deliver what a client wants, we say so before the contract rather than in the retrospective. It occasionally loses us the work.",
    points: [
      "Scope reductions and licence downgrades recommended when warranted",
      "Risks written into the proposal, not discovered in delivery",
      "Stop recommendations made when evidence does not support continuing"
    ]
  },
  {
    id: 3,
    icon: "i-chart",
    title: "Measured against an agreed baseline",
    description: "Every engagement starts by agreeing what will be measured and how. We report against those numbers afterwards, including where we fell short of the target.",
    points: [
      "Baseline, target and method agreed in writing before work starts",
      "Results reported against the original numbers, not revised ones",
      "Independent customer feedback collected at close"
    ]
  }
];

// Accountability roles data
const accountabilityRoles = [
  {
    id: 1,
    title: "PMP-certified project manager",
    description: "owns scope, schedule and the commitments in the statement of work"
  },
  {
    id: 2,
    title: "Customer experience manager",
    description: "owns the relationship and the things that are going wrong before they become escalations"
  },
  {
    id: 3,
    title: "Named technical lead",
    description: "owns the architecture and the decisions that will still be constraining you in three years"
  },
  {
    id: 4,
    title: "Director as escalation",
    description: "named at kick-off, reachable directly, and expected to be used if the other three are not enough"
  }
];

// Subnav links data
const subnavLinks = [
  { id: 1, label: "The team", href: "#team" },
  { id: 2, label: "How we lead", href: "#how" },
  { id: 3, label: "Accountability", href: "#accountability" },
  { id: 4, label: "Talk to us", href: "/#contact", isCta: true }
];

export default function CompanyLeadership() {
  const mainRef = useRef(null);

  useDocumentMeta(
    "Leadership | JJC Systems",
    "The JJC Systems leadership team, and what each of them is accountable for.",
  );
  usePageEffects(mainRef);

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Leadership",
    },
  ];

  const hero = {
    eyebrow: "Leadership",

    heading: "The people accountable for the work",

    lede:
      "A consultancy is only as good as the judgement of the people running it. This is the team that decides what we take on, what we decline, and what happens when an engagement is not going the way it should.",

    primaryCtaText: "Talk to our team",
    primaryCtaLink: "/#contact",

    secondaryCtaText: "Read about the firm",
    secondaryCtaAnchor: "/company/about",

    glance: {
      title: "How to read this page",

      items: [
        "Each role is listed by what it is accountable for, not by biography",
        "Senior people stay on the engagement they scoped",
        "A named director is your escalation from day one",
        "Photographs and names are placeholders pending your sign-off",
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
          {subnavLinks.map((link) => (
            link.isCta ? (
              <a key={link.id} className="subnav-cta link-more" href={link.href}>
                {link.label}{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
            ) : (
              <a key={link.id} href={link.href}>{link.label}</a>
            )
          ))}
        </div>
      </nav>

      <section className="section bg-paper" id="team">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Leadership team</span>
            <h2 className="h-sec wide">
              Eight people, and what each of them is accountable for
            </h2>
            <p className="lede">
              We have listed the accountability rather than the biography. In
              our experience the useful question a prospective client asks is
              not where someone studied — it is who to talk to when a decision
              needs making, and who carries it when a commitment is missed.
            </p>
          </div>
          <div className="team-grid">
            {leadershipTeam.map((member) => (
              <article className="member reveal" key={member.id}>
                <div className="photo">
                  <svg>
                    <use href={`#${member.icon}`}></use>
                  </svg>
                </div>
                <div className="who-they-are">
                  <b>{member.name}</b>
                  <span className="role">{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="ph-note reveal">
            <svg>
              <use href="#i-check"></use>
            </svg>
            <p>
              <b>Placeholder content:</b> names, photographs and individual
              biographies are placeholders. Replace each with the person's name,
              a professional headshot at 1:1 aspect ratio, and two or three
              sentences in their own voice. Where someone holds a relevant
              certification or industry credential, name it specifically — a
              stated PMP or Microsoft credential is worth considerably more to
              an executive reader than a generic claim of experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-mist" id="how">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How we lead</span>
            <h2 className="h-sec wide">What this team does differently</h2>
            <p className="lede">
              Three habits that shape how engagements are run, and that clients
              tend to notice within the first month.
            </p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar reveal" key={pillar.id}>
                <div className="icon-tile">
                  <svg>
                    <use href={`#${pillar.icon}`}></use>
                  </svg>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <ul>
                  {pillar.points.map((point, index) => (
                    <li key={index}>
                      <svg>
                        <use href="#i-check"></use>
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy" id="accountability">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Accountability</span>
            <h2 className="h-sec wide">Who you actually deal with</h2>
            <p className="lede">
              Three named roles on every engagement of any size, with clear
              responsibility for different things. You should never be uncertain
              who to call.
            </p>
          </div>
          <ul className="biz-outcomes reveal">
            {accountabilityRoles.map((role) => (
              <li key={role.id}>
                <svg>
                  <use href="#i-check"></use>
                </svg>
                <span>
                  <b>{role.title}</b> — {role.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Want to talk to one of them?</h2>
              <p>
                Tell us what you are trying to decide and we will put you in
                front of the person who actually owns that area — not a
                salesperson who will relay the question. If we are not the right
                firm for what you need, we will say so on that call.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">
                Talk to our team{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/company/locations">
                See our locations{" "}
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