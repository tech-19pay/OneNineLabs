"use client";
import React from 'react';

const services = [
  {
    icon: "📜",
    title: "Smart Contract Development",
    desc: "Secure, gas-optimized contracts in Solidity & Rust — ERC-20/721/1155/4337 tokens, upgradeable proxies, staking, vesting and custom protocol logic.",
    tags: ["Solidity", "Rust", "Upgradeable Proxies"]
  },
  {
    icon: "🔍",
    title: "Smart Contract Audits",
    desc: "Manual line-by-line review, automated static analysis and reentrancy/economic attack modeling — with a full report, fixes and re-verification before mainnet.",
    tags: ["Security Review", "Static Analysis", "Re-Audit"]
  },
  {
    icon: "🖥️",
    title: "dApp Development",
    desc: "End-to-end decentralized applications: React/Next.js and React Native frontends, wallet connection, on-chain indexing and real-time event pipelines.",
    tags: ["Next.js", "WalletConnect", "The Graph"]
  },
  {
    icon: "🏦",
    title: "DeFi Protocol Development",
    desc: "Lending & borrowing markets, liquid staking, yield vaults, AMMs, derivatives and stablecoin systems engineered for capital efficiency and safety.",
    tags: ["Lending", "Staking", "Yield Vaults"]
  },
  {
    icon: "🔁",
    title: "DEX & Exchange Development",
    desc: "AMM and orderbook DEXs, plus centralized exchanges with high-throughput matching engines, custody, KYC flows and liquidity integrations.",
    tags: ["AMM", "Orderbook", "Matching Engine"]
  },
  {
    icon: "👛",
    title: "Wallet Development",
    desc: "Custodial, non-custodial and MPC wallets for web, mobile and browser extensions — with multi-sig, social recovery and fiat on/off ramps.",
    tags: ["MPC", "Multi-Sig", "Mobile & Web"]
  },
  {
    icon: "🖼️",
    title: "NFT Marketplace Development",
    desc: "Minting, auctions, royalties, launchpads and creator tooling on EVM chains and Solana — from digital art to tickets, gaming assets and RWAs.",
    tags: ["ERC-721/1155", "Auctions", "Royalties"]
  },
  {
    icon: "🪙",
    title: "Token Development & Tokenomics",
    desc: "Token design, supply and vesting schedules, governance models and launch support — utility tokens, governance tokens and compliant security tokens.",
    tags: ["ERC-20", "SPL", "Vesting"]
  },
  {
    icon: "⛓️",
    title: "Layer 1 / Layer 2 & Protocols",
    desc: "Custom chains and rollups: OP Stack app-chains, Cosmos SDK zones, consensus tuning, validator infrastructure and protocol-level engineering.",
    tags: ["Rollups", "App-Chains", "Consensus"]
  },
  {
    icon: "🌉",
    title: "Cross-Chain Bridges",
    desc: "Token bridges and message-passing between chains with lock/mint and burn/release models, relayer security and liquidity-network design.",
    tags: ["Interop", "Bridges", "Messaging"]
  },
  {
    icon: "🏛️",
    title: "RWA Tokenization",
    desc: "Tokenize real estate, funds, bonds and invoices with compliance wrappers, investor whitelisting, dividend distribution and secondary-market liquidity.",
    tags: ["Real Estate", "Funds", "Compliance"]
  },
  {
    icon: "🏢",
    title: "Enterprise & DAO Tooling",
    desc: "Private and consortium networks on Hyperledger Fabric, plus DAO governance: treasuries, voting, timelocks and contributor payroll.",
    tags: ["Hyperledger", "Governance", "Treasuries"]
  }
];

export default function BlockchainServicesGrid() {
  return (
    <section className="bc-services-grid-section" id="services">
      <div className="new-bc-container">
        <div className="bc-sg-header">
          <div className="bc-sg-head-left">
            <span className="bc-eyebrow">Full-Stack Web3</span>
            <h2 className="bc-section-title">Complete Blockchain<br/>Development Services</h2>
          </div>
          <div className="bc-sg-head-right">
            <p>
              Every layer of the Web3 stack, covered by one senior team — from protocol design and smart contracts to polished product UX and post-launch operations.
            </p>
            <div className="bc-sg-head-meta">
              <span>12 service lines</span>
              <span>One accountable team</span>
            </div>
          </div>
        </div>

        <div className="bc-sg-grid">
          {services.map((s, idx) => (
            <div key={idx} className="bc-sg-card">
              <div className="bc-sg-top">
                <div className="bc-sg-icon">{s.icon}</div>
                <span className="bc-sg-num">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="bc-sg-title">{s.title}</h3>
              <p className="bc-sg-desc">{s.desc}</p>
              <div className="bc-sg-tags">
                {s.tags.map((t, i) => (
                  <span key={i} className="bc-sg-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bc-services-grid-section {
          padding: 110px 0;
          background: #f9fafb;
        }
        .bc-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .bc-sg-header {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 64px;
        }
        .bc-sg-head-right p {
          font-size: 16px;
          color: #666;
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .bc-sg-head-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .bc-sg-head-meta span {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          background: #fff;
          border: 1px solid #e5e7eb;
          padding: 7px 14px;
          border-radius: 100px;
        }
        .bc-sg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .bc-sg-card {
          position: relative;
          background: #fff;
          border: 1px solid #eef0f3;
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .bc-sg-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1e3a8a, #2563eb);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .bc-sg-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 44px rgba(15, 23, 42, 0.08);
          border-color: #dbeafe;
        }
        .bc-sg-card:hover::before {
          opacity: 1;
        }
        .bc-sg-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 22px;
        }
        .bc-sg-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }
        .bc-sg-num {
          font-size: 13px;
          font-weight: 800;
          color: #cbd5e1;
          letter-spacing: 1px;
        }
        .bc-sg-title {
          font-size: 17.5px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .bc-sg-desc {
          font-size: 13.5px;
          color: #666;
          line-height: 1.65;
          margin-bottom: 20px;
          flex: 1;
        }
        .bc-sg-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .bc-sg-tag {
          font-size: 11px;
          font-weight: 600;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 4px 10px;
          border-radius: 100px;
        }
        @media (max-width: 1024px) {
          .bc-sg-header { grid-template-columns: 1fr; gap: 24px; }
          .bc-sg-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .bc-sg-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
