"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

const lastUpdated = "February 2026";

export default function WatchingContent() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <PageHeader title={t.watching.title} description={t.watching.description} />

        <p className="mt-12 max-w-prose text-body-lg text-forest-soft">
          {t.watching.intro}
        </p>

        <div className="mt-12 flex flex-col gap-12">
          {t.watching.sections.map((section) => (
            <section key={section.category}>
              <h2 className="mb-5 font-serif text-display-sm text-forest">
                {section.category}
              </h2>
              <ul className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-3xl border border-stone bg-clay-soft/60 p-6 transition-colors duration-300 hover:border-sage"
                  >
                    <div className="text-body-md font-semibold text-forest">
                      {item.title}{" "}
                      <span className="font-normal text-forest-mute">
                        ({item.year})
                      </span>
                    </div>
                    <p className="mt-1 text-body-sm text-forest-soft">
                      {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-caption uppercase tracking-widest text-forest-mute">
          {t.watching.lastUpdated} {lastUpdated}
        </p>
        <p className="mt-4 text-body-sm text-forest-soft">
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
