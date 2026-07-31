import { Link } from "react-router-dom";
import { useMemo } from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo1.png";
import mspAllianceBadge from "../assets/MSPAlliance-International-Association-of-Cloud-and-Managed-Service-Providers-1.png";
import bbbBadge from "../assets/BBB-Accrediation-3.png";
import upCityBadge from "../assets/Up-City-Award-Best-IL-2023-Winner-1.png";
import jjcBadge from "../assets/JJC-Badge-2.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { useGetCategoryQuery } from '../redux/api'; // API import

const COMPANY_LINKS = [
  { label: "About Us", to: "/about-us" },
  { label: "Team", to: "/team" },
  { label: "Locations", to: "/contact" },
  { label: "Partners", to: "/partners" },
  { label: "Careers", to: "/careers" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jjc-systems?original_referer=https%3A%2F%2Fjjcsystems.com%2F",
    Icon: FaLinkedinIn,
  },
  {
    label: "Twitter", href: "https://twitter.com/JJCSystems",
    Icon: FaTwitter
  },
  {
    label: "FacebookIcon",
    href: "https://www.facebook.com/people/JJC-Systems-Computer-Services-Azure-Intune/100089050985358/",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram", href: "https://www.instagram.com/jjcsystems/",
    Icon: FaInstagram
  },
];

const Footer = () => {
  // API se data fetch karo
  const { data, isLoading, error } = useGetCategoryQuery();

  // Helper function to render links with "View All"
  const renderLinksWithViewAll = (links, viewAllPath, viewAllLabel = "View All") => {
    if (!links || links.length === 0) {
      return <ul><li>No items available</li></ul>;
    }

    const firstSix = links.slice(0, 6);
    const hasMore = links.length > 6;

    return (
      <ul>
        {firstSix.map((link) => (
          <li key={link.slug || link.label}>
            <Link to={link.to || link.path || `/${link.slug}`}>
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

  // API data se footer links prepare karo
  const footerData = useMemo(() => {
    if (!data?.data) {
      return {
        services: [],
        microsoftSolutions: [],
        ourFields: [],
      };
    }

    // Services category (slug: "services")
    const servicesCategory = data.data.find(cat => cat.slug === "services");

    // Platforms category (slug: "platforms") - Microsoft Solutions
    const platformsCategory = data.data.find(cat => cat.slug === "platforms");

    // Industries category (slug: "industries") - Our Fields
    const industriesCategory = data.data.find(cat => cat.slug === "industries");

    // Transform subcategory items into links
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

  // Loading state
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
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerTop}>
          <div className={styles.container}>
            <div className={styles.footerTopRow}>
              <div className={styles.leftContent}>
                <Link to="/" className={styles.logo}>
                  <img src={logo} alt="JJC Systems Computer Services" />
                </Link>

                <p className={styles.tagline}>
                  Empowering Your Business Through Managed IT,
                  <br /> Endpoint Expertise, and Digital Innovation.
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
                    <img src={mspAllianceBadge} alt="MSP Alliance International Association of Cloud and Managed Service Providers" />
                  </div>
                  <div className={styles.footerClientImg}>
                    <img src={bbbBadge} alt="BBB Accreditation" />
                  </div>
                  <div className={styles.footerClientImg}>
                    <img src={upCityBadge} alt="Up City Award - Best IL 2023 Winner" />
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
                      <h1>
                        2 <span>Mins</span>
                      </h1>
                      <p>Response Time</p>
                    </div>
                    <div className={styles.footerExperienceItem}>
                      <h1>99%</h1>
                      <p>Client Satisfaction</p>
                    </div>
                    <div className={styles.footerExperienceItem}>
                      <h1>
                        15+ <span>Years</span>
                      </h1>
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
              {/* Services - API data se */}
              <div className={styles.footerLinks}>
                <h3>Services</h3>
                {renderLinksWithViewAll(
                  footerData.services,
                  "/services",
                  "View All Services"
                )}
              </div>

              {/* Microsoft Solutions - API data se */}
              <div className={styles.footerLinks}>
                <h3>Microsoft Solutions</h3>
                {renderLinksWithViewAll(
                  footerData.microsoftSolutions,
                  "/platforms",
                  "View All Solutions"
                )}
              </div>

              {/* Our Fields - API data se */}
              <div className={styles.footerLinks}>
                <h3>Industries</h3>
                {renderLinksWithViewAll(
                  footerData.ourFields,
                  "/industries",
                  "View All Industries"
                )}
              </div>

              {/* Company - Static */}
              {/* <div className={styles.footerLinks}>
                <h3>Company</h3>
                <ul>
                  {COMPANY_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div> */}

              <div className={styles.footerContactInfo}>
                <div className={styles.footerContactInfoItem}>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+1-888-329-0625">+1-888-329-0625</a>
                    <br />
                    <a href="tel:+1-713-730-5087">+1-713-730-5087</a>
                  </p>
                </div>
                <div className={styles.footerContactInfoItem}>
                  <h4>E-Mail</h4>
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
                      <Icon size={18} style={{
                        fill: "currentColor",
                        stroke: "none",
                      }} />
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
  );
};

export default Footer;