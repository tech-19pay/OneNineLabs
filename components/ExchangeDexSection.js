"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ExchangeDexSection() {
  const [activeTab, setActiveTab] = useState("amm");
  const [payAmount, setPayAmount] = useState("5.0");
  const [isExecuting, setIsExecuting] = useState(false);
  const [swapDone, setSwapDone] = useState(false);

  const exchangeFeatures = [
    {
      id: "amm",
      title: "Automated Market Maker (AMM)",
      subtitle: "Uniswap V3/V4 Concentrated Liquidity",
      desc: "Custom invariant curves, multi-fee tier liquidity pools, and dynamic tick spacing for maximum capital efficiency and minimized impermanent loss.",
      tags: ["Concentrated Liquidity", "Dynamic Fees", "Multi-Hop Routing", "Flash Swaps"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 12l3 3 5-5"></path></svg>
      )
    },
    {
      id: "clob",
      title: "Central Limit Orderbook (CLOB)",
      subtitle: "High-Frequency On-Chain Matching",
      desc: "Sub-millisecond order matching engine with hybrid on-chain settlement and off-chain sequencers. Support for Limit, Market, Stop-Loss, and Iceberg orders.",
      tags: ["< 10ms Matching", "Maker/Taker Rebates", "WebSocket Feeds", "REST API & FIX"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      )
    },
    {
      id: "perps",
      title: "Perpetuals & Derivatives DEX",
      subtitle: "Up to 50x Leverage with Zero Price Impact",
      desc: "Synthetic asset trading, cross-margin and isolated margin vaults, automated liquidation keeper bots, and real-time oracle aggregation via Pyth & Chainlink.",
      tags: ["50x Leverage", "Funding Rate Engine", "Liquidation Keepers", "Pyth Oracles"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline></svg>
      )
    },
    {
      id: "cex",
      title: "Centralized Exchange (CEX) Engine",
      subtitle: "Institutional Custody & Matching System",
      desc: "Enterprise matching engine with multi-party computation (MPC) cold wallets, automated KYC/AML hooks, fiat on/off ramps, and admin risk dashboards.",
      tags: ["MPC Custody", "KYC/AML Hook", "Fiat On-Ramp", "Admin Risk Shield"],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      )
    }
  ];

  const handleTabClick = (id) => {
    setActiveTab((prev) => (prev === id ? null : id));
  };

  const handleExecuteSwap = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setSwapDone(true);
      setTimeout(() => setSwapDone(false), 4000);
    }, 1200);
  };

  const currentFeature = exchangeFeatures.find((f) => f.id === activeTab) || exchangeFeatures[0];

  return (
    <section className="dex-section">
      <style>{`
        .dex-section {
          position: relative;
          padding: 60px 24px;
          background-color: #f8fafc;
          overflow: hidden;
          z-index: 1;
        }
        .dex-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: start;
          position: relative;
          z-index: 5;
        }
        .dex-tab-btn {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          text-align: left;
          font-family: inherit;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          padding: 22px 24px;
          border-radius: 18px;
          transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          border: 1.5px solid #e2e8f0;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          display: block;
          outline: none;
          position: relative;
          z-index: 10;
        }
        .dex-tab-btn:hover {
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }
        .dex-tab-btn:active {
          transform: scale(0.985);
        }
        .dex-tab-btn.active {
          background: #ffffff;
          border-color: #10b981;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.15);
        }
        .dex-tab-btn * {
          pointer-events: none;
        }
        .dex-cta-row {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 960px) {
          .dex-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .dex-section {
            padding: 44px 16px;
          }
          .dex-tab-btn {
            padding: 18px 16px;
            border-radius: 16px;
          }
          .dex-cta-row {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .dex-cta-row a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
      
      {/* Background Gradients */}
      <div style={{ position: "absolute", top: "20%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 5 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <h2 style={{ 
            fontSize: "clamp(28px, 3.6vw, 44px)", 
            color: "#0f172a", 
            fontWeight: "900", 
            letterSpacing: "-1.2px", 
            lineHeight: "1.18",
            margin: 0, 
            fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" 
          }}>
            Institutional <span style={{ color: "#10b981" }}>DEX &amp; Liquidity Engine</span> Architecture
          </h2>
          <p style={{
            color: "#64748b",
            fontSize: "15.5px",
            maxWidth: "640px",
            margin: "12px auto 0",
            lineHeight: "1.6",
            fontWeight: "400"
          }}>
            High-frequency CLOB orderbooks, concentrated liquidity AMMs, 50x perpetuals, and MEV-shielded atomic settlement.
          </p>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="dex-grid">
          
          {/* Left Column: Feature Selection Tabs & Details */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
              {exchangeFeatures.map((feat) => {
                const isActive = activeTab === feat.id;
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => handleTabClick(feat.id)}
                    className={`dex-tab-btn ${isActive ? "active" : ""}`}
                    aria-expanded={isActive}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: isActive ? "#f0fdf4" : "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {feat.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", lineHeight: "1.3" }}>{feat.title}</div>
                          <div style={{ fontSize: "12px", color: isActive ? "#10b981" : "#64748b", fontWeight: "600", marginTop: "2px" }}>{feat.subtitle}</div>
                        </div>
                      </div>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: isActive ? "#10b981" : "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", fontWeight: "800", flexShrink: 0, marginLeft: "8px" }}>
                        {isActive ? "✕" : "↓"}
                      </div>
                    </div>

                    {isActive && (
                      <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                        <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: "0 0 14px 0" }}>
                          {feat.desc}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {feat.tags.map((t) => (
                            <span key={t} style={{ fontSize: "11px", fontWeight: "700", padding: "4px 10px", background: "#f0fdf4", color: "#166534", borderRadius: "6px", border: "1px solid #bbf7d0" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="dex-cta-row">
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 30px",
                  background: "#0f172a",
                  color: "#ffffff",
                  borderRadius: "100px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.2)"
                }}
              >
                Launch Your Exchange →
              </Link>
              <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>
                🔒 MEV Protected &amp; Audited
              </span>
            </div>
          </div>

          {/* Right Column: Live Trading Terminal / Swap Engine Mockup */}
          <div style={{ background: "#ffffff", borderRadius: "24px", border: "1px solid #e2e8f0", boxShadow: "0 25px 60px -15px rgba(0,0,0,0.08)", overflow: "hidden", position: "relative", zIndex: 10 }}>
            
            {/* Terminal Header */}
            <div style={{ background: "#0f172a", padding: "18px 24px", color: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }}></span>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }}></span>
                </div>
                <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.5px" }}>{currentFeature.title.toUpperCase()}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(16,185,129,0.2)", padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: "700", color: "#34d399" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399" }}></span>
                Mainnet Live
              </div>
            </div>

            {/* Trading Pair Bar */}
            <div style={{ padding: "16px 24px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#3b82f6" }}>Ξ</div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>ETH / USDC</div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>Ethereum Mainnet</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "16px", fontWeight: "900", color: "#10b981" }}>$3,482.50</div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#10b981" }}>+4.82% (24h)</div>
              </div>
            </div>

            {/* Depth / Orderbook Preview */}
            <div style={{ padding: "16px 24px", background: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "700", color: "#94a3b8", marginBottom: "8px" }}>
                <span>PRICE (USDC)</span>
                <span>SIZE (ETH)</span>
                <span>DEPTH</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#ef4444", fontWeight: "700" }}>
                  <span>3,485.10</span>
                  <span>14.20</span>
                  <div style={{ width: "45px", height: "4px", background: "#fee2e2", borderRadius: "2px", alignSelf: "center" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#ef4444", fontWeight: "700" }}>
                  <span>3,483.90</span>
                  <span>8.50</span>
                  <div style={{ width: "25px", height: "4px", background: "#fee2e2", borderRadius: "2px", alignSelf: "center" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#10b981", fontWeight: "700", paddingTop: "4px", borderTop: "1px dashed #e2e8f0" }}>
                  <span>3,482.50</span>
                  <span>22.10</span>
                  <div style={{ width: "65px", height: "4px", background: "#dcfce7", borderRadius: "2px", alignSelf: "center" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#10b981", fontWeight: "700" }}>
                  <span>3,481.00</span>
                  <span>35.80</span>
                  <div style={{ width: "85px", height: "4px", background: "#dcfce7", borderRadius: "2px", alignSelf: "center" }}></div>
                </div>
              </div>
            </div>

            {/* Instant Swap Card */}
            <div style={{ padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                <span>You Pay</span>
                <span style={{ color: "#64748b" }}>Balance: 12.45 ETH</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc", padding: "12px 16px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "12px" }}>
                <input
                  type="text"
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  style={{ border: "none", background: "transparent", fontSize: "18px", fontWeight: "800", color: "#0f172a", outline: "none", width: "120px" }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#ffffff", padding: "4px 10px", borderRadius: "8px", border: "1px solid #e2e8f0", fontWeight: "800", fontSize: "12px" }}>
                  <span>Ξ</span> ETH
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center", margin: "-6px 0 6px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#ffffff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#64748b", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                  ↓
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                <span>You Receive</span>
                <span style={{ color: "#10b981" }}>Best Rate Route</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f0fdf4", padding: "12px 16px", borderRadius: "12px", border: "1px solid #bbf7d0", marginBottom: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "800", color: "#166534" }}>
                  {(parseFloat(payAmount || "0") * 3482.5).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#ffffff", padding: "4px 10px", borderRadius: "8px", border: "1px solid #bbf7d0", fontWeight: "800", fontSize: "12px", color: "#166534" }}>
                  <span>$</span> USDC
                </div>
              </div>

              {/* Execution Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", color: "#64748b", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Routing:</span>
                  <span style={{ fontWeight: "700", color: "#0f172a" }}>Uniswap V3 → Curve LP (0.01% Slippage)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Gas Fee:</span>
                  <span style={{ fontWeight: "700", color: "#10b981" }}>~$1.24 (Gas Optimized)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleExecuteSwap}
                disabled={isExecuting}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  background: swapDone 
                    ? "#059669" 
                    : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#ffffff",
                  fontWeight: "800",
                  fontSize: "15px",
                  border: "none",
                  cursor: isExecuting ? "not-allowed" : "pointer",
                  touchAction: "manipulation",
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
                  transition: "all 0.2s ease"
                }}
              >
                {isExecuting ? "Broadcasting to Mempool..." : swapDone ? "✓ Swap Executed Successfully!" : "Execute Decentralized Swap"}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
