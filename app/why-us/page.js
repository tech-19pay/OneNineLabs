import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Why OneNineLabs — 6 Reasons Leaders Choose Us | Lucknow",
  description:
    "Why leaders choose OneNineLabs for custom software: 6–8 week MVP, SOC 2-ready, 99.9% uptime and hybrid pods. Lucknow & worldwide — see our advantage.",
  keywords: ["why OneNineLabs", "OneNineLabs advantage", "custom software partner", "SOC 2 development company"],
  alternates: {
    canonical: "/why-us",
    languages: {
      "en-US": "/why-us",
      en: "/why-us",
      "hi-IN": "/why-us",
      "x-default": "/why-us",
    },
  },
  openGraph: {
    title: "Why Enterprise Leaders Partner With OneNineLabs",
    description: "High-speed execution + enterprise rigor — 6-8 week MVPs, SOC 2, 99.9% SLA, AI-native. Lucknow & worldwide.",
    url: `${siteUrl}/why-us`,
    siteName: "OneNineLabs",
    type: "website",
    images: [{ url: "/tech_banner.png", width: 1200, height: 630, alt: "Why OneNineLabs" }],
  },
  robots: { index: true, follow: true },
};

export default function WhyUsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Why Us", item: `${siteUrl}/why-us` },
    ],
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: "#ffffff", paddingTop: "96px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "14px 0" }}>
          <ol style={{ display: "flex", gap: "8px", alignItems: "center", listStyle: "none", margin: 0, padding: 0, fontSize: "13px", color: "#64748b" }}>
            <li><Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "#cbd5e1" }}>/</li>
            <li aria-current="page" style={{ color: "#0f172a", fontWeight: 700 }}>Why Us</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", color: "#0f172a", paddingTop: "40px", paddingBottom: "70px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", borderRadius: "30px", padding: "6px 18px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
            The OneNineLabs Advantage &bull; Why Us
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", letterSpacing: "-1.5px", marginBottom: "20px", lineHeight: "1.1", color: "#0f172a" }}>
            Why Enterprise Leaders Partner With Us
          </h1>
          <p style={{ fontSize: "18px", color: "#475569", maxWidth: "740px", margin: "0 auto 24px", lineHeight: "1.6" }}>
            We combine <strong style={{ color: "#0f172a" }}>high-speed execution</strong> with <strong style={{ color: "#0f172a" }}>enterprise rigor</strong> — zero tech debt, 99.9% uptime SLAs, and battle-tested cloud security. From Lucknow to worldwide.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#16a34a", color: "#fff", padding: "12px 22px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Talk to Leads — 19@oneninelabs.com
            </Link>
            <a href="tel:+918588807039" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#0f172a", padding: "12px 22px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Call +91 85888 07039
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#ffffff", padding: "32px 24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
            {[
              { k: "80+", l: "Products Shipped", c: "#0f172a" },
              { k: "99.9%", l: "Uptime SLA", c: "#16a34a" },
              { k: "12h", l: "Response SLA", c: "#0284c7" },
              { k: "6–8w", l: "MVP Timeline", c: "#9333ea" },
            ].map((s) => (
              <div key={s.l} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px", textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: 900, color: s.c }}>{s.k}</div>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#0f172a" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Pillars — EXPANDED to 6 */}
      <section style={{ background: "#ffffff", padding: "80px 24px", color: "#0f172a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#16a34a" }}>Our Edge</span>
            <h2 style={{ fontSize: "28px", fontWeight: 900, color: "#0f172a", margin: "8px 0 10px", letterSpacing: "-0.6px" }}>6 Reasons Teams Outperform With OneNineLabs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {[
              { icon: "⚡", t: "6-8 Week Rapid MVP", c: "#16a34a", d: "Ship production-ready web, mobile, and SaaS in weeks—not quarters—with continuous deployment and weekly demos." },
              { icon: "🛡️", t: "SOC 2 Ready & Zero-Trust", c: "#0284c7", d: "Automated vuln scanning, encrypted layers, and audit-ready logs baked into every build." },
              { icon: "📈", t: "High-Performance Telemetry", c: "#9333ea", d: "Sub-2.5s LCP, auto-indexed DBs, and 99.9% HA under peak loads (1.2B+ req/mo)." },
              { icon: "🤖", t: "Autonomous AI Agents", c: "#ea580c", d: "LLM agents & RAG that execute—APIs/DBs/ERPs with evals, tracing, and guardrails." },
              { icon: "📱", t: "Mobile + Web Unified", c: "#059669", d: "One design system for Next.js web and React Native/Flutter mobile — shared logic, OTA." },
              { icon: "🌍", t: "Hybrid Worldwide Pods", c: "#2563eb", d: "Lucknow-based, worldwide delivery — on-site workshops + remote pods in your timezone." },
            ].map((x) => (
              <div key={x.t} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(15,23,42,0.03)" }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{x.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "8px", color: x.c }}>{x.t}</h3>
                <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{x.d}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", background: "#0f172a", color: "#fff", padding: "14px 20px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              <span>Capability</span><span>Typical Vendor</span><span style={{ color: "#4ade80" }}>OneNineLabs</span>
            </div>
            {[
              ["MVP Timeline", "3–6 months", "6–8 weeks"],
              ["Uptime SLA", "97–99%", "99.9% with SLOs"],
              ["Security", "Manual audits", "SOC 2-ready, Zero-Trust, auto scans"],
              ["AI", "Chat demos", "Production agents with RAG & evals"],
              ["Support", "Next-day", "<12h, 24/7 on-call for enterprise"],
            ].map(([a, b, c], i) => (
              <div key={a} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "14px 20px", fontSize: "13px", color: "#334155", background: i % 2 === 0 ? "#f8fafc" : "#ffffff", borderTop: "1px solid #f1f5f9" }}>
                <strong style={{ color: "#0f172a" }}>{a}</strong><span>{b}</span><strong style={{ color: "#059669" }}>{c}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f8fafc", padding: "64px 24px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#0f172a", textAlign: "center", marginBottom: "24px" }}>Our Delivery Process — From Idea to Scale</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { n: "01", t: "Discover & Scope", d: "Workshops, KPI mapping, audit — 90-day roadmap in 2 weeks." },
              { n: "02", t: "Architect & Design", d: "System diagrams, Figma, API contracts — SOC 2 & CWV targets set." },
              { n: "03", t: "Build & Automate", d: "Agile sprints, CI/CD, IaC, AI agents — weekly demos." },
              { n: "04", t: "Launch & Scale", d: "Blue-green, observability, SEO & cost tuning — on-call playbooks." },
            ].map((s) => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontSize: "11px", fontWeight: 900, color: "#16a34a" }}>{s.n}</div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", margin: "4px 0" }}>{s.t}</div>
                <div style={{ fontSize: "12px", color: "#475569", lineHeight: 1.6 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#ffffff", padding: "64px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "48px 32px", textAlign: "center", boxShadow: "0 10px 30px rgba(15,23,42,0.04)" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "12px", color: "#0f172a" }}>Experience the OneNineLabs Difference</h2>
          <p style={{ fontSize: "15px", color: "#475569", maxWidth: "600px", margin: "0 auto 20px" }}>
            Get a custom architecture audit — email <a href="mailto:19@oneninelabs.com" style={{ color: "#16a34a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>19@oneninelabs.com</a> or call <a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>+91 85888 07039</a>
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#16a34a", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: "800", textDecoration: "none", fontSize: "15px", display: "inline-block", boxShadow: "0 4px 14px rgba(22,163,74,0.25)" }}>
              Talk to Engineering Leads →
            </Link>
            <Link href="/about" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#0f172a", padding: "14px 28px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "15px" }}>
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
