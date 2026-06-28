import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PostHogProvider from "@/components/PostHogProvider";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.author }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [{ url: "/assets/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    creator: site.twitterHandle,
    title: site.name,
    description: site.description,
    images: ["/assets/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/assets/images/favicon.ico" },
      { url: "/assets/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/assets/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    sameAs: [
      site.social.github,
      site.social.linkedin,
      site.social.twitter,
      site.social.instagram,
    ],
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <PostHogProvider>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PostHogProvider>
        <Analytics />
      </body>
    </html>
  );
}
