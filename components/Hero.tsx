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
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      {/* Ambient ember layers */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
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
        {/* Soft horizontal light band, like corridor glow */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-soft/20 to-transparent" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full">
        <FadeIn delay={0.4}>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-12 h-px bg-amber-soft/60" />
            <span className="eyebrow">An internal manifesto</span>
            <span className="zh-light text-cream/40 text-xs tracking-wider2">內部宣言</span>
          </div>
        </FadeIn>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, ease: [0.2, 0.65, 0.2, 1], delay: 0.6 }}
          className="display text-cream"
        >
          <span className="block zh text-[clamp(2.4rem,6.5vw,5.4rem)] leading-[1.08] tracking-tight">
            讓旅館開始
            <span className="text-amber-soft/95">擁有靈魂</span>
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
              AI-native Hospitality System
            </p>
            <p className="zh text-cream/55 mt-1 text-[0.95rem]">AI 原生旅宿系統</p>
          </div>

          <div className="hidden md:block self-stretch hair-v" />

          <div>
            <p className="eyebrow mb-3">A quiet promise</p>
            <p className="body-prose-zh max-w-prose2 text-cream/75">
              不是更聰明的客服，
              <br className="hidden md:block" />
              而是一個地方逐漸形成的
              <span className="text-amber-soft/85"> 記憶、人格 </span>
              與
              <span className="text-amber-soft/85"> 款待意識</span>。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.4 }}
          className="absolute left-6 md:left-10 right-6 md:right-10 bottom-10 flex items-end justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="num text-[0.7rem]">00 · prologue</span>
          </div>
          <a
            href="#manifesto"
            className="group flex items-center gap-3 text-cream/60 hover:text-cream transition-colors duration-700"
          >
            <span className="eyebrow group-hover:text-cream transition-colors duration-700">
              Enter quietly
            </span>
            <span className="zh-light text-xs tracking-wider2">輕聲進入</span>
            <span className="block w-10 h-px bg-amber-soft/60 group-hover:w-16 transition-all duration-700" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
