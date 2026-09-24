# Schema / hreflang / Open Graph / Marketing-Tech Audit — OneNineLabs
**Domain:** `https://oneninelabs.com` · **Date:** 2026-09-24 · **Branch:** `arena/01a0d1d8-oneninelabs`
**Method:** production build (`next build`, 21 routes) → parsed the *emitted HTML* of every route (`<title>`, meta, canonical, hreflang, OG, Twitter, icons, JSON-LD), validated JSON-LD against schema.org + Google rich-result guidelines, cross-checked FAQ schema vs visible page text, probed every referenced asset, and DNS-checked the domain. Live HTTP from outside the sandbox was not reachable (egress-filtered), so ranking checks (GSC/PSI/Rich Results) remain for you to run post-deploy.

---

## 1. Scorecard — before → after this pass

| Area | Before | After |
|---|---|---|
| Canonical correctness | **3 indexable pages canonicalised to the homepage** (`/about`, `/product`, `/product/cash-point`) + `/404` | ✅ every page self-canonical |
| Hreflang | inconsistent sets (4 vs 5 tags), `hi-IN` + `en-GB` pointing at English-only URLs (invalid) | ✅ uniform `en-US / en / x-default` on all 21 routes |
| Open Graph | 12/21 pages missing `og:locale` / `og:site_name`; 14 missing `twitter:site`; **all OG images declared 1200×630 but files were 1024×1024 JPEGs renamed `.png`** (500 KB–1 MB each) | ✅ complete OG+Twitter everywhere; **9 real 1200×630 branded JPEG cards (41–78 KB)** in `/public/og/` |
| Favicon / PWA | **`/favicon.ico` 404 on every page (60 references)**; manifest pointed at it too; no apple-touch-icon | ✅ favicon.ico (16/32/48), icon.svg, 192/512/maskable PNGs, apple-touch-icon 180, valid manifest |
| Structured data | duplicate conflicting `Organization` entities (`/contact`, `/about`), dead `sameAs` (github.com/oneninelabs = 404), fake `Person` founder, `TollFree` claim on a mobile number, **`SearchAction` to a search that doesn't exist**, zero-price `Offer`s, `/product*` pages with **no schema at all** | ✅ single `@id`-anchored entity graph; `ContactPage`, `Product/SoftwareApplication`, `ItemList`, `BreadcrumbList` wired; bogus claims removed |
| FAQ schema vs visible text | `/contact` 0/5 match, `/services/saas` 0/6, `/services/security` 1/6, `/` 5/9 (**guideline violation → rich-result loss / manual-action risk**) | ✅ **100% match on all 10 FAQ pages**, single-sourced in `lib/faqs.js` so they can't drift |
| Titles / descriptions | 6 titles 62–83 chars, 5 descriptions 163–202 chars, 2 titles <40 | ✅ all 21 routes: title 28–59, description 70–160 |
| H1 hygiene | `/contact` **two H1s**; 3 H1s with missing spaces ("FROM CONCEPT TOPRODUCTION SCALE.", "Mobile Appsfor iOS & Android", "Tell us about yourproject"); `/services` H1 grammatically broken | ✅ one H1 per page, spacing fixed, keyword-rich `/services` + `/about` H1s |
| Sitemap / robots | `/product`, `/product/cash-point` missing; `lastmod` = `new Date()` every build; **`Disallow: /_next/` blocked CSS/JS** for all non-Google crawlers | ✅ 19 URLs, stable `lastmod`, static assets crawlable |
| Marketing tech | **no analytics of any kind** (no GA4/GTM/Meta/LinkedIn/Clarity) on a site that sells GA4 & GTM; no cache headers on images; no www redirect | ✅ env-driven `components/Analytics.js` (GA4, GTM, Meta Pixel, LinkedIn Insight, Clarity), immutable cache for brand/OG assets, www→apex + trailing-slash 308s, CSP extended for the tags |
| DNS | **`www.oneninelabs.com` = NXDOMAIN** (verified) | ⚠️ redirect ready in `next.config.mjs`, **DNS record still needs adding at Cloudflare** |

---

## 2. Critical findings fixed (code)

