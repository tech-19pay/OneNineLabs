"use client";
import React from 'react';

export default function BlockchainLogoStrip() {
  const logos = [
    { name: "Waverio", color: "#8b5cf6", icon: "❖" },
    { name: "LOGOIPSUM", color: "#ef4444", icon: "⚡" },
    { name: "Alterbone", color: "#10b981", icon: "⬡" },
    { name: "Ridoria", color: "#3b82f6", icon: "◎" },
    { name: "Tinygone", color: "#f43f5e", icon: "✿" },
  ];

  return (
    <div className="bc-logo-strip">
      <div className="new-bc-container">
        <div className="bc-logo-row">
          {logos.map((logo, idx) => (
            <div key={idx} className="bc-logo-item">
              <span className="bc-logo-icon" style={{ color: logo.color }}>{logo.icon}</span>
              <span className="bc-logo-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .bc-logo-strip {
          background: #111;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .bc-logo-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .bc-logo-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .bc-logo-item:hover {
          opacity: 1;
        }
        .bc-logo-icon {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
