import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Terms of Service | OneNineLabs",
  description:
    "Terms for using oneninelabs.com and engaging OneNineLabs for software, AI, SaaS, Web3 and security work. Lucknow, India.",
  alternates: {
    canonical: "/terms",
    languages: { "en-US": "/terms", en: "/terms", "hi-IN": "/terms", "x-default": "/terms" },
  },
  openGraph: {
    title: "Terms of Service | OneNineLabs",
    description: "Terms for using the OneNineLabs website and engaging our engineering team.",
    url: `${siteUrl}/terms`,
    type: "website",
    images: [{ url: "/tech_banner.png", width: 1200, height: 630, alt: "OneNineLabs Terms of Service" }],
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${siteUrl}/terms` },
    ],
  };
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    url: `${siteUrl}/terms`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    dateModified: "2026-08-26",
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />

      <nav aria-label="Breadcrumb" style={{ background: "#fff", padding: "96px 24px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingBottom: "14px", borderBottom: "1px solid #f1f5f9", fontSize: "13px", color: "#64748b" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <span aria-hidden="true"> / </span>
          <span style={{ color: "#0f172a", fontWeight: 700 }}>Terms of Service</span>
        </div>
      </nav>

      <article style={{ background: "#fff", padding: "48px 24px 96px", color: "#0f172a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: "12px" }}>Terms of Service</h1>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "32px" }}>Last updated: 26 August 2026 · Governed by the laws of India</p>

          {[
            ["Using this website", "The site is provided for information about OneNineLabs services. Do not scrape, overload or misrepresent affiliation with us. Content is owned by OneNineLabs unless noted."],
            ["Engagements", "Paid work is governed by a written proposal or statement of work. Estimates are not quotes until both parties sign. You own deliverables after milestone payment, as specified in the SOW."],
            ["Acceptable use", "Do not use our software or advice to break the law, infringe IP, or attack systems. We may refuse or terminate work that we reasonably believe is unlawful."],
            ["Confidentiality", "Both parties keep non-public project information confidential. We do not use your source code or data to train public models."],
            ["Liability", "To the extent permitted by Indian law, our liability for a given engagement is limited to fees paid for that engagement in the prior 12 months. We do not exclude liability that cannot legally be excluded."],
            ["Contact", "Questions: 19@oneninelabs.com or +91 85888 07039. OneNineLabs, Lucknow, Uttar Pradesh, India."],
          ].map(([h, p]) => (
            <section key={h} style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>{h}</h2>
              <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.7, margin: 0 }}>{p}</p>
            </section>
          ))}

          <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.7 }}>
            Also see our <Link href="/privacy" style={{ color: "#2563eb", fontWeight: 700 }}>Privacy Policy</Link> and{" "}
            <Link href="/contact" style={{ color: "#2563eb", fontWeight: 700 }}>Contact</Link> page.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
