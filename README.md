# Sadab Munshi — Personal Website (Next.js)

A clean, fast personal portfolio and blog, **migrated from PHP to Next.js** with a
Vercel-inspired design system. App Router · TypeScript · Tailwind CSS · Geist fonts.

---

## ✨ What changed in the migration

| Old (PHP)                              | New (Next.js)                                              |
| -------------------------------------- | --------------------------------------------------------- |
| `index.php` router + `.htaccess`       | App Router file-based routing (`src/app/**`)              |
| `layout.php` + `includes/*.php`        | `src/app/layout.tsx` + `src/components/*`                 |
| `config.php`                           | `src/lib/site.ts`                                          |
| `pages/*.php` content                  | `src/app/*/page.tsx`                                       |
| `pages/blog/*.php` (8 posts)           | `src/lib/posts.ts` + `src/app/blog/[slug]/page.tsx`      |
| `submit.php` + `db.php` (MySQL)        | `src/app/api/contact/route.ts` (validation + log)        |
| Hand-rolled SEO meta in `layout.php`   | Next.js Metadata API + `sitemap.ts` / `robots.ts`        |
| Newsreader/Manrope fonts              | **Geist + Geist Mono** (the design system's faces)        |

The old contact form persisted messages to an InfinityFree MySQL database. Those
credentials don't run on Vercel, so the new API route validates the payload and
logs it. See [Contact form](#-contact-form) to wire up email/DB.

---

## 🎨 Design system

All UI follows the Vercel-inspired token set, encoded once in
[`tailwind.config.ts`](./tailwind.config.ts) and [`globals.css`](./src/app/globals.css):

- **Colors** — ink `#171717` primary, near-white `#fafafa` canvas, a single
  `#0070f3` link blue, and the four-pair brand mesh gradient (cyan/blue/violet/
  magenta/amber) used **at hero scale only**.
- **Type** — Geist (geometric sans, weights 400/500/600) for everything narrative;
  Geist Mono for eyebrows, captions, and code. Aggressive negative tracking on
  display sizes; sentence-case, period-terminated headlines.
- **Shape** — 100px pill CTAs for marketing, 6px radius for nav-scale buttons.
- **Elevation** — stacked subtle shadows (`shadow-level-1` … `shadow-level-5`)
  with inset hairline rings — never a single heavy drop shadow.

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm start
```

---

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: fonts, nav, footer, global metadata
│   ├── page.tsx              # Home (mesh hero + recent posts)
│   ├── globals.css           # Tailwind layers + design-system components
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── now/page.tsx
│   ├── watching/page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── ContactForm.tsx   # Client form → /api/contact
│   ├── blog/
│   │   ├── page.tsx          # Blog index
│   │   └── [slug]/page.tsx   # Individual post (SSG)
│   ├── api/contact/route.ts  # Form handler (replaces submit.php)
│   ├── not-found.tsx         # 404
│   ├── sitemap.ts
│   └── robots.ts
├── components/               # NavBar, Footer, Logo, MeshHero, PageHeader, Badge
└── lib/
    ├── site.ts               # Site config, nav, social links
    ├── posts.ts              # All blog content (migrated)
    └── utils.ts              # Date helpers
public/
├── assets/images/            # Favicons, logo, OG image (copied from PHP site)
├── resume/                   # Résumé PDF
└── manifest.json
```

---

## ✍️ Adding a blog post

Add an entry to the `posts` array in [`src/lib/posts.ts`](./src/lib/posts.ts):

```ts
{
  slug: "my-new-post",
  title: "My New Post",
  date: "2026-06-19",
  modified: "2026-06-19",
  readingTime: "4 min read",
  excerpt: "One-line summary for cards.",
  description: "SEO description.",
  body: `<p class="lead">Opening paragraph…</p><h2>A section</h2><p>…</p>`,
},
```

The route, sitemap entry, and metadata are generated automatically.

> For a richer authoring workflow you can later swap `body` strings for MDX —
> the page component just renders the post body.

---

## 📨 Contact form

`src/app/api/contact/route.ts` validates the payload (name/email/message, same
rules as the old PHP). To actually deliver messages, add one of:

- **Email** — [Resend](https://resend.com) / Postmark inside the `TODO` block.
- **Database** — Vercel Postgres / KV, or any DB client.

---

## ☁️ Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).
Set the production domain to `www.sadabmunshi.me` and update `site.url` in
`src/lib/site.ts` if it ever changes.

---

**Author:** Sadab Munshi · Migrated to Next.js with a Vercel-inspired design system.
