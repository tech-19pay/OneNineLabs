import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { servicePageStyles } from "@/lib/servicePageStyles";
import ServiceContactForm from "@/components/ServiceContactForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Growth Marketing Services — SEO, PPC & CRO | OneNineLabs",
  description: "Technical SEO, Core Web Vitals, PPC and CRO that compounds — +340% organic, 4.8x ROAS. We scale B2B SaaS & Web3 funnels from click to revenue.",
  keywords: ["SEO services", "technical SEO", "PPC management", "Google Ads agency", "LinkedIn Ads", "growth marketing agency", "CRO conversion rate optimization", "programmatic SEO", "B2B SaaS marketing"],
  alternates: { canonical: "/services/marketing", languages: { "en-US": "/services/marketing", en: "/services/marketing", "hi-IN": "/services/marketing", "x-default": "/services/marketing" } },
  openGraph: { title: "Growth Marketing, SEO & PPC — 4.8x ROAS | OneNineLabs", description: "Technical SEO + PPC + CRO + full-funnel analytics — engineered for compounding growth.", url: "https://oneninelabs.com/services/marketing", type: "website", images: [{ url: "/services/services_hero_marketing.png", width: 1200, height: 630, alt: "Growth Marketing — SEO & PPC by OneNineLabs" }] },
  twitter: { card: "summary_large_image", title: "Growth Marketing, SEO & PPC — 4.8x ROAS | OneNineLabs", description: "Technical SEO + PPC + CRO that compounds.", images: ["/services/services_hero_marketing.png"] },
  robots: { index: true, follow: true },
};

const PRIMARY = "#4f46e5";
const GRAD_FROM = "#3730a3";
const GRAD_TO = "#6366f1";
const GLOW = "rgba(99, 102, 241, 0.15)";

const servicesList = [
  {
    id: "technical-seo",
    title: "Technical SEO & Schema",
    role: "Crawl Architecture & Core Web Vitals",
    category: "Technical SEO",
    href: "/services/web-development",
    icon: "🔍",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    accent: "#3b82f6",
    accentLight: "#eff6ff",
    accentBorder: "#bfdbfe",
    bullets: [
      "Crawl architecture, sitemap & robots.txt engineering",
      "Core Web Vitals fixes — LCP, CLS, INP optimized in code",
      "JSON-LD schema & entity markup for rich SERP results",
      "Programmatic SEO templates for 10k+ ranking pages",
    ],
    widget: "📈 +340% Organic Traffic Growth",
  },
  {
    id: "ppc-management",
    title: "Google & LinkedIn PPC Ads",
    role: "Paid Search, Display & Retargeting",
    category: "Paid Ads",
    href: "/services/marketing",
    icon: "🎯",
    gradient: "linear-gradient(135deg, #4f46e5, #6366f1)",
    accent: "#4f46e5",
    accentLight: "#e0e7ff",
    accentBorder: "#c7d2fe",
    bullets: [
      "Google Search, Display, PMax & YouTube campaign management",
      "LinkedIn Sponsored Content for B2B SaaS lead generation",
      "Smart bidding automation — tROAS & tCPA optimization",
      "Weekly ad creative iteration & A/B copy testing",
    ],
    widget: "🎯 4.8x Campaign Blended ROAS",
  },
  {
    id: "cro-funnels",
    title: "CRO & Conversion Funnels",
    role: "Landing Pages, A/B Tests & Heatmaps",
    category: "CRO",
    href: "/services/saas",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    accent: "#2563eb",
    accentLight: "#eff6ff",
    accentBorder: "#bfdbfe",
    bullets: [
      "Next.js landing page sprints built for conversion",
      "Heatmap & session replay analysis (Hotjar, PostHog)",
      "Multivariate A/B testing across headline, CTA & layout",
      "Full-funnel drop-off tracking mapped to revenue",
    ],
    widget: "⚡ -22% Lower CAC Rate",
  },
  {
    id: "content-velocity",
    title: "Programmatic Content Engine",
    role: "AI-Powered Content & Internal Linking",
    category: "Content",
    href: "/services/ai-automation",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #7c3aed, #5b21b6)",
    accent: "#7c3aed",
    accentLight: "#f3e8ff",
    accentBorder: "#e9d5ff",
    bullets: [
      "Automated keyword clustering & content gap analysis",
      "AI-assisted content briefs with SERP intent matching",
      "Structured internal linking graph built in Next.js",
      "Comparison & vs-page templates for competitor capture",
    ],
    widget: "🤖 Auto Keyword Clusters",
  },
  {
    id: "analytics-tagging",
    title: "Server-Side Analytics & Tagging",
    role: "GA4, CAPI & CRM Revenue Attribution",
    category: "Attribution",
    href: "/services/security",
    icon: "📊",
    gradient: "linear-gradient(135deg, #0d9488, #115e59)",
    accent: "#0d9488",
    accentLight: "#ccfbf1",
    accentBorder: "#99f6e4",
    bullets: [
      "GA4 server-side tagging via GTM server container",
      "Meta & Google Conversions API (CAPI) for cookie-loss",
      "Mixpanel product analytics with funnel & retention views",
      "CRM revenue sync — HubSpot / Salesforce deal attribution",
    ],
    widget: "📊 Server-Side CAPI Sync",
  },
  {
    id: "web3-growth",
    title: "Web3 & Fintech Growth",
    role: "Token Funnels & On-Chain Analytics",
    category: "Web3 Growth",
    href: "/services/blockchain",
    icon: "⛓️",
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
    accent: "#4f46e5",
    accentLight: "#eef2ff",
    accentBorder: "#c7d2fe",
    bullets: [
      "Token launch marketing funnels & Discord community growth",
      "On-chain wallet analytics for holder behavior targeting",
      "Telegram growth bots & crypto Twitter/X campaigns",
      "Decentralized ad platforms & DeFi protocol awareness",
    ],
    widget: "⛓️ On-Chain Conversion Tracking",
  },
];

const faqs = [
  { q: "How fast will we see SEO results?", a: "Tech fixes 2–4 weeks, content velocity 60–90 days, compounding 6+ months — we pair code fixes with content for faster lifts." },
  { q: "Do you run ads or just advise?", a: "We run end-to-end: structure, creative, bidding, landing pages — weekly optimization tied to CRM ROAS." },
  { q: "What makes your SEO different?", a: "We are engineers: site architecture + edge speed + schema before blog posts. Programmatic SEO then compounds." },
  { q: "How do you measure success?", a: "Full-funnel from impressions to revenue, with CAC/LTV, payback, server-side attribution." },
  { q: "What budget do we need for PPC ads?", a: "We recommend a minimum ad spend of $3,000/mo to ensure sufficient data volume for bid optimization." },
  { q: "Do you build custom landing pages?", a: "Yes — our engineering team builds high-converting Next.js landing pages tailored to ad campaigns." },
  { q: "How often do you report results?", a: "We provide live Looker Studio dashboards and run weekly growth syncs with your team." },
  { q: "What is your contract length?", a: "Our growth retainers run month-to-month after an initial 90-day growth sprint foundation." },
];

