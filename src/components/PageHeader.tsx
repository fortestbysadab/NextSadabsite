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
    <header className="flex flex-col gap-6">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="headline-serif text-5xl md:text-6xl">{title}</h1>
      {description && (
        <p className="max-w-prose text-body-lg text-forest-soft">
          {description}
        </p>
      )}
      {children}
    </header>
  );
}
