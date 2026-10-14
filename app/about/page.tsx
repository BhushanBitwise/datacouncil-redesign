
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Users } from "lucide-react";

// import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Data Council",
  description:
    "Learn about Data Council's software technology training, practical projects and placement assistance.",
};

const pillars = [
  {
    number: "01",
    title: "Technology training",
    description:
      "Explore training programs across software technologies and in-demand technical skills.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Practical projects",
    description:
      "Build practical experience through project-based learning and work on live-project workflows.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Interview preparation",
    description:
      "Prepare for hiring processes through mock interviews and career-focused practice.",
    icon: Users,
  },
  {
    number: "04",
    title: "Placement assistance",
    description:
      "Get support with career preparation and access to relevant placement opportunities.",
    icon: GraduationCap,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="overflow-hidden bg-[#f4f0e8]">
        <section className="container-main pb-20 pt-12 sm:pb-28 sm:pt-20">
          <ScrollReveal>
            <p className="eyebrow">About Data Council</p>

            <h1 className="display-heading mt-8 max-w-6xl">
              Learn with purpose.
              <br />
              <span className="text-[#77766f]">Build with confidence.</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-2 md:gap-16">
              <p className="text-xl font-medium leading-8 tracking-tight sm:text-2xl">
                Bridging the gap between academic learning and industry
                expectations through technology training and career support.
              </p>

              <p className="text-sm leading-7 text-black/60 sm:text-base">
                Data Council provides software technology training and
                placement-related support for learners preparing to enter or
                progress in the technology industry. The redesigned website
                makes its programs and support services easier to explore.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="dark-section section-space">
          <div className="container-main">
            <ScrollReveal>
              <p className="eyebrow">What we focus on</p>

              <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl">
                More than a classroom.
                <br />
                A path to practice.
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <ScrollReveal
                    key={pillar.number}
                    delay={(index % 2) * 0.08}
                  >
                    <article className="group h-full rounded-2xl border border-white/15 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-[#c9ff3b]/50 hover:bg-white/[0.06] sm:p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">
                          {pillar.number}
                        </span>

                        <Icon
                          size={22}
                          strokeWidth={1.5}
                          className="text-[#c9ff3b]"
                        />
                      </div>

                      <h3 className="mt-12 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                        {pillar.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                        {pillar.description}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-main">
            <ScrollReveal>
              <div className="flex flex-col gap-8 rounded-3xl border border-black/10 bg-white/40 p-7 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="eyebrow">Explore opportunities</p>

                  <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">
                    Find the learning
                    <br />
                    path for you.
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/courses" className="lime-button">
                    Explore courses <ArrowUpRight size={17} />
                  </Link>

                  <Link href="/contact" className="outline-button">
                    Contact us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
