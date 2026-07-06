import Image from "next/image";
import Link from "next/link";

/**
 * Logo — the "S.M." monogram SVG rendered inside the brand's dark badge.
 * Icon only (no wordmark).
 *
 * @param shape  "square" (header, rounded-md) or "circle" (footer, rounded-full)
 * @param boxClassName  override the badge box size (defaults differ per shape)
 */
export default function Logo({
  className = "",
  shape = "square",
  boxClassName,
}: {
  className?: string;
  shape?: "square" | "circle";
  boxClassName?: string;
}) {
  // Soft pale sage circle so the monogram floats rather than sits in a hard box.
  const defaultBox =
    shape === "circle"
      ? "h-9 w-9 rounded-full"
      : "h-9 w-9 rounded-full";

  return (
    <Link
      href="/"
      aria-label="Sadab Munshi — Home"
      className={`inline-flex items-center ${className}`}
    >
      <span
        aria-hidden
        className={`grid place-items-center border border-stone bg-forest p-[5px] transition-colors duration-300 ${
          boxClassName ?? defaultBox
        }`}
      >
        <Image
          src="/assets/images/s-m.monogram.svg"
          alt=""
          width={26}
          height={26}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="sr-only">Sadab Munshi</span>
    </Link>
  );
}
