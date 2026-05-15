"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Manifesto() {
  return (
    <section id="manifesto" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="00" en="Manifesto" zh="宣言 / 為什麼 Ando 存在" />
        </Reveal>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7 md:col-start-1">
            <Reveal>
              <p className="display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.18] text-cream/90">
                現代的 hospitality<span className="text-cream/40">（款待 / 旅宿體驗）</span>正變得越來越
                <span className="text-amber-soft/95">有效率</span>，
                <br />
                卻也越來越令人
                <span className="text-amber-soft/95">遺忘</span>。
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="body-prose-zh mt-12 max-w-prose2">
                如今的旅館產業，幾乎都在優化住房率、轉換率、自動化與營運效率。
                <br />
                但在這個過程中，許多空間逐漸失去了靈魂。
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="body-prose-zh mt-8 max-w-prose2">
                Hospitality 從來不只是房間、check-in、設施與服務流程。
                <br />
                真正讓人記住一間旅館的，往往是另一些更隱微的事。
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-32">
            <Reveal delay={0.35}>
              <p className="eyebrow mb-5">A list of small things</p>
              <ul className="space-y-4 text-cream/70 zh-light text-[0.98rem] leading-[2]">
                <li className="flex gap-3"><span className="num text-amber-soft/50 text-xs pt-1">·</span>它帶來的感受</li>
                <li className="flex gap-3"><span className="num text-amber-soft/50 text-xs pt-1">·</span>在那裡遇見的人</li>
                <li className="flex gap-3"><span className="num text-amber-soft/50 text-xs pt-1">·</span>某個深夜發生的對話</li>
                <li className="flex gap-3"><span className="num text-amber-soft/50 text-xs pt-1">·</span>被理解的感覺</li>
                <li className="flex gap-3"><span className="num text-amber-soft/50 text-xs pt-1">·</span>「這個地方記得我」的感覺</li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal>
            <div className="relative max-w-4xl">
              <span className="absolute -left-4 md:-left-10 -top-6 display text-7xl md:text-9xl text-amber-soft/15 select-none leading-none">
                &ldquo;
              </span>
              <p className="display pullquote text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.2] text-cream">
                溫度
                <span className="text-cream/50">，</span>
                <br />
                很難被
                <span className="text-amber-soft">規模化</span>。
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-32 md:mt-44 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow">Therefore</p>
              <p className="zh-light text-cream/40 mt-2 text-xs tracking-wider2">所以</p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.15}>
              <p className="body-prose-zh mb-6">
                Ando is not a hotel assistant.
                <br />
                <span className="text-cream/55">Ando 不是飯店助手。</span>
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25] text-cream/95">
                它是 —
                <span className="zh text-amber-soft/95">
                  一個地方逐漸形成的靈魂。
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="margin-note mt-8 max-w-prose2">
                A soul that a place quietly grows, over time — through the people who pass through it,
                the nights it remembers, and the small care it offers back.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
