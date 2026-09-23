"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps the app with next-themes ThemeProvider.
 * - attribute="class"  → adds/removes "dark" class on <html>
 * - defaultTheme="dark" → starts in dark mode
 * - enableSystem=false  → user toggle only, no OS preference override
 * - disableTransitionOnChange=false → allows CSS transitions on theme switch
 */
export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
