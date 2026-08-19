import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "AI & Automation Engineering — LLMs, Agents & RAG | OneNineLabs",
  description: "Enterprise AI solutions built with OpenAI GPT-4, Claude 3.5, LangChain & LlamaIndex. Autonomous AI agents, RAG vector search, and workflow automation.",
  keywords: ["AI development company", "LLM integration", "autonomous AI agents", "RAG vector search", "Pinecone developer", "LangChain engineering"],
  alternates: { canonical: "/services/ai-automation", languages: { "en-US": "/services/ai-automation", en: "/services/ai-automation", "hi-IN": "/services/ai-automation", "x-default": "/services/ai-automation" } },
  openGraph: { title: "AI & Automation Engineering — LLMs & Agents | OneNineLabs", description: "Custom AI agent pipelines, vector search RAG systems & workflow automation.", url: "https://oneninelabs.com/services/ai-automation", type: "website" },
  robots: { index: true, follow: true },
};

const PRIMARY = "#7c3aed";
const GRAD_FROM = "#4c1d95";
const GRAD_TO = "#7c3aed";
const GLOW = "rgba(124,58,237,0.15)";

const aiCapabilities = [
  {
    title: "Autonomous AI Agents & Workflows",
    desc: "Multi-agent orchestration with AutoGen & CrewAI for automated customer support, lead routing, and code synthesis.",
    icon: "🤖",
    badge: "Multi-Agent"
  },
  {
    title: "RAG & Vector Database Search",
    desc: "Pinecone, Qdrant & pgvector embeddings pipeline with hybrid keyword + semantic search over enterprise documents.",
    icon: "🧠",
    badge: "Semantic RAG"
  },
  {
    title: "Custom Fine-Tuned Models",
    desc: "Domain-adapted Llama 3, Mistral & Qwen model fine-tuning deployed on private GPU clouds with zero data leaks.",
    icon: "⚡",
    badge: "Private Model"
  },
  {
    title: "LLM Cost & Latency Routing",
    desc: "Smart model router falling back from GPT-4o to Claude 3.5 Sonnet or Llama 3 based on prompt complexity and SLA.",
    icon: "💰",
    badge: "Cost Router"
  }
];

const faqs = [
  { q: "Which AI models do you build with?", a: "We work with OpenAI GPT-4o, Anthropic Claude 3.5, and open-source models like Llama 3, Mistral and Qwen — selecting per task for quality and cost." },
  { q: "What is RAG and how does it help my business?", a: "Retrieval-Augmented Generation grounds LLM answers in your own documents using vector search (Pinecone, Qdrant, pgvector). It improves accuracy, reduces hallucinations, and keeps answers on-brand." },
  { q: "Can you fine-tune custom models for our domain?", a: "Yes — we run domain-adapted LoRA/QLoRA fine-tuning of Llama 3, Mistral and Qwen on private GPU clouds with zero data leakage and full ownership." },
  { q: "How do you control LLM API costs?", a: "Our smart model router selects the cheapest model that meets each prompt's quality and latency SLA — we typically cut LLM API spend by up to 60%." },
  { q: "Is our data secure in AI systems?", a: "Yes. Data stays in encrypted storage, models run on private infrastructure where required, and we follow SOC 2-ready guardrails with tracing and audit logs." },
  { q: "How do you measure AI agent accuracy?", a: "We build evals, tracing and guardrails into every pipeline — we hold RAG accuracy to 99.4% and monitor latency and cost in production dashboards." },
];

export default function AiAutomationServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "AI & Automation Engineering", item: `${siteUrl}/services/ai-automation` },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/ai-automation#service`,
    name: "AI & Automation Engineering",
    serviceType: "AI and Intelligent Automation",
    url: `${siteUrl}/services/ai-automation`,
    description: "Enterprise AI solutions built with OpenAI GPT-4, Claude 3.5, LangChain & LlamaIndex. Autonomous AI agents, RAG vector search, and workflow automation.",
    provider: { "@type": "Organization", name: "OneNineLabs", url: siteUrl },
    areaServed: { "@type": "Country", name: "Worldwide" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <style>{servicePageStyles(PRIMARY, GRAD_FROM, GRAD_TO, GLOW)}</style>

      <div className="vd-wrap">


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
                  We build intelligent AI agents, RAG vector search pipelines, and automated LLM workflows with OpenAI, Claude, and open-source models {"\u2014"} lowering operational costs by 60%.
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
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "#71717a" }}>ONENINELABS</span>
                </div>
                <span style={{ fontSize: "10px", color: "#a1a1aa" }}>oneninelabs.com</span>
              </div>
            </div>

          </div>
        </section>

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
                Let{"\'"}s take a look at three common enterprise concerns regarding AI adoption, and evaluate real-world solutions to mitigate these risks.
              </p>
            </div>

            {/* List Header Line */}
            <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />

            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", padding: "24px 0", borderBottom: "1px solid #f4f4f5", alignItems: "start" }}>
              <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "20px" }}>{"\uD83D\uDD12"}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>Data Privacy<br />&amp; Compliance</div>
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
                <div style={{ fontSize: "20px" }}>{"\uD83D\uDCC8"}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>API Cost<br />Control</div>
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
                <div style={{ fontSize: "20px" }}>{"\u2699\uFE0F"}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>Architecture<br />Strategy</div>
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
                    <div style={{ fontSize: "24px", marginBottom: "16px", color: "#18181b" }}>{"\u2601\uFE0F"}</div>
                    <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>Cloud SaaS</h3>
                    <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                    <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                      We host and manage everything; you just call our API.
                    </p>
                  </div>

                  <div>
                    <div style={{ fontSize: "24px", marginBottom: "16px", color: "#18181b" }}>{"\uD83C\uDFE2"}</div>
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
            {/* Gray Swan Style Footer Link */}
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #f4f4f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#52525b", letterSpacing: "0.5px" }}>ONENINELABS</span>
              </div>
              <span style={{ fontSize: "11px", color: "#a1a1aa", fontWeight: "500" }}>oneninelabs.com</span>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
