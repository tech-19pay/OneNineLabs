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
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to https://cdn.jsdelivr.net;
      style-src 'self' 'unsafe-inline' https://*.tawk.to;
      style-src-elem 'self' 'unsafe-inline' https://*.tawk.to;
      img-src 'self' blob: data: https:;
      font-src 'self' data: https://*.tawk.to;
      connect-src 'self' https://*.tawk.to wss://*.tawk.to;
      frame-src 'self' https://*.tawk.to https://*.tawk.link;
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
    ];
  },
  async redirects() {
    return [
      // SEO: non-www to www or canonical consistency if needed
      // Add more redirects as site grows
    ];
  },
};

export default nextConfig;
