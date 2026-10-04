"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * ThemeToggle
 *
 * Smoothly switches dark ↔ light mode using a .theme-transitioning class
 * applied to <html> for exactly the duration of the CSS transition (350ms).
 *
 * Key perf details:
 *  - Uses `useRef` for the timeout so fast double-clicks cancel the previous
 *    cleanup timer correctly (no stale closure issues).
 *  - Only animates transform + opacity on the icon — GPU-composited, zero layout.
 *  - Mounted guard prevents hydration mismatch (FOUC on SSR).
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const cleanupRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      // Cancel pending cleanup if component unmounts during transition
      if (cleanupRef.current) clearTimeout(cleanupRef.current);
    };
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-8 w-8 rounded-lg border border-white/10 bg-white/5"
      />
    );
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    const root = document.documentElement;

    // Cancel any pending cleanup from a previous rapid toggle
    if (cleanupRef.current) {
      clearTimeout(cleanupRef.current);
      root.classList.remove("theme-transitioning");
    }

    // Slightly defer adding the class so the browser paints one frame
    // before the class is applied — eliminates the first-frame flash.
    requestAnimationFrame(() => {
      root.classList.add("theme-transitioning");
      setTheme(isDark ? "light" : "dark");

      // Remove class after transition completes (350ms transition + buffer)
      cleanupRef.current = setTimeout(() => {
        root.classList.remove("theme-transitioning");
        cleanupRef.current = null;
      }, 400);
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] text-zinc-400 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/[0.08] hover:text-amber-300 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-400 dark:hover:border-amber-400/40 dark:hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, y: 8, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -8, rotate: 30 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute"
          >
            <FiMoon className="text-base" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, y: 8, rotate: 30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -8, rotate: -30 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute"
          >
            <FiSun className="text-base" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
