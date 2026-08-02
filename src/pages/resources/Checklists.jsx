import { useMemo, useRef, useState } from "react";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";

const CHECKLISTS_DATA = [
  { platform: "sharepoint", service: "modern-work-automation", industry: "healthcare", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Healthcare", badge: "Readiness", title: "Copilot readiness checklist", desc: "Twenty checks to run before assigning a single Microsoft 365 Copilot licence in a healthcare organization.", meta: "25 July 2026 · 20 checks" },
  { platform: "business-central", service: "business-applications", industry: "small-mid-market", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Small & Mid-Market", badge: "Go-live", title: "ERP go-live readiness checklist", desc: "The twenty checks that decide whether a Business Central go-live is a quiet Tuesday or a month of firefighting.", meta: "18 July 2026 · 20 checks" },
  { platform: "defender", service: "managed-it-security", industry: "small-mid-market", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Small & Mid-Market", badge: "Audit", title: "Security baseline audit checklist", desc: "The controls your insurer, your clients and any competent attacker will all test. Twenty checks with binary answers.", meta: "11 July 2026 · 20 checks" },
  { platform: "purview", service: "managed-it-security", industry: "legal", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Legal", badge: "Readiness", title: "eDiscovery readiness checklist", desc: "Whether your firm could respond to a preservation order this week, tested against twenty specific capabilities.", meta: "4 July 2026 · 20 checks" },
  { platform: "azure", service: "strategy-transformation", industry: "public-sector", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Public Sector", badge: "Readiness", title: "Cloud migration readiness checklist", desc: "Twenty checks covering the governance, procurement and technical questions a council review will ask.", meta: "27 June 2026 · 20 checks" },
  { platform: "fabric", service: "data-ai-integration", industry: "financial-services", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Financial Services", badge: "Compliance", title: "Data governance readiness checklist", desc: "Whether your analytics platform would satisfy an examiner, tested against twenty specific capabilities.", meta: "20 June 2026 · 20 checks" },
  { platform: "d365-sales", service: "business-applications", industry: "professional-services", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Professional Services", badge: "Health check", title: "CRM adoption health check", desc: "Twenty questions that establish whether your CRM is a working system or an expensive reporting obligation.", meta: "13 June 2026 · 20 checks" },
  { platform: "intune", service: "managed-it-security", industry: "education", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Education", badge: "Readiness", title: "Device refresh readiness checklist", desc: "Twenty checks before a large device refresh in an institution, covering procurement, provisioning and the academic calendar.", meta: "6 June 2026 · 20 checks" },
  { platform: "power-bi", service: "talent", industry: "nonprofits-associations", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Nonprofits & Associations", badge: "Readiness", title: "Reporting capability readiness checklist", desc: "Whether a one-analyst organization can build and sustain its own reporting, assessed across twenty checks.", meta: "30 May 2026 · 20 checks" },
  { platform: "defender", service: "managed-it-security", industry: "healthcare", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Healthcare", badge: "Readiness", title: "Ransomware readiness checklist", desc: "Twenty checks framed around the only question that matters in a provider organization: how long can you deliver safe care without systems?", meta: "23 May 2026 · 20 checks" },
  { platform: "business-central", service: "business-applications", industry: "manufacturing", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Manufacturing", badge: "Readiness", title: "Inventory count readiness checklist", desc: "Twenty checks before a physical count, so the adjustment tells you something rather than merely reconciling a number.", meta: "16 May 2026 · 20 checks" },
  { platform: "sharepoint", service: "modern-work-automation", industry: "legal", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Legal", badge: "Audit", title: "Permissions and confidentiality audit", desc: "Twenty checks on whether your matter content is reachable only by the people who should reach it — including through search.", meta: "9 May 2026 · 20 checks" },
  { platform: "azure", service: "managed-it-security", industry: "healthcare", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Healthcare", badge: "Audit", title: "Cloud workload security review", desc: "Twenty checks on an Azure workload holding patient data, covering network, identity, keys and the evidence an auditor will ask for.", meta: "2 May 2026 · 20 checks" },
  { platform: "purview", service: "managed-it-security", industry: "public-sector", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Public Sector", badge: "Compliance", title: "Records compliance audit", desc: "Whether your retention schedule is operating or merely documented, across twenty specific checks.", meta: "25 April 2026 · 20 checks" },
  { platform: "fabric", service: "data-ai-integration", industry: "retail-distribution", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Retail & Distribution", badge: "Health check", title: "Analytics platform health check", desc: "Twenty checks on whether your data platform is producing trusted numbers at a sustainable cost.", meta: "18 April 2026 · 20 checks" },
  { platform: "intune", service: "managed-it-security", industry: "construction-field-services", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Construction & Field Services", badge: "Readiness", title: "Field device rollout readiness", desc: "Twenty checks before deploying managed devices to crews who work where there is no signal and no patience.", meta: "11 April 2026 · 20 checks" },
  { platform: "d365-sales", service: "business-applications", industry: "financial-services", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Financial Services", badge: "Audit", title: "CRM data quality audit", desc: "Twenty checks on whether your customer data supports the pricing, risk and cross-sell decisions being made from it.", meta: "4 April 2026 · 20 checks" },
  { platform: "power-bi", service: "data-ai-integration", industry: "construction-field-services", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Construction & Field Services", badge: "Readiness", title: "Project reporting readiness", desc: "Twenty checks on whether your job cost reporting arrives while decisions can still be changed.", meta: "28 March 2026 · 20 checks" },
  { platform: "azure", service: "strategy-transformation", industry: "manufacturing", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Manufacturing", badge: "Readiness", title: "Disaster recovery readiness checklist", desc: "Twenty checks on whether a manufacturer could resume production after losing its systems, measured in shifts rather than days.", meta: "21 March 2026 · 20 checks" },
  { platform: "purview", service: "managed-it-security", industry: "financial-services", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Financial Services", badge: "Readiness", title: "Communication supervision readiness", desc: "Twenty checks before turning on supervision, covering scope, privacy and whether the review queue is workable.", meta: "14 March 2026 · 20 checks" },
  { platform: "fabric", service: "data-ai-integration", industry: "manufacturing", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Manufacturing", badge: "Audit", title: "Manufacturing data quality audit", desc: "Twenty checks on whether plant data can be trusted to inform costing, planning and margin decisions.", meta: "7 March 2026 · 20 checks" },
  { platform: "business-central", service: "business-applications", industry: "nonprofits-associations", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Nonprofits & Associations", badge: "Readiness", title: "Year-end close readiness checklist", desc: "Twenty checks before a nonprofit year end, covering fund accounting, grant reconciliation and audit evidence.", meta: "28 February 2026 · 20 checks" },
  { platform: "defender", service: "managed-it-security", industry: "construction-field-services", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Construction & Field Services", badge: "Audit", title: "Endpoint coverage audit", desc: "Twenty checks establishing what proportion of your devices are actually protected, including the ones nobody has looked at.", meta: "21 February 2026 · 20 checks" },
  { platform: "power-bi", service: "data-ai-integration", industry: "professional-services", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Professional Services", badge: "Health check", title: "Semantic model health check", desc: "Twenty checks on whether your Power BI model is trustworthy, performant and ready for Copilot to reason over.", meta: "14 February 2026 · 20 checks" },
  { platform: "intune", service: "managed-it-security", industry: "retail-distribution", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Retail & Distribution", badge: "Readiness", title: "Store and warehouse device readiness", desc: "Twenty checks before deploying managed devices into stores and warehouses, where downtime costs revenue directly.", meta: "7 February 2026 · 20 checks" },
  { platform: "d365-sales", service: "business-applications", industry: "education", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Education", badge: "Readiness", title: "Enrolment cycle readiness checklist", desc: "Twenty checks before a recruitment cycle opens, covering data, communication and the melt window most institutions leave unmanaged.", meta: "31 January 2026 · 20 checks" },
  { platform: "d365-sales", service: "business-applications", industry: "retail-distribution", icon: "#i-sales", platformLabel: "Dynamics 365 Sales", industryLabel: "Retail & Distribution", badge: "Audit", title: "Quote-to-cash process audit", desc: "Twenty checks on whether the promise your sales desk makes is one the warehouse can actually keep.", meta: "24 January 2026 · 20 checks" },
  { platform: "sharepoint", service: "modern-work-automation", industry: "education", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Education", badge: "Audit", title: "Student records and information architecture audit", desc: "Twenty checks on whether student information is organised, protected and findable across a federated institution.", meta: "17 January 2026 · 20 checks" },
  { platform: "sharepoint", service: "modern-work-automation", industry: "small-mid-market", icon: "#i-grid", platformLabel: "SharePoint", industryLabel: "Small & Mid-Market", badge: "Audit", title: "Information architecture audit", desc: "Twenty checks on whether your file structure is helping people work or quietly costing them an hour a week.", meta: "10 January 2026 · 20 checks" },
  { platform: "intune", service: "managed-it-security", industry: "legal", icon: "#i-device", platformLabel: "Microsoft Intune", industryLabel: "Legal", badge: "Audit", title: "BYOD and personal device audit", desc: "Twenty checks on whether client confidences are protected on devices your firm does not own or control.", meta: "20 December 2025 · 20 checks" },
  { platform: "power-bi", service: "talent", industry: "public-sector", icon: "#i-chart", platformLabel: "Power BI", industryLabel: "Public Sector", badge: "Readiness", title: "Public reporting publication readiness", desc: "Twenty checks before publishing spending or performance data, covering accuracy, accessibility and the questions members will ask.", meta: "13 December 2025 · 20 checks" },
  { platform: "azure", service: "talent", industry: "professional-services", icon: "#i-cloud", platformLabel: "Azure", industryLabel: "Professional Services", badge: "Readiness", title: "Cloud operating model readiness", desc: "Twenty checks on whether your team can actually run the cloud estate you are about to build.", meta: "6 December 2025 · 20 checks" },
  { platform: "purview", service: "managed-it-security", industry: "nonprofits-associations", icon: "#i-docs", platformLabel: "Microsoft Purview", industryLabel: "Nonprofits & Associations", badge: "Audit", title: "Donor and supporter data protection audit", desc: "Twenty checks on whether supporter data is protected proportionately, on a budget and with a small team.", meta: "29 November 2025 · 20 checks" },
  { platform: "business-central", service: "business-applications", industry: "retail-distribution", icon: "#i-erp", platformLabel: "Dynamics 365 Business Central", industryLabel: "Retail & Distribution", badge: "Readiness", title: "Peak season readiness checklist", desc: "Twenty checks before your busiest trading period, when everything that is nearly working stops working.", meta: "22 November 2025 · 20 checks" },
  { platform: "defender", service: "managed-it-security", industry: "public-sector", icon: "#i-shield", platformLabel: "Microsoft Defender", industryLabel: "Public Sector", badge: "Audit", title: "Supplier and third-party access audit", desc: "Twenty checks on who outside your organization can reach your systems, and what would happen if one of them were compromised.", meta: "15 November 2025 · 20 checks" },
  { platform: "fabric", service: "data-ai-integration", industry: "education", icon: "#i-chart", platformLabel: "Microsoft Fabric", industryLabel: "Education", badge: "Readiness", title: "Student data platform readiness", desc: "Twenty checks before building an institutional data platform, covering governance, access and whether anybody will act on the output.", meta: "8 November 2025 · 20 checks" },
];

export default function Checklists() {
  const mainRef = useRef(null);
  useDocumentMeta(
    "Checklists | JJC Systems",
    "Working readiness and audit checklists for Microsoft platforms — tick through them, see a live readiness score, and find out what to do about the gaps."
  );
  usePageEffects(mainRef);

  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [industry, setIndustry] = useState("");

  const filtered = useMemo(() => {
    return CHECKLISTS_DATA.filter((item) => {
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
            <a href="/">Home</a><span>/</span><a href="/resources">Resources</a><span>/</span><b>Checklists</b>
          </nav>
          <div className="svc-hero-grid">
            <div>
              <span className="eyebrow">Checklists</span>
              <h1>Instruments, not reading</h1>
              <p className="lede">Every checklist here is meant to be worked through rather than read. Tick the items you can genuinely answer yes to, watch the score, and read what the result means — including when it means you are not ready.</p>
              <div className="svc-cta">
                <a className="btn btn-primary" href="#library">Browse the library <svg><use href="#i-arrow-r" /></svg></a>
                <a className="btn btn-ghost" href="/contact">Get help implementing <svg><use href="#i-arrow-r" /></svg></a>
              </div>
            </div>
            <aside className="glance">
              <h2>How these work</h2>
              <ul>
              <li><svg><use href="#i-check" /></svg><span>720 individual checks across 36 checklists</span></li>
              <li><svg><use href="#i-check" /></svg><span>Tick as you go — a live score shows where you stand</span></li>
              <li><svg><use href="#i-check" /></svg><span>Every item explains why it matters, not just what to check</span></li>
              <li><svg><use href="#i-check" /></svg><span>Score bands say plainly whether to proceed</span></li>
              <li><svg><use href="#i-check" /></svg><span>Print or work through them on screen; nothing is stored</span></li>
              </ul>
            </aside>
          </div>
          <div className="svc-stats">
            <div className="svc-stat"><b>36</b><span>Checklists</span></div>
            <div className="svc-stat"><b>720</b><span>Individual checks</span></div>
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
              <p className="result-count" role="status">Showing <b>{filtered.length}</b> of <b>{CHECKLISTS_DATA.length}</b> checklists</p>
              {hasFilters && (
                <button className="clear-f" type="button" onClick={clearFilters}>Clear all filters</button>
              )}
            </div>
          </div>

          <div className="blog-grid" data-noun="checklist">
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
                    <a className="link-more" href="/contact">Open <svg><use href="#i-arrow-r" /></svg></a>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="lede">No checklists match those filters yet. <button className="clear-f" type="button" onClick={clearFilters}>Clear filters</button> or <a className="link-more" href="/contact">talk to our team <svg><use href="#i-arrow-r" /></svg></a> about what you need.</p>
            )}
          </div>

          <div className="ph-note reveal" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <svg><use href="#i-check" /></svg>
            <p><b>Placeholder content:</b> these checklists are illustrative, based on the published library. Connect this page to your CMS/backend to publish real checklists and link each card to its own page or PDF.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
