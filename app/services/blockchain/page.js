import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Blockchain & Web3 Engineering — Smart Contracts, CEX & DEX | OneNineLabs",
  description: "Enterprise blockchain engineering: institutional CEX/DEX matching engines (1M+ TPS), gas-optimized Solidity & Rust smart contracts, MPC custody vaults, and formal security audits.",
  keywords: [
    "blockchain development company",
    "smart contract audit",
    "crypto exchange development",
    "DEX development",
    "Solana Anchor developer",
    "ERC-4337 Account Abstraction",
    "MPC custody wallet",
    "Web3 development agency",
    "Foundry smart contract testing",
    "RWA tokenization"
  ],
  alternates: {
    canonical: "/services/blockchain",
    languages: {
      "en-US": "/services/blockchain",
      en: "/services/blockchain",
      "hi-IN": "/services/blockchain",
      "x-default": "/services/blockchain",
    },
  },
  openGraph: {
    title: "Blockchain & Web3 Engineering — Smart Contracts, CEX & DEX | OneNineLabs",
    description: "Enterprise blockchain engineering: institutional matching engines, gas-optimized smart contracts, MPC custody vaults, and formal security audits.",
    url: `${siteUrl}/services/blockchain`,
    type: "website",
    images: [{ url: "/blockchain_preview.png", width: 1200, height: 630, alt: "Blockchain & Web3 Engineering by OneNineLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain & Web3 Engineering — Smart Contracts & Crypto Exchanges | OneNineLabs",
    description: "Institutional crypto matching engines (1M+ TPS), audited smart contracts, and MPC custody vaults.",
    images: ["/blockchain_preview.png"],
  },
  robots: { index: true, follow: true },
};

const PRIMARY = "#06b6d4";
const GRAD_FROM = "#155e75";
const GRAD_TO = "#06b6d4";
const GLOW = "rgba(6,182,212,0.15)";

const blockchainCapabilities = [
  {
    title: "CEX & DEX Exchange Engineering",
    desc: "Institutional-grade centralized and decentralized crypto exchanges with in-memory matching engines handling 1M+ orders/sec and sub-millisecond latency.",
    icon: "⚡",
    badge: "1M+ TPS"
  },
  {
    title: "Solidity & Rust Smart Contracts",
    desc: "Gas-optimized ERC-20/721/1155 tokens, DeFi vaults, and Solana Anchor programs with Foundry fuzz testing and Slither static analysis.",
    icon: "📜",
    badge: "Foundry Audited"
  },
  {
    title: "DeFi Protocol Engineering",
    desc: "Uniswap v3/v4 AMM concentrated liquidity, yield farming vaults, perpetual futures platforms with 100x leverage, and automated liquidation engines.",
    icon: "📈",
    badge: "AMM v3/v4"
  },
  {
    title: "Multi-Chain Bridge & Layer-2",
    desc: "Cross-chain bridges with LayerZero v2 & Chainlink CCIP, Optimistic & ZK rollups reducing gas costs by 90%+, and ERC-4337 gasless Account Abstraction.",
    icon: "🔗",
    badge: "LayerZero CCIP"
  }
];

const faqs = [
  {
    q: "What types of crypto exchanges and DeFi platforms do you build?",
    a: "We engineer Centralized Exchanges (CEX) with ultra-fast in-memory matching engines (1M+ orders/sec), Automated Market Maker (AMM v3/v4) DEXs, Central Limit Order Book (CLOB) DEXs on L2s/SVM, Perpetual Futures Platforms with up to 100x leverage, and P2P escrow marketplaces with 300+ fiat payment rails."
  },
  {
    q: "How do you ensure smart contracts are 100% immune to hacks and exploits?",
    a: "We apply rigorous multi-tier security verification: property-based invariant fuzz testing in Foundry, symbolic execution, Slither AST static checks, formal verification, reentrancy guards, and exhaustive manual penetration testing mimicking flash-loan and oracle manipulation attack vectors."
  },
  {
    q: "Which blockchain networks do you specialize in?",
    a: "We develop natively across EVM networks (Ethereum, Arbitrum, Base, Optimism, Polygon, Avalanche, BNB Chain), Solana SVM (Rust & Anchor), and Bitcoin layer protocols (Ordinals, Runes, and BRC-20). We also build custom App-Chains and Subnets using Polygon CDK and Avalanche Subnets."
  },
  {
    q: "Can you implement gasless transactions and social login wallets?",
    a: "Yes — we integrate ERC-4337 Account Abstraction paymasters, bundlers, and Passkey / WebAuthn biometric infrastructure. Users can sign in using FaceID, Google, or Apple ID, and enjoy sponsored zero-gas transactions without needing to manage complex seed phrases."
  },
  {
    q: "How do you handle fiat on/off ramps and regulatory compliance?",
    a: "We integrate enterprise fiat gateway providers (MoonPay, Banxa, Stripe, direct SEPA/SWIFT wire clearing) combined with automated KYC/AML identity verification (Sumsub, Onfido) and real-time transaction screening compliant with the FATF Travel Rule."
  },
  {
    q: "What is your project handover and code ownership model?",
    a: "You receive 100% exclusive ownership of all codebases, smart contracts, deployment keys, documentation, unit & invariant test suites, Figma design systems, and GitHub repositories upon milestone completion with zero vendor lock-in."
  }
];

export default function BlockchainServicePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Blockchain & Web3 Solutions", item: `${siteUrl}/services/blockchain` },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/blockchain#service`,
    name: "Blockchain & Web3 Solutions",
    serviceType: "Blockchain and Smart Contract Development",
    url: `${siteUrl}/services/blockchain`,
    description: "Enterprise blockchain engineering: institutional CEX/DEX matching engines (1M+ TPS), gas-optimized Solidity & Rust smart contracts, MPC custody vaults, and formal security audits.",
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

        {/* ─── 1. HERO SECTION (dark, matches AI automation style) ─── */}
        <section className="gs-hero-section" style={{
          background: "linear-gradient(180deg, #0f172a 0%, #0c1421 100%)",
          padding: "120px 24px 80px 24px",
          borderBottom: "1px solid #1e293b",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Background glow accent */}
          <div style={{
            position: "absolute",
            top: "30%",
            right: "10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />

          <div style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "center"
          }}>
            <div style={{ maxWidth: "620px", zIndex: 2 }}>
              {/* Badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.25)",
                padding: "6px 14px",
                borderRadius: "100px",
                marginBottom: "28px"
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06b6d4", boxShadow: "0 0 6px #06b6d4" }} />
                <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#06b6d4", letterSpacing: "1px", textTransform: "uppercase" }}>
                  Blockchain & Web3 Engineering
                </span>
              </div>

              <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: "800",
                color: "#ffffff",
                lineHeight: "1.1",
                letterSpacing: "-1.5px",
                margin: "0 0 20px 0"
              }}>
                Institutional-Grade Crypto Exchanges & Smart Contract Platforms
              </h1>

              <p style={{
                fontSize: "16px",
                color: "#94a3b8",
                lineHeight: "1.7",
                margin: "0 0 36px 0",
                maxWidth: "540px"
              }}>
                We engineer battle-hardened decentralized systems — from CEX/DEX matching engines handling 1M+ orders/sec and gas-optimized Solidity & Rust smart contracts, to Layer-2 rollups, cross-chain bridges, and zero-exploit DeFi protocols.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    background: "#06b6d4",
                    color: "#0f172a",
                    fontWeight: "700",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 10px 25px rgba(6,182,212,0.3)",
                    transition: "all 0.25s ease"
                  }}
                >
                  Consult Web3 Architects →
                </Link>
                <Link
                  href="/contact"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#e2e8f0",
                    fontWeight: "600",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.25s ease"
                  }}
                >
                  ⬡ Request Smart Contract Audit
                </Link>
              </div>
            </div>

            {/* Right: Stats block */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "16px", minWidth: "220px" }}>
              {[
                { value: "$400M+", label: "TVL Secured", color: "#06b6d4" },
                { value: "1M+", label: "Orders / Sec (CEX)", color: "#10b981" },
                { value: "0", label: "Critical Exploits", color: "#f59e0b" },
                { value: "15+", label: "Chains Supported", color: "#a78bfa" },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  textAlign: "left"
                }}>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: stat.color, lineHeight: "1.1", marginBottom: "4px" }}>{stat.value}</div>
                  <div style={{ fontSize: "11.5px", color: "#64748b", fontWeight: "600" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
            @media (max-width: 768px) {
              .gs-hero-section > div { grid-template-columns: 1fr !important; }
              .gs-hero-section > div > div:last-child { display: none !important; }
            }
          `}</style>
        </section>

        {/* ─── 2. CAPABILITIES GRID ─── */}
        <section style={{
          background: "#ffffff",
          padding: "80px 24px",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid #f4f4f5", paddingBottom: "32px", marginBottom: "48px", flexWrap: "wrap", gap: "32px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                Blockchain Capabilities
              </h2>
              <div style={{ maxWidth: "560px" }}>
                <p style={{ fontSize: "13px", color: "#52525b", margin: "0 0 20px 0", lineHeight: "1.6" }}>
                  We build institutional-grade crypto exchange infrastructure, formally verified smart contracts, and cross-chain DeFi protocols — engineered to handle millions of daily transactions with zero security incidents.
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

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {blockchainCapabilities.map((c, i) => (
                <div key={i} style={{
                  background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
                  border: "1px solid #f4f4f5",
                  borderRadius: "16px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div style={{ fontSize: "22px" }}>{c.icon}</div>
                    <span style={{ background: "#f0fdfe", color: "#0891b2", border: "1px solid #cffafe", padding: "3px 10px", borderRadius: "99px", fontSize: "10.5px", fontWeight: "700" }}>{c.badge}</span>
                  </div>
                  <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#18181b", margin: "0 0 24px 0" }}>{c.title}</h4>
                  <div style={{ height: "1px", background: "#f4f4f5", width: "100%", marginBottom: "20px" }} />
                  <div style={{ fontSize: "9px", fontWeight: "700", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "12px" }}>
                    TECHNICAL CAPABILITY
                  </div>
                  <p style={{ fontSize: "13px", color: "#a1a1aa", lineHeight: "1.6", margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #f4f4f5" }}>
              <p style={{ fontSize: "12px", color: "#71717a", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                Our blockchain systems handle business-critical financial infrastructure — from matching engines processing institutional order volumes to smart contracts holding hundreds of millions in on-chain liquidity — built to military-grade security standards.
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

        {/* ─── 3. CORE BLOCKCHAIN STACK (3 dimensions) ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#06b6d4", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                Core Blockchain Engineering Stack
              </h2>
            </div>
            <p style={{ fontSize: "14px", color: "#52525b", marginBottom: "48px", maxWidth: "800px" }}>
              Our Web3 platforms are built on three foundational pillars that compound into an unbreakable architecture:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {/* Dimension 01 */}
              <div style={{ background: "#0f172a", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  DIMENSION 01
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Multi-Chain Network Support
                </h3>
                <div style={{ height: "1px", background: "#1e293b", width: "100%", marginBottom: "24px" }} />
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  EVM chains (Ethereum, Arbitrum, Base, Polygon), Solana SVM (Rust & Anchor), and custom App-Chains via Polygon CDK.
                </p>
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>Why It Matters</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Deploy once, reach all major ecosystems. LayerZero & Chainlink CCIP bridges ensure seamless token and data movement across every chain.
                </p>
              </div>

              {/* Dimension 02 */}
              <div style={{ background: "#0f172a", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  DIMENSION 02
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Exchange Matching Engine
                </h3>
                <div style={{ height: "1px", background: "#1e293b", width: "100%", marginBottom: "24px" }} />
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  Rust & C++ lock-free ring buffers (LMAX Disruptor architecture) with WebSocket/FIX protocol APIs and TradingView Pro chart integration.
                </p>
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>Why It Matters</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Handles 1M+ orders/sec at sub-millisecond latency — the same throughput tier as Binance and Coinbase — with MPC multi-sig cold/warm wallet custody.
                </p>
              </div>

              {/* Dimension 03 */}
              <div style={{ background: "#0f172a", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                  DIMENSION 03
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>
                  Smart Contract Security Pipeline
                </h3>
                <div style={{ height: "1px", background: "#1e293b", width: "100%", marginBottom: "24px" }} />
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                  Foundry invariant fuzz testing, Slither static analysis, symbolic execution, formal verification, and reentrancy guard injection.
                </p>
                <div style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: "600", marginBottom: "8px" }}>Why It Matters</div>
                <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                  Every contract ships with exhaustive automated test coverage and penetration testing against flash-loan, oracle manipulation, and MEV attack vectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. SECURITY Q&A (problem / solution rows) ─── */}
        <section style={{ background: "#ffffff", padding: "40px 24px 80px 24px", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "6px", background: "#ea580c", borderRadius: "3px" }} />
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                Enterprise Web3 Adoption: Security & Architecture FAQ
              </h2>
            </div>
            <div style={{ maxWidth: "900px", marginBottom: "48px" }}>
              <p style={{ fontSize: "14px", color: "#52525b", margin: "0 0 16px 0", lineHeight: "1.6" }}>
                Blockchain projects face a new class of engineering challenges: non-deterministic smart contract behavior, cross-chain bridge vulnerabilities, and custodial security at institutional scale.
              </p>
              <p style={{ fontSize: "14px", color: "#52525b", margin: 0, lineHeight: "1.6" }}>
                Let&apos;s address three common enterprise concerns about Web3 adoption, and evaluate the real-world architectural solutions we implement.
              </p>
            </div>

            <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />

            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", padding: "24px 0", borderBottom: "1px solid #f4f4f5", alignItems: "start" }}>
              <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "20px" }}>🔐</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>Smart Contract<br />Security</div>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>THE QUESTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  How can we be certain our smart contracts won&apos;t be exploited after deployment?
                </p>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>OUR SOLUTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  Every contract goes through a 5-layer security pipeline: Foundry property-based fuzz testing, Slither static analysis, symbolic execution, manual penetration testing mimicking flash-loan attacks, and formal verification. We have shipped $400M+ TVL with zero critical exploits.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", padding: "24px 0", borderBottom: "1px solid #f4f4f5", alignItems: "start" }}>
              <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "20px" }}>💱</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>Exchange<br />Architecture</div>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>THE QUESTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  Should we build a CEX, a DEX, or a hybrid platform — and how do we protect user funds?
                </p>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>OUR SOLUTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  For institutional throughput, a CEX with in-memory matching (1M+ orders/sec) is optimal. For non-custodial trust, an AMM or CLOB DEX on an L2 is ideal. We implement MPC multi-sig cold/warm wallet custody with automated withdrawal whitelisting to protect all user assets.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "40px", padding: "24px 0", borderBottom: "1px solid #f4f4f5", alignItems: "start" }}>
              <div style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "20px" }}>⛓️</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#18181b", lineHeight: "1.3" }}>Multi-Chain<br />Strategy</div>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>THE QUESTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  Should we deploy on Ethereum mainnet or launch on a Layer-2? What about Solana?
                </p>
              </div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>OUR SOLUTION</div>
                <p style={{ fontSize: "13px", color: "#3f3f46", lineHeight: "1.6", margin: 0 }}>
                  For most DeFi protocols, Layer-2s (Arbitrum, Base) offer 90%+ gas savings with Ethereum security. For ultra-high-throughput trading apps, Solana SVM delivers 65,000+ TPS natively. We select the optimal chain per use case and connect them via LayerZero v2 & Chainlink CCIP bridges.
                </p>
              </div>
            </div>

            {/* ─── HOW WE PROTECT YOUR PROTOCOL ─── */}
            <section style={{ background: "#ffffff", padding: "64px 0 0 0", fontFamily: "'Inter', sans-serif" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "6px", background: "#3b82f6", borderRadius: "3px" }} />
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: 0, letterSpacing: "-0.5px" }}>
                  How OneNineLabs Protects Your Protocol Without Sacrificing Speed
                </h2>
              </div>
              <p style={{ fontSize: "14px", color: "#3f3f46", margin: "0 0 24px 0", lineHeight: "1.6" }}>
                Our security-first architecture proves that on-chain safety and execution performance are not a trade-off. We achieve both simultaneously.
              </p>
              <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "24px" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
                <div style={{ background: "#0f172a", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                  <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>COMPONENT 01</div>
                  <h3 style={{ fontSize: "22px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>Offensive Security</h3>
                  <div style={{ height: "1px", background: "#1e293b", width: "100%", marginBottom: "24px" }} />
                  <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                    Continuously red-teams your smart contracts using property-based fuzz testing in Foundry, formal verification, and manual penetration testing simulating real-world flash-loan and oracle manipulation attacks before any mainnet deployment.
                  </p>
                </div>
                <div style={{ background: "#0f172a", borderRadius: "16px", padding: "32px", color: "#ffffff" }}>
                  <div style={{ fontSize: "10px", color: "#71717a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>COMPONENT 02</div>
                  <h3 style={{ fontSize: "22px", fontWeight: "600", margin: "0 0 24px 0", color: "#ffffff" }}>Defensive Infrastructure</h3>
                  <div style={{ height: "1px", background: "#1e293b", width: "100%", marginBottom: "24px" }} />
                  <p style={{ fontSize: "13px", color: "#d4d4d8", margin: 0, lineHeight: "1.6" }}>
                    Runtime protection through MPC multi-sig vault custody, automated withdrawal whitelisting, Chainalysis/Elliptic AML screening, on-chain pausable emergency mechanisms, and circuit-breaker kill-switch infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── DEPLOYMENT OPTIONS ─── */}
            <section style={{ background: "#ffffff", padding: "64px 0 0 0", fontFamily: "'Inter', sans-serif" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#18181b", margin: "0 0 40px 0", letterSpacing: "-0.5px" }}>
                Exchange Deployment Models
              </h2>

              <div style={{ fontSize: "10px", color: "#a1a1aa", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                WHERE WE DEPLOY YOUR PLATFORM
              </div>
              <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "32px" }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginBottom: "64px" }}>
                <div>
                  <div style={{ fontSize: "24px", marginBottom: "16px" }}>☁️</div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>Cloud-Managed Infrastructure</h3>
                  <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                  <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                  <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                    We host, scale, and maintain the full exchange stack — matching engine, wallet custody, market data feeds — on AWS/GCP with 99.99% SLA uptime.
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: "24px", marginBottom: "16px" }}>🏢</div>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>Self-Hosted / White-Label</h3>
                  <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                  <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What It Means</div>
                  <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>
                    Fully white-labeled exchange deployed on your own VPC, with zero vendor dependency and complete brand control via Docker/Kubernetes deployment.
                  </p>
                </div>
              </div>

              <div style={{ fontSize: "10px", color: "#a1a1aa", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "700" }}>
                KEY PLATFORM COMPONENTS
              </div>
              <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "32px" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", marginBottom: "48px" }}>
                {[
                  { title: "Matching Engine", desc: "Rust/C++ lock-free ring buffer (LMAX) with WebSocket & FIX Protocol API, 1M+ orders/sec." },
                  { title: "Custody & Wallets", desc: "MPC multi-sig cold/warm wallet infrastructure with automated withdrawal whitelisting and HSM support." },
                  { title: "Compliance Layer", desc: "Automated KYC/AML (Sumsub, Onfido) + Chainalysis on-chain monitoring + FATF Travel Rule compliance." },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#18181b", margin: "0 0 16px 0" }}>{item.title}</h4>
                    <div style={{ height: "1px", background: "#e2e8f0", width: "100%", marginBottom: "16px" }} />
                    <div style={{ fontSize: "12px", color: "#71717a", fontWeight: "600", marginBottom: "8px" }}>What Gets Built</div>
                    <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: "1.6" }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "14px", color: "#3f3f46", margin: 0, lineHeight: "1.6", fontWeight: "500" }}>
                With OneNineLabs, you get the same exchange infrastructure technology used by top-tier platforms — without the 3-year build timeline. We deliver production-ready, audited exchange systems in 12–16 weeks.
              </p>
            </section>

            {/* Gray Swan footer */}
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #f4f4f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#52525b", letterSpacing: "0.5px" }}>ONENINELABS</span>
              </div>
              <span style={{ fontSize: "11px", color: "#a1a1aa", fontWeight: "500" }}>oneninelabs.com</span>
            </div>
          </div>
        </section>

        {/* ─── 5. FAQ SECTION ─── */}
        <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>
              Blockchain & Web3 Engineering FAQs
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

        {/* ─── 6. CTA BANNER ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              Ready to Launch Your Web3 Protocol?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Book a free smart contract audit & architecture review with our lead Web3 engineer within 48 hours.
            </p>
            <Link href="/contact" style={{ background: "#334155", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book Free Web3 Architecture Call →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
