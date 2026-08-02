import React, { useState, useMemo } from 'react';

// Platform labels mapping
const PLATFORM_LABELS = {
  'business-central': 'Dynamics 365 Business Central',
  'd365-sales': 'Dynamics 365 Sales',
  'azure': 'Azure',
  'cybersecurity': 'Cybersecurity',
  'fabric': 'Microsoft Fabric',
  'power-bi': 'Power BI',
  'intune': 'Intune',
  'sharepoint': 'SharePoint'
};

const SERVICE_LABELS = {
  'strategy-transformation': 'Strategy & Transformation',
  'managed-it-security': 'Managed IT & Security',
  'business-applications': 'Business Applications',
  'data-ai-integration': 'Data, AI & Integration',
  'modern-work-automation': 'Modern Work & Automation',
  'talent': 'Talent'
};

const INDUSTRY_LABELS = {
  'healthcare': 'Healthcare',
  'legal': 'Legal',
  'financial-services': 'Financial Services',
  'public-sector': 'Public Sector',
  'education': 'Education',
  'manufacturing': 'Manufacturing',
  'retail-distribution': 'Retail & Distribution',
  'construction-field-services': 'Construction & Field Services',
  'professional-services': 'Professional Services',
  'small-mid-market': 'Small & Mid-Market',
  'nonprofits-associations': 'Nonprofits & Associations'
};

