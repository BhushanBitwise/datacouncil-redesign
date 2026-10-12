


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";
// import { ArrowUpRight, Menu, X } from "lucide-react";

// const links = [
//   { label: "About", href: "/about" },
//   { label: "Courses", href: "/#courses" },
//   { label: "Placements", href: "/placements" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const close = useCallback(() => setOpen(false), []);

//   useEffect(() => {
//     let previousScrolled = false;

//     const handleScroll = () => {
//       const nextScrolled = window.scrollY > 8;

//       if (nextScrolled !== previousScrolled) {
//         previousScrolled = nextScrolled;
//         setScrolled(nextScrolled);
//       }
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
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
//     <header
//       className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
//         scrolled
//           ? "border-black/10 bg-[#f4f0e8]/95 shadow-[0_4px_24px_rgba(0,0,0,0.035)] backdrop-blur-lg"
//           : "border-transparent bg-[#f4f0e8]"
//       }`}
//     >
//       <nav
//         aria-label="Main navigation"
//         className={`container-main flex items-center gap-2 sm:gap-4 ${
//           scrolled ? "h-16" : "h-[72px] sm:h-[76px]"
//         }`}
//       >
//         {/* Brand */}
//         <Link
//           href="/"
//           onClick={close}
//           aria-label="Data Council home"
//           className="flex min-w-0 flex-1 items-center gap-2 sm:flex-none sm:gap-3"
//         >
//           <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-black/10 sm:size-10">
//             <Image
//               src="/images/data-council-logo.png"
//               alt="Data Council logo"
//               width={40}
//               height={40}
//               priority
//               sizes="40px"
//               className="h-full w-full object-contain"
//             />
//           </span>

//           <span className="flex min-w-0 flex-col leading-none">
//             <span className="whitespace-nowrap text-[13px] font-bold tracking-[-0.055em] sm:text-base">
//               DATA COUNCIL
//             </span>

//             <span className="mt-1 whitespace-nowrap text-[8px] font-medium tracking-[0.12em] text-black/55 sm:text-[9px] sm:tracking-[0.16em]">
//               LEARN. BUILD. GROW.
//             </span>
//           </span>
//         </Link>

//         {/* Desktop navigation */}
//         <div className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
//           {links.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="group relative whitespace-nowrap py-2 text-[13px] font-medium text-black/65 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00]"
//             >
//               {link.label}

//               <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#c9ff3b] transition-transform duration-200 group-hover:scale-x-100" />
//             </Link>
//           ))}
//         </div>

//         {/* Book a demo CTA */}
//         <Link
//           href="/contact"
//           onClick={close}
//           className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#101010] bg-[#101010] px-3.5 text-[12px] font-semibold text-white transition-colors duration-200 hover:border-[#c9ff3b] hover:bg-[#c9ff3b] hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00] active:scale-[0.98] sm:gap-2 sm:px-4 sm:text-[13px] lg:h-11 lg:px-5"
//         >
//           <span className="lg:hidden">Book demo</span>
//           <span className="hidden lg:inline">Book a demo</span>

//           <ArrowUpRight size={15} className="shrink-0" aria-hidden="true" />
//         </Link>

//         {/* Mobile menu toggle */}
//         <button
//           type="button"
//           onClick={() => setOpen((value) => !value)}
//           aria-label={open ? "Close navigation" : "Open navigation"}
//           aria-expanded={open}
//           aria-controls="mobile-navigation"
//           className="flex size-10 shrink-0 items-center justify-center rounded-full border border-black/15 transition-colors duration-150 hover:border-black/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00] active:scale-[0.97] lg:hidden"
//         >
//           {open ? (
//             <X size={20} aria-hidden="true" />
//           ) : (
//             <Menu size={20} aria-hidden="true" />
//           )}
//         </button>
//       </nav>

//       {/* Mobile dropdown */}
//       {open && (
//         <div
//           id="mobile-navigation"
//           className="border-t border-black/10 bg-[#f4f0e8] lg:hidden"
//         >
//           <div className="container-main flex flex-col py-2">
//             {links.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 onClick={close}
//                 className="flex min-h-[52px] items-center justify-between border-b border-black/[0.08] text-sm font-medium text-black/75 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#789d00]"
//               >
//                 {link.label}

//                 <ArrowUpRight
//                   size={17}
//                   className="text-black/40"
//                   aria-hidden="true"
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/#courses" },
  { label: "Placements", href: "/placements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    let previousScrolled = false;

    const handleScroll = () => {
      const nextScrolled = window.scrollY > 8;

      if (nextScrolled !== previousScrolled) {
        previousScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? "border-black/10 bg-[#f4f0e8]/95 shadow-[0_4px_24px_rgba(0,0,0,0.035)] backdrop-blur-lg"
          : "border-transparent bg-[#f4f0e8]"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`container-main flex items-center gap-2 sm:gap-4 ${
          scrolled ? "h-16" : "h-[72px] sm:h-[76px]"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={close}
          aria-label="Data Council home"
          className="flex min-w-0 flex-1 items-center gap-2 sm:flex-none sm:gap-3"
        >
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-black/10 sm:size-10">
            <Image
              src="/images/data-council-logo.png"
              alt="Data Council logo"
              width={40}
              height={40}
              priority
              sizes="40px"
              className="h-full w-full object-contain"
            />
          </span>

          <span className="flex min-w-0 flex-col leading-none">
            <span className="whitespace-nowrap text-[13px] font-bold tracking-[-0.055em] sm:text-base">
              DATA COUNCIL
            </span>

            <span className="mt-1 whitespace-nowrap text-[8px] font-medium tracking-[0.12em] text-black/55 sm:text-[9px] sm:tracking-[0.16em]">
              LEARN. BUILD. GROW.
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative whitespace-nowrap py-2 text-[13px] font-medium text-black/65 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00]"
            >
              {link.label}

              <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#c9ff3b] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Book a demo CTA */}
        <Link
          href="/contact"
          onClick={close}
          className="navbar-demo-button inline-flex h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap px-3.5 text-[12px] font-semibold leading-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00] active:scale-[0.98] sm:gap-2 sm:px-4 sm:text-[13px] lg:h-11 lg:px-5"
        >
          <span className="lg:hidden">Book demo</span>
          <span className="hidden lg:inline">Book a demo</span>

          <ArrowUpRight
            size={15}
            className="shrink-0"
            aria-hidden="true"
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-black/15 transition-colors duration-150 hover:border-black/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789d00] active:scale-[0.97] lg:hidden"
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-black/10 bg-[#f4f0e8] lg:hidden"
        >
          <div className="container-main flex flex-col py-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="flex min-h-[52px] items-center justify-between border-b border-black/[0.08] text-sm font-medium text-black/75 transition-colors duration-150 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#789d00]"
              >
                {link.label}

                <ArrowUpRight
                  size={17}
                  className="text-black/40"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}