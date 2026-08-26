import Link from "next/link";

const PRIMARY = "#7c3aed";

/* ── DATA ──────────────────────────────────────────────── */

const heroChecks = [
  { title: "Autonomous AI Agents", desc: "Multi-agent workflows for support, ops & sales." },
  { title: "Grounded RAG Answers", desc: "99.4% retrieval accuracy on your documents." },
  { title: "Cost-Smart Routing", desc: "Up to 60% lower LLM API spend with smart routing." },
  { title: "Private & Secure", desc: "Zero-retention APIs or private VPC models." }
];

const marqueeItems = [
  "OpenAI GPT-4o", "Anthropic Claude", "Llama 3", "Mistral", "Qwen",
  "LangChain", "LlamaIndex", "AutoGen", "CrewAI",
  "Pinecone", "Qdrant", "pgvector"
];

const services = [
  { icon: "🤖", title: "Autonomous AI Agents", desc: "Multi-agent orchestration with LangGraph, AutoGen & CrewAI for customer support, lead routing, research and code synthesis workflows.", tags: ["LangGraph", "CrewAI", "Tool Use"] },
  { icon: "🔎", title: "RAG & Vector Search", desc: "Hybrid keyword + semantic retrieval over enterprise documents with Pinecone, Qdrant or pgvector — grounded answers with citations.", tags: ["Pinecone", "Qdrant", "pgvector"] },
  { icon: "🔌", title: "LLM Integration & APIs", desc: "Production integrations with OpenAI, Anthropic and open-source models — streaming, function calling, structured outputs and retries.", tags: ["GPT-4o", "Claude", "Streaming"] },
  { icon: "🧠", title: "Custom Model Fine-Tuning", desc: "Domain-adapted LoRA/QLoRA fine-tuning of Llama 3, Mistral & Qwen on private GPU clouds — zero data leakage, full ownership.", tags: ["LoRA", "QLoRA", "Private GPU"] },
  { icon: "⚙️", title: "Workflow Automation", desc: "Connect LLM steps to CRM, ERP, billing and ticketing systems — invoice extraction, reporting, approvals and data entry on autopilot.", tags: ["CRM / ERP", "Webhooks", "Queues"] },
  { icon: "💬", title: "AI Chatbots & Copilots", desc: "Customer-facing support bots and internal copilots with tone control, escalation paths and analytics dashboards.", tags: ["Support", "Copilots", "Analytics"] },
  { icon: "📉", title: "LLM Cost & Latency Routing", desc: "Semantic caching plus intelligent model routing — simple prompts to cheap models, complex reasoning to frontier models only.", tags: ["Caching", "Routing", "SLA"] },
  { icon: "🛡️", title: "AI Security & Evals", desc: "Guardrails, red-teaming, prompt-injection defense, tracing and eval suites — SOC 2-ready evidence from day one.", tags: ["Guardrails", "Red-Team", "Tracing"] }
];

const stackDimensions = [
  {
    n: "DIMENSION 01",
    accent: "linear-gradient(90deg, #7c3aed, #a78bfa)",
    color: "#7c3aed",
    title: "Language Models",
    means: "OpenAI GPT-4o, Anthropic Claude and private Llama 3 / Mistral deployments.",
    matters: "Provides the core reasoning, text generation and intent-recognition engine that powers all downstream autonomous tasks."
  },
  {
    n: "DIMENSION 02",
    accent: "linear-gradient(90deg, #a78bfa, #3b82f6)",
    color: "#6d28d9",
    title: "Agent Orchestration",
    means: "Frameworks like LangChain, LlamaIndex, LangGraph, AutoGen and CrewAI.",
    matters: "Connects base models to enterprise APIs, manages conversational memory and routes complex multi-agent workflows."
  },
  {
    n: "DIMENSION 03",
    accent: "linear-gradient(90deg, #3b82f6, #06b6d4)",
    color: "#3b82f6",
    title: "Vector Databases",
    means: "Pinecone, Qdrant, Milvus and PostgreSQL pgvector data stores.",
    matters: "Enables lightning-fast semantic search over massive proprietary datasets, feeding context directly into RAG pipelines."
  }
];

