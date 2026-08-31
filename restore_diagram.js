const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const anchor = '{/* Bento Box Grid - Isometric Features */}';
const targetIndex = content.indexOf(anchor);

if (targetIndex === -1) {
  console.log("Could not find Bento Box Grid anchor");
  process.exit(1);
}

const newDiagram = `          {/* Full Width Diagram (Recreated in UI Code, Responsive via SVG foreignObject) */}
          <div className="sec-cloud-mesh-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '20px 0' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '100vw', aspectRatio: '1200 / 600', fontFamily: 'Inter, sans-serif' }}>
              
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
                  .flow-anim-forward {
                    stroke: #0ea5e9;
                    stroke-width: 3;
                    fill: none;
                    stroke-dasharray: 8 22;
                    animation: flow-forward 1s linear infinite;
                  }
                  .flow-anim-backward {
                    stroke: #10b981;
                    stroke-width: 3;
                    fill: none;
                    stroke-dasharray: 8 22;
                    animation: flow-backward 1s linear infinite;
                  }
                  .node-pulse {
                    animation: pulse 2s infinite;
                  }
                  @keyframes pulse {
                    0% { r: 6; stroke-width: 0; opacity: 1; }
                    50% { r: 12; stroke-width: 2; opacity: 0.5; }
                    100% { r: 6; stroke-width: 0; opacity: 1; }
                  }
                \`}
              </style>

              {/* Central Shield/Lock */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                 <div style={{ width: '80px', height: '80px', background: 'radial-gradient(circle at center, #020617 0%, #0f172a 100%)', borderRadius: '50%', border: '2px solid #3b82f6', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                 </div>
              </div>

              {/* SVG Flow Lines */}
              <svg width="100%" height="100%" viewBox="0 0 1200 600" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                 
                 {/* Top Left (Google Cloud) to Center */}
                 <path d="M 300 200 L 450 200 L 600 300" className="flow-base" />
                 <path d="M 300 200 L 450 200 L 600 300" className="flow-anim-forward" />

                 {/* Top Right (Azure) to Center */}
                 <path d="M 900 200 L 750 200 L 600 300" className="flow-base" />
                 <path d="M 900 200 L 750 200 L 600 300" className="flow-anim-forward" />

                 {/* Bottom Left (AWS) to Center */}
                 <path d="M 300 400 L 450 400 L 600 300" className="flow-base" />
                 <path d="M 300 400 L 450 400 L 600 300" className="flow-anim-backward" />

                 {/* Bottom Right (DigitalOcean) to Center */}
                 <path d="M 900 400 L 750 400 L 600 300" className="flow-base" />
                 <path d="M 900 400 L 750 400 L 600 300" className="flow-anim-backward" />

                 {/* Center pulsing nodes */}
                 <circle cx="600" cy="300" fill="#3b82f6" className="node-pulse" />
              </svg>

              {/* Node Components (Using foreignObject for HTML inside SVG coordinates) */}
              {/* To make it responsive, we use absolute positioning instead of SVG foreignObject to avoid Next.js warnings */}
              
              {/* Top Left - Google Cloud */}
              <div style={{ position: 'absolute', top: '33.33%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                <div style={{ width: '180px', padding: '16px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                  <div style={{ background: 'white', padding: '6px', borderRadius: '8px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/><path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 11.36l3.98-3.09z"/><path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Google Cloud</div>
                    <div style={{ fontSize: '12px', color: '#10b981' }}>Protected</div>
                  </div>
                </div>
              </div>

              {/* Top Right - Azure */}
              <div style={{ position: 'absolute', top: '33.33%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                <div style={{ width: '180px', padding: '16px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                  <div style={{ background: 'white', padding: '6px', borderRadius: '8px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#00a4ef" d="M11.4 24L0 12l11.4-11.4v22.8z"/><path fill="#00a4ef" opacity="0.8" d="M12.6 0l11.4 12-11.4 11.4V0z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Azure</div>
                    <div style={{ fontSize: '12px', color: '#10b981' }}>Secured</div>
                  </div>
                </div>
              </div>

              {/* Bottom Left - AWS */}
              <div style={{ position: 'absolute', top: '66.66%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                <div style={{ width: '180px', padding: '16px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                  <div style={{ background: 'white', padding: '6px', borderRadius: '8px', display: 'flex', justifyContent:'center', alignItems:'center' }}>
                     <span style={{color: '#ff9900', fontWeight: 'bold', fontSize: '16px'}}>AWS</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>AWS</div>
                    <div style={{ fontSize: '12px', color: '#10b981' }}>Encrypted</div>
                  </div>
                </div>
              </div>

              {/* Bottom Right - DigitalOcean */}
              <div style={{ position: 'absolute', top: '66.66%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
                <div style={{ width: '180px', padding: '16px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                  <div style={{ background: '#008bcf', padding: '6px', borderRadius: '8px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12.2 0C5.6 0 .2 5.2.2 11.7c0 4.1 2.2 7.8 5.6 9.8v-3.7c-1.8-1.4-3-3.6-3-6.1 0-4.2 3.5-7.7 7.7-7.7 4.2 0 7.7 3.5 7.7 7.7 0 2.5-1.2 4.7-3 6.1v3.7c3.4-2 5.6-5.7 5.6-9.8C20.8 5.2 15.4 0 12.2 0zm-2 15.4h3.6v-3.6h-3.6v3.6zm0 5.6h3.6v-3.6h-3.6v3.6zm0 2.8h3.6v-1.6h-3.6v1.6z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>DigitalOcean</div>
                    <div style={{ fontSize: '12px', color: '#10b981' }}>Verifying...</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
`;

content = content.substring(0, targetIndex) + newDiagram + content.substring(targetIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Restored diagram successfully');
