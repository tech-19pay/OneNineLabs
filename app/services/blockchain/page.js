import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePageStyles } from "@/lib/servicePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Blockchain & Web3 Development — Smart Contracts & dApps | OneNineLabs",
  description: "Solidity smart contract development, EVM & Solana dApp engineering, gas optimization, ERC-20/721 tokens, and zero-knowledge proof cryptography.",
  keywords: ["blockchain development company", "Solidity smart contract developer", "Web3 dApp agency", "Solana developer", "gas optimization", "zero knowledge proofs"],
  alternates: { canonical: "/services/blockchain", languages: { "en-US": "/services/blockchain", en: "/services/blockchain", "hi-IN": "/services/blockchain", "x-default": "/services/blockchain" } },
  openGraph: { title: "Blockchain & Web3 Development | OneNineLabs", description: "Audit-ready smart contracts, decentralized dApps & tokenomics engineering.", url: "https://oneninelabs.com/services/blockchain", type: "website" },
  robots: { index: true, follow: true },
};

const PRIMARY = "#06b6d4";
const GRAD_FROM = "#155e75";
const GRAD_TO = "#06b6d4";
const GLOW = "rgba(6,182,212,0.15)";

const web3Capabilities = [
  {
    title: "Solidity & Rust Smart Contracts",
    desc: "Audit-ready Ethereum (EVM) & Solana smart contracts engineered for zero reentrancy vulnerabilities and minimal gas usage.",
    icon: "📜",
    badge: "Solidity & Rust"
  },
  {
    title: "Web3 dApp Frontends (ethers.js / wagmi)",
    desc: "Seamless wallet connection integrations (MetaMask, Coinbase Wallet, Phantom) with instant transaction feedback UI.",
    icon: "🌐",
    badge: "wagmi & viem"
  },
  {
    title: "Gas Optimization & Layer-2 Scaling",
    desc: "Arbitrum, Optimism, Base & Polygon L2 deployments reducing user gas fees by over 90%.",
    icon: "⚡",
    badge: "L2 Gas -90%"
  },
  {
    title: "Tokenomics & Stalking Protocols",
    desc: "Custom ERC-20, ERC-721, and ERC-1155 token smart contracts with automated yield staking pools.",
    icon: "🪙",
    badge: "Tokenomics"
  }
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

      <div className="vd-wrap">

        {/* ─── 1. HERO: WEB3 SMART CONTRACT HUD ─── */}
        <section className="vd-hero-section" style={{
          background: "linear-gradient(135deg, #ecfeff 0%, #ffffff 50%, #f0fdf4 100%)",
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
                color: "#0891b2",
                marginBottom: "16px",
                letterSpacing: "0.4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#cffafe",
                padding: "6px 14px",
                borderRadius: "99px",
                border: "1px solid #a5f3fc"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#06b6d4" }} /> EVM &amp; Solana Smart Contract Engineering
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
                Audit-Ready Web3 &amp; <span style={{ color: "#0891b2" }}>Smart Contracts</span>
              </h1>

              <p style={{
                fontSize: "15.5px",
                color: "#64748b",
                lineHeight: "1.65",
                marginBottom: "32px",
                maxWidth: "490px",
                fontWeight: "400"
              }}>
                We engineer secure, audit-tested smart contracts in Solidity and Rust — with gas-optimized Layer-2 deployments, Web3 dApp frontends, and tokenomics architecture.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <Link
                  href="/#contact"
                  style={{
                    background: "#0891b2",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "99px",
                    padding: "15px 32px",
                    fontSize: "15px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 25px rgba(8, 145, 178, 0.3)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  Start Web3 Project
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

              {/* Web3 Key Stats */}
              <div style={{
                display: "flex",
                gap: "28px",
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0"
              }}>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a", lineHeight: "1.1" }}>$0</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>Exploit History</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0891b2", lineHeight: "1.1" }}>-92%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>L2 Gas Reduction</div>
                </div>
                <div style={{ width: "1px", background: "#e2e8f0" }} />
                <div>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981", lineHeight: "1.1" }}>100%</div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "2px" }}>CertiK Audit Pass</div>
                </div>
              </div>
            </div>

            {/* Right Web3 Contract Execution HUD */}
            <div className="vd-hero-right" style={{ position: "relative", minHeight: "450px" }}>
              <div style={{
                background: "#0f172a",
                borderRadius: "24px",
                padding: "24px",
                color: "#fff",
                boxShadow: "0 25px 60px rgba(8, 145, 178, 0.15)",
                border: "1.5px solid #1e293b",
                textAlign: "left"
              }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#38bdf8", marginBottom: "16px", display: "flex", justifyContent: "space-between" }}>
                  <span>SMART CONTRACT AUDIT HUD</span>
                  <span style={{ color: "#4ade80" }}>VERIFIED 🛡️</span>
                </div>

                <div style={{ background: "#1e293b", padding: "14px", borderRadius: "14px", marginBottom: "12px", border: "1px solid #334155" }}>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>Contract Address (Base Mainnet)</div>
                  <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#38bdf8", marginTop: "2px" }}>0x71C...39A9 (ERC-20 Staking)</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ background: "#164e63", padding: "10px", borderRadius: "10px", border: "1px solid #0891b2" }}>
                    <div style={{ fontSize: "10px", color: "#a5f3fc" }}>Reentrancy Guard</div>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#ecfeff" }}>PASS ✓</div>
                  </div>
                  <div style={{ background: "#164e63", padding: "10px", borderRadius: "10px", border: "1px solid #0891b2" }}>
                    <div style={{ fontSize: "10px", color: "#a5f3fc" }}>Gas Optimization</div>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#ecfeff" }}>21,400 Gwei</div>
                  </div>
                </div>

                <div style={{ background: "#064e3b", padding: "12px", borderRadius: "12px", border: "1px solid #047857", fontSize: "12px", color: "#a7f3d0", fontWeight: "600" }}>
                  ✓ Slither &amp; Mythril Static Analysis Passed — Zero High Severity Risks
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 2. WEB3 CAPABILITIES GRID ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "12.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#0891b2", marginBottom: "12px" }}>
              Web3 &amp; Cryptography Services
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "800", color: "#0f172a", marginBottom: "48px" }}>
              Decentralized Infrastructure &amp; Smart Contracts
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {web3Capabilities.map((c, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "32px 24px", textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontSize: "32px" }}>{c.icon}</span>
                    <span style={{ background: "#cffafe", color: "#0891b2", border: "1px solid #a5f3fc", padding: "4px 10px", borderRadius: "99px", fontSize: "11px", fontWeight: "700" }}>{c.badge}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>{c.title}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2.5. BLOCKCHAIN FAQS ─── */}
        <section style={{ background: "#ffffff", padding: "80px 24px", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>
              Blockchain & Web3 Development FAQs
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
              Ready to Launch Your Web3 Protocol?
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "32px" }}>
              Book a free smart contract audit &amp; architecture review with our lead Web3 engineer in 48 hours.
            </p>
            <Link href="/#contact" style={{ background: "#334155", color: "#ffffff", padding: "15px 32px", borderRadius: "99px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>
              Book Smart Contract Audit →
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
