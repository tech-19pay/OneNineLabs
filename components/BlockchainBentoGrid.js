"use client";

import React from "react";

export default function BlockchainBentoGrid() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
      <style>{`
        .bc-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 24px;
          position: relative;
        }
        .bc-card-span-1 {
          grid-column: span 1;
        }
        .bc-card-span-right {
          grid-column: span 1;
          grid-row: span 2;
        }
        .bc-card-span-2 {
          grid-column: span 2;
          display: flex;
          align-items: center;
          gap: 40px;
        }

        @media (max-width: 1024px) {
          .bc-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bc-card-span-right {
            grid-column: span 2;
            grid-row: auto;
          }
          .bc-card-span-2 {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .bc-bento-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .bc-card-span-1,
          .bc-card-span-right,
          .bc-card-span-2 {
            grid-column: span 1 !important;
            grid-row: auto !important;
          }
          .bc-card-span-2 {
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
          }
          .bc-card-span-2 p {
            max-width: 100% !important;
          }
        }
      `}</style>
      
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
          End-to-End <span style={{ color: "#10b981" }}>Blockchain Engineering</span> Capabilities
        </h2>
        <p style={{
          color: "#64748b",
          fontSize: "15.5px",
          maxWidth: "640px",
          margin: "12px auto 0",
          lineHeight: "1.6",
          fontWeight: "400"
        }}>
          From custom tokenomics and ERC-4337 smart accounts to automated formal invariant verification and high-yield vault strategies.
        </p>
      </div>

      {/* Grid Container */}
      <div className="bc-bento-grid">
        
        {/* Top Left: Token Engineering & Deployment */}
        <div className="bc-card-span-1" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", borderRadius: "24px", padding: "32px", border: "1px solid #bbf7d0", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative", minHeight: "340px" }}>
          
          {/* Graphic */}
          <div style={{ background: "#ffffff", borderRadius: "14px", padding: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9", marginBottom: "auto", position: "relative", zIndex: 2 }}>
            <div style={{ background: "#0f172a", borderRadius: "8px 8px 0 0", padding: "8px 12px", color: "#fff", fontSize: "10px", fontWeight: "700", marginBottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Token Deployment Hub</span>
              <span style={{ fontSize: "9px", color: "#10b981", background: "rgba(16,185,129,0.2)", padding: "2px 6px", borderRadius: "4px" }}>ERC-20 / SPL</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "10px", color: "#475569" }}>
                <span style={{ fontWeight: "700" }}>Token Supply:</span>
                <span style={{ fontWeight: "800", color: "#0f172a" }}>1,000,000,000 $ONE</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "10px", color: "#475569" }}>
                <span style={{ fontWeight: "700" }}>Vesting Schedule:</span>
                <span style={{ color: "#3b82f6", fontWeight: "700" }}>Linear (24 Mo)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "4px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "10px", fontWeight: "800" }}>✓</div>
                <div style={{ background: "#10b981", color: "#fff", padding: "6px 14px", borderRadius: "6px", fontSize: "10px", fontWeight: "700", marginLeft: "auto" }}>Deploy & Verify</div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 2, marginTop: "24px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>Token Deployment & Minting</h3>
            <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: "1.6", margin: 0 }}>Architect custom ERC-20, SPL, and ERC-721/1155 tokens with customized vesting, burning mechanisms, bonding curves, and anti-whale protection.</p>
          </div>
          
          {/* Decor */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "150px", height: "150px", background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)", transform: "translate(30%, -30%)", pointerEvents: "none" }}></div>
        </div>

        {/* Top Middle: Web3 dApps & Account Abstraction (ERC-4337) */}
        <div className="bc-card-span-1" style={{ background: "#f8fafc", borderRadius: "24px", padding: "32px", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative", minHeight: "340px" }}>
          
          {/* Graphic */}
          <div style={{ background: "#ffffff", borderRadius: "14px", padding: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9", marginBottom: "auto", position: "relative", zIndex: 2 }}>
            <div style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", color: "#fff", fontSize: "10px", fontWeight: "700", marginBottom: "12px", display: "flex", justifyContent: "space-between" }}>
              <span>Smart Account (ERC-4337)</span>
              <span style={{ color: "#10b981" }}>Gasless ✓</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
              <div style={{ background: "#f8fafc", padding: "8px 10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "10px", color: "#64748b" }}>Passkey Login</span>
                <span style={{ fontSize: "10px", fontWeight: "700", color: "#0f172a" }}>Biometric Auth</span>
              </div>
              <div style={{ background: "#f0fdf4", padding: "8px 10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #dcfce7" }}>
                <span style={{ fontSize: "10px", color: "#166534" }}>Paymaster Sponsor</span>
                <span style={{ fontSize: "9px", fontWeight: "700", color: "#10b981" }}>0 ETH Gas Paid</span>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "8px", fontSize: "10px", color: "#0f172a", fontWeight: "700", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Session Keys Active</span>
              <span style={{ color: "#3b82f6" }}>Instant Sign</span>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 2, marginTop: "24px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>Web3 Frontends & ERC-4337</h3>
            <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: "1.6", margin: 0 }}>Onboard mainstream users effortlessly with social logins, session keys, gasless transactions, and seamless passkey biometric authentication.</p>
          </div>
        </div>

        {/* Right Tall: Auditing */}
        <div className="bc-card-span-right" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0fdf4 100%)", borderRadius: "24px", padding: "32px", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative", minHeight: "340px" }}>
          
          <div style={{ position: "relative", zIndex: 2, marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>Protocol Auditing</h3>
            <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: "1.6", margin: 0 }}>Save millions by automating rigorous invariant fuzzing tasks from slither analysis to property-based formal verification.</p>
          </div>

          {/* Graphic: Isometric Nodes */}
          <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2, padding: "20px 0" }}>
            <div className="float-anim" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div style={{ background: "#ffffff", padding: "12px 14px", borderRadius: "8px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", transform: "perspective(400px) rotateX(20deg) rotateY(-20deg)", border: "1px solid #e2e8f0", fontSize: "8.5px", fontWeight: "700", color: "#0ea5e9" }}>Slither Analysis</div>
              <div style={{ background: "#ffffff", padding: "12px 14px", borderRadius: "8px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", transform: "perspective(400px) rotateX(20deg) rotateY(20deg)", border: "1px solid #e2e8f0", fontSize: "8.5px", fontWeight: "700", color: "#10b981" }}>Foundry Fuzz</div>
            </div>
            
            <div className="glow-anim" style={{ background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)", padding: "20px", borderRadius: "12px", boxShadow: "0 20px 40px rgba(16,185,129,0.3)", transform: "perspective(400px) rotateX(40deg) rotateZ(-20deg)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "800", fontSize: "14px", width: "120px", height: "70px", marginBottom: "16px" }}>
              Secured
            </div>

            <div className="float-anim" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", animationDelay: "1s" }}>
              <div style={{ background: "#ffffff", padding: "12px 14px", borderRadius: "8px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", transform: "perspective(400px) rotateX(20deg) rotateY(20deg)", border: "1px solid #e2e8f0", fontSize: "8.5px", fontWeight: "700", color: "#8b5cf6" }}>Echidna</div>
              <div style={{ background: "#ffffff", padding: "12px 14px", borderRadius: "8px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", transform: "perspective(400px) rotateX(20deg) rotateY(-20deg)", border: "1px solid #e2e8f0", fontSize: "8.5px", fontWeight: "700", color: "#f59e0b" }}>Formal Verif.</div>
            </div>
          </div>
        </div>

        {/* Bottom Wide: Yield Vaults */}
        <div className="bc-card-span-2" style={{ background: "linear-gradient(90deg, #f8fafc 0%, #ecfdf5 100%)", borderRadius: "24px", padding: "32px", border: "1px solid #f1f5f9", overflow: "hidden", position: "relative" }}>
          
          <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>Smart Yield Vaults</h3>
            <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: "1.6", margin: 0, maxWidth: "260px" }}>Receive instant yield match scores based on liquidity metrics, with clear breakdowns for your protocol's understanding.</p>
          </div>

          {/* Graphic */}
          <div style={{ flex: 1, background: "#ffffff", borderRadius: "12px", padding: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9", position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <div style={{ background: "#f8fafc", padding: "4px 12px", borderRadius: "4px", fontSize: "9px", fontWeight: "700", border: "1px solid #e2e8f0" }}>Vault Routing</div>
              <div style={{ background: "#0f172a", padding: "4px 12px", borderRadius: "4px", fontSize: "9px", fontWeight: "700", color: "#fff" }}>Yield Scoring</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ background: "#eff6ff", color: "#3b82f6", padding: "4px 8px", borderRadius: "4px", fontSize: "9px", fontWeight: "700", flex: 1, display: "flex", justifyContent: "space-between" }}><span>Aave Lending</span><span>✕</span></div>
                <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", flex: 1 }}><div style={{ width: "40%", height: "100%", background: "#3b82f6", borderRadius: "2px" }}></div></div>
                <div style={{ fontSize: "9px", fontWeight: "700", color: "#64748b" }}>40%</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ background: "#f5f3ff", color: "#8b5cf6", padding: "4px 8px", borderRadius: "4px", fontSize: "9px", fontWeight: "700", flex: 1, display: "flex", justifyContent: "space-between" }}><span>Compound</span><span>✕</span></div>
                <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", flex: 1 }}><div style={{ width: "35%", height: "100%", background: "#8b5cf6", borderRadius: "2px" }}></div></div>
                <div style={{ fontSize: "9px", fontWeight: "700", color: "#64748b" }}>35%</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ background: "#ecfdf5", color: "#10b981", padding: "4px 8px", borderRadius: "4px", fontSize: "9px", fontWeight: "700", flex: 1, display: "flex", justifyContent: "space-between" }}><span>Curve LP</span><span>✕</span></div>
                <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", flex: 1 }}><div style={{ width: "96%", height: "100%", background: "#10b981", borderRadius: "2px" }}></div></div>
                <div style={{ fontSize: "9px", fontWeight: "700", color: "#0f172a" }}>96%</div>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f1f5f9", marginTop: "16px", paddingTop: "12px", fontSize: "9px", color: "#64748b" }}>
              <span>Strategy Matrix</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "#f8fafc", padding: "4px 8px", borderRadius: "4px" }}>Add <span style={{ color: "#10b981", fontWeight: "700" }}>+</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
