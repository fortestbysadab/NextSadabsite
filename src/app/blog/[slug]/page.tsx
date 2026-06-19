import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { site } from "@/lib/site";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };

  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description || post.excerpt,
      url,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [site.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    url: `${site.url}/blog/${post.slug}`,
    image: `${site.url}/assets/images/og-image.png`,
    datePublished: post.date,
    dateModified: post.modified,
    author: { "@type": "Person", name: site.author },
  };

  return (
    <div className="container-page max-w-content py-4xl md:py-5xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-body-sm text-body transition-colors hover:text-ink"
      >
        ← All writing
      </Link>

      <article className="mt-xl">
        <header className="flex flex-col gap-md border-b border-hairline pb-xl">
          <p className="font-mono text-caption text-mute">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="text-display-lg text-ink md:text-display-xl">
            {post.title}
          </h1>
        </header>

        <div
          className="prose-doc mt-2xl"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <hr className="my-3xl border-0 border-t border-hairline" />

        <p className="text-body-md text-body">
          Thanks for reading. If this resonated with you, I&apos;d love to hear
          about what you&apos;re building.{" "}
          <Link href="/contact" className="link-inline">
            Get in touch
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
