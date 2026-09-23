import os

filepath = r'd:\Office Projects\restore_div\components\WebDevMoreSections.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

target = '<section style={{ background: "#faf3e6", padding: "10px 24px 96px", textAlign: "center" }}>'
prefix_end = content.find(target)

if prefix_end == -1:
    print('Target not found')
    exit(1)

prefix = content[:prefix_end]

suffix = """<section style={{ background: "#faf3e6", padding: "10px 24px 96px", textAlign: "center" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Use Cases</div>
        <h2 className="vd-section-h2">Industries We Build For</h2>
        <p className="vd-section-p" style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
          Same stack, different constraints. We have shipped this architecture into these rooms.
        </p>
        <div className="wd-ind-grid">
          {industries.map((ind) => (
            <div key={ind.name} className="wd-ind-card">
              <span className="wd-ind-ic">{ind.icon}</span>
              <div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="vd-process-section" style={{ position: "relative", overflow: "hidden", padding: "10px 24px 90px", background: "#fdf8f0" }}>
        {/* Animated Code Background */}
        <div className="process-anim-bg">
          <span className="code-sym s1">{`</>`}</span>
          <span className="code-sym s2">{`{ }`}</span>
          <span className="code-sym s3">{`[ ]`}</span>
          <span className="code-sym s4">{`#`}</span>
          <span className="code-sym s5">{`</>`}</span>
          <span className="code-sym s6">{`{ }`}</span>
        </div>

        <div style={{ position: "relative", zIndex: 10 }}>
          <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Delivery Process</div>
          <h2 className="vd-section-h2">How We Ship Web Products</h2>
          <p className="vd-section-p" style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Fixed milestones from information architecture to a green Lighthouse score — no hourly surprises.
          </p>
          <div className="vd-process-timeline-v2">
            <div className="vt-line" />
            {processSteps.map((step, idx) => {
              const isRight = idx % 2 === 1;
              return (
                <div className={`vt-item ${isRight ? "vt-right" : "vt-left"}`} key={step.num}>
                  <div className="vt-dot" />
                  <div className="vt-content">
                    <span className="vt-step-badge">Step {step.num}</span>
                    <h3 className="vt-title">{step.title}</h3>
                    <p className="vt-desc">{step.desc}</p>
                  </div>
                  <div className="vt-visual">
                    <div className="vt-image-container">
                      <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", width: "100%", maxWidth: "300px", boxShadow: "0 10px 30px rgba(15,23,42,0.06)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>{step.title}</span>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                        </div>
                        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Milestone</span>
                          <span style={{ fontSize: "12px", fontWeight: "900", color: PRIMARY }}>{step.metric}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .process-anim-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
        .code-sym { position: absolute; font-family: ui-monospace, monospace; font-weight: 800; font-size: 32px; color: ${PRIMARY}; opacity: 0.06; animation: floatCode 20s ease-in-out infinite; }
        .code-sym.s1 { top: 10%; left: 5%; animation-duration: 25s; }
        .code-sym.s2 { top: 40%; left: 85%; animation-duration: 22s; font-size: 48px; }
        .code-sym.s3 { top: 70%; left: 15%; animation-duration: 28s; }
        .code-sym.s4 { top: 20%; left: 70%; animation-duration: 18s; font-size: 24px; }
        .code-sym.s5 { top: 80%; left: 80%; animation-duration: 24s; }
        .code-sym.s6 { top: 50%; left: 10%; animation-duration: 21s; font-size: 40px; }
        @keyframes floatCode { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(8deg); } 100% { transform: translateY(0) rotate(0deg); } }

        .wd-eye {
          display: inline-block; font-size: 12px; font-weight: 800; letter-spacing: 1.4px;
          text-transform: uppercase; color: ${PRIMARY}; background: rgba(37,99,235,0.08);
          padding: 6px 14px; border-radius: 99px; margin-bottom: 16px;
        }
        .wd-spot { background: #fdf8f0; padding: 96px 24px; }
        .wd-spot.flip { background: #faf3e6; }
        .wd-spot-inner {
          max-width: 1180px; margin: 0 auto; display: grid;
          grid-template-columns: 1fr 1.05fr; gap: 56px; align-items: center;
        }
        .wd-spot.flip .wd-spot-inner { grid-template-columns: 1.05fr 1fr; }
        .wd-spot.flip .wd-spot-copy { order: 2; }
        .wd-spot.flip .wd-spot-visual { order: 1; }
        .wd-spot-copy h2 {
          font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #0f172a;
          letter-spacing: -1.2px; line-height: 1.15; margin: 0 0 14px;
        }
        .wd-spot-copy > p { font-size: 15.5px; color: #475569; line-height: 1.7; font-weight: 500; margin: 0 0 26px; }
        .wd-spot-copy ul { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 16px; }
        .wd-spot-copy li { display: flex; gap: 12px; align-items: flex-start; }
        .wd-spot-copy .chk {
          width: 26px; height: 26px; border-radius: 8px; background: #ecfdf5; color: #059669;
          font-weight: 900; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 13px; margin-top: 1px;
        }
        .wd-spot-copy li strong { display: block; font-size: 14.5px; color: #0f172a; font-weight: 800; margin-bottom: 3px; }
        .wd-spot-copy li span:last-child { font-size: 13px; color: #64748b; line-height: 1.55; }
        .wd-btn {
          background: #0f172a; color: #fff; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          display: inline-flex; border: 1.5px solid #0f172a; transition: all 0.25s ease;
        }
        .wd-btn:hover { background: #fff; color: #0f172a; transform: translateY(-2px); }

        .wd-desk {
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 16px; overflow: hidden;
          box-shadow: 0 24px 50px rgba(15,23,42,0.08);
        }
        .wd-desk.dark { background: #0f172a; border-color: #1e293b; }
        .wd-desk-bar {
          height: 34px; background: #f1f5f9; display: flex; align-items: center;
          padding: 0 12px; gap: 6px; border-bottom: 1px solid #e5e7eb;
        }
        .wd-desk-bar.dark { background: #1e293b; border-bottom-color: #334155; }
        .d { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .d.r { background: #ef4444; } .d.y { background: #f59e0b; } .d.g { background: #10b981; }
        .wd-url { margin: 0 auto; background: #fff; color: #94a3b8; font-size: 10px; padding: 3px 22px; border-radius: 6px; }
        .wd-url.dark { background: #0f172a; color: #64748b; }

        .wd-cms { display: grid; grid-template-columns: 140px 1fr; min-height: 280px; }
        .wd-cms aside { background: #f8fafc; border-right: 1px solid #e2e8f0; padding: 16px 12px; display: flex; flex-direction: column; gap: 6px; }
        .wd-cms aside b { font-size: 11px; color: #94a3b8; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 6px; }
        .wd-cms aside span { font-size: 12px; font-weight: 700; color: #475569; padding: 7px 10px; border-radius: 8px; }
        .wd-cms aside .on { background: #fff; color: ${PRIMARY}; box-shadow: 0 1px 4px rgba(15,23,42,0.06); }
        .wd-cms main { padding: 18px; text-align: left; }
        .cms-h { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .cms-h strong { font-size: 14px; color: #0f172a; }
        .cms-h em { font-style: normal; font-size: 10px; font-weight: 800; color: #059669; background: #ecfdf5; padding: 3px 8px; border-radius: 99px; }
        .wd-cms label { display: block; font-size: 10px; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin: 8px 0 4px; }
        .field { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; font-size: 12px; font-weight: 600; color: #0f172a; }
        .field.tall { min-height: 72px; color: #64748b; font-weight: 500; position: relative; }
        .field.tall i { position: absolute; bottom: 8px; left: 10px; width: 2px; height: 12px; background: ${PRIMARY}; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .cms-foot { display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px; }
        .cms-foot span { font-size: 11px; font-weight: 800; padding: 7px 12px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; }
        .cms-foot .ok { background: #0f172a; color: #fff; border-color: #0f172a; }

        .wd-desk.dark pre {
          margin: 0; padding: 20px 22px; font-family: ui-monospace, Menlo, Consolas, monospace;
          font-size: 12px; line-height: 1.7; color: #cbd5e1; text-align: left; white-space: pre-wrap;
        }
        .wd-desk.dark .c { color: #38bdf8; font-weight: 800; }
        .wd-desk.dark .g { color: #34d399; font-weight: 700; }
        .api-pills { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 22px 18px; }
        .api-pills span { font-size: 11px; font-weight: 700; color: #cbd5e1; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.35); padding: 4px 12px; border-radius: 99px; }

        .wd-app { padding: 16px; background: #fafafa; }
        .wd-app header { display: flex; align-items: center; gap: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 14px; margin-bottom: 12px; }
        .wd-app header b { font-size: 13px; color: #0f172a; }
        .wd-app header nav { display: flex; gap: 12px; font-size: 11px; font-weight: 700; color: #64748b; }
        .wd-app header em { margin-left: auto; font-style: normal; font-size: 10px; font-weight: 800; background: #0f172a; color: #fff; padding: 5px 10px; border-radius: 8px; }
        .hero-mini { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; text-align: left; margin-bottom: 12px; }
        .hero-mini small { font-size: 10px; font-weight: 800; letter-spacing: 1px; color: #b45309; }
        .hero-mini h4 { font-size: 18px; font-weight: 900; color: #0f172a; margin: 6px 0 6px; letter-spacing: -0.4px; }
        .hero-mini p { font-size: 12px; color: #64748b; margin: 0; line-height: 1.5; }
        .mini-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .mini-cards div { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px; text-align: center; }
        .mini-cards b { display: block; font-size: 16px; font-weight: 900; color: #0f172a; }
        .mini-cards span { font-size: 10px; color: #94a3b8; font-weight: 700; }

        .wd-ind-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; max-width: 1150px; margin: 52px auto 0; text-align: left; }
        .wd-ind-card {
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 22px 24px;
          display: flex; align-items: center; gap: 18px; transition: all 0.25s ease;
        }
        .wd-ind-card:hover { transform: translateY(-3px); border-color: #93c5fd; box-shadow: 0 14px 30px rgba(15,23,42,0.07); }
        .wd-ind-ic {
          width: 50px; height: 50px; flex-shrink: 0; border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #bfdbfe;
          display: flex; align-items: center; justify-content: center; font-size: 23px;
        }
        .wd-ind-card h4 { font-size: 15.5px; font-weight: 800; color: #0f172a; margin: 0 0 4px; }
        .wd-ind-card p { font-size: 13px; color: #64748b; line-height: 1.55; margin: 0; }

        @media (max-width: 1024px) {
          .wd-spot-inner, .wd-spot.flip .wd-spot-inner { grid-template-columns: 1fr !important; }
          .wd-spot.flip .wd-spot-copy, .wd-spot.flip .wd-spot-visual { order: unset; }
          .wd-ind-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
"""

new_content = prefix + suffix

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('File restored successfully!')
