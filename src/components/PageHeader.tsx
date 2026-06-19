import { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="flex flex-col gap-md">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="text-display-lg text-ink md:text-display-xl">{title}</h1>
      {description && (
        <p className="max-w-prose text-body-lg text-body">{description}</p>
      )}
      {children}
    </header>
  );
}
