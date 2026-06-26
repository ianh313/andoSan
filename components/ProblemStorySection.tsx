"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { content } from "@/lib/content";

export function ProblemStorySection() {
  const c = content.problem;
  return (
    <section id="problem" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="01" en="The problem" zh="現實裡發生的事" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.22]">
            <span className="zh block">{c.titleA}</span>
            <span className="zh block">
              而是敗給
              <span className="text-amber-deep">太多訊息</span>。
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="zh body-prose-zh mt-12 max-w-prose2">{c.bodyA}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="zh body-prose-zh mt-6 max-w-prose2">{c.bodyB}</p>
        </Reveal>

        {/* Wall of repeated questions — visual texture */}
        <div className="mt-16">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 max-w-4xl">
            {c.questions.map((q, i) => (
              <Reveal key={q} delay={0.04 * i}>
                <li className="zh body-prose-zh text-ink-mute/85 text-[1.05rem] italic">
                  「{q}」
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-24 md:mt-32 max-w-3xl">
            <p className="zh body-prose-zh">{c.midline}</p>
          </div>
        </Reveal>

        {/* Missed guests — italic editorial list */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow">{c.missedLabelEn}</p>
              <p className="zh-light text-ink-mute/80 mt-2 text-xs tracking-wider2">
                {c.missedLabelZh}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <ul className="space-y-7">
              {c.missed.map((m, i) => (
                <Reveal key={m} delay={0.06 * i}>
                  <li className="flex items-baseline gap-5">
                    <span className="num text-amber-deep/55 text-[0.7rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pullquote zh text-ink text-[1.25rem] md:text-[1.4rem] leading-[1.55]">
                      {m}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-24 md:mt-32 max-w-3xl">
            <p className="zh display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.5] text-ink-soft">
              {c.closing}
            </p>
            <p className="zh display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.5] text-ink-mute mt-2">
              {c.closingB}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
