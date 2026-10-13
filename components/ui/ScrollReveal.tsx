
"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(element, {
          clearProps: "all",
        });

        return;
      }

      const isMobile = window.matchMedia(
        "(max-width: 640px)",
      ).matches;

      const distance = isMobile ? 12 : 24;

      let startState: {
        x: number;
        y: number;
        scale?: number;
      };

      switch (direction) {
        case "left":
          startState = {
            x: -distance,
            y: 0,
          };
          break;

        case "right":
          startState = {
            x: distance,
            y: 0,
          };
          break;

        case "scale":
          startState = {
            x: 0,
            y: 0,
            scale: 0.98,
          };
          break;

        default:
          startState = {
            x: 0,
            y: distance,
          };
      }

      let animation: gsap.core.Tween | undefined;

      const showElement = () => {
        if (animation) return;

        animation = gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            ...startState,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.4 : 0.6,
            delay: Math.min(
              Math.max(delay, 0),
              isMobile ? 0.08 : 0.15,
            ),
            ease: "power2.out",
            overwrite: "auto",
            clearProps: "transform",
          },
        );
      };

      if (!("IntersectionObserver" in window)) {
        showElement();

        return () => {
          animation?.kill();
        };
      }

      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (!entry?.isIntersecting) return;

          intersectionObserver.disconnect();
          showElement();
        },
        {
          rootMargin: "0px 0px -4% 0px",
          threshold: 0.01,
        },
      );

      intersectionObserver.observe(element);

      return () => {
        intersectionObserver.disconnect();
        animation?.kill();
      };
    },
    {
      scope: container,
      dependencies: [direction, delay],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
