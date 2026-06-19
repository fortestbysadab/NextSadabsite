import Link from "next/link";

/**
 * Wordmark logo. The original site used a "S.M." monogram image;
 * we render it as type to keep it crisp and dependency-free.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Sadab Munshi — Home"
      className={`inline-flex items-center gap-2 font-sans text-[15px] font-semibold tracking-[-0.04em] text-ink ${className}`}
    >
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-md bg-primary text-[12px] font-semibold text-on-primary"
      >
        SM
      </span>
      <span>Sadab Munshi</span>
    </Link>
  );
}
