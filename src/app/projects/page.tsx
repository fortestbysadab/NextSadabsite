import type { Metadata } from "next";
import { site } from "@/lib/site";
import { graph, ids, breadcrumbSchema } from "@/lib/schema";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things I've built to learn, solve a problem, or just see if I could.",
  alternates: { canonical: "/projects" },
};

/**
 * CollectionPage + SoftwareApplication.
 *
 * Describing FinFlow as a first-class entity (rather than prose in a card)
 * lets AI systems answer "what did Sadab Munshi build?" with specifics.
 */
const projectsSchema = graph(
  {
    "@type": "CollectionPage",
    "@id": `${site.url}/projects#collection`,
    url: `${site.url}/projects`,
    name: "Projects",
    description:
      "Software built by Sadab Munshi to learn, solve a problem, or test an idea.",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.person },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            "@id": `${site.url}/projects#finflow`,
            name: "FinFlow",
            url: "https://app.sadabmunshi.online",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description:
              "A Personal Finance Management System that automatically categorizes spending and forecasts future expenses. Built to help me understand where my money actually goes.",
            author: { "@id": ids.person },
            creator: { "@id": ids.person },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          },
        },
      ],
    },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ])
);

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsContent />
    </>
  );
}
