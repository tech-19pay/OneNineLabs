import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Custom Mobile App Development & Modern UIs | OneNineLabs",
  description: "High-performance native and cross-platform mobile apps engineered for speed, offline synchronization, and responsive interfaces.",
  keywords: ["mobile app development", "custom mobile apps", "UI design system", "offline first apps", "mobile application agency"],
  alternates: { canonical: "/services/mobile-apps", languages: { "en-US": "/services/mobile-apps", en: "/services/mobile-apps", "x-default": "/services/mobile-apps" } },
  openGraph: { title: "Custom Mobile App Development & Modern UI Apps | OneNineLabs", description: "Native & cross-platform mobile apps engineered for speed, offline sync & responsive user experiences.", url: "https://oneninelabs.com/services/mobile-apps", type: "website" },
  robots: { index: true, follow: true },
};

const PRIMARY = "#10b981";
const GRAD_FROM = "#065f46";
const GRAD_TO = "#10b981";
const GLOW = "rgba(16,185,129,0.15)";

const faqs = [
  { q: "Do you support both major mobile platforms?", a: "Yes — we develop custom mobile applications that run smoothly on both major device platforms. We build using either shared single-codebase adapters or dedicated native platform stacks depending on your performance objectives." },
  { q: "Can the mobile app function without internet?", a: "Yes — we build apps with offline-first synchronization. This allows users to read, write, and interact with the application when offline; data is cached locally and automatically queued to sync when internet connection returns." },
  { q: "How do you handle store submission and approval?", a: "We manage the entire submission pipeline end-to-end, including code signing, beta testing configurations, metadata assets, store checklist compliance reviews, and final launch submissions." },
  { q: "Who owns the source code and design assets?", a: "You receive full, exclusive ownership of all code repositories, asset files, Figma design specifications, and deployment pipelines upon project handover." }
];

