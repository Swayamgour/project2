import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import { useGetCategoryQuery } from "../../redux/api"; // Adjust import path as needed
import Loader from "../../components/Loader.jsx";

export default function Services() {
  const mainRef = useRef(null);

  // API call to fetch mega menu data
  const { data: apiResponse, isLoading, error } = useGetCategoryQuery();

  useDocumentMeta(
    "Services | JJC Systems",
    "The full JJC Systems service catalog \u2014 strategy, managed IT and security, Dynamics 365 business applications, data and integration, modern work and automation, and IT staffing.",
  );
  usePageEffects(mainRef);

  // Filter only the "Services" category from API response
  const servicesData = useMemo(() => {
    if (apiResponse?.data) {
      return apiResponse.data.find(item => item.slug === "services");
    }
    return null;
  }, [apiResponse]);

  // Get subcategories (service families)
  const categories = servicesData?.subcategories || [];

  // Hero section data (can also come from API if available)
  const heroData = {
    eyebrow: "What we do",
    heading: "One accountable partner.",
    lede: "Most organizations do not need six vendors who each own a fragment of the problem. Every service below is delivered by the same firm, under one agreement, by people who talk to each other — which is why nothing falls between the gaps.",
    primaryCtaText: "Book a consultation",
    primaryCtaLink: "/#contact",
    secondaryCtaText: "Browse the catalog",
    secondaryCtaAnchor: `#${categories[0]?.slug || "strategy-transformation"}`,
    stats: [
      { value: "25", label: "Individually scoped services" },
      { value: "24/7", label: "Global support coverage" },
      { value: "40+ yrs", label: "Combined industry experience" },
      { value: "1 day", label: "We reply to every enquiry" }
    ],
    glance: {
      title: "How to use this page",
      items: [
        'Start with IT Strategy & Consulting.',
        "Every service page explains the problem it solves, what it costs you not to fix it, and how we measure success.",
        "Services are scoped individually — you are never asked to buy a family.",
        "If we are not the right people for it, we will tell you."
      ]
    }
  };

  // Breadcrumb data
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services" }
  ];

  // Calculate total services across all categories
  const totalServices = useMemo(() => {
    return categories.reduce((total, category) => {
      return total + (category.items?.length || 0);
    }, 0);
  }, [categories]);

  // Update stats with actual count from API
  const updatedHeroData = useMemo(() => {
    if (totalServices > 0) {
      return {
        ...heroData,
        stats: heroData.stats.map(stat => {
          if (stat.label === "Individually scoped services") {
            return { ...stat, value: totalServices.toString() };
          }
          return stat;
        })
      };
    }
    return heroData;
  }, [totalServices]);

  // Map icon names from API to SVG sprite references
  const getIconRef = (iconName) => {
    const iconMap = {
      'Compass': 'i-strategy',
      'Shield': 'i-shield',
      'LayoutGrid': 'i-erp',
      'BarChart3': 'i-chart',
      'Monitor': 'i-grid',
      'Users': 'i-staffing',
      // Add more mappings as needed
    };
    return iconMap[iconName] || 'i-default';
  };

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (error) {
    console.error("Error fetching services data:", error);
  }

  return (
    <main id="main" ref={mainRef}>
      {/* Hero Section */}
      <HeroSection
        title="Services"
        hero={updatedHeroData}
        breadcrumbs={breadcrumbs}
      />

      {/* Service Families Sub Navigation */}
      {categories.length > 0 && (
        <nav className="svc-subnav" aria-label="Service families">
          <div className="wrap">
            {categories.map((category) => (
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

      {/* Service Families Section */}
      <section className="section bg-paper">
        <div className="wrap">
          {categories.length > 0 ? (
            categories.map((category) => (
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
                      <span>{category.items?.length || 0} services</span>
                    </div>
                  </div>
                  {/* You can add description here if available in API */}
                  <p>
                    {category.items?.length > 0
                      ? `Explore our ${category.name} services designed to meet your business needs.`
                      : "No services available in this category yet."}
                  </p>
                </div>

                <div className="hub-grid">
                  {category.items?.map((item) => (
                    <Link
                      key={item._id}
                      className="hub-card reveal"
                      to={`/services/${item.slug}`}
                    >
                      <b>{item.name}</b>
                      <p>{item.description}</p>
                      <span className="link-more">
                        Explore the service{" "}
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
              <p>No services available at the moment. Please check back later.</p>
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
                That is a common and reasonable position. Describe the situation
                in your own words and we will tell you which service fits,
                whether it is one conversation or a programme, and whether we
                are the right people for it at all.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">
                Describe your situation{" "}
                <svg>
                  <use href="#i-arrow-r"></use>
                </svg>
              </a>
              <a className="btn btn-ghost" href="/#success-stories">
                See how we work{" "}
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