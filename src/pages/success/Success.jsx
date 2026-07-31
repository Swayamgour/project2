import { useRef, useMemo } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useGetCaseStudyCategoryQuery } from "../../redux/api.jsx";

export default function Success() {
  const mainRef = useRef(null);
  useDocumentMeta("Client Success | JJC Systems", "Documented outcomes from Microsoft platform deployments, organized by industry and by capability.");
  usePageEffects(mainRef);

  const { data, isLoading, error } = useGetCaseStudyCategoryQuery();

  // Memoize filtered data for performance
  const { industries, capabilities, totalIndustries, totalCapabilities } = useMemo(() => {
    if (!data?.data) {
      return { industries: [], capabilities: [], totalIndustries: 0, totalCapabilities: 0 };
    }

    const industries = data.data.filter(item => item.type === 'industry' && item.status === 'published');
    const capabilities = data.data.filter(item => item.type === 'capability' && item.status === 'published');

    return {
      industries,
      capabilities,
      totalIndustries: industries.length,
      totalCapabilities: capabilities.length
    };
  }, [data]);

  // Get the first industry with glanceItems for the note section
  const featuredIndustry = useMemo(() => {
    return industries.find(item => item.glanceItems?.length > 0) || industries[0];
  }, [industries]);

  // Function to generate slug for industry
  const getIndustrySlug = (name) => {
    return name.toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  // Function to generate icon key for capability
  const getIconForCapability = (name) => {
    const iconMap = {
      'Strategy & Transformation': 'i-strategy',
      'Managed IT & Security': 'i-shield',
      'Business Applications': 'i-erp',
      'Data, AI & Integration': 'i-chart',
      'Modern Work & Automation': 'i-grid',
      'Talent': 'i-staffing'
    };
    return iconMap[name] || 'i-service';
  };

  // Function to generate icon key for industry
  const getIconForIndustry = (name) => {
    const iconMap = {
      'Healthcare': 'i-service',
      'Legal': 'i-docs',
      'Financial Services': 'i-finance',
      'Public Sector': 'i-globe',
      'Education': 'i-users',
      'Manufacturing': 'i-automation',
      'Retail & Distribution': 'i-erp',
      'Construction & Field Services': 'i-field',
      'Professional Services': 'i-project',
      'Small & Mid-Market Enterprises': 'i-target',
      'Nonprofits & Associations': 'i-star'
    };
    return iconMap[name] || 'i-service';
  };

  if (isLoading) {
    return (
      <main id="main" ref={mainRef}>
        <section className="svc-hero">
          <div className="wrap">
            <div className="text-center py-12">
              <p>Loading success stories...</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main id="main" ref={mainRef}>
        <section className="svc-hero">
          <div className="wrap">
            <div className="text-center py-12">
              <p>Error loading data. Please try again later.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main" ref={mainRef}>
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <b>Client Success</b>
          </nav>

          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Client Success</span>
              <h1>Proven results. Practical expertise.</h1>
              <p className="lede">
                We help organizations solve operational and technology challenges to drive measurable outcomes that matter. Browse by your industry or by the kind of work involved — and read the note on the right about where these figures come from, because we think it matters.
              </p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="/#contact">
                  Talk to our team <svg><use href="#i-arrow-r"></use></svg>
                </a>
                <a className="btn btn-ghost" href="/success">
                  Explore all success stories <svg><use href="#i-arrow-r"></use></svg>
                </a>
              </div>
            </div>

            <aside className="glance">
              <h2>{featuredIndustry?.glanceHeading || "Where these come from"}</h2>
              <ul>
                {featuredIndustry?.glanceItems?.length > 0 ? (
                  featuredIndustry.glanceItems.map((item, index) => (
                    <li key={index}>
                      <svg><use href={`#${item.icon}`}></use></svg>
                      <span>{item.text}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>Every outcome is sourced from a Microsoft-published case study.</span>
                    </li>
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>Organization names are withheld; the published figures are unchanged.</span>
                    </li>
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>These are reference outcomes, not JJC Systems client results.</span>
                    </li>
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>The full source list with URLs is available on request.</span>
                    </li>
                  </>
                )}
              </ul>
            </aside>
          </div>

          <div className="svc-stats">
            <div className="svc-stat">
              <b>{totalIndustries}</b>
              <span>Industries covered</span>
            </div>
            <div className="svc-stat">
              <b>{totalCapabilities}</b>
              <span>Capability areas</span>
            </div>
            <div className="svc-stat">
              <b>40+</b>
              <span>Sourced outcomes</span>
            </div>
            <div className="svc-stat">
              <b>1 day</b>
              <span>We reply to every enquiry</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section bg-paper" id="industries">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Browse by industry</span>
            <h2 className="h-sec wide">Outcomes, organized by the sector they happened in</h2>
            <p className="lede">Every sector has its own regulators, deadlines and reporting obligations. Start with yours — each page carries four documented outcomes and the platforms behind them.</p>
          </div>
          <div className="browse-grid">
            {industries.map((industry) => (
              <a
                key={industry._id}
                className="browse-card reveal"
                href={`/success/industry-${industry.slug}`}
              >
                <span className="ic">
                  <svg><use href={`#${getIconForIndustry(industry.name)}`}></use></svg>
                </span>
                <b>{industry.name}</b>
                <p>Outcomes delivered for organizations in this sector.</p>
                <span className="cnt">{industry.extraStats?.length > 0 ? `${industry.extraStats.length} stories →` : '4 stories →'}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section bg-mist" id="capabilities">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Browse by capability</span>
            <h2 className="h-sec wide">Or by the kind of work involved</h2>
            <p className="lede">The same six capabilities we deliver. If you know the shape of the problem but not which sector precedent applies, start here.</p>
          </div>
          <div className="browse-grid">
            {capabilities.map((capability) => (
              <a
                key={capability._id}
                className="browse-card reveal"
                href={`/success/capability-${capability.slug}`}
              >
                <span className="ic">
                  <svg><use href={`#${getIconForCapability(capability.name)}`}></use></svg>
                </span>
                <b>{capability.name}</b>
                <p>
                  {capability.name === 'Strategy & Transformation' && 'Deciding what to change, in what order, and what it is worth. Legacy replacement, roadmaps and the business case that survives a board review.'}
                  {capability.name === 'Managed IT & Security' && 'Keeping the estate running and defended. Threat protection, identity, compliance and the consolidation of overlapping tooling.'}
                  {capability.name === 'Business Applications' && 'Dynamics 365 applied to how the organization actually runs — finance, operations, service, field work and customer engagement.'}
                  {capability.name === 'Data, AI & Integration' && 'One agreed set of numbers, connected systems, and AI built on a foundation that can be trusted.'}
                  {capability.name === 'Modern Work & Automation' && 'Microsoft 365 and Copilot deployed properly, plus the automation that removes work nobody counts as work.'}
                  {capability.name === 'Talent' && 'Building capability inside the organization — makers, champions and the skills that outlast any single engagement.'}
                </p>
                <span className="cnt">{capability.extraStats?.length > 0 ? `${capability.extraStats.length} stories →` : '4 stories →'}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section bg-paper" id="featured">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Featured success story</span>
            <h2 className="h-sec wide">Forty siloed systems into one citizen record</h2>
            <p className="lede">Nearly forty siloed systems and fragmented data made case management inefficient and prevented any unified, multilingual experience for citizens contacting local authorities.</p>
          </div>

          <div className="case-grid">
            <article className="case reveal">
              <div className="case-top">
                <div className="case-kicker">
                  <span className="case-tag">Public Sector</span>
                  <span className="case-tag cap">Business Applications</span>
                  <span className="case-tag ref">Reference outcome · published by Microsoft</span>
                </div>
                <h3>Forty siloed systems into one citizen record</h3>
                <p className="case-org">
                  <b>A regional public-sector IT provider serving municipalities</b> — Europe
                </p>
              </div>

              <div className="case-body">
                <div className="case-main">
                  <h4>The challenge</h4>
                  <p>Nearly forty siloed systems and fragmented data made case management inefficient and prevented any unified, multilingual experience for citizens contacting local authorities.</p>
                  <h4>What was done</h4>
                  <p>A centralised citizen relationship management system was built on Dynamics 365 Customer Service and Contact Center with Power Platform, and Copilot Studio agents were created for citizen support, case routing and knowledge management.</p>
                </div>

                <div className="case-side">
                  <div className="case-metrics">
                    <div className="case-metric">
                      <b>~40</b>
                      <span>Siloed systems replaced</span>
                    </div>
                    <div className="case-metric">
                      <b>30%</b>
                      <span>Of cases resolved at first level</span>
                    </div>
                    <div className="case-metric">
                      <b>Weeks</b>
                      <span>To first measurable result</span>
                    </div>
                  </div>

                  <ul className="case-out">
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>Citizen and employee data unified into one platform and one record</span>
                    </li>
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>Omnichannel support with case management on a single system</span>
                    </li>
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>First-level support resolving 30% of citizen cases within weeks of go-live</span>
                    </li>
                    <li>
                      <svg><use href="#i-check"></use></svg>
                      <span>Language barriers reduced through AI-assisted multilingual handling</span>
                    </li>
                  </ul>

                  <div className="case-prod">
                    <span>Dynamics 365 Customer Service</span>
                    <span>Dynamics 365 Contact Center</span>
                    <span>Power Platform</span>
                    <span>Copilot Studio</span>
                  </div>

                  <a className="link-more" style={{ marginTop: '18px' }} href="/success/story-forty-siloed-systems-into-one-citizen-record">
                    Read the full report <svg><use href="#i-arrow-r"></use></svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          <p style={{ marginTop: '26px' }}>
            <a className="link-more" href="/success/featured">
              Read the full story <svg><use href="#i-arrow-r"></use></svg>
            </a>
          </p>

          <div className="prov-note reveal">
            <svg><use href="#i-check"></use></svg>
            <p>
              <b>How to read these:</b> each outcome below is drawn from a case study published by Microsoft on its own customer-story and product sites. Organization names are withheld at our client's request, and the figures are the ones Microsoft published. These are reference outcomes that show what these platforms have delivered elsewhere — they are <b>not</b> JJC Systems client engagements, and we do not present them as our own results. The full source list, including every organization name and URL, is available on request.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Want to see what this would look like for you?</h2>
              <p>Tell us the process that is causing the most friction right now. We will show you how the same platforms have been applied elsewhere, what it would take in your environment, and what we would measure.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">
                Talk to our team <svg><use href="#i-arrow-r"></use></svg>
              </a>
              <a className="btn btn-ghost" href="/industries">
                See our industry pages <svg><use href="#i-arrow-r"></use></svg>
              </a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}