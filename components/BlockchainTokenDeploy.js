"use client";
import React from 'react';

const features = [
  { title: "All Token Standards", desc: "ERC-20, ERC-721/1155, BEP-20 and SPL tokens with custom mechanics tailored to your product." },
  { title: "Tokenomics Built-In", desc: "Mint/burn controls, hard supply caps, transfer fees, staking hooks and anti-abuse limits." },
  { title: "Vesting & Lockups", desc: "Team vesting, cliff schedules and liquidity locks enforced on-chain — trustless by design." },
  { title: "Upgradeable When Needed", desc: "UUPS and Transparent proxy patterns with timelock governance for safe future upgrades." },
  { title: "Multi-Chain Deployment", desc: "One audited codebase deployed and verified across Ethereum, BNB Chain, Polygon, Solana and L2s." },
  { title: "Audited & Verified Before Launch", desc: "Third-party audit fixes, Etherscan/Solscan verification and gas optimization — all included." }
];

const consoleLines = [
  { text: "$ onl deploy --chain ethereum --network mainnet", type: "cmd" },
  { text: "✓ Compiling contracts… 0 warnings", type: "ok" },
  { text: "✓ Audit passed — 0 critical, 0 high", type: "ok" },
  { text: "✓ Testnet dry run: Sepolia #5821934", type: "ok" },
  { text: "✓ Deployed token: 0x4f8A…9aB3", type: "ok" },
  { text: "✓ Verified on Etherscan", type: "ok" },
  { text: "✓ Ownership transferred to Safe multisig", type: "ok" },
  { text: "Gas used: 1,245,331 • ≈ $18.40", type: "dim" },
  { text: "🚀 Launch complete — monitoring active", type: "success" }
];

const deliverables = [
  { icon: "📜", title: "Token & Contract Source", desc: "Clean, documented code with full test coverage." },
  { icon: "🔐", title: "Vesting & Lock Contracts", desc: "Cliffs, schedules and liquidity locks on-chain." },
  { icon: "🧾", title: "Deploy Scripts & Report", desc: "Reproducible deploys, tx hashes and gas report." },
  { icon: "✅", title: "Verification & Handover", desc: "Explorer verification, multisig transfer and docs." }
];

export default function BlockchainTokenDeploy() {
  return (
    <section className="bc-token-deploy">
      <div className="new-bc-container">
        <div className="bc-td-content">
          <div className="bc-td-left">
            <span className="bc-td-eyebrow">Launch Services</span>
            <h2 className="bc-section-title">Token Creation &<br/>Contract Deployment</h2>
            <p className="bc-section-desc">
              From token design to a verified mainnet launch — we engineer the contract, run the audit, rehearse on testnets and execute the deployment so your launch day is boring, in the best way.
            </p>
            <ul className="bc-td-features">
              {features.map((f, idx) => (
                <li key={idx}>
                  <span className="check">✓</span>
                  <div><strong>{f.title}:</strong> {f.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bc-td-right">
            <div className="bc-td-console">
              <div className="bc-td-console-bar">
                <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
                <span className="bc-td-console-url">deploy.oneninelabs.com</span>
              </div>
              <div className="bc-td-console-body">
                {consoleLines.map((line, idx) => (
                  <div key={idx} className={`bc-td-line ${line.type}`}>{line.text}</div>
                ))}
              </div>
              <div className="bc-td-console-foot">
                <span className="bc-td-foot-label">Deployed to:</span>
                {["Ethereum", "BNB Chain", "Polygon", "Solana"].map((c) => (
                  <span key={c} className="bc-td-chain-chip">{c}</span>
                ))}
              </div>
            </div>

            <div className="bc-td-deliverables">
              {deliverables.map((d, idx) => (
                <div key={idx} className="bc-td-deliv-card">
                  <span className="bc-td-deliv-icon">{d.icon}</span>
                  <div>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bc-token-deploy {
          padding: 100px 0;
          background: #fff;
        }
        .bc-td-content {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 70px;
          align-items: start;
        }
        .bc-td-eyebrow {
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
        .bc-td-left .bc-section-title {
          margin-bottom: 20px;
        }
        .bc-td-left .bc-section-desc {
          margin-bottom: 28px;
        }
        .bc-td-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .bc-td-features li {
          background: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 14px;
          padding: 16px 18px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 13.5px;
          color: #666;
          line-height: 1.6;
          transition: all 0.25s ease;
        }
        .bc-td-features li:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
          background: #fff;
        }
        .bc-td-features .check {
          color: #fff;
          background: #2563eb;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          font-size: 14px;
          flex-shrink: 0;
        }
        .bc-td-features strong {
          color: #111;
          font-size: 14.5px;
        }

        /* Console mockup */
        .bc-td-console {
          background: #0f172a;
          border-radius: 16px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
          overflow: hidden;
          margin-bottom: 24px;
        }
        .bc-td-console-bar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          background: #1e293b;
        }
        .bc-td-console-bar .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .bc-td-console-bar .dot.red { background: #ef4444; }
        .bc-td-console-bar .dot.yellow { background: #f59e0b; }
        .bc-td-console-bar .dot.green { background: #10b981; }
        .bc-td-console-url {
          margin: 0 auto;
          background: #0f172a;
          color: #64748b;
          font-size: 11px;
          padding: 3px 28px;
          border-radius: 6px;
        }
        .bc-td-console-body {
          padding: 22px 24px;
          font-family: "SF Mono", "Fira Code", Menlo, Consolas, monospace;
          font-size: 12.5px;
          line-height: 2;
        }
        .bc-td-line { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .bc-td-line.cmd { color: #93c5fd; }
        .bc-td-line.ok { color: #d1d5db; }
        .bc-td-line.ok::first-letter { color: #34d399; }
        .bc-td-line.dim { color: #64748b; }
        .bc-td-line.success {
          color: #34d399;
          font-weight: 700;
        }
        .bc-td-console-foot {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 14px 24px;
          background: #1e293b;
        }
        .bc-td-foot-label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 600;
          margin-right: 4px;
        }
        .bc-td-chain-chip {
          font-size: 11px;
          font-weight: 600;
          color: #cbd5e1;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          padding: 4px 12px;
          border-radius: 100px;
        }

        /* Deliverables grid */
        .bc-td-deliverables {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .bc-td-deliv-card {
          background: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 14px;
          padding: 18px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          transition: all 0.25s ease;
        }
        .bc-td-deliv-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
          background: #fff;
        }
        .bc-td-deliv-icon {
          font-size: 22px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .bc-td-deliv-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
        }
        .bc-td-deliv-card p {
          font-size: 12.5px;
          color: #666;
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .bc-td-content { grid-template-columns: 1fr; }
          .bc-td-deliverables { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .bc-td-deliverables { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
