// import type { CSSProperties } from "react";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// import ScrollReveal from "@/components/ui/ScrollReveal";
// import { courses } from "@/data/courses";

// const categoryOrder = [
//   "Data & Analytics",
//   "AI & Generative AI",
//   "Cloud & Enterprise",
//   "Software Testing",
//   "Full Stack Development",
//   "Web Technologies",
//   "Design",
//   "Digital Marketing",
//   "Programming Languages",
// ];

// const featuredDataOrder = [
//   "data-science",
//   "data-analytics",
//   "machine-learning",
// ];

// // Cream background par soft pastel glow, har category ka alag
// const categoryTint: Record<string, string> = {
//   "Data & Analytics": "201, 255, 59",
//   "AI & Generative AI": "168, 120, 255",
//   "Cloud & Enterprise": "70, 150, 220",
//   "Software Testing": "255, 150, 80",
//   "Full Stack Development": "255, 190, 90",
//   "Web Technologies": "60, 190, 180",
//   Design: "255, 110, 150",
//   "Digital Marketing": "255, 170, 60",
//   "Programming Languages": "120, 140, 255",
// };

// const DEFAULT_TINT = "201, 255, 59";
// const MAX_COURSES = 12;
// const PUNE_SUFFIX = "-in-pune";

// // Halka hexagon pattern (dark stroke, kyunki card cream hai)
// const hexPattern =
//   "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='64' viewBox='0 0 56 64'%3E%3Cpath d='M14 1L28 9V25L14 33L0 25V9ZM42 33L56 41V57L42 65L28 57V41Z' fill='none' stroke='%23111111' stroke-opacity='.075' stroke-width='1'/%3E%3C/svg%3E\")";

// type CourseItem = (typeof courses)[number];

// function getCourseHref(slug: string) {
//   return `/courses/${slug}${PUNE_SUFFIX}`;
// }

// function getOrderedCourses(): CourseItem[] {
//   return [...courses].sort((a, b) => {
//     const aCategoryIndex = categoryOrder.indexOf(a.category);
//     const bCategoryIndex = categoryOrder.indexOf(b.category);

//     const aCategoryRank = aCategoryIndex === -1 ? 999 : aCategoryIndex;
//     const bCategoryRank = bCategoryIndex === -1 ? 999 : bCategoryIndex;

//     if (aCategoryRank !== bCategoryRank) {
//       return aCategoryRank - bCategoryRank;
//     }

//     if (a.category === "Data & Analytics" && b.category === "Data & Analytics") {
//       const aDataIndex = featuredDataOrder.indexOf(a.slug);
//       const bDataIndex = featuredDataOrder.indexOf(b.slug);

//       const aDataRank = aDataIndex === -1 ? 999 : aDataIndex;
//       const bDataRank = bDataIndex === -1 ? 999 : bDataIndex;

//       if (aDataRank !== bDataRank) {
//         return aDataRank - bDataRank;
//       }
//     }

//     return a.title.localeCompare(b.title);
//   });
// }

// function CourseCard({
//   course,
//   hidden = false,
// }: {
//   course: CourseItem;
//   hidden?: boolean;
// }) {
//   const tint = categoryTint[course.category] ?? DEFAULT_TINT;

//   return (
//     <li className="dc-course-item" aria-hidden={hidden || undefined}>
//       <Link
//         href={getCourseHref(course.slug)}
//         tabIndex={hidden ? -1 : undefined}
//         className="dc-course-link group block rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111]"
//       >
//         <div
//           className="dc-course-card relative flex h-[190px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#111]/10 p-5 transition-[border-color,transform] duration-300 group-hover:border-[#111]/30 sm:h-[225px] sm:p-6"
//           style={{
//             backgroundColor: "#ece6d9",
//             backgroundImage: `
//               radial-gradient(
//                 120% 100% at 90% 0%,
//                 rgba(${tint}, 0.4) 0%,
//                 rgba(${tint}, 0.14) 45%,
//                 transparent 76%
//               ),
//               ${hexPattern}
//             `,
//           }}
//         >
//           <div className="flex items-start justify-between gap-3">
//             <span className="rounded-full border border-[#111]/15 bg-[#f4efe7]/70 px-3 py-1 text-xs font-medium text-[#111]/70">
//               {course.duration}
//             </span>

