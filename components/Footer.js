"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer({ accentColor = "#10b981" }) {
  const [footerEmail, setFooterEmail] = useState("");
  const [footerCompany, setFooterCompany] = useState("");
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    if (!footerEmail || !footerCompany) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: footerEmail,
          company: footerCompany,
          sourcePage: "footer_contact_form",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFooterSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error("Footer contact submission error:", err);
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Form CTA Section */}
      <section className="contact-cta-section" id="contact" style={{ background: "#111318", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "90px 24px 70px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#fff", letterSpacing: "-1px", marginBottom: "16px" }}>
            Ready to design, build &amp; scale your next custom system?
          </h2>
          <p style={{ fontSize: "16px", color: "#94a3b8", marginBottom: "40px", lineHeight: "1.6" }}>
            Talk to our engineering leads directly. Get an architecture assessment and project estimate within 24 hours.
          </p>

          {footerSubmitted ? (
            <div style={{ background: `${accentColor}1a`, border: `1px solid ${accentColor}`, color: accentColor, padding: "20px", borderRadius: "12px", fontSize: "16px", fontWeight: "700" }}>
              ✓ Request received! An enterprise solutions engineer will reach out to you within 12 hours.
            </div>
          ) : (
            <form onSubmit={handleFooterSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "540px", margin: "0 auto" }}>
              {errorMessage && (
                <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid #ef4444", color: "#ef4444", padding: "12px", borderRadius: "8px", fontSize: "13px" }}>
                  {errorMessage}
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", borderRadius: "8px", padding: "14px 18px", fontSize: "14px", outline: "none" }}
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Company name"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", borderRadius: "8px", padding: "14px 18px", fontSize: "14px", outline: "none" }}
                  value={footerCompany}
                  onChange={(e) => setFooterCompany(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ background: accentColor, color: "#fff", border: "none", borderRadius: "8px", padding: "14px 28px", fontSize: "14px", fontWeight: "700", cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1, transition: "opacity 0.2s ease" }}
              >
                {isSubmitting ? "Submitting..." : "Request Expert Consultation →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Rich Multi-Column IT Company Footer */}
      <footer style={{ background: "#0b0c10", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "60px" }}>
            {/* Branding Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ fontSize: "22px", fontWeight: "900", color: "#fff", letterSpacing: "-0.5px" }}>
                onenine<span style={{ color: accentColor }}>labs</span>
              </div>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6", margin: "0" }}>
                Premium custom software engineering and systems design consulting. We transform enterprise architecture and scale digital products.
              </p>
              <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
                <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: "13px" }}>GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: "13px" }}>LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: "13px" }}>Twitter</a>
              </div>
            </div>

            {/* Column 2: Offerings */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Services</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><Link href="/services/web-development" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Web Development</Link></li>
                <li><Link href="/services/mobile-apps" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Mobile Apps</Link></li>
                <li><Link href="/services/ai-automation" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>AI &amp; Automation</Link></li>
                <li><Link href="/services/saas" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>SaaS Platforms</Link></li>
                <li><Link href="/services/blockchain" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Blockchain &amp; Web3</Link></li>
                <li><Link href="/services/marketing" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Growth &amp; Marketing</Link></li>
                <li><Link href="/services/security" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Security &amp; DevOps</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Company</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><Link href="/about" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>About Us</Link></li>
                <li><Link href="/why-us" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Why Us</Link></li>
                <li><Link href="/contact" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Contact Us</Link></li>
                <li><Link href="/services" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>All Services</Link></li>
              </ul>
            </div>

            {/* Column 4: Trust & Compliance */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Trust &amp; Audits</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Zero-Trust Architecture</a></li>
                <li><a href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>SOC 2 Compliance</a></li>
                <li><a href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Penetration Auditing</a></li>
                <li><a href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>High Uptime SLA</a></li>
              </ul>
            </div>

            {/* Column 4: Consulting */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>Consulting</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="mailto:19@oneninelabs.com" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>19@oneninelabs.com</a></li>
                <li><a href="tel:+918588807039" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>+91 85888 07039</a></li>
                <li><span style={{ color: "#64748b", fontSize: "13px" }}>Response within 12h • Lucknow, UP, India</span></li>
                <li><Link href="/contact" style={{ color: accentColor, textDecoration: "none", fontSize: "13px", fontWeight: "700" }}>Contact us &rarr;</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "30px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            <p style={{ fontSize: "12px", color: "#64748b", margin: "0" }}>
              &copy; {new Date().getFullYear()} oneninelabs. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#" style={{ fontSize: "12px", color: "#64748b", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ fontSize: "12px", color: "#64748b", textDecoration: "none" }}>Terms of Service</a>
              <a href="#" style={{ fontSize: "12px", color: "#64748b", textDecoration: "none" }}>GDPR &amp; SOC 2</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
