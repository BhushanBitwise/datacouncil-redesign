

"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  TrendingUp,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  components/home/LiveProjects.tsx  (performance-optimized)          */
/*                                                                     */
/*  Theme: cream #f4efe7 | panel #1a1a1a | card #202020 | lime #c9ff3b */
/*                                                                     */
/*  - 3 tracks auto-swap. NO tabs / slider UI is shown.                */
/*  - Timer = one invisible CSS animation (animationend -> next).      */
/*  - Hover / focus on the project pauses it with CSS ONLY             */
/*    (no React state, no re-render on mouse move).                    */
/*  - Off-screen / hidden browser tab pauses everything via a data     */
/*    attribute set by IntersectionObserver (no re-render either).     */
/*  - Only transform + opacity are animated.                           */
/*  - Marquee edge fade = gradient overlays (no mask-image).           */
/*  - Marquee pauses when the cursor is on any project card.           */
/* ------------------------------------------------------------------ */

const LIME = "#c9ff3b";
const CREAM = "#f4efe7";
const PURPLE = "#a878ff";
const BLUE = "#4696dc";
const FONT = "Arial, Helvetica, sans-serif";

/* Each track stays on screen this long before auto-swapping */
const AUTO_SWAP_MS = 6500;

type TrackKey = "data-science" | "ai-ml" | "data-analytics";

type Track = {
  key: TrackKey;
  label: string;
  title: string;
  intro: string;
  points: string[];
};

const TRACKS: Track[] = [
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
  },
];

const STEPS = [
  "Project brief",
  "Build with mentor",
  "Code review",
  "Portfolio showcase",
];

