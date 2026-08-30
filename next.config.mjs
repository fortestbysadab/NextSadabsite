/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow our own trusted SVG logo to be served via next/image.
    // Hardened with CSP so the SVG can't execute scripts.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        // Personal photos and other image assets: tell search engines not to
        // index the files themselves, even when reached by direct URL.
        source: "/assets/images/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noimageindex, max-image-preview:none",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noimageindex, max-image-preview:none",
          },
        ],
      },
      {
        // Next.js image optimizer output.
        source: "/_next/image",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noimageindex, max-image-preview:none",
          },
        ],
      },
      {
        // Machine-readable maps for AI agents — always served fresh-ish
        // and never cached as stale by intermediaries.
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The /now page was merged into /about.
      { source: "/now", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
