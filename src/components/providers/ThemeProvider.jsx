"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider
 *
 * IMPORTANT: disableTransitionOnChange={true}
 *
 * next-themes' built-in approach with disableTransitionOnChange=false
 * disables ALL CSS transitions temporarily then re-enables them, which
 * causes a flash. We handle smooth transitions manually via the
 * .theme-transitioning class added in ThemeToggle.jsx — that way we
 * get a silky 400ms cross-fade without any flash-of-unstyled-content.
 */
export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={true}
    >
      {children}
    </NextThemesProvider>
  );
}
