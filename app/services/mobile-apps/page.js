import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileAppsPageContent from "@/components/MobileAppsPageContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Custom Mobile App Development — iOS, Android & React Native | OneNineLabs",
  description: "High-performance native and cross-platform mobile apps engineered for 60/120 FPS fluid motion, offline-first SQLite sync, and rapid App Store & Google Play launch.",
  keywords: [
    "mobile app development company",
    "React Native development",
    "iOS Swift development",
    "Android Kotlin developer",
    "Flutter app development",
    "offline first mobile app",
    "mobile app design agency",
    "App Store Optimization ASO",
    "cross-platform mobile apps"
  ],
  alternates: {
    canonical: "/services/mobile-apps",
    languages: {
      "en-US": "/services/mobile-apps",
      en: "/services/mobile-apps",
      "hi-IN": "/services/mobile-apps",
      "x-default": "/services/mobile-apps",
    },
  },
  openGraph: {
    title: "Custom Mobile App Development — iOS, Android & React Native | OneNineLabs",
    description: "High-performance native & cross-platform mobile apps engineered for 60/120 FPS speed, offline sync & rapid store launch.",
    url: `${siteUrl}/services/mobile-apps`,
    type: "website",
    images: [{ url: "/mobile_app_preview.png", width: 1200, height: 630, alt: "Mobile App Development by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile App Development — iOS, Android & React Native | OneNineLabs",
    description: "High-performance native & cross-platform mobile apps engineered for 60/120 FPS speed and offline sync.",
    images: ["/mobile_app_preview.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Native, hybrid or cross-platform — which is best for our mobile app?",
    a: "For 85% of mobile products, React Native or Flutter offers 90%+ code reuse across iOS and Android while delivering 60/120 FPS native performance. For apps requiring deep OS-level APIs, custom hardware integration, or complex AR/graphic pipelines, we build pure native Swift (iOS) and Kotlin (Android)."
  },
  {
    q: "Can the mobile app work seamlessly offline without internet?",
    a: "Yes — we architect offline-first mobile apps using local SQLite and WatermelonDB storage paired with optimistic UI updates and background sync queues. Users can perform actions without connectivity, and all data syncs reliably upon reconnect with conflict resolution."
  },
  {
    q: "Do you handle the entire App Store and Play Store launch process?",
    a: "Yes — we manage end-to-end store publishing, including Apple Developer / Google Play Console setup, App Store Optimization (ASO), privacy policy disclosures, screenshots, TestFlight/internal track beta management, and store review approval."
  },
  {
    q: "How do you deliver rapid updates without waiting for app store reviews?",
    a: "We configure Over-The-Air (OTA) update pipelines using Expo EAS Updates and CodePush. This allows you to ship critical bug fixes, UI updates, and feature tweaks instantly to users in production without waiting days for App Store review cycles."
  },
  {
    q: "What security measures do you implement for mobile data?",
    a: "We implement hardware-backed biometric authentication (FaceID, TouchID, Android BiometricPrompt), Secure Enclave / Keystore cryptographic token storage, SSL certificate pinning, obfuscated builds, and tamper detection."
  },
  {
    q: "Who owns the code and intellectual property after handover?",
    a: "You retain 100% full ownership of all source code, design assets (Figma), CI/CD pipelines, documentation, and app store deployment configurations with zero vendor lock-in."
  }
];

export default function MobileAppsServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Mobile App Development", item: `${siteUrl}/services/mobile-apps` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/mobile-apps#service`,
    name: "Mobile App Development",
    serviceType: "Mobile App Development",
    url: `${siteUrl}/services/mobile-apps`,
    description: "Native iOS (Swift / SwiftUI), Android (Kotlin), and React Native cross-platform mobile app engineering with sub-second API sync and App Store launch support.",
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
        <MobileAppsPageContent />
      </main>

      <Footer />
    </>
  );
}
