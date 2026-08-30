/**
 * Shared schema.org JSON-LD builders.
 *
 * Structured data is one of the strongest signals for AI-search citation:
 * it lets a model resolve *who* the site is about, *what* it publishes, and
 * *how* claims are attributed, without inferring any of it from prose.
 *
 * Everything is linked into one entity graph via stable @id values so that
 * Person, WebSite and Article all resolve to the same author entity.
 */

import { site } from "./site";

/** Stable entity identifiers — the anchor for the whole graph. */
export const ids = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
  organization: `${site.url}/#organization`,
} as const;

/** The author entity. Referenced by every page and article. */
export const personSchema = {
  "@type": "Person",
  "@id": ids.person,
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Software Developer & Writer",
  description:
    "Independent developer and writer exploring focus, systems, and how software shapes attention. Builds small tools to understand problems firsthand, then writes about what he learns.",
  knowsAbout: [
    "Software Development",
    "Personal Finance Tooling",
    "Web Development",
    "Next.js",
    "TypeScript",
    "Productivity Systems",
    "Artificial Intelligence",
    "Technical Writing",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  sameAs: [
    site.social.github,
    site.social.linkedin,
    site.social.twitter,
    site.social.instagram,
  ],
} as const;

/** The site entity. */
export const websiteSchema = {
  "@type": "WebSite",
  "@id": ids.website,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: ["en", "bn", "hi"],
  publisher: { "@id": ids.person },
  author: { "@id": ids.person },
} as const;

/** Root graph emitted on every page via the layout. */
export const rootGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema],
};

type BreadcrumbItem = { name: string; path: string };

/** Breadcrumbs help AI systems understand site hierarchy and context. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

/**
 * FAQPage schema — question/answer pairs are among the most reliably
 * extracted and cited structures in AI answers.
 */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Wrap any set of nodes into a complete, context-carrying document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