//             <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white transition-[background-color,color] duration-300 group-hover:bg-[#c9ff3b] group-hover:text-[#111]">
//               <ArrowUpRight size={18} aria-hidden="true" />
//             </span>
//           </div>

//           <div>
//             <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 sm:text-[11px]">
//               {course.category}
//             </p>

//             <h3 className="max-w-[92%] text-[28px] font-semibold leading-[1.02] tracking-[-0.06em] text-[#111] sm:text-[34px]">
//               {course.title}
//             </h3>
//           </div>
//         </div>
//       </Link>
//     </li>
//   );
// }

// export default function CoursesSection() {
//   const featuredCourses = getOrderedCourses().slice(0, MAX_COURSES);

//   // Cards zyada = duration lambi, isliye speed hamesha same rehti hai
//   const marqueeDuration = `${Math.max(featuredCourses.length * 6, 36)}s`;

//   return (
//     <section
//       id="courses"
//       className="dc-courses-section section-space overflow-hidden"
//     >
//       <div className="container-main">
//         <ScrollReveal>
//           <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#111]">
//             <span className="size-2 rounded-full bg-[#111]" aria-hidden="true" />
//             Explore learning
//           </p>

//           <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
//             <div>
//               <h2 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.07em] text-[#111] sm:text-6xl lg:text-7xl">
//                 Find your next
//                 <br />
//                 <span className="dc-highlight">learning path.</span>
//               </h2>

//               <p className="mt-6 max-w-md text-base leading-7 text-[#111]/60">
//                 Explore data, analytics, AI, machine learning, cloud and
//                 development courses with practical projects and placement
//                 support.
//               </p>
//             </div>

//             <Link
//               href="/courses"
//               className="inline-flex h-14 w-fit shrink-0 items-center gap-3 self-start rounded-full bg-[#111] px-7 text-base font-semibold text-white transition-[background-color,color] duration-300 hover:bg-[#c9ff3b] hover:text-[#111] md:self-auto text-white"
//             >
//               View all courses
//               <ArrowUpRight size={17} aria-hidden="true" />
//             </Link>
//           </div>
//         </ScrollReveal>
//       </div>

//       {/* Full-width auto scroller */}
//       <div
//         className="dc-courses-marquee mt-10 sm:mt-14"
//         style={{ "--dc-marquee-duration": marqueeDuration } as CSSProperties}
//       >
//         <div className="dc-courses-track">
//           <ul className="dc-courses-group" aria-label="Featured courses">
//             {featuredCourses.map((course) => (
//               <CourseCard key={course.slug} course={course} />
//             ))}
//           </ul>

//           {/* Duplicate set: seamless loop ke liye, screen readers se hidden */}
//           <ul className="dc-courses-group" aria-hidden="true">
//             {featuredCourses.map((course) => (
//               <CourseCard
//                 key={`${course.slug}-duplicate`}
//                 course={course}
//                 hidden
//               />
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="container-main">
//         <p className="mt-8 text-xs text-[#111]/45">
//           Showing {featuredCourses.length} of {courses.length} listed courses.
//         </p>
//       </div>

//       <style>{`
//         .dc-courses-section {
//           background: #f4efe7;
//           color: #111;
//         }

//         /* "ready." jaisa lime highlight bar */
//         .dc-highlight {
//           background-image: linear-gradient(
//             transparent 64%,
//             #c9ff3b 64%,
//             #c9ff3b 94%,
//             transparent 94%
//           );
//           padding: 0 0.08em;
//           -webkit-box-decoration-break: clone;
//           box-decoration-break: clone;
//         }

