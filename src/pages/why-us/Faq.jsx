import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';

function FAQ() {

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "FAQ",
    },
  ];

  const hero = {
    eyebrow: "Frequently Asked Questions",

    heading: "The questions you would ask on a call, answered here",

    lede:
      "If a question you care about is not here, submit it from the contact form. We will answer it.",

    primaryCtaText: "Ask us something else",
    primaryCtaLink: "/contact",

    secondaryCtaText: "Read our approach",
    secondaryCtaAnchor: "/approach",

    glance: {
      title: "How to use this page",

      items: [
        "Grouped and can be scrolled by what you are trying to find out",
        "Written as we would answer on a call, not as marketing copy",
        "Includes when we would tell you not to hire us",
        "Ask anything not covered, and we will answer",
      ],
    },
  };

  return (
    <main id="main">
      {/* Hero Section */}
      <HeroSection
        hero={hero}
        breadcrumbs={breadcrumbs}
      />

      {/* Subnavigation */}
      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          <a href="#start">Getting started</a>
          <a href="#fit">Fit and scope</a>
          <a href="#money">Commercials</a>
          <a href="#delivery">Delivery and people</a>
          <a href="#security">Security, compliance and data</a>
          <a href="#support">Support and service levels</a>
          <a href="#exit">Ownership and exit</a>
          <a className="subnav-cta link-more" href="/contact">Talk to us <svg><use href="#i-arrow-r" /></svg></a>
        </div>
      </nav>

      {/* FAQ Content */}
      <section className="section bg-paper">
        <div className="wrap" style={{ maxWidth: '920px' }}>
          <div className="sec-head reveal">
            <span className="eyebrow">Before you get in touch</span>
            <h2 className="h-sec wide">The questions people actually ask</h2>
            <p className="lede">These are the questions we get asked most often in first conversations.</p>
          </div>

          {/* Getting Started */}
          <div className="faq-group reveal" id="start">
            <h3>Getting started</h3>
            <p>What a first conversation involves, and what it costs.</p>
            <div className="faq">
              <details>
                <summary>How do we start working with you?<span className="pm"></span></summary>
                <div className="ans">
                  <p>With a conversation, not a proposal. The first call is thirty to sixty minutes and it is mostly questions from us — what is slow, what is manual, what keeps getting escalated, and what you have already tried. There is no charge and no obligation, and we will not send a quote afterwards unless you ask for one.</p>
                  <p>If it looks like there is something worth doing, the next step is usually a working demonstration or a scoped proof of concept rather than a document.</p>
                </div>
              </details>
              <details>
                <summary>Do we need a defined requirement before contacting you?<span className="pm"></span></summary>
                <div className="ans">
                  <p>No, and most clients do not have one. Describing a symptom is enough — the report nobody trusts, the process that takes three weeks, the system everyone works around. Turning that into a requirement is part of what you are hiring us for.</p>
                  <p>
                    If you do arrive with a detailed specification, we will read it carefully, and we will tell you what we think.</p>
                </div>
              </details>
              <details>
                <summary>Do you charge for discovery?<span className="pm"></span></summary>
                <div className="ans">
                  <p>The initial conversation and a walkthrough of our existing proofs of concept are free. A full discovery engagement — where we spend days with your teams and produce a documented current-state assessment and roadmap — is chargeable, and we will tell you the price before it starts.</p>
                  <p>What you own at the end of a paid discovery is yours, including if you take it to another supplier. We will not produce a discovery document whose only real deliverable is a proposal to hire us for the next phase.</p>
                </div>
              </details>
              <details>
                <summary>How quickly can you start?<span className="pm"></span></summary>
                <div className="ans">
                  <p>It depends on the size of the engagement and the specialists involved. Small projects can usually start within two to three weeks; a large implementation might take longer to staff properly. We discuss the timeline during the agreement review. </p>
                </div>
              </details>
            </div>
          </div>

          {/* Fit and Scope */}
          <div className="faq-group reveal" id="fit">
            <h3>Fit and scope</h3>
            <p>Whether we are the right firm for your situation — including when we are not.</p>
            <div className="faq">
              <details>
                <summary>Are we too small to be worth your time?<span className="pm"></span></summary>
                <div className="ans">
                  <p>No. A significant part of our work is with small and mid-market organizations, and we scope engagements for that reality — phase one measured in weeks, priced so it proves itself before phase two is commissioned. We are not structured to only take enterprise programmes.</p>
                </div>
              </details>
              <details>
                <summary>Are we too large or too complex?<span className="pm"></span></summary>
                <div className="ans">
                  <p>We run multi-entity, multi-country implementations across regulated industries, and we have a global team to staff them. We are here to solve complex problems at a large scale.</p>
                </div>
              </details>
              <details>
                <summary>Do you only work with Microsoft technology?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Microsoft is our center of gravity and where our deepest expertise sits. But we hold partnerships across infrastructure, networking and security — Dell, Lenovo, HPE, Cisco, Fortinet, Check Point, Sentinel One, Proofpoint and others.</p>
                  <p>
                    We integrate with whatever you are keeping. We have no interest in a rip-and-replace project for its own sake, and we will say so when your existing system is fine.
                  </p>
                </div>
              </details>
              <details>
                <summary>Our industry is not on your list. Does that matter?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Less than you would think. The disciplines that make an industry solution work — understanding the process, the regulator and the reporting obligation — transfer further than the sector label suggests. Describe your operation, and we will tell you what we think. </p>
                </div>
              </details>
              <details>
                <summary>Will you replace our internal IT team?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Most of our managed services work sits alongside an internal team, taking on the parts they do not have capacity or specialization for. Some clients have no internal function and want everything run by us.</p>
                </div>
              </details>
              <details>
                <summary>When would you tell us not to hire you?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Regularly. Common examples: when your existing licensing already covers what you are about to buy, when a Power Platform application on your current systems would solve the problem more cheaply than the SAAS subscription you were considering, when a Copilot deployment should wait until permissions are cleaned up, and when a workload should not move to cloud at all.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Commercials */}
          <div className="faq-group reveal" id="money">
            <h3>Commercials</h3>
            <p>How we price, what is fixed, and what happens when something changes.</p>
            <div className="faq">
              <details>
                <summary>How do you price engagements?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Defined project work is fixed price, agreed before anything starts. </p>
                  <p>Managed services are priced per period against agreed service levels. Resourcing is priced per person per period. Advisory can be either, depending on whether the outcome is defined.</p>
                </div>
              </details>
              <details>
                <summary>What happens if the scope changes mid-project?<span className="pm"></span></summary>
                <div className="ans">
                  <p>It is raised in writing when it arises, with the cost and schedule impact stated, and you decide. We do not perform out-of-scope work and invoice for it afterward.</p>
                  {/* <p>Some scope changes are our fault — a design we got wrong, an estimate we missed. Those we absorb, and we will say which is which.</p> */}
                </div>
              </details>
              <details>
                <summary>Do you resell Microsoft licences?<span className="pm"></span></summary>
                <div className="ans">
                  <p>We can, and many clients find it simpler to procure through one channel with one invoice and one renewal calendar. But our first piece of work is frequently a licensing review that reduces what you buy.</p>
                  <p>If you would rather buy licenses elsewhere and use us only for services, that is entirely fine and changes nothing about how we work with you.</p>
                </div>
              </details>
              <details>
                <summary>Are there long-term contract commitments?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Project work is contracted for the project. Managed services typically run on a twelve-month term with a notice period, because a service desk has to be staffed against a known volume — but we will discuss shorter initial terms where you want to try before committing.</p>
                  <p>It varies too much for a number here to be honest. A licensing and entitlement review is a small, defined piece of work. A Power Platform application for one process is modest. A multi-entity ERP implementation is a different order of magnitude entirely.</p>
                </div>
              </details>
              <details>
                <summary>What does a typical first engagement cost?<span className="pm"></span></summary>
                <div className="ans">
                  <p>What we can tell you is that we will give you a fixed number before you commit, and we will scope phase one so it pays back before phase two is authorized.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Delivery and People */}
          <div className="faq-group reveal" id="delivery">
            <h3>Delivery and people</h3>
            <p>Who does the work, how it is run, and what happens when it slips.</p>
            <div className="faq">
              <details>
                <summary>Who will actually work on our project?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Named people, introduced at kick-off, and the same people through delivery. The person who scoped your work stays involved.

                  </p>
                  <p>

                    Every engagement of any size has three named roles: a PMP-certified project manager, a customer experience manager, and a technical lead, plus a director named as escalation.</p>
                </div>
              </details>
              <details>
                <summary>Do you use offshore teams?<span className="pm"></span></summary>
                <div className="ans">
                  <p>We have teams in the United States, the Middle East, and India, and we are open about which parts of an engagement each covers. </p>
                  <p>

                    If your procurement or regulatory position requires work to be performed in a specific country, please inform us, and we will confirm in writing.</p>
                </div>
              </details>
              <details>
                <summary>What happens if the project runs late?<span className="pm"></span></summary>
                <div className="ans">
                  <p>You hear about it as soon as we know. Weekly status reports against the original dates — so a slip is visible while there is still time to respond.</p>
                  <p>

                    If caused by something on your side, we will have flagged the dependency in advance and will replan with you.</p>
                </div>
              </details>
              <details>
                <summary>Can we stop an engagement partway through?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Yes. Every phase has a defined end point and a decision to continue or not. We would rather you stopped at phase one having got value from it than continued into a phase two you were unconvinced by.</p>
                  <p>You keep the documentation, the configuration and everything produced up to that point.</p>
                </div>
              </details>
              <details>
                <summary>How do you measure whether the work succeeded?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Against a baseline agreed with you in writing before design starts — the current numbers, the target, and the method by which both will be measured. We report against those figures afterward, including if we fell short.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Security, Compliance and Data */}
          <div className="faq-group reveal" id="security">
            <h3>Security, compliance and data</h3>
            <p>Access to your systems, where data sits, and what we can evidence.</p>
            <div className="faq">
              <details>
                <summary>What access will you need to our systems?<span className="pm"></span></summary>
                <div className="ans">
                  <p>The minimum required for the work, at the lowest privilege that will do the job, granted for the period it is needed and revoked afterward.
                  </p>

                  <p>

                    We are happy to work within your privileged access management process.</p>
                </div>
              </details>
              <details>
                <summary>Are your people vetted and certified?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Every engineer holds Microsoft certification plus the vendor-specific credentials their specialism requires, and project managers are PMP-certified. Background screening is standard, and we can meet enhanced vetting requirements where a client's sector demands it.</p>
                </div>
              </details>
              <details>
                <summary>Can you meet data residency requirements?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Yes — we have a local presence in the United States, Saudi Arabia, the United Arab Emirates, and India.
                  </p>


                  <p>

                    Please inform us of any data residency requirements if we missed bringing them up.</p>
                </div>
              </details>
              <details>
                <summary>Do you use subcontractors?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Yes, as needed. </p>
                </div>
              </details>
              <details>
                <summary>What insurance and contractual protections do you carry?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Professional indemnity, public liability and cyber liability cover, with certificates available on request. Our standard terms include confidentiality, data processing provisions and a defined liability position, and we are used to negotiating enterprise procurement terms.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Support and Service Levels */}
          <div className="faq-group reveal" id="support">
            <h3>Support and service levels</h3>
            <p>What happens after go-live, and how quickly.</p>
            <div className="faq">
              <details>
                <summary>What are your support hours?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Our managed service operates 24/7, staffed across three regions and with an on-call engineer at your local office. That distinction matters: at 3 am your time, someone in another region is at their desk working a normal shift, in addition to your local team.
                  </p>
                  <p>

                    Support is available through the help desk portal, by email at support@jjcsystems.com, or by phone.</p>
                </div>
              </details>
              <details>
                <summary>What response times do you commit to?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Response targets are agreed per client and stated in your service agreement, because a system outage means something different in a hospital than in a back-office. Severity levels are defined jointly rather than imposed, and we report performance against them monthly.</p>
                </div>
              </details>
              <details>
                <summary>Do we get named support contacts, or a general queue?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Named people who know your environment. The service desk is staffed as a team so cover is never dependent on one person being available, but you are not explaining your estate from scratch on every call.</p>
                </div>
              </details>
              <details>
                <summary>What if we are unhappy with the service?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Raise it with your account manager, or with the customer success team, who are independent of both delivery and commercial. If neither resolves it, a director is named as your escalation from day one and expected to be used.</p>
                  <p>We also commission independent third-party satisfaction surveys rather than running our own, precisely because a score a supplier collects about itself is not evidence.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Ownership and Exit */}
          <div className="faq-group reveal" id="exit">
            <h3>Ownership and exit</h3>
            <p>What you own, and what happens if you leave.</p>
            <div className="faq">
              <details>
                <summary>Who owns the configuration and documentation?<span className="pm"></span></summary>
                <div className="ans">
                  <p>You do. Configuration lives in your tenant, documentation is written for your staff and held by you, and custom development is yours under the terms of the engagement. Nothing we build for you sits on our systems as a condition of it continuing to work.</p>
                </div>
              </details>
              <details>
                <summary>Are we locked in to you?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Deliberately not. We build with configuration over code wherever possible and train your team to maintain it.</p>
                </div>
              </details>
              <details>
                <summary>What happens if we want to move to another provider?<span className="pm"></span></summary>
                <div className="ans">
                  <p>We hand over properly — documentation, credentials, configuration detail and a transition period with our people available to answer questions. We have done this and will do it again.</p>
                </div>
              </details>
              <details>
                <summary>Do you have client references we can speak to?<span className="pm"></span></summary>
                <div className="ans">
                  <p>Yes, subject to those clients agreeing. </p>

                  <p>

                    For a live reference conversation, ask your account manager, and we will arrange it with a client in a comparable sector.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Four Questions Section */}
      {/* <section className="section bg-navy">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Still unanswered</span>
            <h2 className="h-sec wide">The four questions worth asking any supplier</h2>
            <p className="lede">Including us. If a prospective partner cannot answer these clearly, that is useful information.</p>
          </div>
          <ul className="biz-outcomes reveal">
            <li>
              <svg><use href="#i-check" /></svg>
              <span><b>"When would you tell me not to buy this?"</b> — a supplier with no answer has never said no to a client</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span><b>"Who exactly will do the work?"</b> — and will they be the same people who turned up to the pitch</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span><b>"How will we know if this worked?"</b> — asked before the contract, measured against a baseline, not defined afterwards</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span><b>"What happens if we want to leave?"</b> — the answer tells you how the relationship is really structured</span>
            </li>
          </ul>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Not covered above?</h2>
              <p>Please fill out the contact form below with your question. We will answer it.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">Ask your question <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="onboarding.html">See the onboarding guide <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
              
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}

export default FAQ;