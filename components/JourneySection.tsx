"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { content } from "@/lib/content";

export function JourneySection() {
  const c = content.journey;
  return (
    <section id="journey" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="03" en="The journey" zh="旅程的三段" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.22] max-w-4xl">
            <span className="zh block">{c.titleA}</span>
            <span className="zh block">
              每一段旅程，都可以被
              <span className="text-amber-deep">更好地照顧</span>。
            </span>
          </h2>
        </Reveal>

        {/* Timeline header (desktop only) */}
        <div className="mt-20 md:mt-24 hidden md:block">
          <Reveal>
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-amber-deep/15" />
              <div className="relative grid grid-cols-3">
                {c.stages.map((s) => (
                  <div key={s.num} className="flex flex-col items-center">
                    <span className="block w-3 h-3 rounded-full bg-amber-deep/60 ring-4 ring-paper" />
                    <span className="num mt-4 text-xs">{s.num}</span>
                    <span className="display text-ink text-base mt-1">
                      {s.labelEn}
                    </span>
                    <span className="zh-light text-ink-mute text-xs mt-1">
                      {s.labelZh}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stage panels */}
        <ul className="mt-20 md:mt-28 space-y-20 md:space-y-28">
          {c.stages.map((s, i) => (
            <li key={s.num}>
              <Reveal delay={0.05 * i}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  <header className="md:col-span-4">
                    <span className="display text-5xl md:text-6xl text-amber-deep/45">
                      {s.num}
                    </span>
                    <h3 className="display text-2xl md:text-[2rem] mt-5 text-ink leading-[1.2]">
                      {s.labelEn}
                    </h3>
                    <p className="zh-light text-ink-mute mt-2 text-lg">
                      {s.labelZh}
                    </p>
                  </header>

                  <div className="md:col-span-7 md:col-start-6 md:pl-10 md:border-l border-amber-deep/15">
                    <p className="zh body-prose-zh">{s.bodyA}</p>
                    <p className="zh body-prose-zh mt-5 text-ink-mute">
                      {s.bodyB}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
