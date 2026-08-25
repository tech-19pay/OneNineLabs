"use client";
import React from 'react';

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

const stack = [
  "Solidity", "Rust", "Hardhat", "Foundry", "Ethers.js / Viem",
  "The Graph", "Chainlink", "IPFS / Arweave", "Safe{Core}", "Anchor"
];

export default function BlockchainTechStack() {
  return (
    <section className="bc-tech-section" id="tech-stack">
      <div className="new-bc-container">
        
        {/* Header */}
        <div className="bc-tech-header">
          <h2 className="bc-tech-title">Blockchains & Tools We Build With</h2>
          <p className="bc-tech-sub">
            Chain-agnostic engineering across the major EVM, SVM and enterprise networks — we architect and deploy on the exact stack that fits your speed, cost, and compliance requirements.
          </p>
        </div>

        {/* 10 Network Cards Grid */}
        <div className="bc-tech-networks">
          {networks.map((n, idx) => (
            <div key={idx} className="bc-tech-net-card">
              <span className="bc-tech-net-icon" style={{ background: n.color }}>{n.symbol}</span>
              <div className="bc-tech-net-meta">
                <strong>{n.name}</strong>
                <small>{n.note}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="bc-tech-divider">
          <span>Development & Security Stack</span>
        </div>

        {/* Tool Pills */}
        <div className="bc-tech-tools">
          {stack.map((t, idx) => (
            <span key={idx} className="bc-tech-pill">{t}</span>
          ))}
        </div>

      </div>

      <style>{`
        .bc-tech-section {
          padding: 30px 0 80px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }

        .bc-tech-header {
          max-width: 680px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .bc-tech-title {
          font-size: 38px;
          font-weight: 800;
          color: #091326;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 14px 0;
        }
        .bc-tech-sub {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* 10 Networks Grid */
        .bc-tech-networks {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }
        .bc-tech-net-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #f8fafc;
          border: 1px solid #eef0f3;
          border-radius: 16px;
          transition: all 0.25s ease;
        }
        .bc-tech-net-card:hover {
          transform: translateY(-3px);
          background: #ffffff;
          border-color: #dbeafe;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }
        .bc-tech-net-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }
        .bc-tech-net-meta {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .bc-tech-net-meta strong {
          font-size: 14px;
          font-weight: 700;
          color: #091326;
        }
        .bc-tech-net-meta small {
          font-size: 11px;
          color: #64748b;
          font-weight: 500;
        }

        /* Divider with Label */
        .bc-tech-divider {
          position: relative;
          text-align: center;
          margin: 36px 0 28px;
        }
        .bc-tech-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e2e8f0;
        }
        .bc-tech-divider span {
          position: relative;
          display: inline-block;
          background: #ffffff;
          padding: 0 16px;
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Tool Pills */
        .bc-tech-tools {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          max-width: 920px;
          margin: 0 auto;
        }
        .bc-tech-pill {
          font-size: 13.5px;
          font-weight: 600;
          color: #091326;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 100px;
          transition: all 0.2s ease;
        }
        .bc-tech-pill:hover {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #1e3a8a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .bc-tech-networks {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .bc-tech-section {
            padding: 24px 0 60px;
          }
          .bc-tech-title {
            font-size: 28px;
          }
          .bc-tech-networks {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .bc-tech-net-card {
            padding: 10px 12px;
          }
        }
      `}</style>
    </section>
  );
}
