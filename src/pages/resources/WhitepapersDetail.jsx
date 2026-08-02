import React from 'react';
import { Link } from 'react-router-dom';

function WhitepapersDetail() {
    return (
        <main id="main">
            {/* Hero Section */}
            <section className="svc-hero">
                <div className="wrap">
                    <nav className="crumbs" aria-label="Breadcrumb">
                        <a href="../index.html">Home</a><span>/</span>
                        <a href="index.html">Whitepapers</a><span>/</span>
                        <b>Microsoft Fabric</b>
                    </nav>
                    <div className="svc-hero-grid">
                        <div>
                            <span className="eyebrow">Microsoft Fabric &middot; Financial Services</span>
                            <h1>One version of the truth: what it costs and what it is worth</h1>
                            <p className="lede">An honest assessment of data platform consolidation in a regulated institution</p>
                            <div className="svc-cta wp-actions">
                                <a className="btn btn-primary" href="../connect/consultation.html">Discuss this paper <svg><use href="#i-arrow-r" /></svg></a>
                                <a className="btn btn-ghost" href="#findings">Jump to the findings <svg><use href="#i-arrow-r" /></svg></a>
                            </div>
                        </div>
                        <aside className="glance">
                            <h2>In this paper</h2>
                            <ul>
                                <li><svg><use href="#i-check" /></svg><span>An abstract and four numbered findings</span></li>
                                <li><svg><use href="#i-check" /></svg><span>Analysis across 3 sections</span></li>
                                <li><svg><use href="#i-check" /></svg><span>A framework you can apply: The consolidation sequence</span></li>
                                <li><svg><use href="#i-check" /></svg><span>Implications separated by role</span></li>
                                <li><svg><use href="#i-check" /></svg><span>5 references to Microsoft documentation</span></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="doc-meta">
                        <div><b>Published</b><span>12 July 2026</span></div>
                        <div><b>Length</b><span>18 pages &middot; 19 min</span></div>
                        <div><b>Sector</b><span>Financial Services</span></div>
                        <div><b>Platform</b><span>Microsoft Fabric</span></div>
                        <div><b>Service area</b><span>Data, AI &amp; Integration</span></div>
                    </div>
                </div>
            </section>

            {/* Subnavigation */}
            <nav className="svc-subnav" aria-label="On this page">
                <div className="wrap">
                    <a href="#abstract">Abstract</a>
                    <a href="#findings">Key findings</a>
                    <a href="#analysis">Analysis</a>
                    <a href="#framework">Framework</a>
                    <a href="#implications">Implications</a>
                    <a href="#references">References</a>
                    <a className="subnav-cta link-more" href="../connect/consultation.html">Discuss it <svg><use href="#i-arrow-r" /></svg></a>
                </div>
            </nav>

            {/* Abstract Section */}
            <section className="section bg-paper" id="abstract">
                <div className="wrap" style={{ maxWidth: '900px' }}>
                    <div className="sec-head reveal">
                        <span className="eyebrow">Abstract</span>
                        <h2 className="h-sec wide">An honest assessment of data platform consolidation in a regulated institution</h2>
                    </div>
                    <div className="abstract reveal">
                        <h3>Summary</h3>
                        <p>Every institution above a certain size has a data consolidation programme, a business case built on analyst productivity, and a set of extracts that continue to circulate regardless.</p>
                        <p>This paper argues that the productivity case is the weakest available justification, that the real value is in traceability and decision speed, and that the cost most programmes underestimate is not engineering but the governance work of agreeing what words mean. It is written for institutions deciding whether to start, and for those wondering why a programme already underway has not yet changed anything.</p>
                    </div>
                </div>
            </section>

            {/* Key Findings Section */}
            <section className="section bg-navy" id="findings">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Key findings</span>
                        <h2 className="h-sec wide">Four things this paper argues</h2>
                        <p className="lede">If you read nothing else, read these. The analysis that follows sets out the evidence for each.</p>
                    </div>
                    <div className="finding-list">
                        <article className="finding reveal"><span className="fn">01</span><div><h3>Definitional disagreement is the binding constraint</h3><p>Two functions that cannot agree what a customer is will never reconcile their reports, and no architecture resolves that. The governance work is the project; the engineering is the implementation.</p></div></article>
                        <article className="finding reveal"><span className="fn">02</span><div><h3>Traceability is worth more than speed in a regulated setting</h3><p>An examiner asks who approved this, on what information, and whether the control operated throughout. A platform that answers those instantly is worth more than one that answers ordinary questions faster.</p></div></article>
                        <article className="finding reveal"><span className="fn">03</span><div><h3>The extracts stop when the platform is trusted, not when it is complete</h3><p>Parallel spreadsheets persist until the governed number has survived being disputed. Building trust is a sequence of small public wins rather than a launch.</p></div></article>
                        <article className="finding reveal"><span className="fn">04</span><div><h3>Consumption cost behaves differently from licensed software</h3><p>Capacity-based compute rewards efficient design and punishes inattention in a way perpetual licensing never did. Monitoring belongs with the first workload, not after the first invoice.</p></div></article>
                    </div>
                </div>
            </section>

            {/* Analysis Section */}
            <section className="section bg-paper" id="analysis">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Analysis</span>
                        <h2 className="h-sec wide">The argument in full</h2>
                    </div>
                    <div className="wp-body">
                        <h2>What the technology changed and what it did not</h2>
                        <p>Microsoft Fabric puts every analytics workload over one logical lake, with data held in open table format so each workload reads the same copy rather than maintaining its own extract. Power BI reads it directly through Direct Lake without an import step, removing the refresh window that made reporting stale before anyone read it.</p>
                        <p>These are genuine architectural improvements and they solve the problem institutions least often have. The problem institutions most often have is that finance, risk and the front office each define margin differently, and each is defensible.</p>
                        <p>A single copy of the data does not settle that. It makes the disagreement more visible, which is useful, and it does not resolve it.</p>

                        <h2>Where the value actually is</h2>
                        <p>We would put it in three places, in order.</p>
                        <p>First, traceability. In a regulated institution the ability to trace a published figure back through every transformation to the originating record converts an internal report into something a board committee can act on. That capability is architectural and it is difficult to retrofit.</p>
                        <p>Second, decision latency. Not query speed &mdash; decision speed. A figure that arrives continuously rather than monthly changes which decisions are possible, and the value is entirely in what somebody does differently as a result.</p>
                        <p>Third, and least, analyst productivity. It is real, it is the easiest to model, and it is the argument most likely to be disputed by anybody who has seen a previous programme fail to deliver it.</p>
                        <ul>
                            <li><svg><use href="#i-check" /></svg><span>Lineage from published figure to source transaction, inspectable by a third party</span></li>
                            <li><svg><use href="#i-check" /></svg><span>Reconciliation to the general ledger built into the pipeline rather than performed afterwards</span></li>
                            <li><svg><use href="#i-check" /></svg><span>Row-level security sourced from the directory so entitlement is evidenced, not asserted</span></li>
                            <li><svg><use href="#i-check" /></svg><span>Definitions held once, in the model, so every report inherits them</span></li>
                            <li><svg><use href="#i-check" /></svg><span>Decision latency measured in days rather than reporting cycles</span></li>
                        </ul>

                        <h2>The cost most programmes underestimate</h2>
                        <p>Not engineering. Agreement.</p>
                        <p>Every institution we have worked with has underestimated the elapsed time required to get finance, risk and the business to sign up to one set of definitions. It is unglamorous, it involves people whose incentives differ, and it cannot be delegated to the data team without producing a platform the business disputes.</p>
                        <p>The second underestimate is capacity cost. Consumption-based compute is efficient when designed well and expensive when not, and the feedback arrives on an invoice a month later. An inefficient notebook or an over-refreshed model costs money in a way a perpetual licence never did.</p>
                    </div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="section bg-mist" id="framework">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Framework</span>
                        <h2 className="h-sec wide">Something you can apply without us</h2>
                        <p className="lede">Every paper in this series ends with a framework you can run internally. We would rather you used it and reached your own conclusion than took ours on trust.</p>
                    </div>
                    <div className="fw reveal">
                        <div className="fw-head">
                            <span>Framework</span>
                            <h3>The consolidation sequence</h3>
                            <p>Five stages. Institutions that skip the first reliably rebuild it later.</p>
                        </div>
                        <div className="fw-stages"><div className="fw-stage"><span className="sn">1</span><h4>Agree</h4><p>Definitions and owners for every metric that will be published, signed by the functions that use them.</p></div><div className="fw-stage"><span className="sn">2</span><h4>Prove</h4><p>One workload end to end &mdash; ingestion to a report somebody uses &mdash; before the second starts.</p></div><div className="fw-stage"><span className="sn">3</span><h4>Trace</h4><p>Lineage and reconciliation built in from the first workload, not added when an examiner asks.</p></div><div className="fw-stage"><span className="sn">4</span><h4>Secure</h4><p>Row-level entitlement sourced from the directory, tested with real role accounts including one with no access.</p></div><div className="fw-stage"><span className="sn">5</span><h4>Sustain</h4><p>Capacity monitoring, refresh alerting and a change process for definitions.</p></div></div>
                    </div>
                </div>
            </section>

            {/* Implications Section */}
            <section className="section bg-paper" id="implications">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Implications</span>
                        <h2 className="h-sec wide">What this means, depending on your seat</h2>
                        <p className="lede">The same argument lands differently across an executive team. These are the three versions worth separating.</p>
                    </div>
                    <div className="impl-grid">
                        <article className="impl reveal"><span className="role">For the CFO</span><p>The productivity case is the one your board has heard before and seen underdelivered. Lead with traceability and decision latency; they are harder to model and considerably more defensible.</p></article>
                        <article className="impl reveal"><span className="role">For the Chief Risk Officer</span><p>Lineage is the capability that matters to you and it is architectural. Requiring it from the first workload costs very little; retrofitting it after a finding is a programme.</p></article>
                        <article className="impl reveal"><span className="role">For the CDO</span><p>The definitions workshop is your critical path, not your preliminary. Schedule it as such and resist starting engineering to demonstrate progress.</p></article>
                    </div>
                </div>
            </section>

            {/* References Section */}
            <section className="section bg-mist" id="references">
                <div className="wrap" style={{ maxWidth: '900px' }}>
                    <div className="sec-head reveal">
                        <span className="eyebrow">References</span>
                        <h2 className="h-sec wide">Where to check this for yourself</h2>
                        <p className="lede">Microsoft's own documentation for the product behaviour described above. We would rather you verified the basis than accepted our summary of it.</p>
                    </div>
                    <div className="refs">
                        <div className="ref"><span className="rn">01</span><div><b>What is OneLake?</b><span>Microsoft Fabric documentation &mdash; the single logical data lake and open table format</span></div></div>
                        <div className="ref"><span className="rn">02</span><div><b>Direct Lake overview</b><span>Power BI documentation &mdash; reading Delta tables without import or refresh</span></div></div>
                        <div className="ref"><span className="rn">03</span><div><b>Row-level security with Power BI</b><span>Power BI documentation &mdash; static and dynamic role definition</span></div></div>
                        <div className="ref"><span className="rn">04</span><div><b>Microsoft Fabric capacity and licensing</b><span>Microsoft Fabric documentation &mdash; how consumption is metered and monitored</span></div></div>
                        <div className="ref"><span className="rn">05</span><div><b>Data lineage in Microsoft Fabric</b><span>Microsoft Fabric governance documentation &mdash; tracing items and their dependencies</span></div></div>
                    </div>
                    <p className="ref-note"><b>On these references:</b> each entry names a Microsoft Learn article or documentation area by title, because deep links change while titles are stable. Searching the title on learn.microsoft.com will reach the current version. Where we have cited a figure or a product behaviour, it is Microsoft's statement rather than ours; where we have given a number of our own it is labelled as such in the text.</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-paper">
                <div className="wrap">
                    <div className="cta-band reveal">
                        <div>
                            <h2>Recognise the situation?</h2>
                            <p>If you are deciding whether to start, we will run the definitions workshop for one subject area and build that single workload end to end, so the decision is made on evidence from your own data.</p>
                        </div>
                        <div className="cta-actions">
                            <a className="btn btn-primary" href="../connect/consultation.html">Discuss this paper <svg><use href="#i-arrow-r" /></svg></a>
                            <a className="btn btn-ghost" href="../checklists/index.html">Run the related checklist <svg><use href="#i-arrow-r" /></svg></a>
                            <small>We reply to every message within one business day.</small>
                        </div>
                    </div>

                    <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
                        <span className="eyebrow">Keep reading</span>
                        <h2 className="h-sec wide">Related papers</h2>
                    </div>
                    <div className="rel-posts">
                        <article className="bpost" data-platform="fabric" data-service="data-ai-integration" data-industry="healthcare">
                            <a className="bimg" href="fabric-service-line-economics-healthcare.html" aria-label="Service line economics and the allocation problem">
                                <svg><use href="#i-chart" /></svg>
                                <span className="plat">Microsoft Fabric</span>
                            </a>
                            <div className="bbody">
                                <div className="bmeta">
                                    <span className="tag ind">Healthcare</span>
                                    <span className="tag typ">15 pages</span>
                                </div>
                                <h3><a href="fabric-service-line-economics-healthcare.html">Service line economics and the allocation problem</a></h3>
                                <p>The annual service line dispute is not an arithmetic problem. It is a participation problem, and it has a structural solution.</p>
                                <div className="bfoot">
                                    <span>3 May 2026 &middot; 16 min read</span>
                                    <a className="link-more" href="fabric-service-line-economics-healthcare.html">Read <svg><use href="#i-arrow-r" /></svg></a>
                                </div>
                            </div>
                        </article>
                        <article className="bpost" data-platform="fabric" data-service="data-ai-integration" data-industry="education">
                            <a className="bimg" href="fabric-student-data-institutional-decision-education.html" aria-label="Student data and the institutional decision">
                                <svg><use href="#i-chart" /></svg>
                                <span className="plat">Microsoft Fabric</span>
                            </a>
                            <div className="bbody">
                                <div className="bmeta">
                                    <span className="tag ind">Education</span>
                                    <span className="tag typ">14 pages</span>
                                </div>
                                <h3><a href="fabric-student-data-institutional-decision-education.html">Student data and the institutional decision</a></h3>
                                <p>The pattern that predicts withdrawal is visible in hindsight in almost every case. The question is whether anybody saw it while there was still time.</p>
                                <div className="bfoot">
                                    <span>8 March 2026 &middot; 15 min read</span>
                                    <a className="link-more" href="fabric-student-data-institutional-decision-education.html">Read <svg><use href="#i-arrow-r" /></svg></a>
                                </div>
                            </div>
                        </article>
                        <article className="bpost" data-platform="fabric" data-service="data-ai-integration" data-industry="nonprofits-associations">
                            <a className="bimg" href="fabric-outcome-measurement-funding-nonprofits.html" aria-label="Outcome measurement as a funding instrument">
                                <svg><use href="#i-chart" /></svg>
                                <span className="plat">Microsoft Fabric</span>
                            </a>
                            <div className="bbody">
                                <div className="bmeta">
                                    <span className="tag ind">Nonprofits &amp; Associations</span>
                                    <span className="tag typ">12 pages</span>
                                </div>
                                <h3><a href="fabric-outcome-measurement-funding-nonprofits.html">Outcome measurement as a funding instrument</a></h3>
                                <p>A programme can report that it delivered four thousand meals. The question funders now ask is what changed for the people who ate them.</p>
                                <div className="bfoot">
                                    <span>25 January 2026 &middot; 13 min read</span>
                                    <a className="link-more" href="fabric-outcome-measurement-funding-nonprofits.html">Read <svg><use href="#i-arrow-r" /></svg></a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default WhitepapersDetail;