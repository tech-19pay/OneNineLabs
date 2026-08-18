// blockchain service page
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";
import BlockchainBentoGrid from "@/components/BlockchainBentoGrid";
import ExchangeDexSection from "@/components/ExchangeDexSection";
import SecurityScaleBento from "@/components/SecurityScaleBento";
import BlockchainHeroHud from "@/components/BlockchainHeroHud";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Enterprise Web3 & Blockchain Development Company | OneNineLabs",
  description: "End-to-end blockchain development services: Solidity & Rust smart contracts, DeFi liquidity protocols, DEX matching engines, Layer-2 rollups, and zero-exploit security audits.",
  keywords: ["blockchain development company", "smart contract developer", "Web3 IT services", "Solidity developers", "Rust Solana programs", "DEX development", "crypto trading platform", "DeFi protocol engineering", "smart contract auditing"],
  alternates: { canonical: "/services/blockchain", languages: { "en-US": "/services/blockchain", en: "/services/blockchain", "x-default": "/services/blockchain" } },
  openGraph: { title: "Enterprise Web3 & Blockchain Development Company | OneNineLabs", description: "Engineering institutional-grade blockchain infrastructure, Solidity & Rust smart contracts, and decentralized exchanges.", url: "https://oneninelabs.com/services/blockchain", type: "website" },
  robots: { index: true, follow: true },
};

const PRIMARY = "#06b6d4";
const GRAD_FROM = "#155e75";
const GRAD_TO = "#06b6d4";
const GLOW = "rgba(6,182,212,0.15)";

const capabilities = [
  { title: "Cross‑Chain Bridges", desc: "Secure, low‑latency bridges enabling token transfers between EVM & Solana ecosystems.", icon: "🔗", badge: "Bridge" },
  { title: "Layer‑2 Rollups", desc: "Optimistic & ZK rollups that cut gas costs by >90% while preserving security.", icon: "⚡", badge: "L2" },
  { title: "DeFi Protocols", desc: "Automated market makers, lending pools, and yield‑farms with provable invariants.", icon: "📈", badge: "DeFi" },
  { title: "Zero‑Knowledge Proofs", desc: "Privacy‑preserving rollups and zk‑SNARKs for confidential transactions.", icon: "🕶️", badge: "ZK" },
];

const faqs = [
  { q: "Which blockchain networks do you support?", a: "We build on Ethereum (EVM) and Solana, with Layer-2 scaling on Arbitrum, Optimism, Base and Polygon to cut gas fees by over 90%." },
  { q: "Are your smart contracts audited?", a: "Yes — every contract ships with a Foundry fuzz-testing suite and Slither static analysis, and we support integration with external auditing firms for production security reviews." },
  { q: "What token standards do you build?", a: "We engineer ERC-20, ERC-721, ERC-1155 and custom tokenomics, including automated yield-staking pools and vesting schedules." },
  { q: "Can you integrate crypto wallets and payments?", a: "We integrate MetaMask, Coinbase Wallet and Phantom via ethers.js and wagmi, plus on-ramp and crypto payment flows into your dApp." },
  { q: "Do you handle tokenomics design?", a: "Yes — we model supply, emissions, staking yields and unlock schedules to align incentives and avoid common token launch failures." },
  { q: "What is account abstraction?", a: "ERC-4337 account abstraction enables gasless transactions and social-login wallets, removing the biggest onboarding friction for Web3 users." },
];

