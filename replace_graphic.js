const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find the right column div
const rightColStart = content.indexOf('{/* Right Column: THE EXACT IMAGE */}');
const heroEnd = content.indexOf('</section>', rightColStart);

if (rightColStart === -1 || heroEnd === -1) {
  console.error('Could not find bounds');
  process.exit(1);
}

const newGraphic = `          {/* Right Isometric Graphic */}
          <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '600px', perspective: '1200px' }}>
            
            <style>
              {\`
                @keyframes float-slow {
                  0% { transform: translateY(0px) rotateY(-25deg) rotateX(10deg); }
                  50% { transform: translateY(-15px) rotateY(-25deg) rotateX(10deg); }
                  100% { transform: translateY(0px) rotateY(-25deg) rotateX(10deg); }
                }
                @keyframes float-card {
                  0% { transform: translateY(0px) rotateY(-35deg) rotateX(25deg) rotateZ(15deg); }
                  50% { transform: translateY(-10px) rotateY(-35deg) rotateX(25deg) rotateZ(15deg); }
                  100% { transform: translateY(0px) rotateY(-35deg) rotateX(25deg) rotateZ(15deg); }
                }
                @keyframes float-glass {
                  0% { transform: translateZ(60px) translateY(0px) rotateY(-25deg) rotateX(10deg); }
                  50% { transform: translateZ(60px) translateY(-10px) rotateY(-25deg) rotateX(10deg); }
                  100% { transform: translateZ(60px) translateY(0px) rotateY(-25deg) rotateX(10deg); }
                }
                @keyframes float-icon {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
                @keyframes pulse-ring {
                  0% { box-shadow: 0 0 10px #00ff9d, inset 0 0 10px #00ff9d; transform: scale(1); }
                  50% { box-shadow: 0 0 25px #00ff9d, inset 0 0 25px #00ff9d; transform: scale(1.05); }
                  100% { box-shadow: 0 0 10px #00ff9d, inset 0 0 10px #00ff9d; transform: scale(1); }
                }
                @keyframes data-flow {
                  0% { stroke-dashoffset: 100; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes glow-dot {
                  0% { opacity: 0.5; filter: brightness(1); }
                  50% { opacity: 1; filter: brightness(1.5); }
                  100% { opacity: 0.5; filter: brightness(1); }
                }
              \`}
            </style>

            {/* Base Triangle Glass shape */}
            <div style={{ position: 'absolute', bottom: '10%', width: '500px', height: '400px', transform: 'rotateX(65deg) rotateZ(-45deg)', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '40px', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)', boxShadow: '0 30px 60px rgba(0,0,0,0.7)' }}>
               
               {/* Center Cyan Ring */}
               <div style={{ position: 'absolute', left: '30%', top: '30%', width: '150px', height: '150px', borderRadius: '50%', border: '4px solid #06b6d4', boxShadow: '0 0 30px #06b6d4, inset 0 0 20px #06b6d4', animation: 'pulse-ring 4s infinite' }}></div>
               <div style={{ position: 'absolute', left: '40%', top: '40%', width: '75px', height: '75px', borderRadius: '50%', border: '2px solid rgba(6, 182, 212, 0.5)' }}></div>

               {/* Outer glowing rings (Cyan/Yellow) */}
               {/* Left Ring */}
               <div style={{ position: 'absolute', left: '10%', top: '65%', width: '80px', height: '80px', borderRadius: '50%', border: '3px solid #00ff9d', boxShadow: '0 0 15px #00ff9d, inset 0 0 10px #00ff9d' }}>
                 <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', border: '2px solid #eab308', opacity: 0.8, boxShadow: '0 0 10px #eab308' }}></div>
               </div>
               
               {/* Bottom Ring */}
               <div style={{ position: 'absolute', left: '70%', top: '80%', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #06b6d4', boxShadow: '0 0 15px #06b6d4, inset 0 0 10px #06b6d4' }}>
                 <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', border: '2px solid #eab308', opacity: 0.8, boxShadow: '0 0 10px #eab308' }}></div>
               </div>
               
               {/* Right Ring */}
               <div style={{ position: 'absolute', right: '10%', top: '15%', width: '70px', height: '70px', borderRadius: '50%', border: '3px solid #06b6d4', boxShadow: '0 0 15px #06b6d4, inset 0 0 10px #06b6d4' }}>
                 <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', border: '2px solid #eab308', opacity: 0.8, boxShadow: '0 0 10px #eab308' }}></div>
               </div>

               {/* Inner Connections on Base */}
               <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                 <path d="M 140 300 L 225 150 L 400 110 L 450 350 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="6 6" />
                 <path d="M 140 300 L 225 150 L 400 110 L 450 350 Z" fill="none" stroke="#00ff9d" strokeWidth="2" strokeDasharray="15 30" style={{ animation: 'data-flow 2s linear infinite' }} />
               </svg>
            </div>

            {/* Connecting White Lines & Red Dots in 3D Space */}
            {/* Handled by 2D overlay SVG for simplicity since 3D lines are hard */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 12, pointerEvents: 'none' }}>
              <path d="M 230 450 Q 250 380 320 370" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <path d="M 400 370 Q 420 400 400 480" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <path d="M 360 410 Q 380 430 460 410" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <path d="M 330 200 Q 350 220 330 250" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <path d="M 380 230 Q 420 280 440 330" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <path d="M 360 170 Q 400 190 420 230" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            </svg>
            
            {/* Glowing Red & Cyan Nodes */}
            <div style={{ position: 'absolute', zIndex: 13, left: '46%', top: '65%', width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444', animation: 'glow-dot 2s infinite' }}></div>
            <div style={{ position: 'absolute', zIndex: 13, right: '27%', top: '55%', width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444', animation: 'glow-dot 1.5s infinite 0.5s' }}></div>
            <div style={{ position: 'absolute', zIndex: 13, left: '60%', bottom: '25%', width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444', animation: 'glow-dot 2s infinite 1s' }}></div>
            <div style={{ position: 'absolute', zIndex: 13, left: '62%', bottom: '28%', width: '10px', height: '10px', background: '#00ff9d', borderRadius: '50%', boxShadow: '0 0 15px #00ff9d', animation: 'glow-dot 1.5s infinite 0.2s' }}></div>
            <div style={{ position: 'absolute', zIndex: 13, right: '15%', bottom: '38%', width: '10px', height: '10px', background: '#06b6d4', borderRadius: '50%', boxShadow: '0 0 15px #06b6d4', animation: 'glow-dot 1.8s infinite 0.7s' }}></div>

            {/* Vertical Phone Component */}
            <div style={{ position: 'absolute', zIndex: 10, width: '170px', height: '340px', background: 'linear-gradient(to bottom, #0ea5e9, #0f172a)', borderRadius: '16px', transform: 'rotateY(-25deg) rotateX(10deg)', boxShadow: '-20px 30px 60px rgba(0,0,0,0.8), inset 0 0 0 4px #000', border: '2px solid rgba(255,255,255,0.4)', left: '50%', top: '35%', marginLeft: '-60px', marginTop: '-170px', overflow: 'hidden', transformStyle: 'preserve-3d', animation: 'float-slow 6s ease-in-out infinite' }}>
               <div style={{ position: 'absolute', right: '15px', top: '100px', color: 'rgba(255,255,255,0.9)', fontSize: '32px', fontFamily: 'monospace' }}>10<span style={{fontSize: '14px'}}>PM</span></div>
               <div style={{ position: 'absolute', right: '15px', top: '140px', color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontFamily: 'monospace' }}>APR 18</div>
               
               {/* Phone glass glare */}
               <div style={{ position: 'absolute', left: '-50%', top: '-20%', width: '200%', height: '200%', background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.4) 50%, transparent 55%)' }}></div>
            </div>
            
            {/* Translucent Shield Glass Pane */}
            <div style={{ position: 'absolute', zIndex: 12, width: '170px', height: '320px', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(0, 255, 157, 0.1))', borderRadius: '8px', border: '1px solid #00ff9d', borderLeftWidth: '3px', boxShadow: '-10px 10px 30px rgba(0,255,157,0.2), inset 0 0 20px rgba(0,255,157,0.2)', backdropFilter: 'blur(4px)', left: '46%', top: '38%', marginLeft: '-85px', marginTop: '-160px', display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'float-glass 6s ease-in-out infinite 0.2s' }}>
              <svg width="100" height="120" viewBox="0 0 24 24" fill="none" stroke="#00ff9d" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 15px #00ff9d)' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" fill="rgba(0,255,157,0.15)"/>
                <rect x="9" y="10" width="6" height="8" rx="1" fill="#00ff9d" stroke="none" />
                <path d="M9 10V8a3 3 0 0 1 6 0v2" stroke="#00ff9d" strokeWidth="2.5" />
              </svg>
            </div>

            {/* Credit Card Floating */}
            <div style={{ position: 'absolute', zIndex: 14, left: '25%', top: '55%', width: '180px', height: '110px', background: 'linear-gradient(135deg, #1e3a8a, #0f172a)', borderRadius: '12px', boxShadow: '-15px 25px 50px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)', padding: '16px', animation: 'float-card 5s ease-in-out infinite 0.5s' }}>
              <div style={{ width: '35px', height: '25px', background: 'linear-gradient(135deg, #fbbf24, #d97706)', borderRadius: '4px', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', flexWrap: 'wrap', gap: '2px', padding: '2px' }}>
                 {/* fake chip lines */}
                 <div style={{width:'8px', height:'8px', borderRight:'1px solid rgba(0,0,0,0.2)', borderBottom:'1px solid rgba(0,0,0,0.2)'}}></div>
                 <div style={{width:'8px', height:'8px', borderBottom:'1px solid rgba(0,0,0,0.2)'}}></div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                <div style={{ width: '30px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}></div>
                <div style={{ width: '30px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}></div>
                <div style={{ width: '30px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}></div>
              </div>
            </div>

            {/* Floating Chat Bubbles */}
            <div style={{ position: 'absolute', zIndex: 11, left: '20%', top: '22%', animation: 'float-icon 4s ease-in-out infinite 0.1s' }}>
               <div style={{ background: '#00ff9d', padding: '12px', borderRadius: '12px 12px 12px 0', border: '2px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 20px rgba(0,255,157,0.3)', marginBottom: '10px' }}>
                 <div style={{ width: '40px', height: '3px', background: '#060b19', marginBottom: '6px', borderRadius: '2px' }}></div>
                 <div style={{ width: '30px', height: '3px', background: '#060b19', marginBottom: '6px', borderRadius: '2px' }}></div>
                 <div style={{ width: '20px', height: '3px', background: '#060b19', borderRadius: '2px' }}></div>
               </div>
               <div style={{ background: '#475569', padding: '10px', borderRadius: '10px 10px 10px 0', marginLeft: '-20px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
                 <div style={{ width: '30px', height: '3px', background: '#e2e8f0', marginBottom: '4px', borderRadius: '2px' }}></div>
                 <div style={{ width: '20px', height: '3px', background: '#e2e8f0', borderRadius: '2px' }}></div>
               </div>
            </div>

            {/* Floating White Icon Circles */}
            <div style={{ position: 'absolute', zIndex: 15, left: '18%', top: '48%', width: '56px', height: '56px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.5)', animation: 'float-icon 4s ease-in-out infinite 0.7s' }}>
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01"/></svg>
            </div>
            
            <div style={{ position: 'absolute', zIndex: 15, right: '12%', top: '35%', width: '56px', height: '56px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.5)', animation: 'float-icon 4.5s ease-in-out infinite 0.3s' }}>
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>

            <div style={{ position: 'absolute', zIndex: 15, right: '8%', bottom: '25%', width: '56px', height: '56px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.5)', animation: 'float-icon 4s ease-in-out infinite 0.9s' }}>
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            
            <div style={{ position: 'absolute', zIndex: 15, left: '42%', bottom: '22%', width: '56px', height: '56px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.5)', animation: 'float-icon 3.8s ease-in-out infinite 0.4s' }}>
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>

          </div>
`;

content = content.substring(0, rightColStart) + newGraphic + content.substring(heroEnd);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Right graphic fully updated and animated');
