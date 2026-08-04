// ClientSuccessStory.jsx
import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import './ClientSuccessStory.css'; // Assuming you'll move styles here
import HeroSection from '../components/HeroSection.jsx';


// SVG Sprite Component
const SVGSprites = () => (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
            {/* All symbols from your HTML */}
            <symbol id="i-strategy" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z" /></symbol>
            <symbol id="i-ai" viewBox="0 0 24 24"><path d="M11 3.2 12.7 8l4.8 1.7-4.8 1.8L11 16.3 9.3 11.5 4.5 9.7 9.3 8z" /><path d="m18.2 14.6.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8z" /></symbol>
            <symbol id="i-license" viewBox="0 0 24 24"><path d="M20.6 12.9 12.9 20.6a1.9 1.9 0 0 1-2.7 0l-7-7A1.9 1.9 0 0 1 2.6 12V4.5a1.9 1.9 0 0 1 1.9-1.9H12c.5 0 1 .2 1.4.6l7.2 7.2a1.9 1.9 0 0 1 0 2.5Z" /><circle cx="7.6" cy="7.6" r="1.3" /></symbol>
            <symbol id="i-change" viewBox="0 0 24 24"><path d="M20.2 11A8.2 8.2 0 0 0 6.4 6.1L3.5 8.8" /><path d="M3.8 13a8.2 8.2 0 0 0 13.8 4.9l2.9-2.7" /><path d="M3.4 4.2v4.6H8" /><path d="M20.6 19.8v-4.6H16" /></symbol>
            <symbol id="i-modernize" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3.4" /><path d="M12 16.4V9" /><path d="m8.6 12.4 3.4-3.4 3.4 3.4" /></symbol>
            <symbol id="i-support" viewBox="0 0 24 24"><path d="M4.2 14.2v-2.1a7.8 7.8 0 0 1 15.6 0v2.1" /><path d="M19.8 15.4a2 2 0 0 1-2 2h-.9v-5.1h.9a2 2 0 0 1 2 2Z" /><path d="M4.2 15.4a2 2 0 0 0 2 2h.9v-5.1h-.9a2 2 0 0 0-2 2Z" /><path d="M17.8 17.4v.7a3 3 0 0 1-3 3h-2.6" /></symbol>
            <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 21.5s7.6-3.4 7.6-9.6V5.6L12 2.4 4.4 5.6v6.3c0 6.2 7.6 9.6 7.6 9.6Z" /><path d="m9.1 11.9 2 2 3.8-3.9" /></symbol>
            <symbol id="i-cloud" viewBox="0 0 24 24"><path d="M17.4 19H7a4.5 4.5 0 0 1-.6-8.9A6 6 0 0 1 17.8 11a4 4 0 0 1-.4 8Z" /></symbol>
            <symbol id="i-server" viewBox="0 0 24 24"><ellipse cx="12" cy="6.2" rx="7.6" ry="3.1" /><path d="M4.4 6.2v11.6c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1V6.2" /><path d="M4.4 12c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1" /></symbol>
            <symbol id="i-phone" viewBox="0 0 24 24"><path d="M15.6 21A13.4 13.4 0 0 1 3 8.4 2.9 2.9 0 0 1 5.9 5.5h1.6a1.5 1.5 0 0 1 1.5 1.3l.5 2.5a1.5 1.5 0 0 1-.5 1.4l-1.1 1a12 12 0 0 0 4 4l1-1.1a1.5 1.5 0 0 1 1.4-.5l2.5.5a1.5 1.5 0 0 1 1.3 1.5V18a3 3 0 0 1-3 3Z" /></symbol>
            <symbol id="i-device" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2.2" /><path d="M2 20.2h20" /></symbol>
            <symbol id="i-erp" viewBox="0 0 24 24"><path d="m12 2.8 8.8 4.6L12 12 3.2 7.4Z" /><path d="m3.2 12 8.8 4.6 8.8-4.6" /><path d="m3.2 16.6 8.8 4.6 8.8-4.6" /></symbol>
            <symbol id="i-finance" viewBox="0 0 24 24"><rect x="2.6" y="5.6" width="18.8" height="12.8" rx="2.4" /><circle cx="12" cy="12" r="2.7" /><path d="M6.4 12h.02M17.6 12h.02" /></symbol>
            <symbol id="i-project" viewBox="0 0 24 24"><path d="M9 4.4H7a2 2 0 0 0-2 2v12.4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.4a2 2 0 0 0-2-2h-2" /><rect x="9" y="2.6" width="6" height="3.6" rx="1.2" /><path d="m9.6 13.2 2 2 3.6-3.7" /></symbol>
            <symbol id="i-sales" viewBox="0 0 24 24"><path d="M3 17.2 9.2 11l3.9 3.9L21 7" /><path d="M15.2 7H21v5.8" /></symbol>
            <symbol id="i-service" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8" /><circle cx="12" cy="12" r="3.5" /><path d="m5.8 5.8 3.7 3.7M14.5 14.5l3.7 3.7M18.2 5.8l-3.7 3.7M9.5 14.5l-3.7 3.7" /></symbol>
            <symbol id="i-chats" viewBox="0 0 24 24"><path d="M13.6 11.8a3.8 3.8 0 0 1-3.8 3.8H7l-3.4 2.4v-2.6a3.8 3.8 0 0 1-1.4-2.9V9a3.8 3.8 0 0 1 3.8-3.8h3.8A3.8 3.8 0 0 1 13.6 9Z" /><path d="M16.6 8.6h.9a4 4 0 0 1 4 4v3.3a4 4 0 0 1-1.6 3.2v2.5l-3.4-2.4h-3" /></symbol>
            <symbol id="i-field" viewBox="0 0 24 24"><path d="M3 16.4V7.2a1 1 0 0 1 1-1h9.2a1 1 0 0 1 1 1v9.2" /><path d="M14.2 9.4h3.4a1 1 0 0 1 .8.4l2.4 3.1a1 1 0 0 1 .2.6v2.9" /><circle cx="7.6" cy="17.6" r="1.9" /><circle cx="17.4" cy="17.6" r="1.9" /><path d="M9.5 17.6h6M3 16.4h1.6M19.3 16.4H21" /></symbol>
            <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.3" /></symbol>
            <symbol id="i-chart" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8" /><path d="M12 12V3.2" /><path d="m12 12 7.6 4.4" /></symbol>
            <symbol id="i-integration" viewBox="0 0 24 24"><rect x="3.2" y="3.2" width="7" height="7" rx="2.2" /><rect x="13.8" y="13.8" width="7" height="7" rx="2.2" /><path d="M10.2 6.7h3.3a3.8 3.8 0 0 1 3.8 3.8v3.3" /></symbol>
            <symbol id="i-grid" viewBox="0 0 24 24"><rect x="3.2" y="3.2" width="7" height="7" rx="2.2" /><rect x="13.8" y="3.2" width="7" height="7" rx="2.2" /><rect x="3.2" y="13.8" width="7" height="7" rx="2.2" /><rect x="13.8" y="13.8" width="7" height="7" rx="2.2" /></symbol>
            <symbol id="i-docs" viewBox="0 0 24 24"><path d="M3 7.2a2 2 0 0 1 2-2h3.8l2 2.6H19a2 2 0 0 1 2 2v8.4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M8 13.4h8M8 16.6h5" /></symbol>
            <symbol id="i-automation" viewBox="0 0 24 24"><path d="M13.4 2.8 5.6 13.6h5.6l-1.8 7.6 8.2-11.2h-5.6z" /></symbol>
            <symbol id="i-staffing" viewBox="0 0 24 24"><circle cx="9.6" cy="8" r="3.6" /><path d="M3.2 20a6.6 6.6 0 0 1 9.8-5.8" /><circle cx="17.2" cy="17.2" r="3.3" /><path d="m19.7 19.7 2.1 2.1" /></symbol>
            <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="7.8" r="3.2" /><path d="M2.8 19.4a6.2 6.2 0 0 1 12.4 0" /><path d="M16.4 6.2a3.2 3.2 0 0 1 0 6.2" /><path d="M17.4 14.1a6.2 6.2 0 0 1 3.8 5.3" /></symbol>
            <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8" /><path d="M3.4 12h17.2" /><path d="M12 3.2a14 14 0 0 1 0 17.6 14 14 0 0 1 0-17.6Z" /></symbol>
            <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2.8" y="5" width="18.4" height="14" rx="2.4" /><path d="m3.4 6.6 8.6 6 8.6-6" /></symbol>
            <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10.2" r="2.6" /></symbol>
            <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.8" /><path d="M12 7.2V12l3.2 2" /></symbol>
            <symbol id="i-check" viewBox="0 0 24 24"><path d="m4.5 12.5 5 5 10-11" /></symbol>
            <symbol id="i-arrow-r" viewBox="0 0 24 24"><path d="M3.8 12h15.4" /><path d="m13.2 5.6 6 6.4-6 6.4" /></symbol>
            <symbol id="i-arrow-l" viewBox="0 0 24 24"><path d="M20.2 12H4.8" /><path d="m10.8 5.6-6 6.4 6 6.4" /></symbol>
            <symbol id="i-star" viewBox="0 0 24 24"><path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5-4.8-4.6 6.6-.9z" /></symbol>
            <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="9" r="6" /><path d="m8.4 14.2-1.6 7 5.2-2.8 5.2 2.8-1.6-7" /></symbol>
        </defs>
    </svg>
);

