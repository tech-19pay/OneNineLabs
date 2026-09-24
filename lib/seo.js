/**
 * Central SEO configuration for OneNineLabs.
 *
 * Single source of truth for the site URL, brand strings, social profiles,
 * hreflang set, Open Graph / Twitter defaults and the shared JSON-LD
 * entities (Organization + WebSite) so every page emits *identical*,
 * consistent markup. Pages build their metadata with `pageMetadata()`.
 */

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com").replace(/\/$/, "");
export const siteName = "OneNineLabs";
export const brandTagline = "Build • Innovate • Elevate";

/** Organization / WebSite @id anchors — referenced from every page so the
 *  entity graph has exactly ONE Organization and ONE WebSite node. */
export const ORG_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;

/** Only profiles that actually exist. Verified 2026-09-24: github.com/tech-19pay = 200. */
export const socialProfiles = [
  "https://github.com/tech-19pay",
  "https://www.linkedin.com/company/oneninelabs",
  "https://x.com/oneninelabs",
];

export const contactEmail = "19@oneninelabs.com";
export const contactPhone = "+91-8588807039";
export const contactPhoneDisplay = "+91 85888 07039";

/** Default social card (real 1200x630 JPEG, see /public/og/). */
export const defaultOgImage = {
  url: "/og/default.jpg",
  width: 1200,
  height: 630,
  alt: "OneNineLabs — Custom Software, AI Agents & Web3 Apps",
  type: "image/jpeg",
};

/**
 * Hreflang set. The site publishes ONE English edition, so only English
 * variants are declared. `hi-IN` / `en-GB` were removed on 2026-09-24:
 * hreflang must never point two languages at the same English URL
 * (Google flags it as a misconfiguration and ignores the whole set).
 */
export function alternatesFor(path) {
  const href = path === "/" ? "/" : path;
  return {
    canonical: href,
    languages: {
      "en-US": href,
      en: href,
      "x-default": href,
    },
  };
}

/**
 * Build a page's metadata object with complete, consistent Open Graph and
 * Twitter cards (locale / site_name / twitter:site are filled in here so no
 * page can accidentally drop them).
 */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  ogImage,
  ogTitle,
  ogDescription,
  ogType = "website",
  robots = { index: true, follow: true },
}) {
  const img = ogImage || defaultOgImage;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: alternatesFor(path),
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: `${siteUrl}${path === "/" ? "" : path}`,
      siteName,
      title: ogTitle || title,
      description: ogDescription || description,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      site: "@oneninelabs",
      creator: "@oneninelabs",
      title: ogTitle || title,
      description: ogDescription || description,
      images: [img.url],
    },
    robots,
  };
}

/* ------------------------------ JSON-LD ------------------------------ */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteName,
    legalName: siteName,
    slogan: brandTagline,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-square-512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/og/default.jpg`,
    description:
      "OneNineLabs builds web, mobile, SaaS, AI and Web3 — Next.js, RAG, Stripe & SOC 2, 80+ shipped worldwide.",
    foundingDate: "2020",
    email: contactEmail,
    telephone: contactPhone,
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
    geo: { "@type": "GeoCoordinates", latitude: 26.8467, longitude: 80.9462 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contactPhone,
        contactType: "customer service",
        email: contactEmail,
        availableLanguage: ["en", "hi"],
        areaServed: ["IN", "Worldwide"],
      },
    ],
    sameAs: socialProfiles,
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
        ["Web Development and Applications", "/services/web-development"],
        ["Mobile App Development", "/services/mobile-apps"],
        ["AI and Intelligent Automation", "/services/ai-automation"],
        ["Multi-Tenant SaaS Platforms", "/services/saas"],
        ["Blockchain and Web3 Solutions", "/services/blockchain"],
        ["Growth Marketing, SEO and PPC", "/services/marketing"],
        ["Cloud and Cyber Security", "/services/security"],
      ].map(([name, url]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, url: `${siteUrl}${url}` },
      })),
    },
    areaServed: { "@type": "Country", name: "Worldwide" },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: siteName,
    description:
      "OneNineLabs builds web, mobile, SaaS, AI and Web3 — Next.js, RAG, Stripe & SOC 2, 80+ shipped worldwide.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

/** items: [{ name, path }] — Home is prepended automatically. */
export function breadcrumbLd(items) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
