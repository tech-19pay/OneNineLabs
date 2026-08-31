import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiAutomationPageClean from "@/components/AiAutomationPageClean";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

const PRIMARY = "#7c3aed";
const GRAD_FROM = "#4c1d95";
const GRAD_TO = "#7c3aed";
const GLOW = "rgba(124,58,237,0.15)";

export const metadata = {
  title: "AI & Automation Engineering — LLMs, Agents & RAG | OneNineLabs",
  description: "Enterprise AI solutions built with OpenAI GPT-4, Claude 3.5, LangChain & LlamaIndex. Autonomous AI agents, RAG vector search, and workflow automation.",
  keywords: ["AI development company", "LLM integration", "autonomous AI agents", "RAG vector search", "Pinecone developer", "LangChain engineering"],
  alternates: { canonical: "/services/ai-automation", languages: { "en-US": "/services/ai-automation", en: "/services/ai-automation", "hi-IN": "/services/ai-automation", "x-default": "/services/ai-automation" } },
  openGraph: {
    title: "AI & Automation Engineering — LLMs & Agents | OneNineLabs",
    description: "Custom AI agent pipelines, vector search RAG systems & workflow automation.",
    url: "https://oneninelabs.com/services/ai-automation",
    type: "website",
    images: [{ url: "/ai_robot_mascot.jpg", width: 1200, height: 630, alt: "AI & Automation by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Engineering — LLMs & Agents | OneNineLabs",
    description: "Custom AI agent pipelines, vector search RAG systems & workflow automation.",
    images: ["/ai_robot_mascot.jpg"],
  },
  robots: { index: true, follow: true },
};

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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI & Automation Services",
      itemListElement: [
        "Autonomous AI Agents",
        "RAG & Vector Search",
        "LLM Integration & APIs",
        "Custom Model Fine-Tuning",
        "Workflow Automation",
        "AI Chatbots & Copilots",
        "LLM Cost & Latency Routing",
        "AI Security & Evals",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
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

      <main style={{ minHeight: "100vh", background: "#ffffff" }}>
        <AiAutomationPageClean />
      </main>

      <Footer />
    </>
  );
}
