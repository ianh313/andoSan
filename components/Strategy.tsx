"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const phases = [
  {
    num: "I",
    en: "Operational Utility",
    zh: "營運工具階段",
    body: "先解決 FAQ、訂房詢問、旅客溝通。把最重複、最容易消耗人的部分，安靜地接走。",
  },
  {
    num: "II",
    en: "Memory & Context",
    zh: "記憶與情境階段",
    body: "建立旅客記憶、情境理解與延續性。從這一刻起，旅館開始「記得」你。",
  },
  {
    num: "III",
    en: "Hospitality Intelligence",
    zh: "旅宿智慧階段",
    body: "開始建立情境協調、驚喜系統、人格系統與情緒時機。Ando 從工具，成為一種風度。",
  },
  {
    num: "IV",
    en: "Multi-property Personality System",
    zh: "多旅館人格系統",
    body: "讓不同旅館擁有不同 personality（人格）與 interaction philosophy（互動哲學）。同一個底層，無數種靈魂。",
  },
  {
    num: "V",
    en: "Hospitality Network Layer",
    zh: "旅宿網路層",
    body: "建立旅宿智慧網路、在地知識圖譜與共享學習生態。一張悄悄展開的、活著的、有溫度的網。",
  },
];

const moats = [
  { en: "Hospitality interaction dataset", zh: "旅宿互動資料" },
  { en: "Emotional timing intelligence", zh: "情緒時機智慧" },
  { en: "Personality tuning system", zh: "人格調校系統" },
  { en: "Traveler memory graph", zh: "旅客記憶圖譜" },
  { en: "Local recommendation graph", zh: "在地推薦圖譜" },
  { en: "Hospitality behavior model", zh: "旅宿行為模型" },
  { en: "Hospitality operational intelligence", zh: "旅宿營運智慧" },
  { en: "Contextual relationship patterns", zh: "情境式關係模式" },
];

export function Strategy() {
  return (
    <section id="strategy" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="09" en="Product Strategy" zh="產品策略" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            一段慢慢展開的旅程，
            <br />
            <span className="text-cream/55">不是一張 startup roadmap。</span>
          </h2>
        </Reveal>

        <div className="mt-24 md:mt-32 relative">
          <div className="absolute left-[4.2rem] top-2 bottom-2 w-px bg-amber-soft/15 hidden md:block" />
          <ol className="space-y-20 md:space-y-24">
            {phases.map((p, i) => (
              <li key={p.num}>
                <Reveal delay={0.05 * i}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                    <div className="md:col-span-2 relative">
                      <span className="display text-5xl md:text-6xl text-amber-soft/45">
                        {p.num}
                      </span>
                      <span className="absolute left-[3.3rem] top-7 w-3 h-3 rounded-full bg-amber-soft/80 ring-4 ring-amber-soft/15 hidden md:block" />
                    </div>
                    <div className="md:col-span-9 md:col-start-4">
                      <p className="eyebrow mb-2">Phase {p.num}</p>
                      <h3 className="display text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.2] text-cream">
                        {p.en}
                      </h3>
                      <p className="zh-light text-cream/55 mt-2 text-lg">
                        {p.zh}
                      </p>
                      <p className="body-prose-zh mt-6 max-w-prose2">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div id="moat" className="mt-32 md:mt-40 mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="10" en="Moat" zh="長期壁壘" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.2] text-cream">
                真正的 moat，
                <br />
                不是 AI model，
                <br />
                而是
                <span className="text-amber-soft"> hospitality interaction layer</span>。
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="zh-light text-cream/45 mt-6 tracking-wider2 text-sm">
                The moat is not the model — it is the layer of relationships
                that the model has earned the right to participate in.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.25}>
              <p className="margin-note">
                Models will be commoditized. Relationships, memory, timing
                and disposition — accumulated over years inside real places —
                will not.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {moats.map((m, i) => (
            <Reveal key={m.en} delay={0.04 * i}>
              <li className="card-line lift p-6 h-full">
                <span className="num text-amber-soft/60 text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="display text-cream text-base md:text-[1.05rem] mt-4 leading-snug">
                  {m.en}
                </p>
                <p className="zh-light text-cream/50 text-sm mt-2">{m.zh}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
