



// "use client";

// import { useEffect, useMemo, useState, memo } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   Mail,
//   MoveUpRight,
//   MessageCircle,
// } from "lucide-react";
// import { courses } from "@/data/courses";

// const companyLinks = [
//   { label: "About us", href: "/about" },
//   { label: "Our courses", href: "/courses" },
//   { label: "OJT Training", href: "/ojt" },
//   { label: "Placements", href: "/placements" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Contact", href: "/contact" },
// ];

// // Course labels and URLs are derived directly from data/courses.ts.
// // This keeps the footer catalogue in sync with the site's course data.
// const popularCourses = courses.slice(11, 16).map((course) => ({
//   label: course.title,
//   href: `/courses/${course.slug}-in-pune`,
// }));

// const CONTACT = {
//   address:
//     "3rd Floor, Above Jijamata Mahila Sahakari Bank, Karvenagar, Pune, Maharashtra 411052",
//   mapUrl:
//     "https://www.google.com/maps/search/?api=1&query=3rd+Floor+Above+Jijamata+Mahila+Sahakari+Bank+Karvenagar+Pune+Maharashtra+411052",
//   // The official contact page lists +91 8080152238 twice; show it once.
//   phones: ["+918087601850", "+918080152238", "+919850941120"],
//   whatsapp: "918080152238",
//   email: "hr@datacouncil.in",
// };

// const HoverArrow = memo(function HoverArrow() {
//   return (
//     <MoveUpRight
//       size={12}
//       aria-hidden="true"
//       className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
//     />
//   );
// });

// const FooterLink = memo(function FooterLink({
//   href,
//   label,
//   className = "",
// }: {
//   href: string;
//   label: string;
//   className?: string;
// }) {
//   return (
//     <Link
//       href={href}
//       prefetch
//       className={`group inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B] ${className}`}
//     >
//       {label}
//       <HoverArrow />
//     </Link>
//   );
// });

// export default function Footer() {
//   const [year, setYear] = useState<number | null>(null);

//   useEffect(() => {
//     setYear(new Date().getFullYear());
//   }, []);

//   const phoneLinks = useMemo(
//     () =>
//       CONTACT.phones.map((num) => ({
//         href: `tel:${num}`,
//         display: num.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2"),
//       })),
//     []
//   );

//   const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
//     "Hello Data Council, I would like to know more about your courses and OJT Training programme."
//   )}`;

//   return (
//     <footer
//       id="footer"
//       className="dc-footer relative overflow-hidden bg-[#0A0A0A] text-[#F4F0E8]"
//     >
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
//         <div className="absolute -right-24 -top-32 size-[340px] rounded-full bg-[#C9FF3B]/[0.07] blur-3xl" />
//         <div className="absolute -left-20 top-1/3 size-[280px] rounded-full bg-white/[0.03] blur-3xl" />
//         <div className="absolute bottom-0 left-[35%] h-px w-1/3 bg-gradient-to-r from-transparent via-[#C9FF3B]/25 to-transparent" />
//       </div>

//       <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
//         <section
//           className="border-b border-white/12 py-16 sm:py-20 lg:py-24"
//           aria-labelledby="footer-cta-heading"
//         >
//           <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//             <div className="max-w-4xl">
//               <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
//                 <span className="size-2 rounded-full bg-[#C9FF3B]" />
//                 Your next step
//               </p>
//               <h2
//                 id="footer-cta-heading"
//                 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#F4F0E8] sm:text-6xl lg:text-[clamp(4rem,7.2vw,7.5rem)]"
//               >
//                 Ready to explore
//                 <br className="hidden sm:block" /> your learning path
//                 <span className="text-[#C9FF3B]">?</span>
//               </h2>
//               <p className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
//                 Talk to Data Council about courses, practical training and
//                 current programme details.
//               </p>
//             </div>

//             <Link
//               href="/contact"
//               prefetch
//               className="group inline-flex h-14 w-fit shrink-0 items-center gap-5 rounded-full bg-[#C9FF3B] px-6 text-sm font-semibold text-[#101010] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//             >
//               <span>Enquire now</span>
//               <span className="flex size-8 items-center justify-center rounded-full bg-[#101010] text-[#F4F0E8] transition-transform duration-300 group-hover:rotate-45">
//                 <ArrowUpRight size={16} aria-hidden="true" />
//               </span>
//             </Link>
//           </div>
//         </section>

//         <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
//           <div className="lg:col-span-4">
//             <Link
//               href="/"
//               aria-label="Data Council home"
//               className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//             >
//               <Image
//                 src="/images/data-council-logo.png"
//                 alt="Data Council"
//                 width={48}
//                 height={48}
//                 priority
//                 sizes="48px"
//                 className="size-12 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
//               />
//               <span className="flex flex-col leading-none">
//                 <span className="text-lg font-bold tracking-[-0.02em] text-[#F4F0E8] transition-colors duration-200 group-hover:text-[#C9FF3B]">
//                   DATA COUNCIL
//                 </span>
//                 <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/40 transition-colors duration-200 group-hover:text-[#C9FF3B]/70">
//                   Learn. Build. Grow.
//                 </span>
//               </span>
//             </Link>

