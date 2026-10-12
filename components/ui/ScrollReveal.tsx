
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

      // Keep content visible when the user requests reduced motion.
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(element, {
          clearProps: "all",
        });
        return;
      }

      const mobile = window.matchMedia("(max-width: 640px)").matches;
      const distance = mobile ? 16 : 30;

      const startState =
        direction === "scale"
          ? { scale: 0.97, x: 0, y: 0 }
          : direction === "left"
            ? { x: -distance, y: 0 }
            : direction === "right"
              ? { x: distance, y: 0 }
              : { x: 0, y: distance };

      const from = {
        autoAlpha: 0,
        ...startState,
      };
      const to = {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: mobile ? 0.55 : 0.8,
        delay: mobile ? Math.min(delay, 0.12) : delay,
        ease: "power3.out" as const,
        overwrite: "auto" as const,
      };

      if (mobile) {
        let animation: gsap.core.Tween | undefined;

        if (!("IntersectionObserver" in window)) {
          animation = gsap.fromTo(element, from, to);
          return () => animation?.kill();
        }

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;

            observer.disconnect();
            animation = gsap.fromTo(element, from, to);
          },
          { rootMargin: "0px 0px -5% 0px" }
        );

        observer.observe(element);

        return () => {
          observer.disconnect();
          animation?.kill();
        };
      }

      const animation = gsap.fromTo(
        element,
        from,
        {
          ...to,
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // Recalculate trigger positions after initialization.
      ScrollTrigger.refresh();

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
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
