import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="container-page py-4xl">
        <div className="grid grid-cols-2 gap-2xl sm:grid-cols-3">
          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.label} className="flex flex-col gap-sm">
              <h3 className="eyebrow">{col.label}</h3>
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
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3xl flex flex-col items-start justify-between gap-md border-t border-hairline pt-lg sm:flex-row sm:items-center">
          <div className="flex items-center gap-sm">
            <Logo />
            <p className="font-mono text-caption text-mute">
              © {year} {site.name}
            </p>
          </div>
          <p className="font-mono text-caption text-mute">
            Built with Next.js — deployed on the edge.
          </p>
        </div>
      </div>
    </footer>
  );
}
