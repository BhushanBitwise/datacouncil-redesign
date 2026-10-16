// import Image from "next/image";
// import Link from "next/link";
// import type { CSSProperties } from "react";
// import { ArrowUpRight, Award } from "lucide-react";

// import { FEATURED_IDS, PLACEMENTS } from "@/data/placements";
// import type { Placement } from "@/data/placements";

// /**
//  * Server component: zero client JS, pure CSS marquee, cards non-clickable.
//  */
// const FEATURED = FEATURED_IDS.map((id) =>
//   PLACEMENTS.find((placement) => placement.id === id)
// ).filter((item): item is Placement => Boolean(item));

// function PosterCard({ item, hidden }: { item: Placement; hidden: boolean }) {
//   return (
//     // Lime gradient frame (1.5px) = award-style border
//     <article className="w-[190px] rounded-[26px] bg-gradient-to-b from-[#c9ff3b] via-[#c9ff3b]/30 to-black/10 p-[1.5px] shadow-[0_24px_46px_-22px_rgba(16,16,16,0.6)] sm:w-[220px] lg:w-[240px]">
//       <div className="relative aspect-[7/10] overflow-hidden rounded-[24.5px] bg-[#101010]">
//         <Image
//           src={`/images/placements/${item.id}.webp`}
//           alt={hidden ? "" : `${item.name} placed at ${item.company}`}
//           fill
//           sizes="(max-width: 639px) 190px, (max-width: 1023px) 220px, 240px"
//           quality={70}
//           loading="lazy"
//           decoding="async"
//           draggable={false}
//           className="select-none object-cover"
//         />

//         {/* Medal */}
//         <span
//           aria-hidden="true"
//           className="absolute right-2.5 top-2.5 flex size-8 items-center justify-center rounded-full bg-[#c9ff3b] text-[#101010] shadow-md ring-2 ring-white/70"
//         >
//           <Award size={16} strokeWidth={2.25} />
//         </span>

//         {/* Frosted-glass info bar */}
//         <div className="absolute inset-x-0 bottom-0 rounded-lg border border-white/20 bg-black/40 px-3 py-2.5 backdrop-blur-md">
//           <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#c9ff3b]">
//             Placed at
//           </p>
//           <p className="mt-0.5 truncate text-sm font-semibold tracking-tight text-white">
//             {item.company}
//           </p>
//           <p className="truncate text-[11px] text-white/65">{item.name}</p>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function PlacementSection() {
//   return (
//     <section
//       id="placements"
//       aria-labelledby="placements-heading"
//       className="relative isolate overflow-hidden bg-[#f4f0e8] py-16 text-[#101010] sm:py-20 lg:py-28"
//       style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
//     >
//       {/* Soft blurred colour glow (CSS gradients, static = zero cost) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38%_42%_at_12%_72%,rgba(201,255,59,0.35),transparent_70%),radial-gradient(34%_40%_at_88%_55%,rgba(255,176,64,0.22),transparent_70%),radial-gradient(30%_36%_at_55%_100%,rgba(64,190,255,0.14),transparent_70%)]"
//       />

//       <div className="container-main">
//         <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
//           <div className="max-w-3xl">
//             <p className="eyebrow">
             
//               STUDENT SUCCESS STORIES
//             </p>

//             <h2
//               id="placements-heading"
//               className="display-heading mt-6 max-w-3xl !text-5xl sm:!text-6xl lg:!text-7xl"
//             >
//               Real achievements.
//               <br />
//               <span className="text-[#77766f]">New beginnings.</span>
//             </h2>

//             <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
//               Real learners, real offers.{" "}
//               <span className="font-semibold text-[#101010]">
//                 {PLACEMENTS.length} placements
//               </span>{" "}
//               and counting.
//             </p>
//           </div>

//           <Link href="/placements" className="lime-button self-start md:self-auto">
//             View all <ArrowUpRight size={17} />
//           </Link>
//         </div>
//       </div>

//       {/* Full-bleed single-row marquee (CSS only) */}
//       <div className="marquee-mask overflow-hidden py-6">
//         <div
//           className="marquee-track"
//           style={{ "--marquee-duration": "80s" } as CSSProperties}
//         >
//           {[0, 1].map((copy) => (
//             <ul
//               key={copy}
//               className="marquee-group"
//               aria-hidden={copy === 1 ? true : undefined}
//             >
//               {FEATURED.map((item) => (
//                 <li key={item.id}>
//                   <PosterCard item={item} hidden={copy === 1} />
//                 </li>
//               ))}
//             </ul>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight, Award } from "lucide-react";

