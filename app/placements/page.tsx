import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import PlacementCards from "@/components/placements/PlacementCards";
import { PLACEMENTS } from "@/data/placements";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "Meet the Data Council learners who got placed, and the companies they joined.",
};

const preparation = [
  {
    title: "Practical learning",
    description:
      "Build familiarity with the concepts and tools used in your selected technology track.",
  },
  {
    title: "Project experience",
    description:
      "Develop practical project experience that can help demonstrate your skills.",
  },
  {
    title: "Interview preparation",
    description:
      "Use mock interviews and preparation support to practise explaining your skills and projects.",
  },
];

export default function PlacementsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f4f0e8]">
        {/* Hero */}
        <section className="container-main pb-16 pt-12 sm:pb-24 sm:pt-20">
          <div className="placement-hero-in">
            <p className="eyebrow">Career outcomes</p>

            <h1 className="display-heading mt-8 max-w-6xl">
              Turn your skills
              <br />
              <span className="text-[#77766f]">into opportunities.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-black/60">
                Meet the learners who built their skills with Data Council and
                the companies they joined.
              </p>

              <Link href="/contact" className="lime-button self-start">
                Discuss your goals <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Placed learners: real data, paginated cards */}
        <section
          id="placed"
          className="dark-section section-space"
        >
          <div className="container-main">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
                Our learners.
                <br />
                <span className="text-white/45">Their next chapter.</span>
              </h2>

              <p className="max-w-sm text-sm leading-7 text-white/55">
                <span className="font-semibold text-[#c9ff3b]">
                  {PLACEMENTS.length} placements
                </span>{" "}
                published so far, with companies from startups to global
                names.
              </p>
            </div>

            <div className="mt-12">
              <PlacementCards />
            </div>
          </div>
        </section>

        {/* Career preparation */}
        <section
          className="section-space"
          style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
        >
          <div className="container-main">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
              Prepare for what
              <br />
              comes next.
            </h2>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {preparation.map((item) => (
                <article
                  key={item.title}
                  className="h-full rounded-2xl border border-black/10 bg-white/40 p-6 sm:p-8"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dark-section py-20 sm:py-24">
          <div className="container-main">
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
                Your next chapter
                <br />
                starts with a conversation.
              </h2>

              <Link href="/contact" className="lime-button self-start">
                Contact Data Council <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}