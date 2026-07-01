"use client";

import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-4xl md:py-5xl">
      <PageHeader title={t.projects.title} description={t.projects.description} />

      <div className="mt-2xl grid gap-lg md:grid-cols-2">
        {t.projects.projects.map((project) => {
          const inner = (
            <div className="flex h-full flex-col gap-md">
              <div className="flex items-start justify-between gap-sm">
                <h2 className="text-display-md text-ink">{project.name}</h2>
                {!project.href && (
                  <span className="inline-flex items-center rounded-full bg-warning-soft px-xs py-px font-mono text-caption text-warning-deep">
                    {t.projects.inProgress}
                  </span>
                )}
              </div>

              <p className="text-body-md text-body">{project.description}</p>

              <div className="flex flex-wrap gap-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-canvas-soft-2 px-xs py-px font-mono text-caption text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.href && (
                <span className="mt-auto inline-flex items-center gap-1 pt-sm text-body-sm font-medium text-link transition-all group-hover:gap-2">
                  {t.projects.liveLabel}
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
                className="card-marketing group"
              >
                {inner}
              </a>
            );
          }

          return (
            <div
              key={project.name}
              className={`rounded-md border border-dashed border-hairline-strong bg-canvas-soft p-lg ${
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
