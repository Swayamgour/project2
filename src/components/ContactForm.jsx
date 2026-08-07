import { useRef, useState } from "react";
import { useCreateContactMutation } from "../redux/api";
import { contactInfo } from "../config/data.js";

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState("");
    const [createContact, { isLoading: isSubmitting }] = useCreateContactMutation();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        if (!form.checkValidity()) return;

        setFormError("");
        const fd = new FormData(form);

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
            console.error("Contact submission failed", err);
            setFormError(err.data?.message || "There was an error submitting your message. Please try again.");
        }
    };

    return (
        <section className="section bg-mist" id="contact">
            <div className="wrap">
                <div className="sec-head center reveal">
                    <span className="eyebrow">Get In Touch</span>
                    <h2 className="h-sec wide">Tell us what you're trying to fix</h2>
                    <p className="lede">Describe the situation in your own words.</p>
                </div>

                <div className="contact-grid reveal">
                    {/* Left Side - Contact Info */}
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

                    {/* Right Side - Contact Form */}
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
                                        <label htmlFor="contact-fname">
                                            First name <span className="req">*</span>
                                        </label>
                                        <input
                                            id="contact-fname"
                                            name="fname"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                        />
                                        <span className="err">Please enter your first name.</span>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="contact-lname">
                                            Last name <span className="req">*</span>
                                        </label>
                                        <input
                                            id="contact-lname"
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
                                        <label htmlFor="contact-email">
                                            Work email <span className="req">*</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                        />
                                        <span className="err">Please enter a valid email address.</span>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="contact-phone">Phone</label>
                                        <input
                                            id="contact-phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="field">
                                        <label htmlFor="contact-company">
                                            Company <span className="req">*</span>
                                        </label>
                                        <input
                                            id="contact-company"
                                            name="company"
                                            type="text"
                                            autoComplete="organization"
                                            required
                                        />
                                        <span className="err">Please enter your company name.</span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label htmlFor="contact-interest">
                                        What can we help with? <span className="req">*</span>
                                    </label>
                                    <select id="contact-interest" name="interest" required defaultValue="">
                                        <option value="">Select one</option>
                                        <option value="Cloud Migration">Strategy & Transformation</option>
                                        <option value="Digital Transformation">Managed IT & Security</option>
                                        <option value="Security & Compliance">Business Applications</option>
                                        <option value="Business Process Automation">Data, AI & Integration</option>
                                        <option value="IT Strategy">Modern Work & Automation</option>
                                        <option value="Managed Services">Managed Services</option>
                                        <option value="Training & Adoption">Talent</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <span className="err">Please choose an option.</span>
                                </div>

                                <div className="field">
                                    <label htmlFor="contact-message">
                                        Tell us about your situation <span className="req">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        placeholder="What's happening today, and what would a good outcome look like?"
                                    ></textarea>
                                    <span className="err">Please add a short description.</span>
                                </div>

                                <label className="consent" htmlFor="contact-consent">
                                    <input
                                        id="contact-consent"
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
    );
};

export default ContactSection;