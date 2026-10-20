"use client";

import { useEffect } from "react";

/** Content is visible by default, including without JavaScript. */
export function ScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reset = () => elements.forEach((element) => element.classList.remove("reveal-waiting"));
    const setup = () => {
      observer?.disconnect();
      reset();
      if (media.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-waiting");
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add("reveal-waiting");
          observer?.observe(element);
        }
      });
    };
    setup();
    media.addEventListener("change", setup);
    return () => { observer?.disconnect(); media.removeEventListener("change", setup); reset(); };
  }, []);
  return null;
}
