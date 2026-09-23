"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiGlobe,
} from "react-icons/fi";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGoogle,
  SiLangchain,
} from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";

/* ================= ANIMATION ================= */

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const fadeScale = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
};

const projectContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const techContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const techAnimation = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease },
  },
};

/* ================= PROJECT DATA ================= */

const projects = [
  {
    number: "01",
    title: "WebGen AI",
    category: "AI & FULL-STACK APPLICATION",
    description:
      "An intelligent AI-powered website builder that transforms natural language prompts into responsive, production-ready code with interactive preview environments.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "LangChain", icon: SiLangchain },
      { name: "Gemini", icon: SiGoogle },
      { name: "OpenRouter", icon: RiRobot2Line },
    ],
    github: "https://github.com/mdsahil823205/WEB_GEN_AI",
    live: "https://web-gen-ai-two.vercel.app/",
    image: "/webgenai.png",
    featured: true,
  },
  {
    number: "02",
    title: "Sync Space",
    category: "FULL-STACK APPLICATION",
    description:
      "A collaborative full-stack platform designed to bring communication, productivity and real-time collaboration into one place.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    github: "#",
    live: "#",
    image: "",
  },
  {
    number: "03",
    title: "Scaffold",
    category: "DEVELOPER TOOL",
    description:
      "A developer-focused platform built to simplify project setup and provide a clean foundation for modern web applications.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    github: "#",
    live: "#",
    image: "",
  },
  {
    number: "04",
    title: "Perplexity Clone",
    category: "AI APPLICATION",
    description:
      "An AI-powered search experience focused on conversational interaction, information retrieval and a clean user interface.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    github: "#",
    live: "#",
    image: "",
  },
  {
    number: "05",
    title: "Shery-OS",
    category: "WEB APPLICATION",
    description:
      "A desktop-inspired web experience combining interactive interfaces with a modern operating-system style design.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    github: "#",
    live: "#",
    image: "",
  },
];

