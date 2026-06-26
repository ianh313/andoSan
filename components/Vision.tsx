"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Stage = {
  num: string;
  en: string;
  zh: string;
  objective: string;
  initiative: string;
  detail: string;
  allowed: string[];
  guarded: string[];
};

const stages: Stage[] = [
  {
    num: "I",
    en: "Pre-Booking",
    zh: "訂房前",
    objective: "Help the traveler decide. Help the hotel convert.",
    initiative: "Hotel-goal-led, traveler-value-constrained.",
    detail:
      "Agent 解釋設施、policy、人格；引導旅人走向正確的訂房通道；不誇大、不發明 discount。",
    allowed: [
      "check-in、停車、早餐、寵物政策",
      "已確認的季節 package、early-bird 規則",
      "穩定的取消政策",
    ],
    guarded: [
      "live rate 與即時房況需要 verified runtime tool",
      "任何 commercial exception → 員工審核",
      "Agent 不協商、不喊價、不發明優惠",
    ],
  },
  {
    num: "II",
    en: "Post-Booking",
    zh: "訂房後",
    objective: "Become the hotel's local travel companion.",
    initiative: "Two rhythms — before arrival, and during stay.",
    detail:
      "抵達前可以主動：歡迎、確認、行程協助、發現 service opportunity。入住中要克制：以即時實用為主，必要時迅速交給員工。",
    allowed: [
      "歡迎與抵達準備",
      "在地推薦與簡易行程",
      "Surface service opportunity 給員工",
      "已規劃 surprise 的遞送",
    ],
    guarded: [
      "旅人忙、急、短回應時，降低主動性",
      "情緒、糾紛、營業外要求 → 員工",
      "Agent 不偷偷利用客人脫口而出的資訊",
    ],
  },
  {
    num: "III",
    en: "Post-Checkout",
    zh: "退房後",
    objective: "Turn feedback into relationship and learning.",
    initiative: "Gentle. Opt-in. Suppressible.",
    detail:
      "感謝、收集誠實的回饋、好的鼓勵公開分享、壞的交回員工，並把所有學到的東西，化為未來的服務智慧。",
    allowed: [
      "Thank-you 與 feedback 收集",
      "好評鼓勵公開分享",
      "Hotel-approved 致謝 gesture",
    ],
    guarded: [
      "長期外撥需要 explicit consent",
      "Frequency limits、opt-out、suppression",
      "Negative feedback 不被自動回覆吸收，要進員工視野",
    ],
  },
];

export function Vision() {
  return (
    <section id="journey" className="section relative">
      <div className="absolute inset-0 -z-10">
        <div className="ember bg-amber-soft/8 w-[40vw] h-[40vw] top-[10%] right-[-5%] opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="03" en="The Guest Journey" zh="旅程" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            一段旅程，
            <span className="text-amber-soft">三種目的</span>，
            <br />
            三種不同的主動程度。
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-prose-zh mt-8 max-w-prose2">
            Agent 在每一個階段的工作不一樣。
            判斷主動到什麼程度，本身，就是這個系統最重要的事之一。
          </p>
        </Reveal>

        <div className="mt-24 md:mt-32 hidden md:flex items-center gap-6">
          <Reveal>
            <span className="num text-amber-soft/60 text-xs">stage</span>
          </Reveal>
          {stages.map((s, i) => (
            <Reveal key={s.en} delay={0.1 * i}>
              <div className="flex items-center gap-6">
                <span className="display text-cream text-lg">{s.en}</span>
                {i < stages.length - 1 && (
                  <span className="block w-20 h-px bg-amber-soft/30" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="mt-16 md:mt-20 space-y-20 md:space-y-28">
          {stages.map((s, i) => (
            <li key={s.num}>
              <Reveal delay={0.05 * i}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                  <header className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="display text-5xl md:text-6xl text-amber-soft/45">
                        {s.num}
                      </span>
                    </div>
                    <h3 className="display text-3xl md:text-[2.4rem] text-cream leading-[1.18]">
                      {s.en}
                    </h3>
                    <p className="zh-light text-cream/55 mt-2 text-lg">{s.zh}</p>
                    <div className="hair mt-6 max-w-[10rem]" />
                    <p className="display text-cream/75 mt-6 text-[1.05rem] leading-[1.4]">
                      {s.objective}
                    </p>
                    <p className="margin-note mt-4">— {s.initiative}</p>
                  </header>

                  <div className="md:col-span-7 md:col-start-6 md:pl-8 md:border-l border-amber-soft/10">
                    <p className="body-prose-zh">{s.detail}</p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <p className="eyebrow mb-3">Allowed</p>
                        <ul className="space-y-2">
                          {s.allowed.map((a) => (
                            <li
                              key={a}
                              className="zh body-prose-zh text-cream/75 text-[0.95rem] leading-[1.7] flex items-baseline gap-2"
                            >
                              <span className="text-amber-soft/55 text-xs pt-1">+</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="eyebrow mb-3">Guarded</p>
                        <ul className="space-y-2">
                          {s.guarded.map((g) => (
                            <li
                              key={g}
                              className="zh body-prose-zh text-cream/65 text-[0.95rem] leading-[1.7] flex items-baseline gap-2"
                            >
                              <span className="text-burgundy-low/90 text-xs pt-1">!</span>
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
