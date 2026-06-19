import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Watching",
  description:
    "Movies and shows I have watched or am watching. Personal recommendations and watch list.",
  robots: { index: false, follow: false },
};

const lastUpdated = "February 2026";

type Item = { title: string; year: string; note: string };
type Section = { category: string; items: Item[] };

const watching: Section[] = [
  {
    category: "Recently Watched",
    items: [
      {
        title: "The Social Network",
        year: "2010",
        note: "A classic. Makes you want to build something.",
      },
    ],
  },
  {
    category: "Currently Watching",
    items: [
      {
        title: "Severance",
        year: "2022–",
        note: "Work-life balance taken to the extreme.",
      },
    ],
  },
  {
    category: "Want to Watch",
    items: [
      { title: "Dune: Part Two", year: "2024", note: "Heard it is incredible." },
      {
        title: "The Bear",
        year: "2022–",
        note: "Everyone keeps recommending this.",
      },
    ],
  },
  {
    category: "All-Time Favorites",
    items: [
      {
        title: "Good Will Hunting",
        year: "1997",
        note: "It is not your fault.",
      },
      { title: "The Prestige", year: "2006", note: "Nolan at his best." },
      { title: "Whiplash", year: "2014", note: "Obsession and excellence." },
    ],
  },
];

export default function WatchingPage() {
  return (
    <div className="container-page max-w-content py-4xl md:py-5xl">
      <PageHeader
        eyebrow="// watching"
        title="Watching"
        description="Movies and shows."
      />

      <p className="mt-2xl max-w-prose text-body-lg text-body">
        I do not watch a lot, but when I do, I prefer things that make me think or
        feel something. No particular genre — just good storytelling.
      </p>

      <div className="mt-2xl flex flex-col gap-2xl">
        {watching.map((section) => (
          <section key={section.category}>
            <h2 className="mb-md text-display-sm text-ink">
              {section.category}
            </h2>
            <ul className="flex flex-col gap-sm">
              {section.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-md bg-canvas-soft p-md"
                >
                  <div className="text-body-md font-medium text-ink">
                    {item.title}{" "}
                    <span className="font-normal text-mute">
                      ({item.year})
                    </span>
                  </div>
                  <p className="mt-1 text-body-sm text-body">{item.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-2xl font-mono text-caption text-mute">
        Last updated: {lastUpdated}
      </p>
      <p className="mt-md text-body-sm text-body">
        Have a recommendation?{" "}
        <Link href="/contact" className="link-inline">
          Let me know
        </Link>
        .
      </p>
    </div>
  );
}
