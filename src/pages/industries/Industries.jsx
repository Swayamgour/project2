import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import { useGetCategoryQuery } from "../../redux/api"; // Adjust import path as needed

export default function Industries() {
  const mainRef = useRef(null);

  // API call to fetch mega menu data
  const { data: apiResponse, isLoading, error } = useGetCategoryQuery();

  useDocumentMeta(
    "Industries | JJC Systems",
    "Industry-focused Microsoft consulting. Dynamics 365 and Microsoft 365 solutions built around how healthcare, legal, financial services, public sector, education, manufacturing, distribution, construction, professional services, growing businesses and nonprofits actually run."
  );
  usePageEffects(mainRef);

  // Filter only the "Industries" category from API response
  const industriesData = useMemo(() => {
    if (apiResponse?.data) {
      return apiResponse.data.find(item => item.slug === "industries");
    }
    return null;
  }, [apiResponse]);

  // Get subcategories (industry groups)
  const categories = industriesData?.subcategories || [];

  // Sort categories by order
  const sortedCategories = useMemo(() => {
    return [...categories].sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [categories]);

  // Hero section data
  const heroData = {
    eyebrow: "Industries",
    heading: "We start with how your industry runs, not with a product list",
    lede: "Every sector below has its own deadlines, its own regulators, its own reporting and its own way of moving work between teams. A generic implementation ignores all of that and asks your people to adapt. We do it the other way round — which is slower to scope and considerably faster to adopt.",
    primaryCtaText: "Request an industry demo",
    primaryCtaLink: "/#contact?topic=Dynamics%20365%20business%20applications",
    secondaryCtaText: "Find your industry",
    secondaryCtaAnchor: `#${sortedCategories[0]?.slug || "regulated"}`,
    stats: [
      { value: `${sortedCategories.reduce((total, cat) => total + (cat.items?.length || 0), 0)}`, label: "Industries we serve directly" },
      { value: "40+ yrs", label: "Combined industry experience" },
      { value: "D365", label: "Built on Microsoft business applications" },
      { value: "1 day", label: "We reply to every enquiry" }
    ],
    glance: {
      title: "How to use this page",
      items: [
        "Each industry page covers the challenges, the outcomes leaders ask for, and how we get there.",
        "Every one ends with the same offer: a working demo built around one of your own processes.",
        "Don't see yours? The underlying disciplines travel further than the labels suggest — ask us.",
        "If we are not the right people for your sector, we will say so."
      ]
    }
  };

  // Breadcrumb data
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Industries" }
  ];

  // Map icon names from API to SVG sprite references
  const getIconRef = (iconName) => {
    const iconMap = {
      'ShieldCheck': 'i-shield',
      'Factory': 'i-chart',
      'UsersRound': 'i-users',
      'Shield': 'i-shield',
      'BarChart3': 'i-chart',
      'Users': 'i-users',
      // Add more mappings as needed
    };
    return iconMap[iconName] || 'i-default';
  };

  // Get industry group description based on name
  const getGroupDescription = (name) => {
    const descriptions = {
      "Regulated Industries": "Sectors where the rules are part of the operating model. Technology here has to serve the patient, client, resident or student and satisfy an auditor, examiner or regulator at the same time — which is a design constraint, not an afterthought.",
      "Commercial Industries": "Businesses where margin is decided by how quickly information moves — from the shop floor, the warehouse, the job site or the project — back to the people making commercial decisions.",
      "Growth & Community Organizations": "Organizations that need enterprise capability without enterprise cost or complexity, and where every dollar spent on administration is a dollar taken from growth or from the mission."
    };
    return descriptions[name] || `Explore our ${name} industry solutions.`;
  };

  if (isLoading) {
    return (
      <main id="main" ref={mainRef}>
        <div className="wrap" style={{ padding: "60px 0", textAlign: "center" }}>
          <h2>Loading industries...</h2>
        </div>
      </main>
    );
  }

  if (error) {
    console.error("Error fetching industries data:", error);
  }

  return (
    <main id="main" ref={mainRef}>
      {/* Hero Section */}
      <HeroSection
        title="Industries"
        hero={heroData}
        breadcrumbs={breadcrumbs}
      />

      {/* Industry Groups Sub Navigation */}
      {sortedCategories.length > 0 && (
        <nav className="svc-subnav" aria-label="Industry groups">
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

      {/* Industry Groups Section */}
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
                      <span>{category.items?.length || 0} industries</span>
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
                      to={`/industries/${item.slug}`}
                    >
                      <b>{item.name}</b>
                      <p>{item.description}</p>
                      <span className="link-more">
                        Explore this industry{" "}
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
              <p>No industries available at the moment. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Your industry isn't listed?</h2>
              <p>
                The labels above are where we have the deepest experience, not the limits of what we can do.
                Most of what makes an industry solution work — understanding the process, the regulator and
                the reporting — transfers further than the sector name suggests. Describe your operation and
                we will tell you honestly whether we are the right people for it.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">
                Describe your operation{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/services">
                Browse our services{" "}
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