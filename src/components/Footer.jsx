import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo1.png";
import mspAllianceBadge from "../assets/MSPAlliance-International-Association-of-Cloud-and-Managed-Service-Providers-1.png";
import bbbBadge from "../assets/BBB-Accrediation-3.png";
import upCityBadge from "../assets/Up-City-Award-Best-IL-2023-Winner-1.png";
import jjcBadge from "../assets/JJC-Badge-2.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { useGetCategoryQuery } from '../redux/api';
import ContactSection from "../components/ContactForm"; // 👈 Import ContactSection

const COMPANY_LINKS = [
  { label: "About Us", to: "/About" },
  { label: "Why Us", to: "/why-us" },
  { label: "Our Approach", to: "/why-us/our-approach" },
  { label: "Locations", to: "/why-us/locations" },
  { label: "Partners", to: "/why-us/partners" },
  { label: "Careers", to: "/why-us/careers" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jjc-systems?original_referer=https%3A%2F%2Fjjcsystems.com%2F",
    Icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/JJCSystems",
    Icon: FaTwitter
  },
  {
    label: "FacebookIcon",
    href: "https://www.facebook.com/people/JJC-Systems-Computer-Services-Azure-Intune/100089050985358/",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jjcsystems/",
    Icon: FaInstagram
  },
];

