import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";
import ServiceContactForm from "@/components/ServiceContactForm";
import WebDevMoreSections from "@/components/WebDevMoreSections";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Custom Web Development & High-Performance UIs | OneNineLabs",
  description: "Enterprise web applications built on modern UI stacks, React, Vue, Vite & Edge APIs. Blazing-fast edge delivery, headless CMS, and sub-second LCP page loads.",
  keywords: ["web development company", "custom web applications", "UI design system", "React Vue agency", "Node.js APIs", "headless CMS integration", "Lighthouse speed optimization"],
  alternates: { canonical: "/services/web-development", languages: { "en-US": "/services/web-development", en: "/services/web-development", "x-default": "/services/web-development" } },
  openGraph: { title: "Custom Web Development & Modern UI Apps | OneNineLabs", description: "Blazing-fast custom web applications engineered for speed, security & scale.", url: "https://oneninelabs.com/services/web-development", type: "website", images: [{ url: "/services/web_dev_preview.png", width: 1200, height: 630, alt: "Custom Web Development by OneNineLabs" }] },
  twitter: { card: "summary_large_image", title: "Custom Web Development & Modern UI Apps | OneNineLabs", description: "Blazing-fast custom web applications engineered for speed, security & scale.", images: ["/services/web_dev_preview.png"] },
  robots: { index: true, follow: true },
};

const PRIMARY = "#2563eb";
const GRAD_FROM = "#1e3a8a";
const GRAD_TO = "#2563eb";
const GLOW = "rgba(37,99,235,0.15)";

