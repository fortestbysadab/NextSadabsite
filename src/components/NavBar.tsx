"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const NAV_LABEL_KEYS: Record<string, keyof ReturnType<typeof useLanguage>["t"]["nav"]> = {
  "/": "home",
  "/about": "about",
  "/blog": "blog",
  "/projects": "projects",
  "/contact": "contact",
};

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-alabaster/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container-page flex h-16 items-center justify-between gap-4"
      >
        <Logo />

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const labelKey = NAV_LABEL_KEYS[item.href];
            const label = labelKey ? t.nav[labelKey] : item.label;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-body-sm transition-colors duration-300 ${
                    active
                      ? "text-forest underline decoration-sage decoration-2 underline-offset-8"
                      : "text-forest-soft hover:text-forest"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA cluster */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link
            href={site.resumeFile}
            className="text-body-sm font-medium text-forest-soft transition-colors hover:text-forest"
          >
            {t.nav.resume}
          </Link>
          <Link
            href="/contact"
            className="flex h-10 items-center rounded-full bg-forest px-5 text-caption font-semibold uppercase tracking-widest text-alabaster transition-colors duration-300 hover:bg-terracotta"
          >
            {t.nav.getInTouch}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-12 w-12 place-items-center rounded-full border border-stone text-forest md:hidden"
        >
          {open ? <X strokeWidth={1.5} className="h-5 w-5" /> : <Menu strokeWidth={1.5} className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile full-screen overlay sliding from top */}
      <div
        className={`fixed inset-0 z-[60] overflow-y-auto bg-alabaster transition-all duration-500 ease-organic md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        {/* Overlay top bar: logo + close, so it doesn't clash with the sticky header */}
        <div className="container-page flex h-16 items-center justify-between border-b border-stone">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-12 w-12 place-items-center rounded-full border border-stone text-forest"
          >
            <X strokeWidth={1.5} className="h-5 w-5" />
          </button>
        </div>

        <ul className="container-page flex flex-col gap-2 py-8">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const labelKey = NAV_LABEL_KEYS[item.href];
            const label = labelKey ? t.nav[labelKey] : item.label;
            return (
              <li key={item.href} className="border-b border-stone">
                <Link
                  href={item.href}
                  className={`block py-4 font-serif text-3xl ${
                    active ? "italic text-sage-deep" : "text-forest"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="mt-6 flex gap-3">
            <Link href={site.resumeFile} className="btn-secondary-sm flex-1">
              {t.nav.resume}
            </Link>
            <Link href="/contact" className="btn-primary-sm flex-1">
              {t.nav.getInTouch}
            </Link>
          </li>
          <li className="mt-4 flex justify-center">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </header>
  );
}