const concerns = [
  {
    icon: "🔒",
    tint: "rgba(124,58,237,0.1)",
    labelColor: PRIMARY,
    title: "Data Privacy & Compliance",
    question: "Is our corporate data safe when using large language models like GPT-4 or Claude?",
    answer: "Absolutely. We implement strict zero-retention API policies (OpenAI Enterprise / Azure OpenAI) so your data is never used to train base models. For highly sensitive data we deploy private, open-source models like Llama 3 on dedicated VPC infrastructure."
  },
  {
    icon: "📊",
    tint: "rgba(16,185,129,0.1)",
    labelColor: "#10b981",
    title: "API Cost Control",
    question: "How do you control runaway API costs during high-volume processing?",
    answer: "We implement semantic caching to serve repeated queries for free, and intelligent routing that directs simple prompts to cheaper models while reserving expensive frontier models only for complex reasoning — typically cutting LLM spend by up to 60%."
  },
  {
    icon: "🧭",
    tint: "rgba(234,88,12,0.1)",
    labelColor: "#ea580c",
    title: "Architecture Strategy",
    question: "Should our organization use model fine-tuning or RAG?",
    answer: "In 90% of enterprise use cases, RAG (Retrieval-Augmented Generation) is the right choice for answering questions from your documents. Fine-tuning is reserved for adopting a specific tone or highly specialized domain language."
  }
];

const guardrails = [
  { n: "COMPONENT 01", color: "#3b82f6", title: "Red-Team Before Launch", desc: "We continuously red-team your agent to discover adversarial inputs, policy drift and exfiltration vectors before deployment — not after." },
  { n: "COMPONENT 02", color: "#10b981", title: "Policy-Aware Runtime", desc: "Guardrails that understand your business logic and data permissions — not brittle keyword filters that block legitimate requests." },
  { n: "COMPONENT 03", color: "#7c3aed", title: "Evals & Observability", desc: "Every pipeline ships with eval suites, tracing and production dashboards so accuracy, latency and cost are measured, not guessed." }
];

const processSteps = [
  { num: "01", title: "Discovery & Use-Case Audit", desc: "We map your workflows, data sources and success metrics, then identify the highest-ROI automation targets with a fixed proposal.", metric: "48h proposal" },
  { num: "02", title: "Data & Feasibility Review", desc: "Document quality, PII scan and retrieval test on your real data — we prove feasibility before writing pipeline code.", metric: "Real-data PoC" },
  { num: "03", title: "Pipeline Build Sprints", desc: "Weekly demo cycles: agents, RAG indexes, integrations and UIs, with full tracing and staging environments from day one.", metric: "Weekly demos" },
  { num: "04", title: "Evals, Guardrails & Red-Team", desc: "Accuracy evals, prompt-injection defense, policy guardrails and a red-team pass before anything reaches your users.", metric: "99.4% accuracy" },
  { num: "05", title: "Pilot with Your Team", desc: "Controlled rollout to one team or workflow with feedback loops, edge-case capture and cost monitoring.", metric: "Pilot cohort" },
  { num: "06", title: "Scale & Continuous Tuning", desc: "Company-wide rollout with SLA-backed monitoring, model updates, new use-cases and monthly optimization reviews.", metric: "24/7 SLA" }
];

const faqs = [
  { q: "Which AI models do you build with?", a: "We work with OpenAI GPT-4o, Anthropic Claude 3.5, and open-source models like Llama 3, Mistral and Qwen — selecting per task for quality and cost." },
  { q: "What is RAG and how does it help my business?", a: "Retrieval-Augmented Generation grounds LLM answers in your own documents using vector search (Pinecone, Qdrant, pgvector). It improves accuracy, reduces hallucinations, and keeps answers on-brand." },
  { q: "Can you fine-tune custom models for our domain?", a: "Yes — we run domain-adapted LoRA/QLoRA fine-tuning of Llama 3, Mistral and Qwen on private GPU clouds with zero data leakage and full ownership." },
  { q: "How do you control LLM API costs?", a: "Our smart model router selects the cheapest model that meets each prompt's quality and latency SLA — we typically cut LLM API spend by up to 60%." },
  { q: "Is our data secure in AI systems?", a: "Yes. Data stays in encrypted storage, models run on private infrastructure where required, and we follow SOC 2-ready guardrails with tracing and audit logs." },
  { q: "How do you measure AI agent accuracy?", a: "We build evals, tracing and guardrails into every pipeline — we hold RAG accuracy to 99.4% and monitor latency and cost in production dashboards." }
];

