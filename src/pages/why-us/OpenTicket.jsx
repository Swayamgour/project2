import React from 'react';
import { Link } from 'react-router-dom';

function Support() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><b>Open a Support Ticket</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Support</span>
              <h1>Open a support ticket</h1>
              <p className="lede">Simply log in, provide the necessary details, and our team will start working on your issue right away. Three routes are available — the portal, email, or the phone if something is genuinely urgent — and all three create a tracked ticket.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#portal">Raise a ticket in the portal <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="tel:+13125857555">Call 312-585-7555 <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>Three ways to reach us</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Help desk portal — fastest for non-urgent issues</span></li>
                <li><svg><use href="#i-check" /></svg><span>Email support@jjcsystems.com — creates a ticket automatically</span></li>
                <li><svg><use href="#i-check" /></svg><span>Call 312-585-7555 option 1 — for immediate assistance</span></li>
                <li><svg><use href="#i-check" /></svg><span>All three routes are tracked; nothing sits in an inbox</span></li>
                <li><svg><use href="#i-check" /></svg><span>Service desk staffed 24/7 across three regions</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>24/7</b><span>Staffed service desk</span></div>
            <div className="svc-stat"><b>3</b><span>Ways to reach us</span></div>
            <div className="svc-stat"><b>Immediate</b><span>Ticket logged and referenced</span></div>
            <div className="svc-stat"><b>Option 1</b><span>For support on the phone</span></div>
          </div>
        </div>
      </section>

      {/* Subnavigation */}
      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          <a href="#portal">Raise a ticket</a>
          <a href="#detail">What to include</a>
          <a href="#other">Email or phone</a>
          <a href="#after">What happens next</a>
          <a className="subnav-cta link-more" href="/contact">Talk to us <svg><use href="#i-arrow-r" /></svg></a>
        </div>
      </nav>

      {/* Portal Steps Section */}
      <section className="section bg-paper" id="portal">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Raise a ticket</span>
            <h2 className="h-sec wide">Six steps, about two minutes</h2>
            <p className="lede">Simply log in, provide the necessary details, and our team will start working on your issue right away. Each step below shows where to click.</p>
          </div>
          <div className="tstep-list">
            <article className="tstep reveal">
              <div>
                <span className="tn">1</span>
                <h3>Log in to the JJC Systems Help Desk Portal</h3>
                <p>Use the credentials issued when your account was set up. If you have not been given access, your account manager can arrange it the same day — and if you cannot log in at all, use the email or phone route below rather than waiting.</p>
              </div>
              <div className="shot">
                <div>
                  <svg><use href="#i-grid" /></svg>
                  <b>Screenshot placeholder</b>
                  <span>The portal sign-in screen</span>
                </div>
              </div>
            </article>
            <article className="tstep reveal">
              <div>
                <span className="tn">2</span>
                <h3>Click "Submit a Ticket"</h3>
                <p>You will find it on the portal home screen, or under the "New Ticket" section in the navigation. Both take you to the same form.</p>
              </div>
              <div className="shot">
                <div>
                  <svg><use href="#i-grid" /></svg>
                  <b>Screenshot placeholder</b>
                  <span>The portal home screen with the Submit a Ticket button highlighted</span>
                </div>
              </div>
            </article>
            <article className="tstep reveal">
              <div>
                <span className="tn">3</span>
                <h3>Fill in the required fields</h3>
                <p>Three fields do most of the work. The more specific the subject and description, the faster the ticket reaches the right engineer rather than being triaged twice.</p>
                <ul>
                  <li><svg><use href="#i-check" /></svg><span><b>Subject:</b> A short, specific description of the issue. "Finance users cannot post to the general ledger" routes faster than "system problem".</span></li>
                  <li><svg><use href="#i-check" /></svg><span><b>Description:</b> What happened, what you expected, when it started, who is affected and whether anything changed recently.</span></li>
                  <li><svg><use href="#i-check" /></svg><span><b>Attachments:</b> Screenshots, error messages and log extracts. A screenshot of the actual error is worth several paragraphs describing it.</span></li>
                </ul>
              </div>
              <div className="shot">
                <div>
                  <svg><use href="#i-grid" /></svg>
                  <b>Screenshot placeholder</b>
                  <span>The new ticket form with subject, description and attachment fields</span>
                </div>
              </div>
            </article>
            <article className="tstep reveal">
              <div>
                <span className="tn">4</span>
                <h3>Select the appropriate category</h3>
                <p>If a category dropdown is available, choose the closest match. It determines which queue the ticket lands in and which team sees it first. If nothing fits, leave it and our triage team will route it.</p>
              </div>
              <div className="shot">
                <div>
                  <svg><use href="#i-grid" /></svg>
                  <b>Screenshot placeholder</b>
                  <span>The category dropdown expanded</span>
                </div>
              </div>
            </article>
            <article className="tstep reveal">
              <div>
                <span className="tn">5</span>
                <h3>Submit the ticket</h3>
                <p>Click Submit. The ticket is logged immediately and enters triage — it does not wait for anyone to open an inbox.</p>
              </div>
              <div className="shot">
                <div>
                  <svg><use href="#i-grid" /></svg>
                  <b>Screenshot placeholder</b>
                  <span>The completed form with the Submit button highlighted</span>
                </div>
              </div>
            </article>
            <article className="tstep reveal">
              <div>
                <span className="tn">6</span>
                <h3>Receive your confirmation and ticket number</h3>
                <p>You will get a confirmation with a reference number you can use to track progress, add information or ask for an update. Keep it — quoting it on a phone call saves several minutes.</p>
              </div>
              <div className="shot">
                <div>
                  <svg><use href="#i-grid" /></svg>
                  <b>Screenshot placeholder</b>
                  <span>The confirmation screen showing the ticket reference number</span>
                </div>
              </div>
            </article>
          </div>
          <div className="ph-note reveal">
            <svg><use href="#i-check" /></svg>
            <p><b>Placeholder content:</b> the six screenshots above are placeholders. Replace each with a real capture from your help desk portal at a consistent width, with any client names, ticket references or personal data redacted. Annotate the click target on each — a highlighted button removes almost all of the remaining ambiguity for a first-time user.</p>
          </div>
        </div>
      </section>

      {/* What to Include Section */}
      <section className="section bg-mist" id="detail">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What to include</span>
            <h2 className="h-sec wide">How to get your ticket resolved faster</h2>
            <p className="lede">None of this is required — raise the ticket even if you have none of it. But tickets that arrive with these details are routinely resolved on the first pass rather than after two rounds of questions.</p>
          </div>
          <div className="chal-grid">
            <article className="chal reveal">
              <span className="chal-n">01</span>
              <div>
                <h3>What you expected, and what happened instead</h3>
                <p>The gap between the two is the actual issue. "I clicked Post and expected the invoice to appear in the ledger; instead I got an error referencing a dimension" is diagnosable. "It is broken" requires a phone call first.</p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">02</span>
              <div>
                <h3>When it started, and what changed</h3>
                <p>Did it work last week? Was there an update, a new starter, a permissions change, a browser update? The answer frequently identifies the cause before anyone opens a console.</p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">03</span>
              <div>
                <h3>Who is affected</h3>
                <p>One person, one team or everyone. This drives severity and routing more than anything else in the ticket — and it is the detail most often left out.</p>
              </div>
            </article>
            <article className="chal reveal">
              <span className="chal-n">04</span>
              <div>
                <h3>The exact error, as a screenshot</h3>
                <p>Not a description of the error. The error itself, including any reference code. A single screenshot regularly saves an entire round trip.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Other Ways to Reach Us */}
      <section className="section bg-paper" id="other">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Other ways to reach us</span>
            <h2 className="h-sec wide">The portal is not the only route</h2>
            <p className="lede">Use whichever is quickest for you. All three create a tracked ticket — nothing sits in an individual's inbox.</p>
          </div>
          <div className="route-grid">
            <article className="route reveal">
              <span className="ri"><svg><use href="#i-grid" /></svg></span>
              <h3>Help desk portal</h3>
              <p>The fastest route for anything that is not urgent. Attach screenshots, track progress and see the full history of your previous tickets.</p>
              <span className="big">Submit a ticket</span>
              <span className="sub">Logged immediately, tracked from the moment you submit</span>
            </article>
            <article className="route reveal">
              <span className="ri"><svg><use href="#i-mail" /></svg></span>
              <h3>Prefer to send an email?</h3>
              <p>No problem. Email us with a brief description of your issue and we will take it from there — a ticket is created automatically and you will get the reference number by reply.</p>
              <span className="big"><a href="mailto:support@jjcsystems.com">support@jjcsystems.com</a></span>
              <span className="sub">Creates a tracked ticket automatically</span>
            </article>
            <article className="route is-urgent reveal">
              <span className="ri"><svg><use href="#i-phone" /></svg></span>
              <h3>Need immediate assistance?</h3>
              <p>Give us a call and select option 1. One of our support agents will assist you directly rather than taking a message.</p>
              <span className="big"><a href="tel:+13125857555">312-585-7555</a></span>
              <span className="sub">Select option 1 for support</span>
            </article>
          </div>
          <div className="chal-note reveal">
            <svg><use href="#i-target" /></svg>
            <p><b>If something is genuinely down, call.</b> Do not raise a portal ticket and wait. The phone line is the fastest path to a person for anything affecting a whole team or stopping work, and our agents can raise the ticket for you while they are already helping.</p>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section bg-navy" id="after">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What happens next</span>
            <h2 className="h-sec wide">After you submit</h2>
            <p className="lede">Every ticket follows the same path. Response targets are agreed in your service agreement — the pattern below is what happens regardless of severity.</p>
          </div>
          <div className="sev">
            <div className="sev-head">
              <div className="sev-row" style={{ borderBottom: 0, paddingBottom: 0 }}>
                <span>Stage</span><span>What happens</span><span style={{ textAlign: 'right' }}>Typically</span>
              </div>
            </div>
            <div className="sev-row"><b>Logged</b><p>Your ticket is created and a reference number is issued. Nothing waits for an inbox to be opened.</p><span className="t">Immediate</span></div>
            <div className="sev-row"><b>Triaged</b><p>Severity assessed and routed to the team with the right specialism, not to a general queue.</p><span className="t">Minutes</span></div>
            <div className="sev-row"><b>Acknowledged</b><p>A named engineer picks it up and confirms they have it, with any immediate questions.</p><span className="t">Per your SLA</span></div>
            <div className="sev-row"><b>Worked</b><p>Investigation and resolution, with updates at the frequency your agreement specifies.</p><span className="t">Per your SLA</span></div>
            <div className="sev-row"><b>Resolved &amp; confirmed</b><p>We do not close a ticket until you agree it is fixed. If it recurs, it reopens against the same reference.</p><span className="t">Your call</span></div>
          </div>
          <p className="metric-note"><b>Out of hours:</b> our service desk is staffed across three regions, so an issue raised overnight is picked up by a team working normal hours somewhere else rather than by an on-call engineer who was asleep. That is why we can commit to response times at 3am that mean something.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Not an existing client, but something is wrong?</h2>
              <p>The routes above are for clients with a support agreement. If you are not yet a client and you have an urgent problem, call us anyway — we would rather point you toward the right help, even if it is not us, than leave you stuck.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">Talk to our team <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="faq.html">Read the FAQ <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Support;