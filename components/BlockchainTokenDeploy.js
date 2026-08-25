"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BlockchainTokenDeploy() {
  const [activeFile, setActiveFile] = useState('token');

  const features = [
    {
      title: "All Major Token Standards",
      desc: "Custom ERC-20, ERC-721/1155 NFTs, BEP-20, SPL tokens, and ERC-4626 yield vaults tailored to your tokenomics."
    },
    {
      title: "Programmable Tokenomics",
      desc: "Mint/burn controls, hard supply caps, dynamic fee routing, staking hooks, auto-liquidity, and anti-snipe defense."
    },
    {
      title: "On-Chain Vesting & Timelocks",
      desc: "Automated cliff schedules, linear streaming vesting, and multi-sig liquidity locks verified on-chain."
    },
    {
      title: "Upgradeable Architectures",
      desc: "UUPS and Transparent Proxy patterns with OpenZeppelin security contracts and timelock governance."
    },
    {
      title: "Multi-Chain Simultaneous Launch",
      desc: "One audited codebase deployed and synchronized across Ethereum, Arbitrum, Base, Polygon, BNB Chain, and Solana."
    }
  ];

  const files = {
    token: {
      name: "AuraToken.sol",
      code: [
        { num: "01", text: "// SPDX-License-Identifier: MIT", type: "comment" },
        { num: "02", text: "pragma solidity ^0.8.24;", type: "keyword" },
        { num: "03", text: "import \"@openzeppelin/contracts/ERC20.sol\";", type: "import" },
        { num: "04", text: "import \"@openzeppelin/contracts/Ownable.sol\";", type: "import" },
        { num: "05", text: "", type: "empty" },
        { num: "06", text: "contract AuraToken is ERC20, Ownable {", type: "def" },
        { num: "07", text: "    uint256 public constant TOTAL_SUPPLY = 100_000_000e18;", type: "var" },
        { num: "08", text: "    constructor(address safeMultisig)", type: "def" },
        { num: "09", text: "        ERC20(\"Aura Protocol\", \"AURA\") Ownable(safeMultisig) {", type: "var" },
        { num: "10", text: "        _mint(safeMultisig, TOTAL_SUPPLY);", type: "func" },
        { num: "11", text: "    }", type: "def" },
        { num: "12", text: "}", type: "def" }
      ]
    },
    vesting: {
      name: "Vesting.sol",
      code: [
        { num: "01", text: "// SPDX-License-Identifier: MIT", type: "comment" },
        { num: "02", text: "pragma solidity ^0.8.24;", type: "keyword" },
        { num: "03", text: "import \"@openzeppelin/finance/VestingWallet.sol\";", type: "import" },
        { num: "04", text: "", type: "empty" },
        { num: "05", text: "contract TeamVesting is VestingWallet {", type: "def" },
        { num: "06", text: "    constructor(address beneficiary, uint64 start)", type: "def" },
        { num: "07", text: "        VestingWallet(beneficiary, start, 1095 days) {}", type: "var" },
        { num: "08", text: "}", type: "def" }
      ]
    }
  };

  const logs = [
    { type: "ok", text: "✓ Compiling solc v0.8.24: 0 warnings" },
    { type: "ok", text: "✓ Slither Static Analysis: 0 vulnerabilities" },
    { type: "ok", text: "✓ Deployed on Mainnet: 0x8a92F...b38dC" },
    { type: "ok", text: "✓ Verified on Etherscan • Gas: 12.4 Gwei" },
    { type: "highlight", text: "● Ownership safely transferred to Safe 3/5 Multi-Sig" }
  ];

  const deliverables = [
    { icon: "📜", label: "Audited Source Code" },
    { icon: "🔐", label: "On-Chain Vesting Vaults" },
    { icon: "🧾", label: "Hardhat Deploy Scripts" },
    { icon: "✓", label: "Etherscan Verification" }
  ];

  return (
    <section className="bc-token-deploy" id="token-deployment">
      <div className="new-bc-container">
        <div className="bc-td-content">
          
          {/* Left Column: Heading & Capabilities */}
          <div className="bc-td-left">
            <h2 className="bc-section-title">Token Creation & Smart Contract Deployment</h2>
            <p className="bc-section-desc">
              From mathematical tokenomics design to verified mainnet deployment — we engineer custom smart contracts, execute thorough audits, rehearse on testnets, and launch safely on-chain.
            </p>
            
            <div className="bc-td-features-list">
              {features.map((f, idx) => (
                <div key={idx} className="bc-td-feature-item">
                  <div className="bc-td-check">✓</div>
                  <div className="bc-td-feat-body">
                    <strong className="bc-td-feat-title">{f.title}</strong>
                    <span className="bc-td-feat-desc">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Web3 Smart Contract IDE & Telemetry Console */}
          <div className="bc-td-right">
            <div className="ide-wrapper">
              <div className="ide-glow"></div>
              
              <div className="ide-window-card">
                
                {/* 1. Window Header & Tabs */}
                <div className="ide-top-bar">
                  <div className="ide-bar-left">
                    <div className="ide-window-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    
                    <div className="ide-file-tabs">
                      <button 
                        className={`ide-tab ${activeFile === 'token' ? 'active' : ''}`}
                        onClick={() => setActiveFile('token')}
                      >
                        <span className="tab-sol-ic">❖</span>
                        <span>AuraToken.sol</span>
                      </button>
                      <button 
                        className={`ide-tab ${activeFile === 'vesting' ? 'active' : ''}`}
                        onClick={() => setActiveFile('vesting')}
                      >
                        <span className="tab-sol-ic">❖</span>
                        <span>Vesting.sol</span>
                      </button>
                    </div>
                  </div>

                  <div className="ide-net-badge">
                    <span className="net-dot"></span>
                    <span>Ethereum</span>
                  </div>
                </div>

                {/* 2. Code Editor View */}
                <div className="ide-code-editor">
                  {files[activeFile].code.map((line, idx) => (
                    <div key={idx} className={`code-line ${line.type}`}>
                      <span className="line-num">{line.num}</span>
                      <span className="line-text">{line.text}</span>
                    </div>
                  ))}
                </div>

                {/* 3. Deployment Terminal Console */}
                <div className="ide-deploy-console">
                  <div className="console-head">
                    <span className="console-title">❯ Terminal: Hardhat Mainnet Deploy</span>
                    <span className="console-status">Compiled & Verified</span>
                  </div>
                  <div className="console-logs">
                    {logs.map((l, idx) => (
                      <div key={idx} className={`log-row ${l.type}`}>
                        <span>{l.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Explorer Verified Footer Strip */}
                <div className="ide-footer-strip">
                  <div className="ifs-left">
                    <span className="ifs-badge">Etherscan Verified</span>
                    <span className="ifs-hash">0x8a92F17c49...b38dC</span>
                  </div>
                  <span className="ifs-link">View Contract ↗</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        .bc-token-deploy {
          padding: 30px 0 80px;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif;
        }
        .bc-td-content {
          display: grid;
          grid-template-columns: 1fr 1.18fr;
          gap: 44px;
          align-items: start;
        }

        /* Left Column */
        .bc-td-left {
          display: flex;
          flex-direction: column;
        }
        .bc-section-title {
          font-size: 38px;
          font-weight: 800;
          color: #091326;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 16px 0;
        }
        .bc-section-desc {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 24px 0;
        }

        .bc-td-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .bc-td-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid #eef0f3;
          border-radius: 14px;
          padding: 12px 16px;
          transition: all 0.2s ease;
        }
        .bc-td-feature-item:hover {
          background: #f1f5f9;
          border-color: #dbeafe;
          transform: translateX(3px);
        }
        .bc-td-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #eff6ff;
          color: #1e3a8a;
          border: 1px solid #dbeafe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10.5px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .bc-td-feat-body {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .bc-td-feat-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #091326;
        }
        .bc-td-feat-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
        }

        /* Right Column: IDE Window Card */
        .bc-td-right {
          display: flex;
          justify-content: center;
          width: 100%;
          min-width: 0;
        }
        .ide-wrapper {
          position: relative;
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 0;
        }
        .ide-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 75%);
          filter: blur(25px);
          border-radius: 40px;
          pointer-events: none;
        }

        /* White Theme Smart Contract IDE */
        .ide-window-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 45px -10px rgba(15, 23, 42, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
        }

        /* 1. Window Header & Tabs */
        .ide-top-bar {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }
        .ide-bar-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .ide-window-dots {
          display: flex;
          gap: 5px;
          flex-shrink: 0;
        }
        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .dot.red { background: #f87171; }
        .dot.yellow { background: #fbbf24; }
        .dot.green { background: #34d399; }

        .ide-file-tabs {
          display: flex;
          gap: 4px;
        }
        .ide-tab {
          background: transparent;
          border: 1px solid transparent;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s;
        }
        .ide-tab.active {
          background: #ffffff;
          border-color: #cbd5e1;
          color: #091326;
          font-weight: 700;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .tab-sol-ic {
          color: #2563eb;
          font-size: 10px;
        }

        .ide-net-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 700;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 2px 7px;
          border-radius: 100px;
          flex-shrink: 0;
        }
        .net-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
        }

        /* 2. Code Editor */
        .ide-code-editor {
          background: #ffffff;
          padding: 12px 14px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #f1f5f9;
          overflow-x: hidden;
        }
        .code-line {
          display: flex;
          align-items: baseline;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .line-num {
          width: 24px;
          color: #94a3b8;
          font-size: 10px;
          user-select: none;
          flex-shrink: 0;
        }
        .line-text {
          color: #091326;
          flex: 1;
        }
        .code-line.comment .line-text { color: #94a3b8; font-style: italic; }
        .code-line.keyword .line-text { color: #d97706; font-weight: 600; }
        .code-line.import .line-text { color: #0284c7; }
        .code-line.def .line-text { color: #1e3a8a; font-weight: 700; }
        .code-line.var .line-text { color: #475569; }
        .code-line.func .line-text { color: #2563eb; font-weight: 600; }

        /* 3. Deployment Console */
        .ide-deploy-console {
          background: #f8fafc;
          padding: 10px 14px;
          border-bottom: 1px solid #e2e8f0;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        .console-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .console-title {
          font-size: 10.5px;
          font-weight: 700;
          color: #091326;
        }
        .console-status {
          font-size: 9.5px;
          font-weight: 700;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 1px 5px;
          border-radius: 4px;
        }
        .console-logs {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 10.5px;
        }
        .log-row.ok { color: #1e3a8a; }
        .log-row.highlight { color: #091326; font-weight: 700; background: #eef2f6; padding: 2px 5px; border-radius: 4px; }

        /* 4. Footer Strip */
        .ide-footer-strip {
          background: #ffffff;
          padding: 8px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }
        .ifs-left {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .ifs-badge {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 1px 6px;
          border-radius: 4px;
          flex-shrink: 0;
        }
        .ifs-hash {
          font-size: 10.5px;
          color: #64748b;
          font-family: ui-monospace, monospace;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ifs-link {
          font-size: 11px;
          font-weight: 700;
          color: #2563eb;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Deliverables Strip */
        .ide-deliv-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
        }
        .ide-deliv-pill {
          background: #f8fafc;
          border: 1px solid #eef0f3;
          border-radius: 8px;
          padding: 7px 10px;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 600;
          color: #091326;
        }
        .ide-deliv-ic {
          font-size: 13px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .bc-td-content {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 640px) {
          .bc-token-deploy {
            padding: 24px 0 60px;
          }
          .bc-section-title {
            font-size: 28px;
          }
          .ide-deliv-strip {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
