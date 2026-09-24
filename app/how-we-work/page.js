import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import HowWeWorkClient from "@/components/HowWeWorkClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "How We Work — The 7-Stage Execution Protocol | OneNineLabs",
  description:
    "Our 7-stage software execution protocol: Discovery, Plan, Design, Build, Review, Launch and Support — transparent, milestone-driven engineering.",
  keywords: [
    "how we work",
    "software development lifecycle",
    "7-stage execution protocol",
    "custom software methodology",
    "agile engineering pods",
    "OneNineLabs process",
    "software delivery framework",
  ],
  alternates: {
    canonical: "/how-we-work",
    languages: {
      "en-US": "/how-we-work",
      en: "/how-we-work",
      "x-default": "/how-we-work",
    },
  },
  openGraph: { locale: "en_US", siteName: "OneNineLabs",
    title: "How We Work — The 7-Stage Execution Protocol | OneNineLabs",
    description:
      "From Concept to Production Scale. Discover our battle-tested 7-phase methodology engineered for velocity, security, and measurable ROI.",
    url: `${siteUrl}/how-we-work`,
    siteName: "OneNineLabs",
    type: "website",
    images: [
      { url: "/og/default.jpg", width: 1200, height: 630, alt: "How OneNineLabs delivers software", type: "image/jpeg" },
    ],
  },
  twitter: { site: "@oneninelabs", creator: "@oneninelabs",
    card: "summary_large_image",
    title: "How We Work — The 7-Stage Execution Protocol | OneNineLabs",
    description: "From Concept to Production Scale. Transparent, disciplined 7-phase engineering methodology.",
    images: ["/og/default.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function HowWeWorkPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "How We Work", item: `${siteUrl}/how-we-work` },
    ],
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "OneNineLabs 7-Stage Software Execution Protocol",
    description: "Our structured methodology to build and scale production software from concept to global deployment.",
    step: [
      { "@type": "HowToStep", name: "01 Discovery", text: "Technical feasibility audit, data schema mapping, and sprint architecture roadmap." },
      { "@type": "HowToStep", name: "02 Plan", text: "Sprint mapping, CI/CD pipeline setup, and service level agreements." },
      { "@type": "HowToStep", name: "03 Design", text: "Interactive Figma prototypes, design tokens, and WCAG accessibility standards." },
      { "@type": "HowToStep", name: "04 Build", text: "Test-driven engineering, clean modular code, and weekly preview demos." },
      { "@type": "HowToStep", name: "05 Review", text: "OWASP penetration testing, load simulation with 10,000+ users, and UAT sign-off." },
      { "@type": "HowToStep", name: "06 Launch", text: "Zero-downtime blue-green cutover, global CDN caching, and telemetry stream setup." },
      { "@type": "HowToStep", name: "07 Support", text: "99.9% uptime SLA, 15-min incident response, security patches, and ongoing evolution." },
    ],
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />


      {/* Hero Section with Interactive 7-Stage Execution Protocol matching the reference */}
      <HowWeWorkClient />

      {/* Studio Standards — Why Our Engineering Process Works Section */}
      <section style={{ padding: "20px 24px 70px 24px", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          
          {/* Eyebrow Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#e0f2fe",
              border: "1px solid #bae6fd",
              padding: "6px 18px",
              borderRadius: "9999px",
              marginBottom: "20px",
              boxShadow: "0 2px 10px rgba(2, 132, 199, 0.08)",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0284c7" }}>
              STUDIO STANDARDS
            </span>
          </div>

          {/* Section Heading */}
          <h2
            style={{
              fontSize: "clamp(30px, 4.2vw, 48px)",
              fontWeight: 900,
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: "-1.2px",
              textTransform: "uppercase",
              margin: "0 0 14px 0",
              fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            WHY OUR ENGINEERING PROCESS<br />
            <span
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              WORKS
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#475569",
              maxWidth: "680px",
              margin: "0 auto 44px auto",
              fontWeight: 450,
              fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Engineered to eliminate friction, prevent delays, and deliver exceptional product quality.
          </p>

          {/* 4 Feature Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              textAlign: "left",
            }}
          >
            {/* Card 1: Weekly Shippable Builds */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "36px 28px",
                boxShadow: "0 10px 30px -4px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#e0f2fe",
                  border: "1px solid #bae6fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                Weekly Shippable Builds
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.62,
                  color: "#64748b",
                  margin: 0,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                No black-box development. Every single Friday you get a live testable URL to play with real features and provide feedback.
              </p>
            </div>

            {/* Card 2: Security & Quality Built-In */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "36px 28px",
                boxShadow: "0 10px 30px -4px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#e0f2fe",
                  border: "1px solid #bae6fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                Security &amp; Quality Built-In
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.62,
                  color: "#64748b",
                  margin: 0,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                We don&apos;t tack on security at the end. Automated tests, static code analysis, and sanitized inputs are baked into every commit.
              </p>
            </div>

            {/* Card 3: Direct Engineer Access */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "36px 28px",
                boxShadow: "0 10px 30px -4px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#e0f2fe",
                  border: "1px solid #bae6fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                Direct Engineer Access
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.62,
                  color: "#64748b",
                  margin: 0,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                Zero middle-management telephone games. You communicate directly with the builders and architects working on your codebase.
              </p>
            </div>

            {/* Card 4: 100% IP & Code Ownership */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "36px 28px",
                boxShadow: "0 10px 30px -4px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#e0f2fe",
                  border: "1px solid #bae6fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="2"></circle>
                  <path d="M12 15v3"></path>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                100% IP &amp; Code Ownership
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.62,
                  color: "#64748b",
                  margin: 0,
                  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                You own all source code, design files, Figma assets, and database schemas from day one. Zero vendor lock-in.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* High-Impact Contact CTA Banner */}
      <section style={{ background: "linear-gradient(180deg, #ffffff 0%, #edf6fd 100%)", padding: "70px 24px 90px 24px" }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: "24px",
            padding: "52px 36px",
            textAlign: "center",
            color: "#ffffff",
            boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.2)",
          }}
        >
          <span style={{ display: "inline-block", background: "rgba(2, 132, 199, 0.2)", border: "1px solid #0284c7", color: "#38bdf8", padding: "4px 14px", borderRadius: "9999px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
            Ready to Begin Stage 01?
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: "16px", letterSpacing: "-1px" }}>
            Let&apos;s Build Your Solution With Predictable Precision
          </h2>
          <p style={{ fontSize: "16px", color: "#94a3b8", maxWidth: "620px", margin: "0 auto 28px", lineHeight: 1.6 }}>
            Schedule an architectural discovery session with our engineering directors. Receive a comprehensive feasibility review within 48 hours.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                color: "#ffffff",
                padding: "14px 30px",
                borderRadius: "9999px",
                fontWeight: 800,
                textDecoration: "none",
                fontSize: "15px",
                boxShadow: "0 10px 20px rgba(2, 132, 199, 0.35)",
              }}
            >
              Start Stage 01 Discovery &rarr;
            </Link>
            <a
              href="mailto:19@oneninelabs.com"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                padding: "14px 26px",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Email 19@oneninelabs.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
