"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container-page flex h-16 items-center justify-between gap-md"
      >
        <Logo />

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-xxs md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const labelKey = NAV_LABEL_KEYS[item.href];
            const label = labelKey ? t.nav[labelKey] : item.label;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-sm py-xs text-body-sm transition-colors ${
                    active
                      ? "bg-canvas-soft-2 text-ink"
                      : "text-body hover:bg-canvas-soft hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA cluster */}
        <div className="hidden items-center gap-xs md:flex">
          <LanguageSwitcher />
          <Link
            href={site.resumeFile}
            className="flex h-7 items-center rounded-sm border border-hairline bg-canvas px-xs text-body-sm font-medium text-ink transition-colors hover:bg-canvas-soft"
          >
            {t.nav.resume}
          </Link>
          <Link
            href="/contact"
            className="flex h-7 items-center rounded-sm bg-primary px-xs text-body-sm font-medium text-on-primary transition-colors hover:bg-[#383838]"
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
          className="grid h-9 w-9 place-items-center rounded-sm border border-hairline text-ink md:hidden"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile full overlay */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] bg-canvas md:hidden">
          <ul className="container-page flex flex-col gap-xxs py-lg">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              const labelKey = NAV_LABEL_KEYS[item.href];
              const label = labelKey ? t.nav[labelKey] : item.label;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-md py-sm text-display-sm ${
                      active ? "bg-canvas-soft-2 text-ink" : "text-body"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-md flex gap-xs px-md">
              <Link href={site.resumeFile} className="btn-secondary-sm flex-1">
                {t.nav.resume}
              </Link>
              <Link href="/contact" className="btn-primary-sm flex-1">
                {t.nav.getInTouch}
              </Link>
            </li>
            <li className="mt-sm flex justify-center px-md">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
