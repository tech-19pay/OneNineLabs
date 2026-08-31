const fs = require('fs');

let file = fs.readFileSync('app/services/marketing/page.js', 'utf8');

const bentoOutcomesHTML = `
          {/* Responsive Bento Grid Styles */}
          <style dangerouslySetInnerHTML={{ __html: \`
            .outcomes-bento-grid {
              display: grid;
              gap: 24px;
              grid-auto-flow: dense;
              grid-template-columns: 1fr;
              margin-top: 40px;
            }
            .outcomes-bento-item {
              background: #f8fafc;
              border-radius: 24px;
              padding: 40px;
              display: flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
              border: 1px solid #f1f5f9;
            }
            @media (min-width: 768px) {
              .outcomes-bento-grid { grid-template-columns: repeat(2, 1fr); }
              .ob-tall { grid-column: span 1; grid-row: span 2; }
              .ob-wide { grid-column: span 2; grid-row: span 1; }
              .ob-normal { grid-column: span 1; grid-row: span 1; }
            }
            @media (min-width: 1024px) {
              .outcomes-bento-grid { grid-template-columns: repeat(3, 1fr); }
            }
            @media (max-width: 767px) {
              .outcomes-bento-item { padding: 24px; }
            }
          \`}} />

          <div className="outcomes-bento-grid">
            {/* Card 1: Left Tall */}
            <div className="outcomes-bento-item ob-tall">
              <div style={{ fontSize: "56px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-3px", fontFamily: "'Times New Roman', Times, serif", marginBottom: "16px" }}>
                +340%
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#0f172a", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                SEO — Organic Growth
              </h3>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.6", marginBottom: "32px", flex: 0 }}>
                Technical SEO, programmatic content and Core Web Vitals fixes that compound month over month.
              </p>

              {/* Mockup Checklist */}
              <div style={{ background: "#ffffff", borderRadius: "16px", padding: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", width: "110%", marginLeft: "-5%", marginTop: "auto", marginBottom: "10px" }}>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a", marginBottom: "20px" }}>Suggested Next Steps</div>
                
                {[
                  { icon: "⚡", title: "Performance", desc: "Sub-second LCP & Schema fixes applied", date: "May-June" },
                  { icon: "📝", title: "Content", desc: "Programmatic cluster expansion", date: "July" },
                  { icon: "🔍", title: "Monitoring", desc: "Weekly ranking and impression tracking", date: "Permanent" }
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                    <div style={{ background: "#f1f5f9", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                      {step.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>{step.title}</span>
                        <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600" }}>{step.date}</span>
                      </div>
                      <div style={{ fontSize: "12px", color: "#64748b" }}>• {step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Middle Top */}
            <div className="outcomes-bento-item ob-normal">
              <div style={{ fontSize: "42px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-2px", fontFamily: "'Times New Roman', Times, serif", marginBottom: "12px" }}>
                4.8x
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#0f172a", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                ROAS — Blended Campaigns
              </h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "24px" }}>
                Google, LinkedIn and Meta campaigns tied to CRM revenue with server-side attribution.
              </p>

              {/* Semicircle mockup */}
              <div style={{ position: "relative", height: "100px", overflow: "hidden", marginTop: "auto", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
                <div style={{ width: "200px", height: "200px", borderRadius: "50%", border: "16px solid #f1f5f9", position: "absolute", bottom: "-100px" }}></div>
                <div style={{ width: "200px", height: "200px", borderRadius: "50%", border: "16px solid transparent", borderTopColor: "#4ade80", borderRightColor: "#4ade80", transform: "rotate(-45deg)", position: "absolute", bottom: "-100px" }}></div>
                <div style={{ width: "16px", height: "16px", background: "#4ade80", borderRadius: "50%", position: "absolute", right: "20px", bottom: "12px", boxShadow: "0 0 0 4px #ffffff" }}></div>
              </div>
            </div>

            {/* Card 3: Right Top */}
            <div className="outcomes-bento-item ob-normal">
              <div style={{ fontSize: "42px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-2px", fontFamily: "'Times New Roman', Times, serif", marginBottom: "12px" }}>
                -22%
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#0f172a", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                CAC — Lower Cost
              </h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "24px" }}>
                Landing page A/B testing and full-funnel drop-off fixes that reduce acquisition cost.
              </p>

              {/* Bars Mockup */}
              <div style={{ marginTop: "auto" }}>
                <div style={{ marginBottom: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "600", color: "#0f172a", marginBottom: "6px" }}>
                    <span>Before Optimization</span>
                    <span>Q1 2024</span>
                  </div>
                  <div style={{ display: "flex", height: "12px", borderRadius: "6px", overflow: "hidden", background: "#f1f5f9" }}>
                    <div style={{ width: "85%", background: "#fdba74" }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "600", color: "#0f172a", marginBottom: "6px" }}>
                    <span>After Optimization</span>
                    <span>Q2 2024</span>
                  </div>
                  <div style={{ display: "flex", height: "12px", borderRadius: "6px", overflow: "hidden", background: "#f1f5f9" }}>
                    <div style={{ width: "63%", background: "#f97316" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Bottom Wide */}
            <div className="outcomes-bento-item ob-wide" style={{ flexDirection: "row", alignItems: "center", gap: "40px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "42px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-2px", fontFamily: "'Times New Roman', Times, serif", marginBottom: "12px" }}>
                  12k+
                </div>
                <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.6", marginBottom: "24px" }}>
                  Qualified leads generated and nurtured through our automated performance marketing funnels.
                </p>
                <button style={{ background: "#0f172a", color: "#ffffff", padding: "10px 24px", borderRadius: "99px", fontSize: "14px", fontWeight: "600", border: "none" }}>
                  Join Us
                </button>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", height: "160px" }}>
                {/* Collage placeholder blocks */}
                <div style={{ background: "#e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "12px" }}>
                  <div style={{ background: "#cbd5e1", borderRadius: "12px", overflow: "hidden" }}>
                    <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=100" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ background: "#94a3b8", borderRadius: "12px", overflow: "hidden" }}>
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=100" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
`;

const startIdx = file.indexOf('<div className="vd-results-grid">');
const endIdx = file.indexOf('</section>', startIdx); // wait, it's inside the section, so find the end of the grid.
const sectionEndStr = '          </div>\n        </section>';
const endIdxReal = file.indexOf(sectionEndStr, startIdx) + '          </div>'.length;

const newFile = file.slice(0, startIdx) + bentoOutcomesHTML + file.slice(endIdxReal);
fs.writeFileSync('app/services/marketing/page.js', newFile);
console.log('Replaced grid with image layout');
