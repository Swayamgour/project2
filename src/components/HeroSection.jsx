import { Link } from "react-router-dom";
import React from 'react'

export default function HeroSection({
    title,
    hero,
    breadcrumbs = [],
}) {
    return (
        <section className="svc-hero">
            <div className="wrap">

                <nav className="crumbs" aria-label="Breadcrumb">
                    {breadcrumbs.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.link ? (
                                <Link to={item.link}>{item.label}</Link>
                            ) : (
                                <b>{item.label}</b>
                            )}

                            {index !== breadcrumbs.length - 1 && (
                                <span className="separator">/</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                <div className="svc-hero-grid">
                    <div>
                        <span className="eyebrow">{hero?.eyebrow}</span>

                        <h1>{hero?.heading}</h1>

                        <p className="lede">{hero?.lede}</p>

                        <div className="svc-cta">
                            <a
                                className="btn btn-primary"
                                href={ "/contact"}
                            >
                                {hero?.primaryCtaText || "Book a consultation"}

                                <svg>
                                    <use href="#i-arrow-r" />
                                </svg>
                            </a>

                            <a
                                className="btn btn-ghost"
                                href={hero?.secondaryCtaAnchor || "#included"}
                            >
                                {hero?.secondaryCtaText || "See what's included"}

                                <svg>
                                    <use href="#i-arrow-r" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <aside className="glance">
                        <h2>{hero?.glance?.title || "At a glance"}</h2>

                        <ul>
                            {hero?.glance?.items?.map((item, index) => (
                                <li key={index}>
                                    <svg>
                                        <use href="#i-check" />
                                    </svg>

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>

                {/* <div className="svc-stats">
                    {hero?.stats?.map((stat, index) => (
                        <div className="svc-stat" key={index}>
                            <b>{stat.value}</b>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div> */}

            </div>
        </section>
    );
}