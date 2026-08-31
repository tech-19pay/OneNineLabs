import Link from "next/link";
import BlockchainSpotlights from "@/components/BlockchainSpotlights";

const PRIMARY = "#2563eb";

/* ── DATA ──────────────────────────────────────────────── */

const heroChecks = [
  { title: "Audited Smart Contracts", desc: "Third-party audit before every mainnet launch." },
  { title: "Multi-Chain Delivery", desc: "EVM, Solana & enterprise chains, one codebase." },
  { title: "Institutional Security", desc: "MPC keys, multi-sig approvals & cold storage." },
  { title: "Post-Launch SLA", desc: "24/7 monitoring with 12h response time." }
];

const marqueeItems = [
  "Ethereum", "Solana", "Polygon", "BNB Chain", "Avalanche", "Arbitrum",
  "Optimism", "Base", "Hyperledger", "Cosmos", "Solidity", "Rust", "Foundry", "Chainlink"
];

const services = [
  { icon: "📜", title: "Smart Contract Development", desc: "Secure, gas-optimized contracts in Solidity & Rust — ERC-20/721/1155/4337 tokens, upgradeable proxies, staking, vesting and custom protocol logic.", tags: ["Solidity", "Rust", "Proxies"] },
  { icon: "🔍", title: "Smart Contract Audits", desc: "Manual line-by-line review, automated static analysis and reentrancy/economic attack modeling — with a full report, fixes and re-verification.", tags: ["Security Review", "Static Analysis"] },
  { icon: "🖥️", title: "dApp Development", desc: "End-to-end decentralized applications: React/Next.js and React Native frontends, wallet connection, on-chain indexing and real-time event pipelines.", tags: ["Next.js", "WalletConnect"] },
  { icon: "🏦", title: "DeFi Protocol Development", desc: "Lending & borrowing markets, liquid staking, yield vaults, AMMs, derivatives and stablecoin systems engineered for capital efficiency and safety.", tags: ["Lending", "Staking", "AMM"] },
  { icon: "🔁", title: "DEX & Exchange Development", desc: "AMM and orderbook DEXs, plus centralized exchanges with high-throughput matching engines, custody, KYC flows and liquidity integrations.", tags: ["Orderbook", "Matching Engine"] },
  { icon: "👛", title: "Web3 Wallet Development", desc: "Custodial, non-custodial and MPC wallets for web and mobile — multi-sig, social recovery, passkeys and fiat on/off ramps.", tags: ["MPC", "Multi-Sig", "Passkeys"] },
  { icon: "🧩", title: "Web3 Wallet Extension Development", desc: "Chrome, Firefox, Brave and Edge MV3 extensions with dApp injection, WalletConnect, transaction simulation and hardware-wallet pairing.", tags: ["MV3", "EIP-1193", "WalletConnect"] },
  { icon: "🖼️", title: "NFT Marketplace Development", desc: "Minting, auctions, royalties, launchpads and creator tooling on EVM chains and Solana — from digital art to tickets, gaming assets and RWAs.", tags: ["ERC-721/1155", "Royalties"] },
  { icon: "🪙", title: "Token Development & Tokenomics", desc: "Token design, supply and vesting schedules, governance models and launch support — utility tokens, governance tokens and compliant security tokens.", tags: ["ERC-20", "SPL", "Vesting"] },
  { icon: "⛓️", title: "Layer 1 / Layer 2 & Protocols", desc: "Custom chains and rollups: OP Stack app-chains, Cosmos SDK zones, consensus tuning, validator infrastructure and protocol-level engineering.", tags: ["Rollups", "App-Chains"] },
  { icon: "🌉", title: "Cross-Chain Bridges", desc: "Token bridges and message-passing between chains with lock/mint and burn/release models, relayer security and liquidity-network design.", tags: ["Interop", "Messaging"] },
  { icon: "🏛️", title: "RWA Tokenization", desc: "Tokenize real estate, funds, bonds and invoices with compliance wrappers, investor whitelisting, dividend distribution and secondary liquidity.", tags: ["Real Estate", "Compliance"] },
  { icon: "🏢", title: "Enterprise & DAO Tooling", desc: "Private and consortium networks on Hyperledger Fabric, plus DAO governance: treasuries, voting, timelocks and contributor payroll.", tags: ["Hyperledger", "Governance"] }
];

