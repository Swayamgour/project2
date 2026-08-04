import { Link, useLocation, useParams } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo1.png";
import mspAllianceBadge from "../assets/MSPAlliance-International-Association-of-Cloud-and-Managed-Service-Providers-1.png";
import bbbBadge from "../assets/BBB-Accrediation-3.png";
import upCityBadge from "../assets/Up-City-Award-Best-IL-2023-Winner-1.png";
import jjcBadge from "../assets/JJC-Badge-2.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ChevronRight, Cloud } from "lucide-react";
import { useGetCategoryQuery, useCreateContactMutation } from '../redux/api'; // API import

import {
  heroSlides,
  whyCards,
  partnerRows,
  benefits,
  industries,
  solutions,
  platforms,
  serviceFamilies,
  logos,
  successStories,
  testimonials,
  insights,
  contactInfo,
  clientLogo
} from "../config/data.js";

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

  // Contact form state
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [createContact, { isLoading: isSubmitting }] = useCreateContactMutation();
  const formRef = useRef(null);

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
    {
      name: "Strategy & Transformation",
      path: "/services",
    },
    {
      name: "Managed IT & Security",
      path: "/services",
    },
    {
      name: "Business Applications",
      path: "/services",
    },
    {
      name: "Data, AI & Integration",
      path: "/services",
    },
    {
      name: "Modern Work & Automation",
      path: "/services",
    },
    {
      name: "Talent",
      path: "/services",
    },
    {
      name: "Modern Work & Automation",
      path: "/services",
    },
  ];

  const microsoftSolutionsLink = [
    {
      name: "Dynamics 365 Business Central",
      path: "/platforms/dynamics-365-business-central",
    },
    {
      name: "Dynamics 365 Finance",
      path: "/platforms/dynamics-365-finance",
    },
    {
      name: "Dynamics 365 Sales",
      path: "/platforms/dynamics-365-sales",
    },
    {
      name: "Microsoft Copilot",
      path: "/platforms/microsoft-copilot",
    },
    {
      name: "Microsoft Fabric",
      path: "/platforms/microsoft-fabric",
    },
    {
      name: "Microsoft Azure Cloud",
      path: "/platforms/microsoft-azure-cloud",
    },
    {
      name: "Microsoft Azure Cloud",
      path: "/platforms/microsoft-azure-cloud",
    },
  ];

  // API data se footer links prepare karo
  const footerData = useMemo(() => {
    if (!data?.data) {
      return {
        services: [],
        microsoftSolutions: [],
        ourFields: [],
      };
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

  // Handle contact form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) return;

    setFormError("");
    const fd = new FormData(form);

    // Map frontend form fields to backend schema
    const payload = {
      fname: fd.get("fname"),
      lname: fd.get("lname"),
      email: fd.get("email"),
      phone: fd.get("phone") || "",
      company: fd.get("company"),
      jobTitle: fd.get("jobTitle") || "",
      leadType: "general",
      serviceArea: "",
      companySize: fd.get("size") || "",
      interestedIn: fd.get("interest") || "",
      message: fd.get("message"),
      sourcePageType: "contact",
      sourcePageTitle: "Contact Us - Footer",
      consent: fd.get("consent") === "on",
    };

    try {
      await createContact(payload).unwrap();
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Footer contact submission failed", err);
      setFormError(err.data?.message || "There was an error submitting your message. Please try again.");
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements["subscription-email"].value;
    console.log("Subscribe email:", email);
  };

  const location = useLocation();

  // console.log("Current location:",);

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
    <>
      {location.pathname !== "/contact" && (
        <section className="section bg-mist" id="contact">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow">Get In Touch</span>
              <h2 className="h-sec wide">Tell us what you're trying to fix</h2>
              <p className="lede">
                Describe the situation in your own words.
              </p>
            </div>
            <div className="contact-grid reveal">
              <aside className="contact-aside">
                <h2>What happens next</h2>
                <p>Three steps, usually inside a week.</p>
                <ol className="next-steps">
                  {contactInfo.steps.map((step, index) => (
                    <li key={index}>
                      <span className="ns-n">{index + 1}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
                <ul className="contact-facts">
                  {contactInfo.contactDetails.map((detail, index) => (
                    <li key={index}>
                      <svg>
                        <use href={detail.icon}></use>
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: detail.text }} />
                    </li>
                  ))}
                </ul>
              </aside>
              <div className="form-panel">
                {submitted ? (
                  <div className="form-done show" role="status">
                    <div className="ok">
                      <svg>
                        <use href="#i-check"></use>
                      </svg>
                    </div>
                    <h3>Message sent</h3>
                    <p>
                      Thanks — we've got it. A specialist will be in touch within one
                      business day.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} id="contactForm" noValidate onSubmit={handleSubmit}>
                    {formError && (
                      <div className="form-error" style={{
                        color: 'red',
                        marginBottom: '1rem',
                        padding: '0.75rem',
                        background: '#fee',
                        borderRadius: '4px'
                      }}>
                        {formError}
                      </div>
                    )}

                    <div className="form-row">
                      <div className="field">
                        <label htmlFor="footer-fname">
                          First name <span className="req">*</span>
                        </label>
                        <input
                          id="footer-fname"
                          name="fname"
                          type="text"
                          autoComplete="given-name"
                          required
                        />
                        <span className="err">Please enter your first name.</span>
                      </div>
                      <div className="field">
                        <label htmlFor="footer-lname">
                          Last name <span className="req">*</span>
                        </label>
                        <input
                          id="footer-lname"
                          name="lname"
                          type="text"
                          autoComplete="family-name"
                          required
                        />
                        <span className="err">Please enter your last name.</span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="field">
                        <label htmlFor="footer-email">
                          Work email <span className="req">*</span>
                        </label>
                        <input
                          id="footer-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                        />
                        <span className="err">Please enter a valid email address.</span>
                      </div>
                      <div className="field">
                        <label htmlFor="footer-phone">Phone</label>
                        <input
                          id="footer-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="field">
                        <label htmlFor="footer-company">
                          Company <span className="req">*</span>
                        </label>
                        <input
                          id="footer-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          required
                        />
                        <span className="err">Please enter your company name.</span>
                      </div>
                      {/* <div className="field">
                        <label htmlFor="footer-size">Organization size</label>
                        <select id="footer-size" name="size" defaultValue="">
                          <option value="">Select one</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1,000 employees</option>
                          <option value="1000+">1,000+ people</option>
                        </select>
                      </div> */}
                    </div>
                    <div className="field">
                      <label htmlFor="footer-interest">
                        What can we help with? <span className="req">*</span>
                      </label>
                      <select id="footer-interest" name="interest" required defaultValue="">

                        <option value="">Select one</option>
                        <option value="Cloud Migration">Strategy & Transformation</option>
                        <option value="Digital Transformation">Managed IT & Security</option>
                        <option value="Security & Compliance">Business Applications</option>
                        <option value="Business Process Automation">Data, AI & Integration</option>
                        <option value="IT Strategy">Modern Work & Automation</option>
                        <option value="Managed Services">Managed Services</option>
                        <option value="Training & Adoption">Talent</option>
                        {/* <option value="Modern workplace & automation">Modern Workplace & Automation</option> */}
                        <option value="Other">Other</option>
                      </select>
                      <span className="err">Please choose an option.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="footer-message">
                        Tell us about your situation <span className="req">*</span>
                      </label>
                      <textarea
                        id="footer-message"
                        name="message"
                        required
                        placeholder="What's happening today, and what would a good outcome look like?"
                      ></textarea>
                      <span className="err">Please add a short description.</span>
                    </div>
                    <label className="consent" htmlFor="footer-consent">
                      {/* <input id="footer-consent" name="consent" type="checkbox" required /> */}
                      <input
                        id="footer-consent"
                        name="consent"
                        type="checkbox"
                        defaultChecked
                        required
                      />
                      <span>
                        I agree that JJC Systems may contact me about my enquiry.
                      </span>
                    </label>
                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send your message"}
                      <svg>
                        <use href="#i-arrow-r"></use>
                      </svg>
                    </button>
                    <p className="form-note">
                      We reply to every message within one business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

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

                    {/* Empowering Your Business Through Managed IT,
                    <br /> Endpoint Expertise, and Digital Innovation. */}
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
                          15 <span>Mins</span>
                        </h1>
                        <p>Discovery Call</p>
                      </div>
                      <div className={styles.footerExperienceItem}>
                        <h1>100%</h1>
                        <p>Client Satisfaction</p>
                      </div>
                      <div className={styles.footerExperienceItem}>
                        <h1>
                          40+ <span>Years</span>
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
                <div className={styles.footerLinks}>
                  <h3>Services</h3>
                  {renderLinksWithViewAll(
                    servicesLink,
                    "/services",
                    "View All Services"
                  )}
                </div>

                <div className={styles.footerLinks}>
                  <h3>Microsoft Solutions</h3>
                  {renderLinksWithViewAll(
                    microsoftSolutionsLink,
                    "/platforms",
                    "View All Solutions"
                  )}
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
    </>
  );
};

export default Footer;