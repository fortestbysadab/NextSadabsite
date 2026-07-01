"use client";

import Link from "next/link";
import MeshHero from "@/components/MeshHero";
import { formatDateLong } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import type { BlogPostMeta } from "@/lib/posts";

export default function HomeContent({ posts }: { posts: BlogPostMeta[] }) {
  const { t } = useLanguage();
  const mood = t.home.moods[new Date().getDate() % t.home.moods.length];

  const [heroLine1, heroLine2] = t.home.heroTitle.split("\n");

  return (
    <>
      {/* Hero */}
      <MeshHero>
        <div className="flex max-w-3xl flex-col gap-lg">
          <h1 className="text-display-lg text-ink md:text-display-xl">
            {heroLine1}
            <br className="sm:hidden" />
            {heroLine2}
          </h1>
          <p className="max-w-prose text-body-lg text-body">{t.home.heroBody}</p>
          <div className="mt-xs flex flex-wrap gap-sm">
            <Link href="/projects" className="btn-primary">
              {t.home.ctaBuild}
            </Link>
            <Link href="/blog" className="btn-secondary">
              {t.home.ctaBlog}
            </Link>
          </div>
        </div>
      </MeshHero>

      {/* Intro + mood */}
      <section className="container-page py-4xl">
        <div className="grid gap-2xl lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-doc max-w-prose">
            <p>{t.home.introBody}</p>
          </div>

          <aside className="card-marketing self-start">
            <p className="eyebrow mb-sm">{t.home.todayNote}</p>
            <p className="font-mono text-code text-body">{mood}</p>
          </aside>
        </div>
      </section>

      {/* Recent writing */}
      <section className="border-t border-hairline bg-canvas-soft">
        <div className="container-page py-4xl">
          <div className="mb-xl flex items-baseline justify-between">
            <h2 className="text-display-md text-ink">{t.home.recentTitle}</h2>
            <Link
              href="/blog"
              className="text-body-sm font-medium text-link transition-colors hover:text-link-deep"
            >
              {t.home.allWriting}
            </Link>
          </div>

          <div className="grid gap-lg md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-marketing group flex flex-col gap-sm"
              >
                <p className="font-mono text-caption text-mute">
                  {formatDateLong(post.date)}
                </p>
                <h3 className="text-display-sm text-ink">{post.title}</h3>
                <p className="text-body-sm text-body">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-xs text-body-sm font-medium text-link transition-all group-hover:gap-2">
                  {t.home.readMore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="container-page py-4xl">
        <div className="flex flex-col items-center gap-md text-center">
          <p className="signature-shine text-display-md italic">{t.home.signature}</p>
          <p className="eyebrow">{t.home.tagline}</p>
        </div>
      </section>
    </>
  );
}
