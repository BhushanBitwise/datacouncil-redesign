
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryItems = [
  {
    src: "/images/gallery/Data-Council-Full-Stack-training-Session.webp",
    alt: "Full-stack development training session at Data Council",
    title: "Learning in Action",
    category: "Training",
    note: "Ideas become practical skills.",
    className: "dc-gallery-card--feature",
  },
  {
    src: "/images/gallery/Data-Council-Certificate.webp",
    alt: "Data Council course certificate",
    title: "A Milestone Worth Keeping",
    category: "Achievements",
    note: "Every step forward counts.",
    className: "",
  },
  {
    src: "/images/gallery/Data-Council-Training-Group-Photo.webp",
    alt: "Data Council training group photo",
    title: "Better Together",
    category: "Community",
    note: "Progress is better shared.",
    className: "dc-gallery-card--tall",
  },
  {
    src: "/images/gallery/Vibrant-Modern-Coding-classroom.webp",
    alt: "Modern coding classroom at Data Council",
    title: "Inside the Classroom",
    category: "Campus",
    note: "A space to explore and build.",
    className: "",
  },
  {
    src: "/images/gallery/color-celebration-girl.webp",
    alt: "Student celebrating during an event",
    title: "Moments That Matter",
    category: "Student Life",
    note: "The people make the journey.",
    className: "dc-gallery-card--tall",
  },
  {
    src: "/images/gallery/Classroom-Cake-Celebration.webp",
    alt: "A cake celebration with the classroom group",
    title: "Make Room for Celebration",
    category: "Student Life",
    note: "Small wins deserve a moment.",
    className: "",
  },
  {
    src: "/images/gallery/classTeche.webp",
    alt: "Technology learning session in a classroom",
    title: "The Learning Space",
    category: "Training",
    note: "Curiosity leads the way.",
    className: "dc-gallery-card--feature",
  },
] as const;

export default function GalleryPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".dc-gallery-kicker, .dc-gallery-title, .dc-gallery-copy, .dc-gallery-meta",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform",
        },
      );

      gsap.fromTo(
        ".dc-gallery-card",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".dc-gallery-grid",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>

      <main
        ref={rootRef}
        className="dc-gallery overflow-hidden bg-[#F4F0E8] text-[#101010]"
      >
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#101010] text-[#F4F0E8]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-28 -top-32 size-[420px] rounded-full bg-[#C9FF3B]/15 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9FF3B]/40 to-transparent" />
          </div>

          <div className="relative mx-auto grid max-w-[1600px] items-end gap-10 px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-40">
            <div>
              <p className="dc-gallery-kicker mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                <span className="size-2 rounded-full bg-[#C9FF3B]" />
                The Data Council experience
              </p>

              <h1 className="dc-gallery-title max-w-5xl text-[clamp(3.2rem,8.7vw,8.2rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
                Real people.
                <br />
                <span className="text-[#C9FF3B]">Real progress.</span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="dc-gallery-copy max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                A closer look at the learning, people and moments that make
                the Data Council journey.
              </p>

              <div className="dc-gallery-meta mt-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                <span className="text-[#C9FF3B]">Gallery</span>
                <span className="h-px w-12 bg-white/20" />
                
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          aria-label="Data Council photo gallery"
          className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        >
          <div className="mb-8 flex items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
              The moments
            </p>
            <span className="h-px flex-1 bg-black/10" />
            <p className="text-xs text-black/45">Scroll to explore</p>
          </div>

          <div className="dc-gallery-grid grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {galleryItems.map((item, index) => (
              <article
                key={item.src}
                className={`dc-gallery-card group min-w-0 ${item.className}`}
              >
                <div className="dc-gallery-media relative isolate aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[#E5E0D6] sm:rounded-[1.5rem]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={
                      item.className.includes("feature")
                        ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 66vw"
                        : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    }
                    quality={75}
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                    <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-[11px]">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="mb-2 text-xs leading-5 text-white/65">
                      {item.note}
                    </p>

                    <div className="flex items-end justify-between gap-3">
                      <h2 className="max-w-[85%] text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl">
                        {item.title}
                      </h2>

                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#C9FF3B] text-lg text-[#101010] transition-transform duration-300 group-hover:rotate-45"
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-sm leading-6 text-black/55">
              Every frame is part of the journey — learning, collaboration
              and shared celebrations.
            </p>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#101010] px-5 py-3 text-sm font-medium  transition-colors bg-[#C9FF3B] hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
            >
              <span>Get in touch</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <style>{`
          .dc-gallery-card {
            opacity: 0;
          }

          .dc-gallery-card--feature {
            grid-column: span 1;
          }

          @media (min-width: 1024px) {
            .dc-gallery-card--feature {
              grid-column: span 2;
            }

            .dc-gallery-card--feature .dc-gallery-media {
              aspect-ratio: 1.5 / 1;
            }

            .dc-gallery-card--tall .dc-gallery-media {
              aspect-ratio: 4 / 5.2;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .dc-gallery *,
            .dc-gallery *::before,
            .dc-gallery *::after {
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
              animation-duration: 0.01ms !important;
            }
          }
        `}</style>
      </main>
    </>
  );
}
