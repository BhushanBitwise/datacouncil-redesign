"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Shared manual scroller (Internshala style).
 * - Mobile: swipe + snap + thin progress bar
 * - Desktop: trackpad / shift+wheel + round arrow buttons
 * - No auto animation at all
 *
 * Children must be <li> elements (each gets snap via `snap-start` class
 * that YOU add on the <li>, e.g. <li className="snap-start shrink-0">).
 */
type Props = {
  children: ReactNode;
  label: string;
  /** Tailwind classes for left/right gutter of the list (and scroll-padding) */
  inset?: string;
  /** "light" = cream buttons (for dark panels), "dark" = dark buttons (for cream bg) */
  tone?: "light" | "dark";
  /** Gap classes between items */
  gap?: string;
};

export default function ManualScroller({
  children,
  label,
  inset = "px-5 sm:px-8 lg:px-12 scroll-px-5 sm:scroll-px-8 lg:scroll-px-12",
  tone = "light",
  gap = "gap-4 sm:gap-5",
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [overflowing, setOverflowing] = useState(true);
  const [thumb, setThumb] = useState({ left: 0, width: 100 });

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setOverflowing(maxScroll > 4);
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < maxScroll - 4);

    if (maxScroll <= 0) {
      setThumb({ left: 0, width: 100 });
      return;
    }

    const width = Math.max((clientWidth / scrollWidth) * 100, 18);
    const left = (scrollLeft / maxScroll) * (100 - width);
    setThumb({ left, width });
  }, []);

  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      update();
    });
  }, [update]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  const scrollByPage = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * el.clientWidth * 0.8,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByPage(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByPage(-1);
    }
  };

  const arrowTone =
    tone === "light"
      ? "bg-[#f4efe7] text-[#111] hover:bg-[#c9ff3b]"
      : "bg-[#101010] text-white hover:bg-[#c9ff3b] hover:text-[#101010]";

  const trackTone = tone === "light" ? "bg-[#f4efe7]/15" : "bg-black/10";
  const thumbTone = tone === "light" ? "bg-[#c9ff3b]" : "bg-[#101010]";

  const arrowBase =
    "absolute top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-[opacity,background-color,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9ff3b] md:flex";

  return (
    <div>
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-label={`${label}. Use left and right arrow keys to scroll.`}
          className={`mscroller snap-x snap-mandatory overflow-x-auto overscroll-x-contain focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#c9ff3b] ${inset}`}
        >
          <ul className={`m-0 flex w-max list-none py-2 ${gap} ${inset.split(" ").filter((c) => c.includes("px-") && !c.includes("scroll-")).join(" ")}`}>
            {children}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          disabled={!canPrev}
          aria-label="Scroll left"
          className={`${arrowBase} ${arrowTone} left-3 lg:left-6`}
          style={{ opacity: canPrev ? 1 : 0, pointerEvents: canPrev ? "auto" : "none" }}
        >
          <ChevronLeft size={22} strokeWidth={2.5} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => scrollByPage(1)}
          disabled={!canNext}
          aria-label="Scroll right"
          className={`${arrowBase} ${arrowTone} right-3 lg:right-6`}
          style={{ opacity: canNext ? 1 : 0, pointerEvents: canNext ? "auto" : "none" }}
        >
          <ChevronRight size={22} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      {overflowing && (
        <div aria-hidden="true" className="mt-5 px-6">
          <div className={`relative mx-auto h-[3px] w-full max-w-[220px] overflow-hidden rounded-full ${trackTone}`}>
            <span
              className={`absolute inset-y-0 rounded-full ${thumbTone}`}
              style={{ left: `${thumb.left}%`, width: `${thumb.width}%` }}
            />
          </div>
        </div>
      )}

      <style>{`
        .mscroller { scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
        .mscroller::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}