import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiFileText,
} from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";

const experience = {
  role: "Intern — Skill Development Program",
  company: "Euphoria GenX",
  duration: "Jul 2025 — Sep 2025",
  period: "3 months",
  location: "Kolkata, West Bengal, India",
  project: "ZenTask Productivity Dashboard",
  description:
    "Worked on the ZenTask Productivity Dashboard and gained practical exposure to how real-world projects are developed in a professional environment.",
  skills: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Authentication",
    "Authorization",
  ],
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-zinc-200 bg-[var(--bg-base)] px-4 py-20 dark:border-zinc-800/80 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Ambient glow — reduced blur-[130px] → blur-[80px] */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-amber-400/[0.05] blur-[80px] dark:bg-amber-400/[0.05]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-amber-500 dark:text-amber-400">
            EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
            Where I&apos;ve built{" "}
            <span className="text-amber-500 dark:text-amber-400">and learned.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Hands-on experience that gave me a closer look at how real-world
            software projects are built in a professional environment.
          </p>
        </div>

        {/* ================= CURRENTLY ================= */}
        <div className="mt-14 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100/80 backdrop-blur-sm dark:border-zinc-800/90 dark:bg-zinc-900/40">
          <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              {/* Status indicator */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
              </span>

              <span className="text-xs font-semibold tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
                CURRENTLY
              </span>
            </div>

            <p className="max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-right">
              Building full-stack projects and deepening my skills across{": "}
              <span className="font-medium text-zinc-900 dark:text-white">DevOps</span>,{" "}
              <span className="font-medium text-zinc-900 dark:text-white">System Design</span> and{" "}
              <span className="font-medium text-zinc-900 dark:text-white">AI</span>.
            </p>
          </div>
        </div>

        {/* ================= TITLE DIVIDER ================= */}
        <div className="mt-20 flex items-center gap-4">
          <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-400">
            PROFESSIONAL EXPERIENCE
          </span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* ================= EXPERIENCE CARD ================= */}
        <article className="group relative mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-zinc-800/80 dark:bg-zinc-950/70 dark:hover:border-amber-400/40 dark:hover:bg-zinc-950">
          {/* Left amber hover line */}
          <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-amber-400 transition-transform duration-500 ease-out group-hover:scale-y-100" />

          <div className="relative grid lg:grid-cols-[260px_1fr]">
            {/* ================= LEFT META ================= */}
            <div className="border-b border-zinc-200 p-5 dark:border-zinc-800/80 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between lg:block">
                <span className="text-sm font-semibold text-amber-500 dark:text-amber-400">01</span>

                <span className="text-xs font-medium tracking-[0.18em] text-zinc-400 lg:mt-8 lg:block">
                  INTERNSHIP
                </span>
              </div>

              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-3">
                  <FiCalendar className="mt-0.5 shrink-0 text-sm text-amber-500 dark:text-amber-400/80" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {experience.duration}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {experience.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 shrink-0 text-sm text-amber-500 dark:text-amber-400/80" />
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {experience.location}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT DETAILS ================= */}
            <div className="p-5 sm:p-7 lg:p-9">
              {/* Role & Company */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-zinc-400">
                  <FiBriefcase className="text-zinc-400" />
                  EXPERIENCE
                </div>

                <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-base font-semibold text-amber-500 dark:text-amber-400">
                  {experience.company}
                </p>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                {experience.description}
              </p>

              {/* Project Info */}
              <div className="mt-8 border-t border-zinc-200 pt-7 dark:border-zinc-800/80">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-400">
                  <TbLayoutDashboard className="text-base text-zinc-400" />
                  PROJECT
                </div>

                <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      {experience.project}
                    </h4>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      A productivity-focused project developed during the Skill
                      Development Program.
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors duration-200 hover:border-amber-400/50 hover:text-amber-500 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:border-amber-400/50 dark:hover:text-amber-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certificate Attachment */}
              <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800/80">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80">
                      <FiFileText className="text-zinc-500 dark:text-zinc-300" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-zinc-400">
                        INTERNSHIP COMPLETION
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                        Internship Completion Certificate
                      </p>
                    </div>
                  </div>

                  <a
                    href="/certificate.webp"
                    rel="noopener noreferrer"
                    className="group/link inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:border-amber-400/60 hover:bg-amber-400/10 hover:text-amber-500 dark:border-zinc-700/80 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:border-amber-400/60 dark:hover:bg-amber-400/10 dark:hover:text-amber-300"
                  >
                    View Certificate
                    <FiArrowUpRight className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom hover line — GPU-safe scaleX */}
          <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-amber-400/80 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </article>
      </div>
    </section>
  );
};

export default Experience;