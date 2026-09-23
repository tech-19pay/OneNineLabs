"use client";

import React, { useState } from "react";

export default function HowCustomSoftwarePowersSection({ theme }) {
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3000);
  };

  return (
    <section className="ryze-inside-section" id="ryze-inside-section">
      {toastMsg && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "#0f172a",
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "12px",
            fontSize: "13.5px",
            fontWeight: 700,
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <span>✓</span>
          <span>{toastMsg}</span>
        </div>
      )}

      <div style={{ maxWidth: "1240px", margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#0284c7",
            background: "rgba(2, 132, 199, 0.08)",
            border: "1px solid rgba(2, 132, 199, 0.2)",
            padding: "6px 14px",
            borderRadius: "99px",
            marginBottom: "14px",
          }}
        >
          OPERATIONAL EXCELLENCE
        </span>
        <h2 className="ryze-inside-title" style={{ margin: "0 auto 36px" }}>
          How Custom Software Powers Your Operation
        </h2>
      </div>

      <div className="ryze-inside-grid">
        {/* Card 1: Telemetry Analysis */}
        <div className="ryze-card ryze-card-creative-analysis">
          <div className="ryze-card-inner">
            <div className="ca-phone-frame">
              <div className="ca-video-preview" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
                <div className="ca-overlay-badges">
                  <div className="ca-badge ca-badge-top" style={{ border: "1.5px solid #10b981" }}>
                    <span className="ca-badge-label" style={{ color: "#10b981" }}>Latency</span>
                    <span className="ca-badge-value">24ms</span>
                  </div>
                  <div className="ca-badge ca-badge-left" style={{ border: "1.5px solid #0ea5e9" }}>
                    <span className="ca-badge-label" style={{ color: "#0ea5e9" }}>Uptime</span>
                    <span className="ca-badge-value">99.9%</span>
                  </div>
                  <div className="ca-badge ca-badge-right" style={{ border: "1.5px solid #f59e0b" }}>
                    <span className="ca-badge-label" style={{ color: "#f59e0b" }}>CPU</span>
                    <span className="ca-badge-value">34%</span>
                  </div>
                </div>
                <div className="ca-thumbnail-text" style={{ fontFamily: "monospace", fontSize: "12px", color: "#10b981" }}>
                  gateway.api.production
                </div>
              </div>
            </div>
          </div>
          <div className="ryze-card-label">TELEMETRY LOGGING</div>
        </div>

        {/* Card 2: DevOps Pipeline */}
        <div className="ryze-card ryze-card-creative-gen">
          <div className="ryze-card-inner">
            <div className="cg-content" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", padding: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b" }}>pipeline_id: f28a9b1</span>
                  <span style={{ fontSize: "10px", padding: "2px 6px", borderRadius: "10px", background: "rgba(16,185,129,0.1)", color: "#10b981", fontWeight: "700" }}>✓ SUCCESS</span>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }}>
                  <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>Linting ✓</span>
                  <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>SecAudit ✓</span>
                  <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>Build ✓</span>
                  <span style={{ fontSize: "11px", padding: "2px 6px", borderRadius: "4px", background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.12)", color: "#334155", fontWeight: "600" }}>Deploy ✓</span>
                </div>
              </div>
              <div className="cg-bubble" style={{ background: "rgba(15,23,42,0.03)", border: "1px solid rgba(15,23,42,0.08)", borderRadius: "8px", padding: "10px", marginTop: "15px", width: "100%" }}>
                <span className="cg-bubble-text" style={{ fontSize: "12px", fontFamily: "monospace", color: "#1e293b" }}>
                  Deploying container to EKS production cluster...
                </span>
              </div>
              <div className="cg-ai-icons" style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <span className="cg-ai-icon cg-icon-gpt" title="Next.js" style={{ background: "#000", color: "#fff" }}>N</span>
                <span className="cg-ai-icon cg-icon-gemini" title="Docker" style={{ background: "#2496ed", color: "#fff" }}>D</span>
                <span className="cg-ai-icon cg-icon-claude" title="Kubernetes" style={{ background: "#326ce5", color: "#fff" }}>K</span>
              </div>
            </div>
          </div>
          <div className="ryze-card-label">CI/CD AUTOMATION</div>
        </div>

        {/* Card 3: Security Compliance Audit */}
        <div className="ryze-card ryze-card-audit">
          <div className="ryze-card-inner">
            <div className="audit-content">
              <div className="audit-row">
                <div className="audit-metric">
                  <span className="audit-metric-label">SSL Security</span>
                  <span className="audit-metric-value audit-great">100%</span>
                </div>
                <ul className="audit-bullets">
                  <li>TLS 1.3 protocol enforced globally for low latency handshake.</li>
                  <li>Automated certificate renewals validated via Let&apos;s Encrypt.</li>
                </ul>
              </div>
              <div className="audit-row">
                <div className="audit-metric">
                  <span className="audit-metric-label">Access Control</span>
                  <span className="audit-metric-value audit-great">96%</span>
                </div>
                <ul className="audit-bullets">
                  <li>Strict zero-trust authentication policies active on all servers.</li>
                  <li>Multi-factor authentication (MFA) required for admin accounts.</li>
                </ul>
              </div>
              <div className="audit-row">
                <div className="audit-metric">
                  <span className="audit-metric-label">Encryption</span>
                  <span className="audit-metric-value audit-great">100%</span>
                </div>
                <ul className="audit-bullets">
                  <li>Database backup snapshots fully encrypted using AES-256 keys.</li>
                  <li>Secret variables securely managed using AWS Secrets Manager.</li>
                </ul>
              </div>
              <div className="audit-row">
                <div className="audit-metric">
                  <span className="audit-metric-label">Vulnerability</span>
                  <span className="audit-metric-value audit-good">95%</span>
                </div>
                <ul className="audit-bullets">
                  <li>Nightly package vulnerability scanning active in build system.</li>
                  <li>Automatic security patch alerts integrated directly to devops.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ryze-card-label">INFRASTRUCTURE AUDIT</div>
        </div>

        {/* Card 4: DevOps Slack Incident Alerting */}
        <div className="ryze-card ryze-card-slack">
          <div className="ryze-card-inner">
            <div className="slack-content">
              <div className="slack-thread-header">
                <span className="slack-back">←</span>
                <span className="slack-title">DevOps Channel</span>
                <span className="slack-icons">⌂ ☰</span>
              </div>
              <div className="slack-msg">
                <div className="slack-msg-text">
                  <strong>Uptime:</strong> 99.98%<br />
                  <strong>Active Connections:</strong> 18,432 req/min<br />
                  <strong>Database Lag:</strong> 8ms (Normal)<br />
                  <strong>Memory Usage:</strong> 64% (Stable)
                </div>
                <div className="slack-msg-text" style={{ marginTop: '8px' }}>
                  <strong>By Service:</strong><br />
                  • User Auth API: 12ms latency · 0% errors<br />
                  • Stripe Gateway: Webhook handshake verified
                </div>
                <div className="slack-msg-text" style={{ marginTop: '8px' }}>
                  <strong>Resolutions:</strong><br />
                  1. Auto-scaled cluster nodes +3 instances<br />
                  2. Redis cache garbage collection completed<br />
                  3. Cloudflare Web Application Firewall updated
                </div>
              </div>
              <div className="slack-actions">
                <button className="slack-btn slack-btn-primary" onClick={() => showToast("Alert sent to DevOps team!")}>
                  ✉ Alert DevOps Team
                </button>
                <button className="slack-btn slack-btn-secondary" onClick={() => showToast("System logs downloaded successfully!")}>
                  ⬇ Download logs
                </button>
              </div>
            </div>
          </div>
          <div className="ryze-card-label">INCIDENT MONITORING</div>
        </div>

        {/* Card 5: API Rate Gateway Routing */}
        <div className="ryze-card ryze-card-keywords">
          <div className="ryze-card-inner">
            <div className="kw-content">
              <div className="kw-row">
                <span className="kw-name">/api/v1/auth/login</span>
                <span className="kw-clicks">24k</span>
                <span className="kw-cost">22ms</span>
                <span className="kw-badge kw-keyword">ACTIVE</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/users/prof...</span>
                <span className="kw-clicks">89k</span>
                <span className="kw-cost">15ms</span>
                <span className="kw-badge kw-negative" style={{ background: "rgba(14,165,233,0.1)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.2)" }}>CACHED</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/billing/ch...</span>
                <span className="kw-clicks">1k</span>
                <span className="kw-cost">88ms</span>
                <span className="kw-badge kw-keyword">ACTIVE</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/project/sync</span>
                <span className="kw-clicks">14k</span>
                <span className="kw-cost">32ms</span>
                <span className="kw-badge kw-keyword">ACTIVE</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/media/upload</span>
                <span className="kw-clicks">8k</span>
                <span className="kw-cost">120ms</span>
                <span className="kw-badge kw-keyword">ACTIVE</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/notifications</span>
                <span className="kw-clicks">92k</span>
                <span className="kw-cost">8ms</span>
                <span className="kw-badge kw-negative" style={{ background: "rgba(14,165,233,0.1)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.2)" }}>CACHED</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/settings/up...</span>
                <span className="kw-clicks">3k</span>
                <span className="kw-cost">28ms</span>
                <span className="kw-badge kw-keyword">ACTIVE</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/dashboard/s...</span>
                <span className="kw-clicks">29k</span>
                <span className="kw-cost">44ms</span>
                <span className="kw-badge kw-negative" style={{ background: "rgba(14,165,233,0.1)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.2)" }}>CACHED</span>
              </div>
              <div className="kw-row">
                <span className="kw-name">/api/v1/auth/logout</span>
                <span className="kw-clicks">2k</span>
                <span className="kw-cost">11ms</span>
                <span className="kw-badge kw-keyword">ACTIVE</span>
              </div>
              <div className="kw-row">
                <span className="kw-name kw-highlight">/api/v1/data/stream</span>
                <span className="kw-clicks">-</span>
                <span className="kw-cost">Scanning</span>
                <span className="kw-badge kw-scanning">⟳ Syncing</span>
              </div>
            </div>
          </div>
          <div className="ryze-card-label">API RATE LIMITING</div>
        </div>
      </div>
    </section>
  );
}