import { FEATURED_IDS, PLACEMENTS } from "@/data/placements";
import type { Placement } from "@/data/placements";

/**
 * Server component: zero client JS, pure CSS marquee, cards non-clickable.
 */
const FEATURED = FEATURED_IDS.map((id) =>
  PLACEMENTS.find((placement) => placement.id === id)
).filter((item): item is Placement => Boolean(item));

// First few posters start downloading at idle time (low priority),
// so they are ready by the time the user scrolls to this section.
const EAGER_COUNT = 4;

function PosterCard({
  item,
  hidden,
  index,
}: {
  item: Placement;
  hidden: boolean;
  index: number;
}) {
  const eager = !hidden && index < EAGER_COUNT;

  return (
    // Lime gradient frame (1.5px) = award-style border
    <article className="w-[190px] rounded-[26px] bg-gradient-to-b from-[#c9ff3b] via-[#c9ff3b]/30 to-black/10 p-[1.5px] shadow-[0_18px_36px_-20px_rgba(16,16,16,0.55)] sm:w-[220px] lg:w-[240px]">
      {/* Gradient = skeleton while the photo downloads */}
      <div className="relative aspect-[7/10] overflow-hidden rounded-[24.5px] bg-[linear-gradient(160deg,#2a2a2a,#101010)]">
        <Image
          src={`/images/placements/${item.id}.webp`}
          alt={hidden ? "" : `${item.name} placed at ${item.company}`}
          fill
          sizes="(max-width: 639px) 190px, (max-width: 1023px) 220px, 240px"
          quality={70}
          loading={eager ? "eager" : "lazy"}
          fetchPriority="low"
          decoding="async"
          draggable={false}
          className="select-none object-cover"
        />

        {/* Medal */}
        <span
          aria-hidden="true"
          className="absolute right-2.5 top-2.5 flex size-8 items-center justify-center rounded-full bg-[#c9ff3b] text-[#101010] shadow-md ring-2 ring-white/70"
        >
          <Award size={16} strokeWidth={2.25} />
        </span>

        {/* Info bar: solid translucent (no backdrop-blur, which is very
            expensive on a moving marquee) */}
        <div className="absolute inset-x-0 bottom-0 rounded-lg border border-white/15 bg-gradient-to-t from-black/85 to-black/55 px-3 py-2.5">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#c9ff3b]">
            Placed at
          </p>
          <p className="mt-0.5 truncate text-sm font-semibold tracking-tight text-white">
            {item.company}
          </p>
          <p className="truncate text-[11px] text-white/70">{item.name}</p>
        </div>
      </div>
    </article>
  );
}

export default function PlacementSection() {
  return (
    <section
      id="placements"
      aria-labelledby="placements-heading"
      className="relative isolate overflow-hidden bg-[#f4f0e8] py-16 text-[#101010] sm:py-20 lg:py-28"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}
    >
      {/* Soft colour glow (static CSS gradients = zero cost) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38%_42%_at_12%_72%,rgba(201,255,59,0.35),transparent_70%),radial-gradient(34%_40%_at_88%_55%,rgba(255,176,64,0.22),transparent_70%),radial-gradient(30%_36%_at_55%_100%,rgba(64,190,255,0.14),transparent_70%)]"
      />

      <div className="container-main">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">STUDENT SUCCESS STORIES</p>

            <h2
              id="placements-heading"
              className="display-heading mt-6 max-w-3xl !text-5xl sm:!text-6xl lg:!text-7xl"
            >
              Real achievements.
              <br />
              <span className="text-[#77766f]">New beginnings.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
              Real learners, real offers.{" "}
              <span className="font-semibold text-[#101010]">
                {PLACEMENTS.length} placements
              </span>{" "}
              and counting.
            </p>
          </div>

          <Link href="/placements" className="lime-button self-start md:self-auto">
            View all <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Full-bleed single-row marquee (CSS only) */}
      <div className="marquee-mask overflow-hidden py-6">
        <div
          className="marquee-track"
          style={{ "--marquee-duration": "80s" } as CSSProperties}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="marquee-group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {FEATURED.map((item, index) => (
                <li key={item.id}>
                  <PosterCard item={item} hidden={copy === 1} index={index} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}