"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 140) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Listen for both native scroll and Lenis custom scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("lenis-scroll", (e) => {
      const currentScrollY = e.detail.scroll;
      if (currentScrollY < 140) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` sticky top-0 z-50 transition-transform duration-300 ease-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className=" mx-auto flex h-[59px] max-w-7xl items-center justify-center gap-3 px-2 sm:px-4 lg:px-8 lg:h-[69px]">
        {/* Navigation pill */}
        <ul className=" flex w-auto max-w-full items-center justify-center gap-[clamp(2px,0.35vw,6px)] overflow-x-auto rounded-lg border border-black/10 bg-[var(--header-bg)] p-[clamp(3px,0.35vw,6px)] shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/15 dark:bg-white/6 dark:shadow-[0_8px_32px_rgba(0,0,0,0.76)]">
          {navLinks.map((link) => (
            <li key={link.name} className="shrink-0">
              <Link
                href={link.path}
                className="group relative flex items-center gap-[clamp(2px,0.5vw,8px)] overflow-hidden rounded-md px-[clamp(8px,1.3vw,30px)] py-[clamp(7px,0.65vw,9px)] text-[clamp(0.55rem,0.89vw,1.1rem)] font-medium tracking-[0.01em] text-[(--text-primary)] transition-colors duration-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {/* Soft glass light sweep */}
                <span className="absolute inset-0 -z-10 translate-y-full rounded-lg bg-gradient-to-b from-black/[0.06] to-black/[0.02] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 dark:from-white/10 dark:to-white/3" />

                {/* Thin border shown only on hover */}
                <span className="text-black absolute inset-0 -z-10 rounded-lg border border-black/0 transition-colors duration-500 group-hover:border-black/10 dark:border-white/0 dark:group-hover:border-white/10" />

                <span>{link.name}</span>

                {/* Amber accent dot */}
                <span className="h-1 w-1 scale-0 rounded-full bg-amber-400 opacity-0 shadow-[0_0_10px_rgba(252,211,77,0.9)] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle — sits beside the nav pill */}
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;