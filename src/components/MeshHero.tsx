import { ReactNode } from "react";

/**
 * Hero band with the signature multi-stop mesh gradient backdrop.
 * The gradient is the brand's only decorative system — used at hero scale only.
 */
export default function MeshHero({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline">
      {/* Mesh gradient atmospheric backdrop — occupies the top portion */}
      <div
        aria-hidden
        className="mesh-gradient pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120%] opacity-[0.55]"
      />
      {/* Fade the gradient into canvas at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-canvas-soft/40 to-canvas-soft"
      />
      <div className="container-page py-4xl md:py-5xl">{children}</div>
    </section>
  );
}
