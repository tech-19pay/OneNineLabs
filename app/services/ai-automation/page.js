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

        {/* ─── 1. HERO: NEURAL AGENT NETWORK CANVAS ─── */}
        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #faf5ff 100%)",
          padding: "135px 24px 90px 24px",
          borderBottom: "1px solid #e2e8f0",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 640px",
            gap: "40px",
            alignItems: "flex-start"
          }}>
            {/* Left Content Column */}
            <div className="vd-hero-left" style={{ textAlign: "left", zIndex: 2, marginTop: "10px" }}>
              <div style={{
                fontSize: "13.5px",
                fontWeight: "800",
                color: "#7c3aed",
                marginBottom: "16px",
                letterSpacing: "0.4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f3e8ff",
                padding: "6px 14px",
                borderRadius: "99px",
                border: "1px solid #e9d5ff"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7c3aed" }} /> Enterprise AI Agents &amp; RAG Systems
              </div>

              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(34px, 4.2vw, 54px)",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1.12",
                letterSpacing: "-1.5px",
                marginBottom: "20px",
                maxWidth: "540px"
              }}>
                Autonomous AI Workflows &amp; <span style={{ color: "#7c3aed" }}>LLM Pipelines</span>
              </h1>

              <p style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.65",
                marginBottom: "32px",
                maxWidth: "490px",
                fontWeight: "400"
              }}>
                We build intelligent AI agents, RAG vector search pipelines, and automated LLM workflows with OpenAI, Claude, and open-source models — lowering operational costs by 60%.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <Link
                  href="/#contact"
                  style={{
                    background: "#7c3aed",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "99px",
                    padding: "15px 32px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  Build Custom AI Agent
                  <span style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255, 255, 255, 0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px"
                  }}>
                    →
                  </span>
                </Link>
              </div>

              {/* AI Key Stats */}
              <div style={{
                display: "flex",
                gap: "28px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0"
              }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", lineHeight: "1.1" }}>99.4%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>RAG Accuracy</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#7c3aed", lineHeight: "1.1" }}>-60%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>LLM API Costs</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981", lineHeight: "1.1" }}>120ms</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Embedding Speed</div>
                </div>
              </div>
            </div>

            {/* Right Neural Network Node HUD */}
            <div className="vd-hero-right" style={{ position: "relative", minHeight: "450px" }}>
              <div style={{
                background: "#0f172a",
                borderRadius: "24px",
                padding: "24px",
                color: "#fff",
                boxShadow: "0 25px 60px rgba(124, 58, 237, 0.15)",
                border: "1.5px solid #1e293b",
                textAlign: "left"
              }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#a78bfa", marginBottom: "16px", display: "flex", justifyContent: "space-between" }}>
                  <span>AI AGENT ROUTER v2.4</span>
                  <span>STATUS: ACTIVE ⚡</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ background: "#1e293b", padding: "12px 16px", borderRadius: "12px", border: "1px solid #334155" }}>
                    <div style={{ fontSize: "11px", color: "#94a3b8" }}>Input Prompt</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#f8fafc", marginTop: "2px" }}>"Query vector database for B2B contract terms..."</div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span style={{ fontSize: "14px", color: "#a78bfa" }}>↓ Vector Embedding Route</span>
                  </div>

                  <div style={{ background: "#2e1065", padding: "14px 16px", borderRadius: "12px", border: "1px solid #6b21a8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "800", color: "#c084fc" }}>🧠 Pinecone RAG Vector DB</div>
                      <div style={{ fontSize: "11px", color: "#d8b4fe" }}>Cosine similarity 0.96 matched</div>
                    </div>
                    <span style={{ background: "#7c3aed", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>RAG Hit</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span style={{ fontSize: "14px", color: "#a78bfa" }}>↓ Streaming Completion</span>
                  </div>

                  <div style={{ background: "#064e3b", padding: "12px 16px", borderRadius: "12px", border: "1px solid #047857" }}>
                    <div style={{ fontSize: "11px", color: "#a7f3d0" }}>Agent Response</div>
                    <div style={{ fontSize: "12px", fontWeight: "600", color: "#ecfdf5", marginTop: "2px" }}>"Contract terms verified against SOC 2 compliance policy."</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 2. AI CAPABILITIES GRID ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#7c3aed", marginBottom: "12px" }}>
              Enterprise AI Capabilities
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "48px" }}>
              Autonomous Agents &amp; Intelligent Workflows
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {aiCapabilities.map((c, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 24px", textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "32px" }}>{c.icon}</span>
                    <span style={{ background: "#f3e8ff", color: "#7c3aed", border: "1px solid #e9d5ff", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{c.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>{c.title}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2.5. AI ENGINEERING FAQS ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>
              AI & Automation Engineering FAQs
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqs.map((f, i) => (
                <details key={i} style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "18px 24px", cursor: "pointer" }}>
                  <summary style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px" }}>{f.q}</summary>
                  <p style={{ color: "#64748b", marginTop: "12px", lineHeight: "1.65", fontSize: "14.5px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. CTA BANNER ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              Ready to Automate Your Business With AI?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Get a custom AI workflow evaluation &amp; vector search proof-of-concept from our AI team in 48 hours.
            </p>
            <Link href="/#contact" style={{ background: "#334155", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book AI Architecture Session →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
