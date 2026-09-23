"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { FaGithub, FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Button } from "./ui/button";

const techTags = [
  {
    name: "React.js",
    position: "top-[15%] right-[8%]",
    icon: <FaReact />,
    delay: 0.9,
  },
  {
    name: "JavaScript",
    position: "top-[36%] left-[-2%]",
    icon: <SiJavascript />,
    delay: 1.1,
  },
  {
    name: "Tailwind CSS",
    position: "bottom-[25%] right-[-2%]",
    icon: <RiTailwindCssFill />,
    delay: 1.3,
  },
  {
    name: "Git / GitHub",
    position: "bottom-[12%] left-[4%]",
    icon: <FaGithub />,
    delay: 1.5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax — disabled when user prefers reduced motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const ringX = useTransform(springX, [-1, 1], [-12, 12]);
  const ringY = useTransform(springY, [-1, 1], [-12, 12]);
  const portraitX = useTransform(springX, [-1, 1], [-5, 5]);
  const portraitY = useTransform(springY, [-1, 1], [-5, 5]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX / innerWidth - 0.5) * 2);
    mouseY.set((e.clientY / innerHeight - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden text-zinc-900 dark:text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main ambient glow — reduced blur for perf */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.12, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[45%] top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/[0.06] blur-[80px] dark:bg-amber-400/[0.06] will-change-transform"
        />

        {/* Small moving glow */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[20%] h-40 w-40 rounded-full bg-amber-300/[0.04] blur-[60px] will-change-transform"
        />

        {/* Grid — reduced opacity in light mode */}
        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          MOBILE PORTRAIT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 lg:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.28, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/40 via-[var(--bg-base)]/75 to-[var(--bg-base)]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[50%_50%] lg:px-0 lg:py-14">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20"
        >
          {/* Intro */}
          <motion.div variants={revealUp} className="flex items-center gap-3">
            <span className="h-px w-8 bg-amber-400" />
            <p className="text-xs font-semibold tracking-[0.22em] text-amber-500 dark:text-amber-400">
              HELLO, I&apos;M
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={revealUp}
            className="mt-5 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Md <span className="font-serif text-amber-500 dark:text-amber-400">Sahil</span>
            <span className="text-zinc-300 dark:text-zinc-700">.</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={revealUp}
            className="mt-4 text-xl font-medium text-zinc-600 dark:text-zinc-200 sm:text-2xl lg:text-[1.6rem]"
          >
            Full-Stack Developer
            <span className="mx-2 text-amber-500 dark:text-amber-400">|</span>
            DevOps &amp; System Design
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={revealUp}
            className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base lg:mt-8"
          >
            I build modern web applications across the frontend and backend,
            with a growing focus on scalable systems, deployment, and
            AI-assisted development.
          </motion.p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <motion.div variants={revealUp} className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              className="group h-11 rounded-full bg-amber-400 px-5 font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[0_10px_35px_rgba(251,191,36,0.18)]"
            >
              <Link href="#projects" className="flex items-center gap-2">
                Explore Projects
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group h-11 rounded-full border-black/15 bg-black/[0.04] px-5 text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-black/[0.07] hover:text-zinc-900 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-amber-400/40 dark:hover:bg-white/[0.07] dark:hover:text-white"
            >
              <a
                href="/Sahil-Resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* =====================================================
              SOCIALS
          ====================================================== */}

          <motion.div
            variants={revealUp}
            className="mt-9 flex items-center gap-3"
          >
            {[
              { label: "GitHub", icon: <FiGithub />, href: "https://github.com/mdsahil823205", ariaLabel: "GitHub", target: "_blank" },
              { label: "LinkedIn", icon: <FiLinkedin />, href: "https://www.linkedin.com/in/md-sahil-101805257/", ariaLabel: "LinkedIn", target: "_blank" },
              { label: "Email", icon: <FiMail />, href: "mailto:mdsahil823205@gmail.com", ariaLabel: "Email",target: "_blank" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.target}
                className="group grid h-10 w-10 place-items-center rounded-lg border border-black/10 bg-black/[0.03] text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-amber-500/[0.06] hover:text-amber-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-amber-400/40 dark:hover:bg-amber-400/[0.06] dark:hover:text-amber-300"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
              </Link>
            ))}
          </motion.div>

          {/* =====================================================
              CURRENT FOCUS
          ====================================================== */}

          <motion.div
            variants={revealUp}
            className="mt-10 flex items-start gap-3 text-xs"
          >
            <span className="mt-1 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-amber-400" />
            <p className="tracking-wide text-zinc-400 dark:text-zinc-500">
              CURRENT FOCUS:
              <span className="ml-2 text-zinc-600 dark:text-zinc-300">
                Full-Stack · DevOps · System Design · GenAI
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT PORTRAIT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto hidden h-[650px] w-full max-w-[620px] lg:block will-change-transform"
        >
          {/* =================================================
              PARALLAX RINGS
          ================================================== */}

          <motion.div
            style={{ x: shouldReduceMotion ? 0 : ringX, y: shouldReduceMotion ? 0 : ringY }}
            className="absolute left-1/2 top-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20 will-change-transform"
          />

          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 z-0 h-[610px] w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-400/10 will-change-transform"
          />

          <motion.div
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.04, 1],
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 z-0 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[60px] will-change-transform"
          />

          {/* =================================================
              ORBIT DOTS
          ================================================== */}

          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
          </motion.div>

          {/* =================================================
              PORTRAIT
          ================================================== */}

          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : portraitX,
              y: shouldReduceMotion ? 0 : portraitY,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-1/2 z-20 h-[650px] w-[470px] -translate-x-1/2 overflow-hidden rounded-t-[180px] will-change-transform"
          >
            <Image
              src="/hero3.png"
              alt="Md Sahil, Full-Stack Developer"
              fill
              priority
              sizes="470px"
              className="object-cover object-top"
            />

            {/* Bottom fade — uses CSS variable so it matches theme */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-base)] to-transparent" />
          </motion.div>

          {/* =================================================
              TECH TAGS
          ================================================== */}

          {techTags.map((tag) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, scale: 0.7, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: tag.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.05 }}
              className={`absolute ${tag.position} z-30 flex cursor-default items-center rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-xs font-medium text-zinc-700 shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-amber-500/40 hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-950/80 dark:text-zinc-300 dark:hover:border-amber-400/40 dark:hover:text-white will-change-transform`}
            >
              <span className="mr-2 text-amber-500 dark:text-amber-400">{tag.icon}</span>
              {tag.name}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] text-zinc-400 dark:text-zinc-700">
            SCROLL
          </span>

          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-amber-400 to-transparent will-change-transform"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
