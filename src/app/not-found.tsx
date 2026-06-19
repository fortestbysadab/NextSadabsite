import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-5xl text-center">
      <p className="font-mono text-display-md text-hairline-strong">
        ¯\_(ツ)_/¯
      </p>
      <h1 className="mt-lg text-display-lg text-ink">Page Not Found</h1>
      <p className="mt-md max-w-prose text-body-lg text-body">
        The page you are looking for does not exist. Maybe it moved. Maybe it
        never existed. Maybe you mistyped.
      </p>
      <Link href="/" className="btn-primary mt-xl">
        <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Go Home
      </Link>
    </div>
  );
}
