const fs = require('fs');

let file = fs.readFileSync('components/WebDevMoreSections.js', 'utf8');

// The script to inject the <style> block and update the classes.
// Let's replace the bento grid container and its contents.
// I will just locate the Bento Grid div and replace it entirely with the responsive version.

const startMarker = '{/* Bento Grid built dynamically from services data */}';
const endMarker = '</div>\n        </div>';

const startIdx = file.indexOf(startMarker);
if (startIdx === -1) {
    console.error("Could not find start marker");
} else {
    // We need to find the matching closing tag of the <div style={{ maxWidth: "1200px" }}>.
    // It's easier to just find the end of the section
    const endIdx = file.indexOf('</section>', startIdx);
    
    if (endIdx === -1) {
        console.error("Could not find end marker");
    } else {
        const responsiveBentoHTML = `
          {/* Responsive Bento Grid styles */}
          <style dangerouslySetInnerHTML={{ __html: \`
            .bento-grid {
              display: grid;
              gap: 24px;
              grid-auto-flow: dense;
              grid-template-columns: 1fr;
            }
            .bento-item {
              background: #f8fafc;
              border-radius: 24px;
              padding: 40px;
              display: flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
              border: 1px solid #f1f5f9;
            }
            
            /* Tablet */
            @media (min-width: 768px) {
              .bento-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .bento-tall { grid-column: span 1; grid-row: span 2; }
              .bento-wide { grid-column: span 2; grid-row: span 1; }
              .bento-normal { grid-column: span 1; grid-row: span 1; }
            }
            
            /* Desktop */
            @media (min-width: 1024px) {
              .bento-grid {
                grid-template-columns: repeat(3, 1fr);
              }
              .bento-tall { grid-column: span 1; grid-row: span 2; }
              .bento-wide { grid-column: span 2; grid-row: span 1; }
              .bento-normal { grid-column: span 1; grid-row: span 1; }
            }
            
            @media (max-width: 767px) {
              .bento-item {
                padding: 24px;
              }
              .bento-mockup {
                width: 100% !important;
                margin-left: 0 !important;
              }
            }
          \`}} />

          {/* Bento Grid built dynamically from services data */}
          <div className="bento-grid">
            {services.map((s, i) => {
              const mod = i % 4;
              let className = "bento-item bento-normal";
              if (mod === 0) className = "bento-item bento-tall";
              if (mod === 3) className = "bento-item bento-wide";

              return (
                <div key={s.title} className={className}>
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div style={{ fontSize: "42px", fontWeight: "300", color: "#0f172a", lineHeight: "1", letterSpacing: "-2px", fontFamily: "'Times New Roman', Times, serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div style={{ fontSize: "32px", opacity: 0.8 }}>{s.icon}</div>
                  </div>

                  <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#0f172a", marginBottom: "12px", letterSpacing: "-0.5px" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "32px", flex: mod === 0 ? 0 : 1 }}>
                    {s.desc}
                  </p>

                  {/* Add dynamic mockups for the tall cards on the left (mod === 0) */}
                  {i === 0 && (
                    <div className="bento-mockup" style={{ background: "#ffffff", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", width: "110%", marginLeft: "-5%", marginTop: "auto", marginBottom: "20px" }}>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>Core Web Vitals Check</div>
                      
                      <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", width: "100px" }}>
                          <div style={{ color: "#4ade80" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                          <div style={{ fontSize: "11px", fontWeight: "600", color: "#0f172a" }}>LCP<br/><span style={{ color: "#64748b", fontWeight: "400" }}>&lt; 1.2s</span></div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ width: "100%", background: "#f1f5f9", height: "4px", borderRadius: "2px", marginTop: "6px" }}><div style={{ width: "95%", background: "#4ade80", height: "100%", borderRadius: "2px" }}></div></div>
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: "16px" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", width: "100px" }}>
                          <div style={{ color: "#4ade80" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                          <div style={{ fontSize: "11px", fontWeight: "600", color: "#0f172a" }}>CLS<br/><span style={{ color: "#64748b", fontWeight: "400" }}>0.01</span></div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ width: "100%", background: "#f1f5f9", height: "4px", borderRadius: "2px", marginTop: "6px" }}><div style={{ width: "99%", background: "#4ade80", height: "100%", borderRadius: "2px" }}></div></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 4 && (
                    <div className="bento-mockup" style={{ background: "#ffffff", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", width: "110%", marginLeft: "-5%", marginTop: "auto", marginBottom: "20px" }}>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginBottom: "16px", display: "flex", justifyContent: "space-between" }}>
                        <span>Secure Checkout</span>
                        <span style={{ color: "#2563eb" }}>$2,490.00</span>
                      </div>
                      
                      <div style={{ border: "1px solid #f1f5f9", borderRadius: "8px", padding: "12px", marginBottom: "12px" }}>
                        <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "4px" }}>Card Information</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "24px", height: "16px", background: "#1e1b4b", borderRadius: "3px" }}></div>
                          <div style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a", letterSpacing: "1px" }}>**** **** **** 4242</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <div style={{ flex: 1, border: "1px solid #f1f5f9", borderRadius: "8px", padding: "12px" }}>
                          <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "4px" }}>Expires</div>
                          <div style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a" }}>12/26</div>
                        </div>
                        <div style={{ flex: 1, border: "1px solid #f1f5f9", borderRadius: "8px", padding: "12px" }}>
                          <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "4px" }}>CVC</div>
                          <div style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a" }}>***</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto", paddingTop: "24px", borderTop: "1px solid #e2e8f0" }}>
                    {s.tags.map((t) => (
                      <span key={t} style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "99px", fontSize: "12px", color: "#475569", fontWeight: "600" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
`;

        const newFile = file.slice(0, startIdx) + responsiveBentoHTML + file.slice(endIdx);
        fs.writeFileSync('components/WebDevMoreSections.js', newFile);
        console.log('Successfully made bento grid responsive.');
    }
}
