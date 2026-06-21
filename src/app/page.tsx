import Link from "next/link";
import MeshHero from "@/components/MeshHero";
import ScrollFloat from "@/components/ScrollFloat";
import { getAllPosts } from "@/lib/posts";
import { formatDateLong } from "@/lib/utils";

const moods = [
  "Currently trying to understand something I've never touched before. That's the good part.",
  "Broke something interesting today. Now I know more.",
  "The documentation said it was simple. It was not simple.",
  "Reading about a technology I haven't tried yet. That itch is real.",
  "Shipping small things is better than planning big things forever.",
];

export default function HomePage() {
  const recent = getAllPosts().slice(0, 3);
  const mood = moods[new Date().getDate() % moods.length];

  return (
    <>
      {/* ───────── Hero ───────── */}
      <MeshHero>
        <div className="flex max-w-3xl flex-col gap-lg">
          <h1 className="text-display-lg text-ink md:text-display-xl">
            I get curious. Then I build something.
          </h1>
          <p className="max-w-prose text-body-lg text-body">
            When I see new technology, I want to know how it works. So I read
            about it, try things, break it sometimes, and then build something
            small with it. This site is where I keep what I have built and
            learned so far.
          </p>
          <div className="mt-xs flex flex-wrap gap-sm">
            <Link href="/projects" className="btn-primary">
              See what I&apos;ve built
            </Link>
            <Link href="/blog" className="btn-secondary">
              Read the notes
            </Link>
          </div>
        </div>
      </MeshHero>

      {/* ───────── Intro + mood ───────── */}
      <section className="container-page py-4xl">
        <div className="grid gap-2xl lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-doc max-w-prose">
            <p>
              You&apos;ll find{" "}
              <Link href="/blog" className="link-inline">
                notes from that exploration
              </Link>
              ,{" "}
              <Link href="/projects" className="link-inline">
                things I&apos;ve built along the way
              </Link>
              , and a{" "}
              <Link href="/now" className="link-inline">
                page about what&apos;s occupying my attention right now
              </Link>
              . It&apos;s a work in progress — like me.
            </p>
          </div>

          <aside className="card-marketing self-start">
            <p className="eyebrow mb-sm">Today&apos;s note</p>
            <p className="font-mono text-code text-body">{mood}</p>
          </aside>
        </div>
      </section>

      {/* ───────── Recent writing ───────── */}
      <section className="border-t border-hairline bg-canvas-soft">
        <div className="container-page py-4xl">
          <div className="mb-xl flex items-baseline justify-between">
            <ScrollFloat
              containerClassName="text-ink"
              textClassName="!text-[24px] md:!text-[32px] text-ink"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              From the notebook
            </ScrollFloat>
            <Link
              href="/blog"
              className="text-body-sm font-medium text-link transition-colors hover:text-link-deep"
            >
              All writing →
            </Link>
          </div>

          <div className="grid gap-lg md:grid-cols-3">
            {recent.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-marketing group flex flex-col gap-sm"
              >
                <p className="font-mono text-caption text-mute">
                  {formatDateLong(post.date)}
                </p>
                <h3 className="text-display-sm text-ink">{post.title}</h3>
                <p className="text-body-sm text-body">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-xs text-body-sm font-medium text-link transition-all group-hover:gap-2">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Signature / quick links ───────── */}
      <section className="container-page py-4xl">
        <div className="flex flex-col items-center gap-md text-center">
          <p className="signature-shine text-display-md italic">Sadab Munshi</p>
          <p className="eyebrow">Learning by doing</p>
          <nav className="mt-md flex flex-wrap justify-center gap-lg">
            {["About", "Blog", "Projects", "Contact"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="text-body-sm font-medium text-body transition-colors hover:text-link"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
