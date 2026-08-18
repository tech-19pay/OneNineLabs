"use client";

import { useState } from "react";
import Link from "next/link";

export default function VideoTutorials() {
  const [activeTab, setActiveTab] = useState(0);

  // Tab details content
  const tabs = [
    {
      id: 0,
      title: "Create a report",
      desc: "Use our widgets to create a report easily",
      duration: "01:39",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Branding",
      desc: "Apply custom logos, colors, and layout brands",
      duration: "02:15",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" strokeDasharray="3 3" />
          <text x="5" y="14" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">LOGO</text>
        </svg>
      )
    },
    {
      id: 2,
      title: "Automated report scheduling",
      desc: "Schedule automated email reports daily, weekly, or monthly",
      duration: "00:58",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L21 8" />
        </svg>
      )
    }
  ];

  return (
    <section className="vd-tutorials-section" style={{
      background: "#ffffff",
      padding: "90px 24px 80px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Headings */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span style={{
          fontSize: "13px",
          fontWeight: "900",
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          color: "#0f172a",
          display: "block",
          marginBottom: "12px"
        }}>
          VIDEO TUTORIALS
        </span>
        <h2 style={{
          fontSize: "clamp(28px, 4.5vw, 44px)",
          fontWeight: "900",
          color: "#0f172a",
          lineHeight: "1.15",
          letterSpacing: "-1px",
          margin: 0
        }}>
          How to Create a Report with Swydo
        </h2>
      </div>

      {/* Main Grid */}
      <div className="tutorials-grid">
        {/* Left column (Selector list & Actions) */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div className="tutorials-menu-list">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tutorial-menu-item ${activeTab === tab.id ? "active" : ""}`}
              >
                <div className="menu-item-icon-wrapper">
                  {tab.icon}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="menu-item-title">{tab.title}</span>
                  {activeTab === tab.id && (
                    <span className="menu-item-desc">{tab.desc}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Try for free link */}
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="try-free-link">
              Try for free &rarr;
            </Link>
          </div>
        </div>

        {/* Right column (Video Mockup Player) */}
        <div className="video-player-wrapper">
          {/* Main Video Frame Screen */}
          <div className="video-screen-content">
            {activeTab === 0 && (
              <>
                {/* Screen 1: Widget Settings */}
                <div className="video-screen-left">
                  <h3 className="video-screen-headline">Widget Settings</h3>
                </div>
                <div className="video-screen-right">
                  {/* Graph Graphics representation */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "6px", fontWeight: "800", color: "#64748b" }}>Conversion Rate</span>
                      <span style={{ fontSize: "6px", color: "#22c55e", fontWeight: "800" }}>+12.4%</span>
                    </div>
                    {/* Donut chart and bar graph */}
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "4px" }}>
                      <svg width="45" height="45" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="14" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                        <circle cx="20" cy="20" r="14" fill="none" stroke="#4f6df5" strokeWidth="6" strokeDasharray="88" strokeDashoffset="25" />
                        <circle cx="20" cy="20" r="14" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="88" strokeDashoffset="65" />
                      </svg>
                      <div style={{ display: "flex", flexDirection: "column", gap: "3px", flex: 1 }}>
                        <div style={{ height: "4px", background: "#3b82f6", borderRadius: "1px", width: "85%" }}></div>
                        <div style={{ height: "4px", background: "#10b981", borderRadius: "1px", width: "60%" }}></div>
                        <div style={{ height: "4px", background: "#f59e0b", borderRadius: "1px", width: "35%" }}></div>
                      </div>
                    </div>
                    {/* Multi line graph */}
                    <div style={{ height: "35px", position: "relative", marginTop: "4px", borderTop: "1px solid #f1f5f9", paddingTop: "4px" }}>
                      <svg width="100%" height="100%" viewBox="0 0 120 30" preserveAspectRatio="none">
                        <path d="M0 25 Q15 10 30 20 T60 5 T90 22 T120 10 L120 30 L0 30 Z" fill="#e0e7ff" opacity="0.4" />
                        <path d="M0 25 Q15 10 30 20 T60 5 T90 22 T120 10" fill="none" stroke="#4f6df5" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 1 && (
              <>
                {/* Screen 2: Branding & Logo */}
                <div className="video-screen-left" style={{ background: "linear-gradient(135deg, #f59e0b, #eab308)" }}>
                  <h3 className="video-screen-headline">Branding &amp; Logo</h3>
                </div>
                <div className="video-screen-right" style={{ padding: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", height: "100%", justifyContent: "space-between" }}>
                    <div style={{ border: "2px dashed #cbd5e1", borderRadius: "8px", padding: "12px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "100%" }}>
                      <span style={{ fontSize: "16px" }}>📤</span>
                      <span style={{ fontSize: "6px", fontWeight: "700", color: "#64748b" }}>Upload Your Brand Logo</span>
                      <span style={{ fontSize: "4.5px", color: "#94a3b8" }}>Drag and drop PNG or SVG here</span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ fontSize: "6px", fontWeight: "700", color: "#64748b" }}>Brand Palette:</span>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4f6df5" }}></span>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }}></span>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ec4899" }}></span>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#eab308" }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 2 && (
              <>
                {/* Screen 3: Scheduling */}
                <div className="video-screen-left" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}>
                  <h3 className="video-screen-headline">Report Scheduling</h3>
                </div>
                <div className="video-screen-right" style={{ padding: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                    <span style={{ fontSize: "6px", fontWeight: "800", color: "#64748b" }}>Automatic Email Delivery</span>
                    {/* Small Calendar Mockup */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", background: "#f8fafc", padding: "6px", borderRadius: "6px", border: "1px solid #e2e8f0", width: "100%" }}>
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} style={{
                          height: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "4.5px",
                          fontWeight: "700",
                          borderRadius: "2px",
                          background: i === 6 || i === 13 ? "#10b981" : "#ffffff",
                          color: i === 6 || i === 13 ? "#ffffff" : "#64748b",
                          border: "1px solid #e2e8f0"
                        }}>
                          {i === 6 || i === 13 ? "📬" : i + 1}
                        </div>
                      ))}
                    </div>
                    {/* Scheduled tag description */}
                    <div style={{ background: "#e0f2fe", border: "1px solid #bae6fd", borderRadius: "4px", padding: "4px 8px", display: "flex", alignItems: "center", justifyvalue: "space-between", marginTop: "2px" }}>
                      <span style={{ fontSize: "5px", color: "#0369a1", fontWeight: "800" }}>Scheduled Weekly: every Monday at 9:00 AM</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Video Controls overlay on hover/active */}
            <div className="video-overlay-play">
              <span className="play-button-icon">&#9658;</span>
            </div>
          </div>

          {/* Video Controls Bar */}
          <div className="video-controls-bar">
            {/* Play/Pause */}
            <button className="control-btn" style={{ fontSize: "10px" }}>&#9658;</button>
            {/* Timeline slider representation */}
            <div className="timeline-container">
              <span className="timestamp">{tabs[activeTab].duration}</span>
              <div className="timeline-track">
                <div className="timeline-progress" style={{ width: "35%" }}></div>
              </div>
            </div>
            {/* Options icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff" }}>
              <span className="control-icon">🔊</span>
              <span className="control-icon">⚙️</span>
              <span className="control-icon" style={{ fontSize: "9px" }}>1.0x</span>
              <span className="control-icon">📺</span>
              <span className="control-icon">⛶</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom video catalog link */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Link href="/contact" className="video-footer-link">
          View all our video tutorials
        </Link>
      </div>

      <style>{`
        .tutorials-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 48px;
          max-width: 1100px;
          width: 100%;
          align-items: center;
        }
        .tutorials-menu-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .tutorial-menu-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          border-bottom: 1px solid #f1f5f9;
          transition: all 0.25s ease;
        }
        .tutorial-menu-item:hover {
          background: #f8fafc;
        }
        .tutorial-menu-item.active {
          background: #ffffff;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 16px -6px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
          border-bottom: 1px solid #cbd5e1;
        }
        .menu-item-icon-wrapper {
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 3px;
        }
        .tutorial-menu-item.active .menu-item-icon-wrapper {
          color: #4f6df5;
        }
        .menu-item-title {
          font-size: 16px;
          font-weight: 700;
          color: #94a3b8;
          transition: color 0.2s;
        }
        .tutorial-menu-item.active .menu-item-title {
          color: #0f172a;
        }
        .menu-item-desc {
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
          line-height: 1.4;
        }
        .try-free-link {
          font-size: 15px;
          font-weight: 700;
          color: #4f6df5;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s;
        }
        .try-free-link:hover {
          color: #3954e3;
          text-decoration: underline;
        }

        .video-player-wrapper {
          background: #0f172a;
          border-radius: 16px;
          padding: 1px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);
          display: flex;
          flex-direction: column;
        }
        .video-screen-content {
          height: 220px;
          background: #ffffff;
          display: flex;
          position: relative;
          overflow: hidden;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }
        .video-screen-left {
          width: 48%;
          background: linear-gradient(135deg, #4f6df5, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
        }
        .video-screen-left::after {
          content: '';
          position: absolute;
          right: -30px;
          top: 0;
          bottom: 0;
          width: 60px;
          background: #ffffff;
          border-radius: 50% 0 0 50% / 50%;
          transform: scaleX(0.5);
          z-index: 1;
        }
        .video-screen-headline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(18px, 3.5vw, 26px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
          z-index: 2;
          text-align: center;
          letter-spacing: -0.5px;
        }
        .video-screen-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 20px 20px 40px;
          background: #ffffff;
          z-index: 2;
        }
        .video-overlay-play {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
          z-index: 5;
        }
        .video-screen-content:hover .video-overlay-play {
          opacity: 1;
        }
        .play-button-icon {
          width: 44px;
          height: 44px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          font-size: 16px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
        }

        .video-controls-bar {
          background: #0f172a;
          height: 38px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
        }
        .control-btn {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          font-size: 12px;
        }
        .timeline-container {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 16px;
        }
        .timestamp {
          font-size: 8px;
          color: #cbd5e1;
          font-weight: 700;
          font-family: monospace;
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 4px;
          border-radius: 3px;
        }
        .timeline-track {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          position: relative;
          cursor: pointer;
        }
        .timeline-progress {
          height: 100%;
          background: #4f6df5;
          border-radius: 2px;
        }
        .control-icon {
          cursor: pointer;
          font-size: 11px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .control-icon:hover {
          opacity: 1;
        }
        .video-footer-link {
          font-size: 15px;
          font-weight: 700;
          color: #4f6df5;
          text-decoration: none;
          transition: color 0.2s;
        }
        .video-footer-link:hover {
          color: #3954e3;
          text-decoration: underline;
        }

        @media (max-width: 950px) {
          .tutorials-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
