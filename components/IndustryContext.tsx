"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const nots = [
  {
    en: "A chatbot that answers FAQs from static knowledge.",
    zh: "從靜態資料裡答題的客服 bot。",
  },
  {
    en: "A marketing automation tool that pushes outreach.",
    zh: "替旅館四處推送行銷訊息的自動化工具。",
  },
  {
    en: "A free-form autonomous agent with its own agenda.",
    zh: "一個有自己主見、自己安排優先順序的 free-form agent。",
  },
  {
    en: "A system that replaces hospitality staff.",
    zh: "一個來取代旅館人員的東西。",
  },
];

const yeses = [
  {
    en: "A governed agent across the full guest journey.",
    zh: "跨越完整旅程，可被治理的款待 agent。",
  },
  {
    en: "Configurable by hotels through Skill Contracts & policies.",
    zh: "透過 Skill Contracts 與政策由旅館自己設定。",
  },
  {
    en: "Held in check by staff review and verified runtime tools.",
    zh: "由員工審核與真正可信的工具守住界線。",
  },
  {
    en: "A way to turn repeated judgment into institutional knowledge.",
    zh: "讓重複的服務判斷，沉澱為旅館的制度知識。",
  },
];

export function IndustryContext() {
  return (
    <section id="not-and-yes" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="01" en="Not & Yes" zh="我們不是 / 我們是" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] text-cream max-w-4xl">
            先說我們
            <span className="text-cream/45">不在做什麼</span>
            ，
            <br />
            再說我們
            <span className="text-amber-soft"> 在做什麼</span>。
          </h2>
        </Reveal>

        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="num text-cream/35 text-xs">not</span>
                <div className="h-px flex-1 max-w-[3rem] bg-cream/15" />
                <span className="eyebrow-dim">What Ando is not</span>
              </div>
            </Reveal>
            <ul className="space-y-6">
              {nots.map((n, i) => (
                <Reveal key={n.en} delay={0.05 * i}>
                  <li className="group">
                    <p className="display text-cream/45 text-[1.25rem] md:text-[1.4rem] leading-[1.4] line-through decoration-cream/20 decoration-[1px]">
                      {n.en}
                    </p>
                    <p className="zh-light text-cream/35 mt-2 text-[0.95rem]">
                      {n.zh}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="md:pl-10 md:border-l border-amber-soft/15">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="num text-amber-soft/70 text-xs">yes</span>
                <div className="h-px flex-1 max-w-[3rem] bg-amber-soft/40" />
                <span className="eyebrow">What Ando is</span>
              </div>
            </Reveal>
            <ul className="space-y-6">
              {yeses.map((y, i) => (
                <Reveal key={y.en} delay={0.05 * i}>
                  <li>
                    <p className="display text-cream text-[1.3rem] md:text-[1.5rem] leading-[1.35]">
                      {y.en}
                    </p>
                    <p className="zh body-prose-zh text-[0.98rem] mt-2 text-cream/65">
                      {y.zh}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 md:mt-40">
          <Reveal>
            <p className="pullquote text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.45] text-amber-soft/90 max-w-4xl">
              「The only acceptable way for the agent to serve the hotel
              <br />
              is by creating clearer, warmer, safer, and more useful
              <br />
              traveler experiences.」
            </p>
            <p className="margin-note mt-6 max-w-2xl">
              Agent 為旅館服務的唯一方法，是把旅人的體驗做得更清楚、更溫暖、更安全、更有用。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
