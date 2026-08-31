import { useRef } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useParams } from "react-router-dom";
import { useGetCaseStudyStoryBySlugQuery, useGetRelatedStoryByIdQuery } from "../../redux/api.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Loader from "../../components/Loader.jsx";
// import HeroSection from "./components/HeroSection.jsx"; // Adjust the path as needed

export default function SuccessStoryPatientOutreachThatPeopleActuallyRespondTo() {
  const mainRef = useRef(null);
  const { slug } = useParams();

  // console.log(slug)
  const { data: response, isLoading, error } = useGetCaseStudyStoryBySlugQuery(slug);
  const { data } = useGetRelatedStoryByIdQuery(response?.data?._id)

  const pageData = response?.data;
  // console.log(pageData)

  // Set meta tags dynamically
  useDocumentMeta(
    pageData?.seo?.title || "Patient outreach that people actually respond to | Client Success | JJC Systems",
    pageData?.seo?.description || "Communication delays and fragmented patient data were limiting access to care. Outreach was generic, arrived late, and the organization could not tell which channels were working.",
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

  const {
    title,
    organization,
    country,
    breadcrumbs = [],
    hero = {},
    subNavigation = [],
    situation = {},
    approach = {},
    results = {},
    platforms = {},
    transfers = {},
    sourcing = {},
    cta = {},
    relatedStoriesTitle = "Others you may want to read",
    relatedStories = [],
  } = pageData;

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

  // Helper function to render process steps
  const renderProcessSteps = (process = []) => {
    return process.map((step, index) => (
      <div className="step" key={index}>
        <span className="step-n">{step.step}</span>
        <h4>{step.title}</h4>
        <p>{step.description}</p>
      </div>
    ));
  };

  // Helper function to render related stories
  const renderRelatedStories = () => {
    return relatedStories.map((story, index) => (
      <Link
        key={index}
        className="rel reveal"
        to={`/success/story/${story.slug}`}
      >
        {/* <span className="rel-icon"> */}


        <div className="icon-tile">
          <svg>
            <use href="#i-grid" />
          </svg>
        </div>
        {/* </span> */}
        <span>
          <b>{story.title}</b>
          <span>Also in {story.category}</span>
        </span>
      </Link>
    ));
  };

  return (
    <main id="main" ref={mainRef}>
      {/* Hero Section - Using the HeroSection component */}
      <HeroSection
        title={title}
        hero={{
          eyebrow: hero?.eyebrow,
          heading: hero?.title || title,
          lede: `${organization}, ${country}. ${hero?.subtitle || ""}`,
          primaryCtaText: hero?.primaryButton?.label || "Talk to our team",
          primaryCtaLink: hero?.primaryButton?.link || "/#contact",
          secondaryCtaText: hero?.secondaryButton?.label || "See the results",
          secondaryCtaLink: hero?.secondaryButton?.link || "#results",
          glance: {
            title: hero?.glanceTitle || "At a glance",
            items: hero?.glance || [],
          },
          stats: hero?.stats || [],
        }}
        breadcrumbs={breadcrumbs.map(item => ({
          label: item.label,
          link: item.link || null,
        }))}
      />

      {/* Sub Navigation */}
      {subNavigation.length > 0 && (
        <nav className="svc-subnav" aria-label="On this page">
          <div className="wrap">
            {subNavigation.map((item, index) => (
              <a key={index} href={item.link}>
                {item.label}
              </a>
            ))}
            <a className="subnav-cta link-more" href="/#contact">
              Talk to us
              <svg>
                <use href="#i-arrow-r" />
              </svg>
            </a>
          </div>
        </nav>
      )}

      {/* Situation Section */}
      <section className="section bg-paper" id="situation">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <div className="sec-head reveal">
            <span className="eyebrow">{situation?.eyebrow || "The situation"}</span>
            <h2 className="h-sec wide">{situation?.title || "What the organization was dealing with"}</h2>
          </div>
          <div className="feat-block reveal" style={{ marginTop: "8px" }}>
            {situation?.paragraphs?.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-mist" id="approach">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <div className="sec-head reveal">
            <span className="eyebrow">{approach?.eyebrow || "What was done"}</span>
            <h2 className="h-sec wide">{approach?.title || "The work, and the part that was actually hard"}</h2>
          </div>
          <div className="feat-block reveal" style={{ marginTop: "8px" }}>
            {approach?.paragraphs?.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section bg-navy" id="results">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{results?.eyebrow || "Results"}</span>
            <h2 className="h-sec wide">{results?.title || "What was published"}</h2>
            {results?.description && (
              <p className="lede">{results.description}</p>
            )}
          </div>

          <div className="metric-grid reveal">
            {results?.metrics?.map((metric, index) => (
              <div className="metric" key={index}>
                <span className="m-label">{metric.label}</span>
                <b>{metric.value}</b>
              </div>
            ))}
          </div>

          {results?.outcomes?.length > 0 && (
            <>
              <div
                className="sec-head reveal"
                style={{ marginTop: "clamp(46px,6vw,70px)" }}
              >
                <h3
                  className="h-sec wide"
                  style={{ fontSize: "clamp(21px,2.3vw,28px)" }}
                >
                  {results?.changesTitle || "What changed"}
                </h3>
              </div>
              <ul className="biz-outcomes reveal">
                {renderOutcomes(results.outcomes)}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section bg-paper" id="platforms">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{platforms?.eyebrow || "Platforms involved"}</span>
            <h2 className="h-sec wide">{platforms?.title || "What each product was doing here"}</h2>
            {platforms?.description && (
              <p className="lede">{platforms.description}</p>
            )}
          </div>
          <div className="task-board">
            {platforms?.items?.map((item, index) => (
              <article className="task-row reveal" key={index}>
                <div className="task-head">
                  <span className="app-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transfers Section */}
      <section className="section bg-mist" id="transfers">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{transfers?.eyebrow || "What transfers"}</span>
            <h2 className="h-sec wide">{transfers?.title || "If you were to attempt this"}</h2>
            {transfers?.description && (
              <p className="lede">{transfers.description}</p>
            )}
          </div>

          {transfers?.warningTitle && (
            <div className="chal-note reveal" style={{ marginTop: "8px" }}>
              <svg>
                <use href="#i-target" />
              </svg>
              <p>
                <b>{transfers.warningTitle}:</b> {transfers.warningDescription}
              </p>
            </div>
          )}

          {transfers?.process?.length > 0 && (
            <>
              <div
                className="sec-head reveal"
                style={{ marginTop: "clamp(46px,6vw,70px)" }}
              >
                <span className="eyebrow">How we would take it on</span>
                <h2 className="h-sec wide">
                  {transfers?.approachTitle || "Our approach to Business Applications work"}
                </h2>
              </div>
              <div className="process reveal">
                {renderProcessSteps(transfers.process)}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Sourcing Section */}
      {/* <section className="section bg-paper" id="sourcing">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <div className="sec-head reveal">
            <span className="eyebrow">{sourcing?.eyebrow || "Sourcing & confidentiality"}</span>
            <h2 className="h-sec wide">{sourcing?.title || "Where this report comes from"}</h2>
          </div>
          <div className="feat-block reveal" style={{ marginTop: "8px" }}>
            {sourcing?.paragraphs?.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
          {sourcing?.summary && (
            <div className="prov-note reveal">
              <svg>
                <use href="#i-check" />
              </svg>
              <p>
                <b>In short:</b> {sourcing.summary}
              </p>
            </div>
          )}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>{cta?.title || "Recognise the problem?"}</h2>
              <p>{cta?.description || "If any of the above describes your organization, tell us where it hurts most. We will tell you what the same platforms could realistically do in your environment, what we would measure, and whether we think it is worth doing at all."}</p>
            </div>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href={cta?.primaryButton?.link || "/#contact"}
              >
                {cta?.primaryButton?.label || "Talk to our team"}
                <svg>
                  <use href="#i-arrow-r" />
                </svg>
              </a>
              <a
                className="btn btn-ghost"
                href={cta?.secondaryButton?.link || "/success/capability-business-applications"}
              >
                {cta?.secondaryButton?.label || "More Business Applications stories"}
                <svg>
                  <use href="#i-arrow-r" />
                </svg>
              </a>
              <small>{cta?.note || "We reply to every message within one business day."}</small>
            </div>
          </div>

          {/* Related Stories */}
          {relatedStories.length > 0 && (
            <>
              <div
                className="sec-head reveal"
                style={{ marginTop: "clamp(52px,7vw,86px)" }}
              >
                <span className="eyebrow">Related reports</span>
                <h2 className="h-sec wide">{relatedStoriesTitle}</h2>
              </div>
              <div className="rel-grid">
                {renderRelatedStories()}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}