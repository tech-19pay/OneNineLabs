import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "About OneNineLabs — Our Story & Mission | Lucknow, India",
  description:
    "OneNineLabs in Lucknow, UP builds web, mobile, SaaS, AI & Web3 for startups to enterprises — 80+ products, 99.9% SLA. Meet our story, team and values.",
  keywords: [
    "about OneNineLabs",
    "custom software company Lucknow",
    "software engineering firm India",
    "OneNineLabs mission",
    "OneNineLabs story",
  ],
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/about",
      en: "/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    title: "About OneNineLabs — We Build Custom Software Built to Scale",
    description: "High-performance engineering for startups to enterprises — web, mobile, SaaS, AI & Web3, 80+ shipped, 99.9% SLA.",
    url: `${siteUrl}/about`,
    siteName: "OneNineLabs",
    type: "website",
    images: [{ url: "/tech_banner.png", width: 1200, height: 630, alt: "About OneNineLabs" }],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${siteUrl}/about` },
    ],
  };
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About OneNineLabs",
    description: metadata.description,
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "OneNineLabs",
      url: siteUrl,
      logo: `${siteUrl}/tech_banner.png`,
      foundingDate: "2020",
      address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      contactPoint: [{ "@type": "ContactPoint", telephone: "+91-8588807039", contactType: "customer service", email: "19@oneninelabs.com", areaServed: "Worldwide" }],
    },
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: "#ffffff", paddingTop: "96px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "14px 0" }}>
          <ol style={{ display: "flex", gap: "8px", alignItems: "center", listStyle: "none", margin: 0, padding: 0, fontSize: "13px", color: "#64748b" }}>
            <li><Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>Home</Link></li>
            <li aria-hidden="true" style={{ color: "#cbd5e1" }}>/</li>
            <li aria-current="page" style={{ color: "#0f172a", fontWeight: 700 }}>About Us</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", color: "#0f172a", paddingTop: "40px", paddingBottom: "70px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", borderRadius: "30px", padding: "6px 18px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
            Company &bull; About Us
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", letterSpacing: "-1.5px", marginBottom: "20px", lineHeight: "1.1", color: "#0f172a" }}>
            We Build Custom Software Built to Scale
          </h1>
          <p style={{ fontSize: "18px", color: "#475569", maxWidth: "760px", margin: "0 auto 28px", lineHeight: "1.6" }}>
            <strong style={{ color: "#0f172a" }}>OneNineLabs</strong> is a high-performance software engineering consulting firm based in <strong style={{ color: "#0f172a" }}>Lucknow, Uttar Pradesh, India</strong> — serving Farrukhabad region and clients worldwide. We partner with forward-thinking enterprises, SaaS startups, and Web3 protocols to build resilient digital systems.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#16a34a", color: "#fff", padding: "12px 22px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Contact Us — 19@oneninelabs.com
            </Link>
            <a href="tel:+918588807039" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#0f172a", padding: "12px 22px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "14px" }}>
              Call +91 85888 07039
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#ffffff", padding: "48px 24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {[
              { k: "80+", l: "Products Shipped", d: "MVPs to enterprise scale" },
              { k: "99.9%", l: "Uptime SLA", d: "Kubernetes + edge CDN" },
              { k: "12h", l: "Avg. Response", d: "19@oneninelabs.com" },
              { k: "95+", l: "Lighthouse", d: "Median performance" },
            ].map((s) => (
              <div key={s.l} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#0f172a" }}>{s.k}</div>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>{s.l}</div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: "#f8fafc", padding: "80px 24px", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#16a34a" }}>Our Story</span>
              <h2 style={{ fontSize: "30px", fontWeight: 900, color: "#0f172a", margin: "10px 0 16px", lineHeight: 1.15, letterSpacing: "-0.6px" }}>
                From Lucknow to Worldwide — Engineering Excellence Without Borders
              </h2>
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, marginBottom: "16px" }}>
                Founded in 2020, OneNineLabs started with a simple belief: <em style={{ color: "#0f172a", fontWeight: 700 }}>great software should be fast, secure, and a joy to scale</em>. What began as a small team of ex-AWS/GCP engineers in Uttar Pradesh has grown into a distributed pod serving fintech, healthcare, and SaaS leaders across India, US, and Europe.
              </p>
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                We’ve shipped <strong style={{ color: "#0f172a" }}>80+ products</strong> — from headless commerce to RAG-powered copilots — with a relentless focus on <strong style={{ color: "#0f172a" }}>zero tech debt, 99.9% uptime, and SOC 2-ready security</strong>. Every line of code is typed, tested, and traced.
              </p>
              <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/why-us" style={{ background: "#0f172a", color: "#fff", padding: "10px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: 800, textDecoration: "none" }}>Why OneNineLabs →</Link>
                <Link href="/contact" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#0f172a", padding: "10px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: 800, textDecoration: "none" }}>Meet the Team</Link>
              </div>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 8px 30px rgba(15,23,42,0.06)" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 900, color: "#0f172a", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.6px" }}>Timeline</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[
                  { y: "2020", t: "Founded in UP", d: "Started as consulting for local enterprises, first 5 clients in Lucknow/Farrukhabad." },
                  { y: "2022", t: "50 Products Shipped", d: "Expanded to SaaS & Web3, launched our Kubernetes + edge platform." },
                  { y: "2024", t: "AI-Native Shift", d: "Shipped autonomous LLM agents & RAG for 20+ clients, SOC 2 readiness." },
                  { y: "2026", t: "80+ & Worldwide", d: "Hybrid pods across India, US, EU — 99.9% SLA for 1.2B+ req/mo." },
                ].map((x) => (
                  <div key={x.y} style={{ display: "flex", gap: "14px" }}>
                    <div style={{ background: "#16a34a", color: "#fff", fontSize: "11px", fontWeight: 900, padding: "6px 10px", borderRadius: "999px", height: "fit-content" }}>{x.y}</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>{x.t}</div>
                      <div style={{ fontSize: "12px", color: "#64748b", lineHeight: 1.5 }}>{x.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — 6 */}
      <section style={{ background: "#ffffff", padding: "80px 24px", color: "#0f172a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#16a34a" }}>Our Values</span>
            <h2 style={{ fontSize: "30px", fontWeight: 900, color: "#0f172a", margin: "10px 0 12px", letterSpacing: "-0.6px" }}>What We Stand For</h2>
            <p style={{ fontSize: "14px", color: "#64748b", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>Principles that guide every sprint, review, and deploy.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {[
              { icon: "⚡", t: "Engineering Excellence", c: "#16a34a", d: "Zero-bloat, clean architecture, high throughput, and strict security compliance in every codebase." },
              { icon: "🛡️", t: "Zero-Trust & Uptime", c: "#0284c7", d: "99.9% uptime SLA with SOC 2 readiness, automated failover, and encrypted data layers." },
              { icon: "🤖", t: "Autonomous Innovation", c: "#9333ea", d: "LLM agents, vector DBs, and automated DevOps — innovation that ships, not demos." },
              { icon: "🤝", t: "Partnership Over Vendor", c: "#ea580c", d: "We embed as your pod — daily standups, weekly demos, quarterly roadmaps." },
              { icon: "📈", t: "Performance Obsessed", c: "#059669", d: "95+ Lighthouse, <80ms p95 APIs, and cost-aware infra — speed is a feature." },
              { icon: "🌍", t: "Hybrid & Worldwide", c: "#2563eb", d: "Lucknow roots, worldwide reach — on-site when needed, remote at scale." },
            ].map((x) => (
              <div key={x.t} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(15,23,42,0.03)" }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{x.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "8px", color: x.c }}>{x.t}</h3>
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, margin: 0 }}>{x.d}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "48px 32px", textAlign: "center", boxShadow: "0 10px 30px rgba(15,23,42,0.04)" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "12px", color: "#0f172a" }}>Ready to transform your tech stack?</h2>
            <p style={{ fontSize: "15px", color: "#475569", maxWidth: "600px", margin: "0 auto 20px" }}>
              Get in touch with our lead solutions architects — <a href="mailto:19@oneninelabs.com" style={{ color: "#16a34a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>19@oneninelabs.com</a> or <a href="tel:+918588807039" style={{ color: "#0f172a", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: "3px" }}>+91 85888 07039</a>
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: "#16a34a", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: "800", textDecoration: "none", fontSize: "15px", display: "inline-block", boxShadow: "0 4px 14px rgba(22,163,74,0.25)" }}>
                Schedule Expert Call →
              </Link>
              <Link href="/services" style={{ background: "#fff", border: "1px solid #e2e8f0", color: "#0f172a", padding: "14px 28px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "15px" }}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
