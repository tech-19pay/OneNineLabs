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
  { name: "Hyperledger", symbol: "H", color: "#0f172a", note: "Enterprise" },
  { name: "Cosmos", symbol: "C", color: "#6f7390", note: "App-Chains" }
];

const stack = [
  "Solidity", "Rust", "Hardhat", "Foundry", "Ethers.js / Viem",
  "The Graph", "Chainlink", "IPFS / Arweave", "Safe{Core}", "Anchor"
];

export default function BlockchainTechStack() {
  return (
    <section className="bc-tech-section">
      <div className="new-bc-container">
        <div className="bc-tech-header">
          <h2 className="bc-section-title text-center">Blockchains & Tools<br/>We Build With</h2>
          <p className="bc-tech-sub text-center">
            Chain-agnostic engineering across the major EVM, SVM and enterprise networks — we recommend the stack that fits your cost, speed and compliance requirements.
          </p>
        </div>

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

        <div className="bc-tech-tools">
          {stack.map((t, idx) => (
            <span key={idx} className="bc-tech-pill">{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        .bc-tech-section {
          padding: 100px 0;
          background: #f9fafb;
        }
        .bc-tech-header {
          max-width: 640px;
          margin: 0 auto 56px;
        }
        .bc-tech-sub {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-top: 20px;
        }
        .bc-tech-networks {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }
        .bc-tech-net-card {
          background: #fff;
          border: 1px solid #f3f4f6;
          border-radius: 14px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;
        }
        .bc-tech-net-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
        }
        .bc-tech-net-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .bc-tech-net-meta {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .bc-tech-net-meta strong {
          font-size: 13.5px;
          color: #111;
          white-space: nowrap;
        }
        .bc-tech-net-meta small {
          font-size: 11px;
          color: #888;
        }
        .bc-tech-tools {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .bc-tech-pill {
          background: #fff;
          border: 1px solid #e5e7eb;
          color: #333;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 18px;
          border-radius: 100px;
          transition: all 0.2s;
        }
        .bc-tech-pill:hover {
          border-color: #2563eb;
          color: #2563eb;
        }
        @media (max-width: 1024px) {
          .bc-tech-networks { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .bc-tech-networks { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
