// app/lenis-provider.jsx
"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function AnimationScroll({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: prefersReduced ? 0 : 0.6,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.12,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    const onHash = (e) => {
      const id = window.location.hash.slice(1);
      const el = id && document.getElementById(id);
      if (el) {
        e.preventDefault?.();
        lenis.scrollTo(el, { offset: 0 });
      }
    };
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("hashchange", onHash);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
