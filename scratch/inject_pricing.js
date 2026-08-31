const fs = require('fs');

let file = fs.readFileSync('app/services/marketing/page.js', 'utf8');

// Add import
const importStr = 'import MarketingPricing from "@/components/MarketingPricing";\n';
if (!file.includes('MarketingPricing')) {
    const importIdx = file.indexOf('import Link from "next/link";');
    file = file.slice(0, importIdx) + importStr + file.slice(importIdx);
}

// Find insertion point
// Look for `</section>` after `reports-grid` for "Our Marketing Services".
// The exact string to search for is:
//             @media (max-width: 640px)  { .mkt-card-grid { grid-template-columns: 1fr !important; } }
//           `}</style>
//         </section>
const anchorStr = '@media (max-width: 640px)  { .mkt-card-grid { grid-template-columns: 1fr !important; } }\n          `}</style>\n        </section>';

const anchorIdx = file.indexOf(anchorStr);

if (anchorIdx === -1) {
    console.error("Could not find the anchor string");
} else {
    const insertIdx = anchorIdx + anchorStr.length;
    file = file.slice(0, insertIdx) + '\n\n        <MarketingPricing />' + file.slice(insertIdx);
    fs.writeFileSync('app/services/marketing/page.js', file);
    console.log("Successfully injected MarketingPricing");
}
