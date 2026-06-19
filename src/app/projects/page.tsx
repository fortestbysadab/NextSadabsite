import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things I've built to learn, solve a problem, or just see if I could.",
};

type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
  muted?: boolean;
};

const projects: Project[] = [
  {
    name: "FinFlow",
    description:
      "A personal finance tool that automatically categorizes spending and forecasts future expenses. Built to help me understand where my money actually goes.",
    tags: ["Next.js", "Node.js", "TypeScript"],
    href: "https://app.sadabmunshi.online",
  },
  {
    name: "Next Project",
    description: "Something interesting is in the works. Stay tuned.",
    tags: ["TBD"],
    status: "In Progress",
    muted: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <div className="flex h-full flex-col gap-md">
      <div className="flex items-start justify-between gap-sm">
        <h2 className="text-display-md text-ink">{project.name}</h2>
        {project.status && (
          <span className="inline-flex items-center rounded-full bg-warning-soft px-xs py-px font-mono text-caption text-warning-deep">
            {project.status}
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
          Live ↗
        </span>
      )}
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} — opens in new tab`}
        className="card-marketing group"
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      className={`rounded-md border border-dashed border-hairline-strong bg-canvas-soft p-lg ${
        project.muted ? "opacity-80" : ""
      }`}
    >
      {inner}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container-page py-4xl md:py-5xl">
      <PageHeader
        eyebrow="// projects"
        title="Projects"
        description="Things I've built to learn, solve a problem, or just see if I could."
      />

      <div className="mt-2xl grid gap-lg md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}
