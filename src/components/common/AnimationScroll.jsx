// app/lenis-provider.jsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function AnimationScroll({ children }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: 0, // tweak feel (higher = floatier)
      smoothWheel: !prefersReduced,
      smoothTouch: !prefersReduced,
    });

    // expose for programmatic scroll
    window.lenis = lenis;

    // animation frame loop
    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    // keep hash jumps smooth via lenis
    const onHash = (e) => {
      const id = location.hash.slice(1);
      const el = id && document.getElementById(id);
      if (el) {
        e.preventDefault?.();
        lenis.scrollTo(el, { offset: 0 });
      }
    };

    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("hashchange", onHash);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
