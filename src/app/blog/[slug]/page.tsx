import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { site } from "@/lib/site";
import MdxContent from "@/components/MdxContent";

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
    image: post.coverImage
      ? `${site.url}${post.coverImage}`
      : `${site.url}/assets/images/og-image.png`,
    datePublished: post.date,
    dateModified: post.modified,
    author: { "@type": "Person", name: site.author },
  };

  return (
    <div className="container-page py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article>
        {/* Text column — centered, readable width */}
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-forest-soft transition-colors hover:text-terracotta"
          >
            ← All writing
          </Link>

          <header className="mt-8 flex flex-col gap-5 border-b border-stone pb-10">
            <p className="text-caption uppercase tracking-widest text-forest-mute">
              {formatDate(post.date)} · {post.readingTime}
            </p>
            <h1 className="headline-serif text-5xl md:text-6xl">
              {post.title}
            </h1>
          </header>
        </div>

        {/* Cover image — full width, softly rounded */}
        {post.coverImage && (
          <div className="mt-12 overflow-hidden rounded-[40px] border border-stone bg-clay-soft shadow-large">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1400}
              height={762}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/* Body — centered, readable column width */}
        <div className="mx-auto mt-12 max-w-2xl">
          <MdxContent source={post.content} />

          <hr className="my-16 border-0 border-t border-stone" />

          <p className="text-body-md text-forest-soft">
            Thanks for reading. If this resonated with you, I&apos;d love to hear
            about what you&apos;re building.{" "}
            <Link href="/contact" className="link-inline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
