"use client";

import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowLeft, ArrowRight, BriefcaseBusiness } from "lucide-react";

import { GLOWS, PLACEMENTS, initials } from "@/data/placements";

const PER_PAGE = 12;
const TOTAL_PAGES = Math.ceil(PLACEMENTS.length / PER_PAGE);

function pageList(current: number): (number | "dots")[] {
  const pages: (number | "dots")[] = [];
  let last = 0;
  for (let n = 1; n <= TOTAL_PAGES; n++) {
    if (n === 1 || n === TOTAL_PAGES || Math.abs(n - current) <= 1) {
      if (n - last > 1) pages.push("dots");
      pages.push(n);
      last = n;
    }
  }
  return pages;
}

export default function PlacementCards() {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const start = (page - 1) * PER_PAGE;
  const visible = PLACEMENTS.slice(start, start + PER_PAGE);

  const go = (next: number) => {
    const target = Math.min(TOTAL_PAGES, Math.max(1, next));
    if (target === page) return;
    setPage(target);
    topRef.current?.scrollIntoView({ block: "start" });
  };

  return (
    <div ref={topRef} className="scroll-mt-24">
      <div
        className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        aria-live="polite"
      >
        {visible.map((item, i) => {
          const glow = GLOWS[(start + i) % GLOWS.length];
          return (
            <article
              key={item.id}
              style={{ "--glow": glow } as CSSProperties}
              className="glow-card group flex min-h-[220px] flex-col justify-between rounded-3xl border border-white/10 p-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex size-12 items-center justify-center rounded-full bg-[#c9ff3b] text-sm font-bold text-black"
                  aria-hidden="true"
                >
                  {initials(item.name)}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                  Placed
                </span>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-white">
                  {item.name}
                </h3>
                <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-white/60">
                  <BriefcaseBusiness
                    size={15}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#c9ff3b]"
                  />
                  <span>{item.company}</span>
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-xs text-white/55 sm:text-sm">
          Showing{" "}
          <span className="font-semibold text-white">
            {start + 1}–{Math.min(start + PER_PAGE, PLACEMENTS.length)}
          </span>{" "}
          of {PLACEMENTS.length} placements
        </p>

        <nav aria-label="Placements pagination" className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
          >
            <ArrowLeft size={16} />
          </button>

          {pageList(page).map((n, i) =>
            n === "dots" ? (
              <span key={`d${i}`} className="px-1 text-sm text-white/40" aria-hidden="true">
                …
              </span>
            ) : (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-label={`Page ${n}`}
                aria-current={page === n ? "page" : undefined}
                className={`size-10 rounded-full text-xs font-semibold transition-colors ${
                  page === n
                    ? "bg-[#c9ff3b] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {n}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === TOTAL_PAGES}
            aria-label="Next page"
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
          >
            <ArrowRight size={16} />
          </button>
        </nav>
      </div>
    </div>
  );
}