"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  // Press-and-hold colour reveal on touch devices.
  // CSS :active is unreliable on some Android browsers, so the state is
  // toggled explicitly; desktop keeps the pure CSS hover: variant.
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <PageHeader title={t.about.title} />

        {/* Portrait (arched) + intro */}
        <div className="mt-16 flex flex-col items-start gap-10 sm:flex-row sm:items-center">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-2 translate-y-2 rounded-t-full rounded-b-[28px] bg-clay/50"
            />
            <div
              onTouchStart={() => setIsPressed(true)}
              onTouchEnd={() => setIsPressed(false)}
              onTouchCancel={() => setIsPressed(false)}
              className="group relative h-40 w-32 overflow-hidden rounded-t-full rounded-b-[28px] border border-stone bg-clay-soft shadow-medium"
            >
              <Image
                src="/assets/images/about-s-m.webp"
                alt={t.about.title}
                fill
                priority
                sizes="128px"
                draggable={false}
                className={`select-none object-cover transition-[filter,transform] duration-700 ease-organic group-hover:scale-105 hover:grayscale-0 group-hover:grayscale-0 ${
                  isPressed ? "grayscale-0" : "grayscale"
                }`}
              />
            </div>
          </div>
          <article className="prose-doc">
            <p className="font-serif text-display-sm text-forest">
              {t.about.intro}
            </p>
          </article>
        </div>

        <article className="prose-doc mt-10">
          <p>{t.about.body}</p>
        </article>

        {/* Now */}
        <section className="mt-20">
          <h2 className="headline-serif flex items-center gap-3 text-4xl">
            <Leaf strokeWidth={1.5} className="h-6 w-6 text-sage" />
            {t.about.nowTitle}
          </h2>
          <p className="mt-4 text-body-md text-forest-soft">
            {t.about.nowSubtitle}
          </p>

          <div className="mt-8 rounded-3xl border border-stone bg-clay-soft p-8 shadow-soft">
            <ul className="flex flex-col gap-4">
              {t.about.nowDoing.map((item, i) => (
                <li key={i} className="flex gap-3 text-body-md text-forest-soft">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <span>
                    {i === 1 ? (
                      <>
                        {item}{" "}
                        <a
                          href="https://app.sadabmunshi.online"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-inline inline-flex items-center"
                          aria-label="Open the app"
                        >
                          <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
                        </a>
                      </>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-body-sm text-forest-soft">
            <Link href={t.about.watchingLink} className="link-inline">
              {t.about.watchingLinkLabel}
            </Link>
          </p>
        </section>

        {/* Closing */}
        <p className="mt-20 font-serif text-display-sm text-forest">
          <Link href="/projects" className="link-inline">
            {t.about.closingProjects}
          </Link>{" "}
          ·{" "}
          <Link href="/blog" className="link-inline">
            {t.about.closingBlog}
          </Link>
          {" — "}
          {t.about.closingLine}
        </p>
      </div>
    </div>
  );
}
