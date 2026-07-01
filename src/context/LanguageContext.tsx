"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { en } from "@/lib/translations/en";
import { bn } from "@/lib/translations/bn";
import { hi } from "@/lib/translations/hi";
import type { Translations } from "@/lib/translations/types";

export type Locale = "auto" | "en" | "bn" | "hi";
type ResolvedLocale = "en" | "bn" | "hi";

const STORAGE_KEY = "sm-lang";
const localeMap: Record<ResolvedLocale, Translations> = { en, bn, hi };

function detectBrowser(): ResolvedLocale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("bn")) return "bn";
  if (lang.startsWith("hi")) return "hi";
  return "en";
}

function resolve(locale: Locale, mounted: boolean): ResolvedLocale {
  if (!mounted) return "en"; // stable SSR default — avoids hydration mismatch
  if (locale === "auto") return detectBrowser();
  return locale;
}

type ContextValue = {
  locale: Locale;
  resolved: ResolvedLocale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const Ctx = createContext<ContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("auto");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && ["en", "bn", "hi", "auto"].includes(stored)) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const resolved = useMemo(() => resolve(locale, mounted), [locale, mounted]);
  const t = localeMap[resolved];

  return (
    <Ctx.Provider value={{ locale, resolved, setLocale, t }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLanguage(): ContextValue {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
