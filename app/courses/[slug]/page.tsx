
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { courses } from "@/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Data Council",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | Data Council`,
    description: course.description,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | Data Council`,
      description: course.description,
      url: `/courses/${course.slug}`,
      type: "website",
    },
  };
}

async function CourseDetailContent({
  params,
}: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f4f0e8]">
        <section className="container-main pb-20 pt-12 sm:pb-28 sm:pt-20">
          <ScrollReveal>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs text-black/55 transition-colors hover:text-black"
            >
              <ArrowLeft size={15} />
              All courses
            </Link>

            <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="eyebrow">{course.category}</p>

                <h1 className="display-heading mt-7 max-w-4xl">
                  {course.title}
                  <span className="text-[#77766f]">.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
                  {course.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="lime-button">
                    Enquire about this course
                    <ArrowUpRight size={17} />
                  </Link>

                  <Link href="/courses" className="outline-button">
                    Explore other courses
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl bg-[#101010] p-7 text-[#f4f0e8] sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  Course overview
                </p>

                <div className="mt-8 flex items-center gap-4 border-b border-white/15 pb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9ff3b] text-black">
                    <Clock3 size={21} />
                  </span>

                  <div>
                    <p className="text-xs text-white/50">
                      Published duration
                    </p>
                    <p className="mt-1 text-xl font-semibold">
                      {course.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs text-white/50">Category</p>
                  <p className="mt-2 text-lg font-medium">
                    {course.category}
                  </p>
                </div>

                <p className="mt-8 text-xs leading-6 text-white/45">
                  Please contact Data Council to confirm the current
                  syllabus, schedule, fees, delivery mode and availability.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

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
                Ask the Data Council team to confirm the curriculum
                and upcoming training options before enrolling.
              </p>

              <Link href="/contact" className="lime-button mt-7">
                Contact Data Council
                <ArrowUpRight size={17} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}

export default function CourseDetailPage({
  params,
}: CoursePageProps) {
  return (
    <Suspense
      fallback={
        <main className="container-main flex min-h-[60vh] items-center justify-center">
          <p
            className="text-sm text-black/60"
            role="status"
            aria-live="polite"
          >
            Loading course details...
          </p>
        </main>
      }
    >
      <CourseDetailContent params={params} />
    </Suspense>
  );
}
