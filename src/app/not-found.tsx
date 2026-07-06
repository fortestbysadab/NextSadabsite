"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-serif text-6xl italic text-sage/50">{t.notFound.emoji}</p>
      <h1 className="mt-8 headline-serif text-5xl md:text-6xl">
        {t.notFound.title}
      </h1>
      <p className="mt-5 max-w-prose text-body-lg text-forest-soft">
        {t.notFound.body}
      </p>
      <Link href="/" className="btn-primary mt-10">
        {t.notFound.cta}
      </Link>
    </div>
  );
}
