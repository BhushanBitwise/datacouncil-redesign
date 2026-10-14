"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type Props = {
  ids: number[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function PosterLightbox({ ids, index, onChange, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = ids.length;
  const id = ids[index];

  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange((index - 1 + total) % total);
      if (event.key === "ArrowRight") onChange((index + 1) % total);
    };

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, total, onChange, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Placement poster preview"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-white hover:text-black sm:right-6 sm:top-6"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous poster"
        className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-[#c9ff3b] hover:text-black sm:left-6"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next poster"
        className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-[#c9ff3b] hover:text-black sm:right-6"
      >
        <ArrowRight size={18} />
      </button>

      <div className="relative h-[82dvh] w-full max-w-[min(88vw,620px)]">
        <Image
          key={id}
          src={`/images/placements/${id}.webp`}
          alt={`Full placement poster ${id}`}
          fill
          sizes="(max-width: 680px) 88vw, 620px"
          quality={85}
          priority
          className="object-contain"
        />
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80">
        {index + 1} / {total}
      </p>
    </div>
  );
}