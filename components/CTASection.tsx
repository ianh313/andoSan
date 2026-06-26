"use client";

import { Reveal } from "./Reveal";
import { content } from "@/lib/content";

export function CTASection() {
  const c = content.cta;
  return (
    <section id="talk" className="relative pt-28 md:pt-40 pb-28 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[40vw] h-[40vw] rounded-full bg-amber-soft/8 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-burgundy/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="block w-12 h-px bg-amber-deep/55" />
            <span className="eyebrow">Closing · 寫在最後</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] leading-[1.15]">
            <span className="zh block text-ink">{c.titleA}</span>
            <span className="zh block">
              讓人留下
              <span className="text-amber-deep">記憶</span>。
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="zh body-prose-zh mt-12 max-w-prose2">{c.body}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a href="mailto:hi@ando.example" className="btn-primary">
              <span>{c.cta}</span>
              <span aria-hidden>→</span>
            </a>
            <a href="mailto:hi@ando.example" className="btn-ghost">
              {c.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <div className="mt-28 md:mt-36">
          <Reveal>
            <div className="hair max-w-md" />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="display text-[clamp(2.6rem,7vw,5.4rem)] leading-[1] tracking-tight mt-12">
              ANDO
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-2">
              <p className="display text-xl md:text-2xl text-ink/85">
                {c.footnoteEn}
              </p>
              <p className="zh text-ink-mute text-lg">{c.footnoteZh}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between text-xs gap-y-4">
          <span className="eyebrow-dim">v0.3 · for independent hotels</span>
          <span className="zh-light text-ink-mute/70 text-xs tracking-wider2">
            AI 處理訊息 · 人完成感動
          </span>
        </div>
      </div>
    </section>
  );
}
