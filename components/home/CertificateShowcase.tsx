// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { Award, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

// const certificates = [
//   {
//     src: "/images/certificate/certification1.webp",
//     alt: "Institute course certificate",
//     title: "Institute Certification",
//   },
//   {
//     src: "/images/certificate/certification2.webp",
//     alt: "University course certificate",
//     title: "University Certification",
//   },
// ];

// const YOUTUBE_ID = "DRCH8VXyR44";
// const YOUTUBE_URL = `https://youtube.com/shorts/${YOUTUBE_ID}?si=uXPmz_BIbHONGpQt`;

// /* Inline icon: newer lucide-react versions removed brand icons */
// function YoutubeIcon({ size = 18 }: { size?: number }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
//     </svg>
//   );
// }

// export default function CertificateShowcase() {
//   const [playVideo, setPlayVideo] = useState(false);
//   const [active, setActive] = useState<number | null>(null);
//   const touchX = useRef<number | null>(null);

//   const close = useCallback(() => setActive(null), []);
//   const prev = useCallback(
//     () =>
//       setActive((i) =>
//         i === null ? i : (i - 1 + certificates.length) % certificates.length
//       ),
//     []
//   );
//   const next = useCallback(
//     () => setActive((i) => (i === null ? i : (i + 1) % certificates.length)),
//     []
//   );

//   // Lightbox: keyboard + body scroll lock
//   useEffect(() => {
//     if (active === null) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", onKey);
//     return () => {
//       document.body.style.overflow = prevOverflow;
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [active, close, prev, next]);

//   // Swipe support for lightbox (mobile)
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchX.current = e.touches[0].clientX;
//   };
//   const onTouchEnd = (e: React.TouchEvent) => {
//     if (touchX.current === null) return;
//     const dx = e.changedTouches[0].clientX - touchX.current;
//     if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
//     touchX.current = null;
//   };

//   return (
//     <section
//       id="certification"
//       aria-labelledby="certification-title"
//       className="relative overflow-hidden bg-[#f4efe7] px-4 py-14 sm:px-6 sm:py-16 lg:py-24"
//     >
//       <div className="relative mx-auto max-w-7xl">
//         {/* Heading */}
//         <header className="mb-10 text-center sm:mb-14">
//           <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
//             <Award size={14} className="text-[#6b8f12]" aria-hidden="true" />
//             Learning &amp; Achievement
//           </p>

//           <h2
//             id="certification-title"
//             className="mt-3 text-3xl font-extrabold tracking-tight text-[#101010] sm:text-4xl lg:text-5xl"
//           >
//             Certifications
//           </h2>

//           <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#c9ff3b]" />

//           <p className="mt-4 text-xs text-black/50 sm:text-sm">
//             Tap or click a certificate to view it in full size.
//           </p>
//         </header>

//         {/* Certificates */}
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:gap-10">
//           {certificates.map((c, i) => (
//             <article key={c.src} className="min-w-0 text-center">
//               <div className="mb-2 flex items-center justify-center gap-3">
//                 <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-xs font-extrabold text-[#101010]">
//                   0{i + 1}
//                 </span>
//                 <h3 className="text-lg font-semibold text-[#101010] sm:text-xl">
//                   {c.title}
//                 </h3>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setActive(i)}
//                 aria-label={`View full-size ${c.title}`}
//                 className="group mx-auto block w-full cursor-zoom-in rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8eb52a]"
//               >
//                 <Image
//                   src={c.src}
//                   alt={c.alt}
//                   width={0}
//                   height={0}
//                   sizes="(max-width: 767px) 94vw, (max-width: 1279px) 46vw, 600px"
//                   quality={85}
//                   className="h-auto w-full drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
//                 />
//               </button>
//             </article>
//           ))}
//         </div>

//         {/* Divider */}
//         <div
//           aria-hidden="true"
//           className="mx-auto mt-16 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-black/15 to-transparent sm:mt-24"
//         />

//         {/* Video section: centered, flat and minimal */}
//         <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-20">
//           <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
//             Event Highlight
//           </p>

//           <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#101010] sm:text-4xl">
//             ChatGPT Tech Fest at IIT Bombay
//           </h3>

//           <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-black/60 sm:text-base">
//             A quick glimpse of the event.
//           </p>

