import { ReactNode } from "react";

export default function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  const tones = {
    default: "border-stone bg-transparent text-forest-soft",
    accent: "border-sage bg-success-soft text-sage-deep",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-sans text-caption uppercase tracking-widest ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
