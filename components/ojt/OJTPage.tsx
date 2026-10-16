"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { courses } from "@/data/courses";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Code2,
  GitBranch,
  GraduationCap,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const WHATSAPP = "918080152238";
const EMAIL = "hr@datacouncil.in";
const wa = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* `!text-*` (important) is used on purpose: a global `a { color: inherit }`
   rule silently beats normal Tailwind text colours and hides button text. */
const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold no-underline transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9ff3b] active:scale-[.98]";
const btnLime = `${base} bg-[#c9ff3b] !text-[#101010] hover:brightness-95`;
const btnDark = `${base} bg-[#101010] !text-white hover:bg-black`;
const btnWhite = `${base} bg-white !text-[#101010] hover:bg-[#c9ff3b]`;
const btnGhost = `${base} border border-white/25 !text-white hover:border-white/60 hover:bg-white/10`;

const tracks = [
  {
    title: "Full-Stack Development",
    description:
      "Build and improve web applications across frontend, backend, APIs and databases.",
    tools: ["HTML/CSS", "JavaScript / TypeScript", "React / Next.js", "Node.js / APIs", "SQL / Git"],
    icon: Code2,
  },
  {
    title: "Data Analytics & AI",
    description:
      "Work through a data workflow: cleaning, analysis, dashboards, interpretation and responsible AI-assisted tasks.",
    tools: ["Excel", "SQL", "Python", "Power BI", "AI-assisted workflows"],
    icon: Target,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Practise source control, deployment workflows, cloud fundamentals, automation and operational checks.",
    tools: ["Git", "Linux", "CI/CD concepts", "Docker", "AWS / Azure concepts"],
    icon: Workflow,
  },
  {
    title: "Software Testing",
    description:
      "Turn requirements into test cases, reproduce defects, document evidence and validate fixes.",
    tools: ["Test cases", "Bug reports", "API testing", "SQL basics", "Selenium concepts"],
    icon: ShieldCheck,
  },
  {
    title: "Digital Marketing with AI",
    description:
      "Plan and measure campaign work through audience research, content, SEO, analytics and AI-assisted drafts.",
    tools: ["SEO", "Content planning", "Campaign metrics", "Analytics", "AI tools"],
    icon: Layers3,
  },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Workplace & project onboarding",
    points: [
      "Understand the chosen domain, project brief, goals and expected deliverables.",
      "Set up tools, accounts, repository or workspace, and working conventions.",
      "Learn task tracking, professional communication, documentation and escalation.",
    ],
    output: "Project brief, environment setup and task plan",
  },
  {
    phase: "Phase 2",
    title: "Break work into manageable tasks",
    points: [
      "Convert requirements into tasks, acceptance criteria and a realistic priority order.",
      "Review existing code, data, content or test artefacts before changing anything.",
      "Record assumptions and ask for clarification when requirements are unclear.",
    ],
    output: "Task board, acceptance criteria and initial review",
  },
  {
    phase: "Phase 3",
    title: "Build, analyse or test",
    points: [
      "Complete assigned work in small, reviewable increments.",
      "Use version control or a documented change history wherever the track supports it.",
      "Test results, check edge cases and keep evidence of decisions and outcomes.",
    ],
    output: "Working feature, analysis, campaign artefact or test evidence",
  },
  {
    phase: "Phase 4",
    title: "Review, fix and improve",
    points: [
      "Receive mentor or reviewer feedback as per the programme's actual review process.",
      "Resolve identified issues and explain the reasoning behind important decisions.",
      "Update documentation and re-check the work after changes.",
    ],
    output: "Reviewed revision and issue / feedback log",
  },
  {
    phase: "Phase 5",
    title: "Demo & professional handover",
    points: [
      "Prepare a concise demo of the work completed and the problem it addresses.",
      "Present the workflow, limitations, testing or measurement approach and next steps.",
      "Organise permitted portfolio material and prepare to discuss the work in interviews.",
    ],
    output: "Project demo, handover notes and portfolio-ready summary",
  },
];

const workHabits = [
  { icon: GitBranch, title: "Versioning & change history", description: "Understand how work is tracked, reviewed and safely updated." },
  { icon: ClipboardCheck, title: "Task and quality checks", description: "Use clear requirements, checklists, test evidence and completion criteria." },
  { icon: Users, title: "Feedback & collaboration", description: "Practise status updates, review discussions and professional handovers." },
  { icon: BriefcaseBusiness, title: "Portfolio & interview readiness", description: "Explain your own contribution, decisions, challenges and results honestly." },
];

