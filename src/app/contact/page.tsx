import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a question or just want to say hello? Get in touch.",
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
