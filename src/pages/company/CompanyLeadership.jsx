import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import { useGetTeamQuery } from "../../redux/api.jsx";

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

  const { data, isLoading, error } = useGetTeamQuery();
  const teamData = data?.data?.items || [];

  // Sort team by order if available
  const sortedTeam = [...teamData].sort((a, b) => (a.order || 0) - (b.order || 0));

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

  // Helper function to get image URL
  const getImageUrl = (member) => {
    if (member.image?.url) return member.image.url;
    if (member.icon) return member.icon;
    return null;
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

          {isLoading ? (
            <div className="loading-state">
              <p>Loading team members...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>Unable to load team members. Please try again later.</p>
            </div>
          ) : sortedTeam.length === 0 ? (
            <div className="empty-state">
              <p>No team members found.</p>
            </div>
          ) : (
            <div className="team-grid">
              {sortedTeam.map((member) => (
                <article className="member reveal" key={member._id}>
                  <div className="photo">
                    {getImageUrl(member) ? (
                      <img
                        src={getImageUrl(member)}
                        alt={member.title}
                        loading="lazy"
                      />
                    ) : (
                      <svg>
                        <use href="#i-users"></use>
                      </svg>
                    )}
                  </div>
                  <div className="who-they-are">
                    <b>{member.title}</b>
                    <span className="role">{member.subtitle}</span>
                    {member.description && <p>{member.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}

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