//             <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
//               Learn by building. Explore technology courses, practical projects
//               and career-focused training.
//             </p>

//             <Link
//               href="/ojt"
//               className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/65 transition-colors hover:border-[#C9FF3B]/40 hover:text-[#C9FF3B]"
//             >
//               <span className="size-1.5 rounded-full bg-[#C9FF3B]" />
//               Explore OJT Training
//               <ArrowUpRight size={12} aria-hidden="true" />
//             </Link>
//           </div>

//           <nav aria-label="Company links" className="lg:col-span-2">
//             <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
//               Explore
//             </h3>
//             <ul className="space-y-3.5">
//               {companyLinks.map((item) => (
//                 <li key={item.href}>
//                   <FooterLink href={item.href} label={item.label} />
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <nav aria-label="Courses from the course catalogue" className="lg:col-span-2">
//             <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
//               Courses
//             </h3>
//             <ul className="space-y-3.5">
//               {popularCourses.map((item) => (
//                 <li key={item.href}>
//                   <FooterLink href={item.href} label={item.label} />
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   href="/courses"
//                   prefetch
//                   className="group inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#C9FF3B] transition-colors duration-200 hover:text-[#F4F0E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//                 >
//                   All courses
//                   <ArrowUpRight
//                     size={14}
//                     aria-hidden="true"
//                     className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                   />
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           <div className="lg:col-span-4">
//             <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
//               Contact details
//             </h3>

//             <address className="not-italic">
//               <a
//                 href={CONTACT.mapUrl}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="group flex gap-3 text-sm leading-6 text-white/65 transition-colors duration-200 hover:text-[#F4F0E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//               >
//                 <MapPin
//                   size={17}
//                   className="mt-1 shrink-0 text-[#C9FF3B]"
//                   aria-hidden="true"
//                 />
//                 <span>
//                   {CONTACT.address}
//                   <span className="mt-1 inline-flex items-center gap-1 text-xs text-[#C9FF3B]">
//                     Open in Maps <ArrowUpRight size={12} aria-hidden="true" />
//                   </span>
//                 </span>
//               </a>
//             </address>

//             <div className="mt-5 space-y-3">
//               {phoneLinks.map((phone) => (
//                 <a
//                   key={phone.href}
//                   href={phone.href}
//                   className="flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//                 >
//                   <Phone size={16} className="shrink-0 text-[#C9FF3B]" aria-hidden="true" />
//                   {phone.display}
//                 </a>
//               ))}

//               <a
//                 href={whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//               >
//                 <MessageCircle size={16} className="shrink-0 text-[#C9FF3B]" aria-hidden="true" />
//                 WhatsApp: +91 8080152238
//                 <ArrowUpRight size={12} aria-hidden="true" />
//               </a>

//               <a
//                 href={`mailto:${CONTACT.email}`}
//                 className="flex items-center gap-3 break-all text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//               >
//                 <Mail size={16} className="shrink-0 text-[#C9FF3B]" aria-hidden="true" />
//                 {CONTACT.email}
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
//           <p>© {year ?? 2026} Data Council. All rights reserved.</p>
//           <a
//             href="#top"
//             className="inline-flex w-fit items-center gap-2 text-white/55 transition-colors duration-200 hover:text-[#C9FF3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//           >
//             Back to top <ArrowUpRight size={14} aria-hidden="true" />
//           </a>
//         </div>

//         <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-5 sm:flex-row">
//           <p className="text-[10px] tracking-[0.12em] text-white/25">
//             DESIGNED WITH INTENTION.
//           </p>
//           <a
//             href="https://github.com/BhushanBitwise"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="BhushanBitwise on GitHub"
//             className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs text-white/40 transition-colors duration-300 hover:text-[#F4F0E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]"
//           >
//             <span>Crafted by</span>
//             <span className="font-medium text-white/60 transition-colors duration-200 group-hover:text-[#C9FF3B]">
//               BhushanBitwise
//             </span>
//             <MoveUpRight
//               size={13}
//               className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               aria-hidden="true"
//             />
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

