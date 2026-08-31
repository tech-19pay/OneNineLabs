const fs = require('fs');

let file = fs.readFileSync('components/MobileAppsPageContent.tsx', 'utf8');

const bentoHTML = `
          {/* Responsive Bento Grid Styles */}
          <style dangerouslySetInnerHTML={{ __html: \`
            .mobile-bento-grid {
              display: grid;
              gap: 24px;
              grid-auto-flow: dense;
              grid-template-columns: 1fr;
            }
            .mobile-bento-item {
              background: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 32px;
              padding: 40px;
              display: flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
            }
            @media (min-width: 768px) {
              .mobile-bento-grid { grid-template-columns: repeat(2, 1fr); }
              .mb-tall { grid-column: span 1; grid-row: span 2; }
              .mb-wide { grid-column: span 2; grid-row: span 1; }
              .mb-normal { grid-column: span 1; grid-row: span 1; }
            }
            @media (min-width: 1024px) {
              .mobile-bento-grid { grid-template-columns: repeat(3, 1fr); }
            }
            @media (max-width: 767px) {
              .mobile-bento-item { padding: 24px; }
            }
          \`}} />

          <div className="mobile-bento-grid">
            {deliverySteps.map((step, i) => {
              const colors = [
                { hex: "#d946ef", grad: "linear-gradient(135deg, #f472b6, #d946ef)", shadow: "rgba(217,70,239,0.3)", bg: "rgba(217,70,239,0.08)" },
                { hex: "#3b82f6", grad: "linear-gradient(135deg, #38bdf8, #3b82f6)", shadow: "rgba(59,130,246,0.3)", bg: "rgba(59,130,246,0.08)" },
                { hex: "#10b981", grad: "linear-gradient(135deg, #34d399, #10b981)", shadow: "rgba(16,185,129,0.3)", bg: "rgba(16,185,129,0.08)" },
                { hex: "#7b5ef0", grad: "linear-gradient(135deg, #a084f5, #7b5ef0)", shadow: "rgba(123,94,240,0.3)", bg: "rgba(123,94,240,0.08)" }
              ];
              const c = colors[i];
              
              let gridClass = "mb-normal";
              if (i === 0) gridClass = "mb-tall";
              if (i === 3) gridClass = "mb-wide";

              // On the wide card, we can use a row layout on desktop.
              const isWide = i === 3;

              return (
                <div key={i} className={\`mobile-bento-item \${gridClass}\`} style={{ borderTop: \`6px solid \${c.hex}\` }}>
                  
                  {/* Content Container */}
                  <div style={{ display: "flex", flexDirection: isWide ? "row" : "column", gap: "24px", height: "100%", zIndex: 10, flexWrap: "wrap" }}>
                    
                    {/* Left Side: Text */}
                    <div style={{ flex: isWide ? "1 1 240px" : "1", display: "flex", flexDirection: "column" }}>
                      <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: c.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0, boxShadow: \`0 8px 16px \${c.shadow}\`, marginBottom: "20px", color: "#fff" }}>
                        {step.num}
                      </div>
                      
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                        <span style={{ fontSize: "10.5px", fontWeight: "800", color: c.hex, background: c.bg, border: \`1px solid \${c.hex}30\`, padding: "4px 10px", borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          {step.tag}
                        </span>
                      </div>
                      
                      <h3 style={{ fontSize: "26px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0", letterSpacing: "-0.5px" }}>{step.title}</h3>
                      <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#64748b", margin: 0 }}>{step.desc}</p>
                    </div>

                    {/* Right Side: Mini Mockup */}
                    <div style={{ flexShrink: 0, width: isWide ? "140px" : "100%", display: "flex", alignItems: isWide ? "center" : "flex-end", justifyContent: isWide ? "center" : "flex-start", marginTop: isWide ? 0 : "auto", paddingTop: "24px" }}>
                      <div style={{ width: isWide ? "140px" : "100%", height: "160px", background: "#f8fafc", borderRadius: "20px", border: "4px solid #e2e8f0", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                        
                        {step.num === "01" && (
                          <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "6px", height: "100%" }}>
                            <div style={{ width: "100%", height: "40px", background: "#e2e8f0", borderRadius: "8px" }}></div>
                            <div style={{ display: "flex", gap: "6px" }}>
                              <div style={{ width: "30%", height: "30px", background: "#e2e8f0", borderRadius: "6px" }}></div>
                              <div style={{ width: "70%", height: "30px", background: "#e2e8f0", borderRadius: "6px" }}></div>
                            </div>
                            <div style={{ flex: 1, background: c.bg, borderRadius: "8px", border: \`1px dashed \${c.hex}\` }}></div>
                          </div>
                        )}

                        {step.num === "02" && (
                          <div style={{ padding: "16px 8px", display: "flex", flexDirection: "column", gap: "6px", height: "100%", background: "#1e293b" }}>
                            <div style={{ width: "60%", height: "4px", background: "#38bdf8", borderRadius: "2px", marginBottom: "4px" }}></div>
                            <div style={{ width: "80%", height: "4px", background: "#a084f5", borderRadius: "2px" }}></div>
                            <div style={{ width: "40%", height: "4px", background: "#f472b6", borderRadius: "2px" }}></div>
                            <div style={{ width: "90%", height: "4px", background: "#34d399", borderRadius: "2px" }}></div>
                            <div style={{ width: "70%", height: "4px", background: "#f472b6", borderRadius: "2px", marginTop: "8px" }}></div>
                            <div style={{ width: "50%", height: "4px", background: "#38bdf8", borderRadius: "2px" }}></div>
                          </div>
                        )}

                        {step.num === "03" && (
                          <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "6px", height: "100%", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#ecfdf5", border: "2px solid #10b981", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", fontSize: "20px" }}>✓</div>
                            <div style={{ width: "80%", height: "6px", background: "#e2e8f0", borderRadius: "3px", marginTop: "8px" }}><div style={{ width: "100%", height: "100%", background: "#10b981", borderRadius: "3px" }}></div></div>
                            <div style={{ fontSize: "8px", color: "#64748b", fontWeight: "700" }}>TESTS PASSED</div>
                          </div>
                        )}

                        {step.num === "04" && (
                          <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "8px", height: "100%", background: "#f8fafc", alignItems: "center" }}>
                            <div style={{ fontSize: "32px", marginTop: "10px" }}>🚀</div>
                            <div style={{ width: "80%", height: "20px", background: "#0ea5e9", borderRadius: "10px", marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "8px", fontWeight: "800" }}>DEPLOY</div>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                  
                  {/* Huge faded background icon */}
                  <div style={{ position: "absolute", bottom: "-20px", right: "-20px", fontSize: "160px", opacity: 0.03, zIndex: 0, transform: "rotate(-15deg)" }}>
                    {step.icon}
                  </div>
                </div>
              )
            })}
          </div>
`;

// Now replace from '<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))"'
// To the end of the map.
const startIdx = file.indexOf('<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px" }}>');
const endMarker = '</div>\n        </div>\n      </section>';
const endIdx = file.indexOf(endMarker, startIdx);

const newFile = file.slice(0, startIdx) + bentoHTML + '\n' + file.slice(endIdx);
fs.writeFileSync('components/MobileAppsPageContent.tsx', newFile);
console.log('Mobile apps bento layout applied');