const audience = [
  { who: "Final-year students & fresh graduates", note: "You know the basics but have no project you can explain end to end." },
  { who: "Career switchers", note: "You want a structured, reviewed project instead of random tutorials." },
  { who: "Self-learners with gaps", note: "You can follow courses but have never worked with briefs, reviews and deadlines." },
];

const perspectives = [
  {
    role: "Student",
    looksFor: "Skills I can show, not just a certificate.",
    check: "Ask what you will have at the end: a repository, test report, dashboard or campaign plan you can open in an interview.",
  },
  {
    role: "Parent",
    looksFor: "Clear money, clear schedule, no surprises.",
    check: "Get the fee split, second due date, refund rules, batch timings and mentor access in writing.",
  },
  {
    role: "Hiring manager",
    looksFor: "Evidence of process: commits, test logs, decisions.",
    check: "A certificate alone rarely counts. Candidates who can explain what they personally built, broke and fixed stand out.",
  },
  {
    role: "Institute",
    looksFor: "A batch size where every learner still gets reviewed.",
    check: "Ask how many learners share one mentor and how often reviews actually happen.",
  },
];

const outcomes = [
  "A project you built or analysed yourself, with a documented change history",
  "A feedback log showing what was reviewed, what you fixed and why",
  "A short demo and handover note you can reuse in interviews",
  "Comfort with briefs, task boards, status updates and deadlines",
];

const notPromised = [
  "A guaranteed job or placement (none is stated on this page)",
  "Access to a paying client's production systems (confirm per batch)",
  "Skills without effort: output depends on the work you put in",
];

const asks = [
  "Which track is confirmed for my batch, and what are the prerequisites?",
  "Will the project be internal, simulated, or assigned by an external client?",
  "What tools, mentor reviews and project deliverables are included?",
  "What is the exact duration, attendance policy and second-instalment due date?",
  "What certificate or career support is included, and what is not guaranteed?",
  "What is the refund policy if I leave after the first instalment?",
];

const faqs = [
  {
    question: "What is the total OJT fee?",
    answer:
      "The programme fee shown on this page is ₹70,000, split into two instalments: ₹40,000 first and ₹30,000 second. Confirm the second instalment due date, payment terms and any applicable taxes in writing with the Data Council team before enrolling.",
  },
  {
    question: "Do I have to pay the entire fee at once?",
    answer:
      "The displayed plan is ₹40,000 followed by ₹30,000. The exact due date for the second instalment should be confirmed by the team before payment.",
  },
  {
    question: "Will I work on a real client project?",
    answer:
      "The programme is built around practical, work-style tasks and deliverables. Whether a batch gets an external client assignment, production access or a particular mentor is subject to confirmation by Data Council. Ask for the project scope and access conditions before enrolling.",
  },
  {
    question: "Which technology track can I choose?",
    answer:
      "Possible tracks are Full-Stack Development, Data Analytics & AI, Cloud & DevOps, Software Testing, and Digital Marketing with AI. Confirm which are open for your batch, their prerequisites and detailed syllabus.",
  },
  {
    question: "How long is the programme?",
    answer:
      "Duration is not specified on this page. Contact Data Council to confirm batch duration, weekly schedule, attendance expectations and review milestones.",
  },
  {
    question: "Does OJT guarantee a job or placement?",
    answer:
      "No job guarantee is stated here. Ask the team to explain the exact career support included, eligibility requirements, and whether any placement commitment is documented in the programme terms.",
  },
];

const levels = ["Student / fresher", "Working professional", "Career switcher"];
const NOT_SURE = "Not sure yet";