1. **Homepage canonical leak #2** — `/about`, `/product`, `/product/cash-point` had no `alternates`, so they inherited the root layout's `canonical: "/"`. Fixed: root layout now uses `alternatesFor("/")` from `lib/seo.js`, `/about` gets metadata via new `app/about/layout.js` (the page is `"use client"` and cannot export metadata), `/product*` got full metadata + schema.
2. **Favicon 404 site-wide** — generated a real icon set from `app/icon.svg` (brand-blue rounded square + white mark): `favicon.ico`, `apple-touch-icon.png`, `icons/icon-192/512/maskable-512.png`, `logo-square-512.png` (also now the schema `Organization.logo` instead of a marketing banner).
3. **Mis-declared OG images** — every `og:image` said 1200×630 while the files were square 1024×1024 JPEGs mislabelled `.png` (Facebook/LinkedIn/Twitter crop or reject). Generated 9 proper 1200×630 cards in `public/og/*.jpg` (blurred brand backdrop + artwork + white wordmark) and repointed every page, `twitter:image` included.
4. **FAQ schema ≠ visible content** — Google requires FAQ markup to mirror on-page text. `/contact`, `/services/saas`, `/services/security` published entirely different (or invisible) Q&As. Now single-sourced: `lib/faqs.js` feeds both the visible `<details>` accordions and the JSON-LD; home page questions aligned verbatim.
5. **Duplicate/conflicting Organization entities** — `/contact` declared a second Organization (with dead `github.com/oneninelabs` sameAs and a false `TollFree` contactOption); `/about`'s `AboutPage.mainEntity` declared a third. Now every page references the single `{ "@id": "…/#organization" }` node; `/contact` emits a proper `ContactPage`.
6. **Fake SearchAction** — `WebSite.potentialAction` advertised `/services?q={search_term_string}` but no search exists (and Google retired the sitelinks search box). Removed.
7. **Zero-price Offers** — `offers: {price:"0"}` on 7 Service schemas + 12 `SoftwareApplication`s implied free products. Removed (quote-based B2B pricing shouldn't fake a price).
8. **robots.txt blocked `/_next/`** for every crawler except Googlebot/Bingbot (AdsBot, social crawlers, Bing renderer couldn't fetch CSS/JS). Now only `/api/`, `/_next/data/`, `/private/` are disallowed; removed the deprecated Yandex `Host:` line.
9. **Sitemap** — added `/product` + `/product/cash-point` (19 URLs), replaced per-build `new Date()` lastmod with a bumpable `LAST_UPDATED` constant.
10. **H1 fixes** — `/contact` demoted its form headline to `<h2>` (CSS updated); space bugs fixed in `HowWeWorkClient`, `MobileAppsPageContent`, `contact/page.js`; `/services` H1 rewritten to "Professional Engineering Services for Web, Mobile, AI, SaaS & Web3 by OneNineLabs" (configurable `titlePowered` in `ServicesHero`); `/about` H1 "About Us" → "About OneNineLabs".
11. **Title/description lengths** — blockchain 83→52 / 202→144, mobile-apps 73→55 / 163→142, saas 72→53, security 72→51, ai-automation 62→55, student 63→54 / 189→141, how-we-work 168→144, contact 164→151, `/product` 27→58 / 86→140, cash-point 36→55 / 131→145, privacy 28→51, terms 30→59.
12. **Social profile consistency** — layout, contact schema and Footer now use the same verified set (`github.com/tech-19pay` = HTTP 200; `www.linkedin.com/company/oneninelabs`; `x.com/oneninelabs`); removed the 404 `github.com/oneninelabs`.
13. **Config hardening** — `next.config.mjs`: www→apex 308 + trailing-slash 308 redirects, immutable `Cache-Control` for `/og/` + `/icons/`, 7-day SWR for other images, CSP extended (`googletagmanager`, `google-analytics`, `connect.facebook.net`, `snap.licdn`, `clarity.ms`, Google Fonts) so the new tags and fonts aren't blocked.

---

## 3. Schema inventory per route (verified in built HTML)

| Route | JSON-LD types |
|---|---|
| every route | `Organization+ProfessionalService` (`@id #organization`), `WebSite` (`@id #website`) |
| `/` | + `BreadcrumbList`, `ItemList`(7 Services), `FAQPage`(9, visible) |
| `/services` | + `BreadcrumbList`, `ItemList`, `FAQPage`(8) |
| 7 service pages | + `BreadcrumbList`, `Service`(`@id …#service`, provider=`@id` org), `FAQPage`(6–8, visible) |
| `/services/student` | + `BreadcrumbList`, `EducationalOccupationalProgram`, `Service` |
| `/about` | + `BreadcrumbList`(`@id`), `AboutPage`→mainEntity `@id` org |
| `/contact` | + `BreadcrumbList`(`@id`), `ContactPage`(`@id`), `FAQPage`(5, visible) |
| `/how-we-work` | + `BreadcrumbList`, `HowTo`(7 steps) |
| `/languages` | + `BreadcrumbList`, `ItemList`(12 `SoftwareApplication`) |
| `/product` | + `BreadcrumbList`, `ItemList`(2 products) — **new** |
| `/product/cash-point` | + `BreadcrumbList`, `Product+SoftwareApplication`(`@id`) — **new** |
| `/privacy`, `/terms` | + `BreadcrumbList`, `WebPage` |
| `/why-us` | + `BreadcrumbList` |

No parse errors, exactly one Organization node per page, all `@id` anchors resolve.

---

## 4. Hreflang policy (read this)

The site has **one English edition**. Previously it advertised `hi-IN` (and on some pages `en-GB`) pointing at the same English URLs — Google treats that as a misconfigured set and may ignore hreflang entirely. Now every route emits exactly:

```
en-US → self · en → self · x-default → self
```

Keep `availableLanguage: ["en","hi"]` in the Organization `contactPoint` (that's about support languages and is correct). **If you ever ship real Hindi pages** (`/hi/…`), add `hi-IN` entries pointing at them in `lib/seo.js → alternatesFor()` — one place, all pages.

---

## 5. Marketing tech — what's live and what needs your IDs

`components/Analytics.js` is wired into the root layout and renders **nothing** until you set env vars (so builds stay clean). Add to Vercel/hosting env and redeploy:

| Env var | Tag | Why you want it |
|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager | preferred: manages everything server-side |
| `NEXT_PUBLIC_GA_ID` | GA4 (skipped automatically if GTM set) | funnel/conversion baseline |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel | retargeting for Meta/Insta ads |
| `NEXT_PUBLIC_LINKEDIN_INSIGHT_ID` | LinkedIn Insight | B2B retargeting + audience |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity | free heatmaps/session replay |

Also still outside the code (do these after deploy):
1. **DNS:** add a `www` CNAME → `@` (or Cloudflare "www" record). `www.oneninelabs.com` is currently **NXDOMAIN** — every typed-www visitor and www backlink is lost. The 308 is already configured.
2. **Search Console + Bing Webmaster:** verify, then submit `/sitemap.xml`; paste verification codes into `app/layout.js → metadata.verification`.
3. **Google Business Profile** (Lucknow) with NAP = `19@oneninelabs.com` / `+91 85888 07039` to activate the LocalBusiness signals already in the schema.
4. **Rich Results Test + PageSpeed** on the live domain (sandbox can't reach it): `https://search.google.com/test/rich-results` per template.
5. Consider replacing the 36 hotlinked **Unsplash** images (34 lack width/height; 9 avatar preloads hurt LCP; stock team photos weaken E-E-A-T) with `next/image` + owned assets.
6. Do **not** add `aggregateRating`/`Review` schema from your own testimonials — Google prohibits self-serving review markup on Organization/LocalBusiness.

---

## 6. Verification (all run against the production build in this repo)

```
21/21 routes: 1 <h1>, self-canonical, hreflang {en-US,en,x-default}, complete OG+Twitter
10/10 FAQ pages: schema questions 100% present in visible text
0 JSON-LD parse errors · 1 Organization node/page · @id graph intact
/favicon.ico /apple-touch-icon.png /icons/* /manifest.json /og/*.jpg → HTTP 200, correct MIME
/og/* & /icons/* → Cache-Control: public, max-age=31536000, immutable
Host: www.oneninelabs.com → 308 https://oneninelabs.com/… · /path/ → 308 /path
sitemap.xml: 19 URLs (products included) · robots.txt: static assets crawlable
```

Re-run the machine-readable audit anytime: `python3 scratch/seo/audit.py` (reads `.next/server/app/*.html`).
