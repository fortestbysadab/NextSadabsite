import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sadab Munshi — a student trying to understand how money and systems work. He builds small things to figure things out, then writes about what he finds.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  sameAs: [site.social.github, site.social.linkedin, site.social.twitter, site.social.instagram],
};

// ── Now ───────────────────────────────────────────────────────────
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
      a personal finance tool
    </a>{" "}
    that tracks money without you having to think about it
  </>,
  <>Trying to understand how financial systems actually work underneath</>,
  <>Writing about what I learn, including the parts that didn&apos;t go as planned</>,
  <>Reading more. Scrolling less.</>,
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

        {/* Intro: portrait left, text right */}
        <div className="mt-2xl flex flex-col items-start gap-lg sm:flex-row sm:items-center">
          <Image
            src="/assets/images/sadab-portrait.jpg"
            alt="Portrait of Sadab Munshi"
            width={96}
            height={96}
            priority
            sizes="96px"
            className="h-24 w-24 shrink-0 rounded-full object-cover shadow-level-3 ring-1 ring-hairline"
          />

          <article className="prose-doc">
            <p>
              <strong>
                I&apos;m Sadab. I got curious about how money works and haven&apos;t stopped pulling on that thread.
              </strong>
            </p>
          </article>
        </div>

        <article className="prose-doc mt-lg">
          <p>
            I&apos;m a student. Finance is what I keep coming back to — how systems are built, how money moves, why most tools for managing it feel like they were made for someone else. When something doesn&apos;t make sense to me, I try to make a small version of it myself. Writing is how I make sure I actually understood it.
          </p>
        </article>

        {/* ── Now ────────────────────────────────────────────────── */}
        <section className="mt-3xl">
          <div className="flex items-baseline justify-between gap-sm">
            <h2 className="text-display-md text-ink">Now</h2>
            <span className="font-mono text-caption text-mute">
              Updated {nowLastUpdated}
            </span>
          </div>
          <p className="mt-sm text-body-md text-body">
            What I&apos;m focused on at the moment. A{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="link-inline"
            >
              /now page
            </a>
            , basically.
          </p>

          <div className="mt-lg rounded-md bg-canvas p-lg shadow-level-2">
            <ul className="flex flex-col gap-sm">
              {nowDoing.map((a, i) => (
                <li key={i} className="flex gap-sm text-body-md text-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-link" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-md text-body-sm text-body">
            <Link href="/watching" className="link-inline">
              See what I&apos;m watching →
            </Link>
          </p>
        </section>

        {/* Closing line */}
        <p className="mt-3xl text-body-lg text-body">
          The{" "}
          <Link href="/projects" className="link-inline">
            projects
          </Link>{" "}
          show what I&apos;ve made. The{" "}
          <Link href="/blog" className="link-inline">
            blog
          </Link>{" "}
          shows how I think. Start wherever you&apos;re curious.
        </p>
      </div>
    </div>
  );
}
