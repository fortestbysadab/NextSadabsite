import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Sadab Munshi is currently doing, thinking about, and working on.",
  robots: { index: true, follow: true },
};

const lastUpdated = "February 2026";

const activities = [
  <>
    Working on{" "}
    <a
      href="https://app.sadabmunshi.online"
      target="_blank"
      rel="noopener noreferrer"
      className="link-inline"
    >
      something new
    </a>{" "}
    — a collection of small useful tools
  </>,
  <>Learning more about how systems work (finance, technology, life)</>,
  <>Writing about ideas, simplicity, and the process of building</>,
  <>Trying to read more and scroll less</>,
];

const notDoing = [
  "Chasing every new trend",
  "Building things I wouldn't use myself",
  "Trying to optimize everything",
];

export default function NowPage() {
  return (
    <div className="container-page py-4xl md:py-5xl">
      <div className="mx-auto max-w-2xl">
      <PageHeader
        title="Now"
        description="What I'm doing right now."
      />

      <article className="prose-doc mt-2xl">
        <p>
          <strong>Based in my corner of the world</strong>
        </p>
        <p>
          This is a{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="link-inline"
          >
            /now page
          </a>
          . It&apos;s a snapshot of what I&apos;m focused on at this point in my
          life. No endless feeds, just what matters now.
        </p>
      </article>

      <div className="mt-2xl grid gap-lg md:grid-cols-2">
        <div className="rounded-md bg-canvas p-lg shadow-level-2">
          <h2 className="text-display-sm text-ink">Currently</h2>
          <ul className="mt-md flex flex-col gap-sm">
            {activities.map((a, i) => (
              <li key={i} className="flex gap-sm text-body-md text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-link" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md bg-canvas-soft p-lg">
          <h2 className="text-display-sm text-ink">Not Doing</h2>
          <ul className="mt-md flex flex-col gap-sm">
            {notDoing.map((a) => (
              <li key={a} className="flex gap-sm text-body-md text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hairline-strong" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-2xl font-mono text-caption text-mute">
        Last updated: {lastUpdated} — this page will change as my priorities
        shift. Check back sometime.
      </p>

      <p className="mt-md text-body-sm text-body">
        <Link href="/watching" className="link-inline">
          See what I&apos;m watching →
        </Link>
      </p>
      </div>
    </div>
  );
}