const deployChecklist = [
  { title: "All Token Standards", desc: "ERC-20, ERC-721/1155, BEP-20 and SPL with custom mechanics." },
  { title: "Tokenomics Built-In", desc: "Mint/burn controls, supply caps, fees and staking hooks." },
  { title: "Vesting & Lockups", desc: "Team cliffs and liquidity locks enforced on-chain." },
  { title: "Upgradeable Proxies", desc: "UUPS/Transparent patterns with timelock governance." },
  { title: "Multi-Chain Deploy", desc: "Deployed & verified on Ethereum, BNB, Polygon, Solana & L2s." },
  { title: "Audited Before Launch", desc: "Audit fixes, explorer verification and gas optimization included." }
];

const consoleLines = [
  { text: "$ onl deploy --chain ethereum --network mainnet", color: "#93c5fd" },
  { text: "✓ Compiling contracts… 0 warnings", color: "#d1d5db" },
  { text: "✓ Audit passed — 0 critical, 0 high", color: "#d1d5db" },
  { text: "✓ Testnet dry run: Sepolia #5821934", color: "#d1d5db" },
  { text: "✓ Deployed token: 0x4f8A…9aB3", color: "#d1d5db" },
  { text: "✓ Verified on Etherscan", color: "#d1d5db" },
  { text: "✓ Ownership transferred to Safe multisig", color: "#d1d5db" },
  { text: "Gas used: 1,245,331 • ≈ $18.40", color: "#64748b" },
  { text: "🚀 Launch complete — monitoring active", color: "#34d399" }
];

const networks = [
  { name: "Ethereum", symbol: "Ξ", color: "#627eea", note: "L1 · EVM" },
  { name: "Solana", symbol: "S", color: "#9945ff", note: "L1 · SVM" },
  { name: "Polygon", symbol: "P", color: "#8247e5", note: "L2 / AggLayer" },
  { name: "BNB Chain", symbol: "B", color: "#f0b90b", note: "L1 · EVM" },
  { name: "Avalanche", symbol: "A", color: "#e84142", note: "L1 · Subnets" },
  { name: "Arbitrum", symbol: "Ar", color: "#28a0f0", note: "L2 Rollup" },
  { name: "Optimism", symbol: "Op", color: "#ff0420", note: "L2 Rollup" },
  { name: "Base", symbol: "Ba", color: "#0052ff", note: "L2 Rollup" },
  { name: "Hyperledger", symbol: "H", color: "#475569", note: "Enterprise" },
  { name: "Cosmos", symbol: "C", color: "#6f7390", note: "App-Chains" }
];

const stackTools = ["Solidity", "Rust", "Hardhat", "Foundry", "Ethers.js / Viem", "The Graph", "Chainlink", "IPFS / Arweave", "Safe{Core}", "Anchor"];

const industries = [
  { icon: "💹", name: "DeFi & Finance", desc: "Lending markets, staking, payment rails and stablecoin infrastructure." },
  { icon: "🎮", name: "Gaming & Metaverse", desc: "On-chain game assets, play-and-earn economies and interoperable items." },
  { icon: "🚚", name: "Supply Chain & Logistics", desc: "Immutable provenance, shipment tracking and automated settlement." },
  { icon: "🏠", name: "Real Estate", desc: "Fractional ownership, tokenized deeds and automated rent distribution." },
  { icon: "🏥", name: "Healthcare", desc: "Patient-controlled records, consent trails and research data integrity." },
  { icon: "⚡", name: "Energy & ESG", desc: "Carbon credit registries, energy trading and verifiable ESG reporting." },
  { icon: "🎵", name: "Media & IP", desc: "Creator royalties, rights registries and transparent revenue splits." },
  { icon: "🛍️", name: "E-Commerce & Loyalty", desc: "Token loyalty programs, digital collectibles and on-chain rewards." }
];

const processSteps = [
  { num: "01", title: "Discovery & Scoping", desc: "We map your business goals to on-chain mechanics: tokenomics, chain selection, compliance needs and a fixed, itemized proposal.", metric: "48h proposal" },
  { num: "02", title: "Architecture & Design", desc: "Protocol architecture, contract schema, threat model and product UX — signed off before a single line of Solidity is written.", metric: "Threat model" },
  { num: "03", title: "Development Sprints", desc: "Weekly demo cycles for contracts, backend indexing and frontends, with full test coverage and a staging testnet from day one.", metric: "Weekly demos" },
  { num: "04", title: "Security Audit", desc: "Internal review plus independent third-party audit. Every finding is fixed, re-verified and documented in a public-ready report.", metric: "0 critical" },
  { num: "05", title: "Testnet & QA", desc: "Full end-to-end dry runs on testnets: mainnet forks, load testing, incident drills and multisig governance rehearsals.", metric: "Mainnet fork" },
  { num: "06", title: "Launch & Support", desc: "Coordinated mainnet deployment, monitoring dashboards and an SLA-backed support team for upgrades and iteration.", metric: "24/7 SLA" }
];

