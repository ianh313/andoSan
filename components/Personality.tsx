"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const lines = [
  {
    en: "The agent proposes.",
    zh: "Agent 提出。",
    desc: "草擬回覆、辨識服務機會、整理 candidate memory、建議下一步。它是一個有想法、但沒有最終權力的代表。",
  },
  {
    en: "The harness governs.",
    zh: "Harness 治理。",
    desc: "policy、Skill Contracts、evaluator checks、delivery rules——這套 harness 決定什麼能出去、什麼必須先停下來。",
  },
  {
    en: "The staff decides.",
    zh: "員工決定。",
    desc: "當事情涉及錢、情緒、模糊、敏感、安全，最終的判斷回到人。staff edits / rejects / corrects——這些動作，會反過來教會系統。",
  },
];

const learning = [
  { en: "Staff edits a reply", zh: "員工改了一句回覆" },
  { en: "Staff rejects a draft", zh: "員工駁回一段草稿" },
  { en: "Staff confirms a memory candidate", zh: "員工確認一個 candidate memory" },
  { en: "Staff corrects a strategy", zh: "員工修正一段策略" },
];

const becomes = [
  { en: "Better Skill Contracts", zh: "更好的 Skill Contracts" },
  { en: "Better hotel knowledge", zh: "更穩的旅館知識" },
  { en: "Better memory policy", zh: "更恰當的記憶政策" },
  { en: "Better evaluator checks", zh: "更嚴謹的評估檢查" },
  { en: "Better service behavior", zh: "更恰當的服務行為" },
];

export function Personality() {
  return (
    <section id="governance" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="06" en="Governance Model" zh="治理模型" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] text-cream max-w-4xl">
            一個簡單，但
            <span className="text-amber-soft">不可妥協</span>
            的模型。
          </h2>
        </Reveal>

        <div className="mt-24 md:mt-32 space-y-12 md:space-y-16">
          {lines.map((l, i) => (
            <Reveal key={l.en} delay={0.08 * i}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                <div className="md:col-span-1">
                  <span className="num text-amber-soft/55 text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-11">
                  <p className="display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream">
                    {l.en}
                  </p>
                  <p className="zh-light text-amber-soft/80 mt-2 text-lg tracking-wider2">
                    {l.zh}
                  </p>
                  <p className="body-prose-zh mt-6 max-w-prose2">{l.desc}</p>
                </div>
              </article>
              {i < lines.length - 1 && (
                <div className="hair mt-12 md:mt-16 max-w-md mx-auto" />
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-32 md:mt-40">
          <Reveal>
            <p className="pullquote text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.5] text-amber-soft/90 max-w-4xl">
              「Humans remain the heroes.
              <br />
              That is not a weakness of the system.
              <br />
              It is the point of the system.」
            </p>
            <p className="margin-note mt-6 max-w-2xl">
              當事情涉及金錢、敏感、模糊、情緒、安全——人，仍然是主角。
              這不是系統的弱點，這是系統的重點。
            </p>
          </Reveal>
        </div>

        <div className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-3">A learning loop</p>
              <p className="zh-light text-cream/45 mb-6 tracking-wider2 text-xs">
                學習迴圈
              </p>
              <h3 className="display text-2xl md:text-[1.8rem] text-cream leading-[1.25]">
                每一次員工的修正，
                <br />
                都會回到系統。
              </h3>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:pl-10 md:border-l border-amber-soft/10">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="eyebrow mb-3">When staff…</p>
                  <ul className="space-y-2">
                    {learning.map((l) => (
                      <li
                        key={l.en}
                        className="zh body-prose-zh text-cream/80 text-[0.96rem] leading-[1.7]"
                      >
                        <span className="display text-cream text-[1rem] mr-2">
                          {l.en}
                        </span>
                        <span className="zh-light text-cream/45 text-xs">
                          {l.zh}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <span className="hidden sm:block absolute -left-6 top-1/2 -translate-y-1/2 text-amber-soft/60 text-2xl">
                    →
                  </span>
                  <p className="eyebrow mb-3">…the system becomes</p>
                  <ul className="space-y-2">
                    {becomes.map((b) => (
                      <li
                        key={b.en}
                        className="zh body-prose-zh text-amber-soft/85 text-[0.96rem] leading-[1.7]"
                      >
                        <span className="display text-amber-soft text-[1rem] mr-2">
                          {b.en}
                        </span>
                        <span className="zh-light text-cream/45 text-xs">
                          {b.zh}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
