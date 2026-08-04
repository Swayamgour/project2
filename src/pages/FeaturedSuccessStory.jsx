import { useRef, useMemo } from "react";
import usePageEffects from "../hooks/usePageEffects.js";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import HeroSection from "../components/HeroSection.jsx";
// Assume API hook is available, but data for this specific page might be static or fetched differently
// import { useGetCaseStudyQuery } from "../../redux/api.jsx";

export default function FeaturedSuccessStory() {
    const mainRef = useRef(null);
    useDocumentMeta(
        "Featured Success Story | JJC Systems",
        "A public-sector IT provider unified nearly forty siloed systems into one citizen record and resolved 30% of cases at first level within weeks."
    );
    usePageEffects(mainRef);

    // Static data for this specific page, as it's a single featured story.
    // In a real app, you might fetch this based on an ID or slug.
    const storyData = {
        title: "Forty siloed systems into one citizen record",
        description:
            "A regional public-sector IT provider serving municipalities and local authorities replaced a fragmented estate with one citizen relationship management platform — and got a measurable operational result within weeks rather than quarters.",
        stats: [
            { label: "Siloed systems replaced", value: "~40" },
            { label: "Cases resolved at first level", value: "30%" },
            { label: "To measurable result", value: "Weeks" },
            { label: "Citizen record", value: "1" },
        ],
        platforms: [
            "Dynamics 365 Customer Service",
            "Dynamics 365 Contact Center",
            "Power Platform",
            "Copilot Studio",
        ],
        outcomes: [
            "Citizen and employee data unified into one platform and one record",
            "Omnichannel support with case management on a single system",
            "First-level support resolving 30% of citizen cases within weeks of go-live",
            "Language barriers reduced through AI-assisted multilingual handling",
        ],
    };


    const breadcrumbs = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Client Success",
            link: "/success",
        },
        {
            label: "Featured Story",
        },
    ];

    const hero = {
        eyebrow: "Featured success story · Public Sector",

        heading: storyData.title,

        lede: storyData.description,

        primaryCtaText: "Talk to our team",
        primaryCtaLink: "/#contact",

        secondaryCtaText: "Explore all success stories",
        secondaryCtaAnchor: "/success",

        glance: {
            title: "Where these come from",

            items: [
                "Every outcome is sourced from a Microsoft-published case study.",
                "Organization names are withheld; the published figures are unchanged.",
                "These are reference outcomes, not JJC Systems client results.",
                "The full source list with URLs is available on request.",
            ],
        },

        stats: storyData.stats,
    };

    return (
        <main id="main" ref={mainRef}>
            {/* ===================== HERO SECTION ===================== */}
            <HeroSection
                title="Featured success story"
                hero={hero}
                breadcrumbs={breadcrumbs}
            />

            {/* ===================== CONTENT SECTION ===================== */}
            <section className="section bg-paper">
                <div className="wrap" style={{ maxWidth: "900px" }}>
                    <p className="feat-lead">
                        A regional public-sector IT provider serving municipalities replaced
                        nearly forty siloed systems with one citizen record — and within
                        weeks, first-level support was resolving three in ten cases without
                        escalation.
                    </p>

                    <div className="feat-block reveal">
                        <h2>The situation</h2>
                        <p>
                            Nearly forty siloed systems and fragmented data made case
                            management inefficient and prevented any unified, multilingual
                            experience for citizens contacting local authorities.
                        </p>
                        <p>
                            Public-sector IT providers sit in an awkward position. They serve
                            many separate authorities, each with its own processes, its own
                            history of procurement and often its own language preferences.
                            Systems accumulate one decision at a time, and each is defensible
                            on its own terms. What emerges after a decade is an estate nobody
                            designed, where a citizen's question can only be answered by
                            whichever department happens to hold the relevant fragment.
                        </p>
                    </div>

                    <div className="feat-block reveal">
                        <h2>What was done</h2>
                        <p>
                            A centralised citizen relationship management system was built on
                            Dynamics 365 Customer Service and Contact Center with Power
                            Platform, and Copilot Studio agents were created for citizen
                            support, case routing and knowledge management.
                        </p>
                        <p>
                            The decision that mattered was treating this as one platform
                            problem rather than as a series of integrations. Rather than
                            connecting forty systems to each other, the work established a
                            single citizen relationship management layer and moved
                            interactions onto it — which is a larger change to make and a
                            considerably smaller thing to maintain afterwards.
                        </p>
                    </div>

                    <div className="feat-block reveal">
                        <h2>What changed</h2>
                        <ul className="case-out">
                            {storyData.outcomes.map((outcome, index) => (
                                <li key={index}>
                                    <svg><use href="#i-check"></use></svg>
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="feat-block reveal">
                        <h2>Why we chose this one</h2>
                        <p>
                            Most published case studies lead with the technology. This one is
                            interesting because the measurable result — first-level support
                            resolving 30% of cases within weeks — is an operational outcome
                            rather than a technical one, and it arrived quickly enough to be
                            attributable.
                        </p>
                        <p>
                            It also illustrates something we argue about regularly with
                            clients: the constraint was never the individual systems. Each of
                            the forty did its job. The cost was in the space between them,
                            which is exactly the kind of problem that does not show up on any
                            single system's balance sheet and is therefore easy to leave
                            unaddressed for years.
                        </p>
                    </div>

                    <div className="feat-block reveal">
                        <h2>Platforms involved</h2>
                        <div className="case-prod" style={{ marginTop: "14px" }}>
                            {storyData.platforms.map((platform, index) => (
                                <span key={index}>{platform}</span>
                            ))}
                        </div>
                    </div>

                    <div className="prov-note reveal">
                        <svg><use href="#i-check"></use></svg>
                        <p>
                            <b>How to read these:</b> each outcome below is drawn from a case
                            study published by Microsoft on its own customer-story and product
                            sites. Organization names are withheld at our client's request,
                            and the figures are the ones Microsoft published. These are
                            reference outcomes that show what these platforms have delivered
                            elsewhere — they are <b>not</b> JJC Systems client engagements,
                            and we do not present them as our own results. The full source
                            list, including every organization name and URL, is available on
                            request.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================== NUMBERS SECTION ===================== */}
            <section className="section bg-navy">
                <div className="wrap">
                    <div className="sec-head reveal">
                        <span className="eyebrow">The numbers</span>
                        <h2 className="h-sec wide">What was published</h2>
                        <p className="lede">
                            These are the figures as Microsoft reported them. We have not
                            rounded, extrapolated or restated any of them.
                        </p>
                    </div>
                    <div className="metric-grid reveal">
                        <div className="metric">
                            <span className="m-label">Siloed systems replaced</span>
                            <b>~40</b>
                        </div>
                        <div className="metric">
                            <span className="m-label">Of cases resolved at first level</span>
                            <b>30%</b>
                        </div>
                        <div className="metric">
                            <span className="m-label">To first measurable result</span>
                            <b>Weeks</b>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== CTA SECTION ===================== */}
            <section className="section bg-mist">
                <div className="wrap">
                    <div className="cta-band reveal">
                        <div>
                            <h2>Recognise any of this?</h2>
                            <p>
                                Fragmented systems, a citizen or customer who has to repeat
                                themselves, and no single place to see a case. Tell us how your
                                estate is arranged and we will tell you honestly whether
                                consolidation is the right first move or whether something
                                smaller would get you further.
                            </p>
                        </div>
                        <div className="cta-actions">
                            <a className="btn btn-primary" href="/#contact">
                                Talk to our team <svg><use href="#i-arrow-r"></use></svg>
                            </a>
                            <a className="btn btn-ghost" href="/industries">
                                See our industry pages <svg><use href="#i-arrow-r"></use></svg>
                            </a>
                            <small>We reply to every message within one business day.</small>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}