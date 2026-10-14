



"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { courses } from "@/data/courses";

/* Theme (same as testimonials / CTA panels)
   page cream  #f4efe7  |  panel #1a1a1a  |  card #202020
   text cream  #f4efe7  |  accent lime #c9ff3b                */

const categoryOrder = [
  "Data & Analytics",
  "AI & Generative AI",
  "Cloud & Enterprise",
  "Software Testing",
  "Full Stack Development",
  "Web Technologies",
  "Design",
  "Digital Marketing",
  "Programming Languages",
];

const featuredDataOrder = [
  "data-science",
  "data-analytics",
  "machine-learning",
];

const categoryRank = new Map(
  categoryOrder.map((category, index) => [category, index]),
);

const dataCourseRank = new Map(
  featuredDataOrder.map((slug, index) => [slug, index]),
);

const MAX_COURSES = 12;
const PUNE_SUFFIX = "-in-pune";

type CourseItem = (typeof courses)[number];

function getCourseHref(slug: string) {
  return `/courses/${slug}${PUNE_SUFFIX}`;
}

function getOrderedCourses(): CourseItem[] {
  return [...courses].sort((a, b) => {
    const rankA = categoryRank.get(a.category) ?? 999;
    const rankB = categoryRank.get(b.category) ?? 999;

    if (rankA !== rankB) {
      return rankA - rankB;
    }

    if (
      a.category === "Data & Analytics" &&
      b.category === "Data & Analytics"
    ) {
      const dataA = dataCourseRank.get(a.slug) ?? 999;
      const dataB = dataCourseRank.get(b.slug) ?? 999;

      if (dataA !== dataB) {
        return dataA - dataB;
      }
    }

    return a.title.localeCompare(b.title);
  });
}

function CourseCard({
  course,
  hidden = false,
}: {
  course: CourseItem;
  hidden?: boolean;
}) {
  return (
    <li className="dc-course-item" aria-hidden={hidden || undefined}>
      <Link
        href={getCourseHref(course.slug)}
        tabIndex={hidden ? -1 : undefined}
        className="dc-course-link group block rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
      >
        <div className="dc-course-card flex h-[220px] flex-col justify-between rounded-[28px] border border-[#f4efe7]/10 bg-[#202020] p-6 transition-[border-color,transform] duration-300 group-hover:border-[#c9ff3b]/50 sm:h-[240px]">
          <div className="flex items-start justify-between gap-3">
            {/* Same lime rounded icon tile as the testimonial quote icon */}
            <span className="flex size-[60px] shrink-0 items-center justify-center rounded-[20px] bg-[#c9ff3b] text-[#111]">
              <ArrowUpRight size={24} strokeWidth={2.5} aria-hidden="true" />
            </span>

            <span className="rounded-full border border-[#f4efe7]/15 px-3 py-1 text-xs font-medium text-[#f4efe7]/70">
              {course.duration}
            </span>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f4efe7]/50">
              {course.category}
            </p>

            <h3 className="max-w-[92%] text-[28px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#f4efe7] sm:text-[32px]">
              {course.title}
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function CoursesSection() {
  const featuredCourses = getOrderedCourses().slice(0, MAX_COURSES);
  const marqueeDuration = `${Math.max(featuredCourses.length * 6, 36)}s`;

  return (
    <section id="courses" className="section-space px-4 sm:px-8">
      {/* Rounded dark panel */}
      <div className="dc-courses-panel overflow-hidden rounded-[25px] bg-[#1a1a1a] py-16 text-[#f4efe7] sm:rounded-[35px] sm:py-24">
        <div className="px-6 sm:px-12 lg:px-[72px]">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#f4efe7]">
              <span
                className="size-2.5 rounded-full bg-[#c9ff3b]"
                aria-hidden="true"
              />
              Explore learning
            </p>

            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.07em] text-[#f4efe7] sm:text-6xl lg:text-7xl">
                  Find your next
                  <br />
                  learning path.
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-[#f4efe7]/55">
                  Explore data, analytics, AI, machine learning, cloud and
                  development courses with practical projects and placement
                  support.
                </p>
              </div>

              <Link
                href="/courses"
                className="dc-view-all inline-flex h-14 w-fit shrink-0 items-center gap-3 self-start rounded-full border border-[#f4efe7]/10 px-7 text-base font-semibold transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b] md:self-auto"
              >
                <span>View all courses</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Auto-scrolling carousel inside the panel */}
        <div
          className="dc-courses-marquee mt-12 sm:mt-16"
          style={
            {
              "--dc-marquee-duration": marqueeDuration,
            } as CSSProperties
          }
        >
          <div className="dc-courses-track">
            <ul className="dc-courses-group" aria-label="Featured courses">
              {featuredCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </ul>

            <ul className="dc-courses-group" aria-hidden="true">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={`${course.slug}-duplicate`}
                  course={course}
                  hidden
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-[72px]">
          <p className="text-xs text-[#f4efe7]/45">
            Showing {featuredCourses.length} of {courses.length} listed courses.
          </p>

          <Link
            href="/courses"
            className="dc-explore-link inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
          >
            Explore all courses
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style>{`
        /* Explicit colours so global link styles can't override them */
        .dc-view-all,
        .dc-view-all:link,
        .dc-view-all:visited {
          background-color: #111111;
          color: #f4efe7 !important;
        }

        .dc-view-all:hover {
          background-color: #c9ff3b !important;
          border-color: #c9ff3b !important;
          color: #111111 !important;
        }

        .dc-explore-link,
        .dc-explore-link:link,
        .dc-explore-link:visited {
          color: rgba(244, 239, 231, 0.7) !important;
        }

        .dc-explore-link:hover {
          color: #c9ff3b !important;
        }

        .dc-courses-marquee {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
        }

        .dc-courses-track {
          display: flex;
          width: max-content;
          animation: dc-courses-scroll var(--dc-marquee-duration, 72s) linear infinite;
          will-change: transform;
        }

        .dc-courses-group {
          display: flex;
          flex: none;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .dc-course-item {
          flex: 0 0 min(78vw, 340px);
          width: min(78vw, 340px);
          margin-right: 18px;
        }

        @media (min-width: 640px) {
          .dc-course-item {
            flex-basis: 380px;
            width: 380px;
            margin-right: 24px;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .dc-course-link:hover .dc-course-card {
            transform: translateY(-3px);
          }

          .dc-courses-marquee:hover .dc-courses-track {
            animation-play-state: paused;
          }
        }

        .dc-courses-marquee:focus-within .dc-courses-track {
          animation-play-state: paused;
        }

        @keyframes dc-courses-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .dc-courses-track { animation: none; }

          .dc-courses-marquee {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }

          .dc-courses-group[aria-hidden="true"] { display: none; }
          .dc-course-card { transition: none; }
        }
      `}</style>
    </section>
  );
}