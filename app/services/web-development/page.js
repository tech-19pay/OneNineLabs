import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";
import ServiceContactForm from "@/components/ServiceContactForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Custom Web Development — Next.js 15 & React 19 | OneNineLabs",
  description: "Enterprise web applications built on Next.js 15, React 19, Node.js & Python. Blazing-fast edge delivery, headless CMS, and sub-second LCP page loads.",
  keywords: ["web development company", "custom web applications", "Next.js developer", "React development agency", "Node.js APIs", "headless CMS integration", "Lighthouse speed optimization"],
  alternates: { canonical: "/services/web-development", languages: { "en-US": "/services/web-development", en: "/services/web-development", "hi-IN": "/services/web-development", "x-default": "/services/web-development" } },
  openGraph: { title: "Custom Web Development & Next.js Apps | OneNineLabs", description: "Blazing-fast custom web applications engineered for speed, security & scale.", url: "https://oneninelabs.com/services/web-development", type: "website", images: [{ url: "/services/web_dev_preview.png", width: 1200, height: 630, alt: "Custom Web Development by OneNineLabs" }] },
  twitter: { card: "summary_large_image", title: "Custom Web Development & Next.js Apps | OneNineLabs", description: "Blazing-fast custom web applications engineered for speed, security & scale.", images: ["/services/web_dev_preview.png"] },
  robots: { index: true, follow: true },
};

const PRIMARY = "#2563eb";
const GRAD_FROM = "#1e3a8a";
const GRAD_TO = "#2563eb";
const GLOW = "rgba(37,99,235,0.15)";

const webCapabilities = [
  {
    title: "Next.js 15 & React 19 App Router",
    desc: "Server Components (RSC), Edge SSR, Streaming, and ISR patterns engineered for sub-second LCP and Lighthouse 95+ Core Web Vitals.",
    icon: "⚡",
    badge: "LCP < 0.8s"
  },
  {
    title: "Headless CMS Integration",
    desc: "Sanity.io, Contentful, and Strapi setups with visual editing for content teams and instant edge rebuilds on publish.",
    icon: "📝",
    badge: "Instant Rebuilds"
  },
  {
    title: "Node.js & Python APIs",
    desc: "NestJS, Express, and FastAPI microservices with PostgreSQL, Prisma ORM, and Redis caching for high-concurrency throughput.",
    icon: "⚙️",
    badge: "Type-Safe DB"
  },
  {
    title: "AI Feature Layer Integration",
    desc: "OpenAI, Claude, and Gemini streaming APIs with vector embeddings (Pinecone, pgvector) for intelligent web app features.",
    icon: "🤖",
    badge: "Vector Search"
  }
];

const faqs = [
  { q: "Why do you specialize in Next.js?", a: "Next.js provides the best server-side rendering (SSR), static generation (SSG), and incremental builds (ISR) out of the box, leading to sub-second page loads, better SEO, and lower server costs." },
  { q: "Can you integrate headless CMS platforms?", a: "Yes — we integrate headless CMS platforms like Sanity, Contentful, and Strapi. This lets your marketing team edit content visual-editor style, while keeping your website ultra-fast and secure." },
  { q: "How do you optimize page performance?", a: "We audit and fix image layouts, run dynamic code splits, eliminate heavy bundle dependencies, optimize server queries, and configure edge CDN caches to achieve 95+ Lighthouse scores." },
  { q: "What is your backend database preference?", a: "We typically use PostgreSQL (configured with Supabase or AWS RDS) with Prisma ORM for type safety, alongside Redis for caching and session management." },
  { q: "Do you build custom API endpoints?", a: "Yes — we design and build custom RESTful and GraphQL APIs using Node.js (NestJS/Express) and Python (FastAPI)." },
  { q: "What is your code handover process?", a: "You receive full ownership of clean TypeScript codebases, complete with unit test suites, Figma design files, and deployment scripts." }
];

