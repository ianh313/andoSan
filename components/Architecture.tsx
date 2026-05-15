"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const layers = [
  { en: "Memory Layer", zh: "記憶層", desc: "旅客、空間與時刻的長期記憶。" },
  { en: "Personality Layer", zh: "人格層", desc: "每間旅館的語氣、節奏與分寸感。" },
  { en: "Journey State Engine", zh: "旅程狀態引擎", desc: "在每一刻判斷此刻屬於旅程的哪一段。" },
  { en: "Retrieval System", zh: "知識檢索系統", desc: "在地的、館內的、旅人的知識，可隨手取得。" },
  { en: "Context Engine", zh: "情境引擎", desc: "時間、天氣、訊號、心境，被當作一句話的前提。" },
  { en: "Human Takeover Layer", zh: "人工接管層", desc: "什麼時候交給人，比 AI 自己處理更重要。" },
  { en: "Notification Orchestration", zh: "通知協調層", desc: "決定一句話該在哪一秒被送出。" },
  { en: "Traveler Profile Graph", zh: "旅客輪廓圖譜", desc: "由相處累積，而不是由表單填寫。" },
  { en: "Hospitality Intelligence Layer", zh: "旅宿智慧層", desc: "把模糊的直覺，慢慢結晶為共享的洞察。" },
  { en: "Public Relationship Layer", zh: "公開關係層", desc: "公開人格、回覆、語氣與情緒。" },
  { en: "Multi-session Logic", zh: "多階段 session 邏輯", desc: "一段旅程不只一個 session，但仍是同一個人。" },
];

export function Architecture() {
  return (
    <section id="architecture" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="08" en="System Architecture" zh="系統架構推測" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream">
                旅館看不見的
                <span className="text-amber-soft">神經系統</span>。
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-prose-zh mt-8 max-w-prose2">
                以下是 Ando 內部的 speculative architecture（推測中的架構）。
                它不是工程藍圖，比較像是一張關於「一個旅館如何感知世界」的草圖。
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-8">
            <Reveal delay={0.3}>
              <p className="margin-note">
                Drafted as speculation, not a spec. The shape may shift —
                the disposition will not.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {layers.map((l, i) => (
              <Reveal key={l.en} delay={0.03 * i}>
                <div className="group flex items-start gap-5 py-6 border-b border-amber-soft/10">
                  <span className="num text-amber-soft/50 text-xs pt-2 tabular-nums">
                    L{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="display text-cream text-xl md:text-[1.4rem]">
                        {l.en}
                      </h3>
                      <span className="zh-light text-cream/45 text-sm whitespace-nowrap">
                        {l.zh}
                      </span>
                    </div>
                    <p className="zh body-prose-zh text-[0.96rem] mt-3 text-cream/65">
                      {l.desc}
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