const faqs = [
  { q: "Native, hybrid or cross-platform — which is best for me?", a: "For a single iOS+Android product we typically recommend React Native or Flutter (95% code reuse, 60FPS). For graphics-heavy or OS-deep apps we build native Swift or Kotlin." },
  { q: "Can my app work offline?", a: "Yes — we use SQLite/WatermelonDB with background queue sync, so users keep working offline and changes sync automatically when connectivity returns." },
  { q: "Will you help with App Store and Play Store launch?", a: "Yes — we handle store submission, App Store Optimization (ASO), privacy labels, and compliance so your app gets approved and ranks." },
  { q: "How do you push updates without store reviews?", a: "We configure Expo EAS / CodePush over-the-air updates so you can ship bug fixes instantly, reserving store releases for major versions." },
  { q: "Do you support biometric login?", a: "Yes — FaceID, TouchID and Android BiometricPrompt are implemented securely with the platform keystore." },
  { q: "Can you connect my app to our backend?", a: "Yes — we build REST/GraphQL backends and realtime WebSockets on Node.js/Python, integrated with your existing systems and APIs." },
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
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <div className="vd-wrap">

        {/* ─── 1. HERO: DUAL OVERLAPPING 3D ISOMETRIC APP SCREENS ─── */}
        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)",
          padding: "135px 24px 90px 24px",
          borderBottom: "1px solid #e2e8f0",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          <div className="hero-main-grid" style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 520px",
            gap: "40px",
            alignItems: "center"
          }}>
            {/* Left Content Column */}
            <div className="vd-hero-left" style={{ textAlign: "left", zIndex: 2 }}>

              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(34px, 4.2vw, 54px)",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1.12",
                letterSpacing: "-1.5px",
                marginBottom: "20px",
                maxWidth: "540px"
              }}>
                5-Star Rated Native &amp; <span className="highlight-text">Cross-Platform Apps</span>
              </h1>

              <p style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.65",
                marginBottom: "32px",
                maxWidth: "490px",
                fontWeight: "400"
              }}>
                We craft beautiful mobile applications with 60FPS smooth animations, offline-first sync architecture, and instant store release deployment.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <Link
                  href="/contact"
                  style={{
                    background: "#0f172a",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "99px",
                    padding: "15px 32px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
                    transition: "all 0.2s ease"
                  }}
                  className="vd-btn-primary"
                >
                  Start Mobile App Project
                  <span style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255, 255, 255, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px"
                  }}>
                    →
                  </span>
                </Link>
              </div>

              {/* Mobile Key Stats */}
              <div className="hero-stats-bar" style={{
                display: "flex",
                gap: "28px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0",
                flexWrap: "wrap"
              }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", lineHeight: "1.1" }}>4.9★</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Store Ratings</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#059669", lineHeight: "1.1" }}>60FPS</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Smooth Motion UI</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981", lineHeight: "1.1" }}>100%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Offline Sync</div>
                </div>
              </div>
            </div>

            {/* Right Column: Overlapping 3D Isometric Screen Mockups */}
            <div className="vd-hero-right" style={{
              position: "relative",
              height: "480px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: "1000px"
            }}>

              {/* Background Canvas Glow */}
              <div className="phone-screen-glow" />

              {/* Screen 1: Top / Foreground Active App UI */}
              <div className="iso-screen top" style={{
                width: "250px",
                height: "380px",
                background: "#0f172a",
                borderRadius: "28px",
                border: "2px solid rgba(255,255,255,0.1)",
                boxShadow: "-15px 25px 50px rgba(15, 23, 42, 0.25)",
                padding: "16px",
                color: "#ffffff",
                position: "absolute",
                zIndex: 5,
                transform: "rotateY(-18deg) rotateX(16deg) translateZ(30px) translateX(20px)",
                transition: "all 0.4s ease",
                textAlign: "left"
              }}>
                {/* Simulated Notch */}
                <div style={{ width: "70px", height: "12px", background: "#1e293b", borderRadius: "99px", margin: "0 auto 18px auto" }} />

                {/* Active Graph UI */}
                <div style={{ background: "linear-gradient(135deg, #059669, #10b981)", borderRadius: "18px", padding: "14px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "8px", fontWeight: "900", color: "#a7f3d0" }}>REAL-TIME STATUS</span>
                  <h4 style={{ fontSize: "18px", fontWeight: "900", margin: "2px 0 6px 0", display: "flex", alignItems: "center", gap: "6px" }}>
                    99.9% Sync <span className="sync-pulse-dot" />
                  </h4>
                  <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "2px", overflow: "hidden", position: "relative" }}>
                    <div className="hero-continuous-loader" style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "40%", background: "#ffffff", borderRadius: "2px" }} />
                  </div>
                </div>

                {/* Queue list simulation */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ background: "#1e293b", borderRadius: "12px", padding: "8px 12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "10px", color: "#cbd5e1" }}>Local Database</span>
                      <span style={{ fontSize: "8px", color: "#34d399" }}>Synchronized</span>
                    </div>
                    <div style={{ width: "100%", height: "2px", background: "#111827", borderRadius: "1px", overflow: "hidden" }}>
                      <div style={{ width: "100%", height: "100%", background: "#10b981" }} />
                    </div>
                  </div>

                  <div style={{ background: "#1e293b", borderRadius: "12px", padding: "8px 12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "10px", color: "#cbd5e1" }}>Pending Sync Queue</span>
                      <span style={{ fontSize: "8px", color: "#10b981" }}>Active</span>
                    </div>
                    <div style={{ width: "100%", height: "2px", background: "#111827", borderRadius: "1px", overflow: "hidden" }}>
                      <div className="mini-progress-fill pending" style={{ height: "100%", background: "#10b981" }} />
                    </div>
                  </div>

                  <div style={{ background: "#1e293b", borderRadius: "12px", padding: "8px 12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "10px", color: "#cbd5e1" }}>Uptime SLA</span>
                      <span style={{ fontSize: "8px", color: "#34d399" }}>99.9% Uptime</span>
                    </div>
                    <div style={{ width: "100%", height: "2px", background: "#111827", borderRadius: "1px", overflow: "hidden" }}>
                      <div style={{ width: "99.9%", height: "100%", background: "#10b981" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen 2: Bottom / Background Card layout */}
              <div className="iso-screen bottom" style={{
                width: "250px",
                height: "380px",
                background: "#ffffff",
                borderRadius: "28px",
                border: "2px solid #e2e8f0",
                boxShadow: "-5px 10px 30px rgba(0, 0, 0, 0.05)",
                padding: "16px",
                color: "#0f172a",
                position: "absolute",
                zIndex: 3,
                transform: "rotateY(-18deg) rotateX(16deg) translateZ(-40px) translateX(-90px) translateY(30px)",
                opacity: 0.8,
                transition: "all 0.4s ease",
                textAlign: "left"
              }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#cbd5e1", margin: "0 auto 20px auto" }} />

                {/* Card item */}
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "16px", padding: "12px", background: "#f8fafc", marginBottom: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", color: "#94a3b8", fontWeight: "700" }}>
                    <span>QA DISPATCH</span>
                    <span>10m ago</span>
                  </div>
                  <p style={{ fontSize: "10px", fontWeight: "800", color: "#0f172a", margin: "4px 0 0 0" }}>
                    Unit test suite passed cleanly.
                  </p>
                </div>

                <div style={{ border: "1px solid #e2e8f0", borderRadius: "16px", padding: "12px", background: "#f8fafc", marginBottom: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", color: "#94a3b8", fontWeight: "700" }}>
                    <span>BUILD PIPELINE</span>
                    <span>15m ago</span>
                  </div>
                  <p style={{ fontSize: "10px", fontWeight: "800", color: "#059669", margin: "4px 0 0 0" }}>
                    ✓ Compiled v1.0.4 binary.
                  </p>
                </div>

                <div style={{ border: "1px solid #e2e8f0", borderRadius: "16px", padding: "12px", background: "#f8fafc" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", color: "#94a3b8", fontWeight: "700" }}>
                    <span>STORE CONFLICT</span>
                    <span>Resolved</span>
                  </div>
                  <p style={{ fontSize: "10px", fontWeight: "800", color: "#0f172a", margin: "4px 0 0 0" }}>
                    Store assets synchronized.
                  </p>
                </div>
              </div>

            </div>

          </div>

          <style>{`
            .highlight-text {
              background: linear-gradient(135deg, #059669, #10b981);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            
            .vd-btn-primary:hover {
              background: #ffffff !important;
              color: #0f172a !important;
              border-color: #0f172a !important;
              transform: translateY(-2px);
              box-shadow: 0 15px 30px rgba(15, 23, 42, 0.15) !important;
            }

            .phone-screen-glow {
              position: absolute;
              top: -30%;
              left: -30%;
              width: 160%;
              height: 160%;
              background: radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 60%);
              pointer-events: none;
              z-index: 1;
            }

            /* Interactive 3D hover effect */
            .vd-hero-right:hover .iso-screen.top {
              transform: rotateY(-12deg) rotateX(12deg) translateZ(50px) translateX(25px) translateY(-10px) !important;
              box-shadow: -25px 35px 65px rgba(15, 23, 42, 0.3) !important;
            }
            .vd-hero-right:hover .iso-screen.bottom {
              transform: rotateY(-22deg) rotateX(20deg) translateZ(-60px) translateX(-100px) translateY(45px) !important;
              opacity: 0.9 !important;
            }

            @keyframes continuousLoad {
              0% { left: -40%; }
              100% { left: 100%; }
            }
            .hero-continuous-loader {
              animation: continuousLoad 1.8s infinite linear;
            }

            @keyframes pulseSync {
              0%, 100% { opacity: 0.4; transform: scale(0.85); }
              50% { opacity: 1; transform: scale(1.15); }
            }
            .sync-pulse-dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #34d399;
              box-shadow: 0 0 8px #34d399;
              display: inline-block;
              animation: pulseSync 1.5s infinite ease-in-out;
            }

            @keyframes loadPendingQueue {
              0%, 100% { width: 15%; }
              50% { width: 85%; }
            }
            .mini-progress-fill.pending {
              animation: loadPendingQueue 3.5s ease-in-out infinite;
            }

            @media (max-width: 1024px) {
              .hero-main-grid {
                grid-template-columns: 1fr !important;
                gap: 50px !important;
              }
              .vd-hero-right {
                justify-content: center;
                height: 400px;
              }
              .iso-screen.top {
                transform: rotateY(0deg) rotateX(0deg) translateZ(0px) translateX(20px) !important;
              }
              .iso-screen.bottom {
                transform: rotateY(0deg) rotateX(0deg) translateZ(0px) translateX(-110px) translateY(20px) !important;
              }
              .vd-hero-right:hover .iso-screen.top, .vd-hero-right:hover .iso-screen.bottom {
                transform: none !important;
              }
            }
            @media (max-width: 640px) {
              .vd-hero-section {
                padding: 100px 16px 60px 16px !important;
              }
              .vd-hero-right {
                display: none !important;
              }
              .hero-stats-bar {
                gap: 16px !important;
              }
            }
          `}</style>
        </section>

        {/* ─── 2. CAPABILITIES: SPLIT LAYOUT — LEFT DATA + RIGHT ANIMATED MOCK ─── */}
        <section style={{ background: "#ffffff", padding: "96px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div className="cap-split-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>

            {/* ── LEFT: Section Heading + Feature Rows ── */}
            <div>
              <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase", color: "#059669", display: "block", marginBottom: "14px" }}>
                OUR CAPABILITIES
              </span>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-1.2px", margin: "0 0 16px 0" }}>
                Our Mobile Development Stack
              </h2>
              <p style={{ color: "#64748b", fontSize: "15px", fontWeight: "500", lineHeight: "1.7", margin: "0 0 40px 0", maxWidth: "440px" }}>
                Custom native and cross-platform mobile interfaces engineered for high-performance, offline-first UIs.
              </p>

              {/* Feature Rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>

                {/* Row 1 */}
                <div className="cap-feat-row" style={{ display: "flex", alignItems: "flex-start", gap: "18px", padding: "20px 0", borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>High-Performance Native UIs</span>
                      <span style={{ fontSize: "13px", fontWeight: "900", color: "#059669" }}>60 FPS</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>GPU-accelerated components with hardware-composited animations and smooth 60FPS interactions.</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="cap-feat-row" style={{ display: "flex", alignItems: "flex-start", gap: "18px", padding: "20px 0", borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>Adaptive Cross-Platform Codebase</span>
                      <span style={{ fontSize: "13px", fontWeight: "900", color: "#059669" }}>92% shared</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Single codebase delivers native-grade performance across both major device platforms simultaneously.</p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="cap-feat-row" style={{ display: "flex", alignItems: "flex-start", gap: "18px", padding: "20px 0", borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>Offline First Sync Engine</span>
                      <span style={{ fontSize: "13px", fontWeight: "900", color: "#059669" }}>100% offline</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Local DB writes queued automatically and synced on reconnect with zero data loss or conflict.</p>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="cap-feat-row" style={{ display: "flex", alignItems: "flex-start", gap: "18px", padding: "20px 0" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>Live Push Notification Hubs</span>
                      <span style={{ fontSize: "13px", fontWeight: "900", color: "#059669" }}>&lt; 98ms</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Real-time push alerts with background polling, active WebSocket feeds, and server-sent events.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* ── RIGHT: Ultra-Realistic Animated Mobile Device Mockup ── */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: "700px"
            }}>
              {/* Soft background glow */}
              <div style={{ position: "absolute", width: "450px", height: "450px", background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 60%)", borderRadius: "50%", pointerEvents: "none", zIndex: 0 }} />

              {/* Ultra-Realistic Mobile Phone Frame (Outer Metallic Band) */}
              <div style={{
                width: "310px",
                height: "630px",
                background: "linear-gradient(135deg, #e2e8f0 0%, #ffffff 20%, #94a3b8 50%, #ffffff 80%, #cbd5e1 100%)",
                borderRadius: "50px",
                padding: "3px",
                boxShadow: "inset 0 0 2px rgba(255,255,255,0.8), 0 35px 60px -15px rgba(15, 23, 42, 0.4)",
                position: "relative",
                zIndex: 1
              }}>
                {/* Hardware Buttons */}
                <div style={{ position: "absolute", right: "-2px", top: "130px", width: "3px", height: "45px", background: "linear-gradient(to bottom, #94a3b8, #cbd5e1)", borderRadius: "0 2px 2px 0", boxShadow: "1px 0 2px rgba(0,0,0,0.2)" }} />
                <div style={{ position: "absolute", left: "-2px", top: "120px", width: "3px", height: "35px", background: "linear-gradient(to bottom, #94a3b8, #cbd5e1)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.2)" }} />
                <div style={{ position: "absolute", left: "-2px", top: "165px", width: "3px", height: "55px", background: "linear-gradient(to bottom, #94a3b8, #cbd5e1)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.2)" }} />

                {/* Inner Black Bezel */}
                <div style={{
                  width: "100%",
                  height: "100%",
                  background: "#0f172a",
                  borderRadius: "48px",
                  padding: "8px",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)"
                }}>
                  {/* Actual Screen Content Area */}
                  <div style={{
                    width: "100%",
                    height: "100%",
                    background: "#ffffff",
                    borderRadius: "40px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    {/* Screen Inner Glare */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(150deg, rgba(255,255,255,0.6) 0%, transparent 60%)", pointerEvents: "none", zIndex: 10 }} />
                    
                    {/* Dynamic Island (Notch & Sensors) */}
                    <div style={{ position: "absolute", top: "8px", left: "50%", transform: "translateX(-50%)", width: "95px", height: "26px", background: "#000000", borderRadius: "20px", zIndex: 20, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 8px", boxShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "radial-gradient(circle at 3px 3px, #1e293b, #000)" }} />
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "radial-gradient(circle at 2px 2px, #334155, #000)" }} />
                    </div>
                    
                    {/* Home Bar (Bottom) */}
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", width: "120px", height: "5px", background: "#cbd5e1", borderRadius: "10px", zIndex: 20 }} />
                    
                    {/* ──── APP UI INSIDE THE SCREEN ──── */}
                    <div style={{ padding: "48px 16px 16px 16px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "16px", fontWeight: "900", color: "#0f172a" }}>Overview</span>
                          <span style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>Live Architecture Dashboard</span>
                        </div>
                        <div className="pulse-avatar" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #10b981, #059669)", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 2px 8px rgba(16,185,129,0.3)" }}>
                          <div style={{ width: "8px", height: "8px", background: "#ffffff", borderRadius: "50%" }} />
                        </div>
                      </div>
                    </div>

                    {/* App UI Body - Scrollable content area */}
                    <div className="app-mock-scroll" style={{ flex: 1, padding: "16px", background: "#ffffff", display: "flex", flexDirection: "column", gap: "14px", overflowY: "auto", position: "relative", paddingBottom: "30px" }}>
                      
                      {/* Animated Chart Card */}
                      <div style={{ border: "1px solid #e2e8f0", borderRadius: "16px", padding: "14px", background: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                          <span style={{ fontSize: "10px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>Render Performance</span>
                          <span style={{ fontSize: "11px", fontWeight: "900", color: "#10b981" }}>60 FPS</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "45px" }}>
                          {[40, 70, 45, 90, 60, 85, 100].map((h, i) => (
                            <div key={i} style={{ flex: 1, background: i === 6 ? "#10b981" : "#e2e8f0", borderRadius: "3px", height: `${h}%`, animation: `barRise 1.${i}s ease-out infinite alternate` }} />
                          ))}
                        </div>
                      </div>

                      {/* Sync Status Component */}
                      <div style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)", borderRadius: "16px", padding: "14px", color: "#ffffff", boxShadow: "0 4px 12px rgba(15,23,42,0.15)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                            <span style={{ fontSize: "11px", fontWeight: "700" }}>Offline Sync State</span>
                          </div>
                          <span className="sync-pulse-dot" style={{ width: "6px", height: "6px", background: "#10b981", borderRadius: "50%" }} />
                        </div>
                        <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                          <div className="hero-continuous-loader" style={{ height: "100%", width: "40%", background: "linear-gradient(90deg, #10b981, #34d399)" }} />
                        </div>
                      </div>

                      {/* Network & Codebase Stats Grid */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={{ fontSize: "9px", fontWeight: "800", color: "#64748b", textTransform: "uppercase" }}>Gateway Latency</span>
                          <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                            <span style={{ fontSize: "16px", fontWeight: "900", color: "#0f172a" }}>24</span>
                            <span style={{ fontSize: "10px", fontWeight: "700", color: "#94a3b8" }}>ms</span>
                          </div>
                          <svg viewBox="0 0 40 12" style={{ width: "100%", height: "12px", marginTop: "2px" }}>
                            <path d="M0,10 L10,5 L20,8 L30,3 L40,9" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={{ fontSize: "9px", fontWeight: "800", color: "#64748b", textTransform: "uppercase" }}>Memory Heap</span>
                          <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                            <span style={{ fontSize: "16px", fontWeight: "900", color: "#0f172a" }}>48</span>
                            <span style={{ fontSize: "10px", fontWeight: "700", color: "#94a3b8" }}>MB</span>
                          </div>
                          <div style={{ width: "100%", height: "4px", background: "#e2e8f0", borderRadius: "2px", marginTop: "6px", overflow: "hidden" }}>
                            <div style={{ width: "42%", height: "100%", background: "#3b82f6" }} />
                          </div>
                        </div>
                      </div>

                      {/* Active Services List (More Data) */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span style={{ fontSize: "10px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", paddingLeft: "4px" }}>Background Workers</span>
                        
                        <div style={{ display: "flex", gap: "12px", alignItems: "center", background: "#ffffff", padding: "10px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
                          </div>
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a" }}>Push Listener</span>
                              <span style={{ fontSize: "9px", fontWeight: "700", color: "#10b981", background: "#d1fae5", padding: "2px 6px", borderRadius: "10px" }}>Active</span>
                            </div>
                            <span style={{ fontSize: "9px", fontWeight: "600", color: "#64748b" }}>WebSocket WSS:// secure</span>
                          </div>
                        </div>

                        <div style={{ display: "flex", gap: "12px", alignItems: "center", background: "#ffffff", padding: "10px", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          </div>
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a" }}>Local DB Cache</span>
                              <span style={{ fontSize: "9px", fontWeight: "700", color: "#d97706", background: "#fef3c7", padding: "2px 6px", borderRadius: "10px" }}>Synced</span>
                            </div>
                            <span style={{ fontSize: "9px", fontWeight: "600", color: "#64748b" }}>SQLite encrypted volume</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              
              {/* Extra Data Under Mockup */}
              <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "12px", background: "#ffffff", padding: "12px 20px", borderRadius: "100px", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", zIndex: 10 }}>
                <span style={{ width: "8px", height: "8px", background: "#10b981", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 0 3px rgba(16,185,129,0.2)" }} />
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>Test Device Pipeline Active</span>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>|</span>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b" }}>Simulating iOS & Android Renders</span>
              </div>

            </div>

          </div>

          <style>{`
            .cap-split-grid {
              display: grid;
            }
            .cap-feat-row {
              transition: background 0.2s ease;
              border-radius: 8px;
              margin: 0 -8px;
              padding-left: 8px !important;
              padding-right: 8px !important;
            }
            .cap-feat-row:hover {
              background: #f0fdf4;
            }
            @keyframes barRise {
              0% { height: 10%; opacity: 0.5; }
              100% { opacity: 1; }
            }
            @media (max-width: 1024px) {
              .cap-split-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>


        {/* ─── 2b. ARCHITECTURE: ORBITAL PIPELINE GRID ─── */}
        <section style={{ padding: "96px 24px", background: "#f8fafc", position: "relative", overflow: "hidden" }}>

          {/* Background decorative rings */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", border: "1px solid rgba(16,185,129,0.08)", borderRadius: "50%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "480px", height: "480px", border: "1px solid rgba(16,185,129,0.12)", borderRadius: "50%", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1150px", margin: "0 auto", position: "relative", zIndex: 1 }}>

            {/* Centered Section Header */}
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase", color: "#059669", display: "block", marginBottom: "14px" }}>
                MOBILE STACK ARCHITECTURE
              </span>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-1.5px", margin: "0 0 18px 0" }}>
                How We Layer Your Mobile Stack
              </h2>
              <p style={{ color: "#64748b", fontSize: "16px", fontWeight: "500", lineHeight: "1.65", maxWidth: "560px", margin: "0 auto" }}>
                A high-performance layered pipeline from interface to edge — every layer engineered for speed, resilience, and scale.
              </p>
            </div>

            {/* 3×2 Architecture Grid */}
            <div className="arch-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", position: "relative" }}>

              {/* Card 1 – Presentation UI: layers icon */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px 0 0 0", padding: "36px 28px", textAlign: "left", transition: "all 0.3s ease", position: "relative", boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #059669, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/></svg>
                </div>
                <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>Presentation UI</h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Custom components, responsive styling, and 60FPS fluid motion across every screen size.</p>
                <div className="arch-indicator" style={{ position: "absolute", bottom: "16px", right: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>

              {/* Card 2 – Local Cache: database icon */}
              <div className="arch-card" style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "0", padding: "36px 28px", textAlign: "left", transition: "all 0.3s ease", position: "relative" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #059669, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/></svg>
                </div>
                <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>Local Cache & Storage</h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Local database engines enabling sub-millisecond offline reads with zero latency on cold start.</p>
                <div className="arch-indicator" style={{ position: "absolute", bottom: "16px", right: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>

              {/* Card 3 – Sync & API: refresh/sync icon */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "0 20px 0 0", padding: "36px 28px", textAlign: "left", transition: "all 0.3s ease", position: "relative", boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #059669, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                </div>
                <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>Sync & API Orchestration</h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Background sync queues resolving network conflicts and ensuring consistent data delivery.</p>
                <div className="arch-indicator" style={{ position: "absolute", bottom: "16px", right: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>

              {/* Card 4 – Background Workers: cpu/gear icon */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "0 0 0 20px", padding: "36px 28px", textAlign: "left", transition: "all 0.3s ease", position: "relative", boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #059669, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
                <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>Background Workers</h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Multi-threaded workers handling live sensor feeds, push alerts, and scheduled jobs silently.</p>
                <div className="arch-indicator" style={{ position: "absolute", bottom: "16px", right: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>

              {/* Card 5 – CI/CD Build: git-branch/deploy icon */}
              <div className="arch-card" style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "0", padding: "36px 28px", textAlign: "left", transition: "all 0.3s ease", position: "relative" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #059669, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
                </div>
                <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>Automated CI/CD Build</h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Automated pipelines that compile, sign, test, and push releases directly to app stores on each commit.</p>
                <div className="arch-indicator" style={{ position: "absolute", bottom: "16px", right: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>

              {/* Card 6 – Telemetry: activity/monitor icon */}
              <div className="arch-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "0 0 20px 0", padding: "36px 28px", textAlign: "left", transition: "all 0.3s ease", position: "relative", boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #059669, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>Telemetry & Monitoring</h4>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>Real-time diagnostics, crash reports, and performance dashboards visible from day one of deployment.</p>
                <div className="arch-indicator" style={{ position: "absolute", bottom: "16px", right: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>

            </div>


            {/* Bottom stat bar */}
            <div className="arch-stat-bar" style={{ display: "flex", justifyContent: "center", gap: "48px", marginTop: "56px", paddingTop: "40px", borderTop: "1px solid #e2e8f0", flexWrap: "wrap" }}>
              {[["6", "Core Layers"], ["99.9%", "Uptime SLA"], ["<80ms", "Cold Start Target"], ["2×", "Faster Releases"]].map(([val, lbl]) => (
                <div key={lbl} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "28px", fontWeight: "900", color: "#059669", letterSpacing: "-1px", lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginTop: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>{lbl}</div>
                </div>
              ))}
            </div>

          </div>

          <style>{`
            .arch-card:hover {
              background: #f0fdf4 !important;
              border-color: #10b981 !important;
              transform: translateY(-4px);
              box-shadow: 0 12px 32px rgba(16,185,129,0.1) !important;
              z-index: 1;
            }
            .arch-card:hover .arch-indicator {
              box-shadow: 0 0 0 4px rgba(16,185,129,0.2);
            }
            @media (max-width: 768px) {
              .arch-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 12px !important;
              }
              .arch-card { border-radius: 16px !important; padding: 24px 18px !important; }
              .arch-stat-bar { gap: 24px !important; }
            }
            @media (max-width: 480px) {
              .arch-grid {
                grid-template-columns: 1fr !important;
                gap: 10px !important;
              }
              .arch-stat-bar { gap: 16px !important; }
            }
          `}</style>
        </section>

        {/* ─── 2b2. LANGUAGES & FRAMEWORKS (PREMIUM BENTO BOX) ─── */}
        <section style={{ background: "#ffffff", padding: "120px 24px", borderTop: "1px solid #e2e8f0", overflow: "hidden", position: "relative" }}>
          
          {/* Subtle Background Glows */}
          <div style={{ position: "absolute", top: "20%", left: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1150px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase", color: "#3b82f6", display: "inline-block", marginBottom: "16px", padding: "6px 20px", background: "#eff6ff", borderRadius: "99px", border: "1px solid #bfdbfe", boxShadow: "0 4px 10px rgba(59,130,246,0.1)" }}>
                Core Technologies
              </span>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "900", color: "#0f172a", margin: "0 0 20px 0", letterSpacing: "-1px" }}>
                Industry Leading Frameworks
              </h2>
              <p style={{ color: "#64748b", fontSize: "16px", fontWeight: "500", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" }}>
                We don't limit ourselves to one stack. We choose the right tool for the job, balancing rapid cross-platform delivery with uncompromised native performance.
              </p>
            </div>

            <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              
              {/* React Native (Spans 2 columns) */}
              <div className="bento-card bento-span-2" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)", borderRadius: "32px", padding: "48px", position: "relative", overflow: "hidden", color: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "340px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "400px", height: "400px", opacity: "0.03", pointerEvents: "none" }}>
                  <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%"><circle cx="0" cy="0" r="2.05" fill="#fff"/><g stroke="#fff" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(56,189,248,0.3)", boxShadow: "0 0 20px rgba(56,189,248,0.15)" }}>
                      <div style={{ width: "32px", height: "32px" }}>
                        <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%"><circle cx="0" cy="0" r="2.05" fill="#38bdf8"/><g stroke="#38bdf8" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                      </div>
                    </div>
                    <span style={{ background: "rgba(255,255,255,0.1)", padding: "4px 12px", borderRadius: "99px", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>Cross-Platform</span>
                  </div>
                  <h3 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "16px", letterSpacing: "-0.5px" }}>React Native</h3>
                  <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.7", margin: 0, maxWidth: "400px" }}>
                    Our primary choice for 80% of projects. Ship to both iOS and Android simultaneously with a unified JavaScript codebase, powered by a native rendering bridge that feels indistinguishable from pure native apps.
                  </p>
                </div>
              </div>

              {/* Swift / iOS (1 column) */}
              <div className="bento-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "32px", padding: "40px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "340px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ position: "absolute", top: "24px", left: "24px", width: "48px", height: "48px", borderRadius: "14px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e2e8f0" }}>
                  <div style={{ width: "24px", height: "24px", color: "#0f172a" }}>
                    <svg viewBox="0 0 384 512" fill="currentColor" width="100%" height="100%"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.3zM250.8 131c18-21 31.2-49 28.5-76.3-25.1 1.7-55 16.3-73.5 37-14.7 16.3-28.7 45.1-25.2 71.9 28.1 1.9 54.4-12.7 70.2-32.6z"/></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "900", color: "#0f172a", marginBottom: "12px", marginTop: "auto", paddingTop: "80px" }}>Swift & iOS Native</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  For applications requiring deep hardware integration, ARKit, or extreme performance optimization on Apple devices.
                </p>
              </div>

              {/* Kotlin / Android (1 column) */}
              <div className="bento-card" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "32px", padding: "40px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "340px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ position: "absolute", top: "24px", left: "24px", width: "48px", height: "48px", borderRadius: "14px", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #a7f3d0" }}>
                  <div style={{ width: "24px", height: "24px", color: "#059669" }}>
                    <svg viewBox="0 0 448 512" fill="currentColor" width="100%" height="100%"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.2 34.4S16.1 416 28 416H420c11.9 0 22.8-7.4 28-18.9s3.1-25-5.2-34.4l-7.4-8.3C404.3 319.2 387 273.8 387 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v18.8c0 56.5 23.3 110.1 63.4 146.5H48.6C88.7 336.9 112 283.3 112 226.8V208c0-61.9 50.1-112 112-112z"/></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "900", color: "#0f172a", marginBottom: "12px", marginTop: "auto", paddingTop: "80px" }}>Kotlin & Android</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  Modern, robust, and safe programming. We use Kotlin for purely native Android projects to ensure memory safety and speed.
                </p>
              </div>

              {/* Flutter (Spans 2 columns) */}
              <div className="bento-card bento-span-2" style={{ background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)", border: "1px solid #bae6fd", borderRadius: "32px", padding: "48px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "340px", boxShadow: "0 20px 40px rgba(2,132,199,0.08)" }}>
                <div style={{ position: "absolute", bottom: "-40%", right: "-5%", width: "400px", height: "400px", opacity: "0.05", pointerEvents: "none" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%"><path d="M14.314 2.055 2.054 14.315l4.312 4.313 12.26-12.26zm-4.313 12.573L5.688 18.94l4.313 4.313 8.356-8.355zM14.314 10.683l-4.313 4.312 4.313 4.312h8.356l-8.356-8.624z"/></svg>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #7dd3fc", boxShadow: "0 10px 20px rgba(2,132,199,0.1)" }}>
                      <div style={{ width: "32px", height: "32px", color: "#0284c7" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%"><path d="M14.314 2.055 2.054 14.315l4.312 4.313 12.26-12.26zm-4.313 12.573L5.688 18.94l4.313 4.313 8.356-8.355zM14.314 10.683l-4.313 4.312 4.313 4.312h8.356l-8.356-8.624z"/></svg>
                      </div>
                    </div>
                    <span style={{ background: "rgba(2,132,199,0.1)", color: "#0369a1", padding: "4px 12px", borderRadius: "99px", fontSize: "11px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase" }}>High Fidelity UI</span>
                  </div>
                  <h3 style={{ fontSize: "28px", fontWeight: "900", color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.5px" }}>Flutter (Dart)</h3>
                  <p style={{ fontSize: "15px", color: "#334155", lineHeight: "1.7", margin: 0, maxWidth: "450px" }}>
                    When your application relies on highly custom, complex animations and non-standard interface designs, we leverage Flutter's powerful Skia/Impeller rendering engine to paint every pixel perfectly at 60-120fps.
                  </p>
                </div>
              </div>

              {/* Backend & Infrastructure (Spans 3 columns) */}
              <div className="bento-card" style={{ gridColumn: "1 / -1", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "32px", padding: "48px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
                  <div style={{ display: "flex", gap: "24px", marginBottom: "32px", flexWrap: "wrap", justifyContent: "center" }}>
                    
                    {/* Node.js Icon */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e2e8f0" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V6.9z"/><path d="M12 22V12"/><path d="M12 12l8.5-4.6"/><path d="M12 12L3.5 7.4"/></svg>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b" }}>Node.js</span>
                    </div>

                    {/* Firebase Icon */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #fde68a" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13.5l4-7.5 4 7.5M11 6l4-7.5 6 15z"/><path d="M3 13.5l8 9.5 10-2z"/></svg>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b" }}>Firebase</span>
                    </div>

                    {/* AWS Icon */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e2e8f0" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0-9 9v0c0 4.97 4.03 9 9 9h9v-9a9 9 0 0 0-9-9z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b" }}>AWS Cloud</span>
                    </div>

                    {/* PostgreSQL Icon */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#f0f9ff", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #bae6fd" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b" }}>PostgreSQL</span>
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.5px" }}>Backend & Cloud Infrastructure</h3>
                  <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7", margin: 0 }}>
                    A great mobile app is only as strong as its backend. We wire up high-performance REST and GraphQL APIs using Node.js, backed by scalable databases (PostgreSQL/Firebase), and hosted on military-grade AWS infrastructure for 99.99% uptime.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <style>{`
            .bento-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
            .bento-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important; }
            .bento-span-2 { grid-column: span 2; }
            
            @media (max-width: 992px) {
              .bento-grid { grid-template-columns: 1fr 1fr !important; }
              .bento-span-2 { grid-column: span 2 !important; }
            }
            @media (max-width: 640px) {
              .bento-grid { grid-template-columns: 1fr !important; }
              .bento-span-2 { grid-column: span 1 !important; }
              .bento-card { padding: 32px !important; min-height: auto !important; }
            }
          `}</style>
        </section>

        {/* ─── 2c. PERFORMANCE: CIRCULAR TELEMETRY GAUGE & METRIC ROWS ─── */}
        <section style={{ background: "#ffffff", padding: "96px 24px", borderTop: "1px solid #e2e8f0" }}>
          <div className="perf-section-grid" style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1.2fr",
            gap: "56px",
            alignItems: "center",
            maxWidth: "1150px",
            margin: "0 auto"
          }}>
            {/* Left Column: Heading, Text & Circular Progress Gauge */}
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <h2 style={{ fontSize: "clamp(22px, 3.5vw, 40px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.15", letterSpacing: "-1px", margin: "0 0 16px 0" }}>
                  Mobile Performance Showcase
                </h2>
                <p style={{ color: "#475569", fontSize: "15px", fontWeight: "600", margin: 0, lineHeight: "1.65" }}>
                  We design applications that pass store checklists instantly, load instantly, and maintain outstanding responsiveness under complex workloads.
                </p>
              </div>

              {/* SVG circular progress ring representation */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", background: "#f8fafc", padding: "20px", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
                <svg width="80" height="80" viewBox="0 0 36 36" style={{ overflow: "visible" }}>
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle className="gauge-fill" cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="3"
                    strokeDasharray="99.9 100" strokeDashoffset="100" strokeLinecap="round"
                    style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }} />
                  <text x="18" y="20.5" fontFamily="monospace" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#0f172a">99.9%</text>
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>Crash-Free Rating</div>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>Production SLA Guarantee</div>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Metric Progress Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Metric 1 */}
              <div className="metric-progress-row">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>UI Rendering Smoothness</span>
                  <span style={{ fontSize: "14px", fontWeight: "900", color: "#059669" }}>60 FPS</span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }}>
                  <div className="progress-fill fill-1" style={{ height: "100%", borderRadius: "3px" }} />
                </div>
              </div>

              {/* Metric 2 */}
              <div className="metric-progress-row">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>App Cold Start Time</span>
                  <span style={{ fontSize: "14px", fontWeight: "900", color: "#334155" }}>&lt; 1.5s</span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }}>
                  <div className="progress-fill fill-2" style={{ height: "100%", borderRadius: "3px" }} />
                </div>
              </div>

              {/* Metric 3 */}
              <div className="metric-progress-row">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>Network Latency Sync</span>
                  <span style={{ fontSize: "14px", fontWeight: "900", color: "#334155" }}>12ms</span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }}>
                  <div className="progress-fill fill-3" style={{ height: "100%", borderRadius: "3px" }} />
                </div>
              </div>

              {/* Metric 4 */}
              <div className="metric-progress-row">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>Memory Overhead Savings</span>
                  <span style={{ fontSize: "14px", fontWeight: "900", color: "#059669" }}>-40%</span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" }}>
                  <div className="progress-fill fill-4" style={{ height: "100%", borderRadius: "3px" }} />
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @keyframes drawGaugeCircle {
              0%, 100% { stroke-dashoffset: 100; }
              70%, 90% { stroke-dashoffset: 0; }
            }
            .gauge-fill {
              animation: drawGaugeCircle 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            @keyframes fill1 { from { width: 0%; } to { width: 100%; } }
            @keyframes fill2 { from { width: 0%; } to { width: 85%; } }
            @keyframes fill3 { from { width: 0%; } to { width: 95%; } }
            @keyframes fill4 { from { width: 0%; } to { width: 90%; } }

            @keyframes shimmerFlow {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }

            .progress-fill {
              background-size: 200% 100% !important;
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              animation-fill-mode: forwards;
              transition: background 0.3s ease;
            }

            .progress-fill.fill-1 {
              background: linear-gradient(90deg, #10b981 0%, #34d399 50%, #10b981 100%);
              animation-name: fill1, shimmerFlow;
              animation-duration: 2s, 3s;
              animation-iteration-count: infinite, infinite;
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1), linear;
            }
            .progress-fill.fill-2 {
              background: linear-gradient(90deg, #059669 0%, #10b981 50%, #059669 100%);
              animation-name: fill2, shimmerFlow;
              animation-duration: 2s, 3s;
              animation-iteration-count: infinite, infinite;
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1), linear;
            }
            .progress-fill.fill-3 {
              background: linear-gradient(90deg, #059669 0%, #10b981 50%, #059669 100%);
              animation-name: fill3, shimmerFlow;
              animation-duration: 2s, 3s;
              animation-iteration-count: infinite, infinite;
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1), linear;
            }
            .progress-fill.fill-4 {
              background: linear-gradient(90deg, #10b981 0%, #34d399 50%, #10b981 100%);
              animation-name: fill4, shimmerFlow;
              animation-duration: 2s, 3s;
              animation-iteration-count: infinite, infinite;
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1), linear;
            }

            .metric-progress-row:hover .progress-fill {
              filter: brightness(0.9);
            }
            @media (max-width: 1024px) {
              .perf-section-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
            }
            @media (max-width: 640px) {
              .perf-section-grid {
                padding: 0 !important;
              }
            }
          `}</style>
        </section>

        {/* ─── 3. FAQ SECTION ─── */}
        <section style={{ background: "#f8fafc", padding: "clamp(48px, 8vw, 80px) 16px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>
              Mobile Engineering FAQs
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((f, i) => (
                <details key={i} style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px 24px", cursor: "pointer" }}>
                  <summary style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px" }}>{f.q}</summary>
                  <p style={{ color: "#64748b", fontSize: "14.5px", lineHeight: "1.6", marginTop: "12px", paddingLeft: "4px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. CTA BANNER ─── */}
        <section style={{ background: "#ffffff", padding: "clamp(48px, 8vw, 80px) 16px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              Ready to Launch Your Mobile App?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Get a free store roadmap &amp; architecture quote from our mobile engineering pod within 48 hours.
            </p>
            <Link href="/contact" style={{ background: "#0f172a", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book Free Mobile Audit →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
