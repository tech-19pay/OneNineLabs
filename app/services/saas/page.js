import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SaasPageContent from "@/components/SaasPageContent";
import { saasFaqs as faqs } from "@/lib/faqs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "SaaS Development Company — Multi-Tenant, Stripe & SSO",
  description: "B2B SaaS engineering on Next.js 15 & Node.js microservices. Multi-tenant database isolation, Stripe recurring billing, team RBAC, and telemetry analytics.",
  keywords: ["SaaS development company", "multi-tenant architecture", "Stripe billing integration", "Next.js SaaS template", "B2B SaaS agency", "SaaS MVP builder"],
  alternates: { canonical: "/services/saas", languages: { "en-US": "/services/saas", en: "/services/saas", "x-default": "/services/saas" } },
  openGraph: { locale: "en_US", siteName: "OneNineLabs",
    title: "SaaS Platform Development | OneNineLabs",
    description: "Scale B2B SaaS platforms with multi-tenant isolation and automated Stripe billing.",
    url: "https://oneninelabs.com/services/saas",
    type: "website",
    images: [
      { url: "/og/saas.jpg", width: 1200, height: 630, alt: "SaaS Development by OneNineLabs", type: "image/jpeg" },
    ],
  },
  twitter: { site: "@oneninelabs", creator: "@oneninelabs",
    card: "summary_large_image",
    title: "SaaS Platform Development | OneNineLabs",
    description: "Multi-tenant SaaS with Stripe billing, SSO and SOC 2-ready logs.",
    images: ["/og/saas.jpg"],
  },
  robots: { index: true, follow: true },
};


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
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SaaS Development Services",
      itemListElement: [
        "Multi-Tenant Architecture",
        "Stripe Billing",
        "SAML SSO and RBAC",
        "SOC 2 Ready Telemetry",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
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
