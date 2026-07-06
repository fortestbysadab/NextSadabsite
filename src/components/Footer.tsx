"use client";

import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";

type FooterColKey = "Site" | "Writing" | "Connect";
type NavLinkLabel =
  | "Home" | "About" | "Projects" | "Blog" | "Watching"
  | "Contact" | "GitHub" | "Twitter" | "LinkedIn";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const colLabel = (label: string): string => {
    const map: Record<FooterColKey, string> = {
      Site: t.footer.site,
      Writing: t.footer.writing,
      Connect: t.footer.connect,
    };
    return map[label as FooterColKey] ?? label;
  };

  const linkLabel = (label: string): string => {
    const map: Record<NavLinkLabel, string> = {
      Home: t.nav.home,
      About: t.nav.about,
      Projects: t.nav.projects,
      Blog: t.nav.blog,
      Watching: t.watching.title,
      Contact: t.nav.contact,
      GitHub: "GitHub",
      Twitter: "Twitter",
      LinkedIn: "LinkedIn",
    };
    return map[label as NavLinkLabel] ?? label;
  };

  return (
    <footer className="border-t border-stone bg-clay-soft/50">
      {/* meandering root/vine divider */}
      <svg
        aria-hidden
        className="h-12 w-full text-sage/40"
        viewBox="0 0 1400 48"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,24 C 220,-4 380,52 620,24 S 1050,-4 1400,28"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="container-page pb-24 pt-8">
        {/* Logo sits above the footer nav columns */}
        <div className="mb-12">
          <Logo shape="circle" />
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          {footerNav.map((col) => (
            <div key={col.label} className="flex flex-col gap-4">
              <h3 className="eyebrow">{colLabel(col.label)}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-body-md text-forest-soft transition-colors duration-300 hover:text-terracotta"
                    >
                      {linkLabel(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-stone pt-8 sm:flex-row sm:items-center">
          <p className="text-caption uppercase tracking-widest text-forest-mute">
            © {year} {site.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
