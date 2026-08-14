import HomePageClient from "@/components/HomePageClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "OneNineLabs — Custom Software Company | Lucknow, India",
  description:
    "Lucknow's custom software company for web, mobile, SaaS, AI and Web3 — Next.js, React Native, RAG, 99.9% uptime. Contact 19@oneninelabs.com or +91 85888 07039.",
  keywords: [
    "custom software development company",
    "custom software development company Lucknow",
    "Next.js development company",
    "React development agency",
    "Node.js development",
    "AI agents development",
    "LLM RAG LangChain",
    "SaaS development company",
    "multi-tenant SaaS",
    "blockchain development company",
    "Web3 development",
    "Solidity smart contract",
    "growth marketing agency",
    "SEO PPC company",
    "OneNineLabs",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "OneNineLabs",
    title: "OneNineLabs — Custom Software, AI Agents & Web3 Apps",
    description:
      "We build scalable custom applications, AI automation, SaaS platforms, blockchain dApps, and growth systems — engineered for speed, security & scale. Talk to an architect in 24h.",
    images: [
      {
        url: "/tech_banner.png",
        width: 1200,
        height: 630,
        alt: "OneNineLabs — Custom Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@oneninelabs",
    creator: "@oneninelabs",
    title: "OneNineLabs — Custom Software Development Company",
    description: "Custom web apps, AI agents, SaaS & Web3 — 99.9% uptime, SOC 2-ready.",
    images: ["/tech_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
  category: "Technology",
};

export default function Page() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }],
  };
  const serviceCatalogLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OneNineLabs Services",
    description: "Core services offered by OneNineLabs — custom software engineering for enterprise growth",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Custom Web Development & Applications",
          url: `${siteUrl}/services/web-development`,
          description: "Next.js 15, React 19, Node.js/Python, headless CMS, SSR/SSG/ISR, sub-second performance.",
          provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
          serviceType: "Web Development and Applications",
          areaServed: { "@type": "Country", name: "Worldwide" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Mobile App Development",
          url: `${siteUrl}/services/mobile-apps`,
          description: "React Native, Flutter, Swift/Kotlin — native feel, offline-first, OTA updates, and store launch.",
          provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
          serviceType: "Mobile App Development",
          areaServed: { "@type": "Country", name: "Worldwide" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "AI & Intelligent Automation",
          url: `${siteUrl}/services/ai-automation`,
          description: "Autonomous LLM agents (LangChain/LlamaIndex), RAG with Pinecone/Qdrant, workflow automation.",
          provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
          serviceType: "AI and Intelligent Automation",
          areaServed: { "@type": "Country", name: "Worldwide" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Multi-Tenant SaaS Platforms",
          url: `${siteUrl}/services/saas`,
          description: "RLS isolation, Stripe billing, SSO/RBAC, serverless scale, SOC 2-ready.",
          provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
          serviceType: "SaaS Development",
          areaServed: { "@type": "Country", name: "Worldwide" },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Blockchain & Web3 Solutions",
          url: `${siteUrl}/services/blockchain`,
          description: "Solidity/Rust smart contracts, L2, wallet integrations, Slither/Foundry audits.",
          provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
          serviceType: "Blockchain and Web3 Development",
          areaServed: { "@type": "Country", name: "Worldwide" },
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Growth Marketing, SEO & PPC",
          url: `${siteUrl}/services/marketing`,
          description: "Technical SEO, Core Web Vitals, PPC, CRO — +340% organic, 4.8x ROAS.",
          provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
          serviceType: "Growth Marketing and SEO",
          areaServed: { "@type": "Country", name: "Worldwide" },
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Service",
          name: "Cybersecurity & DevOps Infrastructure",
          url: `${siteUrl}/services/security`,
          description: "Zero-Trust, Kubernetes, Terraform, CI/CD, SOC 2, pen-testing, 99.99% uptime.",
          provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
          serviceType: "Cybersecurity and DevOps",
          areaServed: { "@type": "Country", name: "Worldwide" },
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogLd) }} />
      <HomePageClient />
    </>
  );
}