//         .dc-courses-marquee {
//           width: 100%;
//           overflow: hidden;
//           -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
//           mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
//         }

//         .dc-courses-track {
//           display: flex;
//           width: max-content;
//           animation: dc-courses-scroll var(--dc-marquee-duration, 72s) linear infinite;
//           will-change: transform;
//           backface-visibility: hidden;
//         }

//         .dc-courses-group {
//           display: flex;
//           flex: none;
//           margin: 0;
//           padding: 0;
//           list-style: none;
//         }

//         /* gap nahi, margin: taaki -50% exact loop point ho aur jerk na aaye */
//         .dc-course-item {
//           flex: 0 0 min(78vw, 340px);
//           width: min(78vw, 340px);
//           margin-right: 18px;
//         }

//         @media (min-width: 640px) {
//           .dc-course-item {
//             flex-basis: 360px;
//             width: 360px;
//             margin-right: 22px;
//           }
//         }

//         @media (min-width: 1024px) {
//           .dc-course-item {
//             flex-basis: 400px;
//             width: 400px;
//             margin-right: 24px;
//           }
//         }

//         @media (hover: hover) and (pointer: fine) {
//           .dc-course-link:hover .dc-course-card {
//             transform: translateY(-3px);
//           }

//           .dc-courses-marquee:hover .dc-courses-track {
//             animation-play-state: paused;
//           }
//         }

//         .dc-courses-marquee:focus-within .dc-courses-track {
//           animation-play-state: paused;
//         }

//         @keyframes dc-courses-scroll {
//           from { transform: translate3d(0, 0, 0); }
//           to   { transform: translate3d(-50%, 0, 0); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .dc-courses-track { animation: none; }

//           .dc-courses-marquee {
//             overflow-x: auto;
//             -webkit-mask-image: none;
//             mask-image: none;
//           }

//           .dc-courses-group[aria-hidden="true"] { display: none; }
//           .dc-course-card { transition: none; }
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { courses } from "@/data/courses";

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

const categoryTint: Record<string, string> = {
  "Data & Analytics": "201, 255, 59",
  "AI & Generative AI": "168, 120, 255",
  "Cloud & Enterprise": "70, 150, 220",
  "Software Testing": "255, 150, 80",
  "Full Stack Development": "255, 190, 90",
  "Web Technologies": "60, 190, 180",
  Design: "255, 110, 150",
  "Digital Marketing": "255, 170, 60",
  "Programming Languages": "120, 140, 255",
};

const DEFAULT_TINT = "201, 255, 59";
const MAX_COURSES = 12;
const PUNE_SUFFIX = "-in-pune";

