"use client";

import React from "react";

export default function AIAgentMockup() {
  const card = {
    background: "transparent",
    border: "none",
    borderRadius: "0",
    boxShadow: "none",
  };

  const inputs = [
    { icon: "🌐", label: "Web" },
    { icon: "📄", label: "Documents" },
    { icon: "☁️", label: "APIs" },
    { icon: "🗄️", label: "Databases" },
    { icon: "👤", label: "User" },
  ];

  const tools = [
    { color: "#611f69", icon: "■", label: "Slack" },
    { color: "#000", icon: "N", label: "Notion" },
    { color: "#4285F4", icon: "G", label: "Google Workspace" },
    { color: "#24292e", icon: "</>", label: "GitHub" },
    { color: "#ff4a00", icon: "✱", label: "Zapier" },
    { color: "#334155", icon: "📊", label: "CRM / ERP" },
    { color: "#475569", icon: "</>", label: "Custom APIs" },
  ];

  const workflow = [
    { icon: "📄", label: "Trigger" },
    { icon: "👁️", label: "Perceive" },
    { icon: "🧠", label: "Reason" },
    { icon: "☰", label: "Plan" },
    { icon: "⚡", label: "Act" },
    { icon: "✔️", label: "Verify" },
    { icon: "📊", label: "Learn" },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", gap: "14px", background: "transparent", color: "#0f172a" }}>

      {/* ── MAIN ROW ── */}
      <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>

        {/* LEFT: INPUTS */}
        <div style={{ ...card, minWidth: "140px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>INPUTS</div>
          {inputs.map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: 18 }}>{icon}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* CENTER: Brain + Arrows */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0px", position: "relative" }}>

          {/* PERCEIVE (top) */}
          <div style={{ textAlign: "center", marginBottom: 10, padding: "10px 20px", background: "rgba(15,23,42,0.06)", borderRadius: 10, border: "1px solid rgba(15,23,42,0.12)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
              <span style={{ fontSize: 18 }}>👁️</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", letterSpacing: 1 }}>PERCEIVE</span>
            </div>
            <div style={{ fontSize: 12, color: "#334155", marginTop: 3, fontWeight: 500 }}>Collects and understands information</div>
          </div>

          {/* Brain SVG + rotating rings */}
          <div style={{ position: "relative", width: 190, height: 190, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {/* Outer glow ring */}
            <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", border: "2px dashed rgba(15,23,42,0.15)", animation: "spin 10s linear infinite" }} />
            {/* Middle ring */}
            <div style={{ position: "absolute", width: 140, height: 140, borderRadius: "50%", border: "1.5px solid rgba(15,23,42,0.12)" }} />
            {/* Inner glow */}
            <div style={{ position: "absolute", width: 105, height: 105, borderRadius: "50%", background: "radial-gradient(circle, rgba(15,23,42,0.07) 0%, transparent 70%)" }} />

            {/* SVG Brain outline */}
            <svg width="95" height="85" viewBox="0 0 100 90" style={{ position: "absolute", opacity: 1 }}>
              <ellipse cx="50" cy="42" rx="38" ry="32" fill="none" stroke="rgba(15,23,42,0.35)" strokeWidth="2.5" />
              <path d="M50,10 C50,10 30,18 28,35 C26,52 35,60 50,62 C65,60 74,52 72,35 C70,18 50,10 50,10Z" fill="rgba(15,23,42,0.05)" stroke="rgba(15,23,42,0.18)" strokeWidth="1.5" />
              <line x1="50" y1="10" x2="50" y2="62" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
              <path d="M28,35 Q38,28 50,32 Q62,28 72,35" fill="none" stroke="rgba(15,23,42,0.18)" strokeWidth="1.2" />
              <path d="M26,45 Q38,38 50,42 Q62,38 74,45" fill="none" stroke="rgba(15,23,42,0.18)" strokeWidth="1.2" />
              {[[35,30],[50,25],[65,30],[30,45],[50,42],[70,45],[38,55],[62,55]].map(([cx,cy],i) => (
                <circle key={i} cx={cx} cy={cy} r="3" fill="#0f172a" opacity="0.55" />
              ))}
              <line x1="35" y1="30" x2="50" y2="25" stroke="rgba(15,23,42,0.22)" strokeWidth="1.2" />
              <line x1="50" y1="25" x2="65" y2="30" stroke="rgba(15,23,42,0.22)" strokeWidth="1.2" />
              <line x1="35" y1="30" x2="30" y2="45" stroke="rgba(15,23,42,0.22)" strokeWidth="1.2" />
              <line x1="65" y1="30" x2="70" y2="45" stroke="rgba(15,23,42,0.22)" strokeWidth="1.2" />
              <line x1="30" y1="45" x2="38" y2="55" stroke="rgba(15,23,42,0.22)" strokeWidth="1.2" />
              <line x1="70" y1="45" x2="62" y2="55" stroke="rgba(15,23,42,0.22)" strokeWidth="1.2" />
            </svg>

            {/* AI Chip Badge */}
            <div style={{ position: "absolute", bottom: 14, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ background: "linear-gradient(135deg, #334155, #0f172a)", borderRadius: 8, padding: "5px 13px", boxShadow: "0 4px 14px rgba(15,23,42,0.18)" }}>
                <span style={{ fontSize: 15, fontWeight: 900, color: "#fff" }}>AI</span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#0f172a", marginTop: 4, letterSpacing: 1 }}>AUTONOMOUS AGENT</span>
            </div>
          </div>

          {/* REASON + ACT (bottom) */}
          <div style={{ display: "flex", gap: 14, marginTop: 10, width: "100%" }}>
            <div style={{ flex: 1, textAlign: "center", padding: "10px 14px", background: "rgba(15,23,42,0.05)", borderRadius: 10, border: "1px solid rgba(15,23,42,0.12)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <span style={{ fontSize: 16 }}>🧠</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", letterSpacing: 0.5 }}>REASON</span>
              </div>
              <div style={{ fontSize: 11, color: "#334155", marginTop: 3, fontWeight: 500 }}>Analyzes and makes decisions</div>
            </div>
            <div style={{ flex: 1, textAlign: "center", padding: "10px 14px", background: "rgba(15,23,42,0.05)", borderRadius: 10, border: "1px solid rgba(15,23,42,0.12)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                <span style={{ fontSize: 16 }}>⚡</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", letterSpacing: 0.5 }}>ACT</span>
              </div>
              <div style={{ fontSize: 11, color: "#334155", marginTop: 3, fontWeight: 500 }}>Executes actions and uses tools</div>
            </div>
          </div>
        </div>

        {/* RIGHT: TOOLS & INTEGRATIONS */}
        <div style={{ ...card, minWidth: "155px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "11px" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>TOOLS & INTEGRATIONS</div>
          {tools.map(({ color, icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: 22, height: 22, borderRadius: 4, background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 800, flexShrink: 0 }}>{icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM ROW: Agent Logs + Workflow + Decisions ── */}
      <div style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>

        {/* Agent Logs */}
        <div style={{ ...card, minWidth: 120, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a", letterSpacing: 1.5, marginBottom: 8 }}>AGENT LOGS</div>
          {["Fetching context...", "RAG query: 0.98s", "Tool: read_file()", "Reasoning step 3...", "Output generated"].map((log, i) => (
            <div key={i} style={{ fontSize: 11, color: i === 4 ? "#10b981" : "#334155", fontFamily: "monospace", marginBottom: 4, fontWeight: i === 4 ? 700 : 500 }}>
              {"› " + log}
            </div>
          ))}
        </div>

        {/* Workflow steps */}
        <div style={{ flex: 1, ...card, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>WORKFLOW</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
            {workflow.map(({ icon, label }, i) => (
              <React.Fragment key={label}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid rgba(15,23,42,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, background: "rgba(15,23,42,0.05)" }}>
                    {icon}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#0f172a" }}>{label}</span>
                </div>
                {i < workflow.length - 1 && (
                  <span style={{ fontSize: 12, color: "#475569", marginBottom: 18, flexShrink: 0 }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Decisions & Insights */}
        <div style={{ ...card, minWidth: 120, padding: "12px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a", letterSpacing: 1.5, marginBottom: 4, textAlign: "center" }}>DECISIONS & INSIGHTS</div>
          <svg viewBox="0 0 100 40" width="95" height="38">
            <polyline points="0,38 15,30 30,22 45,28 60,12 75,18 100,8" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="0,40 0,38 15,30 30,22 45,28 60,12 75,18 100,8 100,40" fill="rgba(15,23,42,0.07)" />
          </svg>
          <div style={{ position: "relative", width: 68, height: 38, marginTop: 4 }}>
            <svg viewBox="0 0 64 36" width="68" height="38">
              <path d="M4,34 A28,28 0 0,1 60,34" fill="none" stroke="rgba(15,23,42,0.12)" strokeWidth="6" strokeLinecap="round" />
              <path d="M4,34 A28,28 0 0,1 60,34" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeDasharray="88 100" />
            </svg>
            <div style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", fontSize: 15, fontWeight: 800, color: "#0f172a" }}>92%</div>
          </div>
          <div style={{ fontSize: 11, color: "#334155", fontWeight: 700 }}>Accuracy</div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
