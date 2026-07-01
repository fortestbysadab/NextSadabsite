"use client";

import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";

export default function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <div className="container-page max-w-content py-4xl md:py-5xl">
      <header className="flex flex-col gap-md">
        <h1 className="text-display-lg text-ink md:text-display-xl">
          {t.contact.title}
        </h1>
        <p className="max-w-prose text-body-lg text-body">{t.contact.subtitle}</p>
      </header>

      <div className="mt-2xl rounded-lg bg-canvas p-xl shadow-level-4">
        <ContactForm />
      </div>
    </div>
  );
}
