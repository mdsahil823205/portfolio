"use client";

import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGithubactions,
  SiLangchain,
} from "react-icons/si";

import {
  TbApi,
  TbHierarchy3,
  TbBrain,
  TbDatabase,
  TbPuzzle,
  TbCode,
} from "react-icons/tb";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive, maintainable interfaces with modern frontend technologies.",
    skills: [
      { name: "HTML", icon: TbCode },
      { name: "CSS", icon: TbCode },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive Design", icon: TbCode },
      { name: "Component Architecture", icon: TbHierarchy3 },
    ],
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Designing APIs and backend services with focus on clean architecture and reliability.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "API Design", icon: TbApi },
      { name: "Authentication", icon: TbHierarchy3 },
      { name: "Authorization", icon: TbHierarchy3 },
      { name: "Backend Architecture", icon: TbHierarchy3 },
      { name: "Server-side Development", icon: FaNodeJs },
    ],
  },
  {
    number: "03",
    title: "Data & Systems",
    description:
      "Working with data modeling, databases and the systems behind modern applications.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Database Design", icon: TbDatabase },
      { name: "Data Modeling", icon: TbDatabase },
      { name: "System Design", icon: TbHierarchy3 },
      { name: "Scalability", icon: TbHierarchy3 },
      { name: "Caching", icon: TbDatabase },
      { name: "Distributed Systems", icon: TbHierarchy3 },
      { name: "System Architecture", icon: TbHierarchy3 },
    ],
  },
  {
    number: "04",
    title: "DevOps & Infrastructure",
    description:
      "Managing development workflows, containers, deployment and application infrastructure.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: FaLinux },
      { name: "Docker", icon: FaDocker },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Deployment", icon: FaDocker },
      { name: "Cloud Concepts", icon: FaLinux },
      { name: "Infrastructure", icon: FaLinux },
    ],
  },
  {
    number: "05",
    title: "AI Engineering & Workflows",
    description:
      "Using modern AI tools and frameworks to build intelligent and efficient workflows.",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: TbBrain },
      { name: "RAG", icon: TbBrain },
      { name: "MCP", icon: TbBrain },
      { name: "GenAI APIs", icon: TbBrain },
      { name: "Prompt Engineering", icon: TbBrain },
      { name: "AI Coding Tools", icon: TbBrain },
      { name: "AI Workflows", icon: TbBrain },
    ],
  },
  {
    number: "06",
    title: "Problem Solving & Engineering",
    description:
      "Strengthening the ability to break down complex problems and build effective solutions.",
    skills: [
      { name: "Data Structures", icon: TbCode },
      { name: "Algorithms", icon: TbPuzzle },
      { name: "Problem Solving", icon: TbPuzzle },
      { name: "Logical Thinking", icon: TbBrain },
      { name: "Debugging", icon: TbCode },
      { name: "Code Optimization", icon: TbCode },
      { name: "Clean Code", icon: TbCode },
      { name: "Engineering Practices", icon: TbHierarchy3 },
    ],
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 px-4 py-20 dark:border-zinc-800/70 dark:bg-[#050505] sm:px-6 lg:px-8"
    >
      {/* Ambient Glow — reduced blur for perf */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-amber-400/[0.05] blur-[80px] dark:bg-amber-400/[0.04]" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-amber-500 dark:text-amber-400">
            SKILLS
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            The stack behind <span className="text-amber-500 dark:text-amber-400">my work.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            The technologies, tools, and engineering practices I use to build
            applications, solve problems, and take projects from development to
            deployment.
          </p>
        </div>

        {/* Engineering Stack */}
        <div className="mt-14 sm:mt-20">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-zinc-400 dark:text-zinc-600 sm:mb-8 sm:text-xs sm:tracking-[0.2em]">
            ENGINEERING STACK
          </p>
        </div>

        {/* Main Skill Groups */}
        <div className="mt-9 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              onClick={() =>
                setActiveSkill(activeSkill === group.number ? null : group.number)
              }
              className={`group relative cursor-pointer overflow-hidden rounded-xl border p-3.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:rounded-2xl sm:p-5
                ${
                  activeSkill === group.number
                    ? "scale-[1.02] border-amber-400/60 bg-amber-400/[0.04] shadow-[0_0_30px_rgba(251,191,36,0.07)] dark:bg-amber-400/[0.05]"
                    : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/20 dark:hover:border-zinc-700"
                }
              `}
            >
              {/* Hover Accent — left bar */}
              <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-amber-400 transition-transform duration-300 group-hover:scale-y-100" />

              {/* Top */}
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-amber-500/80 dark:text-amber-400/70 sm:text-xs sm:tracking-[0.18em]">
                    {group.number}
                  </span>

                  <h3 className="mt-1.5 text-sm font-semibold leading-5 text-zinc-800 dark:text-zinc-100 sm:mt-2 sm:text-xl">
                    {group.title}
                  </h3>

                  <p className="mt-1.5 hidden max-w-md text-sm leading-6 text-zinc-500 sm:mt-2 sm:block">
                    {group.description}
                  </p>
                </div>

                {/* Background Number */}
                <span className="hidden shrink-0 text-4xl font-bold leading-none text-zinc-200 dark:text-zinc-800/50 sm:block sm:text-5xl">
                  {group.number}
                </span>
              </div>

              {/* Skills */}
              <div
                id={`skill-${group.number}`}
                className="mt-4 grid grid-cols-2 gap-1.5 sm:mt-5 sm:gap-2"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group/skill flex min-w-0 items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-amber-400/40 hover:bg-amber-400/[0.04] dark:border-zinc-800/70 dark:bg-black/30 dark:hover:border-amber-400/30 dark:hover:bg-amber-400/[0.04] sm:gap-2.5 sm:px-3 sm:py-2.5"
                    >
                      <Icon className="shrink-0 text-[13px] text-zinc-400 transition-colors duration-300 group-hover/skill:text-amber-500 dark:text-zinc-600 dark:group-hover/skill:text-amber-400 sm:text-base" />
                      <span className="truncate text-[10px] font-medium text-zinc-600 transition-colors duration-300 group-hover/skill:text-zinc-900 dark:text-zinc-400 dark:group-hover/skill:text-zinc-200 sm:text-sm">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Accent — GPU-safe: scaleX not width */}
              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-amber-400/60 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
