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
| `pages/blog/*.php` (8 posts)           | `content/blog/*.mdx` (file-based MDX) + `src/app/blog/[slug]/page.tsx` |
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
content/
└── blog/                     # Blog posts as .mdx files (zero-code publishing)
    ├── the-metric-trap.mdx
    └── … (8 posts)
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
├── components/               # NavBar, Footer, Logo, MeshHero, PageHeader, Badge, MdxContent
└── lib/
    ├── site.ts               # Site config, nav, social links
    ├── posts.ts              # Reads content/blog/*.mdx (fs + gray-matter)
    └── utils.ts              # Date helpers
public/
├── assets/images/            # Favicons, logo, OG image, portrait
├── images/blog/              # Blog cover images (512×279)
├── resume/                   # Résumé PDF
└── manifest.json
```

---

## ✍️ Adding a blog post (zero-code, MDX)

Posts are plain `.mdx` files in [`content/blog/`](./content/blog). To publish:

1. **Create** `content/blog/my-new-post.mdx` (the filename becomes the URL slug):

   ```mdx
   ---
   title: "My New Post"
   date: "2026-06-19"
   modified: "2026-06-19"
   readingTime: "4 min read"
   excerpt: "One-line summary shown on cards."
   description: "SEO meta description."
   coverImage: "/images/blog/my-new-post.png"
   published: true
   ---

   Opening paragraph in plain Markdown.

   ## A section

   More text, **bold**, *italic*, [links](https://example.com), lists — all MDX.
   ```

2. **Drop the cover image** at `public/images/blog/my-new-post.png`
   (displayed at 512×279 on cards, full-width on the post page).

3. **`git push`** → Vercel auto-deploys. No code changes.

Notes:

- `published: false` (or omitting it as `false`) hides a draft from the site.
- The newest post by `date` automatically gets the **New** badge (`isNew`).
- Posts are read at build time with `fs` + `gray-matter`; the body is compiled
  with `next-mdx-remote/rsc`. Routes, sitemap, and SEO metadata are generated
  automatically from frontmatter.

---

## 📨 Contact form (Resend)

`src/app/api/contact/route.ts` validates the payload (name/email/message, same
rules as the old PHP) and sends a real email via [Resend](https://resend.com).

**Setup:**

1. Create a free account at [resend.com](https://resend.com) and an API key.
2. Copy `.env.example` → `.env.local` and fill in:
   ```bash
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO=contact@sadabmunshi.online
   CONTACT_FROM=Website <onboarding@resend.dev>   # or your verified domain
   ```
3. For production, **verify your domain** in Resend, then set
   `CONTACT_FROM=Website <noreply@sadabmunshi.online>` so deliverability is solid.
4. On Vercel, add the same three variables under
   **Project → Settings → Environment Variables**.

The form replies-to the sender's address, so you can answer directly from your
inbox. If `RESEND_API_KEY` is missing, the API returns a friendly "email me
directly" message instead of crashing.

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
