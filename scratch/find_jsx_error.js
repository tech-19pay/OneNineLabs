const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../components/SaasPageContent.js');
const code = fs.readFileSync(filePath, 'utf8');

// Simple tag balance checker for JSX tags in the return block
const returnIndex = code.indexOf('return (');
const returnCode = code.substring(returnIndex);

const stack = [];
const tagRegex = /<\/?([a-zA-Z0-9.\-]+)[^>]*>/g;
let match;

let line = 1;
let lastIndex = 0;

while ((match = tagRegex.exec(returnCode)) !== null) {
  const fullTag = match[0];
  const tagName = match[1];

  // Calculate line number
  const textBefore = returnCode.substring(lastIndex, match.index);
  line += (textBefore.match(/\n/g) || []).length;
  lastIndex = match.index;

  // Ignore self-closing tags, comments, or doctype/style
  if (fullTag.endsWith('/>') || fullTag.startsWith('<!--') || tagName === 'style' || tagName === 'code' || tagName === 'span' || tagName === 'a' || tagName === 'p' || tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'h4' || tagName === 'h5' || tagName === 'h6' || tagName === 'img') {
    continue;
  }

  if (fullTag.startsWith('</')) {
    if (stack.length === 0) {
      console.log(`Unmatched closing tag </${tagName}> near line offset ${line}`);
    } else {
      const top = stack.pop();
      if (top.name !== tagName) {
        console.log(`Tag mismatch: expected </${top.name}> (opened at line offset ${top.line}), but found </${tagName}> near line offset ${line}`);
      }
    }
  } else {
    stack.push({ name: tagName, line });
  }
}

console.log("Unclosed tags remaining on stack:");
stack.forEach(item => console.log(` <${item.name}> opened near line offset ${item.line}`));
