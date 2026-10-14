// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   Mail,
//   MoveUpRight,
// } from "lucide-react";
// import { courses } from "@/data/courses";

// const companyLinks = [
//   { label: "About us", href: "/about" },
//   { label: "Our courses", href: "/courses" },
//   { label: "Placements", href: "/placements" },
//   { label: "Contact", href: "/contact" },
// ];

// const learningSlugs = ["data-science", "data-analytics", "machine-learning"];
// const popularCourses = learningSlugs.map((slug) => {
//   const course = courses.find((item) => item.slug === slug);
//   return {
//     label: course?.title ?? slug.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase()),
//     href: `/courses/${slug}-in-pune`,
//   };
// });

// const address =
//   "3rd Floor, Above Jijamata Mahila Sahakari Bank, Karvenagar, Pune, Maharashtra 411052";
// const mapUrl =
//   "https://www.google.com/maps/search/?api=1&query=3rd+Floor+Above+Jijamata+Mahila+Sahakari+Bank+Karvenagar+Pune+Maharashtra+411052";

// export default function Footer() {
//   const [year, setYear] = useState<number | null>(null);

//   useEffect(() => {
//     setYear(new Date().getFullYear());
//   }, []);

//   return (
//     <footer id="footer" className="dc-footer relative overflow-hidden bg-[#101010] text-[#F4F0E8]">
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//         <div className="absolute -right-24 -top-32 size-[340px] rounded-full bg-[#C9FF3B]/[0.07] blur-3xl" />
//         <div className="absolute bottom-0 left-[35%] h-px w-1/3 bg-gradient-to-r from-transparent via-[#C9FF3B]/25 to-transparent" />
//       </div>

//       <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
//         <section className="border-b border-white/12 py-16 sm:py-20 lg:py-24" aria-labelledby="footer-cta-heading">
//           <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div className="max-w-4xl">
//               <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
//                 <span className="size-2 rounded-full bg-[#C9FF3B]" /> Your next step
//               </p>
//               <h2 id="footer-cta-heading" className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#F4F0E8] sm:text-6xl lg:text-[clamp(4rem,7.2vw,7.5rem)]">
//                 Ready to explore<br className="hidden sm:block" /> your learning path<span className="text-[#C9FF3B]">?</span>
//               </h2>
//               <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
//                 Talk to Data Council about training programs, practical learning and placement assistance.
//               </p>
//             </div>
//             <Link href="/contact" className="group inline-flex h-14 w-fit shrink-0 items-center gap-5 rounded-full bg-[#C9FF3B] px-6 text-sm font-semibold text-[#101010] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]">
//               <span className="text-black">Enquire now</span>
//               <span className="flex size-8 items-center justify-center rounded-full bg-[#101010] text-[#F4F0E8] transition-transform duration-300 group-hover:rotate-45">
//                 <ArrowUpRight size={16} aria-hidden="true" />
//               </span>
//             </Link>
//           </div>
//         </section>

//         <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
//           <div className="lg:col-span-4">
//             <Link href="/" aria-label="Data Council home" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]">
//               <span className="flex size-10 items-center justify-center rounded-full bg-[#C9FF3B] text-lg font-black tracking-[-0.08em] text-[#101010]">DC</span>
//               <span className="text-lg font-semibold tracking-[-0.04em]">DATA COUNCIL<span className="text-[#C9FF3B]">.</span></span>
//             </Link>
//             <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
//               Learn by building. Develop practical technology skills with training, projects and career-focused support.
//             </p>
//             <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/60">
//               <span className="size-1.5 rounded-full bg-[#C9FF3B]" /> Training &amp; placement support
//             </p>
//           </div>

//           <nav aria-label="Company links" className="lg:col-span-2">
//             <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Explore</h3>
//             <ul className="space-y-3.5">
//               {companyLinks.map((item) => (
//                 <li key={item.href}>
//                   <Link href={item.href} className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#C9FF3B]">
//                     {item.label}
//                     <MoveUpRight size={12} className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <nav aria-label="Popular courses" className="lg:col-span-2">
//             <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Learning paths</h3>
//             <ul className="space-y-3.5">
//               {popularCourses.map((item) => (
//                 <li key={item.href}>
//                   <Link href={item.href} className="group inline-flex items-center gap-2 text-sm capitalize text-white/70 transition-colors hover:text-[#C9FF3B]">
//                     {item.label}
//                     <MoveUpRight size={12} className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
//                   </Link>
//                 </li>
//               ))}
//               <li><Link href="/courses" className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#C9FF3B] hover:text-[#F4F0E8]">All courses <ArrowUpRight size={14} aria-hidden="true" /></Link></li>
//             </ul>
//           </nav>

