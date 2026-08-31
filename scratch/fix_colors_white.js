const fs = require('fs');

let file = fs.readFileSync('app/services/web-development/page.js', 'utf8');

// Revert section background and text
file = file.replace(
    /background: "#091612",/g,
    `background: "#ffffff",`
);
file = file.replace(
    /color: "#ff5a1f",\s*display: "block",\s*marginBottom: "12px"/g,
    `color: "#ff5a1f",\n              display: "block",\n              marginBottom: "12px"`
); // Keep orange for capabilities tag
file = file.replace(
    /color: "#ffffff",\s*lineHeight: "1.1",\s*letterSpacing: "-1px",\s*margin: "0 0 12px 0"/g,
    `color: "#0f172a",\n              lineHeight: "1.1",\n              letterSpacing: "-1px",\n              margin: "0 0 12px 0"`
);
file = file.replace(
    /color: "#cbd5e1", fontSize: "16px", fontWeight: "600", margin: 0/g,
    `color: "#475569", fontSize: "16px", fontWeight: "600", margin: 0`
);

// Revert CSS for cards
file = file.replace(
    /\.report-card {\s*background: rgba\(255,255,255,0\.03\);\s*border: 1px solid rgba\(255,255,255,0\.1\);/g,
    `.report-card {\n              background: #ffffff;\n              border: 1px solid #e2e8f0;`
);

file = file.replace(
    /\.card-title {\s*font-size: 20px;\s*font-weight: 700;\s*color: #ffffff;/g,
    `.card-title {\n              font-size: 20px;\n              font-weight: 700;\n              color: #0f172a;`
);

file = file.replace(
    /\.btn-details {\s*background: rgba\(255,255,255,0\.05\);\s*color: #cbd5e1;\s*border: 1px solid rgba\(255,255,255,0\.1\);\s*}/g,
    `.btn-details {\n              background: #ffffff;\n              color: #475569;\n              border: 1px solid #d1d5db;\n            }`
);

file = file.replace(
    /\.btn-details:hover {\s*background: rgba\(255,255,255,0\.1\);\s*border-color: rgba\(255,255,255,0\.2\);\s*color: #ffffff;\s*}/g,
    `.btn-details:hover {\n              background: #f8fafc;\n              border-color: #9ca3af;\n              color: #1e293b;\n            }`
);

file = file.replace(
    /\.btn-preview {\s*background: rgba\(255,255,255,0\.05\);\s*color: #cbd5e1;\s*border: 1px solid rgba\(255,255,255,0\.1\);\s*}/g,
    `.btn-preview {\n              background: #ffffff;\n              color: #475569;\n              border: 1px solid #d1d5db;\n            }`
);

file = file.replace(
    /\.btn-preview:hover {\s*background: rgba\(255,255,255,0\.1\);\s*border-color: rgba\(255,255,255,0\.2\);\s*color: #ffffff;\s*}/g,
    `.btn-preview:hover {\n              background: #f8fafc;\n              border-color: #9ca3af;\n              color: #1e293b;\n            }`
);

fs.writeFileSync('app/services/web-development/page.js', file);
console.log('Reverted CSS to white theme.');
