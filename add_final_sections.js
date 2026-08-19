const fs = require('fs');
let content = fs.readFileSync('app/services/ai-automation/page.js', 'utf8');

const footerMarker = "{/* Gray Swan Style Footer Link */}";
const splitIndex = content.indexOf(footerMarker);

if (splitIndex === -1) {
  console.error("Could not find footer marker.");
  process.exit(1);
}

const newSections = `
        {/* --- GRAY SWAN STYLE: THE PROBLEM --- */}
        <section style={{ background: "#ffffff", padding: "0 24px 80px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#ea580c", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                The Problem
              </h2>
            </div>
            
            <p style={{ fontSize: "14px", color: "#3f3f46", margin: "0 0 24px 0", lineHeight: "1.6" }}>
              Traditional generative AI deployments attempt to solve security and hallucinations with overly restrictive rules that degrade user experience:
            </p>

            <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "24px" }} />

            <ul style={{ margin: "0 0 24px 0", paddingLeft: "24px", color: "#52525b", fontSize: "14px", lineHeight: "1.8" }}>
              <li>Block legitimate requests (high false positives)</li>
              <li>Add significant latency per request</li>
              <li>Require constant manual tuning as the agent evolves</li>
              <li>Focus on &quot;bad words&quot; instead of understanding intent or business logic</li>
            </ul>

            <p style={{ fontSize: "14px", color: "#3f3f46", margin: 0, lineHeight: "1.6" }}>
              As a result, companies face a choice between accepting unacceptable risk or deploying a slow, frustrating user experience that delivers marginal ROI. Many pause deployments entirely.
            </p>
          </div>
        </section>

        {/* --- GRAY SWAN STYLE: THE SOLUTION (HOW WE PROTECT ROI) --- */}
        <section style={{ background: "#ffffff", padding: "0 24px 80px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#3b82f6", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                How OneNineLabs Protects ROI Without Degrading UX
              </h2>
            </div>
            
            <p style={{ fontSize: "14px", color: "#3f3f46", margin: "0 0 24px 0", lineHeight: "1.6" }}>
              Our AI architecture is built on the principle that security and user experience are not trade-offs. We prevent policy violations and hallucinations without adding friction to legitimate use cases.
            </p>

            <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "24px" }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
              {/* Solution Card 1 */}
              <div style={{ background: "#18181b", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  COMPONENT 01
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Offensive
                </h3>
                <div style={{ height: "1px", background: "#3f3f46", width: "100%", marginBottom: "24px" }} />
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Continuously red-teams your agent to discover adversarial inputs, policy drift, and exfiltration vectors before deployment.
                </p>
              </div>

              {/* Solution Card 2 */}
              <div style={{ background: "#18181b", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  COMPONENT 02
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Defensive
                </h3>
                <div style={{ height: "1px", background: "#3f3f46", width: "100%", marginBottom: "24px" }} />
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Policy-aware runtime that understands enterprise business logic and data permissions, not just basic keyword filters.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* --- GRAY SWAN STYLE: DEPLOYMENT OPTIONS --- */}
        <section style={{ background: "#ffffff", padding: "0 24px 80px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: "0 0 40px 0", letterSpacing: "-0.5px" }}>
              Deployment Options
            </h2>
            
            <div style={{ fontSize: "10px", color: "#a1a1aa", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
              WHERE ONENINELABS RUNS
            </div>
            <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "32px" }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginBottom: "64px" }}>
              <div>
                <div style={{ fontSize: "24px", marginBottom: "16px", color: "#18181b" }}>{"\\u2601\\uFE0F"}</div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>Cloud SaaS</h3>
                <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                  We host and manage everything; you just call our API.
                </p>
              </div>

              <div>
                <div style={{ fontSize: "24px", marginBottom: "16px", color: "#18181b" }}>{"\\uD83C\\uDFE2"}</div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>On-Prem/VPC</h3>
                <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                  Runs securely in your Kubernetes cluster (Docker/Helm deployment) with zero data egress.
                </p>
              </div>
            </div>

            <div style={{ fontSize: "10px", color: "#a1a1aa", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
              WHERE THE PIPELINE CAN BE CONFIGURED
            </div>
            <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "32px" }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", marginBottom: "48px" }}>
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>API Layer</h4>
                <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What Gets Protected</div>
                <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                  Wrap individual LLM API calls (OpenAI, Anthropic, Gemini).
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>Gateway/Orchestration Layer</h4>
                <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What Gets Protected</div>
                <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                  Protect all agents at a centralized point (LiteLLM, LangChain, custom orchestration).
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>Application Layer</h4>
                <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What Gets Protected</div>
                <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                  Integrate directly into your enterprise agent application code.
                </p>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: "#3f3f46", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>
              With OneNineLabs, companies can achieve the ROI they projected from their AI investments because they can deploy agents that are both capable and secure, without the usual trade-off between the two.
            </p>

          </div>
        </section>
`;

const updatedContent = content.substring(0, splitIndex) + newSections + content.substring(splitIndex);

fs.writeFileSync('app/services/ai-automation/page.js', updatedContent, 'utf8');
console.log("Successfully inserted final sections!");
