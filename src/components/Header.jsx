import { useEffect, useMemo, useRef, useState } from "react";
// import { motion,  } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Layers,
  LayoutGrid,
  FileText,
  Users,
  MapPin,
  Handshake,
  Award,
  Compass,
  MessageCircle,
  MessageSquare,
  HelpCircle,
  Phone,
  Mail,
  Lightbulb,
  Calendar,
  Star,
  Settings,
  TrendingUp,
  BookOpen,
  ChevronDown,
  User,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useGetCaseStudyCategoryQuery, useGetCategoryQuery } from "../redux/api";
import "./Header.css";
import logo from "../assets/logo1.png";
// import headerImage from "../assets/bread-contact.webp";

/* ============================================================
   ARROW ICON (kept from the new header)
   ============================================================ */
function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.8 12h15.4" />
      <path d="m13.2 5.6 6 6.4-6 6.4" />
    </svg>
  );
}

/* ============================================================
   "WHAT WE DO" — category rail + subcategory columns + promo
   (ported as-is from the old Header.jsx)
   ============================================================ */
const CATEGORY_ICONS = {
  services: Boxes,
  industries: Building2,
  platforms: Layers,
};

const CATEGORY_META = {
  services: {
    title: "Technology Consulting Built for Business Outcomes",
    text: "We align strategy, platforms, and execution to solve complex challenges and drive measurable results that matter.",
    cta: "Talk to an Advisor",
    footerLinks: [
      { label: "Explore All Services", sub: "View our complete service catalog", icon: LayoutGrid, path: "services" },
      { label: "View Case Studies", sub: "See how we help clients succeed", icon: FileText, path: "case-studies" },
    ],
  },
  industries: {
    title: "Industry Expertise That Fits Your Environment",
    text: "From compliance to operations, we design technology strategies that align with the demands of your industry.",
    cta: "Explore Industry Solutions",
    footerLinks: [
      { label: "Explore Industry Solutions", sub: "View solutions tailored to your industry", icon: LayoutGrid, path: "industries" },
      { label: "View Client Success", sub: "See how we help organizations succeed", icon: FileText, path: "case-studies" },
    ],
  },
  platforms: {
    title: "Microsoft Expertise. Business-First Guidance.",
    text: "We help organizations select, implement, and optimize the Microsoft platforms that drive productivity, innovation, and growth.",
    cta: "Talk to an Expert",
    footerLinks: [
      { label: "Explore All Platforms", sub: "View our complete platform catalog", icon: LayoutGrid, path: "platforms" },
      { label: "Talk to an Expert", sub: "Get guidance on the right platforms for your business", icon: FileText, path: "contact" },
    ],
  },
};

