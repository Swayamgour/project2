import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useGetChecklistsQuery } from "../../redux/api.jsx";
import Loader from "../../components/Loader.jsx";
import HeroSection from "../../components/HeroSection.jsx";

export default function Checklists() {
  const mainRef = useRef(null);
  const navigate = useNavigate();

  useDocumentMeta(
    "Checklists | JJC Systems",
    "Working readiness and audit checklists for Microsoft platforms — tick through them, see a live readiness score, and find out what to do about the gaps."
  );
  usePageEffects(mainRef);

  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [industry, setIndustry] = useState("");
  const [page, setPage] = useState(1);

  // Fetch checklists from API
  const { data: apiData, isLoading, error } = useGetChecklistsQuery({ page, limit: 12 });

  // Extract the checklists array from the API response
  const checklists = apiData?.data || [];
  const pagination = apiData?.pagination;

  const filtered = useMemo(() => {
    return checklists.filter((item) => {
      if (platform && item.platform !== platform) return false;
      if (service && item.service !== service) return false;
      if (industry && item.industry !== industry) return false;
      return true;
    });
  }, [checklists, platform, service, industry]);

  const hasFilters = platform || service || industry;
  const clearFilters = () => {
    setPlatform("");
    setService("");
    setIndustry("");
  };

  // Get unique values for filter counts
  const uniquePlatforms = useMemo(() => {
    const set = new Set(checklists.map(c => c.platform));
    return set.size;
  }, [checklists]);

  const uniqueIndustries = useMemo(() => {
    const set = new Set(checklists.map(c => c.industry));
    return set.size;
  }, [checklists]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Scroll to top of the section
    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <main id="main" ref={mainRef}>
        <section className="svc-hero">
          <div className="wrap">
            <div className="svc-hero-grid">
              <div>
                <h1>Error loading checklists</h1>
                <p>Please try again later.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
    },
  ];

  const hero = {
    eyebrow: "Checklists",

    heading: "Instruments, not reading",

    lede:
      "Every checklist here is meant to be worked through rather than read. Tick the items you can genuinely answer yes to, watch the score, and read what the result means — including when it means you are not ready.",

    primaryCtaText: "Browse the library",
    primaryCtaLink: "#library",

    secondaryCtaText: "Get help implementing",
    secondaryCtaAnchor: "/contact",

    glance: {
      title: "How these work",

      items: [
        `${checklists.length * 20} individual checks across ${checklists.length} checklists`,
        "Tick as you go — a live score shows where you stand",
        "Every item explains why it matters, not just what to check",
        "Score bands say plainly whether to proceed",
        "Print or work through them on screen; nothing is stored",
      ],
    },
  };

  return (
    <main id="main" ref={mainRef}>

      <HeroSection
        hero={hero}
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-paper" id="library">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The library</span>
            <h2 className="h-sec wide">Sorted by most recent</h2>
            <p className="lede">Filter by platform, service area or industry. Filters combine, so you can narrow to a single platform within a single sector.</p>
          </div>

          <div className="filters">
            <div className="frow">
              <b>Platform</b>
              <div className="chips">
                <button
                  type="button"
                  className={"chipf" + (platform === "" ? " is-on" : "")}
                  onClick={() => setPlatform("")}
                  aria-pressed={platform === ""}
                >
                  All
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "business-central" ? " is-on" : "")}
                  onClick={() => setPlatform("business-central")}
                  aria-pressed={platform === "business-central"}
                >
                  Dynamics 365 Business Central
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "d365-sales" ? " is-on" : "")}
                  onClick={() => setPlatform("d365-sales")}
                  aria-pressed={platform === "d365-sales"}
                >
                  Dynamics 365 Sales
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "azure" ? " is-on" : "")}
                  onClick={() => setPlatform("azure")}
                  aria-pressed={platform === "azure"}
                >
                  Azure
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "fabric" ? " is-on" : "")}
                  onClick={() => setPlatform("fabric")}
                  aria-pressed={platform === "fabric"}
                >
                  Microsoft Fabric
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "defender" ? " is-on" : "")}
                  onClick={() => setPlatform("defender")}
                  aria-pressed={platform === "defender"}
                >
                  Microsoft Defender
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "purview" ? " is-on" : "")}
                  onClick={() => setPlatform("purview")}
                  aria-pressed={platform === "purview"}
                >
                  Microsoft Purview
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "power-bi" ? " is-on" : "")}
                  onClick={() => setPlatform("power-bi")}
                  aria-pressed={platform === "power-bi"}
                >
                  Power BI
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "intune" ? " is-on" : "")}
                  onClick={() => setPlatform("intune")}
                  aria-pressed={platform === "intune"}
                >
                  Microsoft Intune
                </button>
                <button
                  type="button"
                  className={"chipf" + (platform === "sharepoint" ? " is-on" : "")}
                  onClick={() => setPlatform("sharepoint")}
                  aria-pressed={platform === "sharepoint"}
                >
                  SharePoint
                </button>
              </div>
            </div>
            <div className="frow">
              <b>Service</b>
              <div className="chips">
                <button
                  type="button"
                  className={"chipf" + (service === "" ? " is-on" : "")}
                  onClick={() => setService("")}
                  aria-pressed={service === ""}
                >
                  All
                </button>
                <button
                  type="button"
                  className={"chipf" + (service === "strategy-transformation" ? " is-on" : "")}
                  onClick={() => setService("strategy-transformation")}
                  aria-pressed={service === "strategy-transformation"}
                >
                  Strategy & Transformation
                </button>
                <button
                  type="button"
                  className={"chipf" + (service === "managed-it-security" ? " is-on" : "")}
                  onClick={() => setService("managed-it-security")}
                  aria-pressed={service === "managed-it-security"}
                >
                  Managed IT & Security
                </button>
                <button
                  type="button"
                  className={"chipf" + (service === "business-applications" ? " is-on" : "")}
                  onClick={() => setService("business-applications")}
                  aria-pressed={service === "business-applications"}
                >
                  Business Applications
                </button>
                <button
                  type="button"
                  className={"chipf" + (service === "data-ai-integration" ? " is-on" : "")}
                  onClick={() => setService("data-ai-integration")}
                  aria-pressed={service === "data-ai-integration"}
                >
                  Data, AI & Integration
                </button>
                <button
                  type="button"
                  className={"chipf" + (service === "modern-work-automation" ? " is-on" : "")}
                  onClick={() => setService("modern-work-automation")}
                  aria-pressed={service === "modern-work-automation"}
                >
                  Modern Work & Automation
                </button>
                <button
                  type="button"
                  className={"chipf" + (service === "talent" ? " is-on" : "")}
                  onClick={() => setService("talent")}
                  aria-pressed={service === "talent"}
                >
                  Talent
                </button>
              </div>
            </div>
            <div className="frow">
              <b>Industry</b>
              <div className="chips">
                <button
                  type="button"
                  className={"chipf" + (industry === "" ? " is-on" : "")}
                  onClick={() => setIndustry("")}
                  aria-pressed={industry === ""}
                >
                  All
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "healthcare" ? " is-on" : "")}
                  onClick={() => setIndustry("healthcare")}
                  aria-pressed={industry === "healthcare"}
                >
                  Healthcare
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "legal" ? " is-on" : "")}
                  onClick={() => setIndustry("legal")}
                  aria-pressed={industry === "legal"}
                >
                  Legal
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "financial-services" ? " is-on" : "")}
                  onClick={() => setIndustry("financial-services")}
                  aria-pressed={industry === "financial-services"}
                >
                  Financial Services
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "public-sector" ? " is-on" : "")}
                  onClick={() => setIndustry("public-sector")}
                  aria-pressed={industry === "public-sector"}
                >
                  Public Sector
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "education" ? " is-on" : "")}
                  onClick={() => setIndustry("education")}
                  aria-pressed={industry === "education"}
                >
                  Education
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "manufacturing" ? " is-on" : "")}
                  onClick={() => setIndustry("manufacturing")}
                  aria-pressed={industry === "manufacturing"}
                >
                  Manufacturing
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "retail-distribution" ? " is-on" : "")}
                  onClick={() => setIndustry("retail-distribution")}
                  aria-pressed={industry === "retail-distribution"}
                >
                  Retail & Distribution
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "construction-field-services" ? " is-on" : "")}
                  onClick={() => setIndustry("construction-field-services")}
                  aria-pressed={industry === "construction-field-services"}
                >
                  Construction & Field Services
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "professional-services" ? " is-on" : "")}
                  onClick={() => setIndustry("professional-services")}
                  aria-pressed={industry === "professional-services"}
                >
                  Professional Services
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "small-mid-market" ? " is-on" : "")}
                  onClick={() => setIndustry("small-mid-market")}
                  aria-pressed={industry === "small-mid-market"}
                >
                  Small & Mid-Market
                </button>
                <button
                  type="button"
                  className={"chipf" + (industry === "nonprofits-associations" ? " is-on" : "")}
                  onClick={() => setIndustry("nonprofits-associations")}
                  aria-pressed={industry === "nonprofits-associations"}
                >
                  Nonprofits & Associations
                </button>
              </div>
            </div>
            <div className="filter-bar-foot">
              <p className="result-count" role="status">
                Showing <b>{filtered.length}</b> of <b>{checklists.length}</b> checklists
              </p>
              {hasFilters && (
                <button className="clear-f" type="button" onClick={clearFilters}>
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          <div className="blog-grid" data-noun="checklist">
            {filtered.map((item) => {
              // Construct the correct icon href
              const iconHref = item.icon ? `#i-${item.icon}` : "#i-docs";
              // Use slug for the href if available
              const href = item.slug ? `/resources/checklists/${item.slug}` : "#";

              return (
                <article className="bpost" key={item._id || item.id || item.title}>
                  <Link className="bimg" to={href} aria-label={item.title}>
                    <svg>
                      <use href={iconHref} />
                    </svg>
                    <span className="plat">{item.platformLabel || item.platform}</span>
                  </Link>
                  <div className="bbody">
                    <div className="bmeta">
                      <span className="tag ind">{item.industryLabel || item.industry}</span>
                      <span className="tag typ">{item.badge || "Readiness"}</span>
                    </div>
                    <h3>
                      <Link to={href}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <div className="bfoot">
                      <span>
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )
                          : "Recent"}{" "}
                        · {item.totalChecks || 20} checks
                      </span>
                      <Link className="link-more" to={href}>
                        Open <svg><use href="#i-arrow-r" /></svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}

            {filtered.length === 0 && (
              <div
                className="no-results"
                style={{
                  gridColumn: "1 / -1",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <p className="lede">
                  No checklists match those filters yet.
                  <button
                    className="clear-f"
                    type="button"
                    onClick={clearFilters}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--primary)",
                      cursor: "pointer",
                      textDecoration: "underline",
                      padding: "0 0.25rem",
                    }}
                  >
                    Clear filters
                  </button>
                  or{" "}
                  <Link className="link-more" to="/contact">
                    talk to our team <svg><use href="#i-arrow-r" /></svg>
                  </Link>{" "}
                  about what you need.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div
              className="pagination"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              {/* Previous button */}
              {pagination.page > 1 && (
                <button
                  type="button"
                  className="chipf"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  aria-label="Previous page"
                >
                  &larr; Prev
                </button>
              )}

              {/* Page numbers */}
              {Array.from(
                { length: pagination.totalPages },
                (_, i) => i + 1
              ).map((pageNum) => {
                // Show current page, first, last, and pages around current
                const isCurrent = pageNum === pagination.page;
                const isFirst = pageNum === 1;
                const isLast = pageNum === pagination.totalPages;
                const isNearCurrent = Math.abs(pageNum - pagination.page) <= 1;

                if (!isFirst && !isLast && !isNearCurrent) {
                  if (pageNum === pagination.page - 2 || pageNum === pagination.page + 2) {
                    return (
                      <span key={pageNum} style={{ padding: "0 0.5rem", alignSelf: "center" }}>
                        …
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={pageNum}
                    type="button"
                    className={"chipf" + (isCurrent ? " is-on" : "")}
                    onClick={() => handlePageChange(pageNum)}
                    aria-pressed={isCurrent}
                    aria-label={`Go to page ${pageNum}`}
                    style={{ minWidth: "2.5rem" }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next button */}
              {pagination.page < pagination.totalPages && (
                <button
                  type="button"
                  className="chipf"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  aria-label="Next page"
                >
                  Next &rarr;
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}