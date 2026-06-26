"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./Reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col pt-28 md:pt-32"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0807] via-[#0A0807] to-[#04040A]" />
        <div className="ember bg-amber-soft/15 w-[55vw] h-[55vw] top-[18%] left-[-12%] animate-emberpulse" />
        <div
          className="ember bg-burgundy-low/25 w-[40vw] h-[40vw] bottom-[-10%] right-[-10%] animate-emberpulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="ember bg-olive-dusty/15 w-[30vw] h-[30vw] top-[40%] right-[15%] animate-emberpulse"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-soft/20 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        <FadeIn delay={0.4}>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-12 h-px bg-amber-soft/60" />
            <span className="eyebrow">A governed hospitality agent</span>
            <span className="zh-light text-cream/40 text-xs tracking-wider2">
              可被治理的款待 agent
            </span>
          </div>
        </FadeIn>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, ease: [0.2, 0.65, 0.2, 1], delay: 0.6 }}
          className="display text-cream"
        >
          <span className="block zh text-[clamp(2.2rem,6vw,5rem)] leading-[1.08] tracking-tight">
            把溝通交給
            <span className="text-amber-soft/95">系統</span>
            。
            <br />
            把款待留給
            <span className="text-amber-soft/95">人</span>
            。
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-16 items-start"
        >
          <div>
            <p className="eyebrow mb-3">The system</p>
            <h2 className="display text-[2.2rem] md:text-[2.6rem] leading-[1.1] text-cream">
              ANDO
            </h2>
            <p className="mt-2 text-cream/65 text-sm tracking-wider2 uppercase">
              A hospitality agentic system, for independent hotels.
            </p>
            <p className="zh text-cream/55 mt-1 text-[0.95rem]">
              為獨立旅館打造的款待 agent 系統。
            </p>
          </div>

          <div className="hidden md:block self-stretch hair-v" />

          <div>
            <p className="eyebrow mb-3">The principle</p>
            <p className="body-prose-zh max-w-prose2 text-cream/75">
              <span className="text-amber-soft/85">Agent</span> 負責溝通。
              <br className="hidden md:block" />
              <span className="text-amber-soft/85">旅館</span> 負責款待。
              <br className="hidden md:block" />
              <span className="text-amber-soft/85">系統</span> 把判斷沉澱為制度。
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 2.4 }}
        className="relative w-full mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10 flex flex-wrap items-end justify-between gap-y-6"
      >
        <div className="flex items-center gap-3">
          <span className="num text-[0.7rem]">00 · how to build, from 0 to 1</span>
        </div>
        <a
          href="#premise"
          className="group flex items-center gap-3 text-cream/60 hover:text-cream transition-colors duration-700"
        >
          <span className="eyebrow group-hover:text-cream transition-colors duration-700">
            Begin with the premise
          </span>
          <span className="zh-light text-xs tracking-wider2">先從前提開始</span>
          <span className="block w-10 h-px bg-amber-soft/60 group-hover:w-16 transition-all duration-700" />
        </a>
      </motion.div>
    </section>
  );
}
