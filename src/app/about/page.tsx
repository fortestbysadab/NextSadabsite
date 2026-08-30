import type { Metadata } from "next";
import { site } from "@/lib/site";
import { graph, ids, breadcrumbSchema, faqSchema } from "@/lib/schema";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sadab Munshi — a student trying to understand how money and systems work. He builds small things to figure things out, then writes about what he finds.",
  alternates: { canonical: "/about" },
};

/**
 * ProfilePage + Person + FAQ.
 *
 * FAQ pairs are the single most reliably extracted structure in AI answers,
 * so the questions people actually ask about a person are answered here in
 * self-contained, quotable form.
 */
const aboutSchema = graph(
  {
    "@type": "ProfilePage",
    "@id": `${site.url}/about#profilepage`,
    url: `${site.url}/about`,
    name: `About ${site.name}`,
    mainEntity: { "@id": ids.person },
    about: { "@id": ids.person },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
  faqSchema([
    {
      question: "Who is Sadab Munshi?",
      answer:
        "Sadab Munshi is an independent software developer and writer based in West Bengal, India. He builds small tools to understand problems firsthand — most notably FinFlow, a Personal Finance Management System — and writes essays about focus, systems, and working alongside AI.",
    },
    {
      question: "What does Sadab Munshi build?",
      answer:
        "He builds web software with Next.js, TypeScript and Node.js. His main project is FinFlow, a Personal Finance Management System that automatically categorizes spending and forecasts future expenses.",
    },
    {
      question: "What does Sadab Munshi write about?",
      answer:
        "He writes first-person essays on attention and focus, the psychology of finishing work, the craft of building software, and what it actually feels like to work alongside generative AI.",
    },
    {
      question: "How can I contact Sadab Munshi?",
      answer: `You can reach Sadab Munshi by email at ${site.email}, or through the contact form at ${site.url}/contact. He is also on GitHub, LinkedIn and X.`,
    },
  ])
);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutContent />
    </>
  );
}