import { useEffect, useMemo, useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MoveUpRight,
  MessageCircle,
} from "lucide-react";
import { courses } from "@/data/courses";
import { locations } from "@/data/locations";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our courses", href: "/courses" },
  { label: "OJT Training", href: "/ojt" },
  { label: "Placements", href: "/placements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Course labels and URLs are derived directly from data/courses.ts.
const popularCourses = courses.slice(11, 16).map((course) => ({
  label: course.title,
  href: `/courses/${course.slug}-in-pune`,
}));

// Branch links are derived directly from data/locations.ts.
const branchLinks = locations.map((location) => ({
  label: location.city,
  href: `/locations/${location.slug}`,
}));

const CONTACT = {
  address:
    "3rd Floor, Above Jijamata Mahila Sahakari Bank, Karvenagar, Pune, Maharashtra 411052",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=3rd+Floor+Above+Jijamata+Mahila+Sahakari+Bank+Karvenagar+Pune+Maharashtra+411052",
  phones: ["+918087601850", "+918080152238", "+919850941120"],
  whatsapp: "918080152238",
  email: "hr@datacouncil.in",
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9FF3B]";

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
      className={`group inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-[#C9FF3B] ${focusRing} ${className}`}
    >
      {label}
      <HoverArrow />
    </Link>
  );
});

const columnHeading =
  "mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const phoneLinks = useMemo(
    () =>
      CONTACT.phones.map((num) => ({
        href: `tel:${num}`,
        display: num.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2"),
      })),
    []
  );

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hello Data Council, I would like to know more about your courses and OJT Training programme."
  )}`;

  return (
    <footer
      id="footer"
      className="dc-footer relative overflow-hidden bg-[#0A0A0A] text-[#F4F0E8]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
        <div className="absolute -right-24 -top-32 size-[340px] rounded-full bg-[#C9FF3B]/[0.07] blur-3xl" />
        <div className="absolute -left-20 top-1/3 size-[280px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-[35%] h-px w-1/3 bg-gradient-to-r from-transparent via-[#C9FF3B]/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* CTA */}
        <section
          className="border-b border-white/12 py-16 sm:py-20 lg:py-24"
          aria-labelledby="footer-cta-heading"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                <span className="size-2 rounded-full bg-[#C9FF3B]" />
                Your next step
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
                Talk to Data Council about courses, practical training and
                current programme details.
              </p>
            </div>

            <Link
              href="/contact"
              prefetch
              className={`group inline-flex h-14 w-fit shrink-0 items-center gap-5 rounded-full bg-[#C9FF3B] px-6 text-sm font-semibold text-[#101010] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] ${focusRing}`}
            >
              <span className="text-black">Enquire now</span>
              <span className="flex size-8 items-center justify-center rounded-full bg-[#101010] text-[#F4F0E8] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        {/* Link columns */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              href="/"
              aria-label="Data Council home"
              className={`group inline-flex items-center gap-3 rounded-sm ${focusRing}`}
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
              Learn by building. Explore technology courses, practical projects
              and career-focused training.
            </p>

            <Link
              href="/ojt"
              className={`mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/65 transition-colors hover:border-[#C9FF3B]/40 hover:text-[#C9FF3B] ${focusRing}`}
            >
              <span className="size-1.5 rounded-full bg-[#C9FF3B]" />
              Explore OJT Training
              <ArrowUpRight size={12} aria-hidden="true" />
            </Link>
          </div>

          {/* Explore */}
          <nav aria-label="Company links" className="lg:col-span-2">
            <h3 className={columnHeading}>Explore</h3>
            <ul className="space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Courses */}
          <nav aria-label="Courses" className="lg:col-span-2">
            <h3 className={columnHeading}>Courses</h3>
            <ul className="space-y-3.5">
              {popularCourses.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  prefetch
                  className={`group inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#C9FF3B] transition-colors duration-200 hover:text-[#F4F0E8] ${focusRing}`}
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

          {/* Branches (new) */}
          <nav aria-label="Branches" className="lg:col-span-2">
            <h3 className={columnHeading}>Branches</h3>
            <ul className="space-y-3.5">
              {branchLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className={columnHeading}>Contact details</h3>

            <address className="not-italic">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`group flex gap-3 text-sm leading-6 text-white/65 transition-colors duration-200 hover:text-[#F4F0E8] ${focusRing}`}
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
              {phoneLinks.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className={`flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] ${focusRing}`}
                >
                  <Phone
                    size={16}
                    className="shrink-0 text-[#C9FF3B]"
                    aria-hidden="true"
                  />
                  {phone.display}
                </a>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] ${focusRing}`}
              >
                <MessageCircle
                  size={16}
                  className="shrink-0 text-[#C9FF3B]"
                  aria-hidden="true"
                />
                WhatsApp: +91 8080152238
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className={`flex items-center gap-3 break-all text-sm text-white/65 transition-colors duration-200 hover:text-[#C9FF3B] ${focusRing}`}
              >
                <Mail
                  size={16}
                  className="shrink-0 text-[#C9FF3B]"
                  aria-hidden="true"
                />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year ?? 2026} Data Council. All rights reserved.</p>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`inline-flex w-fit items-center gap-2 text-white/55 transition-colors duration-200 hover:text-[#C9FF3B] ${focusRing}`}
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
            className={`group inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs text-white/40 transition-colors duration-300 hover:text-[#F4F0E8] ${focusRing}`}
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