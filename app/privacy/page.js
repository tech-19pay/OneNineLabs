import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Privacy Policy | OneNineLabs",
  description:
    "How OneNineLabs collects, uses and protects personal data. Contact 19@oneninelabs.com for privacy requests. Lucknow, Uttar Pradesh, India.",
  alternates: {
    canonical: "/privacy",
    languages: { "en-US": "/privacy", en: "/privacy", "hi-IN": "/privacy", "x-default": "/privacy" },
  },
  openGraph: {
    title: "Privacy Policy | OneNineLabs",
    description: "How we collect, use and protect personal data at OneNineLabs.",
    url: `${siteUrl}/privacy`,
    type: "website",
    images: [{ url: "/tech_banner.png", width: 1200, height: 630, alt: "OneNineLabs Privacy Policy" }],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${siteUrl}/privacy` },
    ],
  };
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${siteUrl}/privacy`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    dateModified: "2026-08-26",
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />

      <nav aria-label="Breadcrumb" style={{ background: "#fff", paddingTop: "96px", padding: "96px 24px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingBottom: "14px", borderBottom: "1px solid #f1f5f9", fontSize: "13px", color: "#64748b" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontWeight: 600 }}>Home</Link>
          <span aria-hidden="true"> / </span>
          <span style={{ color: "#0f172a", fontWeight: 700 }}>Privacy Policy</span>
        </div>
      </nav>

      <article style={{ background: "#fff", padding: "48px 24px 96px", color: "#0f172a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: "12px" }}>Privacy Policy</h1>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "32px" }}>Last updated: 26 August 2026 · OneNineLabs, Lucknow, Uttar Pradesh, India</p>

          {[
            ["Who we are", "OneNineLabs is a software engineering firm based in Lucknow, Uttar Pradesh, India. Controller contact: 19@oneninelabs.com / +91 85888 07039."],
            ["What we collect", "When you use our contact or footer forms we collect name, work email, company and the project notes you send. Server logs may include IP address, user-agent and the page you came from. We do not sell personal data."],
            ["Why we use it", "To reply to enquiries, send the architecture proposal you requested, improve the site, and meet legal obligations. Legal bases: legitimate interest and/or consent, depending on the form."],
            ["How long we keep it", "Enquiry records are kept for up to 24 months unless you ask us to delete them sooner, or a longer period is required for a contract or dispute."],
            ["Processors", "Hosting, email and database providers that process data only on our instructions. We do not run third-party advertising pixels on this site."],
            ["Your rights", "You may request access, correction, deletion or a copy of your data. Email 19@oneninelabs.com. If you are in the EEA/UK you may also lodge a complaint with your local authority."],
            ["Security", "We use TLS in transit, access-controlled storage and least-privilege admin accounts. See also our Cloud and Cyber Security services and SOC 2-ready practices."],
          ].map(([h, p]) => (
            <section key={h} style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "8px" }}>{h}</h2>
              <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.7, margin: 0 }}>{p}</p>
            </section>
          ))}

          <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.7 }}>
            Related: <Link href="/terms" style={{ color: "#2563eb", fontWeight: 700 }}>Terms of Service</Link> ·{" "}
            <Link href="/services/security" style={{ color: "#2563eb", fontWeight: 700 }}>Cloud and Cyber Security</Link> ·{" "}
            <Link href="/contact" style={{ color: "#2563eb", fontWeight: 700 }}>Contact</Link>
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
