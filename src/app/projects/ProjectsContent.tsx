"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  muted?: boolean;
};

type StatusKind = "live" | "progress" | "tbd";

function getStatus(project: Project): StatusKind {
  if (project.href) return "live";
  if (project.muted || project.tags.some((t) => t.toUpperCase() === "TBD")) {
    return "tbd";
  }
  return "progress";
}

/**
 * "Editorial Dossier" project card.
 * Restrained at rest; reveals description, tech tags and a prompt on
 * hover (desktop) or tap/keyboard (all devices). Full text always stays in
 * the DOM for screen readers.
 */
function ProjectCard({
  project,
  index,
  stagger,
  statusLabels,
  liveLabel,
  viewDetailsLabel,
}: {
  project: Project;
  index: number;
  stagger: string;
  statusLabels: Record<StatusKind, string>;
  liveLabel: string;
  viewDetailsLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const status = getStatus(project);
  const isLink = Boolean(project.href);

  const bracketColor: Record<StatusKind, string> = {
    live: "text-terracotta",
    progress: "text-sage-deep",
    tbd: "text-forest-mute",
  };

  const bodyId = `project-desc-${index}`;

  const commonClass =
    `group relative block overflow-hidden rounded-3xl border bg-white p-8 ` +
    `text-left transition-all duration-500 ease-organic ` +
    `border-stone hover:border-sage hover:shadow-medium ` +
    `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-alabaster ` +
    `${!isLink ? "border-dashed bg-clay-soft/60" : ""} ` +
    `${project.muted ? "opacity-90" : ""} ${stagger}`;

  const Body = (
    <>
      {/* Ghosted index number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-4 select-none font-serif text-7xl leading-none text-forest/[0.06] md:text-8xl"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex h-full flex-col gap-4">
        {/* Bracket status tag */}
        <span
          className={`font-mono text-xs uppercase tracking-wide ${bracketColor[status]}`}
        >
          [{statusLabels[status]}]
        </span>

        <h2 className="font-serif text-display-md text-forest">
          {project.name}
        </h2>

        {/* Description — clamped at rest, expands smoothly. Full text stays
            in the DOM (line-clamp keeps it in the a11y tree). */}
        <p
          id={bodyId}
          className={`text-body-md text-forest-soft transition-all duration-500 ease-out ${
            expanded
              ? "line-clamp-none"
              : "line-clamp-1 group-hover:line-clamp-none"
          }`}
        >
          {project.description}
        </p>

        {/* Hidden tech tags — slide-up + fade-in on hover/tap */}
        <div
          className={`grid transition-all duration-500 ease-out ${
            expanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`flex flex-wrap gap-2 pt-1 transition-transform duration-500 ease-out ${
                expanded
                  ? "translate-y-0"
                  : "translate-y-1 group-hover:translate-y-0"
              }`}
            >
              {project.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Reveal prompt — fades in on hover/tap */}
        <span
          className={`mt-auto inline-flex items-center gap-2 pt-3 font-mono text-xs uppercase tracking-wide text-sage-deep transition-all duration-500 ease-out ${
            expanded
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <ArrowRight strokeWidth={1.5} className="h-4 w-4" />
          {isLink ? liveLabel : viewDetailsLabel}
        </span>
      </div>
    </>
  );

  // Links open in a new tab; still support keyboard reveal via focus/hover.
  if (isLink) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name}`}
        aria-describedby={bodyId}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        className={commonClass}
      >
        {Body}
      </a>
    );
  }

  // Non-link cards: toggle expand via tap / Enter / Space (button semantics).
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpanded((v) => !v);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-describedby={bodyId}
      onClick={() => setExpanded((v) => !v)}
      onKeyDown={onKey}
      className={`cursor-pointer ${commonClass}`}
    >
      {Body}
    </div>
  );
}

export default function ProjectsContent() {
  const { t } = useLanguage();

  // Derive bracket labels from existing copy (no data changes).
  const statusLabels: Record<StatusKind, string> = {
    live: "LIVE",
    progress: t.projects.inProgress.toUpperCase(),
    tbd: "TBD",
  };

  return (
    <div className="container-page py-24 md:py-32">
      <PageHeader title={t.projects.title} description={t.projects.description} />

      <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-8">
        {t.projects.projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            stagger={i % 2 === 1 ? "md:translate-y-12" : ""}
            statusLabels={statusLabels}
            liveLabel={t.projects.liveLabel}
            viewDetailsLabel="View details"
          />
        ))}
      </div>
    </div>
  );
}
