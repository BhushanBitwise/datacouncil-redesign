
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses | Data Council",
  description:
    "Explore Data Council training courses in programming, full-stack development, data science, cloud, testing and digital marketing.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Explore Courses | Data Council",
    description:
      "Discover technology courses and explore your next learning opportunity with Data Council.",
    url: "/courses",
    type: "website",
  },
};

function getCategoryId(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function CoursesPage() {
  const categories = [...new Set(courses.map((course) => course.category))];

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-clip bg-[#f4f0e8] text-[#101010]">
        {/* Compact course directory hero */}
        <section className="container-main pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pt-14">
          <ScrollReveal>
            <Link
              href="/"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/15 px-4 text-xs font-medium text-black/65 transition-colors hover:border-black hover:bg-white/60 hover:text-black"
            >
              <ArrowLeft size={15} />
              Back home
            </Link>

            <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6">
              <p className="eyebrow">Course directory</p>

              <h1 className="max-w-5xl text-[clamp(3.25rem,8.5vw,7.5rem)] font-bold leading-[0.91] tracking-[-0.085em]">
                Learn a skill.
                <br />
                Build what&apos;s next
                <span className="text-[#77766f]">.</span>
              </h1>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                  Explore technology courses across development, data,
                  cloud and more. Choose a course to view its overview
                  and enquire about current availability.
                </p>

                <a
                  href="#course-list"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
                >
                  Explore courses
                  <ArrowDownRight size={17} />
                </a>
              </div>
            </div>

            {/* Category navigation */}
            <nav
              aria-label="Course categories"
              className="mt-8 flex flex-wrap gap-2 border-t border-black/10 pt-5 sm:mt-10 sm:pt-6"
            >
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${getCategoryId(category)}`}
                  className="inline-flex min-h-9 items-center rounded-full border border-black/15 px-4 py-2 text-xs font-medium transition-colors hover:border-[#c9ff3b] hover:bg-[#c9ff3b]"
                >
                  {category}
                </a>
              ))}
            </nav>
          </ScrollReveal>
        </section>

        {/* Course groups */}
        <section
          id="course-list"
          className="container-main scroll-mt-24 pb-20 sm:pb-28"
        >
          <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
              Explore the catalogue
            </p>

            <p className="text-xs text-black/50">
              {courses.length} courses
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {categories.map((category) => {
              const categoryCourses = courses.filter(
                (course) => course.category === category,
              );

              return (
                <section
                  key={category}
                  id={getCategoryId(category)}
                  className="scroll-mt-24"
                  aria-labelledby={`heading-${getCategoryId(category)}`}
                >
                  <ScrollReveal>
                    <div className="flex items-end justify-between gap-4 border-b border-black/15 pb-4">
                      <h2
                        id={`heading-${getCategoryId(category)}`}
                        className="text-2xl font-semibold tracking-[-0.055em] sm:text-3xl"
                      >
                        {category}
                      </h2>

                      <span className="shrink-0 text-xs text-black/45">
                        {categoryCourses.length}{" "}
                        {categoryCourses.length === 1 ? "course" : "courses"}
                      </span>
                    </div>
                  </ScrollReveal>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryCourses.map((course, index) => (
                      <ScrollReveal
                        key={course.slug}
                        direction="up"
                        delay={(index % 3) * 0.04}
                      >
                        <Link
                          href={`/courses/${course.slug}`}
                          className="group flex h-full min-h-[210px] flex-col justify-between rounded-2xl border border-black/10 bg-white/45 p-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-black/25 hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00] sm:min-h-[225px] sm:p-6"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-medium text-black/55">
                              {course.duration}
                            </span>

                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:border-[#c9ff3b] group-hover:bg-[#c9ff3b]">
                              <ArrowUpRight
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              />
                            </span>
                          </div>

                          <div className="mt-8">
                            <h3 className="text-xl font-semibold leading-snug tracking-[-0.045em] sm:text-2xl">
                              {course.title}
                            </h3>

                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/55">
                              {course.description}
                            </p>

                            <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold">
                              View course
                              <ArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </span>
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="dark-section py-16 sm:py-20">
          <div className="container-main">
            <ScrollReveal>
              <p className="eyebrow">Not sure where to start?</p>

              <div className="mt-6 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
                    Let&apos;s find the right course for you.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                    Contact our team to discuss your interests and
                    confirm current course details.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="lime-button w-fit shrink-0"
                >
                  Talk to our team
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