const hexPattern =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='64' viewBox='0 0 56 64'%3E%3Cpath d='M14 1L28 9V25L14 33L0 25V9ZM42 33L56 41V57L42 65L28 57V41Z' fill='none' stroke='%23111111' stroke-opacity='.075' stroke-width='1'/%3E%3C/svg%3E\")";

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
  index,
  hidden = false,
}: {
  course: CourseItem;
  index: number;
  hidden?: boolean;
}) {
  const tint = categoryTint[course.category] ?? DEFAULT_TINT;

  return (
    <li
      className="dc-course-item"
      aria-hidden={hidden || undefined}
    >
      <Link
        href={getCourseHref(course.slug)}
        tabIndex={hidden ? -1 : undefined}
        className="dc-course-link group block rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111]"
      >
        <div
          className="dc-course-card relative flex h-[190px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#111]/10 p-5 transition-[border-color,transform] duration-300 group-hover:border-[#111]/30 sm:h-[225px] sm:p-6"
          style={{
            backgroundColor: "#ece6d9",
            backgroundImage: `
              radial-gradient(
                120% 100% at 90% 0%,
                rgba(${tint}, 0.4) 0%,
                rgba(${tint}, 0.14) 45%,
                transparent 76%
              ),
              ${hexPattern}
            `,
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full border border-[#111]/15 bg-[#f4efe7]/70 px-3 py-1 text-xs font-medium text-[#111]/70">
              {course.duration}
            </span>

            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white transition-[background-color,color] duration-300 group-hover:bg-[#c9ff3b] group-hover:text-[#111]">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </div>

          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 sm:text-[11px]">
              {course.category}
            </p>

            <h3 className="max-w-[92%] text-[28px] font-semibold leading-[1.02] tracking-[-0.06em] text-[#111] sm:text-[34px]">
              {course.title}
            </h3>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <span className="truncate text-sm font-medium text-[#f4efe7]/90">
            {course.title}
          </span>

          <span className="shrink-0 text-xs text-white/45">
            {course.duration}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function CoursesSection() {
  const featuredCourses = getOrderedCourses().slice(0, MAX_COURSES);
  const marqueeDuration = `${Math.max(featuredCourses.length * 6, 36)}s`;

  return (
    <section
      id="courses"
      className="dc-courses-section section-space overflow-hidden"
    >
      <div className="container-main">
        <ScrollReveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#111]">
            <span
              className="size-2 rounded-full bg-[#111]"
              aria-hidden="true"
            />
            Explore learning
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.07em] text-[#111] sm:text-6xl lg:text-7xl">
                Find your next
                <br />
                <span className="dc-highlight">learning path.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#111]/60">
                Explore data, analytics, AI, machine learning, cloud and
                development courses with practical projects and placement
                support.
              </p>
            </div>

            <Link
              href="/courses"
              className="dc-view-all inline-flex h-14 w-fit shrink-0 items-center gap-3 self-start rounded-full bg-[#111] px-7 text-base font-semibold !text-white transition-[background-color,color,transform] duration-300 hover:!bg-[#c9ff3b] hover:!text-[#111] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111] md:self-auto"
            >
              <span>View all courses</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width automatic course carousel */}
      <div
        className="dc-courses-marquee mt-10 sm:mt-14"
        style={
          {
            "--dc-marquee-duration": marqueeDuration,
          } as CSSProperties
        }
      >
        <div className="dc-courses-track">
          <ul className="dc-courses-group" aria-label="Featured courses">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={course.slug}
                course={course}
                index={index}
              />
            ))}
          </ul>

          <ul className="dc-courses-group" aria-hidden="true">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={`${course.slug}-duplicate`}
                course={course}
                index={index}
                hidden
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="container-main">
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#111]/45">
            Showing {featuredCourses.length} of {courses.length} listed courses.
          </p>

          <Link
            href="/courses"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#111]/75 transition-colors duration-200 hover:text-[#111]"
          >
            Explore all courses
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style>{`
        .dc-courses-section {
          background: #f4efe7;
          color: #111;
        }

        .dc-highlight {
          background-image: linear-gradient(
            transparent 64%,
            #c9ff3b 64%,
            #c9ff3b 94%,
            transparent 94%
          );
          padding: 0 0.08em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }

        /* Explicit button colours override inherited global link styles */
        .dc-view-all,
        .dc-view-all:link,
        .dc-view-all:visited {
          background-color: #111;
          color: #fff !important;
        }

        .dc-view-all:hover {
          background-color: #c9ff3b !important;
          color: #111 !important;
        }

        .dc-courses-marquee {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
        }

        .dc-courses-track {
          display: flex;
          width: max-content;
          animation: dc-courses-scroll var(--dc-marquee-duration, 72s) linear infinite;
          will-change: transform;
          backface-visibility: hidden;
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
            flex-basis: 360px;
            width: 360px;
            margin-right: 22px;
          }
        }

        @media (min-width: 1024px) {
          .dc-course-item {
            flex-basis: 400px;
            width: 400px;
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
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dc-courses-track {
            animation: none;
          }

          .dc-courses-marquee {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }

          .dc-courses-group[aria-hidden="true"] {
            display: none;
          }

          .dc-course-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
