import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { graph, ids, breadcrumbSchema } from "@/lib/schema";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about what I build, what I break, and what I learn along the way.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  // Blog + itemList: lets AI enumerate the full body of writing in one pass.
  const blogSchema = graph(
    {
      "@type": "Blog",
      "@id": `${site.url}/blog#blog`,
      url: `${site.url}/blog`,
      name: `${site.name} — Writing`,
      description:
        "Essays on attention, systems, craft, and working with AI, by Sadab Munshi.",
      inLanguage: "en",
      isPartOf: { "@id": ids.website },
      author: { "@id": ids.person },
      publisher: { "@id": ids.person },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        "@id": `${site.url}/blog/${p.slug}#article`,
        headline: p.title,
        description: p.description || p.excerpt,
        url: `${site.url}/blog/${p.slug}`,
        datePublished: p.date,
        dateModified: p.modified,
        author: { "@id": ids.person },
      })),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogContent posts={posts} />
    </>
  );
}
