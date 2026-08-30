import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { graph, ids } from "@/lib/schema";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const homeSchema = graph({
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: site.name,
  description: site.description,
  isPartOf: { "@id": ids.website },
  about: { "@id": ids.person },
});

export default function HomePage() {
  const recent = getAllPosts().slice(0, 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomeContent posts={recent} />
    </>
  );
}
