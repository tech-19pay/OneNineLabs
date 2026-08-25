const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../components/SaasPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace deliverySteps array
const oldDeliveryStepsMarker = 'const deliverySteps = [';
const oldDeliveryStepsEnd = 'const faqs = [';

const newDeliverySteps = `const deliverySteps = [
    {
      num: "01",
      category: "STAGE 01 • ARCHITECTURE",
      title: "Tenant Data Modeling & RLS Architecture",
      desc: "We define PostgreSQL Row-Level Security (RLS) schemas, auth flows (SAML/OAuth), and subscription pricing models in Stripe.",
      tag: "Architecture Blueprint",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      mockupType: "strategy"
    },
    {
      num: "02",
      category: "STAGE 02 • MVP SPRINTS",
      title: "Rapid MVP Pod Build (6–8 Weeks)",
      desc: "Our senior SaaS pod builds your production MVP: Next.js 15 frontend, backend APIs, Stripe billing, and user management.",
      tag: "Production Sprints",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)",
      mockupType: "sprint"
    },
    {
      num: "03",
      category: "STAGE 03 • SECURITY VERIFICATION",
      title: "Security Hardening & Penetration Testing",
      desc: "We conduct exhaustive multi-tenant penetration tests, eliminate cross-tenant leak vectors, and configure SOC 2 audit logging.",
      tag: "Zero-Leak Verification",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      mockupType: "security"
    },
    {
      num: "04",
      category: "STAGE 04 • LAUNCH & SCALE",
      title: "Production Launch & Scale Retainer",
      desc: "We deploy to AWS/Vercel with CI/CD automation, configure 24/7 endpoint monitoring, and provide SLA-backed maintenance.",
      tag: "Launch & Operate",
      link: "Read Full Resource",
      bgGradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
      mockupType: "launch"
    }
  ];

  `;

const startIdx = content.indexOf(oldDeliveryStepsMarker);
const endIdx = content.indexOf(oldDeliveryStepsEnd);

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newDeliverySteps + content.substring(endIdx);
} else {
  console.error("Could not find deliverySteps array markers!");
}

// Replace saas-process-section JSX
const processStartMarker = '{/* ── 7. 4-STAGE SAAS DELIVERY PROCESS ── */}';
const processEndMarker = '{/* ── 8. SAAS ENGINEERING FAQS (WITH STICKY SIDEBAR) ── */}';

const newProcessJSX = `{/* ── 7. 4-STAGE SAAS DELIVERY PROCESS ── */}
      <section className="saas-process-section" style={{ padding: "60px 24px", background: "#ffffff" }}>
        <div className="saas-process-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="saas-sec-header" style={{ marginBottom: "40px" }}>
            <div className="saas-badge-pill">
              <span className="saas-badge-dot" />
              AGILE POD LIFECYCLE
            </div>
            <h2 className="saas-sec-title">4-Stage SaaS Delivery Process</h2>
            <p className="saas-sec-desc">
              From data modeling and Stripe billing integration to penetration testing and 6–8 week MVP production rollout.
            </p>
          </div>

          {/* Grid of Image Cards (Matching Uploaded Design) */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            {deliverySteps.map((step, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                
                {/* Top Image / Visual Illustration Canvas */}
                <div style={{ height: "190px", borderRadius: "18px", background: step.bgGradient, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
                  
                  {/* Mockup 1: Strategy (Purple) */}
                  {step.mockupType === "strategy" && (
                    <div style={{ width: "75%", background: "#ffffff", borderRadius: "12px", padding: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", textAlign: "center" }}>
                      <div style={{ background: "#7c3aed", color: "#ffffff", padding: "6px 12px", borderRadius: "8px", fontWeight: "800", fontSize: "14px", letterSpacing: "1px", display: "inline-block", marginBottom: "8px" }}>
                        STRATEGY
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>PostgreSQL RLS Blueprint</div>
                    </div>
                  )}

                  {/* Mockup 2: Sprint (Paper / Notebook) */}
                  {step.mockupType === "sprint" && (
                    <div style={{ width: "75%", background: "#ffffff", borderRadius: "12px", padding: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #cbd5e1" }}>
                      <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", marginBottom: "4px", fontFamily: "cursive, sans-serif" }}>
                        Paid Advertising / Sprints
                      </div>
                      <div style={{ fontSize: "11px", color: "#16a34a", fontWeight: "700" }}>✓ 6-8 Weeks MVP Build</div>
                    </div>
                  )}

                  {/* Mockup 3: Security Analytics (Cyan Laptop) */}
                  {step.mockupType === "security" && (
                    <div style={{ width: "80%", background: "#0f172a", borderRadius: "12px", padding: "14px", color: "#ffffff", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
                      <div style={{ fontSize: "12px", fontWeight: "700", color: "#38bdf8", marginBottom: "6px" }}>Analysis & Security Audit</div>
                      <div style={{ height: "6px", background: "#1e293b", borderRadius: "100px", overflow: "hidden" }}>
                        <div style={{ width: "94%", height: "100%", background: "#06b6d4" }}></div>
                      </div>
                      <div style={{ fontSize: "9.5px", color: "#94a3b8", marginTop: "6px" }}>0 Data Leaks Detected</div>
                    </div>
                  )}

                  {/* Mockup 4: Launch & Rating (Blue) */}
                  {step.mockupType === "launch" && (
                    <div style={{ width: "75%", background: "#ffffff", borderRadius: "12px", padding: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", textAlign: "center" }}>
                      <div style={{ fontSize: "18px", marginBottom: "4px" }}>⭐⭐⭐⭐⭐</div>
                      <div style={{ fontSize: "12px", fontWeight: "800", color: "#1d4ed8" }}>99.99% SLA Launch</div>
                    </div>
                  )}

                </div>

                {/* Category Tag */}
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "16px", marginBottom: "6px" }}>
                  {step.category}
                </div>

                {/* Card Title */}
                <h3 style={{ margin: "0 0 8px 0", fontSize: "16.5px", fontWeight: "800", color: "#0f172a", lineHeight: "1.35" }}>
                  {step.title}
                </h3>

                {/* Card Description */}
                <p style={{ margin: "0 0 14px 0", fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", flexGrow: 1 }}>
                  {step.desc}
                </p>

                {/* Bottom Action Link */}
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#64748b", textDecoration: "underline", cursor: "pointer" }}>
                  {step.link}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      `;

const pStartIdx = content.indexOf(processStartMarker);
const pEndIdx = content.indexOf(processEndMarker);

if (pStartIdx !== -1 && pEndIdx !== -1) {
  content = content.substring(0, pStartIdx) + newProcessJSX + content.substring(pEndIdx);
} else {
  console.error("Could not find process section markers!");
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully rebuilt 4-Stage SaaS Delivery Process into Image Card Grid!");
