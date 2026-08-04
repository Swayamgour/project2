import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import { useGetCategoryQuery } from "../../redux/api"; // Adjust import path as needed
import Loader from "../../components/Loader.jsx";

export default function Platforms() {
  const mainRef = useRef(null);

  // API call to fetch mega menu data
  const { data: apiResponse, isLoading, error } = useGetCategoryQuery();

  useDocumentMeta(
    "Platforms | JJC Systems",
    "Microsoft platform consulting: Microsoft 365, Copilot, Intune, Purview, the Dynamics 365 applications, Power Platform, Fabric, Azure, Azure Virtual Desktop and Defender."
  );
  usePageEffects(mainRef);

  // Filter only the "Platforms" category from API response
  const platformsData = useMemo(() => {
    if (apiResponse?.data) {
      return apiResponse.data.find(item => item.slug === "platforms");
    }
    return null;
  }, [apiResponse]);

  // Get subcategories (platform groups)
  const categories = platformsData?.subcategories || [];

  // Sort categories by order
  const sortedCategories = useMemo(() => {
    return [...categories].sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [categories]);

  // Hero section data
  const heroData = {
    eyebrow: "Platforms",
    heading: "Microsoft expertise, business-first guidance",
    lede: "We help organizations select, implement and optimize the Microsoft platforms that carry their productivity, operations, data and infrastructure. Every page below explains what the platform genuinely does, the business outcomes Microsoft documents for it, and where we think it earns its place — including the cases where it does not.",
    primaryCtaText: "Talk to an expert",
    primaryCtaLink: "/#contact",
    secondaryCtaText: "Browse the catalog",
    secondaryCtaAnchor: `#${sortedCategories[0]?.slug || "modern-work"}`,
    stats: [
      { value: `${sortedCategories.reduce((total, cat) => total + (cat.items?.length || 0), 0)}`, label: "Platforms we implement and support" },
      { value: "Certified", label: "Microsoft-certified consultants" },
      { value: "24/7", label: "Global support coverage" },
      { value: "1 day", label: "We reply to every enquiry" }
    ],
    glance: {
      title: "How to use this page",
      items: [
        "Each page separates what Microsoft documents from what we have measured ourselves.",
        "Platforms are scoped individually — you are never asked to adopt a family.",
        "Start with a licensing review if you are not sure what you already own.",
        "If a platform is the wrong answer for your situation, we will say so."
      ]
    }
  };

  // Breadcrumb data
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Platforms" }
  ];

  // Map icon names from API to SVG sprite references
  const getIconRef = (iconName) => {
    const iconMap = {
      'LayoutGrid': 'i-grid',
      'Layers': 'i-erp',
      'BarChart3': 'i-chart',
      'Cloud': 'i-cloud',
      'Monitor': 'i-grid',
      'AppWindow': 'i-grid',
      'Sparkles': 'i-grid',
      'Smartphone': 'i-grid',
      'SearchCheck': 'i-grid',
      'BriefcaseBusiness': 'i-erp',
      'Landmark': 'i-erp',
      'Handshake': 'i-erp',
      'Headset': 'i-erp',
      'Wrench': 'i-erp',
      'LineChart': 'i-erp',
      'Phone': 'i-erp',
      'ClipboardList': 'i-erp',
      'Zap': 'i-chart',
      'Database': 'i-chart',
      'CloudCog': 'i-cloud',
      'MonitorSmartphone': 'i-cloud',
      'ShieldAlert': 'i-cloud'
    };
    return iconMap[iconName] || 'i-default';
  };

  // Get platform group description based on name
  const getGroupDescription = (name) => {
    const descriptions = {
      "Microsoft 365 & Modern Work": "Secure productivity, collaboration and information governance — the platform almost every organization owns and very few have fully deployed.",
      "Dynamics 365": "Connected ERP, CRM, service and project operations. Eight applications that can be adopted individually and behave as one system when you need them to.",
      "Data, AI & Automation": "Analytics on a governed foundation, and the low-code layer that builds what no packaged product covers.",
      "Cloud, Security & Infrastructure": "The infrastructure underneath everything else, and the threat protection around it — governed, cost-controlled and tested rather than assumed."
    };
    return descriptions[name] || `Explore our ${name} platform solutions.`;
  };

  if (isLoading) {
    return (
     <Loader />
    );
  }

  if (error) {
    console.error("Error fetching platforms data:", error);
  }

  return (
    <main id="main" ref={mainRef}>
      {/* Hero Section */}
      <HeroSection
        title="Platforms"
        hero={heroData}
        breadcrumbs={breadcrumbs}
      />

      {/* Platform Groups Sub Navigation */}
      {sortedCategories.length > 0 && (
        <nav className="svc-subnav" aria-label="Platform groups">
          <div className="wrap">
            {sortedCategories.map((category) => (
              <a key={category._id} href={`#${category.slug}`}>
                {category.name}
              </a>
            ))}
            <a className="subnav-cta link-more" href="/#contact">
              Talk to us{" "}
              <svg>
                <use href="#i-arrow-r"></use>
              </svg>
            </a>
          </div>
        </nav>
      )}

      {/* Platform Groups Section */}
      <section className="section bg-paper">
        <div className="wrap">
          {sortedCategories.length > 0 ? (
            sortedCategories.map((category) => (
              <section
                className="hub-family"
                id={category.slug}
                key={category._id}
              >
                <div className="hub-head reveal">
                  <div className="hub-title">
                    <span className="icon-tile">
                      <svg>
                        <use href={`#${getIconRef(category.icon)}`}></use>
                      </svg>
                    </span>
                    <div>
                      <h2>{category.name}</h2>
                      <span>{category.items?.length || 0} platforms</span>
                    </div>
                  </div>
                  <p className="ind-fam-lede">
                    {category.description || getGroupDescription(category.name)}
                  </p>
                </div>

                <div className="hub-grid">
                  {category.items?.map((item) => (
                    <Link
                      key={item._id}
                      className="hub-card reveal"
                      to={`/platforms/${item.slug}`}
                    >
                      <b>{item.name}</b>
                      <p>{item.description}</p>
                      <span className="link-more">
                        Explore this platform{" "}
                        <svg>
                          <use href="#i-arrow-r"></use>
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <p>No platforms available at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Not sure which of these you need?</h2>
              <p>
                That is the most common position to be in, and it is a reasonable one.
                Most organizations already own more Microsoft capability than they are using,
                so our first piece of work is often establishing what your existing agreement
                already covers before anyone discusses buying anything.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">
                Ask for a licensing review{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/industries">
                See it by industry{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}