"use client";

import React from "react";

export default function BlockchainDashboardMockup() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "520px", display: "flex", flexDirection: "column", gap: "20px", zIndex: 2 }}>
      
      {/* Floating Logo (Top Rightish) */}
      <div className="float-anim" style={{ position: "absolute", top: "-20px", right: "10%", width: "48px", height: "48px", background: "#0f172a", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(15,23,42,0.2)", zIndex: 5, transform: "rotate(10deg)" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      </div>

      {/* Main Dashboard Window */}
      <div style={{ background: "#ffffff", borderRadius: "24px", padding: "24px", boxShadow: "0 25px 50px -12px rgba(16,185,129,0.15)", border: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
        
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <div style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a", letterSpacing: "0.5px" }}>WEB3 SMART DEPLOYMENT</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#f8fafc", padding: "6px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: "600", color: "#475569" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            Share
          </div>
        </div>

        {/* Center Graphic */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(16,185,129,0.3)" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
        </div>

        {/* Processing Bar */}
        <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px", marginBottom: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: "600", color: "#64748b", marginBottom: "8px" }}>
            <span>Compiling Contract...</span>
            <span style={{ color: "#0f172a" }}>80%</span>
          </div>
          <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "100px", overflow: "hidden" }}>
            <div style={{ width: "80%", height: "100%", background: "#10b981", borderRadius: "100px" }}></div>
          </div>
        </div>

        {/* List items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderBottom: i !== 3 ? "1px solid #f1f5f9" : "none" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#e2e8f0" }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "4px", width: "60%", marginBottom: "6px" }}></div>
                <div style={{ height: "6px", background: "#f1f5f9", borderRadius: "4px", width: "40%" }}></div>
              </div>
              <div style={{ width: "16px", height: "16px", background: "#f1f5f9", borderRadius: "4px" }}></div>
            </div>
          ))}
        </div>

        {/* Background gradient overlay to match the green vibe */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(180deg, rgba(16,185,129,0.05) 0%, transparent 100%)", pointerEvents: "none" }}></div>
      </div>

      {/* Floating Accuracy Card (Bottom Left) */}
      <div className="float-anim" style={{ position: "absolute", bottom: "-30px", left: "-40px", background: "#ffffff", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9", width: "220px", zIndex: 10, animationDelay: "1s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#10b981", fontSize: "10px", fontWeight: "700", marginBottom: "8px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div>
          Security Audit
        </div>
        <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>Audit Score</div>
        <p style={{ fontSize: "11px", color: "#64748b", margin: 0, marginBottom: "16px", lineHeight: "1.4" }}>
          Zero vulnerabilities detected in static analysis.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ fontSize: "10px", fontWeight: "700", color: "#94a3b8" }}>SCORE</span>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a" }}>98%</span>
        </div>
        <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "100px", marginTop: "8px", overflow: "hidden" }}>
          <div style={{ width: "98%", height: "100%", background: "linear-gradient(90deg, #10b981 0%, #34d399 100%)", borderRadius: "100px" }}></div>
        </div>
      </div>
      
    </div>
  );
}
