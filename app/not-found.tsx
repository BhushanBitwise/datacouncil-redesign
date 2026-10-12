
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="container-main flex min-h-[75vh] flex-col items-start justify-center py-20">
        <span className="eyebrow">PAGE NOT FOUND</span>

        <h1 className="mt-6 text-[clamp(6rem,20vw,15rem)] font-bold leading-[0.8] tracking-[-0.1em]">
          404
        </h1>

        <h2 className="mt-10 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Looks like this page took a different path.
        </h2>

        <p className="mt-4 max-w-md leading-7 text-black/60">
          The page may have moved or the link may be incorrect.
          Let&apos;s get you back to learning.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="lime-button">
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <Link href="/courses" className="outline-button">
            Explore courses
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </main>
    </>
  );
}
