"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { content } from "@/lib/content";

export function ServiceMomentSection() {
  const c = content.moments;
  return (
    <section id="moments" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02" en="What Ando does" zh="Ando 在做的事" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] max-w-4xl">
            <span className="zh">
              Ando 幫飯店
              <span className="text-amber-deep">看見</span>
              這些時刻。
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <p className="zh body-prose-zh">{c.bodyA}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="zh display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.5] mt-10 text-ink">
                {c.bodyB}
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="zh body-prose-zh mt-6">{c.bodyC}</p>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="zh pullquote text-[1.2rem] md:text-[1.4rem] leading-[1.6] mt-10 text-amber-deep">
                「{c.closing}」
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-10">
            <Reveal delay={0.5}>
              <p className="margin-note">
                Ando notices. Staff cares. The hotel remembers.
              </p>
            </Reveal>
          </div>
        </div>

        {/* The dark inset — the core line moment */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="card-nocturne p-12 md:p-20 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-soft/5 blur-3xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                <div className="md:col-span-7">
                  <span className="eyebrow text-amber-soft/95">The core promise</span>
                  <p className="zh-light text-fade/55 mt-2 text-xs tracking-wider2">
                    最核心的一句話
                  </p>
                  <h3 className="display text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.1] mt-10 text-fade">
                    <span className="zh block">{c.coreLineA}</span>
                    <span className="zh block text-amber-soft">{c.coreLineB}</span>
                  </h3>
                </div>
                <div className="md:col-span-4 md:col-start-9">
                  <p
                    className="zh-light text-fade/55 text-sm leading-[1.95] italic"
                    style={{ fontFamily: "EB Garamond, Noto Serif TC, serif" }}
                  >
                    AI handles the messages.
                    <br />
                    People deliver the moments
                    <br />
                    that travelers remember.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Example moment cards */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <p className="eyebrow">Three small moments</p>
            <p className="zh-light text-ink-mute/80 mt-2 text-xs tracking-wider2">
              三個小時刻
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {c.examples.map((e, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="card-paper-soft lift p-7 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="num text-amber-deep/70 text-[0.66rem]">
                      moment · {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block w-8 h-px bg-amber-deep/40" />
                  </div>
                  <div>
                    <p className="eyebrow-zh text-ink-mute/70">旅客提到</p>
                    <p className="zh pullquote text-ink text-[1.05rem] md:text-[1.1rem] leading-[1.65] mt-2">
                      {e.guest}
                    </p>
                  </div>
                  <div className="hair-solid my-6" />
                  <div>
                    <p className="eyebrow-zh text-amber-deep/80">Ando 提醒</p>
                    <p className="zh body-prose-zh text-[0.98rem] mt-2 text-ink-soft/90">
                      {e.ando}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
