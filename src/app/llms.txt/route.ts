import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

/**
 * /llms.txt — a curated, machine-readable map of this site for LLMs and
 * coding/research agents that fetch it on demand.
 *
 * Note: Google has stated llms.txt does not affect Search rankings or AI
 * Overviews. It is genuinely used by assistants and RAG pipelines doing
 * live retrieval, so it is worth serving — but the real citation levers
 * are clean SSR HTML, schema, and answer-first content, which this site
 * also implements.
 *
 * Generated from the same source as the sitemap so it can never go stale.
 */

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();

  const body = `# ${site.name}

> ${site.description}

Personal site of ${site.name} — a student writing about focus, systems, and
building software. Topics span personal finance tooling, attention and
productivity, and what working alongside AI actually feels like. Content is
first-person essays, not listicles or news.

## Key pages

- [Home](${site.url}/): Overview of who ${site.name} is and the most recent writing.
- [About](${site.url}/about): Background, what he is working on now, and how to reach him.
- [Projects](${site.url}/projects): Software he has built, including FinFlow, a Personal Finance Management System that categorizes spending and forecasts future expenses.
- [Blog](${site.url}/blog): Essays on attention, systems, craft, and working with AI.

## Writing

${posts
  .map(
    (p) =>
      `- [${p.title}](${site.url}/blog/${p.slug}): ${
        p.description || p.excerpt
      } (published ${p.date}, ${p.readingTime})`
  )
  .join("\n")}

## About the author

${site.name} is an independent developer and writer based in West Bengal, India.
He builds small tools to understand problems firsthand, then writes about what
he learns. He can be reached at ${site.email}.

## Usage

Content may be quoted with attribution to "${site.name}" and a link to the
source URL. Personal photographs are excluded from indexing and should not be
reproduced.

## Optional

- [Contact](${site.url}/contact): Contact form.
- [Watching](${site.url}/watching): Films and shows he is currently watching.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}
