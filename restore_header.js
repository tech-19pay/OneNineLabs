const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find </section> and <div className="sec-cm-stats-grid">
const searchPoint = content.indexOf('</section>', content.indexOf('Right Isometric Graphic'));
const nextGrid = content.indexOf('<div className="sec-cm-stats-grid">', searchPoint);

if (searchPoint === -1 || nextGrid === -1) {
  console.error("Could not find bounds to restore the Bypass Threats section.");
  process.exit(1);
}

const restoreContent = `</section>

      {/* ── 2. BYPASS THREATS & CLOUD IMMUNITY SECTION ── */}
      <section className="sec-cloud-mesh-section">
        <div className="sec-cloud-mesh-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', maxWidth: '1200px', margin: '0 auto', padding: '0px 24px 60px' }}>
          {/* Top Header Row: Text on Left, Stats & CTA on Right */}
          {/* Left Column: Text, Subtitle, Stats, and CTA */}
          <div className="sec-cloud-mesh-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px' }}>
            <span className="sec-cm-tag">ABOUT ONENINELABS CLOUD SECURITY</span>
            <h2 className="sec-cm-title">
              Bypass Threats and<br />
              Remain Fully Resilient<br />
              Across Every Cloud
            </h2>
            <p className="sec-cm-desc">
              With OneNineLabs Zero-Trust Cloud Armor, your infrastructure and multi-cloud workloads operate inside an encrypted, isolated perimeter. Shield sensitive data, stop lateral threat movement, and prevent unauthorized breaches with continuous real-time verification.
            </p>

            {/* Feature Stat Blocks */}
            `;

content = content.substring(0, searchPoint) + restoreContent + content.substring(nextGrid + '<div className="sec-cm-stats-grid">'.length);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Restored the Bypass Threats header successfully.');
