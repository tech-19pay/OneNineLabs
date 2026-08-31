const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace orange accent with emerald green
content = content.replace(/#f04e23/g, '#10b981');

// Update phone widget backgrounds to emerald variants
content = content.replace(/background: #fff5f5;/g, 'background: #ecfdf5;');
content = content.replace(/border: 1\.5px solid #fed7aa;/g, 'border: 1.5px solid #6ee7b7;');
content = content.replace(/box-shadow: 0 2px 8px rgba\(240, 78, 35, 0\.15\);/g, 'box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);');

// Update invisible stat color
content = content.replace(/color: #edd5c5;/g, 'color: #0f172a;');

// Update dark mode white-alpha backgrounds to black-alpha (since section is now white)
content = content.replace(/rgba\(255, 255, 255, 0\.03\)/g, 'rgba(0, 0, 0, 0.03)');
content = content.replace(/rgba\(255, 255, 255, 0\.05\)/g, 'rgba(0, 0, 0, 0.05)');
content = content.replace(/rgba\(255, 255, 255, 0\.02\)/g, 'rgba(0, 0, 0, 0.02)');
content = content.replace(/rgba\(255, 255, 255, 0\.08\)/g, 'rgba(0, 0, 0, 0.04)'); // Soften the glass panels a bit for white bg

// Ensure sec-intel-section is white
const intelSecRegex = /(\.sec-intel-section\s*\{[^}]*)background:\s*#[0-9a-fA-F]+;([^}]*\})/;
content = content.replace(intelSecRegex, '$1background: #ffffff;$2');

const intelTitleRegex = /(\.sec-intel-title\s*\{[^}]*)color:\s*#[0-9a-fA-F]+;([^}]*\})/;
content = content.replace(intelTitleRegex, '$1color: #0f172a;$2');

// Fix text colors in sec-intel-section that might be white/light
content = content.replace(/color: #f8fafc;/g, 'color: #0f172a;');
content = content.replace(/color: #e2e8f0;/g, 'color: #334155;');
content = content.replace(/color: #cbd5e1;/g, 'color: #475569;');

// sec-pillars-section and sec-monitor-section are already white in CSS, but let's make sure
content = content.replace(/\.sec-intel-tag-good\s*\{([^}]*)color:\s*#10b981;([^}]*)\}/, '.sec-intel-tag-good {$1color: #10b981;$2}');
// We might need to change any hardcoded text colors in the JSX for sec-intel
// Let's replace any "text-white" or similar if they exist, but they likely use standard inline or classes.

// Save changes
fs.writeFileSync(filePath, content, 'utf8');
console.log('Sweeping style replacements completed successfully!');
