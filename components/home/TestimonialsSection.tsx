

// "use client";

// import { memo } from "react";
// import Link from "next/link";
// import { ArrowUpRight, Quote, Star } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "Excellent training in AI & Data Science. The projects were very practical and focused on Machine Learning & Analytics.",
//     name: "Ajit Shelke",
//   },
//   {
//     quote:
//       "The best Artificial Intelligence & Data Analytics course in Pune. The focus on real-world AI projects was outstanding.",
//     name: "Sayali Shinde",
//   },
//   {
//     quote:
//       "Hands-on AI & Fullstack Data Science training with live Analytics projects. Highly recommended.",
//     name: "Abhay Shinde",
//   },
//   {
//     quote:
//       "Best institute for AI, Machine Learning, and React.js with added Soft Skills & Analytics training.",
//     name: "Lalit Bhosale",
//   },
//   {
//     quote:
//       "Great place to learn Data Science, AI & Java with practical Data Analytics knowledge.",
//     name: "Poonam Patil",
//   },
//   {
//     quote:
//       "Highly professional training in AI & Advanced Analytics. Teachers are very helpful and supportive.",
//     name: "Bharat Patil",
//   },
//   {
//     quote:
//       "Good institute to learn React.js, Python & AI-driven Data Analytics.",
//     name: "Tanuja Hule",
//   },
//   {
//     quote:
//       "Best Java & AI Data Science class in Pune with internship opportunities in Analytics.",
//     name: "Advait Kajarekar",
//   },
//   {
//     quote:
//       "Top-class Data Science & AI Analytics institute in Pune. Thanks Data Council team for excellent AI training.",
//     name: "Sachin Ugale",
//   },
// ];

// const ReviewCard = memo(function ReviewCard({
//   quote,
//   name,
// }: {
//   quote: string;
//   name: string;
// }) {
//   const initials = name
//     .split(" ")
//     .map((part) => part[0])
//     .join("")
//     .slice(0, 2);

//   return (
//     <article className="group flex min-h-[260px] w-[290px] shrink-0 flex-col rounded-2xl border border-black/10 bg-white/60 p-5 transition-colors duration-300 hover:border-black/20 hover:bg-white sm:min-h-[280px] sm:w-[340px] sm:p-6">
//       <div className="flex items-center justify-between">
//         <span className="flex size-10 items-center justify-center rounded-xl bg-[#c9ff3b] text-black transition-transform duration-300 group-hover:rotate-[-5deg]">
//           <Quote size={19} aria-hidden="true" />
//         </span>

//         <span className="flex gap-0.5 text-black" aria-label="Stars shown on the source website">
//           {Array.from({ length: 5 }, (_, index) => (
//             <Star
//               key={index}
//               size={12}
//               fill="currentColor"
//               aria-hidden="true"
//             />
//           ))}
//         </span>
//       </div>

//       <blockquote className="mt-6 flex-1 text-sm leading-7 tracking-[-0.01em] text-black/75 sm:text-[15px]">
//         “{quote}”
//       </blockquote>

//       <div className="mt-6 flex items-center gap-3 border-t border-black/10 pt-4">
//         <span
//           aria-hidden="true"
//           className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#101010] text-xs font-semibold text-[#c9ff3b]"
//         >
//           {initials}
//         </span>

//         <div className="min-w-0">
//           <p className="truncate text-sm font-semibold text-black">{name}</p>
//           <p className="mt-0.5 text-xs text-black/45">
//             Student testimonial
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// });

// export default function TestimonialsSection() {
//   return (
//     <section
//       id="testimonials"
//       aria-labelledby="testimonials-heading"
//       className="overflow-hidden bg-transparent py-16 text-[#101010] sm:py-20 lg:py-24"
//     >
//       <div className="container-main">
//         <div className="max-w-3xl">
//           <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
//             <span className="size-2 rounded-full bg-[#c9ff3b]" />
//             Student experiences
//           </p>

//           <h2
//             id="testimonials-heading"
//             className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-7xl"
//           >
//             Real learning.
//             <br />
//             <span className="relative inline-block">
//               Real perspectives.
//               <span
//                 aria-hidden="true"
//                 className="absolute bottom-1 left-0 -z-10 h-[0.24em] w-full rounded-sm bg-[#c9ff3b] sm:bottom-2"
//               />
//             </span>
//           </h2>

//           <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
//             Experiences shared by learners featured on the Data Council website.
//           </p>
//         </div>
//       </div>

//       <div className="testimonial-marquee relative mt-10 overflow-hidden py-2 sm:mt-14">
//         <div className="testimonial-track flex w-max gap-4 pr-4 sm:gap-5 sm:pr-5">
//           {[0, 1].map((copy) => (
//             <div
//               key={copy}
//               className="testimonial-group flex shrink-0 gap-4 sm:gap-5"
//               aria-hidden={copy === 1 || undefined}
//             >
//               {testimonials.map((item) => (
//                 <ReviewCard
//                   key={item.name}
//                   quote={item.quote}
//                   name={item.name}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="container-main mt-5 flex flex-col justify-between gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center">
//         <p className="max-w-2xl text-xs leading-5 text-black/45">
//           Review wording and student attribution should be confirmed against
//           the original source before publication.
//         </p>

