const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const anchor = '{/* Feature Stat Blocks */}';
const startIndex = content.indexOf(anchor);
const endAnchor = '{/* Full Width Diagram (Recreated in UI Code, Responsive via SVG foreignObject) */}';
const endIndex = content.indexOf(endAnchor);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find boundaries");
  process.exit(1);
}

const replaceStr = `{/* Feature Stat Blocks */}
            <div className="sec-cm-stats-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', margin: '30px 0' }}>
              <div className="sec-cm-stat-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '16px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="sec-cm-stat-icon-box" style={{ background: 'rgba(240, 78, 35, 0.1)', padding: '10px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <div className="sec-cm-stat-info" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span className="sec-cm-stat-num" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>1650+</span>
                  <span className="sec-cm-stat-lbl" style={{ fontSize: '14px', color: '#94a3b8' }}>Secure Cloud Nodes</span>
                </div>
              </div>

              <div className="sec-cm-stat-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '16px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="sec-cm-stat-icon-box" style={{ background: 'rgba(240, 78, 35, 0.1)', padding: '10px', borderRadius: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="sec-cm-stat-info" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span className="sec-cm-stat-num" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>125</span>
                  <span className="sec-cm-stat-lbl" style={{ fontSize: '14px', color: '#94a3b8' }}>Global Cloud PoPs</span>
                </div>
              </div>
            </div>

            {/* Dark CTA Button */}
            <div className="sec-cm-btn-wrap" style={{ marginTop: '10px' }}>
              <Link href="/contact" className="sec-cm-cta-btn" style={{ background: '#0f172a', color: 'white', padding: '14px 32px', borderRadius: '30px', fontWeight: '600', textDecoration: 'none', border: '1px solid #1e293b', transition: 'all 0.3s' }}>
                Get Started →
              </Link>
            </div>
          </div>

          `;

content = content.substring(0, startIndex) + replaceStr + content.substring(endIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed stats grid and button layout');