export default function BlockchainServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Blockchain & Web3 Development", item: `${siteUrl}/services/blockchain` },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/blockchain#service`,
    name: "Blockchain & Web3 Development",
    serviceType: "Blockchain and Web3 Development",
    url: `${siteUrl}/services/blockchain`,
    description: "Solidity smart contract development, EVM & Solana dApp engineering, gas optimization, ERC-20/721 tokens, and zero-knowledge proof cryptography.",
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
      {/* Light Theme Header */}
      <Header variant="light" />
      {/* Hero Section */}
      <section className="bc-hero-section">
        <style>{`
          .bc-hero-section { background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); padding-top: 125px; padding-bottom: 48px; position: relative; overflow: hidden; border-bottom: 1px solid #e2e8f0; }
          .bc-hero-grid { max-width: 1240px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: 1.05fr 1fr; gap: 48px; align-items: center; position: relative; z-index: 2; }
          .bc-trusted-banner { max-width: 1240px; margin: 44px auto 0; padding: 32px 24px 0; display: flex; align-items: center; gap: 40px; position: relative; z-index: 2; border-top: 1px solid #e2e8f0; }
          .bc-trusted-left { flex-shrink: 0; border-right: 1px solid #e2e8f0; padding-right: 36px; max-width: 260px; }
          .bc-trusted-logos { display: flex; align-items: center; justify-content: space-between; flex: 1; gap: 28px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          @media (max-width: 1024px) { .bc-hero-grid { grid-template-columns: 1fr; gap: 36px; } .bc-hero-section { padding-top: 105px; padding-bottom: 36px; } }
          @media (max-width: 768px) { .bc-hero-section { padding-top: 96px; padding-bottom: 30px; } .bc-hero-grid { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
        <Header variant="light" />
        <div className="bc-hero-grid">
          {/* Left Column */}
          <div>
            <h1 className="bc-hero-title" style={{ fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: "1.14", color: "#0f172a", fontWeight: "900", letterSpacing: "-1.2px", marginBottom: "18px", fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" }}>
              <span style={{ color: "#10b981" }}>Blockchain Solutions</span> &amp; Smart Protocols
            </h1>
            <p className="bc-hero-desc" style={{ fontSize: "15.5px", color: "#475569", lineHeight: "1.65", marginBottom: "28px", maxWidth: "540px", fontWeight: "400" }}>
              We build battle‑tested decentralized systems for high‑growth Web3 companies — from Solidity &amp; Rust smart contracts, DEX &amp; DeFi matching engines to Layer‑2 rollups, cross‑chain bridges, and zero‑exploit invariant audits.
            </p>
            <div className="bc-hero-buttons" style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginBottom: "28px" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", justifyContent: "center", padding: "15px 30px", background: "#0f172a", color: "#ffffff", borderRadius: "100px", fontSize: "14.5px", fontWeight: "700", textDecoration: "none", transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)", boxShadow: "0 10px 24px -5px rgba(15, 23, 42, 0.25)", border: "1px solid #0f172a" }}>
                Consult Web3 Architects<span>→</span>
              </Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", justifyContent: "center", padding: "15px 26px", background: "#ffffff", color: "#0f172a", borderRadius: "100px", fontSize: "14.5px", fontWeight: "700", textDecoration: "none", border: "1px solid #cbd5e1", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)", transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                <span>⬡</span> Request Protocol Audit
              </Link>
            </div>
            <div className="bc-trust-badges-row" style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <div className="bc-trust-badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#ffffff", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "8px", fontSize: "12px", color: "#334155", fontWeight: "700", boxShadow: "0 2px 6px rgba(0,0,0,0.02)" }}>
                <span style={{ color: "#10b981", fontSize: "13px" }}>✓</span>
                <span>$400M+ TVL Secured</span>
              </div>
              <div className="bc-trust-badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#ffffff", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "8px", fontSize: "12px", color: "#334155", fontWeight: "700", boxShadow: "0 2px 6px rgba(0,0,0,0.02)" }}>
                <span style={{ color: "#10b981", fontSize: "13px" }}>✓</span>
                <span>0 Critical Bugs</span>
              </div>
              <div className="bc-trust-badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#ffffff", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "8px", fontSize: "12px", color: "#334155", fontWeight: "700", boxShadow: "0 2px 6px rgba(0,0,0,0.02)" }}>
                <span style={{ color: "#10b981", fontSize: "13px" }}>✓</span>
                <span>EVM &amp; Solana Native</span>
              </div>
            </div>
          </div>
          {/* Right HUD */}
          <div className="bc-hero-hud-wrapper" style={{ width: "100%", display: "block", position: "relative", zIndex: 3 }}>
            <BlockchainHeroHud />
          </div>
        </div>
        {/* Trusted Banner */}
        <div className="bc-trusted-banner">
          <div className="bc-trusted-left">
            <h3 style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>Multi-Chain Engineering</h3>
            <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>Deploy and scale across leading L1s, L2 rollups, and oracle networks.</p>
          </div>
          <div className="bc-trusted-logos">
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: "800", color: "#334155" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="3"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg> Ethereum
              </div>
              <div style={{ fontSize: "10px", color: "#94a3b8" }}>"EVM &amp; Layer-2 Rollups"</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: "800", color: "#334155" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg> Solana
              </div>
              <div style={{ fontSize: "10px", color: "#94a3b8" }}>"Rust Anchor High-Speed"</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: "800", color: "#334155" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="3"><rect x="3" y="3" width="18" height="18" rx="4"/></svg> Polygon
              </div>
              <div style={{ fontSize: "10px", color: "#94a3b8" }}>"PoS &amp; zkEVM Scaling"</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: "800", color: "#334155" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg> Arbitrum
              </div>
              <div style={{ fontSize: "10px", color: "#94a3b8" }}>"Nitro L2 Engine"</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: "800", color: "#334155" }}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Chainlink
              </div>
              <div style={{ fontSize: "10px", color: "#94a3b8" }}>"CCIP &amp; Price Feeds"</div>
            </div>
          </div>
        </div>
      </section>
      {/* Bento Grid */}
      <section style={{ position: "relative", padding: "50px 0", backgroundColor: "#ffffff" }}>
        <BlockchainBentoGrid />
      </section>
      {/* Exchange / DEX Section */}
      <ExchangeDexSection />
      {/* Security Scale Bento */}
      <div style={{ paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <SecurityScaleBento />
      </div>
      {/* FAQs */}
      <section style={{ background: "#ffffff", padding: "80px 24px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>Blockchain &amp; Web3 Development FAQs</h2>
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
      {/* CTA Banner */}
      <section style={{ background: "#ffffff", padding: "80px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>Ready to Launch Your Web3 Protocol?</h2>
          <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>Book a free smart contract audit &amp; architecture review with our lead Web3 engineer in 48 hours.</p>
          <Link href="/#contact" style={{ background: "#334155", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
            Book Smart Contract Audit →
          </Link>
        </div>
      </section>
      <Footer variant="light" />
    </>
  );
}
