import React from 'react';
import HeroSection from '../../components/HeroSection';



const WhyUS = () => {
    const breadcrumbs = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Why JJC Systems",
        },
    ];

    const hero = {
        eyebrow: "Why JJC Systems",

        heading: "One partner. One point of contact. One invoice.",

        lede:
            "We are a technology company delivering industry-specific solutions. Small and mid-size firms rely on us as a one-stop shop for applications, network and systems, security, monitoring, adoption, and procurement. Our Microsoft consulting team includes certified experts in Dynamics 365, Microsoft Azure, and Microsoft 365. Large firms engage us as their comprehensive Microsoft consulting partner.",

        primaryCtaText: "Request a consultation",
        primaryCtaLink: "/consultation",

        secondaryCtaText: "Read about the firm",
        secondaryCtaAnchor: "/company/about",

        glance: {
            title: "The short version",

            items: [
                "Industry and technical expertise in the same conversation",
                "Certified, and kept current as new releases emerge",
                "Ready-to-go industry solutions with an adoption path from day one",
                "Applications, infrastructure, security and support in one team",
                "Four decades of combined experience across eleven industries",
            ],
        },
    };

    return (
        <>


            <main id="main">

                <HeroSection
                    hero={hero}
                    breadcrumbs={breadcrumbs}
                />
                <nav className="svc-subnav" aria-label="On this page">
                    <div className="wrap">
                        <a href="#reasons">The reasons</a>
                        <a href="#proof">The proof</a>
                        <a href="#people">Our people</a>
                        <a href="#difference">What is different</a>
                        <a href="#values">Values</a>
                        <a className="subnav-cta link-more" href="contact.html">
                            Contact us{' '}
                            <svg>
                                <use href="#i-arrow-r" />
                            </svg>
                        </a>
                    </div>
                </nav>

                <section className="section bg-paper" id="reasons">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">The reasons</span>
                            <h2 className="h-sec wide">Eight reasons, and the evidence behind each</h2>
                            <p className="lede">
                                Every consultancy claims expertise, certification and results. What follows is the specific version &mdash; what each claim actually means in practice, and what you can hold us to.
                            </p>
                        </div>
                        <div className="reason-list">
                            <article className="rz reveal">
                                <span className="rn">01</span>
                                <div>
                                    <h3>Industry and technical expertise, in the same conversation</h3>
                                    <p>
                                        Most suppliers give you one or the other &mdash; an account manager who understands your sector but not the platform, or an engineer who understands the platform but not why your month end matters. Our consultants carry both, which is why the first call gets to the real constraint rather than to a requirements list.
                                    </p>
                                </div>
                                <div className="proof">
                                    11 industries
                                    <span>Regulated, commercial and growth organizations</span>
                                </div>
                            </article>
                            <article className="rz reveal">
                                <span className="rn">02</span>
                                <div>
                                    <h3>Always current, because we make that someone&rsquo;s job</h3>
                                    <p>
                                        Microsoft ships two major release waves a year, and vendors disclose vulnerabilities continuously. A dedicated team tracks all of it, runs internal training and briefs the engineers &mdash; so the advice you get reflects where the platforms are going, not where they were when someone last certified.
                                    </p>
                                </div>
                                <div className="proof">
                                    2 waves / year
                                    <span>Release readiness reviewed before changes reach you</span>
                                </div>
                            </article>
                            <article className="rz reveal">
                                <span className="rn">03</span>
                                <div>
                                    <h3>Vendor-accredited and certified, and kept that way</h3>
                                    <p>
                                        Every engineer holds Microsoft certification plus the vendor-specific credentials their specialism requires. Project and account managers are certified. As new releases land we certify against them rather than waiting for a client engagement to expose the gap.
                                    </p>
                                </div>
                                <div className="proof">
                                    Certified
                                    <span>Microsoft plus vendor-specific, renewed as products change</span>
                                </div>
                            </article>
                            <article className="rz reveal">
                                <span className="rn">04</span>
                                <div>
                                    <h3>Proven results, backed by clients who will speak to you</h3>
                                    <p>
                                        We do not publish client names without written approval, which is why the reference outcomes on our Client Success pages are drawn from published sources and clearly labelled as such. For a live reference conversation, ask &mdash; we will arrange it with a client in a comparable sector.
                                    </p>
                                </div>
                                <div className="proof">
                                    References
                                    <span>Arranged on request, in your sector</span>
                                </div>
                            </article>
                            <article className="rz reveal">
                                <span className="rn">05</span>
                                <div>
                                    <h3>Ready-to-go industry solutions with an adoption path from day one</h3>
                                    <p>
                                        We maintain working proofs of concept and pre-built industry solutions you can see running immediately, then deploy and use rather than fund a build first. Where nothing fits, we will construct a proof of concept for your specific case before any commercial discussion.
                                    </p>
                                </div>
                                <div className="proof">
                                    Day 1
                                    <span>Deploy and use, not design and wait</span>
                                </div>
                            </article>
                            <article className="rz reveal">
                                <span className="rn">06</span>
                                <div>
                                    <h3>Broader expertise than usually fits in one team</h3>
                                    <p>
                                        Applications, infrastructure, security, data, adoption and procurement under one roof &mdash; which means when the application problem turns out to be an identity problem, the same team fixes it rather than opening a conversation about whose fault it is.
                                    </p>
                                </div>
                                <div className="proof">
                                    One team
                                    <span>Applications, infrastructure, security and support</span>
                                </div>
                            </article>
                            <article className="rz reveal">
                                <span className="rn">07</span>
                                <div>
                                    <h3>Strategic partnerships that keep you ahead of the curve</h3>
                                    <p>
                                        Working relationships with Microsoft, Dell, Lenovo, HPE, Cisco, Fortinet, Check Point, SentinelOne, Proofpoint, OpenText and ConnectWise &mdash; giving roadmap visibility, escalation paths that reach an engineer, and one procurement channel instead of nine.
                                    </p>
                                </div>
                                <div className="proof">
                                    11+ partners
                                    <span>One channel, one invoice, one renewal calendar</span>
                                </div>
                            </article>
                            <article className="rz reveal">
                                <span className="rn">08</span>
                                <div>
                                    <h3>Four decades of doing this on your behalf</h3>
                                    <p>
                                        Combined experience across consulting, delivery and managed service. Long enough to have seen most of the ways these projects fail, which is the part that actually saves clients money.
                                    </p>
                                </div>
                                <div className="proof">
                                    40+ years
                                    <span>Combined consulting and delivery experience</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="section bg-mist" id="proof">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Voice of the customer</span>
                            <h2 className="h-sec wide">The only opinion of our service that counts is not ours</h2>
                            <p className="lede">
                                We commission independent third-party surveys rather than running our own, because a satisfaction score a supplier collects about itself is not evidence. The results shape what we change, not only what we publish.
                            </p>
                        </div>
                        <div className="metric-grid reveal">
                            <div className="metric">
                                <span className="m-label">Independent surveys</span>
                                <b>100%</b>
                                <p>Client satisfaction in third-party surveys</p>
                            </div>
                            <div className="metric">
                                <span className="m-label">Client relationships</span>
                                <b>100%</b>
                                <p>Retention across the client base</p>
                            </div>
                            <div className="metric">
                                <span className="m-label">Response commitment</span>
                                <b>1 day</b>
                                <p>We reply to every message within one business day</p>
                            </div>
                            <div className="metric">
                                <span className="m-label">Support coverage</span>
                                <b>24/7</b>
                                <p>Staffed across three regions, not on-call</p>
                            </div>
                        </div>
                        <p className="metric-note">
                            <b>Before publishing:</b> both 100% figures should carry the survey provider, the sample size and the period covered, and retention should state whether it is measured by logo, by revenue or by renewal. An unqualified 100% invites scepticism from exactly the executive readers this page is written for; the same number with a named provider and an <em>n</em> value is genuinely persuasive.
                        </p>
                    </div>
                </section>

                <section className="section bg-paper" id="people">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Our people</span>
                            <h2 className="h-sec wide">Qualified, experienced, and kept current on purpose</h2>
                            <p className="lede">
                                Certifications age quickly in this industry. What matters is not what somebody passed three years ago but whether the team has been kept current since &mdash; which is a management commitment rather than an individual one.
                            </p>
                        </div>
                        <div className="pillar-grid">
                            <article className="pillar reveal">
                                <div className="icon-tile">
                                    <svg>
                                        <use href="#i-award" />
                                    </svg>
                                </div>
                                <h3>Certified, and kept certified</h3>
                                <p>
                                    Certified project and account managers, dedicated customer experience managers committed to white-glove service, and engineers who hold Microsoft certification plus the vendor-specific credentials their specialism requires.
                                </p>
                                <ul>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Certified project and account managers on every engagement</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Customer experience managers dedicated to service quality</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Microsoft-certified engineers across every platform we deliver</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Staff certified against new releases as they emerge</span>
                                    </li>
                                </ul>
                            </article>
                            <article className="pillar reveal">
                                <div className="icon-tile">
                                    <svg>
                                        <use href="#i-users" />
                                    </svg>
                                </div>
                                <h3>Trained continuously, in-house</h3>
                                <p>
                                    A dedicated team monitors emerging technology trends, runs internal training and equips engineers with current skills. Our business and sales teams are trained on market shifts and technology use cases so they can propose and guide rather than relay.
                                </p>
                                <ul>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>In-house training programme aligned to release waves</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Technology trend monitoring as a standing function</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Business and sales teams trained on use cases, not just products</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Engineers assessed on current capability, not historic credentials</span>
                                    </li>
                                </ul>
                            </article>
                            <article className="pillar reveal">
                                <div className="icon-tile">
                                    <svg>
                                        <use href="#i-shield" />
                                    </svg>
                                </div>
                                <h3>Focused on what is coming</h3>
                                <p>
                                    The technical team stays informed on new features, disclosed vulnerabilities and industry best practice, so your infrastructure is optimised for where the platforms are going rather than where they were.
                                </p>
                                <ul>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Release-wave readiness before changes reach your tenant</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Vulnerability and advisory monitoring across the vendor estate</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Architecture guidance that accounts for the next two years</span>
                                    </li>
                                    <li>
                                        <svg>
                                            <use href="#i-check" />
                                        </svg>
                                        <span>Recommendations updated when the evidence changes</span>
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="section bg-navy" id="difference">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">What is different</span>
                            <h2 className="h-sec wide">Solutions and services under one roof</h2>
                            <p className="lede">Five commitments that shape how we scope, staff and price every engagement.</p>
                        </div>
                        <div className="diff-grid">
                            <article className="diff reveal">
                                <b>Large enough to serve</b>
                                <span>Depth across every Microsoft platform, plus the network, security and procurement layers around them.</span>
                            </article>
                            <article className="diff reveal">
                                <b>Small enough to care</b>
                                <span>Named people who know your environment, not a ticket queue and a rotating cast.</span>
                            </article>
                            <article className="diff reveal">
                                <b>A global team, working 24/7</b>
                                <span>Three regions, so every hour of the day is somebody's working day rather than an on-call rota.</span>
                            </article>
                            <article className="diff reveal">
                                <b>A partnership, not a transaction</b>
                                <span>Measured on outcomes agreed together, not on hours billed or licences moved.</span>
                            </article>
                            <article className="diff reveal">
                                <b>Outcome before technology</b>
                                <span>We start from what the business needs to be true, then decide what to build.</span>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="section bg-paper" id="values">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Core values</span>
                            <h2 className="h-sec wide">Diverse expertise and endless talent, built on trust</h2>
                            <p className="lede">
                                We are driven by growth and focused on more than technology. Four values decide how we behave when a decision is genuinely difficult &mdash; which is the only time values mean anything.
                            </p>
                        </div>
                        <div className="val-grid">
                            <article className="val reveal">
                                <span className="n">01</span>
                                <h3>Innovation</h3>
                                <p>We are paid to know what is coming, not to repeat what worked in 2019. Our engineers get time to learn, and our recommendations change when the evidence does.</p>
                            </article>
                            <article className="val reveal">
                                <span className="n">02</span>
                                <h3>Integrity</h3>
                                <p>We tell clients when the answer is a smaller engagement, a licence downgrade, or nothing at all. It costs us revenue regularly and it is the reason clients stay.</p>
                            </article>
                            <article className="val reveal">
                                <span className="n">03</span>
                                <h3>Quality</h3>
                                <p>Fixed price, agreed outcomes, measured against a baseline we set together. Work is finished when it does what we said it would, not when the hours run out.</p>
                            </article>
                            <article className="val reveal">
                                <span className="n">04</span>
                                <h3>Teamwork</h3>
                                <p>One accountable team across applications, infrastructure, security and support &mdash; so there is nobody to point at when something needs fixing.</p>
                            </article>
                        </div>
                        <div className="chal-note reveal">
                            <svg>
                                <use href="#i-target" />
                            </svg>
                            <p>
                                <b>Trust is the one underneath the others.</b> It is also the only one we cannot claim &mdash; it is either extended to us by clients over time or it is not. Everything above is simply what we do to earn it.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section bg-mist">
                    <div className="wrap">
                        <div className="cta-band reveal">
                            <div>
                                <h2>Worth a thirty-minute conversation?</h2>
                                <p>
                                    You do not need a defined requirement or a budget. Describe the symptom &mdash; the process that keeps breaking, the report nobody trusts, the thing that takes three weeks and should take three days &mdash; and we will tell you honestly whether we are the right people for it.
                                </p>
                            </div>
                            <div className="cta-actions">
                                <a className="btn btn-primary" href="consultation.html">
                                    Request a consultation{' '}
                                    <svg>
                                        <use href="#i-arrow-r" />
                                    </svg>
                                </a>
                                <a className="btn btn-ghost" href="inquiries.html">
                                    Just ask a question{' '}
                                    <svg>
                                        <use href="#i-arrow-r" />
                                    </svg>
                                </a>
                                <small>We reply to every message within one business day.</small>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    );
};

export default WhyUS;