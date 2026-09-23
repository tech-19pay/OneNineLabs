const fs = require('fs');
const file = 'd:/Office Projects/restore_div/app/services/web-development/page.js';
const lines = fs.readFileSync(file, 'utf8').split('\n');

const dupStart = 535;
const dupEnd = 798; // index 798 is line 799, wait, let me just use exact match instead of hardcoding lines

const startIndex = lines.findIndex((l, i) => i > 500 && l.includes('<section id="capabilities"'));
const nextStartIndex = lines.findIndex((l, i) => i > startIndex && l.includes('<section id="capabilities"'));

if (startIndex !== -1 && nextStartIndex !== -1) {
  lines.splice(startIndex, nextStartIndex - startIndex);
  fs.writeFileSync(file, lines.join('\n'));
  console.log('Fixed file by removing ' + (nextStartIndex - startIndex) + ' lines starting at ' + startIndex);
} else {
  console.log('Could not find duplicate block bounds');
}
