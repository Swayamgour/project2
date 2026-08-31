import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetGuideBySlugQuery } from '../../redux/api';
import useDocumentMeta from '../../hooks/useDocumentMeta.js';
import Loader from '../../components/Loader';
import HeroSection from '../../components/HeroSection';

function GuideDetail() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetGuideBySlugQuery(slug);

  const guideData = data?.data;
  useDocumentMeta(
    guideData?.seo?.metaTitle || (guideData?.title ? `${guideData.title} | JJC Systems Guides` : "JJC Systems Guides"),
    guideData?.seo?.metaDescription || guideData?.description || "",
    {
      keywords: guideData?.seo?.keywords,
      canonicalUrl: guideData?.seo?.canonicalUrl,
      ogImage: guideData?.seo?.ogImage,
    }
  );

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
      sales: <svg><use href="#i-sales" /></svg>,
      'i-check': <svg><use href="#i-check" /></svg>,
      'i-arrow-r': <svg><use href="#i-arrow-r" /></svg>
    };
    return icons[iconName] || icons.chart;
  };

  if (isLoading) return <Loader />;
  if (error) return <div className="error">Error loading guide</div>;

  const guide = data?.data;
  if (!guide) return <div className="error">Guide not found</div>;

  const hero = guide.hero || {};
  const stats = guide.stats || {};

  const breadcrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Guides",
      link: "/guides",
    },
    {
      label: guide.platformLabel || guide.platform,
    },
  ];

  const heroData = {
    eyebrow:
      hero?.eyebrow ||
      `${guide.platformLabel || guide.platform} · ${guide.level || "Advanced"
      }`,

    heading: guide.title,

    lede: guide.description,

    primaryCtaText:
      guide.ctaPrimary?.text || "Start implementation",

    primaryCtaLink:
      guide.ctaPrimary?.link || "#guide",

    secondaryCtaText:
      guide.ctaSecondary?.text || "Get expert help",

    secondaryCtaAnchor:
      guide.ctaSecondary?.link || "/contact",

    glance: {
      title: "Key practices",

      items:
        hero?.keyPractices || [
          "Understand the prerequisites before you begin",
          "Verify licensing, permissions, and dependencies",
          "Test changes in a separate environment first",
          "Document the configuration for future maintenance",
        ],
    },
  };



  return (
    <main id="main">
      {/* Hero Section */}
      <HeroSection
        title={guide.title}
        hero={heroData}
        breadcrumbs={breadcrumbs}
      />
      {/* Subnavigation */}
      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          {guide.problemHeading && <a href="#why">Why</a>}
          {guide.prerequisites && guide.prerequisites.length > 0 && <a href="#before">Before you start</a>}
          {guide.concepts && guide.concepts.length > 0 && <a href="#concepts">How it works</a>}
          {guide.configSteps && guide.configSteps.length > 0 && <a href="#config">Configuration</a>}
          {guide.verifySteps && guide.verifySteps.length > 0 && <a href="#verify">Verify</a>}
          {guide.bestPractices && guide.bestPractices.length > 0 && <a href="#practice">Best practice</a>}
          {guide.pitfalls && guide.pitfalls.length > 0 && <a href="#pitfalls">Pitfalls</a>}
          {guide.checklistItems && guide.checklistItems.length > 0 && <a href="#checklist">Checklist</a>}
          <a className="subnav-cta link-more" href={guide.ctaPrimary?.link || '/contact'}>
            Get help <svg><use href="#i-arrow-r" /></svg>
          </a>
        </div>
      </nav>

      {/* Why Section */}
      {(guide.businessSummary || guide.technicalSummary || guide.problemParagraphs) && (
        <section className="section bg-paper" id="why">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Who this is for</span>
              <h2 className="h-sec wide">Two summaries, because two audiences read this</h2>
            </div>
            <div className="who-grid reveal">
              {guide.businessSummary && (
                <div className="who">
                  <h3><svg><use href="#i-chart" /></svg> {guide.businessSummaryHeading || 'If you own the outcome'}</h3>
                  <p>{guide.businessSummary}</p>
                </div>
              )}
              {guide.technicalSummary && (
                <div className="who tech">
                  <h3><svg><use href="#i-grid" /></svg> {guide.technicalSummaryHeading || 'If you have to build it'}</h3>
                  <p>{guide.technicalSummary}</p>
                </div>
              )}
            </div>

            {guide.problemParagraphs && guide.problemParagraphs.length > 0 && (
              <>
                <div className="sec-head reveal" style={{ marginTop: 'clamp(48px,6vw,76px)' }}>
                  <span className="eyebrow">Why it matters</span>
                  <h2 className="h-sec wide">{guide.problemHeading || 'The problem this solves'}</h2>
                </div>
                <div className="art" style={{ maxWidth: '820px' }}>
                  {guide.problemParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Before You Start Section */}
      {guide.prerequisites && guide.prerequisites.length > 0 && (
        <section className="section bg-mist" id="before">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Before you start</span>
              <h2 className="h-sec wide">Prerequisites</h2>
              <p className="lede">Check these before beginning. Most stalled implementations stall on one of them.</p>
            </div>
            <div className="prereq">
              {guide.prerequisites.map((prereq, index) => (
                <div className="prereq-row" key={index}>
                  <b>{prereq.label}</b>
                  <p>{prereq.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Concepts Section */}
      {guide.concepts && guide.concepts.length > 0 && (
        <section className="section bg-paper" id="concepts">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">How it works</span>
              <h2 className="h-sec wide">{guide.conceptsHeading || 'The concepts worth understanding first'}</h2>
              {guide.conceptsLede && <p className="lede">{guide.conceptsLede}</p>}
            </div>
            <div className="feat-grid">
              {guide.concepts.map((concept) => (
                <article className="feat reveal" key={concept._id || concept.order}>
                  <span className="feat-icon">{getIcon(concept.icon)}</span>
                  <div>
                    <h3>{concept.title}</h3>
                    <p>{concept.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Configuration Section */}
      {guide.configSteps && guide.configSteps.length > 0 && (
        <section className="section bg-mist" id="config">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Configuration</span>
              <h2 className="h-sec wide">{guide.configHeading || 'Step by step'}</h2>
              {guide.configLede && <p className="lede">{guide.configLede}</p>}
            </div>
            <div className="steps-list">
              {guide.configSteps.map((step) => (
                <article className="cfg reveal" key={step._id || step.number}>
                  <div className="cfg-n">{String(step.number).padStart(2, '0')}</div>
                  <div className="cfg-b">
                    <h3>{step.title}</h3>
                    {step.paragraphs && step.paragraphs.map((paragraph, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    {step.settings && step.settings.length > 0 && (
                      <div className="settings">
                        <dl>
                          {step.settings.map((setting, idx) => (
                            <React.Fragment key={idx}>
                              <dt>{setting.term}</dt>
                              <dd>{setting.definition}</dd>
                            </React.Fragment>
                          ))}
                        </dl>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {guide.verifySteps && guide.verifySteps.length > 0 && (
              <div className="verify reveal" id="verify">
                <h3>Verify it worked</h3>
                <ol>
                  {guide.verifySteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Best Practice Section */}
      {guide.bestPractices && guide.bestPractices.length > 0 && (
        <section className="section bg-navy" id="practice">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Best practice</span>
              <h2 className="h-sec wide">{guide.bestPracticeHeading || 'What we do on every engagement of this type'}</h2>
            </div>
            <ul className="biz-outcomes reveal">
              {guide.bestPractices.map((practice, index) => (
                <li key={index}>
                  <svg><use href="#i-check" /></svg>
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Pitfalls Section */}
      {(guide.pitfalls || guide.checklistItems) && (
        <section className="section bg-paper" id="pitfalls">
          <div className="wrap">
            {guide.pitfalls && guide.pitfalls.length > 0 && (
              <>
                <div className="sec-head reveal">
                  <span className="eyebrow">Pitfalls</span>
                  <h2 className="h-sec wide">{guide.pitfallsHeading || 'What catches most first attempts'}</h2>
                  {guide.pitfallsLede && <p className="lede">{guide.pitfallsLede}</p>}
                </div>
                <div className="pit-grid">
                  {guide.pitfalls.map((pitfall, index) => (
                    <article className="pit reveal" key={pitfall._id || index}>
                      <h3><span>!</span>{pitfall.title}</h3>
                      <p>{pitfall.description}</p>
                    </article>
                  ))}
                </div>
              </>
            )}

            {guide.checklistItems && guide.checklistItems.length > 0 && (
              <div className="check-list reveal" id="checklist">
                <h3>{guide.checklistTitle || 'Completion checklist'}</h3>
                <ul>
                  {guide.checklistItems.map((item, index) => (
                    <li key={index}>
                      <i></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {(guide.ctaHeading || guide.ctaText || guide.ctaBandPrimary || guide.ctaBandSecondary) && (
        <section className="section bg-mist">
          <div className="wrap">
            {(guide.ctaHeading || guide.ctaText || guide.ctaBandPrimary) && (
              <div className="cta-band reveal">
                <div>
                  {guide.ctaHeading && <h2>{guide.ctaHeading}</h2>}
                  {guide.ctaText && <p>{guide.ctaText}</p>}
                </div>
                <div className="cta-actions">
                  {guide.ctaBandPrimary && (
                    <a className="btn btn-primary" href={'/contact'}>
                      {guide.ctaBandPrimary.text} <svg><use href="#i-arrow-r" /></svg>
                    </a>
                  )}
                  {guide.ctaBandSecondary && (
                    <a className="btn btn-ghost" href={guide.ctaBandSecondary.link}>
                      {guide.ctaBandSecondary.text} <svg><use href="#i-arrow-r" /></svg>
                    </a>
                  )}
                  <small>We reply to every message within one business day.</small>
                </div>
              </div>
            )}

            {/* Related Guides - Static for now, but could be made dynamic */}
            {guide.relatedGuides && guide.relatedGuides.length > 0 && (
              <>
                <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
                  <span className="eyebrow">Keep going</span>
                  <h2 className="h-sec wide">Related guides</h2>
                </div>
                <div className="rel-posts">
                  {guide.relatedGuides.map((related, index) => (
                    <article key={index} className="bpost">
                      <a className="bimg" href={related.slug}>
                        <svg><use href={`#i-${related.icon || 'erp'}`} /></svg>
                        <span className="plat">{related.platformLabel || related.platform}</span>
                      </a>
                      <div className="bbody">
                        <div className="bmeta">
                          <span className="tag ind">{related.industryLabel || related.industry}</span>
                          <span className="tag lvl" data-l={related.level}>{related.level}</span>
                        </div>
                        <h3><a href={related.slug}>{related.title}</a></h3>
                        <p>{related.description}</p>
                        <div className="bfoot">
                          <span>{new Date(related.publishedAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })} &middot; {related.readTime}</span>
                          <a className="link-more" href={related.slug}>
                            Open <svg><use href="#i-arrow-r" /></svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default GuideDetail;