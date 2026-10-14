"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";

import { FEATURED_IDS, GLOWS, PLACEMENTS } from "@/data/placements";

// Lightbox JS tabhi load hoga jab user poster pe click karega
const PosterLightbox = dynamic(() => import("./PosterLightbox"), {
  ssr: false,
});

const FEATURED = FEATURED_IDS.map(
  (id) => PLACEMENTS.find((p) => p.id === id)!
).filter(Boolean);

type CardProps = {
  index: number;
  hidden: boolean;
  onOpen: (index: number) => void;
};

const PosterCard = memo(function PosterCard({ index, hidden, onOpen }: CardProps) {
  const item = FEATURED[index];
  const glow = GLOWS[index % GLOWS.length];

  return (
    <figure className="w-[200px] sm:w-[250px] lg:w-[270px]">
      <button
        type="button"
        onClick={() => onOpen(index)}
        tabIndex={hidden ? -1 : 0}
        aria-label={`View placement poster of ${item.name}`}
        style={{ "--glow": glow } as CSSProperties}
        className="glow-card group block w-full rounded-3xl border border-white/10 p-2.5 text-left transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b] sm:p-3"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/15">
          <Image
            src={`/images/placements/${item.id}.webp`}
            alt={`${item.name} placed at ${item.company}`}
            fill
            sizes="(max-width: 639px) 190px, 270px"
            quality={70}
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={13} aria-hidden="true" />
          </span>
        </div>
      </button>

      <figcaption className="mt-3 px-1">
        <p className="truncate text-sm font-medium text-white sm:text-base">
          {item.name}
        </p>
        <p className="mt-0.5 truncate text-xs text-white/55 sm:text-sm">
          {item.company}
        </p>
      </figcaption>
    </figure>
  );
});

export default function PlacementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  // Section screen se bahar ho to animation pause (CPU/GPU bachta hai)
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const open = useCallback((index: number) => setActive(index), []);
  const close = useCallback(() => setActive(null), []);

  return (
    <section
      ref={sectionRef}
      id="placements"
      aria-labelledby="placements-heading"
      data-inview={inView}
      className="marquee-scope dark-section overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
    >
      <div className="container-main">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2
              id="placements-heading"
              className="text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl"
            >
              Placed. Proud.
              <br />
              <span className="text-white/45">Making it count.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              Real learners, real offers.{" "}
              <span className="text-[#c9ff3b]">{PLACEMENTS.length} placements</span>{" "}
              and counting.
            </p>
          </div>

          <Link href="/placements" className="lime-button self-start sm:self-auto">
            View all <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Full-bleed single-row marquee */}
      <div className="marquee-mask overflow-hidden py-3">
        <div
          className="marquee-track"
          style={{ "--marquee-duration": "70s" } as CSSProperties}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="marquee-group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {FEATURED.map((item, index) => (
                <li key={item.id}>
                  <PosterCard index={index} hidden={copy === 1} onOpen={open} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {active !== null && (
        <PosterLightbox
          ids={FEATURED_IDS}
          index={active}
          onChange={setActive}
          onClose={close}
        />
      )}
    </section>
  );
}