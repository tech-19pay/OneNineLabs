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
    <section className="bc-tech-section">
      <div className="new-bc-container">
        <div className="bc-tech-header">
          <span className="bc-tech-eyebrow">Infrastructure</span>
          <h2 className="bc-tech-title">Blockchains & Tools<br/>We Build With</h2>
          <p className="bc-tech-sub">
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

        <div className="bc-tech-divider">
          <span>Development Stack</span>
        </div>

        <div className="bc-tech-tools">
          {stack.map((t, idx) => (
            <span key={idx} className="bc-tech-pill">{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        .bc-tech-section {
          position: relative;
          padding: 110px 0;
          background: #0b1220;
          overflow: hidden;
        }
        .bc-tech-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, #000 40%, transparent 100%);
          pointer-events: none;
        }
        .bc-tech-section::after {
          content: '';
          position: absolute;
          top: -160px;
          left: 50%;
          transform: translateX(-50%);
          width: 720px;
          height: 420px;
          background: radial-gradient(closest-side, rgba(37, 99, 235, 0.28), transparent);
          pointer-events: none;
        }
        .bc-tech-section > .new-bc-container {
          position: relative;
          z-index: 1;
        }
        .bc-tech-header {
          max-width: 640px;
          margin: 0 auto 60px;
          text-align: center;
        }
        .bc-tech-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #93c5fd;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 22px;
        }
        .bc-tech-title {
          font-size: 42px;
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 18px;
        }
        .bc-tech-sub {
          font-size: 16px;
          color: #94a3b8;
          line-height: 1.6;
        }
        .bc-tech-networks {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 48px;
        }
        .bc-tech-net-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 16px;
          padding: 20px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;
          backdrop-filter: blur(4px);
        }
        .bc-tech-net-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(96, 165, 250, 0.45);
          box-shadow: 0 14px 32px rgba(2, 6, 23, 0.5);
        }
        .bc-tech-net-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        }
        .bc-tech-net-meta {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .bc-tech-net-meta strong {
          font-size: 14px;
          color: #f1f5f9;
          white-space: nowrap;
        }
        .bc-tech-net-meta small {
          font-size: 11px;
          color: #64748b;
        }
        .bc-tech-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }
        .bc-tech-divider::before,
        .bc-tech-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.25));
        }
        .bc-tech-divider::after {
          background: linear-gradient(90deg, rgba(148, 163, 184, 0.25), transparent);
        }
        .bc-tech-divider span {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #64748b;
        }
        .bc-tech-tools {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .bc-tech-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 100px;
          transition: all 0.2s;
        }
        .bc-tech-pill:hover {
          border-color: #60a5fa;
          color: #fff;
          background: rgba(59, 130, 246, 0.12);
        }
        @media (max-width: 1024px) {
          .bc-tech-networks { grid-template-columns: repeat(3, 1fr); }
          .bc-tech-title { font-size: 34px; }
        }
        @media (max-width: 640px) {
          .bc-tech-networks { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
