import React, { useState, useMemo } from 'react';

// Platform labels mapping
const PLATFORM_LABELS = {
  'business-central': 'Dynamics 365 Business Central',
  'd365-sales': 'Dynamics 365 Sales',
  'azure': 'Azure',
  'fabric': 'Microsoft Fabric',
  'defender': 'Microsoft Defender',
  'purview': 'Microsoft Purview',
  'power-bi': 'Power BI',
  'intune': 'Microsoft Intune',
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

const GUIDES_DATA = [
  {
    id: 1,
    platform: 'business-central',
    service: 'business-applications',
    industry: 'manufacturing',
    title: 'Configuring actual costing in Business Central',
    description: 'Move quoting off a stale standard and onto real production cost, without disrupting the month end you have to close next week.',
    date: '23 July 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'erp',
    slug: 'bc-actual-costing-manufacturing'
  },
  {
    id: 2,
    platform: 'purview',
    service: 'managed-it-security',
    industry: 'healthcare',
    title: 'PHI discovery and sensitivity labelling in Microsoft Purview',
    description: 'Find where patient-identifiable data actually lives, classify it automatically, and apply protection that travels with the document.',
    date: '16 July 2026',
    readTime: '11 min read',
    level: 'Intermediate',
    icon: 'docs',
    slug: 'purview-phi-classification-healthcare'
  },
  {
    id: 3,
    platform: 'power-bi',
    service: 'data-ai-integration',
    industry: 'financial-services',
    title: 'Implementing row-level security in Power BI',
    description: 'One published report that shows each person only their own rows — and an entitlement model your examiner can inspect.',
    date: '9 July 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'chart',
    slug: 'power-bi-row-level-security-financial-services'
  },
  {
    id: 4,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'healthcare',
    title: 'Remediating SharePoint oversharing before a Copilot rollout',
    description: 'The assessment that determines whether AI deployment is safe, and the remediation sequence that gets you there without breaking clinical workflows.',
    date: '2 July 2026',
    readTime: '11 min read',
    level: 'Intermediate',
    icon: 'grid',
    slug: 'sharepoint-permission-remediation-healthcare'
  },
  {
    id: 5,
    platform: 'intune',
    service: 'managed-it-security',
    industry: 'construction-field-services',
    title: 'Configuring Intune for devices that live in vehicles',
    description: 'Compliance policy, app protection and provisioning designed for crews who work where there is no signal and no patience.',
    date: '25 June 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'device',
    slug: 'intune-field-devices-construction'
  },
  {
    id: 6,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'healthcare',
    title: 'Building a service-line profitability model in Microsoft Fabric',
    description: 'Join clinical volume, cost and payer data on one governed foundation — with an allocation model your clinical directors will actually accept.',
    date: '18 June 2026',
    readTime: '13 min read',
    level: 'Advanced',
    icon: 'chart',
    slug: 'fabric-service-line-profitability-healthcare'
  },
  {
    id: 7,
    platform: 'defender',
    service: 'managed-it-security',
    industry: 'professional-services',
    title: 'Tuning Defender so the console is worth reading',
    description: 'An untuned security console is functionally the same as no detection. This is the tuning sequence that turns alert volume into an incident queue somebody actually works.',
    date: '11 June 2026',
    readTime: '11 min read',
    level: 'Intermediate',
    icon: 'shield',
    slug: 'defender-alert-tuning-professional-services'
  },
  {
    id: 8,
    platform: 'azure',
    service: 'strategy-transformation',
    industry: 'public-sector',
    title: 'Designing an Azure landing zone for a public agency',
    description: 'The subscription, policy and tagging structure that keeps a public sector estate governable — and survives a council review.',
    date: '4 June 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'cloud',
    slug: 'azure-landing-zone-public-sector'
  },
  {
    id: 9,
    platform: 'd365-sales',
    service: 'business-applications',
    industry: 'legal',
    title: 'Configuring client intake and conflict checking in Dynamics 365 Sales',
    description: 'Turn an inbox into a tracked pipeline, with a conflict record your risk partner and your insurer can both inspect.',
    date: '28 May 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'sales',
    slug: 'd365-sales-intake-conflicts-legal'
  },
  {
    id: 10,
    platform: 'business-central',
    service: 'business-applications',
    industry: 'retail-distribution',
    title: 'Turning on directed put-away and pick in Business Central',
    description: 'The advanced warehouse configuration most distributors are licensed for and never enable — and how to switch it on without stopping shipments.',
    date: '21 May 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'erp',
    slug: 'bc-warehouse-directed-picking-retail'
  },
  {
    id: 11,
    platform: 'purview',
    service: 'managed-it-security',
    industry: 'public-sector',
    title: 'Configuring retention and disposition review in Purview',
    description: 'Apply your records schedule automatically, make deletion a reviewed decision rather than a silent event, and shrink what a records request pulls in.',
    date: '14 May 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'docs',
    slug: 'purview-retention-disposition-public-sector'
  },
  {
    id: 12,
    platform: 'azure',
    service: 'strategy-transformation',
    industry: 'small-mid-market',
    title: 'Setting up Azure cost management that actually reduces spend',
    description: 'Tagging, budgets, alerts and the monthly review that turns technical optimisation into durable savings.',
    date: '7 May 2026',
    readTime: '9 min read',
    level: 'Foundation',
    icon: 'cloud',
    slug: 'azure-cost-management-smb'
  },
  {
    id: 13,
    platform: 'defender',
    service: 'managed-it-security',
    industry: 'manufacturing',
    title: 'Extending Defender coverage to plant-adjacent systems',
    description: 'Segmentation, onboarding and the exclusions that keep detection working around equipment you cannot patch.',
    date: '30 April 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'shield',
    slug: 'defender-plant-segmentation-manufacturing'
  },
  {
    id: 14,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'legal',
    title: 'Configuring information barriers for ethical walls',
    description: 'The four layers that have to agree, and the breach test that tells you whether the wall you built is the wall you think you built.',
    date: '23 April 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'grid',
    slug: 'sharepoint-information-barriers-legal'
  },
  {
    id: 15,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'retail-distribution',
    title: 'Building a cost-to-serve model in Microsoft Fabric',
    description: 'Join order, fulfilment, freight and returns data into a customer profitability model your commercial team will accept.',
    date: '16 April 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'chart',
    slug: 'fabric-cost-to-serve-retail'
  },
  {
    id: 16,
    platform: 'intune',
    service: 'managed-it-security',
    industry: 'education',
    title: 'Configuring shared and exam devices in Intune',
    description: 'Three device populations, three configurations — and the exam-day discipline that prevents a policy applying for the first time at the worst moment.',
    date: '9 April 2026',
    readTime: '11 min read',
    level: 'Intermediate',
    icon: 'device',
    slug: 'intune-shared-devices-education'
  },
  {
    id: 17,
    platform: 'power-bi',
    service: 'data-ai-integration',
    industry: 'professional-services',
    title: 'Building a utilization semantic model in Power BI',
    description: 'Agree the definition once, model it properly, and produce a number your practice leaders will act on rather than discount.',
    date: '2 April 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'chart',
    slug: 'power-bi-utilization-model-professional-services'
  },
  {
    id: 18,
    platform: 'business-central',
    service: 'business-applications',
    industry: 'small-mid-market',
    title: 'Designing dimensions in Business Central for management reporting',
    description: 'The decision that constrains every report you will run for the next decade, made properly in a week rather than badly in an afternoon.',
    date: '26 March 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'erp',
    slug: 'bc-dimensions-management-reporting-smb'
  },
  {
    id: 19,
    platform: 'purview',
    service: 'managed-it-security',
    industry: 'small-mid-market',
    title: 'Running DSPM for AI before a Copilot rollout',
    description: "Purview's data security posture management for AI — what it shows you, how to configure it, and what to fix before the first licence is assigned.",
    date: '19 March 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'docs',
    slug: 'purview-dspm-ai-smb'
  },
  {
    id: 20,
    platform: 'power-bi',
    service: 'talent',
    industry: 'public-sector',
    title: 'Building reporting for members, officers and the public',
    description: 'Three audiences, three views, one governed model — and a capability one analyst can maintain.',
    date: '12 March 2026',
    readTime: '9 min read',
    level: 'Foundation',
    icon: 'chart',
    slug: 'power-bi-three-audience-reporting-public-sector'
  },
  {
    id: 21,
    platform: 'defender',
    service: 'managed-it-security',
    industry: 'legal',
    title: 'Configuring an identity protection baseline',
    description: 'Conditional access, risk policies and Defender for Identity — the controls that close the attack path most intrusions actually take.',
    date: '5 March 2026',
    readTime: '11 min read',
    level: 'Intermediate',
    icon: 'shield',
    slug: 'defender-identity-baseline-legal'
  },
  {
    id: 22,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'nonprofits-associations',
    title: 'Building an outcome measurement model in Fabric',
    description: 'Move from counting activities to evidencing change — with an attribution position sophisticated funders will respect.',
    date: '26 February 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'chart',
    slug: 'fabric-outcome-model-nonprofits'
  },
  {
    id: 23,
    platform: 'd365-sales',
    service: 'business-applications',
    industry: 'education',
    title: 'Configuring the enrolment funnel in Dynamics 365 Sales',
    description: 'Stages, conversion reporting and the melt tracking that most institutions leave unmanaged between deposit and registration.',
    date: '19 February 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'sales',
    slug: 'd365-sales-enrolment-funnel-education'
  },
  {
    id: 24,
    platform: 'business-central',
    service: 'business-applications',
    industry: 'construction-field-services',
    title: 'Configuring job costing and WIP in Business Central',
    description: 'Weekly job cost against budget, change orders captured before the work, and a WIP calculation your accountant will accept.',
    date: '12 February 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'erp',
    slug: 'bc-job-costing-wip-construction'
  },
  {
    id: 25,
    platform: 'azure',
    service: 'strategy-transformation',
    industry: 'financial-services',
    title: 'Designing an Azure environment for a regulated financial workload',
    description: 'Network isolation, key management, logging and the evidence structure an examiner will ask for.',
    date: '5 February 2026',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'cloud',
    slug: 'azure-regulated-workload-financial-services'
  },
  {
    id: 26,
    platform: 'purview',
    service: 'managed-it-security',
    industry: 'financial-services',
    title: 'Configuring retention, supervision and eDiscovery readiness',
    description: 'Communication supervision, regulatory retention and an eDiscovery process that produces evidence in days rather than weeks.',
    date: '29 January 2026',
    readTime: '11 min read',
    level: 'Advanced',
    icon: 'docs',
    slug: 'purview-supervision-ediscovery-financial-services'
  },
  {
    id: 27,
    platform: 'd365-sales',
    service: 'business-applications',
    industry: 'financial-services',
    title: 'Modelling households and entities in Dynamics 365 Sales',
    description: 'Relationship structures that support pricing, concentration and cross-sell decisions from a complete picture rather than a fragment.',
    date: '22 January 2026',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'sales',
    slug: 'd365-sales-household-modelling-financial-services'
  },
  {
    id: 28,
    platform: 'intune',
    service: 'talent',
    industry: 'nonprofits-associations',
    title: 'Deploying Autopilot when you have half an IT person',
    description: 'Zero-touch provisioning configured so a small team can run it, with the supplier doing the registration work.',
    date: '15 January 2026',
    readTime: '9 min read',
    level: 'Foundation',
    icon: 'device',
    slug: 'intune-autopilot-small-team-nonprofits'
  },
  {
    id: 29,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'nonprofits-associations',
    title: 'Structuring SharePoint for grant evidence capture',
    description: 'Metadata, libraries and approval flows that turn quarterly funder reporting from an assembly exercise into a generated one.',
    date: '8 January 2026',
    readTime: '9 min read',
    level: 'Foundation',
    icon: 'grid',
    slug: 'sharepoint-grant-evidence-nonprofits'
  },
  {
    id: 30,
    platform: 'fabric',
    service: 'data-ai-integration',
    industry: 'manufacturing',
    title: 'Ingesting machine data into OneLake',
    description: 'Getting plant telemetry into a governed data platform alongside ERP transactions, with reconnection behaviour that does not double-count.',
    date: '18 December 2025',
    readTime: '12 min read',
    level: 'Advanced',
    icon: 'chart',
    slug: 'fabric-machine-data-ingestion-manufacturing'
  },
  {
    id: 31,
    platform: 'sharepoint',
    service: 'modern-work-automation',
    industry: 'construction-field-services',
    title: 'Setting up drawing revision control in SharePoint',
    description: 'Metadata-driven revision management, issue records that settle variation disputes, and mobile access that works on site.',
    date: '11 December 2025',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'grid',
    slug: 'sharepoint-drawing-revision-construction'
  },
  {
    id: 32,
    platform: 'defender',
    service: 'managed-it-security',
    industry: 'education',
    title: 'Achieving full Defender endpoint coverage in education',
    description: 'Onboarding staff, lab and loan devices across a fragmented estate — and finding the ones nobody has looked at for two years.',
    date: '4 December 2025',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'shield',
    slug: 'defender-endpoint-coverage-education'
  },
  {
    id: 33,
    platform: 'intune',
    service: 'managed-it-security',
    industry: 'retail-distribution',
    title: 'Managing store and warehouse devices in Intune',
    description: 'Shared point-of-sale terminals, rugged scanners and kiosk configurations that survive a shift pattern.',
    date: '27 November 2025',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'device',
    slug: 'intune-store-warehouse-devices-retail'
  },
  {
    id: 34,
    platform: 'power-bi',
    service: 'data-ai-integration',
    industry: 'manufacturing',
    title: 'Building a plant performance dashboard in Power BI',
    description: 'OEE, downtime reasons and scrap analysis on a model that reconciles to the ledger rather than arguing with it.',
    date: '20 November 2025',
    readTime: '11 min read',
    level: 'Intermediate',
    icon: 'chart',
    slug: 'power-bi-plant-performance-manufacturing'
  },
  {
    id: 35,
    platform: 'azure',
    service: 'strategy-transformation',
    industry: 'professional-services',
    title: 'Provisioning isolated client environments in Azure',
    description: 'Subscription structure, access control and teardown for a firm that runs client work in separate environments.',
    date: '13 November 2025',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'cloud',
    slug: 'azure-project-environments-professional-services'
  },
  {
    id: 36,
    platform: 'd365-sales',
    service: 'business-applications',
    industry: 'professional-services',
    title: 'Connecting the sales pipeline to resource planning',
    description: 'Make opportunities carry the skills and dates they will require, so resourcing plans against probable work rather than confirmed work only.',
    date: '6 November 2025',
    readTime: '10 min read',
    level: 'Intermediate',
    icon: 'sales',
    slug: 'd365-sales-opportunity-resourcing-professional-services'
  }
];

function Guides() {
  const [platform, setPlatform] = useState('');
  const [service, setService] = useState('');
  const [industry, setIndustry] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  // Get unique filter options
  const platforms = [...new Set(GUIDES_DATA.map(g => g.platform))];
  const services = [...new Set(GUIDES_DATA.map(g => g.service))];
  const industries = [...new Set(GUIDES_DATA.map(g => g.industry))];

  // Filter guides
  const filteredGuides = useMemo(() => {
    return GUIDES_DATA.filter(guide => {
      const matchPlatform = !platform || guide.platform === platform;
      const matchService = !service || guide.service === service;
      const matchIndustry = !industry || guide.industry === industry;
      return matchPlatform && matchService && matchIndustry;
    });
  }, [platform, service, industry]);

  const visibleGuides = filteredGuides.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGuides.length;
  const remaining = filteredGuides.length - visibleCount;
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

  // Helper to get level class
  const getLevelClass = (level) => {
    const classes = {
      'Foundation': 'Foundation',
      'Intermediate': 'Intermediate',
      'Advanced': 'Advanced'
    };
    return classes[level] || '';
  };

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><b>Guides</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Guides</span>
              <h1>How to actually configure it</h1>
              <p className="lede">Each guide opens with what the change means for the business and what it will involve technically, then works through prerequisites, configuration, verification and the pitfalls that catch most first attempts. Written to be used, not skimmed.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#guides">Browse the library <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/contact">Get help implementing <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>How these are written</h2>
              <ul>
                <li><svg><use href="#i-check" /></svg><span>Every guide opens with a business summary and a technical summary</span></li>
                <li><svg><use href="#i-check" /></svg><span>Prerequisites stated upfront — licensing, roles, data and decisions</span></li>
                <li><svg><use href="#i-check" /></svg><span>Configuration steps with the actual settings, not screenshots</span></li>
                <li><svg><use href="#i-check" /></svg><span>Verification steps so you can confirm it worked</span></li>
                <li><svg><use href="#i-check" /></svg><span>Pitfalls, because most of them are avoidable if you know about them</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>{GUIDES_DATA.length}</b><span>Guides published</span></div>
            <div className="svc-stat"><b>9</b><span>Platforms covered</span></div>
            <div className="svc-stat"><b>11</b><span>Industries</span></div>
            <div className="svc-stat"><b>1 day</b><span>We reply to every enquiry</span></div>
          </div>
        </div>
      </section>

      {/* Guides Library Section */}
      <section className="section bg-paper" id="guides">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The library</span>
            <h2 className="h-sec wide">Sorted by most recent</h2>
            <p className="lede">Filter by platform, service area or industry. Filters combine, so you can narrow to a single platform within a single sector.</p>
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
                Showing <b>{visibleGuides.length}</b> of <b>{filteredGuides.length}</b> guides
              </p>
              {hasFilters && (
                <button className="clear-f" type="button" onClick={clearFilters}>
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Guides Grid */}
          <div className="blog-grid" data-noun="guide">
            {visibleGuides.map(guide => (
              <article
                key={guide.id}
                className="bpost"
                data-platform={guide.platform}
                data-service={guide.service}
                data-industry={guide.industry}
              >
                <a className="bimg" href={`${guide.slug}.html`} aria-label={guide.title}>
                  {getIcon(guide.icon)}
                  <span className="plat">{PLATFORM_LABELS[guide.platform] || guide.platform}</span>
                </a>
                <div className="bbody">
                  <div className="bmeta">
                    <span className="tag ind">{INDUSTRY_LABELS[guide.industry] || guide.industry}</span>
                    <span className={`tag lvl ${getLevelClass(guide.level)}`}>{guide.level}</span>
                  </div>
                  <h3><a href={`${guide.slug}.html`}>{guide.title}</a></h3>
                  <p>{guide.description}</p>
                  <div className="bfoot">
                    <span>{guide.date} &middot; {guide.readTime}</span>
                    <a className="link-more" href={`${guide.slug}.html`}>
                      Open <svg><use href="#i-arrow-r" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredGuides.length === 0 && (
            <div className="no-results">
              <b>No guides match that combination</b>
              <p>Try removing one filter — or tell us what you were looking for and we will write it.</p>
            </div>
          )}

          {/* Load More */}
          {filteredGuides.length > 0 && (
            <div className="load-wrap">
              {hasMore ? (
                <>
                  <button className="btn btn-outline" type="button" onClick={loadMore}>
                    Load more guides <svg><use href="#i-arrow-r" /></svg>
                  </button>
                  <p>{remaining} more available</p>
                </>
              ) : (
                visibleGuides.length > 0 && (
                  <p style={{ textAlign: 'center', color: '#6b7280', marginTop: '2rem' }}>
                    Showing all {filteredGuides.length} guides
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
              <h2>Would rather not do it yourself?</h2>
              <p>These guides are written so you can. If you would rather we did — or you want a second pair of eyes on a configuration before it goes live — tell us which guide you were following and where you got to.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">Request a consultation <svg><use href="#i-arrow-r" /></svg></a>
              <a className="btn btn-ghost" href="/blog">Read our insights <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Guides;