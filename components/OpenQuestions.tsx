"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const categories = [
  {
    en: "Interaction",
    zh: "互動問題",
    questions: [
      "AI 應該主動到什麼程度？",
      "哪種記憶會讓人覺得溫暖？",
      "哪種記憶會讓人覺得 creepy（詭異）？",
      "互動頻率要如何控制？",
    ],
  },
  {
    en: "Emotional",
    zh: "情感問題",
    questions: [
      "AI 能不能產生真正的溫度？",
      "數位款待如何不失真？",
      "人會不會開始對空間形成情感依附？",
    ],
  },
  {
    en: "Ethical",
    zh: "倫理問題",
    questions: [
      "哪些資訊不應該被記錄？",
      "情緒資料如何處理？",
      "款待與操控的界線在哪？",
    ],
  },
  {
    en: "Product",
    zh: "產品問題",
    questions: [
      "第一個模組應該是什麼？",
      "人工接管怎麼設計？",
      "人格系統如何配置？",
      "不同旅館如何訓練自己的 Ando？",
    ],
  },
  {
    en: "Operational",
    zh: "營運問題",
    questions: [
      "AI 是否真的能形成款待直覺？",
      "如何避免 AI 干擾員工判斷？",
      "AI 的洞察如何被驗證？",
      "情緒分析如何呈現？",
    ],
  },
  {
    en: "Long-term",
    zh: "長期問題",
    questions: [
      "AI 能不能幫助空間累積文化？",
      "款待能不能重新變得關係化？",
      "一間旅館能不能成為一個真正活著的地方？",
    ],
  },
];

export function OpenQuestions() {
  return (
    <section id="open" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="11" en="Open Questions" zh="開放問題" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            還沒有答案，
            <br />
            <span className="text-cream/45">但值得被寫在頁邊。</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-prose-zh mt-8 max-w-prose2">
            這些是寫在筆記本邊緣的、尚未解開的問題。
            我們不急著回答，但我們會一直帶著它們，一邊做，一邊想。
          </p>
        </Reveal>

        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((c, i) => (
            <Reveal key={c.en} delay={0.05 * i}>
              <div className="relative">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="num text-amber-soft/55 text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-2xl md:text-[1.8rem] text-cream">
                    {c.en}
                  </h3>
                  <span className="zh-light text-cream/45 text-sm">{c.zh}</span>
                </div>
                <ul className="space-y-3 pl-1">
                  {c.questions.map((q, j) => (
                    <li
                      key={q}
                      className="zh body-prose-zh text-[1rem] leading-[1.95] flex gap-3 items-start text-cream/75"
                    >
                      <span className="text-amber-soft/45 pt-1 text-xs">?</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
