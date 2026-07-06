"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import type { BlogPostMeta } from "@/lib/posts";

export default function BlogContent({ posts }: { posts: BlogPostMeta[] }) {
  const { t } = useLanguage();

  return (
    <div className="container-page py-24 md:py-32">
      <PageHeader title={t.blog.title} description={t.blog.description} />

      <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group flex flex-col overflow-hidden rounded-3xl border border-stone bg-white shadow-soft transition-all duration-500 ease-organic hover:-translate-y-2 hover:shadow-large ${
              i % 2 === 1 ? "lg:translate-y-12" : ""
            }`}
          >
            {post.coverImage && (
              <div className="relative aspect-[512/279] w-full overflow-hidden bg-clay-soft">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={512}
                  height={279}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col gap-3 p-8">
              <div className="flex items-center gap-3">
                <span className="text-caption uppercase tracking-widest text-forest-mute">
                  {formatDate(post.date)}
                </span>
                {post.isNew && (
                  <span className="inline-flex items-center rounded-full border border-sage bg-success-soft px-3 py-0.5 text-caption uppercase tracking-widest text-sage-deep">
                    {t.blog.newLabel}
                  </span>
                )}
              </div>
              <h2 className="font-serif text-display-sm text-forest">
                {post.title}
              </h2>
              <p className="text-body-sm text-forest-soft">{post.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold uppercase tracking-widest text-sage-deep transition-colors group-hover:text-terracotta">
                {t.home.readMore}
                <ArrowRight
                  strokeWidth={1.5}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
