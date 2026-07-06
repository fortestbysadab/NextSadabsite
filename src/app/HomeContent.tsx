"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
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
      {/* ───────── Botanical hero ───────── */}
      <MeshHero>
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          {/* Left: headline */}
          <div className="flex max-w-2xl flex-col gap-8">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-stone bg-white/60 px-4 py-1.5 text-caption uppercase tracking-widest text-sage-deep">
              <Leaf strokeWidth={1.5} className="h-3.5 w-3.5" />
              {t.home.tagline}
            </span>

            <h1 className="headline-serif text-5xl leading-[1.05] md:text-7xl">
              {heroLine1}
              <br className="sm:hidden" />
              <span className="italic-accent"> {heroLine2}</span>
            </h1>

            <p className="max-w-prose text-body-lg text-forest-soft">
              {t.home.heroBody}
            </p>

            <div className="mt-2 flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                {t.home.ctaBuild}
              </Link>
              <Link href="/blog" className="btn-secondary">
                {t.home.ctaBlog}
              </Link>
            </div>
          </div>

          {/* Right: arched portrait */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[40px] rounded-t-full bg-clay/50"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[40px] border border-stone bg-clay-soft shadow-large md:aspect-[4/5]">
              <Image
                src="/assets/images/sadab-portrait.jpg"
                alt={t.home.signature}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover transition-transform duration-700 ease-organic hover:scale-105"
              />
            </div>
          </div>
        </div>
      </MeshHero>

      {/* ───────── Intro + today's note ───────── */}
      <section className="border-t border-stone">
        <div className="container-page py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="prose-doc max-w-prose">
              <p className="font-serif text-display-sm text-forest">
                {t.home.introBody}
              </p>
            </div>

            <aside className="rounded-3xl border border-stone bg-clay-soft p-8 shadow-soft">
              <p className="eyebrow mb-4 flex items-center gap-2">
                <Leaf strokeWidth={1.5} className="h-3.5 w-3.5 text-sage" />
                {t.home.todayNote}
              </p>
              <p className="font-serif text-display-sm italic text-forest">
                {mood}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────── Recent writing (staggered grid) ───────── */}
      <section className="border-t border-stone bg-clay-soft/60">
        <div className="container-page py-24 md:py-32">
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="headline-serif text-4xl md:text-5xl">
              {t.home.recentTitle}
            </h2>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sage-deep transition-colors hover:text-terracotta"
            >
              {t.home.allWriting}
              <ArrowRight
                strokeWidth={1.5}
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-stone bg-white shadow-soft transition-all duration-500 ease-organic hover:-translate-y-2 hover:shadow-large ${
                  i % 2 === 1 ? "md:translate-y-12" : ""
                }`}
              >
                {post.coverImage && (
                  <div className="relative aspect-[512/279] w-full overflow-hidden bg-clay-soft">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={512}
                      height={279}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <p className="text-caption uppercase tracking-widest text-forest-mute">
                    {formatDateLong(post.date)}
                  </p>
                  <h3 className="font-serif text-xl sm:text-display-sm text-forest">
                    {post.title}
                  </h3>
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
      </section>

      {/* ───────── Signature ───────── */}
      <section className="border-t border-stone">
        <div className="container-page py-24 text-center md:py-32">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
            <Leaf strokeWidth={1.5} className="h-6 w-6 text-sage" />
            <p className="signature-shine font-serif text-5xl italic md:text-6xl">
              {t.home.signature}
            </p>
            <p className="eyebrow">{t.home.tagline}</p>
          </div>
        </div>
      </section>
    </>
  );
}
