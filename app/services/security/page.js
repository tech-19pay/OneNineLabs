import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

export const metadata = {
  title: "Cybersecurity & SOC 2 Compliance — Threat Defense & Penetration Testing | OneNineLabs",
  description: "Enterprise cybersecurity audits, penetration testing, SOC 2 Type II readiness, zero-trust cloud architecture, and real-time vulnerability scanning.",
  keywords: ["cybersecurity audit company", "penetration testing services", "SOC 2 Type II compliance", "zero trust architecture", "vulnerability scanner", "cloud security audit"],
  alternates: { canonical: "/services/security", languages: { "en-US": "/services/security", en: "/services/security", "x-default": "/services/security" } },
  openGraph: { title: "Cybersecurity & SOC 2 Readiness | OneNineLabs", description: "Zero-trust cloud architecture, penetration testing & real-time threat defense.", url: "https://oneninelabs.com/services/security", type: "website" },
  robots: { index: true, follow: true },
};

const PRIMARY = "#0f172a";
const GRAD_FROM = "#020617";
const GRAD_TO = "#1e293b";
const GLOW = "rgba(15,23,42,0.2)";

const securityCapabilities = [
  {
    title: "Penetration Testing & Web Audits",
    desc: "Black-box and white-box penetration testing covering OWASP Top 10, API security flaws, and business logic exploits.",
    icon: "🛡️",
    badge: "OWASP Top 10"
  },
  {
    title: "SOC 2 Type II & ISO 27001 Readiness",
    desc: "End-to-end audit readiness roadmap, security policy drafting, automated evidence collection, and Vanta/Drata sync.",
    icon: "📋",
    badge: "SOC 2 Ready"
  },
  {
    title: "Zero-Trust Cloud Architecture",
    desc: "AWS, GCP & Cloudflare zero-trust network access (ZTNA), IAM privilege minimization, and encrypted storage.",
    icon: "🔒",
    badge: "Zero-Trust"
  },
  {
    title: "24/7 SIEM & Vulnerability Scanning",
    desc: "Real-time log ingestion, automated intrusion detection, dependency vulnerability patching, and DDoS protection.",
    icon: "📡",
    badge: "24/7 SIEM"
  }
];

export default function SecurityServicePage() {
  return (
    <>
      <Header variant="light" />
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <div className="vd-wrap">

        {/* ─── 1. HERO: ZERO-TRUST THREAT DEFENSE & RADAR HUD ─── */}
        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
          padding: "135px 24px 90px 24px",
          borderBottom: "1px solid #e2e8f0",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 640px",
            gap: "40px",
            alignItems: "flex-start"
          }}>
            {/* Left Content Column */}
            <div className="vd-hero-left" style={{ textAlign: "left", zIndex: 2, marginTop: "10px" }}>
              <div style={{
                fontSize: "13.5px",
                fontWeight: "800",
                color: "#0f172a",
                marginBottom: "16px",
                letterSpacing: "0.4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f1f5f9",
                padding: "6px 14px",
                borderRadius: "99px",
                border: "1px solid #cbd5e1"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0f172a" }} /> SOC 2 Type II &amp; Zero-Trust Cyber Defense
              </div>

              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(34px, 4.2vw, 54px)",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1.12",
                letterSpacing: "-1.5px",
                marginBottom: "20px",
                maxWidth: "540px"
              }}>
                Zero-Trust Cloud &amp; <span style={{ color: "#2563eb" }}>Cyber Security</span>
              </h1>

              <p style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.65",
                marginBottom: "32px",
                maxWidth: "490px",
                fontWeight: "400"
              }}>
                We protect enterprise platforms with penetration testing, zero-trust cloud architecture, automated SOC 2 compliance readiness, and 24/7 threat monitoring.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <Link
                  href="/#contact"
                  style={{
                    background: "#0f172a",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "99px",
                    padding: "15px 32px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.25)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  Book Security Audit
                  <span style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255, 255, 255, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px"
                  }}>
                    →
                  </span>
                </Link>
              </div>

              {/* Security Key Stats */}
              <div style={{
                display: "flex",
                gap: "28px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0"
              }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", lineHeight: "1.1" }}>0</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Data Breaches</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#2563eb", lineHeight: "1.1" }}>100%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>SOC 2 Pass Rate</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981", lineHeight: "1.1" }}>24/7</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>SIEM Shield</div>
                </div>
              </div>
            </div>

            {/* Right Active Security Shield Radar HUD */}
            <div className="vd-hero-right" style={{ position: "relative", minHeight: "450px" }}>
              <div style={{
                background: "#020617",
                borderRadius: "24px",
                padding: "24px",
                color: "#fff",
                boxShadow: "0 25px 60px rgba(15, 23, 42, 0.2)",
                border: "1.5px solid #1e293b",
                textAlign: "left"
              }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#38bdf8", marginBottom: "16px", display: "flex", justifyContent: "space-between" }}>
                  <span>SOC THREAT DEFENSE MATRIX</span>
                  <span style={{ color: "#4ade80" }}>ZERO TRUST ACTIVE 🛡️</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ background: "#0f172a", padding: "14px", borderRadius: "14px", border: "1px solid #1e293b" }}>
                    <div style={{ fontSize: "11px", color: "#94a3b8" }}>OWASP Vulnerabilities</div>
                    <div style={{ fontSize: "18px", fontWeight: "900", color: "#4ade80", marginTop: "2px" }}>0 Found</div>
                  </div>
                  <div style={{ background: "#0f172a", padding: "14px", borderRadius: "14px", border: "1px solid #1e293b" }}>
                    <div style={{ fontSize: "11px", color: "#94a3b8" }}>DDoS Protection</div>
                    <div style={{ fontSize: "18px", fontWeight: "900", color: "#38bdf8", marginTop: "2px" }}>Active L7</div>
                  </div>
                </div>

                <div style={{ background: "#0f172a", padding: "14px", borderRadius: "14px", border: "1px solid #1e293b" }}>
                  <div style={{ fontSize: "11.5px", color: "#cbd5e1", fontWeight: "600", marginBottom: "6px" }}>Compliance Status</div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ background: "#1e293b", color: "#38bdf8", padding: "3px 10px", borderRadius: "99px", fontSize: "10.5px", fontWeight: "700" }}>SOC 2 Type II ✓</span>
                    <span style={{ background: "#1e293b", color: "#4ade80", padding: "3px 10px", borderRadius: "99px", fontSize: "10.5px", fontWeight: "700" }}>ISO 27001 ✓</span>
                    <span style={{ background: "#1e293b", color: "#fbbf24", padding: "3px 10px", borderRadius: "99px", fontSize: "10.5px", fontWeight: "700" }}>HIPAA ✓</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 2. SECURITY CAPABILITIES GRID ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#0f172a", marginBottom: "12px" }}>
              Cyber Security Services
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "48px" }}>
              Penetration Testing &amp; Cloud Security
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {securityCapabilities.map((c, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 24px", textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "32px" }}>{c.icon}</span>
                    <span style={{ background: "#f1f5f9", color: "#0f172a", border: "1px solid #cbd5e1", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{c.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>{c.title}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. CTA BANNER ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              Ready to Audit &amp; Secure Your Platform?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Get a free penetration testing proposal &amp; SOC 2 compliance readiness assessment in 48 hours.
            </p>
            <Link href="/#contact" style={{ background: "#0f172a", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book Free Security Audit →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
