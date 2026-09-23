"use client";

import React from "react";

export default function BlockchainDashboardMockup() {
  return (
    <div
      style={{
        background: "transparent",
        borderRadius: "20px",
        padding: "0",
        fontFamily: "Inter, sans-serif",
        color: "#0f172a",
        width: "100%",
        maxWidth: "680px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "16px 24px" }}>
        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "0.5px", margin: 0, color: "#0f172a" }}>Vaults</h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ fontSize: "11px", background: "rgba(59, 130, 246, 0.1)", color: "#2563eb", padding: "4px 10px", borderRadius: "20px", fontWeight: "600", border: "1px solid rgba(59, 130, 246, 0.2)" }}>Mainnet</span>
          </div>
        </div>

        {/* Top Cards Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
          {/* Performance Card */}
          <div style={{ background: "#ffffff", border: "none", borderRadius: "12px", padding: "12px 16px", position: "relative", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "10px", color: "#0f172a" }}>Performance</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "2px" }}>Chains:</div>
                <div style={{ display: "flex", gap: "-6px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(to right, #ec4899, #f43f5e)", border: "2px solid #ffffff", zIndex: 3, marginLeft: 0 }}></div>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(to right, #f59e0b, #eab308)", border: "2px solid #ffffff", zIndex: 2, marginLeft: "-8px" }}></div>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(to right, #10b981, #059669)", border: "2px solid #ffffff", zIndex: 1, marginLeft: "-8px" }}></div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "2px" }}>Vaults:</div>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a" }}>1,308</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "2px" }}>AVG. APY:</div>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a" }}>9.57%</div>
              </div>
            </div>
          </div>
          {/* AUM Card */}
          <div style={{ background: "#ffffff", border: "none", borderRadius: "12px", padding: "12px 16px", position: "relative", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>Assets under Management</div>
            <div style={{ fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>$82,413,926.74</div>
          </div>
        </div>

        {/* Popular Vaults */}
        <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "12px", color: "#0f172a" }}>Popular Vaults</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
          
          {/* Vault 1 */}
          <div style={{ background: "#ffffff", border: "none", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "14px", height: "14px", background: "#0f172a", borderRadius: "50%" }}></div>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>Civa</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "2px" }}>AUM</div>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "8px" }}>Depositors</div>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 100 30" style={{ width: "100%", height: "24px", marginBottom: "10px" }}>
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(239, 68, 68, 0.15)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgba(239, 68, 68, 0)", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <polygon fill="url(#grad1)" points="0,30 0,10 10,12 20,8 30,22 40,20 50,25 60,28 70,26 80,35 90,32 100,30 100,30" />
                <polyline fill="none" stroke="#ef4444" strokeWidth="2" points="0,10 10,12 20,8 30,22 40,20 50,25 60,28 70,26 80,35 90,32 100,30" />
              </svg>
              <div style={{ display: "flex", gap: "4px", fontSize: "11px", fontWeight: "600" }}>
                <span style={{ color: "#059669" }}>$0.39</span>
                <span style={{ color: "#64748b", fontWeight: "500" }}>/ share</span>
                <span style={{ color: "#dc2626" }}>-0.09%</span>
              </div>
            </div>
          </div>

          {/* Vault 2 */}
          <div style={{ background: "#ffffff", border: "none", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #f59e0b", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", fontSize: "10px", fontWeight: "800", background: "rgba(245, 158, 11, 0.1)" }}>ARC</div>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>ARCrypto MV</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "2px" }}>AUM</div>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "8px" }}>Depositors</div>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 100 30" style={{ width: "100%", height: "24px", marginBottom: "10px" }}>
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(16, 185, 129, 0.15)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgba(16, 185, 129, 0)", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <polygon fill="url(#grad2)" points="0,30 0,20 10,22 15,10 20,12 30,25 40,24 50,22 60,20 70,22 75,10 80,12 90,10 100,12 100,30" />
                <polyline fill="none" stroke="#10b981" strokeWidth="2" points="0,20 10,22 15,10 20,12 30,25 40,24 50,22 60,20 70,22 75,10 80,12 90,10 100,12" />
              </svg>
              <div style={{ display: "flex", gap: "4px", fontSize: "11px", fontWeight: "600", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ color: "#059669" }}>$0.94</span>
                  <span style={{ color: "#64748b", fontWeight: "500" }}>/ share</span>
                  <span style={{ color: "#059669" }}>+0.53%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vault 3 */}
          <div style={{ background: "#ffffff", border: "none", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "12px", height: "12px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", transform: "rotate(45deg)", borderRadius: "2px" }}></div>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>Defiable</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "2px" }}>AUM</div>
                <div style={{ fontSize: "10px", color: "#64748b", marginBottom: "8px" }}>Depositors</div>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 100 30" style={{ width: "100%", height: "24px", marginBottom: "10px" }}>
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(16, 185, 129, 0.15)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "rgba(16, 185, 129, 0)", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <polygon fill="url(#grad3)" points="0,30 0,25 10,22 15,24 20,20 22,25 25,12 30,12 40,15 50,14 60,14 70,10 75,5 80,10 90,15 100,12 100,30" />
                <polyline fill="none" stroke="#10b981" strokeWidth="2" points="0,25 10,22 15,24 20,20 22,25 25,12 30,12 40,15 50,14 60,14 70,10 75,5 80,10 90,15 100,12" />
              </svg>
              <div style={{ display: "flex", gap: "4px", fontSize: "11px", fontWeight: "600", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ color: "#059669" }}>$0.25</span>
                  <span style={{ color: "#64748b", fontWeight: "500" }}>/ share</span>
                  <span style={{ color: "#059669" }}>+1.93%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div style={{ display: "flex", gap: "6px", fontSize: "12px" }}>
            <div style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#fff", padding: "6px 14px", borderRadius: "100px", fontWeight: "600", cursor: "pointer", boxShadow: "0 4px 10px rgba(59, 130, 246, 0.2)" }}>All Vaults</div>
            <div style={{ color: "#64748b", padding: "6px 14px", cursor: "pointer", fontWeight: "500" }}>Eligible Vaults</div>
            <div style={{ color: "#64748b", padding: "6px 14px", cursor: "pointer", fontWeight: "500" }}>My Vaults</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ background: "#ffffff", border: "none", padding: "6px 14px", borderRadius: "100px", display: "flex", alignItems: "center", gap: "6px", width: "160px" }}>
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>Search vaults..</span>
              <span style={{ color: "#94a3b8", fontSize: "12px", marginLeft: "auto" }}>&#128269;</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {/* Row 1 */}
          <div style={{ background: "#ffffff", border: "none", borderRadius: "12px", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", width: "220px" }}>
              <div style={{ position: "relative" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #fee2e2" }}>
                  <span style={{ color: "#ef4444", fontSize: "16px", fontWeight: "800" }}>U</span>
                </div>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#3b82f6", border: "2px solid #ffffff", position: "absolute", bottom: "-2px", right: "-2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: "8px" }}>&#9889;</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.2px", color: "#0f172a" }}>UST/FRAX/USDC</div>
                <div style={{ display: "flex", gap: "10px", fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
                  <span>Chain: <span style={{ color: "#334155", fontWeight: "600" }}>Fantom</span></span>
                  <span>App: <span style={{ color: "#334155", fontWeight: "600" }}>Curve</span></span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "20px", fontSize: "12px", textAlign: "right", flex: 1, justifyContent: "flex-end", marginRight: "16px" }}>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Wallet</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>$1.23k</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Deposited</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>$7.51k</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>APY</div>
                <div style={{ fontWeight: "700", color: "#059669" }}>16.03%</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Daily</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>0.04%</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Score</div>
                <div style={{ fontWeight: "700", color: "#059669", display: "flex", alignItems: "center", gap: "2px", justifyContent: "flex-end" }}>
                  10.0
                  <span style={{ fontSize: "8px" }}>&#9611;&#9611;</span>
                </div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>TVL</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>$21.3M</div>
              </div>
            </div>
            
            <div style={{ width: "60px", opacity: 0.8 }}>
              <svg viewBox="0 0 100 30" style={{ width: "100%", height: "16px" }}>
                <polyline fill="none" stroke="#059669" strokeWidth="2.5" points="0,20 20,22 40,15 60,18 80,10 100,8" />
              </svg>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ background: "#ffffff", border: "none", borderRadius: "12px", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", width: "220px" }}>
              <div style={{ position: "relative" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #f59e0b, #d97706)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #fff" }}>
                  <span style={{ color: "#fff", fontSize: "16px", fontWeight: "800" }}>B</span>
                </div>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#fcd34d", border: "2px solid #ffffff", position: "absolute", bottom: "-2px", right: "-2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#000", fontSize: "8px" }}>&#9889;</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.2px", color: "#0f172a" }}>BTCB-ETH LP</div>
                <div style={{ display: "flex", gap: "10px", fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
                  <span>Chain: <span style={{ color: "#334155", fontWeight: "600" }}>BNB</span></span>
                  <span>App: <span style={{ color: "#334155", fontWeight: "600" }}>Biswap</span></span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "20px", fontSize: "12px", textAlign: "right", flex: 1, justifyContent: "flex-end", marginRight: "16px" }}>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Wallet</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>$2.45k</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Deposited</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>$4.33k</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>APY</div>
                <div style={{ fontWeight: "700", color: "#059669" }}>25.92%</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Daily</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>0.07%</div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>Score</div>
                <div style={{ fontWeight: "700", color: "#059669", display: "flex", alignItems: "center", gap: "2px", justifyContent: "flex-end" }}>
                  9.6
                  <span style={{ fontSize: "8px" }}>&#9611;&#9611;</span>
                </div>
              </div>
              <div>
                <div style={{ color: "#64748b", fontSize: "10px", marginBottom: "4px", fontWeight: "500" }}>TVL</div>
                <div style={{ fontWeight: "700", color: "#0f172a" }}>$7.99M</div>
              </div>
            </div>
            
            <div style={{ width: "60px", opacity: 0.8 }}>
              <svg viewBox="0 0 100 30" style={{ width: "100%", height: "16px" }}>
                <polyline fill="none" stroke="#059669" strokeWidth="2.5" points="0,25 20,24 40,15 60,14 80,12 100,5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
