
// import type { Metadata } from "next";
// import Link from "next/link";
// import { Suspense } from "react";
// import { notFound, permanentRedirect } from "next/navigation";
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   Clock3,
// } from "lucide-react";

// import Navbar from "@/components/layout/Navbar";
// import ScrollReveal from "@/components/ui/ScrollReveal";
// import { courses } from "@/data/courses";

// type CoursePageProps = {
//   params: Promise<{ slug: string }>;
// };

// const PUNE_SUFFIX = "-in-pune";

// function getBaseSlug(slug: string) {
//   return slug.endsWith(PUNE_SUFFIX)
//     ? slug.slice(0, -PUNE_SUFFIX.length)
//     : slug;
// }

// function getCourseBySlug(slug: string) {
//   const baseSlug = getBaseSlug(slug);
//   return courses.find((course) => course.slug === baseSlug);
// }

// function getCanonicalPath(slug: string) {
//   return `/courses/${getBaseSlug(slug)}${PUNE_SUFFIX}`;
// }

// export function generateStaticParams() {
//   return courses.map((course) => ({
//     slug: `${course.slug}${PUNE_SUFFIX}`,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: CoursePageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const course = getCourseBySlug(slug);

//   if (!course) {
//     return {
//       title: "Course Not Found | Data Council",
//       robots: { index: false, follow: false },
//     };
//   }

//   const canonical = getCanonicalPath(slug);
//   const title = `${course.title} Course in Pune | Data Council`;
//   const description = `${course.description} Contact Data Council to confirm current syllabus, schedule and availability.`;

//   return {
//     title,
//     description,
//     alternates: { canonical },
//     openGraph: {
//       title,
//       description,
//       url: canonical,
//       type: "website",
//     },
//   };
// }

// async function CourseDetailContent({ params }: CoursePageProps) {
//   // URL-dependent work is now inside the Suspense boundary.
//   const { slug } = await params;
//   const course = getCourseBySlug(slug);

//   if (!course) {
//     notFound();
//   }

//   // Redirect legacy URLs to the new SEO-friendly URL.
//   if (!slug.endsWith(PUNE_SUFFIX)) {
//     permanentRedirect(getCanonicalPath(slug));
//   }

//   return (
//     <>
//       <section className="container-main pb-20 pt-10 sm:pb-28 sm:pt-16 lg:pt-20">
//         <ScrollReveal>
//           <Link
//             href="/courses"
//             className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/10 px-4 text-xs font-medium text-black/60 transition-colors hover:border-black/30 hover:bg-white/50 hover:text-black"
//           >
//             <ArrowLeft size={15} />
//             All courses
//           </Link>

//           <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
//             <div>
//               <p className="eyebrow">{course.category} · Pune</p>

//               <h1 className="display-heading mt-6 max-w-4xl">
//                 {course.title}
//                 <span className="text-[#77766f]">.</span>
//               </h1>

//               <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
//                 {course.description}
//               </p>

//               <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
//                 <Link href="/contact" className="lime-button">
//                   Enquire about this course
//                   <ArrowUpRight size={17} />
//                 </Link>

//                 <Link href="/courses" className="outline-button">
//                   Explore other courses
//                 </Link>
//               </div>
//             </div>

//             <aside className="rounded-3xl bg-[#101010] p-6 text-[#f4f0e8] sm:p-8 lg:p-9">
//               <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
//                 Course overview
//               </p>

//               <div className="mt-7 flex items-center gap-4 border-b border-white/15 pb-6">
//                 <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-black">
//                   <Clock3 size={21} />
//                 </span>

//                 <div>
//                   <p className="text-xs text-white/50">Listed duration</p>
//                   <p className="mt-1 text-xl font-semibold">
//                     {course.duration}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <p className="text-xs text-white/50">Category</p>
//                 <p className="mt-2 text-lg font-medium">{course.category}</p>
//               </div>

//               <div className="mt-6">
//                 <p className="text-xs text-white/50">Location</p>
//                 <p className="mt-2 text-lg font-medium">Pune</p>
//               </div>

//               <p className="mt-7 text-xs leading-6 text-white/45">
//                 Contact Data Council to confirm the current syllabus,
//                 schedule, fees, training mode and course availability.
//               </p>
//             </aside>
//           </div>
//         </ScrollReveal>
//       </section>

//       <section className="dark-section py-16 sm:py-20">
//         <div className="container-main">
//           <ScrollReveal>
//             <p className="eyebrow">Take the next step</p>

//             <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
//               Have questions
//               <br />
//               about this course?
//             </h2>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
//               Ask the Data Council team to confirm the curriculum and
//               upcoming training options before enrolling.
//             </p>

//             <Link href="/contact" className="lime-button mt-7">
//               Contact Data Council
//               <ArrowUpRight size={17} />
//             </Link>
//           </ScrollReveal>
//         </div>
//       </section>
//     </>
//   );
// }

// export default function CourseDetailPage({ params }: CoursePageProps) {
//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen overflow-x-clip bg-[#f4f0e8] text-[#101010]">
//         <Suspense
//           fallback={
//             <section
//               className="container-main flex min-h-[60vh] items-center justify-center"
//               role="status"
//               aria-live="polite"
//             >
//               <p className="text-sm text-black/55">
//                 Loading course details...
//               </p>
//             </section>
//           }
//         >
//           <CourseDetailContent params={params} />
//         </Suspense>
//       </main>
//     </>
//   );
// }