const ClientSuccessStory = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Client Success",
            link: "/success",
        },
        {
            label: "Healthcare",
            link: "/success/industry-healthcare",
        },
        {
            label: "Client Story",
        },
    ];

    const hero = {
        eyebrow: "Healthcare · Modern Work & Automation",

        heading: "From a legacy file server to one searchable document center",

        lede:
            "A nonprofit healthcare organization, Lamar, Colorado. Years of files had piled up on an aging file server — hard to search, risky to keep alive, and holding back the Microsoft licenses the organization was already paying for.",

        primaryCtaText: "Talk to our team",
        primaryCtaLink: "/#contact",

        secondaryCtaText: "See the results",
        secondaryCtaAnchor: "#results",

        glance: {
            title: "At a glance",

            items: [
                "Sector: Healthcare (nonprofit)",
                "Capability: Modern Work & Automation",
                "Region: Lamar, Colorado",
                "Scope: Document center, data cleanup and migration, search",
                "Scale: 4.5+ TB migrated · 150+ employees",
                "Client name withheld — see the note below",
            ],
        },
    };

    return (
        <>





            <main id="main">
                {/* Hero Section */}
                <HeroSection
                    hero={hero}
                    breadcrumbs={breadcrumbs}
                />


                {/* Sub Navigation */}
                <nav className="svc-subnav" aria-label="On this page">
                    <div className="wrap">
                        <a href="#situation">The situation</a>
                        <a href="#approach">What was done</a>
                        <a href="#results">Results</a>
                        <a href="#platforms">Platforms</a>
                        <a href="#transfers">What transfers</a>
                        <a href="#sourcing">About this story</a>
                        <Link className="subnav-cta link-more" to="/#contact">Talk to us <svg><use href="#i-arrow-r" /></svg></Link>
                    </div>
                </nav>

                {/* Situation */}
                <section className="section bg-paper" id="situation">
                    <div className="wrap" style={{ maxWidth: '900px' }}>
                        <div className="sec-head reveal">
                            <span className="eyebrow">The situation</span>
                            <h2 className="h-sec wide">What the client was dealing with</h2>
                        </div>
                        <div className="feat-block reveal" style={{ marginTop: '8px' }}>
                            <p>A nonprofit healthcare organization in Lamar, Colorado &mdash; more than 150 employees &mdash; kept its working files on a legacy file server. In healthcare, documents are sensitive by default. On a nonprofit budget, every server kept alive and every license paid for but underused is real money that could be going to the mission instead.</p>
                            <p>The file server had become the problem. More than 4.5 TB had accumulated over the years &mdash; the documents that mattered mixed in with duplicates, outdated versions and files nobody could name. Finding something meant already knowing where it lived. The hardware was aging, and meanwhile the organization's Microsoft licenses included modern document tools that were barely being used.</p>
                        </div>
                    </div>
                </section>

                {/* Approach */}
                <section className="section bg-mist" id="approach">
                    <div className="wrap" style={{ maxWidth: '900px' }}>
                        <div className="sec-head reveal">
                            <span className="eyebrow">What was done</span>
                            <h2 className="h-sec wide">The work, and the part that was actually hard</h2>
                        </div>
                        <div className="feat-block reveal" style={{ marginTop: '8px' }}>
                            <p>We built a document center in Microsoft 365 as the single, organized home for the organization's files. Before anything moved, the data itself was dealt with: cleaned up, sorted and filtered, so the new environment started with structure instead of inheriting the old sprawl. More than 4.5 TB was then migrated over, and once nothing depended on it, the legacy file server was retired for good.</p>
                            <p>On top sits a modern, secure and optimized search experience for the organization's 150+ employees &mdash; documents found by what they are, not by remembering which folder someone filed them in years ago, with results that respect who is allowed to see what.</p>
                            <p>The hard part was not the migration &mdash; copying terabytes is the easy 20 percent. Moving 4.5 TB as-is would have just relocated the mess somewhere more modern. The real work was the cleanup and sorting that came first, and the structure that made search actually useful afterwards. And "retire the legacy server" only becomes true when people stop needing it: adoption was the finish line, not go-live.</p>
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="section bg-navy" id="results">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Results</span>
                            <h2 className="h-sec wide">What changed in how the organization works</h2>
                            <p className="lede">The figures below describe the engagement as delivered. Adoption and Microsoft license usage have both increased significantly since the move &mdash; reported here as observed, without invented percentages.</p>
                        </div>
                        <div className="metric-grid reveal">
                            <div className="metric"><span className="m-label">Data cleaned, sorted and migrated</span><b>4.5+ TB</b></div>
                            <div className="metric"><span className="m-label">Employees on modern, secure search</span><b>150+</b></div>
                            <div className="metric"><span className="m-label">Legacy file servers remaining</span><b>0</b></div>
                        </div>
                        <div className="sec-head reveal" style={{ marginTop: 'clamp(46px,6vw,70px)' }}>
                            <h3 className="h-sec wide" style={{ fontSize: 'clamp(21px,2.3vw,28px)' }}>What changed</h3>
                        </div>
                        <ul className="biz-outcomes reveal">
                            <li><svg><use href="#i-check" /></svg><span>A document center built as the single, organized home for the organization's files</span></li>
                            <li><svg><use href="#i-check" /></svg><span>More than 4.5 TB of data cleaned up, sorted, filtered and migrated</span></li>
                            <li><svg><use href="#i-check" /></svg><span>The legacy file server retired &mdash; no more aging hardware to maintain, patch and back up</span></li>
                            <li><svg><use href="#i-check" /></svg><span>A modern, secure, optimized search experience for 150+ employees</span></li>
                            <li><svg><use href="#i-check" /></svg><span>Adoption up significantly &mdash; staff actually work in the new environment</span></li>
                            <li><svg><use href="#i-check" /></svg><span>Microsoft license usage up significantly &mdash; value from licenses already being paid for</span></li>
                        </ul>
                    </div>
                </section>

                {/* Platforms */}
                <section className="section bg-paper" id="platforms">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Platforms involved</span>
                            <h2 className="h-sec wide">What each product was doing here</h2>
                            <p className="lede">Not a product list &mdash; the job each one was actually performing in this engagement.</p>
                        </div>
                        <div className="task-board">
                            <article className="task-row reveal">
                                <div className="task-head"><span className="app-tag">Microsoft 365</span><h3>SharePoint Online</h3></div>
                                <p>The document center: one organized, permission-controlled home for the organization's files, replacing the folder sprawl of the legacy server with a structure people can actually navigate.</p>
                            </article>
                            <article className="task-row reveal">
                                <div className="task-head"><span className="app-tag">Microsoft 365</span><h3>Microsoft Search</h3></div>
                                <p>The modern, secure, optimized search experience for 150+ employees. Documents are found by what they are, not by where someone remembers filing them &mdash; and results respect permissions, which matters in healthcare.</p>
                            </article>
                            <article className="task-row reveal">
                                <div className="task-head"><span className="app-tag">Infrastructure</span><h3>Legacy file server (retired)</h3></div>
                                <p>The thing being replaced. More than 4.5 TB was cleaned, sorted and migrated off it &mdash; and only once nothing depended on it was it decommissioned, taking its maintenance, backup and hardware risk with it.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* What transfers */}
                <section className="section bg-mist" id="transfers">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">What transfers</span>
                            <h2 className="h-sec wide">If you were to attempt this</h2>
                            <p className="lede">A migration is measured in terabytes. A document project is measured in whether people stop using the old thing &mdash; and whether they can find what they need afterwards.</p>
                        </div>
                        <div className="chal-note reveal" style={{ marginTop: '8px' }}>
                            <svg><use href="#i-target" /></svg>
                            <p><b>Where it usually gets harder than expected:</b> the cleanup. Migrating years of accumulated data as-is just moves the mess somewhere more modern. Sorting, filtering and deciding what deserves to survive the move is slower than the copy itself &mdash; and it is the reason search works afterwards.</p>
                        </div>

                        <div className="sec-head reveal" style={{ marginTop: 'clamp(46px,6vw,70px)' }}>
                            <span className="eyebrow">How we would take it on</span>
                            <h2 className="h-sec wide">Our approach to Modern Work &amp; Automation projects</h2>
                        </div>
                        <div className="process reveal">
                            <div className="step"><span className="step-n">1</span><h4>Shadow the real process</h4><p>We sit with the people doing the work and watch what actually happens, including every workaround. Process documents and reality are rarely the same thing.</p></div>
                            <div className="step"><span className="step-n">2</span><h4>Design against your own data</h4><p>We prototype and show you your own records in it, not a demo company, before anything is built.</p></div>
                            <div className="step"><span className="step-n">3</span><h4>Go live in a contained phase</h4><p>By site, by practice group or by service line &mdash; with the group that wants it most going first, to a fixed price.</p></div>
                            <div className="step"><span className="step-n">4</span><h4>Measure against the baseline</h4><p>We report against the numbers agreed at the start, including where the result fell short of the target.</p></div>
                        </div>
                    </div>
                </section>

                {/* Sourcing / About this story */}
                <section className="section bg-paper" id="sourcing">
                    <div className="wrap" style={{ maxWidth: '900px' }}>
                        <div className="sec-head reveal">
                            <span className="eyebrow">About this story</span>
                            <h2 className="h-sec wide">Where this story comes from</h2>
                        </div>
                        <div className="feat-block reveal" style={{ marginTop: '8px' }}>
                            <p>This story describes <b>JJC Systems' own client work</b> &mdash; a document center, data migration and search engagement for a nonprofit healthcare organization based in Lamar, Colorado. Unlike our reference outcomes drawn from published vendor case studies, the work described here is ours.</p>
                            <p>The client's name is withheld for confidentiality. What remains is the real shape of the engagement: the platforms involved, the work delivered and the way it was sequenced &mdash; described as delivered, with no estimated or projected figures added.</p>
                            <p>Client references for this engagement are available on request, subject to the client's approval.</p>
                        </div>
                        <div className="prov-note reveal"><svg><use href="#i-check" /></svg><p><b>In short:</b> our client, our work. Name withheld for confidentiality, engagement described as delivered, references available on request.</p></div>
                    </div>
                </section>

                {/* CTA and Related */}
                <section className="section bg-mist">
                    <div className="wrap">
                        <div className="cta-band reveal">
                            <div>
                                <h2>Recognise the problem?</h2>
                                <p>If your organization's files still live on an aging server nobody can search &mdash; and your Microsoft licenses already include the tools to fix it &mdash; tell us where it hurts most. We will tell you what a document center could realistically do in your environment, what we would measure, and whether we think it is worth doing at all.</p>
                            </div>
                            <div className="cta-actions">
                                <Link className="btn btn-primary" to="/#contact">Talk to our team <svg><use href="#i-arrow-r" /></svg></Link>
                                <Link className="btn btn-ghost" to="/success/industry-healthcare.html">More Healthcare stories <svg><use href="#i-arrow-r" /></svg></Link>
                                <small>We reply to every message within one business day.</small>
                            </div>
                        </div>

                        <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
                            <span className="eyebrow">Related reports</span>
                            <h2 className="h-sec wide">Others you may want to read</h2>
                        </div>
                        <div className="rel-grid">
                            <Link className="rel reveal" to="/success/story-patient-outreach-that-people-actually-respond-to.html">
                                <span className="rel-icon"><svg><use href="#i-erp" /></svg></span>
                                <span><b>Patient outreach that people actually respond to</b><span>Also in Business Applications</span></span>
                            </Link>
                            <Link className="rel reveal" to="/success/story-a-manufacturers-erp-and-crm-co-managed-through-growth-and-acquisition.html">
                                <span className="rel-icon"><svg><use href="#i-erp" /></svg></span>
                                <span><b>A manufacturer's ERP and CRM, co-managed through growth and acquisition</b><span>Also in Manufacturing</span></span>
                            </Link>
                            <Link className="rel reveal" to="/success/story-forty-siloed-systems-into-one-citizen-record.html">
                                <span className="rel-icon"><svg><use href="#i-erp" /></svg></span>
                                <span><b>Forty siloed systems into one citizen record</b><span>Also in Business Applications</span></span>
                            </Link>
                            <Link className="rel reveal" to="/success/story-one-view-of-the-member-on-every-channel.html">
                                <span className="rel-icon"><svg><use href="#i-erp" /></svg></span>
                                <span><b>One view of the member, on every channel</b><span>Also in Business Applications</span></span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>


        </>
    );
};

export default ClientSuccessStory;