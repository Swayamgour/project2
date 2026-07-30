import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useParams } from "react-router-dom";
import { useGetIndustryBySlugQuery } from "../../redux/api.jsx";
import HeroSection from "../../components/HeroSection.jsx";

export default function IndustriesHealthcare() {
  const mainRef = useRef(null);
  const { slug } = useParams();
  const { data, isLoading, error } = useGetIndustryBySlugQuery(slug);
  const pageData = data?.data;

  useDocumentMeta(
    pageData?.seo?.metaTitle || "Healthcare Technology Consulting | JJC Systems",
    pageData?.seo?.metaDescription || "Microsoft technology consulting for healthcare providers, payers and life sciences."
  );
  usePageEffects(mainRef);

  if (isLoading) {
    return (
      <main id="main" ref={mainRef}>
        <div className="wrap" style={{ padding: "80px 0", textAlign: "center" }}>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (error || !pageData) {
    return (
      <main id="main" ref={mainRef}>
        <div className="wrap" style={{ padding: "80px 0", textAlign: "center" }}>
          <h2>Page not found</h2>
          <p>Unable to load this industry page.</p>
        </div>
      </main>
    );
  }

  const {
    hero,
    sectorOverview,
    applicationLayer,
    challenges,
    outcomes,
    pillars,
    consultingServices,
    appGrid,
    approach,
    whyUs,
    successStories,
    insights,
    cta,
    relatedItems,
    title
  } = pageData;

  // Helper to render section heading
  const renderSectionHeading = (eyebrow, title, subtitle, className = "") => (
    <div className={`sec-head reveal ${className}`} style={{ marginTop: "clamp(52px, 7vw, 86px)" }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="h-sec wide">{title}</h2>}
      {subtitle && <p className="lede">{subtitle}</p>}
    </div>
  );

  // Helper to render task board items
  const renderTaskItems = (items, tagClass = "task-tag t-core") => (
    <div className="task-board">
      {items.map((item, index) => (
        <article className="task-row reveal" key={index}>
          <div className="task-head">
            <span className={tagClass}>{item.tag}</span>
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );

  // Helper to render stat cards
  const renderStats = (stats) => (
    <div className="svc-stats">
      {stats.map((stat, index) => (
        <div className="svc-stat" key={index}>
          <b>{stat.value}</b>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );

  // Helper to render glance items
  const renderGlanceItems = (items) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <svg><use href="#i-check"></use></svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  // Helper to render stats bar
  const renderStatsBar = (stats) => (
    <div className="svc-stats">
      {stats.map((stat, index) => (
        <div className="svc-stat" key={index}>
          <b>{stat.value}</b>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );

  // Helper to render metrics grid
  const renderMetrics = (metrics) => (
    <div className="metric-grid reveal">
      {metrics.map((metric, index) => (
        <div className="metric" key={index}>
          <span className="m-label">{metric.label}</span>
          <b>{metric.value}</b>
          <p>{metric.description}</p>
        </div>
      ))}
    </div>
  );

  // Helper to render pillars
  const renderPillars = (items) => (
    <div className="pillar-grid">
      {items.map((item, index) => (
        <article className="pillar reveal" key={index}>
          <div className="icon-tile">
            <svg><use href={`#i-${item.icon}`}></use></svg>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.points && item.points.length > 0 && (
            <ul>
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <svg><use href="#i-check"></use></svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );

  // Helper to render approach steps
  const renderSteps = (steps) => (
    <div className="process reveal">
      {steps.map((step, index) => (
        <div className="step" key={index}>
          <span className="step-n">{index + 1}</span>
          <h4>{step.title}</h4>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );

  // Helper to render why us items
  const renderWhyUsItems = (items) => (
    <div className="reason-grid">
      {items.map((item, index) => (
        <article className="reason reveal" key={index}>
          <span className="reason-icon">
            <svg><use href={`#i-${item.icon}`}></use></svg>
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );

  // Helper to render success stories
  const renderSuccessStories = (stories) => (
    <div className="success-grid">
      {stories.map((story, index) => (
        <article className="story-card reveal" key={index}>
          <div className="story-top">
            <div className="story-kicker">
              <span className="story-industry">{story.industry}</span>
              {story.isSample && <span className="demo-chip">Sample story</span>}
            </div>
            <h3>{story.title}</h3>
            <p className="story-summary">{story.summary}</p>
          </div>
          <div className="story-metrics">
            {story.metrics.map((metric, idx) => (
              <div className="story-metric" key={idx}>
                <b>{metric.value}</b>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="story-body">
            <h4>What changed</h4>
            <ul className="story-outcomes">
              {story.outcomes.map((outcome, idx) => (
                <li key={idx}>
                  <svg><use href="#i-check"></use></svg>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <a className="link-more" href={story.ctaLink || "/#contact"}>
              Talk about a similar outcome{" "}
              <svg><use href="#i-arrow-r"></use></svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  );

  // Helper to render insights
  const renderInsights = (posts) => (
    <div className="insights-grid">
      {posts.map((post, index) => (
        <a className="post reveal" href={post.link || "/#insights"} key={index}>
          <div className="post-img">
            <svg><use href={`#i-${post.tag?.toLowerCase() || 'docs'}`}></use></svg>
          </div>
          <div className="post-body">
            <div className="post-meta">
              <span className="chip">{post.tag}</span>
              <span>{post.meta}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <span className="link-more">
              Read more{" "}
              <svg><use href="#i-arrow-r"></use></svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  );

  // Helper to render related items
  const renderRelatedItems = (items) => (
    <div className="rel-grid">
      {items.map((item, index) => (
        <a className="rel reveal" href={item.link || "#"} key={index}>
           <div className="icon-tile">
                      <svg><use href={`#i-${item.icon}`}></use></svg>
                    </div>
          <span>
            <b>{item.title}</b>
            <span>{item.description}</span>
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <main id="main" ref={mainRef}>
      {/* ===================== HERO ===================== */}
      {/* // In your IndustriesHealthcare component */}
      <HeroSection
        title={pageData.title}
        hero={pageData.hero}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Industries", link: "/industries" },
          { label: "Regulated Industries", link: "/industries#regulated" },
          { label: pageData.title || "Healthcare", isCurrent: true }
        ]}
      />

      {/* ===================== IN-PAGE NAV ===================== */}
      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          {sectorOverview?.items?.length > 0 && <a href="#sector">The sector</a>}
          {challenges?.items?.length > 0 && <a href="#challenges">Challenges</a>}
          {outcomes?.metrics?.length > 0 && <a href="#outcomes">Outcomes</a>}
          {pillars?.items?.length > 0 && <a href="#help">How we help</a>}
          {consultingServices?.items?.length > 0 && <a href="#dynamics">Dynamics 365</a>}
          {approach?.steps?.length > 0 && <a href="#approach">Our approach</a>}
          {whyUs?.items?.length > 0 && <a href="#why-us">Why JJC</a>}
          {successStories?.stories?.length > 0 && <a href="#stories">Success stories</a>}
          {insights?.posts?.length > 0 && <a href="#insights">Insights</a>}
          <a className="subnav-cta link-more" href={cta?.primaryLink || "/#contact"}>
            Request a demo{" "}
            <svg><use href="#i-arrow-r"></use></svg>
          </a>
        </div>
      </nav>

      {/* ===================== 1. THE SECTOR ===================== */}
      {sectorOverview && sectorOverview.items?.length > 0 && (
        <section className="section bg-paper" id="sector">
          <div className="wrap">
            {renderSectionHeading(
              sectorOverview.eyebrow,
              sectorOverview.title,
              sectorOverview.subtitle
            )}

            <div className="seg-grid">
              {sectorOverview.items.map((item, index) => (
                <article className="seg reveal" key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            {sectorOverview.note && (
              <div className="value-note reveal">
                <h3>Where the return actually comes from</h3>
                <p>{sectorOverview.note}</p>
              </div>
            )}

            {/* Application Layer */}
            {applicationLayer && applicationLayer.items?.length > 0 && (
              <>
                {renderSectionHeading(
                  applicationLayer.eyebrow,
                  applicationLayer.title,
                  applicationLayer.subtitle,
                  "margin-top:clamp(52px,7vw,86px)"
                )}
                {renderTaskItems(applicationLayer.items, "task-tag t-core")}
              </>
            )}
          </div>
        </section>
      )}

      {/* ===================== 2. CHALLENGES ===================== */}
      {challenges && challenges.items?.length > 0 && (
        <section className="section bg-mist" id="challenges">
          <div className="wrap">
            {renderSectionHeading(
              challenges.eyebrow,
              challenges.title,
              challenges.subtitle
            )}

            <div className="chal-grid">
              {challenges.items.map((item, index) => (
                <article className="chal reveal" key={index}>
                  <span className="chal-n">0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.outcomeAsk && (
                      <span className="chal-out">
                        <b>The outcome leaders ask for</b>
                        {item.outcomeAsk}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {challenges.note && (
              <div className="chal-note reveal">
                <svg><use href="#i-target"></use></svg>
                <p>
                  {challenges.note}
                  {challenges.noteHighlight && <> <b>{challenges.noteHighlight}</b></>}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 3. OUTCOMES ===================== */}
      {outcomes && outcomes.metrics?.length > 0 && (
        <section className="section bg-navy" id="outcomes">
          <div className="wrap">
            {renderSectionHeading(
              outcomes.eyebrow,
              outcomes.title,
              outcomes.subtitle
            )}
            {renderMetrics(outcomes.metrics)}
            {outcomes.note && (
              <p className="metric-note">
                <b>How to read these:</b> {outcomes.note}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ===================== 4. HOW WE HELP ===================== */}
      {pillars && pillars.items?.length > 0 && (
        <section className="section bg-paper" id="help">
          <div className="wrap">
            {renderSectionHeading(
              pillars.eyebrow,
              pillars.title,
              pillars.subtitle
            )}
            {renderPillars(pillars.items)}
          </div>
        </section>
      )}

      {/* ===================== 5. DYNAMICS 365 ===================== */}
      {consultingServices && consultingServices.items?.length > 0 && (
        <section className="section bg-mist" id="dynamics">
          <div className="wrap">
            {renderSectionHeading(
              consultingServices.eyebrow,
              consultingServices.title,
              consultingServices.subtitle
            )}
            {renderTaskItems(consultingServices.items, "task-tag t-core")}

            {consultingServices.note && (
              <div className="sol-note reveal">
                <svg><use href="#i-check"></use></svg>
                <p>{consultingServices.note}</p>
              </div>
            )}

            {/* App Grid */}
            {appGrid && appGrid.items?.length > 0 && (
              <>
                {renderSectionHeading(
                  appGrid.eyebrow,
                  appGrid.title,
                  appGrid.subtitle,
                  "margin-top:clamp(52px,7vw,86px)"
                )}
                {renderTaskItems(appGrid.items, "app-tag")}
                {appGrid.note && (
                  <div className="sol-note reveal">
                    <svg><use href="#i-check"></use></svg>
                    <p>{appGrid.note}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* ===================== 6. APPROACH ===================== */}
      {approach && approach.steps?.length > 0 && (
        <section className="section bg-paper" id="approach">
          <div className="wrap">
            {renderSectionHeading(
              approach.eyebrow,
              approach.title,
              approach.subtitle
            )}
            {renderSteps(approach.steps)}
            {approach.note && (
              <div className="sol-note reveal">
                <svg><use href="#i-check"></use></svg>
                <p>{approach.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 7. WHY JJC ===================== */}
      {whyUs && whyUs.items?.length > 0 && (
        <section className="section bg-navy" id="why-us">
          <div className="wrap">
            {renderSectionHeading(
              whyUs.eyebrow,
              whyUs.title,
              whyUs.subtitle
            )}
            {renderWhyUsItems(whyUs.items)}
          </div>
        </section>
      )}

      {/* ===================== 8. SUCCESS STORIES ===================== */}
      {successStories && successStories.stories?.length > 0 && (
        <section className="section bg-paper" id="stories">
          <div className="wrap">
            {renderSectionHeading(
              successStories.eyebrow,
              successStories.title,
              successStories.subtitle
            )}
            {renderSuccessStories(successStories.stories)}
            {successStories.disclaimer && (
              <p className="demo-disclaimer">
                <b>Demo content:</b> {successStories.disclaimer}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ===================== 9. INSIGHTS ===================== */}
      {insights && insights.posts?.length > 0 && (
        <section className="section bg-mist" id="insights">
          <div className="wrap">
            <div className="sec-head reveal" style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "32px",
              maxWidth: "none",
              flexWrap: "wrap"
            }}>
              <div style={{ maxWidth: "700px" }}>
                <span className="eyebrow">{insights.eyebrow}</span>
                <h2 className="h-sec wide">{insights.title}</h2>
                <p className="lede">{insights.subtitle}</p>
              </div>
              <a className="btn btn-outline" href="/#insights">
                View all resources{" "}
                <svg><use href="#i-arrow-r"></use></svg>
              </a>
            </div>
            {renderInsights(insights.posts)}
          </div>
        </section>
      )}

      {/* ===================== 10. CTA ===================== */}
      {cta && (
        <section className="section bg-paper">
          <div className="wrap">
            <div className="cta-band reveal">
              <div>
                <h2>{cta.title}</h2>
                <p>{cta.description}</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href={cta.primaryLink}>
                  {cta.primaryLabel}{" "}
                  <svg><use href="#i-arrow-r"></use></svg>
                </a>
                {cta.secondaryLabel && (
                  <a className="btn btn-ghost" href={cta.secondaryLink}>
                    {cta.secondaryLabel}{" "}
                    <svg><use href="#i-arrow-r"></use></svg>
                  </a>
                )}
                {cta.note && <small>{cta.note}</small>}
              </div>
            </div>

            {/* Related Items */}
            {relatedItems && relatedItems.items?.length > 0 && (
              <>
                {renderSectionHeading(
                  relatedItems.eyebrow,
                  relatedItems.title,
                  "",
                  "margin-top:clamp(52px,7vw,86px)"
                )}
                {renderRelatedItems(relatedItems.items)}
              </>
            )}
          </div>
        </section>
      )}
    </main>
  );
}