//         <Link
//           href="https://www.datacouncil.in/index.html"
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-black underline decoration-[#c9ff3b] decoration-2 underline-offset-4 transition-colors hover:decoration-black"
//         >
//           Original website
//           <ArrowUpRight size={16} aria-hidden="true" />
//         </Link>
//       </div>

//       <style jsx>{`
//         .testimonial-track {
//           animation: testimonial-scroll 65s linear infinite;
//           will-change: transform;
//         }

//         .testimonial-marquee:hover .testimonial-track {
//           animation-play-state: paused;
//         }

//         .testimonial-marquee:focus-within .testimonial-track {
//           animation-play-state: paused;
//         }

//         @keyframes testimonial-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .testimonial-track {
//             animation: none;
//             width: 100%;
//             flex-wrap: wrap;
//             will-change: auto;
//           }

//           .testimonial-group {
//             flex-wrap: wrap;
//             width: 100%;
//           }

//           .testimonial-group[aria-hidden="true"] {
//             display: none;
//           }

//           .testimonial-group > article {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Excellent training in AI & Data Science. The projects were very practical and focused on Machine Learning & Analytics.",
    name: "Ajit Shelke",
  },
  {
    quote:
      "The best Artificial Intelligence & Data Analytics course in Pune. The focus on real-world AI projects was outstanding.",
    name: "Sayali Shinde",
  },
  {
    quote:
      "Hands-on AI & Fullstack Data Science training with live Analytics projects. Highly recommended.",
    name: "Abhay Shinde",
  },
  {
    quote:
      "Best institute for AI, Machine Learning, and React.js with added Soft Skills & Analytics training.",
    name: "Lalit Bhosale",
  },
  {
    quote:
      "Great place to learn Data Science, AI & Java with practical Data Analytics knowledge.",
    name: "Poonam Patil",
  },
  {
    quote:
      "Highly professional training in AI & Advanced Analytics. Teachers are very helpful and supportive.",
    name: "Bharat Patil",
  },
  {
    quote:
      "Good institute to learn React.js, Python & AI-driven Data Analytics.",
    name: "Tanuja Hule",
  },
  {
    quote:
      "Best Java & AI Data Science class in Pune with internship opportunities in Analytics.",
    name: "Advait Kajarekar",
  },
  {
    quote:
      "Top-class Data Science & AI Analytics institute in Pune. Thanks Data Council team for excellent AI training.",
    name: "Sachin Ugale",
  },
];

const ReviewCard = memo(function ReviewCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group flex min-h-[260px] w-[290px] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:min-h-[280px] sm:w-[340px] sm:p-6">
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl bg-[#c9ff3b] text-black transition-transform duration-300 group-hover:rotate-[-5deg]">
          <Quote size={19} aria-hidden="true" />
        </span>

        <span
          className="flex gap-0.5 text-[#c9ff3b]"
          aria-label="Five stars displayed on the source website"
          title="Five stars displayed on the source website"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={12}
              fill="currentColor"
              aria-hidden="true"
            />
          ))}
        </span>
      </div>

      <blockquote className="mt-6 flex-1 text-sm leading-7 tracking-[-0.01em] text-white/75 sm:text-[15px]">
        “{quote}”
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-xs font-semibold text-black"
        >
          {initials}
        </span>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#f4f0e8]">
            {name}
          </p>
          <p className="mt-0.5 text-xs text-white/45">
            Student testimonial
          </p>
        </div>
      </div>
    </article>
  );
});

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-transparent py-16 text-[#f4f0e8] sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <div className="rounded-[28px] border border-white/10 bg-[#171717] py-10 sm:py-14 lg:py-16">
          <div className="px-5 sm:px-8 lg:px-12">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-[#c9ff3b]"
              />
              Student experiences
            </p>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2
                  id="testimonials-heading"
                  className="text-4xl font-semibold leading-[1.04] tracking-[-0.065em] text-[#f4f0e8] sm:text-6xl lg:text-7xl"
                >
                  Real learning.
                  <br />
                  Real perspectives.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                  Experiences shared by learners featured on the Data Council
                  website.
                </p>
              </div>

              {/* <Link
                href="https://www.datacouncil.in/index.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-[#c9ff3b] px-6 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Original website
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link> */}
            </div>
          </div>

          <div className="testimonial-marquee relative mt-10 overflow-hidden py-2 sm:mt-12">
            <div className="testimonial-track flex w-max gap-4 sm:gap-5">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="testimonial-group flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
                  aria-hidden={copy === 1 || undefined}
                >
                  {testimonials.map((item) => (
                    <ReviewCard
                      key={item.name}
                      quote={item.quote}
                      name={item.name}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-5 mt-5 border-t border-white/10 pt-5 sm:mx-8 lg:mx-12">
            <p className="max-w-3xl text-xs leading-5 text-white/40">
              Review wording and student attribution should be confirmed
              against the original source before publication.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-marquee {
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 3%,
            #000 97%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 3%,
            #000 97%,
            transparent 100%
          );
        }

        .testimonial-track {
          width: max-content;
          animation: testimonial-scroll 65s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .testimonial-marquee:hover .testimonial-track {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
            width: 100%;
            flex-wrap: wrap;
            will-change: auto;
          }

          .testimonial-group {
            width: 100%;
            flex-wrap: wrap;
            padding-right: 0;
          }

          .testimonial-group[aria-hidden="true"] {
            display: none;
          }

          .testimonial-group > article {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}