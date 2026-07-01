"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import type { BlogPostMeta } from "@/lib/posts";

export default function BlogContent({ posts }: { posts: BlogPostMeta[] }) {
  const { t } = useLanguage();

  return (
    <div className="container-page py-4xl md:py-5xl">
      <PageHeader title={t.blog.title} description={t.blog.description} />

      <div className="mt-2xl grid gap-lg md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-marketing group flex flex-col gap-sm !p-0 overflow-hidden"
          >
            {post.coverImage && (
              <div className="relative aspect-[512/279] w-full overflow-hidden bg-canvas-soft-2">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={512}
                  height={279}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col gap-sm p-lg">
              <div className="flex items-center gap-sm">
                <span className="font-mono text-caption text-mute">
                  {formatDate(post.date)}
                </span>
                {post.isNew && (
                  <span className="inline-flex items-center rounded-full bg-link-bg-soft px-xs py-px font-mono text-caption text-link-deep">
                    {t.blog.newLabel}
                  </span>
                )}
              </div>
              <h2 className="text-display-sm text-ink">{post.title}</h2>
              <p className="text-body-sm text-body">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
