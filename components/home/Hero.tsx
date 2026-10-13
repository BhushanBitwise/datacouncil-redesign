
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24 bg-[#F4F0E8]">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="relative z-10">
              <div className="eyebrow dc-hero-eyebrow">
                Training &amp; placement · Since 2011
              </div>

              <h1 className="display-heading mt-7 max-w-3xl text-balance sm:mt-9">
                <span className="block overflow-hidden pb-1">
                  <span className="dc-hero-line dc-hero-line-1 block">
                    Build skills.
                  </span>
                </span>

                <span className="block overflow-hidden pb-1">
                  <span className="dc-hero-line dc-hero-line-2 block">
                    Become
                  </span>
                </span>

                <span className="block overflow-hidden pb-2">
                  <span className="dc-hero-line dc-hero-line-3 block">
                    job{" "}
                    <span className="relative ml-3 inline-block">
                      ready.
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[7%] left-0 -z-10 h-[25%] w-full bg-[#c9ff3b]"
                      />
                    </span>
                  </span>
                </span>
              </h1>

              <p className="dc-hero-copy mt-6 max-w-lg text-base leading-7 text-black/60 sm:mt-7 sm:text-lg sm:leading-8">
                Learn in-demand technology skills, work on practical
                projects and prepare for your next career opportunity
                with Data Council.
              </p>

              <div className="dc-hero-actions mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                <Link href="/courses" className="lime-button">
                  Explore courses
                  <ArrowUpRight size={17} />
                </Link>

                <Link href="/contact" className="outline-button">
                  Book a demo
                  <MoveUpRight size={16} />
                </Link>
              </div>

              <a
                href="#courses"
                className="dc-hero-copy mt-9 inline-flex min-h-11 items-center gap-3 text-xs font-medium text-black/55 transition-colors hover:text-black sm:mt-11"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-black/15 transition-transform duration-300 hover:translate-y-1">
                  <ArrowDown size={15} />
                </span>
                Scroll to explore
              </a>
            </div>

            <div className="dc-hero-visual relative mx-auto w-full max-w-[580px] lg:ml-auto">
               <div className="relative aspect-[4/4.4] overflow-hidden rounded-[28px] bg-[#101010] sm:aspect-[4/4.1] sm:rounded-[36px] lg:aspect-[4/4.5]">
                <Image
                  src="/images/hero2.webp"
                  alt="Students learning and building technology skills in a classroom"
                  fill
                  priority
                  sizes="(max-width: 640px) calc(100vw - 36px), (max-width: 1024px) 80vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/20" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-white sm:p-7">
                  <span className="text-[10px] font-semibold tracking-[0.18em] sm:text-xs">
                    DATA COUNCIL
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-[10px] font-medium backdrop-blur-md sm:text-xs">
                    <span className="size-1.5 rounded-full bg-[#c9ff3b]" />
                    Learn by building
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                  <div className="mb-4 flex items-center gap-2 text-xs text-white/75 sm:text-sm">
                    <Sparkles size={15} className="text-[#c9ff3b]" />
                    Skills for what comes next
                  </div>

                  <p className="max-w-md text-4xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                    Learn.
                    <br />
                    Build.
                    <br />
                    <span className="text-[#c9ff3b]">
                      Move forward.
                    </span>
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/25 pt-5 sm:mt-8 sm:pt-6">
                    <div>
                      <p className="text-lg font-semibold sm:text-xl">
                        Since 2011
                      </p>
                      <p className="mt-1 text-xs text-white/65 sm:text-sm">
                        Training &amp; placement
                      </p>
                    </div>

                    <Link
                      href="/about"
                      aria-label="Learn more about Data Council"
                      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-black transition-transform duration-300 hover:rotate-45 sm:size-12"
                    >
                      <MoveUpRight size={21} />
                    </Link>
                  </div>
                </div>
              </div> 
              

              <div
                aria-hidden="true"
                className="absolute -right-2 -top-3 -z-10 size-20 rounded-full bg-[#c9ff3b] sm:-right-4 sm:-top-5 sm:size-28"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes dcHeroRise {
          from {
            opacity: 0;
            transform: translate3d(0, 26px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes dcHeroLineReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 110%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes dcHeroVisualReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 32px, 0) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .dc-hero-eyebrow,
        .dc-hero-copy,
        .dc-hero-actions,
        .dc-hero-line,
        .dc-hero-visual {
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dc-hero-eyebrow {
          animation: dcHeroRise 850ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
        }

        .dc-hero-line {
          animation-name: dcHeroLineReveal;
          animation-duration: 1200ms;
        }

        .dc-hero-line-1 {
          animation-delay: 150ms;
        }

        .dc-hero-line-2 {
          animation-delay: 340ms;
        }

        .dc-hero-line-3 {
          animation-delay: 530ms;
        }

        .dc-hero-copy {
          animation-name: dcHeroRise;
          animation-duration: 900ms;
          animation-delay: 650ms;
        }

        .dc-hero-actions {
          animation: dcHeroRise 900ms cubic-bezier(0.16, 1, 0.3, 1) 780ms both;
        }

        .dc-hero-visual {
          animation: dcHeroVisualReveal 1400ms cubic-bezier(0.16, 1, 0.3, 1) 250ms both;
          will-change: transform, opacity;
        }

        @media (max-width: 640px) {
          .dc-hero-line {
            animation-duration: 1000ms;
          }

          .dc-hero-visual {
            animation-duration: 1150ms;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dc-hero-eyebrow,
          .dc-hero-copy,
          .dc-hero-actions,
          .dc-hero-line,
          .dc-hero-visual {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            will-change: auto !important;
          }
        }
      `}</style>
    </>
  );
}
