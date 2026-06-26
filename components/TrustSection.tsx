"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { content } from "@/lib/content";

export function TrustSection() {
  const c = content.trust;
  return (
    <section id="trust" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="06" en="Trust & boundaries" zh="信任與邊界" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.2] max-w-4xl">
            <span className="zh block">
              主動，但
              <span className="text-amber-deep">不失控</span>。
            </span>
            <span className="zh block">
              聰明，但
              <span className="text-amber-deep">不越界</span>。
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <p className="zh body-prose-zh">{c.bodyA}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="zh body-prose-zh mt-6">{c.bodyB}</p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12">
                <p className="zh display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.45]">
                  {c.closing}
                </p>
                <p className="zh display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.45] mt-2 text-amber-deep">
                  {c.closingB}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.3}>
              <div className="card-paper p-8 md:p-10">
                <div className="flex items-center justify-between mb-7">
                  <span className="eyebrow">{c.boundariesLabelEn}</span>
                  <span className="zh-light text-ink-mute/80 text-xs tracking-wider2">
                    {c.boundariesLabelZh}
                  </span>
                </div>

                <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {c.boundaries.map((b, i) => (
                    <li
                      key={b}
                      className="flex items-baseline gap-3 zh display text-[1.15rem] md:text-[1.25rem] text-ink"
                    >
                      <span className="num text-amber-deep/50 text-[0.66rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="hair-solid mt-9 mb-6" />
                <p className="zh-light text-ink-mute text-sm leading-[1.8]">
                  這些事情，永遠由
                  <span className="text-ink font-medium">飯店的人</span>
                  決定。Ando 只負責把資訊整理好，遞到他們手上。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
