import type { Metadata } from "next";
import { site } from "@/lib/site";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sadab Munshi — a student trying to understand how money and systems work. He builds small things to figure things out, then writes about what he finds.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  sameAs: [site.social.github, site.social.linkedin, site.social.twitter, site.social.instagram],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutContent />
    </>
  );
}
