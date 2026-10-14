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

function PosterCard({ item, hidden }: { item: Placement; hidden: boolean }) {
  return (
    // Lime gradient frame (1.5px) = award-style border
    <article className="w-[190px] rounded-[26px] bg-gradient-to-b from-[#c9ff3b] via-[#c9ff3b]/30 to-black/10 p-[1.5px] shadow-[0_24px_46px_-22px_rgba(16,16,16,0.6)] sm:w-[220px] lg:w-[240px]">
      <div className="relative aspect-[7/10] overflow-hidden rounded-[24.5px] bg-[#101010]">
        <Image
          src={`/images/placements/${item.id}.webp`}
          alt={hidden ? "" : `${item.name} placed at ${item.company}`}
          fill
          sizes="(max-width: 639px) 190px, (max-width: 1023px) 220px, 240px"
          quality={70}
          loading="lazy"
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

        {/* Frosted-glass info bar */}
        <div className="absolute inset-x-0 bottom-0 rounded-lg border border-white/20 bg-black/40 px-3 py-2.5 backdrop-blur-md">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#c9ff3b]">
            Placed at
          </p>
          <p className="mt-0.5 truncate text-sm font-semibold tracking-tight text-white">
            {item.company}
          </p>
          <p className="truncate text-[11px] text-white/65">{item.name}</p>
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
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
      {/* Soft blurred colour glow (CSS gradients, static = zero cost) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38%_42%_at_12%_72%,rgba(201,255,59,0.35),transparent_70%),radial-gradient(34%_40%_at_88%_55%,rgba(255,176,64,0.22),transparent_70%),radial-gradient(30%_36%_at_55%_100%,rgba(64,190,255,0.14),transparent_70%)]"
      />

      <div className="container-main">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">
             
              STUDENT SUCCESS STORIES
            </p>

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
              {FEATURED.map((item) => (
                <li key={item.id}>
                  <PosterCard item={item} hidden={copy === 1} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}






// import Image from "next/image";
// import Link from "next/link";
// import type { CSSProperties } from "react";
// import { ArrowUpRight, Check } from "lucide-react";

// import { FEATURED_IDS, PLACEMENTS } from "@/data/placements";
// import type { Placement } from "@/data/placements";

// /**
//  * Server component: koi "use client", koi hydration, koi extra JS nahi.
//  * Marquee pure CSS hai, cards pe click ka koi action nahi.
//  */
// const FEATURED = FEATURED_IDS.map((id) =>
//   PLACEMENTS.find((placement) => placement.id === id)
// ).filter((item): item is Placement => Boolean(item));

// function PosterCard({ item, hidden }: { item: Placement; hidden: boolean }) {
//   return (
//     <article className="relative w-[200px] sm:w-[250px] lg:w-[270px]">
//       {/* Lime circle, card ke top-right corner ke peeche */}
//       <span
//         aria-hidden="true"
//         className="absolute -right-3 -top-3 size-16 rounded-full bg-[#c9ff3b] sm:size-20"
//       />

//       <div className="relative aspect-[2/3] overflow-hidden rounded-[26px] bg-[#1a1a1a] ring-1 ring-black/10">
//         <Image
//           src={`/images/placements/${item.id}.webp`}
//           alt={hidden ? "" : `${item.name} placed at ${item.company}`}
//           fill
//           sizes="(max-width: 639px) 200px, (max-width: 1023px) 250px, 270px"
//           quality={70}
//           loading="lazy"
//           decoding="async"
//           draggable={false}
//           className="select-none object-cover object-top"
//         />

//         {/* Bottom info: naam, company, lime check badge */}
//         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pb-4 pt-16 sm:px-5 sm:pb-5">
//           <p className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl">
//             {item.name}
//           </p>

//           <div className="mt-2.5 flex items-center justify-between gap-3 border-t border-white/25 pt-2.5">
//             <div className="min-w-0">
//               <p className="text-[10px] uppercase tracking-[0.14em] text-white/50">
//                 Placed at
//               </p>
//               <p className="truncate text-xs text-white/85 sm:text-sm">
//                 {item.company}
//               </p>
//             </div>

//             <span
//               aria-hidden="true"
//               className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-black sm:size-10"
//             >
//               <Check size={16} strokeWidth={2.75} />
//             </span>
//           </div>
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
//       className="overflow-hidden bg-[#f4f0e8] py-16 text-[#101010] sm:py-20 lg:py-24"
//       // Screen ke bahar hone par browser render + animation skip kar deta hai
//       style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
//     >
//       <div className="container-main">
//         <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
//           <div className="max-w-2xl">
//             <h2
//               id="placements-heading"
//               className="text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl"
//             >
//               Placed. Proud.
//               <br />
//               <span className="box-decoration-clone bg-[linear-gradient(transparent_58%,#c9ff3b_58%)] px-1">
//                 Making it count.
//               </span>
//             </h2>

//             <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base">
//               Real learners, real offers.{" "}
//               <span className="rounded-md bg-[#c9ff3b] px-1.5 py-0.5 font-semibold text-black">
//                 {PLACEMENTS.length} placements
//               </span>{" "}
//               and counting.
//             </p>
//           </div>

//           <Link
//             href="/placements"
//             className="lime-button self-start sm:self-auto"
//           >
//             View all <ArrowUpRight size={17} />
//           </Link>
//         </div>
//       </div>

//       {/* Full-bleed single-row marquee (CSS only) */}
//       <div className="marquee-mask overflow-hidden py-4">
//         <div
//           className="marquee-track"
//           style={{ "--marquee-duration": "70s" } as CSSProperties}
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