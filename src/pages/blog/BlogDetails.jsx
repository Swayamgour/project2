import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetBlogBySlugQuery } from '../../redux/api'
import Loader from '../../components/Loader';

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

  const { slug } = useParams();
  const { data: blogPost, isLoading, isError } = useGetBlogBySlugQuery(slug);

  // Loading state
  if (isLoading) {
    return (
      <Loader />

    );
  }

  // Error state
  if (isError || !blogPost?.data) {
    return (
      <main id="main">
        <section className="svc-hero">
          <div className="wrap">
            <div className="error-state">Error loading blog post</div>
          </div>
        </section>
      </main>
    );
  }

  // Destructure data
  const { data, related } = blogPost;
  const {
    title,
    description,
    content,
    platform,
    service,
    industry,
    type,
    icon,
    readTime,
    publishedAt,
    author,
    hero,
    platformLabel,
    serviceLabel,
    industryLabel,
    breadcrumb,
    takeaways
  } = data;

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

  // Get industry label
  const getIndustryLabel = () => {
    if (industryLabel) return industryLabel;
    if (industry === 'healthcare') return 'Healthcare';
    if (industry === 'legal') return 'Legal';
    if (industry === 'professional-services') return 'Professional Services';
    if (industry === 'education') return 'Education';
    if (industry === 'retail-distribution') return 'Retail & Distribution';
    return industry || '';
  };

  // Get service label
  const getServiceLabel = () => {
    if (serviceLabel) return serviceLabel;
    if (service === 'modern-work-automation') return 'Modern Work & Automation';
    if (service === 'data-ai-integration') return 'Data, AI & Integration';
    if (service === 'business-applications') return 'Business Applications';
    return service || '';
  };

  // Get platform label
  const getPlatformLabel = () => {
    if (platformLabel) return platformLabel;
    if (platform === 'sharepoint') return 'SharePoint';
    if (platform === 'fabric') return 'Microsoft Fabric';
    if (platform === 'd365-sales') return 'Dynamics 365 Sales';
    return platform || '';
  };

  // Get type label
  const getTypeLabel = () => {
    if (type === 'Challenges') return 'Challenges';
    if (type === 'How-to guide') return 'How-to guide';
    if (type === 'Features') return 'Features';
    return type || '';
  };

  // Build breadcrumb
  const getBreadcrumb = () => {
    const current = breadcrumb?.current || getIndustryLabel();
    const parent = breadcrumb?.parent || 'Insights';
    const parentLink = breadcrumb?.parentLink || '/blog';
    return { parent, parentLink, current };
  };

  const breadcrumbData = getBreadcrumb();

  // Get hero data
  const heroData = hero || {
    eyebrow: `${getPlatformLabel()} · ${getTypeLabel()}`,
    title: title,
    lede: description,
    ctaPrimary: data.ctaPrimary || { text: 'Talk to us about this', link: '/contact' },
    ctaSecondary: data.ctaSecondary || { text: 'More insights', link: '/blog' },
    takeaways: takeaways || []
  };

  // Get takeaways
  const heroTakeaways = heroData.takeaways || takeaways || [];

  // Render content with icons
  const renderContent = () => {
    if (!content) return null;
    // The content already has icons in it from the API
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span>
            <a href={breadcrumbData.parentLink}>{breadcrumbData.parent}</a><span>/</span>
            <b>{breadcrumbData.current}</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">{heroData.eyebrow}</span>
              <h1>{heroData.title}</h1>
              <p className="lede">{heroData.lede}</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href={'/contact'}>
                  {heroData.ctaPrimary?.text || 'Talk to us about this'}
                  <svg><use href="#i-arrow-r" /></svg>
                </a>
                <a className="btn btn-ghost" href={heroData.ctaSecondary?.link || '/blog'}>
                  {heroData.ctaSecondary?.text || 'More insights'}
                  <svg><use href="#i-arrow-r" /></svg>
                </a>
              </div>
            </div>
            {heroTakeaways.length > 0 && (
              <aside className="glance">
                <h2>Key takeaways</h2>
                <ul>
                  {heroTakeaways.map((takeaway, index) => (
                    <li key={index}>
                      <svg><use href="#i-check" /></svg>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="byline">
            <span className="bl-av"><svg><use href="#i-users" /></svg></span>
            <span><b>{author || 'JJC Systems'}</b></span>
            <span className="sep">&middot;</span>
            <span>{formatDate(publishedAt)}</span>
            <span className="sep">&middot;</span>
            <span>{readTime || '8 min read'}</span>
            <span className="sep">&middot;</span>
            <span><a href={`/blog?industry=${industry}`}>{getIndustryLabel()}</a></span>
            <span className="sep">&middot;</span>
            <span><a href={`/blog?service=${service}`}>{getServiceLabel()}</a></span>
          </div>

          <div className="art">
            {renderContent()}
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
              <a className="btn btn-ghost" href={`/platforms/${platform}`}>See our {getPlatformLabel()} page <svg><use href="#i-arrow-r" /></svg></a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>

          {/* Related Articles */}
          {related && related.length > 0 && (
            <>
              <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
                <span className="eyebrow">Keep reading</span>
                <h2 className="h-sec wide">Related articles</h2>
              </div>
              <div className="rel-posts">
                {related.map((post) => {
                  const postPlatform = post.platformLabel || post.platform || '';
                  const postIndustry = post.industryLabel || post.industry || '';
                  const postIcon = post.icon || 'docs';

                  return (
                    <article
                      key={post._id}
                      className="bpost"
                      data-platform={post.platform}
                      data-service={post.service}
                      data-industry={post.industry}
                    >
                      <a className="bimg" href={`/blog/${post.slug}`} aria-label={post.title}>
                        <svg><use href={`#i-${postIcon}`} /></svg>
                        <span className="plat">{postPlatform}</span>
                      </a>
                      <div className="bbody">
                        <div className="bmeta">
                          <span className="tag ind">{postIndustry}</span>
                          <span className="tag typ">{post.type || 'Article'}</span>
                        </div>
                        <h3><a href={`/blog/${post.slug}`}>{post.title}</a></h3>
                        <p>{post.description}</p>
                        <div className="bfoot">
                          <span>{formatDate(post.publishedAt)} &middot; {post.readTime || '8 min read'}</span>
                          <a className="link-more" href={`/blog/${post.slug}`}>Read <svg><use href="#i-arrow-r" /></svg></a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogPost;