'use client';
import React from 'react';

export default function WebDevStackZigzag() {
  return (
    <section className="stack-zigzag-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        .stack-zigzag-wrapper {
          background-color: #fdf8f0;
          padding: 100px 24px;
          color: #0f172a;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .zigzag-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 140px;
          position: relative;
          z-index: 10;
        }
        .zigzag-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
        }
        @media(min-width: 1024px) {
          .zigzag-row {
            flex-direction: row;
            justify-content: space-between;
          }
          .zigzag-row.reverse {
            flex-direction: row-reverse;
          }
        }
        .zigzag-text-col {
          flex: 1;
          max-width: 480px;
        }
        .zigzag-visual-col {
          flex: 1;
          position: relative;
          width: 100%;
          max-width: 600px;
          display: flex;
          justify-content: center;
        }
        
        .zigzag-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ff5a1f;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }
        .zigzag-title {
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 24px;
          color: #0f172a;
          letter-spacing: -0.02em;
        }
        .zigzag-desc {
          color: #475569;
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 32px;
        }
        
        /* Floating Cards Visual */
        .visual-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(255,90,31,0.08) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }
        .card-base {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 10;
          box-shadow: 0 25px 50px -12px rgba(15,23,42,0.1);
        }
        .card-orange {
          background: #ff5a1f;
          border-radius: 12px;
          padding: 24px;
          position: absolute;
          z-index: 20;
          color: #fff;
          box-shadow: 0 20px 40px rgba(255,90,31,0.3);
        }
        .annotation {
          position: absolute;
          color: #ff5a1f;
          font-size: 12px;
          font-weight: 600;
          max-width: 140px;
          line-height: 1.4;
          z-index: 30;
        }
        .annotation-arrow {
          position: absolute;
          color: #ff5a1f;
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f1f5f9;
        }
        .list-item:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
        .list-icon {
          width: 40px; height: 40px; border-radius: 8px; background: #f8fafc; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 1px solid #e2e8f0;
        }
        .list-text { flex: 1; }
        .list-title { font-weight: 700; color: #0f172a; font-size: 15px; margin-bottom: 4px; }
        .list-sub { font-size: 12px; color: #64748b; }
        
        /* Specific Visual 1 (Frontend) */
        .vis1-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          padding-bottom: 48px;
        }
        .vis1-main {
          width: 100%;
          max-width: 340px;
          box-sizing: border-box;
        }
        .vis1-overlap {
          bottom: -20px;
          right: -40px;
          width: 220px;
          box-sizing: border-box;
        }
        .vis1-annotation { top: -20px; right: -120px; }
        .vis1-score-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .vis1-score-icon {
          background: #fff;
          color: #ff5a1f;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .vis1-score-title { font-weight: 700; font-size: 14px; }
        .vis1-score-desc { font-size: 11px; opacity: 0.9; line-height: 1.5; }

        @media (max-width: 768px) {
          .stack-zigzag-wrapper { padding: 64px 16px; }
          .zigzag-container { gap: 80px; }
          .zigzag-row { gap: 40px; }

          .vis1-row .zigzag-text-col {
            max-width: 100%;
            width: 100%;
            text-align: center;
            padding: 0 4px;
          }
          .vis1-row .zigzag-tag { justify-content: center; }
          .vis1-row .zigzag-pills { justify-content: center; }
          .vis1-row .zigzag-desc { font-size: 15px; margin-bottom: 24px; }
          .vis1-row .zigzag-visual-col {
            width: 100%;
            max-width: 100%;
            padding: 0 8px;
            box-sizing: border-box;
          }
          .vis1-row .visual-blob { display: none; }
          .vis1-annotation { display: none; }

          .vis1-wrapper {
            max-width: 100%;
            padding-bottom: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .vis1-main {
            max-width: 100%;
            padding: 20px;
          }
          .vis1-overlap {
            position: relative;
            bottom: auto;
            right: auto;
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 20px;
          }
          .vis1-row .list-item {
            gap: 12px;
            margin-bottom: 16px;
            padding-bottom: 16px;
          }
        }

        @media (max-width: 400px) {
          .vis1-main { padding: 16px; border-radius: 12px; }
          .vis1-overlap { padding: 16px; border-radius: 12px; }
          .vis1-row .list-title { font-size: 14px; }
          .vis1-row .list-sub { font-size: 11px; }
          .vis1-row .list-icon { width: 36px; height: 36px; font-size: 16px; }
          .vis1-score-title { font-size: 13px; }
          .vis1-score-desc { font-size: 10px; }
        }
        
        /* Specific Visual 2 (Backend) */
        .vis2-nodes { display: flex; flex-direction: column; gap: 16px; position: relative; z-index: 10; }
        .vis2-node { background: #ffffff; border: 1px solid #e2e8f0; padding: 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px; width: 200px; box-shadow: 0 10px 25px -5px rgba(15,23,42,0.05); }
        .vis2-center { background: #ff5a1f; padding: 24px; border-radius: 16px; text-align: center; margin-top: 40px; width: 280px; margin-left: 60px; position: relative; z-index: 20; }
        .vis2-connectors { display: flex; flex-direction: column; justify-content: center; gap: 34px; margin-left: -10px; }
        .vis2-annotation { bottom: -40px; left: 60px; }
        
        @media(max-width: 768px) {
          .vis2-connectors { display: none !important; }
          .vis2-center { margin-left: 0; width: 100%; max-width: 280px; margin: 20px auto 0 auto; }
          .vis2-node { width: 100%; max-width: 280px; margin: 0 auto; }
          .vis2-nodes { align-items: center; width: 100%; }
          .vis2-annotation { display: none; }
        }
        
        /* Specific Visual 3 (Database & Edge) */
        .vis3-row .visual-blob { display: none; }
        .vis3-wrapper {
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-sizing: border-box;
        }
        .vis3-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          width: 100%;
        }
        .vis3-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 32px 16px;
          border-radius: 14px;
          text-align: center;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .vis3-icon {
          font-size: 32px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vis3-label {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          word-break: break-word;
        }
        .vis3-banner {
          background: #ff5a1f;
          border-radius: 14px;
          padding: 28px 20px;
          text-align: center;
          color: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }
        .vis3-banner-main {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .vis3-latency {
          font-size: 34px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .vis3-latency-sub {
          font-size: 13px;
          font-weight: 500;
          opacity: 0.95;
        }

        @media (max-width: 768px) {
          .stack-zigzag-wrapper { padding: 64px 16px; }
          .zigzag-container { gap: 80px; }
          .zigzag-row { gap: 40px; }

          .vis3-row .zigzag-text-col {
            max-width: 100%;
            width: 100%;
            text-align: center;
            padding: 0 4px;
          }
          .vis3-row .zigzag-tag { justify-content: center; }
          .vis3-row .zigzag-pills { justify-content: center; }
          .vis3-row .zigzag-visual-col {
            width: 100%;
            max-width: 100%;
            padding: 0 8px;
            box-sizing: border-box;
          }

          .vis3-wrapper {
            max-width: 100%;
            gap: 12px;
          }
          .vis3-grid { gap: 10px; }
          .vis3-item { padding: 28px 12px; border-radius: 12px; gap: 10px; }
          .vis3-icon { font-size: 28px; }
          .vis3-label { font-size: 13px; }
          .vis3-banner { padding: 24px 16px; border-radius: 12px; }
          .vis3-latency { font-size: 30px; }
          .vis3-latency-sub { font-size: 12px; }
        }

        @media (max-width: 400px) {
          .vis3-grid { gap: 8px; }
          .vis3-item { padding: 22px 10px; gap: 8px; }
          .vis3-icon { font-size: 24px; }
          .vis3-label { font-size: 12px; }
          .vis3-banner { padding: 22px 14px; }
          .vis3-latency { font-size: 28px; }
          .vis3-latency-sub { font-size: 11px; }
        }
      `}} />

      {/* Decorative Background Mesh */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5, zIndex: 0 }}></div>

      <div className="zigzag-container">
        
        {/* ROW 1: FRONTEND */}
        <div className="zigzag-row vis1-row">
          <div className="zigzag-text-col">
            <div className="zigzag-tag">
              <span style={{background:"rgba(255,90,31,0.1)", padding:"6px", borderRadius:"6px", display:"flex"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              Modular UI Engines
            </div>
            <h2 className="zigzag-title">The Frontend Layer</h2>
            <p className="zigzag-desc">
              We engineer custom React, Vue, and Svelte applications that feel instantaneous. By leveraging Vite and Next.js, we deliver sub-second LCP page loads, rich micro-interactions, and a flawless user experience across all devices.
            </p>
            <div className="zigzag-pills" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["React / Next.js", "Vue / Nuxt", "Tailwind CSS", "Framer Motion"].map(pill => (
                <span key={pill} style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "99px", fontSize: "12px", color: "#475569", fontWeight: "600" }}>{pill}</span>
              ))}
            </div>
          </div>
          
          <div className="zigzag-visual-col">
            <div className="visual-blob"></div>
            <div className="vis1-wrapper">
              <div className="annotation vis1-annotation">
                Automatically builds a highly optimized bundle
                <svg className="annotation-arrow" style={{ bottom: "-20px", left: "10px", width:"24px", height:"24px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="5" x2="19" y2="19"></line><polyline points="10 19 19 19 19 10"></polyline></svg>
              </div>

              <div className="card-base vis1-main">
                <div className="list-item">
                  <div className="list-icon">⚡</div>
                  <div className="list-text">
                    <div className="list-title">Sub-second Loads</div>
                    <div className="list-sub">Optimized LCP & FCP</div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-icon">📱</div>
                  <div className="list-text">
                    <div className="list-title">Fully Responsive</div>
                    <div className="list-sub">Perfect on any device</div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-icon">🎨</div>
                  <div className="list-text">
                    <div className="list-title">Design Systems</div>
                    <div className="list-sub">Consistent & Scalable</div>
                  </div>
                </div>
              </div>

              <div className="card-orange vis1-overlap">
                <div className="vis1-score-row">
                  <div className="vis1-score-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="vis1-score-title">Perfect Score</span>
                </div>
                <div className="vis1-score-desc">100/100 Lighthouse Performance automatically baked in.</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: BACKEND (Reversed) */}
        <div className="zigzag-row reverse">
          <div className="zigzag-text-col">
            <div className="zigzag-tag">
              <span style={{background:"rgba(255,90,31,0.1)", padding:"6px", borderRadius:"6px", display:"flex"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              </span>
              High-Concurrency API
            </div>
            <h2 className="zigzag-title">The Backend Layer</h2>
            <p className="zigzag-desc">
              Robust microservices architecture powered by NestJS, Express, and FastAPI. We build GraphQL and REST endpoints designed to handle massive throughput while maintaining strict data integrity and type safety.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Node.js", "NestJS", "Python / FastAPI", "GraphQL"].map(pill => (
                <span key={pill} style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "99px", fontSize: "12px", color: "#475569", fontWeight: "600" }}>{pill}</span>
              ))}
            </div>
          </div>
          
          <div className="zigzag-visual-col">
            <div className="visual-blob"></div>
            <div style={{ position: "relative", padding: "20px" }}>
              
              <div className="annotation vis2-annotation">
                <svg className="annotation-arrow" style={{ top: "-30px", left: "60px", width:"24px", height:"24px", transform: "rotate(-45deg)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="5" x2="19" y2="19"></line><polyline points="10 19 19 19 19 10"></polyline></svg>
                Secure endpoints seamlessly connected to your frontend UI
              </div>

              <div style={{ display: "flex", gap: "24px", position: "relative", zIndex: 10 }}>
                <div className="vis2-nodes">
                  <div className="vis2-node">
                    <div style={{ color: "#ff5a1f", background:"rgba(255,90,31,0.1)", padding:"8px", borderRadius:"8px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>Auth Service</div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>JWT & OAuth2</div>
                    </div>
                  </div>
                  <div className="vis2-node">
                    <div style={{ color: "#ff5a1f", background:"rgba(255,90,31,0.1)", padding:"8px", borderRadius:"8px" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>Data Service</div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>GraphQL API</div>
                    </div>
                  </div>
                </div>
                
                <div className="vis2-connectors">
                   <div style={{ width: "40px", height: "1px", background: "rgba(255,90,31,0.5)", position: "relative" }}>
                     <div style={{ position: "absolute", right: "-4px", top: "-3px", width: "7px", height: "7px", borderRadius: "50%", background: "#ff5a1f" }}></div>
                   </div>
                   <div style={{ width: "40px", height: "1px", background: "rgba(255,90,31,0.5)", position: "relative" }}>
                     <div style={{ position: "absolute", right: "-4px", top: "-3px", width: "7px", height: "7px", borderRadius: "50%", background: "#ff5a1f" }}></div>
                   </div>
                </div>
              </div>
              
              <div className="card-orange vis2-center">
                <div style={{ fontSize: "18px", fontWeight: "800", marginBottom: "6px" }}>API Gateway</div>
                <div style={{ fontSize: "12px", opacity: 0.9 }}>Load Balancing & Rate Limiting</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: DATABASE & EDGE */}
        <div className="zigzag-row vis3-row">
          <div className="zigzag-text-col">
            <div className="zigzag-tag">
              <span style={{background:"rgba(255,90,31,0.1)", padding:"6px", borderRadius:"6px", display:"flex"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </span>
              Global Infrastructure
            </div>
            <h2 className="zigzag-title">Database & Edge CDN</h2>
            <p className="zigzag-desc">
              We pair scalable PostgreSQL databases (via Prisma/Supabase) with ultra-fast Redis edge caching. The entire stack is deployed across global CDN networks like Vercel and Cloudflare to ensure minimal latency anywhere in the world.
            </p>
            <div className="zigzag-pills" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["PostgreSQL", "Redis Cache", "Vercel Edge", "Cloudflare"].map(pill => (
                <span key={pill} style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "99px", fontSize: "12px", color: "#475569", fontWeight: "600" }}>{pill}</span>
              ))}
            </div>
          </div>
          
          <div className="zigzag-visual-col">
            <div className="visual-blob"></div>
            <div className="vis3-wrapper">
              <div className="vis3-grid">
                <div className="vis3-item">
                  <div className="vis3-icon">🐘</div>
                  <div className="vis3-label">PostgreSQL</div>
                </div>
                <div className="vis3-item">
                  <div className="vis3-icon">🔴</div>
                  <div className="vis3-label">Redis</div>
                </div>
                <div className="vis3-item">
                  <div className="vis3-icon">☁️</div>
                  <div className="vis3-label">Edge Network</div>
                </div>
                <div className="vis3-item">
                  <div className="vis3-icon">🛡️</div>
                  <div className="vis3-label">CDN</div>
                </div>
              </div>

              <div className="vis3-banner">
                <div className="vis3-banner-main">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" strokeLinejoin="round"/>
                  </svg>
                  <span className="vis3-latency">50ms</span>
                </div>
                <div className="vis3-latency-sub">Global Latency</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
