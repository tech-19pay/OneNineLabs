import "./globals.css";

// Offline-safe font stubs — keeps build working without Google Fonts network fetch.
// If you have network, you can switch back to: import { Plus_Jakarta_Sans, Inter } from "next/font/google"
const plusJakartaSans = { variable: "" };
const inter = { variable: "" };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";
const siteName = "OneNineLabs";
const defaultTitle = "OneNineLabs — Custom Software, Web, AI & SaaS Company";
const defaultDescription =
  "OneNineLabs builds web, mobile, SaaS, AI and Web3 — Next.js, RAG, Stripe & SOC 2, 80+ shipped worldwide. Email 19@oneninelabs.com or call +91 85888 07039.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    "custom software development",
    "custom web development",
    "Next.js development company",
    "React development agency",
    "Node.js development",
    "AI automation agency",
    "LLM agents development",
    "LangChain development",
    "RAG vector search",
    "SaaS development company",
    "multi-tenant SaaS architecture",
    "Stripe billing integration",
    "blockchain development company",
    "Web3 development",
    "Solidity smart contract development",
    "dApp development",
    "cybersecurity services",
    "DevOps consulting",
    "Kubernetes consulting",
    "SOC 2 compliance",
    "SEO agency",
    "PPC management",
    "growth marketing agency",
    "OneNineLabs",
  ],
  authors: [{ name: "OneNineLabs", url: siteUrl }],
  creator: "OneNineLabs",
  publisher: "OneNineLabs",
  category: "Technology",
  classification: "Software Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "en": "/",
      "hi-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/tech_banner.png",
        width: 1200,
        height: 630,
        alt: "OneNineLabs — Custom Software, AI Agents & Web3 Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@oneninelabs",
    creator: "@oneninelabs",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/tech_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification",
  },
  other: {
    "theme-color": "#0b0c10",
    "msapplication-TileColor": "#0b0c10",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c10",
  colorScheme: "light dark",
};

// JSON-LD Organization + WebSite
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: "OneNineLabs",
    legalName: "OneNineLabs",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: `${siteUrl}/tech_banner.png`, width: 1200, height: 630 },
    image: `${siteUrl}/tech_banner.png`,
    description: defaultDescription,
    foundingDate: "2020",
    founders: [{ "@type": "Person", name: "OneNineLabs Team" }],
    email: "19@oneninelabs.com",
    telephone: "+91-8588807039",
    priceRange: "$$",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Bank Transfer, UPI, Card",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226001",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.8467,
      longitude: 80.9462,
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    }],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8588807039",
        contactType: "customer service",
        email: "19@oneninelabs.com",
        availableLanguage: ["en", "hi"],
        areaServed: ["IN", "Worldwide"],
      },
    ],
    sameAs: [
      "https://github.com/tech-19pay",
      "https://linkedin.com/company/oneninelabs",
      "https://twitter.com/oneninelabs",
    ],
    knowsAbout: [
      "Custom Software Development",
      "Web Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Mobile App Development",
      "SaaS Development",
      "Blockchain",
      "Web3",
      "Cybersecurity",
      "DevOps",
      "Cloud Architecture",
      "SEO",
      "Digital Marketing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "OneNineLabs Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development and Applications", url: `${siteUrl}/services/web-development` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", url: `${siteUrl}/services/mobile-apps` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI and Intelligent Automation", url: `${siteUrl}/services/ai-automation` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Tenant SaaS Platforms", url: `${siteUrl}/services/saas` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blockchain and Web3 Solutions", url: `${siteUrl}/services/blockchain` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth Marketing, SEO and PPC", url: `${siteUrl}/services/marketing` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud and Cyber Security", url: `${siteUrl}/services/security` } },
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
