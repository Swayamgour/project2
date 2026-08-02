import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetGuidesQuery } from '../../redux/api';
import Loader from '../../components/Loader';

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

// Helper to get level class
const getLevelClass = (level) => {
  const classes = {
    'Foundation': 'Foundation',
    'Intermediate': 'Intermediate',
    'Advanced': 'Advanced'
  };
  return classes[level] || '';
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

function Guides() {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState('');
  const [service, setService] = useState('');
  const [industry, setIndustry] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  // Fetch guides data from the API
  const { data: response, isLoading, isError } = useGetGuidesQuery();

  // Extract guides data from response
  const guidesData = response?.data || [];
  const pagination = response?.pagination || { total: 0, totalPages: 0, hasMore: false };

  // Get unique filter options from dynamic data
  const platforms = useMemo(() => [...new Set(guidesData.map(g => g.platform))], [guidesData]);
  const services = useMemo(() => [...new Set(guidesData.map(g => g.service))], [guidesData]);
  const industries = useMemo(() => [...new Set(guidesData.map(g => g.industry))], [guidesData]);

  // Filter guides
  const filteredGuides = useMemo(() => {
    return guidesData.filter(guide => {
      const matchPlatform = !platform || guide.platform === platform;
      const matchService = !service || guide.service === service;
      const matchIndustry = !industry || guide.industry === industry;
      return matchPlatform && matchService && matchIndustry;
    });
  }, [guidesData, platform, service, industry]);

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

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Handle guide click to navigate to detail page
  const handleGuideClick = (slug, e) => {
    e.preventDefault();
    navigate(`/resources/guide/${slug}`);
  };

  // Loading state
  if (isLoading) {
    return (
     <Loader />
    );
  }

  // Error state
  if (isError) {
    return (
      <main id="main">
        <section className="svc-hero">
          <div className="wrap">
            <div className="error-state">Error loading guides. Please try again later.</div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><b>Guides</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Guides</span>
              <h1>How to actually configure it</h1>
              <p className="lede">Each guide opens with what the change means for the business and what it will involve technically, then works through prerequisites, configuration, verification and the pitfalls that catch most first attempts. Written to be used, not skimmed.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#guides">Browse the library <svg><use href="#i-arrow-r" /></svg></a>
                <Link className="btn btn-ghost" to="/contact">Get help implementing <svg><use href="#i-arrow-r" /></svg></Link>
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
            <div className="svc-stat"><b>{pagination.total || guidesData.length}</b><span>Guides published</span></div>
            <div className="svc-stat"><b>{platforms.length}</b><span>Platforms covered</span></div>
            <div className="svc-stat"><b>{industries.length}</b><span>Industries</span></div>
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
          <div className="filters" id="blogFilters">
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
          <div className="blog-grid" id="blogGrid" data-noun="guide">
            {visibleGuides.map(guide => (
              <article
                key={guide._id}
                className="bpost"
                data-platform={guide.platform}
                data-service={guide.service}
                data-industry={guide.industry}
              >
                <a
                  className="bimg"
                  href={`/resources/guide/${guide.slug}`}
                  onClick={(e) => handleGuideClick(guide.slug, e)}
                  aria-label={guide.title}
                >
                  {getIcon(guide.icon)}
                  <span className="plat">{PLATFORM_LABELS[guide.platform] || guide.platform}</span>
                </a>
                <div className="bbody">
                  <div className="bmeta">
                    <span className="tag ind">{INDUSTRY_LABELS[guide.industry] || guide.industry}</span>
                    <span className={`tag lvl ${getLevelClass(guide.level)}`}>{guide.level}</span>
                  </div>
                  <h3>
                    <a
                      href={`/resources/guide/${guide.slug}`}
                      onClick={(e) => handleGuideClick(guide.slug, e)}
                    >
                      {guide.title}
                    </a>
                  </h3>
                  <p>{guide.description}</p>
                  <div className="bfoot">
                    <span>{formatDate(guide.publishedAt)} &middot; {guide.readTime}</span>
                    <a
                      className="link-more"
                      href={`/resources/guide/${guide.slug}`}
                      onClick={(e) => handleGuideClick(guide.slug, e)}
                    >
                      Open <svg><use href="#i-arrow-r" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredGuides.length === 0 && (
            <div className="no-results" id="blogEmpty">
              <b>No guides match that combination</b>
              <p>Try removing one filter — or tell us what you were looking for and we will write it.</p>
            </div>
          )}

          {/* Load More */}
          {filteredGuides.length > 0 && (
            <div className="load-wrap" id="blogLoadWrap">
              {hasMore ? (
                <>
                  <button className="btn btn-outline" id="blogLoad" type="button" onClick={loadMore}>
                    Load more guides <svg><use href="#i-arrow-r" /></svg>
                  </button>
                  <p id="blogRemaining">{remaining} more available</p>
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
              <Link className="btn btn-primary" to="/contact">Request a consultation <svg><use href="#i-arrow-r" /></svg></Link>
              <Link className="btn btn-ghost" to="/blog">Read our insights <svg><use href="#i-arrow-r" /></svg></Link>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Guides;