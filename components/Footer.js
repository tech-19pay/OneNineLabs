"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

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

      const resText = await res.text();
      let data = {};
      try {
        data = resText ? JSON.parse(resText) : {};
      } catch (e) {
        console.error("Footer JSON parse error:", e);
      }

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
      {/* Rich Multi-Column IT Company Footer */}
      <footer style={{ background: "#0b0c10", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "60px 20px 40px", width: "100%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="footer-columns-grid" style={{ display: "grid", gridTemplateColumns: "minmax(240px, 1.5fr) repeat(auto-fit, minmax(140px, 1fr))", gap: "36px", marginBottom: "50px" }}>
            {/* Branding Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Logo variant="dark" size="md" />
              </div>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6", margin: "0" }}>
                Premium custom software engineering and systems design consulting. We transform enterprise architecture and scale digital products.
              </p>
              <div style={{ display: "flex", gap: "14px", marginTop: "6px" }}>
                <a href="https://github.com/tech-19pay" target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: "13px" }}>GitHub</a>
                <a href="https://www.linkedin.com/company/oneninelabs" target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: "13px" }}>LinkedIn</a>
                <a href="https://x.com/oneninelabs" target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: "13px" }}>Twitter</a>
              </div>
            </div>

            {/* Column 2: Offerings */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Services</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><Link href="/services/web-development" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Web Development</Link></li>
                <li><Link href="/services/mobile-apps" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Mobile Apps</Link></li>
                <li><Link href="/services/ai-automation" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>AI &amp; Automation</Link></li>
                <li><Link href="/services/saas" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>SaaS Platforms</Link></li>
                <li><Link href="/services/blockchain" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Blockchain &amp; Web3</Link></li>
                <li><Link href="/services/marketing" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Growth &amp; Marketing</Link></li>
                <li><Link href="/services/security" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Cloud &amp; Cyber Security</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Company</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><Link href="/about" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>About Us</Link></li>
                <li><Link href="/why-us" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Why Us</Link></li>
                <li><Link href="/contact" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Contact Us</Link></li>
                <li><Link href="/services" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>All Services</Link></li>
                <li><Link href="/languages" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Tech Stack</Link></li>
                <li><Link href="/how-we-work" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>How We Work</Link></li>
              </ul>
            </div>

            {/* Column 4: Trust & Compliance */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Trust &amp; Audits</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><Link href="/services/security" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Zero-Trust Architecture</Link></li>
                <li><Link href="/services/security" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>SOC 2 Compliance</Link></li>
                <li><Link href="/services/security" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Penetration Testing</Link></li>
                <li><Link href="/why-us" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>Uptime SLA</Link></li>
              </ul>
            </div>

            {/* Column 5: Consulting */}
            <div>
              <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Consulting</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li><a href="mailto:19@oneninelabs.com" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px", wordBreak: "break-all" }}>19@oneninelabs.com</a></li>
                <li><a href="tel:+918588807039" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}>+91 85888 07039</a></li>
                <li><span style={{ color: "#64748b", fontSize: "13px" }}>Response within 12h • Lucknow, UP, India</span></li>
                <li><Link href="/contact" style={{ color: accentColor || "#0284c7", textDecoration: "none", fontSize: "13px", fontWeight: "700" }}>Contact us &rarr;</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "14px" }}>
            <p style={{ fontSize: "12px", color: "#64748b", margin: "0" }}>
              &copy; {new Date().getFullYear()} oneninelabs. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/privacy" style={{ fontSize: "12px", color: "#64748b", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/terms" style={{ fontSize: "12px", color: "#64748b", textDecoration: "none" }}>Terms of Service</Link>
              <Link href="/services/security" style={{ fontSize: "12px", color: "#64748b", textDecoration: "none" }}>GDPR and SOC 2</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Responsive Style Rules */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-form-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
          .footer-columns-grid > div:first-child {
            grid-column: 1 / -1 !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 480px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
