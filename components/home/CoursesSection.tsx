
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { courses } from "@/data/courses";

export default function CoursesSection() {
  return (
    <section id="courses" className="dark-section section-space">
      <div className="container-main">
        <ScrollReveal>
          <p className="eyebrow">Explore learning</p>

          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              Find your next
              <br />
              learning path.
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/55">
              Explore programming, full-stack development, data, cloud,
              testing, design and digital marketing courses.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {courses.slice(0, 8).map((course, index) => (
            <ScrollReveal key={course.slug} delay={(index % 4) * 0.06}>
              <Link
                href={`/courses/${course.slug}`}
                className="group flex min-h-[245px] flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-[#c9ff3b]/60 hover:bg-white/[0.07] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c9ff3b] group-hover:bg-[#c9ff3b] group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c9ff3b]">
                    {course.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em]">
                    {course.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                    <span className="text-xs text-white/50">Duration</span>
                    <span className="text-xs font-medium">
                      {course.duration}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            Showing {Math.min(8, courses.length)} of {courses.length} listed courses.
          </p>

          <Link href="/courses" className="lime-button self-start">
            View all courses <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
