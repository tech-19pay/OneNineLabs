const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const startTag = '<section className="sec-cloud-mesh-section"';
const startIndex = content.indexOf(startTag);

if (startIndex === -1) {
  console.error("Could not find start index");
  process.exit(1);
}

// Find the corresponding closing </section> tag by balancing tags, or just finding the next </section> after a certain point.
// Wait, sec-cloud-mesh-section doesn't have nested sections, so the very next </section> is the one we want!
let endIndex = content.indexOf('</section>', startIndex);
if (endIndex === -1) {
  console.error("Could not find end index");
  process.exit(1);
}
endIndex += '</section>'.length;

const newSection = `      <section className="sec-cloud-mesh-section" style={{ width: '100%', position: 'relative', overflow: 'hidden', background: '#ffffff', padding: '100px 24px', fontFamily: 'Inter, sans-serif' }}>
        
        {/* Subtle dotted background pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 2px, transparent 2px)', backgroundSize: '30px 30px', zIndex: 0 }}></div>

        <div className="sec-cloud-mesh-container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>
          
          {/* Left Column: Text & CTA */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7280', marginBottom: '16px' }}>ABOUT ONENINELABS CLOUD SECURITY</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', color: '#0f172a', lineHeight: '1.2', marginBottom: '24px', textTransform: 'uppercase' }}>
              BYPASS THREATS AND <span style={{ background: 'linear-gradient(90deg, #9333ea, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>REMAIN FULLY RESILIENT</span> ACROSS EVERY CLOUD
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginBottom: '40px', maxWidth: '480px' }}>
              With OneNineLabs Zero-Trust Cloud Armor, your infrastructure and multi-cloud workloads operate inside an encrypted, isolated perimeter. Shield sensitive data, stop lateral threat movement, and prevent unauthorized breaches with continuous real-time verification.
            </p>
            
            {/* Custom Pill Button with inner circle */}
            <button style={{ display: 'flex', alignItems: 'center', background: '#3b0764', borderRadius: '50px', padding: '6px 6px 6px 24px', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <span style={{ color: 'white', fontWeight: '600', fontSize: '15px', marginRight: '20px' }}>Get A Demo</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #d946ef)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(217, 70, 239, 0.5)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </button>
          </div>

          {/* Right Column: 3D Orb Graphic */}
          <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: '400px' }}>
            
            <style>
              {\`
                @keyframes spin-ring-1 {
                  0% { transform: rotateX(70deg) rotateY(-20deg) rotateZ(0deg); }
                  100% { transform: rotateX(70deg) rotateY(-20deg) rotateZ(360deg); }
                }
                @keyframes spin-ring-2 {
                  0% { transform: rotateX(60deg) rotateY(40deg) rotateZ(0deg); }
                  100% { transform: rotateX(60deg) rotateY(40deg) rotateZ(-360deg); }
                }
                @keyframes float-orb {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
              \`}
            </style>

            <div style={{ position: 'relative', width: '360px', height: '360px', animation: 'float-orb 6s ease-in-out infinite' }}>
              
              {/* Outer Orbit Ring 1 */}
              <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', borderRadius: '50%', border: '4px solid rgba(168, 85, 247, 0.3)', animation: 'spin-ring-1 12s linear infinite', borderTopColor: '#d946ef', borderRightColor: '#9333ea', filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' }}></div>
              
              {/* Outer Orbit Ring 2 */}
              <div style={{ position: 'absolute', top: '0%', left: '0%', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid rgba(147, 51, 234, 0.4)', animation: 'spin-ring-2 15s linear infinite', borderBottomColor: '#d946ef', filter: 'drop-shadow(0 0 8px rgba(217, 70, 239, 0.5))' }}></div>

              {/* Main Glowing Orb / Badge */}
              <div style={{ position: 'absolute', inset: '15%', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #fdf4ff 0%, #d946ef 30%, #7e22ce 70%, #3b0764 100%)', boxShadow: 'inset -10px -10px 30px rgba(0,0,0,0.5), inset 10px 10px 30px rgba(255,255,255,0.8), 0 30px 60px rgba(147, 51, 234, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                
                {/* 3D Embossed Logo/Text (mimicking the "TU" in the image) */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <svg width="120" height="120" viewBox="0 0 100 100">
                    <defs>
                      <filter id="emboss">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#3b0764" floodOpacity="0.8" />
                        <feDropShadow dx="-2" dy="-2" stdDeviation="2" floodColor="#fdf4ff" floodOpacity="0.8" />
                      </filter>
                      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fdf4ff" />
                        <stop offset="50%" stopColor="#d946ef" />
                        <stop offset="100%" stopColor="#7e22ce" />
                      </linearGradient>
                    </defs>
                    <path d="M20 20 L80 20 L80 35 L58 35 L58 80 L42 80 L42 35 L20 35 Z" fill="url(#logo-grad)" filter="url(#emboss)" />
                    <path d="M50 45 L70 45 L70 80 L50 80 Z" fill="url(#logo-grad)" filter="url(#emboss)" />
                    <path d="M55 52 L65 52 L65 73 L55 73 Z" fill="#7e22ce" />
                  </svg>
                </div>
                
                {/* Inner glare */}
                <div style={{ position: 'absolute', top: 0, left: '10%', width: '80%', height: '40%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)', borderRadius: '50% 50% 0 0', filter: 'blur(2px)' }}></div>
              </div>
            </div>

          </div>

        </div>
      </section>`;

content = content.substring(0, startIndex) + newSection + content.substring(endIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced section successfully!');
