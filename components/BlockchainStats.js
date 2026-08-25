"use client";
import React from 'react';

export default function BlockchainStats() {
  const stats = [
    { k: "80+", l: "Products Shipped", c: "#0f172a" },
    { k: "10+", l: "Blockchain Networks Supported", c: "#2563eb" },
    { k: "100%", l: "Contracts Audited Pre-Launch", c: "#16a34a" },
    { k: "12h", l: "Response SLA", c: "#0284c7" },
    { k: "24/7", l: "Post-Launch Support", c: "#9333ea" }
  ];

  return (
    <section className="bc-stats-strip">
      <div className="new-bc-container">
        <div className="bc-stats-row">
          {stats.map((s) => (
            <div key={s.l} className="bc-stat-cell">
              <div className="bc-stat-k" style={{ color: s.c }}>{s.k}</div>
              <div className="bc-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bc-stats-strip {
          padding: 28px 0;
          background: #fff;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }
        .bc-stats-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .bc-stat-cell {
          text-align: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 12px;
        }
        .bc-stat-k {
          font-size: 22px;
          font-weight: 900;
        }
        .bc-stat-l {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin-top: 4px;
        }
        @media (max-width: 900px) {
          .bc-stats-row { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
