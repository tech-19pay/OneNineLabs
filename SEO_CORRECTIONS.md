# OneNineLabs — SEO Corrections Applied

All pages were audited and corrected for **technical SEO, hreflang, and JSON-LD schema** to improve search-engine ranking. Verified by a clean production build (19 routes) and inspection of the emitted HTML.

## 1. Critical bug fixed — homepage canonical leak (`app/layout.js`)
The root layout injected a manual `<link rel="canonical" href="https://oneninelabs.com">` (plus `rel="alternate"` tags) into the `<head>` of **every** page. On every service/about/contact page this pointed the canonical at the homepage, **conflicting with each page's per-route canonical** — a severe ranking signal. Removed the manual tags so Next.js now emits the correct per-page canonical from `metadata.alternates`.

## 2. Hreflang — added `hi-IN` to every page
The site advertises Hindi support (Organization contactPoint `availableLanguage: ["en","hi"]`) but only had `en-US`, `en`, `x-default`. Added `hi-IN` to:
`/`, `/services`, all 7 service pages, `/about`, `/why-us`, `/languages`, `/contact`.

## 3. JSON-LD structured data added to all 7 service pages
These pages had **zero** schema markup. Added:
- **`BreadcrumbList`** — Home › Services › [Service]
- **`Service`** schema — name, serviceType, url, provider, areaServed, offers
- **`FAQPage`** — matched to visible FAQ content (added visible FAQ sections on 5 pages that had none: AI Automation, Blockchain, Mobile Apps, SaaS, Cybersecurity).

## 4. Services hub (`/services`)
Added `ItemList` of the 7 services and `FAQPage` schema (FAQ was visible but unmapped).

## 5. Missing PWA manifest created
`manifest.json` was referenced in the layout but the file did not exist — a 404 on every page. Created `public/manifest.json`.

## Verified output (production build)
- Per-page canonical correct on all routes (no homepage leak).
- `hi-IN` hreflang emitted on every page.
- `BreadcrumbList`, `Service`, `FAQPage`, `AboutPage`, `Organization`, `WebSite` schema present where applicable.
- All 19 routes prerender as static content.

## Still recommended (outside code)
- Google Business Profile (Lucknow) + submit `/sitemap.xml` in Google Search Console.
- Verify `oneninelabs.com` DNS and set `NEXT_PUBLIC_SITE_URL` / `DATABASEURL` env vars.
- Migrate `<img>` → `next/image` and add real `/privacy` & `/terms` pages for further gains.
