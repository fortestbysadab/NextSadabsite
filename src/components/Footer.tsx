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
    <footer className="border-t border-hairline bg-canvas">
      <div className="container-page py-4xl">
        <div className="grid grid-cols-2 gap-2xl sm:grid-cols-3">
          {footerNav.map((col) => (
            <div key={col.label} className="flex flex-col gap-sm">
              <h3 className="eyebrow">{colLabel(col.label)}</h3>
              <ul className="flex flex-col gap-xs">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-body-sm text-body transition-colors hover:text-ink"
                    >
                      {linkLabel(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3xl flex flex-col items-start justify-between gap-md border-t border-hairline pt-lg sm:flex-row sm:items-center">
          <div className="flex items-center gap-sm">
            <Logo shape="circle" />
            <p className="font-mono text-caption text-mute">
              © {year} {site.name}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
