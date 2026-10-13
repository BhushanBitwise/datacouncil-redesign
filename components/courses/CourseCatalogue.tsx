
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Layers3,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import type { Course } from "@/data/courses";

type Props = {
  courses: Course[];
};

const PAGE_SIZE = 9;

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

const categoryIcons: Record<string, typeof Code2> = {
  "Data & Analytics": BarChart3,
  "AI & Generative AI": BrainCircuit,
  "Cloud & Enterprise": Cloud,
  "Software Testing": ShieldCheck,
  "Full Stack Development": Layers3,
  "Web Technologies": Code2,
  Design: Palette,
  "Digital Marketing": Megaphone,
  "Programming Languages": Terminal,
};

const courseIcons: Record<string, typeof Code2> = {
  "data-science": BrainCircuit,
  "data-analytics": BarChart3,
  "machine-learning": Database,
  aws: Cloud,
  mern: Layers3,
  mean: Layers3,
  "fullstack-java": Code2,
  java: Terminal,
  python: Terminal,
  php: Terminal,
  "node-js": Code2,
  "ui-ux-designing": Palette,
  seo: Megaphone,
  "selenium-java": ShieldCheck,
  "selenium-python": ShieldCheck,
};

function getCoursePath(slug: string) {
  return `/courses/${slug}-in-pune`;
}

function sortCourses(items: Course[]) {
  return [...items].sort((a, b) => {
    const aCategory = categoryOrder.indexOf(a.category);
    const bCategory = categoryOrder.indexOf(b.category);

    const aRank = aCategory === -1 ? 999 : aCategory;
    const bRank = bCategory === -1 ? 999 : bCategory;

    if (aRank !== bRank) return aRank - bRank;

    if (a.category === "Data & Analytics") {
      const dataOrder = [
        "data-science",
        "data-analytics",
        "machine-learning",
      ];

      const aDataRank = dataOrder.indexOf(a.slug);
      const bDataRank = dataOrder.indexOf(b.slug);

      if (aDataRank !== bDataRank) {
        return (aDataRank === -1 ? 999 : aDataRank) -
          (bDataRank === -1 ? 999 : bDataRank);
      }
    }

    return a.title.localeCompare(b.title);
  });
}

export default function CourseCatalogue({ courses }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [currentPage, setCurrentPage] = useState(1);

  const orderedCourses = useMemo(
    () => sortCourses(courses),
    [courses],
  );

  const categories = useMemo(() => {
    const available = new Set(orderedCourses.map((course) => course.category));

    return [
      "All Courses",
      ...categoryOrder.filter((category) => available.has(category)),
      ...[...available].filter(
        (category) => !categoryOrder.includes(category),
      ),
    ];
  }, [orderedCourses]);

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return orderedCourses.filter((course) => {
      const matchesCategory =
        activeCategory === "All Courses" ||
        course.category === activeCategory;

      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [orderedCourses, activeCategory, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / PAGE_SIZE),
  );

  const safePage = Math.min(currentPage, totalPages);

  const visibleCourses = filteredCourses.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  function changeCategory(category: string) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function changeSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  return (
    <section className="container-main pb-20 sm:pb-28" id="course-list">
      <div className="mb-7 flex flex-col gap-5 border-b border-black/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Explore the catalogue</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
            Find your next skill.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
            Explore courses by subject, search for a skill, and open a course
            to see its details.
          </p>
        </div>

        <p className="shrink-0 text-sm text-black/50">
          {filteredCourses.length}{" "}
          {filteredCourses.length === 1 ? "course" : "courses"}
        </p>
      </div>

      <div className="relative mb-5">
        <Search
          aria-hidden="true"
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
        />
        <input
          type="search"
          value={search}
          onChange={(event) => changeSearch(event.target.value)}
          placeholder="Search courses, skills or categories..."
          aria-label="Search courses"
          className="min-h-12 w-full rounded-2xl border border-black/15 bg-white/55 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-black/50 focus:bg-white"
        />
      </div>

      <div
        className="mb-8 flex gap-2 overflow-x-auto pb-2"
        aria-label="Filter courses by category"
      >
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
              aria-pressed={active}
              className={`min-h-10 shrink-0 rounded-full border px-4 text-xs font-semibold transition-colors duration-200 ${
                active
                  ? "border-[#c9ff3b] bg-[#c9ff3b] text-[#101010]"
                  : "border-black/15 bg-white/30 text-black/65 hover:border-black/35 hover:bg-white/70"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {visibleCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => {
            const Icon =
              courseIcons[course.slug] ??
              categoryIcons[course.category] ??
              Code2;

            return (
              <Link
                key={course.slug}
                href={getCoursePath(course.slug)}
                className="group flex min-h-[245px] flex-col rounded-2xl border border-black/10 bg-white/45 p-5 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-black/25 hover:bg-white/85 hover:shadow-[0_12px_32px_rgba(16,16,16,0.06)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-black/10 bg-[#f4f0e8] transition-colors duration-300 group-hover:border-[#c9ff3b] group-hover:bg-[#c9ff3b]">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>

                  <span className="flex size-9 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:border-[#c9ff3b] group-hover:bg-[#c9ff3b]">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="mt-7 flex flex-1 flex-col">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-black/45">
                    {course.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.045em] sm:text-2xl">
                    {course.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/55">
                    {course.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <span className="text-xs font-medium text-black/50">
                      {course.duration}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                      View course
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-black/20 px-5 py-14 text-center">
          <Search className="mx-auto text-black/40" size={26} />
          <h3 className="mt-4 text-lg font-semibold">No courses found</h3>
          <p className="mt-2 text-sm text-black/55">
            Try another keyword or select a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              changeCategory("All Courses");
            }}
            className="mt-5 rounded-full border border-black/15 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white"
          >
            Clear filters
          </button>
        </div>
      )}

      {filteredCourses.length > PAGE_SIZE && (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="Course pagination"
        >
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={safePage === 1}
            className="inline-flex min-h-10 items-center gap-1 rounded-full border border-black/15 px-3 text-sm transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={safePage === page ? "page" : undefined}
                className={`size-10 rounded-full border text-sm font-semibold transition-colors ${
                  safePage === page
                    ? "border-[#c9ff3b] bg-[#c9ff3b]"
                    : "border-black/15 hover:bg-white"
                }`}
              >
                {page}
              </button>
            ),
          )}

          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={safePage === totalPages}
            className="inline-flex min-h-10 items-center gap-1 rounded-full border border-black/15 px-3 text-sm transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </nav>
      )}

      {filteredCourses.length > 0 && (
        <p className="mt-4 text-center text-xs text-black/45" aria-live="polite">
          Showing {(safePage - 1) * PAGE_SIZE + 1}–
          {Math.min(safePage * PAGE_SIZE, filteredCourses.length)} of{" "}
          {filteredCourses.length} courses
        </p>
      )}
    </section>
  );
}
