import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecurityPageClean from "@/components/SecurityPageClean";
import { servicePageStyles } from "@/lib/servicePageStyles";
import { securityFaqs as faqs } from "@/lib/faqs";

const PRIMARY = "#059669";
const GRAD_FROM = "#065f46";
const GRAD_TO = "#059669";
const GLOW = "rgba(5,150,105,0.15)";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Cloud & Cybersecurity Services — SOC 2 & Zero-Trust",
  description: "Enterprise cloud & cybersecurity audits, zero-trust cloud architecture, penetration testing, SOC 2 Type II compliance, and real-time threat defense.",
  keywords: [
    "cloud security audit",
    "cybersecurity services",
    "penetration testing services",
    "SOC 2 Type II compliance",
    "zero trust architecture",
    "vulnerability scanner",
    "cloud cyber security",
    "ISO 27001 readiness"
  ],
  alternates: {
    canonical: "/services/security",
    languages: {
      "en-US": "/services/security",
      en: "/services/security",
      "x-default": "/services/security",
    },
  },
  openGraph: { locale: "en_US", siteName: "OneNineLabs",
    title: "Cloud & Cyber Security Readiness | OneNineLabs",
    description: "Zero-trust cloud architecture, penetration testing & real-time threat defense.",
    url: `${siteUrl}/services/security`,
    type: "website",
    images: [
      { url: "/og/security.jpg", width: 1200, height: 630, alt: "Cloud and Cyber Security by OneNineLabs", type: "image/jpeg" },
    ],
  },
  twitter: { site: "@oneninelabs", creator: "@oneninelabs",
    card: "summary_large_image",
    title: "Cloud & Cyber Security Readiness | OneNineLabs",
    description: "Zero-trust cloud architecture, penetration testing & real-time threat defense.",
    images: ["/og/security.jpg"],
  },
  robots: { index: true, follow: true },
};


export default function SecurityServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Cloud & Cyber Security", item: `${siteUrl}/services/security` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/security#service`,
    name: "Cloud & Cyber Security",
    serviceType: "Cloud and Cyber Security",
    url: `${siteUrl}/services/security`,
    description: "Enterprise cloud & cybersecurity audits, zero-trust cloud architecture, penetration testing, SOC 2 Type II compliance, and real-time threat defense.",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cloud & Cyber Security Services",
      itemListElement: [
        "Penetration Testing",
        "Zero-Trust Architecture",
        "SOC 2 Type II Readiness",
        "ISO 27001 Readiness",
        "24/7 SOC & SIEM",
        "Cloud Security Posture",
        "Identity & Access Management",
        "Vulnerability Management",
        "Incident Response",
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
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <main style={{ minHeight: "100vh", background: "#ffffff" }}>
        <SecurityPageClean />
      </main>

      <Footer />
    </>
  );
}
