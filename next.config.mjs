/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ["172.20.10.4", "192.168.1.6", "localhost"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://snap.licdn.com https://www.clarity.ms;
      style-src 'self' 'unsafe-inline' https://*.tawk.to https://fonts.googleapis.com;
      style-src-elem 'self' 'unsafe-inline' https://*.tawk.to https://fonts.googleapis.com;
      img-src 'self' blob: data: https:;
      font-src 'self' data: https://*.tawk.to https://fonts.gstatic.com;
      connect-src 'self' https://*.tawk.to wss://*.tawk.to https://www.google-analytics.com https://*.google-analytics.com https://*.clarity.ms https://px.ads.linkedin.com https://www.facebook.com;
      frame-src 'self' https://*.tawk.to https://*.tawk.link https://www.googletagmanager.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },
        ],
      },
      {
        source: "/:path*.(png|jpg|jpeg|webp|avif|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
      {
        // Brand + social assets are immutable between releases — let CDNs and
        // browsers cache them hard (they were revalidated on every visit).
        // Declared AFTER the generic image rule so it wins.
        source: "/(og|icons)/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www -> apex. NOTE: add a `www` CNAME at the DNS/Cloudflare level too —
      // www.oneninelabs.com currently has NO DNS record (NXDOMAIN), so requests
      // never reach this app. The redirect covers the moment DNS is added.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.oneninelabs.com" }],
        destination: "https://oneninelabs.com/:path*",
        permanent: true,
      },
      // trailing-slash normalisation
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
