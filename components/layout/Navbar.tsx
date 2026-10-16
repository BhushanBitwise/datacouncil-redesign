
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   ChevronDown,
//   ChevronRight,
//   Menu,
//   X,
// } from "lucide-react";
// import { locations } from "@/data/locations";

// const primaryLinks = [
//   { label: "Home", href: "/" },
//   { label: "Courses", href: "/courses" },
//   { label: "About", href: "/about" },
//   { label: "Contact Us", href: "/contact" },
// ];

// const moreLinks = [
//   { label: "Placement", href: "/placements" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "OJT Training", href: "/ojt" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [moreOpen, setMoreOpen] = useState(false);
//   const [branchesOpen, setBranchesOpen] = useState(false);

//   const close = useCallback(() => {
//     setOpen(false);
//     setMoreOpen(false);
//     setBranchesOpen(false);
//   }, []);

//   useEffect(() => {
//     let frame = 0;

//     const handleScroll = () => {
//       if (frame) return;

//       frame = window.requestAnimationFrame(() => {
//         setScrolled(window.scrollY > 20);
//         frame = 0;
//       });
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (frame) window.cancelAnimationFrame(frame);
//     };
//   }, []);

//   useEffect(() => {
//     if (!open && !moreOpen) return;

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") close();
//     };

//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setOpen(false);
//         setBranchesOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [open, moreOpen, close]);

//   const navLinkClass =
//     "rounded-full px-3 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#101010]/75 transition-colors hover:bg-white/50 hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] xl:px-4";

//   return (
//     <header className="sticky top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-2.5">
//       <div
//         aria-hidden="true"
//         className={`pointer-events-none fixed inset-x-0 top-0 -z-10 h-[76px] transition-all duration-300 sm:h-[82px] ${
//           scrolled
//             ? "bg-[#f4f0e8]/85 shadow-[0_6px_20px_rgba(16,16,16,0.05)] backdrop-blur-xl"
//             : "bg-[#f4f0e8]/70 backdrop-blur-md"
//         }`}
//       />

//       <nav
//         aria-label="Main navigation"
//         className="relative mx-auto flex min-h-[58px] max-w-[1440px] items-center justify-between gap-3 px-1 sm:gap-5 sm:px-2"
//       >
//         <Link
//           href="/"
//           onClick={close}
//           aria-label="Data Council home"
//           className="flex shrink-0 items-center gap-2 sm:gap-3"
//         >
//           <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white sm:size-10">
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
//             <Link href="/" className={navLinkClass}>
//               Home
//             </Link>

//             <Link href="/courses" className={navLinkClass}>
//               Courses
//               <ChevronDown className="ml-1 inline" size={14} />
//             </Link>

//             <div
//               className="relative"
//               onMouseEnter={() => setMoreOpen(true)}
//               onMouseLeave={() => {
//                 setMoreOpen(false);
//                 setBranchesOpen(false);
//               }}
//             >
//               <button
//                 type="button"
//                 aria-expanded={moreOpen}
//                 aria-haspopup="true"
//                 onClick={() => setMoreOpen((value) => !value)}
//                 onKeyDown={(event) => {
//                   if (event.key === "ArrowDown") {
//                     event.preventDefault();
//                     setMoreOpen(true);
//                   }
//                 }}
//                 className={`${navLinkClass} inline-flex items-center gap-1`}
//               >
//                 More
//                 <ChevronDown
//                   size={15}
//                   className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {moreOpen && (
//                 <div className="absolute left-0 top-full z-50 w-64 pt-3">
//                   <div className="rounded-2xl border border-black/5 bg-[#f4f0e8]/95 p-2 shadow-[0_18px_50px_rgba(16,16,16,0.12)] backdrop-blur-xl">
//                     {moreLinks.map((item) => (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         className="flex min-h-12 items-center rounded-xl px-4 text-sm font-medium uppercase tracking-wide text-[#101010]/80 transition-colors hover:bg-white/70"
//                       >
//                         {item.label}
//                       </Link>
//                     ))}

//                     <div
//                       className="relative"
//                       onMouseEnter={() => setBranchesOpen(true)}
//                       onMouseLeave={() => setBranchesOpen(false)}
//                     >
//                       <button
//                         type="button"
//                         aria-expanded={branchesOpen}
//                         onClick={() =>
//                           setBranchesOpen((value) => !value)
//                         }
//                         className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-sm font-medium uppercase tracking-wide text-[#101010]/80 transition-colors hover:bg-white/70"
//                       >
//                         Branches
//                         <ChevronRight
//                           size={17}
//                           className={`transition-transform ${
//                             branchesOpen ? "rotate-90" : ""
//                           }`}
//                         />
//                       </button>

