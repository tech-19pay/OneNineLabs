export default function robots() {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com").replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // NOTE: /_next/static/ (CSS, JS, images emitted by the build) must stay
        // crawlable — crawlers need it to render pages. Only internal
        // endpoints are disallowed. ("Disallow: /_next/" used to block CSS/JS
        // for every crawler that is not Googlebot/Bingbot.)
        disallow: ["/api/", "/_next/data/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
