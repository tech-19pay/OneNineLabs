const fs = require('fs');

let file = fs.readFileSync('components/WebDevMoreSections.js', 'utf8');

const bentoHTML = `
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 0" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: "500", color: "#1e1b4b", letterSpacing: "-1.5px", margin: "0 0 16px 0", fontFamily: "'Times New Roman', Times, serif" }}>
              Trusted. Effective. <span style={{ fontStyle: "italic" }}>Performance-Driven.</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
              Architecting fast, scalable, and secure web platforms for the modern enterprise, backed by data-driven development.
            </p>
          </div>

          {/* Bento Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", gridAutoFlow: "dense" }}>
            
            {/* Card 1: Left Tall */}
            <div style={{ gridColumn: "span 1", gridRow: "span 2", background: "#f8fafc", borderRadius: "24px", padding: "40px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: "72px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-3px", marginBottom: "16px", fontFamily: "'Times New Roman', Times, serif" }}>99/100</div>
              <div style={{ fontSize: "24px", fontWeight: "600", color: "#0f172a", marginBottom: "12px", letterSpacing: "-0.5px" }}>Core Web Vitals</div>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "40px" }}>
                Our Next.js architecture guarantees lightning-fast LCP, FID, and CLS scores, ensuring your users never wait.
              </p>
              
              {/* Fake UI: Checklist */}
              <div style={{ background: "#ffffff", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", width: "110%", marginLeft: "-5%", marginTop: "auto" }}>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>Optimization Steps</div>
                
                <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", width: "100px" }}>
                    <div style={{ color: "#475569" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
                    <div style={{ fontSize: "11px", fontWeight: "600", color: "#475569" }}>Frontend<br/><span style={{ color: "#94a3b8", fontWeight: "400" }}>SSR / SSG</span></div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "10px", color: "#475569", lineHeight: "1.6" }}>
                      <li>Server-side rendered React</li>
                      <li>Critical CSS extraction</li>
                      <li>Image optimization via edge</li>
                    </ul>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", width: "100px" }}>
                    <div style={{ color: "#475569" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
                    <div style={{ fontSize: "11px", fontWeight: "600", color: "#475569" }}>Backend<br/><span style={{ color: "#94a3b8", fontWeight: "400" }}>Caching</span></div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "10px", color: "#475569", lineHeight: "1.6" }}>
                      <li>Redis data caching</li>
                      <li>Database indexing</li>
                      <li>GraphQL DataLoader</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridColumn: "span 2", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {/* Card 2: Top Middle */}
              <div style={{ background: "#f8fafc", borderRadius: "24px", padding: "40px", position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: "48px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-2px", marginBottom: "12px", fontFamily: "'Times New Roman', Times, serif" }}>10x</div>
                <div style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a", marginBottom: "12px" }}>Faster Deployments</div>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6", marginBottom: "32px" }}>
                  Automated CI/CD pipelines ensure zero-downtime releases and instant rollbacks.
                </p>
                {/* Fake UI: Semi-circle Graph */}
                <div style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", width: "240px", height: "120px", overflow: "hidden" }}>
                  <div style={{ width: "240px", height: "240px", borderRadius: "50%", border: "24px solid #f1f5f9", boxSizing: "border-box" }}></div>
                  <div style={{ width: "240px", height: "240px", borderRadius: "50%", border: "24px solid #4ade80", borderBottomColor: "transparent", borderRightColor: "transparent", position: "absolute", top: 0, left: 0, transform: "rotate(45deg)", boxSizing: "border-box" }}></div>
                  <div style={{ position: "absolute", right: "20px", top: "80px", width: "16px", height: "16px", background: "#22c55e", borderRadius: "50%", border: "3px solid #fff" }}></div>
                </div>
              </div>

              {/* Card 3: Top Right */}
              <div style={{ background: "#f8fafc", borderRadius: "24px", padding: "40px" }}>
                <div style={{ fontSize: "48px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-2px", marginBottom: "12px", fontFamily: "'Times New Roman', Times, serif" }}>100%</div>
                <div style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a", marginBottom: "12px" }}>Type-Safe APIs</div>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6", marginBottom: "32px" }}>
                  End-to-end type safety from the database schema to the frontend UI components.
                </p>
                {/* Fake UI: Bar Charts */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", fontWeight: "600", color: "#475569", marginBottom: "6px" }}>
                      <span>Errors Caught Early</span>
                      <span style={{ color: "#0f172a" }}>TypeScript</span>
                    </div>
                    <div style={{ height: "8px", background: "#f1f5f9", borderRadius: "4px", display: "flex" }}>
                      <div style={{ width: "85%", background: "#fdba74", borderRadius: "4px" }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", fontWeight: "600", color: "#475569", marginBottom: "6px" }}>
                      <span>Runtime Exceptions</span>
                      <span style={{ color: "#0f172a" }}>Production</span>
                    </div>
                    <div style={{ height: "8px", background: "#f1f5f9", borderRadius: "4px", display: "flex" }}>
                      <div style={{ width: "10%", background: "#f97316", borderRadius: "4px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Bottom Right Wide */}
            <div style={{ gridColumn: "span 2", background: "#f8fafc", borderRadius: "24px", padding: "40px", display: "flex", alignItems: "center", gap: "32px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "56px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-2px", marginBottom: "16px", fontFamily: "'Times New Roman', Times, serif" }}>120+</div>
                <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", marginBottom: "24px" }}>
                  Enterprise applications and high-performance websites shipped using our modular architecture.
                </p>
                <button style={{ background: "#0f172a", color: "#fff", padding: "12px 24px", borderRadius: "99px", fontSize: "14px", fontWeight: "600", border: "none", cursor: "pointer" }}>
                  Join Us
                </button>
              </div>
              
              {/* Fake UI: Collage */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", width: "240px" }}>
                <div style={{ background: "#cbd5e1", height: "80px", borderRadius: "12px", overflow: "hidden" }}>
                  <img src="https://i.pravatar.cc/150?img=32" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ background: "#fcd34d", height: "120px", borderRadius: "12px", marginTop: "-40px", overflow: "hidden" }}>
                  <img src="https://i.pravatar.cc/150?img=47" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ background: "#bae6fd", height: "120px", borderRadius: "12px", marginTop: "-40px", overflow: "hidden" }}>
                  <img src="https://i.pravatar.cc/150?img=68" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ background: "#fecaca", height: "80px", borderRadius: "12px", overflow: "hidden" }}>
                  <img src="https://i.pravatar.cc/150?img=12" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>

          </div>
        </div>
`;

// Now replace the <section id="all-services"> completely
const startIdx = file.indexOf('<section id="all-services"');
const endIdx = file.indexOf('</section>', startIdx) + '</section>'.length;

const newFile = file.slice(0, startIdx) + 
    '<section id="all-services" style={{ background: "#ffffff", padding: "40px 24px", borderBottom: "1px solid #f1f5f9" }}>\n' + 
    bentoHTML + 
    '\n      </section>' + 
    file.slice(endIdx);

fs.writeFileSync('components/WebDevMoreSections.js', newFile);
console.log('Successfully updated section to Bento Box layout.');
