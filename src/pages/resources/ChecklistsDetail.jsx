import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetChecklistsBySlugQuery } from '../../redux/api';
import useDocumentMeta from '../../hooks/useDocumentMeta.js';
import Loader from '../../components/Loader.jsx';
import HeroSection from '../../components/HeroSection.jsx';

function ChecklistDetail() {
    const [checkedItems, setCheckedItems] = useState({});
    const [totalItems, setTotalItems] = useState(0);
    const mainRef = useRef(null);

    const { slug } = useParams();
    const { data: apiData, isLoading, error } = useGetChecklistsBySlugQuery(slug);

    const checklist = apiData?.data;
    const related = apiData?.related || [];

    useDocumentMeta(
        checklist?.seo?.metaTitle || (checklist?.title ? `${checklist.title} | JJC Systems Checklists` : "JJC Systems Checklists"),
        checklist?.seo?.metaDescription || checklist?.description || "",
        {
            keywords: checklist?.seo?.keywords,
            canonicalUrl: checklist?.seo?.canonicalUrl,
            ogImage: checklist?.seo?.ogImage,
        }
    );

    // Get all checklist items from sections
    const getAllItems = () => {
        if (!checklist?.sections) return [];
        const items = [];
        checklist.sections.forEach(section => {
            if (section.items) {
                section.items.forEach(item => {
                    items.push({
                        ...item,
                        sectionTitle: section.title,
                        sectionOrder: section.order
                    });
                });
            }
        });
        return items;
    };

    const allItems = getAllItems();

    // Initialize checked state
    useEffect(() => {
        if (allItems.length > 0) {
            const initialChecked = {};
            allItems.forEach((item, index) => {
                initialChecked[index] = false;
            });
            setCheckedItems(initialChecked);
            setTotalItems(allItems.length);
        }
    }, [allItems]);

    const handleCheckboxChange = (index) => {
        setCheckedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleTickAll = () => {
        const allChecked = {};
        allItems.forEach((_, index) => {
            allChecked[index] = true;
        });
        setCheckedItems(allChecked);
    };

    const handleReset = () => {
        const allUnchecked = {};
        allItems.forEach((_, index) => {
            allUnchecked[index] = false;
        });
        setCheckedItems(allUnchecked);
    };

    const handlePrint = () => {
        window.print();
    };

    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

    // Get score band
    const getScoreBand = (percent) => {
        if (percent <= 59) return { label: 'Significant gaps', description: 'Do not proceed yet. More than four in ten items are unaddressed, and the ones that fail here are usually the foundational ones that make everything after them harder.' };
        if (percent <= 84) return { label: 'Mostly ready, with known gaps', description: 'Proceed on a defined scope, with the outstanding items written into the plan as risks with owners and dates. This is the most common honest position.' };
        return { label: 'Ready', description: 'The remaining gaps are small enough to handle during delivery rather than before it. Confirm the unticked items are genuinely minor rather than simply unexamined.' };
    };

    const scoreBand = getScoreBand(percentage);

    // Get icon href
    const getIconHref = (icon) => {
        if (!icon) return '#i-docs';
        return icon.startsWith('#') ? icon : `#i-${icon}`;
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error || !checklist) {
        return (
            <main id="main" ref={mainRef}>
                <section className="svc-hero">
                    <div className="wrap">
                        <div className="svc-hero-grid">
                            <div>
                                <h1>Checklist not found</h1>
                                <p>The checklist you're looking for doesn't exist or has been moved.</p>
                                <Link className="btn btn-primary" to="/resources/checklists">Browse all checklists <svg><use href="#i-arrow-r" /></svg></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    const hero = checklist.hero || {};
    const stats = checklist.stats || {};

    const breadcrumbs = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Resources",
            link: "/resources",
        },
        {
            label: "Checklists",
            link: "/resources/checklists",
        },
        {
            label: checklist.platformLabel || checklist.platform,
        },
    ];

    const hero1 = {
        eyebrow:
            hero?.eyebrow ||
            `${checklist.platformLabel || checklist.platform} · ${checklist.badge || "Readiness"
            }`,

        heading: checklist.title,

        lede: checklist.description,

        primaryCtaText:
            checklist.ctaPrimary?.text || "Start the checklist",

        primaryCtaLink:
            checklist.ctaPrimary?.link || "#checklist",

        secondaryCtaText:
            checklist.ctaSecondary?.text ||
            "Get help with the gaps",

        secondaryCtaAnchor:
            checklist.ctaSecondary?.link || "/contact",

        glance: {
            title: "Before you start",

            items:
                checklist.beforeYouStart ||
                hero.beforeYouStart || [
                    `${totalItems} checks across ${checklist.sections?.length || 0
                    } sections`,
                    stats.typicalEffort ||
                    checklist.typicalEffort ||
                    "Varies",
                    "Tick only what you can genuinely evidence, not what you intend",
                    "Nothing you tick is saved or sent anywhere",
                ],
        },
    };

    return (
        <main id="main" ref={mainRef}>
            {/* Hero Section */}
            <HeroSection
                hero={hero1}
                breadcrumbs={breadcrumbs}
            />

            {/* Subnavigation */}
            <nav className="svc-subnav" aria-label="On this page">
                <div className="wrap">
                    {checklist.whyParagraphs && checklist.whyParagraphs.length > 0 && <a href="#why">Why</a>}
                    {checklist.sections && checklist.sections.length > 0 && <a href="#checklist">The checklist</a>}
                    {checklist.scoreBands && checklist.scoreBands.length > 0 && <a href="#score">What your score means</a>}
                    {checklist.gapCards && checklist.gapCards.length > 0 && <a href="#gaps">Closing the gaps</a>}
                    <a className="subnav-cta link-more" href={checklist.ctaBandPrimary?.link || checklist.ctaPrimary?.link || '/contact'}>
                        Get help <svg><use href="#i-arrow-r" /></svg>
                    </a>
                </div>
            </nav>

            {/* Why Section */}
            {checklist.whyParagraphs && checklist.whyParagraphs.length > 0 && (
                <section className="section bg-paper" id="why">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Why run this</span>
                            <h2 className="h-sec wide">{checklist.whyHeading || 'What this checklist is for'}</h2>
                        </div>
                        <div className="art" style={{ maxWidth: '820px' }}>
                            {checklist.whyParagraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {checklist.runWith && checklist.runWith.length > 0 && (
                            <div className="ck-who reveal">
                                {checklist.runWith.map((item, index) => (
                                    <div key={index}>
                                        <h4>{item.label}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Progress Bar */}
            {allItems.length > 0 && (
                <div className="ck-progress" id="ckProgress">
                    <div className="wrap">
                        <span className="ck-count" id="ckCount">
                            <b>{checkedCount}</b> of <b>{totalItems}</b> complete · {percentage}%
                        </span>
                        <span className="ck-bar">
                            <span id="ckBar" style={{ width: `${percentage}%` }}></span>
                        </span>
                        <span className="ck-actions">
                            <button className="ck-btn" id="ckAll" type="button" onClick={handleTickAll}>Tick all</button>
                            <button className="ck-btn" id="ckReset" type="button" onClick={handleReset}>Reset</button>
                            <button className="ck-btn" id="ckPrint" type="button" onClick={handlePrint}>Print</button>
                        </span>
                    </div>
                </div>
            )}

            {/* Checklist Section */}
            {checklist.sections && checklist.sections.length > 0 && (
                <section className="section bg-paper" id="checklist">
                    <div className="wrap" style={{ maxWidth: '900px' }}>
                        <div className="sec-head reveal">
                            <span className="eyebrow">The checklist</span>
                            <h2 className="h-sec wide">{checklist.checklistHeading || '20 checks, in the order we would run them'}</h2>
                            {checklist.checklistLede && <p className="lede">{checklist.checklistLede}</p>}
                        </div>
                        <div id="ckRoot">
                            {checklist.sections.map((section, sectionIndex) => {
                                // Get the starting index for this section
                                let startIndex = 0;
                                for (let i = 0; i < sectionIndex; i++) {
                                    startIndex += checklist.sections[i].items?.length || 0;
                                }

                                return (
                                    <section className="ck-sec reveal" key={section._id || sectionIndex}>
                                        <div className="ck-sec-head">
                                            <span className="n">Section {section.order || sectionIndex + 1}</span>
                                            <h3>{section.title}</h3>
                                            {section.description && <p>{section.description}</p>}
                                        </div>
                                        <ul className="ck-list">
                                            {section.items && section.items.map((item, itemIndex) => {
                                                const globalIndex = startIndex + itemIndex;
                                                return (
                                                    <li className="ck-item" key={item._id || itemIndex}>
                                                        <label htmlFor={`ck-${globalIndex}`}>
                                                            <input
                                                                type="checkbox"
                                                                id={`ck-${globalIndex}`}
                                                                checked={checkedItems[globalIndex] || false}
                                                                onChange={() => handleCheckboxChange(globalIndex)}
                                                            />
                                                            <span className="ck-txt">
                                                                <b>{item.label}</b>
                                                                <span>{item.note}</span>
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </section>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Score Section */}
            {checklist.scoreBands && checklist.scoreBands.length > 0 && (
                <section className="section bg-navy" id="score">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">What your score means</span>
                            <h2 className="h-sec wide">{checklist.scoreHeading || 'Read this against the number above'}</h2>
                            {checklist.scoreLede && <p className="lede">{checklist.scoreLede}</p>}
                        </div>
                        <div className="band-grid reveal">
                            {checklist.scoreBands.map((band, index) => (
                                <div
                                    className="band"
                                    key={index}
                                    data-min={band.min}
                                    data-max={band.max}
                                    // style={{
                                    //     borderColor: percentage >= band.min && percentage <= band.max ? 'var(--primary)' : 'transparent',
                                    //     borderWidth: '2px',
                                    //     borderStyle: 'solid'
                                    // }}
                                >
                                    <span className="rng">{band.min}–{band.max}%</span>
                                    <b>{band.label}</b>
                                    <p>{band.description}</p>
                                </div>
                            ))}
                        </div>
                        {checklist.scoreNote && <p className="band-note">{checklist.scoreNote}</p>}
                    </div>
                </section>
            )}

            {/* Gaps Section */}
            {checklist.gapCards && checklist.gapCards.length > 0 && (
                <section className="section bg-paper" id="gaps">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Closing the gaps</span>
                            <h2 className="h-sec wide">{checklist.gapsHeading || 'If you could not tick these, start here'}</h2>
                            {checklist.gapsLede && <p className="lede">{checklist.gapsLede}</p>}
                        </div>
                        <div className="gap-grid">
                            {checklist.gapCards.map((gap, index) => (
                                <article className="gap reveal" key={gap._id || index}>
                                    <span className="gi">
                                        <svg><use href={getIconHref(gap.icon)} /></svg>
                                    </span>
                                    <div>
                                        <h3>{gap.title}</h3>
                                        <p>{gap.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="section bg-mist">
                <div className="wrap">
                    {(checklist.ctaHeading || checklist.ctaText || checklist.ctaBandPrimary) && (
                        <div className="cta-band reveal">
                            <div>
                                {checklist.ctaHeading && <h2>{checklist.ctaHeading}</h2>}
                                {checklist.ctaText && <p>{checklist.ctaText}</p>}
                            </div>
                            <div className="cta-actions">
                                {checklist.ctaBandPrimary && (
                                    <Link className="btn btn-primary" to={checklist.ctaBandPrimary.link || '/contact'}>
                                        {checklist.ctaBandPrimary.text || 'Talk through your result'} <svg><use href="#i-arrow-r" /></svg>
                                    </Link>
                                )}
                                {checklist.ctaBandSecondary && (
                                    <Link className="btn btn-ghost" to={checklist.ctaBandSecondary.link || '/guides'}>
                                        {checklist.ctaBandSecondary.text || 'Read the related guides'} <svg><use href="#i-arrow-r" /></svg>
                                    </Link>
                                )}
                                <small>We reply to every message within one business day.</small>
                            </div>
                        </div>
                    )}

                    {/* Related Checklists */}
                    {related.length > 0 && (
                        <>
                            <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
                                <span className="eyebrow">Keep going</span>
                                <h2 className="h-sec wide">Related checklists</h2>
                            </div>
                            <div className="rel-posts">
                                {related.map((item) => (
                                    <article className="bpost" key={item._id || item.id}>
                                        <Link className="bimg" to={`/resources/checklists/${item.slug}`} aria-label={item.title}>
                                            <svg><use href={getIconHref(item.icon)} /></svg>
                                            <span className="plat">{item.platformLabel || item.platform}</span>
                                        </Link>
                                        <div className="bbody">
                                            <div className="bmeta">
                                                <span className="tag ind">{item.industryLabel || item.industry}</span>
                                                <span className="tag typ">{item.badge || 'Readiness'}</span>
                                            </div>
                                            <h3><Link to={`/resources/checklists/${item.slug}`}>{item.title}</Link></h3>
                                            <p>{item.description}</p>
                                            <div className="bfoot">
                                                <span>
                                                    {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-US', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    }) : 'Recent'} · {item.totalChecks || 20} checks
                                                </span>
                                                <Link className="link-more" to={`/resources/checklists/${item.slug}`}>
                                                    Open <svg><use href="#i-arrow-r" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default ChecklistDetail;