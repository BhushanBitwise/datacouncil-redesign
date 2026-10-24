
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { ArrowUpRight, Phone } from "lucide-react";

// const CALL_NUMBER = "918087601850";
// const WHATSAPP_NUMBER = "918080152238";

// const WHATSAPP_MESSAGE = encodeURIComponent(
//   "Hello Data Council, I am interested in booking a course demo. Please share the details."
// );

// /* Inline icon: lucide-react has no WhatsApp brand icon */
// function WhatsAppIcon({ size = 22 }: { size?: number }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.8 11.8 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.76h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.8 1 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.47-4.45 9.92-9.85 9.92Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
//     </svg>
//   );
// }

// export default function MobileActionBar() {
//   const [visible, setVisible] = useState(false);

//   // Show the bar only after the user has scrolled past the hero area
//   useEffect(() => {
//     const onScroll = () => setVisible(window.scrollY > 320);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const tabIndex = visible ? 0 : -1;

//   return (
//     <nav
//       aria-label="Quick contact options"
//       aria-hidden={!visible}
//       className={`fixed inset-x-3 z-[100] mx-auto max-w-md transition-all duration-300 ease-out md:hidden ${
//         visible
//           ? "translate-y-0 opacity-100"
//           : "pointer-events-none translate-y-[140%] opacity-0"
//       }`}
//       style={{ bottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
//     >
//       <div className="flex items-center gap-1.5 rounded-full bg-[#101010] p-1.5 shadow-[0_12px_30px_-6px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
//         {/* Call */}
//         <a
//           href={`tel:+${CALL_NUMBER}`}
//           aria-label="Call Data Council"
//           tabIndex={tabIndex}
//           style={{ color: "#ffffff" }}
//           className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 transition active:scale-95 active:bg-white/20"
//         >
//           <Phone size={19} strokeWidth={2} />
//         </a>

//         {/* Book a demo (primary) */}
//         <Link
//           href="/contact"
//           aria-label="Book a free demo"
//           tabIndex={tabIndex}
//           style={{ color: "#101010" }}
//           className="group flex h-12 min-w-0 flex-1 items-center justify-between rounded-full bg-[#c9ff3b] pl-5 pr-1.5 text-sm font-bold no-underline transition active:scale-[0.98]"
//         >
//           <span className="truncate">Book a Demo</span>
//           <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#101010] text-[#c9ff3b] transition-transform group-active:rotate-45">
//             <ArrowUpRight size={18} strokeWidth={2.4} />
//           </span>
//         </Link>

//         {/* WhatsApp */}
//         <a
//           href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Chat with Data Council on WhatsApp"
//           tabIndex={tabIndex}
//           style={{ color: "#25D366" }}
//           className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 transition active:scale-95 active:bg-white/20"
//         >
//           <WhatsAppIcon size={22} />
//         </a>
//       </div>
//     </nav>
//   );
// }








"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "918080152238";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Data Council, I am interested in booking a course demo. Please share the details."
);

/* Inline icon: lucide-react has no WhatsApp brand icon */
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.8 11.8 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.76h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.8 1 1.01-3.7-.24-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.47-4.45 9.92-9.85 9.92Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function MobileActionBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Show the bar only after the user scrolls past the hero area
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Already on the contact page: the bar would be redundant
  if (pathname === "/contact") return null;

  const tabIndex = visible ? 0 : -1;

  return (
    <nav
      aria-label="Quick contact options"
      aria-hidden={!visible}
      className={`fixed inset-x-3 z-[100] mx-auto max-w-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-8 scale-95 opacity-0"
      }`}
      style={{ bottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex items-center gap-2 rounded-[28px] border border-white/70 bg-white/75 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-6px_rgba(0,0,0,0.12),0_24px_48px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04] backdrop-blur-xl backdrop-saturate-150">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Data Council on WhatsApp"
          tabIndex={tabIndex}
          style={{ color: "#25D366" }}
          className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-[#25D366]/12 transition-transform active:scale-90"
        >
          <WhatsAppIcon size={26} />
        </a>

        {/* Primary CTA */}
        <Link
          href="/contact"
          aria-label="Book a free demo"
          tabIndex={tabIndex}
          style={{ color: "#ffffff" }}
          className="group flex h-[52px] min-w-0 flex-1 items-center justify-between rounded-full bg-[#101010] pl-6 pr-1.5 no-underline transition-transform active:scale-[0.98]"
        >
          <span className="flex min-w-0 flex-col items-start leading-tight">
            <span className="truncate text-[15px] font-semibold">
              Book a Free Demo
            </span>
            <span
              style={{ color: "rgba(255,255,255,0.55)" }}
              className="truncate text-[11px] font-medium"
            >
              Talk to our team
            </span>
          </span>

          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#c9ff3b] text-[#101010] transition-transform duration-300 group-active:rotate-45">
            <ArrowUpRight size={20} strokeWidth={2.4} />
          </span>
        </Link>
      </div>
    </nav>
  );
}