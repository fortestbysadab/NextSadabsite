import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "I don't have everything figured out. Just building small things, reading big ideas, and trying to connect dots — plus what I'm focused on right now.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  sameAs: [site.social.github, site.social.linkedin, site.social.twitter, site.social.instagram],
};

const copilots = [
  {
    name: "Kimi by Moonshot AI",
    href: "https://www.moonshot.cn/",
    note: "I use this for writing my day-to-day code, building out features, and fixing errors across my projects.",
  },
  {
    name: "Claude by Anthropic",
    href: "https://www.anthropic.com/",
    note: "My go-to for deep debugging, untangling messy code, and helping me figure out complex bugs when I get stuck.",
  },
];

// ── Merged from the former /now page ──────────────────────────────
const nowLastUpdated = "February 2026";

const nowDoing = [
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

const nowNotDoing = [
  "Chasing every new trend",
  "Building things I wouldn't use myself",
  "Trying to optimize everything",
];

export default function AboutPage() {
  return (
    <div className="container-page py-4xl md:py-5xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="mx-auto max-w-2xl">
        <PageHeader title="About" />

        {/* Small portrait above the intro */}
        <figure className="mt-2xl">
          <Image
            src="/assets/images/sadab-portrait.jpg"
            alt="Portrait of Sadab Munshi"
            width={112}
            height={112}
            priority
            sizes="112px"
            className="h-28 w-28 rounded-full object-cover shadow-level-3 ring-1 ring-hairline"
          />
        </figure>

        <article className="prose-doc mt-lg">
          <p>
            <strong>Hello, I am Sadab.</strong> I am a student who likes building
            things on the internet. I spend most of my time learning how stuff
            works, breaking things, and figuring out how to fix them.
          </p>
          <p>
            I do not have it all figured out. I just build small things, write
            about what I learn, and share it here. What I&apos;m focused on right
            now is below.
          </p>
        </article>

        {/* ── Now (merged) ───────────────────────────────────────── */}
        <section className="mt-3xl">
          <div className="flex items-baseline justify-between gap-sm">
            <h2 className="text-display-md text-ink">Now</h2>
            <span className="font-mono text-caption text-mute">
              Updated {nowLastUpdated}
            </span>
          </div>
          <p className="mt-sm text-body-md text-body">
            A snapshot of what I&apos;m focused on at this point in my life —
            inspired by the{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="link-inline"
            >
              /now page
            </a>{" "}
            idea. No endless feeds, just what matters now.
          </p>

          <div className="mt-lg grid gap-lg md:grid-cols-2">
            <div className="rounded-md bg-canvas p-lg shadow-level-2">
              <h3 className="text-display-sm text-ink">Currently</h3>
              <ul className="mt-md flex flex-col gap-sm">
                {nowDoing.map((a, i) => (
                  <li key={i} className="flex gap-sm text-body-md text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-link" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md bg-canvas-soft p-lg">
              <h3 className="text-display-sm text-ink">Not Doing</h3>
              <ul className="mt-md flex flex-col gap-sm">
                {nowNotDoing.map((a) => (
                  <li key={a} className="flex gap-sm text-body-md text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hairline-strong" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-md text-body-sm text-body">
            <Link href="/watching" className="link-inline">
              See what I&apos;m watching →
            </Link>
          </p>
        </section>

        {/* About this site */}
        <div className="mt-3xl rounded-md bg-canvas p-lg shadow-level-2">
          <h2 className="text-display-sm text-ink">About this site</h2>
          <p className="mt-sm text-body-md text-body">
            This site is built to be fast and simple — now powered by Next.js and
            deployed on the edge. Clean components, a tiny footprint, and a design
            system kept honest by a single set of tokens. It is my little corner
            of the internet where I share what I am working on.
          </p>
        </div>

        {/* Co-pilots */}
        <div className="mt-lg rounded-md bg-canvas-soft p-lg">
          <h2 className="text-display-sm text-ink">My Digital Co-Pilots</h2>
          <ul className="mt-md flex flex-col gap-md">
            {copilots.map((c) => (
              <li key={c.name} className="flex gap-sm text-body-sm text-body">
                <svg
                  className="mt-0.5 shrink-0 text-link"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline font-medium"
                  >
                    {c.name}
                  </a>{" "}
                  — {c.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume */}
        <div className="mt-2xl flex flex-col items-start gap-md">
          <p className="text-body-sm text-body">
            If you want to see my formal education, timeline, and technical
            skills, feel free to grab a copy of my résumé below.
          </p>
          <a href={site.resumeFile} download className="btn-primary">
            <svg
              className="mr-2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Résumé
          </a>
        </div>
      </div>
    </div>
  );
}
