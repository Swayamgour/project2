import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useGetWhitepapersQuery } from '../../redux/api.jsx';
import Loader from "../../components/Loader.jsx";

export default function Whitepapers() {
  const mainRef = useRef(null);

  // Fetch whitepapers from API
  const { data: apiData, isLoading, error } = useGetWhitepapersQuery();

  // Extract the whitepapers array from the API response
  const whitepapers = apiData?.data || [];
  const pagination = apiData?.pagination;

  useDocumentMeta(
    "Whitepapers | JJC Systems",
    "Long-form research on Microsoft platforms and the industries that run on them — a thesis, evidence, an applicable framework, and references to Microsoft documentation."
  );
  usePageEffects(mainRef);

  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [industry, setIndustry] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return whitepapers.filter((item) => {
      if (platform && item.platform !== platform) return false;
      if (service && item.service !== service) return false;
      if (industry && item.industry !== industry) return false;
      return true;
    });
  }, [whitepapers, platform, service, industry]);

  const hasFilters = platform || service || industry;
  const clearFilters = () => {
    setPlatform("");
    setService("");
    setIndustry("");
  };

  // Get unique values for filter counts
  const uniquePlatforms = useMemo(() => {
    const set = new Set(whitepapers.map((c) => c.platform));
    return set.size;
  }, [whitepapers]);

  const uniqueIndustries = useMemo(() => {
    const set = new Set(whitepapers.map((c) => c.industry));
    return set.size;
  }, [whitepapers]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate total references (estimate based on papers)
  const totalReferences = whitepapers.length * 5;

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
                <h1>Error loading whitepapers</h1>
                <p>Please try again later.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Get icon href
  const getIconHref = (icon) => {
    if (!icon) return "#i-docs";
    return icon.startsWith("#") ? icon : `#i-${icon}`;
  };

  return (
    <main id="main" ref={mainRef}>
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/resources">Resources</Link>
            <span>/</span>
            <b>Whitepapers</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Whitepapers</span>
              <h1>Arguments worth circulating</h1>
              <p className="lede">
                Each paper takes a position, sets out the evidence for it, and
                offers a framework you can apply. They open with an abstract and
                numbered findings so a busy reader gets the argument in two
                minutes, and they close with references to Microsoft's own
                documentation so you can check the basis for yourself.
              </p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#library">
                  Browse the library <svg><use href="#i-arrow-r" /></svg>
                </a>
                <Link className="btn btn-ghost" to="/contact">
                  Get help implementing <svg><use href="#i-arrow-r" /></svg>
                </Link>
              </div>
            </div>
            <aside className="glance">
              <h2>How these are written</h2>
              <ul>
                <li>
                  <svg><use href="#i-check" /></svg>
                  <span>An abstract and four numbered findings, for the two-minute read</span>
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  <span>A named framework you can apply without us</span>
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  <span>Implications separated by role, because the argument differs</span>
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  <span>{totalReferences} references to Microsoft documentation across the library</span>
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  <span>Written to be printed and circulated, not only read on screen</span>
                </li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat">
              <b>{whitepapers.length}</b>
              <span>Papers published</span>
            </div>
            <div className="svc-stat">
              <b>{totalReferences}</b>
              <span>Documentation references</span>
            </div>
            <div className="svc-stat">
              <b>{uniquePlatforms}</b>
              <span>Platforms covered</span>
            </div>
            <div className="svc-stat">
              <b>{uniqueIndustries}</b>
              <span>Industries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper" id="library">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The library</span>
            <h2 className="h-sec wide">Sorted by most recent</h2>
            <p className="lede">
              Filter by platform, service area or industry. Filters combine, so
              you can narrow to a single platform within a single sector.
            </p>
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
                Showing <b>{filtered.length}</b> of <b>{whitepapers.length}</b>{" "}
                whitepapers
              </p>
              {hasFilters && (
                <button className="clear-f" type="button" onClick={clearFilters}>
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          <div className="blog-grid" data-noun="whitepaper">
            {filtered.map((item) => {
              // Use slug for the href if available
              const href = item.slug
                ? `/resources/whitepapers/${item.slug}`
                : "/contact";
              // Format the meta display
              const metaParts = [];
              if (item.publishedAt) {
                metaParts.push(
                  new Date(item.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                );
              }
              if (item.pages) {
                metaParts.push(`${item.pages} pages`);
              }
              if (item.readTime) {
                metaParts.push(item.readTime);
              }
              const metaString = metaParts.join(" · ") || "Recent";

              return (
                <article className="bpost" key={item._id || item.id || item.title}>
                  <Link className="bimg" to={href} aria-label={item.title}>
                    <svg>
                      <use href={getIconHref(item.icon)} />
                    </svg>
                    <span className="plat">{item.platformLabel || item.platform}</span>
                  </Link>
                  <div className="bbody">
                    <div className="bmeta">
                      <span className="tag ind">
                        {item.industryLabel || item.industry}
                      </span>
                      <span className="tag typ">
                        {item.badge || `${item.pages || 10} pages`}
                      </span>
                    </div>
                    <h3>
                      <Link to={href}>{item.title}</Link>
                    </h3>
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
                  No whitepapers match those filters yet.
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
                const isCurrent = pageNum === pagination.page;
                const isFirst = pageNum === 1;
                const isLast = pageNum === pagination.totalPages;
                const isNearCurrent = Math.abs(pageNum - pagination.page) <= 1;

                if (!isFirst && !isLast && !isNearCurrent) {
                  if (pageNum === pagination.page - 2 || pageNum === pagination.page + 2) {
                    return (
                      <span
                        key={pageNum}
                        style={{ padding: "0 0.5rem", alignSelf: "center" }}
                      >
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