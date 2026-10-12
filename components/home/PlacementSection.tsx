
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const placements = [
  { name: "Shweta S.", role: "Fullstack Developer", salary: "11.45 LPA" },
  { name: "Bhupendra N.", role: "Fullstack Developer", salary: "13 LPA" },
  { name: "Chetan N.", role: "Fullstack Developer", salary: "10.5 LPA" },
  { name: "Nikita M.", role: "Fullstack Developer", salary: "11 LPA" },
  { name: "Kunal R.", role: "Fullstack Developer", salary: "10.5 LPA" },
  { name: "Noman A.", role: "Fullstack Developer", salary: "10 LPA" },
];

export default function PlacementSection() {
  return (
    <section className="section-space">
      <div className="container-main">
        <ScrollReveal>
          <p className="eyebrow">Career outcomes</p>

          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              Skills that take
              <br />
              you places.
            </h2>

            <p className="max-w-sm text-sm leading-7 text-black/60">
              Explore student placement highlights published by Data Council.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {placements.map((student, index) => (
            <ScrollReveal key={student.name} delay={(index % 3) * 0.08}>
              <article className="group rounded-2xl border border-black/10 bg-white/50 p-6 transition-colors duration-300 hover:bg-white">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#101010] text-sm font-semibold text-[#c9ff3b]">
                    {student.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .replace(".", "")}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-black/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  />
                </div>

                <div className="mt-10">
                  <p className="text-xl font-semibold tracking-tight">
                    {student.name}
                  </p>
                  <p className="mt-1 text-sm text-black/55">{student.role}</p>
                </div>

                <div className="mt-6 border-t border-black/10 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
                    Published salary highlight
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.07em]">
                    {student.salary}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-black/45">
          These are published individual highlights, not a representation of
          average salary or a guaranteed placement outcome.
        </p>

        <Link href="/placements" className="outline-button mt-7">
          Explore placements <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
