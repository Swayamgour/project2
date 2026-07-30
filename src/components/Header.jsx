import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
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
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { useGetCaseStudyCategoryQuery, useGetCategoryQuery } from '../redux/api';
import Logo from '../assets/logo1.png';
import headerImage from '../assets/bread-contact.webp';

/* ============================================================
   "WHAT WE DO" — category rail + subcategory columns + promo
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

const WhatWeDoContent = ({ menu, onNavigate }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory = menu.groups[activeIdx] || null;
  const meta = CATEGORY_META[activeCategory?.slug] || CATEGORY_META.services;
  const PromoIcon = CATEGORY_ICONS[activeCategory?.slug] || Boxes;

  return (
    <div className="mega-grid what-we-do-grid">
      {/* Left — category rail */}
      <aside className="mega-rail">
        {menu.groups.map((category, idx) => {
          const RailIcon = CATEGORY_ICONS[category.slug] || Boxes;
          const isActive = idx === activeIdx;
          return (
            <button
              key={category.heading}
              className={`mega-rail-item${isActive ? ' active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
              onFocus={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(idx)}
            >
              <span className="ic"><RailIcon size={18} /></span>
              <span>{category.heading}</span>
            </button>
          );
        })}
      </aside>

      {/* Middle — subcategory columns */}
      <div className="mega-col mega-col-wide">
        <div className="mega-scroll">
          <div className="mega-subcols">
            {activeCategory?.subcategories?.map((sub) => (
              <div className="mega-subcol" key={sub.heading}>
                <h3>{sub.heading}</h3>
                <div className="mega-links">
                  {sub.items.map((item) => (
                    <button key={item.path} className="mega-link" onClick={() => onNavigate(item.path)}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mega-foot">
          {meta.footerLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <div key={link.label} onClick={() => onNavigate(link.path)} style={{ cursor: 'pointer' }}>
                <span className="ic"><LinkIcon size={18} /></span>
                <span><b>{link.label}</b><span>{link.sub}</span></span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right — dark promo aside */}
      <div className="mega-aside">
        <div className="ic"><PromoIcon size={26} /></div>
        <h4>{meta.title}</h4>
        <p>{meta.text}</p>
        <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
          {meta.cta} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

/* ============================================================
   GENERIC "INFO" MEGA MENU — Client Success / Why Us / Insights /
   Contact Us
   ============================================================ */
const InfoRow = ({ item, onNavigate }) => {
  const RowIcon = item.icon;
  const inner = (
    <>
      {RowIcon && <span className="ic"><RowIcon size={16} /></span>}
      <span>
        <b>{item.label}</b>
        {item.sub && <span style={{ whiteSpace: 'pre-line' }}>{item.sub}</span>}
      </span>
    </>
  );

  if (item.href) {
    return (
      <a
        className="mega-row"
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {inner}
      </a>
    );
  }

  if (item.path) {
    return (
      <div className="mega-row" onClick={() => onNavigate(item.path)} style={{ cursor: 'pointer' }}>
        {inner}
      </div>
    );
  }

  return <div className="mega-row mega-row-static">{inner}</div>;
};

const InfoContent = ({ menu, onNavigate }) => {
  return (
    <div className="mega-grid info-grid">
      <div className="mega-col mega-col-wide">
        <div className="mega-scroll">
          <div className="mega-subcols">
            {menu.columns.map((col) => (
              <div className="mega-subcol" key={col.heading}>
                <div className="mega-head">
                  {col.icon && <span className="ic"><col.icon size={16} /></span>}
                  <b>{col.heading}</b>
                </div>

                <div className={col.variant === 'rows' ? 'mega-rows' : 'mega-links'}>
                  {col.items.map((item, idx) =>
                    col.variant === 'rows' ? (
                      <InfoRow key={item.label + idx} item={item} onNavigate={onNavigate} />
                    ) : (
                      <button key={item.label + idx} className="mega-link" onClick={() => onNavigate(item.path)}>
                        {item.label}
                      </button>
                    )
                  )}
                </div>

                {col.footerLink && (
                  <button className="mega-subcol-footer" onClick={() => onNavigate(col.footerLink.path)}>
                    {col.footerLink.label} <ArrowRight size={13} />
                  </button>
                )}
              </div>
            ))}

            {menu.featuredCard && (
              <div className="mega-subcol mega-feature">
                <div className="mega-head">
                  {menu.featuredCard.icon && <span className="ic"><menu.featuredCard.icon size={16} /></span>}
                  <b>{menu.featuredCard.heading}</b>
                </div>

                {menu.featuredCard.image && (
                  <div className="fimg-wrap">
                    <img src={menu.featuredCard.image} alt={menu.featuredCard.title} />
                  </div>
                )}

                {!menu.featuredCard.image && (
                  <div className="fimg"><menu.featuredCard.icon size={20} /></div>
                )}

                <h4>{menu.featuredCard.title}</h4>
                <p>{menu.featuredCard.description}</p>
                <div className="link-more" onClick={() => onNavigate(menu.featuredCard.path)} style={{ cursor: 'pointer' }}>
                  {menu.featuredCard.ctaLabel} <ArrowRight size={14} />
                </div>
              </div>
            )}
          </div>

          {menu.extraCard && (
            <div className="mega-extra">
              <span className="ic"><menu.extraCard.icon size={20} /></span>
              <div>
                <b>{menu.extraCard.heading}</b>
                <p>{menu.extraCard.description}</p>
                <div className="link-more" onClick={() => onNavigate(menu.extraCard.path)} style={{ cursor: 'pointer' }}>
                  {menu.extraCard.ctaLabel} <ArrowRight size={14} />
                </div>
              </div>
            </div>
          )}
        </div>

        {menu.footerLinks && (
          <div className="mega-foot">
            {menu.footerLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <div key={link.label} onClick={() => onNavigate(link.path)} style={{ cursor: 'pointer' }}>
                  <span className="ic"><LinkIcon size={18} /></span>
                  <span><b>{link.label}</b><span>{link.sub}</span></span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {menu.promo && (
        <div className="mega-aside">
          <div className="ic"><menu.promo.icon size={26} /></div>
          <h4>{menu.promo.title}</h4>
          <p>{menu.promo.text}</p>
          <button className="btn btn-primary" onClick={() => onNavigate(menu.promo.path)}>
            {menu.promo.cta} <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

/* ============================================================
   HEADER
   ============================================================ */
function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // index into menuData
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const { data } = useGetCategoryQuery();
  const { data: caseStudy } = useGetCaseStudyCategoryQuery();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.getElementById('burger')?.setAttribute('aria-expanded', !isMenuOpen);
  };

  const openDropdown = (idx) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveDropdown(idx);
  };
  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const stayOpen = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };
  const toggleDropdown = (idx) => {
    setActiveDropdown((cur) => (cur === idx ? null : idx));
  };

  const handleNavigate = (path) => {
    if (path) navigate(`/${path}`.replace(/^\/\//, '/'));
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* ── Real, API-driven menu data (5 menus) ── */
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
        ],
        featuredCard: {
          icon: Star,
          heading: "Featured Success Story",
          image: headerImage,
          title: "File Server Migration to SharePoint",
          description: "See how a healthcare organization improved secure access and day-to-day collaboration.",
          ctaLabel: "Read The Story",
          path: "/case-studies/file-server-migration-to-sharepoint",
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
            heading: "About JJC",
            icon: Building2,
            items: [
              { label: "About Us", path: "/About" },
              { label: "Leadership & Team", path: "/why-us/team" },
              { label: "Locations", path: "/company/locations" },
              { label: "Partners", path: "/company/partners" },
              { label: "Careers", path: "/company/careers" },
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
          {
            heading: "Explore By Topic",
            icon: Compass,
            items: [
              { label: "Artificial Intelligence", path: "/resources/topics/ai" },
              { label: "Cybersecurity", path: "/resources/topics/cybersecurity" },
              { label: "Microsoft 365", path: "/resources/topics/microsoft-365" },
              { label: "Dynamics 365", path: "/resources/topics/dynamics-365" },
              { label: "Data & Analytics", path: "/resources/topics/data-analytics" },
              { label: "Cloud & Infrastructure", path: "/resources/topics/cloud-infrastructure" },
            ],
          },
        ],
        extraCard: {
          icon: Award,
          heading: "Why Organizations Choose JJC",
          description:
            "Organizations choose JJC for our practical guidance, accountable delivery, and experienced technology professionals who deliver results that matter.",
          ctaLabel: "Meet JJC Systems",
          path: "/About",
        },
        footerLinks: [
          { icon: Compass, label: "Our Approach", sub: "See how we guide projects from discovery to delivery", path: "/why-us/our-approach" },
          { icon: Mail, label: "Contact JJC", sub: "Connect with our team for next steps", path: "/contact" },
        ],
        // promo: {
        //   icon: Handshake,
        //   title: "A Partner You Can Count On.",
        //   text: "We blend strategy, implementation, and support with accountability at every step so you can move forward with confidence.",
        //   cta: "Learn About JJC",
        //   path: "/About",
        // },
      },

      {
        title: "Insights",
        hasDropdown: true,
        layout: "info",
        columns: [
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
          heading: "Featured Insight",
          title: "Preparing Your Organization for Microsoft Copilot",
          description: "Learn how to build a strong foundation for Copilot success with planning, governance, and user readiness.",
          ctaLabel: "Read The Article",
          path: "/blog/preparing-your-organization-for-microsoft-copilot",
        },
        footerLinks: [
          { icon: LayoutGrid, label: "Explore Resources", sub: "Browse articles, guides, and practical tools", path: "/resources" },
          { icon: Calendar, label: "Upcoming Events", sub: "See webinars, sessions, and educational content", path: "/resources/events" },
        ],
        promo: {
          icon: Lightbulb,
          title: "Insights That Help You Move Forward.",
          text: "We turn complex technical topics into practical guidance so you can make smarter decisions and drive meaningful results.",
          cta: "View All Insights",
          path: "/resources",
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
              { icon: MapPin, label: "Westlake, OH (Headquarters)", sub: "24900 Sperry Drive, Suite 300\nWestlake, OH 44145" },
              { icon: MapPin, label: "Cleveland, OH", sub: "600 Superior Avenue East\nSuite 1400, Cleveland, OH 44114" },
            ],
            footerLink: { label: "View All Locations", path: "/why-us/locations" },
          },
          {
            heading: "Connect",
            variant: "rows",
            items: [
              { icon: Phone, label: "Call Us", sub: "(440) 471-5800", href: "tel:+14404715800" },
              { icon: Mail, label: "Email Us", sub: "info@jjcsi.com", href: "mailto:info@jjcsi.com" },
              { icon: FaLinkedinIn, label: "LinkedIn", sub: "Follow Us", href: "https://www.linkedin.com/company/jjc-systems" },
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

  return (
    <header className="hdr scrolled" id="hdr" ref={headerRef}>
      <div className="wrap">
        <div className="brand" onClick={() => handleNavigate('/')} style={{ cursor: 'pointer' }}>
          <img src={Logo} alt="jjc systems logo" width={150} />
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`} id="nav" aria-label="Main" ref={navRef}>
          {menuData.map((menu, idx) => (
            <div
              key={menu.title}
              className={`has-mega${activeDropdown === idx ? ' active' : ''}`}
              onMouseEnter={() => openDropdown(idx)}
              onMouseLeave={scheduleClose}
            >
              <div className="mega-toggle" onClick={(e) => { e.preventDefault(); toggleDropdown(idx); }} style={{ cursor: 'pointer' }}>
                {menu.title} <ChevronDown size={12} className="mega-chevron" />
              </div>

              {activeDropdown === idx && (
                <div
                  className="mega"
                  role="group"
                  aria-label={menu.title}
                  onMouseEnter={stayOpen}
                  onMouseLeave={scheduleClose}
                >
                  {menu.title === "What We Do" ? (
                    <WhatWeDoContent menu={menu} onNavigate={handleNavigate} />
                  ) : (
                    <InfoContent menu={menu} onNavigate={handleNavigate} />
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="burger"
          id="burger"
          aria-expanded={isMenuOpen}
          aria-controls="nav"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>

        <button className="btn btn-primary" onClick={() => handleNavigate('/contact')}>
          Book a Consultation <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}

export default Header;