import React, { useState, useMemo } from 'react';
import { useGetPublishedBlogsQuery } from '../../redux/api';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import HeroSection from '../../components/HeroSection';

// Helper to format date from API
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

function Blog() {
  const { data: apiResponse, isLoading, isError, error } = useGetPublishedBlogsQuery();
  const [platform, setPlatform] = useState('');
  const [service, setService] = useState('');
  const [industry, setIndustry] = useState('');
  const [visibleCount, setVisibleCount] = useState(30);

  // Get the blog posts data from API response
  const blogPosts = useMemo(() => {
    if (!apiResponse?.data) return [];
    return apiResponse.data;
  }, [apiResponse]);

  // Extract unique filter options from the data with labels
  const filterOptions = useMemo(() => {
    const platforms = [...new Set(blogPosts.map(p => p.platform))];
    const services = [...new Set(blogPosts.map(p => p.service))];
    const industries = [...new Set(blogPosts.map(p => p.industry))];

    // Create filter objects with labels
    const platformOptions = platforms.map(p => ({
      value: p,
      label: blogPosts.find(post => post.platform === p)?.platformLabel || p
    }));

    const serviceOptions = services.map(s => ({
      value: s,
      label: blogPosts.find(post => post.service === s)?.serviceLabel || s
    }));

    const industryOptions = industries.map(i => ({
      value: i,
      label: blogPosts.find(post => post.industry === i)?.industryLabel || i
    }));

    return {
      platformOptions,
      serviceOptions,
      industryOptions
    };
  }, [blogPosts]);

  // Filter blog posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchPlatform = !platform || post.platform === platform;
      const matchService = !service || post.service === service;
      const matchIndustry = !industry || post.industry === industry;
      return matchPlatform && matchService && matchIndustry;
    });
  }, [blogPosts, platform, service, industry]);

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
            <div style={{ padding: '4rem 0', textAlign: 'center' }}>
              <p style={{ color: '#dc2626' }}>Failed to load articles. Please try again later.</p>
              {error && <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{error.message}</p>}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Get stats from pagination or data
  const totalPosts = apiResponse?.pagination?.total || blogPosts.length;
  const uniquePlatforms = filterOptions.platformOptions.length;
  const uniqueIndustries = filterOptions.industryOptions.length;

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Insights",
    },
  ];

  const hero = {
    eyebrow: "Insights",

    heading: "Writing for people who have to decide",

    lede:
      "Not product announcements. These are the arguments we find ourselves making in client meetings — why a project stalls, what a platform genuinely changes, and where the expensive mistakes hide. Written for executives, and honest about what we would advise against.",

    primaryCtaText: "Browse the archive",
    primaryCtaLink: "#posts",

    secondaryCtaText: "Request a consultation",
    secondaryCtaAnchor: "/contact",

    glance: {
      title: "What you will find",

      items: [
        `${totalPosts} articles across ${uniquePlatforms} Microsoft platforms`,
        `${uniqueIndustries} industries covered`,
        "Challenges, solutions, how-to guides and best practices",
        "Grounded in current Microsoft product direction",
        "Filter by platform, service or industry below",
      ],
    },


  };

  return (
    <main id="main">
      {/* Hero Section */}


      <HeroSection
        hero={hero}
        breadcrumbs={breadcrumbs}
        showStats={false}
      />

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
                {filterOptions.platformOptions.map(p => (
                  <button
                    key={p.value}
                    className={`chipf ${platform === p.value ? 'is-on' : ''}`}
                    onClick={() => handleFilterClick('platform', p.value)}
                    aria-pressed={platform === p.value}
                  >
                    {p.label}
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
                {filterOptions.serviceOptions.map(s => (
                  <button
                    key={s.value}
                    className={`chipf ${service === s.value ? 'is-on' : ''}`}
                    onClick={() => handleFilterClick('service', s.value)}
                    aria-pressed={service === s.value}
                  >
                    {s.label}
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
                {filterOptions.industryOptions.map(i => (
                  <button
                    key={i.value}
                    className={`chipf ${industry === i.value ? 'is-on' : ''}`}
                    onClick={() => handleFilterClick('industry', i.value)}
                    aria-pressed={industry === i.value}
                  >
                    {i.label}
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
                key={post._id}
                className="bpost"
                data-platform={post.platform}
                data-service={post.service}
                data-industry={post.industry}
              >
                {/* {console.log(visiblePosts?.)} */}
                <Link className="bimg" to={`/blog/${post.slug}`} aria-label={post.title}>
                  {!post?.featureImage ?
                    (<>
                      {getIcon(post.icon)}
                      <span className="plat">{post.platformLabel}</span>
                    </>) :

                    <img src={post?.featureImage} alt={post?.featureImage || "featureImage"} />
                  }
                </Link>
                <div className="bbody">
                  <div className="bmeta">
                    <span className="tag ind">{post.industryLabel}</span>
                    <span className="tag typ">{post.type}</span>
                  </div>
                  <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{post.description}</p>
                  <div className="bfoot">
                    <span>{formatDate(post.publishedAt)} &middot; {post.readTime}</span>
                    <Link className="link-more" to={`/blog/${post.slug}`}>
                      Read <svg><use href="#i-arrow-r" /></svg>
                    </Link>
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
              <Link className="btn btn-primary" to="/contact">Request a consultation <svg><use href="#i-arrow-r" /></svg></Link>
              <Link className="btn btn-ghost" to="/contact">Just ask a question <svg><use href="#i-arrow-r" /></svg></Link>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;