"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

/**
 * Returns the Lenis instance so child components can interact with it
 * (e.g. the Header can listen to scroll events for hide/show behaviour).
 */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * SmoothScrollProvider
 *
 * Initialises Lenis smooth scroll with optimal settings for a portfolio:
 * - duration 1.2s with an exponential easing
 * - touchMultiplier 1.5 for a natural mobile feel
 * - Syncs Lenis with RAF; cleans up on unmount
 *
 * Wraps children so the whole page benefits from smooth scrolling.
 */
export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Detect low-end devices via deviceMemory / hardwareConcurrency
    const isLowEnd =
      (navigator.deviceMemory && navigator.deviceMemory < 2) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);

    const lenis = new Lenis({
      duration: isLowEnd ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      // Lower touch multiplier on low-end to avoid jank
      touchMultiplier: isLowEnd ? 1 : 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Keep lenis in sync with the standard scroll position
    // so native scroll events (IntersectionObserver, etc.) still fire
    lenis.on("scroll", ({ scroll }) => {
      // Dispatch a synthetic scroll event so libraries that listen
      // to window scroll (header, analytics, etc.) keep working
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", { detail: { scroll } })
      );
    });

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