const WhatWeDoDropdownContent = ({ menu, onNavigate }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = menu.groups[activeCategoryIndex] || null;
  const meta = CATEGORY_META[activeCategory?.slug] || CATEGORY_META.services;
  const PromoIcon = CATEGORY_ICONS[activeCategory?.slug] || Boxes;

  return (
    <div className="mega-layout what-we-do-layout">
      {/* Left — top-level category rail (Services / Industries / Platforms) */}
      <aside className="what-we-do-category-col">
        {menu.groups.map((category, idx) => {
          const Icon = CATEGORY_ICONS[category.slug] || Boxes;
          const isActive = idx === activeCategoryIndex;
          return (
            <button
              key={category.heading}
              className={`what-we-do-category-item ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActiveCategoryIndex(idx)}
              onFocus={() => setActiveCategoryIndex(idx)}
              onClick={() => setActiveCategoryIndex(idx)}
            >
              <span className="what-we-do-category-icon">
                <Icon size={18} />
              </span>
              <span>{category.heading}</span>
            </button>
          );
        })}
      </aside>

      {/* Middle — subcategory columns for the active top-level category */}
      <section className="dropdown-main what-we-do-main">
        <div className="dropdown-scroll">
          <div className="dropdown-columns what-we-do-columns">
            {activeCategory?.subcategories?.map((sub) => (
              <div className="dropdown-column" key={sub.heading}>
                <h3>{sub.heading}</h3>
                <div className="dropdown-links">
                  {sub.items.map((item) => (
                    <button key={item.path} className="dropdown-link" onClick={() => onNavigate(item.path)}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="what-we-do-footer">
          {meta.footerLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <button key={link.label} className="what-we-do-footer-link" onClick={() => onNavigate(link.path)}>
                <span className="what-we-do-footer-icon">
                  <LinkIcon size={18} />
                </span>
                <span className="what-we-do-footer-text">
                  <strong>{link.label}</strong>
                  <small>{link.sub}</small>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Right — dark promo card, content swaps with the active category */}
      <aside className="what-we-do-promo-card">
        <div className="what-we-do-promo-icon">
          <PromoIcon size={26} />
        </div>
        <h3>{meta.title}</h3>
        <p>{meta.text}</p>
        <button className="what-we-do-promo-cta" onClick={() => onNavigate("contact")}>
          {meta.cta} <ArrowRight size={16} />
        </button>
      </aside>
    </div>
  );
};

/* ============================================================
   GENERIC "INFO" MEGA MENU — Client Success / Why Us / Insights /
   Contact Us (ported as-is from the old Header.jsx)
   ============================================================ */
const InfoRow = ({ item, onNavigate }) => {
  const Icon = item.icon;
  const inner = (
    <>
      {Icon && (
        <span className="info-row-icon">
          <Icon size={16} />
        </span>
      )}
      <span className="info-row-text">
        <strong>{item.label}</strong>
        {item.sub && <small>{item.sub}</small>}
      </span>
    </>
  );

  if (item.href) {
    return (
      <a
        className="info-row"
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  if (item.path) {
    return (
      <button className="info-row" onClick={() => onNavigate(item.path)}>
        {inner}
      </button>
    );
  }

  return <div className="info-row info-row-static">{inner}</div>;
};

const InfoDropdownContent = ({ menu, onNavigate }) => {
  const columnCount = menu.columns.length + (menu.featuredCard ? 1 : 0);

  return (
    <div className="mega-layout info-dropdown-layout">
      <section className="dropdown-main what-we-do-main info-dropdown-main">
        <div className="dropdown-scroll">
          <div className={`info-columns-grid info-columns-${columnCount}`}>
            {menu.columns.map((col) => (
              <div className="info-column" key={col.heading}>
                <h3 className="info-column-heading">
                  {col.icon && (
                    <span className="info-column-icon">
                      <col.icon size={16} />
                    </span>
                  )}
                  {col.heading}
                </h3>

                <div className={`info-column-items ${col.variant === "rows" ? "info-column-rows" : ""}`}>
                  {col.items.map((item, idx) =>
                    col.variant === "rows" ? (
                      <InfoRow key={item.label + idx} item={item} onNavigate={onNavigate} />
                    ) : (
                      <button key={item.label + idx} className="dropdown-link" onClick={() => onNavigate(item.path)}>
                        {item.label}
                      </button>
                    )
                  )}
                </div>

                {col.footerLink && (
                  <button className="info-column-footer-link" onClick={() => onNavigate(col.footerLink.path)}>
                    {col.footerLink.label} <ArrowRight size={13} />
                  </button>
                )}
              </div>
            ))}

            {menu.featuredCard && (
              <div className="info-column info-featured-column">
                <h3 className="info-column-heading">
                  {menu.featuredCard.icon && (
                    <span className="info-column-icon">
                      <menu.featuredCard.icon size={16} />
                    </span>
                  )}
                  {menu.featuredCard.heading}
                </h3>

                {menu.featuredCard.image && (
                  <div className="info-featured-image-wrapper">
                    <img src={menu.featuredCard.image} alt={menu.featuredCard.title} />
                  </div>
                )}

                <div className="info-featured-card">
                  {!menu.featuredCard.image && (
                    <span className="info-featured-icon">
                      <menu.featuredCard.icon size={20} />
                    </span>
                  )}
                  <div className="info-featured-content">
                    <strong>{menu.featuredCard.title}</strong>
                    <p>{menu.featuredCard.description}</p>
                    <button className="info-featured-cta" onClick={() => onNavigate(menu.featuredCard.path)}>
                      {menu.featuredCard.ctaLabel} <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {menu.extraCard && (
            <div className="info-extra-card">
              <span className="info-extra-icon">
                <menu.extraCard.icon size={20} />
              </span>
              <div className="info-extra-content">
                <strong>{menu.extraCard.heading}</strong>
                <p>{menu.extraCard.description}</p>
                <button className="info-extra-cta" onClick={() => onNavigate(menu.extraCard.path)}>
                  {menu.extraCard.ctaLabel} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>

        {menu.footerLinks && (
          <div className="what-we-do-footer">
            {menu.footerLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <button key={link.label} className="what-we-do-footer-link" onClick={() => onNavigate(link.path)}>
                  <span className="what-we-do-footer-icon">
                    <LinkIcon size={18} />
                  </span>
                  <span className="what-we-do-footer-text">
                    <strong>{link.label}</strong>
                    <small>{link.sub}</small>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {menu.promo && (
        <aside className="what-we-do-promo-card">
          <div className="what-we-do-promo-icon">
            <menu.promo.icon size={26} />
          </div>
          <h3>{menu.promo.title}</h3>
          <p>{menu.promo.text}</p>
          <button className="what-we-do-promo-cta" onClick={() => onNavigate(menu.promo.path)}>
            {menu.promo.cta} <ArrowRight size={16} />
          </button>
        </aside>
      )}
    </div>
  );
};

/* Flattens a menu's desktop content shape into { heading, items } groups
   for the mobile accordion. */
const getMobileGroups = (menu) => {
  if (menu.title === "What We Do") {
    return menu.groups.flatMap((category) => category.subcategories || []);
  }
  const groups = [...menu.columns];
  if (menu.featuredCard) {
    groups.push({ heading: menu.featuredCard.heading, items: [{ label: menu.featuredCard.title, path: menu.featuredCard.path }] });
  }
  if (menu.extraCard) {
    groups.push({ heading: menu.extraCard.heading, items: [{ label: menu.extraCard.ctaLabel, path: menu.extraCard.path }] });
  }
  return groups;
};

/* ============================================================
   HEADER
   ============================================================ */
export default function Header({ brandName = "JJC", brandSuffix = "Systems" }) {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // index into menuData
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // tracks the same 1080px breakpoint the CSS uses

  const dropdownTimerRef = useRef(null);
  const headerRef = useRef(null);

  const navigate = useNavigate();
  const { data } = useGetCategoryQuery();
  const { data: caseStudy } = useGetCaseStudyCategoryQuery();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1080px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  /* ── Real, API-driven menu data (5 menus) — ported from the old Navbar ── */
  const menuData = useMemo(
    () => [
      {
        title: "What We Do",
        hasDropdown: true,
        groups:
          data?.data?.map((category) => ({
            heading: category.name,
            slug: category.slug,
            subcategories:
              category.subcategories?.map((sub) => ({
                heading: sub.name,
                slug: sub.slug,
                items:
                  sub.items?.map((item) => ({
                    label: item.name,
                    path:
                      category.slug === "industries"
                        ? `/industries/${item.slug}`
                        : category.slug === "platforms"
                          ? `/platforms/${item.slug}`
                          : category.slug === "services"
                            ? `/services/${item.slug}`
                            : `/${item.slug}`,
                  })) || [],
              })) || [],
          })) || [],
      },

      {
        title: "Client Success",
        hasDropdown: true,
        layout: "info",
        columns: [
          {
            heading: "Browse By Industry",
            icon: Building2,
            items:
              caseStudy?.data
                ?.filter((item) => item.type === "industry")
                ?.map((item) => ({
                  label: item.name,
                  path: `/success/${item.slug}`,
                })) || [],
          },
          {
            heading: "Browse By Capability",
            icon: Settings,
            items:
              caseStudy?.data
                ?.filter((item) => item.type === "capability")
                ?.map((item) => ({
                  label: item.name,
                  path: `/success/${item.slug}`,
                })) || [],
          },
          {
            heading: "Resources",
            icon: FileText,
            items: [
              { label: "Blog", path: "/blog" },
              { label: "Guides", path: "/resources/guides" },
              { label: "Checklists", path: "/resources/checklists" },
              { label: "Whitepaper", path: "/resources/whitepapers" },
              // { label: "Infographic", path: "/resources/infographics" },
            ],
          },
        ],
        featuredCard: {
          icon: Star,
          heading: "Featured Success Story",
          image: '../assets/img/story.jpg',
          title: "File Server Migration to SharePoint",
          description: "See how a healthcare organization improved secure access and day-to-day collaboration.",
          ctaLabel: "Read The Story",
          path: "/FeaturedSuccess",
        },
        footerLinks: [
          { icon: BookOpen, label: "Explore All Success Stories", sub: "Browse outcomes across industries and solutions", path: "/case-studies" },
          { icon: Users, label: "Talk to Our Team", sub: "Let us walk you through similar projects", path: "/contact" },
        ],
        promo: {
          icon: TrendingUp,
          title: "Proven Results. Practical Expertise.",
          text: "We help organizations solve operational and technology challenges to drive measurable outcomes that matter.",
          cta: "View Client Success",
          path: "/case-studies",
        },
      },

      {
        title: "Why Us",
        hasDropdown: true,
        layout: "info",
        columns: [
          {
            heading: "Company",
            icon: Building2,
            items: [
              { label: "About Us", path: "/About" },
              { label: "Leadership", path: "/why-us/team" },
              { label: "Locations", path: "/why-us/locations" },
              { label: "Partners", path: "/why-us/partners" },
              { label: "Careers", path: "/why-us/careers" },
            ],
          },
          {
            heading: "Working With Us",
            icon: Users,
            items: [
              { label: "Our Approach", path: "/why-us/our-approach" },
              { label: "Onboarding Guide", path: "/why-us/onboarding-guide" },
              { label: "Frequently Asked Questions", path: "/why-us/faq" },
              { label: "Client Portal", path: "/client-portal" },
              { label: "Open a Support Ticket", path: "/why-us/open-a-ticket" },
            ],
          },
        ],
        extraCard: {
          icon: Award,
          heading: "Why Organizations Choose JJC systems",
          description:
            "Organizations choose JJC systems for our practical guidance, accountable delivery, and experienced technology professionals who deliver results that matter.",
          ctaLabel: "Meet JJC Systems",
          path: "/why-us",
        },
        footerLinks: [
          { icon: Compass, label: "Our Approach", sub: "See how we guide projects from discovery to delivery", path: "/why-us/our-approach" },
          { icon: Mail, label: "Contact JJC systems", sub: "Connect with our team for next steps", path: "/contact" },
        ],
        promo: {
          icon: Handshake,
          title: "A Partner You Can Count On.",
          text: "We blend strategy, implementation, and support with accountability at every step so you can move forward with confidence.",
          cta: "Learn About JJC systems",
          path: "/About",
        },
      },



      {
        title: "Contact Us",
        hasDropdown: true,
        layout: "info",
        columns: [
          {
            heading: "Get In Touch",
            variant: "rows",
            items: [
              { icon: MessageCircle, label: "Talk to an Expert", sub: "Share your goals and get guidance from our team.", path: "/contact" },
              { icon: FileText, label: "Request a Consultation", sub: "Tell us about your needs and we'll connect you with the right expert.", path: "/contact" },
              { icon: HelpCircle, label: "General Inquiries", sub: "Questions about solutions, services, or partnerships.", path: "/contact" },
              { icon: Handshake, label: "Partnership Opportunities", sub: "Let's build innovative solutions together.", path: "/contact" },
            ],
          },
          {
            heading: "Office Locations",
            variant: "rows",
            items: [
              { icon: MapPin, label: " (Headquarters)", sub: "1600 Golf Rd Suite 1200, Rolling \nMeadows, IL 60008" },
              { icon: MapPin, label: "Cleveland, OH", sub: "600 Superior Avenue East\nSuite 1400, Cleveland, OH 44114" },
            ],
            footerLink: { label: "View All Locations", path: "/why-us/locations" },
          },
          {
            heading: "Connect",
            variant: "rows",
            items: [
              { icon: Phone, label: "Call Us", sub: "+1-888-329-0625", href: "tel:+1-888-329-0625" },
              { icon: Mail, label: "Email Us", sub: "info@jjcsi.com", href: "mailto:info@jjcsi.com" },
              { icon: User, label: "LinkedIn", sub: "Follow Us", href: "https://www.linkedin.com/company/jjc-systems" },
            ],
          },
        ],
        footerLinks: [
          { icon: Compass, label: "How We Work", sub: "See our delivery process", path: "/why-us/our-approach" },
          { icon: Award, label: "Client Success", sub: "See how we help clients succeed", path: "/case-studies" },
          { icon: HelpCircle, label: "Frequently Asked Questions", sub: "Get quick answers", path: "/why-us/faq" },
        ],
        promo: {
          icon: MessageSquare,
          title: "Start a conversation.",
          text: "We're here to help you find the right technology solution for your business.",
          cta: "Let's Talk",
          path: "/contact",
        },
      },
    ],
    [data, caseStudy]
  );

  const closeDropdown = () => setActiveDropdown(null);

  const onNavigate = (path) => {
    if (path) navigate(`/${path}`.replace(/^\/\//, "/"));
    closeDropdown();
    setNavOpen(false);
    setActiveMobileSubmenu(null);
  };

  // Close on any scroll intent while a dropdown is open.
  useEffect(() => {
    if (activeDropdown === null) return;
    const handleScrollIntent = () => closeDropdown();
    window.addEventListener("wheel", handleScrollIntent, { passive: true });
    window.addEventListener("touchmove", handleScrollIntent, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScrollIntent);
      window.removeEventListener("touchmove", handleScrollIntent);
    };
  }, [activeDropdown]);

  // Lock page scroll while the mobile nav or a dropdown is open.
  useEffect(() => {
    const shouldLock = navOpen || activeDropdown !== null;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen, activeDropdown]);

  // Close the dropdown on outside click.
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) closeDropdown();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleDropdownEnter = (idx) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(idx);
  };
  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(closeDropdown, 150);
  };
  const handleDropdownStay = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
  };

  const toggleMobileSubmenu = (idx) => {
    setActiveMobileSubmenu(activeMobileSubmenu === idx ? null : idx);
  };

  return (
    <header className={`jjc-hdr${scrolled ? " is-scrolled" : ""}`} id="hdr" ref={headerRef}>
      <div className="jjc-wrap">
        <a
          className="jjc-brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            closeDropdown();
            setNavOpen(false);
          }}
        >
          <img src={logo} width={210} alt={`${brandName} ${brandSuffix}`} />
        </a>

        <nav className={`jjc-nav${navOpen ? " is-open" : ""}`} id="nav" aria-label="Main">
          {menuData.map((menu, idx) => (
            <div
              key={menu.title}
              className={`jjc-nav-item${activeDropdown === idx ? " is-active" : ""}`}
              onMouseEnter={() => handleDropdownEnter(idx)}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                className="jjc-nav-trigger"
                onClick={() => isMobile && toggleMobileSubmenu(idx)}
                aria-expanded={activeDropdown === idx || activeMobileSubmenu === idx}
              >
                {menu.title}
                <ChevronDown size={15} className="chevron-icon" />
              </button>

              {/* Desktop mega dropdown */}
              <>
                {activeDropdown === idx && (
                  <div
                    className="mega-dropdown"
                    initial={{ opacity: 0, y: -10, clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      clipPath: "inset(0% 0% 0% 0%)",
                      transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      clipPath: "inset(100% 0% 0% 0%)",
                      transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
                    }}
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="mega-dropdown-bridge" />
                    <div className="mega-dropdown-content">
                      <div className="mega-dropdown-wrapper">
                        {menu.title === "What We Do" ? (
                          <WhatWeDoDropdownContent menu={menu} onNavigate={onNavigate} />
                        ) : (
                          <InfoDropdownContent menu={menu} onNavigate={onNavigate} />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </>

              {/* Mobile accordion */}
              <div initial={false}>
                {activeMobileSubmenu === idx && (
                  <div
                    className="jjc-mobile-submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {getMobileGroups(menu).map((group, gIdx) => (
                      <div key={gIdx}>
                        <div className="mobile-sub-title">{group.heading}</div>
                        {group.items.map((item, iIdx) =>
                          item?.href ? (
                            <a
                              key={iIdx}
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                              {item.label}
                              <ArrowRight size={14} />
                            </a>
                          ) : (
                            <a
                              key={iIdx}
                              href={item?.path || "#"}
                              onClick={(e) => {
                                e.preventDefault();
                                item?.path && onNavigate(item.path);
                              }}
                            >
                              {item?.label}
                              <ArrowRight size={14} />
                            </a>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>


        <a className="btn btn-primary jjc-book-btn" href="/contact">Book a Consultation <svg><use href="#i-arrow-r"></use></svg></a>

        <button
          className="jjc-burger"
          aria-expanded={navOpen}
          aria-controls="nav"
          aria-label={navOpen ? "Close menu" : "Open menu"}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}


// old styling