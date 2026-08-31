import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useGetCaseStudyBySlugQuery } from "../../redux/api.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Loader from "../../components/Loader.jsx";
// import HeroSection from "./components/HeroSection.jsx"; // Assuming you have this component

export default function SuccessIndustryHealthcare() {
  const mainRef = useRef(null);

  const { slug } = useParams()

  const { data: response, isLoading, error } = useGetCaseStudyBySlugQuery(slug);

  // Extract the actual data from the response
  const pageData = response?.data;

  // Set meta tags
  useDocumentMeta(
    pageData?.seo?.metaTitle || "Healthcare Success Stories | JJC Systems",
    pageData?.seo?.metaDescription || "Documented Microsoft platform outcomes in Healthcare, with the challenge, the approach and the measured result.",
    {
      keywords: pageData?.seo?.keywords,
      canonicalUrl: pageData?.seo?.canonicalUrl,
      ogImage: pageData?.seo?.ogImage,
    }
  );

  usePageEffects(mainRef);

  // Loading state
  if (isLoading) {
    return (
     <Loader />
    );
  }

  // Error state
  if (error || !pageData) {
    return (
      <main id="main" ref={mainRef}>
        <div className="wrap" style={{ padding: "60px 0", textAlign: "center" }}>
          <p>Unable to load content. Please try again later.</p>
        </div>
      </main>
    );
  }

  const { heroSection, successStories, relatedCapabilities, ctaSection } = pageData;

  // Helper function to render tags
  const renderTags = (tags = []) => {
    return tags.map((tag, index) => (
      <span
        key={index}
        className={`case-tag ${index === tags.length - 1 ? 'ref' : ''}`}
      >
        {tag}
      </span>
    ));
  };

  // Helper function to render metrics
  const renderMetrics = (metrics = []) => {
    return metrics.map((metric, index) => (
      <div className="case-metric" key={index}>
        <b>{metric.value}</b>
        <span>{metric.label}</span>
      </div>
    ));
  };

  // Helper function to render outcomes
  const renderOutcomes = (outcomes = []) => {
    return outcomes.map((outcome, index) => (
      <li key={index}>
        <svg>
          <use href="#i-check" />
        </svg>
        <span>{outcome}</span>
      </li>
    ));
  };

  // Helper function to render products
  const renderProducts = (products = []) => {
    return products.map((product, index) => (
      <span key={index}>{product}</span>
    ));
  };

  const slugify = (text) => {
    return text
      ?.toLowerCase()
      ?.trim()
      ?.replace(/[^\w\s-]/g, "")
      ?.replace(/\s+/g, "-");
  };

  return (
    <main id="main" ref={mainRef}>
      {/* Hero Section */}
      <HeroSection
        title={pageData.name}
        hero={{
          eyebrow: heroSection?.eyebrow || "Client Success · Industry",
          heading: heroSection?.title || "What good looks like in Healthcare",
          lede: heroSection?.description || "",
          primaryCtaText: heroSection?.buttons?.[0]?.label || "Talk to our team",
          primaryCtaLink: heroSection?.buttons?.[0]?.link || "/#contact",
          secondaryCtaText: heroSection?.buttons?.[1]?.label || "Explore all success stories",
          secondaryCtaLink: heroSection?.buttons?.[1]?.link || "/success",
          glance: {
            title: heroSection?.glance?.title || "Where these come from",
            items: heroSection?.glance?.items || [],
          },
          stats: heroSection?.stats || [],
        }}
        breadcrumbs={heroSection?.breadcrumb?.map(item => ({
          label: item.title,
          link: item.link || null,
        })) || []}
      />

      {/* Success Stories Section */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{successStories?.eyebrow || "Success stories"}</span>
            <h2 className="h-sec wide">{successStories?.title || "Four outcomes in Healthcare"}</h2>
            <p className="lede">{successStories?.description || ""}</p>
          </div>

          <div className="case-grid">
            {successStories?.stories?.map((story, index) => {
              // Check if it's a reserved slot
              if (story.type === 'reserved') {
                return (
                  <article key={index} className="case is-gap reveal">
                    <div className="case-top">
                      <div className="case-kicker">
                        {renderTags(story.tags)}
                      </div>
                      <h3>{story.title}</h3>
                      <p className="case-gap-note">
                        {story.description || "We have not published a story in this slot yet. Microsoft has no case study covering this industry and capability combination that we could source and verify, and we would rather leave the space visibly empty than fill it with something we cannot stand behind. It will be filled by a JJC Systems engagement once a client approves the reference."}
                      </p>
                    </div>
                  </article>
                );
              }

              // Published story
              return (
                <article key={index} className="case reveal">
                  <div className="case-top">
                    <div className="case-kicker">
                      {renderTags(story.tags)}
                    </div>
                    <h3>{story.title}</h3>
                    <p className="case-org">
                      <b>{story.organization}</b> — {story.country || "United States"}
                    </p>
                  </div>

                  <div className="case-body">
                    <div className="case-main">
                      <h4>The challenge</h4>
                      <p>{story.challenge}</p>
                      <h4>What was done</h4>
                      <p>{story.solution}</p>
                    </div>

                    <div className="case-side">
                      <div className="case-metrics">
                        {renderMetrics(story.metrics)}
                      </div>

                      <ul className="case-out">
                        {renderOutcomes(story.outcomes)}
                      </ul>

                      <div className="case-prod">
                        {renderProducts(story.products)}
                      </div>

                      {/* {story.button && ( */}
                        < Link
                          className="link-more"
                          style={{ marginTop: "18px" }}
                          to={`/success/story/${slugify(story?.title)}`}
                        >
                          {/* {console.log()} */}
                          Read the full report
                          <svg>
                            <use href="#i-arrow-r" />
                          </svg>
                        </Link>
                      {/* )} */}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Disclaimer/Note */}
          {/* {successStories?.disclaimer && (
            <div className="prov-note reveal">
              <svg>
                <use href="#i-check" />
              </svg>
              <p>
                <b>{successStories.disclaimer.title}:</b> {successStories.disclaimer.description}
                {" "}These are reference outcomes that show what these platforms have delivered elsewhere — they are <b>not</b> JJC Systems client engagements, and we do not present them as our own results. The full source list, including every organization name and URL, is available on request.
              </p>
            </div>
          )} */}

          {/* Related Capabilities */}
          {relatedCapabilities && (
            <>
              <div
                className="sec-head reveal"
                style={{ marginTop: "clamp(52px,7vw,86px)" }}
              >
                <span className="eyebrow">{relatedCapabilities.eyebrow || "Related"}</span>
                <h2 className="h-sec wide">{relatedCapabilities.title || "Browse by capability"}</h2>
              </div>

              <div className="rel-grid">
                {relatedCapabilities.items?.map((item, index) => (
                  <Link
                    key={index}
                    className="rel reveal in"
                    to={`/success/${slugify(item?.title)}`}
                  >
                    {/* {console.log()} */}
                    {/* <span className="rel-icon"> */}


                    <div className="icon-tile">
                      <svg>
                        <use href="#i-arrow-r" />
                      </svg>
                    </div>
                    {/* </span> */}
                    <span>
                      <b>{item.title}</b>
                      <span>{item.description}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {
        ctaSection && (
          <section className="section bg-mist">
            <div className="wrap">
              <div className="cta-band reveal">
                <div>
                  <h2>{ctaSection.title}</h2>
                  <p>{ctaSection.description}</p>
                </div>
                <div className="cta-actions">
                  {ctaSection.buttons?.map((button, index) => (
                    <a
                      key={index}
                      className={`btn ${button.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
                      href={button.link || "#"}
                    >
                      {button.label}
                      <svg>
                        <use href="#i-arrow-r" />
                      </svg>
                    </a>
                  ))}
                  {ctaSection.note && (
                    <small>{ctaSection.note}</small>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      }
    </main >
  );
}