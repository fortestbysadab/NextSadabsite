"use client";

import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";

export default function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <header className="flex flex-col gap-6">
          <h1 className="headline-serif text-5xl md:text-6xl">
            {t.contact.title}
          </h1>
          <p className="max-w-prose text-body-lg text-forest-soft">
            {t.contact.subtitle}
          </p>
        </header>

        <div className="mt-12 rounded-3xl border border-stone bg-white p-8 shadow-medium md:p-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
