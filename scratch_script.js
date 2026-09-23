const fs = require('fs');
const path = require('path');
const p = path.resolve('d:/Office Projects/restore_div/app/services/web-development/page.js');
let content = fs.readFileSync(p, 'utf-8');
content = content.replace(/<div className="webdev-hero-grid" style=\{\{[\s\S]*?<div className="mock-browser-bar"/g, `<div className="webdev-hero-grid" style={{
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
              <div className="webdev-hero-btns" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
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
                  className="vd-btn-ghost-secondary"
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

                  <div className="mock-browser-bar"`);
fs.writeFileSync(p, content, 'utf-8');