const webCapabilities = [
  {
    title: "Modern Component UIs & Engines",
    desc: "React 19, Vue 3, Svelte, and Next.js interfaces combined with Vite / Turbopack build engines for sub-second LCP page loads.",
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
  { q: "What frontend technologies do you build UIs with?", a: "We engineer custom interfaces using React, Vue, Svelte, and Next.js, combined with Vite/Turbopack and Tailwind CSS. We select the right UI framework and rendering patterns (SSR, SSG) depending on your product's SEO, speed, and scaling goals." },
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

        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f3f4f6 100%)",
          padding: "115px 24px 80px 24px",
          borderBottom: "1px solid #f1f5f9",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          <div className="webdev-hero-grid" style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "56px",
            alignItems: "center"
          }}>

            {/* LEFT CONTENT COLUMN */}
            <div className="webdev-hero-left" style={{ textAlign: "left", zIndex: 2 }}>
              
              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                fontWeight: "800",
                color: "#1e1b4b",
                lineHeight: "1.12",
                letterSpacing: "-1.5px",
                marginBottom: "20px"
              }}>
                Kickstart your custom web app <span className="highlight-text">effortlessly</span>
              </h1>

              <p style={{
                fontSize: "16px",
                color: "#475569",
                lineHeight: "1.7",
                marginBottom: "36px",
                maxWidth: "560px",
                fontWeight: "500"
              }}>
                Enjoy our built-in performance engines, headless CMS visual editing, edge caching, and scalable databases designed to elevate your web platform with ease and speed.
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
                <Link
                  href="/contact"
                  className="vd-btn-primary"
                  style={{
                    background: "#0f172a",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1.5px solid #0f172a",
                    transition: "all 0.25s ease"
                  }}
                >
                  Start Web Project →
                </Link>
                <a
                  href="#capabilities"
                  style={{
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: "700",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    textDecoration: "none",
                    border: "1.5px solid #e2e8f0",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "all 0.25s ease"
                  }}
                  className="vd-btn-ghost-secondary"
                >
                  Explore Capabilities
                </a>
              </div>

              {/* Accordion / Info Cards 2x2 Grid */}
              <div className="webdev-accordion-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "600px" }}>
                {[
                  { title: "Visual CMS Editor", desc: "Real-time content sync & visual editor layouts." },
                  { title: "Hybrid Edge Rendering", desc: "Optimized server rendering and edge delivery." },
                  { title: "Scalable Core APIs", desc: "Type-safe backend services with caching layers." },
                  { title: "Core Web Vitals SLA", desc: "Sub-second load speeds and Lighthouse 95+ scores." }
                ].map((item, i) => (
                  <div key={i} className="webdev-accordion-card">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ color: "#10b981", fontWeight: "900", fontSize: "14px" }}>✓</span>
                      <h4 style={{ fontSize: "14px", fontWeight: "800", color: "#1e1b4b", margin: 0 }}>{item.title}</h4>
                    </div>
                    <p style={{ fontSize: "12px", color: "#64748b", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: PHONE DEVICE SHOWCASE CANVAS (CENTERED) */}
            <div className="webdev-hero-right" style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
              <div className="webdev-phone-wrapper" style={{
                background: "#ffffff",
                borderRadius: "36px",
                padding: "16px",
                boxShadow: "0 25px 60px rgba(15, 23, 42, 0.08)",
                maxWidth: "340px",
                width: "100%"
              }}>
                {/* Phone Device Screen */}
                <div style={{
                  background: "#0f172a",
                  borderRadius: "28px",
                  padding: "12px",
                  color: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                  height: "440px",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #1e293b",
                  textAlign: "left"
                }}>
                  {/* Backdrop light glow behind screen */}
                  <div className="phone-screen-glow" />

                  {/* Browser Mock Navigation Bar at the top */}
                  <div className="mock-browser-bar" style={{
                    background: "#1e293b",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    fontSize: "10px",
                    color: "#94a3b8",
                    position: "relative",
                    zIndex: 4
                  }}>
                    <span style={{ color: "#10b981", fontSize: "10px" }}>🔒</span>
                    <span style={{ fontFamily: "monospace", flex: 1, textAlign: "left" }}>onenine.dev/demo</span>
                    <span style={{ display: "flex", gap: "3px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ef4444" }}></span>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#f59e0b" }}></span>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#10b981" }}></span>
                    </span>
                  </div>

                  {/* Website Scrolling Viewport Area */}
                  <div className="mock-website-viewport" style={{
                    flex: 1,
                    overflow: "hidden",
                    borderRadius: "16px",
                    background: "#ffffff",
                    position: "relative",
                    zIndex: 3,
                    border: "1px solid #e2e8f0"
                  }}>
                    {/* The Website Mock Page (Animated vertical scroll through 6 pages) */}
                    <div className="mock-website-page" style={{
                      position: "absolute",
                      width: "100%",
                      top: 0,
                      left: 0
                    }}>
                      
                      {/* PAGE 1: Landing Page Hero Screen */}
                      <div className="webdev-page-screen" style={{ height: "260px", padding: "16px 12px", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                          <span style={{ fontSize: "10px", fontWeight: "900", color: "#1e1b4b" }}>OneNine Labs</span>
                          <span style={{ fontSize: "8px", background: "#f1f5f9", padding: "3px 8px", borderRadius: "4px", color: "#64748b" }}>Menu ☰</span>
                        </div>
                        <h4 style={{ fontSize: "15px", fontWeight: "900", color: "#1e1b4b", margin: "0 0 8px 0", lineHeight: "1.2" }}>
                          Build To Scale.
                        </h4>
                        <p style={{ fontSize: "9.5px", color: "#64748b", margin: "0 0 16px 0", lineHeight: "1.4" }}>
                          High performance software engineering that powers fast-growing web applications.
                        </p>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <div style={{ fontSize: "8px", background: "#0f172a", color: "#ffffff", padding: "6px 10px", borderRadius: "6px", fontWeight: "700" }}>Get Started</div>
                          <div style={{ fontSize: "8px", border: "1px solid #cbd5e1", padding: "6px 10px", borderRadius: "6px", fontWeight: "700", color: "#0f172a" }}>Learn More</div>
                        </div>
                      </div>

                      {/* PAGE 2: Features Grid Screen */}
                      <div className="webdev-page-screen" style={{ height: "260px", padding: "16px 12px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                        <div style={{ textAlign: "center", marginBottom: "14px" }}>
                          <span style={{ fontSize: "8px", fontWeight: "800", color: "#4f46e5", textTransform: "uppercase" }}>Core Architecture</span>
                          <h4 style={{ fontSize: "12px", fontWeight: "900", color: "#1e1b4b", margin: "2px 0 0 0" }}>Designed for Speed</h4>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <div style={{ background: "#ffffff", borderRadius: "8px", padding: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "12px" }}>⚡</span>
                            <div>
                              <div style={{ fontSize: "9px", fontWeight: "800", color: "#0f172a" }}>Sub-second LCP</div>
                              <div style={{ fontSize: "7.5px", color: "#64748b" }}>Optimized page loading.</div>
                            </div>
                          </div>
                          <div style={{ background: "#ffffff", borderRadius: "8px", padding: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "12px" }}>🛡️</span>
                            <div>
                              <div style={{ fontSize: "9px", fontWeight: "800", color: "#0f172a" }}>Enterprise Security</div>
                              <div style={{ fontSize: "7.5px", color: "#64748b" }}>End-to-end data encryption.</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* PAGE 3: Live Analytics Dashboard Screen */}
                      <div className="webdev-page-screen" style={{ height: "260px", padding: "16px 12px", background: "#0f172a", borderBottom: "1px solid #1e293b", color: "#ffffff" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                          <span style={{ fontSize: "9px", fontWeight: "800", color: "#38bdf8" }}>LATENCY MONITOR</span>
                          <span style={{ fontSize: "8px", color: "#34d399", fontWeight: "700" }}>● ONLINE</span>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "8px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "10px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", color: "#94a3b8", marginBottom: "4px" }}>
                            <span>Edge Cache hit rate</span>
                            <span style={{ color: "#34d399", fontWeight: "900" }}>99.4%</span>
                          </div>
                          
                          {/* Latency line chart inside browser mockup */}
                          <svg viewBox="0 0 100 30" style={{ width: "100%", height: "36px", overflow: "visible" }}>
                            <path d="M0,30 Q15,5 30,18 T60,3 T90,24 L100,24" fill="none" stroke="#38bdf8" strokeWidth="1.5" className="phone-svg-line" />
                          </svg>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                          <div style={{ background: "rgba(255,255,255,0.02)", padding: "6px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ fontSize: "7px", color: "#94a3b8" }}>DB READS</div>
                            <div style={{ fontSize: "10px", fontWeight: "900", color: "#38bdf8" }}>0.8ms</div>
                          </div>
                          <div style={{ background: "rgba(255,255,255,0.02)", padding: "6px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ fontSize: "7px", color: "#94a3b8" }}>UPTIME</div>
                            <div style={{ fontSize: "10px", fontWeight: "900", color: "#34d399" }}>99.99%</div>
                          </div>
                        </div>
                      </div>

                      {/* PAGE 4: Pricing Rows Screen */}
                      <div className="webdev-page-screen" style={{ height: "260px", padding: "16px 12px", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
                        <div style={{ textAlign: "center", marginBottom: "10px" }}>
                          <h4 style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a", margin: 0 }}>Work With Us</h4>
                          <span style={{ fontSize: "8px", color: "#64748b" }}>Cream-palette horizontal tiers</span>
                        </div>
                        <div style={{ background: "#faf6eb", borderRadius: "10px", padding: "8px", border: "1px solid #f3ebd4", marginBottom: "8px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "8px", fontWeight: "800", color: "#1e1b4b" }}>Product Pod</span>
                            <span style={{ fontSize: "8px", fontWeight: "900", color: "#b45309" }}>₹49,000 /mo</span>
                          </div>
                          <p style={{ fontSize: "7px", color: "#854d0e", margin: "2px 0 0 0" }}>Full-width rows with dedicated crew.</p>
                        </div>
                        <div style={{ background: "#ffffff", borderRadius: "10px", padding: "8px", border: "1px solid #cbd5e1" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "8px", fontWeight: "800", color: "#475569" }}>Scale Pod</span>
                            <span style={{ fontSize: "8px", fontWeight: "900", color: "#475569" }}>₹99,000 /mo</span>
                          </div>
                        </div>
                      </div>

                      {/* PAGE 5: Growth Delivery Pod / Team Screen */}
                      <div className="webdev-page-screen" style={{ height: "260px", padding: "16px 12px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                        <div style={{ textAlign: "center", marginBottom: "12px" }}>
                          <span style={{ fontSize: "8px", fontWeight: "800", color: "#ca8a04", textTransform: "uppercase" }}>Dedicated Crew</span>
                          <h4 style={{ fontSize: "12px", fontWeight: "900", color: "#1e1b4b", margin: "2px 0 0 0" }}>Your Delivery Pod</h4>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div style={{ background: "#ffffff", borderRadius: "8px", padding: "8px", border: "1px solid #e2e8f0", display: "flex", justify: "space-between", alignItems: "center" }}>
                            <div>
                              <div style={{ fontSize: "9px", fontWeight: "800", color: "#0f172a" }}>Lead API Architect</div>
                              <div style={{ fontSize: "7.5px", color: "#64748b" }}>GraphQL & Backend Orchestration</div>
                            </div>
                            <span style={{ fontSize: "8px", background: "#fef08a", color: "#854d0e", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>Core</span>
                          </div>
                          <div style={{ background: "#ffffff", borderRadius: "8px", padding: "8px", border: "1px solid #e2e8f0", display: "flex", justify: "space-between", alignItems: "center" }}>
                            <div>
                              <div style={{ fontSize: "9px", fontWeight: "800", color: "#0f172a" }}>UI/UX Systems Engineer</div>
                              <div style={{ fontSize: "7.5px", color: "#64748b" }}>Design system & Frontend components</div>
                            </div>
                            <span style={{ fontSize: "8px", background: "#dbeafe", color: "#1e40af", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>Client</span>
                          </div>
                        </div>
                      </div>

                      {/* PAGE 6: Frequently Asked Questions Screen */}
                      <div className="webdev-page-screen" style={{ height: "260px", padding: "16px 12px", background: "#ffffff" }}>
                        <div style={{ textAlign: "center", marginBottom: "12px" }}>
                          <h4 style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a", margin: 0 }}>FAQ / Support</h4>
                          <span style={{ fontSize: "8px", color: "#64748b" }}>Direct system SLA answers</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "8px", border: "1px solid #cbd5e1" }}>
                            <div style={{ fontSize: "9px", fontWeight: "800", color: "#1e1b4b" }}>Q: How fast is setup?</div>
                            <div style={{ fontSize: "8px", color: "#475569", marginTop: "2px" }}>A: Operations start in 48 hours.</div>
                          </div>
                          <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "8px", border: "1px solid #cbd5e1" }}>
                            <div style={{ fontSize: "9px", fontWeight: "800", color: "#1e1b4b" }}>Q: Uptime guarantees?</div>
                            <div style={{ fontSize: "8px", color: "#475569", marginTop: "2px" }}>A: 99.9% production tier SLA.</div>
                          </div>
                        </div>
                        <div style={{ marginTop: "16px", borderTop: "1px dashed #cbd5e1", paddingTop: "10px", textAlign: "center" }}>
                          <span style={{ fontSize: "8px", color: "#94a3b8" }}>OneNine Labs Engine Pod</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <style>{`
            .highlight-text {
              background: linear-gradient(135deg, #b45309, #ca8a04);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            
            /* Responsive primary button hovers */
            .vd-btn-primary:hover {
              background: #ffffff !important;
              color: #0f172a !important;
              border-color: #0f172a !important;
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(15, 23, 42, 0.1) !important;
            }
            .vd-btn-ghost-secondary:hover {
              background: #faf6eb !important;
              border-color: #0f172a !important;
              transform: translateY(-2px);
              box-shadow: 0 6px 16px rgba(0,0,0,0.06) !important;
            }
            
            /* Accordion items */
            .webdev-accordion-card {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 16px;
              padding: 16px;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              box-shadow: 0 4px 12px rgba(15,23,42,0.01);
            }
            .webdev-accordion-card:hover {
              transform: translateY(-4px);
              border-color: #cbd5e1;
              box-shadow: 0 10px 24px rgba(15,23,42,0.04);
            }

            /* Continuous Floating/Pulsing Animations */
            @keyframes floatPhone {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes spinCircle {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulseHeart {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.3); }
            }

            .webdev-phone-wrapper {
              animation: floatPhone 6s ease-in-out infinite;
            }
            .heart-icon-pulse {
              display: inline-block;
              animation: pulseHeart 1.2s ease-in-out infinite;
              color: #ef4444;
            }
            .phone-screen-glow {
              position: absolute;
              inset: -50%;
              background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 60%);
              animation: spinCircle 12s linear infinite;
              pointer-events: none;
              z-index: 1;
            }
            
            /* Mock scrolling website pages (video presentation format with 6 pages) */
            @keyframes scrollVideoPages {
              0%, 12% { transform: translateY(0); }
              16%, 28% { transform: translateY(-260px); }
              32%, 44% { transform: translateY(-520px); }
              48%, 60% { transform: translateY(-780px); }
              64%, 76% { transform: translateY(-1040px); }
              80%, 92% { transform: translateY(-1300px); }
              100% { transform: translateY(0); }
            }
            .mock-website-page {
              animation: scrollVideoPages 18s cubic-bezier(0.65, 0, 0.35, 1) infinite;
            }



            @keyframes flowPhoneSvg {
              from { stroke-dashoffset: 20; }
              to { stroke-dashoffset: 0; }
            }
            .phone-svg-line {
              stroke-dasharray: 6 3;
              animation: flowPhoneSvg 1.2s linear infinite;
            }

            @media (max-width: 1024px) {
              .webdev-hero-grid {
                grid-template-columns: 1fr !important;
                gap: 50px !important;
              }
              .webdev-hero-right {
                justify-content: center;
              }
            }
          `}</style>
        </section>

        <section id="capabilities" className="vd-services-section" style={{
          background: "#f8fafc",
          padding: "64px 24px 24px 24px",
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
              Custom React, Vue, Svelte, and Next.js interfaces engineered for high-performance UIs.
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
                    <span className="mockup-title" style={{ color: "#38bdf8", fontFamily: "monospace", fontSize: "7px" }}>App.tsx — React Vue Design System</span>
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

              <h3 className="card-title">Modern Frontend &amp; UI Engines</h3>
              <div className="card-logo-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              <div className="card-buttons">
                <Link href="/services/web-development" className="btn-details">View details</Link>
                <Link href="/contact" className="btn-preview">Preview stack</Link>
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
                <Link href="/contact" className="btn-preview">Preview stack</Link>
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
                <Link href="/contact" className="btn-preview">Preview stack</Link>
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

        {/* ─── 2b. FULL-STACK ARCHITECTURE EXPLORER SECTION (MATCHES RESULTS/OUTCOMES CARD THEME) ─── */}
        <section className="vd-results-section" style={{ borderTop: "none", paddingTop: "24px", paddingBottom: "24px" }}>
          <h2 className="vd-section-h2">How We Layer Your Frontend Web Stack</h2>
          <p className="vd-section-p">
            A modular, high-performance architecture engineered for sub-second page loads and enterprise reliability.
          </p>

          <div className="vd-results-grid">
            
            {/* CARD 1: FRONTEND LAYER */}
            <div className="vd-result-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>01</div>
                <div style={{ fontSize: "22px" }}>🎨</div>
              </div>
              <div className="vd-result-label">Frontend Layer</div>
              <div className="vd-result-desc">
                Modular Design Systems, custom React/Vue/Svelte code, responsive styling &amp; micro-interactions.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {["React / Vue", "UI Engine", "Tailwind", "CSS Grid"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 2: BACKEND API LAYER */}
            <div className="vd-result-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>02</div>
                <div style={{ fontSize: "22px" }}>⚙️</div>
              </div>
              <div className="vd-result-label">Backend API Layer</div>
              <div className="vd-result-desc">
                NestJS, Express &amp; FastAPI microservices with GraphQL DataLoaders and REST endpoint routing.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {["NestJS", "FastAPI", "GraphQL", "REST"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 3: DATABASE & CACHE */}
            <div className="vd-result-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>03</div>
                <div style={{ fontSize: "22px" }}>🗄️</div>
              </div>
              <div className="vd-result-label">Database &amp; Cache</div>
              <div className="vd-result-desc">
                PostgreSQL with Prisma ORM, Supabase, and Redis edge caching for sub-millisecond lookups.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {["Postgres", "Prisma", "Supabase", "Redis"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 4: EDGE CDN DELIVERY */}
            <div className="vd-result-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>04</div>
                <div style={{ fontSize: "22px" }}>☁️</div>
              </div>
              <div className="vd-result-label">Edge CDN Delivery</div>
              <div className="vd-result-desc">
                Global Vercel Edge Network &amp; Cloudflare CDN asset delivery with automated CI/CD pipelines.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {["Vercel Edge", "Cloudflare", "Docker", "CI/CD"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 5: TESTING & QA SUITE */}
            <div className="vd-result-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>05</div>
                <div style={{ fontSize: "22px" }}>🧪</div>
              </div>
              <div className="vd-result-label">Testing &amp; QA Suite</div>
              <div className="vd-result-desc">
                Automated end-to-end testing, visual regression tools, and unit test suites for bulletproof reliability.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {["Playwright", "Vitest", "CI Tests", "Linting"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 6: OBSERVABILITY & MONITORING */}
            <div className="vd-result-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>06</div>
                <div style={{ fontSize: "22px" }}>📈</div>
              </div>
              <div className="vd-result-label">Observability &amp; Metrics</div>
              <div className="vd-result-desc">
                Real-time error tracking, serverless logs instrumentation, and automated Core Web Vitals reports.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {["Sentry", "Vercel Logs", "Analytics", "Core Vitals"].map((pill, i) => (
                    <span key={i} style={{ background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0", padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{pill}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 2c. CORE WEB VITALS & LIGHTHOUSE PERFORMANCE SHOWCASE ─── */}
        <section style={{ background: "#f8fafc", padding: "48px 24px 80px 24px", borderTop: "none" }}>
          <div className="perf-section-grid" style={{ 
            display: "grid", 
            gridTemplateColumns: "1.1fr 1.2fr", 
            gap: "48px", 
            alignItems: "center",
            maxWidth: "1150px", 
            margin: "0 auto" 
          }}>
            {/* Left Column: Heading & Text */}
            <div style={{ textAlign: "left" }}>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.15", letterSpacing: "-1.2px", margin: "0 0 16px 0" }}>
                Lighthouse 95+ Core Web Vitals Benchmark
              </h2>
              <p style={{ color: "#475569", fontSize: "15px", fontWeight: "600", margin: 0, lineHeight: "1.65" }}>
                We engineer custom frontends optimized for lightning-fast delivery, search engine ranking, and responsive user experiences. Our architecture guarantees a 95+ score across all Core Web Vitals metrics by eliminating render-blocking scripts, optimizing image assets, and caching payloads at the global edge to maximize user conversion.
              </p>
            </div>

            {/* Right Column: Grid of 4 Cards */}
            <div className="perf-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              
              <div className="perf-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "18px", padding: "22px 18px", textAlign: "center", transition: "all 0.3s ease", boxShadow: "0 10px 25px rgba(15,23,42,0.02)" }}>
                <div style={{ fontSize: "32px", fontWeight: "900", background: "linear-gradient(135deg, #b45309, #ca8a04)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: "1.1", marginBottom: "6px", display: "inline-block" }}>98/100</div>
                <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#0f172a", marginBottom: "2px" }}>Lighthouse Performance</div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>Google Audit SLA Target</div>
              </div>

              <div className="perf-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "18px", padding: "22px 18px", textAlign: "center", transition: "all 0.3s ease", boxShadow: "0 10px 25px rgba(15,23,42,0.02)" }}>
                <div style={{ fontSize: "32px", fontWeight: "900", background: "linear-gradient(135deg, #0f172a, #334155)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: "1.1", marginBottom: "6px", display: "inline-block" }}>0.4s</div>
                <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#0f172a", marginBottom: "2px" }}>Largest Contentful Paint</div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>LCP Target &lt; 1.2s</div>
              </div>

              <div className="perf-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "18px", padding: "22px 18px", textAlign: "center", transition: "all 0.3s ease", boxShadow: "0 10px 25px rgba(15,23,42,0.02)" }}>
                <div style={{ fontSize: "32px", fontWeight: "900", background: "linear-gradient(135deg, #0f172a, #334155)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: "1.1", marginBottom: "6px", display: "inline-block" }}>12ms</div>
                <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#0f172a", marginBottom: "2px" }}>First Input Delay</div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>Instant Touch Response</div>
              </div>

              <div className="perf-card" style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "18px", padding: "22px 18px", textAlign: "center", transition: "all 0.3s ease", boxShadow: "0 10px 25px rgba(15,23,42,0.02)" }}>
                <div style={{ fontSize: "32px", fontWeight: "900", background: "linear-gradient(135deg, #b45309, #ca8a04)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: "1.1", marginBottom: "6px", display: "inline-block" }}>-35%</div>
                <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#0f172a", marginBottom: "2px" }}>Server Spend Reduction</div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>Lower Edge Hosting Cost</div>
              </div>

            </div>
          </div>

          <style>{`
            .perf-card:hover {
              transform: translateY(-6px);
              border-color: #cbd5e1 !important;
              box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08) !important;
            }
            @media (max-width: 1024px) {
              .perf-section-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
            }
            @media (max-width: 640px) {
              .perf-cards-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        <WebDevMoreSections />

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

        <section className="vd-cta-section" id="get-started">
          <div className="vd-cta-inner">
            <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto" }}>Free Architecture Call</div>
            <div className="vd-cta-title">Have a site or product UI? <span>Let&apos;s scope it.</span></div>
            <p className="vd-cta-desc">
              Tell us what you need to ship — a marketing site, a dashboard or a CMS rebuild. Within 48 hours you will get a stack recommendation and a fixed, itemized proposal.
            </p>
            <div className="vd-cta-btns">
              <Link href="/contact" className="vd-btn-primary">Start Your Project →</Link>
              <Link href="/services" className="vd-btn-ghost">View All Services</Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
