import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Normal crawlers: pages stay fully indexable.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/contact", "/watching", "/api/"],
      },
      // Image crawlers: personal photos must not surface in image search.
      // Pages themselves remain indexable — only the imagery is withheld.
      { userAgent: "Googlebot-Image", disallow: "/" },
      { userAgent: "msnbot-media", disallow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
