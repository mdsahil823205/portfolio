"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * ThemeToggle
 *
 * An accessible button that switches between dark and light mode.
 * Uses a mounted guard to prevent hydration mismatch (FOUC).
 * Animates the Sun/Moon icon swap with Framer Motion AnimatePresence.
 *
 * Only animates transform + opacity — GPU-accelerated, zero layout thrash.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch: render nothing until client mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Placeholder with same dimensions to avoid layout shift
    return (
      <div
        aria-hidden="true"
        className="h-8 w-8 rounded-lg border border-white/10 bg-white/5"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] text-zinc-400 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/[0.08] hover:text-amber-300 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-400 dark:hover:border-amber-400/40 dark:hover:text-amber-300 light:border-black/10 light:bg-black/[0.04] light:text-zinc-500 light:hover:border-amber-500/40 light:hover:text-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
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
