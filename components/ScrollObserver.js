"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for DOM to render after route change
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("scroll-animate-visible");
              // Optional: stop observing once visible if you want the animation to only happen once
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      // Target all main structural sections across the site
      const elements = document.querySelectorAll("section, .reveal-on-scroll");
      elements.forEach((el, index) => {
        // If it's the very first section (hero), we can animate it instantly or just add a smaller delay
        if (!el.classList.contains("scroll-animate-visible")) {
          el.classList.add("scroll-animate-hidden");
          // Stagger the first few elements if they are already in viewport
          if (index < 2) {
             el.style.transitionDelay = `${index * 0.1}s`;
          }
        }
        observer.observe(el);
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
