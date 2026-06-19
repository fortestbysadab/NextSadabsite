import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about what I build, what I break, and what I learn along the way.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container-page py-4xl md:py-5xl">
      <PageHeader
        eyebrow="// blog"
        title="Blog"
        description="Notes on paying attention. Published when clarity arrives."
      />

      <div className="mt-2xl grid gap-lg md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-marketing group flex flex-col gap-sm"
          >
            <div className="flex items-center gap-sm">
              <span className="font-mono text-caption text-mute">
                {formatDate(post.date)}
              </span>
              {i === 0 && (
                <span className="inline-flex items-center rounded-full bg-link-bg-soft px-xs py-px font-mono text-caption text-link-deep">
                  New
                </span>
              )}
            </div>
            <h2 className="text-display-sm text-ink">{post.title}</h2>
            <p className="text-body-sm text-body">{post.excerpt}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-xs text-body-sm font-medium text-link transition-all group-hover:gap-2">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
