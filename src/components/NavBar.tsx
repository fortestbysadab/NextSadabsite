"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navItems, site } from "@/lib/site";
import Logo from "./Logo";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bone/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container-journal flex h-16 items-center justify-between gap-4"
      >
        <Logo />

        {/* Desktop links — uppercase tracked */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-sans text-[12px] font-medium uppercase tracking-[0.12em] underline-offset-[6px] transition-colors ${
                    active
                      ? "text-ink underline decoration-electric"
                      : "text-ink-mute hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA cluster */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={site.resumeFile}
            className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-ink-mute transition-colors hover:text-ink"
          >
            Résumé
          </Link>
          <Link
            href="/contact"
            className="flex h-9 items-center border border-ink bg-ink px-4 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-on-primary transition-colors hover:bg-transparent hover:text-ink"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center border border-rule-strong text-ink md:hidden"
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
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] bg-bone md:hidden">
          <ul className="container-journal flex flex-col py-6">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-rule">
                  <Link
                    href={item.href}
                    className={`block py-5 font-serif text-[28px] ${
                      active ? "text-electric" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-8 flex gap-4">
              <Link href={site.resumeFile} className="journal-btn-ghost flex-1">
                Résumé
              </Link>
              <Link href="/contact" className="journal-btn flex-1">
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
