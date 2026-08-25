const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../components/SaasPageContent.js');
let content = fs.readFileSync(filePath, 'utf8');

const badChunk = `g-bottom: 0;
        }
        .saas-log-text {
          color: #f8fafc;
          font-weight: 500;
        }
        .saas-log-time {
          color: #64748b;
        }`;

if (content.includes(badChunk)) {
  content = content.replace(badChunk, '');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully removed bad chunk!");
} else {
  console.log("badChunk not found by exact string, fixing via regex...");
  const idx = content.lastIndexOf('g-bottom: 0;');
  if (idx !== -1) {
    const endIdx = content.indexOf('`}</style>', idx);
    if (endIdx !== -1) {
      content = content.substring(0, idx) + content.substring(endIdx);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log("Successfully trimmed corrupted trailing CSS!");
    }
  }
}
