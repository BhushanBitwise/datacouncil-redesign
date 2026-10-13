
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";
// import { ArrowUpRight, Menu, X } from "lucide-react";

// const links = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Courses", href: "/courses" },
//   { label: "Placements", href: "/placements" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const close = useCallback(() => setOpen(false), []);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 12);

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (!open) return;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") close();
//     };

//     const handleResize = () => {
//       if (window.innerWidth >= 1024) close();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [open, close]);

//   return (
//     <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
//       <nav
//         aria-label="Main navigation"
//         className={`relative mx-auto flex min-h-[66px] max-w-[1440px] items-center justify-between gap-3 px-1 transition-[padding] duration-200 sm:gap-5 sm:px-2 ${
//           scrolled ? "py-1" : "py-0"
//         }`}
//       >
//         {/* Logo */}
//         <Link
//           href="/"
//           onClick={close}
//           aria-label="Data Council home"
//           className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
//         >
//           <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white sm:size-11">
//             <Image
//               src="/images/data-council-logo.png"
//               alt="Data Council logo"
//               width={40}
//               height={40}
//               priority
//               sizes="40px"
//               className="h-auto w-full object-contain"
//             />
//           </span>

//           <span className="flex flex-col leading-none">
//             <span className="whitespace-nowrap text-[11px] font-bold tracking-[-0.055em] sm:text-sm lg:text-base">
//               DATA COUNCIL
//             </span>
//             <span className="mt-1.5 whitespace-nowrap text-[7px] font-medium tracking-[0.1em] text-black/55 sm:text-[8px] sm:tracking-[0.16em]">
//               LEARN. BUILD. GROW.
//             </span>
//           </span>
//         </Link>

//         {/* Desktop navigation */}
//         <div className="hidden flex-1 items-center justify-center lg:flex">
//           <div className="flex items-center gap-1 xl:gap-2">
//             {links.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="rounded-full px-3.5 py-3 text-[13px] font-medium text-[#101010]/75 transition-[background-color,color,backdrop-filter] duration-200 hover:bg-white/45 hover:text-[#101010] hover:backdrop-blur-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] xl:px-5"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Desktop CTA */}
//         <Link
//           href="/contact"
//           onClick={close}
//           className="hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-[13px] font-semibold !text-white transition-[background-color,color,transform] duration-200 hover:!bg-[#c9ff3b] hover:!text-[#101010] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010] lg:inline-flex"
//         >
//           Book a demo
//           <ArrowUpRight size={15} aria-hidden="true" />
//         </Link>

//         {/* Mobile: only logo and hamburger in navbar */}
//         <button
//           type="button"
//           onClick={() => setOpen((value) => !value)}
//           aria-label={open ? "Close navigation" : "Open navigation"}
//           aria-expanded={open}
//           aria-controls="mobile-navigation"
//           className="flex size-10 shrink-0 items-center justify-center rounded-full text-[#101010] transition-colors duration-200 hover:bg-white/45 hover:backdrop-blur-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] active:scale-[0.97] lg:hidden"
//         >
//           {open ? (
//             <X size={21} aria-hidden="true" />
//           ) : (
//             <Menu size={21} aria-hidden="true" />
//           )}
//         </button>

//         {/* Mobile dropdown: links and CTA */}
//         {open && (
//           <div
//             id="mobile-navigation"
//             className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl bg-[#f4f0e8]/85 p-2 shadow-[0_16px_40px_rgba(16,16,16,0.10)] backdrop-blur-2xl lg:hidden"
//           >
//             {links.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 onClick={close}
//                 className="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-medium text-[#101010]/75 transition-[background-color,color,backdrop-filter] duration-200 hover:bg-white/45 hover:text-[#101010] hover:backdrop-blur-xl focus-visible:outline-2 focus-visible:outline-[#101010]"
//               >
//                 {link.label}
//                 <ArrowUpRight
//                   size={16}
//                   className="text-black/40"
//                   aria-hidden="true"
//                 />
//               </Link>
//             ))}

//             <div className="px-2 pb-2 pt-3">
//               <Link
//                 href="/contact"
//                 onClick={close}
//                 className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-sm font-semibold !text-white transition-[background-color,color,transform] duration-200 hover:!bg-[#c9ff3b] hover:!text-[#101010] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
//               >
//                 Book a demo
//                 <ArrowUpRight size={16} aria-hidden="true" />
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }







"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Placements", href: "/placements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) close();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-2.5">
      {/* Slim, full-width glass blur */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 -z-10 h-[76px] transition-[opacity,background-color,box-shadow] duration-300 ease-out sm:h-[82px] ${
          scrolled
            ? "bg-[#f4f0e8]/40 opacity-100 shadow-[0_6px_20px_rgba(16,16,16,0.035)] backdrop-blur-xl"
            : "bg-transparent opacity-0 shadow-none backdrop-blur-none"
        }`}
      />

      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex min-h-[58px] max-w-[1440px] items-center justify-between gap-3 px-1 sm:gap-5 sm:px-2"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={close}
          aria-label="Data Council home"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
        >
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white sm:size-10">
            <Image
              src="/images/data-council-logo.png"
              alt="Data Council logo"
              width={40}
              height={40}
              priority
              sizes="40px"
              className="h-auto w-full object-contain"
            />
          </span>

          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap text-[11px] font-bold tracking-[-0.055em] sm:text-sm lg:text-base">
              DATA COUNCIL
            </span>
            <span className="mt-1.5 whitespace-nowrap text-[7px] font-medium tracking-[0.1em] text-black/55 sm:text-[8px] sm:tracking-[0.16em]">
              LEARN. BUILD. GROW.
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-1 xl:gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2.5 text-[13px] font-medium text-[#101010]/75 transition-[background-color,color,backdrop-filter] duration-200 hover:bg-white/30 hover:text-[#101010] hover:backdrop-blur-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] xl:px-5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          onClick={close}
          className="hidden min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-[13px] font-semibold !text-white transition-[background-color,color,transform] duration-250 hover:!bg-[#c9ff3b] hover:!text-[#101010] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010] lg:inline-flex"
        >
          Book a demo
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-[#101010] transition-colors duration-200 hover:bg-white/30 hover:backdrop-blur-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] active:scale-[0.97] lg:hidden"
        >
          {open ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl bg-[#f4f0e8]/80 p-2 shadow-[0_16px_40px_rgba(16,16,16,0.10)] backdrop-blur-2xl lg:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-medium text-[#101010]/75 transition-colors duration-200 hover:bg-white/30 hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-[#101010]"
              >
                {link.label}
                <ArrowUpRight
                  size={16}
                  className="text-black/40"
                  aria-hidden="true"
                />
              </Link>
            ))}

            <div className="px-2 pb-2 pt-3">
              <Link
                href="/contact"
                onClick={close}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-sm font-semibold !text-white transition-[background-color,color,transform] duration-250 hover:!bg-[#c9ff3b] hover:!text-[#101010] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
              >
                Book a demo
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
