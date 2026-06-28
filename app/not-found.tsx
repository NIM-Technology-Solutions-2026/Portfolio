import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-white px-6">
      <div className="text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-5 text-4xl font-800 text-ink sm:text-5xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
