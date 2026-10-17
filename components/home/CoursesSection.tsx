"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
const ALL = "All";

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

const orderedCourses = getOrderedCourses();

// Only show filter chips for categories that actually have courses
const availableCategories = categoryOrder.filter((category) =>
  orderedCourses.some((course) => course.category === category),
);

function CourseCard({ course }: { course: CourseItem }) {
  return (
    <li className="dc-course-item">
      <Link
        href={getCourseHref(course.slug)}
        draggable={false}
        className="dc-course-link group block h-full rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
      >
        <div className="dc-course-card flex h-[230px] flex-col justify-between rounded-[28px] border border-[#f4efe7]/10 bg-[#202020] p-5 transition-[border-color,transform] duration-300 group-hover:border-[#c9ff3b]/50 sm:h-[250px] sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[18px] bg-[#c9ff3b] text-[#111] transition-transform duration-300 group-hover:rotate-[-6deg] sm:size-[60px] sm:rounded-[20px]">
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

            <h3 className="line-clamp-2 max-w-[94%] text-[24px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#f4efe7] sm:text-[30px]">
              {course.title}
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
}

/* Last card in the row: takes the learner to the full catalogue */
function ViewAllCard({ total }: { total: number }) {
  return (
    <li className="dc-course-item">
      <Link
        href="/courses"
        draggable={false}
        className="dc-course-link group block h-full rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
      >
        <div className="dc-course-card flex h-[230px] flex-col justify-between rounded-[28px] bg-[#c9ff3b] p-5 text-[#111] transition-transform duration-300 sm:h-[250px] sm:p-6">
          <span className="flex size-[52px] items-center justify-center rounded-[18px] bg-[#111] text-[#c9ff3b] sm:size-[60px] sm:rounded-[20px]">
            <ArrowUpRight size={24} strokeWidth={2.5} aria-hidden="true" />
          </span>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#111]/60">
              {total} courses listed
            </p>
            <h3 className="text-[24px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[30px]">
              See the full course catalogue
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [thumb, setThumb] = useState({ left: 0, width: 100 });

  const scrollerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const visibleCourses =
    activeCategory === ALL
      ? orderedCourses.slice(0, MAX_COURSES)
      : orderedCourses.filter((course) => course.category === activeCategory);

  /* Read scroll position -> arrows + progress bar */
  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < maxScroll - 4);

    if (maxScroll <= 0) {
      setThumb({ left: 0, width: 100 });
      return;
    }

    const width = Math.max((clientWidth / scrollWidth) * 100, 18);
    const left = (scrollLeft / maxScroll) * (100 - width);
    setThumb({ left, width });
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateScrollState();
    });
  }, [updateScrollState]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [updateScrollState, activeCategory]);

  /* New filter -> start from the first card */
  useEffect(() => {
    scrollerRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [activeCategory]);

  const scrollByPage = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    el.scrollBy({
      left: direction * el.clientWidth * 0.8,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByPage(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByPage(-1);
    }
  };

  return (
    <section id="courses" className="section-space px-4 sm:px-8">
      {/* Rounded dark panel */}
      <div className="dc-courses-panel overflow-hidden rounded-[25px] bg-[#1a1a1a] py-14 text-[#f4efe7] sm:rounded-[35px] sm:py-24">
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

        {/* Category chips (swipeable on mobile) */}
        <div
          className="dc-scroller mt-10 flex gap-2.5 overflow-x-auto px-6 sm:px-12 lg:px-[72px]"
          role="tablist"
          aria-label="Filter courses by category"
        >
          {[ALL, ...availableCategories].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`dc-chip shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9ff3b] ${
                  isActive
                    ? "border-[#c9ff3b] bg-[#c9ff3b] text-[#111]"
                    : "border-[#f4efe7]/15 bg-transparent text-[#f4efe7]/75 hover:border-[#f4efe7]/40"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Manual scroller: swipe on mobile, arrows + trackpad on desktop */}
        <div className="relative mt-6 sm:mt-8">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Featured courses. Use left and right arrow keys to scroll."
            className="dc-scroller dc-courses-scroller focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#c9ff3b]"
          >
            <ul className="dc-courses-list">
              {visibleCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
              {activeCategory === ALL && (
                <ViewAllCard total={courses.length} />
              )}
            </ul>
          </div>

          {/* Desktop arrows (hidden on touch-size screens) */}
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={!canPrev}
            aria-label="Scroll courses left"
            className="dc-arrow absolute left-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f4efe7] text-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-[opacity,background-color] duration-200 hover:bg-[#c9ff3b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9ff3b] md:flex lg:left-6"
            style={{
              opacity: canPrev ? 1 : 0,
              pointerEvents: canPrev ? "auto" : "none",
            }}
          >
            <ChevronLeft size={22} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={!canNext}
            aria-label="Scroll courses right"
            className="dc-arrow absolute right-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f4efe7] text-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-[opacity,background-color] duration-200 hover:bg-[#c9ff3b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9ff3b] md:flex lg:right-6"
            style={{
              opacity: canNext ? 1 : 0,
              pointerEvents: canNext ? "auto" : "none",
            }}
          >
            <ChevronRight size={22} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        {/* Scroll progress bar (like Internshala's slider indicator) */}
        <div className="mt-6 px-6 sm:px-12 lg:px-[72px]" aria-hidden="true">
          <div className="relative mx-auto h-[3px] w-full max-w-[220px] overflow-hidden rounded-full bg-[#f4efe7]/15">
            <span
              className="absolute inset-y-0 rounded-full bg-[#c9ff3b]"
              style={{ left: `${thumb.left}%`, width: `${thumb.width}%` }}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-[72px]">
          <p className="text-xs text-[#f4efe7]/45">
            Showing {visibleCourses.length} of {courses.length} listed courses.
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

        /* Hide native scrollbar, keep scrolling */
        .dc-scroller {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .dc-scroller::-webkit-scrollbar {
          display: none;
        }

        /* Manual scroller with snap */
        .dc-courses-scroller {
          overflow-x: auto;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scroll-padding-inline: 24px;
        }

        .dc-courses-list {
          display: flex;
          gap: 16px;
          width: max-content;
          margin: 0;
          padding: 4px 24px;
          list-style: none;
        }

        .dc-course-item {
          flex: 0 0 min(78vw, 320px);
          width: min(78vw, 320px);
          scroll-snap-align: start;
        }

        @media (min-width: 640px) {
          .dc-courses-scroller { scroll-padding-inline: 48px; }
          .dc-courses-list { gap: 24px; padding-inline: 48px; }
          .dc-course-item { flex-basis: 380px; width: 380px; }
        }

        @media (min-width: 1024px) {
          .dc-courses-scroller { scroll-padding-inline: 72px; }
          .dc-courses-list { padding-inline: 72px; }
        }

        @media (hover: hover) and (pointer: fine) {
          .dc-course-link:hover .dc-course-card {
            transform: translateY(-3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dc-course-card,
          .dc-arrow { transition: none; }
        }
      `}</style>
    </section>
  );
}