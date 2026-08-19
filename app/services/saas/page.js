import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaasPageContent from "@/components/SaasPageContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "SaaS Development — Multi-Tenant Platforms & Stripe Billing | OneNineLabs",
  description: "B2B SaaS engineering on Next.js 15 & Node.js microservices. Multi-tenant database isolation, Stripe recurring billing, team RBAC, and telemetry analytics.",
  keywords: ["SaaS development company", "multi-tenant architecture", "Stripe billing integration", "Next.js SaaS template", "B2B SaaS agency", "SaaS MVP builder"],
  alternates: { canonical: "/services/saas", languages: { "en-US": "/services/saas", en: "/services/saas", "hi-IN": "/services/saas", "x-default": "/services/saas" } },
  openGraph: { title: "SaaS Platform Development | OneNineLabs", description: "Scale B2B SaaS platforms with multi-tenant isolation & automated billing.", url: "https://oneninelabs.com/services/saas", type: "website" },
  robots: { index: true, follow: true },
};

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
      <main style={{ minHeight: "100vh", background: "#ffffff" }}>
        <SaasPageContent />
      </main>
      <Footer />
    </>
  );
}