const faqs = [
  { q: "What blockchain development services do you offer?", a: "We cover the full lifecycle: smart contract development and audits, dApp and Web3 integration, DeFi protocols, DEX and CEX exchange platforms, custodial and non-custodial Web3 wallets, Chrome/Firefox/Brave wallet extensions, NFT marketplaces, token creation and tokenomics, RWA tokenization, DAO tooling, Layer 1/Layer 2 protocol engineering and enterprise blockchain networks." },
  { q: "Which blockchains and frameworks do you build on?", a: "We develop on Ethereum, Solana, Polygon, BNB Chain, Avalanche, Arbitrum, Optimism, Base and Hyperledger Fabric, using Solidity, Rust, Hardhat, Foundry, Ethers.js/Viem, The Graph, Chainlink and IPFS. We help you pick the chain that fits your cost, speed and compliance needs." },
  { q: "How long does it take to build a dApp or exchange?", a: "A focused MVP — such as a staking dApp, token or single-marketplace — typically ships in 6–8 weeks. Full DeFi protocols, DEXs or exchange platforms with matching engines usually take 3–6 months depending on scope, integrations and audit depth." },
  { q: "Are your smart contracts audited?", a: "Yes. Every contract goes through internal review, automated static analysis and gas optimization, followed by an independent third-party audit before mainnet. We fix all findings, re-verify and deliver the full audit report." },
  { q: "How much does blockchain development cost?", a: "Pricing depends on scope: standalone smart contracts and token launches start in the low four figures, while full platforms like exchanges or DeFi protocols are quoted per milestone. After a free discovery call we provide a fixed, itemized proposal — no hourly surprises." },
  { q: "Do you provide support after launch?", a: "Yes. We offer monitoring, incident response, contract upgrades via proxy patterns, dependency updates and feature iterations under an SLA — so your product stays secure as the ecosystem evolves." }
];

/* ── SMALL HELPERS ─────────────────────────────────────── */

const pill = {
  background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0",
  padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700"
};

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

