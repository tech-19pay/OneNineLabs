"use client";

import React, { useState } from "react";

export default function WebMockup({ onAction }) {
  const [activeKey, setActiveKey] = useState("python");
  const [hoveredAvatar, setHoveredAvatar] = useState(null);
  const [isWaitlistHovered, setIsWaitlistHovered] = useState(false);

  // Left avatars for Card 2
  const leftAvatars = [
    { id: "a1", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80", role: "Frontend Architect" },
    { id: "a2", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", role: "DevOps Engineer" },
    { id: "a3", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80", role: "Cloud Specialist" },
    { id: "a4", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80", role: "Full-Stack Lead" },
  ];

  // Right avatars for Card 2
  const rightAvatars = [
    { id: "a5", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80", role: "Next.js Specialist" },
    { id: "a6", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80", role: "Backend Architect" },
    { id: "a7", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80", role: "UI/UX Engineer" },
    { id: "a8", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80", role: "Security Auditor" },
  ];

  // Transparent card style removing the card background and borders
  const cardStyle = {
    background: "transparent",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    borderRadius: "0",
    border: "none",
    boxShadow: "none",
    padding: "12px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "visible",
  };

  return (
    <>
      <style>{`
        .web-mockup-top-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .web-mockup-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .web-mockup-top-row {
            grid-template-columns: 1fr !important;
          }
          .web-mockup-bottom-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div
        className="bento-exact-image-wrapper"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "680px",
        margin: "0 auto",
        fontFamily: "'Plus Jakarta Sans', var(--font-sans), sans-serif",
        color: "#0f172a",
        userSelect: "none",
      }}
    >
      {/* ── Main 5-Card Bento Layout ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          width: "100%",
        }}
      >
        {/* ══════════ TOP ROW: 2 Cards (Expert Developers & Web Development) ══════════ */}
        <div className="web-mockup-top-row">

          {/* ── Card 1: Expert Developers ── */}
          <div style={{ ...cardStyle, minHeight: "190px" }}>
            {/* Header Text */}
            <div style={{ textAlign: "center", marginBottom: "14px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 4px 0", letterSpacing: "-0.3px" }}>
                Expert Developers
              </h3>
              <p style={{ fontSize: "11px", color: "#334155", margin: 0, lineHeight: "1.45", maxWidth: "260px", marginLeft: "auto", marginRight: "auto", fontWeight: "500" }}>
                Professionals trained with real tools, frameworks, and production-level workflows.
              </p>
            </div>

            {/* Keycap Keyboard Matrix */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
              {/* Row 1: Python & MySQL */}
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", width: "100%" }}>
                {/* Python Keycap (Black Button) */}
                <div
                  onClick={() => setActiveKey("python")}
                  style={{
                    background: "#0f172a",
                    borderRadius: "12px",
                    padding: "8px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(15, 23, 42, 0.25)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 6.5 4.5 6.5 4.5V7H12V8H4.5S2 7.98 2 13.5C2 19 4.5 19 4.5 19H6.5V16.5C6.5 14 8.5 14 11 14H15.5C18 14 18 12 18 12V4.5S18 2 12 2ZM9 4.5C9.55 4.5 10 4.95 10 5.5C10 6.05 9.55 6.5 9 6.5C8.45 6.5 8 6.05 8 5.5C8 4.95 8.45 4.5 9 4.5Z" fill="#38bdf8"/>
                    <path d="M12 22C17.52 22 17.5 19.5 17.5 19.5V17H12V16H19.5S22 16.02 22 10.5C22 5 19.5 5 19.5 5H17.5V7.5C17.5 10 15.5 10 13 10H8.5C6 10 6 12 6 12V19.5S6 22 12 22ZM15 19.5C14.45 19.5 14 19.05 14 18.5C14 17.95 14.45 17.5 15 17.5C15.55 17.5 16 17.95 16 18.5C16 19.05 15.55 19.5 15 19.5Z" fill="#ffffff"/>
                  </svg>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#ffffff", letterSpacing: "0.2px" }}>
                    python<span style={{ fontSize: "9px", verticalAlign: "top", marginLeft: "1px" }}>™</span>
                  </span>
                </div>

                {/* MySQL Keycap (White Button) */}
                <div
                  onClick={() => setActiveKey("mysql")}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "12px",
                    padding: "8px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    boxShadow: "0 2px 10px rgba(2, 132, 199, 0.12)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>🐬</span>
                  <span style={{ fontSize: "13px", fontWeight: "800", color: "#0284c7", letterSpacing: "0.2px" }}>
                    MySQL
                  </span>
                </div>
              </div>

              {/* Row 2: React, Node.js, Java */}
              <div style={{ display: "flex", gap: "8px", justifyContent: "center", width: "100%" }}>
                {/* React */}
                <div
                  onClick={() => setActiveKey("react")}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(2, 132, 199, 0.08)",
                  }}
                >
                  <span style={{ fontSize: "13px" }}>⚛️</span>
                  <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#0f172a" }}>React</span>
                </div>

                {/* Node.js */}
                <div
                  onClick={() => setActiveKey("node")}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(2, 132, 199, 0.08)",
                  }}
                >
                  <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#0f172a" }}>
                    node<span style={{ color: "#16a34a", fontWeight: "800" }}>.js</span>®
                  </span>
                </div>

                {/* Java */}
                <div
                  onClick={() => setActiveKey("java")}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(2, 132, 199, 0.08)",
                  }}
                >
                  <span style={{ fontSize: "13px" }}>☕</span>
                  <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#0f172a" }}>Java</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 2: Web Development ── */}
          <div style={{ ...cardStyle, minHeight: "190px" }}>
            {/* Header Text */}
            <div style={{ textAlign: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 4px 0", letterSpacing: "-0.3px" }}>
                Web Development
              </h3>
              <p style={{ fontSize: "11px", color: "#334155", margin: 0, lineHeight: "1.45", maxWidth: "260px", marginLeft: "auto", marginRight: "auto", fontWeight: "500" }}>
                Fast, scalable websites built with modern frameworks and clean APIs.
              </p>
            </div>

            {/* Central Node Hub with Branching Curved Lines */}
            <div style={{ position: "relative", width: "100%", height: "110px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Left Avatars Column */}
              <div style={{ position: "absolute", left: "6px", top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 3 }}>
                {leftAvatars.map((av) => (
                  <div
                    key={av.id}
                    onMouseEnter={() => setHoveredAvatar(av.role)}
                    onMouseLeave={() => setHoveredAvatar(null)}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(2, 132, 199, 0.3)",
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                      transform: hoveredAvatar === av.role ? "scale(1.25)" : "scale(1)",
                    }}
                    title={av.role}
                  >
                    <img src={av.img} alt={av.role} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>

              {/* Connecting Curved SVG Lines */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
                <path d="M 24 12 Q 70 18, 115 55" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                <path d="M 24 40 Q 70 44, 115 55" stroke="#0284c7" strokeWidth="1.5" fill="none" />
                <path d="M 24 70 Q 70 66, 115 55" stroke="#0284c7" strokeWidth="1.5" fill="none" />
                <path d="M 24 98 Q 70 92, 115 55" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />

                <path d="M 256 12 Q 210 18, 165 55" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                <path d="M 256 40 Q 210 44, 165 55" stroke="#0284c7" strokeWidth="1.5" fill="none" />
                <path d="M 256 70 Q 210 66, 165 55" stroke="#0284c7" strokeWidth="1.5" fill="none" />
                <path d="M 256 98 Q 210 92, 165 55" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              </svg>

              {/* Center Glowing 3D App Hub Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  boxShadow: "0 10px 24px rgba(2, 132, 199, 0.45), inset 0 1.5px 2px rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path d="M8.5 8.5L4.5 12L8.5 15.5M15.5 8.5L19.5 12L15.5 15.5M13.5 5L10.5 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Right Avatars Column */}
              <div style={{ position: "absolute", right: "6px", top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 3 }}>
                {rightAvatars.map((av) => (
                  <div
                    key={av.id}
                    onMouseEnter={() => setHoveredAvatar(av.role)}
                    onMouseLeave={() => setHoveredAvatar(null)}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(2, 132, 199, 0.3)",
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                      transform: hoveredAvatar === av.role ? "scale(1.25)" : "scale(1)",
                    }}
                    title={av.role}
                  >
                    <img src={av.img} alt={av.role} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ BOTTOM ROW: 3 Cards (Architecture Blueprint, Real-World Expertise, Mobile Apps) ══════════ */}
        <div className="web-mockup-bottom-row">

          {/* ── Card 3: Architecture Blueprint ── */}
          <div style={{ ...cardStyle, minHeight: "200px" }}>
            {/* Header Text */}
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", margin: "0 0 3px 0" }}>
                Architecture Blueprint
              </h3>
              <p style={{ fontSize: "10px", color: "#334155", margin: 0, lineHeight: "1.35", fontWeight: "500" }}>
                Cloud-native systems designed for speed, scale, and resilient delivery.
              </p>
            </div>

            {/* Profile Chat Box */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "14px",
                padding: "8px 10px",
                boxShadow: "0 4px 14px rgba(2, 132, 199, 0.08)",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                    alt="Web architecture diagram"
                    style={{ width: "22px", height: "22px", borderRadius: "50%" }}
                  />
                  <div>
                    <div style={{ fontSize: "10.5px", fontWeight: "800", color: "#0f172a", lineHeight: 1.1 }}>Edge Platform</div>
                    <div style={{ fontSize: "8px", color: "#64748b" }}>Next.js + API-first</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "9px", fontWeight: "800", color: "#0284c7" }}>99.99%</div>
                  <div style={{ fontSize: "7.5px", color: "#64748b" }}>uptime target</div>
                </div>
              </div>

              {/* Deployment status row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
                <span style={{ fontSize: "8px", color: "#64748b" }}>Edge deploy ready</span>
                <span style={{ fontSize: "8.5px", background: "#0284c7", padding: "2px 8px", borderRadius: "999px", color: "#ffffff", fontWeight: "700", boxShadow: "0 2px 6px rgba(2, 132, 199, 0.3)" }}>
                  Live
                </span>
              </div>
            </div>

            {/* Architecture stack pills & deployment lines */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px" }}>
              <span style={{ fontSize: "8.5px", background: "#0284c7", color: "#ffffff", padding: "2px 8px", borderRadius: "999px", fontWeight: "700" }}>
                Next.js
              </span>
              <span style={{ fontSize: "8.5px", background: "#0f172a", color: "#ffffff", padding: "2px 8px", borderRadius: "999px", fontWeight: "700" }}>
                Edge API
              </span>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3px" }}>
                <div style={{ width: "100%", height: "3px", background: "#94a3b8", borderRadius: "2px" }}></div>
                <div style={{ width: "65%", height: "3px", background: "#cbd5e1", borderRadius: "2px" }}></div>
              </div>
            </div>
          </div>

          {/* ── Card 4: Real-World Expertise ── */}
          <div style={{ ...cardStyle, minHeight: "200px" }}>
            {/* Header Text */}
            <div style={{ textAlign: "center", marginBottom: "8px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a", margin: "0 0 3px 0" }}>
                Real-World Expertise
              </h3>
              <p style={{ fontSize: "10px", color: "#334155", margin: 0, lineHeight: "1.35", fontWeight: "500" }}>
                Hands-on practice, real projects, and continuous engineering guidance.
              </p>
            </div>

            {/* Clustered Floating Badges */}
            <div style={{ position: "relative", width: "100%", height: "95px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* GitHub Circular Chip */}
              <div style={{ position: "absolute", top: "2px", left: "34%", width: "28px", height: "28px", borderRadius: "50%", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(15, 23, 42, 0.25)", zIndex: 3 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#ffffff">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>

              {/* Light blue Docker Capsule */}
              <div style={{ position: "absolute", top: "6px", right: "20%", background: "#e0f2fe", borderRadius: "999px", padding: "2px 8px", fontSize: "8.5px", color: "#0284c7", fontWeight: "700" }}>
                # Docker
              </div>

              {/* Red Angular Chip */}
              <div style={{ position: "absolute", top: "6px", right: "6%", width: "24px", height: "24px", borderRadius: "50%", background: "#e11d48", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: "900", fontSize: "11px", boxShadow: "0 4px 10px rgba(225, 29, 72, 0.3)", zIndex: 2 }}>
                ▲
              </div>

              {/* Yellow Testing&QA Pill */}
              <div style={{ position: "absolute", bottom: "10px", left: "2%", background: "#fef3c7", borderRadius: "999px", padding: "2px 8px", fontSize: "8px", color: "#b45309", fontWeight: "700", zIndex: 1 }}>
                # Testing&amp;QA
              </div>

              {/* JS Yellow Chip */}
              <div style={{ position: "absolute", bottom: "22px", left: "12%", width: "24px", height: "24px", borderRadius: "50%", background: "#f7df1e", display: "flex", alignItems: "center", justifyContent: "center", color: "#000000", fontWeight: "900", fontSize: "10px", boxShadow: "0 3px 8px rgba(247, 223, 30, 0.35)", zIndex: 3 }}>
                JS
              </div>

              {/* Prototyping Angled Black Capsule */}
              <div style={{ position: "absolute", bottom: "12px", left: "28%", background: "#0f172a", borderRadius: "999px", padding: "4px 12px", fontSize: "9px", color: "#ffffff", fontWeight: "800", transform: "rotate(25deg)", zIndex: 4, boxShadow: "0 6px 16px rgba(15, 23, 42, 0.3)" }}>
                # Prototyping
              </div>

              {/* Code Capsule */}
              <div style={{ position: "absolute", bottom: "26px", right: "4%", background: "rgba(255, 255, 255, 0.95)", borderRadius: "999px", padding: "2px 8px", fontSize: "8px", color: "#0f172a", fontWeight: "700", boxShadow: "0 2px 6px rgba(2, 132, 199, 0.08)" }}>
                # Code
              </div>

              {/* Wireframing tag */}
              <div style={{ position: "absolute", bottom: "4px", right: "8%", fontSize: "8px", color: "#475569", fontWeight: "600" }}>
                framing
              </div>
            </div>
          </div>

          {/* ── Card 5: Mobile App Development Card ── */}
          <div
            onMouseEnter={() => setIsWaitlistHovered(true)}
            onMouseLeave={() => setIsWaitlistHovered(false)}
            onClick={onAction}
            style={{
              ...cardStyle,
              minHeight: "200px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: isWaitlistHovered ? "translateY(-7px)" : "translateY(-4px)",
            }}
          >
            {/* Top Space */}
            <div style={{ height: "4px" }}></div>

            {/* Pill CTA Button */}
            <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
              <div
                style={{
                  background: "#0f172a",
                  borderRadius: "999px",
                  padding: "6px 6px 6px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 20px rgba(15, 23, 42, 0.25)",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#ffffff", letterSpacing: "0.2px" }}>
                  Mobile Apps
                </span>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0f172a",
                    fontWeight: "900",
                    fontSize: "13px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                  }}
                >
                  ↗
                </div>
              </div>
            </div>

            {/* Mobile app capability data */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "10.5px", color: "#334155", margin: 0, lineHeight: "1.4", fontWeight: "500" }}>
                Native iOS &amp; Android apps with <strong style={{ color: "#0f172a", fontWeight: "800" }}>React Native, Flutter, offline-first sync</strong> and rapid store deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
