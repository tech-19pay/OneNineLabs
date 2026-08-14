export const metadata = {
  title: "Contact OneNineLabs — 19@oneninelabs.com | +91 85888 07039",
  description:
    "Contact OneNineLabs: email 19@oneninelabs.com or call +91 85888 07039 (Lucknow, UP). We reply within 12h — tell us about your web, mobile, SaaS, AI or Web3 project.",
  keywords: [
    "contact OneNineLabs",
    "OneNineLabs email",
    "OneNineLabs phone",
    "software development contact Lucknow",
    "19@oneninelabs.com",
  ],
  alternates: {
    canonical: "/contact",
    languages: {
      "en-US": "/contact",
      en: "/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    title: "Contact OneNineLabs — Let's Build Together",
    description: "Email 19@oneninelabs.com or call +91 85888 07039 — Lucknow, UP. We reply within 12h.",
    url: "https://oneninelabs.com/contact",
    siteName: "OneNineLabs",
    type: "website",
    images: [{ url: "/tech_banner.png", width: 1200, height: 630, alt: "Contact OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact OneNineLabs — 19@oneninelabs.com",
    description: "Lucknow & worldwide — 19@oneninelabs.com or +91 85888 07039. 12h response.",
    images: ["/tech_banner.png"],
  },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
