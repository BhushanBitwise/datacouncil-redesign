
// import type { Metadata } from "next";
// import Link from "next/link";
// import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// import Navbar from "@/components/layout/Navbar";
// import ScrollReveal from "@/components/ui/ScrollReveal";
// import CourseCatalogue from "@/components/courses/CourseCatalogue";
// import { courses } from "@/data/courses";

// export const metadata: Metadata = {
//   title: "Technology Courses in Pune | Data Council",
//   description:
//     "Explore Data Council courses in data science, data analytics, machine learning, full-stack development, cloud, testing and digital marketing.",
//   alternates: {
//     canonical: "/courses",
//   },
//   openGraph: {
//     title: "Technology Courses in Pune | Data Council",
//     description:
//       "Explore technology courses and find your next learning opportunity with Data Council in Pune.",
//     url: "/courses",
//     type: "website",
//   },
// };

// export default function CoursesPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen overflow-x-clip bg-[#f4f0e8] text-[#101010]">
//         <section className="container-main pb-10 pt-8 sm:pb-14 sm:pt-12 lg:pt-14">
//           <ScrollReveal>
//             <Link
//               href="/"
//               className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/15 px-4 text-xs font-medium text-black/65 transition-colors hover:border-black hover:bg-white/60 hover:text-black"
//             >
//               <ArrowDownRight size={15} className="rotate-180" />
//               Back home
//             </Link>

//             <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6">
//               <p className="eyebrow">Data Council · Pune</p>

//               <h1 className="max-w-5xl text-[clamp(3.25rem,8.5vw,7.5rem)] font-bold leading-[0.91] tracking-[-0.085em]">
//                 Learn a skill.
//                 <br />
//                 Build what&apos;s next
//                 <span className="text-[#77766f]">.</span>
//               </h1>

//               <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//                 <p className="max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
//                   Explore technology and professional courses across data,
//                   development, cloud, software testing, design and digital
//                   marketing. Search the catalogue and open a course for its
//                   details.
//                 </p>

//                 <a
//                   href="#course-list"
//                   className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
//                 >
//                   Explore courses
//                   <ArrowDownRight size={17} />
//                 </a>
//               </div>
//             </div>
//           </ScrollReveal>
//         </section>

//         <CourseCatalogue courses={courses} />

//         <section className="dark-section py-16 sm:py-20">
//           <div className="container-main">
//             <ScrollReveal>
//               <p className="eyebrow">Not sure where to start?</p>

//               <div className="mt-6 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
//                 <div>
//                   <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
//                     Let&apos;s find the right course for you.
//                   </h2>

//                   <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
//                     Contact our team to discuss your interests and confirm
//                     current course details, syllabus and availability.
//                   </p>
//                 </div>

//                 <Link
//                   href="/contact"
//                   className="lime-button w-fit shrink-0"
//                 >
//                   Talk to our team
//                   <ArrowUpRight size={17} />
//                 </Link>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }




import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CourseCatalogue from "@/components/courses/CourseCatalogue";
import { courses } from "@/data/courses";

const PUNE_SUFFIX = "-in-pune";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export const metadata: Metadata = {
  title: "Technology Courses in Pune | Data Council",
  description:
    "Explore Data Council courses in data science, data analytics, machine learning, full-stack development, cloud, testing and digital marketing.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Technology Courses in Pune | Data Council",
    description:
      "Explore technology courses and find your next learning opportunity with Data Council in Pune.",
    url: "/courses",
    type: "website",
  },
};

export default function CoursesPage() {
  // Search engines ke liye course list (ItemList structured data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Data Council courses in Pune",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: course.title,
      url: `${SITE_URL}/courses/${course.slug}${PUNE_SUFFIX}`,
    })),
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-clip bg-[#f4f0e8] text-[#101010]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <section className="container-main pb-10 pt-8 sm:pb-14 sm:pt-12 lg:pt-14">
          <ScrollReveal>
            <Link
              href="/"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/15 px-4 text-xs font-medium text-black/65 transition-colors hover:border-black hover:bg-white/60 hover:text-black"
            >
              <ArrowDownRight
                size={15}
                className="rotate-180"
                aria-hidden="true"
              />
              Back home
            </Link>

            <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6">
              <p className="eyebrow">Data Council · Pune</p>

              <h1 className="max-w-5xl text-[clamp(3.25rem,8.5vw,7.5rem)] font-bold leading-[0.91] tracking-[-0.085em]">
                Learn a skill.
                <br />
                Build what&apos;s next
                <span className="text-[#77766f]">.</span>
              </h1>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                  Explore technology and professional courses across data,
                  development, cloud, software testing, design and digital
                  marketing. Search the catalogue and open a course for its
                  details.
                </p>

                <a
                  href="#course-list"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60"
                >
                  Explore courses
                  <ArrowDownRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Is component ke andar id="course-list" hona chahiye (upar wala anchor yahin jaata hai) */}
        <CourseCatalogue courses={courses} />

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
                    Contact our team to discuss your interests and confirm
                    current course details, syllabus and availability.
                  </p>
                </div>

                <Link href="/contact" className="lime-button w-fit shrink-0">
                  Talk to our team
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}