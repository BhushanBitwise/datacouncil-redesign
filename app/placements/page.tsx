
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "Explore Data Council's published placement highlights and career preparation support.",
};

const highlights = [
  { name: "Shweta S.", role: "Fullstack Developer", salary: "11.45 LPA" },
  { name: "Bhupendra N.", role: "Fullstack Developer", salary: "13 LPA" },
  { name: "Chetan J.", role: "Fullstack Developer", salary: "10.5 LPA" },
  { name: "Nikita M.", role: "Fullstack Developer", salary: "11 LPA" },
  { name: "Kunal R.", role: "Fullstack Developer", salary: "10.5 LPA" },
  { name: "Noman A.", role: "Fullstack Developer", salary: "10 LPA" },
  { name: "Prerana N.", role: "Placement highlight", salary: "9.75 LPA" },
];

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
        <section className="container-main pb-16 pt-12 sm:pb-24 sm:pt-20">
          <ScrollReveal>
            <p className="eyebrow">Career outcomes</p>

            <h1 className="display-heading mt-8 max-w-6xl">
              Turn your skills
              <br />
              <span className="text-[#77766f]">into opportunities.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-8 text-black/60">
                Explore published student placement highlights and learn about
                the career preparation support offered by Data Council.
              </p>

              <Link href="/contact" className="lime-button self-start">
                Discuss your goals <ArrowUpRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <section className="dark-section section-space">
          <div className="container-main">
            <ScrollReveal>
              <p className="eyebrow">Published placement highlights</p>

              <div className="mt-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
                  Individual journeys.
                  <br />
                  Career milestones.
                </h2>

                <p className="max-w-sm text-sm leading-7 text-white/55">
                  A selection of placement examples published on the Data
                  Council website.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((student, index) => (
                <ScrollReveal
                  key={student.name}
                  delay={(index % 3) * 0.06}
                >
                  <article className="group rounded-2xl border border-white/15 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-[#c9ff3b]/50 hover:bg-white/[0.07]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9ff3b] text-sm font-bold text-black">
                        {student.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .replace(".", "")}
                      </span>

                      <BriefcaseBusiness
                        size={19}
                        className="text-white/40 transition-colors group-hover:text-[#c9ff3b]"
                      />
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {student.name}
                      </h3>

                      <p className="mt-1 text-sm text-white/50">
                        {student.role}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/15 pt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                        Published salary highlight
                      </p>

                      <p className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-[#c9ff3b]">
                        {student.salary}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-xs leading-6 text-white/40">
              Published individual examples only. These figures are not
              average salary statistics, independently audited outcomes or
              guarantees of placement. Confirm names, roles and figures before
              production publication.
            </p>
          </div>
        </section>

        <section className="section-space">
          <div className="container-main">
            <ScrollReveal>
              <p className="eyebrow">Career preparation</p>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
                Prepare for what
                <br />
                comes next.
              </h2>
            </ScrollReveal>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {preparation.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.07}>
                  <article className="h-full rounded-2xl border border-black/10 bg-white/40 p-6 sm:p-8">
                    <span className="text-xs font-semibold text-black/40">
                      0{index + 1}
                    </span>

                    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/60">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section py-20 sm:py-24">
          <div className="container-main">
            <ScrollReveal>
              <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow">Start your journey</p>

                  <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
                    Your next chapter
                    <br />
                    starts with a conversation.
                  </h2>
                </div>

                <Link href="/contact" className="lime-button self-start">
                  Contact Data Council <ArrowUpRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
