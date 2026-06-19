import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a question or just want to say hello? Get in touch.",
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-content py-4xl md:py-5xl">
      <header className="flex flex-col gap-md">
        <p className="eyebrow">// contact</p>
        <h1 className="text-display-lg text-ink md:text-display-xl">
          Get in touch.
        </h1>
        <p className="max-w-prose text-body-lg text-body">
          Have a question or just want to say hello? I would love to hear from
          you.
        </p>
      </header>

      <div className="mt-2xl rounded-lg bg-canvas p-xl shadow-level-4">
        <ContactForm />
      </div>
    </div>
  );
}
