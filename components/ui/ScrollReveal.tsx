
// "use client";

// import { useRef, type ReactNode } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// type RevealDirection = "up" | "left" | "right" | "scale";

// interface ScrollRevealProps {
//   children: ReactNode;
//   className?: string;
//   direction?: RevealDirection;
//   delay?: number;
// }

// export default function ScrollReveal({
//   children,
//   className = "",
//   direction = "up",
//   delay = 0,
// }: ScrollRevealProps) {
//   const container = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       const element = container.current;

//       if (!element) return;

//       const reduceMotion = window.matchMedia(
//         "(prefers-reduced-motion: reduce)"
//       ).matches;

//       if (reduceMotion) return;

//       const from =
//         direction === "left"
//           ? { x: -32, y: 0 }
//           : direction === "right"
//             ? { x: 32, y: 0 }
//             : direction === "scale"
//               ? { x: 0, y: 0, scale: 0.96 }
//               : { x: 0, y: 28 };

//       gsap.fromTo(
//         element,
//         {
//           autoAlpha: 0,
//           ...from,
//         },
//         {
//           autoAlpha: 1,
//           x: 0,
//           y: 0,
//           scale: 1,
//           delay,
//           duration: 0.8,
//           ease: "power3.out",
//           overwrite: "auto",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 88%",
//             once: true,
//           },
//         }
//       );
//     },
//     {
//       scope: container,
//       dependencies: [direction, delay],
//       revertOnUpdate: true,
//     }
//   );

//   return (
//     <div ref={container} className={className}>
//       {children}
//     </div>
//   );
// }




"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealDirection = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = container.current;
      if (!element) return;

      // Preserve accessibility for users who request reduced motion.
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(element, {
          clearProps: "opacity,visibility,transform",
        });
        return;
      }

      const isMobile = window.matchMedia(
        "(max-width: 640px)"
      ).matches;

      const distance = isMobile ? 18 : 32;

      const from =
        direction === "scale"
          ? { scale: 0.97, x: 0, y: 0 }
          : direction === "left"
            ? { x: isMobile ? 0 : -distance, y: 0 }
            : direction === "right"
              ? { x: isMobile ? 0 : distance, y: 0 }
              : { x: 0, y: distance };

      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          ...from,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          delay: isMobile ? Math.min(delay, 0.15) : delay,
          duration: isMobile ? 0.55 : 0.8,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    {
      scope: container,
      dependencies: [direction, delay],
      revertOnUpdate: true,
    }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
