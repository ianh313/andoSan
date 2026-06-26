"use client";

import { motion } from "framer-motion";
import { FadeIn, Reveal } from "./Reveal";
import { content } from "@/lib/content";

export function HeroSection() {
  const c = content.hero;
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden flex flex-col pt-32 md:pt-40 pb-20 md:pb-32"
    >
      {/* very gentle warm wash */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-soft/10 blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-burgundy/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full">
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-4 mb-14 md:mb-20">
            <span className="block w-12 h-px bg-amber-deep/50" />
            <span className="eyebrow">{c.eyebrowEn}</span>
            <span className="zh-light text-ink-mute/75 text-xs tracking-wider2 hidden md:inline">
              {c.eyebrowZh}
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — editorial headline + subtitle + CTAs */}
          <div className="lg:col-span-7 lg:pr-4">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: [0.2, 0.65, 0.2, 1], delay: 0.5 }}
              className="display"
            >
              <span className="block zh text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.15]">
                {c.titleA}
              </span>
              <span className="block zh text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.15]">
                {c.titleB.replace("更懂", "")}
                <span className="text-amber-deep">更懂</span>
                自己的客人。
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.2 }}
              className="zh body-prose-zh mt-12 max-w-prose2 text-ink-soft/85"
            >
              {c.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.6 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a href="#talk" className="btn-primary">
                <span>{c.cta}</span>
                <span aria-hidden>→</span>
              </a>
              <a href="#talk" className="btn-ghost">
                {c.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* RIGHT — service moment card */}
          <div className="lg:col-span-5 lg:pl-4">
            <ServiceMomentCard />
          </div>
        </div>

        <Reveal delay={0.4} className="mt-24 md:mt-32">
          <div className="flex flex-wrap items-end justify-between gap-y-6">
            <span className="num text-[0.7rem]">00 · 為什麼我們在做這件事</span>
            <a
              href="#problem"
              className="group flex items-center gap-3 text-ink-mute hover:text-ink transition-colors duration-700"
            >
              <span className="eyebrow group-hover:text-ink transition-colors duration-700">
                Read on
              </span>
              <span className="zh-light text-xs tracking-wider2">繼續往下讀</span>
              <span className="block w-10 h-px bg-amber-deep/55 group-hover:w-16 transition-all duration-700" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceMomentCard() {
  const m = content.hero.moment;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -0.6 }}
      animate={{ opacity: 1, y: 0, rotate: -0.6 }}
      transition={{ duration: 1.4, delay: 0.9, ease: [0.2, 0.65, 0.2, 1] }}
      className="relative"
    >
      {/* paper tape — adds a tactile editorial feel */}
      <span
        aria-hidden
        className="absolute -top-3 left-10 w-24 h-5 bg-amber-soft/35 rotate-[-3deg]"
        style={{
          boxShadow: "0 1px 0 rgba(140,101,41,0.18)",
        }}
      />

      <div className="card-paper p-7 md:p-9 relative">
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-3">
            <span className="block w-2 h-2 rounded-full bg-amber-deep/60" />
            <span className="eyebrow">{m.labelEn}</span>
          </div>
          <span className="zh-light text-ink-mute/75 text-xs tracking-wider2">
            {m.labelZh}
          </span>
        </div>

        <div className="mb-7">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="num text-[0.66rem] text-amber-deep/75">01</span>
            <span className="eyebrow-zh">{m.guestLabel}</span>
            <span className="text-ink-mute/40 text-xs">／ guest said</span>
          </div>
          <p className="pullquote text-[1.35rem] md:text-[1.5rem] leading-[1.55] text-ink zh">
            {m.guestText}
          </p>
        </div>

        <div className="hair-solid my-7" />

        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="num text-[0.66rem] text-amber-deep/75">02</span>
            <span className="eyebrow-zh">{m.andoLabel}</span>
            <span className="text-ink-mute/40 text-xs">／ Ando noticed</span>
          </div>
          <p className="zh body-prose-zh text-[1.08rem] text-ink-soft">
            {m.andoText}
          </p>
        </div>

        <div className="hair-solid mt-8 mb-5" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-ink-mute">
            <span aria-hidden className="text-amber-deep/80">→</span>
            <span className="zh-light text-sm">{m.handoff}</span>
          </div>
          <span className="eyebrow-dim">{m.handoffEn}</span>
        </div>
      </div>

      <p className="margin-note mt-6 text-center md:text-right">
        — a moment Ando found, for the team to deliver
      </p>
    </motion.div>
  );
}
