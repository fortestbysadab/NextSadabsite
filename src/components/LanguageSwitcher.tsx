"use client";

import { useLanguage, type Locale } from "@/context/LanguageContext";

const OPTIONS: { value: Locale; label: string; title: string }[] = [
  { value: "auto", label: "Auto", title: "Auto-detect language" },
  { value: "en", label: "EN", title: "English" },
  { value: "bn", label: "বাং", title: "বাংলা" },
  { value: "hi", label: "हि", title: "हिन्दी" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langSwitcher.auto}
      className="flex items-center overflow-hidden rounded-full border border-stone"
    >
      {OPTIONS.map((opt, i) => (
        <button
          key={opt.value}
          type="button"
          title={opt.title}
          onClick={() => setLocale(opt.value)}
          aria-pressed={locale === opt.value}
          className={[
            "h-8 px-3 text-caption uppercase tracking-widest transition-colors duration-300",
            i > 0 ? "border-l border-stone" : "",
            locale === opt.value
              ? "bg-clay-soft font-semibold text-forest"
              : "text-forest-soft hover:bg-clay-soft hover:text-forest",
          ].join(" ")}
        >
          {opt.value === "auto" ? t.langSwitcher.auto : opt.label}
        </button>
      ))}
    </div>
  );
}