//           {/* Player: solid frame, no gradients / glow / blur */}
//           <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl bg-[#101010] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)] sm:mt-10">
//             {playVideo ? (
//               <iframe
//                 className="absolute inset-0 h-full w-full"
//                 src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&playsinline=1`}
//                 title="ChatGPT Tech Fest at IIT Bombay"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               />
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => setPlayVideo(true)}
//                 aria-label="Play ChatGPT Tech Fest at IIT Bombay video"
//                 className="group absolute inset-0 flex size-full flex-col items-center justify-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#c9ff3b]"
//               >
//                 <span className="flex size-16 items-center justify-center rounded-full bg-white text-[#101010] transition-transform duration-300 group-hover:scale-105 sm:size-20">
//                   <Play size={26} fill="currentColor" className="ml-1" />
//                 </span>

//                 <span className="text-xs font-medium tracking-wide text-white/70 sm:text-sm">
//                   Play video
//                 </span>
//               </button>
//             )}
//           </div>

//           {/* Button: color set inline so global link styles can't override it */}
//           <a
//             href={YOUTUBE_URL}
//             target="_blank"
//             rel="noreferrer"
//             style={{ color: "#101010" }}
//             className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#c9ff3b] px-6 py-3 text-sm font-bold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b9f021] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
//           >
//             <YoutubeIcon size={18} />
//             <span>Watch on YouTube</span>
//             <span aria-hidden="true">↗</span>
//           </a>
//         </div>
//       </div>

//       {/* Lightbox */}
//       {active !== null && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label={certificates[active].title}
//           className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f4efe7]/95 p-3 backdrop-blur-md sm:p-6"
//           onClick={close}
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//         >
//           <button
//             type="button"
//             onClick={close}
//             aria-label="Close"
//             className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-[#101010] text-white transition hover:bg-[#c9ff3b] hover:text-[#101010] sm:right-6 sm:top-6"
//           >
//             <X size={20} />
//           </button>

//           <p className="mb-3 text-sm font-semibold text-[#101010]">
//             {certificates[active].title}
//           </p>

//           <div onClick={(e) => e.stopPropagation()}>
//             <Image
//               key={certificates[active].src}
//               src={certificates[active].src}
//               alt={certificates[active].alt}
//               width={0}
//               height={0}
//               sizes="92vw"
//               quality={90}
//               priority
//               className="h-auto max-h-[78vh] w-auto max-w-[92vw] drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
//             />
//           </div>

//           <div
//             className="mt-4 flex items-center gap-3"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               type="button"
//               onClick={prev}
//               aria-label="Previous certificate"
//               className="flex size-10 items-center justify-center rounded-full bg-[#101010] text-white transition hover:bg-[#c9ff3b] hover:text-[#101010]"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <span className="text-xs font-semibold tabular-nums text-black/60">
//               {active + 1} / {certificates.length}
//             </span>
//             <button
//               type="button"
//               onClick={next}
//               aria-label="Next certificate"
//               className="flex size-10 items-center justify-center rounded-full bg-[#101010] text-white transition hover:bg-[#c9ff3b] hover:text-[#101010]"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }















"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Award, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const certificates = [
  {
    src: "/images/certificate/certification1.webp",
    alt: "Institute course certificate",
    title: "Institute Certification",
  },
  {
    src: "/images/certificate/certification2.webp",
    alt: "University course certificate",
    title: "University Certification",
  },
];

const YOUTUBE_ID = "DRCH8VXyR44";
const YOUTUBE_URL = `https://youtube.com/shorts/${YOUTUBE_ID}?si=uXPmz_BIbHONGpQt`;

/* Inline icon: newer lucide-react versions removed brand icons */
function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

