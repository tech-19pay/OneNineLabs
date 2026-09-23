"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState("Web Dev");
  const [selectedBudget, setSelectedBudget] = useState("$10K - $50K");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const projectTopics = [
    { id: "consulting", label: "Consulting", icon: "💬" },
    { id: "web", label: "Web Dev", icon: "🌐" },
    { id: "mobile", label: "Mobile App", icon: "📱" },
    { id: "ai", label: "AI & Automation", icon: "🤖" },
    { id: "cloud", label: "Cloud & SOC 2 Security", icon: "🛡️" },
    { id: "blockchain", label: "Web3 & Blockchain", icon: "💎" },
  ];
  const budgetOptions = ["Less than $10K", "$10K - $50K", "More than $50K"];

  const handleTopicClick = (label) => {
    setSelectedTopic(label);
    const formEl = document.getElementById("contact-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMessage("Please fill in your email address.");
      return;
    }

    const whatsappMessage = [
      "Hello OneNineLabs, I would like to discuss a project.",
      `Name: ${formData.name || "Not provided"}`,
      `Email: ${formData.email}`,
      `Service: ${selectedTopic}`,
      `Budget: ${selectedBudget}`,
      `Project details: ${formData.message || "Not provided"}`,
    ].join("\n");
    window.open(`https://wa.me/918588807039?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          company: formData.company || "Website inquiry",
          message: [formData.message, `Service: ${selectedTopic}`, `Budget: ${selectedBudget}`].filter(Boolean).join("\n\n"),
          sourcePage: "contact_page_form",
        }),
      });

      const resText = await res.text();
      let data = {};
      try {
        data = resText ? JSON.parse(resText) : {};
      } catch (e) {
        console.error("Contact page JSON parse error:", e);
      }

      if (!res.ok || !data.success) {
        console.error("Contact form database save failed:", data.error || "Unknown API error");
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error("Contact page form error:", err);
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
    logo: `${siteUrl}/logo.png`,
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

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ background: "#ffffff", paddingTop: "90px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "12px 0" }}>
          <ol style={{ display: "flex", gap: "8px", alignItems: "center", listStyle: "none", margin: 0, padding: 0, fontSize: "13px", color: "#64748b" }}>
            <li><Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "#cbd5e1" }}>/</li>
            <li aria-current="page" style={{ color: "#0f172a", fontWeight: 700 }}>Contact Us</li>
          </ol>
        </div>
      </nav>

      {/* Advanced, Attractive & Simple Contact Hero Section */}
      <section className="contact-hero-section">
        {/* Ambient Glows */}
        <div className="contact-hero-glow glow-1" />
        <div className="contact-hero-glow glow-2" />
        <div className="contact-hero-grid" />

        <div className="contact-reference-panel">
          <div className="reference-copy">
            <h1>Tell us about your<br /><span>project</span></h1>
            <div className="reference-promises">
              <div><span>✓</span> We&apos;ll respond to you within 12 hours</div>
              <div><span>✓</span> We&apos;ll sign an NDA if requested</div>
              <div><span>✓</span> Access to dedicated consultant specialists</div>
            </div>
            <div className="reference-contact-details">
              <a href="mailto:19@oneninelabs.com">19@oneninelabs.com</a>
              <p>Always busy and want to book<br />an exact time to call?</p>
              <a className="reference-call-link" href="tel:+918588807039">Book a free call</a>
            </div>
          </div>

          <form className="reference-form" onSubmit={handleSubmit}>
            <div className="reference-field-group">
              <label>Service</label>
              <div className="reference-pill-row">
                {projectTopics.slice(0, 4).map((topic) => (
                  <button key={topic.id} type="button" className={`reference-pill ${selectedTopic === topic.label ? "active" : ""}`} onClick={() => setSelectedTopic(topic.label)}>
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="reference-field-group">
              <label>Budget</label>
              <div className="reference-pill-row">
                {budgetOptions.map((budget) => (
                  <button key={budget} type="button" className={`reference-pill ${selectedBudget === budget ? "active" : ""}`} onClick={() => setSelectedBudget(budget)}>
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <div className="reference-input-row">
              <label>Full name*
                <input name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>Email*
                <input name="email" type="email" value={formData.email} onChange={handleChange} required />
              </label>
            </div>

            <label className="reference-field-group">Project details*
              <textarea name="message" rows={3} value={formData.message} onChange={handleChange} required />
            </label>

            <label className="reference-file-field">Attach a file <span>(optional)</span>
              <input type="file" />
              <span>Choose a file or drag and drop here</span>
            </label>

            {errorMessage && <p className="reference-error">{errorMessage}</p>}
            <button className="reference-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit inquiry"}
            </button>
          </form>
        </div>

        <div className="contact-legacy-container">
          {/* Top Pill Badge */}
          <div className="contact-hero-badge">
            <span className="badge-pulse-dot" />
            <span className="badge-text">
              <span className="badge-item">⚡ DIRECT ENGINEERING ACCESS</span>
              <span className="badge-sep">&bull;</span>
              <span className="badge-item">&lt;12H RESPONSE SLA</span>
              <span className="badge-sep">&bull;</span>
              <span className="badge-item">LUCKNOW &bull; WORLDWIDE</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="contact-hero-title">
            Let&apos;s Build Something <br />
            <span className="gradient-headline">Remarkable Together.</span>
          </h1>

          {/* Subtitle */}
          <p className="contact-hero-desc">
            Speak directly with our principal solutions architects. Whether you&apos;re exploring a <strong>6–8 week rapid MVP</strong>, an <strong>autonomous AI agent system</strong>, or <strong>enterprise platform scale</strong> — we&apos;re ready to engineer your solution.
          </p>

          {/* Interactive Project Scope Selector Pills */}
          <div className="scope-selector-wrapper">
            <div className="scope-selector-label">SELECT YOUR INQUIRY FOCUS:</div>
            <div className="scope-pills-row">
              {projectTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  className={`scope-pill-btn ${selectedTopic === topic.label ? "active" : ""}`}
                  onClick={() => handleTopicClick(topic.label)}
                >
                  <span className="pill-icon">{topic.icon}</span>
                  <span>{topic.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3 Fast-Track Direct Channels */}
          <div className="fast-channels-grid">
            {/* Channel 1: Email */}
            <a href="mailto:19@oneninelabs.com" className="channel-card">
              <div className="channel-icon-box bg-blue">
                <span>✉️</span>
              </div>
              <div className="channel-content">
                <div className="channel-tag">ENGINEERING DESK</div>
                <div className="channel-main">19@oneninelabs.com</div>
                <div className="channel-sub">Guaranteed response &lt; 12 hours</div>
              </div>
              <div className="channel-arrow">&rarr;</div>
            </a>

            {/* Channel 2: Phone / WhatsApp */}
            <a href="tel:+918588807039" className="channel-card highlight-channel">
              <div className="channel-icon-box bg-green">
                <span>📞</span>
              </div>
              <div className="channel-content">
                <div className="channel-tag tag-green">DIRECT HOTLINE</div>
                <div className="channel-main">+91 85888 07039</div>
                <div className="channel-sub">Mon–Sat, 9AM–7PM IST • Scoping</div>
              </div>
              <div className="channel-arrow">&rarr;</div>
            </a>

            {/* Channel 3: Instant Scoping Form Trigger */}
            <button
              type="button"
              className="channel-card"
              onClick={() => {
                const formEl = document.getElementById("contact-form-section");
                if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="channel-icon-box bg-purple">
                <span>📝</span>
              </div>
              <div className="channel-content">
                <div className="channel-tag">DETAILED BRIEF</div>
                <div className="channel-main">Submit Project Specs</div>
                <div className="channel-sub">Get estimate &amp; architecture review</div>
              </div>
              <div className="channel-arrow">&darr;</div>
            </button>
          </div>

          {/* Assurance Bottom Micro-Badges */}
          <div className="contact-assurance-row">
            <div className="assurance-item">
              <span className="assure-icon">🔒</span>
              <span>Strict Mutual NDA on Request</span>
            </div>
            <div className="assurance-divider">&bull;</div>
            <div className="assurance-item">
              <span className="assure-icon">⚡</span>
              <span>Free Architecture Scoping</span>
            </div>
            <div className="assurance-divider">&bull;</div>
            <div className="assurance-item">
              <span className="assure-icon">🛡️</span>
              <span>SOC 2 &amp; Zero-Trust Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section contact-form-section-hidden" id="contact-form-section" style={{ background: "#ffffff", color: "#0f172a" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "start" }}>

            {/* Direct Information Left */}
            <div>
              <div style={{ display: "inline-block", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", borderRadius: "30px", padding: "5px 14px", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "14px" }}>
                Direct Solutions Desk
              </div>
              <p style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.65", marginBottom: "28px" }}>
                We partner with high-growth teams to engineer custom software platforms, cloud infrastructure, and AI agents — from MVP to enterprise scale.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#0284c7", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: "4px" }}>
                    ✉️ Primary Email
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a" }}>
                    <a href="mailto:19@oneninelabs.com" style={{ color: "#0f172a", textDecoration: "none" }}>19@oneninelabs.com</a>
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "3px" }}>
                    Guaranteed engineer response under 12 hours • Preferred for detailed briefs
                  </div>
                </div>

                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#15803d", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: "4px" }}>
                    📞 Call &amp; WhatsApp Hotline
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a" }}>
                    <a href="tel:+918588807039" style={{ color: "#0f172a", textDecoration: "none" }}>+91 85888 07039</a>
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "3px" }}>
                    Mon–Sat, 9AM–7PM IST • For quick technical scoping &amp; urgent calls
                  </div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#0284c7", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: "4px" }}>
                    📍 Headquarters &amp; Remote Delivery
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>
                    Lucknow, Uttar Pradesh, India
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "3px" }}>
                    Serving Farrukhabad region &amp; worldwide • Hybrid: on-site + remote pods • 99.9% SLA
                  </div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: "4px" }}>
                    🔒 Security &amp; Compliance
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>
                    SOC 2 Type II &amp; Zero-Trust Ready
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "3px" }}>
                    99.9% High-Availability Uptime SLA • Encrypted storage &amp; audit trails
                  </div>
                </div>
              </div>

              {/* Trust mini stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "20px" }}>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", textAlign: "center", boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: "#0f172a" }}>80+</div>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 700 }}>Products Shipped</div>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", textAlign: "center", boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: "#0284c7" }}>&lt; 12h</div>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 700 }}>Avg. Response SLA</div>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="contact-form-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "22px", boxShadow: "0 15px 35px -5px rgba(15,23,42,0.06)" }}>
              {submitted ? (
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#16a34a", padding: "28px", borderRadius: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "36px", marginBottom: "10px" }}>🎉</div>
                  <h3 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "8px", color: "#0f172a" }}>Message Received!</h3>
                  <p style={{ fontSize: "14.5px", color: "#334155", margin: 0, lineHeight: 1.6 }}>
                    Thank you for reaching out. Your WhatsApp message has been prepared for <strong style={{ color: "#0f172a" }}>+91 85888 07039</strong>. An engineer will review and respond within 12 hours.
                  </p>
                  <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="mailto:19@oneninelabs.com" style={{ background: "#0284c7", color: "#fff", padding: "10px 20px", borderRadius: "999px", fontSize: "13px", fontWeight: 800, textDecoration: "none" }}>Email 19@oneninelabs.com</a>
                    <a href="tel:+918588807039" style={{ background: "#0f172a", color: "#fff", padding: "10px 20px", borderRadius: "999px", fontSize: "13px", fontWeight: 800, textDecoration: "none" }}>Call +91 85888 07039</a>
                  </div>
                </div>
              ) : (
                <form className="project-spec-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }} suppressHydrationWarning>
                  <div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
                      Selected Focus: <strong style={{ color: "#0284c7" }}>{selectedTopic}</strong>
                    </p>
                  </div>

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
                      placeholder="Your Name "
                      value={formData.name}
                      onChange={handleChange}
                      suppressHydrationWarning
                      style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", outline: "none" }}
                    />
                  </div>

                  <div className="form-field-row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning
                        style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
                        Company / Project *
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="e.g. Acme Inc"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning
                        style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", outline: "none" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
                      Project / Architecture Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={`Tell us about your ${selectedTopic} requirements, timeline, or current challenges...`}
                      value={formData.message}
                      onChange={handleChange}
                      suppressHydrationWarning
                      style={{ width: "100%", background: "#f8fafc", border: "1px solid #cbd5e1", color: "#0f172a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", outline: "none", resize: "vertical" }}
                    />
                  </div>

                  <button
                    className="submit-button"
                    type="submit"
                    disabled={isSubmitting}
                    style={{ background: "#0284c7", color: "#fff", border: "none", borderRadius: "10px", padding: "14px 24px", fontSize: "14.5px", fontWeight: "800", cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1, transition: "all 0.2s ease", marginTop: "4px", boxShadow: "0 4px 16px rgba(2,132,199,0.3)" }}
                  >
                    {isSubmitting ? "Submitting Brief..." : "Submit Project Specs →"}
                  </button>
                  <p className="submit-note" style={{ fontSize: "11.5px", color: "#94a3b8", textAlign: "center", margin: "2px 0 0", lineHeight: 1.5 }}>
                    Encrypted via <strong>oneninecontact</strong> • We never share your data. Direct line: <a href="mailto:19@oneninelabs.com" style={{ color: "#0284c7", fontWeight: 700 }}>19@oneninelabs.com</a>
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
                Serving Farrukhabad &amp; worldwide<br />
                <span style={{ fontSize: "13px", color: "#64748b" }}>Hybrid — on-site workshops + remote delivery</span>
              </p>
              <div style={{ marginTop: "16px", background: "#f1f5f9", border: "1px dashed #cbd5e1", borderRadius: "8px", padding: "12px", textAlign: "center", color: "#64748b", fontSize: "12px" }}>
                🗺️ Map — Lucknow, UP (exact location shared on discovery call)
              </div>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 900, color: "#0f172a", marginBottom: "12px" }}>🕒 Office Hours &amp; SLA</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#475569" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}><span>Mon – Sat</span><strong style={{ color: "#0f172a" }}>9:00 AM – 7:00 PM IST</strong></div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}><span>Email SLA</span><strong style={{ color: "#0284c7" }}>&lt; 12 hours</strong></div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}><span>Phone</span><a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "none" }}>+91 85888 07039</a></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Sunday</span><strong style={{ color: "#64748b" }}>By appointment</strong></div>
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: "1px solid #334155", borderRadius: "16px", padding: "28px", color: "#fff" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 900, color: "#fff", marginBottom: "12px" }}>⚡ Need Urgent Scoping?</h3>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "16px" }}>
                For production outages, tight sprint deadlines, or urgent MVP scoping, call directly.
              </p>
              <a href="tel:+918588807039" style={{ display: "block", background: "#0284c7", color: "#fff", textAlign: "center", padding: "12px", borderRadius: "8px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>Call +91 85888 07039</a>
              <a href="mailto:19@oneninelabs.com" style={{ display: "block", background: "#1e293b", border: "1px solid #334155", color: "#e2e8f0", textAlign: "center", padding: "12px", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "13px", marginTop: "10px" }}>Email 19@oneninelabs.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section style={{ background: "radial-gradient(ellipse at bottom, #f8fafc, #ffffff)", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "inline-block", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", borderRadius: "30px", padding: "5px 14px", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "14px" }}>
              Enterprise Grade
            </div>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0f172a", letterSpacing: "-1px" }}>
              Why Enterprise Leaders <span style={{ background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Partner With Us</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { icon: "⚡", t: "6–8 Week Rapid MVP", d: "From concept to production-ready scalable platforms with weekly continuous deployment cycles.", color: "#fef08a", bg: "#fefce8" },
              { icon: "🛡️", t: "Zero-Trust Security", d: "SOC 2-ready architecture, encrypted data at rest/transit, and full audit-ready compliance logs.", color: "#bbf7d0", bg: "#f0fdf4" },
              { icon: "📈", t: "High-Performance Scale", d: "Sub-40ms p95 APIs, 99+ Lighthouse scores, and 99.99% high-availability uptime under load.", color: "#bae6fd", bg: "#f0f9ff" },
              { icon: "🤝", t: "Autonomous Pods", d: "Not just vendors. We deploy self-managed engineering pods that scale with your enterprise.", color: "#e9d5ff", bg: "#faf5ff" },
            ].map((x) => (
              <div key={x.t} className="enterprise-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "32px 24px", transition: "all 0.3s ease", position: "relative", overflow: "hidden" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: x.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "20px", border: `1px solid ${x.color}` }}>
                  {x.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>{x.t}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8fafc", padding: "64px 24px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 900, color: "#0f172a", textAlign: "center", marginBottom: "24px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "What happens after I submit the form?", a: "Your message is saved to our secure oneninecontact DB and an alert is sent to 19@oneninelabs.com. An engineer reviews and replies within 12 hours with next steps and a scheduling link." },
              { q: "Can I just email or call directly?", a: "Yes! Email 19@oneninelabs.com for detailed briefs or call +91 85888 07039 (Mon–Sat 9AM–7PM IST) for quick scoping. Both go to the same engineering queue." },
              { q: "Do you sign NDAs?", a: "Absolutely. We can sign your NDA or ours before any deep dive. All code and data are handled Zero-Trust with encrypted storage." },
              { q: "Do you work with startups and enterprises both?", a: "Yes — from pre-seed MVPs to enterprise modernization. We scale the pod to fit your stage and budget, from 2-week sprints to dedicated teams." },
              { q: "Where are you located?", a: "Lucknow, Uttar Pradesh, India — serving Farrukhabad region and clients worldwide, hybrid remote + on-site." },
            ].map((f, i) => (
              <details key={i} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "18px 20px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 800, color: "#0f172a", fontSize: "14.5px", listStyle: "none" }}>{f.q}</summary>
                <p style={{ marginTop: "10px", fontSize: "13.5px", color: "#475569", lineHeight: 1.65 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Embedded CSS for Modern, Advanced & Simple Contact Hero */}
      <style jsx>{`
        .contact-hero-section,
        .contact-hero-section * {
          font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
        }

        .contact-hero-section {
          position: relative;
          background: transparent;
          color: #0f172a;
          padding-top: 42px;
          padding-bottom: 42px;
          padding-left: 24px;
          padding-right: 24px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .contact-reference-panel {
          max-width: 1350px;
          min-height: 650px;
          margin: 0 auto;
          padding: 18px 60px 18px 0;
          display: grid;
          grid-template-columns: minmax(420px, 1fr) minmax(540px, 1fr);
          gap: 70px;
          align-items: center;
          position: relative;
          z-index: 1;
          border: 0;
          border-radius: 0;
          background: transparent;
          overflow: hidden;
        }

        .contact-reference-panel::after { display: none; }
        .reference-copy, .reference-form { position: relative; z-index: 1; }
        .reference-copy { padding-left: 60px; }
        .reference-copy h1 { margin: 0; color: #0f172a; font-size: clamp(48px, 4.5vw, 64px); line-height: 1; letter-spacing: -2.4px; font-weight: 900; white-space: nowrap; }
        .reference-copy h1 span { color: #0f172a; }
        .reference-promises { display: flex; flex-direction: column; gap: 22px; margin-top: 46px; color: #52637a; font-size: 20px; font-weight: 600; }
        .reference-promises div { display: flex; align-items: center; gap: 18px; }
        .reference-promises span { width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: #078aca; color: #ffffff; font-size: 16px; font-weight: 900; }
        .reference-contact-details { margin-top: 64px; font-size: 18px; }
        .reference-contact-details > a:first-child { color: #078aca; font-weight: 900; text-decoration: underline; text-underline-offset: 6px; }
        .reference-contact-details p { color: #6a7c95; line-height: 1.55; margin: 36px 0 18px; font-size: 18px; font-weight: 600; }
        .reference-call-link { display: inline-block; padding: 16px 28px; border: 1px solid #cbd5e1; border-radius: 999px; background: #ffffff; color: #172033 !important; text-decoration: none; font-size: 18px; font-weight: 800; box-shadow: 0 4px 10px rgba(15, 23, 42, 0.06); }
        .reference-form { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 580px; justify-self: end; padding: 24px 22px 22px; border: 1px solid #dbe3ed; border-radius: 22px; background: rgba(255, 255, 255, 0.96); box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08); backdrop-filter: blur(12px); }
        .reference-field-group > label, .reference-field-group, .reference-input-row label, .reference-file-field { color: #40516a; font-size: 14px; font-weight: 800; }
        .reference-pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px; }
        .reference-pill { padding: 8px 14px; border: 1px solid #dbe3ed; border-radius: 999px; background: #ffffff; color: #40516a; font-size: 13px; cursor: pointer; box-shadow: 0 2px 5px rgba(15,23,42,0.03); }
        .reference-pill.active, .reference-pill:hover { border-color: #0284c7; color: #0369a1; background: #e0f2fe; }
        .reference-input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        .reference-input-row label { display: flex; flex-direction: column; gap: 7px; }
        .reference-form input:not([type="file"]), .reference-form textarea { width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 12px; outline: none; background: #f8fafc; color: #0f172a; font: inherit; }
        .reference-form textarea { resize: vertical; min-height: 82px; }
        .reference-form input:focus, .reference-form textarea:focus { border-color: #0284c7; box-shadow: 0 0 0 3px rgba(2,132,199,0.12); }
        .reference-file-field { display: flex; flex-direction: column; gap: 8px; }
        .reference-file-field > span:first-child { color: #0f172a; }
        .reference-file-field > span:not(:first-child) { padding: 15px; border: 1px dashed #b8c7d8; border-radius: 12px; background: #f8fafc; color: #64748b; text-align: center; font-size: 13px; font-weight: 500; }
        .reference-file-field input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
        .reference-error { margin: 0; color: #dc2626; font-size: 12px; }
        .reference-submit { padding: 14px 18px; border: 0; border-radius: 12px; background: #078aca; color: #ffffff; font-size: 16px; font-weight: 900; cursor: pointer; box-shadow: 0 8px 18px rgba(2,132,199,0.24); }
        .reference-submit:disabled { opacity: 0.65; cursor: wait; }
        .contact-legacy-container { display: none; }

        /* Ambient Glows */
        .contact-hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .glow-1 {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(2, 132, 199, 0.14) 0%, transparent 70%);
          top: -100px;
          left: -100px;
        }
        .glow-2 {
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.10) 0%, transparent 70%);
          bottom: -100px;
          right: -100px;
        }

        .contact-hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(2, 132, 199, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 132, 199, 0.04) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 0;
        }

        .contact-hero-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          border-radius: 9999px;
          margin-bottom: 18px;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.06);
        }

        .badge-pulse-dot {
          width: 8px;
          height: 8px;
          background: #0284c7;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.25);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(2, 132, 199, 0.5); }
          70% { box-shadow: 0 0 0 6px rgba(2, 132, 199, 0); }
          100% { box-shadow: 0 0 0 0 rgba(2, 132, 199, 0); }
        }

        .badge-text {
          font-size: 11px;
          font-weight: 800;
          color: #0369a1;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4px 8px;
        }

        .badge-item {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .badge-sep {
          color: #0284c7;
          opacity: 0.6;
        }

        .contact-hero-title {
          font-size: clamp(34px, 4.6vw, 54px) !important;
          font-weight: 900 !important;
          letter-spacing: -1.5px !important;
          line-height: 1.15 !important;
          color: #0f172a !important;
          margin: 0 0 16px 0;
        }

        .gradient-headline {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 45%, #7c3aed 100%);
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          color: transparent !important;
          display: inline;
        }

        .contact-hero-desc {
          font-size: 16.5px;
          color: #475569;
          max-width: 720px;
          margin: 0 auto 24px;
          line-height: 1.65;
        }

        /* Scope Selector */
        .scope-selector-wrapper {
          width: 100%;
          max-width: 960px;
          margin-bottom: 30px;
        }

        .scope-selector-label {
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.8px;
          margin-bottom: 10px;
        }

        .scope-pills-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }

        .scope-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          padding: 7px 16px;
          font-size: 12.5px;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);
        }

        .scope-pill-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
          transform: translateY(-1px);
        }

        .scope-pill-btn.active {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
        }

        .pill-icon {
          font-size: 13px;
        }

        /* Fast Channels 3-Card Grid */
        .fast-channels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 960px;
          margin-bottom: 24px;
        }

        .channel-card {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 16px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
          text-align: left;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .channel-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }

        .highlight-channel {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(255, 255, 255, 0.98);
        }

        .highlight-channel:hover {
          border-color: #10b981;
        }

        .channel-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .bg-blue { background: #e0f2fe; }
        .bg-green { background: #dcfce7; }
        .bg-purple { background: #ede9fe; }

        .channel-content {
          flex: 1;
          min-width: 0;
        }

        .channel-tag {
          font-size: 9.5px;
          font-weight: 800;
          color: #0284c7;
          letter-spacing: 0.6px;
        }
        .tag-green {
          color: #15803d;
        }

        .channel-main {
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
          margin: 1px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .channel-sub {
          font-size: 11px;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .channel-arrow {
          font-size: 16px;
          color: #94a3b8;
          font-weight: 700;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .channel-card:hover .channel-arrow {
          color: #0284c7;
          transform: translateX(3px);
        }

        /* Assurance Row */
        .contact-assurance-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12.5px;
          color: #64748b;
          font-weight: 600;
          flex-wrap: wrap;
          justify-content: center;
        }

        .assurance-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .assure-icon {
          font-size: 13px;
        }

        .assurance-divider {
          color: #cbd5e1;
        }

        /* Enterprise Section */
        .enterprise-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px -5px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }

        .contact-form-section {
          padding: 80px 24px;
        }

        .contact-form-section-hidden {
          display: none;
        }

        .contact-form-card {
          padding: 36px;
        }

        /* Responsive */
        @media (max-width: 860px) {
          .fast-channels-grid {
            grid-template-columns: 1fr;
          }
          .contact-hero-section {
            padding-top: 36px;
            padding-bottom: 50px;
          }
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }

        @media (max-width: 640px) {
          .contact-hero-section {
            padding: calc(var(--header-height, 80px) + 24px) 16px 44px !important;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .contact-reference-panel { min-height: auto; padding: 30px 20px; grid-template-columns: 1fr; gap: 42px; }
          .reference-copy { padding-left: 0; }
          .reference-form { padding: 22px 18px; }
          .reference-form input:not([type="file"]),
          .reference-form textarea {
            font-size: 16px !important;
          }
          .reference-copy h1 { font-size: clamp(36px, 12vw, 52px); white-space: normal; margin-top: -36px; }
          .reference-contact-details { margin-top: 42px; }
          .reference-input-row { grid-template-columns: 1fr; gap: 18px; }

          .contact-hero-badge {
            border-radius: 9999px;
            padding: 7px 14px;
            gap: 6px;
            margin-bottom: 16px;
            max-width: 100%;
          }

          .badge-pulse-dot {
            width: 7px;
            height: 7px;
            flex-shrink: 0;
          }

          .badge-text {
            font-size: 10px;
            letter-spacing: 0.3px;
            gap: 4px 6px;
            line-height: 1.4;
          }

          .badge-item {
            white-space: nowrap;
          }

          .badge-sep {
            opacity: 0.4;
          }

          .contact-hero-title {
            font-size: clamp(26px, 7vw, 36px) !important;
            letter-spacing: -0.8px !important;
            line-height: 1.18 !important;
            margin-bottom: 14px !important;
          }

          .contact-hero-desc {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
            padding: 0 4px;
          }

          .scope-selector-wrapper {
            margin-bottom: 22px;
          }

          .scope-selector-label {
            font-size: 10.5px;
            letter-spacing: 0.6px;
            margin-bottom: 8px;
          }

          .scope-pills-row {
            gap: 6px;
          }

          .scope-pill-btn {
            padding: 6px 12px;
            font-size: 11.5px;
            gap: 5px;
          }

          .fast-channels-grid {
            gap: 10px;
            margin-bottom: 20px;
          }

          .channel-card {
            padding: 13px 14px;
            border-radius: 14px;
            gap: 10px;
          }

          .channel-main {
            font-size: 13.5px;
          }

          .channel-sub {
            white-space: normal;
            font-size: 11px;
            line-height: 1.35;
          }

          .channel-icon-box {
            width: 36px;
            height: 36px;
            font-size: 16px;
            border-radius: 9px;
          }

          .contact-assurance-row {
            gap: 8px 10px;
            font-size: 11.5px;
          }

          .assurance-divider {
            display: none;
          }

          .assurance-item {
            background: rgba(255, 255, 255, 0.75);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid #e2e8f0;
          }

          .contact-form-section {
            padding: 40px 16px !important;
          }

          .contact-form-card {
            padding: 24px 16px !important;
            border-radius: 18px !important;
            border-left: 1px solid #e2e8f0;
            border-right: 1px solid #e2e8f0;
            margin-left: 0;
            margin-right: 0;
          }

          .project-spec-form {
            gap: 16px !important;
          }

          .form-field-row {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }

          .contact-form-card input,
          .contact-form-card textarea,
          .contact-form-card button {
            font-size: 15px !important;
          }

          .contact-form-card textarea {
            min-height: 150px;
          }

          .submit-button {
            width: 100%;
            padding: 16px 18px !important;
            font-size: 16px !important;
          }

          .submit-note {
            font-size: 10.5px !important;
            line-height: 1.5 !important;
          }
        }

        @media (max-width: 400px) {
          .contact-hero-badge {
            border-radius: 16px;
            padding: 7px 10px;
          }

          .badge-item {
            white-space: normal;
          }
        }
      `}</style>
    </>
  );
}
