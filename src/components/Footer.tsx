import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-bone">
      <div className="container-journal py-[96px]">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.label} className="flex flex-col gap-4">
              <h3 className="journal-label">{col.label}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-sans text-[16px] text-ink-soft transition-colors hover:text-electric"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Logo shape="circle" />
            <p className="font-sans text-[12px] uppercase tracking-[0.08em] text-ink-mute">
              © {year} {site.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
