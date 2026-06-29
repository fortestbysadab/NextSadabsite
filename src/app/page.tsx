import Link from "next/link";
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
    <div className="bg-bone">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="container-journal pt-[120px] pb-[96px] md:pt-[160px] md:pb-[128px]">
        <p className="journal-label mb-8">The Curator&apos;s Journal</p>

        <h1 className="journal-display max-w-[12ch] text-[44px] sm:text-[56px] md:text-[72px]">
          I get curious. Then I build something.
        </h1>

        <p className="mt-10 max-w-[560px] font-sans text-[18px] leading-[1.6] text-ink-soft">
          When I see new technology, I want to know how it works. So I read about
          it, try things, break it sometimes, and then build something small with
          it. This site is where I keep what I have built and learned so far.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/projects" className="journal-btn">
            See what I&apos;ve built
          </Link>
          <Link href="/blog" className="journal-btn-ghost">
            Read the notes
          </Link>
        </div>
      </section>

      {/* ─────────────────── Intro + today's note ─────────────────── */}
      <section className="border-t border-rule">
        <div className="container-journal grid gap-16 py-[96px] md:grid-cols-[1.5fr_1fr] md:gap-24">
          <div>
            <p className="journal-label mb-6">Around here</p>
            <p className="max-w-[560px] font-serif text-[28px] leading-[1.3] text-ink">
              You&apos;ll find{" "}
              <Link href="/blog" className="journal-link">
                notes from that exploration
              </Link>
              ,{" "}
              <Link href="/projects" className="journal-link">
                things I&apos;ve built along the way
              </Link>
              , and an{" "}
              <Link href="/about" className="journal-link">
                about page with what&apos;s occupying my attention
              </Link>
              . It&apos;s a work in progress — like me.
            </p>
          </div>

          <aside className="journal-card self-start">
            <p className="journal-label mb-4">Today&apos;s note</p>
            <p className="font-serif text-[20px] italic leading-[1.4] text-ink">
              {mood}
            </p>
          </aside>
        </div>
      </section>

      {/* ───────────────────── Recent writing ───────────────────── */}
      <section className="border-t border-rule bg-bone-2">
        <div className="container-journal py-[96px] md:py-[128px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="journal-label mb-4">Selected writing</p>
              <h2 className="journal-display text-[32px] md:text-[40px]">
                From the notebook
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:decoration-ink sm:inline-block"
            >
              All writing →
            </Link>
          </div>

          <ol className="border-t border-rule">
            {recent.map((post, i) => (
              <li key={post.slug} className="border-b border-rule">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 py-8 transition-colors md:grid-cols-[140px_1fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-ink-mute">
                    {formatDateLong(post.date)}
                  </span>
                  <div>
                    <h3 className="font-serif text-[26px] leading-[1.2] text-ink transition-colors group-hover:text-electric md:text-[30px]">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-[560px] font-sans text-[16px] leading-[1.6] text-ink-soft">
                      {post.excerpt}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="hidden font-serif text-[28px] text-ink-mute transition-all group-hover:translate-x-1 group-hover:text-electric md:block"
                  >
                    →
                  </span>
                  <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-ink-mute md:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <Link
            href="/blog"
            className="mt-10 inline-block font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:decoration-ink sm:hidden"
          >
            All writing →
          </Link>
        </div>
      </section>

      {/* ───────────────────────── Signature ───────────────────────── */}
      <section className="border-t border-rule">
        <div className="container-journal flex flex-col items-center gap-3 py-[128px] text-center">
          <p className="signature-shine font-serif text-[40px] italic leading-none md:text-[56px]">
            Sadab Munshi
          </p>
          <p className="journal-label mt-4">Learning by doing</p>
        </div>
      </section>
    </div>
  );
}
