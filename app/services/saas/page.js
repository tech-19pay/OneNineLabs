import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "SaaS Development — Multi-Tenant Platforms & Stripe Billing | OneNineLabs",
  description: "B2B SaaS engineering on Next.js 15 & Node.js microservices. Multi-tenant database isolation, Stripe recurring billing, team RBAC, and telemetry analytics.",
  keywords: ["SaaS development company", "multi-tenant architecture", "Stripe billing integration", "Next.js SaaS template", "B2B SaaS agency", "SaaS MVP builder"],
  alternates: { canonical: "/services/saas", languages: { "en-US": "/services/saas", en: "/services/saas", "hi-IN": "/services/saas", "x-default": "/services/saas" } },
  openGraph: { title: "SaaS Platform Development | OneNineLabs", description: "Scale B2B SaaS platforms with multi-tenant isolation & automated billing.", url: "https://oneninelabs.com/services/saas", type: "website" },
  robots: { index: true, follow: true },
};

const PRIMARY = "#6366f1";
const GRAD_FROM = "#312e81";
const GRAD_TO = "#6366f1";
const GLOW = "rgba(99,102,241,0.15)";

const saasCapabilities = [
  {
    title: "Multi-Tenant Isolation Architecture",
    desc: "Row-Level Security (RLS) & dedicated tenant schema routing for enterprise enterprise compliance and data protection.",
    icon: "🏢",
    badge: "RLS Security"
  },
  {
    title: "Stripe Subscription & Usage Billing",
    desc: "Seat-based, tiered, and metered usage billing with automated webhook reconciliation and invoice PDF generation.",
    icon: "💳",
    badge: "Stripe Billing"
  },
  {
    title: "Team Workspaces & RBAC Roles",
    desc: "Granular admin, editor, and viewer permission roles with invite links, SAML SSO, and audit log history.",
    icon: "👥",
    badge: "SAML SSO"
  },
  {
    title: "Real-Time Telemetry & Churn Analytics",
    desc: "Built-in product analytics tracking MRR, ARR, active seats, and customer churn triggers.",
    icon: "📊",
    badge: "MRR Telemetry"
  }
];

const faqs = [
  { q: "What is multi-tenant SaaS architecture?", a: "A single shared application and database that securely serves many customers (tenants), with PostgreSQL Row-Level Security (RLS) isolating each tenant's data." },
  { q: "Can you integrate Stripe billing?", a: "Yes — seat-based, tiered and metered-usage billing with Stripe webhooks, automated invoice generation, dunning and proration, plus SSO via WorkOS/Clerk." },
  { q: "How do you keep tenant data isolated?", a: "We enforce Row-Level Security at the database layer, plus scoped API access, signed session tokens and tenant-aware middleware so no cross-tenant leaks occur." },
  { q: "Do you support SAML SSO and roles?", a: "Yes — SAML SSO (Okta, Google, Azure AD), SCIM provisioning, and granular RBAC roles (admin, editor, viewer) with full audit logging." },
  { q: "Can you build a SaaS MVP quickly?", a: "Yes — our SaaS starter template ships a production-grade multi-tenant MVP in 6–8 weeks with auth, billing and analytics included." },
  { q: "Is the SaaS SOC 2 ready?", a: "Yes — we bake in audit-ready logs, access controls, encryption and compliance evidence so your SOC 2 / ISO 27001 audit is smoother." },
];

