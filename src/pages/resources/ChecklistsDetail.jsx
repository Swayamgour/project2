import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ChecklistDetail() {
    const [checkedItems, setCheckedItems] = useState({});
    const [totalItems, setTotalItems] = useState(0);

    // Initialize checked state for 20 items
    useEffect(() => {
        const initialChecked = {};
        for (let i = 1; i <= 20; i++) {
            initialChecked[i] = false;
        }
        setCheckedItems(initialChecked);
        setTotalItems(20);
    }, []);

    const handleCheckboxChange = (id) => {
        setCheckedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleTickAll = () => {
        const allChecked = {};
        for (let i = 1; i <= 20; i++) {
            allChecked[i] = true;
        }
        setCheckedItems(allChecked);
    };

    const handleReset = () => {
        const allUnchecked = {};
        for (let i = 1; i <= 20; i++) {
            allUnchecked[i] = false;
        }
        setCheckedItems(allUnchecked);
    };

    const handlePrint = () => {
        window.print();
    };

    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

    // Determine score band
    const getScoreBand = () => {
        if (percentage <= 59) return 'Significant gaps';
        if (percentage <= 84) return 'Mostly ready, with known gaps';
        return 'Ready';
    };

    const getScoreBandClass = () => {
        if (percentage <= 59) return 'band-red';
        if (percentage <= 84) return 'band-yellow';
        return 'band-green';
    };

    return (
        <main id="main">
            {/* Hero Section */}
            <section className="svc-hero">
                <div className="wrap">
                    <nav className="crumbs" aria-label="Breadcrumb">
                        <a href="../index.html">Home</a><span>/</span>
                        <a href="index.html">Checklists</a><span>/</span>
                        <b>Microsoft Purview</b>
                    </nav>
                    <div className="svc-hero-grid">
                        <div>
                            <span className="eyebrow">Microsoft Purview &middot; Readiness</span>
                            <h1>eDiscovery readiness checklist</h1>
                            <p className="lede">Whether your firm could respond to a preservation order this week, tested against twenty specific capabilities.</p>
                            <div className="svc-cta">
                                <a className="btn btn-primary" href="#checklist">Start the checklist <svg><use href="#i-arrow-r" /></svg></a>
                                <a className="btn btn-ghost" href="../connect/consultation.html">Get help with the gaps <svg><use href="#i-arrow-r" /></svg></a>
                            </div>
                        </div>
                        <aside className="glance">
                            <h2>Before you start</h2>
                            <ul>
                                <li><svg><use href="#i-check" /></svg><span>20 checks across 4 sections</span></li>
                                <li><svg><use href="#i-check" /></svg><span>Typical effort: 1 week to assess, plus a rehearsal</span></li>
                                <li><svg><use href="#i-check" /></svg><span>Tick only what you can genuinely evidence, not what you intend</span></li>
                                <li><svg><use href="#i-check" /></svg><span>Nothing you tick is saved or sent anywhere</span></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="svc-stats">
                        <div className="svc-stat"><b>20</b><span>Checks</span></div>
                        <div className="svc-stat"><b>Advanced</b><span>Difficulty</span></div>
                        <div className="svc-stat"><b>1 week to assess, plus a rehearsal</b><span>Typical effort</span></div>
                        <div className="svc-stat"><b>Legal</b><span>Written for</span></div>
                    </div>
                </div>
            </section>

            {/* Subnavigation */}
            <nav className="svc-subnav" aria-label="On this page">
                <div className="wrap">
                    <a href="#why">Why</a>
                    <a href="#checklist">The checklist</a>
                    <a href="#score">What your score means</a>
                    <a href="#gaps">Closing the gaps</a>
                    <a className="subnav-cta link-more" href="../connect/consultation.html">Get help <svg><use href="#i-arrow-r" /></svg></a>
                </div>
            </nav>

            {/* Why Section */}
            <section className="section bg-paper" id="why">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Why run this</span>
                        <h2 className="h-sec wide">What this checklist is for</h2>
                    </div>
                    <div className="art" style={{ maxWidth: '820px' }}>
                        <p>The cost of a discovery exercise is driven almost entirely by how much material falls in scope. Retention that actually disposes of content is the single largest lever available to you.</p>
                        <p>The second driver is whether anybody has done this before. A firm rehearsing eDiscovery for the first time during a live matter will find every step takes longer than expected.</p>
                    </div>

                    <div className="ck-who reveal">
                        <div><h4>Run it with</h4><p>Managing partner or risk partner</p></div>
                        <div><h4>And with</h4><p>IT and information governance leads</p></div>
                        <div><h4>And with</h4><p>Whoever would run a preservation exercise in practice</p></div>
                    </div>
                </div>
            </section>

            {/* Progress Bar */}
            <div className="ck-progress" id="ckProgress">
                <div className="wrap">
                    <span className="ck-count" id="ckCount">
                        <b>{checkedCount}</b> of <b>{totalItems}</b> complete &middot; {percentage}%
                    </span>
                    <span className="ck-bar">
                        <span id="ckBar" style={{ width: `${percentage}%` }}></span>
                    </span>
                    <span className="ck-actions">
                        <button className="ck-btn" id="ckAll" type="button" onClick={handleTickAll}>Tick all</button>
                        <button className="ck-btn" id="ckReset" type="button" onClick={handleReset}>Reset</button>
                        <button className="ck-btn" id="ckPrint" type="button" onClick={handlePrint}>Print</button>
                    </span>
                </div>
            </div>

            {/* Checklist Section */}
            <section className="section bg-paper" id="checklist">
                <div className="wrap" style={{ maxWidth: '900px' }}>
                    <div className="sec-head reveal">
                        <span className="eyebrow">The checklist</span>
                        <h2 className="h-sec wide">20 checks, in the order we would run them</h2>
                        <p className="lede">Tick only what you can genuinely evidence today. An item you intend to do is not an item you have done, and scoring yourself generously here only produces a comfortable number and an uncomfortable project.</p>
                    </div>
                    <div id="ckRoot">
                        {/* Section 1 */}
                        <section className="ck-sec reveal">
                            <div className="ck-sec-head">
                                <span className="n">Section 1</span>
                                <h3>Licensing and roles</h3>
                                <p>The prerequisites that stop an exercise before it begins.</p>
                            </div>
                            <ul className="ck-list">
                                <li className="ck-item">
                                    <label htmlFor="ck1">
                                        <input type="checkbox" id="ck1" checked={checkedItems[1] || false} onChange={() => handleCheckboxChange(1)} />
                                        <span className="ck-txt"><b>Microsoft 365 E5 or the Compliance add-on confirmed</b><span>Premium eDiscovery requires the higher tier. Standard eDiscovery is materially more limited and the difference is discovered under pressure.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck2">
                                        <input type="checkbox" id="ck2" checked={checkedItems[2] || false} onChange={() => handleCheckboxChange(2)} />
                                        <span className="ck-txt"><b>eDiscovery roles assigned to named individuals, not shared accounts</b><span>Every action must be attributable. A shared administrator account defeats the chain of custody the exercise exists to establish.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck3">
                                        <input type="checkbox" id="ck3" checked={checkedItems[3] || false} onChange={() => handleCheckboxChange(3)} />
                                        <span className="ck-txt"><b>A defined approver for placing and releasing holds</b><span>Holds have legal consequence in both directions. Somebody has to own the decision.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck4">
                                        <input type="checkbox" id="ck4" checked={checkedItems[4] || false} onChange={() => handleCheckboxChange(4)} />
                                        <span className="ck-txt"><b>External counsel access route agreed in advance</b><span>Whether they receive exports or work in your tenant, decided before a matter rather than during one.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck5">
                                        <input type="checkbox" id="ck5" checked={checkedItems[5] || false} onChange={() => handleCheckboxChange(5)} />
                                        <span className="ck-txt"><b>Audit retention configured to match your longest expected discovery window</b><span>The default is shorter than most firms need. Verify by querying at the far edge of the window.</span></span>
                                    </label>
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="ck-sec reveal">
                            <div className="ck-sec-head">
                                <span className="n">Section 2</span>
                                <h3>Retention and disposal</h3>
                                <p>The lever that determines the size and cost of every future exercise.</p>
                            </div>
                            <ul className="ck-list">
                                <li className="ck-item">
                                    <label htmlFor="ck6">
                                        <input type="checkbox" id="ck6" checked={checkedItems[6] || false} onChange={() => handleCheckboxChange(6)} />
                                        <span className="ck-txt"><b>A tenant-wide retention baseline covers all locations including Teams messages</b><span>Teams chat is routinely missed and routinely discoverable. Confirm it explicitly.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck7">
                                        <input type="checkbox" id="ck7" checked={checkedItems[7] || false} onChange={() => handleCheckboxChange(7)} />
                                        <span className="ck-txt"><b>Records series with longer or event-based retention have labels applied</b><span>Matter files should retain from closure, not from creation. Event-based retention is how most legal schedules actually work.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck8">
                                        <input type="checkbox" id="ck8" checked={checkedItems[8] || false} onChange={() => handleCheckboxChange(8)} />
                                        <span className="ck-txt"><b>Content past its retention period is genuinely being disposed of</b><span>Most firms have a schedule and delete nothing. Check whether anything has actually been disposed of in the last year.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck9">
                                        <input type="checkbox" id="ck9" checked={checkedItems[9] || false} onChange={() => handleCheckboxChange(9)} />
                                        <span className="ck-txt"><b>Disposition review is enabled with named reviewers</b><span>Deletion approved by a named person and timestamped is defensible. Silent policy deletion is harder to explain.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck10">
                                        <input type="checkbox" id="ck10" checked={checkedItems[10] || false} onChange={() => handleCheckboxChange(10)} />
                                        <span className="ck-txt"><b>Deleted items within the retention period remain discoverable</b><span>Test this. A user who deletes an email should not be able to remove it from scope.</span></span>
                                    </label>
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="ck-sec reveal">
                            <div className="ck-sec-head">
                                <span className="n">Section 3</span>
                                <h3>Search and collection</h3>
                                <p>Whether you can actually find and preserve what is asked for.</p>
                            </div>
                            <ul className="ck-list">
                                <li className="ck-item">
                                    <label htmlFor="ck11">
                                        <input type="checkbox" id="ck11" checked={checkedItems[11] || false} onChange={() => handleCheckboxChange(11)} />
                                        <span className="ck-txt"><b>Custodian mapping is current and automated from your directory</b><span>A manually maintained custodian list is out of date the week after it is written.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck12">
                                        <input type="checkbox" id="ck12" checked={checkedItems[12] || false} onChange={() => handleCheckboxChange(12)} />
                                        <span className="ck-txt"><b>Holds can be applied without notifying the custodian, where required</b><span>Some matters require silent preservation. Confirm your configuration supports it before you need it.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck13">
                                        <input type="checkbox" id="ck13" checked={checkedItems[13] || false} onChange={() => handleCheckboxChange(13)} />
                                        <span className="ck-txt"><b>Search covers mailboxes, OneDrive, SharePoint, Teams and shared mailboxes</b><span>Shared mailboxes and Teams private channels are the two most commonly missed locations.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck14">
                                        <input type="checkbox" id="ck14" checked={checkedItems[14] || false} onChange={() => handleCheckboxChange(14)} />
                                        <span className="ck-txt"><b>A case template exists so every matter is handled consistently</b><span>Consistency is what makes your process defensible. Ad hoc handling produces gaps a challenge will find.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck15">
                                        <input type="checkbox" id="ck15" checked={checkedItems[15] || false} onChange={() => handleCheckboxChange(15)} />
                                        <span className="ck-txt"><b>Export format and encryption agreed with your legal team</b><span>Agree the deliverable before the exercise. Re-exporting because the format was wrong is avoidable and irritating.</span></span>
                                    </label>
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="ck-sec reveal">
                            <div className="ck-sec-head">
                                <span className="n">Section 4</span>
                                <h3>Rehearsal and evidence</h3>
                                <p>The half that only exists if somebody deliberately built it.</p>
                            </div>
                            <ul className="ck-list">
                                <li className="ck-item">
                                    <label htmlFor="ck16">
                                        <input type="checkbox" id="ck16" checked={checkedItems[16] || false} onChange={() => handleCheckboxChange(16)} />
                                        <span className="ck-txt"><b>A full workflow has been rehearsed on a synthetic matter</b><span>Hold, search, review set, export. Time each step. This is the most useful hour in the whole exercise.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck17">
                                        <input type="checkbox" id="ck17" checked={checkedItems[17] || false} onChange={() => handleCheckboxChange(17)} />
                                        <span className="ck-txt"><b>The chain of custody is documented and would survive a challenge</b><span>Who did what, when, and under whose authority, for every action taken.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck18">
                                        <input type="checkbox" id="ck18" checked={checkedItems[18] || false} onChange={() => handleCheckboxChange(18)} />
                                        <span className="ck-txt"><b>Communication supervision, where used, is scoped and privacy-cleared</b><span>Broad supervision creates an unmanageable queue and an employee relations problem you did not need.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck19">
                                        <input type="checkbox" id="ck19" checked={checkedItems[19] || false} onChange={() => handleCheckboxChange(19)} />
                                        <span className="ck-txt"><b>Information barriers do not obstruct a legitimate discovery search</b><span>Ethical walls and discovery can conflict. Establish how that is handled before a matter forces the question.</span></span>
                                    </label>
                                </li>
                                <li className="ck-item">
                                    <label htmlFor="ck20">
                                        <input type="checkbox" id="ck20" checked={checkedItems[20] || false} onChange={() => handleCheckboxChange(20)} />
                                        <span className="ck-txt"><b>Somebody other than IT understands the process well enough to run it</b><span>Key-person dependency on a discovery process is a risk that materialises at the worst possible moment.</span></span>
                                    </label>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </section>

            {/* Score Section */}
            <section className="section bg-navy" id="score">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">What your score means</span>
                        <h2 className="h-sec wide">Read this against the number above</h2>
                        <p className="lede">These bands are deliberately blunt. The middle band is where most organizations honestly sit, and it is a perfectly reasonable place to proceed from &mdash; provided the gaps are written down with owners rather than carried as optimism.</p>
                    </div>
                    <div className="band-grid reveal">
                        <div className="band" data-min="0" data-max="59"><span className="rng">0&ndash;59%</span><b>Significant gaps</b><p>Do not proceed yet. More than four in ten items are unaddressed, and the ones that fail here are usually the foundational ones that make everything after them harder.</p></div>
                        <div className="band" data-min="60" data-max="84"><span className="rng">60&ndash;84%</span><b>Mostly ready, with known gaps</b><p>Proceed on a defined scope, with the outstanding items written into the plan as risks with owners and dates. This is the most common honest position.</p></div>
                        <div className="band" data-min="85" data-max="100"><span className="rng">85&ndash;100%</span><b>Ready</b><p>The remaining gaps are small enough to handle during delivery rather than before it. Confirm the unticked items are genuinely minor rather than simply unexamined.</p></div>
                    </div>
                    <p className="band-note">Your score highlights automatically as you tick items above. Nothing is saved, sent or tracked &mdash; refreshing the page clears it.</p>
                </div>
            </section>

            {/* Gaps Section */}
            <section className="section bg-paper" id="gaps">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">Closing the gaps</span>
                        <h2 className="h-sec wide">If you could not tick these, start here</h2>
                        <p className="lede">The four items below are the ones whose absence causes the most trouble downstream. If your unticked items include any of these, they are worth addressing before the rest.</p>
                    </div>
                    <div className="gap-grid">
                        <article className="gap reveal"><span className="gi"><svg><use href="#i-target" /></svg></span><div><h3>Nothing has ever been disposed of</h3><p>This is the expensive one. Every future discovery exercise pulls in your entire history. Start with one records series and a disposition review.</p></div></article>
                        <article className="gap reveal"><span className="gi"><svg><use href="#i-target" /></svg></span><div><h3>Never rehearsed</h3><p>Run a synthetic matter this quarter. Every firm that does this properly finds something, and finding it now costs a morning.</p></div></article>
                        <article className="gap reveal"><span className="gi"><svg><use href="#i-target" /></svg></span><div><h3>Teams messages not covered</h3><p>Add them to the retention baseline. They are discoverable whether or not you retain them deliberately.</p></div></article>
                        <article className="gap reveal"><span className="gi"><svg><use href="#i-target" /></svg></span><div><h3>Single person dependency</h3><p>Document the process and train a second person. A discovery order does not wait for somebody to return from leave.</p></div></article>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-mist">
                <div className="wrap">
                    <div className="cta-band reveal">
                        <div>
                            <h2>Want a second opinion on your score?</h2>
                            <p>We will run a scoped readiness review including the synthetic matter rehearsal, and give you the timings and the findings in writing whether or not you take the remediation further with us.</p>
                        </div>
                        <div className="cta-actions">
                            <a className="btn btn-primary" href="../connect/consultation.html">Talk through your result <svg><use href="#i-arrow-r" /></svg></a>
                            <a className="btn btn-ghost" href="../guides/index.html">Read the related guides <svg><use href="#i-arrow-r" /></svg></a>
                            <small>We reply to every message within one business day.</small>
                        </div>
                    </div>

                    <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
                        <span className="eyebrow">Keep going</span>
                        <h2 className="h-sec wide">Related checklists</h2>
                    </div>
                    <div className="rel-posts">
                        <article className="bpost" data-platform="purview" data-service="managed-it-security" data-industry="public-sector">
                            <a className="bimg" href="purview-records-compliance-audit-public-sector.html" aria-label="Records compliance audit">
                                <svg><use href="#i-docs" /></svg>
                                <span className="plat">Microsoft Purview</span>
                            </a>
                            <div className="bbody">
                                <div className="bmeta">
                                    <span className="tag ind">Public Sector</span>
                                    <span className="tag typ">Compliance</span>
                                </div>
                                <h3><a href="purview-records-compliance-audit-public-sector.html">Records compliance audit</a></h3>
                                <p>Whether your retention schedule is operating or merely documented, across twenty specific checks.</p>
                                <div className="bfoot">
                                    <span>25 April 2026 &middot; 20 checks</span>
                                    <a className="link-more" href="purview-records-compliance-audit-public-sector.html">Open <svg><use href="#i-arrow-r" /></svg></a>
                                </div>
                            </div>
                        </article>
                        <article className="bpost" data-platform="purview" data-service="managed-it-security" data-industry="financial-services">
                            <a className="bimg" href="purview-supervision-readiness-financial-services.html" aria-label="Communication supervision readiness">
                                <svg><use href="#i-docs" /></svg>
                                <span className="plat">Microsoft Purview</span>
                            </a>
                            <div className="bbody">
                                <div className="bmeta">
                                    <span className="tag ind">Financial Services</span>
                                    <span className="tag typ">Readiness</span>
                                </div>
                                <h3><a href="purview-supervision-readiness-financial-services.html">Communication supervision readiness</a></h3>
                                <p>Twenty checks before turning on supervision, covering scope, privacy and whether the review queue is workable.</p>
                                <div className="bfoot">
                                    <span>14 March 2026 &middot; 20 checks</span>
                                    <a className="link-more" href="purview-supervision-readiness-financial-services.html">Open <svg><use href="#i-arrow-r" /></svg></a>
                                </div>
                            </div>
                        </article>
                        <article className="bpost" data-platform="purview" data-service="managed-it-security" data-industry="nonprofits-associations">
                            <a className="bimg" href="purview-donor-data-audit-nonprofits.html" aria-label="Donor and supporter data protection audit">
                                <svg><use href="#i-docs" /></svg>
                                <span className="plat">Microsoft Purview</span>
                            </a>
                            <div className="bbody">
                                <div className="bmeta">
                                    <span className="tag ind">Nonprofits &amp; Associations</span>
                                    <span className="tag typ">Audit</span>
                                </div>
                                <h3><a href="purview-donor-data-audit-nonprofits.html">Donor and supporter data protection audit</a></h3>
                                <p>Twenty checks on whether supporter data is protected proportionately, on a budget and with a small team.</p>
                                <div className="bfoot">
                                    <span>29 November 2025 &middot; 20 checks</span>
                                    <a className="link-more" href="purview-donor-data-audit-nonprofits.html">Open <svg><use href="#i-arrow-r" /></svg></a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ChecklistDetail;