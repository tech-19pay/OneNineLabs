"use client";
import React from 'react';

export default function BlockchainStats() {
  const stats = [
    { k: "80+", l: "Products Shipped", d: "Web, mobile, SaaS & Web3 launches" },
    { k: "10+", l: "Blockchain Networks", d: "EVM, SVM & enterprise chains" },
    { k: "100%", l: "Audited Pre-Launch", d: "Every contract, no exceptions" },
    { k: "12h", l: "Response SLA", d: "Senior engineers on every ticket" },
    { k: "24/7", l: "Post-Launch Support", d: "Monitoring, upgrades & iteration" }
  ];

  return (
    <section className="bc-stats-strip">
      <div className="new-bc-container">
        <div className="bc-stats-row">
          {stats.map((s) => (
            <div key={s.l} className="bc-stat-cell">
              <div className="bc-stat-k">{s.k}</div>
              <div className="bc-stat-l">{s.l}</div>
              <div className="bc-stat-d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bc-stats-strip {
          position: relative;
          padding: 48px 0;
          background: linear-gradient(120deg, #0b1220 0%, #0f172a 55%, #12203d 100%);
          overflow: hidden;
        }
        .bc-stats-strip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(640px 220px at 82% -60px, rgba(37, 99, 235, 0.28), transparent 70%);
          pointer-events: none;
        }
        .bc-stats-strip::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.6), transparent);
        }
        .bc-stats-row {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .bc-stat-cell {
          padding: 6px 28px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }
        .bc-stat-cell:first-child {
          border-left: none;
          padding-left: 0;
        }
        .bc-stat-k {
          font-size: 34px;
          font-weight: 900;
          line-height: 1.1;
          background: linear-gradient(90deg, #60a5fa, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bc-stat-l {
          font-size: 13px;
          font-weight: 700;
          color: #f1f5f9;
          margin-top: 6px;
        }
        .bc-stat-d {
          font-size: 11.5px;
          color: #94a3b8;
          margin-top: 5px;
          line-height: 1.5;
        }
        @media (max-width: 1024px) {
          .bc-stats-row { grid-template-columns: repeat(2, 1fr); gap: 32px 0; }
          .bc-stat-cell { border-left: none; padding: 0 16px; }
        }
        @media (max-width: 560px) {
          .bc-stats-row { grid-template-columns: 1fr; gap: 26px; }
        }
      `}</style>
    </section>
  );
}
