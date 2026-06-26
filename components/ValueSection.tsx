"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { content } from "@/lib/content";

export function ValueSection() {
  const c = content.value;
  return (
    <section id="value" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="04" en="For the hotel" zh="對飯店的意義" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.22] max-w-4xl">
            <span className="zh block">{c.title}</span>
            <span className="zh block">
              也能做出
              <span className="text-amber-deep">細緻的服務</span>。
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {c.items.map((v, i) => (
            <Reveal key={v.en} delay={0.08 * i}>
              <article className="card-paper-soft lift p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-baseline gap-3 mb-7">
                  <span className="num text-amber-deep/65 text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block w-10 h-px bg-amber-deep/35" />
                </div>
                <h3 className="display text-[1.7rem] md:text-[1.9rem] zh text-ink leading-[1.25]">
                  {v.zh}
                </h3>
                <p className="eyebrow-dim mt-2">{v.en}</p>
                <div className="hair-solid my-8" />
                <p className="zh body-prose-zh text-[1rem] text-ink-soft/90">
                  {v.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
