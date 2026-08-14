import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

export const metadata = {
  title: "Mobile App Development — iOS Swift & React Native | OneNineLabs",
  description: "Native iOS (Swift / SwiftUI), Android (Kotlin), and React Native cross-platform mobile app engineering with sub-second API sync and App Store launch support.",
  keywords: ["mobile app development company", "iOS Swift developer", "React Native agency", "Android Kotlin development", "App Store optimization", "mobile app UI design"],
  alternates: { canonical: "/services/mobile-apps", languages: { "en-US": "/services/mobile-apps", en: "/services/mobile-apps", "x-default": "/services/mobile-apps" } },
  openGraph: { title: "Mobile App Development — iOS & React Native | OneNineLabs", description: "Native & cross-platform mobile apps engineered for speed, offline sync & 5-star App Store ratings.", url: "https://oneninelabs.com/services/mobile-apps", type: "website" },
  robots: { index: true, follow: true },
};

const PRIMARY = "#10b981";
const GRAD_FROM = "#065f46";
const GRAD_TO = "#10b981";
const GLOW = "rgba(16,185,129,0.15)";

const mobileCapabilities = [
  {
    title: "iOS Swift & SwiftUI Native",
    desc: "Blazing-fast native iOS apps with Metal graphics acceleration, CoreData offline storage, and widgets.",
    icon: "🍎",
    badge: "iOS 18 Native"
  },
  {
    title: "Android Kotlin & Jetpack Compose",
    desc: "Modern Android applications following Material 3 design guidelines and background push sync.",
    icon: "🤖",
    badge: "Android 15"
  },
  {
    title: "React Native & Expo Cross-Platform",
    desc: "Single codebase delivering 60FPS native performance for both iOS and Android with 95% code reuse.",
    icon: "📱",
    badge: "60FPS Sync"
  },
  {
    title: "Offline First & Realtime WebSockets",
    desc: "Local SQLite/WatermelonDB sync with automatic background queue reconnection when offline.",
    icon: "⚡",
    badge: "Offline Sync"
  }
];

export default function MobileAppsServicePage() {
  return (
    <>
      <Header variant="light" />
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <div className="vd-wrap">

        {/* ─── 1. HERO: DUAL SMARTPHONE FRAME SHOWCASE & APP DECK ─── */}
        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #f0fdf4 100%)",
          padding: "135px 24px 90px 24px",
          borderBottom: "1px solid #e2e8f0",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 640px",
            gap: "40px",
            alignItems: "flex-start"
          }}>
            {/* Left Content Column */}
            <div className="vd-hero-left" style={{ textAlign: "left", zIndex: 2, marginTop: "10px" }}>
              <div style={{
                fontSize: "13.5px",
                fontWeight: "800",
                color: "#059669",
                marginBottom: "16px",
                letterSpacing: "0.4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ecfdf5",
                padding: "6px 14px",
                borderRadius: "99px",
                border: "1px solid #a7f3d0"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} /> iOS Swift &amp; React Native Mobile Engineering
              </div>

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
                5-Star Rated Native &amp; <span style={{ color: "#059669" }}>React Native Apps</span>
              </h1>

              <p style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.65",
                marginBottom: "32px",
                maxWidth: "490px",
                fontWeight: "400"
              }}>
                We craft beautiful iOS and Android apps with 60FPS smooth animations, offline-first architecture, and instant App Store &amp; Play Store approval.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <Link
                  href="/#contact"
                  style={{
                    background: "#059669",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "99px",
                    padding: "15px 32px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 25px rgba(5, 150, 105, 0.3)",
                    transition: "transform 0.2s ease"
                  }}
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
              <div style={{
                display: "flex",
                gap: "28px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0"
              }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", lineHeight: "1.1" }}>4.9★</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>App Store Rating</div>
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

            {/* Right Interactive Smartphone UI Deck */}
            <div className="vd-hero-right" style={{ position: "relative", minHeight: "490px", display: "flex", gap: "20px", justifyContent: "center" }}>
              
              {/* Phone Frame 1 (iOS Mockup) */}
              <div style={{
                width: "230px",
                height: "440px",
                background: "#0f172a",
                borderRadius: "36px",
                border: "4px solid #334155",
                boxShadow: "0 25px 60px rgba(15, 23, 42, 0.18)",
                overflow: "hidden",
                position: "relative",
                padding: "16px 12px"
              }}>
                <div style={{ width: "80px", height: "16px", background: "#1e293b", borderRadius: "99px", margin: "0 auto 16px auto" }} />
                <div style={{ background: "linear-gradient(135deg, #10b981, #059669)", height: "100px", borderRadius: "18px", padding: "12px", color: "#fff", marginBottom: "12px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "600" }}>iOS 18 Native App</div>
                  <div style={{ fontSize: "18px", fontWeight: "900", marginTop: "4px" }}>+99.9% Uptime</div>
                  <div style={{ fontSize: "10px", marginTop: "8px", background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "2px 8px", borderRadius: "99px" }}>SwiftUI Engine</div>
                </div>
                <div style={{ height: "60px", background: "#1e293b", borderRadius: "14px", marginBottom: "10px" }} />
                <div style={{ height: "60px", background: "#1e293b", borderRadius: "14px", marginBottom: "10px" }} />
                <div style={{ height: "60px", background: "#1e293b", borderRadius: "14px" }} />
              </div>

              {/* Phone Frame 2 (Android Mockup) */}
              <div style={{
                width: "230px",
                height: "440px",
                background: "#ffffff",
                borderRadius: "36px",
                border: "4px solid #cbd5e1",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
                position: "relative",
                padding: "16px 12px",
                marginTop: "30px"
              }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#cbd5e1", margin: "0 auto 16px auto" }} />
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", height: "100px", borderRadius: "18px", padding: "12px", color: "#0f172a", marginBottom: "12px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "700", color: "#059669" }}>React Native / Expo</div>
                  <div style={{ fontSize: "18px", fontWeight: "900", marginTop: "4px" }}>60 FPS Sync</div>
                  <div style={{ fontSize: "10px", marginTop: "8px", background: "#ecfdf5", color: "#059669", display: "inline-block", padding: "2px 8px", borderRadius: "99px", fontWeight: "700" }}>Cross Platform</div>
                </div>
                <div style={{ height: "60px", background: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: "14px", marginBottom: "10px" }} />
                <div style={{ height: "60px", background: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: "14px" }} />
              </div>

            </div>

          </div>
        </section>

        {/* ─── 2. MOBILE CAPABILITIES GRID ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#059669", marginBottom: "12px" }}>
              Mobile Engineering Services
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "48px" }}>
              Native &amp; Cross-Platform Capabilities
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {mobileCapabilities.map((c, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 24px", textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "32px" }}>{c.icon}</span>
                    <span style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{c.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>{c.title}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. CTA BANNER ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              Ready to Launch Your Mobile App?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Get a free App Store roadmap &amp; architecture quote from our mobile engineering pod within 48 hours.
            </p>
            <Link href="/#contact" style={{ background: "#334155", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book Free Mobile Audit →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