//                       {branchesOpen && (
//                         <div className="absolute left-full top-0 z-50 w-64 pl-2">
//                           <div className="rounded-2xl border border-black/5 bg-[#f4f0e8]/95 p-2 shadow-[0_18px_50px_rgba(16,16,16,0.12)] backdrop-blur-xl">
//                             {locations.map((location) => (
//                               <Link
//                                 key={location.slug}
//                                 href={`/locations/${location.slug}`}
//                                 className="flex min-h-12 items-center rounded-xl px-4 text-sm font-medium uppercase tracking-wide text-[#101010]/80 transition-colors hover:bg-white/70 hover:text-[#101010]"
//                               >
//                                 {location.city}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link href="/about" className={navLinkClass}>
//               About
//             </Link>

//             <Link href="/contact" className={navLinkClass}>
//               Contact Us
//             </Link>
//           </div>
//         </div>

//         {/* Desktop CTA */}
//         <Link
//           href="/contact"
//           className="hidden min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-[13px] font-semibold !text-white transition-colors duration-300 hover:!bg-[#c9ff3b] hover:!text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010] lg:inline-flex"
//         >
//           Book a demo
//           <ArrowUpRight size={15} aria-hidden="true" />
//         </Link>

//         {/* Mobile menu button */}
//         <button
//           type="button"
//           onClick={() => setOpen((value) => !value)}
//           aria-label={open ? "Close navigation" : "Open navigation"}
//           aria-expanded={open}
//           aria-controls="mobile-navigation"
//           className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] lg:hidden"
//         >
//           {open ? (
//             <X size={21} aria-hidden="true" />
//           ) : (
//             <Menu size={21} aria-hidden="true" />
//           )}
//         </button>

//         {/* Mobile menu */}
//         {open && (
//           <div
//             id="mobile-navigation"
//             className="absolute left-0 right-0 top-[calc(100%+8px)] max-h-[calc(100dvh-100px)] overflow-y-auto rounded-2xl border border-black/5 bg-[#f4f0e8]/95 p-2 shadow-[0_16px_40px_rgba(16,16,16,0.10)] backdrop-blur-2xl lg:hidden"
//           >
//             {primaryLinks.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={close}
//                 className="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-medium transition-colors hover:bg-white/70"
//               >
//                 {item.label}
//                 <ArrowUpRight size={16} aria-hidden="true" />
//               </Link>
//             ))}

//             <button
//               type="button"
//               onClick={() => setMoreOpen((value) => !value)}
//               aria-expanded={moreOpen}
//               className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-sm font-medium transition-colors hover:bg-white/70"
//             >
//               More
//               <ChevronDown
//                 size={16}
//                 className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
//               />
//             </button>

//             {moreOpen && (
//               <div className="ml-3 border-l border-black/10 pl-2">
//                 {moreLinks.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={close}
//                     className="flex min-h-11 items-center rounded-xl px-4 text-sm text-black/75 hover:bg-white/70"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}

//                 <button
//                   type="button"
//                   onClick={() => setBranchesOpen((value) => !value)}
//                   aria-expanded={branchesOpen}
//                   className="flex min-h-11 w-full items-center justify-between rounded-xl px-4 text-sm font-medium hover:bg-white/70"
//                 >
//                   Branches
//                   <ChevronDown
//                     size={15}
//                     className={`transition-transform ${branchesOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>

//                 {branchesOpen && (
//                   <div className="ml-3 border-l border-black/10 pl-2">
//                     {locations.map((location) => (
//                       <Link
//                         key={location.slug}
//                         href={`/locations/${location.slug}`}
//                         onClick={close}
//                         className="flex min-h-11 items-center rounded-xl px-4 text-sm text-black/70 hover:bg-white/70"
//                       >
//                         {location.city}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             <Link
//               href="/ojt"
//               onClick={close}
//               className="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-medium hover:bg-white/70"
//             >
//               OJT Training
//               <ArrowUpRight size={16} aria-hidden="true" />
//             </Link>

//             <div className="px-2 pb-2 pt-3">
//               <Link
//                 href="/contact"
//                 onClick={close}
//                 className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-sm font-semibold !text-white transition-colors hover:!bg-[#c9ff3b] hover:!text-[#101010]"
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

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { locations } from "@/data/locations";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const moreLinks = [
  { label: "Placement", href: "/placements" },
  { label: "Gallery", href: "/gallery" },
  { label: "OJT Training", href: "/ojt" },
];

