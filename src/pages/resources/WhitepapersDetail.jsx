import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetWhitepapersBySlugQuery } from '../../redux/api';
import Loader from '../../components/Loader.jsx';

function WhitepapersDetail() {
    const mainRef = useRef(null);
    const { slug } = useParams();
    const { data: apiData, isLoading, error } = useGetWhitepapersBySlugQuery(slug);

    const whitepaper = apiData?.data;
    const related = apiData?.related || [];

    // Get icon href
    const getIconHref = (icon) => {
        if (!icon) return '#i-docs';
        return icon.startsWith('#') ? icon : `#i-${icon}`;
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error || !whitepaper) {
        return (
            <main id="main" ref={mainRef}>
                <section className="svc-hero">
                    <div className="wrap">
                        <div className="svc-hero-grid">
                            <div>
                                <h1>Whitepaper not found</h1>
                                <p>The whitepaper you're looking for doesn't exist or has been moved.</p>
                                <Link className="btn btn-primary" to="/resources/whitepapers">
                                    Browse all whitepapers <svg><use href="#i-arrow-r" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    const hero = whitepaper.hero || {};
    const docMeta = whitepaper.docMeta || {};
    const findings = whitepaper.findings || [];
    const frameworkStages = whitepaper.frameworkStages || [];
    const implications = whitepaper.implications || [];
    const references = whitepaper.references || [];
    const abstractParagraphs = whitepaper.abstractParagraphs || [];

    return (
        <main id="main" ref={mainRef}>
            {/* Hero Section */}
            <section className="svc-hero">
                <div className="wrap">
                    <nav className="crumbs" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/resources">Resources</Link>
                        <span>/</span>
                        <Link to="/resources/whitepapers">Whitepapers</Link>
                        <span>/</span>
                        <b>{whitepaper.platformLabel || whitepaper.platform}</b>
                    </nav>
                    <div className="svc-hero-grid">
                        <div>
                            <span className="eyebrow">
                                {hero.eyebrow || `${whitepaper.platformLabel || whitepaper.platform} · ${whitepaper.industryLabel || whitepaper.industry}`}
                            </span>
                            <h1>{whitepaper.title}</h1>
                            <p className="lede">{whitepaper.description}</p>
                            <div className="svc-cta wp-actions">
                                {whitepaper.ctaPrimary && (
                                    <Link className="btn btn-primary" to={whitepaper.ctaPrimary.link || '/contact'}>
                                        {whitepaper.ctaPrimary.text || 'Discuss this paper'} <svg><use href="#i-arrow-r" /></svg>
                                    </Link>
                                )}
                                {whitepaper.ctaSecondary && (
                                    <a className="btn btn-ghost" href={whitepaper.ctaSecondary.link || '#findings'}>
                                        {whitepaper.ctaSecondary.text || 'Jump to the findings'} <svg><use href="#i-arrow-r" /></svg>
                                    </a>
                                )}
                            </div>
                        </div>
                        <aside className="glance">
                            <h2>In this paper</h2>
                            <ul>
                                <li>
                                    <svg><use href="#i-check" /></svg>
                                    <span>An abstract and {findings.length || 4} numbered findings</span>
                                </li>
                                <li>
                                    <svg><use href="#i-check" /></svg>
                                    <span>Analysis across {whitepaper.analysisBody ? 'multiple' : '3'} sections</span>
                                </li>
                                {whitepaper.frameworkName && (
                                    <li>
                                        <svg><use href="#i-check" /></svg>
                                        <span>A framework you can apply: {whitepaper.frameworkName}</span>
                                    </li>
                                )}
                                <li>
                                    <svg><use href="#i-check" /></svg>
                                    <span>Implications separated by role</span>
                                </li>
                                <li>
                                    <svg><use href="#i-check" /></svg>
                                    <span>{references.length || 5} references to Microsoft documentation</span>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="doc-meta">
                        <div>
                            <b>Published</b>
                            <span>
                                {whitepaper.publishedAt ? new Date(whitepaper.publishedAt).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                }) : 'Recent'}
                            </span>
                        </div>
                        <div>
                            <b>Length</b>
                            <span>
                                {whitepaper.pages || 10} pages
                                {whitepaper.readTime && ` · ${whitepaper.readTime}`}
                            </span>
                        </div>
                        <div>
                            <b>Sector</b>
                            <span>{whitepaper.industryLabel || whitepaper.industry}</span>
                        </div>
                        <div>
                            <b>Platform</b>
                            <span>{whitepaper.platformLabel || whitepaper.platform}</span>
                        </div>
                        <div>
                            <b>Service area</b>
                            <span>{whitepaper.serviceLabel || whitepaper.service}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subnavigation */}
            <nav className="svc-subnav" aria-label="On this page">
                <div className="wrap">
                    {abstractParagraphs.length > 0 && <a href="#abstract">Abstract</a>}
                    {findings.length > 0 && <a href="#findings">Key findings</a>}
                    {whitepaper.analysisBody && <a href="#analysis">Analysis</a>}
                    {whitepaper.frameworkName && <a href="#framework">Framework</a>}
                    {implications.length > 0 && <a href="#implications">Implications</a>}
                    {references.length > 0 && <a href="#references">References</a>}
                    <a className="subnav-cta link-more" href={whitepaper.ctaPrimary?.link || '/contact'}>
                        Discuss it <svg><use href="#i-arrow-r" /></svg>
                    </a>
                </div>
            </nav>

            {/* Abstract Section */}
            {abstractParagraphs.length > 0 && (
                <section className="section bg-paper" id="abstract">
                    <div className="wrap" style={{ maxWidth: '900px' }}>
                        <div className="sec-head reveal">
                            <span className="eyebrow">Abstract</span>
                            <h2 className="h-sec wide">{whitepaper.abstractHeading || whitepaper.title}</h2>
                        </div>
                        <div className="abstract reveal">
                            <h3>Summary</h3>
                            {abstractParagraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Key Findings Section */}
            {findings.length > 0 && (
                <section className="section bg-navy" id="findings">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Key findings</span>
                            <h2 className="h-sec wide">{whitepaper.findingsHeading || 'Four things this paper argues'}</h2>
                            {whitepaper.findingsLede && <p className="lede">{whitepaper.findingsLede}</p>}
                        </div>
                        <div className="finding-list">
                            {findings.map((finding, index) => (
                                <article className="finding reveal" key={index}>
                                    <span className="fn">{String(index + 1).padStart(2, '0')}</span>
                                    <div>
                                        <h3>{finding.title || finding}</h3>
                                        {finding.description && <p>{finding.description}</p>}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Analysis Section */}
            {whitepaper.analysisBody && (
                <section className="section bg-paper" id="analysis">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Analysis</span>
                            <h2 className="h-sec wide">{whitepaper.analysisHeading || 'The argument in full'}</h2>
                        </div>
                        <div className="wp-body" dangerouslySetInnerHTML={{ __html: whitepaper.analysisBody }} />
                    </div>
                </section>
            )}

            {/* Framework Section */}
            {whitepaper.frameworkName && (
                <section className="section bg-mist" id="framework">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Framework</span>
                            <h2 className="h-sec wide">{whitepaper.frameworkHeading || 'Something you can apply without us'}</h2>
                            {whitepaper.frameworkLede && <p className="lede">{whitepaper.frameworkLede}</p>}
                        </div>
                        <div className="fw reveal">
                            <div className="fw-head">
                                <span>Framework</span>
                                <h3>{whitepaper.frameworkName}</h3>
                                {whitepaper.frameworkDescription && <p>{whitepaper.frameworkDescription}</p>}
                            </div>
                            {frameworkStages.length > 0 && (
                                <div className="fw-stages">
                                    {frameworkStages.map((stage, index) => (
                                        <div className="fw-stage" key={index}>
                                            <span className="sn">{index + 1}</span>
                                            <h4>{stage.title}</h4>
                                            <p>{stage.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Implications Section */}
            {implications.length > 0 && (
                <section className="section bg-paper" id="implications">
                    <div className="wrap">
                        <div className="sec-head reveal">
                            <span className="eyebrow">Implications</span>
                            <h2 className="h-sec wide">{whitepaper.implicationsHeading || 'What this means, depending on your seat'}</h2>
                            {whitepaper.implicationsLede && <p className="lede">{whitepaper.implicationsLede}</p>}
                        </div>
                        <div className="impl-grid">
                            {implications.map((impl, index) => (
                                <article className="impl reveal" key={index}>
                                    <span className="role">{impl.role}</span>
                                    <p>{impl.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* References Section */}
            {references.length > 0 && (
                <section className="section bg-mist" id="references">
                    <div className="wrap" style={{ maxWidth: '900px' }}>
                        <div className="sec-head reveal">
                            <span className="eyebrow">References</span>
                            <h2 className="h-sec wide">{whitepaper.referencesHeading || 'Where to check this for yourself'}</h2>
                            {whitepaper.referencesLede && <p className="lede">{whitepaper.referencesLede}</p>}
                        </div>
                        <div className="refs">
                            {references.map((ref, index) => (
                                <div className="ref" key={index}>
                                    <span className="rn">{String(index + 1).padStart(2, '0')}</span>
                                    <div>
                                        <b>{ref.title}</b>
                                        <span>{ref.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {whitepaper.referencesNote && (
                            <p className="ref-note">{whitepaper.referencesNote}</p>
                        )}
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="section bg-paper">
                <div className="wrap">
                    {(whitepaper.ctaHeading || whitepaper.ctaText || whitepaper.ctaBandPrimary) && (
                        <div className="cta-band reveal">
                            <div>
                                {whitepaper.ctaHeading && <h2>{whitepaper.ctaHeading}</h2>}
                                {whitepaper.ctaText && <p>{whitepaper.ctaText}</p>}
                            </div>
                            <div className="cta-actions">
                                {whitepaper.ctaBandPrimary && (
                                    <Link className="btn btn-primary" to={whitepaper.ctaBandPrimary.link || '/contact'}>
                                        {whitepaper.ctaBandPrimary.text || 'Discuss this paper'} <svg><use href="#i-arrow-r" /></svg>
                                    </Link>
                                )}
                                {whitepaper.ctaBandSecondary && (
                                    <Link className="btn btn-ghost" to={whitepaper.ctaBandSecondary.link || '/checklists'}>
                                        {whitepaper.ctaBandSecondary.text || 'Run the related checklist'} <svg><use href="#i-arrow-r" /></svg>
                                    </Link>
                                )}
                                <small>We reply to every message within one business day.</small>
                            </div>
                        </div>
                    )}

                    {/* Related Whitepapers */}
                    {related.length > 0 && (
                        <>
                            <div className="sec-head reveal" style={{ marginTop: 'clamp(52px,7vw,86px)' }}>
                                <span className="eyebrow">Keep reading</span>
                                <h2 className="h-sec wide">Related papers</h2>
                            </div>
                            <div className="rel-posts">
                                {related.map((item) => {
                                    const href = item.slug ? `/resources/whitepapers/${item.slug}` : '#';
                                    const metaParts = [];
                                    if (item.publishedAt) {
                                        metaParts.push(
                                            new Date(item.publishedAt).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })
                                        );
                                    }
                                    if (item.pages) {
                                        metaParts.push(`${item.pages} pages`);
                                    }
                                    if (item.readTime) {
                                        metaParts.push(item.readTime);
                                    }
                                    const metaString = metaParts.join(' · ') || 'Recent';

                                    return (
                                        <article className="bpost" key={item._id || item.id || item.title}>
                                            <Link className="bimg" to={href} aria-label={item.title}>
                                                <svg><use href={getIconHref(item.icon)} /></svg>
                                                <span className="plat">{item.platformLabel || item.platform}</span>
                                            </Link>
                                            <div className="bbody">
                                                <div className="bmeta">
                                                    <span className="tag ind">{item.industryLabel || item.industry}</span>
                                                    <span className="tag typ">{item.pages || 10} pages</span>
                                                </div>
                                                <h3><Link to={href}>{item.title}</Link></h3>
                                                <p>{item.description}</p>
                                                <div className="bfoot">
                                                    <span>{metaString}</span>
                                                    <Link className="link-more" to={href}>
                                                        Read <svg><use href="#i-arrow-r" /></svg>
                                                    </Link>
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

export default WhitepapersDetail;