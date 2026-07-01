"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-4xl md:py-5xl">
      <div className="mx-auto max-w-2xl">
        <PageHeader title={t.about.title} />

        {/* Portrait + intro */}
        <div className="mt-2xl flex flex-col items-start gap-lg sm:flex-row sm:items-center">
          <Image
            src="/assets/images/sadab-portrait.jpg"
            alt={t.about.title}
            width={96}
            height={96}
            priority
            sizes="96px"
            className="h-24 w-24 shrink-0 rounded-full object-cover shadow-level-3 ring-1 ring-hairline"
          />
          <article className="prose-doc">
            <p>
              <strong>{t.about.intro}</strong>
            </p>
          </article>
        </div>

        <article className="prose-doc mt-lg">
          <p>{t.about.body}</p>
        </article>

        {/* Now */}
        <section className="mt-3xl">
          <h2 className="text-display-md text-ink">{t.about.nowTitle}</h2>
          <p className="mt-sm text-body-md text-body">{t.about.nowSubtitle}</p>

          <div className="mt-lg rounded-md bg-canvas p-lg shadow-level-2">
            <ul className="flex flex-col gap-sm">
              {t.about.nowDoing.map((item, i) => (
                <li key={i} className="flex gap-sm text-body-md text-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-link" />
                  <span>
                    {i === 1 ? (
                      <>
                        {item}{" "}
                        <a
                          href="https://app.sadabmunshi.online"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-inline"
                        >
                          ↗
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

          <p className="mt-md text-body-sm text-body">
            <Link href={t.about.watchingLink} className="link-inline">
              {t.about.watchingLinkLabel}
            </Link>
          </p>
        </section>

        {/* Closing */}
        <p className="mt-3xl text-body-lg text-body">
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
