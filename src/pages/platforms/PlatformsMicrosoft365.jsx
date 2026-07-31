import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useParams } from "react-router-dom";
import { useGetPlatformBySlugQuery } from "../../redux/api.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Loader from "../../components/Loader.jsx";

export default function PlatformsMicrosoft365() {
  const mainRef = useRef(null);
  const { slug } = useParams();
  const { data, isLoading, error } = useGetPlatformBySlugQuery(slug);
  const pageData = data?.data;

  // Set meta from API data
  useDocumentMeta(
    pageData?.seo?.metaTitle || "Microsoft 365 Consulting & Implementation | JJC Systems",
    pageData?.seo?.metaDescription || "Microsoft 365 consulting, migration and optimization. Get the collaboration, security and governance capability you already pay for actually working."
  );
  usePageEffects(mainRef);

  if (isLoading) {
    return (
     <Loader />
    );
  }

  if (error || !pageData) {
    return (
      <main id="main" ref={mainRef}>
        <div className="wrap" style={{ padding: "80px 0", textAlign: "center" }}>
          <h2>Page not found</h2>
          <p>Unable to load this platform page.</p>
        </div>
      </main>
    );
  }

  const {
    hero,
    challenges,
    capabilities,
    industryUseCases,
    outcomes,
    pillars,
    consultingServices,
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
    <div className={`sec-head reveal in ${className}`} style={{ marginTop: "clamp(52px, 7vw, 86px)" }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="h-sec wide">{title}</h2>}
      {subtitle && <p className="lede">{subtitle}</p>}
    </div>
  );

  // Helper to render challenge items
  const renderChallenges = (items) => (
    <div className="chal-grid">
      {items.map((item, index) => (
        <article className="chal reveal" key={index}>
          <span className="chal-n">0{index + 1}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );

  // Helper to render capabilities (feature grid)
  const renderCapabilities = (items) => (
    <div className="feat-grid">
      {items.map((item, index) => (
        <article className="feat reveal" key={index}>
          <span className="feat-icon">
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

  // Helper to render industry use cases
  const renderUseCases = (items) => (
    <div className="seg-grid">
      {items.map((item, index) => (
        <article className="seg reveal" key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );

  // Helper to render metrics
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

  // Helper to render associated outcomes
  const renderAssociatedOutcomes = (items) => (
    <ul className="biz-outcomes reveal">
      {items.map((item, index) => (
        <li key={index}>
          <svg><use href="#i-check"></use></svg>
          <span><b>{item.title}</b> — {item.description}</span>
        </li>
      ))}
    </ul>
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

  // Helper to render consulting services (task board)
  const renderConsultingServices = (items) => (
    <div className="task-board">
      {items.map((item, index) => (
        <article className="task-row reveal" key={index}>
          <div className="task-head">
            <span className="task-tag t-core">{item.tag}</span>
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
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
      <HeroSection
        title={title}
        hero={hero}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Platforms", link: "/platforms" },
          { label: "Microsoft 365 & Modern Work", link: "/platforms#modern-work" },
          { label: title || "Microsoft 365", isCurrent: true }
        ]}
      />

      {/* ===================== IN-PAGE NAV ===================== */}
      <nav className="svc-subnav" aria-label="On this page">
        <div className="wrap">
          {challenges?.items?.length > 0 && <a href="#overview">Overview</a>}
          {capabilities?.items?.length > 0 && <a href="#capabilities">Capabilities</a>}
          {outcomes?.metrics?.length > 0 && <a href="#outcomes">Business outcomes</a>}
          {industryUseCases?.items?.length > 0 && <a href="#usecases">Use cases</a>}
          {pillars?.items?.length > 0 && <a href="#help">How we help</a>}
          {consultingServices?.items?.length > 0 && <a href="#services">Our services</a>}
          {approach?.steps?.length > 0 && <a href="#approach">Approach</a>}
          {whyUs?.items?.length > 0 && <a href="#why-us">Why JJC</a>}
          {successStories?.stories?.length > 0 && <a href="#stories">Success</a>}
          {insights?.posts?.length > 0 && <a href="#insights">Insights</a>}
          <a className="subnav-cta link-more" href={cta?.primaryLink || "/#contact"}>
            Request a demo{" "}
            <svg><use href="#i-arrow-r"></use></svg>
          </a>
        </div>
      </nav>

      {/* ===================== 1. OVERVIEW & PAIN POINTS ===================== */}
      {challenges && challenges.items?.length > 0 && (
        <section className="section bg-paper" id="overview">
          <div className="wrap">
            {renderSectionHeading(
              challenges.eyebrow,
              challenges.title,
              challenges.subtitle
            )}
            {renderChallenges(challenges.items)}
            {challenges.note && (
              <div className="value-note reveal">
                <h3>{challenges.noteHighlight || "Configuration is where the return is"}</h3>
                <p>{challenges.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 2. CAPABILITIES ===================== */}
      {capabilities && capabilities.items?.length > 0 && (
        <section className="section bg-mist" id="capabilities">
          <div className="wrap">
            {renderSectionHeading(
              capabilities.eyebrow,
              capabilities.title,
              capabilities.subtitle
            )}
            {renderCapabilities(capabilities.items)}
            {capabilities.note && (
              <div className="sol-note reveal">
                <svg><use href="#i-check"></use></svg>
                <p>{capabilities.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 3. BUSINESS OUTCOMES ===================== */}
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

            {/* Associated Outcomes */}
            {outcomes.associatedItems && outcomes.associatedItems.length > 0 && (
              <>
                <div className="sec-head reveal" style={{ marginTop: 'clamp(48px,6vw,72px)' }}>
                  <h3 className="h-sec wide" style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}>
                    {outcomes.associatedTitle || "The business outcomes Microsoft associates with this platform"}
                  </h3>
                  <p className="lede">{outcomes.associatedSubtitle}</p>
                </div>
                {renderAssociatedOutcomes(outcomes.associatedItems)}
                {outcomes.associatedNote && (
                  <p className="docs-note">
                    <b>Where this comes from:</b> {outcomes.associatedNote}
                  </p>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* ===================== 4. INDUSTRY USE CASES ===================== */}
      {industryUseCases && industryUseCases.items?.length > 0 && (
        <section className="section bg-paper" id="usecases">
          <div className="wrap">
            {renderSectionHeading(
              industryUseCases.eyebrow,
              industryUseCases.title,
              industryUseCases.subtitle
            )}
            {renderUseCases(industryUseCases.items)}
          </div>
        </section>
      )}

      {/* ===================== 5. HOW WE HELP ===================== */}
      {pillars && pillars.items?.length > 0 && (
        <section className="section bg-mist" id="help">
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

      {/* ===================== 6. OUR SERVICES ===================== */}
      {consultingServices && consultingServices.items?.length > 0 && (
        <section className="section bg-paper" id="services">
          <div className="wrap">
            {renderSectionHeading(
              consultingServices.eyebrow,
              consultingServices.title,
              consultingServices.subtitle
            )}
            {renderConsultingServices(consultingServices.items)}
            {consultingServices.note && (
              <div className="sol-note reveal">
                <svg><use href="#i-check"></use></svg>
                <p>{consultingServices.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 7. OUR APPROACH ===================== */}
      {approach && approach.steps?.length > 0 && (
        <section className="section bg-mist" id="approach">
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

      {/* ===================== 8. WHY JJC SYSTEMS ===================== */}
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

      {/* ===================== 9. CUSTOMER SUCCESS ===================== */}
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

      {/* ===================== 10. INSIGHTS ===================== */}
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

      {/* ===================== 11. CTA & RELATED ===================== */}
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