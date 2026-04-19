"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => {
      const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
      if (!items.length) return;

      items.forEach((item) => item.classList.remove("is-visible"));

      if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const inInitialViewport = rect.top < window.innerHeight * 0.92;
        if (inInitialViewport) {
          item.classList.add("is-visible");
        } else {
          observer.observe(item);
        }
      });

      return () => observer.disconnect();
    };

    let cleanup: (() => void) | undefined;
    const frame = window.requestAnimationFrame(() => {
      cleanup = run();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
