"use client";

import { useRef } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import { useParams } from "next/navigation";
import { useGetServiceBySlugQuery } from "../../redux/api.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Loader from "../../components/Loader.jsx";
import renderRichText from "../../config/renderRichText.jsx";
import { CgMicrosoft } from "react-icons/cg";

/* true only for a non-empty array */
const hasItems = (arr) => Array.isArray(arr) && arr.length > 0;

export default function ServicesItStrategyConsulting() {
    const mainRef = useRef(null);
    const { slug } = useParams();
    const { data, isLoading, error } = useGetServiceBySlugQuery(slug);
    const pageData = data?.data;

    // Meta comes only from the API; fall back to the page's own title/description
    usePageEffects(mainRef);

    if (isLoading) {
        return <Loader />;
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

    const {
        hero,
        definition,
        challenges,
        outcomes,
        pillars,
        taskBoard,
        approach,
        whoFor,
        microsoftPlatforms,
        whyUs,
        successStories,
        insights,
        cta,
        relatedItems,
        faqs,
    } = pageData;

    /* ---------- which sections have data ---------- */
    const show = {
        definition:
            hasItems(definition?.layers) || hasItems(definition?.paragraphs),
        challenges: hasItems(challenges?.items),
        outcomes: hasItems(outcomes?.metrics),
        pillars: hasItems(pillars?.items),
        taskBoard: hasItems(taskBoard?.tasks),
        approach: hasItems(approach?.steps),
        whoFor: hasItems(whoFor?.items),
        microsoft: hasItems(microsoftPlatforms?.items),
        whyUs: hasItems(whyUs?.items),
        stories: hasItems(successStories?.stories),
        insights: hasItems(insights?.posts),
        cta: Boolean(cta?.title || cta?.description),
        related: hasItems(relatedItems?.items),
        faqs: hasItems(faqs?.items),
    };

    /* ---------- in-page nav: only links to sections that exist ---------- */
    const navLinks = [
        show.challenges && { href: "#challenges", label: "The problem" },
        show.outcomes && { href: "#outcomes", label: "Outcomes" },
        show.pillars && { href: "#help", label: "How we help" },
        show.taskBoard && { href: "#included", label: "What's included" },
        show.approach && { href: "#approach", label: "Our approach" },
        show.whoFor && { href: "#who", label: "Who it's for" },
        show.microsoft && { href: "#microsoft", label: "Microsoft" },
        show.whyUs && { href: "#why", label: "Why us" },
        show.stories && { href: "#stories", label: "Success stories" },
        show.insights && { href: "#insights", label: "Insights" },
        show.faqs && { href: "#faq", label: "FAQs" },
    ].filter(Boolean);

    /* ---------- breadcrumbs from the API (category / group / page) ---------- */
    const breadcrumbs = [
        { label: "Home", link: "/" },
        { label: pageData.categoryName || "Services", link: "/services" },
        pageData.groupName && {
            label: pageData.groupName,
            link: `/services#${pageData.groupSlug || ""}`,
        },
        { label: pageData.title },
    ].filter(Boolean);

    return (
        <main id="main" ref={mainRef}>
            {/* ===================== HERO ===================== */}
            <HeroSection
                title={pageData.title}
                hero={hero}
                breadcrumbs={breadcrumbs}
            />

            {/* ===================== IN-PAGE NAV ===================== */}
            {navLinks.length > 0 && (
                <nav className="svc-subnav" aria-label="On this page">
                    <div className="wrap">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                        <a className="subnav-cta link-more" href="/contact">
                            Talk to us{" "}
                            <svg><use href="#i-arrow-r"></use></svg>
                        </a>
                    </div>
                </nav>
            )}

            {/* ===================== THE BASICS / DEFINITION ===================== */}
            {show.definition && (
                <section className="section" id="definition">
                    <div className="wrap define">
                        <div className="rv">
                            {definition.eyebrow && (
                                <span className="eyebrow">{definition.eyebrow}</span>
                            )}

                            {definition.title && (
                                <h2 className="h-sec wide">{definition.title}</h2>
                            )}

                            {hasItems(definition.layers) && (
                                <div
                                    className="layers"
                                    aria-label={definition.layersLabel || definition.title}
                                >
                                    {definition.layers.map((layer, index) => (
                                        <div
                                            className="layer"
                                            key={`${layer.title}-${index}`}
                                        >
                                            <b>{layer.title}</b>
                                            {layer.description}
                                            {layer.tag && (
                                                <span className="tag">{layer.tag}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {hasItems(definition.paragraphs) && (
                            <div className="copy rv">
                                {definition.paragraphs.map((para, index) => (
                                    <p key={index}>{renderRichText(para)}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== WHY DO IT / CHALLENGES ===================== */}
            {show.challenges && (
                <section className="section bg-paper" id="challenges">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{challenges.eyebrow}</span>
                            <h2 className="h-sec wide">{challenges.title}</h2>
                            <p className="lede">{challenges.subtitle}</p>
                        </div>
                        <div className="chal-grid">
                            {challenges.items.map((item, index) => (
                                <article className="chal reveal" key={index}>
                                    <span className="chal-n">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        {item.outcomeAsk && (
                                            <p className="chal-ask">{item.outcomeAsk}</p>
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
                                    {challenges.noteHighlight && (
                                        <> <b>{challenges.noteHighlight}</b></>
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== MEASURABLE OUTCOMES ===================== */}
            {show.outcomes && (
                <section className="section bg-navy" id="outcomes">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{outcomes.eyebrow}</span>
                            <h2 className="h-sec wide">{outcomes.title}</h2>
                            <p className="lede">{outcomes.subtitle}</p>
                        </div>
                        <div className="metric-grid reveal">
                            {outcomes.metrics.map((metric, index) => (
                                <div className="metric" key={index}>
                                    <span className="m-label">{metric.label}</span>
                                    <b>{metric.value}</b>
                                    <p>{metric.description}</p>
                                </div>
                            ))}
                        </div>
                        {outcomes.note && (
                            <p className="metric-note">{outcomes.note}</p>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== HOW WE CAN HELP / PILLARS ===================== */}
            {show.pillars && (
                <section className="section bg-mist" id="help">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{pillars.eyebrow}</span>
                            <h2 className="h-sec wide">{pillars.title}</h2>
                            <p className="lede">{pillars.subtitle}</p>
                        </div>
                        <div className="pillar-grid">
                            {pillars.items.map((pillar, index) => (
                                <article className="pillar reveal" key={index}>
                                    {pillar.icon && (
                                        <div className="icon-tile">
                                            <svg><use href={`#i-${pillar.icon}`}></use></svg>
                                        </div>
                                    )}
                                    <h3>{pillar.title}</h3>
                                    <p>{pillar.description}</p>
                                    {hasItems(pillar.points) && (
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

            {/* ===================== WHAT'S INCLUDED / TASK BOARD ===================== */}
            {show.taskBoard && (
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
                            {taskBoard.tasks.map((task, index) => {
                                const tag = task.tag || "core";
                                return (
                                    <article className="task-row reveal" key={index}>
                                        <div className="task-head">
                                            <span className={`task-tag t-${tag}`}>
                                                {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                            </span>
                                            <h3>{task.title}</h3>
                                        </div>
                                        <p>{task.description}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ===================== HOW WE DO IT / APPROACH ===================== */}
            {show.approach && (
                <section className="section bg-mist" id="approach">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{approach.eyebrow}</span>
                            <h2 className="h-sec wide">{approach.title}</h2>
                            <p className="lede">{approach.subtitle}</p>
                        </div>
                        <div className="process reveal">
                            {approach.steps.map((step, index) => (
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
                                <p>{approach.note}</p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== WHO IT'S FOR ===================== */}
            {show.whoFor && (
                <section className="section" id="who">
                    <div className="wrap who-for">
                        <div className="rv">
                            {whoFor.eyebrow && (
                                <span className="eyebrow">{whoFor.eyebrow}</span>
                            )}
                            {whoFor.title && <h2>{whoFor.title}</h2>}
                            {whoFor.subtitle && <p className="lede">{whoFor.subtitle}</p>}

                            {whoFor.honestNote && (
                                <div className="who-for-honest">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-scale preview-icon"
                                    >
                                        <path d="M12 3v18" />
                                        <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                                        <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                                        <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                                        <path d="M7 21h10" />
                                    </svg>
                                    <span>{whoFor.honestNote}</span>
                                </div>
                            )}
                        </div>

                        <ul className="who-for-checks rv">
                            {whoFor.items.map((text, index) => (
                                <li key={index}>
                                    <svg className="ico"><use href="#i-check" /></svg>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {/* ===================== MICROSOFT PLATFORMS ===================== */}
            {show.microsoft && (
                <section className="section bg-navy" id="microsoft">
                    <div className="wrap">
                        <div className="sec-head rv">
                            {microsoftPlatforms.eyebrow && (
                                <span className="eyebrow">{microsoftPlatforms.eyebrow}</span>
                            )}
                            {microsoftPlatforms.title && <h2>{microsoftPlatforms.title}</h2>}
                            {microsoftPlatforms.subtitle && (
                                <p className="lede">{microsoftPlatforms.subtitle}</p>
                            )}
                        </div>

                        <div className="ms-grid">
                            {microsoftPlatforms.items.map((platform, index) => (
                                <article
                                    className="ms-card rv"
                                    key={`${platform.title}-${index}`}
                                >
                                    <div className="ico-tile">
                                        <CgMicrosoft />
                                    </div>
                                    <h3>{platform.title}</h3>
                                    <p>{platform.description}</p>
                                </article>
                            ))}
                        </div>

                        {microsoftPlatforms.note && (
                            <p className="ms-note rv">
                                <svg className="ico"><use href="#i-unlock" /></svg>
                                {microsoftPlatforms.note}
                            </p>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== WHY CHOOSE US ===================== */}
            {show.whyUs && (
                <section className="section" id="why">
                    <div className="wrap">
                        <div className="sec-head rv">
                            <span className="eyebrow">{whyUs.eyebrow}</span>
                            <h2>{whyUs.title}</h2>
                            <p className="lede">{whyUs.subtitle}</p>
                        </div>

                        <div className="grid-2">
                            {whyUs.items.map((item, index) => (
                                <article className="services-why-card rv" key={index}>
                                    {item.icon && (
                                        <div className="ico-tile">
                                            <svg className="ico">
                                                <use href={`#i-${item.icon}`} />
                                            </svg>
                                        </div>
                                    )}
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

            {/* ===================== SUCCESS STORIES ===================== */}
            {show.stories && (
                <section className="section bg-paper" id="stories">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{successStories.eyebrow}</span>
                            <h2 className="h-sec wide">{successStories.title}</h2>
                            <p className="lede">{successStories.subtitle}</p>
                        </div>
                        <div className="success-grid">
                            {successStories.stories.map((story, index) => (
                                <article className="story-card reveal" key={index}>
                                    <div className="story-top">
                                        <div className="story-kicker">
                                            <span className="story-industry">{story.industry}</span>
                                        </div>
                                        <h3>{story.title}</h3>
                                        <p className="story-summary">{story.summary}</p>
                                    </div>
                                    {hasItems(story.metrics) && (
                                        <div className="story-metrics">
                                            {story.metrics.map((metric, idx) => (
                                                <div className="story-metric" key={idx}>
                                                    <b>{metric.value}</b>
                                                    <span>{metric.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="story-body">
                                        {hasItems(story.outcomes) && (
                                            <>
                                                <h4>What changed</h4>
                                                <ul className="story-outcomes">
                                                    {story.outcomes.map((outcome, idx) => (
                                                        <li key={idx}>
                                                            <svg><use href="#i-check"></use></svg>
                                                            <span>{outcome}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                        <a className="link-more" href={story.ctaLink || "/contact"}>
                                            Talk about a similar outcome{" "}
                                            <svg><use href="#i-arrow-r"></use></svg>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                        {successStories.disclaimer && (
                            <p className="demo-disclaimer">{successStories.disclaimer}</p>
                        )}
                    </div>
                </section>
            )}

            {/* ===================== INSIGHTS ===================== */}
            {show.insights && (
                <section className="section bg-mist" id="insights">
                    <div className="wrap">
                        <div
                            className="sec-head reveal"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                gap: "32px",
                                maxWidth: "none",
                                flexWrap: "wrap",
                            }}
                        >
                            <div style={{ maxWidth: "700px" }}>
                                <span className="eyebrow">{insights.eyebrow}</span>
                                <h2 className="h-sec wide">{insights.title}</h2>
                                <p className="lede">{insights.subtitle}</p>
                            </div>
                        </div>
                        <div className="insights-grid">
                            {insights.posts.map((post, index) => (
                                <a
                                    className="post reveal"
                                    href={post.link || "/#insights"}
                                    key={index}
                                >
                                    <div className="post-img">
                                        <svg>
                                            <use href={`#i-${post.tag?.toLowerCase() || "docs"}`}></use>
                                        </svg>
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

            {/* ===================== CTA + RELATED ===================== */}
            {(show.cta || show.related) && (
                <section className="section bg-paper">
                    <div className="wrap">
                        {show.cta && (
                            <div className="cta-band reveal">
                                <div>
                                    {cta.title && <h2>{cta.title}</h2>}
                                    {cta.description && <p>{cta.description}</p>}
                                </div>
                                <div className="cta-actions">
                                    {cta.primaryLabel && (
                                        <a
                                            className="btn btn-primary"
                                            href={cta.primaryLink || "/contact"}
                                        >
                                            {cta.primaryLabel}{" "}
                                            <svg><use href="#i-arrow-r"></use></svg>
                                        </a>
                                    )}
                                    {cta.secondaryLabel && (
                                        <a
                                            className="btn btn-ghost"
                                            href={cta.secondaryLink || "/services"}
                                        >
                                            {cta.secondaryLabel}{" "}
                                            <svg><use href="#i-arrow-r"></use></svg>
                                        </a>
                                    )}
                                    {cta.note && <small>{cta.note}</small>}
                                </div>
                            </div>
                        )}

                        {show.related && (
                            <>
                                <div
                                    className="sec-head reveal"
                                    style={{
                                        marginTop: show.cta ? "clamp(52px,7vw,86px)" : 0,
                                    }}
                                >
                                    <span className="eyebrow">{relatedItems.eyebrow}</span>
                                    <h2 className="h-sec wide">{relatedItems.title}</h2>
                                </div>
                                <div className="rel-grid">
                                    {relatedItems.items.map((item, index) => (
                                        <a
                                            className="rel reveal"
                                            href={item.link || "#"}
                                            key={index}
                                        >
                                            {item.icon && (
                                                <div className="icon-tile">
                                                    <svg><use href={`#i-${item.icon}`}></use></svg>
                                                </div>
                                            )}
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
            )}

            {/* ===================== FAQS ===================== */}
            {show.faqs && (
                <section className="faq" id="faq">
                    <div className="wrap faq-wrap">
                        <div className="sec-head rv">
                            {faqs.eyebrow && <span className="eyebrow">{faqs.eyebrow}</span>}
                            {faqs.title && <h2>{faqs.title}</h2>}
                            {faqs.helpText && (
                                <p>
                                    {faqs.helpText}{" "}
                                    {faqs.helpLinkText && (
                                        <a href={faqs.helpLinkHref || "/contact"}>
                                            {faqs.helpLinkText}
                                        </a>
                                    )}
                                </p>
                            )}
                        </div>

                        <div className="faq rv">
                            {faqs.items.map((item, index) => (
                                <details key={index} open={Boolean(item.open)}>
                                    <summary>
                                        {item.question}
                                        <span className="fpm">
                                            <svg
                                                className="ico"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5v14" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p>{renderRichText(item.answer)}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}