import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { courses } from "@/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

const PUNE_SUFFIX = "-in-pune";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const RELATED_COUNT = 3;

function getBaseSlug(slug: string) {
  return slug.endsWith(PUNE_SUFFIX)
    ? slug.slice(0, -PUNE_SUFFIX.length)
    : slug;
}

function getCourseBySlug(slug: string) {
  const baseSlug = getBaseSlug(slug);
  return courses.find((course) => course.slug === baseSlug);
}

function getCanonicalPath(slug: string) {
  return `/courses/${getBaseSlug(slug)}${PUNE_SUFFIX}`;
}

// Same category ke courses pehle, phir baaki se fill karo
function getRelatedCourses(current: (typeof courses)[number]) {
  const others = courses.filter((course) => course.slug !== current.slug);
  const sameCategory = others.filter(
    (course) => course.category === current.category,
  );
  const rest = others.filter((course) => course.category !== current.category);

  return [...sameCategory, ...rest].slice(0, RELATED_COUNT);
}

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: `${course.slug}${PUNE_SUFFIX}`,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Data Council",
      robots: { index: false, follow: false },
    };
  }

  const canonical = getCanonicalPath(slug);
  const title = `${course.title} Course in Pune | Data Council`;
  const description = `${course.description} Contact Data Council to confirm current syllabus, schedule and availability.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

async function CourseDetailContent({ params }: CoursePageProps) {
  // URL-dependent work Suspense boundary ke andar hai.
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Purane URLs ko naye SEO-friendly URL par redirect karo.
  if (!slug.endsWith(PUNE_SUFFIX)) {
    permanentRedirect(getCanonicalPath(slug));
  }

  const canonicalPath = getCanonicalPath(slug);
  const relatedCourses = getRelatedCourses(course);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.title,
      description: course.description,
      url: `${SITE_URL}${canonicalPath}`,
      provider: {
        "@type": "Organization",
        name: "Data Council",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Courses",
          item: `${SITE_URL}/courses`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: course.title,
          item: `${SITE_URL}${canonicalPath}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="container-main pb-20 pt-10 sm:pb-28 sm:pt-16 lg:pt-20">
        <ScrollReveal>
          <Link
            href="/courses"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/10 px-4 text-xs font-medium text-black/60 transition-colors hover:border-black/30 hover:bg-white/50 hover:text-black"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All courses
          </Link>

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
            <div>
              <p className="eyebrow">{course.category} · Pune</p>

              <h1 className="display-heading mt-6 max-w-4xl">
                {course.title}
                <span className="text-[#77766f]">.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
                {course.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                <Link href="/contact" className="lime-button">
                  Enquire about this course
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>

                <Link href="/courses" className="outline-button">
                  Explore other courses
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl bg-[#101010] p-6 text-[#f4f0e8] sm:p-8 lg:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                Course overview
              </p>

              <div className="mt-7 flex items-center gap-4 border-b border-white/15 pb-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-black">
                  <Clock3 size={21} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-xs text-white/50">Listed duration</p>
                  <p className="mt-1 text-xl font-semibold">
                    {course.duration}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs text-white/50">Category</p>
                <p className="mt-2 text-lg font-medium">{course.category}</p>
              </div>

              <div className="mt-6">
                <p className="text-xs text-white/50">Location</p>
                <p className="mt-2 text-lg font-medium">Pune</p>
              </div>

              <p className="mt-7 text-xs leading-6 text-white/45">
                Contact Data Council to confirm the current syllabus,
                schedule, fees, training mode and course availability.
              </p>
            </aside>
          </div>
        </ScrollReveal>
      </section>

      {relatedCourses.length > 0 && (
        <section
          className="container-main pb-20 sm:pb-28"
          aria-labelledby="related-courses-heading"
        >
          <ScrollReveal>
            <div className="flex items-end justify-between gap-4 border-t border-black/10 pt-10">
              <h2
                id="related-courses-heading"
                className="text-3xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl"
              >
                You may also like
              </h2>

              <Link
                href="/courses"
                className="hidden shrink-0 items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60 sm:inline-flex"
              >
                All courses
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/courses/${related.slug}${PUNE_SUFFIX}`}
                    className="group flex min-h-[200px] flex-col justify-between rounded-3xl border border-black/10 bg-[#ece6d9] p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-black/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-black/15 bg-[#f4f0e8]/70 px-3 py-1 text-xs font-medium text-black/70">
                        {related.duration}
                      </span>

                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#101010] text-white transition-colors duration-300 group-hover:bg-[#c9ff3b] group-hover:text-[#101010]">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </span>
                    </div>

                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/55">
                        {related.category}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.05em]">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>
      )}

      <section className="dark-section py-16 sm:py-20">
        <div className="container-main">
          <ScrollReveal>
            <p className="eyebrow">Take the next step</p>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
              Have questions
              <br />
              about this course?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
              Ask the Data Council team to confirm the curriculum and
              upcoming training options before enrolling.
            </p>

            <Link href="/contact" className="lime-button mt-7">
              Contact Data Council
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-clip bg-[#f4f0e8] text-[#101010]">
        <Suspense
          fallback={
            <section
              className="container-main flex min-h-[60vh] items-center justify-center"
              role="status"
              aria-live="polite"
            >
              <p className="text-sm text-black/55">Loading course details...</p>
            </section>
          }
        >
          <CourseDetailContent params={params} />
        </Suspense>
      </main>
    </>
  );
}