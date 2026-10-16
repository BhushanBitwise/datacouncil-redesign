
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { courses } from "@/data/courses";
import type { LocationInfo } from "@/data/locations";

const topics = [
  {
    number: "01",
    title: "Front-end development",
    description:
      "Learn how web interfaces are structured and styled using HTML, CSS, JavaScript and modern front-end tools.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Back-end development",
    description:
      "Explore server-side programming, application logic, request handling and API fundamentals.",
    icon: Server,
  },
  {
    number: "03",
    title: "Databases",
    description:
      "Understand data modelling, queries and how applications store and retrieve information.",
    icon: Database,
  },
  {
    number: "04",
    title: "APIs and integration",
    description:
      "Learn how frontend and backend systems communicate through APIs and structured data.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Git and collaboration",
    description:
      "Explore version control, source-code collaboration, testing and debugging workflows.",
    icon: GitBranch,
  },
];

const faqs = [
  {
    question: "What is a Full Stack Development course?",
    answer:
      "Full Stack Development covers the skills used to build both the user-facing and server-side parts of a web application, along with databases and application integration.",
  },
  {
    question: "What technologies can I learn?",
    answer:
      "The learning path may cover frontend development, backend programming, databases, APIs and deployment. Ask the Data Council team to confirm the current syllabus for your chosen course.",
  },
  {
    question: "Is the course suitable for beginners?",
    answer:
      "Your starting point depends on the selected course and its prerequisites. Contact the team to discuss your experience and the most suitable learning path.",
  },
  {
    question: "How long does the course take?",
    answer:
      "Duration depends on the selected course and batch schedule. Confirm the current duration and timetable with Data Council before enrolling.",
  },
  {
    question: "How can I enquire about a course?",
    answer:
      "Use the contact page to ask about the current syllabus, fees, schedule, delivery format and availability.",
  },
];

type Props = {
  location: LocationInfo;
};

export default function LocationsPage({ location }: Props) {
  const relatedCourses = courses.slice(0, 6);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f0e8] text-[#101010]">
      <section className="container-main pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pt-28">
        <ScrollReveal>
          <p className="eyebrow">DATA COUNCIL · {location.city.toUpperCase()}</p>

          <h1 className="display-heading mt-7 max-w-5xl !text-5xl sm:!text-7xl lg:!text-8xl">
            {location.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
            Explore Full Stack Development learning options, practical
            technology topics and the next steps for your learning journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="lime-button">
              Enquire about courses
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-black/15 px-5 text-sm font-medium transition-colors hover:bg-white/50"
            >
              Explore all courses
              <ArrowDownRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-14 border-y border-black/15 py-8 sm:mt-20 sm:py-10">
          <ScrollReveal>
            <p className="eyebrow">INTRODUCTION TO DATA COUNCIL</p>
            <h2 className="display-heading mt-5 max-w-3xl !text-3xl sm:!text-5xl">
              Learn the concepts. Understand the systems. Build your skills.
            </h2>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              {location.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-main pb-20 sm:pb-28">
        <ScrollReveal>
          <p className="eyebrow">THE DATA COUNCIL APPROACH</p>
          <h2 className="display-heading mt-5 max-w-3xl !text-4xl sm:!text-6xl">
            A clear path from concepts to application.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Why choose us",
              description:
                "Explore structured learning, practical topics and support for your learning goals.",
            },
            {
              number: "02",
              title: "Our mission",
              description:
                "Help learners develop technology knowledge and apply it to practical problems.",
            },
            {
              number: "03",
              title: "Our vision",
              description:
                "Encourage continuous learning and adaptable skills as technology evolves.",
            },
          ].map((item) => (
            <article key={item.number} className="bg-[#f4f0e8] p-6 sm:p-8">
              <p className="text-sm text-black/45">{item.number}</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-black/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section py-20 sm:py-28">
        <div className="container-main">
          <ScrollReveal>
            <p className="eyebrow">FULL STACK FUNDAMENTALS</p>
            <h2 className="display-heading mt-5 max-w-4xl !text-4xl text-[#f4f0e8] sm:!text-6xl">
              Understand how complete web applications work.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Full Stack Development connects the user interface, server,
              database and deployment process into one application workflow.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <article
                  key={topic.number}
                  className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-[#c9ff3b]/50 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/40">{topic.number}</p>
                      <h3 className="mt-4 text-xl font-semibold text-[#f4f0e8]">
                        {topic.title}
                      </h3>
                    </div>
                    <Icon
                      size={22}
                      className="text-[#c9ff3b]"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {topic.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-main py-20 sm:py-28">
        <ScrollReveal>
          <p className="eyebrow">EXPLORE YOUR OPTIONS</p>
          <h2 className="display-heading mt-5 max-w-3xl !text-4xl sm:!text-6xl">
            Courses to explore.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-black/55">
            Browse the available courses and contact the team to confirm
            the curriculum and schedule for your preferred learning path.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}-in-pune`}
              className="group flex min-h-36 flex-col justify-between rounded-2xl border border-black/10 p-5 transition-colors hover:bg-white/50"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs text-black/45">
                  {course.category}
                </span>
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {course.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/55">
                  {course.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-main pb-20 sm:pb-28">
        <ScrollReveal>
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="display-heading mt-5 max-w-3xl !text-4xl sm:!text-6xl">
            Before you get started.
          </h2>
        </ScrollReveal>

        <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium sm:text-lg">
                {faq.question}
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-4 text-sm leading-7 text-black/60">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="dark-section py-16 sm:py-24">
        <div className="container-main">
          <ScrollReveal>
            <p className="eyebrow">YOUR NEXT STEP</p>
            <h2 className="display-heading mt-5 max-w-3xl !text-4xl text-[#f4f0e8] sm:!text-6xl">
              Let&apos;s find the right learning path.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
              Ask about course options, current fees, batch schedules and
              prerequisites before enrolling.
            </p>
            <Link href="/contact" className="lime-button mt-8">
              Contact Data Council
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
