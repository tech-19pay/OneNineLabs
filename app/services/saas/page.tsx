import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaasPageContent from "@/components/SaasPageContent";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata: Metadata = {
  title: "SaaS Development — Multi-Tenant Platforms & Stripe Billing | OneNineLabs",
  description: "B2B SaaS engineering on Next.js 15 & Node.js microservices. Multi-tenant database isolation, Stripe recurring billing, team RBAC, and telemetry analytics.",
  keywords: [
    "SaaS development company",
    "multi-tenant architecture",
    "Stripe billing integration",
    "Next.js SaaS template",
    "B2B SaaS agency",
    "SaaS MVP builder",
    "PostgreSQL RLS",
    "SAML SSO development"
  ],
  alternates: {
    canonical: "/services/saas",
    languages: {
      "en-US": "/services/saas",
      en: "/services/saas",
      "hi-IN": "/services/saas",
      "x-default": "/services/saas"
    }
  },
  openGraph: {
    title: "SaaS Platform Development | OneNineLabs",
    description: "Scale B2B SaaS platforms with multi-tenant isolation, automated Stripe billing & SAML SSO.",
    url: `${siteUrl}/services/saas`,
    type: "website",
    images: [{ url: "/saas_banner.png", width: 1200, height: 630, alt: "SaaS Platform Development by OneNineLabs" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Platform Development | OneNineLabs",
    description: "Scale B2B SaaS platforms with multi-tenant isolation, automated Stripe billing & SAML SSO.",
    images: ["/saas_banner.png"]
  },
  robots: { index: true, follow: true }
};

const faqs = [
  {
    q: "What is multi-tenant SaaS architecture and why is PostgreSQL RLS the best approach?",
    a: "Multi-tenant architecture allows a single application and database instance to securely serve thousands of distinct customers (tenants). We use PostgreSQL Row-Level Security (RLS), which enforces data isolation directly at the database engine layer. Every query is filtered by tenant_id, guaranteeing that no tenant can ever view or modify another tenant's data."
  },
  {
    q: "How do you handle Stripe billing, seat changes, and usage-based tiers?",
    a: "We implement full-lifecycle Stripe integrations using webhooks: seat-based recurring tiers, metered usage counters, automated proration when seats are added mid-month, invoice PDF downloads, and dunning retry logic to recover failed card payments."
  },
  {
    q: "Can you implement enterprise SAML SSO (Okta, Google, Azure AD)?",
    a: "Yes — we integrate enterprise Single Sign-On (SSO) via WorkOS or Clerk. Enterprise customers can authenticate using their existing identity providers (Okta, Azure Active Directory, Google Workspace), and we support SCIM for automated user directory provisioning."
  },
  {
    q: "How fast can you build and launch a production-grade SaaS MVP?",
    a: "Using our battle-tested Next.js + Node.js SaaS starter foundation, our dedicated engineering pod ships a production-ready multi-tenant MVP in 6 to 8 weeks, complete with auth, database isolation, Stripe billing, and user dashboards."
  },
  {
    q: "Is the SaaS platform architecture SOC 2 Type II audit ready?",
    a: "Yes — we bake in immutable cryptographic audit logging, role-based access controls (RBAC), database encryption at rest (KMS), and automated compliance evidence logs that integrate seamlessly with Vanta and Drata."
  },
  {
    q: "Who owns the source code and database schemas upon handover?",
    a: "You receive 100% full, exclusive ownership of all codebases, database schemas, Figma design files, deployment pipelines, and Stripe accounts upon milestone completion with zero vendor lock-in."
  }
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