type Project = {
  title: string;
  track: string;
  description: string;
  tools: string[];
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const PROJECTS: Project[] = [
  {
    title: "Customer Churn Prediction",
    track: "Data Science",
    description:
      "Predict which customers are likely to leave and rank the reasons behind it.",
    tools: ["Python", "Pandas", "Scikit-learn"],
    icon: TrendingUp,
  },
  {
    title: "Loan Default Risk Model",
    track: "AI & ML",
    description:
      "Score loan applicants for risk and explain every prediction to a credit team.",
    tools: ["XGBoost", "SHAP", "Streamlit"],
    icon: BrainCircuit,
  },
  {
    title: "GenAI Document Q&A Bot",
    track: "Generative AI",
    description:
      "A chatbot that answers questions from company documents and cites its source.",
    tools: ["LLMs", "Embeddings", "Vector DB"],
    icon: Bot,
  },
  {
    title: "Retail Sales Dashboard",
    track: "Data Analytics",
    description:
      "An interactive dashboard tracking revenue, orders and growth across stores.",
    tools: ["SQL", "Power BI", "Excel"],
    icon: BarChart3,
  },
];

/* ------------------------------------------------------------------ */
/*  Illustrations (static SVG)                                         */
/* ------------------------------------------------------------------ */

function Frame({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 600 480"
      className="block h-auto w-full"
      style={{ fontFamily: FONT }}
      role="img"
      aria-label={label}
    >
      <rect
        x={24}
        y={44}
        width={552}
        height={396}
        rx={24}
        fill="#141414"
        stroke={CREAM}
        strokeOpacity={0.12}
      />
      <circle cx={52} cy={70} r={5} fill="#ff5f57" />
      <circle cx={70} cy={70} r={5} fill="#febc2e" />
      <circle cx={88} cy={70} r={5} fill="#28c840" />
      <text x={116} y={74} fontSize={12} fill={CREAM} fillOpacity={0.5}>
        {title}
      </text>
      <line
        x1={24}
        y1={94}
        x2={576}
        y2={94}
        stroke={CREAM}
        strokeOpacity={0.08}
      />

      {children}

      <rect x={398} y={14} width={170} height={34} rx={17} fill={LIME} />
      <circle cx={418} cy={31} r={4} fill="#111" />
      <text x={430} y={36} fontSize={12} fontWeight={700} fill="#111">
        LIVE PROJECT
      </text>

      <rect x={44} y={418} width={172} height={38} rx={19} fill={CREAM} />
      <text x={64} y={442} fontSize={12} fontWeight={700} fill="#111">
        Mentor reviewed
      </text>
    </svg>
  );
}

const NOISE = [12, -14, 8, -6, 16, -18, 4, 10, -12, 6, -8, 14, -16, 2, 12, -10, 8, -4, 6];

function DataScienceArt() {
  return (
    <Frame
      title="churn_model.ipynb"
      label="Data science notebook showing a scatter plot with a regression line and model accuracy"
    >
      <g stroke={CREAM} strokeOpacity={0.08}>
        {[180, 230, 280, 330].map((y) => (
          <line key={y} x1={64} y1={y} x2={344} y2={y} />
        ))}
      </g>
      <g stroke={CREAM} strokeOpacity={0.25}>
        <line x1={64} y1={130} x2={64} y2={380} />
        <line x1={64} y1={380} x2={344} y2={380} />
      </g>
      {NOISE.map((n, i) => (
        <circle
          key={i}
          cx={80 + i * 14}
          cy={360 - i * 10 + n}
          r={5}
          fill={LIME}
          fillOpacity={0.9}
        />
      ))}
      <line
        x1={72}
        y1={366}
        x2={340}
        y2={178}
        stroke={CREAM}
        strokeWidth={2}
        strokeOpacity={0.65}
        strokeDasharray="6 6"
      />

      <rect x={368} y={116} width={188} height={92} rx={16} fill="#1f1f1f" stroke={CREAM} strokeOpacity={0.1} />
      <text x={386} y={142} fontSize={10} fontWeight={700} letterSpacing={1.5} fill={CREAM} fillOpacity={0.5}>
        ACCURACY
      </text>
      <text x={386} y={186} fontSize={38} fontWeight={800} fill={LIME}>
        92.4%
      </text>

      <rect x={368} y={222} width={188} height={64} rx={16} fill="#1f1f1f" stroke={CREAM} strokeOpacity={0.1} />
      <text x={386} y={246} fontSize={10} fontWeight={700} letterSpacing={1.5} fill={CREAM} fillOpacity={0.5}>
        F1 SCORE
      </text>
      <text x={386} y={272} fontSize={22} fontWeight={800} fill={CREAM}>
        0.89
      </text>

      <text x={368} y={312} fontSize={10} fontWeight={700} letterSpacing={1.5} fill={CREAM} fillOpacity={0.5}>
        TOP FEATURES
      </text>
      {[
        ["tenure", 112],
        ["charges", 84],
        ["support", 56],
      ].map(([name, w], i) => (
        <g key={name as string}>
          <text x={368} y={336 + i * 22} fontSize={10} fill={CREAM} fillOpacity={0.7}>
            {name}
          </text>
          <rect x={432} y={327 + i * 22} width={Number(w)} height={9} rx={4.5} fill={i === 0 ? LIME : CREAM} fillOpacity={i === 0 ? 1 : 0.25} />
        </g>
      ))}
    </Frame>
  );
}

const LAYERS = [
  { x: 72, ys: [150, 225, 300, 375] },
  { x: 150, ys: [130, 190, 250, 310, 370] },
  { x: 228, ys: [150, 225, 300, 375] },
  { x: 306, ys: [190, 310] },
];

function AiMlArt() {
  return (
    <Frame
      title="rag_assistant.py"
      label="Neural network diagram next to a chatbot answering a question and a falling training loss curve"
    >
      <g stroke={CREAM} strokeOpacity={0.1}>
        {LAYERS.slice(0, -1).map((layer, li) =>
          layer.ys.flatMap((y1, a) =>
            LAYERS[li + 1].ys.map((y2, b) => (
              <line
                key={`${li}-${a}-${b}`}
                x1={layer.x}
                y1={y1}
                x2={LAYERS[li + 1].x}
                y2={y2}
              />
            )),
          ),
        )}
      </g>
      {LAYERS.map((layer, li) =>
        layer.ys.map((y, i) => {
          const active = (li + i) % 3 === 0;
          return (
            <circle
              key={`${li}-${i}`}
              cx={layer.x}
              cy={y}
              r={9}
              fill={active ? LIME : "#141414"}
              stroke={active ? LIME : CREAM}
              strokeOpacity={active ? 1 : 0.4}
            />
          );
        }),
      )}

      <rect x={366} y={116} width={190} height={46} rx={14} fill="#262626" />
      <text x={382} y={136} fontSize={11} fill={CREAM} fillOpacity={0.9}>
        Summarise our refund
      </text>
      <text x={382} y={152} fontSize={11} fill={CREAM} fillOpacity={0.9}>
        policy
      </text>

      <rect x={348} y={176} width={208} height={84} rx={14} fill={LIME} fillOpacity={0.12} stroke={LIME} strokeOpacity={0.5} />
      <text x={364} y={198} fontSize={11} fill={CREAM}>
        Refunds are processed in
      </text>
      <text x={364} y={214} fontSize={11} fill={CREAM}>
        5 to 7 working days.
      </text>
      <rect x={364} y={228} width={104} height={20} rx={10} fill={LIME} />
      <text x={376} y={242} fontSize={10} fontWeight={700} fill="#111">
        Source: policy.pdf
      </text>

      <rect x={348} y={278} width={208} height={118} rx={16} fill="#1f1f1f" stroke={CREAM} strokeOpacity={0.1} />
      <text x={366} y={300} fontSize={10} fontWeight={700} letterSpacing={1.5} fill={CREAM} fillOpacity={0.5}>
        TRAINING LOSS
      </text>
      <path
        d="M366 318 C 396 322, 404 360, 436 368 S 500 378, 538 380"
        fill="none"
        stroke={PURPLE}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Frame>
  );
}

const DONUT_R = 52;
const DONUT_C = 2 * Math.PI * DONUT_R;

function DataAnalyticsArt() {
  return (
    <Frame
      title="retail_dashboard.pbix"
      label="Analytics dashboard with KPI cards, a bar chart and a donut chart"
    >
      {[
        ["REVENUE", "48.2L", 44],
        ["ORDERS", "12.4K", 220],
        ["GROWTH", "+18%", 396],
      ].map(([label, value, x]) => (
        <g key={label as string}>
          <rect x={Number(x)} y={112} width={160} height={58} rx={14} fill="#1f1f1f" stroke={CREAM} strokeOpacity={0.1} />
          <text x={Number(x) + 16} y={134} fontSize={10} fontWeight={700} letterSpacing={1.5} fill={CREAM} fillOpacity={0.5}>
            {label}
          </text>
          <text x={Number(x) + 16} y={158} fontSize={20} fontWeight={800} fill={label === "GROWTH" ? LIME : CREAM}>
            {value}
          </text>
        </g>
      ))}

      <line x1={44} y1={392} x2={324} y2={392} stroke={CREAM} strokeOpacity={0.25} />
      {[60, 90, 70, 120, 100, 150, 130, 170].map((h, i) => (
        <rect
          key={i}
          x={56 + i * 34}
          y={392 - h}
          width={22}
          height={h}
          rx={6}
          fill={i >= 6 ? LIME : CREAM}
          fillOpacity={i >= 6 ? 1 : 0.2}
        />
      ))}

      {[
        { len: 136, off: 0, color: LIME },
        { len: 96, off: 140, color: PURPLE },
        { len: 80, off: 240, color: BLUE },
      ].map((seg) => (
        <circle
          key={seg.color}
          cx={452}
          cy={282}
          r={DONUT_R}
          fill="none"
          stroke={seg.color}
          strokeWidth={18}
          strokeDasharray={`${seg.len} ${DONUT_C - seg.len}`}
          strokeDashoffset={-seg.off}
          transform="rotate(-90 452 282)"
        />
      ))}
      <text x={452} y={288} textAnchor="middle" fontSize={16} fontWeight={800} fill={CREAM}>
        68%
      </text>
      {[
        ["Web", LIME, 384],
        ["App", PURPLE, 444],
        ["Store", BLUE, 504],
      ].map(([name, color, x]) => (
        <g key={name as string}>
          <circle cx={Number(x)} cy={376} r={4} fill={color as string} />
          <text x={Number(x) + 10} y={380} fontSize={10} fill={CREAM} fillOpacity={0.7}>
            {name}
          </text>
        </g>
      ))}
    </Frame>
  );
}

const ILLUSTRATIONS: Record<TrackKey, ComponentType> = {
  "data-science": DataScienceArt,
  "ai-ml": AiMlArt,
  "data-analytics": DataAnalyticsArt,
};

/* ------------------------------------------------------------------ */
/*  Marquee card                                                       */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="flex h-full flex-col gap-5 rounded-[28px] border border-[#f4efe7]/10 bg-[#202020] p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-[60px] shrink-0 items-center justify-center rounded-[20px] bg-[#c9ff3b] text-[#111]">
          <Icon size={26} strokeWidth={2.25} />
        </span>

        <span className="rounded-full border border-[#f4efe7]/15 px-3 py-1 text-xs font-medium text-[#f4efe7]/70">
          {project.track}
        </span>
      </div>

      <div>
        <h3 className="text-[26px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#f4efe7]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#f4efe7]/60">
          {project.description}
        </p>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <li
            key={tool}
            className="rounded-full bg-[#f4efe7]/8 px-3 py-1 text-xs font-medium text-[#f4efe7]/80"
          >
            {tool}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function LiveProjects() {
  const [activeKey, setActiveKey] = useState<TrackKey>("data-science");
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const active = TRACKS.find((track) => track.key === activeKey) ?? TRACKS[0];
  const Illustration = ILLUSTRATIONS[active.key];

  /* Fired when the invisible timer finishes */
  const goNext = useCallback(() => {
    setActiveKey((current) => {
      const index = TRACKS.findIndex((track) => track.key === current);
      return TRACKS[(index + 1) % TRACKS.length].key;
    });
  }, []);

  /*
    Off-screen / hidden-tab pause.
    Writes a data attribute directly on the DOM node, so React never
    re-renders because of scrolling or tab switching.
  */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let visible = false;
    let tabShown = !document.hidden;

    const sync = () => {
      section.dataset.paused = visible && tabShown ? "false" : "true";
    };

    sync();

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entry]) => {
              visible = entry.isIntersecting;
              sync();
            },
            { threshold: 0.2 },
          )
        : null;

    if (observer) {
      observer.observe(section);
    } else {
      visible = true;
      sync();
    }

    const onVisibility = () => {
      tabShown = !document.hidden;
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReduced(mq.matches);
    onMotion();
    mq.addEventListener("change", onMotion);

    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      mq.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="live-projects"
      data-paused="true"
      className="dclp-root section-space px-4 sm:px-8"
    >
      <div className="overflow-hidden rounded-[32px] bg-[#1a1a1a] py-16 text-[#f4efe7] sm:rounded-[48px] sm:py-24">
        {/* Header */}
        <div className="px-6 sm:px-12 lg:px-[72px]">
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#f4efe7]">
            <span
              className="size-2.5 rounded-full bg-[#c9ff3b]"
              aria-hidden="true"
            />
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

        {/*
          Stage: auto-swaps between the 3 tracks.
          Hover / focus on it pauses the timer (CSS only).
        */}
        <div
          className="dclp-stage mt-12 grid items-center gap-10 px-6 sm:px-12 lg:grid-cols-2 lg:gap-14 lg:px-[72px]"
          key={active.key}
          aria-live="off"
        >
          {/* Invisible timer: when it ends, the next track opens */}
          {!reduced && (
            <span
              className="dclp-timer"
              aria-hidden="true"
              style={{ animationDuration: `${AUTO_SWAP_MS}ms` }}
              onAnimationEnd={goNext}
            />
          )}

          <div
            className="dclp-art overflow-hidden rounded-[28px] border border-[#f4efe7]/10 bg-[#202020] p-3 sm:p-5"
            style={{
              backgroundImage:
                "radial-gradient(90% 70% at 15% 5%, rgba(201,255,59,0.14), transparent 65%)",
            }}
          >
            <Illustration />
          </div>

          <div className="dclp-copy">
            <h3 className="max-w-lg text-3xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#f4efe7] sm:text-4xl lg:text-[44px]">
              {active.title}
            </h3>

            <p className="mt-4 max-w-lg text-base leading-7 text-[#f4efe7]/60">
              {active.intro}
            </p>

            <ul className="mt-8 space-y-4">
              {active.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-base text-[#f4efe7]/90"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-[#111]">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
              className="dclp-cta mt-10 inline-flex h-14 w-fit items-center gap-3 rounded-full border border-[#c9ff3b] px-7 text-base font-semibold transition-[background-color,color,transform] duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
            >
              <span>Get started</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Project marquee: scrolls RIGHT to LEFT, stops on hover */}
        <div className="mt-16 sm:mt-24">
          <p className="mb-6 px-6 text-sm font-semibold text-[#f4efe7]/60 sm:px-12 lg:px-[72px]">
            Projects you will build
          </p>

          <div className="dclp-marquee">
            <div className="dclp-track">
              {[0, 1].map((group) => (
                <ul
                  key={group}
                  className="dclp-group"
                  aria-label={group === 0 ? "Live projects" : undefined}
                  aria-hidden={group === 1 ? true : undefined}
                >
                  {[0, 1].map((repeat) =>
                    PROJECTS.map((project) => (
                      <li
                        key={`${project.title}-${repeat}`}
                        className="dclp-item"
                        aria-hidden={group === 1 || repeat === 1 ? true : undefined}
                      >
                        <ProjectCard project={project} />
                      </li>
                    )),
                  )}
                </ul>
              ))}
            </div>
          </div>
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

        /* ---------- Invisible auto-swap timer ---------- */
        .dclp-timer {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          pointer-events: none;
          opacity: 0;
          animation-name: dclp-tick;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes dclp-tick {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* Pause: cursor / keyboard focus on the project, off-screen, hidden tab */
        .dclp-stage:hover .dclp-timer,
        .dclp-stage:focus-within .dclp-timer,
        .dclp-root[data-paused="true"] .dclp-timer {
          animation-play-state: paused;
        }

        /* ---------- Swap animation (transform + opacity only) ---------- */
        .dclp-art {
          animation: dclp-art-in 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .dclp-copy > * {
          animation: dclp-rise 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .dclp-copy > *:nth-child(1) { animation-delay: 120ms; }
        .dclp-copy > *:nth-child(2) { animation-delay: 190ms; }
        .dclp-copy > *:nth-child(3) { animation-delay: 260ms; }
        .dclp-copy > *:nth-child(4) { animation-delay: 330ms; }
        .dclp-copy > *:nth-child(5) { animation-delay: 400ms; }

        @keyframes dclp-art-in {
          from { opacity: 0; transform: translate3d(-48px, 0, 0) scale(0.97); }
          to   { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes dclp-rise {
          from { opacity: 0; transform: translate3d(0, 32px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        /* ---------- Marquee ---------- */
        .dclp-marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
          contain: layout paint;
        }
        .dclp-marquee::before,
        .dclp-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 6%;
          z-index: 1;
          pointer-events: none;
        }
        .dclp-marquee::before {
          left: 0;
          background: linear-gradient(90deg, #1a1a1a, rgba(26, 26, 26, 0));
        }
        .dclp-marquee::after {
          right: 0;
          background: linear-gradient(270deg, #1a1a1a, rgba(26, 26, 26, 0));
        }

        .dclp-track {
          display: flex;
          width: max-content;
          animation: dclp-scroll 70s linear infinite;
          will-change: transform;
        }
        .dclp-root[data-paused="true"] .dclp-track {
          animation-play-state: paused;
        }
        /* cursor on any project card stops the marquee */
        .dclp-marquee:hover .dclp-track {
          animation-play-state: paused;
        }

        .dclp-group {
          display: flex;
          flex: none;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .dclp-item {
          flex: 0 0 min(80vw, 340px);
          width: min(80vw, 340px);
          margin-right: 18px;
        }
        @media (min-width: 640px) {
          .dclp-item {
            flex-basis: 380px;
            width: 380px;
            margin-right: 24px;
          }
        }

        @keyframes dclp-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        /* ---------- Reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .dclp-art,
          .dclp-copy > *,
          .dclp-track { animation: none; }

          .dclp-marquee { overflow-x: auto; }
          .dclp-marquee::before,
          .dclp-marquee::after { display: none; }
          .dclp-group[aria-hidden="true"] { display: none; }
        }
      `}</style>
    </section>
  );
}