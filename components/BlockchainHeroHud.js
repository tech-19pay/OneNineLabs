"use client";

import React, { useState, useEffect } from "react";

const CHAINS = [
  {
    id: "ethereum",
    name: "Ethereum",
    shortName: "ETH",
    badge: "EVM",
    icon: "Ξ",
    iconColor: "#6366f1",
    tagColor: "rgba(99, 102, 241, 0.15)",
    tagBorder: "rgba(99, 102, 241, 0.3)",
    tagText: "#818cf8",
    rpc: "eth-mainnet.alchemy.com",
    latency: "14ms",
    gas: "12 Gwei",
    gasStatus: "Optimal",
    metric1Label: "FINALITY",
    metric1Val: "12.0s",
    metric1Sub: "PoS",
    metric2Label: "AUDIT",
    metric2Val: "100%",
    metric2Sub: "Slither",
    fileName: "AtomicVault.sol",
    lang: "Solidity v0.8.28",
    codeLines: [
      { num: 1, text: "// Solidity v0.8.28 — OneNine Enterprise Vault", type: "comment" },
      { num: 2, text: "contract OneNineVault is InvariantShield {", type: "code" },
      { num: 3, text: "  function atomicRouteAndSettle(Proof calldata p)", type: "code", indent: 1 },
      { num: 4, text: "    external nonReentrant returns (bytes32) {", type: "code", indent: 1 },
      { num: 5, text: "      ✓ _verifySlitherInvariants(p);", type: "highlight", indent: 2 },
      { num: 6, text: "      ✓ _settleAcrossRollups(p.targetChain);", type: "highlight", indent: 2 },
      { num: 7, text: "  }", type: "code", indent: 1 },
      { num: 8, text: "}", type: "code" }
    ],
    features: ["ERC-4337", "Reentrancy Guard", "Multi-Sig"]
  },
  {
    id: "solana",
    name: "Solana",
    shortName: "SOL",
    badge: "Anchor",
    icon: "◎",
    iconColor: "#10b981",
    tagColor: "rgba(16, 185, 129, 0.15)",
    tagBorder: "rgba(16, 185, 129, 0.3)",
    tagText: "#34d399",
    rpc: "api.mainnet-beta.solana.com",
    latency: "8ms",
    gas: "< $0.0005",
    gasStatus: "Low",
    metric1Label: "MAX TPS",
    metric1Val: "65,000",
    metric1Sub: "Parallel",
    metric2Label: "BLOCK",
    metric2Val: "400ms",
    metric2Sub: "Sub-Sec",
    fileName: "dex_protocol.rs",
    lang: "Rust Anchor v0.30",
    codeLines: [
      { num: 1, text: "// Anchor Rust — Sub-Millisecond Matching", type: "comment" },
      { num: 2, text: "#[program]", type: "keyword" },
      { num: 3, text: "pub mod onenine_dex {", type: "code" },
      { num: 4, text: "  pub fn execute_swap(ctx: Context<Swap>) -> Result<()> {", type: "code", indent: 1 },
      { num: 5, text: "    ✓ ctx.accounts.vault.verify_invariants()?;", type: "highlight", indent: 2 },
      { num: 6, text: "    ✓ atomic_spl_settle(&ctx.accounts)?;", type: "highlight", indent: 2 },
      { num: 7, text: "    Ok(())", type: "code", indent: 2 },
      { num: 8, text: "  }", type: "code", indent: 1 },
      { num: 9, text: "}", type: "code" }
    ],
    features: ["Sealevel Engine", "Zero-Slippage CLOB", "SPL-2022"]
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    shortName: "ARB",
    badge: "Nitro L2",
    icon: "⬡",
    iconColor: "#3b82f6",
    tagColor: "rgba(59, 130, 246, 0.15)",
    tagBorder: "rgba(59, 130, 246, 0.3)",
    tagText: "#60a5fa",
    rpc: "arb1.arbitrum.io/rpc",
    latency: "11ms",
    gas: "0.08 Gwei",
    gasStatus: "-95% Gas",
    metric1Label: "SETTLE",
    metric1Val: "0.25s",
    metric1Sub: "Instant",
    metric2Label: "SECURITY",
    metric2Val: "Ethereum",
    metric2Sub: "L1 Proof",
    fileName: "RollupExecutor.sol",
    lang: "Solidity / Stylus",
    codeLines: [
      { num: 1, text: "// Arbitrum Nitro — High-Speed L2 Sequencer", type: "comment" },
      { num: 2, text: "contract ArbitrumRouter is INitro {", type: "code" },
      { num: 3, text: "  function batchProcessSwaps(bytes[] calldata o)", type: "code", indent: 1 },
      { num: 4, text: "    external onlySequencer {", type: "code", indent: 1 },
      { num: 5, text: "      ✓ _verifyNitroStateCompression(o);", type: "highlight", indent: 2 },
      { num: 6, text: "      ✓ _postBatchToEthereumL1Calldata(o);", type: "highlight", indent: 2 },
      { num: 7, text: "  }", type: "code", indent: 1 },
      { num: 8, text: "}", type: "code" }
    ],
    features: ["Nitro High-Throughput", "Stylus Rust", "L1 Security"]
  },
  {
    id: "polygon",
    name: "Polygon",
    shortName: "POL",
    badge: "zkEVM",
    icon: "⬢",
    iconColor: "#8b5cf6",
    tagColor: "rgba(139, 92, 246, 0.15)",
    tagBorder: "rgba(139, 92, 246, 0.3)",
    tagText: "#c084fc",
    rpc: "zkevm-rpc.com",
    latency: "15ms",
    gas: "0.05 Gwei",
    gasStatus: "ZK Rollup",
    metric1Label: "ZK PROOF",
    metric1Val: "Plonky2",
    metric1Sub: "SNARK",
    metric2Label: "LIQUIDITY",
    metric2Val: "AggLayer",
    metric2Sub: "Unified",
    fileName: "ZkVerifier.sol",
    lang: "zkEVM Proof Contract",
    codeLines: [
      { num: 1, text: "// Polygon zkEVM — Validity Proof Verification", type: "comment" },
      { num: 2, text: "contract PolygonZkVerifier is IZkVerifier {", type: "code" },
      { num: 3, text: "  function verifyAggregatedProof(bytes32 root)", type: "code", indent: 1 },
      { num: 4, text: "    external view returns (bool) {", type: "code", indent: 1 },
      { num: 5, text: "      ✓ return _verifyPlonky2SNARK(root);", type: "highlight", indent: 2 },
      { num: 6, text: "  }", type: "code", indent: 1 },
      { num: 7, text: "}", type: "code" }
    ],
    features: ["ZK Rollups", "AggLayer Cross-Chain", "EVM Equivalent"]
  }
];

