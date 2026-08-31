const fs = require('fs');

let file = fs.readFileSync('app/services/web-development/page.js', 'utf8');

file = file.replace(
    /\.report-card {\s*background: #ffffff;\s*border: 1px solid #e2e8f0;/g,
    `.report-card {
              background: rgba(255,255,255,0.03);
              border: 1px solid rgba(255,255,255,0.1);`
);

file = file.replace(
    /\.card-title {\s*font-size: 20px;\s*font-weight: 700;\s*color: #0f172a;/g,
    `.card-title {
              font-size: 20px;
              font-weight: 700;
              color: #ffffff;`
);

file = file.replace(
    /\.btn-details {\s*background: #ffffff;\s*color: #475569;\s*border: 1px solid #d1d5db;\s*}/g,
    `.btn-details {
              background: rgba(255,255,255,0.05);
              color: #cbd5e1;
              border: 1px solid rgba(255,255,255,0.1);
            }`
);

file = file.replace(
    /\.btn-details:hover {\s*background: #f8fafc;\s*border-color: #9ca3af;\s*color: #1e293b;\s*}/g,
    `.btn-details:hover {
              background: rgba(255,255,255,0.1);
              border-color: rgba(255,255,255,0.2);
              color: #ffffff;
            }`
);

file = file.replace(
    /\.btn-preview {\s*background: #ffffff;\s*color: #475569;\s*border: 1px solid #d1d5db;\s*}/g,
    `.btn-preview {
              background: rgba(255,255,255,0.05);
              color: #cbd5e1;
              border: 1px solid rgba(255,255,255,0.1);
            }`
);

file = file.replace(
    /\.btn-preview:hover {\s*background: #f8fafc;\s*border-color: #9ca3af;\s*color: #1e293b;\s*}/g,
    `.btn-preview:hover {
              background: rgba(255,255,255,0.1);
              border-color: rgba(255,255,255,0.2);
              color: #ffffff;
            }`
);

// We should also change the border of dashboard-mockup to match dark theme better. 
// It's currently background: #0f172a. That works well on dark theme actually.

fs.writeFileSync('app/services/web-development/page.js', file);
console.log('Fixed CSS.');