const Footer = () => {
  const { data, isLoading } = useGetCategoryQuery();
  const location = useLocation();

  const renderLinksWithViewAll = (links, viewAllPath, viewAllLabel = "View All") => {
    if (!links || links.length === 0) {
      return <ul><li>No items available</li></ul>;
    }

    const firstSix = links.slice(0, 6);
    const hasMore = links.length > 6;

    return (
      <ul>
        {firstSix.map((link) => (
          <li key={link.slug || link.label || link.name}>
            <Link to={link.to || link.path || `/${link.slug}` || link.link}>
              {link.label || link.name}
            </Link>
          </li>
        ))}
        {hasMore && (
          <li className={styles.viewAllLink}>
            <Link to={viewAllPath}>
              {viewAllLabel} <ChevronRight size={14} />
            </Link>
          </li>
        )}
      </ul>
    );
  };

  const servicesLink = [
    { name: "Strategy & Transformation", path: "/services" },
    { name: "Managed IT & Security", path: "/services" },
    { name: "Business Applications", path: "/services" },
    { name: "Data, AI & Integration", path: "/services" },
    { name: "Modern Work & Automation", path: "/services" },
    { name: "Talent", path: "/services" },
  ];

  const microsoftSolutionsLink = [
    { name: "Dynamics 365 Business Central", path: "/platforms/dynamics-365-business-central" },
    { name: "Dynamics 365 Finance", path: "/platforms/dynamics-365-finance" },
    { name: "Dynamics 365 Sales", path: "/platforms/dynamics-365-sales" },
    { name: "Microsoft Copilot", path: "/platforms/microsoft-copilot" },
    { name: "Microsoft Fabric", path: "/platforms/microsoft-fabric" },
    { name: "Microsoft Azure Cloud", path: "/platforms/microsoft-azure-cloud" },
  ];

  const footerData = useMemo(() => {
    if (!data?.data) {
      return { services: [], microsoftSolutions: [], ourFields: [] };
    }

    const servicesCategory = data.data.find(cat => cat.slug === "services");
    const platformsCategory = data.data.find(cat => cat.slug === "platforms");
    const industriesCategory = data.data.find(cat => cat.slug === "industries");

    const transformItems = (items, categorySlug) => {
      if (!items) return [];
      return items.flatMap(sub =>
        sub.items?.map(item => ({
          label: item.name,
          slug: item.slug,
          to: `/${categorySlug}/${item.slug}`,
          path: `/${categorySlug}/${item.slug}`,
        })) || []
      );
    };

    return {
      services: transformItems(servicesCategory?.subcategories, "services"),
      microsoftSolutions: transformItems(platformsCategory?.subcategories, "platforms"),
      ourFields: transformItems(industriesCategory?.subcategories, "industries"),
    };
  }, [data]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements["subscription-email"].value;
    console.log("Subscribe email:", email);
  };

  if (isLoading) {
    return (
      <footer className={styles.footer}>
        <div className="wrap">
          <div className={styles.footerBottom}>
            <div className={styles.container}>
              <p>Loading footer content...</p>
            </div>
          </div>
        </div>
        
      </footer>
    );
  }

  return (
    <>
      {/* 👇 Contact Section - Ab component use kar rahe hain */}
      {location.pathname !== "/contact" && <ContactSection />}

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className="">
          <div className={styles.footerTop}>
            <div className={styles.container}>
              <div className={styles.footerTopRow}>
                <div className={styles.leftContent}>
                  <Link to="/" className={styles.logo}>
                    <img src={logo} alt="JJC Systems Computer Services" />
                  </Link>

                  <p className={styles.tagline}>
                    Industry-focused technology consulting. One accountable partner for Microsoft consulting, managed IT, cybersecurity, and business applications.
                  </p>

                  <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                    <div className={styles.subscribeBox}>
                      <input
                        type="email"
                        name="subscription-email"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className={styles.themeBtn}>
                        Get Started
                      </button>
                    </div>
                  </form>

                  <div className={styles.footerClients}>
                    <div className={styles.footerClientImg}>
                      <img src={mspAllianceBadge} alt="MSP Alliance" />
                    </div>
                    <div className={styles.footerClientImg}>
                      <img src={bbbBadge} alt="BBB Accreditation" />
                    </div>
                    <div className={styles.footerClientImg}>
                      <img src={upCityBadge} alt="Up City Award" />
                    </div>
                    <div className={styles.footerClientImg}>
                      <img src={jjcBadge} alt="JJC Badge" />
                    </div>
                  </div>
                </div>

                <div className={styles.rightContent}>
                  <div className={styles.rightContentInner}>
                    <h2>Let&rsquo;s get started on something great</h2>
                    <p>
                      Our team of IT experts looks forward to meeting with you <br /> and providing
                      valuable insights tailored to your business.
                    </p>

                    <a
                      href="https://outlook.office365.com/book/ConnectWithJJCSystems@jjcsystems.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.themeBtn}
                    >
                      Get an appointment now
                    </a>

                    <div className={styles.footerExperience}>
                      <div className={styles.footerExperienceItem}>
                        <p className={styles.footerStat}>15 <span>Mins</span></p>
                        <p>Discovery Call</p>
                      </div>
                      <div className={styles.footerExperienceItem}>
                        <p className={styles.footerStat}>100%</p>
                        <p>Client Satisfaction</p>
                      </div>
                      <div className={styles.footerExperienceItem}>
                        <p className={styles.footerStat}>40+ <span>Years</span></p>
                        <p>Field Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.container}>
              <div className={styles.footerAllLinksWrap}>
                <div className={styles.footerLinks}>
                  <h3>Services</h3>
                  {renderLinksWithViewAll(servicesLink, "/services", "View All Services")}
                </div>

                <div className={styles.footerLinks}>
                  <h3>Microsoft Solutions</h3>
                  {renderLinksWithViewAll(microsoftSolutionsLink, "/platforms", "View All Solutions")}
                </div>

                <div className={styles.footerLinks}>
                  <h3>Company</h3>
                  <ul>
                    {COMPANY_LINKS.map((link) => (
                      <li key={link.label}>
                        <Link to={link.to}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.footerContactInfo}>
                  <div className={styles.footerContactInfoItem}>
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+1-888-329-0625">+1-888-329-0625</a>
                      <br />
                      <a href="tel:+1-713-730-5087">+1-713-730-5087</a>
                      <br />
                      <a href="tel:+1-312-585-7555">+1-312-585-7555</a>
                    </p>
                  </div>
                  <div className={styles.footerContactInfoItem}>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@jjcsystems.com">info@jjcsystems.com</a>
                      <br />
                      <a href="mailto:support@jjcsystems.com">support@jjcsystems.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.copyrightArea}>
            <div className={styles.container}>
              <div className={styles.copyrightRow}>
                <ul className={styles.socialLinks}>
                  {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                        <Icon size={18} style={{ fill: "currentColor", stroke: "none" }} />
                      </a>
                    </li>
                  ))}
                </ul>

                <p className={styles.copyrightText}>
                  &copy; {new Date().getFullYear()} JJC Systems. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;