export default function SaasServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Multi-Tenant SaaS Platforms", item: `${siteUrl}/services/saas` },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/saas#service`,
    name: "Multi-Tenant SaaS Platforms",
    serviceType: "SaaS Development",
    url: `${siteUrl}/services/saas`,
    description: "B2B SaaS engineering on Next.js 15 & Node.js microservices. Multi-tenant database isolation, Stripe recurring billing, team RBAC, and telemetry analytics.",
    provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
    areaServed: { "@type": "Country", name: "Worldwide" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <div className="vd-wrap">

        {/* ─── 1. HERO: MULTI-TENANT SAAS ADMIN HUD DECK ─── */}
        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f8fafc 100%)",
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
                color: "#4f46e5",
                marginBottom: "16px",
                letterSpacing: "0.4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#e0e7ff",
                padding: "6px 14px",
                borderRadius: "99px",
                border: "1px solid #c7d2fe"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4f46e5" }} /> Enterprise Multi-Tenant SaaS Engineering
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
                Scale B2B SaaS <span style={{ color: "#4f46e5" }}>From MVP to ARR</span>
              </h1>

              <p style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.65",
                marginBottom: "32px",
                maxWidth: "490px",
                fontWeight: "400"
              }}>
                We engineer scalable B2B SaaS platforms with multi-tenant database isolation, Stripe usage billing, SAML SSO authentication, and high-converting onboarding flows.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <Link
                  href="/contact"
                  style={{
                    background: "#4f46e5",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "99px",
                    padding: "15px 32px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  Build SaaS Platform
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

              {/* SaaS Key Stats */}
              <div style={{
                display: "flex",
                gap: "28px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0"
              }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", lineHeight: "1.1" }}>$120K+</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Average MRR Tracked</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#4f46e5", lineHeight: "1.1" }}>6 Wks</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>MVP Build Sprint</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981", lineHeight: "1.1" }}>99.9%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Tenant SLA Uptime</div>
                </div>
              </div>
            </div>

            {/* Right SaaS Admin Dashboard Preview Window */}
            <div className="vd-hero-right" style={{ position: "relative", minHeight: "450px" }}>
              <div style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "24px",
                border: "1.5px solid #e2e8f0",
                boxShadow: "0 25px 60px rgba(15, 23, 42, 0.08)",
                textAlign: "left"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "900", color: "#0f172a" }}>Acme Corp Workspace</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Enterprise Tier • 48 Active Seats</div>
                  </div>
                  <span style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0", padding: "4px 12px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>Stripe Active</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "14px", borderRadius: "14px" }}>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>Monthly Recurring Revenue</div>
                    <div style={{ fontSize: "22px", fontWeight: "900", color: "#4f46e5", marginTop: "2px" }}>$42,850</div>
                  </div>
                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "14px", borderRadius: "14px" }}>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>Net Retention Rate</div>
                    <div style={{ fontSize: "22px", fontWeight: "900", color: "#10b981", marginTop: "2px" }}>118%</div>
                  </div>
                </div>

                <div style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>Tenant API Usage (Current Billing Cycle)</div>
                <div style={{ height: "40px", background: "#e0e7ff", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                  <div style={{ width: "72%", height: "100%", background: "#4f46e5" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748b", marginTop: "6px" }}>
                  <span>720,000 / 1,000,000 API Calls</span>
                  <span>72% Used</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 2. SAAS CAPABILITIES GRID ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#4f46e5", marginBottom: "12px" }}>
              SaaS Platform Architecture
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "48px" }}>
              Enterprise Features Built Out-Of-The-Box
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {saasCapabilities.map((c, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 24px", textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "32px" }}>{c.icon}</span>
                    <span style={{ background: "#e0e7ff", color: "#4f46e5", border: "1px solid #c7d2fe", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{c.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>{c.title}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2.5. SAAS FAQS ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>
              SaaS Development FAQs
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((f, i) => (
                <details key={i} style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px 24px", cursor: "pointer" }}>
                  <summary style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px" }}>{f.q}</summary>
                  <p style={{ color: "#64748b", marginTop: "12px", lineHeight: "1.65", fontSize: "14.5px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. CTA BANNER ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              Ready to Launch Your B2B SaaS?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Book a free architecture session with our SaaS pod and get a 6-week MVP delivery roadmap.
            </p>
            <Link href="/contact" style={{ background: "#334155", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book Free SaaS Roadmap →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
