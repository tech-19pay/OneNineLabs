"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.company) {
      setErrorMessage("Please fill in email and company name.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage: "contact_page_form",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      console.error("Contact page form error:", err);
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const siteUrl = "https://oneninelabs.com";
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: `${siteUrl}/contact` },
    ],
  };
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OneNineLabs",
    url: siteUrl,
    logo: `${siteUrl}/tech_banner.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8588807039",
        contactType: "customer service",
        email: "19@oneninelabs.com",
        availableLanguage: ["en", "hi"],
        areaServed: ["IN", "Worldwide"],
        contactOption: "TollFree",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: ["https://github.com/oneninelabs", "https://linkedin.com/company/oneninelabs", "https://twitter.com/oneninelabs"],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast will OneNineLabs respond to my inquiry?",
        acceptedAnswer: { "@type": "Answer", text: "We guarantee an engineer response within 12 hours for all inquiries to 19@oneninelabs.com or via phone +91 85888 07039. For urgent enterprise requests, we offer same-day architecture calls." },
      },
      {
        "@type": "Question",
        name: "What info should I include when contacting OneNineLabs?",
        acceptedAnswer: { "@type": "Answer", text: "Share your goals, tech stack, timeline, and budget range. Even a 2-line brief helps us prep a tailored architecture review and estimate before the call." },
      },
      {
        "@type": "Question",
        name: "Where is OneNineLabs located and do you work worldwide?",
        acceptedAnswer: { "@type": "Answer", text: "We are based in Lucknow, Uttar Pradesh, India (serving Farrukhabad region and worldwide). We work hybrid — on-site when needed, otherwise fully remote with 99.9% uptime SLAs and daily standups in your timezone." },
      },
      {
        "@type": "Question",
        name: "Can I schedule a call instead of filling the form?",
        acceptedAnswer: { "@type": "Answer", text: "Absolutely — email 19@oneninelabs.com or call +91 85888 07039 to book a 30-min discovery call. Or use the form and we’ll propose slots within 12h." },
      },
      {
        "@type": "Question",
        name: "Is my data secure when I contact you?",
        acceptedAnswer: { "@type": "Answer", text: "Yes — all contact submissions are encrypted, stored in our secure oneninecontact MongoDB with access controls, and never shared. We are SOC 2-ready and Zero-Trust by default." },
      },
    ],
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: "#ffffff", paddingTop: "96px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "14px 0" }}>
          <ol style={{ display: "flex", gap: "8px", alignItems: "center", listStyle: "none", margin: 0, padding: 0, fontSize: "13px", color: "#64748b" }}>
            <li><Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "#cbd5e1" }}>/</li>
            <li aria-current="page" style={{ color: "#0f172a", fontWeight: 700 }}>Contact Us</li>
          </ol>
        </div>
      </nav>

      {/* Hero Banner — WHITE THEME */}
      <section style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", color: "#0f172a", paddingTop: "40px", paddingBottom: "70px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", borderRadius: "30px", padding: "6px 18px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
            Get in Touch &bull; Contact Us
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", letterSpacing: "-1.5px", marginBottom: "20px", lineHeight: "1.1", color: "#0f172a" }}>
            Contact Our Engineering Team
          </h1>
          <p style={{ fontSize: "18px", color: "#475569", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            Have a custom software project, AI automation idea, or enterprise inquiry? Send us a message — our solutions architects at{" "}
            <a href="mailto:19@oneninelabs.com" style={{ color: "#16a34a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>19@oneninelabs.com</a> or{" "}
            <a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>+91 85888 07039</a> respond within 12 hours.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "28px" }}>
            <a href="mailto:19@oneninelabs.com" style={{ background: "#0f172a", color: "#fff", padding: "12px 22px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              ✉️ 19@oneninelabs.com
            </a>
            <a href="tel:+918588807039" style={{ background: "#16a34a", color: "#fff", padding: "12px 22px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              📞 +91 85888 07039
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section — WHITE THEME */}
      <section style={{ background: "#ffffff", padding: "80px 24px", color: "#0f172a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "start" }}>
            
            {/* Direct Information Left */}
            <div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "20px", color: "#0f172a" }}>
                Let's Build Together
              </h2>
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", marginBottom: "32px" }}>
                We partner with high-growth teams to engineer custom software platforms, cloud infrastructure, and AI agents — from MVP to enterprise scale.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
                    ✉️ Email Us
                  </div>
                  <div style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a" }}>
                    <a href="mailto:19@oneninelabs.com" style={{ color: "#0f172a", textDecoration: "none" }}>19@oneninelabs.com</a>
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                    Guaranteed engineer response under 12 hours • Preferred for detailed briefs
                  </div>
                </div>

                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "20px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "#15803d", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
                    📞 Call / WhatsApp
                  </div>
                  <div style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a" }}>
                    <a href="tel:+918588807039" style={{ color: "#0f172a", textDecoration: "none" }}>+91 85888 07039</a>
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                    Mon–Sat, 9AM–7PM IST • For quick scoping & urgent calls
                  </div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "#0284c7", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
                    📍 Office & Remote
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a" }}>
                    Lucknow, Uttar Pradesh, India
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                    Serving Farrukhabad region & worldwide • Hybrid: on-site + remote • 99.9% SLA
                  </div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>
                    🔒 Security & Compliance
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a" }}>
                    SOC 2 & Zero-Trust Ready
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                    99.9% High-Availability Uptime SLA • Encrypted storage
                  </div>
                </div>
              </div>

              {/* Trust mini stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "24px" }}>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "14px", textAlign: "center", boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}>
                  <div style={{ fontSize: "18px", fontWeight: 900, color: "#0f172a" }}>80+</div>
                  <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>Products Shipped</div>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "14px", textAlign: "center", boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}>
                  <div style={{ fontSize: "18px", fontWeight: 900, color: "#059669" }}>12h</div>
                  <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>Avg. Response</div>
                </div>
              </div>
            </div>

            {/* Form Right — WHITE CARD */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "36px", boxShadow: "0 10px 30px rgba(15,23,42,0.05)" }}>
              {submitted ? (
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#16a34a", padding: "24px", borderRadius: "12px", textAlign: "center" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "8px" }}>✓ Message Saved!</h3>
                  <p style={{ fontSize: "14px", color: "#334155", margin: 0 }}>
                    Thank you for reaching out. Your request has been logged in our <strong style={{ color: "#0f172a" }}>oneninecontact</strong> system. An engineer will respond to <strong>19@oneninelabs.com</strong> thread or call you at your provided number shortly.
                  </p>
                  <div style={{ marginTop: "18px", display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="mailto:19@oneninelabs.com" style={{ background: "#16a34a", color: "#fff", padding: "10px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 800, textDecoration: "none" }}>Email 19@oneninelabs.com</a>
                    <a href="tel:+918588807039" style={{ background: "#0f172a", color: "#fff", padding: "10px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 800, textDecoration: "none" }}>Call +91 85888 07039</a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
                    Send Us a Message
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748b", marginTop: "-8px", marginBottom: "4px" }}>
                    Prefer direct? <a href="mailto:19@oneninelabs.com" style={{ color: "#16a34a", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}>19@oneninelabs.com</a> • <a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}>+91 85888 07039</a>
                  </p>

                  {errorMessage && (
                    <div style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", padding: "12px", borderRadius: "8px", fontSize: "13px" }}>
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "8px", padding: "12px 16px", fontSize: "14px", outline: "none" }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "8px", padding: "12px 16px", fontSize: "14px", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "8px", padding: "12px 16px", fontSize: "14px", outline: "none" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
                      Project / Message Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project or technical goals..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "8px", padding: "12px 16px", fontSize: "14px", outline: "none", resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ background: "#16a34a", color: "#fff", border: "none", borderRadius: "8px", padding: "14px 24px", fontSize: "14px", fontWeight: "700", cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1, transition: "opacity 0.2s ease", marginTop: "6px", boxShadow: "0 4px 14px rgba(22,163,74,0.25)" }}
                  >
                    {isSubmitting ? "Saving to Database..." : "Send Message →"}
                  </button>
                  <p style={{ fontSize: "11px", color: "#94a3b8", textAlign: "center", margin: "4px 0 0", lineHeight: 1.5 }}>
                    By submitting, you agree to our Terms & Privacy. Data stored securely in <strong>oneninecontact</strong> • We never share your info. Prefer email? <a href="mailto:19@oneninelabs.com" style={{ color: "#0f172a", fontWeight: 700 }}>19@oneninelabs.com</a>
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Visit & Hours */}
      <section style={{ background: "#f8fafc", padding: "64px 24px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 900, color: "#0f172a", marginBottom: "12px" }}>📍 Visit Our Office</h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: "#0f172a" }}>OneNineLabs</strong><br />
                Lucknow, Uttar Pradesh, India<br />
                Serving Farrukhabad & worldwide<br />
                <span style={{ fontSize: "13px", color: "#64748b" }}>Hybrid — on-site workshops + remote delivery</span>
              </p>
              <div style={{ marginTop: "16px", background: "#f1f5f9", border: "1px dashed #cbd5e1", borderRadius: "8px", padding: "12px", textAlign: "center", color: "#64748b", fontSize: "12px" }}>
                🗺️ Map — Lucknow, UP (exact address shared on call for security)
              </div>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 900, color: "#0f172a", marginBottom: "12px" }}>🕒 Office Hours & SLA</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#475569" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}><span>Mon – Sat</span><strong style={{ color: "#0f172a" }}>9:00 AM – 7:00 PM IST</strong></div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}><span>Email SLA</span><strong style={{ color: "#16a34a" }}>&lt; 12 hours</strong></div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}><span>Phone</span><a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "none" }}>+91 85888 07039</a></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Sunday</span><strong style={{ color: "#64748b" }}>By appointment</strong></div>
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: "1px solid #334155", borderRadius: "16px", padding: "28px", color: "#fff" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 900, color: "#fff", marginBottom: "12px" }}>⚡ Need Urgent Help?</h3>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "16px" }}>
                For production outages or urgent scoping, call directly. We prioritize enterprise incidents.
              </p>
              <a href="tel:+918588807039" style={{ display: "block", background: "#16a34a", color: "#fff", textAlign: "center", padding: "12px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>Call +91 85888 07039</a>
              <a href="mailto:19@oneninelabs.com" style={{ display: "block", background: "#1e293b", border: "1px solid #334155", color: "#e2e8f0", textAlign: "center", padding: "12px", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "13px", marginTop: "10px" }}>Email 19@oneninelabs.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section style={{ background: "#ffffff", padding: "64px 24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#0f172a", textAlign: "center", marginBottom: "28px", letterSpacing: "-0.5px" }}>Why Teams Contact OneNineLabs</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
            {[
              { icon: "⚡", t: "6–8 Week MVP", d: "From idea to production-ready web/mobile/SaaS with weekly demos and continuous deploy." },
              { icon: "🛡️", t: "SOC 2-Ready Security", d: "Zero-Trust, encrypted storage, and audit-ready logs baked into every build." },
              { icon: "📈", t: "Performance First", d: "95+ Lighthouse, <80ms p95 APIs, and 99.9% uptime under peak loads." },
              { icon: "🤝", t: "Long-Term Partner", d: "Not a vendor — a pod that scales from prototype to enterprise with you." },
            ].map((x) => (
              <div key={x.t} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "22px", textAlign: "center" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{x.icon}</div>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>{x.t}</div>
                <div style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8fafc", padding: "64px 24px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0f172a", textAlign: "center", marginBottom: "20px" }}>Contact FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "What happens after I submit the form?", a: "Your message is saved to our secure oneninecontact DB and an alert is sent to 19@oneninelabs.com. An engineer reviews and replies within 12 hours with next steps and a Calendly link." },
              { q: "Can I just email or call directly?", a: "Yes! Email 19@oneninelabs.com for detailed briefs or call +91 85888 07039 (Mon–Sat 9AM–7PM IST) for quick scoping. Both go to the same engineering queue." },
              { q: "Do you sign NDAs?", a: "Absolutely. We can sign your NDA or ours before any deep dive. All code and data are handled Zero-Trust with encrypted storage." },
              { q: "Do you work with startups and enterprises both?", a: "Yes — from pre-seed MVPs to enterprise modernization. We scale the pod to fit your stage and budget, from 2-week sprints to dedicated teams." },
              { q: "Where are you located?", a: "Lucknow, Uttar Pradesh, India — serving Farrukhabad region and clients worldwide, hybrid remote + on-site." },
            ].map((f, i) => (
              <details key={i} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 18px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 800, color: "#0f172a", fontSize: "14px", listStyle: "none" }}>{f.q}</summary>
                <p style={{ marginTop: "10px", fontSize: "13px", color: "#475569", lineHeight: 1.65 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
