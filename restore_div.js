const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'SecurityPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

// The chunk we want to replace starts with:
// {/* Feature Stat Blocks */}
// And goes until the <line x1="6" y1="6"
// Let's just find the feature stat blocks comment and replace carefully.
const commentIndex = content.indexOf('{/* Feature Stat Blocks */}');
if (commentIndex === -1) {
  console.log("Could not find Feature Stat Blocks");
  process.exit(1);
}

const lineIndex = content.indexOf('<line x1="6" y1="6" x2="6.01" y2="6" />', commentIndex);

const replaceStr = `{/* Feature Stat Blocks */}
            <div className="sec-cm-stats-grid">
              <div className="sec-cm-stat-card">
                <div className="sec-cm-stat-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f04e23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    `;

content = content.substring(0, commentIndex) + replaceStr + content.substring(lineIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Restored the missing div properly.');
