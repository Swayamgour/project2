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

            {/* ===================== basic  ===================== */}
            <section className="section" id="definition">
                <div className="wrap define">
                    <div className="rv">
                        <span className="eyebrow">The basics</span>
                        <h2 className="h-sec wide">What is IT strategy consulting?</h2>
                        <div className="layers" aria-label="Where strategy sits within IT consulting and services">
                            <div className="layer">
                                {/* <svg className="ico" ><use href="#i-route" /></svg> */}
                                <b>Strategy</b>Where to go, in what order <span className="tag">This page</span></div>
                            <div className="layer">
                                {/* <svg className="ico"><use href="#i-hub" /></svg> */}
                                <b>Architecture</b>How it fits together <span className="tag">Consulting</span></div>
                            <div className="layer">
                                {/* <svg className="ico"><use href="#i-wrench" /></svg> */}
                                <b>Implementation</b>Building it <span className="tag">Delivery</span></div>
                            <div className="layer">
                                {/* <svg className="ico"><use href="#i-shield" /></svg> */}
                                <b>Security</b>Protecting it <span className="tag">Delivery</span></div>
                            <div className="layer">
                                {/* <svg className="ico"><use href="#i-loop" /></svg> */}
                                <b>Managed support</b>Running it <span className="tag">Ongoing</span></div>
                        </div>
                    </div>
                    <div className="copy rv">
                        <p>IT strategy consulting is outside help in deciding what technology your organization should invest in, in what order, and why. A good engagement ends with a written plan: what you have today, what it costs, what to change first, who owns each piece, and how the spending ties back to business goals.</p>
                        <p>It sits upstream of broader IT consulting services. Strategy decides where to go and in what sequence. The wider range of IT consulting and services, including architecture, implementation, security and <a href="/services/managed-it-services">managed support</a>, then makes it happen. JJC Systems does both, which keeps the plan grounded in what can actually be built.</p>
                    </div>
                </div>
            </section>

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

            {/* <!-- ===== SECTION 10 · WHO IT'S FOR ===== --> */}
            <section className="section" id="who">
                <div className="wrap who">
                    <div className="rv">
                        <span className="eyebrow">Who it's for</span>
                        <h2>Who IT strategy consulting is for</h2>
                        <p className="lede">Organizations tend to look for IT consulting services at a few recognizable points.</p>
                        <div className="honest"><svg className="ico"><use href="#i-scale" /></svg><span>If you have a stable environment, a clear plan and a team that agrees on priorities, you probably don't need us yet.</span></div>
                    </div>
                    <ul className="checks rv">
                        <li><svg className="ico"><use href="#i-check" /></svg>Leadership is approving technology budgets without a clear view of what's already spent or what comes next.</li>
                        <li><svg className="ico"><use href="#i-check" /></svg>A new CIO, IT director or CEO needs an independent read on the current estate.</li>
                        <li><svg className="ico"><use href="#i-check" /></svg>Growth, an acquisition or a regulatory change is about to put pressure on systems that were never planned as a whole.</li>
                        <li><svg className="ico"><use href="#i-check" /></svg>The IT team is busy but can't show progress against anything the business cares about.</li>
                        <li><svg className="ico"><use href="#i-check" /></svg>Licence renewals, a cloud move or a Microsoft 365 or Dynamics 365 decision are approaching and need a considered answer.</li>
                    </ul>
                </div>
            </section>

            {/* <!-- ===== SECTION 11 · MICROSOFT PLATFORMS ===== -->
            <!-- Editor note: confirm JJC's current Microsoft partner designations before naming any on the page. --> */}
            <section className="section bg-navy" id="microsoft">
                <div className="wrap">
                    <div className="sec-head rv">
                        <span className="eyebrow">Microsoft platforms</span>
                        <h2>Where Microsoft technology fits into the plan</h2>
                        <p className="lede">JJC Systems is a Microsoft-focused consultancy, so most roadmaps we produce involve decisions across the Microsoft stack. Typical questions include:</p>
                    </div>
                    <div className="ms-grid">
                        <article className="ms-card rv"><div className="ico-tile">
                            {/* <svg className="ico"><use href="#i-grid" /></svg> */}
                        </div><h3>Microsoft 365 and licensing</h3><p>Which plans you actually need, and where you're paying for entitlements nobody uses.</p></article>
                        <article className="ms-card rv"><div className="ico-tile">
                            {/* <svg className="ico"><use href="#i-cloud" /></svg> */}
                        </div><h3>Azure</h3><p>What belongs in the cloud, what stays where it is, and how to keep cloud costs predictable.</p></article>
                        <article className="ms-card rv"><div className="ico-tile">
                            {/* <svg className="ico"><use href="#i-apps" /></svg> */}
                        </div><h3>Dynamics 365</h3><p>Whether an older ERP or CRM should be replaced, and when.</p></article>
                        <article className="ms-card rv"><div className="ico-tile">
                            {/* <svg className="ico"><use href="#i-shield" /></svg> */}
                        </div><h3>Security and identity</h3><p>How Microsoft Entra ID, Defender and Purview fit into your risk and compliance goals.</p></article>
                        <article className="ms-card rv"><div className="ico-tile">
                            {/* <svg className="ico"><use href="#i-spark" /></svg> */}
                        </div><h3>Copilot and AI readiness</h3><p>Whether your data, permissions and processes are ready before you roll anything out.</p></article>
                    </div>
                    <p className="ms-note rv"><svg className="ico"><use href="#i-unlock" /></svg>Where a non-Microsoft tool is the better answer, the plan says so.</p>
                </div>
            </section>

            {/* ===================== 6. WHY CHOOSE US ===================== */}
            <section className="section" id="why">
                <div className="wrap">
                    <div className="sec-head rv">
                        <span className="eyebrow">Why JJC Systems</span>
                        <h2>Why organizations choose us for this</h2>
                        <p className="lede">Strategy is easy to sell and hard to hold anyone accountable for. Here's how we make it accountable.</p>
                    </div>
                    <div className="grid-2">
                        {whyUs.items.map((item, index) => (
                            <article className="card rv">
                                <div className="ico-tile">
                                    {/* <svg className="ico"><use href="#i-scale" /></svg> */}
                                    <img
                                        src={item.image}
                                        alt={item.title || "Why JJC Systems"}
                                        loading="lazy"
                                    />
                                </div>
                                <div><h3>We're willing to recommend less</h3><p>Some initiatives don't earn their cost. We'll tell you which, and show the numbers behind the call.</p></div></article>
                        ))}

                        {/* <article className="card rv"><div className="ico-tile">
                        </div><div><h3>Practitioners, not strategists</h3><p>The people shaping your roadmap have implemented Microsoft, managed IT and security work, so plans reflect what delivery really takes.</p></div></article>
                        <article className="card rv"><div className="ico-tile"> */}
                        {/* <svg className="ico"><use href="#i-wrench" /></svg> */}
                        {/* <svg className="ico"><use href="#i-hub" /></svg> */}
                        {/* <svg className="ico"><use href="#i-unlock" /></svg> */}
                        {/* </div><div><h3>Whole-estate view, one accountable partner</h3><p>Infrastructure, security, applications and licensing are looked at together, not in separate reports.</p></div></article>
                        <article className="card rv"><div className="ico-tile">
                        </div><div><h3>Independent on licensing and vendors</h3><p>Our advice isn't tied to selling you a particular product. Where we have a commercial relationship, we say so.</p></div></article> */}
                    </div>
                </div>
            </section>

            {whyUs && whyUs.items?.length > 0 && (
                <section className="section" id="why">
                    <div className="wrap">
                        <div className="sec-head rv">
                            <span className="eyebrow">
                                {whyUs.eyebrow || "Why JJC Systems"}
                            </span>

                            <h2>
                                {whyUs.title || "Why organizations choose us for this"}
                            </h2>

                            <p className="lede">
                                {whyUs.subtitle ||
                                    "Strategy is easy to sell and hard to hold anyone accountable for. Here's how we make it accountable."}
                            </p>
                        </div>

                        <div className="grid-2">
                            {whyUs.items.map((item, index) => (
                                <article className="card rv" key={item._id || index}>

                                    {/* Image */}
                                    {item.image && (
                                        <div className="why-image">
                                            <img
                                                src={item.image}
                                                alt={item.title || "Why JJC Systems"}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    {/* Icon */}
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

            {/* ===================== 6. WHY CHOOSE US ===================== */}
            {whyUs && whyUs.items?.length > 0 && (
                <section className="section bg-navy" id="why-us">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">{"Why JJC Systems" || whyUs.eyebrow}</span>
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

            {/* !-- ===== SECTION 17 · FAQS ===== --> */}

            <section className="sec" id="faq">
                <div className="wrap faq-wrap">
                    <div className="sec-head rv">
                        <span className="eyebrow">FAQs</span>
                        <h2>Frequently asked questions</h2>
                        <p>Can't find your question? <a href="#talk">Ask us directly</a>.</p>
                    </div>
                    <div className="faq rv">
                        <details open><summary>What does an IT strategy consultant do?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>They assess your current technology, work with leadership to understand business goals, and produce a prioritized, costed roadmap. A good consultant also documents the reasoning behind decisions and helps you govern the plan afterwards.</p></details>
                        <details><summary>What's the difference between IT consulting services and IT strategy consulting?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>IT consulting services is the broader category, covering advice on architecture, security, cloud, applications and support. IT strategy consulting is the planning part: deciding what to do, in what order and at what cost. JJC Systems offers both.</p></details>
                        <details><summary>How long does an IT strategy engagement take?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>It depends on the size and complexity of the environment. A focused assessment can be short, while a full roadmap with business cases takes longer. We give you a timeline after a first conversation, and not before.</p></details>
                        {/* <!-- Editor note: confirm pricing approach (e.g. fixed fee per phase) and add it to this answer. --> */}
                        <details><summary>How much does IT strategy consulting cost?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>Cost depends on scope, number of systems and how much stakeholder input is needed. We scope the work after an initial conversation and agree the price before starting.</p></details>
                        <details><summary>Do you only work with Microsoft technology?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>Microsoft is our core focus, including Microsoft 365, Azure and Dynamics 365. Roadmaps cover the whole estate, and we'll recommend other tools where they fit better.</p></details>
                        <details><summary>Is this only for large enterprises?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>No. Mid-sized organizations often get value quickly because spend and priorities are spread across fewer people who are already stretched. The method scales to the size of the estate.</p></details>
                        <details><summary>What will we have at the end?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>A documented current state, a cost baseline, a sequenced roadmap with owners and dependencies, a business case for the major moves, and decision records for key technical choices.</p></details>
                        <details><summary>Can you help deliver the plan too?<span className="pm"><svg className="ico"><use href="#i-plus" /></svg></span></summary><p>Yes. JJC Systems also provides implementation, <a href="/services/managed-it-services">managed IT</a> and <a href="/services/cybersecurity">security services</a>, so you can hand parts of the roadmap to us or to another partner of your choice.</p></details>
                    </div>
                </div>
            </section>
        </main>
    );
}