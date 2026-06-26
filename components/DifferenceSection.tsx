"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { content } from "@/lib/content";

export function DifferenceSection() {
  const c = content.difference;
  return (
    <section id="difference" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="05" en="What's different" zh="和客服工具的不同" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] max-w-4xl">
            <span className="zh block text-ink-mute">{c.titleA}</span>
            <span className="zh block">
              是
              <span className="text-amber-deep">更早的理解</span>。
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <p className="zh body-prose-zh">{c.body}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="zh body-prose-zh mt-6">{c.bodyB}</p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="zh body-prose-zh mt-6 text-ink-mute">{c.bodyC}</p>
            </Reveal>
            <ul className="mt-8 space-y-3">
              {c.feelings.map((f, i) => (
                <Reveal key={f} delay={0.05 * i}>
                  <li className="zh pullquote text-ink text-[1.2rem] md:text-[1.35rem] leading-[1.6]">
                    「{f}」
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-8">
            <Reveal delay={0.4}>
              <p className="margin-note">
                A faster answer is useful.
                <br />
                An earlier understanding is what makes a place feel like home.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Comparison table — editorial */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-12 gap-y-2 border-t border-amber-deep/15 pt-2">
              {/* Headers */}
              <div className="pt-6 pb-4">
                <span className="eyebrow text-ink-mute/70">客服工具</span>
                <p className="zh-light text-ink-mute/70 mt-1 text-xs tracking-wider2">
                  general support tools
                </p>
              </div>
              <div className="hidden md:block" />
              <div className="pt-6 pb-4">
                <span className="eyebrow">Ando</span>
                <p className="zh-light text-ink-mute mt-1 text-xs tracking-wider2">
                  a service partner
                </p>
              </div>

              {c.comparisons.map((row, i) => (
                <div key={i} className="contents">
                  <Reveal delay={0.04 * i}>
                    <div className="py-7 border-t border-amber-deep/10">
                      <p className="zh display text-[1.3rem] md:text-[1.5rem] leading-[1.4] text-ink-mute/75 line-through decoration-ink-mute/20 decoration-[1px]">
                        {row.old}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.04 * i}>
                    <div className="hidden md:flex items-center py-7 border-t border-amber-deep/10">
                      <span className="text-amber-deep/60 text-xl">→</span>
                    </div>
                  </Reveal>

                  <Reveal delay={0.04 * i + 0.05}>
                    <div className="py-7 border-t border-amber-deep/10">
                      <p className="zh display text-[1.3rem] md:text-[1.5rem] leading-[1.4] text-ink">
                        {row.new}
                      </p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
