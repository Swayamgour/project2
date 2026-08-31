import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useParams } from "react-router-dom";
import { useGetServiceBySlugQuery } from "../../redux/api.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Loader from "../../components/Loader.jsx";

export default function ServicesItStrategyConsulting() {
    const mainRef = useRef(null);
    const { slug } = useParams();
    const { data, isLoading, error } = useGetServiceBySlugQuery(slug);
    const pageData = data?.data;

    // Set meta from API data or fallback
    useDocumentMeta(
        pageData?.seo?.metaTitle || "IT Strategy & Consulting | JJC Systems",
        pageData?.seo?.metaDescription || "Independent IT strategy and consulting for mid-sized organizations — technology assessments, costed roadmaps, architecture decisions and budget planning tied to business outcomes.",
        {
            keywords: pageData?.seo?.keywords,
            canonicalUrl: pageData?.seo?.canonicalUrl,
            ogImage: pageData?.seo?.ogImage,
        }
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
                    <p>Unable to load this service page.</p>
                </div>
            </main>
        );
    }

    const { hero, challenges, outcomes, pillars, taskBoard, approach, whyUs, successStories, insights, cta, relatedItems } = pageData;

    return (
        <main id="main" ref={mainRef}>
            {/* ===================== HERO ===================== */}


            <HeroSection
                title={pageData.title}
                hero={hero}
                breadcrumbs={[
                    {
                        label: "Home",
                        link: "/",
                    },
                    {
                        label: "Services",
                        link: "/services",
                    },
                    {
                        label: "Strategy & Transformation",
                        link: "/services#strategy-transformation",
                    },
                    {
                        label: pageData.title,
                    },
                ]}
            />

            {/* ===================== IN-PAGE NAV ===================== */}
            <nav className="svc-subnav" aria-label="On this page">
                <div className="wrap">
                    <a href="#challenges">The problem</a>
                    <a href="#outcomes">Outcomes</a>
                    <a href="#help">How we help</a>
                    <a href="#included">What's included</a>
                    <a href="#approach">Our approach</a>
                    <a href="#why-us">Why us</a>
                    <a href="#stories">Success stories</a>
                    <a href="#insights">Insights</a>
                    <a className="subnav-cta link-more" href="/contact">
                        Talk to us{" "}
                        <svg><use href="#i-arrow-r"></use></svg>
                    </a>
                </div>
            </nav>

            {/* ===================== 1. WHY DO IT / CHALLENGES ===================== */}
            {challenges && challenges.items?.length > 0 && (
                <section className="section bg-paper" id="challenges">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{challenges.eyebrow}</span>
                            <h2 className="h-sec wide">{challenges.title}</h2>
                            <p className="lede">{challenges.subtitle}</p>
                        </div>
                        <div className="chal-grid">
                            {challenges.items?.map((item, index) => (
                                <article className="chal reveal" key={index}>
                                    <span className="chal-n">0{index + 1}</span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                        {challenges.note && (
                            <div className="chal-note reveal">
                                <svg><use href="#i-target"></use></svg>
                                <p>
                                    {challenges.note}
                                    {challenges.noteHighlight && (
                                        <> <b>{challenges.noteHighlight}</b></>
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== 2. MEASURABLE OUTCOMES ===================== */}
            {outcomes && outcomes.metrics?.length > 0 && (
                <section className="section bg-navy" id="outcomes">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{outcomes.eyebrow}</span>
                            <h2 className="h-sec wide">{outcomes.title}</h2>
                            <p className="lede">{outcomes.subtitle}</p>
                        </div>
                        <div className="metric-grid reveal">
                            {outcomes.metrics?.map((metric, index) => (
                                <div className="metric" key={index}>
                                    <span className="m-label">{metric.label}</span>
                                    <b>{metric.value}</b>
                                    <p>{metric.description}</p>
                                </div>
                            ))}
                        </div>
                        {outcomes.note && (
                            <p className="metric-note">
                                <b>How to read these:</b> {outcomes.note}
                            </p>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== 3. HOW WE CAN HELP / PILLARS ===================== */}
            {pillars && pillars.items?.length > 0 && (
                <section className="section bg-mist" id="help">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{pillars.eyebrow}</span>
                            <h2 className="h-sec wide">{pillars.title}</h2>
                            <p className="lede">{pillars.subtitle}</p>
                        </div>
                        <div className="pillar-grid">
                            {pillars.items?.map((pillar, index) => (
                                <article className="pillar reveal" key={index}>
                                    <div className="icon-tile">
                                        <svg><use href={`#i-${pillar.icon}`}></use></svg>
                                    </div>
                                    <h3>{pillar.title}</h3>
                                    <p>{pillar.description}</p>
                                    {pillar.points?.length > 0 && (
                                        <ul>
                                            {pillar.points.map((point, idx) => (
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
                    </div>
                </section>
            )}

            {/* ===================== 4. WHAT'S INCLUDED / TASK BOARD ===================== */}
            {taskBoard && taskBoard.tasks?.length > 0 && (
                <section className="section bg-paper" id="included">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{taskBoard.eyebrow}</span>
                            <h2 className="h-sec wide">{taskBoard.title}</h2>
                            <p className="lede">{taskBoard.subtitle}</p>
                        </div>
                        <div className="task-legend reveal">
                            <span><i></i>Core — delivered in most engagements</span>
                            <span><i></i>Industry — shaped by your sector's rules</span>
                            <span><i></i>Challenge — scoped to a specific problem</span>
                        </div>
                        <div className="task-board">
                            {taskBoard.tasks?.map((task, index) => (
                                <article className="task-row reveal" key={index}>
                                    <div className="task-head">
                                        <span className={`task-tag t-${task.tag}`}>
                                            {task.tag.charAt(0).toUpperCase() + task.tag.slice(1)}
                                        </span>
                                        <h3>{task.title}</h3>
                                    </div>
                                    <p>{task.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===================== 5. HOW WE DO IT / APPROACH ===================== */}
            {approach && approach.steps?.length > 0 && (
                <section className="section bg-mist" id="approach">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{approach.eyebrow}</span>
                            <h2 className="h-sec wide">{approach.title}</h2>
                            <p className="lede">{approach.subtitle}</p>
                        </div>
                        <div className="process reveal">
                            {approach.steps?.map((step, index) => (
                                <div className="step" key={index}>
                                    <span className="step-n">{index + 1}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                        {approach.note && (
                            <div className="sol-note reveal">
                                <svg><use href="#i-check"></use></svg>
                                <p>
                                    <b>You own everything we produce.</b> {approach.note}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== 6. WHY CHOOSE US ===================== */}
            {whyUs && whyUs.items?.length > 0 && (
                <section className="section bg-navy" id="why-us">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{whyUs.eyebrow}</span>
                            <h2 className="h-sec wide">{whyUs.title}</h2>
                            <p className="lede">{whyUs.subtitle}</p>
                        </div>
                        <div className="reason-grid">
                            {whyUs.items?.map((item, index) => (
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
                    </div>
                </section>
            )}

            {/* ===================== 7. CUSTOMER SUCCESS / SUCCESS STORIES ===================== */}
            {successStories && successStories.stories?.length > 0 && (
                <section className="section bg-paper" id="stories">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{successStories.eyebrow}</span>
                            <h2 className="h-sec wide">{successStories.title}</h2>
                            <p className="lede">{successStories.subtitle}</p>
                        </div>
                        <div className="success-grid">
                            {successStories.stories?.map((story, index) => (
                                <article className="story-card reveal" key={index}>
                                    <div className="story-top">
                                        <div className="story-kicker">
                                            <span className="story-industry">{story.industry}</span>
                                            {/* {story.isSample && <span className="demo-chip">Sample story</span>} */}
                                        </div>
                                        <h3>{story.title}</h3>
                                        <p className="story-summary">{story.summary}</p>
                                    </div>
                                    <div className="story-metrics">
                                        {story.metrics?.map((metric, idx) => (
                                            <div className="story-metric" key={idx}>
                                                <b>{metric.value}</b>
                                                <span>{metric.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="story-body">
                                        <h4>What changed</h4>
                                        <ul className="story-outcomes">
                                            {story.outcomes?.map((outcome, idx) => (
                                                <li key={idx}>
                                                    <svg><use href="#i-check"></use></svg>
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a className="link-more" href={story.ctaLink || "/contact"}>
                                            Talk about a similar outcome{" "}
                                            <svg><use href="#i-arrow-r"></use></svg>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                        {/* {successStories.disclaimer && (
                            <p className="demo-disclaimer">
                                <b>Demo content:</b> {successStories.disclaimer}
                            </p>
                        )} */}
                    </div>
                </section>
            )}

            {/* ===================== 8. INSIGHTS ===================== */}
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
                            {/* <a className="btn btn-outline" href="/#insights">
                                View all resources{" "}
                                <svg><use href="#i-arrow-r"></use></svg>
                            </a> */}
                        </div>
                        <div className="insights-grid">
                            {insights.posts?.map((post, index) => (
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
                    </div>
                </section>
            )}

            {/* ===================== 9. NEXT STEP / CTA ===================== */}
            <section className="section bg-paper">
                <div className="wrap">
                    <div className="cta-band reveal">
                        <div>
                            <h2>{cta?.title || "Start with an honest assessment, not a proposal"}</h2>
                            <p>{cta?.description || "Tell us what is stuck. We will tell you whether it needs a strategy engagement, a small piece of delivery work, or nothing at all."}</p>
                        </div>
                        <div className="cta-actions">
                            <a className="btn btn-primary" href={"/contact"}>
                                {cta?.primaryLabel || "Book a consultation"}{" "}
                                <svg><use href="#i-arrow-r"></use></svg>
                            </a>
                            {cta?.secondaryLabel && (
                                <a className="btn btn-ghost" href={cta?.secondaryLink || "/services"}>
                                    {cta.secondaryLabel}{" "}
                                    <svg><use href="#i-arrow-r"></use></svg>
                                </a>
                            )}
                            {cta?.note && <small>{cta.note}</small>}
                        </div>
                    </div>

                    {/* Related Services */}
                    {relatedItems && relatedItems.items?.length > 0 && (
                        <>
                            <div className="sec-head reveal" style={{ marginTop: "clamp(52px,7vw,86px)" }}>
                                <span className="eyebrow">{relatedItems.eyebrow || "Often combined with"}</span>
                                <h2 className="h-sec wide">{relatedItems.title || "Related services"}</h2>
                            </div>
                            <div className="rel-grid">
                                {relatedItems.items?.map((item, index) => (
                                    <a className="rel reveal " href={item.link || "#"} key={index}>
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
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}