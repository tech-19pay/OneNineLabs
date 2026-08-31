const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'HomePageClient.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace web mockup
content = content.replace(/<div className="mockup-container mockup-web">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<img src="/services/new_web_mockup.jpg" alt="Web Development Mockup" className="mockup-scroll-image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />\n                      </div>`);

// Replace ai mockup
content = content.replace(/<div className="mockup-container mockup-ai">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<img src="/services/new_ai_mockup.jpg" alt="AI Mockup" className="mockup-scroll-image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />\n                      </div>`);

// Replace mobile mockup
content = content.replace(/<div className="mockup-container mockup-mobile">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<img src="/services/new_mobile_mockup.jpg" alt="Mobile Mockup" className="mockup-scroll-image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />\n                      </div>`);

// Replace crypto mockup
content = content.replace(/<div className="mockup-container mockup-crypto">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<img src="/services/new_blockchain_mockup.jpg" alt="Blockchain Mockup" className="mockup-scroll-image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />\n                      </div>`);

// Replace dashboard (software) mockup
content = content.replace(/<div className="mockup-container mockup-dashboard">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<img src="/services/new_software_mockup.jpg" alt="Software Mockup" className="mockup-scroll-image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />\n                      </div>`);

// Replace marketing mockup
content = content.replace(/<div className="mockup-container mockup-marketing">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<img src="/services/new_marketing_mockup.jpg" alt="Marketing Mockup" className="mockup-scroll-image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />\n                      </div>`);

fs.writeFileSync(filePath, content);
console.log('HomePageClient updated successfully with new images.');