function EnquiryForm() {
  const [name, setName] = useState("");
  const [track, setTrack] = useState(NOT_SURE);
  const [level, setLevel] = useState(levels[0]);

  // Courses come straight from data/courses.ts, grouped by their category.
  const grouped = useMemo(() => {
    const map = new Map<string, typeof courses>();
    for (const c of courses) {
      map.set(c.category, [...(map.get(c.category) ?? []), c]);
    }
    return Array.from(map.entries());
  }, []);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Please enter your name so the team knows who is writing.");
      return;
    }
    setError("");
    const msg =
      `Hello Data Council, I am ${name.trim()} (${level}). ` +
      (track === NOT_SURE
        ? `I am not sure which course to choose for OJT yet. `
        : `I am interested in OJT for the course: ${track}. `) +
      `Please share the syllabus, duration, project details and written instalment terms.` +
      (note.trim() ? ` Note: ${note.trim()}` : "");
    window.open(wa(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm !text-[#101010] outline-none transition focus:border-black focus:ring-2 focus:ring-[#c9ff3b]";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <label className="block text-sm font-semibold">
        Your name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="e.g. Rahul Patil"
          autoComplete="name"
          aria-invalid={!!error}
          aria-describedby={error ? "name-error" : undefined}
        />
        {error && (
          <span id="name-error" role="alert" className="mt-2 block text-xs font-medium text-red-700">
            {error}
          </span>
        )}
      </label>

      <label className="block text-sm font-semibold">
        Course you are interested in
        <select value={track} onChange={(e) => setTrack(e.target.value)} className={field}>
          <option value={NOT_SURE}>{NOT_SURE}</option>
          {grouped.map(([category, items]) => (
            <optgroup key={category} label={category}>
              {items.map((c) => (
                <option key={c.slug} value={c.title}>
                  {c.title} ({c.duration})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className="text-sm font-semibold">I am a</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              type="button"
              key={l}
              onClick={() => setLevel(l)}
              aria-pressed={level === l}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                level === l
                  ? "border-[#101010] bg-[#101010] !text-white"
                  : "border-black/20 bg-white !text-[#101010] hover:border-black/50"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-semibold">
        Anything the team should know? <span className="font-normal text-black/45">(optional)</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className={field}
          placeholder="Your background, preferred timings, questions..."
        />
      </label>

      <button type="submit" className={`${btnDark} w-full`}>
        <MessageCircle size={17} aria-hidden="true" />
        Send enquiry on WhatsApp
      </button>
      <p className="text-xs leading-5 text-black/50" aria-live="polite">
        {sent
          ? "WhatsApp opened with your message. If nothing opened, allow pop-ups or use the email link below."
          : "This opens WhatsApp with your details filled in. Nothing is stored on this website."}
      </p>
      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent("OJT Training Enquiry")}&body=${encodeURIComponent(
          `Name: ${name}\nCourse: ${track}\nProfile: ${level}\n${note}`
        )}`}
        className="text-xs font-semibold underline underline-offset-4"
      >
        Prefer email? Write to {EMAIL}
      </a>
    </form>
  );
}

export default function OJTPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f0e8] pb-20 text-[#101010] lg:pb-0">
      <style>{`html{scroll-behavior:smooth}@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}`}</style>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#101010] text-[#f4f0e8]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-24 -top-28 size-[360px] rounded-full bg-[#c9ff3b]/10 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-28 lg:pt-20">
          <div>
            {/* stacked: back button first, label below it */}
            <div className="flex flex-col items-start gap-8">
              <Link
                href="/courses"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-xs font-medium !text-white/80 no-underline transition-colors hover:border-[#c9ff3b]/70 hover:!text-[#c9ff3b]"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Explore courses
              </Link>

              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9ff3b]">
                <span className="size-2 rounded-full bg-[#c9ff3b]" aria-hidden="true" />
                On-the-Job Training · Pune
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[.92] tracking-[-.07em]">
              Learn the work.
              <br />
              <span className="text-[#c9ff3b]">Do the work.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Move beyond tutorials with a structured, project-led OJT experience:
              understand a brief, plan tasks, build or analyse, review quality and
              present your work professionally.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <a href="#enquire" className={btnLime}>
                Enquire now
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#fee" className={btnGhost}>
                View fee & instalments
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/60">
              {["Project workflow", "Review & iteration", "Final demonstration"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check size={14} className="text-[#c9ff3b]" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Programme investment
                  </p>
                  <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">₹70,000</p>
                  <p className="mt-2 text-sm text-white/60">Two instalments: ₹40,000 + ₹30,000</p>
                </div>
                <span className="rounded-full bg-[#c9ff3b] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#101010]">
                  OJT
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-4 rounded-2xl bg-black/25 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-sm font-bold text-[#101010]">1</span>
                  <div>
                    <p className="font-semibold">First instalment</p>
                    <p className="mt-1 text-2xl font-semibold">₹40,000</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">Initial payment; confirm terms before enrolment.</p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl border border-white/15 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#c9ff3b]/60 text-sm font-bold text-[#c9ff3b]">2</span>
                  <div>
                    <p className="font-semibold">Second instalment</p>
                    <p className="mt-1 text-2xl font-semibold">₹30,000</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">Due date and conditions to be confirmed by the team.</p>
                  </div>
                </div>
              </div>

              <a
                href={wa("Hello Data Council, I want details about the OJT Training programme, syllabus, duration and instalment terms.")}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnWhite} mt-6 w-full`}
              >
                <MessageCircle size={17} aria-hidden="true" />
                Ask about OJT on WhatsApp
              </a>
              <p className="mt-3 text-center text-[11px] leading-5 text-white/50">
                Confirm duration, track availability and written payment terms before paying.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">What OJT should feel like</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-.06em] sm:text-6xl">
              From learning concepts to delivering work.
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
              A good OJT programme makes the work process visible, not just the finished
              project. You practise reading requirements, breaking down tasks, producing
              evidence, receiving feedback, fixing issues and explaining your contribution.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {workHabits.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-black/10 bg-white/50 p-5">
                  <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/65">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="border-y border-black/10 bg-[#ece6d9] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">Who it is for</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-.06em] sm:text-5xl">
              Best if you can learn but have nothing to show yet.
            </h2>
          </div>
          <ul className="grid gap-3">
            {audience.map((a) => (
              <li key={a.who} className="flex gap-4 rounded-2xl border border-black/10 bg-[#f4f0e8] p-5">
                <GraduationCap size={22} strokeWidth={1.7} className="mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">{a.who}</p>
                  <p className="mt-1 text-sm leading-6 text-black/65">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRACKS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">Choose your direction</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.06em] sm:text-6xl">
                Work in a domain you want to grow in.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-black/65">
              These are proposed tracks. Confirm availability and prerequisites for your batch with Data Council.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {tracks.map((track, i) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-black/10 bg-white/50 p-6 transition-colors hover:border-black/30 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-black/45">Track {i + 1}</span>
                    <span className="flex size-11 items-center justify-center rounded-full bg-[#101010] text-[#c9ff3b]">
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-.04em]">{track.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{track.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {track.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-black/15 px-3 py-1.5 text-[11px] font-medium text-black/70">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="mt-auto pt-7 text-xs text-black/50">Content and tool access subject to batch confirmation.</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section id="syllabus" className="border-t border-black/10 bg-[#ece6d9] scroll-mt-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">Programme syllabus</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-.06em] sm:text-6xl">
              A repeatable workflow for real work.
            </h2>
            <p className="mt-5 text-sm leading-7 text-black/65">
              This is the common OJT framework. Domain-specific tasks, exact duration,
              assessment and deliverables are finalised with the institute per batch.
            </p>
            <div className="mt-7 rounded-2xl bg-[#101010] p-5 text-[#f4f0e8]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Expected practice</p>
              <p className="mt-3 text-lg font-medium leading-7">Understand → Plan → Execute → Review → Demonstrate</p>
            </div>
          </div>

          <div className="space-y-3">
            {phases.map((p, index) => (
              <details
                key={p.phase}
                open={index === 0}
                className="group rounded-2xl border border-black/10 bg-white/55 open:bg-white/80"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#101010] text-xs font-semibold text-[#c9ff3b]">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">{p.phase}</span>
                    <span className="mt-1 block text-lg font-semibold tracking-[-.02em] sm:text-xl">{p.title}</span>
                  </span>
                  <ArrowDownRight size={19} className="shrink-0 transition-transform group-open:-rotate-90" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-6 sm:pl-[5.75rem]">
                  <ul className="space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-7 text-black/70">
                        <Check size={16} className="mt-1 shrink-0 text-black/50" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-xl bg-[#ece6d9] px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">Example deliverable</p>
                    <p className="mt-1 text-sm font-medium">{p.output}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES + HONEST LIMITS */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/10 bg-white/55 p-7 sm:p-9">
            <h2 className="text-3xl font-semibold tracking-[-.05em]">What you should walk away with</h2>
            <ul className="mt-6 space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-7 text-black/75">
                  <Check size={18} className="mt-1 shrink-0 text-[#4a7a00]" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-black/10 bg-[#ece6d9] p-7 sm:p-9">
            <h2 className="text-3xl font-semibold tracking-[-.05em]">What is not promised</h2>
            <ul className="mt-6 space-y-4">
              {notPromised.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-7 text-black/75">
                  <span className="mt-2.5 block h-px w-4 shrink-0 bg-black/60" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PERSPECTIVES */}
      <section className="bg-[#101010] py-16 text-[#f4f0e8] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9ff3b]">Judge it from every side</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-.06em] sm:text-6xl">
            What a student, parent, employer and institute should each check.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {perspectives.map((p) => (
              <article key={p.role} className="rounded-2xl border border-white/15 bg-white/[0.05] p-6">
                <h3 className="text-xl font-semibold">{p.role}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-[#c9ff3b]">{p.looksFor}</p>
                <p className="mt-3 text-sm leading-7 text-white/70">{p.check}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-3xl font-semibold tracking-[-.05em]">Ask these before you pay</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                A good programme answers all of these in writing without hesitation.
              </p>
            </div>
            <ol className="space-y-4">
              {asks.map((q, i) => (
                <li key={q} className="flex gap-4 border-b border-white/15 pb-4">
                  <span className="pt-0.5 text-xs font-semibold text-[#c9ff3b]">{i + 1}</span>
                  <p className="text-sm leading-7 text-white/80">{q}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FEE */}
      <section id="fee" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[2rem] bg-[#c9ff3b] lg:grid-cols-[1fr_.8fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/70">OJT programme fee</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-.07em] sm:text-7xl">₹70,000</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-black/75">
              Pay in two instalments: ₹40,000 first, followed by ₹30,000. Confirm the
              second payment date, refund policy and any additional charges in writing.
            </p>
            <a
              href={wa("Hello Data Council, please share the OJT syllabus, duration, project details, refund policy and written instalment terms.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnDark} mt-7`}
            >
              Request official details
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4 bg-[#b6ed25] p-7 sm:p-10 lg:p-12">
            <div className="rounded-2xl border border-black/15 bg-white/45 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/65">Instalment 1</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-.05em]">₹40,000</p>
              <p className="mt-1 text-xs text-black/65">First payment</p>
            </div>
            <div className="flex justify-center text-black/55">
              <ArrowDownRight size={22} aria-hidden="true" />
            </div>
            <div className="rounded-2xl border border-black/15 bg-white/45 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/65">Instalment 2</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-.05em]">₹30,000</p>
              <p className="mt-1 text-xs text-black/65">Second payment · due date to be confirmed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1100px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">Frequently asked questions</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Before you get started.</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-black/10 bg-white/50 open:bg-white/80">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 font-semibold sm:p-6 [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{faq.question}</span>
                <ArrowDownRight size={18} className="shrink-0 transition-transform group-open:-rotate-90" aria-hidden="true" />
              </summary>
              <p className="max-w-4xl px-5 pb-6 text-sm leading-7 text-black/70 sm:px-6">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ENQUIRE */}
      <section id="enquire" className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 rounded-[2rem] border border-black/10 bg-white/60 p-6 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">Take the next step</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-.06em] sm:text-5xl">
              Ask for the syllabus. Understand the work. Then decide.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-black/65">
              Tell us your track and background. The team will confirm current tracks,
              duration, project access, schedule and payment terms.
            </p>
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row lg:flex-col xl:flex-row">
              <a
                href={wa("Hello Data Council, I am interested in OJT Training.")}
                target="_blank"
                rel="noopener noreferrer"
                className={btnLime + " !bg-[#101010] !text-white"}
              >
                <MessageCircle size={17} aria-hidden="true" />
                Quick WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("OJT Training Enquiry")}`}
                className={`${base} border border-black/25 !text-[#101010] hover:bg-black/5`}
              >
                Email the team
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#101010]/95 p-3 backdrop-blur lg:hidden">
        <a href="#enquire" className={`${btnLime} w-full`}>
          Enquire about OJT · ₹70,000
        </a>
      </div>
    </main>
  );
}













