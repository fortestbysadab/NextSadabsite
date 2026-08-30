import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt
 *
 * Goal: maximum visibility in AI search (ChatGPT, Claude, Perplexity,
 * Google AI Overviews) while keeping personal photos out of image search.
 *
 * Retrieval/search crawlers are the ones that produce citations and
 * referral traffic, so they are explicitly allowed. Image crawlers stay
 * blocked — pages are readable, photos are not.
 */

const PRIVATE_PATHS = ["/contact", "/watching", "/api/"];

/** Crawlers that read pages to cite them in AI answers. */
const AI_SEARCH_CRAWLERS = [
  "OAI-SearchBot", // ChatGPT search citations
  "ChatGPT-User", // ChatGPT user-triggered fetch
  "Claude-SearchBot", // Claude search citations
  "Claude-User", // Claude user-triggered fetch
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live retrieval
  "DuckAssistBot", // DuckDuckGo AI answers
  "Applebot", // Siri / Spotlight
  "Amazonbot",
];

/**
 * Training crawlers. Allowed: broader model familiarity with the site
 * makes the brand more likely to be recalled and cited. Swap `allow`
 * for `disallow` below to opt out of training use.
 */
const AI_TRAINING_CRAWLERS = [
  "GPTBot", // OpenAI training
  "ClaudeBot", // Anthropic training
  "Google-Extended", // Gemini training/grounding token
  "Meta-ExternalAgent",
  "CCBot", // Common Crawl
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Baseline for every crawler.
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },

      // AI search + retrieval: explicitly welcomed.
      ...AI_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: PRIVATE_PATHS,
      })),

      // AI training crawlers.
      ...AI_TRAINING_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: PRIVATE_PATHS,
      })),

      // Known bad actor: ignores robots.txt, returns no traffic.
      { userAgent: "Bytespider", disallow: "/" },

      // Image crawlers: personal photos must not surface in image search.
      // Pages stay indexable — only the imagery is withheld.
      { userAgent: "Googlebot-Image", disallow: "/" },
      { userAgent: "msnbot-media", disallow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
