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
  // Header badge is 32px; footer circle is smaller (28px).
  const defaultBox =
    shape === "circle" ? "h-7 w-7 rounded-full" : "h-8 w-8 rounded-md";

  return (
    <Link
      href="/"
      aria-label="Sadab Munshi — Home"
      className={`inline-flex items-center ${className}`}
    >
      <span
        aria-hidden
        className={`grid place-items-center bg-primary p-[3px] ${
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
