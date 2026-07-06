"use client";

import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-24 md:py-32">
      <PageHeader title={t.projects.title} description={t.projects.description} />

      <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-8">
        {t.projects.projects.map((project, i) => {
          const stagger = i % 2 === 1 ? "md:translate-y-12" : "";
          const inner = (
            <div className="flex h-full flex-col gap-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif text-display-md text-forest">
                  {project.name}
                </h2>
                {!project.href && (
                  <span className="inline-flex items-center rounded-full border border-stone bg-warning-soft px-3 py-1 text-caption uppercase tracking-widest text-warning-deep">
                    {t.projects.inProgress}
                  </span>
                )}
              </div>

              <p className="text-body-md text-forest-soft">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              {project.href && (
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold uppercase tracking-widest text-sage-deep transition-colors group-hover:text-terracotta">
                  {t.projects.liveLabel}
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              )}
            </div>
          );

          if (project.href) {
            return (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
                className={`group rounded-3xl border border-stone bg-white p-8 shadow-soft transition-all duration-500 ease-organic hover:-translate-y-2 hover:shadow-large ${stagger}`}
              >
                {inner}
              </a>
            );
          }

          return (
            <div
              key={project.name}
              className={`rounded-3xl border border-dashed border-stone bg-clay-soft/60 p-8 ${stagger} ${
                project.muted ? "opacity-80" : ""
              }`}
            >
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
