"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const actors = [
  {
    en: "The Hotel",
    zh: "旅館",
    role: "Assigns objectives. Owns voice. Sets boundaries.",
    roleZh: "下達目標、擁有語氣、定義邊界。",
  },
  {
    en: "The Agent",
    zh: "Agent",
    role: "Represents the hotel. Has no independent desire.",
    roleZh: "代表旅館執行。沒有自己的慾望。",
    center: true,
  },
  {
    en: "The Traveler",
    zh: "旅人",
    role: "Experiences the agent as service. Not as marketing.",
    roleZh: "把 agent 當作服務經驗它，而不是行銷。",
  },
];

export function Manifesto() {
  return (
    <section id="premise" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="00" en="Premise" zh="前提" />
        </Reveal>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-9 md:col-start-1">
            <Reveal>
              <p className="display text-[clamp(1.9rem,3.8vw,3.1rem)] leading-[1.18] text-cream/90">
                Ando 是一個給獨立旅館用的
                <span className="text-amber-soft/95"> 可被治理的 </span>
                hospitality agentic system。
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="body-prose-zh mt-12 max-w-prose2">
                它不是一個從靜態資料裡，回答旅客問題的 chatbot。
                <br />
                也不是一個替旅館四處推廣的 marketing automation。
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="body-prose-zh mt-6 max-w-prose2">
                它是一個跨越完整旅程
                <span className="text-cream/55">（訂房前、訂房後、入住中、退房後）</span>
                的款待 agent。
                它的存在，是為了讓旅館人員少做重複溝通，
                多做有判斷力、有溫度、有準備的服務。
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal>
            <p className="eyebrow mb-3">Three actors</p>
            <p className="zh-light text-cream/45 mb-12 tracking-wider2 text-xs">三位行動者</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-stretch">
            {actors.map((a, i) => (
              <Reveal key={a.en} delay={0.1 * i}>
                <div
                  className={`relative h-full p-8 md:p-10 lift ${
                    a.center ? "card-soft" : "card-line"
                  }`}
                >
                  {a.center && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-ink-deep border border-amber-soft/30">
                      <span className="num text-amber-soft/80 text-[0.7rem]">
                        governed
                      </span>
                    </div>
                  )}
                  <span className="num text-amber-soft/60 text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-3xl md:text-[2rem] mt-5 text-cream">
                    {a.en}
                  </h3>
                  <p className="zh-light text-cream/55 mt-1">{a.zh}</p>
                  <div className="hair mt-7" />
                  <p className="body-prose-zh text-[0.95rem] mt-6">{a.role}</p>
                  <p className="zh body-prose-zh text-[0.95rem] mt-2 text-cream/65">
                    {a.roleZh}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-3">The agent has no independent desire</p>
              <p className="zh-light text-cream/45 mb-6 tracking-wider2 text-xs">
                Agent 沒有自己的目標
              </p>
              <p className="display text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.25] text-cream/95">
                它不決定旅館「想要什麼」。
                <br />
                它不發明 discount、優惠、例外、記憶、外撥策略。
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <p className="body-prose-zh">
                Agent 承擔的每一個目標，
                都是旅館透過下列方式指派的：
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "configuration · 設定",
                  "Skill Contracts · 技能契約",
                  "policies · 政策",
                  "service boundaries · 服務邊界",
                  "staff review rules · 員工審核規則",
                  "delivery governance · 發送治理",
                ].map((x) => (
                  <li
                    key={x}
                    className="flex items-baseline gap-3 zh body-prose-zh text-[0.98rem] text-cream/75"
                  >
                    <span className="text-amber-soft/45 text-xs pt-1">—</span>
                    {x}
                  </li>
                ))}
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
              <p className="display pullquote text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.22] text-cream">
                Agent 代表旅館。
                <br />
                旅人把它經驗為
                <span className="text-amber-soft"> 服務</span>。
                <br />
                系統決定它
                <span className="text-amber-soft"> 被允許做什麼</span>。
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="margin-note mt-8 max-w-2xl">
              The agent represents the hotel. The traveler experiences the
              agent as service. The system governs what the agent is allowed
              to do.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
