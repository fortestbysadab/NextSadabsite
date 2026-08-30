# AI Search (AEO/GEO) Audit — sadabmunshi.me

Audited 2026-08-30 against Google's AI optimization guidance, the
`claude-seo` GEO skill criteria, and current AI-crawler documentation.

---

## Scorecard

| Criterion | Weight | Before | After | Notes |
|---|---|---|---|---|
| Technical accessibility | 20% | 6/10 | 10/10 | SSR was already good; AI crawlers now explicitly allowed |
| Structured data | — | 3/10 | 9/10 | Was a 5-field Person stub; now a linked entity graph |
| Structural readability | 20% | 7/10 | 7/10 | Good headings already; content work still open |
| Citability | 25% | 4/10 | 6/10 | FAQ added; body copy still narrative, not answer-first |
| Authority signals | 20% | 5/10 | 7/10 | Dates + author entity solid; off-site presence is the gap |
| Multi-modal | 15% | 5/10 | 5/10 | Blog covers exist; no video/diagrams |

**Biggest wins available now are off-code** — see "What I can't fix in the repo".

---

## What was already right

The site was in better shape than most for AI search:

- **Static SSR output.** AI crawlers do not execute JavaScript. Every page
  is prerendered (`○ Static` / `● SSG`), so crawlers see full text.
- **Clean semantic HTML** with a proper `h1 → h2 → h3` hierarchy.
- **Descriptive URLs** (`/blog/the-metric-trap`, not `/post?id=12`).
- **Per-page titles and descriptions** on every route.
- **`datePublished` + `dateModified`** already tracked per post.
- **Sitemap** generated from real content.

---

## What was fixed

### 1. AI crawlers were never addressed (highest impact)

The old `robots.txt` had a single `User-agent: *` rule. That is not a block,
but it means no explicit signal to the crawlers that generate citations.

Now explicitly allowed: `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`,
`Claude-User`, `PerplexityBot`, `Perplexity-User`, `DuckAssistBot`,
`Applebot`, `Amazonbot`, plus training crawlers `GPTBot`, `ClaudeBot`,
`Google-Extended`, `CCBot`.

`Bytespider` is blocked (ignores robots.txt, returns no traffic).
Image crawlers remain blocked, preserving the photo-privacy work.

> **Training crawlers are allowed on purpose.** Blocking them protects
> content but reduces how well models "know" the brand unprompted. To opt
> out, move the `AI_TRAINING_CRAWLERS` list to `disallow` in
> `src/app/robots.ts` — one-line change, clearly commented.

### 2. Structured data was a stub

The old schema was a 5-field `Person` duplicated in two files, with a thin
`Article` on posts. Schema is the strongest single citation signal, because
it removes all inference.

New `src/lib/schema.ts` defines one entity graph with stable `@id`s:

| Page | Schema |
|---|---|
| All | `Person` + `WebSite` |
| `/` | `WebPage` |
| `/about` | `ProfilePage` + `FAQPage` (4 Q&As) + breadcrumbs |
| `/projects` | `CollectionPage` + `SoftwareApplication` (FinFlow) |
| `/blog` | `Blog` + full `blogPost` list |
| `/blog/[slug]` | `BlogPosting` + breadcrumbs |

Every page references the *same* author entity by `@id` rather than
redeclaring it, so all content resolves to one person.

The `FAQPage` matters most: Q&A pairs are the most reliably extracted
structure in AI answers, and "Who is Sadab Munshi?" is now answered in
quotable, self-contained form directly in the markup.

### 3. `/llms.txt` added

Generated from the same source as the sitemap, so it cannot go stale.

**Honest framing:** Google confirmed on 2026-06-15 that `llms.txt` has *no*
effect on Search rankings or AI Overviews. Analysis of 500M+ LLM bot events
shows crawlers largely skip it and read HTML directly. It *is* genuinely
used by coding assistants and on-demand retrieval. It cost ~70 lines and
auto-maintains, so it is worth having — but it is documentation, not a
ranking lever, and anyone claiming otherwise is selling something.

---

## What I can't fix in the repo

Ranked by impact. These are where the remaining upside is.

### 1. Off-site brand mentions (biggest lever by far)

An Ahrefs study of 75,000 brands found brand mentions correlate with AI
visibility **~3x more strongly than backlinks**:

| Signal | Correlation |
|---|---|
| YouTube mentions | 0.737 (strongest) |
| Reddit mentions | High |
| Wikipedia / Wikidata | High |
| Domain Rating (backlinks) | 0.266 (weak) |

No amount of schema compensates for zero off-site presence. Practical steps:
answer questions in your domain on Reddit and Hacker News under a consistent
name; get FinFlow listed anywhere that indexes tools; make sure your GitHub
profile README states plainly who you are and what you build.

### 2. Content is narrative, not answer-first

~44% of AI citations come from the **first 30%** of a page, and optimal
citable passages run **134–167 words**. Your essays open reflectively and
reach the point later — good writing, bad extraction.

Fix without losing voice: add one self-contained summary paragraph near the
top of each post that states the conclusion plainly. The essay can then
unfold as it does now.

### 3. Content freshness

Posts under 3 months old are ~3x more likely to be cited; past ~6 months,
citation eligibility drops sharply. Your newest post is from July 2026 —
currently fine, but this decays silently. A quarterly refresh pass that
updates facts and bumps `modified` is high-leverage.

### 4. No author credentials on posts

Posts show a date and reading time but no byline block. A short "written by"
with a one-line credential at the end of each post strengthens E-E-A-T.

---

## Verification

All checks run against a real production server (`next start`), not source:

```
/llms.txt        → 200, text/plain, all 10 posts listed
/robots.txt      → all AI crawler groups present
JSON-LD          → parses on every page; correct @type sets
                   Person appears exactly once per page
SSR              → article body present in raw HTML with JS disabled
Build            → 23/23 static pages, tsc --noEmit clean
```

---

## Monthly maintenance

1. Re-validate schema in [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Check Search Console for crawl errors.
3. Test real prompts in ChatGPT/Perplexity/Claude ("Who is Sadab Munshi?",
   "personal finance tools built by indie developers") and note whether you
   are cited.
4. Refresh one older post; bump its `modified` date.
5. Grep server logs for AI crawler user-agents to confirm they are arriving.