export default function CertificateShowcase() {
  const [playVideo, setPlayVideo] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + certificates.length) % certificates.length
      ),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % certificates.length)),
    []
  );

  // Lightbox: keyboard + body scroll lock
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  // Swipe support for lightbox (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    touchX.current = null;
  };

  return (
    <section
      id="certification"
      aria-labelledby="certification-title"
      className="relative overflow-hidden bg-[#f4efe7] px-4 py-14 sm:px-6 sm:py-16 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <header className="mb-10 text-center sm:mb-14">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
            <Award size={14} className="text-[#6b8f12]" aria-hidden="true" />
            Learning &amp; Achievement
          </p>

          <h2
            id="certification-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-[#101010] sm:text-4xl lg:text-5xl"
          >
            Certifications
          </h2>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#c9ff3b]" />

          <p className="mt-4 text-xs text-black/50 sm:text-sm">
            Tap or click a certificate to view it in full size.
          </p>
        </header>

        {/* Certificates */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:gap-10">
          {certificates.map((c, i) => (
            <article key={c.src} className="min-w-0 text-center">
              <div className="mb-2 flex items-center justify-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-xs font-extrabold text-[#101010]">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#101010] sm:text-xl">
                  {c.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View full-size ${c.title}`}
                className="group mx-auto block w-full cursor-zoom-in rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8eb52a]"
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 767px) 94vw, (max-width: 1279px) 46vw, 600px"
                  quality={85}
                  className="h-auto w-full drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
                />
              </button>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mx-auto mt-16 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-black/15 to-transparent sm:mt-24"
        />

        {/* Video section: centered */}
        <div className="mx-auto mt-14 max-w-4xl text-center sm:mt-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
            Event Highlight
          </p>

          <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#101010] sm:text-4xl">
            A Glimpse of the Event
          </h3>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#c9ff3b]" />

          {/* Player: soft cream poster, blends with the section */}
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-[#ebe4d6] shadow-[0_10px_28px_-14px_rgba(0,0,0,0.25)] sm:mt-10">
            {playVideo ? (
              <iframe
                className="absolute inset-0 h-full w-full bg-[#101010]"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&playsinline=1`}
                title="ChatGPT Tech Fest at IIT Bombay"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlayVideo(true)}
                aria-label="Play ChatGPT Tech Fest at IIT Bombay video"
                className="group absolute inset-0 block size-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#8eb52a]"
              >
                {/* Poster: very light dot pattern */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(16,16,16,0.09) 1.2px, transparent 1.2px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Poster: faint outlined rings */}
                <span
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 size-56 rounded-full border border-black/10 sm:-right-24 sm:-top-28 sm:size-96"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-8 -top-12 size-40 rounded-full border border-black/10 sm:-right-12 sm:-top-16 sm:size-72"
                />

                {/* Poster content */}
                <span className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
                  {/* top */}
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
                    <span
                      aria-hidden="true"
                      className="text-base text-[#6b8f12] sm:text-xl"
                    >
                      ✳
                    </span>
                    Data Council
                  </span>

                  {/* bottom */}
                  <span className="flex items-end justify-between gap-4">
                    <span className="block">
                      <span className="block text-2xl font-extrabold leading-[1.05] tracking-tight text-[#101010] sm:text-5xl lg:text-6xl">
                        ChatGPT
                        <br />
                        Tech Fest
                      </span>
                      <span className="mt-3 inline-block rounded-full bg-[#c9ff3b] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#101010] sm:mt-4 sm:px-4 sm:py-1.5 sm:text-xs">
                        IIT Bombay
                      </span>
                    </span>

                    {/* Play */}
                    <span className="flex shrink-0 flex-col items-center gap-2">
                      <span className="flex size-14 items-center justify-center rounded-full bg-[#c9ff3b] text-[#101010] transition-transform duration-300 group-hover:scale-110 sm:size-20 lg:size-24">
                        <Play
                          fill="currentColor"
                          className="ml-1 size-6 sm:size-8 lg:size-9"
                        />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/60 sm:text-xs">
                        Play video
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            )}
          </div>

          {/* Button: colors set inline so global link styles can't override them */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff" }}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#101010] px-6 py-3 text-sm font-bold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
          >
            <span style={{ color: "#c9ff3b" }}>
              <YoutubeIcon size={18} />
            </span>
            <span>Watch on YouTube</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={certificates[active].title}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f4efe7]/95 p-3 backdrop-blur-md sm:p-6"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-[#101010] text-white transition hover:bg-[#c9ff3b] hover:text-[#101010] sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>

          <p className="mb-3 text-sm font-semibold text-[#101010]">
            {certificates[active].title}
          </p>

          <div onClick={(e) => e.stopPropagation()}>
            <Image
              key={certificates[active].src}
              src={certificates[active].src}
              alt={certificates[active].alt}
              width={0}
              height={0}
              sizes="92vw"
              quality={90}
              priority
              className="h-auto max-h-[78vh] w-auto max-w-[92vw] drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
            />
          </div>

          <div
            className="mt-4 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous certificate"
              className="flex size-10 items-center justify-center rounded-full bg-[#101010] text-white transition hover:bg-[#c9ff3b] hover:text-[#101010]"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-semibold tabular-nums text-black/60">
              {active + 1} / {certificates.length}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next certificate"
              className="flex size-10 items-center justify-center rounded-full bg-[#101010] text-white transition hover:bg-[#c9ff3b] hover:text-[#101010]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}