"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

/**
 * useLenis — returns the live Lenis instance ref.
 */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * SmoothScrollProvider
 *
 * Key optimisations:
 *  1. Pauses the RAF loop when the browser tab is hidden (Page Visibility API).
 *  2. Single cancellable RAF handle — no memory leak on unmount.
 *  3. Lower duration on low-end hardware for a more responsive feel.
 *  4. Broadcasts a CustomEvent so the Header tracks scroll without its own listener.
 */
export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const isLowEnd =
      (navigator.deviceMemory && navigator.deviceMemory < 2) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);

    const lenis = new Lenis({
      duration: isLowEnd ? 0.7 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: isLowEnd ? 0.9 : 1.1,
      touchMultiplier: isLowEnd ? 1.0 : 1.4,
      infinite: false,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ({ scroll }) => {
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", { detail: { scroll } })
      );
    });

    let hidden = false;

    const tick = (time) => {
      if (!hidden) lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    const handleVisibilityChange = () => {
      hidden = document.hidden;
      if (!hidden) lenis.start();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}