// One font style for every nav item, dropdown item and mobile item.
const textBase = "text-sm font-medium";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setMoreOpen(false);
    setBranchesOpen(false);
  }, []);

  // Close everything on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Scroll state
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

  // Esc, resize, outside click
  useEffect(() => {
    if (!open && !moreOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setBranchesOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      // Desktop dropdown only: click outside closes it
      if (
        window.innerWidth >= 1024 &&
        moreRef.current &&
        !moreRef.current.contains(event.target as Node)
      ) {
        setMoreOpen(false);
        setBranchesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open, moreOpen, close]);

  const navLinkClass = `inline-flex items-center rounded-full px-3 py-2.5 ${textBase} text-[#101010]/75 transition-colors hover:bg-white/50 hover:text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] xl:px-4`;

  const dropdownItemClass = `flex min-h-11 items-center rounded-xl px-4 ${textBase} text-[#101010]/75 transition-colors hover:bg-white/70 hover:text-[#101010]`;

  const mobileItemClass = `flex min-h-12 items-center justify-between rounded-xl px-4 ${textBase} text-[#101010]/80 transition-colors hover:bg-white/70 hover:text-[#101010]`;

  const mobileSubItemClass = `flex min-h-11 items-center rounded-xl px-4 ${textBase} text-[#101010]/70 transition-colors hover:bg-white/70 hover:text-[#101010]`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-2.5">
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 -z-10 h-[76px] transition-all duration-300 sm:h-[82px] ${
          scrolled
            ? "bg-[#f4f0e8]/85 shadow-[0_6px_20px_rgba(16,16,16,0.05)] backdrop-blur-xl"
            : "bg-[#f4f0e8]/70 backdrop-blur-md"
        }`}
      />

      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex min-h-[58px] max-w-[1440px] items-center justify-between gap-3 px-1 sm:gap-5 sm:px-2"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          aria-label="Data Council home"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
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
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            {/* Courses: plain link, no arrow */}
            <Link href="/courses" className={navLinkClass}>
              Courses
            </Link>

            {/* More dropdown */}
            <div
              ref={moreRef}
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => {
                setMoreOpen(false);
                setBranchesOpen(false);
              }}
            >
              <button
                type="button"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                onClick={(event) => {
                  const pointerType = (event.nativeEvent as PointerEvent)
                    .pointerType;
                  // Mouse already opens on hover, so keep it open on click.
                  // Touch / keyboard toggles.
                  if (pointerType === "mouse") setMoreOpen(true);
                  else setMoreOpen((value) => !value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setMoreOpen(true);
                  }
                }}
                className={`${navLinkClass} gap-1`}
              >
                More
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div className="absolute left-0 top-full z-50 w-64 pt-3">
                  <div className="rounded-2xl border border-black/5 bg-[#f4f0e8]/95 p-2 shadow-[0_18px_50px_rgba(16,16,16,0.12)] backdrop-blur-xl">
                    {moreLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className={dropdownItemClass}
                      >
                        {item.label}
                      </Link>
                    ))}

                    {/* Branches submenu */}
                    <div
                      className="relative"
                      onMouseEnter={() => setBranchesOpen(true)}
                      onMouseLeave={() => setBranchesOpen(false)}
                    >
                      <button
                        type="button"
                        aria-expanded={branchesOpen}
                        aria-haspopup="true"
                        onClick={() => setBranchesOpen((value) => !value)}
                        className={`${dropdownItemClass} w-full justify-between`}
                      >
                        Branches
                        <ChevronRight
                          size={16}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            branchesOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {branchesOpen && (
                        <div className="absolute left-full top-0 z-50 w-64 pl-2">
                          <div className="rounded-2xl border border-black/5 bg-[#f4f0e8]/95 p-2 shadow-[0_18px_50px_rgba(16,16,16,0.12)] backdrop-blur-xl">
                            {locations.map((location) => (
                              <Link
                                key={location.slug}
                                href={`/locations/${location.slug}`}
                                onClick={close}
                                className={dropdownItemClass}
                              >
                                {location.city}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={navLinkClass}>
              About
            </Link>

            <Link href="/contact" className={navLinkClass}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-sm font-semibold !text-white transition-colors duration-300 hover:!bg-[#c9ff3b] hover:!text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010] lg:inline-flex"
        >
          Book a demo
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010] lg:hidden"
        >
          {open ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-[calc(100%+8px)] max-h-[calc(100dvh-100px)] overflow-y-auto rounded-2xl border border-black/5 bg-[#f4f0e8]/95 p-2 shadow-[0_16px_40px_rgba(16,16,16,0.10)] backdrop-blur-2xl lg:hidden"
          >
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={mobileItemClass}
              >
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setMoreOpen((value) => !value)}
              aria-expanded={moreOpen}
              className={`${mobileItemClass} w-full`}
            >
              More
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreOpen && (
              <div className="ml-3 border-l border-black/10 pl-2">
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={mobileSubItemClass}
                  >
                    {item.label}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => setBranchesOpen((value) => !value)}
                  aria-expanded={branchesOpen}
                  className={`${mobileSubItemClass} w-full justify-between`}
                >
                  Branches
                  <ChevronDown
                    size={15}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${
                      branchesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {branchesOpen && (
                  <div className="ml-3 border-l border-black/10 pl-2">
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/locations/${location.slug}`}
                        onClick={close}
                        className={mobileSubItemClass}
                      >
                        {location.city}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="px-2 pb-2 pt-3">
              <Link
                href="/contact"
                onClick={close}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-sm font-semibold !text-white transition-colors hover:!bg-[#c9ff3b] hover:!text-[#101010]"
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