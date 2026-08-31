const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const startTag = '<section className="sec-monitor-section"';
const startIndex = content.indexOf(startTag);

if (startIndex === -1) {
  console.error("Could not find start index");
  process.exit(1);
}

let endIndex = content.indexOf('</section>', startIndex);
if (endIndex === -1) {
  console.error("Could not find end index");
  process.exit(1);
}
endIndex += '</section>'.length;

const newSection = `      {/* ── 4. CONTINUOUS VULNERABILITY HUNTING SECTION ── */}
      <section className="sec-monitor-section" style={{ width: '100%', position: 'relative', overflow: 'hidden', background: '#ffffff', padding: '100px 24px', fontFamily: 'Inter, sans-serif' }}>
        <div className="sec-cloud-mesh-container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'nowrap' }}>
          
          {/* Left Column: Text & CTA */}
          <div style={{ flex: '1 1 50%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%', border: '2px solid rgba(16,185,129,0.3)', boxShadow: '0 0 10px #10b981', padding: '2px', backgroundClip: 'content-box' }}></div>
              <div style={{ width: '40px', height: '2px', background: '#10b981' }}></div>
              <span style={{ color: '#10b981', fontWeight: '800', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                MEET COMPLIANCE WITH CONFIDENCE
              </span>
            </div>
            
            <h2 style={{ color: '#0f172a', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px', textTransform: 'uppercase' }}>
              WATCH AI HUNT FOR VULNERABILITIES IN YOUR APPLICATIONS
            </h2>
            
            <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', fontWeight: '500', marginBottom: '40px', maxWidth: '480px' }}>
              Make pentesting more than an annual checkbox. Watch our AI identify vulnerabilities in your applications before they become threats. AI-powered security testing helps detect, prioritize, and resolve risks faster and more accurately.
            </p>
            
            <Link href="/contact" style={{ background: '#10b981', color: '#ffffff', padding: '16px 36px', borderRadius: '30px', fontWeight: '800', fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)', display: 'inline-block' }}>
              GET A DEMO
            </Link>
          </div>

          {/* Right Column: AI Scanner Graphic */}
          <div style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: '400px' }}>
            
            <style>
              {\`
                @keyframes scan-line {
                  0% { top: 0; opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { top: 100%; opacity: 0; }
                }
                @keyframes pulse-shield {
                  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.4)); }
                  50% { transform: scale(1.02); filter: drop-shadow(0 0 30px rgba(16, 185, 129, 0.8)); }
                }
                @keyframes float-scan {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
              \`}
            </style>

            <div style={{ position: 'relative', width: '380px', height: '380px', animation: 'float-scan 6s ease-in-out infinite' }}>
              
              {/* Abstract Tech Background Rings */}
              <div style={{ position: 'absolute', inset: '10%', border: '2px dashed rgba(16, 185, 129, 0.2)', borderRadius: '24px', transform: 'rotate(15deg)' }}></div>
              <div style={{ position: 'absolute', inset: '10%', border: '2px dashed rgba(16, 185, 129, 0.2)', borderRadius: '24px', transform: 'rotate(-15deg)' }}></div>
              
              {/* Main Box - Represents Application/Code */}
              <div style={{ position: 'absolute', inset: '20%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ height: '30px', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                </div>
                {/* Code Lines Mockup */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ height: '8px', width: '70%', background: '#e2e8f0', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '90%', background: '#e2e8f0', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '40%', background: '#e2e8f0', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '80%', background: '#e2e8f0', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '60%', background: '#e2e8f0', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '85%', background: '#10b981', borderRadius: '4px', opacity: 0.3 }}></div>
                </div>

                {/* Animated Scanner Line */}
                <div style={{ position: 'absolute', left: 0, right: 0, height: '4px', background: '#10b981', boxShadow: '0 0 20px 4px rgba(16, 185, 129, 0.5)', animation: 'scan-line 3s linear infinite' }}></div>
              </div>

              {/* Glowing Shield Icon floating in front */}
              <div style={{ position: 'absolute', bottom: '15%', right: '15%', width: '80px', height: '80px', background: '#ffffff', borderRadius: '50%', boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'pulse-shield 3s ease-in-out infinite', zIndex: 10 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>

            </div>
          </div>
        </div>
      </section>`;

content = content.substring(0, startIndex) + newSection + content.substring(endIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced section successfully!');