const BLOG_DATA = [
  {
    id: 1,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'healthcare',
    title: 'The oversharing problem your Copilot rollout will find first',
    description: 'Healthcare organizations have a decade of casually shared links sitting in SharePoint. Copilot does not create that problem — it audits it, in public, on day one.',
    date: '21 July 2026',
    readTime: '8 min read',
    type: 'Challenges',
    icon: 'docs',
    slug: 'copilot-oversharing-healthcare-sharepoint'
  },
  {
    id: 2,
    platform: 'business-central',
    service: 'business-applications',
    industry: 'manufacturing',
    title: 'Your standard cost is a story about last year',
    description: 'Most manufacturers quote from a cost standard set years ago and updated rarely. The gap between that number and reality decides which orders you win and which quietly lose money.',
    date: '14 July 2026',
    readTime: '9 min read',
    type: 'Challenges',
    icon: 'erp',
    slug: 'standard-cost-manufacturing-business-central'
  },
  {
    id: 3,
    platform: 'cybersecurity',
    service: 'managed-it-security',
    industry: 'small-mid-market',
    title: 'Your cyber insurance questionnaire is now your security roadmap',
    description: 'Insurers have quietly become the most effective security auditors in the mid-market. The questions they ask are a better prioritisation list than most internal risk registers.',
    date: '6 July 2026',
    readTime: '7 min read',
    type: 'Market trends',
    icon: 'shield',
    slug: 'cyber-insurance-questionnaire-smb-security'
  },
  {
    id: 4,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'legal',
    title: 'Ethical walls in Microsoft 365: how they should actually be built',
    description: 'Information barriers, sensitivity labels and access design — and the common configuration that looks compliant to a risk partner but is not.',
    date: '29 June 2026',
    readTime: '10 min read',
    type: 'How-to guide',
    icon: 'docs',
    slug: 'ethical-walls-legal-sharepoint'
  },
  {
    id: 5,
    platform: 'power-bi',
    service: 'data-ai-integration',
    industry: 'financial-services',
    title: 'One report, every branch, no exports',
    description: 'Row-level security in Power BI is the difference between one governed report and forty spreadsheets circulating by email. Most institutions build the spreadsheets.',
    date: '22 June 2026',
    readTime: '8 min read',
    type: 'How-to guide',
    icon: 'chart',
    slug: 'row-level-security-financial-services-power-bi'
  },
  {
    id: 6,
    platform: 'business-central',
    service: 'business-applications',
    industry: 'construction-field-services',
    title: 'Job cost while the job is still running',
    description: 'Construction businesses discover their margin at close-out, when every decision that determined it has already been made. Moving that discovery forward is the whole game.',
    date: '15 June 2026',
    readTime: '8 min read',
    type: 'Solutions',
    icon: 'erp',
    slug: 'job-cost-construction-business-central'
  },
  {
    id: 7,
    platform: 'intune',
    service: 'talent',
    industry: 'small-mid-market',
    title: 'Hire an IT person, or buy the capability?',
    description: 'Every growing business hits this decision, usually around the fifty-person mark. The right answer depends on questions most owners do not think to ask.',
    date: '8 June 2026',
    readTime: '7 min read',
    type: 'Best practices',
    icon: 'device',
    slug: 'device-estate-buy-or-hire-smb-intune'
  },
  {
    id: 8,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'nonprofits-associations',
    title: 'Grant evidence that assembles itself',
    description: 'Funder reporting consumes weeks of senior time in most nonprofits, and it does so because the evidence is gathered afterwards rather than captured as work happens.',
    date: '1 June 2026',
    readTime: '7 min read',
    type: 'Solutions',
    icon: 'docs',
    slug: 'grant-evidence-nonprofits-sharepoint'
  },
  {
    id: 9,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'public-sector',
    title: 'Retention that actually deletes something',
    description: 'Most agencies have a documented retention schedule and, in practice, delete nothing. The consequences arrive with the next public records request.',
    date: '26 May 2026',
    readTime: '8 min read',
    type: 'Best practices',
    icon: 'docs',
    slug: 'records-retention-public-sector-sharepoint'
  },
  {
    id: 10,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'manufacturing',
    title: 'Joining machine data to the ledger',
    description: 'The plant generates enormous quantities of data and almost none of it reaches the person deciding whether to accept an order at a given price.',
    date: '18 May 2026',
    readTime: '9 min read',
    type: 'Solutions',
    icon: 'chart',
    slug: 'machine-data-to-ledger-manufacturing-fabric'
  },
  {
    id: 11,
    platform: 'd365-sales',
    service: 'business-applications',
    industry: 'professional-services',
    title: 'If your forecast is negotiated, it is not a forecast',
    description: 'The weekly pipeline meeting where numbers get adjusted by discussion is not forecasting. It is a confidence poll, and it is why variance is never explainable.',
    date: '11 May 2026',
    readTime: '8 min read',
    type: 'Challenges',
    icon: 'sales',
    slug: 'forecast-negotiated-professional-services-sales'
  },
  {
    id: 12,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'education',
    title: 'Early alert signals that reach an advisor in time',
    description: 'Retention programmes fail for a reason that has nothing to do with signal quality. Nobody owns the alert.',
    date: '4 May 2026',
    readTime: '8 min read',
    type: 'Solutions',
    icon: 'chart',
    slug: 'early-alert-education-fabric'
  },
  {
    id: 13,
    platform: 'd365-sales',
    service: 'business-applications',
    industry: 'retail-distribution',
    title: 'Quoting from stock you actually have',
    description: 'Available-to-promise calculated from a nightly snapshot is not availability. It is a guess that the sales desk is contractually committing to.',
    date: '27 April 2026',
    readTime: '7 min read',
    type: 'Features',
    icon: 'sales',
    slug: 'quoting-live-availability-retail-sales'
  },
  {
    id: 14,
    platform: 'azure',
    service: 'strategy-transformation',
    industry: 'financial-services',
    title: 'Modernising around a core you are not going to replace',
    description: 'Banking cores are decades old for defensible reasons. The interesting question is how much modern experience you can build without touching the middle.',
    date: '20 April 2026',
    readTime: '9 min read',
    type: 'Future readiness',
    icon: 'cloud',
    slug: 'core-modernisation-financial-services-azure'
  },
  {
    id: 15,
    platform: 'intune',
    service: 'managed-it-security',
    industry: 'education',
    title: 'Shared devices, exam mode, and a student body testing your controls',
    description: 'Managing endpoints in education is unlike any other sector, because a portion of your user base treats your configuration as a challenge.',
    date: '13 April 2026',
    readTime: '8 min read',
    type: 'How-to guide',
    icon: 'device',
    slug: 'shared-devices-education-intune'
  },
  {
    id: 16,
    platform: 'power-bi',
    service: 'data-ai-integration',
    industry: 'retail-distribution',
    title: 'Cost to serve: the number that changes which customers you want',
    description: 'Gross margin by product is known in every distribution business. Cost to serve by customer is known in very few, and it is the more decision-useful number.',
    date: '6 April 2026',
    readTime: '9 min read',
    type: 'How-to guide',
    icon: 'chart',
    slug: 'cost-to-serve-retail-power-bi'
  },
  {
    id: 17,
    platform: 'intune',
    service: 'managed-it-security',
    industry: 'construction-field-services',
    title: 'Devices that live in vehicles',
    description: 'Field endpoint management fails on assumptions made in an office: reliable connectivity, a desk, and a user who will wait for a progress bar.',
    date: '30 March 2026',
    readTime: '7 min read',
    type: 'Best practices',
    icon: 'device',
    slug: 'vehicle-devices-construction-intune'
  },
  {
    id: 18,
    platform: 'azure',
    service: 'talent',
    industry: 'public-sector',
    title: 'Building cloud skills in an agency that cannot compete on salary',
    description: 'Public sector technology teams lose people to private sector pay and cannot match it. The response that works is not a retention bonus.',
    date: '23 March 2026',
    readTime: '7 min read',
    type: 'Best practices',
    icon: 'cloud',
    slug: 'cloud-skills-public-sector-azure'
  },
  {
    id: 19,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'healthcare',
    title: 'Service-line profitability that clinicians and finance both accept',
    description: 'Every health system produces service-line numbers. In most, the annual allocation argument consumes weeks and settles nothing.',
    date: '16 March 2026',
    readTime: '9 min read',
    type: 'How-to guide',
    icon: 'chart',
    slug: 'service-line-profitability-healthcare-fabric'
  },
  {
    id: 20,
    platform: 'd365-sales',
    service: 'business-applications',
    industry: 'legal',
    title: 'Your intake pipeline is a spreadsheet, and here is what it costs',
    description: 'Law firms are exceptional at legal work and, with striking consistency, under-instrumented at the business around it. Intake is where that shows first.',
    date: '9 March 2026',
    readTime: '8 min read',
    type: 'Challenges',
    icon: 'sales',
    slug: 'intake-pipeline-legal-sales'
  },
  {
    id: 21,
    platform: 'power-bi',
    service: 'data-ai-integration',
    industry: 'professional-services',
    title: 'One point of utilization: the arithmetic worth doing first',
    description: 'Before evaluating any professional services system, do this calculation. It usually settles the investment question faster than a vendor business case.',
    date: '2 March 2026',
    readTime: '6 min read',
    type: 'How-to guide',
    icon: 'chart',
    slug: 'utilization-arithmetic-professional-services-power-bi'
  },
  {
    id: 22,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'nonprofits-associations',
    title: 'Measuring outcomes rather than activities',
    description: 'Funders increasingly want to know what changed, not how many sessions ran. Most nonprofits collect the second because the first was never designed in.',
    date: '23 February 2026',
    readTime: '8 min read',
    type: 'How-to guide',
    icon: 'chart',
    slug: 'outcomes-not-activities-nonprofits-fabric'
  },
  {
    id: 23,
    platform: 'cybersecurity',
    service: 'managed-it-security',
    industry: 'manufacturing',
    title: 'Protecting production continuity, not just data',
    description: 'Manufacturing security conversations default to intellectual property. The event that actually stops the business is a line that will not start on Monday.',
    date: '16 February 2026',
    readTime: '9 min read',
    type: 'Best practices',
    icon: 'shield',
    slug: 'production-continuity-manufacturing-cybersecurity'
  },
  {
    id: 24,
    platform: 'business-central',
    service: 'business-applications',
    industry: 'small-mid-market',
    title: 'The signs you have outgrown your accounting system',
    description: 'Four symptoms that reliably indicate an ERP conversation, and two that look like it but are not.',
    date: '9 February 2026',
    readTime: '7 min read',
    type: 'Challenges',
    icon: 'erp',
    slug: 'outgrown-accounting-system-smb-business-central'
  }
];