export default function WebDevelopmentServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Custom Web Development", item: `${siteUrl}/services/web-development` },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/web-development#service`,
    name: "Custom Web Development",
    serviceType: "Web Development and Applications",
    url: `${siteUrl}/services/web-development`,
    description: "Enterprise web applications built on Next.js 15, React 19, Node.js & Python. Blazing-fast edge delivery, headless CMS, and sub-second LCP page loads.",
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

        {/* ─── 1. HERO: SHIFTED UPWARDS WITHOUT CARD CONTAINER ─── */}
        <section className="vd-hero-section" style={{
          background: "#ffffff",
          padding: "105px 24px 60px 24px",
          borderBottom: "1px solid #f1f5f9",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "380px 340px 1fr",
            gap: "40px",
            alignItems: "center"
          }}>

            {/* LEFT COLUMN */}
            <div style={{ textAlign: "left" }}>
              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(30px, 3.6vw, 44px)",
                fontWeight: "700",
                color: "#3b232e",
                lineHeight: "1.15",
                letterSpacing: "-1.2px",
                marginBottom: "36px"
              }}>
                Kickstart your web app effortlessly with Next.js 15.
              </h1>

              {/* Active Spotlight Card */}
              <div style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(59, 35, 46, 0.06)",
                marginBottom: "20px"
              }}>
                <div style={{ fontSize: "17px", fontWeight: "700", color: "#3b232e", marginBottom: "8px" }}>
                  Next.js 15 &amp; React 19 UI
                </div>
                <div style={{ fontSize: "13.5px", color: "#7a5c68", lineHeight: "1.6" }}>
                  Sub-second LCP, Server Components (RSC), Edge SSR, and Lighthouse 95+ Core Web Vitals SLA.
                </div>
              </div>

              {/* Accordion Feature Items */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "16px 0", borderBottom: "1px solid #eee1d6", color: "#4a343d", fontWeight: "700", fontSize: "16px" }}>
                  Headless CMS &amp; Visual Editor
                </div>
                <div style={{ padding: "16px 0", borderBottom: "1px solid #eee1d6", color: "#4a343d", fontWeight: "700", fontSize: "16px" }}>
                  Node.js &amp; Python Microservices
                </div>
                <div style={{ padding: "16px 0", color: "#4a343d", fontWeight: "700", fontSize: "16px" }}>
                  Core Web Vitals &amp; Edge Caching
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: PHONE DEVICE SHOWCASE CANVAS */}
            <div style={{
              background: "#ffffff",
              borderRadius: "36px",
              padding: "16px",
              boxShadow: "0 25px 60px rgba(59, 35, 46, 0.08)"
            }}>
              {/* Phone Device Screen */}
              <div style={{
                background: "linear-gradient(180deg, #6c4b5e 0%, #4a3241 100%)",
                borderRadius: "28px",
                padding: "20px 16px",
                color: "#ffffff",
                textAlign: "center",
                position: "relative"
              }}>
                {/* Header Navbar */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", fontSize: "14px" }}>
                  <span>‹</span>
                  <span>❤️</span>
                  <span>⋮</span>
                </div>

                {/* Main Hero Card Info */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "18px", fontWeight: "700", fontFamily: "'Plus Jakarta Sans', serif" }}>Next.js Turbo Web Stack</div>
                  <div style={{ fontSize: "11px", color: "#d8c4cd", marginTop: "2px" }}>By OneNine Engineering Pod</div>
                </div>

                {/* Center 3D Lotus / App Icon Graphic */}
                <div style={{
                  width: "120px",
                  height: "120px",
                  margin: "0 auto 20px auto",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(244, 212, 225, 0.25) 0%, transparent 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "56px"
                }}>
                  ⚡
                </div>

                {/* Circular Play / Execute Button */}
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.9)",
                  color: "#4a3241",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  fontSize: "18px"
                }}>
                  ▶
                </div>

                {/* Lower White Card Sheet */}
                <div style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "16px 14px",
                  color: "#3b232e",
                  textAlign: "left"
                }}>
                  <div style={{ fontSize: "13px", fontWeight: "700", textAlign: "center", marginBottom: "14px", fontFamily: "'Plus Jakarta Sans', serif" }}>
                    List of web app modules
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f5e6eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>🚀</div>
                        <div>
                          <div style={{ fontSize: "12px", fontWeight: "700" }}>Next.js App Router (RSC)</div>
                          <div style={{ fontSize: "10px", color: "#8a6d79" }}>⏱ 0.4s LCP</div>
                        </div>
                      </div>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f0e2d7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>▶</div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#e8f0f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>📝</div>
                        <div>
                          <div style={{ fontSize: "12px", fontWeight: "700" }}>Headless CMS (Sanity)</div>
                          <div style={{ fontSize: "10px", color: "#8a6d79" }}>⏱ Instant Sync</div>
                        </div>
                      </div>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f0e2d7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>▶</div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f0e8f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>⚙️</div>
                        <div>
                          <div style={{ fontSize: "12px", fontWeight: "700" }}>Prisma ORM &amp; Postgres</div>
                          <div style={{ fontSize: "10px", color: "#8a6d79" }}>⏱ Type-Safe API</div>
                        </div>
                      </div>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f0e2d7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>▶</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div style={{ textAlign: "left" }}>
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(26px, 3.2vw, 36px)",
                fontWeight: "700",
                color: "#3b232e",
                lineHeight: "1.2",
                marginBottom: "16px"
              }}>
                Exceptional features that stand out.
              </h2>

              <p style={{
                fontSize: "14.5px",
                color: "#7a5c68",
                lineHeight: "1.65",
                marginBottom: "32px"
              }}>
                Enjoy our built-in performance engines, headless CMS visual editing, edge caching, and scalable APIs designed to elevate your web platform with ease and speed.
              </p>

              <Link
                href="/#contact"
                style={{
                  border: "1.5px solid #c49ba9",
                  color: "#6c4b5e",
                  fontWeight: "700",
                  borderRadius: "99px",
                  padding: "12px 28px",
                  fontSize: "14.5px",
                  textDecoration: "none",
                  display: "inline-block"
                }}
              >
                Start Web Project →
              </Link>
            </div>

          </div>

          <style>{`
            @media (max-width: 1024px) {
              .vd-hero-section > div {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
            }
          `}</style>
        </section>

        {/* ─── 2. REDESIGNED CAPABILITIES SECTION (EXACT MATCH TO MARKETING & HOME PAGE CARDS) ─── */}
        <section className="vd-services-section" style={{
          background: "#f8fafc",
          padding: "64px 24px 80px 24px",
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
              Our Web Development Stack
            </h2>
            <p style={{ color: "#475569", fontSize: "16px", fontWeight: "600", margin: 0 }}>
              Full-stack Next.js, React 19, and Node.js solutions engineered for enterprise scale.
            </p>
          </div>

          <div className="reports-grid">
            {/* CARD 1: Next.js 15 & React 19 App Router */}
            <div className="report-card">
              <div className="dashboard-mockup" style={{ background: "#0f172a", border: "1px solid #1e293b" }}>
                <div className="mockup-header" style={{ borderBottom: "1px solid #334155" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    <span className="mockup-title" style={{ color: "#38bdf8", fontFamily: "monospace", fontSize: "7px" }}>page.tsx — Next.js Turbopack</span>
                  </div>
                </div>
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "monospace", color: "#cbd5e1" }}>
                  <div style={{ fontSize: "6.5px", lineHeight: "1.5" }}>
                    <span style={{ color: "#c084fc" }}>export default async function</span> <span style={{ color: "#facc15" }}>Page</span>() &#123;<br />
                    &nbsp;&nbsp;<span style={{ color: "#38bdf8" }}>const</span> res = <span style={{ color: "#c084fc" }}>await</span> fetch(<span style={{ color: "#4ade80" }}>'/api/edge'</span>);<br />
                    &nbsp;&nbsp;<span style={{ color: "#c084fc" }}>return</span> &lt;<span style={{ color: "#facc15" }}>RSCView</span> data=&#123;res&#125; /&gt;;<br />
                    &#125;
                  </div>
                  <div style={{ background: "#1e293b", padding: "4px 6px", borderRadius: "4px", fontSize: "6px", border: "1px solid #334155" }}>
                    <span style={{ color: "#4ade80" }}>✓ Compiled in 0.4s (Edge RSC)</span>
                  </div>
                </div>
              </div>

              <h3 className="card-title">Next.js 15 &amp; React 19 UI</h3>
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              <div className="card-buttons">
                <Link href="/services/web-development" className="btn-details">View details</Link>
                <Link href="/#contact" className="btn-preview">Preview stack</Link>
              </div>
            </div>

            {/* CARD 2: Headless CMS & Visual Studio */}
            <div className="report-card">
              <div className="dashboard-mockup" style={{ background: "#0f172a", border: "1px solid #1e293b" }}>
                <div className="mockup-header" style={{ borderBottom: "1px solid #334155" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    <span className="mockup-title" style={{ color: "#f59e0b", fontFamily: "monospace", fontSize: "7px" }}>schema.ts — Sanity CMS Studio</span>
                  </div>
                </div>
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "monospace", color: "#cbd5e1" }}>
                  <div style={{ fontSize: "6.5px", lineHeight: "1.5" }}>
                    <span style={{ color: "#c084fc" }}>defineField</span>(&#123;<br />
                    &nbsp;&nbsp;name: <span style={{ color: "#4ade80" }}>'title'</span>, type: <span style={{ color: "#4ade80" }}>'string'</span>,<br />
                    &nbsp;&nbsp;validation: (Rule) =&gt; Rule.required()<br />
                    &#125;);
                  </div>
                  <div style={{ background: "#1e293b", padding: "4px 6px", borderRadius: "4px", fontSize: "6px", border: "1px solid #334155" }}>
                    <span style={{ color: "#f59e0b" }}>🚀 ISR Triggered: &lt;50ms Edge Rebuild</span>
                  </div>
                </div>
              </div>

              <h3 className="card-title">Headless CMS &amp; Visual Studio</h3>
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>

              <div className="card-buttons">
                <Link href="/services/saas" className="btn-details">View details</Link>
                <Link href="/#contact" className="btn-preview">Preview stack</Link>
              </div>
            </div>

            {/* CARD 3: Node.js & Python Microservices APIs */}
            <div className="report-card">
              <div className="dashboard-mockup" style={{ background: "#0f172a", border: "1px solid #1e293b" }}>
                <div className="mockup-header" style={{ borderBottom: "1px solid #334155" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    <span className="mockup-title" style={{ color: "#a78bfa", fontFamily: "monospace", fontSize: "7px" }}>api.controller.ts — NestJS API</span>
                  </div>
                </div>
                <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "monospace", color: "#cbd5e1" }}>
                  <div style={{ fontSize: "6.5px", lineHeight: "1.5" }}>
                    <span style={{ color: "#a78bfa" }}>@Get</span>(<span style={{ color: "#4ade80" }}>'/users'</span>)<br />
                    <span style={{ color: "#38bdf8" }}>async</span> <span style={{ color: "#facc15" }}>findMany</span>() &#123;<br />
                    &nbsp;&nbsp;<span style={{ color: "#c084fc" }}>return</span> <span style={{ color: "#38bdf8" }}>this</span>.prisma.user.<span style={{ color: "#facc15" }}>findMany</span>();<br />
                    &#125;
                  </div>
                  <div style={{ background: "#1e293b", padding: "4px 6px", borderRadius: "4px", fontSize: "6px", border: "1px solid #334155" }}>
                    <span style={{ color: "#a78bfa" }}>⚡ 12.4k req/s • 12ms Latency</span>
                  </div>
                </div>
              </div>

              <h3 className="card-title">Node.js &amp; Python APIs</h3>
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="card-buttons">
                <Link href="/services/security" className="btn-details">View details</Link>
                <Link href="/#contact" className="btn-preview">Preview stack</Link>
              </div>
            </div>
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

        {/* ─── 2b. FULL-STACK ARCHITECTURE EXPLORER SECTION (OPTIMIZED CARD THEME) ─── */}
        <section style={{ background: "#f8fafc", padding: "96px 24px", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span style={{ fontSize: "12.5px", fontWeight: "900", letterSpacing: "2.5px", textTransform: "uppercase", color: "#2563eb", display: "block", marginBottom: "10px" }}>
                FULL-STACK ARCHITECTURE
              </span>
              <h2 style={{ fontSize: "clamp(30px, 4.2vw, 48px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-1px", margin: "0 0 14px 0" }}>
                How We Layer Your Next.js Web Stack
              </h2>
              <p style={{ color: "#475569", fontSize: "16px", fontWeight: "600", maxWidth: "600px", margin: "0 auto" }}>
                A modular, high-performance architecture engineered for sub-second page loads and enterprise reliability.
              </p>
            </div>

            <div className="arch-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
              
              {/* CARD 1: FRONTEND LAYER */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 28px", boxShadow: "0 10px 30px rgba(15,23,42,0.04)", display: "flex", flexDirection: "column", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#eff6ff", border: "1px solid #bfdbfe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>🎨</div>
                  <span style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "800" }}>LAYER 01</span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>Frontend Layer</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.65", marginBottom: "20px", flex: 1 }}>Next.js 15 App Router, React 19 Server Components (RSC), Tailwind CSS &amp; Framer Motion micro-interactions.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                  {["Next.js 15", "React 19", "Tailwind", "Framer"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#334155", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>

              {/* CARD 2: BACKEND API LAYER */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 28px", boxShadow: "0 10px 30px rgba(15,23,42,0.04)", display: "flex", flexDirection: "column", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#fff7ed", border: "1px solid #fed7aa", color: "#ea580c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>⚙️</div>
                  <span style={{ background: "#fff7ed", color: "#ea580c", border: "1px solid #fed7aa", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "800" }}>LAYER 02</span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>Backend API Layer</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.65", marginBottom: "20px", flex: 1 }}>NestJS, Express &amp; FastAPI microservices with GraphQL DataLoaders and REST endpoint routing.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                  {["NestJS", "FastAPI", "GraphQL", "REST"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#334155", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>

              {/* CARD 3: DATABASE & CACHE */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 28px", boxShadow: "0 10px 30px rgba(15,23,42,0.04)", display: "flex", flexDirection: "column", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>🗄️</div>
                  <span style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "800" }}>LAYER 03</span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>Database &amp; Cache</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.65", marginBottom: "20px", flex: 1 }}>PostgreSQL with Prisma ORM, Supabase, and Redis edge caching for sub-millisecond lookups.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                  {["Postgres", "Prisma", "Supabase", "Redis"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#334155", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>

              {/* CARD 4: EDGE CDN DELIVERY */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 28px", boxShadow: "0 10px 30px rgba(15,23,42,0.04)", display: "flex", flexDirection: "column", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#f3e8ff", border: "1px solid #e9d5ff", color: "#9333ea", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>☁️</div>
                  <span style={{ background: "#f3e8ff", color: "#9333ea", border: "1px solid #e9d5ff", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "800" }}>LAYER 04</span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>Edge CDN Delivery</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.65", marginBottom: "20px", flex: 1 }}>Global Vercel Edge Network &amp; Cloudflare CDN asset delivery with automated CI/CD pipelines.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                  {["Vercel Edge", "Cloudflare", "Docker", "CI/CD"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#334155", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <style>{`
            .arch-card:hover {
              transform: translateY(-8px);
              border-color: #cbd5e1 !important;
              box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08) !important;
            }
          `}</style>
        </section>

        {/* ─── 2c. CORE WEB VITALS & LIGHTHOUSE PERFORMANCE SHOWCASE ─── */}
        <section style={{ background: "#f8fafc", padding: "80px 24px", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#16a34a", display: "block", marginBottom: "8px" }}>
                PERFORMANCE GUARANTEE
              </span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", color: "#0f172a", margin: 0 }}>
                Lighthouse 95+ Core Web Vitals Benchmark
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: "900", color: "#16a34a" }}>98/100</div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginTop: "4px" }}>Lighthouse Performance</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>Google Audit SLA</div>
              </div>

              <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: "900", color: "#2563eb" }}>0.4s</div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginTop: "4px" }}>Largest Contentful Paint</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>LCP Target &lt; 1.2s</div>
              </div>

              <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: "900", color: "#9333ea" }}>12ms</div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginTop: "4px" }}>First Input Delay</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>Instant Touch Response</div>
              </div>

              <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: "900", color: "#059669" }}>-35%</div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginTop: "4px" }}>Server Spend Reduction</div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>Lower Edge Hosting Cost</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. FAQ SECTION ─── */}
        <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>
              Web Engineering FAQs
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((f, i) => (
                <details key={i} style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px 24px", cursor: "pointer" }}>
                  <summary style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px" }}>{f.q}</summary>
                  <p style={{ color: "#64748b", marginTop: "12px", lineHeight: "1.65", fontSize: "14.5px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. CTA BANNER ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              Ready to Build Your Next Web Platform?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Talk with our principal web architect and receive a technical architecture proposal within 48 hours.
            </p>
            <Link href="/#contact" style={{ background: "#334155", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book Free Architecture Call →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
