const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com").replace(/\/$/, "");

/**
 * Bump this date whenever page content actually changes — search engines use
 * <lastmod> to schedule recrawls. (It was `new Date()` before, which rewrote
 * every <lastmod> on every deploy and made the signal meaningless.)
 */
const LAST_UPDATED = "2026-09-24";

export default function sitemap() {
  const d = (date) => new Date(`${date}T09:00:00+05:30`);

  // Priority guide: 1.0 homepage, 0.9 services hub, 0.8 service pages, 0.7 secondary, 0.3 legal
  const routes = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/web-development`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/services/mobile-apps`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/services/ai-automation`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/services/saas`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/services/blockchain`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/marketing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/security`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/student`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/product`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/product/cash-point`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/languages`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/why-us`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/how-we-work`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((r) => ({ ...r, lastModified: d(LAST_UPDATED) }));
}