//           <div className="lg:col-span-4">
//             <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Get in touch</h3>
//             <address className="not-italic">
//               <a href={mapUrl} target="_blank" rel="noreferrer" className="group flex gap-3 text-sm leading-6 text-white/65 transition-colors hover:text-[#F4F0E8]">
//                 <MapPin size={17} className="mt-1 shrink-0 text-[#C9FF3B]" aria-hidden="true" />
//                 <span>{address}<span className="mt-1 inline-flex items-center gap-1 text-xs text-[#C9FF3B]">Open in Maps <ArrowUpRight size={12} aria-hidden="true" /></span></span>
//               </a>
//             </address>
//             <div className="mt-5 space-y-3">
//               <a href="tel:+918080152238" className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#C9FF3B]"><Phone size={16} className="text-[#C9FF3B]" aria-hidden="true" />+91 8080152238</a>
//               <a href="tel:+918087601850" className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#C9FF3B]"><Phone size={16} className="text-[#C9FF3B]" aria-hidden="true" />+91 80876 01850</a>
//               <a href="mailto:hr@datacouncil.in" className="flex items-center gap-3 break-all text-sm text-white/65 transition-colors hover:text-[#C9FF3B]"><Mail size={16} className="shrink-0 text-[#C9FF3B]" aria-hidden="true" />hr@datacouncil.in</a>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
//           <p>© {year ?? 2026} Data Council. All rights reserved.</p>
//           <a href="#top" className="inline-flex w-fit items-center gap-2 text-white/55 transition-colors hover:text-[#C9FF3B]">
//             Back to top <ArrowUpRight size={14} aria-hidden="true" />
//           </a>
//         </div>

//         <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-5 sm:flex-row">
//           <p className="text-[10px] tracking-[0.12em] text-white/25">DESIGNED WITH INTENTION.</p>
//           <a
//             href="https://github.com/BhushanBitwise"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="BhushanBitwise on GitHub"
//             className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs text-white/40 transition-colors duration-300 hover:text-[#F4F0E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//           >
//             <span>Crafted by</span>
//             <span className="font-medium text-white/60 transition-colors group-hover:text-[#C9FF3B]">BhushanBitwise</span>
//             <MoveUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
//           </a>
//         </div>
//       </div>

//       <style>{`
//         .dc-footer { isolation: isolate; }
//         @media (prefers-reduced-motion: reduce) {
//           .dc-footer *, .dc-footer *::before, .dc-footer *::after {
//             scroll-behavior: auto !important;
//             transition-duration: 0.01ms !important;
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }







"use client";

import { useEffect, useState, memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MoveUpRight,
} from "lucide-react";
import { courses } from "@/data/courses";

/* ---------------- Static data (outside component = no re-creation) --------------- */

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our courses", href: "/courses" },
  { label: "Placements", href: "/placements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const learningSlugs = ["data-science", "data-analytics", "machine-learning"];

const popularCourses = learningSlugs.map((slug) => {
  const course = courses.find((item) => item.slug === slug);
  return {
    label:
      course?.title ??
      slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    href: `/courses/${slug}-in-pune`,
  };
});

const CONTACT = {
  address:
    "3rd Floor, Above Jijamata Mahila Sahakari Bank, Karvenagar, Pune, Maharashtra 411052",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=3rd+Floor+Above+Jijamata+Mahila+Sahakari+Bank+Karvenagar+Pune+Maharashtra+411052",
  phones: ["+918080152238", "+918087601850"],
  email: "hr@datacouncil.in",
};

/* ----------------------------- Reusable link row -------------------------------- */

const HoverArrow = memo(function HoverArrow() {
  return (
    <MoveUpRight
      size={12}
      aria-hidden="true"
      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
    />
  );
});

const FooterLink = memo(function FooterLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      prefetch
      className={`group inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B] ${className}`}
    >
      {label}
      <HoverArrow />
    </Link>
  );
});

