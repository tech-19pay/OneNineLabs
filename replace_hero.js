const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const heroStartIndex = content.indexOf('<section className="vpn-hero-section">');
if (heroStartIndex === -1) {
  console.error("Hero section not found");
  process.exit(1);
}

// Search for the end of the hero section which is the closing </section> just before the next section
const heroEndIndex = content.indexOf('</section>', heroStartIndex) + '</section>'.length;

const newHero = `      {/* ── 1. HERO SECTION: CYBER SECURITY THEME ── */}
      <section className="cyber-hero-section" style={{ position: 'relative', background: '#060b19', overflow: 'hidden', padding: '100px 24px', minHeight: '800px', display: 'flex', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>
        
        {/* Background Glowing Grid / Mesh */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00ff9d" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            {/* Constellation web lines */}
            <g stroke="#00ff9d" strokeWidth="0.5" fill="none" opacity="0.4">
              <path d="M-100,200 L400,100 L600,400 L200,600 Z" />
              <path d="M400,100 L800,200 L600,400" />
              <path d="M800,200 L1200,100 L1400,300 L900,600 Z" />
              <path d="M200,600 L800,900 L1200,700" />
            </g>
          </svg>
        </div>

        {/* Huge Radial Glow */}
        <div style={{ position: 'absolute', top: '-20%', left: '40%', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(0, 255, 157, 0.15) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }} />

        <div className="cyber-hero-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', width: '100%' }}>
          
          {/* Left Text Column */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '10px', height: '10px', background: '#00ff9d', borderRadius: '50%', boxShadow: '0 0 10px #00ff9d' }}></div>
              <div style={{ width: '40px', height: '2px', background: '#00ff9d' }}></div>
              <span style={{ color: '#00ff9d', fontWeight: '800', fontSize: '14px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                WELCOME TO ONENINELABS
              </span>
            </div>
            
            {/* Headline */}
            <h1 style={{ color: 'white', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: '800', lineHeight: '1.1', margin: 0 }}>
              Cloud &amp; Cyber<br/>Security Scale.
            </h1>
            
            {/* Description */}
            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.7', maxWidth: '540px', margin: 0, fontWeight: '400' }}>
              Unlock unprecedented resilience and skyrocket your defense capabilities with our premier cybersecurity solutions. As the maestros of the digital realm, we craft bespoke strategies that blend cutting-edge technology with innovative compliance monitoring.
            </p>
            
            {/* Buttons */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: '#00ff9d', color: '#060b19', padding: '16px 36px', borderRadius: '30px', fontWeight: '800', fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 0 25px rgba(0, 255, 157, 0.4)' }}>
                DISCOVER MORE
              </Link>
              <Link href="/contact" style={{ background: 'transparent', color: '#00ff9d', padding: '16px 36px', borderRadius: '30px', border: '2px solid #00ff9d', fontWeight: '800', fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s' }}>
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right Isometric Graphic */}
          <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '550px' }}>
            
            {/* Base Triangle Glass shape */}
            <div style={{ position: 'absolute', bottom: '20px', width: '450px', height: '400px', transform: 'rotateX(60deg) rotateZ(-45deg)', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
               {/* 3 Glowing Base Rings */}
               <div style={{ position: 'absolute', left: '15%', top: '25%', width: '90px', height: '90px', borderRadius: '50%', border: '4px solid #00ff9d', boxShadow: '0 0 25px #00ff9d, inset 0 0 15px rgba(0,255,157,0.5)' }}></div>
               <div style={{ position: 'absolute', right: '15%', top: '15%', width: '70px', height: '70px', borderRadius: '50%', border: '4px solid #00ff9d', boxShadow: '0 0 25px #00ff9d, inset 0 0 15px rgba(0,255,157,0.5)' }}></div>
               <div style={{ position: 'absolute', left: '45%', bottom: '15%', width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #00ff9d', boxShadow: '0 0 30px #00ff9d, inset 0 0 20px rgba(0,255,157,0.5)' }}></div>
               
               {/* Connecting Lines between rings inside base */}
               <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                 <path d="M 120 160 L 320 120 L 250 310 Z" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 10" />
               </svg>
            </div>

            {/* Vertical Phone Component */}
            <div style={{ position: 'absolute', zIndex: 10, width: '180px', height: '360px', background: 'linear-gradient(to bottom, #0ea5e9, #0891b2)', borderRadius: '24px', transform: 'rotateY(-25deg) rotateX(10deg)', boxShadow: '-15px 25px 50px rgba(0,0,0,0.6)', border: '4px solid #1e293b', borderRightColor: '#475569', borderBottomColor: '#475569', left: '50%', top: '40%', marginLeft: '-70px', marginTop: '-180px', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', right: '15px', top: '120px', color: 'rgba(255,255,255,0.8)', fontSize: '28px', fontFamily: 'monospace' }}>10<span style={{fontSize: '14px'}}>PM</span></div>
               <div style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, transparent 55%)' }}></div>
            </div>
            
            {/* Glowing Green Shield */}
            <div style={{ position: 'absolute', zIndex: 12, left: '50%', top: '48%', marginLeft: '-50px', marginTop: '-90px', transform: 'translateZ(50px)' }}>
              <svg width="100" height="120" viewBox="0 0 24 24" fill="none" stroke="#00ff9d" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 15px #00ff9d)' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(0,255,157,0.15)"/>
                <rect x="9" y="10" width="6" height="8" rx="2" fill="#00ff9d" stroke="none" />
                <path d="M9 10V8a3 3 0 0 1 6 0v2" stroke="#00ff9d" strokeWidth="2" />
              </svg>
            </div>

            {/* Credit Card Floating */}
            <div style={{ position: 'absolute', zIndex: 11, left: '20%', top: '55%', width: '160px', height: '100px', background: 'linear-gradient(135deg, #1e3a8a, #0f172a)', borderRadius: '12px', transform: 'rotateY(-35deg) rotateX(25deg) rotateZ(15deg)', boxShadow: '-10px 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.15)', padding: '16px' }}>
              <div style={{ width: '30px', height: '22px', background: '#fbbf24', borderRadius: '4px', marginBottom: '20px' }}></div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <div style={{ width: '25px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}></div>
                <div style={{ width: '25px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}></div>
                <div style={{ width: '25px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}></div>
              </div>
            </div>

            {/* Floating White Icon Circles */}
            <div style={{ position: 'absolute', zIndex: 13, left: '15%', top: '45%', width: '48px', height: '48px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,255,157,0.3)', transform: 'translateZ(60px)' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01"/></svg>
            </div>
            
            <div style={{ position: 'absolute', zIndex: 13, right: '15%', top: '30%', width: '48px', height: '48px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,255,157,0.3)' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>

            <div style={{ position: 'absolute', zIndex: 13, right: '8%', bottom: '25%', width: '48px', height: '48px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,255,157,0.3)' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            
            <div style={{ position: 'absolute', zIndex: 14, left: '45%', bottom: '22%', width: '48px', height: '48px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 25px rgba(0,255,157,0.3)', border: '2px solid #1e293b' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            
            {/* Connective red glowing dots */}
            <div style={{ position: 'absolute', zIndex: 15, left: '20%', top: '65%', width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444' }}></div>
            <div style={{ position: 'absolute', zIndex: 15, right: '35%', bottom: '15%', width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444' }}></div>
            <div style={{ position: 'absolute', zIndex: 15, right: '18%', top: '45%', width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444' }}></div>
            <div style={{ position: 'absolute', zIndex: 15, left: '55%', bottom: '35%', width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 15px #ef4444' }}></div>
            
            {/* White sweeping curves connecting the elements */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 11, pointerEvents: 'none' }}>
              <path d="M 100 250 Q 200 150 400 180" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 220 380 Q 300 450 450 400" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

          </div>
        </div>
      </section>
`;

content = content.substring(0, heroStartIndex) + newHero + content.substring(heroEndIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Hero section completely rewritten.');
