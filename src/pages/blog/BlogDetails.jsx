import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost() {
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
            <a href="/blog">Insights</a><span>/</span>
            <b>Legal</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Dynamics 365 Sales &middot; Challenges</span>
              <h1>Your intake pipeline is a spreadsheet, and here is what it costs</h1>
              <p className="lede">Law firms are exceptional at legal work and, with striking consistency, under-instrumented at the business around it. Intake is where that shows first.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="/contact">Talk to us about this <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/blog">More insights <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>Key takeaways</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>If nobody can size the intake leak, it cannot be managed</span></li>
                <li><svg><use href="#i-check" /></svg><span>The objective is a record and an owner, not a corporate sales process</span></li>
                <li><svg><use href="#i-check" /></svg><span>A workflow-based conflict check produces a record your insurer will value</span></li>
                <li><svg><use href="#i-check" /></svg><span>Capture from Outlook; fee earners who must switch applications will not record</span></li>
                <li><svg><use href="#i-check" /></svg><span>Pilot with the most sceptical practice group, not the most cooperative</span></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="byline">
            <span className="bl-av"><svg><use href="#i-users" /></svg></span>
            <span><b>JJC Systems</b></span>
            <span className="sep">&middot;</span>
            <span>9 March 2026</span>
            <span className="sep">&middot;</span>
            <span>8 min read</span>
            <span className="sep">&middot;</span>
            <span><a href="/blog?industry=legal">Legal</a></span>
            <span className="sep">&middot;</span>
            <span><a href="/blog?service=business-applications">Business Applications</a></span>
          </div>

          <div className="art">
            <p className="stand">Ask a managing partner how many enquiries the firm received last month, what they were worth, and what proportion converted. In most firms the honest answer is that nobody knows.</p>
            <p>This is not a small gap. It means marketing spend cannot be evaluated, business development cannot be managed, and the firm's growth depends on the individual conscientiousness of whoever happened to answer the phone.</p>

            <h2>How enquiries actually get lost</h2>
            <p>An enquiry arrives by email to a partner who is in court. It sits. Three days later they respond, and the prospective client has already instructed someone else. Nobody records that this happened, so the firm never learns.</p>
            <p>Multiply by every partner and every channel — web form, phone, referral, personal contact — and you have a leak nobody can size.</p>

            <h2>What instrumenting intake actually involves</h2>
            <p>Less than firms fear. The objective is not a corporate sales process; it is a record and an owner.</p>
            <ul>
              <li><svg><use href="#i-check" /></svg><span>Every enquiry captured with source, practice area, indicative value and a named owner</span></li>
              <li><svg><use href="#i-check" /></svg><span>Conflict check run and permanently recorded as part of the intake workflow</span></li>
              <li><svg><use href="#i-check" /></svg><span>Automated follow-up when an enquiry ages past an agreed threshold</span></li>
              <li><svg><use href="#i-check" /></svg><span>Pitch and proposal tracking with win and loss reasons captured at the time</span></li>
              <li><svg><use href="#i-check" /></svg><span>Referral source reporting, so the firm knows which relationships actually produce work</span></li>
            </ul>

            <h2>The conflicts record is the quiet win</h2>
            <p>Most firms run conflict checks thoroughly and informally — a senior person is asked, they think carefully, they answer. The check is good. The record is a memory.</p>
            <p>Making the check part of a workflow produces a searchable, timestamped record covering parties, matters and relationships. Your risk partner will value that more than the pipeline reporting, and your professional indemnity insurer may too.</p>

            <h2>Adoption in a partnership</h2>
            <p>The failure mode is well established: a system designed for management reporting, experienced by fee earners as administration, abandoned within a year.</p>
            <p>The counter is to design where they already work. Capture from Outlook without leaving Outlook. Justify every mandatory field individually. And pilot with the practice group that least wants it, because they will find the friction that would have killed the rollout everywhere else.</p>

            <h2>What the numbers look like afterwards</h2>
            <p>Firms that instrument intake properly typically find conversion improves materially without anybody working harder — simply because enquiries stop going cold. And for the first time, marketing spend becomes attributable to matters actually opened.</p>

            <div className="pull">
              <h4>What to take away</h4>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>If nobody can size the intake leak, it cannot be managed</span></li>
                <li><svg><use href="#i-check" /></svg><span>The objective is a record and an owner, not a corporate sales process</span></li>
                <li><svg><use href="#i-check" /></svg><span>A workflow-based conflict check produces a record your insurer will value</span></li>
                <li><svg><use href="#i-check" /></svg><span>Capture from Outlook; fee earners who must switch applications will not record</span></li>
                <li><svg><use href="#i-check" /></svg><span>Pilot with the most sceptical practice group, not the most cooperative</span></li>
              </ul>
            </div>

            <h2>Where to go from here</h2>
            <p>Pick a practice group and a matter type, and we will demonstrate intake, conflict check and matter opening against your terminology and checklist.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Recognise the problem?</h2>
              <p>If this describes your situation, tell us where it hurts most. We will tell you what it would realistically take to fix in your environment, what we would measure, and whether we think it is worth doing at all.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">Request a consultation <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="/platforms">See our Dynamics 365 Sales page <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>

          <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
            <span className="eyebrow">Keep reading</span>
            <h2 className="h-sec wide">Related articles</h2>
          </div>
          <div className="rel-posts">
            <article className="bpost" data-platform="d365-sales" data-service="business-applications" data-industry="professional-services">
              <a className="bimg" href="forecast-negotiated-professional-services-sales.html" aria-label="If your forecast is negotiated, it is not a forecast">
                <svg><use href="#i-sales" /></svg>
                <span className="plat">Dynamics 365 Sales</span>
              </a>
              <div className="bbody">
                <div className="bmeta">
                  <span className="tag ind">Professional Services</span>
                  <span className="tag typ">Challenges</span>
                </div>
                <h3><a href="forecast-negotiated-professional-services-sales.html">If your forecast is negotiated, it is not a forecast</a></h3>
                <p>The weekly pipeline meeting where numbers get adjusted by discussion is not forecasting. It is a confidence poll, and it is why variance is never explainable.</p>
                <div className="bfoot">
                  <span>11 May 2026 &middot; 8 min read</span>
                  <a className="link-more" href="forecast-negotiated-professional-services-sales.html">Read <svg><use href="#i-arrow-r" /></svg></a>
                </div>
              </div>
            </article>
            <article className="bpost" data-platform="d365-sales" data-service="business-applications" data-industry="retail-distribution">
              <a className="bimg" href="quoting-live-availability-retail-sales.html" aria-label="Quoting from stock you actually have">
                <svg><use href="#i-sales" /></svg>
                <span className="plat">Dynamics 365 Sales</span>
              </a>
              <div className="bbody">
                <div className="bmeta">
                  <span className="tag ind">Retail &amp; Distribution</span>
                  <span className="tag typ">Features</span>
                </div>
                <h3><a href="quoting-live-availability-retail-sales.html">Quoting from stock you actually have</a></h3>
                <p>Available-to-promise calculated from a nightly snapshot is not availability. It is a guess that the sales desk is contractually committing to.</p>
                <div className="bfoot">
                  <span>27 April 2026 &middot; 7 min read</span>
                  <a className="link-more" href="quoting-live-availability-retail-sales.html">Read <svg><use href="#i-arrow-r" /></svg></a>
                </div>
              </div>
            </article>
            <article className="bpost" data-platform="d365-sales" data-service="business-applications" data-industry="education">
              <a className="bimg" href="enrolment-funnel-education-sales.html" aria-label="The enrolment funnel is a communication problem">
                <svg><use href="#i-sales" /></svg>
                <span className="plat">Dynamics 365 Sales</span>
              </a>
              <div className="bbody">
                <div className="bmeta">
                  <span className="tag ind">Education</span>
                  <span className="tag typ">Challenges</span>
                </div>
                <h3><a href="enrolment-funnel-education-sales.html">The enrolment funnel is a communication problem</a></h3>
                <p>Institutions lose most applicants between deposit and registration, and it is rarely because a better offer arrived.</p>
                <div className="bfoot">
                  <span>26 January 2026 &middot; 8 min read</span>
                  <a className="link-more" href="enrolment-funnel-education-sales.html">Read <svg><use href="#i-arrow-r" /></svg></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;