/* ---------------------------------- Footer -------------------------------------- */

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const phoneLinks = useMemo(
    () =>
      CONTACT.phones.map((num) => ({
        href: `tel:${num}`,
        display: num.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2"),
      })),
    []
  );

  return (
    <footer
      id="footer"
      className="dc-footer relative overflow-hidden bg-[#0A0A0A] text-[#F4F0E8]"
    >
      {/* Navbar-style backdrop: subtle top gradient + soft glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
        <div className="absolute -right-24 -top-32 size-[340px] rounded-full bg-[#C9FF3B]/[0.07] blur-3xl" />
        <div className="absolute -left-20 top-1/3 size-[280px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-[35%] h-px w-1/3 bg-gradient-to-r from-transparent via-[#C9FF3B]/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* --------------------------- CTA --------------------------- */}
        <section
          className="border-b border-white/12 py-16 sm:py-20 lg:py-24"
          aria-labelledby="footer-cta-heading"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                <span className="size-2 rounded-full bg-[#C9FF3B]" /> Your next
                step
              </p>
              <h2
                id="footer-cta-heading"
                className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#F4F0E8] sm:text-6xl lg:text-[clamp(4rem,7.2vw,7.5rem)]"
              >
                Ready to explore
                <br className="hidden sm:block" /> your learning path
                <span className="text-[#C9FF3B]">?</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Talk to Data Council about training programs, practical learning
                and placement assistance.
              </p>
            </div>

            <Link
              href="/contact"
              prefetch
              className="group inline-flex h-14 w-fit shrink-0 items-center gap-5 rounded-full bg-[#C9FF3B] px-6 text-sm font-semibold text-[#101010] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
            >
              <span>Enquire now</span>
              <span className="flex size-8 items-center justify-center rounded-full bg-[#101010] text-[#F4F0E8] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        {/* --------------------------- Links grid --------------------------- */}
        <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* Brand — matches navbar style with WHITE logo */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Data Council home"
              className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
            >
              <Image
                src="/images/data-council-logo.png"
                alt="Data Council"
                width={48}
                height={48}
                priority
                sizes="48px"
                className="size-12 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-[-0.02em] text-[#F4F0E8] transition-colors duration-200 group-hover:text-[#C9FF3B]">
                  DATA COUNCIL
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors duration-200 group-hover:text-[#C9FF3B]/70">
                  Learn. Build. Grow.
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Learn by building. Develop practical technology skills with
              training, projects and career-focused support.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/60">
              <span className="size-1.5 rounded-full bg-[#C9FF3B]" /> Training
              &amp; placement support
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Company links" className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Learning paths */}
          <nav aria-label="Popular courses" className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Learning paths
            </h3>
            <ul className="space-y-3.5">
              {popularCourses.map((item) => (
                <li key={item.href}>
                  <FooterLink
                    href={item.href}
                    label={item.label}
                    className="capitalize"
                  />
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  prefetch
                  className="group inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#C9FF3B] transition-colors duration-200 hover:text-[#F4F0E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
                >
                  All courses
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Get in touch
            </h3>

            <address className="not-italic">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex gap-3 text-sm leading-6 text-white/65 transition-colors duration-200 hover:text-[#F4F0E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
              >
                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-[#C9FF3B]"
                  aria-hidden="true"
                />
                <span>
                  {CONTACT.address}
                  <span className="mt-1 inline-flex items-center gap-1 text-xs text-[#C9FF3B]">
                    Open in Maps <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </span>
              </a>
            </address>

            <div className="mt-5 space-y-3">
              {phoneLinks.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
                >
                  <Phone size={16} className="text-[#C9FF3B]" aria-hidden="true" />
                  {p.display}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 break-all text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
              >
                <Mail size={16} className="shrink-0 text-[#C9FF3B]" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* --------------------------- Bottom bar --------------------------- */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year ?? 2026} Data Council. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 text-white/55 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
          >
            Back to top <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-5 sm:flex-row">
          <p className="text-[10px] tracking-[0.12em] text-white/25">
            DESIGNED WITH INTENTION.
          </p>
          <a
            href="https://github.com/BhushanBitwise"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BhushanBitwise on GitHub"
            className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs text-white/40 transition-colors duration-300 hover:text-[#F4F0E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
          >
            <span>Crafted by</span>
            <span className="font-medium text-white/60 transition-colors duration-200 group-hover:text-[#C9FF3B]">
              BhushanBitwise
            </span>
            <MoveUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <style>{`
        .dc-footer { isolation: isolate; }
        @media (prefers-reduced-motion: reduce) {
          .dc-footer *, .dc-footer *::before, .dc-footer *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}