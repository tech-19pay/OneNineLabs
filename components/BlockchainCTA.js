"use client";
import React from 'react';
import Link from 'next/link';

export default function BlockchainCTA() {
  return (
    <section className="bc-cta-section" id="get-started">
      <div className="new-bc-container">
        <div className="bc-cta-card">
          <div className="bc-cta-glow"></div>
          <span className="bc-cta-eyebrow">Free Discovery Call</span>
          <h2>Have a Blockchain Idea?<br/>Let&apos;s Scope It in One Call.</h2>
          <p>
            Tell us what you want to build — a token, dApp, exchange, marketplace or full protocol.
            Within 48 hours you&apos;ll get a technical feasibility review, chain recommendation and a fixed, itemized proposal.
          </p>
          <div className="bc-cta-actions">
            <Link href="/contact" className="bc-cta-primary">
              Start Your Project <span>→</span>
            </Link>
            <Link href="/services" className="bc-cta-secondary">
              View All Services
            </Link>
          </div>
          <div className="bc-cta-note">
            <span>NDA on request</span><span>•</span><span>Fixed-price proposals</span><span>•</span><span>Response within 12h</span>
          </div>
        </div>
      </div>

      <style>{`
        .bc-cta-section {
          padding: 40px 0 120px;
          background: #fdfdfd;
        }
        .bc-cta-card {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%);
          border-radius: 28px;
          padding: 80px 40px;
          text-align: center;
          overflow: hidden;
        }
        .bc-cta-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(255, 255, 255, 0) 70%);
          top: -200px;
          right: -100px;
          pointer-events: none;
        }
        .bc-cta-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #bfdbfe;
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .bc-cta-card h2 {
          font-size: 42px;
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 18px;
        }
        .bc-cta-card p {
          max-width: 560px;
          margin: 0 auto 36px;
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.7;
        }
        .bc-cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .bc-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #0f172a;
          font-weight: 700;
          padding: 16px 32px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .bc-cta-primary:hover {
          transform: translateY(-2px);
        }
        .bc-cta-secondary {
          display: inline-flex;
          align-items: center;
          color: #fff;
          font-weight: 600;
          padding: 16px 28px;
          border-radius: 100px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.35);
          transition: all 0.2s;
        }
        .bc-cta-secondary:hover {
          border-color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }
        .bc-cta-note {
          margin-top: 32px;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .bc-cta-card { padding: 60px 24px; }
          .bc-cta-card h2 { font-size: 30px; }
        }
      `}</style>
    </section>
  );
}
