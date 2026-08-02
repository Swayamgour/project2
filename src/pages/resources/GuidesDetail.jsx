import React from 'react';
import { Link } from 'react-router-dom';

function GuideDetail() {
  // Helper to get icon SVG
  const getIcon = (iconName) => {
    const icons = {
      erp: <svg><use href="#i-erp" /></svg>,
      docs: <svg><use href="#i-docs" /></svg>,
      chart: <svg><use href="#i-chart" /></svg>,
      grid: <svg><use href="#i-grid" /></svg>,
      device: <svg><use href="#i-device" /></svg>,
      shield: <svg><use href="#i-shield" /></svg>,
      cloud: <svg><use href="#i-cloud" /></svg>,
      sales: <svg><use href="#i-sales" /></svg>
    };
    return icons[iconName] || icons.chart;
  };

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span>
            <a href="/guides">Guides</a><span>/</span>
            <b>Dynamics 365 Business Central</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Dynamics 365 Business Central &middot; Advanced</span>
              <h1>Configuring actual costing in Business Central</h1>
              <p className="lede">Move quoting off a stale standard and onto real production cost, without disrupting the month end you have to close next week.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="/contact">Get help with this <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="#config">Skip to configuration <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>Key practices</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Stage by item category rather than converting the whole item master at once</span></li>
                <li><svg><use href="#i-check" /></svg><span>Split work centres that cover genuinely different operations before setting rates</span></li>
                <li><svg><use href="#i-check" /></svg><span>Separate material, capacity and subcontract variance accounts from the start</span></li>
                <li><svg><use href="#i-check" /></svg><span>Schedule the cost adjustment run and monitor its duration as data volume grows</span></li>
                <li><svg><use href="#i-check" /></svg><span>Keep the standard cost populated during the parallel period for reporting continuity</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>Advanced</b><span>Difficulty</span></div>
            <div className="svc-stat"><b>12 min</b><span>Read time</span></div>
            <div className="svc-stat"><b>3&ndash;6 weeks including a parallel quarter</b><span>Typical effort</span></div>
            <div className="svc-stat"><b>Manufacturing</b><span>Written for</span></div>
          </div>
        </div>
      </section>

      {/* Subnavigation */}
      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          <a href="#why">Why</a>
          <a href="#before">Before you start</a>
          <a href="#concepts">How it works</a>
          <a href="#config">Configuration</a>
          <a href="#verify">Verify</a>
          <a href="#practice">Best practice</a>
          <a href="#pitfalls">Pitfalls</a>
          <a href="#checklist">Checklist</a>
          <a className="subnav-cta link-more" href="/contact">Get help <svg><use href="#i-arrow-r" /></svg></a>
        </div>
      </nav>

      {/* Why Section */}
      <section className="section bg-paper" id="why">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Who this is for</span>
            <h2 className="h-sec wide">Two summaries, because two audiences read this</h2>
          </div>
          <div className="who-grid reveal">
            <div className="who">
              <h3><svg><use href="#i-chart" /></svg> If you own the outcome</h3>
              <p>Your quoted margin is only as good as the cost basis behind it. This guide shows what changes operationally when you move to actual costing, what it costs to get there, and why we recommend running both models in parallel for a full quarter before switching.</p>
            </div>
            <div className="who tech">
              <h3><svg><use href="#i-grid" /></svg> If you have to build it</h3>
              <p>Costing method selection, work centre and machine centre rate setup, capacity posting, WIP and variance account mapping, and the inventory adjustment run that reconciles it all. Assumes you already have production orders posting cleanly.</p>
            </div>
          </div>

          <div className="sec-head reveal" style={{ marginTop: 'clamp(48px,6vw,76px)' }}>
            <span className="eyebrow">Why it matters</span>
            <h2 className="h-sec wide">The problem this solves</h2>
          </div>
          <div className="art" style={{ maxWidth: '820px' }}>
            <p>Standard costing is not wrong. It is a deliberate simplification that trades accuracy for stability, and it works well when standards are reviewed regularly. Most mid-market manufacturers do not review them regularly, so the simplification quietly becomes a distortion.</p>
            <p>The business consequence is that quoting, product rationalisation and customer profitability decisions are all made on a number nobody has validated recently. The variance analysis exists, but it arrives after the quarter and explains rather than informs.</p>
          </div>
        </div>
      </section>

      {/* Before You Start Section */}
      <section className="section bg-mist" id="before">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Before you start</span>
            <h2 className="h-sec wide">Prerequisites</h2>
            <p className="lede">Check these before beginning. Most stalled implementations stall on one of them.</p>
          </div>
          <div className="prereq">
            <div className="prereq-row"><b>Licensing</b><p>Business Central Premium. Manufacturing and Service Management are Premium-only; Essentials will not carry production orders.</p></div>
            <div className="prereq-row"><b>Roles</b><p>Business Central administrator, plus a finance owner who can approve the account mapping and a production planner who knows the routings.</p></div>
            <div className="prereq-row"><b>Data</b><p>Bills of material and routings that reflect what actually happens on the floor. If routings are aspirational, fix them first — costing amplifies routing errors.</p></div>
            <div className="prereq-row"><b>Baseline</b><p>One closed, signed-off period you can reconcile the new model against.</p></div>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="section bg-paper" id="concepts">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="h-sec wide">The concepts worth understanding first</h2>
            <p className="lede">Configuration is straightforward once these are clear. Skipping them is why most first attempts produce something that works and cannot be maintained.</p>
          </div>
          <div className="feat-grid">
            <article className="feat reveal">
              <span className="feat-icon"><svg><use href="#i-check" /></svg></span>
              <div>
                <h3>Costing methods are per item, not per company</h3>
                <p>Business Central sets the costing method on the item card, so you can run Standard on stable purchased components and Average or FIFO on manufactured items without converting everything. This matters — it means the migration can be staged by item category rather than attempted as a single event.</p>
              </div>
            </article>
            <article className="feat reveal">
              <span className="feat-icon"><svg><use href="#i-check" /></svg></span>
              <div>
                <h3>Capacity cost comes from work and machine centres</h3>
                <p>Direct and indirect cost rates are set on the work centre and machine centre. When an operation is posted against a production order, capacity cost flows at those rates. If the rates are stale the actual cost is no more accurate than the standard was, so rate review is part of the work rather than a follow-up.</p>
              </div>
            </article>
            <article className="feat reveal">
              <span className="feat-icon"><svg><use href="#i-check" /></svg></span>
              <div>
                <h3>Adjust Cost — Item Entries is what closes the loop</h3>
                <p>This batch job propagates cost changes through the value entry chain. Until it runs, inventory valuation and COGS reflect expected cost rather than actual. Scheduling it — and knowing how long it takes on your data volume — is the operational detail most implementations underestimate.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="section bg-mist" id="config">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Configuration</span>
            <h2 className="h-sec wide">Step by step</h2>
            <p className="lede">Settings shown are the ones that matter, not every field on the form. Values are starting points to validate against your own environment.</p>
          </div>
          <div className="steps-list">
            <article className="cfg reveal">
              <div className="cfg-n">01</div>
              <div className="cfg-b">
                <h3>Set the costing method by item category</h3>
                <p>Start with manufactured finished goods rather than components. Open the item card, set <strong>Costing Method</strong>, and note that the method cannot be changed once value entries exist without an inventory revaluation.</p>
                <p>Purchased components with stable pricing can stay on Standard. This is a legitimate mixed model, not a compromise.</p>
                <div className="settings">
                  <dl>
                    <dt>Costing Method</dt>
                    <dd>Average or FIFO for manufactured items; Standard is acceptable for stable purchased components</dd>
                    <dt>Standard Cost</dt>
                    <dd>Retain the existing value during the parallel period for reporting continuity</dd>
                    <dt>Item Category</dt>
                    <dd>Use categories to stage the migration by group rather than item by item</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="cfg reveal">
              <div className="cfg-n">02</div>
              <div className="cfg-b">
                <h3>Review work centre and machine centre rates</h3>
                <p>Direct Unit Cost carries labour; Indirect Cost % and Overhead Rate carry the burden. Getting these approximately right matters more than getting them precisely right, because the alternative is a machine rate set when the equipment was installed.</p>
                <p>Where a work centre covers several genuinely different operations, split it. A single blended rate across dissimilar work is the most common source of unexplainable variance.</p>
                <div className="settings">
                  <dl>
                    <dt>Direct Unit Cost</dt>
                    <dd>Labour rate per unit of measure — verify against current payroll, not the rate in the field</dd>
                    <dt>Indirect Cost %</dt>
                    <dd>Burden applied as a percentage of direct cost</dd>
                    <dt>Overhead Rate</dt>
                    <dd>Fixed overhead per unit of time, where you allocate that way</dd>
                    <dt>Unit Cost Calculation</dt>
                    <dd>Time or Units, matched to how the operation is actually measured</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="cfg reveal">
              <div className="cfg-n">03</div>
              <div className="cfg-b">
                <h3>Map the variance and WIP accounts</h3>
                <p>Inventory Posting Setup and General Posting Setup control where variance lands. Get this agreed with finance before posting anything, because unpicking misposted variance across a period is genuinely unpleasant.</p>
                <p>Separate the variance accounts by type. A single combined variance account tells you that something moved and nothing about why.</p>
                <div className="settings">
                  <dl>
                    <dt>WIP Account</dt>
                    <dd>Per inventory posting group, so work in progress is visible by product family</dd>
                    <dt>Material Variance</dt>
                    <dd>Separated from capacity variance</dd>
                    <dt>Capacity Variance</dt>
                    <dd>Separated again into capacity and capacity overhead where volumes justify it</dd>
                    <dt>Subcontracted Variance</dt>
                    <dd>Distinct account if you subcontract operations</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="cfg reveal">
              <div className="cfg-n">04</div>
              <div className="cfg-b">
                <h3>Enable capacity posting and expected cost posting</h3>
                <p>Manufacturing Setup controls whether capacity is posted automatically when operations are finished. Expected Cost Posting in Inventory Setup determines whether interim values reach the general ledger before invoicing.</p>
                <p>Turning on expected cost posting gives finance visibility during the period, which is the point of the exercise. It also increases posting volume, so test the performance impact on a copy of production first.</p>
                <div className="settings">
                  <dl>
                    <dt>Automatic Cost Posting</dt>
                    <dd>On — otherwise the ledger lags inventory continuously</dd>
                    <dt>Expected Cost Posting to G/L</dt>
                    <dd>On, so in-period WIP is visible</dd>
                    <dt>Automatic Cost Adjustment</dt>
                    <dd>Set to Day or Week; Always is heavy on larger datasets</dd>
                    <dt>Average Cost Calc. Type</dt>
                    <dd>Item, unless you genuinely need location or variant granularity</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="cfg reveal">
              <div className="cfg-n">05</div>
              <div className="cfg-b">
                <h3>Run the parallel quarter</h3>
                <p>Post production normally. Let both the standard and the actual roll accumulate. At period end, compare by product family rather than by part — family-level patterns are where the commercial decisions are.</p>
                <p>The reconciliation test is the one that matters: can the new model reproduce a period you have already closed and signed off? If not, the configuration is not finished.</p>
              </div>
            </article>
          </div>

          <div className="verify reveal" id="verify">
            <h3>Verify it worked</h3>
            <ol>
              <li>Run Adjust Cost — Item Entries and confirm it completes within your close window on production-sized data.</li>
              <li>Reconcile Inventory Valuation against the general ledger inventory accounts for a closed period.</li>
              <li>Pick three finished items and trace unit cost back through the value entries to material, capacity and subcontract components.</li>
              <li>Compare actual against standard by product family and confirm the variance is explainable rather than merely present.</li>
              <li>Confirm WIP by inventory posting group reconciles to the WIP account balance.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Best Practice Section */}
      <section className="section bg-navy" id="practice">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Best practice</span>
            <h2 className="h-sec wide">What we do on every engagement of this type</h2>
          </div>
          <ul className="biz-outcomes reveal">
            <li><svg><use href="#i-check" /></svg><span>Stage by item category rather than converting the whole item master at once</span></li>
            <li><svg><use href="#i-check" /></svg><span>Split work centres that cover genuinely different operations before setting rates</span></li>
            <li><svg><use href="#i-check" /></svg><span>Separate material, capacity and subcontract variance accounts from the start</span></li>
            <li><svg><use href="#i-check" /></svg><span>Schedule the cost adjustment run and monitor its duration as data volume grows</span></li>
            <li><svg><use href="#i-check" /></svg><span>Keep the standard cost populated during the parallel period for reporting continuity</span></li>
            <li><svg><use href="#i-check" /></svg><span>Review capacity rates on a defined cycle — annually at minimum — or you recreate the original problem</span></li>
          </ul>
        </div>
      </section>

      {/* Pitfalls Section */}
      <section className="section bg-paper" id="pitfalls">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Pitfalls</span>
            <h2 className="h-sec wide">What catches most first attempts</h2>
            <p className="lede">Every one of these is avoidable, and every one of them is common enough that we check for it by default.</p>
          </div>
          <div className="pit-grid">
            <article className="pit reveal">
              <h3><span>!</span>Changing costing method after value entries exist</h3>
              <p>Business Central will not simply switch it. You need an inventory revaluation, and doing this mid-period on live data creates reconciliation work nobody enjoys. Decide the method per category before you post.</p>
            </article>
            <article className="pit reveal">
              <h3><span>!</span>Leaving Automatic Cost Adjustment on Always</h3>
              <p>It is tempting because it keeps everything current. On a manufacturer with real transaction volume it makes posting noticeably slower. Day or Week is almost always the right setting.</p>
            </article>
            <article className="pit reveal">
              <h3><span>!</span>Blended work centre rates</h3>
              <p>One rate covering a manual assembly bench and a CNC cell produces variance that cannot be explained and therefore will not be acted on. Split the work centre.</p>
            </article>
            <article className="pit reveal">
              <h3><span>!</span>Skipping the routing review</h3>
              <p>Actual costing does not fix inaccurate routings; it makes them visible as variance. If the routings describe an idealised process, correct them before you switch or you will spend the parallel quarter investigating the wrong thing.</p>
            </article>
          </div>

          <div className="check-list reveal" id="checklist">
            <h3>Completion checklist</h3>
            <ul>
              <li><i></i><span>Costing method decided per item category and documented</span></li>
              <li><i></i><span>Work centre and machine centre rates reviewed against current payroll and overhead</span></li>
              <li><i></i><span>Variance accounts separated by type and agreed with finance</span></li>
              <li><i></i><span>Expected cost posting and automatic cost adjustment configured and performance-tested</span></li>
              <li><i></i><span>One closed period reconciled successfully in the new model</span></li>
              <li><i></i><span>Parallel quarter scheduled with a defined comparison and decision point</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Want a second pair of eyes?</h2>
              <p>If you want the reconciliation done against your own data before committing, send us a chart of accounts, an item list and one closed period. We will configure a demo environment and run the comparison with your controller.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">Request a consultation <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="/platforms">See our Dynamics 365 Business Central page <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>

          <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
            <span className="eyebrow">Keep going</span>
            <h2 className="h-sec wide">Related guides</h2>
          </div>
          <div className="rel-posts">
            <article className="bpost" data-platform="business-central" data-service="business-applications" data-industry="retail-distribution">
              <a className="bimg" href="bc-warehouse-directed-picking-retail.html" aria-label="Turning on directed put-away and pick in Business Central">
                <svg><use href="#i-erp" /></svg>
                <span className="plat">Dynamics 365 Business Central</span>
              </a>
              <div className="bbody">
                <div className="bmeta">
                  <span className="tag ind">Retail &amp; Distribution</span>
                  <span className="tag lvl" data-l="Advanced">Advanced</span>
                </div>
                <h3><a href="bc-warehouse-directed-picking-retail.html">Turning on directed put-away and pick in Business Central</a></h3>
                <p>The advanced warehouse configuration most distributors are licensed for and never enable — and how to switch it on without stopping shipments.</p>
                <div className="bfoot">
                  <span>21 May 2026 &middot; 12 min read</span>
                  <a className="link-more" href="bc-warehouse-directed-picking-retail.html">Open <svg><use href="#i-arrow-r" /></svg></a>
                </div>
              </div>
            </article>
            <article className="bpost" data-platform="business-central" data-service="business-applications" data-industry="small-mid-market">
              <a className="bimg" href="bc-dimensions-management-reporting-smb.html" aria-label="Designing dimensions in Business Central for management reporting">
                <svg><use href="#i-erp" /></svg>
                <span className="plat">Dynamics 365 Business Central</span>
              </a>
              <div className="bbody">
                <div className="bmeta">
                  <span className="tag ind">Small &amp; Mid-Market</span>
                  <span className="tag lvl" data-l="Intermediate">Intermediate</span>
                </div>
                <h3><a href="bc-dimensions-management-reporting-smb.html">Designing dimensions in Business Central for management reporting</a></h3>
                <p>The decision that constrains every report you will run for the next decade, made properly in a week rather than badly in an afternoon.</p>
                <div className="bfoot">
                  <span>26 March 2026 &middot; 10 min read</span>
                  <a className="link-more" href="bc-dimensions-management-reporting-smb.html">Open <svg><use href="#i-arrow-r" /></svg></a>
                </div>
              </div>
            </article>
            <article className="bpost" data-platform="business-central" data-service="business-applications" data-industry="construction-field-services">
              <a className="bimg" href="bc-job-costing-wip-construction.html" aria-label="Configuring job costing and WIP in Business Central">
                <svg><use href="#i-erp" /></svg>
                <span className="plat">Dynamics 365 Business Central</span>
              </a>
              <div className="bbody">
                <div className="bmeta">
                  <span className="tag ind">Construction &amp; Field Services</span>
                  <span className="tag lvl" data-l="Advanced">Advanced</span>
                </div>
                <h3><a href="bc-job-costing-wip-construction.html">Configuring job costing and WIP in Business Central</a></h3>
                <p>Weekly job cost against budget, change orders captured before the work, and a WIP calculation your accountant will accept.</p>
                <div className="bfoot">
                  <span>12 February 2026 &middot; 12 min read</span>
                  <a className="link-more" href="bc-job-costing-wip-construction.html">Open <svg><use href="#i-arrow-r" /></svg></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GuideDetail;