const Project = () => {
  const shouldReduceMotion = useReducedMotion();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 px-3 py-16 dark:border-zinc-800/70 dark:bg-[#050505] sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* ================= AMBIENT BACKGROUND ================= */}
      {/* Reduced blur-[150px] → blur-[80px] for GPU perf */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-400/[0.04] blur-[80px] dark:bg-amber-400/[0.025]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.014] dark:opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.7) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] text-amber-500 dark:text-amber-400 sm:text-sm">
            SELECTED WORK
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:mt-5 sm:text-5xl lg:text-7xl">
            Things I&apos;ve{" "}
            <span className="text-amber-500 dark:text-amber-400">built.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:mt-6 sm:text-lg">
            A collection of projects where I&apos;ve explored ideas, solved
            problems and turned concepts into working products.
          </p>
        </motion.div>

        {/* ================= PROJECT COUNT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1 }}
          className="mt-8 flex items-center gap-4 sm:mt-12"
        >
          <span className="text-[9px] font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 sm:text-[10px]">
            PROJECT ARCHIVE
          </span>

          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />

          <span className="text-xs tabular-nums text-zinc-400 dark:text-zinc-700">
            0{projects.length} PROJECTS
          </span>
        </motion.div>

        {/* ================= FEATURED PROJECT ================= */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featuredProjects.map((project) => (
            <article
              key={project.number}
              className="group relative mt-6 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-amber-400/40 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] dark:border-zinc-800/80 dark:bg-zinc-950/70 dark:hover:border-amber-400/30 dark:hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:mt-8 sm:rounded-3xl will-change-transform"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-amber-400/[0.04] blur-[80px] transition-all duration-700 group-hover:bg-amber-400/[0.08] dark:bg-amber-400/[0.025] dark:group-hover:bg-amber-400/[0.06]" />

              {/* Number Watermark */}
              <span className="pointer-events-none absolute -right-6 -top-20 select-none text-[150px] font-bold leading-none text-black/[0.012] transition-all duration-700 group-hover:text-amber-400/[0.025] dark:text-white/[0.015] sm:text-[220px]">
                {project.number}
              </span>

              <div className="relative grid items-stretch lg:grid-cols-[1fr_1.1fr]">
                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-between p-5 sm:p-9 lg:p-12">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 dark:text-amber-400">
                        {project.number}
                      </span>
                      <span className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
                      <span className="text-[10px] font-semibold tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
                        FEATURED PROJECT
                      </span>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.08, ease }}
                      className="mt-5 text-[9px] font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 sm:mt-8 sm:text-[10px]"
                    >
                      {project.category}
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.65, delay: 0.12, ease }}
                      className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 transition-colors duration-500 group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white sm:mt-3 sm:text-5xl"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.18, ease }}
                      className="mt-4 max-w-xl text-xs leading-relaxed text-zinc-500 sm:mt-6 sm:text-base sm:leading-7"
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Badges */}
                    <motion.div
                      variants={techContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="mt-6 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2"
                    >
                      {project.tech.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <motion.div
                            key={tech.name}
                            variants={techAnimation}
                            className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-100 px-2.5 py-1.5 text-[11px] text-zinc-500 transition-all duration-300 hover:border-amber-400/40 hover:text-amber-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-500 dark:hover:border-amber-400/30 dark:hover:text-amber-400 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs"
                          >
                            <Icon className="text-xs sm:text-sm" />
                            {tech.name}
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease }}
                    className="mt-7 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-amber-300 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                    >
                      Live Preview
                      <FiArrowUpRight className="transition-transform duration-500 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                    >
                      <FiGithub />
                      Source Code
                    </a>
                  </motion.div>
                </div>

                {/* RIGHT VISUAL */}
                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, delay: 0.15, ease }}
                  className="relative hidden min-h-[340px] items-center justify-center border-zinc-200/70 bg-zinc-100/30 p-6 dark:border-zinc-800/70 dark:bg-zinc-900/20 sm:p-9 lg:flex lg:min-h-full lg:border-l lg:border-t-0 lg:p-12 will-change-transform"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-xl transition-all duration-700 group-hover:border-amber-400/30 dark:border-zinc-800 dark:bg-[#080808]">
                    {/* Browser top header */}
                    <div className="flex h-9 items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 dark:border-zinc-800/90 dark:bg-[#0d0d0d]">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                      </div>
                      <div className="mx-4 flex h-5 max-w-[220px] flex-1 items-center justify-center truncate rounded bg-zinc-200/80 px-2 text-[10px] text-zinc-400 dark:bg-zinc-900/80 dark:text-zinc-500">
                        webgen-ai.vercel.app
                      </div>
                      <div className="w-10" />
                    </div>

                    {/* Screenshot Preview */}
                    <div className="relative h-[calc(100%-36px)] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                      {project.image ? (
                        <Image
                          onClick={() => { window.open(project.live, "_blank") }}
                          src={project.image}
                          alt={`${project.title} live screenshot`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 0px, 600px"
                          className="cursor-pointer object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-5 text-zinc-400 dark:text-zinc-600">
                          <FiGlobe className="text-2xl" />
                          <span className="text-xs">Preview coming soon</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Preview label */}
                  <div className="absolute bottom-3 right-6 flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 sm:bottom-5 sm:right-9 lg:bottom-6 lg:right-12">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                    LIVE PREVIEW
                  </div>
                </motion.div>
              </div>

              {/* Bottom line accent — GPU-safe scaleX */}
              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-amber-400 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </article>
          ))}
        </motion.div>

        {/* ================= OTHER PROJECTS ================= */}
        <motion.div
          variants={projectContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-2 sm:gap-6"
        >
          {otherProjects.map((project) => (
            <motion.article
              key={project.number}
              variants={cardAnimation}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -6, transition: { duration: 0.35, ease } }
              }
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200/80 bg-white p-3.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:border-zinc-800/80 dark:bg-zinc-950/50 dark:hover:border-amber-400/30 dark:hover:bg-zinc-950 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-2xl sm:p-6 will-change-transform"
            >
              {/* Background number watermark */}
              <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[75px] font-bold leading-none text-black/[0.02] transition-all duration-700 group-hover:text-amber-400/[0.03] dark:text-white/[0.015] dark:group-hover:text-amber-400/[0.025] sm:-top-8 sm:text-[110px]">
                {project.number}
              </span>

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-amber-500/80 dark:text-amber-400/70 sm:text-xs">
                      {project.number}
                    </span>

                    <div className="flex gap-1 sm:gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-7 w-7 place-items-center rounded-md border border-zinc-200 text-zinc-400 transition-all duration-300 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-600 dark:hover:border-zinc-600 dark:hover:text-white sm:h-8 sm:w-8 sm:rounded-lg"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FiGithub className="text-xs sm:text-sm" />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-7 w-7 place-items-center rounded-md border border-zinc-200 text-zinc-400 transition-all duration-300 hover:border-amber-400/40 hover:text-amber-500 dark:border-zinc-800 dark:text-zinc-600 dark:hover:border-amber-400/30 dark:hover:text-amber-400 sm:h-8 sm:w-8 sm:rounded-lg"
                        aria-label={`${project.title} Live`}
                      >
                        <FiExternalLink className="text-xs sm:text-sm" />
                      </a>
                    </div>
                  </div>

                  {/* Preview Window */}
                  <div className="relative mt-4 hidden aspect-[16/8] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 transition-colors duration-500 group-hover:border-zinc-300 dark:border-zinc-800/90 dark:bg-[#080808] dark:group-hover:border-zinc-700 sm:block sm:mt-5">
                    <div className="flex h-6 items-center gap-1.5 border-b border-zinc-200/80 bg-zinc-50 px-3 dark:border-zinc-800/80 dark:bg-[#0d0d0d]">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    </div>
                    <div className="relative h-[calc(100%-24px)] w-full overflow-hidden bg-zinc-100/60 dark:bg-zinc-950/60">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 0px, 350px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-500">
                            <FiGlobe className="text-sm" />
                          </div>
                          <span className="text-[11px] font-medium tracking-wide text-zinc-400 dark:text-zinc-600">
                            Live preview coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category & Title */}
                  <p className="mt-3 truncate text-[8px] font-semibold tracking-[0.16em] text-zinc-400 dark:text-zinc-600 sm:mt-6 sm:text-[9px] sm:tracking-[0.2em]">
                    {project.category}
                  </p>

                  <h3 className="mt-1 line-clamp-1 text-base font-semibold tracking-tight text-zinc-900 transition-colors duration-500 group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white sm:mt-2 sm:text-2xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500 sm:mt-3 sm:line-clamp-3 sm:text-sm sm:leading-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1 sm:mt-6 sm:gap-2">
                  {project.tech.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={tech.name}
                        className="flex items-center gap-1 rounded border border-zinc-200 bg-zinc-100 px-1.5 py-1 text-[9px] text-zinc-500 transition-all duration-300 hover:border-amber-400/40 hover:text-amber-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500 dark:hover:border-amber-400/30 dark:hover:text-amber-400 sm:rounded-md sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[10px]"
                      >
                        <Icon className="text-[10px] sm:text-xs" />
                        <span className="truncate">{tech.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom hover bar — GPU-safe scaleX */}
              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-amber-400/70 transition-transform duration-700 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;