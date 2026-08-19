const fs = require('fs');
let content = fs.readFileSync('app/services/ai-automation/page.js', 'utf8');

content = content.replace('<Footer />', '      </div>\n\n      <Footer />');

fs.writeFileSync('app/services/ai-automation/page.js', content, 'utf8');
console.log("Successfully fixed closing div!");
