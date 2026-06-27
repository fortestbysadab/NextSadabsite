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
  async redirects() {
    return [
      // The /now page was merged into /about.
      { source: "/now", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
