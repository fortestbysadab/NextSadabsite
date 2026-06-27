import Image from "next/image";
import Link from "next/link";

/**
 * Logo — the "S.M." monogram SVG rendered inside the brand's dark rounded badge.
 * Icon only (no wordmark).
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Sadab Munshi — Home"
      className={`inline-flex items-center ${className}`}
    >
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-md bg-primary p-1.5"
      >
        <Image
          src="/assets/images/s-m.monogram.svg"
          alt=""
          width={20}
          height={20}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="sr-only">Sadab Munshi</span>
    </Link>
  );
}
