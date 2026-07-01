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
      className="flex items-center overflow-hidden rounded-sm border border-hairline"
    >
      {OPTIONS.map((opt, i) => (
        <button
          key={opt.value}
          type="button"
          title={opt.title}
          onClick={() => setLocale(opt.value)}
          aria-pressed={locale === opt.value}
          className={[
            "h-7 px-xs font-mono text-body-sm transition-colors",
            i > 0 ? "border-l border-hairline" : "",
            locale === opt.value
              ? "bg-canvas-soft-2 font-medium text-ink"
              : "text-body hover:bg-canvas-soft hover:text-ink",
          ].join(" ")}
        >
          {opt.value === "auto" ? t.langSwitcher.auto : opt.label}
        </button>
      ))}
    </div>
  );
}
