"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

const lastUpdated = "February 2026";

export default function WatchingContent() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-4xl md:py-5xl">
      <div className="mx-auto max-w-2xl">
        <PageHeader title={t.watching.title} description={t.watching.description} />

        <p className="mt-2xl max-w-prose text-body-lg text-body">{t.watching.intro}</p>

        <div className="mt-2xl flex flex-col gap-2xl">
          {t.watching.sections.map((section) => (
            <section key={section.category}>
              <h2 className="mb-md text-display-sm text-ink">{section.category}</h2>
              <ul className="flex flex-col gap-sm">
                {section.items.map((item) => (
                  <li key={item.title} className="rounded-md bg-canvas-soft p-md">
                    <div className="text-body-md font-medium text-ink">
                      {item.title}{" "}
                      <span className="font-normal text-mute">({item.year})</span>
                    </div>
                    <p className="mt-1 text-body-sm text-body">{item.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-2xl font-mono text-caption text-mute">
          {t.watching.lastUpdated} {lastUpdated}
        </p>
        <p className="mt-md text-body-sm text-body">
          {t.watching.recommendation}{" "}
          <Link href="/contact" className="link-inline">
            {t.watching.recommendationLink}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
