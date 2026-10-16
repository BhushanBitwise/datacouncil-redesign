

"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

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

type GalleryItem = (typeof galleryItems)[number];

const TOTAL = galleryItems.length;
const PRIORITY_COUNT = 2; // only the first images above the fold load eagerly

const rise = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/* -------------------------------------------------------------------------- */
/*  Card                                                                      */
/* -------------------------------------------------------------------------- */

const GalleryCard = memo(function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (index: number, trigger: HTMLElement) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const isFeature = item.className.includes("feature");

  return (
    <article className={`dc-gallery-card group min-w-0 ${item.className}`}>
      <button
        type="button"
        onClick={(event) => onOpen(index, event.currentTarget)}
        aria-label={`View ${item.title} in full size`}
        aria-haspopup="dialog"
        className="dc-gallery-media relative isolate block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-[1.25rem] bg-[#E5E0D6] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010] sm:rounded-[1.5rem]"
      >
        {/* Skeleton shimmer until the photo is ready */}
        <span
          aria-hidden="true"
          className={`dc-shimmer pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={
            isFeature
              ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 66vw"
              : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          }
          quality={75}
          priority={index < PRIORITY_COUNT}
          loading={index < PRIORITY_COUNT ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        />

        <span className="absolute left-4 top-4 block sm:left-5 sm:top-5">
          <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-[11px]">
            {item.category}
          </span>
        </span>

        <span className="absolute inset-x-0 bottom-0 block p-5 text-white sm:p-6">
          <span className="mb-2 block text-xs leading-5 text-white/65">
            {item.note}
          </span>

          <span className="flex items-end justify-between gap-3">
            <span className="block max-w-[85%] text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl">
              {item.title}
            </span>

            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#C9FF3B] text-lg text-[#101010] transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </span>
        </span>
      </button>
    </article>
  );
});

/* -------------------------------------------------------------------------- */
/*  Lightbox                                                                  */
/* -------------------------------------------------------------------------- */

function LightboxImage({
  item,
  active,
}: {
  item: GalleryItem;
  active: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      aria-hidden={!active}
      className={`absolute inset-0 transition-opacity duration-300 ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {active && !loaded && (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-2 border-white/20 border-t-[#C9FF3B]"
        />
      )}

      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="100vw"
        quality={75}
        loading="eager"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`object-contain transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (direction: 1 | -1) => onNavigate((index + direction + TOTAL) % TOTAL),
    [index, onNavigate],
  );

  // Lock page scroll while open
  useEffect(() => {
    const { overflow, paddingRight } = document.body.style;
    const scrollbar =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  // Keyboard: Esc, arrows, Tab focus trap
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        go(1);
      } else if (event.key === "ArrowLeft") {
        go(-1);
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled])",
        );
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [go, onClose]);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
  };

  const item = galleryItems[index];

  // Current photo + its neighbours, so next/prev feels instant
  const visible = [(index - 1 + TOTAL) % TOTAL, index, (index + 1) % TOTAL];

  const arrowClass =
    "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-[#C9FF3B] hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9FF3B] sm:size-12";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} – photo ${index + 1} of ${TOTAL}`}
      className="dc-lightbox fixed inset-0 z-[100] flex flex-col bg-[#0A0A0A]/95 text-[#F4F0E8] backdrop-blur-xl"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-8 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
          <span className="text-[#C9FF3B]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 text-white/25">/</span>
          {String(TOTAL).padStart(2, "0")}
        </p>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery viewer"
          className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-[#C9FF3B] hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9FF3B]"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Stage */}
      <div
        className="relative min-h-0 flex-1 px-2 sm:px-20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(event) => {
          // click on the empty backdrop closes the viewer
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className={`${arrowClass} left-2 sm:left-5`}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>

        <div className="relative h-full w-full">
          {visible.map((i) => (
            <LightboxImage key={i} item={galleryItems[i]} active={i === index} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className={`${arrowClass} right-2 sm:right-5`}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      {/* Caption */}
      <div className="px-5 pb-6 pt-4 text-center sm:px-8 sm:pb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9FF3B]">
          {item.category}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
          {item.title}
        </h2>
        <p className="mt-1 text-sm text-white/55">{item.note}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openViewer = useCallback((index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActive(index);
  }, []);

  const closeViewer = useCallback(() => {
    setActive(null);
    // give focus back to the card that opened the viewer
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  return (
    <main className="dc-gallery overflow-hidden bg-[#F4F0E8] text-[#101010]">
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
            <p
              style={rise(0)}
              className="dc-rise mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60"
            >
              <span className="size-2 rounded-full bg-[#C9FF3B]" />
              The Data Council experience
            </p>

            <h1
              style={rise(80)}
              className="dc-rise max-w-5xl text-[clamp(3.2rem,8.7vw,8.2rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
            >
              Real people.
              <br />
              <span className="text-[#C9FF3B]">Real progress.</span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p
              style={rise(160)}
              className="dc-rise max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
            >
              A closer look at the learning, people and moments that make the
              Data Council journey.
            </p>

            <div
              style={rise(240)}
              className="dc-rise mt-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
            >
              <span className="text-[#C9FF3B]">Gallery</span>
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
          <p className="text-xs text-black/45">Tap any photo to view</p>
        </div>

        <div className="dc-gallery-grid grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.src}
              item={item}
              index={index}
              onOpen={openViewer}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-black/55">
            Every frame is part of the journey — learning, collaboration and
            shared celebrations.
          </p>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#101010] px-5 py-3 text-sm font-semibold !text-white transition-colors duration-300 hover:!bg-[#C9FF3B] hover:!text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
          >
            Get in touch
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {active !== null && (
        <Lightbox
          index={active}
          onClose={closeViewer}
          onNavigate={setActive}
        />
      )}

      <style>{`
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

        /* Pure CSS entrance (no JS animation library needed) */
        @keyframes dc-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dc-rise {
          animation: dc-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--d, 0ms);
        }

        /* Skeleton shimmer while images load */
        @keyframes dc-shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
        .dc-shimmer { overflow: hidden; background: #E5E0D6; }
        .dc-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.55),
            transparent
          );
          animation: dc-shimmer 1.4s ease-in-out infinite;
        }

        /* Lightbox open */
        @keyframes dc-lightbox-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .dc-lightbox { animation: dc-lightbox-in 0.25s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .dc-gallery *,
          .dc-gallery *::before,
          .dc-gallery *::after,
          .dc-lightbox,
          .dc-lightbox * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}