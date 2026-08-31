const fs = require('fs');

const file = fs.readFileSync('app/services/web-development/page.js', 'utf8');
const lines = file.split('\n');

const startIdx = lines.findIndex(l => l.includes('{/* ─── 2b. FULL-STACK ARCHITECTURE EXPLORER SECTION (MATCHES RESULTS/OUTCOMES CARD THEME) ─── */}'));
const endIdx = lines.findIndex(l => l.includes('{/* ─── 2c. CORE WEB VITALS & LIGHTHOUSE PERFORMANCE SHOWCASE ─── */}'));

if (startIdx !== -1 && endIdx !== -1) {
    const before = lines.slice(0, startIdx).join('\n');
    const after = lines.slice(endIdx).join('\n');
    
    // Add import statement at the top (after other imports)
    let finalBefore = before;
    if (!finalBefore.includes('WebDevStackZigzag')) {
        finalBefore = finalBefore.replace('import WebDevMoreSections from "@/components/WebDevMoreSections";', 'import WebDevMoreSections from "@/components/WebDevMoreSections";\nimport WebDevStackZigzag from "@/components/WebDevStackZigzag";');
    }
    
    fs.writeFileSync('app/services/web-development/page.js', finalBefore + '\n        <WebDevStackZigzag />\n\n        ' + after);
    console.log('Successfully replaced web dev stack section.');
} else {
    console.error('Could not find start or end indices.');
}
