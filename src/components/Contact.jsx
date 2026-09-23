"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 px-4 py-24 dark:border-zinc-800/70 dark:bg-[#050505] sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* ================= AMBIENT BACKGROUND ================= */}
      {/* Reduced blur-[150px] → blur-[80px] */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber-400/[0.05] blur-[80px] dark:bg-amber-400/[0.025]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-amber-400/[0.04] blur-[80px] dark:bg-amber-400/[0.02]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012] dark:opacity-[0.018]"
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
          className="max-w-5xl"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-500 dark:text-amber-400 sm:text-sm">
            CONTACT
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-7xl">
            Let&apos;s build{" "}
            <br className="hidden sm:block" />
            something{" "}
            <span className="text-amber-500 dark:text-amber-400">meaningful.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            I&apos;m open to full-time opportunities, collaborations and
            interesting projects where I can contribute, learn and build
            meaningful products.
          </p>
        </motion.div>

        {/* ================= MAIN CONTACT ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* ================= EMAIL CARD ================= */}
          <motion.a
            variants={item}
            href="mailto:mdsahil823205@gmail.com"
            className="group relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-amber-400/40 hover:bg-zinc-50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] dark:border-zinc-800/80 dark:bg-zinc-950/60 dark:hover:border-amber-400/30 dark:hover:bg-zinc-950 dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10 will-change-transform"
          >
            {/* Glow — reduced blur */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-amber-400/[0.05] blur-[70px] transition-all duration-700 group-hover:bg-amber-400/[0.09] dark:bg-amber-400/[0.025] dark:group-hover:bg-amber-400/[0.07]" />

            {/* Top */}
            <div className="relative flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/[0.06] text-amber-500 transition-all duration-500 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 dark:border-amber-400/20 dark:text-amber-400">
                <FiMail className="text-lg" />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-all duration-500 group-hover:border-amber-400/40 group-hover:text-amber-500 dark:border-zinc-800 dark:text-zinc-600 dark:group-hover:border-amber-400/30 dark:group-hover:text-amber-400">
                <FiArrowUpRight className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>

            <div className="relative mt-10">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-zinc-400 dark:text-zinc-600">
                EMAIL
              </p>

              <h3 className="mt-3 break-all text-xl font-semibold tracking-tight text-zinc-800 transition-colors duration-500 group-hover:text-zinc-950 dark:text-zinc-200 dark:group-hover:text-white sm:text-2xl lg:text-3xl">
                mdsahil823205@gmail.com
              </h3>

              <p className="mt-3 text-sm text-zinc-400 dark:text-zinc-600">
                Click to start a conversation
              </p>
            </div>

            {/* Bottom line — GPU-safe scaleX */}
            <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-amber-400 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </motion.a>

          {/* ================= SOCIAL LINKS ================= */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 gap-5"
          >
            {/* GitHub */}
            <motion.a
              variants={item}
              href="https://github.com/mdsahil823205"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950/50 dark:hover:border-zinc-600 dark:hover:bg-zinc-950 sm:p-6 will-change-transform"
            >
              <div className="flex items-center justify-between">
                <FiGithub className="text-xl text-zinc-400 transition-colors duration-300 group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-white" />
                <FiArrowUpRight className="text-zinc-300 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-600 dark:text-zinc-700 dark:group-hover:text-zinc-300" />
              </div>

              <div className="mt-8">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                  GITHUB
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  @mdsahil823205
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-zinc-400 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={item}
              href="https://www.linkedin.com/in/md-sahil-101805257/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-blue-400/40 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950/50 dark:hover:border-blue-400/30 dark:hover:bg-zinc-950 sm:p-6 will-change-transform"
            >
              <div className="flex items-center justify-between">
                <FiLinkedin className="text-xl text-zinc-400 transition-colors duration-300 group-hover:text-blue-500 dark:text-zinc-500 dark:group-hover:text-blue-400" />
                <FiArrowUpRight className="text-zinc-300 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-600 dark:text-zinc-700 dark:group-hover:text-zinc-300" />
              </div>

              <div className="mt-8">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                  LINKEDIN
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Md Sahil
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-blue-400 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={item}
              href="https://wa.me/918478028757"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with me on WhatsApp"
              className="group relative col-span-2 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-green-400/40 hover:bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950/50 dark:hover:border-green-400/30 dark:hover:bg-zinc-950 sm:p-6 will-change-transform"
            >
              <div className="flex items-center justify-between">
                <FaWhatsapp className="text-2xl text-zinc-400 transition-colors duration-300 group-hover:text-green-500 dark:text-zinc-500 dark:group-hover:text-green-400" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-all duration-500 group-hover:border-green-400/40 group-hover:text-green-500 dark:border-zinc-800 dark:text-zinc-700 dark:group-hover:border-green-400/30 dark:group-hover:text-green-400">
                  <FiArrowUpRight className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>

              <div className="mt-7">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                  WHATSAPP
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Start a conversation
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-green-400 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;