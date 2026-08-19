const fs = require('fs');
let content = fs.readFileSync('app/services/ai-automation/page.js', 'utf8');

// Find the boundaries
const nextSectionIndex = content.indexOf("3. AI ARCHITECTURE PIPELINE");
const startIndex = content.lastIndexOf("{/*", nextSectionIndex);
const footerIndex = content.indexOf("<Footer />");

if (startIndex === -1 || footerIndex === -1) {
  console.error("Could not find boundaries!");
  process.exit(1);
}

const newLayout = `
        {/* --- GRAY SWAN STYLE: RISK PROFILES (TECH STACK) --- */}
        <section style={{ background: "#ffffff", padding: "80px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#ea580c", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                Core Enterprise AI Stack
              </h2>
            </div>
            
            <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "48px", maxWidth: "800px" }}>
              Our AI automation pipelines are built on three foundational dimensions that compound when combined:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {/* Card 1 */}
              <div style={{ background: "#18181b", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  DIMENSION 01
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Language Models
                </h3>
                <div style={{ height: "1px", background: "#3f3f46", width: "100%", marginBottom: "24px" }} />
                
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and private Llama 3 deployments.
                </p>

                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>Why It Matters</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Provides the core reasoning, text generation, and intent recognition engine that powers all downstream autonomous tasks.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{ background: "#18181b", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  DIMENSION 02
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Agent Orchestration
                </h3>
                <div style={{ height: "1px", background: "#3f3f46", width: "100%", marginBottom: "24px" }} />
                
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  Frameworks like LangChain, LlamaIndex, AutoGen, and CrewAI.
                </p>

                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>Why It Matters</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Connects base models to enterprise APIs, manages conversational memory, and routes complex multi-agent workflows.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{ background: "#18181b", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  DIMENSION 03
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Vector Databases
                </h3>
                <div style={{ height: "1px", background: "#3f3f46", width: "100%", marginBottom: "24px" }} />
                
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  Pinecone, Qdrant, Milvus, and PostgreSQL pgvector data stores.
                </p>

                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>Why It Matters</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Enables lightning-fast semantic search over massive proprietary datasets, feeding context directly into RAG pipelines.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* --- GRAY SWAN STYLE: FAILURE MODES (SECURITY & FAQ) --- */}
        <section style={{ background: "#ffffff", padding: "40px 24px 120px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#ea580c", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                Enterprise AI Adoption: Security &amp; FAQ
              </h2>
            </div>
            
            <div style={{ maxWidth: "900px", marginBottom: "48px" }}>
              <p style={{ fontSize: "14px", color: "#52525b", margin: "0 0 16px 0", lineHeight: "1.6" }}>
                While traditional engineering focuses on standard application deployment, AI integration requires securing against a new type of architectural challenge: non-deterministic outputs, API latency, and data privacy.
              </p>
              <p style={{ fontSize: "14px", color: "#52525b", margin: 0, lineHeight: "1.6" }}>
                Let{"\\'"}s take a look at three common enterprise concerns regarding AI adoption, and evaluate real-world solutions to mitigate these risks.
              </p>
            </div>

            {/* List Header Line */}
            <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />

            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", padding: "24px 0", borderBottom: "1px solid #f4f4f5", alignItems: "start" }}>
              <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "20px" }}>{"\\uD83D\\uDD12"}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>Data Privacy<br/>&amp; Compliance</div>
              </div>
              
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>THE QUESTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  Is our corporate data safe when using large language models like GPT-4 or Claude?
                </p>
              </div>

              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>OUR SOLUTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  Absolutely. We implement strict zero-retention API policies (via OpenAI Enterprise/Azure) where your data is never used to train base models. For highly sensitive data, we deploy private, open-source models (like Llama 3) on dedicated VPC infrastructure.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", padding: "24px 0", borderBottom: "1px solid #f4f4f5", alignItems: "start" }}>
              <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "20px" }}>{"\\uD83D\\uDCC8"}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>API Cost<br/>Control</div>
              </div>
              
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>THE QUESTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  How do you control runaway API costs during high-volume processing?
                </p>
              </div>

              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>OUR SOLUTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  We implement Semantic Caching to serve repeated queries for free, and Intelligent Routing which directs simple prompts to cheaper models (like Claude Haiku) while reserving expensive models (like GPT-4o) only for complex reasoning.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", padding: "24px 0", borderBottom: "1px solid #f4f4f5", alignItems: "start" }}>
              <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "20px" }}>{"\\u2699\\uFE0F"}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>Architecture<br/>Strategy</div>
              </div>
              
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>THE QUESTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  Should our organization use model Fine-Tuning or RAG?
                </p>
              </div>

              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>OUR SOLUTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  In 90% of enterprise use-cases, RAG (Retrieval-Augmented Generation) is the right choice for answering questions based on your documents. Fine-tuning is reserved for when you need the model to adopt a specific tone or highly specialized domain language.
                </p>
              </div>
            </div>

            {/* Gray Swan Style Footer Link */}
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #f4f4f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#52525b", letterSpacing: "0.5px" }}>ONENINELABS</span>
              </div>
              <span style={{ fontSize: "11px", color: "#a1a1aa", fontWeight: "500" }}>oneninelabs.com</span>
            </div>

          </div>
        </section>
`;

const updatedContent = content.substring(0, startIndex) + newLayout + content.substring(footerIndex);
fs.writeFileSync('app/services/ai-automation/page.js', updatedContent, 'utf8');
console.log("Successfully appended Gray Swan bottom sections!");
