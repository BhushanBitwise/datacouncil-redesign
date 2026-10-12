
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="container-main flex min-h-[75vh] flex-col items-start justify-center py-20">
      <span className="eyebrow">SOMETHING WENT WRONG</span>

      <div className="mt-8 flex size-14 items-center justify-center rounded-2xl bg-black/5">
        <AlertTriangle size={26} />
      </div>

      <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight sm:text-6xl">
        Let&apos;s get you back on track.
      </h1>

      <p className="mt-4 max-w-md leading-7 text-black/60">
        An unexpected error occurred. You can retry this page or
        return to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button onClick={reset} className="lime-button">
          <RotateCcw size={16} />
          Try again
        </button>

        <Link href="/" className="outline-button">
          Back to home
        </Link>
      </div>
    </main>
  );
}
