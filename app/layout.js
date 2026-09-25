import "./globals.css";
import ScrollObserver from "@/components/ScrollObserver";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";
import {
  siteUrl,
  siteName,
  contactEmail,
  contactPhoneDisplay,
  organizationLd,
  websiteLd,
  alternatesFor,
  defaultOgImage,
} from "@/lib/seo";

// Offline-safe font stubs — keeps build working without Google Fonts network fetch.
// If you have network, you can switch back to: import { Plus_Jakarta_Sans, Inter } from "next/font/google"
const plusJakartaSans = { variable: "" };
const inter = { variable: "" };

const defaultTitle = "OneNineLabs — Custom Software, Web, AI & SaaS Company";
const defaultDescription =
  `OneNineLabs builds web, mobile, SaaS, AI and Web3 — Next.js, RAG, Stripe & SOC 2, 80+ shipped worldwide. Email ${contactEmail} or call ${contactPhoneDisplay}.`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
  },
  description: defaultDescription,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Technology",
  classification: "Software Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: alternatesFor("/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@oneninelabs",
    creator: "@oneninelabs",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage.url],
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
  manifest: "/manifest.json",
  verification: {
    // Fill these in from Google Search Console / Bing Webmaster Tools:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification",
    // other: { "msvalidate.01": "your-bing-code" },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ScrollObserver />
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
        {children}
        <Analytics />
        <Script
          id="tawk-to-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = window.Tawk_API || {};
              var Tawk_LoadStart = new Date();
              (function () {
                var s1 = document.createElement("script");
                var s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/6ab12a03ece66d34479af329/1k320o8dv";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
