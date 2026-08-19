import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecurityPageContent from "@/components/SecurityPageContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Cybersecurity & SOC 2 Compliance — Threat Defense & Penetration Testing | OneNineLabs",
  description: "Enterprise cybersecurity audits, penetration testing, SOC 2 Type II readiness, zero-trust cloud architecture, and real-time vulnerability scanning.",
  keywords: [
    "cybersecurity audit company",
    "penetration testing services",
    "SOC 2 Type II compliance",
    "zero trust architecture",
    "vulnerability scanner",
    "cloud security audit",
    "DevSecOps engineering",
    "ISO 27001 readiness"
  ],
  alternates: {
    canonical: "/services/security",
    languages: {
      "en-US": "/services/security",
      en: "/services/security",
      "hi-IN": "/services/security",
      "x-default": "/services/security",
    },
  },
  openGraph: {
    title: "Cybersecurity & SOC 2 Readiness | OneNineLabs",
    description: "Zero-trust cloud architecture, penetration testing & real-time threat defense.",
    url: `${siteUrl}/services/security`,
    type: "website",
    images: [{ url: "/services/security_preview.png", width: 1200, height: 630, alt: "Cybersecurity & SOC 2 by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity & SOC 2 Readiness | OneNineLabs",
    description: "Zero-trust cloud architecture, penetration testing & real-time threat defense.",
    images: ["/services/security_preview.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What is included in a OneNineLabs penetration test?",
    a: "Our penetration tests include exhaustive black-box and white-box assessments covering web applications, mobile apps, REST/GraphQL APIs, and cloud infrastructure. We test for the OWASP Top 10, authentication bypasses, privilege escalation, business logic flaws, and supply chain vulnerabilities, providing a detailed remediation report and a free re-test."
  },
  {
    q: "How fast can you prepare our platform for a SOC 2 Type II or ISO 27001 audit?",
    a: "We typically achieve full audit-readiness within 6 to 8 weeks. We draft all required security policies, configure technical controls on AWS/GCP, integrate automated evidence collection with Vanta or Drata, and accompany your team throughout the auditor evaluation until certificate issuance."
  },
  {
    q: "What is Zero-Trust architecture and how does it protect our cloud systems?",
    a: "Zero-Trust operates on the principle of 'never trust, always verify'. We eliminate vulnerable legacy VPNs and replace them with identity-aware Zero Trust Network Access (ZTNA), least-privilege IAM roles with session expiration, cryptographic mutual TLS (mTLS) microsegmentation, and hardware-backed KMS encryption."
  },
  {
    q: "Do you provide around-the-clock 24/7 monitoring and incident response?",
    a: "Yes — our 24/7 SIEM and Security Operations Center (SOC) continuously ingests logs from CloudTrail, Kubernetes clusters, and APIs. We provide real-time automated intrusion detection and commit to a sub-15 minute incident triage and containment SLA."
  },
  {
    q: "Which cloud providers and infrastructure environments do you support?",
    a: "We specialize in securing Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, Cloudflare, and on-premise Kubernetes clusters using automated Terraform and OpenTofu Infrastructure as Code."
  },
  {
    q: "How do you prove compliance to our enterprise enterprise customers and auditors?",
    a: "We generate audit-ready SOC 2 / ISO 27001 evidence packages, cryptographic audit trails, executive security summaries, and official penetration test verification letters that you can share with enterprise prospects to accelerate sales deals."
  }
];

export default function SecurityServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Cybersecurity & DevOps Infrastructure", item: `${siteUrl}/services/security` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/security#service`,
    name: "Cybersecurity & DevOps Infrastructure",
    serviceType: "Cybersecurity and DevOps",
    url: `${siteUrl}/services/security`,
    description: "Enterprise cybersecurity audits, penetration testing, SOC 2 Type II readiness, zero-trust cloud architecture, and real-time vulnerability scanning.",
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
        <SecurityPageContent />
      </main>

      <Footer />
    </>
  );
}
