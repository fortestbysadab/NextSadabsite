import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "I don't have everything figured out. Just building small things, reading big ideas, and trying to connect dots.",
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

export default function AboutPage() {
  return (
    <div className="container-page max-w-content py-4xl md:py-5xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageHeader title="About" />

      {/* Intro split: portrait + story */}
      <div className="mt-2xl grid items-start gap-2xl md:grid-cols-[260px_1fr]">
        <figure className="overflow-hidden rounded-lg bg-primary shadow-level-4">
          <Image
            src="/assets/images/sadab-portrait.jpg"
            alt="Portrait of Sadab Munshi"
            width={1024}
            height={1280}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 260px"
          />
        </figure>

        <article className="prose-doc">
          <p>
            <strong>Hello, I am Sadab.</strong> I am a student who likes building
            things on the internet. I spend most of my time learning how stuff
            works, breaking things, and figuring out how to fix them.
          </p>
          <p>
            I do not have it all figured out. I just build small things, write
            about what I learn, and share it here. If you want to know what I am
            up to right now, check the{" "}
            <Link href="/now" className="link-inline">
              now page
            </Link>
            .
          </p>
        </article>
      </div>

      {/* About this site */}
      <div className="mt-2xl rounded-md bg-canvas p-lg shadow-level-2">
        <h2 className="text-display-sm text-ink">About this site</h2>
        <p className="mt-sm text-body-md text-body">
          This site is built to be fast and simple — now powered by Next.js and
          deployed on the edge. Clean components, a tiny footprint, and a design
          system kept honest by a single set of tokens. It is my little corner of
          the internet where I share what I am working on.
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
          If you want to see my formal education, timeline, and technical skills,
          feel free to grab a copy of my résumé below.
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
  );
}
