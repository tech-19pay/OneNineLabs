"use client";

import React from "react";

export default function MarketingDashboardMockup() {
  const glass = {
    background: "transparent",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
  };

  const innerCard = {
    background: "transparent",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    border: "none",
    borderRadius: 0,
  };

  return (
    <div style={{ width: "100%", maxWidth: "960px", margin: "0 auto", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", gap: "14px", border: "none", boxShadow: "none", outline: "none", background: "transparent" }}>

      {/* ── ROW 1: Analytical Overview (main panel) ── */}
      <div style={{ ...glass, padding: "22px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>Analytical Overview</div>
        </div>

        {/* Mini KPIs */}
        <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
          {/* Realtime users */}
          <div style={{ ...innerCard, flex: 1, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, color: "#475569", fontWeight: 600 }}>Realtime users</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", margin: "4px 0 2px" }}>635</div>
              <div style={{ fontSize: 11, color: "#10b981", fontWeight: 700 }}>+21.2% &#8599;</div>
            </div>
            <svg viewBox="0 0 100 50" width="90" height="45">
              <polyline points="0,45 20,28 40,38 60,12 80,30 100,8" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Visit duration */}
          <div style={{ ...innerCard, flex: 1, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, color: "#475569", fontWeight: 600 }}>Visit duration</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", margin: "4px 0 2px" }}>5m 8s</div>
              <div style={{ fontSize: 11, color: "#ef4444", fontWeight: 700 }}>-2.9% &#8600;</div>
            </div>
            <svg viewBox="0 0 100 50" width="90" height="45">
              <defs>
                <linearGradient id="mktRedArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(239,68,68,0.25)" />
                  <stop offset="100%" stopColor="rgba(239,68,68,0)" />
                </linearGradient>
              </defs>
              <polygon points="0,50 0,30 20,18 40,42 60,24 80,12 100,28 100,50" fill="url(#mktRedArea)" />
              <polyline points="0,30 20,18 40,42 60,24 80,12 100,28" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Red bar chart */}
        <div style={{ ...innerCard, padding: "16px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Activity</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0f172a" }}>Online users</div>
            </div>
            <div style={{ background: "rgba(2, 132, 199, 0.08)", border: "none", borderRadius: 20, display: "flex", padding: 2 }}>
              {["Quarts","Semester"].map(l => <span key={l} style={{ fontSize: 10, fontWeight: 600, color: "#64748b", padding: "4px 10px" }}>{l}</span>)}
              <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: "#0284c7", padding: "4px 10px", borderRadius: 16 }}>Annual</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 120, paddingBottom: 0 }}>
            {[35,18,55,20,90,25,100,45,75,30,42,60].map((h, i) => (
              <div key={i} style={{ flex: 1, height: h + "%", background: i === 6 ? "linear-gradient(180deg,#f43f5e,#fb7185)" : "rgba(251,113,133,0.45)", borderRadius: "4px 4px 0 0", transition: "height 0.3s" }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 9, color: "#64748b", fontWeight: 600 }}>
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => <span key={m}>{m}</span>)}
          </div>
        </div>
      </div>

      {/* ── ROW 2: Pie Charts + Line Chart ── */}
      <div style={{ display: "flex", gap: 14 }}>

        {/* Pie Charts */}
        <div style={{ ...glass, flex: 1, padding: "20px 22px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#0f172a" }}>Pie Chart</div>
            <div style={{ display: "flex", gap: 12, fontSize: 11, color: "#64748b", fontWeight: 600 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}><input type="checkbox" style={{ accentColor: "#fb7185" }} readOnly /> Chart</label>
              <label style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}><input type="checkbox" defaultChecked style={{ accentColor: "#fb7185" }} readOnly /> Show Value</label>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {[
              { pct: 81, color: "#f43f5e", bg: "rgba(244,63,94,0.12)", label: "Total Order" },
              { pct: 22, color: "#059669", bg: "rgba(5,150,105,0.12)", label: "Customer Growth" },
              { pct: 62, color: "#0ea5e9", bg: "rgba(14,165,233,0.12)", label: "Total Revenue" },
            ].map(({ pct, color, bg, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ position: "relative", width: 84, height: 84 }}>
                  <svg viewBox="0 0 36 36" width="100%" height="100%">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke={bg} strokeWidth="4.5" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke={color} strokeWidth="4.5"
                      strokeDasharray={pct + " 100"} strokeLinecap="round"
                      transform="rotate(-90 18 18)" />
                  </svg>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, color: "#0f172a" }}>{pct}%</div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", marginTop: 10, textAlign: "center" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Line Chart */}
        <div style={{ ...glass, flex: 1, padding: "20px 22px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#0f172a" }}>Chart Order</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>Lorem ipsum dolor sit amet, consectetur</div>
            </div>
            <button style={{ background: "rgba(2, 132, 199, 0.08)", border: "none", color: "#0284c7", padding: "6px 14px", borderRadius: 20, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
              &#8595; Save Report
            </button>
          </div>

          <div style={{ flex: 1, position: "relative", minHeight: 110, paddingBottom: 22 }}>
            <svg viewBox="0 0 400 110" style={{ width: "100%", height: "100%", overflow: "visible" }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="blueWave" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(14,165,233,0.35)" />
                  <stop offset="100%" stopColor="rgba(14,165,233,0)" />
                </linearGradient>
              </defs>
              <path d="M0,95 C50,85 80,50 120,45 C160,40 170,85 210,88 C255,92 280,38 320,55 C355,70 378,45 400,52 L400,110 L0,110 Z" fill="url(#blueWave)" />
              <path d="M0,95 C50,85 80,50 120,45 C160,40 170,85 210,88 C255,92 280,38 320,55 C355,70 378,45 400,52" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
              <circle cx="165" cy="62" r="5" fill="#fff" stroke="#0ea5e9" strokeWidth="3" />
            </svg>

            {/* Tooltip */}
            <div style={{ position: "absolute", top: 2, left: 148, background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", border: "none", padding: "7px 11px", borderRadius: 8, boxShadow: "none", textAlign: "center", pointerEvents: "none" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a" }}>456 Order</div>
              <div style={{ fontSize: 9, color: "#475569", fontWeight: 600, marginTop: 2 }}>Oct 16th, 2020</div>
            </div>

            {/* X labels */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", fontSize: 9, color: "#64748b", fontWeight: 600 }}>
              {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
