"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Module = {
  num: string;
  en: string;
  zh: string;
  description: string;
  capabilities?: string[];
  quote?: string;
};

const modules: Module[] = [
  {
    num: "01",
    en: "Conversational Intake",
    zh: "對話式接待系統",
    description:
      "AI 處理 FAQ、房價、房況、訂房詢問與人工接管偵測。讓最重複的事，被最自然地接住——並在需要時，毫無痕跡地交給人。",
  },
  {
    num: "02",
    en: "AI-native Booking Flow",
    zh: "AI 原生訂房流程",
    description:
      "重新設計訂房體驗，讓訂房從交易變成旅程的開始。讓「我要訂房」這句話，本身就已經是 hospitality 的一部分。",
  },
  {
    num: "03",
    en: "Journey Companion",
    zh: "旅程夥伴",
    description:
      "Ando 作為 temporary local friend（暫時的在地朋友）——提供在地推薦、情緒陪伴、行程協助與克制的主動互動。它出現的時機，比它說的話更重要。",
  },
  {
    num: "04",
    en: "In-stay Concierge Layer",
    zh: "入住期間管家層",
    description:
      "整合房內資訊、館內服務、手機互動與情境化協助。讓「請問早餐幾點」這種日常問題，在你還沒問之前，就已經被照顧好。",
  },
  {
    num: "05",
    en: "Memory & Feedback",
    zh: "記憶與回饋系統",
    description:
      "自然蒐集回饋，建立情緒記憶與旅程記憶。不是退房後問你「願不願意推薦」，而是在當下，輕輕記住。",
  },
  {
    num: "06",
    en: "Surprise Orchestration",
    zh: "驚喜協調系統",
    description:
      "根據住房率、服務量能與旅客輪廓，動態安排升等、驚喜與款待時刻，並保留主管審核層。Surprise 不是 SOP，而是一種精準的慷慨。",
  },
  {
    num: "07",
    en: "Adaptive Push Layer",
    zh: "自適應推播層",
    description:
      "動態提供停車資訊、早餐提醒、特殊活動、餐廳資訊與情境推薦，而不是廣播式行銷。一條訊息該不該發，比訊息本身重要得多。",
  },
  {
    num: "08",
    en: "Relationship Continuity",
    zh: "關係延續系統",
    description:
      "延續關係、記憶、情感與回訪動機，讓旅館不只存在於入住期間。退房，不應該是關係的句點。",
  },
  {
    num: "09",
    en: "Hospitality Intelligence Layer",
    zh: "旅宿智慧層",
    description:
      "Ando 作為旅館的觀察者，長期理解旅客需求、重複模式、情緒氣候、空間節奏、回饋與驚喜效果。",
    capabilities: [
      "模式偵測",
      "營運建議",
      "服務優化",
      "活動發想",
      "情緒分析",
      "員工智慧輔助",
    ],
  },
  {
    num: "10",
    en: "Public Relationship Layer",
    zh: "公開關係層",
    description:
      "Ando 作為旅館的公開人格，協助 Google Review 回覆、社群互動、公開品牌語氣與關係維護。",
    quote: "Google Review 不只是客服，而是空間人格的公開延伸。",
  },
];

export function BehaviorSystems() {
  return (
    <section id="behavior" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="07" en="Behavior Systems" zh="行為系統" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            一個模組化的款待作業系統。
            <br />
            <span className="text-cream/55">十個章節，十種行為。</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-prose-zh mt-8 max-w-prose2">
            這不是 feature list，是十個彼此呼吸的章節。
            每一個都可以單獨存在，但只有當它們合在一起，才會出現「一個地方在記得你」的感覺。
          </p>
        </Reveal>

        <ul className="mt-24 md:mt-32 space-y-16 md:space-y-24">
          {modules.map((m, i) => (
            <li key={m.num} className="relative">
              <Reveal delay={0.04 * (i % 5)}>
                <article className="group">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    <header className="md:col-span-4">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="num text-amber-soft/70 text-sm">
                          chapter · {m.num}
                        </span>
                        <span className="block w-10 h-px bg-amber-soft/30" />
                      </div>
                      <h3 className="display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.18] text-cream">
                        {m.en}
                      </h3>
                      <p className="zh-light text-cream/55 mt-2 text-base">
                        {m.zh}
                      </p>
                    </header>

                    <div className="md:col-span-7 md:col-start-6 md:pl-10 md:border-l border-amber-soft/10">
                      <p className="body-prose-zh">
                        {m.description}
                      </p>

                      {m.capabilities && (
                        <div className="mt-8">
                          <p className="eyebrow mb-4">Possible capabilities</p>
                          <div className="flex flex-wrap gap-x-3 gap-y-3">
                            {m.capabilities.map((c) => (
                              <span
                                key={c}
                                className="px-4 py-2 zh-light text-cream/80 border border-amber-soft/15 text-sm"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {m.quote && (
                        <div className="mt-8 pl-5 border-l-2 border-amber-soft/40">
                          <p className="pullquote text-amber-soft/90 text-[1.1rem] leading-[1.6]">
                            「{m.quote}」
                          </p>
                        </div>
                      )}
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
