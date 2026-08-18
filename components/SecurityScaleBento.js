"use client";

import React from "react";

export default function SecurityScaleBento() {
  return (
    <section className="ssb-section">
      <style>{`
        .ssb-section {
          position: relative;
          padding: 60px 24px;
          background-color: #ffffff;
          overflow: hidden;
        }
        .ssb-grid-row-1 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ssb-grid-row-2 {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 24px;
        }
        .ssb-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 32px 28px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          position: relative;
          overflow: hidden;
        }
        .ssb-card-wide {
          background: #ffffff;
          border-radius: 24px;
          padding: 36px 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }
        .ssb-node-container {
          background: #f8fafc;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }
        .ssb-stack-grid {
          background: #f8fafc;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          margin-bottom: 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        @media (max-width: 1024px) {
          .ssb-grid-row-1 {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }
          .ssb-grid-row-2 {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .ssb-section {
            padding: 44px 16px;
          }
          .ssb-grid-row-1 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ssb-grid-row-2 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ssb-card, .ssb-card-wide {
            padding: 22px 18px;
            border-radius: 20px;
          }
          .ssb-node-container {
            padding: 16px 12px;
            gap: 10px;
            margin-bottom: 18px;
          }
          .ssb-stack-grid {
            padding: 16px 12px;
            gap: 8px;
            margin-bottom: 18px;
          }
        }

        @media (max-width: 440px) {
          .ssb-stack-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
      `}</style>
      
      {/* Subtle Dot Grid Background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)", backgroundSize: "24px 24px", opacity: 0.6, pointerEvents: "none" }}></div>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", pointerEvents: "none" }}></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
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
            Engineered for <span style={{ color: "#10b981" }}>Zero-Exploit Security</span> &amp; Global Scale
          </h2>
          
          <p style={{ 
            color: "#64748b", 
            fontSize: "15.5px", 
            maxWidth: "640px", 
            margin: "12px auto 0", 
            lineHeight: "1.6",
            fontWeight: "400"
          }}>
            SOC 2 Type II certified. Autonomous invariant monitors, non-custodial multi-sig MPC, and multi-region network redundancy.
          </p>
        </div>

        {/* 5-Card Bento Grid Layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Row 1: 3 Columns */}
          <div className="ssb-grid-row-1">
            
            {/* Card 1: Enterprise-Grade Security (Emblem) */}
            <div className="ssb-card">
              {/* Graphic: 3D Metallic Badge */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "24px 0 16px" }}>
                <div style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, #334155 0%, #0f172a 70%, #020617 100%)",
                  boxShadow: "0 20px 40px rgba(15,23,42,0.25), inset 0 0 0 4px #475569, inset 0 0 20px rgba(16,185,129,0.4), 0 0 30px rgba(16,185,129,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  textAlign: "center",
                  border: "2px solid #10b981",
                  position: "relative"
                }}>
                  <div style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1px", color: "#94a3b8" }}>AICPA</div>
                  <div style={{ fontSize: "22px", fontWeight: "900", letterSpacing: "0.5px", color: "#ffffff", margin: "2px 0" }}>SOC2</div>
                  <div style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1px", color: "#10b981" }}>TYPE 2</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                  Enterprise-Grade Security
                </h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  SOC 2 certified. End-to-end cryptographic invariant protection, non-custodial multi-sig, and full on-chain audit logs.
                </p>
              </div>
            </div>

            {/* Card 2: Highlight Organic Card (Green Backdrop with Floating Card) */}
            <div className="ssb-card" style={{ 
              background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)", 
              boxShadow: "0 20px 40px rgba(16,185,129,0.25)", 
              border: "none" 
            }}>
              {/* Floating Shield Card */}
              <div style={{ 
                background: "#ffffff", 
                borderRadius: "16px", 
                padding: "18px", 
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)", 
                marginBottom: "20px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: "900", fontSize: "14px" }}>
                    ⬡
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a" }}>OneNine Protocol</div>
                    <div style={{ fontSize: "10px", color: "#64748b" }}>Smart Contract Security</div>
                  </div>
                </div>

                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "10px", color: "#166534", fontWeight: "700", background: "#dcfce7", padding: "4px 10px", borderRadius: "6px", marginBottom: "12px" }}>
                  <span>✓</span> Your liquidity stays protected, always
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#334155", fontWeight: "700" }}>
                    <span>🔒 Formal Invariants</span>
                    <span style={{ color: "#10b981" }}>Enabled</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#334155", fontWeight: "700" }}>
                    <span>🛡️ Reentrancy Guard</span>
                    <span style={{ color: "#10b981" }}>Guaranteed</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#334155", fontWeight: "700" }}>
                    <span>⚡ Gas Optimization</span>
                    <span style={{ color: "#10b981" }}>Active</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div style={{ color: "#ffffff" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>
                  Autonomous Protocol Defense
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)", lineHeight: "1.6", margin: 0 }}>
                  Automated circuit breakers and Slither invariant monitors actively shield vaults from flash-loan vectors.
                </p>
              </div>
            </div>

            {/* Card 3: Works Everywhere You Do (Glowing Planet / Globe) */}
            <div className="ssb-card">
              {/* Graphic: 3D Mint Globe */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 0 16px" }}>
                <div style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, #dcfce7 0%, #86efac 50%, #22c55e 100%)",
                  boxShadow: "0 20px 40px rgba(34,197,94,0.25), inset -10px -10px 30px rgba(21,128,61,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  border: "2px solid #bbf7d0"
                }}>
                  {/* Floating Stats */}
                  <div style={{ display: "flex", gap: "14px", textAlign: "center" }}>
                    <div>
                      <div style={{ fontSize: "9px", fontWeight: "800", color: "#14532d" }}>Success</div>
                      <div style={{ fontSize: "15px", fontWeight: "900", color: "#052e16" }}>99.9%</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "9px", fontWeight: "800", color: "#14532d" }}>Avg Time</div>
                      <div style={{ fontSize: "15px", fontWeight: "900", color: "#052e16" }}>1.2s</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                  Works Everywhere You Do
                </h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  From Jakarta to San Francisco — OneNineLabs infrastructure runs across 18 regions with multi-chain redundancy.
                </p>
              </div>
            </div>

          </div>

          {/* Row 2: 2 Columns (Wide Layout) */}
          <div className="ssb-grid-row-2">
            
            {/* Card 4: Agents / Workflows That Think, Decide, And Act (Visual Node Diagram) */}
            <div className="ssb-card-wide">
              {/* Graphic: Interactive Node Flow */}
              <div className="ssb-node-container">
                {/* Node 1: Trigger */}
                <div style={{ 
                  background: "#ffffff", 
                  borderRadius: "12px", 
                  padding: "12px 14px", 
                  border: "1px solid #e2e8f0", 
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)", 
                  minWidth: "130px",
                  flexShrink: 0
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: "800", color: "#ef4444", marginBottom: "4px" }}>
                    <span>⚡</span> TRIGGER
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>New Swap Event</div>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <span style={{ fontSize: "9px", background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px", color: "#475569", fontWeight: "700" }}>EVM</span>
                    <span style={{ fontSize: "9px", background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px", color: "#475569", fontWeight: "700" }}>Solana</span>
                  </div>
                </div>

                {/* Branching Line */}
                <div style={{ display: "flex", alignItems: "center", color: "#10b981", fontWeight: "800", fontSize: "16px", flexShrink: 0, padding: "0 2px" }}>
                  <span>⇢</span>
                </div>

                {/* Node 2 & 3 Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, minWidth: "165px", flexShrink: 0 }}>
                  <div style={{ background: "#ffffff", borderRadius: "12px", padding: "10px 12px", border: "1px solid #bbf7d0", boxShadow: "0 4px 12px rgba(16,185,129,0.08)" }}>
                    <div style={{ fontSize: "10px", fontWeight: "800", color: "#10b981", marginBottom: "2px" }}>⬡ ROUTE PROTOCOL</div>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a" }}>Split Across AMM &amp; CLOB</div>
                    <div style={{ fontSize: "9px", color: "#64748b", marginTop: "2px" }}>Routing: &quot;0.01% Slippage → Min Gas&quot;</div>
                  </div>

                  <div style={{ background: "#ffffff", borderRadius: "12px", padding: "10px 12px", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "10px", fontWeight: "800", color: "#f59e0b", marginBottom: "2px" }}>🛡️ SETTLEMENT AGENT</div>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a" }}>Verify &amp; Atomic Settle</div>
                    <div style={{ fontSize: "9px", color: "#64748b", marginTop: "2px" }}>On-Chain State Proof Verified</div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: "19px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                  Protocols That Think, Decide, And Settle
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  Build automated Web3 pipelines on a visual architecture. Define liquidity goals once — OneNine contracts reason through preconditions, branch on market dynamics, and settle atomically.
                </p>
              </div>
            </div>

            {/* Card 5: Your Entire Stack, Wired Together */}
            <div className="ssb-card-wide">
              {/* Graphic: 2x4 Keypad / Tile Matrix */}
              <div className="ssb-stack-grid">
                {[
                  { name: "Alchemy RPC", color: "#3b82f6", sym: "⚡" },
                  { name: "Tenderly", color: "#6366f1", sym: "🔬" },
                  { name: "OpenZeppelin", color: "#10b981", sym: "🛡️" },
                  { name: "IPFS Storage", color: "#0ea5e9", sym: "📦" },
                  { name: "Gnosis Safe", color: "#10b981", sym: "🔐" },
                  { name: "The Graph", color: "#6366f1", sym: "📊" },
                  { name: "Foundry", color: "#ef4444", sym: "⚒" },
                  { name: "Pyth Oracles", color: "#8b5cf6", sym: "🔮" }
                ].map((item) => (
                  <div
                    key={item.name}
                    style={{
                      aspectRatio: "1/1",
                      background: "#ffffff",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 4px",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                      transition: "all 0.2s ease",
                      cursor: "default"
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "900", color: item.color }}>{item.sym}</div>
                    <div style={{ 
                      fontSize: "9px", 
                      fontWeight: "700", 
                      color: "#475569", 
                      marginTop: "4px",
                      lineHeight: "1.2",
                      wordBreak: "break-word"
                    }}>
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: "19px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                  Your Entire Stack, Wired Together
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                  Stop switching between disconnected tools. OneNine pulls live telemetry and liquidity from every network your team uses — zero RPC rate limits to wrangle, no middleware to babysit.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
