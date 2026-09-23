"use client";

import { motion, useReducedMotion } from "framer-motion";

const focusItems = [
  {
    number: "01",
    title: "Full-Stack Applications",
    description:
      "Building complete web applications from interface to backend.",
  },
  {
    number: "02",
    title: "Backend & API Development",
    description:
      "Designing reliable APIs and backend systems that are easy to extend.",
  },
  {
    number: "03",
    title: "DevOps & Infrastructure",
    description:
      "Working with deployment, automation and infrastructure workflows.",
  },
  {
    number: "04",
    title: "System Design & Architecture",
    description:
      "Thinking about structure, scalability and how different systems connect.",
  },
  {
    number: "05",
    title: "AI-Assisted Development",
    description:
      "Using modern AI tools to explore ideas, solve problems and build faster.",
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[var(--bg-base)]/40 via-[var(--bg-base)]/75 to-[var(--bg-base)] relative overflow-hidden border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-900 dark:bg-[#050505] sm:px-10 lg:px-16"
    >
      {/* Ambient glow — reduced blur for perf */}
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-amber-400/[0.06] blur-[80px] dark:bg-amber-400/[0.035]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.25em] text-amber-500 dark:text-amber-400"
          >
            ABOUT ME
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl"
          >
            I care about how software{" "}
            <span className="text-amber-500 dark:text-amber-400">comes together.</span>
          </motion.h2>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="mt-20 grid gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ABOUT TEXT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 text-zinc-700 dark:text-zinc-300"
            >
              I&apos;m Md Sahil, a developer who enjoys building things from the
              ground up. I work across the frontend and backend, while also
              exploring the systems and infrastructure that keep applications
              running reliably.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-7 leading-7 text-zinc-500 dark:text-zinc-500"
            >
              I like understanding how the different pieces of a product fit
              together — from the way a user interacts with an application to
              how its APIs, databases, and services work behind the scenes.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-7 leading-7 text-zinc-500 dark:text-zinc-500"
            >
              I also use AI tools throughout my development workflow for
              exploring ideas, debugging, learning, and getting things done more
              efficiently.
            </motion.p>

            {/* Small visual line */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-4"
            >
              <div className="h-px w-16 bg-amber-400" />
              <span className="text-xs tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
                ALWAYS BUILDING
              </span>
            </motion.div>
          </motion.div>

          {/* ================= FOCUS ================= */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-600"
            >
              WHAT I WORK ON
            </motion.p>

            <div className="space-y-2">
              {focusItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={shouldReduceMotion ? {} : { x: 8 }}
                  className="group relative cursor-default overflow-hidden rounded-xl border border-zinc-200 bg-white px-5 py-5 transition-colors duration-300 hover:border-amber-400/50 hover:bg-zinc-50 dark:border-zinc-800/70 dark:bg-zinc-950/60 dark:hover:border-amber-400/30 dark:hover:bg-zinc-900/80 will-change-transform"
                >
                  {/* Huge number */}
                  <span className="pointer-events-none absolute right-2 top-1 text-[5rem] leading-none font-bold text-amber-400/[0.06] dark:text-amber-400/[0.045]">
                    {item.number}
                  </span>

                  {/* Amber line — GPU-safe: uses scaleX on transform, not width */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-amber-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <div className="relative flex gap-5">
                    <span className="pt-1 text-xs text-zinc-400 transition-colors duration-300 group-hover:text-amber-500 dark:text-zinc-600 dark:group-hover:text-amber-400">
                      {item.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200 sm:text-base">
                          {item.title}
                        </h3>

                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-lg text-amber-500 dark:text-amber-400"
                        >
                          ↗
                        </motion.span>
                      </div>

                      {/* Description — GPU-safe: opacity + translateY only, NOT height */}
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-xs leading-5 text-zinc-500"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
