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
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    badge: "Multi-Agent"
  },
  {
    title: "RAG & Vector Database Search",
    desc: "Pinecone, Qdrant & pgvector embeddings pipeline with hybrid keyword + semantic search over enterprise documents.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    badge: "Semantic RAG"
  },
  {
    title: "Custom Fine-Tuned Models",
    desc: "Domain-adapted Llama 3, Mistral & Qwen model fine-tuning deployed on private GPU clouds with zero data leaks.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>,
    badge: "Private Model"
  },
  {
    title: "LLM Cost & Latency Routing",
    desc: "Smart model router falling back from GPT-4o to Claude 3.5 Sonnet or Llama 3 based on prompt complexity and SLA.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
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
        {/* ── REDESIGNED AI HERO SECTION ── */}
        <section style={{
          position: "relative",
          background: "linear-gradient(135deg, #f0ebfa 0%, #e8e1f5 50%, #dfd5f0 100%)",
          padding: "120px 24px 80px",
          overflow: "hidden",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif"
        }}>
          {/* Background Concentric Circles */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -10%)", width: "1200px", height: "1200px", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "50%", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -10%)", width: "900px", height: "900px", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "50%", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -10%)", width: "600px", height: "600px", border: "1px solid rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.2)", borderRadius: "50%", zIndex: 0 }} />

          {/* Top Text Content */}
          <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "800px", marginBottom: "60px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              border: "1.5px solid #e2e8f0",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "11.5px",
              fontWeight: "800",
              color: "#0f172a",
              letterSpacing: "1.2px",
              marginBottom: "20px",
              boxShadow: "0 4px 12px rgba(124,58,237,0.05)"
            }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#7c3aed", boxShadow: "0 0 8px #7c3aed" }} />
              AI ENGINEERING & AUTOMATION
            </div>

            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: "850",
              color: "#0f172a",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              margin: "0 0 24px 0"
            }}>
              Autonomous AI Workflows & <span style={{ color: "#7c3aed" }}>LLM Pipelines</span>
            </h1>
            
            <p style={{
              fontSize: "17px",
              color: "#475569",
              lineHeight: "1.6",
              margin: "0 auto",
              maxWidth: "680px"
            }}>
              Enterprise AI solutions built with OpenAI GPT-4, Claude 3.5, and LlamaIndex. We deploy autonomous AI agents, semantic RAG vector search, and intelligent workflow automation that reduces operational costs by up to 60%.
            </p>
          </div>

          {/* Central Interactive Layout */}
          <div className="hero-interactive-container" style={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            minHeight: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            zIndex: 10
          }}>
            {/* Robot Image */}
            <div style={{
              width: "350px",
              position: "relative",
              zIndex: 5,
              display: "flex",
              justifyContent: "center",
              marginTop: "40px"
            }}>
              <img src="/ai_robot_mascot.jpg" alt="AI Agent Mascot" style={{ width: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
            </div>

            {/* Left Floating Elements */}
            <div className="hero-left-elements" style={{ position: "absolute", left: "0", top: "20%", display: "flex", flexDirection: "column", gap: "16px", zIndex: 6, alignItems: "flex-end" }}>
              <div style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", padding: "14px 20px", borderRadius: "16px 16px 0 16px", fontSize: "14px", color: "#334155", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", fontWeight: "500" }}>
                Extract invoice data from 5,000 PDFs?
              </div>
              <div style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", padding: "14px 20px", borderRadius: "16px 16px 0 16px", fontSize: "14px", color: "#334155", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", fontWeight: "500", alignSelf: "center", marginRight: "20px" }}>
                Draft a Q3 compliance report?
              </div>
              <div style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", padding: "14px 20px", borderRadius: "16px 16px 0 16px", fontSize: "14px", color: "#334155", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", fontWeight: "500" }}>
                Automate Level 1 Customer Support?
              </div>

              {/* Rating Card */}
              <div style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", padding: "16px", borderRadius: "16px", boxShadow: "0 15px 30px rgba(0,0,0,0.05)", marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px", alignSelf: "center", width: "100%", maxWidth: "220px" }}>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", textAlign: "center" }}>Rated 4.9 ★ by enterprise teams</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ display: "flex", marginLeft: "10px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#e2e8f0", border: "2px solid #fff", marginLeft: "-10px", zIndex: 4 }}></div>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#cbd5e1", border: "2px solid #fff", marginLeft: "-10px", zIndex: 3 }}></div>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#94a3b8", border: "2px solid #fff", marginLeft: "-10px", zIndex: 2 }}></div>
                  </div>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600", marginLeft: "8px" }}>More...</span>
                </div>
              </div>

              <Link href="/contact" style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                color: "#ffffff",
                padding: "16px 32px",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
                transition: "transform 0.2s ease",
                marginTop: "16px",
                alignSelf: "center"
              }}>
                Start Free Trial
              </Link>
            </div>

            {/* Right Chat Panel */}
            <div className="hero-right-elements" style={{ position: "absolute", right: "0", top: "10%", width: "380px", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.8)", padding: "24px", boxShadow: "0 30px 60px rgba(0,0,0,0.05)", zIndex: 6, display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "rgba(241, 245, 249, 0.8)", padding: "16px", borderRadius: "16px 16px 16px 0", fontSize: "14px", color: "#334155", lineHeight: "1.6" }}>
                I've connected to your Salesforce CRM and Stripe billing API. I found 14 accounts with expiring subscriptions next month. Should I draft personalized renewal emails based on their usage metrics?
              </div>
              <div style={{ alignSelf: "flex-end", background: "#ffffff", border: "1px solid #e2e8f0", padding: "12px 16px", borderRadius: "16px 16px 0 16px", fontSize: "14px", color: "#0f172a", fontWeight: "600", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                Yes, please draft them and show me a preview of the top 3.
              </div>
              <div style={{ background: "rgba(241, 245, 249, 0.8)", padding: "16px", borderRadius: "16px 16px 16px 0", fontSize: "14px", color: "#334155", lineHeight: "1.6" }}>
                Drafting emails using the Enterprise Tone template. Gathering usage data for Acme Corp, Globex, and Initech...
              </div>

              <div style={{ background: "#ffffff", padding: "8px 16px", borderRadius: "100px", fontSize: "13px", color: "#64748b", display: "inline-flex", alignItems: "center", gap: "8px", alignSelf: "center", marginTop: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0", cursor: "pointer" }}>
                Stop generating...
                <div style={{ width: "16px", height: "16px", background: "#cbd5e1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "6px", height: "6px", background: "#ffffff", borderRadius: "1px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESPONSIVE HERO STYLES ── */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 1024px) {
            .hero-interactive-container {
              flex-direction: column !important;
              align-items: center !important;
              gap: 40px;
              min-height: auto !important;
            }
            .hero-left-elements, .hero-right-elements {
              position: relative !important;
              left: auto !important;
              right: auto !important;
              top: auto !important;
              width: 100% !important;
              align-items: center !important;
            }
            .hero-right-elements {
              max-width: 100% !important;
            }
          }
        `}} />

        {/* ── PREMIUM CAPABILITIES GRID ── */}
        <section id="capabilities" style={{
          background: "#ffffff",
          padding: "100px 24px",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid #f1f5f9", paddingBottom: "32px", marginBottom: "48px", flexWrap: "wrap", gap: "32px" }}>
              <div style={{ maxWidth: "600px" }}>
                <span style={{ color: "#7c3aed", fontSize: "13px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", display: "block" }}>
                  AI CAPABILITIES
                </span>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "850", color: "#0f172a", margin: 0, letterSpacing: "-1px", lineHeight: "1.2" }}>
                  Intelligent Agent Orchestration
                </h2>
              </div>
              <div style={{ maxWidth: "500px" }}>
                <p style={{ fontSize: "15.5px", color: "#475569", margin: "0 0 20px 0", lineHeight: "1.7" }}>
                  We build intelligent AI agents, RAG vector search pipelines, and automated LLM workflows with OpenAI, Claude, and open-source models — lowering operational costs by 60%.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {aiCapabilities.map((c, i) => (
                <div key={i} style={{
                  background: "#ffffff",
                  border: "1.5px solid #f1f5f9",
                  borderRadius: "24px",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(124,58,237,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                    {c.icon}
                  </div>

                  <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", margin: "0 0 16px 0", letterSpacing: "-0.5px" }}>{c.title}</h4>

                  <div style={{ height: "1px", background: "#f1f5f9", width: "100%", margin: "8px 0 20px 0" }} />

                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                    BUSINESS IMPACT
                  </div>

                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.7", margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom text from Gray Swan image */}
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #f1f5f9" }}>
              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6", margin: "0 0 16px 0", maxWidth: "800px" }}>
                These agents interact with business-critical systems (CRM, code repos, customer data) and make autonomous decisions that directly impact revenue, customer experience, or operational speed.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                  <span style={{ fontSize: "11px", fontWeight: "800", color: "#64748b", letterSpacing: "1px" }}>ONENINELABS</span>
                </div>
                <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "600" }}>oneninelabs.com</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- GRAY SWAN STYLE: RISK PROFILES (TECH STACK) --- */}
        <section style={{ background: "#ffffff", padding: "80px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#7c3aed", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "850", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>
                Core Enterprise AI Stack
              </h2>
            </div>

            <p style={{ fontSize: "16px", color: "#475569", marginBottom: "64px", maxWidth: "800px", lineHeight: "1.7" }}>
              Our AI automation pipelines are built on three foundational dimensions that compound when combined:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {/* Card 1 */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "40px 32px", border: "1.5px solid #f1f5f9", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(90deg, #7c3aed, #00e5ff)" }} />
                <div style={{ fontSize: "11px", color: "#7c3aed", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", fontWeight: "800" }}>
                  DIMENSION 01
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 24px 0", color: "#0f172a" }}>
                  Language Models
                </h3>
                <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />

                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>What It Means</div>
                <p style={{ fontSize: "14.5px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and private Llama 3 deployments.
                </p>

                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Why It Matters</div>
                <p style={{ fontSize: "14.5px", color: "#0f172a", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>
                  Provides the core reasoning, text generation, and intent recognition engine that powers all downstream autonomous tasks.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "40px 32px", border: "1.5px solid #f1f5f9", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(90deg, #00e5ff, #3b82f6)" }} />
                <div style={{ fontSize: "11px", color: "#00e5ff", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", fontWeight: "800" }}>
                  DIMENSION 02
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 24px 0", color: "#0f172a" }}>
                  Agent Orchestration
                </h3>
                <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />

                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>What It Means</div>
                <p style={{ fontSize: "14.5px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  Frameworks like LangChain, LlamaIndex, AutoGen, and CrewAI.
                </p>

                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Why It Matters</div>
                <p style={{ fontSize: "14.5px", color: "#0f172a", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>
                  Connects base models to enterprise APIs, manages conversational memory, and routes complex multi-agent workflows.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "40px 32px", border: "1.5px solid #f1f5f9", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }} />
                <div style={{ fontSize: "11px", color: "#3b82f6", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", fontWeight: "800" }}>
                  DIMENSION 03
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 24px 0", color: "#0f172a" }}>
                  Vector Databases
                </h3>
                <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />

                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>What It Means</div>
                <p style={{ fontSize: "14.5px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  Pinecone, Qdrant, Milvus, and PostgreSQL pgvector data stores.
                </p>

                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Why It Matters</div>
                <p style={{ fontSize: "14.5px", color: "#0f172a", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>
                  Enables lightning-fast semantic search over massive proprietary datasets, feeding context directly into RAG pipelines.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* --- GRAY SWAN STYLE: FAILURE MODES (SECURITY & FAQ) --- */}
        {/* ── PREMIUM FAQ & SECURITY SECTION ── */}
        <section style={{ background: "#ffffff", padding: "60px 24px 120px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#7c3aed", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "850", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>
                Enterprise AI Adoption: Security & FAQ
              </h2>
            </div>

            <div style={{ maxWidth: "900px", marginBottom: "48px" }}>
              <p style={{ fontSize: "16px", color: "#475569", margin: "0 0 16px 0", lineHeight: "1.7" }}>
                While traditional engineering focuses on standard application deployment, AI integration requires securing against a new type of architectural challenge: non-deterministic outputs, API latency, and data privacy.
              </p>
              <p style={{ fontSize: "16px", color: "#475569", margin: 0, lineHeight: "1.7" }}>
                Let{"\'"}s take a look at three common enterprise concerns regarding AI adoption, and evaluate real-world solutions to mitigate these risks.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Row 1 */}
              <div style={{ background: "#ffffff", border: "1.5px solid #f1f5f9", borderRadius: "20px", padding: "32px", display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", alignItems: "start", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(0,229,255,0.1) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", lineHeight: "1.3", letterSpacing: "-0.5px" }}>Data Privacy<br />& Compliance</div>
                </div>

                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>THE QUESTION</div>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                    Is our corporate data safe when using large language models like GPT-4 or Claude?
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>OUR SOLUTION</div>
                  <p style={{ fontSize: "15px", color: "#0f172a", lineHeight: "1.6", margin: 0, fontWeight: "500" }}>
                    Absolutely. We implement strict zero-retention API policies (via OpenAI Enterprise/Azure) where your data is never used to train base models. For highly sensitive data, we deploy private, open-source models (like Llama 3) on dedicated VPC infrastructure.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ background: "#ffffff", border: "1.5px solid #f1f5f9", borderRadius: "20px", padding: "32px", display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", alignItems: "start", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(59,130,246,0.1) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", lineHeight: "1.3", letterSpacing: "-0.5px" }}>API Cost<br />Control</div>
                </div>

                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>THE QUESTION</div>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                    How do you control runaway API costs during high-volume processing?
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#10b981", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>OUR SOLUTION</div>
                  <p style={{ fontSize: "15px", color: "#0f172a", lineHeight: "1.6", margin: 0, fontWeight: "500" }}>
                    We implement Semantic Caching to serve repeated queries for free, and Intelligent Routing which directs simple prompts to cheaper models (like Claude Haiku) while reserving expensive models (like GPT-4o) only for complex reasoning.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ background: "#ffffff", border: "1.5px solid #f1f5f9", borderRadius: "20px", padding: "32px", display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", alignItems: "start", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(234,88,12,0.1) 0%, rgba(236,72,153,0.1) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", lineHeight: "1.3", letterSpacing: "-0.5px" }}>Architecture<br />Strategy</div>
                </div>

                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>THE QUESTION</div>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                    Should our organization use model Fine-Tuning or RAG?
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#ea580c", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>OUR SOLUTION</div>
                  <p style={{ fontSize: "15px", color: "#0f172a", lineHeight: "1.6", margin: 0, fontWeight: "500" }}>
                    In 90% of enterprise use-cases, RAG (Retrieval-Augmented Generation) is the right choice for answering questions based on your documents. Fine-tuning is reserved for when you need the model to adopt a specific tone or highly specialized domain language.
                  </p>
                </div>
              </div>
            </div>


            {/* ── PREMIUM PROBLEM & SOLUTION ── */}
            <div style={{ padding: "80px 0 0 0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "64px", alignItems: "start" }}>
                
                {/* The Problem */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ width: "24px", height: "6px", background: "#f43f5e", borderRadius: "3px" }} />
                    <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>
                      The Problem
                    </h2>
                  </div>

                  <p style={{ fontSize: "15px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.7" }}>
                    Traditional generative AI deployments attempt to solve security and hallucinations with overly restrictive rules that degrade user experience:
                  </p>

                  <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />

                  <ul style={{ margin: "0 0 24px 0", paddingLeft: "24px", color: "#334155", fontSize: "15px", lineHeight: "1.8", fontWeight: "500" }}>
                    <li>Block legitimate requests (high false positives)</li>
                    <li>Add significant latency per request</li>
                    <li>Require constant manual tuning as the agent evolves</li>
                    <li>Focus on &quot;bad words&quot; instead of understanding intent</li>
                  </ul>

                  <p style={{ fontSize: "14px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                    Companies face a choice between accepting unacceptable risk or deploying a slow, frustrating user experience that delivers marginal ROI.
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ width: "24px", height: "6px", background: "#3b82f6", borderRadius: "3px" }} />
                    <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>
                      How OneNineLabs Protects ROI
                    </h2>
                  </div>

                  <p style={{ fontSize: "15px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.7" }}>
                    Our AI architecture is built on the principle that security and user experience are not trade-offs. We prevent policy violations and hallucinations without adding friction to legitimate use cases.
                  </p>

                  <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                    <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", border: "1.5px solid #f1f5f9", borderRadius: "16px", padding: "24px", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                      <div style={{ fontSize: "11px", color: "#3b82f6", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "800" }}>
                        COMPONENT 01
                      </div>
                      <h3 style={{ fontSize: "20px", fontWeight: "800", margin: "0 0 16px 0", color: "#0f172a" }}>Offensive</h3>
                      <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                      <p style={{ fontSize: "14px", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                        Continuously red-teams your agent to discover adversarial inputs, policy drift, and exfiltration vectors before deployment.
                      </p>
                    </div>

                    <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)", border: "1.5px solid #f1f5f9", borderRadius: "16px", padding: "24px", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                      <div style={{ fontSize: "11px", color: "#10b981", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "800" }}>
                        COMPONENT 02
                      </div>
                      <h3 style={{ fontSize: "20px", fontWeight: "800", margin: "0 0 16px 0", color: "#0f172a" }}>Defensive</h3>
                      <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                      <p style={{ fontSize: "14px", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                        Policy-aware runtime that understands enterprise business logic and data permissions, not just basic keyword filters.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ── DEPLOYMENT OPTIONS ── */}
            <div style={{ padding: "100px 0 0 0" }}>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "850", color: "#0f172a", margin: "0 0 16px 0", letterSpacing: "-0.5px" }}>
                  Deployment Options
                </h2>
                <p style={{ fontSize: "16px", color: "#475569", margin: "0 auto", maxWidth: "600px", lineHeight: "1.7" }}>
                  Flexible infrastructure configured to meet your exact security and operational requirements.
                </p>
              </div>

              <div style={{ background: "#ffffff", border: "1.5px solid #f1f5f9", borderRadius: "24px", padding: "40px", boxShadow: "0 15px 35px rgba(0,0,0,0.03)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
                <div>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0" }}>Cloud SaaS</h3>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>WHAT IT MEANS</div>
                  <p style={{ fontSize: "15px", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                    We host and manage everything; you just call our secure enterprise API endpoints.
                  </p>
                </div>

                <div>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0" }}>On-Prem / VPC</h3>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>WHAT IT MEANS</div>
                  <p style={{ fontSize: "15px", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                    Runs securely in your Kubernetes cluster (Docker/Helm deployment) with zero data egress.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Link */}
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#64748b", letterSpacing: "0.5px" }}>ONENINELABS</span>
              </div>
              <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "600" }}>oneninelabs.com</span>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
