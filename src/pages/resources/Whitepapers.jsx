import { useMemo, useRef, useState } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const WHITEPAPERS_DATA = [
  { platform: "business-central", service: "business-applications", industry: "manufacturing", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Manufacturing", badge: "14 pages", title: "The cost of deferring an ERP decision", desc: "Deferral is a decision with a running cost. This paper quantifies where that cost accumulates and offers a framework for deciding whether to defer again.", meta: "26 July 2026 · 15 min read" },
  { platform: "purview", service: "managed-it-security", industry: "healthcare", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Healthcare", badge: "16 pages", title: "Information governance as an AI prerequisite", desc: "An examination of why AI deployments in provider organizations pause, and what the sequencing should be instead.", meta: "19 July 2026 · 17 min read" },
  { platform: "fabric", service: "data-ai-integration", industry: "financial-services", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Financial Services", badge: "18 pages", title: "One version of the truth: what it costs and what it is worth", desc: "Consolidation projects are usually justified on efficiency and delivered on hope. This paper examines where the value actually is and what the honest cost looks like.", meta: "12 July 2026 · 19 min read" },
  { platform: "defender", service: "managed-it-security", industry: "small-mid-market", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Small & Mid-Market", badge: "13 pages", title: "The insurability of the mid-market", desc: "Insurers have quietly become the most effective security auditors in the mid-market. This paper examines what they ask, why, and what it means for how you prioritise.", meta: "5 July 2026 · 14 min read" },
  { platform: "azure", service: "strategy-transformation", industry: "public-sector", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Public Sector", badge: "15 pages", title: "Cloud economics in the public sector", desc: "Public cloud programmes fail at procurement and governance far more often than at technical migration. This paper examines why and proposes a procurement approach that survives review.", meta: "28 June 2026 · 16 min read" },
  { platform: "d365-sales", service: "business-applications", industry: "professional-services", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Professional Services", badge: "13 pages", title: "Pipeline as a resourcing instrument", desc: "In a services firm, pipeline is a resource demand forecast. Treating it only as a revenue forecast is why delivery cannot meet the dates sales commits to.", meta: "21 June 2026 · 14 min read" },
  { platform: "sharepoint", service: "modern-work-automation", industry: "legal", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Legal", badge: "15 pages", title: "Knowledge management and the ethical wall", desc: "Most firms have a conflicts policy and a matter site structure. Very few have tested whether the wall exists anywhere other than in the site.", meta: "14 June 2026 · 16 min read" },
  { platform: "power-bi", service: "data-ai-integration", industry: "professional-services", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Professional Services", badge: "10 pages", title: "The economics of one point of utilization", desc: "Before evaluating any system, do this calculation. It usually settles the investment question faster than a vendor business case.", meta: "7 June 2026 · 11 min read" },
  { platform: "intune", service: "managed-it-security", industry: "education", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Education", badge: "14 pages", title: "The endpoint estate in a federated institution", desc: "Institutions typically have less endpoint coverage than they believe, concentrated in devices owned by departments rather than by central IT.", meta: "31 May 2026 · 15 min read" },
  { platform: "business-central", service: "business-applications", industry: "retail-distribution", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Retail & Distribution", badge: "12 pages", title: "Inventory accuracy as a working capital instrument", desc: "Inventory accuracy is treated as a warehouse metric. It is a planning input, and the buffer carried to compensate for it is working capital.", meta: "24 May 2026 · 13 min read" },
  { platform: "azure", service: "strategy-transformation", industry: "healthcare", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Healthcare", badge: "16 pages", title: "Building for AI on regulated infrastructure", desc: "An estate designed for hosting usually needs rework before it can support AI workloads safely. This paper sets out what changes and why designing for it now is cheaper.", meta: "17 May 2026 · 17 min read" },
  { platform: "purview", service: "managed-it-security", industry: "public-sector", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Public Sector", badge: "13 pages", title: "The cost of keeping everything", desc: "Most agencies have a documented retention schedule and delete nothing. The bill arrives with the next records request.", meta: "10 May 2026 · 14 min read" },
  { platform: "fabric", service: "data-ai-integration", industry: "healthcare", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Healthcare", badge: "15 pages", title: "Service line economics and the allocation problem", desc: "The annual service line dispute is not an arithmetic problem. It is a participation problem, and it has a structural solution.", meta: "3 May 2026 · 16 min read" },
  { platform: "defender", service: "managed-it-security", industry: "manufacturing", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Manufacturing", badge: "14 pages", title: "Operational continuity as a security objective", desc: "Ask a manufacturing executive what a security incident would cost and the answer involves stolen designs. Ask what a week of stopped production would cost and the number is immediate and much larger.", meta: "26 April 2026 · 15 min read" },
  { platform: "power-bi", service: "data-ai-integration", industry: "retail-distribution", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Retail & Distribution", badge: "13 pages", title: "Cost to serve and the customer portfolio", desc: "Every distributor can rank customers by revenue and margin. Almost none can rank them by what it costs to serve them, which is the ranking commercial decisions should use.", meta: "19 April 2026 · 14 min read" },
  { platform: "azure", service: "strategy-transformation", industry: "manufacturing", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Manufacturing", badge: "15 pages", title: "The edge-to-cloud architecture decision", desc: "Architectures that assume connectivity fail in exactly the places manufacturers need them most. This paper examines the design decision and the failure nobody plans for.", meta: "12 April 2026 · 16 min read" },
  { platform: "sharepoint", service: "modern-work-automation", industry: "nonprofits-associations", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Nonprofits & Associations", badge: "12 pages", title: "The overhead ratio and the cost of information work", desc: "Grant reporting is slow because evidence is assembled afterwards rather than captured as work happens. That is a design decision, not a resourcing problem.", meta: "5 April 2026 · 13 min read" },
  { platform: "d365-sales", service: "business-applications", industry: "financial-services", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Financial Services", badge: "13 pages", title: "Relationship banking in a product-centric system", desc: "Your core system knows about a checking account, a mortgage and a commercial loan. It does not know they belong to the same household.", meta: "29 March 2026 · 14 min read" },
  { platform: "power-bi", service: "data-ai-integration", industry: "construction-field-services", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Construction & Field Services", badge: "12 pages", title: "Project margin visibility and the timing problem", desc: "Contracting margin is not lost at close-out. It is lost during delivery and discovered at close-out, which is a timing problem rather than a reporting one.", meta: "22 March 2026 · 13 min read" },
  { platform: "purview", service: "managed-it-security", industry: "financial-services", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Financial Services", badge: "14 pages", title: "Evidence in the flow of work", desc: "The decisions were made properly. The evidence just was not captured at the time, so it has to be reconstructed.", meta: "15 March 2026 · 15 min read" },
  { platform: "fabric", service: "data-ai-integration", industry: "education", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Education", badge: "14 pages", title: "Student data and the institutional decision", desc: "The pattern that predicts withdrawal is visible in hindsight in almost every case. The question is whether anybody saw it while there was still time.", meta: "8 March 2026 · 15 min read" },
  { platform: "intune", service: "managed-it-security", industry: "construction-field-services", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Construction & Field Services", badge: "12 pages", title: "The field workforce technology gap", desc: "A control that depends on crews behaving differently from how they demonstrably behave is not a control.", meta: "1 March 2026 · 13 min read" },
  { platform: "business-central", service: "business-applications", industry: "small-mid-market", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Small & Mid-Market", badge: "11 pages", title: "The mid-market ERP decision", desc: "Nobody outgrows their accounting package on a particular Tuesday. It happens through a series of individually sensible workarounds until the workarounds are the process.", meta: "22 February 2026 · 12 min read" },
  { platform: "defender", service: "managed-it-security", industry: "public-sector", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Public Sector", badge: "13 pages", title: "Third-party risk in public supply chains", desc: "Public sector organizations work with many suppliers, and each one that reaches your systems extends the attack surface into an organization whose security you do not control.", meta: "15 February 2026 · 14 min read" },
  { platform: "azure", service: "strategy-transformation", industry: "legal", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Legal", badge: "13 pages", title: "Data sovereignty and the professional obligation", desc: "For a firm holding client confidences across jurisdictions, residency is a professional obligation before it is a technical constraint.", meta: "8 February 2026 · 14 min read" },
  { platform: "intune", service: "managed-it-security", industry: "legal", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Legal", badge: "11 pages", title: "Confidentiality on devices you do not control", desc: "A control that depends on partners behaving differently from how they demonstrably behave is not a control — and in a negligence context it is worse than none.", meta: "1 February 2026 · 12 min read" },
  { platform: "fabric", service: "data-ai-integration", industry: "nonprofits-associations", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Nonprofits & Associations", badge: "12 pages", title: "Outcome measurement as a funding instrument", desc: "A programme can report that it delivered four thousand meals. The question funders now ask is what changed for the people who ate them.", meta: "25 January 2026 · 13 min read" },
  { platform: "power-bi", service: "data-ai-integration", industry: "nonprofits-associations", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Nonprofits & Associations", badge: "11 pages", title: "Transparency and the funding relationship", desc: "Publishing a spending file satisfies an obligation. It does not make spending legible, and legibility is what actually builds funder confidence.", meta: "18 January 2026 · 12 min read" },
  { platform: "intune", service: "talent", industry: "small-mid-market", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Small & Mid-Market", badge: "11 pages", title: "Build or buy the IT function", desc: "The instinct is to hire. It is not always right, and the reasoning matters more than the conclusion.", meta: "11 January 2026 · 12 min read" },
  { platform: "sharepoint", service: "modern-work-automation", industry: "small-mid-market", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Small & Mid-Market", badge: "10 pages", title: "The cost of not finding things", desc: "The cost is invisible because it is distributed: a few minutes per person per day looking for things, and nobody adds it up.", meta: "4 January 2026 · 11 min read" },
  { platform: "purview", service: "managed-it-security", industry: "professional-services", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Professional Services", badge: "12 pages", title: "Client confidentiality at scale", desc: "Professional services firms are increasingly losing time at procurement rather than at pitch, and the reason is a document nobody owns internally.", meta: "28 December 2025 · 13 min read" },
  { platform: "d365-sales", service: "business-applications", industry: "education", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Education", badge: "12 pages", title: "The economics of the enrolment funnel", desc: "The students who disappear between deposit and registration had already chosen you. Something in the following weeks made the decision reversible again.", meta: "21 December 2025 · 13 min read" },
  { platform: "d365-sales", service: "business-applications", industry: "retail-distribution", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Retail & Distribution", badge: "12 pages", title: "The quote-to-cash chain", desc: "Improvements to picking and replenishment help. They cannot repair a commitment that was wrong when it was given.", meta: "14 December 2025 · 13 min read" },
  { platform: "sharepoint", service: "modern-work-automation", industry: "construction-field-services", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Construction & Field Services", badge: "11 pages", title: "The revision that should not have been used", desc: "Everybody involved was diligent. The structure they were working within made the mistake available.", meta: "7 December 2025 · 12 min read" },
  { platform: "defender", service: "managed-it-security", industry: "healthcare", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Healthcare", badge: "14 pages", title: "Clinical continuity and the recovery objective", desc: "The question is not how long until systems are restored. It is how long the organization can deliver safe care without them.", meta: "30 November 2025 · 15 min read" },
  { platform: "business-central", service: "business-applications", industry: "manufacturing", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Manufacturing", badge: "13 pages", title: "From standard to actual: a costing transition", desc: "The parallel quarter is the whole method. Switching without one produces an accurate number nobody trusts.", meta: "23 November 2025 · 14 min read" },
];

export default function Whitepapers() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Whitepapers | JJC Systems",
    "Long-form research on Microsoft platforms and the industries that run on them — a thesis, evidence, an applicable framework, and references to Microsoft documentation."
  );
  usePageEffects(mainRef);

  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [industry, setIndustry] = useState("");

  const filtered = useMemo(() => {
    return WHITEPAPERS_DATA.filter((item) => {
      if (platform && item.platform !== platform) return false;
      if (service && item.service !== service) return false;
      if (industry && item.industry !== industry) return false;
      return true;
    });
  }, [platform, service, industry]);

  const hasFilters = platform || service || industry;
  const clearFilters = () => {
    setPlatform("");
    setService("");
    setIndustry("");
  };

  return (
    <main id="main" ref={mainRef}>
      <section className="svc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><a href="/resources">Resources</a><span>/</span><b>Whitepapers</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Whitepapers</span>
              <h1>Arguments worth circulating</h1>
              <p className="lede">Each paper takes a position, sets out the evidence for it, and offers a framework you can apply. They open with an abstract and numbered findings so a busy reader gets the argument in two minutes, and they close with references to Microsoft's own documentation so you can check the basis for yourself.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#library">Browse the library <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/contact">Get help implementing <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>How these are written</h2>
              <ul>
              <li><svg><use href="#i-check" /></svg><span>An abstract and four numbered findings, for the two-minute read</span></li>
              <li><svg><use href="#i-check" /></svg><span>A named framework you can apply without us</span></li>
              <li><svg><use href="#i-check" /></svg><span>Implications separated by role, because the argument differs</span></li>
              <li><svg><use href="#i-check" /></svg><span>180 references to Microsoft documentation across the library</span></li>
              <li><svg><use href="#i-check" /></svg><span>Written to be printed and circulated, not only read on screen</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>36</b><span>Papers published</span></div>
            <div className="svc-stat"><b>180</b><span>Documentation references</span></div>
            <div className="svc-stat"><b>9</b><span>Platforms covered</span></div>
            <div className="svc-stat"><b>11</b><span>Industries</span></div>
          </div>
        </div>
      </section>

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
        <button type="button" className={"chipf" + (platform === "" ? " is-on" : "")} onClick={() => setPlatform("")} aria-pressed={platform === ""}>All</button>
        <button type="button" className={"chipf" + (platform === "business-central" ? " is-on" : "")} onClick={() => setPlatform("business-central")} aria-pressed={platform === "business-central"}>Dynamics 365 Business Central</button>
        <button type="button" className={"chipf" + (platform === "d365-sales" ? " is-on" : "")} onClick={() => setPlatform("d365-sales")} aria-pressed={platform === "d365-sales"}>Dynamics 365 Sales</button>
        <button type="button" className={"chipf" + (platform === "azure" ? " is-on" : "")} onClick={() => setPlatform("azure")} aria-pressed={platform === "azure"}>Azure</button>
        <button type="button" className={"chipf" + (platform === "fabric" ? " is-on" : "")} onClick={() => setPlatform("fabric")} aria-pressed={platform === "fabric"}>Microsoft Fabric</button>
        <button type="button" className={"chipf" + (platform === "defender" ? " is-on" : "")} onClick={() => setPlatform("defender")} aria-pressed={platform === "defender"}>Microsoft Defender</button>
        <button type="button" className={"chipf" + (platform === "purview" ? " is-on" : "")} onClick={() => setPlatform("purview")} aria-pressed={platform === "purview"}>Microsoft Purview</button>
        <button type="button" className={"chipf" + (platform === "power-bi" ? " is-on" : "")} onClick={() => setPlatform("power-bi")} aria-pressed={platform === "power-bi"}>Power BI</button>
        <button type="button" className={"chipf" + (platform === "intune" ? " is-on" : "")} onClick={() => setPlatform("intune")} aria-pressed={platform === "intune"}>Microsoft Intune</button>
        <button type="button" className={"chipf" + (platform === "sharepoint" ? " is-on" : "")} onClick={() => setPlatform("sharepoint")} aria-pressed={platform === "sharepoint"}>SharePoint</button>
              </div>
            </div>
            <div className="frow">
              <b>Service</b>
              <div className="chips">
        <button type="button" className={"chipf" + (service === "" ? " is-on" : "")} onClick={() => setService("")} aria-pressed={service === ""}>All</button>
        <button type="button" className={"chipf" + (service === "strategy-transformation" ? " is-on" : "")} onClick={() => setService("strategy-transformation")} aria-pressed={service === "strategy-transformation"}>Strategy & Transformation</button>
        <button type="button" className={"chipf" + (service === "managed-it-security" ? " is-on" : "")} onClick={() => setService("managed-it-security")} aria-pressed={service === "managed-it-security"}>Managed IT & Security</button>
        <button type="button" className={"chipf" + (service === "business-applications" ? " is-on" : "")} onClick={() => setService("business-applications")} aria-pressed={service === "business-applications"}>Business Applications</button>
        <button type="button" className={"chipf" + (service === "data-ai-integration" ? " is-on" : "")} onClick={() => setService("data-ai-integration")} aria-pressed={service === "data-ai-integration"}>Data, AI & Integration</button>
        <button type="button" className={"chipf" + (service === "modern-work-automation" ? " is-on" : "")} onClick={() => setService("modern-work-automation")} aria-pressed={service === "modern-work-automation"}>Modern Work & Automation</button>
        <button type="button" className={"chipf" + (service === "talent" ? " is-on" : "")} onClick={() => setService("talent")} aria-pressed={service === "talent"}>Talent</button>
              </div>
            </div>
            <div className="frow">
              <b>Industry</b>
              <div className="chips">
        <button type="button" className={"chipf" + (industry === "" ? " is-on" : "")} onClick={() => setIndustry("")} aria-pressed={industry === ""}>All</button>
        <button type="button" className={"chipf" + (industry === "healthcare" ? " is-on" : "")} onClick={() => setIndustry("healthcare")} aria-pressed={industry === "healthcare"}>Healthcare</button>
        <button type="button" className={"chipf" + (industry === "legal" ? " is-on" : "")} onClick={() => setIndustry("legal")} aria-pressed={industry === "legal"}>Legal</button>
        <button type="button" className={"chipf" + (industry === "financial-services" ? " is-on" : "")} onClick={() => setIndustry("financial-services")} aria-pressed={industry === "financial-services"}>Financial Services</button>
        <button type="button" className={"chipf" + (industry === "public-sector" ? " is-on" : "")} onClick={() => setIndustry("public-sector")} aria-pressed={industry === "public-sector"}>Public Sector</button>
        <button type="button" className={"chipf" + (industry === "education" ? " is-on" : "")} onClick={() => setIndustry("education")} aria-pressed={industry === "education"}>Education</button>
        <button type="button" className={"chipf" + (industry === "manufacturing" ? " is-on" : "")} onClick={() => setIndustry("manufacturing")} aria-pressed={industry === "manufacturing"}>Manufacturing</button>
        <button type="button" className={"chipf" + (industry === "retail-distribution" ? " is-on" : "")} onClick={() => setIndustry("retail-distribution")} aria-pressed={industry === "retail-distribution"}>Retail & Distribution</button>
        <button type="button" className={"chipf" + (industry === "construction-field-services" ? " is-on" : "")} onClick={() => setIndustry("construction-field-services")} aria-pressed={industry === "construction-field-services"}>Construction & Field Services</button>
        <button type="button" className={"chipf" + (industry === "professional-services" ? " is-on" : "")} onClick={() => setIndustry("professional-services")} aria-pressed={industry === "professional-services"}>Professional Services</button>
        <button type="button" className={"chipf" + (industry === "small-mid-market" ? " is-on" : "")} onClick={() => setIndustry("small-mid-market")} aria-pressed={industry === "small-mid-market"}>Small & Mid-Market</button>
        <button type="button" className={"chipf" + (industry === "nonprofits-associations" ? " is-on" : "")} onClick={() => setIndustry("nonprofits-associations")} aria-pressed={industry === "nonprofits-associations"}>Nonprofits & Associations</button>
              </div>
            </div>
            <div className="filter-bar-foot">
              <p className="result-count" role="status">Showing <b>{filtered.length}</b> of <b>{WHITEPAPERS_DATA.length}</b> whitepapers</p>
              {hasFilters && (
                <button className="clear-f" type="button" onClick={clearFilters}>Clear all filters</button>
              )}
            </div>
          </div>

          <div className="blog-grid" data-noun="whitepaper">
            {filtered.map((item, i) => (
              <article className="bpost" key={item.title + i}>
                <a className="bimg" href="/contact" aria-label={item.title}>
                  <svg><use href={item.icon} /></svg>
                  <span className="plat">{item.platformLabel}</span>
                </a>
                <div className="bbody">
                  <div className="bmeta">
                    <span className="tag ind">{item.industryLabel}</span>
                    <span className="tag typ">{item.badge}</span>
                  </div>
                  <h3><a href="/contact">{item.title}</a></h3>
                  <p>{item.desc}</p>
                  <div className="bfoot">
                    <span>{item.meta}</span>
                    <a className="link-more" href="/contact">Read <svg><use href="#i-arrow-r" /></svg></a>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="lede">No whitepapers match those filters yet. <button className="clear-f" type="button" onClick={clearFilters}>Clear filters</button> or <a className="link-more" href="/contact">talk to our team <svg><use href="#i-arrow-r" /></svg></a> about what you need.</p>
            )}
          </div>

          <div className="ph-note reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <svg><use href="#i-check" /></svg>
            <p><b>Placeholder content:</b> these whitepapers are illustrative, based on the published library. Connect this page to your CMS/backend to publish real whitepapers and link each card to its own page or PDF.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
