import { ReactNode } from "react";

export default function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  const tones = {
    default: "bg-canvas-soft-2 text-body",
    accent: "bg-link-bg-soft text-link-deep",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-xs py-px font-mono text-caption ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
