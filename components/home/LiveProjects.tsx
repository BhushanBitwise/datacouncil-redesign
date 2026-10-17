import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import ManualScroller from "@/components/ui/ManualScroller";

/* ------------------------------------------------------------------ */
/*  components/home/LiveProjects.tsx                                   */
/*  Manual scroller (swipe on mobile, arrows on desktop). No timers,   */
/*  no auto animation. Server component: zero JS of its own.           */
/*                                                                     */
/*  Theme: cream #f4efe7 | panel #1a1a1a | card #202020 | lime #c9ff3b */
/*                                                                     */
/*  Images: /public/images/project/*.webp                              */
/*   - next/image (auto resize + AVIF/WebP, correct `sizes`)           */
/*   - native lazy loading for every slide (section is mid-page)       */
/*   - dark blur placeholder + fixed aspect box => no layout shift     */
/* ------------------------------------------------------------------ */

const INSET =
  "px-6 sm:px-12 lg:px-[72px] scroll-px-6 sm:scroll-px-12 lg:scroll-px-[72px]";

/* If your images are not 5:4, change this ONE class (e.g. aspect-[16/10]) */
const IMAGE_ASPECT = "aspect-[5/4]";

/* Tiny dark placeholder shown while the real image downloads */
const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PSc4Jz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nOCcgZmlsbD0nIzIwMjAyMCcvPjwvc3ZnPg==";

type Track = {
  key: string;
  label: string;
  title: string;
  intro: string;
  points: string[];
  image: string;
  alt: string;
};

const TRACKS: Track[] = [
  {
    key: "full-stack",
    label: "Full Stack",
    title: "Live projects from clients",
    intro:
      "Attend full stack training with a real-time expert and real-time scenarios. Go from the basics to building websites and apps with modern web development skills.",
    points: [
      "Real-time client projects",
      "World-class mentor assistance",
      "Ever-ready community to discuss and solve problems",
      "Websites and apps, from basics to deployment",
    ],
    image: "/images/project/fullstack.webp",
    alt: "Students working on a real-world client project at Data Council",
  },
  {
    key: "data-science",
    label: "Data Science",
    title: "Data Science live projects & internship",
    intro:
      "Work on client-style problems with real datasets, from cleaning data to presenting a finished model.",
    points: [
      "Introduction to live projects",
      "Customer churn prediction project",
      "Sales forecasting project",
      "Model review with a mentor",
    ],
    image: "/images/project/datasci1.webp",
    alt: "Data science live project work",
  },
  {
    key: "ai-ml",
    label: "AI & ML",
    title: "AI & Machine Learning live projects & internship",
    intro:
      "Build and ship machine learning and GenAI applications, not just notebooks.",
    points: [
      "Introduction to live projects",
      "Loan default prediction (fintech)",
      "GenAI document Q&A chatbot",
      "Prompt engineering & automation workflow",
    ],
    image: "/images/project/aiml.webp",
    alt: "AI and machine learning live project work",
  },
  {
    key: "data-analytics",
    label: "Data Analytics",
    title: "Data Analytics live projects & internship",
    intro:
      "Turn raw business data into dashboards and insights that a manager can act on.",
    points: [
      "Introduction to live projects",
      "Retail sales dashboard",
      "SQL + Power BI reporting project",
      "Business insights presentation",
    ],
    image: "/images/project/dataanylitic1.webp",
    alt: "Data analytics dashboard live project work",
  },
];

const STEPS = [
  "Project brief",
  "Build with mentor",
  "Code review",
  "Portfolio showcase",
];

function TrackSlide({ track }: { track: Track }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {/* Image frame: fixed aspect box reserves space (no layout shift) */}
      <div className="overflow-hidden rounded-[28px] border border-[#f4efe7]/10 bg-[#202020] p-2.5 sm:p-4">
        <div
          className={`relative ${IMAGE_ASPECT} overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#2a2a2a,#161616)]`}
        >
          <Image
            src={track.image}
            alt={track.alt}
            fill
            sizes="(max-width: 1023px) 80vw, (max-width: 1535px) 42vw, 560px"
            quality={75}
            loading="lazy"
            decoding="async"
            placeholder="blur"
            blurDataURL={BLUR}
            draggable={false}
            className="select-none object-cover"
          />
        </div>
      </div>

      <div>
        <p className="mb-4 inline-flex rounded-full border border-[#f4efe7]/15 px-3 py-1 text-xs font-semibold text-[#f4efe7]/70">
          {track.label}
        </p>

        <h3 className="max-w-lg text-3xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#f4efe7] sm:text-4xl lg:text-[44px]">
          {track.title}
        </h3>

        <p className="mt-4 max-w-lg text-base leading-7 text-[#f4efe7]/60">
          {track.intro}
        </p>

        <ul className="mt-7 space-y-3.5">
          {track.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-base text-[#f4efe7]/90"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-[#111]">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step}
              className="rounded-2xl border border-[#f4efe7]/10 bg-[#202020] px-4 py-3"
            >
              <span className="text-xs font-bold text-[#c9ff3b]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-sm font-medium leading-5 text-[#f4efe7]/85">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <Link
          href="/contact"
          className="dclp-cta mt-8 inline-flex h-14 w-fit items-center gap-3 rounded-full border border-[#c9ff3b] px-7 text-base font-semibold transition-[background-color,color,transform] duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
        >
          <span>Get started</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default function LiveProjects() {
  return (
    <section
      id="live-projects"
      className="section-space px-4 sm:px-8"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1100px" }}
    >
      <div className="overflow-hidden rounded-[32px] bg-[#1a1a1a] py-16 text-[#f4efe7] sm:rounded-[48px] sm:py-24">
        {/* Header */}
        <div className="px-6 sm:px-12 lg:px-[72px]">
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#f4efe7]">
            <span className="size-2.5 rounded-full bg-[#c9ff3b]" aria-hidden="true" />
            Live projects &amp; internship
          </p>

          <h2 className="mt-8 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.07em] text-[#f4efe7] sm:text-6xl lg:text-7xl">
            Real projects.
            <br />
            Real experience.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#f4efe7]/55">
            Work on live, client-style projects with mentors and build a
            portfolio that employers can open and review.
          </p>
        </div>

        {/* One big slide per track: swipe on mobile, arrows on desktop */}
        <div className="mt-12">
          <ManualScroller
            label="Live project tracks"
            tone="light"
            inset={INSET}
            gap="gap-6 sm:gap-10"
          >
            {TRACKS.map((track) => (
              <li
                key={track.key}
                className="w-[86vw] max-w-[1240px] shrink-0 snap-start sm:w-[calc(100vw-10rem)] lg:w-[calc(100vw-13rem)]"
              >
                <TrackSlide track={track} />
              </li>
            ))}
          </ManualScroller>
        </div>
      </div>

      <style>{`
        .dclp-cta,
        .dclp-cta:link,
        .dclp-cta:visited {
          background-color: #c9ff3b;
          color: #111111 !important;
        }
        .dclp-cta:hover {
          background-color: #111111 !important;
          color: #f4efe7 !important;
        }
      `}</style>
    </section>
  );
}