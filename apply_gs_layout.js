const fs = require('fs');
let content = fs.readFileSync('app/services/ai-automation/page.js', 'utf8');

const startHeroStr = "{/* 1. HERO: NEURAL AGENT NETWORK CANVAS */}";
const startNextSectionStr = "3. AI ARCHITECTURE PIPELINE";

const startIndex = content.indexOf(startHeroStr);
const nextSectionIndex = content.indexOf(startNextSectionStr);

if (startIndex === -1 || nextSectionIndex === -1) {
  console.error("Could not find boundaries!", startIndex, nextSectionIndex);
  process.exit(1);
}

// Find the start of the comment block for section 3
let endIndex = content.lastIndexOf("{/*", nextSectionIndex);

if (endIndex === -1 || endIndex < startIndex) {
    console.error("Could not find start of section 3 comment.");
    process.exit(1);
}

const newLayout = `
        {/* --- GRAY SWAN STYLE HERO --- */}
        <section className="gs-hero-section" style={{
          background: "linear-gradient(180deg, #18181b 0%, #09090b 100%)",
          padding: "120px 24px 80px 24px",
          borderBottom: "1px solid #27272a",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "center"
          }}>
            <div style={{ maxWidth: "540px", zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", letterSpacing: "1.5px" }}>ONENINELABS</span>
              </div>
              
              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: "700",
                color: "#ffffff",
                lineHeight: "1.1",
                letterSpacing: "-1.5px",
                margin: 0
              }}>
                Autonomous AI Workflows &amp; LLM Pipelines
              </h1>
            </div>

            <div style={{ position: "relative", width: "400px", height: "300px", zIndex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <img 
                  src="/glassmorphic_3d_shape.jpg" 
                  alt="3D Shape" 
                  style={{ 
                    width: "300px", 
                    height: "300px", 
                    objectFit: "cover", 
                    borderRadius: "20px",
                    mixBlendMode: "screen",
                    animation: "float 6s ease-in-out infinite",
                    WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)",
                    maskImage: "radial-gradient(circle, black 40%, transparent 70%)"
                  }} 
                />
            </div>
          </div>
        </section>

        {/* --- GRAY SWAN STYLE CAPABILITIES GRID --- */}
        <section style={{
          background: "#ffffff",
          padding: "80px 24px",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid #f4f4f5", paddingBottom: "32px", marginBottom: "48px", flexWrap: "wrap", gap: "32px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                AI Capabilities
              </h2>
              <div style={{ maxWidth: "560px" }}>
                <p style={{ fontSize: "13px", color: "#52525b", margin: "0 0 20px 0", lineHeight: "1.6" }}>
                  We build intelligent AI agents, RAG vector search pipelines, and automated LLM workflows with OpenAI, Claude, and open-source models {"\\u2014"} lowering operational costs by 60%.
                </p>
                <Link
                  href="/contact"
                  style={{
                    background: "#18181b",
                    color: "#ffffff",
                    fontWeight: "600",
                    borderRadius: "6px",
                    padding: "10px 20px",
                    fontSize: "13px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {aiCapabilities.map((c, i) => (
                <div key={i} style={{ 
                  background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
                  border: "1px solid #f4f4f5", 
                  borderRadius: "16px", 
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)"
                }}>
                  <div style={{ fontSize: "22px", marginBottom: "20px", color: "#18181b" }}>{c.icon}</div>
                  
                  <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#18181b", margin: "0 0 24px 0" }}>{c.title}</h4>
                  
                  <div style={{ height: "1px", background: "#f4f4f5", width: "100%", marginBottom: "20px" }} />
                  
                  <div style={{ fontSize: "9px", fontWeight: "700", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "12px" }}>
                    BUSINESS IMPACT
                  </div>
                  
                  <p style={{ fontSize: "13px", color: "#a1a1aa", lineHeight: "1.6", margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom text from Gray Swan image */}
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #f4f4f5" }}>
              <p style={{ fontSize: "12px", color: "#71717a", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                These agents interact with business-critical systems (CRM, code repos, customer data) and make autonomous decisions that directly impact revenue, customer experience, or operational speed.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "#71717a" }}>ONENINELABS</span>
                </div>
                <span style={{ fontSize: "10px", color: "#a1a1aa" }}>oneninelabs.com</span>
              </div>
            </div>

          </div>
        </section>

`;

const updatedContent = content.substring(0, startIndex) + newLayout + content.substring(endIndex);

fs.writeFileSync('app/services/ai-automation/page.js', updatedContent, 'utf8');
console.log("Successfully updated layout!");
