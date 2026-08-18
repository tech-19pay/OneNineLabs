"use client";

import React from "react";

export default function WelcomeSection({ welcome, theme }) {
  if (!welcome) return null;

  // Title formatting: Split "Built to Scale" or last 3 words to render in italic font
  const fullTitle = welcome.title || "High-Quality Custom Software Built to Scale";
  const titleWords = fullTitle.split(" ");
  const mainTitlePart = titleWords.slice(0, Math.max(1, titleWords.length - 3)).join(" ");
  const italicTitlePart = titleWords.slice(Math.max(1, titleWords.length - 3)).join(" ");

  return (
    <section className="ws-section">
      <div className="ws-container">
        {/* Left Column: Typography */}
        <div className="ws-left">
          <h2 className="ws-title">
            {mainTitlePart} <br />
            <em className="ws-title-italic">{italicTitlePart}</em>
          </h2>

          <p className="ws-desc">{welcome.desc}</p>
        </div>

        {/* Right Column: 2 Geometric Asymmetric Pill Cards Grid */}
        <div className="ws-right">
          <div className="ws-grid">
            {/* Shape 1: Beige Vertical Stadium Pill */}
            <div className="ws-card ws-card-pill-beige">
              <div className="ws-check-circle">✓</div>
              <div className="ws-pill-title">
                {welcome.checks?.[0] || "100% SLA Guarantee"}
              </div>
              <div className="ws-pill-date">
                {welcome.badgeStat?.label || "Years Experience"} • {new Date().getFullYear()}
              </div>
            </div>

            {/* Shape 2: Dark Forest Green Vertical Stadium Pill */}
            <div className="ws-card ws-card-pill-dark">
              <div className="ws-icon-circle">⚡</div>
              <div className="ws-stat-val">{welcome.badgeStat?.num || "10+"}</div>
              <div className="ws-stat-sub">{welcome.checks?.[1] || "24/7 Monitoring & Support"}</div>
              <div className="ws-pill-avatar">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
