const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
const content = fs.readFileSync(filePath, 'utf8');

const startIndex = content.indexOf('<div className="sec-cloud-mesh-right"');
const endIndex = content.indexOf('</section>', startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find bounds");
  process.exit(1);
}

const newDiagram = `          <div className="sec-cloud-mesh-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '20px 0' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', aspectRatio: '1200 / 600', fontFamily: 'Inter, sans-serif' }}>
              
              <style>
                {\`
                  @keyframes flow-forward {
                    to { stroke-dashoffset: -30; }
                  }
                  @keyframes flow-backward {
                    to { stroke-dashoffset: 30; }
                  }
                  .flow-base {
                    stroke: #2563eb;
                    stroke-width: 2;
                    fill: none;
                  }
                  .flow-anim {
                    stroke: #60a5fa;
                    stroke-width: 3;
                    fill: none;
                    stroke-dasharray: 8 22;
                    animation: flow-forward 1s linear infinite;
                  }
                  .flow-anim-reverse {
                    stroke: #60a5fa;
                    stroke-width: 3;
                    fill: none;
                    stroke-dasharray: 8 22;
                    animation: flow-backward 1s linear infinite;
                  }
                \`}
              </style>

              <svg viewBox="0 0 1200 600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                
                {/* 1. Dev to Tools */}
                <path id="path-dev-to-tf" d="M 180 200 C 220 200 220 185 280 185" className="flow-base" />
                <path d="M 180 200 C 220 200 220 185 280 185" className="flow-anim" />

                <path id="path-dev-to-box" d="M 180 200 C 220 200 220 105 280 105" className="flow-base" />
                <path d="M 180 200 C 220 200 220 105 280 105" className="flow-anim" />

                <path id="path-dev-to-penguin" d="M 180 200 C 220 200 220 265 280 265" className="flow-base" />
                <path d="M 180 200 C 220 200 220 265 280 265" className="flow-anim" />

                {/* 2. Tools to VCS */}
                <path d="M 330 185 L 400 185" className="flow-base" />
                <path d="M 330 185 L 400 185" className="flow-anim" />
                <polygon points="395,180 400,185 395,190" fill="#2563eb" />

                <path d="M 330 105 C 370 105 370 185 400 185" className="flow-base" />
                <path d="M 330 105 C 370 105 370 185 400 185" className="flow-anim" />
                
                <path d="M 330 265 C 370 265 370 185 400 185" className="flow-base" />
                <path d="M 330 265 C 370 265 370 185 400 185" className="flow-anim" />

                {/* 3. VCS to Quality Gate */}
                <path d="M 460 185 L 520 185" className="flow-base" />
                <path d="M 460 185 L 520 185" className="flow-anim" />
                <polygon points="515,180 520,185 515,190" fill="#2563eb" />

                {/* 4. Quality Gate to Control Monkey */}
                <path d="M 700 185 L 740 185" className="flow-base" />
                <path d="M 700 185 L 740 185" className="flow-anim" />
                <polygon points="735,180 740,185 735,190" fill="#2563eb" />

                {/* 5. Control Monkey to Cloud */}
                <path d="M 980 185 L 1020 185" className="flow-base" />
                <path d="M 980 185 L 1020 185" className="flow-anim" />
                <polygon points="1015,180 1020,185 1015,190" fill="#2563eb" />

                {/* 6. Cloud backwards flow paths */}
                {/* To Snapshot */}
                <path d="M 1020 210 Q 980 210 980 250 L 980 375 Q 980 395 960 395 L 920 395" className="flow-base" />
                <path d="M 1020 210 Q 980 210 980 250 L 980 375 Q 980 395 960 395 L 920 395" className="flow-anim-reverse" />
                <polygon points="925,390 920,395 925,400" fill="#2563eb" />

                {/* To Integrity */}
                <path d="M 1020 210 Q 980 210 980 250 L 980 435 Q 980 455 960 455 L 960 455" className="flow-base" />
                <path d="M 1020 210 Q 980 210 980 250 L 980 435 Q 980 455 960 455 L 960 455" className="flow-anim-reverse" />
                <polygon points="965,450 960,455 965,460" fill="#2563eb" />

                {/* Snapshot to VCS */}
                <path d="M 740 395 L 430 395 L 430 300" className="flow-base" />
                <path d="M 740 395 L 430 395 L 430 300" className="flow-anim-reverse" />
                <polygon points="425,305 430,300 435,305" fill="#2563eb" />

                {/* Integrity to VCS */}
                <path d="M 740 455 L 400 455 L 400 300" className="flow-base" />
                <path d="M 740 455 L 400 455 L 400 300" className="flow-anim-reverse" />
                <polygon points="395,305 400,300 405,305" fill="#2563eb" />
                
                {/* Little circles on the cloud end */}
                <circle cx="1020" cy="185" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
                <circle cx="1020" cy="210" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
              </svg>

              <foreignObject x="0" y="0" width="1200" height="600" style={{ zIndex: 2 }}>
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ position: 'relative', width: '100%', height: '100%', margin: 0, padding: 0 }}>
                  
                  {/* Dev Monitor */}
                  <div style={{ position: 'absolute', left: '80px', top: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '60px', background: '#3b82f6', borderRadius: '4px', border: '3px solid #2563eb', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: '900', fontSize: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                      &lt;/&gt;
                    </div>
                    <div style={{ width: '40px', height: '40px', background: '#f59e0b', borderRadius: '50%', marginTop: '-15px', zIndex: 1, border: '3px solid #e9ecfa' }}></div>
                    <div style={{ width: '70px', height: '20px', background: '#60a5fa', borderRadius: '8px 8px 0 0', marginTop: '-5px' }}></div>
                  </div>

                  {/* Tools Column */}
                  {/* Top Box Tool */}
                  <div style={{ position: 'absolute', left: '280px', top: '80px', width: '50px', height: '50px', background: '#3b82f6', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '24px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>📦</div>
                  
                  {/* TF Tool */}
                  <div style={{ position: 'absolute', left: '280px', top: '160px', width: '50px', height: '50px', background: '#3b82f6', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>TF</div>
                  
                  {/* Penguin Tool */}
                  <div style={{ position: 'absolute', left: '280px', top: '240px', width: '50px', height: '50px', background: '#3b82f6', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '24px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>🐧</div>

                  {/* VCS Column wrapper */}
                  <div style={{ position: 'absolute', left: '400px', top: '80px', background: '#c7d2fe', padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1e293b', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>GH</div>
                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1e293b', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>BB</div>
                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1e293b', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>GL</div>
                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1e293b', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>AD</div>
                  </div>

                  {/* Quality Gate Box */}
                  <div style={{ position: 'absolute', left: '520px', top: '120px', background: '#1e3a8a', padding: '24px', borderRadius: '12px', color: 'white', width: '180px', boxShadow: '0 10px 25px rgba(30, 58, 138, 0.3)' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '16px' }}>Quality Gate</div>
                    <div style={{ background: '#2563eb', padding: '10px 12px', borderRadius: '8px', fontSize: '12px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '14px' }}>↻</span> Terraform CI/CD
                    </div>
                    <div style={{ background: '#2563eb', padding: '10px 12px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '14px' }}>↻</span> Cloud Policies<br/>Security &amp; Cost
                    </div>
                  </div>

                  {/* Control Monkey Grid */}
                  <div style={{ position: 'absolute', left: '740px', top: '70px', background: '#1e3a8a', padding: '36px 20px 20px 20px', borderRadius: '16px', border: '2px solid #1e40af', width: '240px', boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)' }}>
                    <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: '#1e3a8a', padding: '8px 18px', borderRadius: '20px', color: 'white', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap', border: '2px solid #1e40af' }}>
                      🐵 Control Monkey
                    </div>
                    
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.2, borderRadius: '14px' }}></div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 2 }}>
                      <div style={{ background: 'white', padding: '14px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px', color: '#1e3a8a', fontWeight: '700', fontSize: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <div style={{ background: '#3b82f6', color: 'white', width: '22px', height: '22px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>✓</div>
                        Infra Delivery<br/>Automation
                        <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '16px' }}>↗</span>
                      </div>
                      <div style={{ background: 'white', padding: '14px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px', color: '#1e3a8a', fontWeight: '700', fontSize: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <div style={{ background: '#3b82f6', color: 'white', width: '22px', height: '22px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>✓</div>
                        Cloud Asset<br/>Management
                        <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '16px' }}>↗</span>
                      </div>
                      <div style={{ background: 'white', padding: '14px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px', color: '#1e3a8a', fontWeight: '700', fontSize: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <div style={{ background: '#3b82f6', color: 'white', width: '22px', height: '22px', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>✓</div>
                        Cloud Disaster<br/>Ready
                        <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '16px' }}>↗</span>
                      </div>
                    </div>
                  </div>

                  {/* Cloud Graphic */}
                  <div style={{ position: 'absolute', left: '1000px', top: '100px', width: '160px', height: '100px', zIndex: 2 }}>
                    <svg viewBox="0 0 100 60" style={{ width: '100%', height: '100%', fill: '#dbeafe' }}>
                      <path d="M25 45 A15 15 0 0 1 25 15 A25 25 0 0 1 75 15 A15 15 0 0 1 75 45 Z" />
                    </svg>
                  </div>

                  {/* Right Features List */}
                  <div style={{ position: 'absolute', left: '1030px', top: '250px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '12px', color: '#1e3a8a', fontWeight: '700', width: '160px', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ background: '#3b82f6', color: 'white', padding: '4px', borderRadius: '4px' }}>↻</div> Cloud Inventory</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ background: '#3b82f6', color: 'white', padding: '4px', borderRadius: '4px' }}>↻</div> IaC Coverage</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ background: '#3b82f6', color: 'white', padding: '4px', borderRadius: '4px' }}>↻</div> Drift Detection &amp; Remediation</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ background: '#3b82f6', color: 'white', padding: '4px', borderRadius: '4px' }}>↻</div> ClickOps Scanner</div>
                  </div>

                  {/* Bottom Return Flows */}
                  <div style={{ position: 'absolute', left: '740px', top: '380px', background: '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', width: '180px', textAlign: 'center', zIndex: 2, boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)' }}>
                    Daily Infra Snapshot
                  </div>
                  <div style={{ position: 'absolute', left: '740px', top: '440px', background: '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', width: '220px', textAlign: 'center', zIndex: 2, boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)' }}>
                    100% Cloud vs Code Integrity
                  </div>

                  {/* Very Bottom Notice */}
                  <div style={{ position: 'absolute', left: '600px', top: '520px', background: '#3b82f6', color: 'white', padding: '10px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 2, boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)' }}>
                    <span style={{ fontSize: '16px' }}>↻</span> AI Powered Code Generation (Terraform / OpenTofu Import)
                  </div>

                </div>
              </foreignObject>
            </div>
          </div>
`;

const newContent = content.slice(0, startIndex) + newDiagram + content.slice(endIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Replacement done.");