export default function BlockchainHeroHud() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CHAINS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const chain = CHAINS[activeIndex];

  return (
    <div 
      className="bc-hud-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: "#0b101e",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 20px 50px -10px rgba(11, 16, 30, 0.4), 0 0 40px rgba(16, 185, 129, 0.08)",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
        width: "100%",
        maxWidth: "580px",
        margin: "0 auto",
        boxSizing: "border-box",
        display: "block"
      }}
    >
      <style>{`
        .bc-chain-tabs {
          display: flex;
          background: #060913;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
          box-sizing: border-box;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .bc-chain-tab-btn {
          flex: 1 1 25%;
          min-width: 70px;
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 4px;
          padding: 10px 4px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: #94a3b8;
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
          white-space: nowrap;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          box-sizing: border-box;
        }
        .bc-chain-tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.03);
        }
        .bc-chain-tab-btn.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
          border-bottom-color: #10b981;
        }
        .bc-chain-name-full {
          display: inline;
        }
        .bc-chain-name-short {
          display: none;
        }
        .bc-code-container {
          padding: 16px 18px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 11.5px;
          color: #e2e8f0;
          line-height: 1.65;
          min-height: 175px;
          animation: fadeInCode 0.3s ease-in-out;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        @keyframes fadeInCode {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .bc-chain-name-full {
            display: none !important;
          }
          .bc-chain-name-short {
            display: inline !important;
          }
          .bc-chain-tab-btn {
            min-width: 55px;
            padding: 9px 3px;
            font-size: 10.5px;
          }
          .bc-code-container {
            font-size: 10px;
            padding: 12px 14px;
            min-height: 155px;
            line-height: 1.55;
          }
          .bc-telemetry-grid {
            padding: 10px 12px !important;
            gap: 6px !important;
          }
          .bc-telemetry-grid .t-val {
            font-size: 12px !important;
          }
          .bc-telemetry-grid .t-lbl {
            font-size: 8px !important;
          }
        }
      `}</style>

      {/* Interactive Multi-Chain Header Tabs */}
      <div className="bc-chain-tabs">
        {CHAINS.map((c, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`bc-chain-tab-btn ${isActive ? "active" : ""}`}
            >
              <span style={{ color: c.iconColor, fontSize: "12.5px", fontWeight: "900" }}>{c.icon}</span>
              <span className="bc-chain-name-full">{c.name}</span>
              <span className="bc-chain-name-short">{c.shortName}</span>
              <span style={{ 
                fontSize: "7.5px", 
                padding: "1px 4px", 
                borderRadius: "3px", 
                background: isActive ? c.tagColor : "rgba(255,255,255,0.05)", 
                color: isActive ? c.tagText : "#64748b",
                border: isActive ? `1px solid ${c.tagBorder}` : "1px solid transparent"
              }}>
                {c.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Live Node Titlebar */}
      <div style={{ background: "#060913", padding: "8px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "10.5px", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "75%" }}>
          <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ef4444" }}></span>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#f59e0b" }}></span>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981" }}></span>
          </div>
          <span style={{ color: "#64748b", fontFamily: "'JetBrains Mono', monospace", fontWeight: "700", flexShrink: 0 }}>RPC:</span>
          <span style={{ color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", overflow: "hidden", textOverflow: "ellipsis" }}>{chain.rpc}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#34d399", fontWeight: "700", flexShrink: 0 }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 5px #34d399" }}></span>
          <span>{chain.latency}</span>
        </div>
      </div>

      {/* Protocol Telemetry Grid */}
      <div className="bc-telemetry-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", background: "rgba(15,23,42,0.6)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 16px", gap: "8px", boxSizing: "border-box" }}>
        <div>
          <div className="t-lbl" style={{ fontSize: "8.5px", color: "#94a3b8", fontWeight: "700", letterSpacing: "0.3px" }}>GAS</div>
          <div className="t-val" style={{ fontSize: "13px", fontWeight: "900", color: "#ffffff", marginTop: "1px" }}>
            {chain.gas} <span style={{ fontSize: "8.5px", color: "#10b981", fontWeight: "800" }}>{chain.gasStatus}</span>
          </div>
        </div>
        <div>
          <div className="t-lbl" style={{ fontSize: "8.5px", color: "#94a3b8", fontWeight: "700", letterSpacing: "0.3px" }}>{chain.metric1Label}</div>
          <div className="t-val" style={{ fontSize: "13px", fontWeight: "900", color: "#ffffff", marginTop: "1px" }}>
            {chain.metric1Val} <span style={{ fontSize: "8.5px", color: "#3b82f6", fontWeight: "800" }}>{chain.metric1Sub}</span>
          </div>
        </div>
        <div>
          <div className="t-lbl" style={{ fontSize: "8.5px", color: "#94a3b8", fontWeight: "700", letterSpacing: "0.3px" }}>{chain.metric2Label}</div>
          <div className="t-val" style={{ fontSize: "13px", fontWeight: "900", color: "#10b981", marginTop: "1px" }}>
            {chain.metric2Val} <span style={{ fontSize: "8.5px", color: "#cbd5e1", fontWeight: "700" }}>{chain.metric2Sub}</span>
          </div>
        </div>
      </div>

      {/* Live Invariant Verification Code & IDE View */}
      <div key={chain.id} className="bc-code-container">
        {chain.codeLines.map((line, idx) => (
          <div key={idx} style={{ paddingLeft: `${(line.indent || 0) * 12}px`, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {line.type === "comment" && <span style={{ color: "#64748b" }}>{line.text}</span>}
            {line.type === "keyword" && <span style={{ color: "#f43f5e", fontWeight: "700" }}>{line.text}</span>}
            {line.type === "code" && <span>{line.text}</span>}
            {line.type === "highlight" && (
              <span style={{ color: "#10b981", fontWeight: "600", background: "rgba(16,185,129,0.08)", padding: "1px 4px", borderRadius: "3px" }}>
                {line.text}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Footer Capability Badges + Slide Indicator */}
      <div style={{ background: "#060913", padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px", boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {chain.features.map((f) => (
            <span key={f} style={{ fontSize: "8.5px", background: "rgba(255,255,255,0.05)", color: "#cbd5e1", padding: "2px 6px", borderRadius: "4px", fontWeight: "700", border: "1px solid rgba(255,255,255,0.1)" }}>
              {f}
            </span>
          ))}
        </div>
        
        {/* Slide Dots */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "auto" }}>
          {CHAINS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              style={{
                width: idx === activeIndex ? "14px" : "5px",
                height: "5px",
                borderRadius: "3px",
                background: idx === activeIndex ? "#10b981" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.25s ease"
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
