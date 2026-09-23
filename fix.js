const fs = require('fs');
const file = 'd:/Office Projects/restore_div/app/services/web-development/page.js';
const lines = fs.readFileSync(file, 'utf8').split('\n');

const dupStart = lines.findIndex((l, i) => i > 400 && l.includes('<div className="mock-browser-bar"'));
const page6End = lines.findIndex((l, i) => i > dupStart && l.includes('OneNine Labs Engine Pod')) + 3;

if (dupStart !== -1 && page6End !== -1) {
  lines.splice(dupStart, page6End - dupStart + 1);
  fs.writeFileSync(file, lines.join('\n'));
  console.log('Fixed file by removing ' + (page6End - dupStart + 1) + ' lines starting at ' + dupStart);
} else {
  console.log('Could not find duplicate block bounds');
}
