const fs = require('fs');

let data;
try {
  data = fs.readFileSync('lint.json', 'utf16le').replace(/^\uFEFF/, '');
} catch(e) {
  console.log("No lint.json found");
  process.exit(1);
}

let parsed = [];
try {
  parsed = JSON.parse(data);
} catch(e) {
  try {
    parsed = JSON.parse(fs.readFileSync('lint.json', 'utf8'));
  } catch(err) {
    console.error("Failed to parse lint.json", err.message);
    process.exit(1);
  }
}

let fixedCount = 0;

parsed.forEach(file => {
  if (file.errorCount > 0) {
    const messages = file.messages.filter(m => m.ruleId === 'react/no-unescaped-entities');
    if (messages.length > 0) {
      let content = fs.readFileSync(file.filePath, 'utf8');
      let lines = content.split('\n');
      
      // Sort messages descending by line and column so we don't mess up indices
      messages.sort((a,b) => b.line - a.line || b.column - a.column).forEach(m => {
        let lineIdx = m.line - 1;
        let line = lines[lineIdx];
        if (!line) return;
        let col = m.column - 1;
        let char = line[col];
        
        if (char === "'") {
          lines[lineIdx] = line.slice(0, col) + '&apos;' + line.slice(col+1);
        } else if (char === '"') {
          lines[lineIdx] = line.slice(0, col) + '&quot;' + line.slice(col+1);
        } else {
          // Sometimes it points before or after, just do a basic replace of the first quote after the column
          const text = line.substring(col);
          if (text.startsWith("'")) {
            lines[lineIdx] = line.substring(0, col) + '&apos;' + text.substring(1);
          } else if (text.startsWith('"')) {
            lines[lineIdx] = line.substring(0, col) + '&quot;' + text.substring(1);
          }
        }
      });
      
      fs.writeFileSync(file.filePath, lines.join('\n'));
      console.log('Fixed ' + file.filePath);
      fixedCount++;
    }
  }
});

console.log('Total files fixed:', fixedCount);