const pill = {
  background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0",
  padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700"
};

/* ── SMALL HELPERS ─────────────────────────────────────── */

function MockTerminal({ title, titleColor, children, status, statusColor }) {
  return (
    <div className="dashboard-mockup" style={{ background: "#0f172a", border: "1px solid #1e293b" }}>
      <div className="mockup-header" style={{ borderBottom: "1px solid #334155" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
          <span className="mockup-title" style={{ color: titleColor, fontFamily: "monospace", fontSize: "7px" }}>{title}</span>
        </div>
      </div>
      <div className="mockup-body" style={{ height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "monospace", color: "#cbd5e1" }}>
        <div style={{ fontSize: "6.5px", lineHeight: "1.5" }}>{children}</div>
        <div style={{ background: "#1e293b", padding: "4px 6px", borderRadius: "4px", fontSize: "6px", border: "1px solid #334155" }}>
          <span style={{ color: statusColor }}>{status}</span>
        </div>
      </div>
    </div>
  );
}

/* ── PAGE ──────────────────────────────────────────────── */

export default function AiAutomationPageClean() {
  return (
    <div className="vd-wrap" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ═══ 1. HERO ═══ */}
      <section style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f5f3ff 50%, #ede9fe 100%)",
        padding: "115px 24px 80px 24px",
        borderBottom: "1px solid #f1f5f9",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="aic-hero-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "56px", alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ textAlign: "left", zIndex: 2 }}>
            <div className="vd-badge-tag" style={{ color: PRIMARY, background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.25)" }}>AI Engineering & Automation</div>
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(32px, 4.2vw, 48px)", fontWeight: "800", color: "#1e1b4b",
              lineHeight: "1.12", letterSpacing: "-1.5px", marginBottom: "20px"
            }}>
              Autonomous AI workflows &amp; <span className="aic-highlight">LLM pipelines</span> that ship to production
            </h1>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "36px", maxWidth: "560px", fontWeight: "500" }}>
              Enterprise AI built on GPT-4o, Claude and open-source models — autonomous agents, semantic RAG search and workflow automation that cut operational costs by up to 60%.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/contact" className="aic-btn-dark">Start AI Project →</Link>
              <a href="#capabilities" className="aic-btn-ghost">Explore Capabilities</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "600px" }}>
              {heroChecks.map((item, i) => (
                <div key={i} className="aic-check-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ color: "#10b981", fontWeight: "900", fontSize: "14px" }}>✓</span>
                    <h4 style={{ fontSize: "14px", fontWeight: "800", color: "#1e1b4b", margin: 0 }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: "12px", color: "#64748b", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — MASCOT + AGENT CONSOLE */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
            <div className="aic-phone-wrapper" style={{ background: "#ffffff", borderRadius: "36px", padding: "16px", boxShadow: "0 25px 60px rgba(124,58,237,0.12)", maxWidth: "360px", width: "100%" }}>
              <img src="/ai_robot_mascot.jpg" alt="AI Agent Mascot" style={{ width: "100%", borderRadius: "24px", display: "block", marginBottom: "12px" }} />
              <div style={{ background: "#0f172a", borderRadius: "16px", padding: "14px 16px", color: "#ffffff", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                  <span style={{ fontSize: "10.5px", fontWeight: "800", color: "#e2e8f0" }}>Renewal Agent — running</span>
                </div>
                <div style={{ fontSize: "10px", color: "#94a3b8", lineHeight: "1.8", fontFamily: "monospace" }}>
                  <span style={{ color: "#34d399" }}>✓</span> Connected to Salesforce CRM<br />
                  <span style={{ color: "#34d399" }}>✓</span> 14 expiring accounts found<br />
                  <span style={{ color: "#a78bfa" }}>→</span> Drafting 14 renewal emails…
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="aic-float-chip" style={{ position: "absolute", left: "-20px", top: "60px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "12px 18px", boxShadow: "0 16px 40px rgba(15,23,42,0.12)", display: "flex", alignItems: "center", gap: "10px", zIndex: 3 }}>
              <span style={{ fontSize: "20px" }}>🎯</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>99.4% RAG Accuracy</div>
                <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>Measured with eval suites</div>
              </div>
            </div>
            <div className="aic-float-chip2" style={{ position: "absolute", right: "-16px", bottom: "56px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "12px 18px", boxShadow: "0 16px 40px rgba(15,23,42,0.12)", display: "flex", alignItems: "center", gap: "10px", zIndex: 3 }}>
              <span style={{ fontSize: "20px" }}>📉</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>−60% LLM Spend</div>
                <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>Smart model routing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. TECH MARQUEE ═══ */}
      <section className="vd-marquee-section">
        <div className="vd-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="vd-marquee-item" key={i}><span className="sep">◆</span>{item}</span>
          ))}
        </div>
      </section>

      {/* ═══ 4. CAPABILITY TERMINAL CARDS ═══ */}
      <section id="capabilities" style={{ background: "#f8fafc", padding: "88px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "760px" }}>
          <span style={{ fontSize: "13px", fontWeight: "900", letterSpacing: "2.5px", textTransform: "uppercase", color: "#0f172a", display: "block", marginBottom: "12px" }}>OUR CAPABILITIES</span>
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-1px", margin: "0 0 12px 0" }}>Our AI Engineering Stack</h2>
          <p style={{ color: "#475569", fontSize: "16px", fontWeight: "600", margin: 0 }}>Agents, retrieval pipelines and cost routing — built, evaluated and monitored for production.</p>
        </div>

        <div className="reports-grid">
          {/* CARD 1: Agents */}
          <div className="report-card">
            <MockTerminal title="renewal_crew.py — CrewAI Agents" titleColor="#a78bfa" status="✓ 14 renewals drafted • 3 sent for human review" statusColor="#4ade80">
              <span style={{ color: "#c084fc" }}>crew</span> = <span style={{ color: "#facc15" }}>Crew</span>(agents=[sdr, writer],<br />
              &nbsp;&nbsp;tasks=[research, draft], llm=<span style={{ color: "#4ade80" }}>&quot;gpt-4o&quot;</span>)<br />
              <span style={{ color: "#c084fc" }}>result</span> = crew.<span style={{ color: "#facc15" }}>kickoff</span>(inputs=leads)<br />
              <span style={{ color: "#64748b" }}>{"// tools: salesforce, stripe, gmail"}</span>
            </MockTerminal>
            <h3 className="card-title">Autonomous AI Agents</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Multi-agent workflows that read your CRM, draft, decide and execute — with human-in-the-loop checkpoints where it matters.
            </p>
            <div className="card-buttons">
              <Link href="#services" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Scope an agent</Link>
            </div>
          </div>

          {/* CARD 2: RAG */}
          <div className="report-card">
            <MockTerminal title="rag_pipeline.py — Pinecone" titleColor="#38bdf8" status="✓ 99.4% retrieval accuracy • 42ms p95" statusColor="#4ade80">
              <span style={{ color: "#38bdf8" }}>index</span>.<span style={{ color: "#facc15" }}>upsert</span>(<span style={{ color: "#c084fc" }}>embed</span>(docs))<br />
              <span style={{ color: "#c084fc" }}>hits</span> = index.<span style={{ color: "#facc15" }}>query</span>(hybrid(q), k=<span style={{ color: "#38bdf8" }}>8</span>)<br />
              <span style={{ color: "#c084fc" }}>answer</span> = llm(q, context=hits,<br />
              &nbsp;&nbsp;citations=<span style={{ color: "#38bdf8" }}>True</span>)
            </MockTerminal>
            <h3 className="card-title">RAG &amp; Vector Search</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Hybrid semantic + keyword search over your documents with cited, grounded answers — measured by an eval suite, not vibes.
            </p>
            <div className="card-buttons">
              <Link href="#services" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Scope a pipeline</Link>
            </div>
          </div>

          {/* CARD 3: Cost Router */}
          <div className="report-card">
            <MockTerminal title="router.ts — LLM Cost Routing" titleColor="#f59e0b" status="⚡ 60% API cost saved this month" statusColor="#facc15">
              <span style={{ color: "#38bdf8" }}>const</span> model = <span style={{ color: "#c084fc" }}>route</span>(prompt);<br />
              <span style={{ color: "#64748b" }}>{"// simple → haiku • complex → gpt-4o"}</span><br />
              <span style={{ color: "#c084fc" }}>cache</span>.<span style={{ color: "#facc15" }}>hit</span> ? free : <span style={{ color: "#c084fc" }}>await</span> llm;<br />
              <span style={{ color: "#38bdf8" }}>metrics</span>.<span style={{ color: "#facc15" }}>push</span>(cost, latency);
            </MockTerminal>
            <h3 className="card-title">Cost &amp; Latency Routing</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Semantic caching plus per-prompt model selection keeps quality high while LLM spend drops by up to 60%.
            </p>
            <div className="card-buttons">
              <Link href="#services" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Audit my spend</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. FULL AI SERVICES GRID ═══ */}
      <section id="services" style={{ background: "#ffffff", padding: "104px 24px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.25)" }}>Full-Stack AI</div>
        <h2 className="vd-section-h2">Complete AI &amp; Automation Services</h2>
        <p className="vd-section-p" style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          From the first feasibility PoC to company-wide rollout — one senior team covers every layer of your AI stack.
        </p>

        <div className="vd-results-grid">
          {services.map((s, i) => (
            <div className="vd-result-card" key={i} style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: "22px" }}>{s.icon}</div>
              </div>
              <div className="vd-result-label">{s.title}</div>
              <div className="vd-result-desc">
                {s.desc}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {s.tags.map((t, ti) => <span key={ti} style={pill}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 6. CORE ENTERPRISE AI STACK ═══ */}
      <section style={{ background: "#f8fafc", padding: "96px 24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "6px", background: PRIMARY, borderRadius: "3px" }} />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "900", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>Core Enterprise AI Stack</h2>
          </div>
          <p style={{ fontSize: "16px", color: "#475569", marginBottom: "52px", maxWidth: "800px", lineHeight: "1.7" }}>
            Our AI automation pipelines are built on three foundational dimensions that compound when combined:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {stackDimensions.map((d, i) => (
              <div key={i} className="aic-dim-card">
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: d.accent }} />
                <div style={{ fontSize: "11px", color: d.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", fontWeight: "800" }}>{d.n}</div>
                <h3 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 24px 0", color: "#0f172a" }}>{d.title}</h3>
                <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />
                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>What It Means</div>
                <p style={{ fontSize: "14.5px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.6" }}>{d.means}</p>
                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Why It Matters</div>
                <p style={{ fontSize: "14.5px", color: "#0f172a", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>{d.matters}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. SECURITY & TOP CONCERNS ═══ */}
      <section style={{ background: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "6px", background: PRIMARY, borderRadius: "3px" }} />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "900", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>Enterprise AI Concerns — Answered</h2>
          </div>
          <p style={{ fontSize: "16px", color: "#475569", marginBottom: "52px", maxWidth: "820px", lineHeight: "1.7" }}>
            AI integration raises new questions: data privacy, runaway API costs and architecture choices. Here is how we solve the three we hear most.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "88px" }}>
            {concerns.map((c, i) => (
              <div key={i} className="aic-concern-row">
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: c.tint, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>{c.icon}</div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", lineHeight: "1.3", letterSpacing: "-0.5px" }}>{c.title}</div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>The Question</div>
                  <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", margin: 0 }}>{c.question}</p>
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: c.labelColor, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Our Solution</div>
                  <p style={{ fontSize: "15px", color: "#0f172a", lineHeight: "1.6", margin: 0, fontWeight: "500" }}>{c.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guardrails — problem/solution */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "64px", alignItems: "start" }} className="aic-guard-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "6px", background: "#f43f5e", borderRadius: "3px" }} />
                <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>Why AI Projects Fail</h2>
              </div>
              <p style={{ fontSize: "15px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.7" }}>
                Most AI deployments try to control hallucinations and risk with overly restrictive rules that degrade the experience:
              </p>
              <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />
              <ul style={{ margin: "0 0 24px 0", paddingLeft: "24px", color: "#334155", fontSize: "15px", lineHeight: "1.8", fontWeight: "500" }}>
                <li>Block legitimate requests (high false positives)</li>
                <li>Add significant latency to every request</li>
                <li>Require constant manual tuning as the agent evolves</li>
                <li>Filter &quot;bad words&quot; instead of understanding intent</li>
              </ul>
              <p style={{ fontSize: "14px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                Teams end up choosing between unacceptable risk and a slow, frustrating experience with marginal ROI.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "6px", background: "#3b82f6", borderRadius: "3px" }} />
                <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: 0, letterSpacing: "-0.5px" }}>How OneNineLabs Protects ROI</h2>
              </div>
              <p style={{ fontSize: "15px", color: "#475569", margin: "0 0 24px 0", lineHeight: "1.7" }}>
                Our AI architecture treats security and user experience as requirements, not trade-offs — preventing policy violations and hallucinations without adding friction to legitimate use.
              </p>
              <div style={{ height: "1px", background: "#f1f5f9", width: "100%", marginBottom: "24px" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
                {guardrails.map((g, i) => (
                  <div key={i} className="aic-guard-card">
                    <div style={{ fontSize: "11px", color: g.color, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "800" }}>{g.n}</div>
                    <h3 style={{ fontSize: "18px", fontWeight: "800", margin: "0 0 10px 0", color: "#0f172a" }}>{g.title}</h3>
                    <p style={{ fontSize: "14px", color: "#475569", margin: 0, lineHeight: "1.6" }}>{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. DELIVERY PROCESS ═══ */}
      <section className="vd-process-section" style={{ padding: "104px 24px 90px", background: "#f8fafc" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(124,58,237,0.1)", borderColor: "rgba(124,58,237,0.25)" }}>Delivery Process</div>
        <h2 className="vd-section-h2">From Idea to Production AI</h2>
        <p className="vd-section-p" style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          A fixed-milestone process that proves feasibility on your real data before you commit to the full build.
        </p>

        <div className="vd-process-timeline-v2">
          <div className="vt-line"></div>
          {processSteps.map((step, idx) => {
            const isRight = idx % 2 === 1;
            return (
              <div className={`vt-item ${isRight ? "vt-right" : "vt-left"}`} key={step.num}>
                <div className="vt-dot"></div>
                <div className="vt-content">
                  <span className="vt-step-badge" style={{ color: PRIMARY, background: "rgba(124,58,237,0.08)" }}>Step {step.num}</span>
                  <h3 className="vt-title">{step.title}</h3>
                  <p className="vt-desc">{step.desc}</p>
                </div>
                <div className="vt-visual">
                  <div className="vt-image-container" style={{ background: "linear-gradient(135deg, #f5f3ff, #ede9fe)" }}>
                    <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", width: "100%", maxWidth: "300px", boxShadow: "0 10px 30px rgba(15,23,42,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>{step.title}</span>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                      </div>
                      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Milestone</span>
                        <span style={{ fontSize: "12px", fontWeight: "900", color: PRIMARY }}>{step.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ 9. DEPLOYMENT OPTIONS ═══ */}
      <section style={{ background: "#ffffff", padding: "96px 24px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: "900", color: "#0f172a", margin: "0 0 16px 0", letterSpacing: "-0.5px" }}>Deployment Options</h2>
            <p style={{ fontSize: "16px", color: "#475569", margin: "0 auto", maxWidth: "600px", lineHeight: "1.7" }}>
              Flexible infrastructure configured to meet your exact security and operational requirements.
            </p>
          </div>

          <div className="aic-deploy-grid" style={{ background: "#ffffff", border: "1.5px solid #f1f5f9", borderRadius: "24px", padding: "40px", boxShadow: "0 15px 35px rgba(0,0,0,0.03)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", fontSize: "22px" }}>☁️</div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0" }}>Cloud SaaS</h3>
              <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>What It Means</div>
              <p style={{ fontSize: "15px", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                We host and manage everything on zero-retention enterprise APIs; you call our secure endpoints and get usage dashboards.
              </p>
            </div>
            <div>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", fontSize: "22px" }}>🏢</div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0" }}>On-Prem / VPC</h3>
              <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>What It Means</div>
              <p style={{ fontSize: "15px", color: "#475569", margin: 0, lineHeight: "1.6" }}>
                Open-source models run in your Kubernetes cluster (Docker/Helm deployment) with zero data egress and full audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>AI Engineering FAQs</h2>
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

      {/* ═══ 11. CTA ═══ */}
      <section className="vd-cta-section" id="get-started">
        <div className="vd-cta-inner">
          <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto" }}>Free Discovery Call</div>
          <div className="vd-cta-title">Have a workflow to automate? <span>Let&apos;s map it.</span></div>
          <p className="vd-cta-desc">
            Tell us the process you want to automate — support, documents, reporting or ops. Within 48 hours you&apos;ll get a feasibility review, model recommendation and a fixed, itemized proposal.
          </p>
          <div className="vd-cta-btns">
            <Link href="/contact" className="vd-btn-primary">Start Your Project →</Link>
            <Link href="/services" className="vd-btn-ghost">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── PAGE-LOCAL STYLES ── */}
      <style>{`
        .aic-highlight {
          background: linear-gradient(135deg, #4c1d95, ${PRIMARY});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .aic-btn-dark {
          background: #0f172a; color: #ffffff; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
          display: inline-flex; align-items: center; gap: 8px;
          border: 1.5px solid #0f172a; transition: all 0.25s ease;
        }
        .aic-btn-dark:hover { background: #ffffff; color: #0f172a; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(15, 23, 42, 0.1); }
        .aic-btn-ghost {
          background: #ffffff; color: #0f172a; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          border: 1.5px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          display: inline-flex; align-items: center; transition: all 0.25s ease;
        }
        .aic-btn-ghost:hover { border-color: #0f172a; transform: translateY(-2px); }
        .aic-check-card {
          background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(15,23,42,0.01);
        }
        .aic-check-card:hover { transform: translateY(-4px); border-color: #cbd5e1; box-shadow: 0 10px 24px rgba(15,23,42,0.04); }
        @keyframes aicFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .aic-phone-wrapper { animation: aicFloat 6s ease-in-out infinite; }
        @keyframes aicChipFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        .aic-float-chip { animation: aicChipFloat 5s ease-in-out 0.6s infinite; }
        .aic-float-chip2 { animation: aicChipFloat 5.5s ease-in-out 1.1s infinite; }

        .reports-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1200px; width: 100%; margin-top: 12px; }
        .report-card {
          background: #ffffff; border-radius: 12px; padding: 24px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
          display: flex; flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .report-card:hover { transform: translateY(-8px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); }
        .dashboard-mockup { border-radius: 8px; padding: 12px; margin-bottom: 24px; box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.02); }
        .mockup-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; margin-bottom: 8px; }
        .card-title { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 10px 0; }
        .card-buttons { display: flex; gap: 12px; margin-top: auto; }
        .btn-details, .btn-preview {
          flex: 1; text-align: center; padding: 10px; border-radius: 6px;
          font-size: 13px; font-weight: 600; text-decoration: none; transition: all 0.2s;
          background: #ffffff; color: #475569; border: 1px solid #d1d5db;
        }
        .btn-details:hover, .btn-preview:hover { background: #f8fafc; border-color: #9ca3af; color: #1e293b; }

        .aic-dim-card {
          background: #ffffff; border-radius: 24px; padding: 40px 32px;
          border: 1.5px solid #f1f5f9; box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          position: relative; overflow: hidden; transition: all 0.3s ease;
        }
        .aic-dim-card:hover { transform: translateY(-4px); box-shadow: 0 20px 44px rgba(15,23,42,0.07); }
        .aic-concern-row {
          background: #ffffff; border: 1.5px solid #f1f5f9; border-radius: 20px; padding: 32px;
          display: grid; grid-template-columns: 280px 1fr 1fr; gap: 40px; align-items: start;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02); transition: all 0.3s ease;
        }
        .aic-concern-row:hover { border-color: #e9d5ff; box-shadow: 0 16px 40px rgba(124,58,237,0.06); }
        .aic-guard-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1.5px solid #f1f5f9; border-radius: 16px; padding: 24px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.02); transition: all 0.3s ease;
        }
        .aic-guard-card:hover { transform: translateY(-3px); border-color: #e9d5ff; }

        @media (max-width: 1024px) {
          .aic-hero-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
          .reports-grid { grid-template-columns: 1fr; max-width: 560px; }
          .aic-concern-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .aic-guard-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .aic-deploy-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}