export default function MarketingServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Growth Marketing, SEO & PPC", item: `${siteUrl}/services/marketing` },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/marketing#service`,
    name: "Growth Marketing, SEO & PPC",
    serviceType: "Growth Marketing and SEO",
    url: `${siteUrl}/services/marketing`,
    description: "Technical SEO, Core Web Vitals, PPC and CRO that compounds — +340% organic, 4.8x ROAS. We scale B2B SaaS & Web3 funnels from click to revenue.",
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
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <div className="vd-wrap">

        {/* ─── 1. HERO (EXACT 1:1 REFERENCE MATCH — NATIVE REACT UI) ─── */}
        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f3f4f6 100%)",
          padding: "115px 24px 100px 24px",
          borderBottom: "1px solid #f1f5f9",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 660px",
            gap: "40px",
            alignItems: "flex-start"
          }}>
            {/* Left Content Column */}
            <div className="vd-hero-left" style={{ textAlign: "left", zIndex: 2, marginTop: "10px" }}>

              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: "700",
                color: "#1e1b4b",
                lineHeight: "1.12",
                letterSpacing: "-1.5px",
                marginBottom: "20px",
                maxWidth: "540px"
              }}>
                Growth Marketing, SEO &amp; PPC That Compounds
              </h1>

              <p style={{
                fontSize: "15px",
                color: "#64748b",
                lineHeight: "1.65",
                marginBottom: "36px",
                maxWidth: "480px",
                fontWeight: "400"
              }}>
                Full-funnel campaigns built on real data — from paid ads to organic growth, we scale your brand across every channel. Technical SEO, PPC, CRO and server-side attribution engineered to compound.
              </p>

              <div>
                <Link
                  href="/contact"
                  style={{
                    background: "#334155",
                    color: "#ffffff",
                    fontWeight: "600",
                    borderRadius: "99px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 25px rgba(51, 65, 85, 0.25)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  Start Growth Project
                  <span style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255, 255, 255, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px"
                  }}>
                    ↓
                  </span>
                </Link>
              </div>

              {/* Metric Highlights Below CTA Button */}
              <div style={{
                display: "flex",
                gap: "28px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0"
              }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#1e1b4b", lineHeight: "1.1" }}>+340%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Organic Growth</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#4f46e5", lineHeight: "1.1" }}>4.8x</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Campaign ROAS</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981", lineHeight: "1.1" }}>-22%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Lower CAC Rate</div>
                </div>
              </div>
            </div>

            {/* Right Overlapping Floating Glass Cards Deck (1:1 Exact Match to Reference Image Layout) */}
            <div className="vd-hero-right" style={{ position: "relative", height: "540px" }}>

              {/* Card A: Top Background Web Browser Mockup Card */}
              <div style={{
                position: "absolute",
                top: "0px",
                left: "40px",
                width: "340px",
                height: "210px",
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "20px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.04)",
                padding: "14px",
                zIndex: 1
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e2e8f0" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e2e8f0" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e2e8f0" }} />
                  </div>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>✕</span>
                </div>
                <div style={{ height: "90px", background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)", borderRadius: "12px", marginBottom: "10px" }} />
                <div style={{ height: "40px", background: "#f8fafc", borderRadius: "8px" }} />
              </div>

              {/* Card B: Top Right Zablot Chat & Analytics Card */}
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "290px",
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "24px",
                padding: "20px",
                boxShadow: "0 20px 50px rgba(15, 23, 42, 0.07)",
                zIndex: 2,
                textAlign: "left"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#2563eb", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "13px" }}>Z</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>Zablot</div>
                    <div style={{ fontSize: "11px", color: "#64748b" }}>How are you doing my friend?</div>
                  </div>
                </div>

                <div style={{ background: "#0f172a", color: "#ffffff", borderRadius: "14px", padding: "12px", fontSize: "11.5px", fontWeight: "700", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>45 New Message<br /><span style={{ color: "#a5b4fc" }}>AI Answered 40 Messages This Week!</span></span>
                  <span style={{ fontSize: "16px" }}>🎉</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748b", fontWeight: "700", marginBottom: "10px" }}>
                  <span>Report</span>
                  <span>Mar 21 - Apr 20</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "54px" }}>
                  <div style={{ height: "45%", flex: 1, background: "#e0e7ff", borderRadius: "4px" }} />
                  <div style={{ height: "70%", flex: 1, background: "#c7d2fe", borderRadius: "4px" }} />
                  <div style={{ height: "90%", flex: 1, background: "#818cf8", borderRadius: "4px" }} />
                  <div style={{ height: "60%", flex: 1, background: "#c7d2fe", borderRadius: "4px" }} />
                  <div style={{ height: "100%", flex: 1, background: "#6366f1", borderRadius: "4px" }} />
                </div>
              </div>

              {/* Card C: Floating Center Circle Avatar Node with Heart Icon Badge */}
              <div style={{
                position: "absolute",
                top: "130px",
                left: "200px",
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                boxShadow: "0 16px 36px rgba(168, 85, 247, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                zIndex: 4,
                border: "3px solid #ffffff"
              }}>
                👩‍🎨
                <div style={{
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  border: "2.5px solid #ffffff"
                }}>
                  ❤️
                </div>
              </div>

              {/* Card D: Small Floating Message Bubble - Yurie Kitajima */}
              <div style={{
                position: "absolute",
                top: "240px",
                left: "0px",
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "16px",
                padding: "10px 14px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 4
              }}>
                <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#a855f7", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "800" }}>YK</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a" }}>Yurie Kitajima <span style={{ color: "#94a3b8", fontWeight: "400", fontSize: "9.5px" }}>now</span></div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>That was super fast, thank you so much!</div>
                </div>
              </div>

              {/* Card E: Center Front Main Spotlight Glass Card ("Ben Timona / Lead Conversion") */}
              <div style={{
                position: "absolute",
                top: "210px",
                right: "80px",
                width: "270px",
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "26px",
                padding: "18px",
                boxShadow: "0 30px 70px rgba(15, 23, 42, 0.12)",
                zIndex: 10,
                textAlign: "left"
              }}>
                <div style={{ height: "120px", borderRadius: "18px", background: "linear-gradient(135deg, #e0e7ff, #c7d2fe)", marginBottom: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "44px", position: "relative" }}>
                  🕶️
                  <span style={{ position: "absolute", top: "10px", right: "10px", fontSize: "12px", color: "#64748b" }}>✕</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: "900", color: "#0f172a" }}>Ben Timona</div>
                    <div style={{ fontSize: "11px", color: "#64748b" }}>Hey there! I want to ask...</div>
                  </div>
                  <Link href="/contact" style={{ background: "#334155", color: "#fff", padding: "8px 18px", borderRadius: "99px", fontSize: "12.5px", fontWeight: "700", textDecoration: "none" }}>
                    Answer
                  </Link>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "10px", fontSize: "11px", color: "#94a3b8" }}>
                  <span>1 Message | 09 Jun 2024</span>
                  <span style={{ color: "#6366f1", fontWeight: "700" }}>View details &gt;</span>
                </div>
              </div>

              {/* Card F: Small Lower Floating Circle Node (Headphones Icon) */}
              <div style={{
                position: "absolute",
                top: "350px",
                left: "140px",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #38bdf8, #3b82f6)",
                boxShadow: "0 12px 30px rgba(56, 189, 248, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                zIndex: 4,
                border: "2px solid #ffffff"
              }}>
                🌊
                <div style={{ position: "absolute", bottom: "-4px", right: "-4px", width: "22px", height: "22px", borderRadius: "50%", background: "#0f172a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>
                  🎧
                </div>
              </div>

              {/* Card G: Bottom Center Long Pill Badge ("Answered to 12 private messages!") */}
              <div style={{
                position: "absolute",
                bottom: "10px",
                left: "70px",
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "99px",
                padding: "12px 24px",
                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "13.5px",
                fontWeight: "700",
                color: "#0f172a",
                zIndex: 6
              }}>
                <span>Answered to 12 private messages!</span>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #60a5fa, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#fff" }}>
                  🌸
                </div>
              </div>

              {/* Card H: Bottom Right Floating Social Comment Bubble */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "0px",
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "16px",
                padding: "10px 14px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.05)",
                fontSize: "11px",
                color: "#64748b",
                zIndex: 3,
                textAlign: "left",
                maxWidth: "210px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#6366f1", color: "#fff", fontSize: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>U</div>
                  <span style={{ fontWeight: "700", color: "#0f172a" }}>2 mins</span>
                </div>
                <div style={{ color: "#334155", marginBottom: "4px" }}>Hello dear! Can we talk about art category?</div>
                <div style={{ fontSize: "10px", color: "#94a3b8" }}>15 Like 👍  6 Replies 💬</div>
              </div>

            </div>

          </div>

          <style>{`
            @media (max-width: 1024px) {
              .vd-hero-section > div {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
              .vd-hero-right {
                height: 500px !important;
              }
            }
          `}</style>
        </section>



        {/* ─── 1c. TECH MARQUEE ─── */}
        <section className="vd-marquee-section">
          <div className="vd-marquee-track">
            {["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "GTM Server-Side", "Search Console", "Hotjar", "HubSpot", "Salesforce", "PMax", "Conversions API", "Looker Studio"].concat(["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "GTM Server-Side", "Search Console", "Hotjar", "HubSpot", "Salesforce", "PMax", "Conversions API", "Looker Studio"]).map((item, i) => (
              <span className="vd-marquee-item" key={i}><span className="sep">◆</span>{item}</span>
            ))}
          </div>
        </section>

        {/* ─── 3. REDESIGNED CAPABILITIES SECTION ─── */}
        <section className="vd-services-section" style={{
          background: "#f8fafc",
          padding: "48px 24px 30px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              fontSize: "13px",
              fontWeight: "900",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#0f172a",
              display: "block",
              marginBottom: "12px"
            }}>
              OUR CAPABILITIES
            </span>
            <h2 style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: "900",
              color: "#0f172a",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              margin: "0 0 12px 0"
            }}>
              Our Marketing Services
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", fontWeight: "600", margin: 0 }}>
              Engineered customer acquisition strategies for B2B SaaS &amp; Web3.
            </p>
          </div>

          <div className="reports-grid">
            {/* CARD 1: Technical SEO & Schema */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#22c55e" }}>🔍</span>
                    <span className="mockup-title">Google Search Console</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ display: "flex", flexDirection: "column", gap: "10px", height: "130px", justifyContent: "space-between" }}>
                  {/* Lighthouse Scores */}
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "0 4px" }}>
                    {["Perf", "Access", "Best P.", "SEO"].map((score, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ width: "22px", height: "22px", borderRadius: "50%", border: "2px solid #22c55e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "7px", fontWeight: "800", color: "#22c55e" }}>
                          100
                        </div>
                        <span style={{ fontSize: "5px", color: "#94a3b8", marginTop: "2px", fontWeight: "700" }}>{score}</span>
                      </div>
                    ))}
                  </div>
                  {/* Search impressions chart */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "5px", fontWeight: "700", color: "#64748b" }}>Organic Search Clicks</div>
                    <div style={{ flex: 1, position: "relative", marginTop: "2px" }}>
                      <svg width="100%" height="100%" viewBox="0 0 160 50" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="purple-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 45 Q20 20 40 35 T80 15 T120 40 T160 10 L160 50 L0 50 Z" fill="url(#purple-gradient)" />
                        <path d="M0 45 Q20 20 40 35 T80 15 T120 40 T160 10" fill="none" stroke="#8b5cf6" strokeWidth="1.2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Technical SEO &amp; Schema</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/services/web-development" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>

            {/* CARD 2: Google & LinkedIn PPC Ads */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#3b82f6" }}>🎯</span>
                    <span className="mockup-title">Campaign Dashboard</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Spend Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4px" }}>
                    <div>
                      <div className="mockup-stat-label">Ad Spend</div>
                      <div className="mockup-stat-value">$12.4k</div>
                      <div className="mockup-stat-pill green">+14.2%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">ROAS</div>
                      <div className="mockup-stat-value">4.8x</div>
                      <div className="mockup-stat-pill green">+8.1%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">CTR</div>
                      <div className="mockup-stat-value">3.4%</div>
                      <div className="mockup-stat-pill green">+2.5%</div>
                    </div>
                  </div>
                  {/* Conversions bar chart */}
                  <div style={{ flex: 1, marginTop: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "5px", fontWeight: "700", color: "#64748b" }}>Weekly Ad Conversions</div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "35px", marginTop: "2px" }}>
                      {[30, 45, 60, 40, 75, 55, 90].map((h, i) => (
                        <div key={i} className="bar-item" style={{ width: "8px", height: `${h}%`, background: "linear-gradient(to top, #3b82f6, #ec4899)", borderRadius: "1px" }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Google &amp; LinkedIn PPC Ads</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M15.9 3.5L5.1 21.5C4.6 22.3 5.2 23.4 6.2 23.4H11.6C12.1 23.4 12.6 23.1 12.9 22.6L23.7 4.6C24.2 3.8 23.6 2.7 22.6 2.7H17.2C16.7 2.7 16.2 3.0 15.9 3.5Z" fill="#4285F4" />
                  <path d="M5.1 21.5L15.9 3.5C16.2 3.0 16.7 2.7 17.2 2.7H6.2C5.2 2.7 4.6 3.8 5.1 4.6L10.5 13.6L5.1 21.5Z" fill="#F9BC05" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/services/marketing" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>

            {/* CARD 3: CRO & Conversion Funnels */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#f59e0b" }}>⚡</span>
                    <span className="mockup-title">Funnel Analysis</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Funnel conversion stages */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px 0" }}>
                    {[
                      { stage: "Traffic", val: "100%", w: "100%", bg: "#3b82f6" },
                      { stage: "Landing Page", val: "45%", w: "45%", bg: "#10b981" },
                      { stage: "Sign Up", val: "12%", w: "12%", bg: "#f59e0b" },
                      { stage: "Paid Retainer", val: "3.2%", w: "3.2%", bg: "#ec4899" }
                    ].map((step, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "52px", fontSize: "4.5px", color: "#64748b", fontWeight: "700" }}>{step.stage}</span>
                        <div style={{ flex: 1, height: "8px", background: "#f1f5f9", borderRadius: "2px", overflow: "hidden" }}>
                          <div className="progress-item" style={{ width: step.w, height: "100%", background: step.bg, borderRadius: "2px" }}></div>
                        </div>
                        <span style={{ fontSize: "4.5px", color: "#0f172a", fontWeight: "800", width: "18px" }}>{step.val}</span>
                      </div>
                    ))}
                  </div>
                  {/* Bottom widget info */}
                  <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "4.5px", color: "#94a3b8", fontWeight: "700" }}>Average CAC Rate</span>
                    <span style={{ fontSize: "6px", color: "#ef4444", fontWeight: "800" }}>-22% Lower CAC</span>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">CRO &amp; Conversion Funnels</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/services/saas" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>

            {/* CARD 4: Programmatic Content Engine */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#8b5cf6" }}>🤖</span>
                    <span className="mockup-title">Content Velocity Tracker</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Index and ranking list */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div style={{ flex: 1 }}>
                      <div className="mockup-stat-label">Indexed Pages</div>
                      <div className="mockup-stat-value">12.8k</div>
                      <div className="mockup-stat-pill green">94% rate</div>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ fontSize: "4px", color: "#94a3b8", fontWeight: "700" }}>TOP RANKED KEYWORDS</div>
                      <div style={{ background: "#f1f5f9", padding: "2px 4px", borderRadius: "2px", fontSize: "4.5px", fontWeight: "700" }}>#1 B2B SaaS template</div>
                      <div style={{ background: "#f1f5f9", padding: "2px 4px", borderRadius: "2px", fontSize: "4.5px", fontWeight: "700" }}>#2 AI agents CRM</div>
                    </div>
                  </div>
                  {/* Imp graph */}
                  <div style={{ flex: 1, marginTop: "6px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "5px", fontWeight: "700", color: "#64748b" }}>Search Impressions</div>
                    <div style={{ flex: 1, position: "relative", marginTop: "2px" }}>
                      <svg width="100%" height="100%" viewBox="0 0 160 40">
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="160" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                        {/* Scatter points */}
                        {[
                          { x: 15, y: 30 }, { x: 35, y: 15 }, { x: 55, y: 25 }, { x: 75, y: 10 },
                          { x: 95, y: 28 }, { x: 115, y: 12 }, { x: 135, y: 22 }, { x: 155, y: 8 }
                        ].map((pt, index) => (
                          <circle key={index} cx={pt.x} cy={pt.y} r="3" fill="#8b5cf6" className="scatter-dot" />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Programmatic Content Engine</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/services/ai-automation" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>

            {/* CARD 5: Server-Side Analytics */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#0d9488" }}>📊</span>
                    <span className="mockup-title">GTM Server Container</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Server tags status */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ fontSize: "4.5px", color: "#94a3b8", fontWeight: "700" }}>ACTIVE ATTRIBUTION TAGS</div>
                    {[
                      { tag: "Google Analytics 4 (GA4)", status: "Active" },
                      { tag: "Meta Conversions API (CAPI)", status: "Active" },
                      { tag: "HubSpot Revenue Att.", status: "Active" }
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fafc", border: "1px solid #f1f5f9", padding: "3px 6px", borderRadius: "4px" }}>
                        <span style={{ fontSize: "4.5px", fontWeight: "700", color: "#334155" }}>{item.tag}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#10b981" }}></span>
                          <span style={{ fontSize: "4px", color: "#10b981", fontWeight: "800" }}>{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Ping timeline */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "4.5px", color: "#64748b", fontWeight: "700", borderTop: "1px solid #e2e8f0", paddingTop: "4px" }}>
                    <span>Attribution Loss Prevented</span>
                    <span style={{ color: "#10b981", fontWeight: "800" }}>+28% Tag Accuracy</span>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Server-Side Analytics &amp; Tagging</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/services/security" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>

            {/* CARD 6: Web3 & Fintech Growth */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#6366f1" }}>⛓️</span>
                    <span className="mockup-title">On-Chain Analytics</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Wallet & holder stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    <div>
                      <div className="mockup-stat-label">Active Wallets</div>
                      <div className="mockup-stat-value">1,840</div>
                      <div className="mockup-stat-pill green">+22.4%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Token Holders</div>
                      <div className="mockup-stat-value">12.3k</div>
                      <div className="mockup-stat-pill green">+6.8%</div>
                    </div>
                  </div>
                  {/* Token Price Line */}
                  <div style={{ flex: 1, marginTop: "6px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "5px", fontWeight: "700", color: "#64748b" }}>Token Utility / Price Path</div>
                    <div style={{ flex: 1, position: "relative", marginTop: "2px" }}>
                      <svg width="100%" height="100%" viewBox="0 0 160 40" preserveAspectRatio="none">
                        <path d="M0 35 L30 35 L30 25 L60 25 L60 18 L90 18 L90 22 L120 22 L120 10 L160 10 L160 40 L0 40 Z" fill="#e0e7ff" />
                        <path d="M0 35 L30 35 L30 25 L60 25 L60 18 L90 18 L90 22 L120 22 L120 10 L160 10" fill="none" stroke="#6366f1" strokeWidth="1.2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Web3 &amp; Fintech Growth</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/services/blockchain" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>
          </div>
          <style>{`
            .mkt-card-item { display: block; }
            .mkt-card-inner { transition: transform 0.28s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.28s ease; }
            .mkt-card-item:hover .mkt-card-inner { transform: translateY(-6px); box-shadow: 0 22px 52px rgba(15,23,42,0.10); }
            @media (max-width: 1024px) { .mkt-card-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 640px)  { .mkt-card-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ─── 4. RESULTS / PROOF BAND ─── */}
        <section className="vd-results-section" style={{ paddingTop: "30px" }}>
          <div className="vd-badge-tag">Proven Impact</div>
          <h2 className="vd-section-h2">Outcomes Our Growth Pod Delivers</h2>
          <p className="vd-section-p">Compounding acquisition results across the channels we manage end-to-end.</p>

          <div className="vd-results-grid">
            <div className="vd-result-card">
              <div className="vd-result-num">+340%</div>
              <div className="vd-result-label">SEO — Organic Growth</div>
              <div className="vd-result-desc">
                Technical SEO, programmatic content and Core Web Vitals fixes that compound month over month.
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", color: "#10b981", fontWeight: "700", fontSize: "12.5px" }}>
                  <span>✓</span> <span>Sub-second LCP & Schema</span>
                </div>
              </div>
            </div>

            <div className="vd-result-card">
              <div className="vd-result-num">4.8x</div>
              <div className="vd-result-label">ROAS — Blended Campaigns</div>
              <div className="vd-result-desc">
                Google, LinkedIn and Meta campaigns tied to CRM revenue with server-side attribution.
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", color: "#10b981", fontWeight: "700", fontSize: "12.5px" }}>
                  <span>✓</span> <span>Closed-Loop CRM Tracking</span>
                </div>
              </div>
            </div>

            <div className="vd-result-card">
              <div className="vd-result-num">-22%</div>
              <div className="vd-result-label">CAC — Lower Cost</div>
              <div className="vd-result-desc">
                Landing page A/B testing and full-funnel drop-off fixes that reduce acquisition cost.
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", color: "#10b981", fontWeight: "700", fontSize: "12.5px" }}>
                  <span>✓</span> <span>Weekly A/B Experiments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. STAFF / POD SPOTLIGHT BANNER WITH BOWTIE FUNNEL MODEL ─── */}
        <section className="vd-pod-banner" style={{ background: "#f8fafc", padding: "80px 24px", borderBottom: "1px solid #f1f5f9" }}>
          <div className="vd-pod-grid">
            <div className="vd-pod-left">
              <h2 style={{ color: "#0f172a" }}>Our Growth Marketers Will Scale Your Pipeline</h2>
              <p style={{ color: "#64748b" }}>
                Our growth pods optimize your ad spend, run weekly landing page A/B tests, and build technical
                SEO schema directly into your codebase. From server-side conversion tracking to full-funnel
                attribution, we tie every rupee of ad spend to real pipeline — giving you clear ROAS, lower CAC,
                and compounding organic growth month over month.
              </p>
              <Link href="/contact" className="vd-btn-primary" style={{ background: "#334155" }}>Talk to a Growth Specialist →</Link>
            </div>
            <div className="vd-pod-right">
              <img src="/services/bowtie_funnel_model.png" alt="GET-KEEP-GROW Customer Acquisition Bowtie Funnel Model" style={{ boxShadow: "none", border: "none", filter: "drop-shadow(0 16px 36px rgba(15, 23, 42, 0.08))" }} />
            </div>
          </div>
        </section>

        {/* ─── 5. REDESIGNED PROCESS TIMELINE SECTION (SWOT CIRCULAR QUADRANTS) ─── */}
        <section className="vd-process-section" style={{
          background: "#ffffff",
          padding: "80px 24px 50px 24px",
          borderBottom: "1px solid #f1f5f9",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div className="vd-badge-tag" style={{ background: "#eff6ff", borderColor: "#bfdbfe", color: "#4f6df5" }}>Growth Framework</div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(30px, 4.5vw, 44px)",
            fontWeight: "900",
            color: "#0f172a",
            letterSpacing: "-1.2px",
            margin: "0 0 12px 0"
          }}>
            4 Steps Following We Complete Work
          </h2>
          <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "600px", margin: "0 auto 64px auto", lineHeight: "1.6" }}>
            Our 4-phase compounding acquisition framework.
          </p>

          <div className="swot-wrapper">
            {/* SWOT GRID */}
            <div className="swot-grid">

              {/* TOP LEFT: Technical & SEO Audit */}
              <div className="swot-cell top-left">
                <h3 className="swot-cell-title">
                  <span className="swot-initial" style={{ color: "#3b82f6" }}>T</span>echnical &amp; SEO Audit
                </h3>
                <div className="swot-underline" style={{ background: "#3b82f6" }}></div>
                <ul className="swot-bullets">
                  <li>Core Web Vitals, Schema, and PPC campaign structure audit.</li>
                  <li>Structured JSON-LD schema &amp; crawl architecture config.</li>
                  <li>In-depth audit of conversion funnel &amp; analytics tracking.</li>
                </ul>
              </div>

              {/* TOP RIGHT: Funnel Sprint Build */}
              <div className="swot-cell top-right">
                <h3 className="swot-cell-title">
                  <span className="swot-initial" style={{ color: "#ec4899" }}>F</span>unnel Sprint Build
                </h3>
                <div className="swot-underline" style={{ background: "#ec4899" }}></div>
                <ul className="swot-bullets">
                  <li>High-converting landing pages, tracking tags, and ad setups.</li>
                  <li>Next.js code sprint setup for speed &amp; Core Web Vitals.</li>
                  <li>Custom campaign assets configuration ready to drive traffic.</li>
                </ul>
              </div>

              {/* BOTTOM LEFT: CRO & Split Testing */}
              <div className="swot-cell bottom-left">
                <h3 className="swot-cell-title">
                  <span className="swot-initial" style={{ color: "#f59e0b" }}>C</span>RO &amp; Split Testing
                </h3>
                <div className="swot-underline" style={{ background: "#f59e0b" }}></div>
                <ul className="swot-bullets">
                  <li>Continuous A/B testing, heatmap analysis, and bid tuning.</li>
                  <li>Session recording diagnostics for user drop-off mapping.</li>
                  <li>Weekly conversion optimization tests on headlines &amp; CTAs.</li>
                </ul>
              </div>

              {/* BOTTOM RIGHT: Scale & Revenue Sync */}
              <div className="swot-cell bottom-right">
                <h3 className="swot-cell-title">
                  <span className="swot-initial" style={{ color: "#10b981" }}>S</span>cale &amp; Revenue Sync
                </h3>
                <div className="swot-underline" style={{ background: "#10b981" }}></div>
                <ul className="swot-bullets">
                  <li>Server-side attribution, CRM lead sync, and CAC reduction.</li>
                  <li>GA4 Conversions API (CAPI) implementation to prevent data loss.</li>
                  <li>HubSpot / Salesforce deal attribution sync for compounding pipeline.</li>
                </ul>
              </div>

            </div>

            {/* CENTER CIRCLE WITH ROTATING FLOW ARROWS */}
            <div className="swot-center-circle-container">
              {/* Colored Curved Arrows Wrapper */}
              <div className="swot-arrows-svg-wrap">
                <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
                  {/* Outer Dashed Ring */}
                  <circle cx="140" cy="140" r="115" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />

                  {/* Top Green Clockwise Arrow */}
                  <path d="M 100 22 A 118 118 0 0 1 180 22" stroke="#84cc16" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 175 16 L 183 22 L 175 28" stroke="#84cc16" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Right Yellow Clockwise Arrow */}
                  <path d="M 258 100 A 118 118 0 0 1 258 180" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 252 175 L 258 183 L 264 175" stroke="#eab308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Bottom Red Clockwise Arrow */}
                  <path d="M 180 258 A 118 118 0 0 1 100 258" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 105 264 L 97 258 L 105 252" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Left Teal Clockwise Arrow */}
                  <path d="M 22 180 A 118 118 0 0 1 22 100" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 28 105 L 22 97 L 16 105" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* The Central Solid Circle */}
              <div className="swot-center-circle">
                <span className="center-tag">GROWTH</span>
                <span className="center-main">PROCESS</span>
                <span className="center-sub">STEPS</span>
              </div>
            </div>

          </div>

          <style>{`
            .swot-wrapper {
              position: relative;
              max-width: 1100px;
              margin: 40px auto 0 auto;
            }
            .swot-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto auto;
              position: relative;
            }
            .swot-cell {
              padding: 64px 80px;
              text-align: left;
              transition: background-color 0.3s ease;
            }
            .swot-cell:hover {
              background-color: #f8fafc;
            }
            /* Grid Cross Borders */
            .swot-cell.top-left {
              border-right: 2px solid #cbd5e1;
              border-bottom: 2px solid #cbd5e1;
            }
            .swot-cell.top-right {
              border-bottom: 2px solid #cbd5e1;
              padding-left: 96px;
            }
            .swot-cell.bottom-left {
              border-right: 2px solid #cbd5e1;
              padding-top: 80px;
            }
            .swot-cell.bottom-right {
              padding-left: 96px;
              padding-top: 80px;
            }
            .swot-cell-title {
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-size: 22px;
              font-weight: 800;
              color: #0f172a;
              margin: 0 0 10px 0;
              display: flex;
              align-items: center;
              gap: 2px;
            }
            .swot-initial {
              font-size: 26px;
              font-weight: 900;
            }
            .swot-underline {
              width: 52px;
              height: 3px;
              border-radius: 2px;
              margin-bottom: 22px;
            }
            .swot-bullets {
              list-style-type: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }
            .swot-bullets li {
              font-size: 14.5px;
              color: #475569;
              line-height: 1.6;
              position: relative;
              padding-left: 18px;
              font-weight: 550;
            }
            .swot-bullets li::before {
              content: "•";
              position: absolute;
              left: 4px;
              top: 0;
              font-size: 18px;
              color: #94a3b8;
              line-height: 1;
            }
            .swot-cell.top-left .swot-bullets li::before { color: #3b82f6; }
            .swot-cell.top-right .swot-bullets li::before { color: #ec4899; }
            .swot-cell.bottom-left .swot-bullets li::before { color: #f59e0b; }
            .swot-cell.bottom-right .swot-bullets li::before { color: #10b981; }

            /* Center Circle Placement */
            .swot-center-circle-container {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 280px;
              height: 280px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 10;
              pointer-events: none;
            }
            .swot-arrows-svg-wrap {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: rotateSwotArrows 18s linear infinite;
              transform-origin: center center;
            }
            .swot-center-circle-container:hover .swot-arrows-svg-wrap {
              animation-duration: 10s;
            }
            @keyframes rotateSwotArrows {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            .swot-center-circle {
              width: 172px;
              height: 172px;
              border-radius: 50%;
              background: #ffffff;
              border: 1px solid #cbd5e1;
              box-shadow: 0 10px 32px rgba(15, 23, 42, 0.08);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              z-index: 12;
              pointer-events: auto;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .swot-center-circle:hover {
              transform: scale(1.04);
              box-shadow: 0 16px 48px rgba(15, 23, 42, 0.14);
            }
            .center-tag {
              font-size: 11px;
              font-weight: 800;
              color: #4f6df5;
              letter-spacing: 2px;
              margin-bottom: 2px;
            }
            .center-main {
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-size: 20px;
              font-weight: 900;
              color: #0f172a;
              letter-spacing: -0.5px;
              line-height: 1.1;
            }
            .center-sub {
              font-size: 11px;
              font-weight: 800;
              color: #94a3b8;
              letter-spacing: 1.5px;
              margin-top: 2px;
            }

            @media (max-width: 900px) {
              .swot-grid {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                gap: 24px;
              }
              .swot-cell {
                padding: 32px 24px !important;
                border: 1px solid #e2e8f0 !important;
                border-radius: 16px;
                background: #ffffff;
              }
              .swot-center-circle-container {
                display: none;
              }
            }
          `}</style>
        </section>

        {/* ─── 6. REPORT TEMPLATES SECTION ─── */}
        <section className="vd-reports-section" style={{
          background: "#f8fafc",
          padding: "30px 24px 70px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span style={{
              fontSize: "13px",
              fontWeight: "900",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#0f172a",
              display: "block",
              marginBottom: "12px"
            }}>
              REPORT TEMPLATES
            </span>
            <h2 style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: "900",
              color: "#0f172a",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              margin: 0
            }}>
              Create & Automate Your Reports in Minutes
            </h2>
          </div>

          <div className="reports-grid">
            {/* CARD 1: Google Ads Report */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#4285F4" }}>▲</span>
                    <span className="mockup-title">Conversion Analysis</span>
                  </div>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "1px", background: "#10b981" }}></span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "1px", background: "#3b82f6" }}></span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "1px", background: "#f59e0b" }}></span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ display: "flex", gap: "12px", height: "130px" }}>
                  {/* Left Column (Stats) */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0, width: "90px" }}>
                    <div>
                      <div className="mockup-stat-label">Conv</div>
                      <div className="mockup-stat-value">746</div>
                      <div className="mockup-stat-pill green">+20.5%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Cost/conv.</div>
                      <div className="mockup-stat-value">€54.95</div>
                      <div className="mockup-stat-pill red">-2.6%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Conversion rate</div>
                      <div className="mockup-stat-value">8.01%</div>
                      <div className="mockup-stat-pill red">-1.6%</div>
                    </div>
                  </div>
                  {/* Right Column (Graph) */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
                    <div style={{ fontSize: "7px", fontWeight: "700", color: "#64748b" }}>Cost and Conv. value by Day</div>
                    <div style={{ flex: 1, position: "relative", marginTop: "4px" }}>
                      <svg width="100%" height="100%" viewBox="0 0 160 80" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="green-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="blue-gradient-sub" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="160" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="40" x2="160" y2="40" stroke="#f1f5f9" strokeWidth="0.5" />
                        <line x1="0" y1="60" x2="160" y2="60" stroke="#f1f5f9" strokeWidth="0.5" />
                        
                        {/* Area 1 (Conversions) */}
                        <path d="M0 60 Q25 35 50 50 T100 25 T150 40 L160 40 L160 80 L0 80 Z" fill="url(#blue-gradient-sub)" />
                        {/* Line 1 */}
                        <path d="M0 60 Q25 35 50 50 T100 25 T150 40 L160 40" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                        
                        {/* Area 2 (Cost) */}
                        <path d="M0 45 Q20 20 40 35 T80 15 T120 40 T160 10 L160 80 L0 80 Z" fill="url(#green-gradient)" />
                        {/* Line 2 */}
                        <path d="M0 45 Q20 20 40 35 T80 15 T120 40 T160 10" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    {/* Tiny X axis */}
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "5px", color: "#94a3b8", marginTop: "2px" }}>
                      <span>Feb 11, 2024</span>
                      <span>Feb 18, 2024</span>
                      <span>Feb 25, 2024</span>
                      <span>Mar 3, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Google Ads Report</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M15.9 3.5L5.1 21.5C4.6 22.3 5.2 23.4 6.2 23.4H11.6C12.1 23.4 12.6 23.1 12.9 22.6L23.7 4.6C24.2 3.8 23.6 2.7 22.6 2.7H17.2C16.7 2.7 16.2 3.0 15.9 3.5Z" fill="#4285F4" />
                  <path d="M5.1 21.5L15.9 3.5C16.2 3.0 16.7 2.7 17.2 2.7H6.2C5.2 2.7 4.6 3.8 5.1 4.6L10.5 13.6L5.1 21.5Z" fill="#F9BC05" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/contact" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>

            {/* CARD 2: Google Analytics Report */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#f59e0b" }}>📊</span>
                    <span className="mockup-title">Acquisition</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Stats Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "4px" }}>
                    <div>
                      <div className="mockup-stat-label">New users</div>
                      <div className="mockup-stat-value">3,171</div>
                      <div className="mockup-stat-pill green">+18.9%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Sessions / User</div>
                      <div className="mockup-stat-value">0.407</div>
                      <div className="mockup-stat-pill red">-10.2%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Engagement rate</div>
                      <div className="mockup-stat-value">47.04%</div>
                      <div className="mockup-stat-pill green">+2.3%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Eng. duration</div>
                      <div className="mockup-stat-value">1s</div>
                      <div className="mockup-stat-pill red">-7.6%</div>
                    </div>
                  </div>
                  {/* Chart section */}
                  <div style={{ flex: 1, marginTop: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "6px", fontWeight: "700", color: "#64748b", display: "flex", justifyContent: "space-between" }}>
                      <span>Top & New Users Acquisition</span>
                      <span style={{ fontSize: "5px", color: "#94a3b8" }}>Jan 12, 2024 - Mar 12, 2024</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginTop: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "32px", fontSize: "5px", color: "#64748b", textAlign: "right" }}>Direct</span>
                        <div className="progress-item" style={{ flex: 1, height: "4px", background: "#3b82f6", borderRadius: "1px", width: "80%" }}></div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "32px", fontSize: "5px", color: "#64748b", textAlign: "right" }}>Organic</span>
                        <div className="progress-item" style={{ flex: 1, height: "4px", background: "#3b82f6", borderRadius: "1px", width: "65%" }}></div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "32px", fontSize: "5px", color: "#64748b", textAlign: "right" }}>Paid Search</span>
                        <div className="progress-item" style={{ flex: 1, height: "4px", background: "#3b82f6", borderRadius: "1px", width: "40%" }}></div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "32px", fontSize: "5px", color: "#64748b", textAlign: "right" }}>Social</span>
                        <div className="progress-item" style={{ flex: 1, height: "4px", background: "#3b82f6", borderRadius: "1px", width: "20%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Google Analytics Report</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="13" width="4" height="8" rx="1" fill="#f97316" />
                  <rect x="10" y="7" width="4" height="14" rx="1" fill="#f59e0b" />
                  <rect x="17" y="3" width="4" height="18" rx="1" fill="#eab308" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/contact" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>

            {/* CARD 3: Facebook Ads Report */}
            <div className="report-card">
              {/* Mockup Dashboard Container */}
              <div className="dashboard-mockup">
                {/* Header */}
                <div className="mockup-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#3b82f6" }}>🌐</span>
                    <span className="mockup-title">KPIs</span>
                  </div>
                </div>
                {/* Body */}
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Stats Grid 2x4 */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" }}>
                    <div>
                      <div className="mockup-stat-label">Amount spent</div>
                      <div className="mockup-stat-value">$9,803.00</div>
                      <div className="mockup-stat-pill green">+29.8%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Reach</div>
                      <div className="mockup-stat-value">64,712</div>
                      <div className="mockup-stat-pill green">+32.1%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Clicks</div>
                      <div className="mockup-stat-value">544.41k</div>
                      <div className="mockup-stat-pill green">+152.8%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">CTR</div>
                      <div className="mockup-stat-value">6.12%</div>
                      <div className="mockup-stat-pill red">-0.8%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">CPC</div>
                      <div className="mockup-stat-value">$0.01</div>
                      <div className="mockup-stat-pill green">-33.3%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Impressions</div>
                      <div className="mockup-stat-value">929.32k</div>
                      <div className="mockup-stat-pill green">+19.1%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Leads</div>
                      <div className="mockup-stat-value">2,543</div>
                      <div className="mockup-stat-pill green">+7.5%</div>
                    </div>
                    <div>
                      <div className="mockup-stat-label">Cost per Lead</div>
                      <div className="mockup-stat-value">$330.95</div>
                      <div className="mockup-stat-pill red">+6.4%</div>
                    </div>
                  </div>
                  {/* Bottom Graph */}
                  <div style={{ flex: 1, marginTop: "6px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "5px", fontWeight: "700", color: "#64748b" }}>Amount spent and CPC by Day</div>
                    <div style={{ flex: 1, position: "relative", marginTop: "2px" }}>
                      <svg width="100%" height="100%" viewBox="0 0 160 40">
                        {/* Donut chart segments */}
                        <circle cx="25" cy="20" r="14" fill="none" stroke="#e2e8f0" strokeWidth="5" />
                        {/* Segment 1: Instagram (50%) */}
                        <circle cx="25" cy="20" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="88" strokeDashoffset="44" strokeLinecap="round" className="donut-segment-1" />
                        {/* Segment 2: Facebook (30%) */}
                        <circle cx="25" cy="20" r="14" fill="none" stroke="#ec4899" strokeWidth="5" strokeDasharray="88" strokeDashoffset="70" strokeLinecap="round" className="donut-segment-2" />
                        
                        {/* Legend */}
                        <g transform="translate(60, 8)" style={{ fontSize: "5px", fontWeight: "700" }}>
                          <rect x="0" y="0" width="4" height="4" fill="#3b82f6" rx="1" />
                          <text x="8" y="4" fill="#64748b">Instagram - 50%</text>
                          
                          <rect x="0" y="8" width="4" height="4" fill="#ec4899" rx="1" />
                          <text x="8" y="12" fill="#64748b">Facebook - 30%</text>
                          
                          <rect x="0" y="16" width="4" height="4" fill="#e2e8f0" rx="1" />
                          <text x="8" y="20" fill="#64748b">Other - 20%</text>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="card-title">Facebook Ads Report</h3>
              {/* Logo */}
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="card-buttons">
                <Link href="/contact" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview report</Link>
              </div>
            </div>
          </div>

          {/* Bottom link */}
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/contact" className="reports-footer-link">
              View all our report templates
            </Link>
          </div>

          <style>{`
            .reports-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 32px;
              max-width: 1200px;
              width: 100%;
              margin-top: 12px;
            }
            .report-card {
              background: #ffffff;
              border-radius: 12px;
              padding: 24px;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
              display: flex;
              flex-direction: column;
              transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
            }
            .report-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .dashboard-mockup {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 12px;
              margin-bottom: 24px;
              box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.02);
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease;
            }
            .report-card:hover .dashboard-mockup {
              transform: translateY(-4px);
              box-shadow: 0 16px 36px rgba(0, 0, 0, 0.05), inset 0 2px 4px 0 rgba(0, 0, 0, 0.01);
              border-color: #cbd5e1;
            }
            
            /* ─── CONTINUOUS FLOW & BREATHING ANIMATIONS ─── */
            @keyframes flowLine {
              from { stroke-dashoffset: 32; }
              to { stroke-dashoffset: 0; }
            }
            @keyframes breatheFill {
              0%, 100% { opacity: 0.15; }
              50% { opacity: 0.35; }
            }
            @keyframes equalize {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(1.22); }
            }
            @keyframes shimmerProgress {
              0%, 100% { opacity: 0.85; filter: brightness(1); }
              50% { opacity: 1; filter: brightness(1.2) drop-shadow(0 0 3px rgba(59, 130, 246, 0.3)); }
            }
            @keyframes floatDot {
              0%, 100% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-3.5px) scale(1.25); }
            }
            @keyframes breatheDonut {
              0%, 100% { stroke-width: 5; }
              50% { stroke-width: 6.8; }
            }

            /* SVG Line charts flow */
            .report-card svg path[stroke] {
              stroke-dasharray: 8 6;
              animation: flowLine 1.8s linear infinite;
              transition: stroke-width 0.3s ease, filter 0.3s ease;
            }
            .report-card:hover svg path[stroke] {
              stroke-width: 1.8;
              filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.45));
              animation-duration: 0.9s; /* speed up flow on hover */
            }
            .report-card svg path[fill] {
              animation: breatheFill 4s ease-in-out infinite;
              transition: opacity 0.3s ease;
            }
            .report-card:hover svg path[fill] {
              opacity: 0.6;
            }

            /* Vertical Bar equalizer waves */
            .bar-item {
              transform-origin: bottom;
              animation: equalize 1.6s ease-in-out infinite;
              transition: filter 0.3s ease;
            }
            .bar-item:nth-child(1) { animation-delay: 0.1s; animation-duration: 1.5s; }
            .bar-item:nth-child(2) { animation-delay: 0.3s; animation-duration: 1.3s; }
            .bar-item:nth-child(3) { animation-delay: 0.5s; animation-duration: 1.7s; }
            .bar-item:nth-child(4) { animation-delay: 0.2s; animation-duration: 1.4s; }
            .bar-item:nth-child(5) { animation-delay: 0.4s; animation-duration: 1.6s; }
            .bar-item:nth-child(6) { animation-delay: 0.6s; animation-duration: 1.3s; }
            .bar-item:nth-child(7) { animation-delay: 0.3s; animation-duration: 1.5s; }
            
            .report-card:hover .bar-item {
              filter: brightness(1.15) drop-shadow(0 2px 4px rgba(59, 130, 246, 0.4));
            }

            /* Horizontal Progress Bar breathing shimmer */
            .progress-item {
              transform-origin: left;
              animation: shimmerProgress 3s ease-in-out infinite;
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .report-card:hover .progress-item {
              transform: scaleX(1.08);
            }
            /* Staggered animation delays for progress items */
            .progress-item:nth-child(1) { animation-delay: 0.1s; }
            .progress-item:nth-child(2) { animation-delay: 0.3s; }
            .progress-item:nth-child(3) { animation-delay: 0.5s; }
            .progress-item:nth-child(4) { animation-delay: 0.7s; }

            /* Scatter Plot floating dots */
            .scatter-dot {
              transform-origin: center;
              animation: floatDot 3s ease-in-out infinite;
              transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease;
            }
            .scatter-dot:nth-child(1) { animation-delay: 0.1s; }
            .scatter-dot:nth-child(2) { animation-delay: 0.3s; }
            .scatter-dot:nth-child(3) { animation-delay: 0.5s; }
            .scatter-dot:nth-child(4) { animation-delay: 0.2s; }
            .scatter-dot:nth-child(5) { animation-delay: 0.4s; }
            .scatter-dot:nth-child(6) { animation-delay: 0.6s; }
            .scatter-dot:nth-child(7) { animation-delay: 0.3s; }
            .scatter-dot:nth-child(8) { animation-delay: 0.5s; }

            .report-card:hover .scatter-dot {
              transform: scale(1.4);
              filter: drop-shadow(0 0 3px rgba(139, 92, 246, 0.65));
            }

            /* Donut segments breathing circles */
            .donut-segment-1 {
              animation: breatheDonut 4s ease-in-out infinite;
              transition: stroke-width 0.3s ease, filter 0.3s ease;
            }
            .donut-segment-2 {
              animation: breatheDonut 4s ease-in-out infinite 2s;
              transition: stroke-width 0.3s ease, filter 0.3s ease;
            }
            .report-card:hover .donut-segment-1 {
              stroke-width: 7;
              filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.55));
              animation-play-state: paused;
            }
            .report-card:hover .donut-segment-2 {
              stroke-width: 7;
              filter: drop-shadow(0 0 4px rgba(236, 72, 153, 0.55));
              animation-play-state: paused;
            }
            .mockup-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 8px;
              margin-bottom: 8px;
            }
            .mockup-title {
              font-size: 8px;
              font-weight: 700;
              color: #475569;
            }
            .mockup-body {
              font-size: 8px;
            }
            .mockup-stat-label {
              font-size: 5px;
              color: #94a3b8;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.2px;
            }
            .mockup-stat-value {
              font-size: 9px;
              font-weight: 800;
              color: #0f172a;
              line-height: 1.1;
            }
            .mockup-stat-pill {
              display: inline-block;
              font-size: 5px;
              font-weight: 800;
              padding: 1px 3px;
              border-radius: 99px;
              margin-top: 1px;
            }
            .mockup-stat-pill.green {
              background: #d1fae5;
              color: #065f46;
            }
            .mockup-stat-pill.red {
              background: #fee2e2;
              color: #991b1b;
            }
            .card-title {
              font-size: 20px;
              font-weight: 700;
              color: #0f172a;
              margin: 0 0 12px 0;
            }
            .card-logo-container {
              display: flex;
              align-items: center;
              margin-bottom: 20px;
            }
            .card-buttons {
              display: flex;
              gap: 12px;
              margin-top: auto;
            }
            .btn-details, .btn-preview {
              flex: 1;
              text-align: center;
              padding: 10px;
              border-radius: 6px;
              font-size: 13px;
              font-weight: 600;
              text-decoration: none;
              transition: all 0.2s;
            }
            .btn-details {
              background: #ffffff;
              color: #475569;
              border: 1px solid #d1d5db;
            }
            .btn-details:hover {
              background: #f8fafc;
              border-color: #9ca3af;
              color: #1e293b;
            }
            .btn-preview {
              background: #ffffff;
              color: #475569;
              border: 1px solid #d1d5db;
            }
            .btn-preview:hover {
              background: #f8fafc;
              border-color: #9ca3af;
              color: #1e293b;
            }
            .reports-footer-link {
              font-size: 15px;
              font-weight: 700;
              color: #2563eb;
              text-decoration: none;
              transition: color 0.2s;
            }
            .reports-footer-link:hover {
              color: #1d4ed8;
              text-decoration: underline;
            }
            @media (max-width: 1024px) {
              .reports-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .reports-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </section>

        {/* ─── 7. CTA BANNER ─── */}
        <section className="vd-cta-section" style={{
          background: "#ffffff",
          padding: "100px 24px",
          textAlign: "center",
          borderTop: "1px solid #f1f5f9",
          borderBottom: "1px solid #f1f5f9"
        }}>
          <div className="vd-cta-inner" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="vd-badge-tag" style={{
              display: "inline-block",
              background: "#f1f5f9",
              color: "#475569",
              border: "1px solid #e2e8f0",
              borderRadius: "99px",
              padding: "6px 16px",
              fontSize: "12.5px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "20px"
            }}>
              Ready When You Are
            </div>
            <div className="vd-cta-title" style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: "900",
              color: "#0f172a",
              lineHeight: "1.1",
              marginBottom: "16px"
            }}>
              Let's Scale Your Growth Engine
            </div>
            <p className="vd-cta-desc" style={{
              color: "#64748b",
              fontSize: "16.5px",
              lineHeight: "1.65",
              maxWidth: "580px",
              margin: "0 auto 36px"
            }}>
              Get a free growth audit covering your SEO technicals, paid account structure, and conversion funnel — with a 90-day roadmap.
            </p>
            <div className="vd-cta-btns" style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="vd-btn-primary" style={{ background: "#334155", color: "#ffffff", padding: "14px 28px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", fontSize: "15px" }}>
                Book a Free Growth Audit →
              </Link>
              <Link href="/services" className="vd-btn-ghost" style={{ background: "#ffffff", color: "#0f172a", border: "1.5px solid #cbd5e1", padding: "14px 28px", borderRadius: "99px", fontWeight: "600", textDecoration: "none", fontSize: "15px" }}>
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 8. PREMIUM FAQ SECTION ─── */}
        <section style={{ background: "#f8fafc", padding: "96px 24px 112px" }}>
          <style>{`
            .faq-wrap { max-width: 1160px; margin: 0 auto; }
            .faq-top { text-align: center; margin-bottom: 64px; }
            .faq-badge {
              display: inline-flex; align-items: center; gap: 6px;
              background: #e0e7ff; color: #4f46e5; border: 1px solid #c7d2fe;
              border-radius: 99px; padding: 5px 14px;
              font-size: 12px; font-weight: 700; letter-spacing: 1.2px;
              text-transform: uppercase; margin-bottom: 18px;
            }
            .faq-title {
              font-size: clamp(30px, 4.5vw, 50px);
              font-weight: 900; color: #0f172a;
              line-height: 1.1; margin: 0 0 16px;
            }
            .faq-title span { color: #0f172a; }
            .faq-subtitle { color: #64748b; font-size: 17px; line-height: 1.65; max-width: 560px; margin: 0 auto; }
            
            .faq-body { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: start; }
            
            .faq-left-panel {
              background: #e0e7ff; border-color: #c7d2fe; color: #4f46e5;
              border-radius: 20px; padding: 40px 32px;
              position: sticky; top: 100px;
            }
            .faq-left-panel h3 { font-size: 22px; font-weight: 800; margin: 0 0 12px; line-height: 1.25; color: #0f172a; }
            .faq-left-panel p { font-size: 14px; color: #64748b; line-height: 1.7; margin: 0 0 28px; }
            .faq-contact-btn {
              display: inline-block; background: #0f172a; color: #fff;
              font-weight: 700; font-size: 14px; padding: 12px 22px;
              border-radius: 99px; text-decoration: none;
              transition: all 0.2s ease;
              box-shadow: 0 4px 14px rgba(15,23,42,0.15);
            }
            .faq-contact-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(15,23,42,0.22); }
            .faq-stat { margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 24px; }
            .faq-stat-num { font-size: 36px; font-weight: 900; line-height: 1; color: #0f172a; }
            .faq-stat-label { font-size: 13px; color: #64748b; margin-top: 4px; }

              border-bottom: 1px solid #e2e8f0;
              transition: background 0.2s;
            }
            .faq-item:first-child { border-top: 1px solid #e2e8f0; }
            details.faq-item summary {
              list-style: none;
              padding: 24px 0;
              cursor: pointer;
              display: flex; align-items: center; gap: 20px;
              user-select: none;
            }
            details.faq-item summary::-webkit-details-marker { display: none; }
            .faq-num {
              width: 34px; height: 34px; border-radius: 50%;
              background: #f1f5f9; border: 1px solid #e2e8f0;
              display: flex; align-items: center; justify-content: center;
              font-size: 12px; font-weight: 700; color: #94a3b8;
              flex-shrink: 0; transition: background 0.2s, color 0.2s, border-color 0.2s;
            }
            details.faq-item[open] .faq-num {
              background: #e0e7ff; border-color: #c7d2fe; color: #4f46e5;
            }
            .faq-q-text {
              flex: 1; font-size: 16px; font-weight: 700; color: #0f172a; line-height: 1.35;
            }
            details.faq-item[open] .faq-q-text { color: #4f46e5; }
            .faq-chevron {
              width: 32px; height: 32px; border-radius: 50%;
              background: #f1f5f9; display: flex; align-items: center;
              justify-content: center; flex-shrink: 0; transition: background 0.25s, transform 0.25s;
            }
            .faq-chevron svg { transition: transform 0.25s; }
            details.faq-item[open] .faq-chevron { background: #4f46e5; }
            details.faq-item[open] .faq-chevron svg { transform: rotate(180deg); }
            details.faq-item[open] .faq-chevron svg path { stroke: #fff; }
            .faq-ans {
              padding: 0 0 24px 54px;
              font-size: 15px; color: #475569; line-height: 1.75;
            }
            @media (max-width: 900px) {
              .faq-body { grid-template-columns: 1fr; }
              .faq-left-panel { position: static; }
            }
          `}</style>

          <div className="faq-wrap">
            {/* Top header */}
            <div className="faq-top">
              <div className="faq-badge">❓ FAQ</div>
              <h2 className="faq-title">Frequently Asked <span>Questions</span></h2>
              <p className="faq-subtitle">Everything you need to know about our growth marketing services.</p>
            </div>

            <div className="faq-body">
              {/* Left sticky CTA panel */}
              <div className="faq-left-panel">
                <h3>Still have questions?</h3>
                <p>Our growth strategists are ready to walk you through how we can help scale your business.</p>
                <a href="/contact" className="faq-contact-btn">Talk to an Expert →</a>
                <div className="faq-stat">
                  <div className="faq-stat-num">4.8×</div>
                  <div className="faq-stat-label">Avg. ROAS across campaigns</div>
                </div>
              </div>

              {/* Right accordion list */}
              <div className="faq-list">
                {faqs.map((f, i) => (
                  <details key={i} className="faq-item">
                    <summary>
                      <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="faq-q-text">{f.q}</span>
                      <span className="faq-chevron">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </summary>
                    <div className="faq-ans">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>


      </div>

      <Footer />
    </>
  );
}
