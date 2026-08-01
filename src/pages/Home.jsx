import { useRef } from "react";
import usePageEffects from "../hooks/usePageEffects.js";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
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
import { useGetCategoryQuery, useGetTestimonialsQuery } from "../redux/api.jsx";
import { Link } from "react-router-dom";




export default function Home() {
   const mainRef = useRef(null);
   useDocumentMeta(
      "JJC Systems \u2014 Microsoft Consulting, Managed IT & Business Applications",
      "JJC Systems is a one-stop technology partner for Microsoft consulting and adoption \u2014 Dynamics 365, Azure and Microsoft 365 \u2014 plus managed IT, security and custom business solutions built on the tools your teams already use.",
   );
   usePageEffects(mainRef);

   const { data } = useGetCategoryQuery()
   // const { data: testimonialData } = useGetTestimonialsQuery()
   const { data: testimonialData } = useGetTestimonialsQuery();

   const testimonials = testimonialData?.data?.items || [];

   console.log(testimonials)

   const industriesData = data?.data?.find(
      (item) => item.name === "Industries"
   );

   const platformsData = data?.data?.find(
      (item) => item.name === "Platforms"
   );

   const platforms = platformsData?.subcategories || [];

   const industries = industriesData?.subcategories || [];
   return (
      <main id="main" ref={mainRef}>
         {/* Hero Section */}
         <section
            className="hero"
            id="top"
            aria-roledescription="carousel"
            aria-label="JJC Systems highlights"
         >
            <div className="slides" id="slides">
               {heroSlides.map((slide, index) => (
                  <article
                     key={index}
                     className={`slide ${index === 0 ? 'active' : ''}`}
                     role="group"
                     aria-roledescription="slide"
                     aria-label={`${index + 1} of ${heroSlides.length}: ${slide.eyebrow}`}
                  >
                     <div className="slide-media">
                        <img
                           src={slide.image}
                           alt={slide.imageAlt}
                           loading={index === 0 ? "eager" : "lazy"}
                        />
                     </div>
                     <div className="slide-grid">
                        <div className="slide-copy">
                           <span className="eyebrow">{slide.eyebrow}</span>
                           <h1>{slide.title}</h1>
                           <p>{slide.description}</p>
                           <a className="btn btn-primary" href={slide.ctaLink}>
                              {slide.ctaText}{" "}
                              <svg>
                                 <use href="#i-arrow-r"></use>
                              </svg>
                           </a>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
            <div className="hero-ui">
               <button className="arrow" id="prev" aria-label="Previous slide">
                  <svg>
                     <use href="#i-arrow-l"></use>
                  </svg>
               </button>
               <div className="dots" id="dots" aria-label="Choose slide"></div>
               <button className="arrow" id="next" aria-label="Next slide">
                  <svg>
                     <use href="#i-arrow-r"></use>
                  </svg>
               </button>
            </div>
         </section>

         {/* Why Us Section */}
         <section className="section bg-paper" >
            <div className="wrap">
               <div className="why-intro reveal">
                  <span className="eyebrow">Why JJC Systems</span>
                  <h2 className="why-statement">
                     We are the <span className="accent">single partner</span> behind
                     everything Microsoft in your business — Dynamics 365, Azure and
                     Microsoft 365 — and behind{" "}
                     <span className="accent">
                        the wider technology your people depend on every day.
                     </span>
                  </h2>
               </div>
               <div className="why-grid">
                  {whyCards.map((card, index) => (
                     <article key={index} className="why-card reveal">
                        <div className="icon-tile">
                           <svg>
                              <use href={card.icon}></use>
                           </svg>
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                     </article>
                  ))}
               </div>
               <div className="partner-model">
                  <aside
                     className="partner-visual reveal"
                     aria-label="One team and one point of contact"
                  >
                     <div className="hex-shell">
                        <div className="hex-inner">
                           <svg>
                              <use href="#i-shield"></use>
                           </svg>
                           <strong>
                              One team.
                              <br />
                              One point of contact.
                           </strong>
                           <ul>
                              <li>Applications</li>
                              <li>Infrastructure</li>
                              <li>Security & Monitoring</li>
                              <li>Adoption & Procurement</li>
                           </ul>
                        </div>
                     </div>
                  </aside>
                  <div className="partner-details">
                     {partnerRows.map((row, index) => (
                        <article key={index} className="partner-row reveal">
                           <div className="partner-icon">
                              <svg>
                                 <use href={row.icon}></use>
                              </svg>
                           </div>
                           <div>
                              <span className="partner-tag">{row.tag}</span>
                              <h3>{row.title}</h3>
                              <p>{row.description}</p>
                           </div>
                        </article>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Benefits Section */}
         <section className="section bg-navy">
            <div className="wrap">
               <div className="sec-head reveal">
                  <span className="eyebrow">What You Get</span>
                  <h2 className="h-sec wide">
                     The difference shows up in your day-to-day.
                  </h2>
                  <p className="lede">
                     Five things our clients tell us changed once we started working together.
                  </p>
               </div>
               <div className="benefits">
                  {benefits.map((benefit, index) => (
                     <div key={index} className="benefit reveal">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Industries Section */}
         <section className="section bg-paper" id="industries">
            <div className="wrap">
               <div className="sec-head reveal">
                  <span className="eyebrow">Industries</span>
                  <h2 className="h-sec">
                     Industry and business first. Our custom solutions prove it.
                  </h2>
                  <p className="lede">
                     We don't lead with a product list. We start with how your industry
                     actually runs — its deadlines, its regulators, its reporting, the
                     way work moves between teams — and build the technology to fit it.
                  </p>
               </div>
               <p style={{ margin: "-14px 0 30px" }}>
                  <a className="link-more" href="/industries">
                     Or explore all 11 industries in detail{" "}
                     <svg>
                        <use href="#i-arrow-r"></use>
                     </svg>
                  </a>
               </p>
               <div className="ind-cols">
                  {industries.map((category) => (
                     <div key={category._id} className="reveal">
                        <h3 className="rule-head">
                           {category.name}
                        </h3>

                        <ul className="ind-list">
                           {category.items.map((item) => (
                              <li key={item._id}>
                                 <Link to={`/industries/${item.slug}`}>
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Solutions Section */}
         <section className="section bg-mist" id="solutions">
            <div className="wrap">
               <div className="sec-head reveal">
                  <span className="eyebrow">Custom Solutions</span>
                  <h2 className="h-sec">
                     Built on Dynamics 365. Measured in business outcomes.
                  </h2>
                  <p className="lede">
                     Our solutions run inside Microsoft Dynamics 365 Business Applications
                     and the Office tools your teams already use every day. There's no new
                     system to learn and no separate login to remember — which is why
                     adoption stops being a change programme and starts being a Tuesday.
                  </p>
               </div>
               <div className="grid g-3">
                  {solutions.cards.map((sol, index) => (
                     <div key={index} className="why-card reveal in">
                        <div className="icon-tile">
                           <svg>
                              <use href={sol.icon}></use>
                           </svg>
                        </div>
                        <span className="sol-tag">{sol.tag}</span>
                        <h3>{sol.title}</h3>
                        <p>{sol.description}</p>
                     </div>
                  ))}
               </div>
               <div className="process reveal">
                  {solutions.process.map((step, index) => (
                     <div key={index} className="step">
                        <div className="step-n">{step.number}</div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                     </div>
                  ))}
               </div>
               {/* <div className="sol-note reveal">
                  <svg>
                     <use href="#i-check"></use>
                  </svg>
                  <p>
                     <b></b>
                  </p>
               </div> */}

               <div className="platform-board-footer reveal">
                  <p>
                     <b>Every solution ships complete.</b>Fixed-price implementation,
                     data migration from your current systems, integration with the tools
                     you're keeping, and adoption training for every user — not just the
                     project team.
                  </p>
                  <a className="link-more" href="#contact">
                     Explore all custom solutions{" "}
                     <svg>2
                        <use href="#i-arrow-r"></use>
                     </svg>
                  </a>
               </div>
            </div>
         </section>

         {/* Platforms Section */}
         <section className="section platforms-section" id="platforms">
            <div className="wrap">
               <div className="platforms-intro reveal">
                  <div className="sec-head">
                     <span className="eyebrow">Platforms</span>
                     <h2 className="h-sec">One connected Microsoft ecosystem</h2>
                  </div>
                  <p className="platforms-summary">
                     We help organizations select, implement and support the platforms
                     that power modern work, business operations, data and cloud
                     infrastructure — with one accountable team across the entire
                     environment.
                  </p>
               </div>
               <p style={{ margin: "-14px 0 30px" }}>
                  <a className="link-more" href="/platforms">
                     Or explore all 17 platforms in detail{" "}
                     <svg>
                        <use href="#i-arrow-r"></use>
                     </svg>
                  </a>
               </p>
               <div
                  className="platform-board reveal"
                  aria-label="Microsoft platforms supported by JJC Systems"
               >
                  {platforms.map((platform) => (
                     <article key={platform._id} className="platform-group">
                        <div className="platform-group-head">
                           {/* <span
                              className="platform-group-icon"
                              aria-hidden="true"
                           >
                              <svg>
                                 <use href={`#${platform.icon}`}></use>
                              </svg>
                           </span> */}

                           <h3>{platform.name}</h3>
                        </div>

                        <p>{platform.description}</p>

                        <ul className="platform-clean-list">
                           {platform.items?.map((item) => (
                              <li key={item._id}>
                                 <Link to={`/platforms/${item.slug}`}>
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </article>
                  ))}
               </div>
               <div className="platform-board-footer reveal">
                  <p>
                     <b>Not sure where to begin?</b> We map the right platform to your
                     business priorities before recommending a solution.
                  </p>
                  <a className="link-more" href="#contact">
                     Discuss your platform roadmap{" "}
                     <svg>
                        <use href="#i-arrow-r"></use>
                     </svg>
                  </a>
               </div>
            </div>
         </section>

         {/* Services Section */}
         <section className="section bg-paper" id="services">
            <div className="wrap">
               <div className="services-intro-row reveal">
                  <div className="sec-head">
                     <span className="eyebrow">What We Do</span>
                     <h2 className="h-sec wide">
                        Six service areas. Every capability your technology function needs.
                     </h2>
                     <p className="lede">
                        Each category brings related services together under one accountable
                        delivery team. Open a category to see the full scope, the business
                        problem each service solves, and the specialists assigned to the work.
                     </p>
                  </div>
                  {/* <aside className="services-guidance">
                     <b>One partner, not six vendors.</b>We assemble the right architects,
                     specialists and delivery leads around your requirement while keeping
                     one point of accountability.
                  </aside> */}
               </div>
               <div className="service-catalog reveal">
                  {serviceFamilies.map((family, index) => (
                     <details
                        key={index}
                        className="service-family"
                        open={index === 0}
                     >
                        <summary>
                           <span className="service-family-icon">
                              <svg>
                                 <use href={family.icon}></use>
                              </svg>
                           </span>
                           <span className="service-family-title">
                              <b>{family.title}</b>
                              <span>{family.capabilities} capabilities</span>
                           </span>
                           <span className="service-family-summary">
                              {family.summary}
                           </span>
                           <span className="service-toggle" aria-hidden="true"></span>
                        </summary>
                        <div className="service-family-body">
                           {/* <div className="family-team">
                              <svg>
                                 <use href="#i-users"></use>
                              </svg>
                              <span>
                                 <b>Core delivery team</b>
                                 {family.team}
                              </span>
                           </div> */}
                           <div className="service-subgrid">
                              {family.services.map((service, idx) => (
                                 <article key={idx} className="service-subitem">
                                    <h4>
                                       <a href={service.link}>{service.title}</a>
                                    </h4>
                                    <p>{service.description}</p>
                                    <div className="subteam">
                                       <svg>
                                          <use href="#i-users"></use>
                                       </svg>
                                       <span>
                                          <b>Your team</b>
                                          {service.team}
                                       </span>
                                    </div>
                                    <a className="link-more" href={service.link}>
                                       Explore this service{" "}
                                       <svg>
                                          <use href="#i-arrow-r"></use>
                                       </svg>
                                    </a>
                                 </article>
                              ))}
                           </div>
                        </div>
                     </details>
                  ))}
               </div>
            </div>
         </section>

         {/* Clients Section */}
         <section className="section bg-mist" id="clients">
            <div className="wrap">
               <div className="sec-head center reveal">
                  <span className="eyebrow">Clients</span>
                  <h2 className="h-sec wide">
                     Organizations that trust us with their technology
                  </h2>
                  <p className="lede">
                     From regulated enterprises to growing mid-market teams and nonprofits —
                     the mix is deliberate, and it's why we understand more than one way of
                     working.
                  </p>
               </div>
               <div className="logos reveal">
                  {clientLogo?.map((logo, index) => (
                     <div key={index} className="logo-cell">
                        {logo.image ? (
                           <img src={logo.image} alt={logo.alt} />
                        ) : (
                           <span className="logo-ph">{logo.placeholder}</span>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Success Stories Section */}
         <section className="section bg-paper" id="success-stories">
            <div className="wrap">
               <div className="sec-head reveal">
                  <span className="eyebrow">Success Stories</span>
                  <h2 className="h-sec wide">
                     Business outcomes, not just completed implementations
                  </h2>
                  <p className="lede">
                     These sample stories show how the section can communicate the challenge,
                     the solution and the measurable result in language business and technology
                     leaders can understand.
                  </p>
               </div>
               <div className="success-grid">
                  {successStories.map((story, index) => (
                     <article key={index} className="story-card reveal">
                        <div className="story-top">
                           <div className="story-kicker">
                              <span className="story-industry">{story.industry}</span>
                              <span className="demo-chip">Sample story</span>
                           </div>
                           <h3>{story.title}</h3>
                           <p className="story-summary">{story.summary}</p>
                        </div>
                        <div className="story-metrics">
                           {story.metrics.map((metric, idx) => (
                              <div key={idx} className="story-metric">
                                 <b>{metric.value}</b>
                                 <span>{metric.label}</span>
                              </div>
                           ))}
                        </div>
                        <div className="story-body">
                           <h4>What changed</h4>
                           <ul className="story-outcomes">
                              {story.outcomes.map((outcome, idx) => (
                                 <li key={idx}>
                                    <svg>
                                       <use href="#i-check"></use>
                                    </svg>
                                    <span>{outcome}</span>
                                 </li>
                              ))}
                           </ul>
                           <a className="link-more" href="#contact">
                              View the sample story{" "}
                              <svg>
                                 <use href="#i-arrow-r"></use>
                              </svg>
                           </a>
                        </div>
                     </article>
                  ))}
               </div>
               {/* <p className="demo-disclaimer">
                  <b>Demo content:</b> The organizations, measurements and outcomes above are
                  illustrative placeholders. Replace them with verified client results and
                  approved references before publishing the website.
               </p> */}
            </div>
         </section>

         {/* Testimonials Section */}
         <section className="section bg-navy" id="testimonials">
            <div className="wrap">
               <div className="sec-head reveal">
                  <span className="eyebrow">Client Testimonials</span>
                  <h2 className="h-sec">See what our clients have to say</h2>
                  <p className="lede">
                     Quality of work, speed of response, and technology that improves both the
                     daily grind and the long-term picture.
                  </p>
               </div>
               <div className="quote-grid">
                  {testimonials.map((testimonial) => (
                     <figure key={testimonial._id} className="quote reveal">
                        <div className="quote-head">
                           <div
                              className="stars"
                              role="img"
                              aria-label="Rated 5 out of 5"
                           >
                              {[...Array(5)].map((_, index) => (
                                 <svg key={index}>
                                    <use href="#i-star"></use>
                                 </svg>
                              ))}
                           </div>

                          
                        </div>

                        <blockquote>
                           {testimonial.description}
                        </blockquote>

                        <figcaption className="who">
                           <span className="avatar" aria-hidden="true">
                              {testimonial.title
                                 ?.split(" ")
                                 .map((word) => word[0])
                                 .join("")
                                 .substring(0, 2)}
                           </span>

                           <span className="who-meta">
                              <b>{testimonial.title}</b>
                              <span>{testimonial.subtitle}</span>
                           </span>
                        </figcaption>

                         <span className="company-logo">
                              {testimonial.subtitle?.split(",")[1]?.trim()}
                           </span>
                     </figure>
                  ))}
               </div>
            </div>
         </section>

         {/* Insights Section */}
         <section className="section bg-paper" id="insights">
            <div className="wrap">
               <div
                  className="sec-head reveal"
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "flex-end",
                     gap: "32px",
                     maxWidth: "none",
                     flexWrap: "wrap",
                  }}
               >
                  <div style={{ maxWidth: "700px" }}>
                     <span className="eyebrow">Insights</span>
                     <h2 className="h-sec wide">
                        Practical guidance for better technology decisions
                     </h2>
                     <p className="lede">
                        Blogs, guides, resources, checklists and straightforward answers
                        designed for business and technology leaders.
                     </p>
                  </div>
                  <a className="btn btn-outline" href="#insights">
                     View all resources{" "}
                     <svg>
                        <use href="#i-arrow-r"></use>
                     </svg>
                  </a>
               </div>
               <div className="insights-grid">
                  {insights.map((post, index) => (
                     <a key={index} className="post reveal" href={post.link}>
                        <div className="post-img">
                           <svg>
                              <use href={post.icon}></use>
                           </svg>
                        </div>
                        <div className="post-body">
                           <div className="post-meta">
                              <span className="chip">{post.type}</span>
                              <span>{post.meta}</span>
                           </div>
                           <h3>{post.title}</h3>
                           <p>{post.description}</p>
                           <span className="link-more">
                              {post.cta}{" "}
                              <svg>
                                 <use href="#i-arrow-r"></use>
                              </svg>
                           </span>
                        </div>
                     </a>
                  ))}
               </div>
            </div>
         </section>

         {/* Contact Section */}
         <section className="section bg-mist" id="contact">
            <div className="wrap">
               <div className="sec-head center reveal">
                  <span className="eyebrow">Get In Touch</span>
                  <h2 className="h-sec wide">Tell us what you're trying to fix</h2>
                  <p className="lede">
                     No sales script and no obligation. Describe the situation in your own
                     words and we'll tell you honestly whether we're the right people for it.
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
                     <form id="contactForm" noValidate>
                        <div className="form-row">
                           <div className="field">
                              <label htmlFor="fname">
                                 First name <span className="req">*</span>
                              </label>
                              <input
                                 id="fname"
                                 name="fname"
                                 type="text"
                                 autoComplete="given-name"
                                 required
                              />
                              <span className="err">Please enter your first name.</span>
                           </div>
                           <div className="field">
                              <label htmlFor="lname">
                                 Last name <span className="req">*</span>
                              </label>
                              <input
                                 id="lname"
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
                              <label htmlFor="email">
                                 Work email <span className="req">*</span>
                              </label>
                              <input
                                 id="email"
                                 name="email"
                                 type="email"
                                 autoComplete="email"
                                 required
                              />
                              <span className="err">Please enter a valid email address.</span>
                           </div>
                           <div className="field">
                              <label htmlFor="phone">Phone</label>
                              <input
                                 id="phone"
                                 name="phone"
                                 type="tel"
                                 autoComplete="tel"
                              />
                           </div>
                        </div>
                        <div className="form-row">
                           <div className="field">
                              <label htmlFor="company">
                                 Company <span className="req">*</span>
                              </label>
                              <input
                                 id="company"
                                 name="company"
                                 type="text"
                                 autoComplete="organization"
                                 required
                              />
                              <span className="err">Please enter your company name.</span>
                           </div>
                           <div className="field">
                              <label htmlFor="size">Organization size</label>
                              <select id="size" name="size">
                                 <option value="">Select one</option>
                                 {contactInfo.organizationSizes.map((size, idx) => (
                                    <option key={idx}>{size}</option>
                                 ))}
                              </select>
                           </div>
                        </div>
                        <div className="field">
                           <label htmlFor="interest">
                              What can we help with? <span className="req">*</span>
                           </label>
                           <select id="interest" name="interest" required>
                              <option value="">Select one</option>
                              {contactInfo.interests.map((interest, idx) => (
                                 <option key={idx}>{interest}</option>
                              ))}
                           </select>
                           <span className="err">Please choose an option.</span>
                        </div>
                        <div className="field">
                           <label htmlFor="message">
                              Tell us about your situation <span className="req">*</span>
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              required
                              placeholder="What's happening today, and what would a good outcome look like?"
                           ></textarea>
                           <span className="err">Please add a short description.</span>
                        </div>
                        <label className="consent" htmlFor="consent">
                           <input id="consent" name="consent" type="checkbox" required />
                           <span>
                              I agree that JJC Systems may contact me about my enquiry.
                           </span>
                        </label>
                        <button className="btn btn-primary" type="submit">
                           Send your message{" "}
                           <svg>
                              <use href="#i-arrow-r"></use>
                           </svg>
                        </button>
                        <p className="form-note">
                           We reply to every message within one business day.
                        </p>
                     </form>
                     <div className="form-done" id="formDone" role="status">
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
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}