export default function BlockchainPageClean() {
  return (
    <div className="vd-wrap" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ═══ 1. HERO ═══ */}
      <section style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f3f4f6 100%)",
        padding: "115px 24px 80px 24px",
        borderBottom: "1px solid #f1f5f9",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="bclean-hero-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "56px", alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ textAlign: "left", zIndex: 2 }}>
            <div className="vd-badge-tag">Blockchain & Web3 Engineering</div>
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(32px, 4.2vw, 48px)", fontWeight: "800", color: "#1e1b4b",
              lineHeight: "1.12", letterSpacing: "-1.5px", marginBottom: "20px"
            }}>
              Build the future of <span className="bclean-highlight">Web3 &amp; Blockchain</span> with one senior team
            </h1>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "36px", maxWidth: "560px", fontWeight: "500" }}>
              From audited smart contracts and dApps to DeFi protocols, NFT marketplaces, wallets, tokenization and high-performance crypto exchanges — we design, build, audit and launch it all.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/contact" className="bclean-btn-dark">Start Blockchain Project →</Link>
              <a href="#capabilities" className="bclean-btn-ghost">Explore Capabilities</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "600px" }}>
              {heroChecks.map((item, i) => (
                <div key={i} className="bclean-check-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ color: "#10b981", fontWeight: "900", fontSize: "14px" }}>✓</span>
                    <h4 style={{ fontSize: "14px", fontWeight: "800", color: "#1e1b4b", margin: 0 }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: "12px", color: "#64748b", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — WALLET PHONE MOCKUP */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
            <div className="bclean-phone-wrapper" style={{ background: "#ffffff", borderRadius: "36px", padding: "16px", boxShadow: "0 25px 60px rgba(15, 23, 42, 0.08)", maxWidth: "340px", width: "100%" }}>
              <div style={{ background: "#0f172a", borderRadius: "28px", padding: "16px", color: "#ffffff", position: "relative", overflow: "hidden", height: "470px", display: "flex", flexDirection: "column", border: "1px solid #1e293b", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "800" }}>Hi Arima 👋</div>
                    <div style={{ fontSize: "9.5px", color: "#94a3b8" }}>Manage your portfolio</div>
                  </div>
                  <span style={{ fontSize: "9px", background: "#1e293b", padding: "5px 10px", borderRadius: "99px", color: "#94a3b8", fontWeight: "700" }}>Web3 Wallet</span>
                </div>

                <div style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)", borderRadius: "18px", padding: "18px", marginBottom: "14px", position: "relative", overflow: "hidden" }}>
                  <div style={{ fontSize: "9.5px", color: "#bfdbfe", fontWeight: "700", marginBottom: "6px" }}>Total Balance</div>
                  <div style={{ fontSize: "26px", fontWeight: "900", letterSpacing: "-0.5px", marginBottom: "10px" }}>$12,480.35</div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px" }}>
                    <span style={{ background: "rgba(255,255,255,0.16)", padding: "4px 8px", borderRadius: "6px", fontWeight: "800" }}>▲ 8.2% this month</span>
                    <span style={{ color: "#bfdbfe", fontWeight: "700", padding: "4px 0" }}>BTC · ETH · USDT</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                  {["↗ Send", "↙ Receive", "⇅ Swap"].map((b) => (
                    <div key={b} style={{ flex: 1, textAlign: "center", background: "#1e293b", border: "1px solid #334155", borderRadius: "10px", padding: "9px 0", fontSize: "10px", fontWeight: "800", color: "#e2e8f0" }}>{b}</div>
                  ))}
                </div>

                <div style={{ background: "#1e293b", borderRadius: "14px", padding: "12px", border: "1px solid #334155", marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9.5px", marginBottom: "6px" }}>
                    <span style={{ color: "#94a3b8" }}>Swap</span><span style={{ fontWeight: "800" }}>0.5 BTC → 39,553 USDT</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9.5px" }}>
                    <span style={{ color: "#94a3b8" }}>Rate</span><span style={{ fontWeight: "800", color: "#34d399" }}>1 BTC = 79,106 USDT</span>
                  </div>
                </div>

                <div style={{ fontSize: "9.5px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px" }}>RECENT ACTIVITY</div>
                {[
                  { ic: "Ξ", name: "Receive ETH", date: "25 Aug • 09:12", amt: "+2.40 ETH", up: true },
                  { ic: "₮", name: "Send USDT", date: "24 Aug • 18:40", amt: "−850.00 USDT", up: false }
                ].map((t) => (
                  <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#111827", border: "1px solid #1f2937", borderRadius: "12px", padding: "9px 10px", marginBottom: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#1e3a8a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "800", flexShrink: 0 }}>{t.ic}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "10px", fontWeight: "800" }}>{t.name}</div>
                      <div style={{ fontSize: "8px", color: "#6b7280" }}>{t.date}</div>
                    </div>
                    <span style={{ fontSize: "10px", fontWeight: "800", color: t.up ? "#34d399" : "#f87171" }}>{t.amt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating chip */}
            <div className="bclean-float-chip" style={{ position: "absolute", right: "-14px", bottom: "48px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "12px 18px", boxShadow: "0 16px 40px rgba(15,23,42,0.12)", display: "flex", alignItems: "center", gap: "10px", zIndex: 3 }}>
              <span style={{ fontSize: "20px" }}>🛡️</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>100% Audited</div>
                <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>Pre-launch, every contract</div>
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
          <h2 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.1", letterSpacing: "-1px", margin: "0 0 12px 0" }}>Our Blockchain Engineering Stack</h2>
          <p style={{ color: "#475569", fontSize: "16px", fontWeight: "600", margin: 0 }}>Audited smart contracts, trading infrastructure and custody systems — engineered for mainnet from day one.</p>
        </div>

        <div className="reports-grid">
          {/* CARD 1: Smart Contracts */}
          <div className="report-card">
            <MockTerminal title="Token.sol — Solidity 0.8.26" titleColor="#38bdf8" status="✓ Audit passed • 0 critical • Gas optimized" statusColor="#4ade80">
              <span style={{ color: "#c084fc" }}>contract</span> <span style={{ color: "#facc15" }}>ONLToken</span> <span style={{ color: "#c084fc" }}>is</span> ERC20, Ownable &#123;<br />
              &nbsp;&nbsp;<span style={{ color: "#c084fc" }}>constructor</span>() ERC20(<span style={{ color: "#4ade80" }}>&quot;OneNine&quot;</span>, <span style={{ color: "#4ade80" }}>&quot;ONL&quot;</span>) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;_mint(msg.sender, <span style={{ color: "#38bdf8" }}>100_000_000e18</span>);<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;
            </MockTerminal>
            <h3 className="card-title">Smart Contract Development</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Gas-optimized ERC-20/721/1155 contracts, upgradeable proxies and custom protocol logic — fuzz-tested and audited.
            </p>
            <div className="card-buttons">
              <Link href="#services" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Scope a contract</Link>
            </div>
          </div>

          {/* CARD 2: Exchanges */}
          <div className="report-card">
            <MockTerminal title="matching-engine.ts — Exchange Core" titleColor="#f59e0b" status="⚡ 1.2M orders/s • p99 latency 4ms" statusColor="#facc15">
              <span style={{ color: "#38bdf8" }}>engine</span>.<span style={{ color: "#facc15" }}>on</span>(<span style={{ color: "#4ade80" }}>&apos;order&apos;</span>, <span style={{ color: "#c084fc" }}>match</span>(book));<br />
              <span style={{ color: "#38bdf8" }}>engine</span>.<span style={{ color: "#facc15" }}>enable</span>(<span style={{ color: "#4ade80" }}>&apos;cold-withdrawals&apos;</span>);<br />
              <span style={{ color: "#64748b" }}>{"// risk checks: KYC, limits, 2FA"}</span><br />
              <span style={{ color: "#c084fc" }}>await</span> liquidity.<span style={{ color: "#facc15" }}>connect</span>();
            </MockTerminal>
            <h3 className="card-title">DEX &amp; Exchange Development</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              AMM &amp; orderbook DEXs plus CEX matching engines with custody, KYC flows and deep liquidity integration.
            </p>
            <div className="card-buttons">
              <Link href="#exchange" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Scope an exchange</Link>
            </div>
          </div>

          {/* CARD 3: Wallets */}
          <div className="report-card">
            <MockTerminal title="key-ceremony.log — Custody" titleColor="#a78bfa" status="🔒 MPC 3/5 shards • Cold storage linked" statusColor="#a78bfa">
              <span style={{ color: "#4ade80" }}>✓ MPC shards 3/5 generated</span><br />
              <span style={{ color: "#4ade80" }}>✓ Hardware signer paired</span><br />
              <span style={{ color: "#4ade80" }}>✓ Withdrawal policy engine active</span><br />
              <span style={{ color: "#38bdf8" }}>wallet</span>.<span style={{ color: "#facc15" }}>setPolicy</span>(&#123; dailyLimit &#125;);
            </MockTerminal>
            <h3 className="card-title">Wallets &amp; Browser Extensions</h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
              Custodial, non-custodial and MPC wallets for web, mobile and Chrome/Firefox/Brave extensions.
            </p>
            <div className="card-buttons">
              <Link href="#wallet" className="btn-details">View details</Link>
              <Link href="/contact" className="btn-preview">Scope a wallet</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. COMPLETE SERVICES GRID ═══ */}
      <section id="services" style={{ background: "#ffffff", padding: "104px 24px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <h2 className="vd-section-h2">Complete Blockchain Development Services</h2>
        <p className="vd-section-p" style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", marginBottom: "64px" }}>
          Every layer of the Web3 stack, covered by one senior team — from protocol design and smart contracts to polished product UX and post-launch operations.
        </p>

        <div className="bento-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "24px",
          maxWidth: "1150px",
          margin: "0 auto",
          textAlign: "left"
        }}>
          {/* Card 1: Left */}
          <div className="bento-card" style={{
            gridColumn: "1 / 2", gridRow: "1 / 3", background: "#f8fafc", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", border: "1px solid #e2e8f0"
          }}>
            <div style={{ fontSize: "72px", fontWeight: "400", fontFamily: "Georgia, serif", color: "#0f172a", lineHeight: "1" }}>82%</div>
            <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#0f172a", margin: "12px 0" }}>Felt More in Control</h3>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.6", marginBottom: "40px" }}>
              Reported improved confidence managing their brain health after using the dashboard.
            </p>
            <div style={{ background: "#ffffff", borderRadius: "16px", padding: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0", zIndex: 2, marginTop: "auto" }}>
              <div style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px" }}>Suggested Next Steps</div>
              <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "24px", background: "#f1f5f9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>🩺</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a" }}>Diagnostic <span style={{ color: "#94a3b8", fontWeight: "400", marginLeft: "8px" }}>May - June</span></div>
                  <ul style={{ paddingLeft: "16px", margin: "4px 0 0", fontSize: "11px", color: "#64748b", lineHeight: "1.5" }}>
                    <li>Repeat MRI in 3-4 months</li>
                    <li>Cognitive test recommended</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{ width: "24px", height: "24px", background: "#f1f5f9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>👨‍⚕️</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#0f172a" }}>Specialist <span style={{ color: "#94a3b8", fontWeight: "400", marginLeft: "8px" }}>July</span></div>
                  <ul style={{ paddingLeft: "16px", margin: "4px 0 0", fontSize: "11px", color: "#64748b", lineHeight: "1.5" }}>
                    <li>Consult a neurologist (early risk detected)</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Background shadow shapes for mockup */}
            <div style={{ position: "absolute", bottom: "-20px", left: "10%", right: "10%", height: "100px", background: "#ffffff", borderRadius: "16px", opacity: 0.5, zIndex: 1, transform: "scale(0.9)" }}></div>
          </div>

          {/* Card 2: Top Mid */}
          <div className="bento-card" style={{
            gridColumn: "2 / 3", gridRow: "1 / 2", background: "#f8fafc", borderRadius: "24px", padding: "32px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column"
          }}>
            <div style={{ fontSize: "48px", fontWeight: "400", fontFamily: "Georgia, serif", color: "#0f172a", lineHeight: "1" }}>68%</div>
            <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#0f172a", margin: "12px 0" }}>Risk Reduction</h3>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.5", marginBottom: "32px" }}>
              Users who followed AI-guided lifestyle suggestions reduced key risk markers.
            </p>
            <div style={{ marginTop: "auto", position: "relative", height: "100px", overflow: "hidden", display: "flex", justifyContent: "center" }}>
              {/* Semi-circle gauge */}
              <svg width="200" height="100" viewBox="0 0 200 100" style={{ position: "absolute", bottom: 0 }}>
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#e2e8f0" strokeWidth="16" strokeLinecap="round" />
                <path d="M 20 100 A 80 80 0 0 1 150 40" fill="none" stroke="#4ade80" strokeWidth="16" strokeLinecap="round" />
                <circle cx="150" cy="40" r="8" fill="#4ade80" stroke="#ffffff" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* Card 3: Top Right */}
          <div className="bento-card" style={{
            gridColumn: "3 / 4", gridRow: "1 / 2", background: "#f8fafc", borderRadius: "24px", padding: "32px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column"
          }}>
            <div style={{ fontSize: "48px", fontWeight: "400", fontFamily: "Georgia, serif", color: "#0f172a", lineHeight: "1" }}>76%</div>
            <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#0f172a", margin: "12px 0" }}>Detected Early</h3>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.5", marginBottom: "32px" }}>
              Early-stage neurodegenerative conditions identified before clinical symptoms appeared.
            </p>
            <div style={{ marginTop: "auto" }}>
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "600", marginBottom: "6px" }}>
                  <span style={{ color: "#64748b" }}>Symptoms Appeared</span>
                  <span style={{ color: "#0f172a" }}>May 2025</span>
                </div>
                <div style={{ height: "12px", background: "#ffedd5", borderRadius: "6px", width: "100%", position: "relative" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "85%", background: "#fdba74", borderRadius: "6px" }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "600", marginBottom: "6px" }}>
                  <span style={{ color: "#64748b" }}>Condition Detected</span>
                  <span style={{ color: "#0f172a" }}>June 2024</span>
                </div>
                <div style={{ height: "12px", background: "#ffedd5", borderRadius: "6px", width: "100%", position: "relative" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "65%", background: "#f97316", borderRadius: "6px" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom Right */}
          <div className="bento-card" style={{
            gridColumn: "2 / 4", gridRow: "2 / 3", background: "#f8fafc", borderRadius: "24px", padding: "32px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "24px"
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "48px", fontWeight: "400", fontFamily: "Georgia, serif", color: "#0f172a", lineHeight: "1" }}>12k</div>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.6", margin: "16px 0 24px" }}>
                Individuals already tracking their brain health with our platform.
              </p>
              <button style={{ background: "#0f172a", color: "#ffffff", padding: "10px 24px", borderRadius: "99px", fontSize: "14px", fontWeight: "600", border: "none", cursor: "pointer" }}>Join Us</button>
            </div>
            <div style={{ width: "200px", height: "160px", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: "#e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
                <img src="https://i.pravatar.cc/150?img=1" alt="User 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ background: "#e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
                <img src="https://i.pravatar.cc/150?img=2" alt="User 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ background: "#e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
                <img src="https://i.pravatar.cc/150?img=3" alt="User 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ background: "#e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
                <img src="https://i.pravatar.cc/150?img=4" alt="User 4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>

        {/* CSS for responsiveness */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 900px) {
            .bento-grid { grid-template-columns: 1fr 1fr !important; }
            .bento-grid > div:nth-child(1) { grid-column: 1 / 3 !important; grid-row: 1 / 2 !important; }
            .bento-grid > div:nth-child(2) { grid-column: 1 / 2 !important; grid-row: 2 / 3 !important; }
            .bento-grid > div:nth-child(3) { grid-column: 2 / 3 !important; grid-row: 2 / 3 !important; }
            .bento-grid > div:nth-child(4) { grid-column: 1 / 3 !important; grid-row: 3 / 4 !important; }
          }
          @media (max-width: 600px) {
            .bento-grid { grid-template-columns: 1fr !important; }
            .bento-grid > div { grid-column: 1 / 2 !important; grid-row: auto !important; }
            .bento-grid > div:nth-child(4) { flex-direction: column !important; text-align: center !important; }
            .bento-grid > div:nth-child(4) > div:nth-child(2) { width: 100% !important; height: auto !important; aspect-ratio: 4/3; }
          }
        `}} />
      </section>

      <BlockchainSpotlights />

      {/* ═══ 6. TOKEN & CONTRACT DEPLOYMENT ═══ */}
      <section style={{ background: "#f8fafc", padding: "96px 24px", borderTop: "1px solid #f1f5f9" }}>
        <div className="bclean-perf-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1.2fr", gap: "48px", alignItems: "center", maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ textAlign: "left" }}>
            <span style={{ fontSize: "13px", fontWeight: "900", letterSpacing: "2.5px", textTransform: "uppercase", color: "#0f172a", display: "block", marginBottom: "12px" }}>LAUNCH SERVICES</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: "900", color: "#0f172a", lineHeight: "1.15", letterSpacing: "-1.2px", margin: "0 0 16px 0" }}>
              Token Creation &amp; Contract Deployment
            </h2>
            <p style={{ color: "#475569", fontSize: "15px", fontWeight: "600", margin: "0 0 28px 0", lineHeight: "1.65" }}>
              From token design to a verified mainnet launch — we engineer the contract, run the audit, rehearse on testnets and execute the deployment so your launch day is boring, in the best way.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {deployChecklist.map((c, i) => (
                <div key={i} style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ color: "#10b981", fontWeight: "900", fontSize: "13px" }}>✓</span>
                    <span style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a" }}>{c.title}</span>
                  </div>
                  <p style={{ fontSize: "11.5px", color: "#64748b", margin: 0, lineHeight: "1.5" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deploy console */}
          <div style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", borderRadius: "24px", padding: "18px", boxShadow: "0 20px 50px rgba(15,23,42,0.06)" }}>
            <div style={{ background: "#0f172a", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "12px 16px", background: "#1e293b" }}>
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#10b981" }} />
                <span style={{ margin: "0 auto", background: "#0f172a", color: "#64748b", fontSize: "11px", padding: "3px 28px", borderRadius: "6px" }}>deploy.oneninelabs.com</span>
              </div>
              <div style={{ padding: "22px 24px", fontFamily: "'SF Mono', Menlo, Consolas, monospace", fontSize: "12.5px", lineHeight: "2.05" }}>
                {consoleLines.map((l, i) => (
                  <div key={i} style={{ color: l.color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.text}</div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", padding: "14px 24px", background: "#1e293b" }}>
                <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600", marginRight: "4px" }}>Deployed to:</span>
                {["Ethereum", "BNB Chain", "Polygon", "Solana"].map((c) => (
                  <span key={c} style={{ fontSize: "11px", fontWeight: "600", color: "#cbd5e1", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.35)", padding: "4px 12px", borderRadius: "100px" }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. BLOCKCHAINS & TOOLS ═══ */}
      <section style={{ background: "#ffffff", padding: "104px 24px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Infrastructure</div>
        <h2 className="vd-section-h2">Blockchains &amp; Tools We Build With</h2>
        <p className="vd-section-p" style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
          Chain-agnostic engineering across the major EVM, SVM and enterprise networks — we recommend the stack that fits your cost, speed and compliance requirements.
        </p>

        <div className="bclean-net-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px", maxWidth: "1150px", margin: "52px auto 44px" }}>
          {networks.map((n, i) => (
            <div key={i} className="bclean-net-card">
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: n.color, color: "#fff", fontWeight: "800", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 14px rgba(15,23,42,0.15)" }}>{n.symbol}</span>
              <div style={{ textAlign: "left", minWidth: 0 }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a", whiteSpace: "nowrap" }}>{n.name}</div>
                <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "600" }}>{n.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px", maxWidth: "1150px", margin: "0 auto 26px" }}>
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
          <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "1.5px", textTransform: "uppercase", color: "#94a3b8" }}>Development Stack</span>
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", maxWidth: "900px", margin: "0 auto" }}>
          {stackTools.map((t, i) => (
            <span key={i} className="bclean-tool-pill">{t}</span>
          ))}
        </div>
      </section>

      {/* ═══ 8. INDUSTRIES ═══ */}
      <section style={{ background: "#f8fafc", padding: "96px 24px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Use Cases</div>
        <h2 className="vd-section-h2">Industries We Build For</h2>
        <p className="vd-section-p" style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
          Blockchain isn&apos;t one industry — it&apos;s infrastructure. We&apos;ve applied it across these sectors and know the pitfalls unique to each.
        </p>

        <div className="bclean-ind-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", maxWidth: "1150px", margin: "52px auto 0", textAlign: "left" }}>
          {industries.map((ind, i) => (
            <div key={i} className="bclean-ind-card">
              <span style={{ width: "50px", height: "50px", flexShrink: 0, borderRadius: "14px", background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "23px" }}>{ind.icon}</span>
              <div>
                <h4 style={{ fontSize: "15.5px", fontWeight: "800", color: "#0f172a", margin: "0 0 4px 0" }}>{ind.name}</h4>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.55", margin: 0 }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 9. PROCESS TIMELINE ═══ */}
      <section className="vd-process-section" style={{ padding: "104px 24px 90px" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Delivery Process</div>
        <h2 className="vd-section-h2">How We Ship Blockchain Products</h2>
        <p className="vd-section-p" style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          A battle-tested delivery process that takes you from idea to audited mainnet — with fixed milestones and zero surprises.
        </p>

        <div className="vd-process-timeline-v2">
          <div className="vt-line"></div>
          {processSteps.map((step, idx) => {
            const isRight = idx % 2 === 1;
            return (
              <div className={`vt-item ${isRight ? "vt-right" : "vt-left"}`} key={step.num}>
                <div className="vt-dot"></div>
                <div className="vt-content">
                  <span className="vt-step-badge">Step {step.num}</span>
                  <h3 className="vt-title">{step.title}</h3>
                  <p className="vt-desc">{step.desc}</p>
                </div>
                <div className="vt-visual">
                  <div className="vt-image-container">
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

      {/* ═══ 10. FAQ ═══ */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a", textAlign: "center", marginBottom: "40px" }}>Blockchain Engineering FAQs</h2>
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
          <div className="vd-cta-title">Have a blockchain idea? <span>Let&apos;s scope it.</span></div>
          <p className="vd-cta-desc">
            Tell us what you want to build — a token, dApp, exchange, marketplace or full protocol. Within 48 hours you&apos;ll get a technical feasibility review, chain recommendation and a fixed, itemized proposal.
          </p>
          <div className="vd-cta-btns">
            <Link href="/contact" className="vd-btn-primary">Start Your Project →</Link>
            <Link href="/services" className="vd-btn-ghost">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── PAGE-LOCAL STYLES ── */}
      <style>{`
        .bclean-highlight {
          background: linear-gradient(135deg, ${"#1e3a8a"}, ${PRIMARY});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .bclean-btn-dark {
          background: #0f172a; color: #ffffff; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
          display: inline-flex; align-items: center; gap: 8px;
          border: 1.5px solid #0f172a; transition: all 0.25s ease;
        }
        .bclean-btn-dark:hover {
          background: #ffffff; color: #0f172a; transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.1);
        }
        .bclean-btn-ghost {
          background: #ffffff; color: #0f172a; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          border: 1.5px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          display: inline-flex; align-items: center; transition: all 0.25s ease;
        }
        .bclean-btn-ghost:hover { border-color: #0f172a; transform: translateY(-2px); }
        .bclean-check-card {
          background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(15,23,42,0.01);
        }
        .bclean-check-card:hover { transform: translateY(-4px); border-color: #cbd5e1; box-shadow: 0 10px 24px rgba(15,23,42,0.04); }
        @keyframes bcleanFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .bclean-phone-wrapper { animation: bcleanFloat 6s ease-in-out infinite; }
        @keyframes bcleanChipFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        .bclean-float-chip { animation: bcleanChipFloat 5s ease-in-out 0.8s infinite; }

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

        .bclean-net-card {
          background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 18px;
          display: flex; align-items: center; gap: 12px; transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(15,23,42,0.02);
        }
        .bclean-net-card:hover { transform: translateY(-4px); border-color: #93c5fd; box-shadow: 0 14px 30px rgba(15,23,42,0.07); }
        .bclean-tool-pill {
          background: #ffffff; border: 1.5px solid #e2e8f0; color: #334155;
          font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 99px;
          transition: all 0.2s; display: inline-block;
        }
        .bclean-tool-pill:hover { border-color: ${PRIMARY}; color: ${PRIMARY}; background: #eff6ff; }
        .bclean-ind-card {
          background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 22px 24px;
          display: flex; align-items: center; gap: 18px; transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(15,23,42,0.02);
        }
        .bclean-ind-card:hover { transform: translateY(-3px); border-color: #93c5fd; box-shadow: 0 14px 30px rgba(15,23,42,0.07); }

        @media (max-width: 1024px) {
          .bclean-hero-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
          .reports-grid { grid-template-columns: 1fr; max-width: 560px; }
          .bclean-perf-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .bclean-net-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .bclean-ind-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .bclean-net-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
