"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Chapter = {
  num: string;
  en: string;
  zh: string;
  body: string[];
  pull?: string;
};

const chapters: Chapter[] = [
  {
    num: "I",
    en: "Operational Problems",
    zh: "營運問題",
    body: [
      "FAQ 重複詢問",
      "人力不足",
      "多平台訊息分散",
      "OTA 依賴",
      "CRM 斷裂",
      "服務品質不穩定",
    ],
    pull: "效率，掩蓋了體驗的破碎。",
  },
  {
    num: "II",
    en: "Experience Problems",
    zh: "體驗問題",
    body: [
      "旅程斷裂",
      "入住前、入住中、離店後沒有 continuity（延續性）",
      "回訪客很少真正被記住",
      "個人化仍然很淺",
    ],
    pull: "一段旅程，被切成了很多段交易。",
  },
  {
    num: "III",
    en: "Emotional Problems",
    zh: "情感問題",
    body: [
      "現代旅行越來越 transactional（交易化）",
      "旅人孤獨",
      "很難認識地方",
      "很難形成記憶",
    ],
    pull: "我們住過很多旅館，卻幾乎不記得任何一間。",
  },
  {
    num: "IV",
    en: "Technological Problems",
    zh: "科技問題",
    body: [
      "目前大部分 hospitality tech 只做 automation（自動化）",
      "AI hospitality products 多半停在 chatbot / concierge / FAQ assistant",
      "很少處理情緒節奏、空間人格與款待細膩感",
    ],
    pull: "AI 替旅館回了訊息，卻沒有替旅館「在場」。",
  },
];

export function IndustryContext() {
  return (
    <section id="context" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="01" en="Industry Context" zh="產業脈絡 / 現有問題" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            這不是一份顧問報告 —
            <br />
            <span className="text-cream/55">而是來自產業內部的診斷。</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-prose-zh mt-8 max-w-prose2">
            四種同時發生、彼此糾結的問題。它們不是獨立症狀，
            <br className="hidden md:block" />
            而是同一種「失溫」的不同切面。
          </p>
        </Reveal>

        <div className="mt-24 md:mt-32 space-y-20 md:space-y-28">
          {chapters.map((c, i) => (
            <Reveal key={c.num} delay={0.05 * i}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 group">
                <div className="md:col-span-3">
                  <div className="flex items-baseline gap-4">
                    <span className="num text-amber-soft/70 text-sm">{c.num}</span>
                    <div className="h-px w-12 bg-amber-soft/30" />
                  </div>
                  <h3 className="display text-3xl md:text-4xl mt-4 text-cream">
                    {c.en}
                  </h3>
                  <p className="zh mt-1 text-cream/55 text-lg">{c.zh}</p>
                </div>

                <div className="md:col-span-5">
                  <ul className="space-y-4">
                    {c.body.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-4 text-cream/75 zh-light text-[1.02rem] leading-[1.85]"
                      >
                        <span className="num text-amber-soft/40 text-[0.7rem] pt-2">—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 md:pl-8 md:border-l border-amber-soft/10">
                  {c.pull && (
                    <p className="pullquote text-[1.4rem] md:text-[1.55rem] leading-[1.5] text-amber-soft/85">
                      「{c.pull}」
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