function Blog() {
  const [platform, setPlatform] = useState('');
  const [service, setService] = useState('');
  const [industry, setIndustry] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  // Get unique filter options
  const platforms = [...new Set(BLOG_DATA.map(g => g.platform))];
  const services = [...new Set(BLOG_DATA.map(g => g.service))];
  const industries = [...new Set(BLOG_DATA.map(g => g.industry))];

  // Filter blog posts
  const filteredPosts = useMemo(() => {
    return BLOG_DATA.filter(post => {
      const matchPlatform = !platform || post.platform === platform;
      const matchService = !service || post.service === service;
      const matchIndustry = !industry || post.industry === industry;
      return matchPlatform && matchService && matchIndustry;
    });
  }, [platform, service, industry]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;
  const remaining = filteredPosts.length - visibleCount;
  const hasFilters = platform || service || industry;

  const handleFilterClick = (filterType, value) => {
    if (filterType === 'platform') {
      setPlatform(platform === value ? '' : value);
    } else if (filterType === 'service') {
      setService(service === value ? '' : value);
    } else if (filterType === 'industry') {
      setIndustry(industry === value ? '' : value);
    }
    setVisibleCount(10);
  };

  const clearFilters = () => {
    setPlatform('');
    setService('');
    setIndustry('');
    setVisibleCount(10);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

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
            <a href="/">Home</a><span>/</span><b>Insights</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Insights</span>
              <h1>Writing for people who have to decide</h1>
              <p className="lede">Not product announcements. These are the arguments we find ourselves making in client meetings — why a project stalls, what a platform genuinely changes, and where the expensive mistakes hide. Written for executives, and honest about what we would advise against.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#posts">Browse the archive <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/contact">Request a consultation <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>What you will find</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>36 articles across 8 Microsoft platforms</span></li>
                <li><svg><use href="#i-check" /></svg><span>Every one of our 11 industries covered</span></li>
                <li><svg><use href="#i-check" /></svg><span>Challenges, solutions, how-to guides and best practices</span></li>
                <li><svg><use href="#i-check" /></svg><span>Grounded in current Microsoft product direction</span></li>
                <li><svg><use href="#i-check" /></svg><span>Filter by platform, service or industry below</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>{BLOG_DATA.length}</b><span>Articles published</span></div>
            <div className="svc-stat"><b>8</b><span>Platforms covered</span></div>
            <div className="svc-stat"><b>11</b><span>Industries</span></div>
            <div className="svc-stat"><b>1 day</b><span>We reply to every enquiry</span></div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section bg-paper" id="posts">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The archive</span>
            <h2 className="h-sec wide">Sorted by most recent</h2>
            <p className="lede">Filter by the platform, the service area or the industry you care about. Filters combine, so you can narrow to a single platform within a single sector.</p>
          </div>

          {/* Filters */}
          <div className="filters">
            <div className="frow">
              <b>Platform</b>
              <div className="chips">
                <button
                  className={`chipf ${!platform ? 'is-on' : ''}`}
                  onClick={() => handleFilterClick('platform', '')}
                  aria-pressed={!platform}
                >
                  All
                </button>
                {platforms.map(p => (
                  <button
                    key={p}
                    className={`chipf ${platform === p ? 'is-on' : ''}`}
                    onClick={() => handleFilterClick('platform', p)}
                    aria-pressed={platform === p}
                  >
                    {PLATFORM_LABELS[p] || p}
                  </button>
                ))}
              </div>
            </div>
            <div className="frow">
              <b>Service</b>
              <div className="chips">
                <button
                  className={`chipf ${!service ? 'is-on' : ''}`}
                  onClick={() => handleFilterClick('service', '')}
                  aria-pressed={!service}
                >
                  All
                </button>
                {services.map(s => (
                  <button
                    key={s}
                    className={`chipf ${service === s ? 'is-on' : ''}`}
                    onClick={() => handleFilterClick('service', s)}
                    aria-pressed={service === s}
                  >
                    {SERVICE_LABELS[s] || s}
                  </button>
                ))}
              </div>
            </div>
            <div className="frow">
              <b>Industry</b>
              <div className="chips">
                <button
                  className={`chipf ${!industry ? 'is-on' : ''}`}
                  onClick={() => handleFilterClick('industry', '')}
                  aria-pressed={!industry}
                >
                  All
                </button>
                {industries.map(i => (
                  <button
                    key={i}
                    className={`chipf ${industry === i ? 'is-on' : ''}`}
                    onClick={() => handleFilterClick('industry', i)}
                    aria-pressed={industry === i}
                  >
                    {INDUSTRY_LABELS[i] || i}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-bar-foot">
              <p className="result-count" role="status">
                Showing <b>{visiblePosts.length}</b> of <b>{filteredPosts.length}</b> articles
              </p>
              {hasFilters && (
                <button className="clear-f" type="button" onClick={clearFilters}>
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid" data-noun="article">
            {visiblePosts.map(post => (
              <article
                key={post.id}
                className="bpost"
                data-platform={post.platform}
                data-service={post.service}
                data-industry={post.industry}
              >
                <a className="bimg" href={`${post.slug}.html`} aria-label={post.title}>
                  {getIcon(post.icon)}
                  <span className="plat">{PLATFORM_LABELS[post.platform] || post.platform}</span>
                </a>
                <div className="bbody">
                  <div className="bmeta">
                    <span className="tag ind">{INDUSTRY_LABELS[post.industry] || post.industry}</span>
                    <span className="tag typ">{post.type}</span>
                  </div>
                  <h3><a href={`${post.slug}.html`}>{post.title}</a></h3>
                  <p>{post.description}</p>
                  <div className="bfoot">
                    <span>{post.date} &middot; {post.readTime}</span>
                    <a className="link-more" href={`${post.slug}.html`}>
                      Read <svg><use href="#i-arrow-r" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="no-results">
              <b>No articles match that combination</b>
              <p>Try removing one filter — or tell us what you were looking for and we will write it.</p>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="load-wrap">
              {hasMore ? (
                <>
                  <button className="btn btn-outline" type="button" onClick={loadMore}>
                    Load more articles <svg><use href="#i-arrow-r" /></svg>
                  </button>
                  <p>{remaining} more to read</p>
                </>
              ) : (
                visiblePosts.length > 0 && (
                  <p style={{ textAlign: 'center', color: '#6b7280', marginTop: '2rem' }}>
                    Showing all {filteredPosts.length} articles
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Something here describe your situation?</h2>
              <p>Most of these articles started as a conversation with a client who thought their problem was unusual and found out it was not. If one of them landed, tell us which part — and we will tell you honestly what it would take to fix in your environment.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">Request a consultation <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="/contact">Just ask a question <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;