"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const teaches = [
  "who the hotel is · 旅館是誰",
  "how it speaks · 它怎麼說話",
  "what experience it wants to create · 想創造什麼樣的體驗",
  "what information is stable & safe · 哪些資訊穩定可答",
  "which commercial rules are pre-approved · 哪些商業規則已預核",
  "which requests require staff review · 哪些必須交給員工審核",
  "which tools or integrations are available · 哪些工具可被叫用",
  "what kind of proactive engagement is allowed · 哪種主動接觸被允許",
  "what the agent must never promise · 永遠不能承諾的事",
  "how staff should remain in control · 員工如何保持掌控",
];

const configures = [
  { en: "Brand voice", zh: "品牌語氣" },
  { en: "Hospitality tone", zh: "款待語氣" },
  { en: "Approved hotel knowledge", zh: "已批准的旅館知識" },
  { en: "Service boundaries", zh: "服務邊界" },
  { en: "Commercial authority", zh: "商業授權" },
  { en: "Discount or package rules", zh: "優惠 / 套裝規則" },
  { en: "Staff review behavior", zh: "員工審核行為" },
  { en: "Holding-message templates", zh: "暫存訊息模板" },
  { en: "Proactive outreach settings", zh: "主動外撥設定" },
  { en: "Memory & data governance", zh: "記憶與資料治理" },
];

export function WorldModel() {
  return (
    <section id="console" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="05" en="The Hotel Console" zh="旅館控制台" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] text-cream max-w-4xl">
            Onboarding 不只是
            <span className="text-cream/45">開帳號</span>。
            <br />
            它是旅館，
            <span className="text-amber-soft"> 教會系統自己是誰</span>。
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-prose-zh mt-8 max-w-prose2">
            這個過程決定了：之後 agent 能說什麼、不能說什麼、可以建議什麼、
            什麼情況必須停下來交回給人。它不是一次性的設定，是會持續被調整的營運邊界。
          </p>
        </Reveal>

        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-3">During onboarding, the hotel teaches</p>
              <p className="zh-light text-cream/45 mb-8 tracking-wider2 text-xs">
                Onboarding 階段，旅館教會系統
              </p>
            </Reveal>
            <ul className="space-y-3">
              {teaches.map((t, i) => (
                <Reveal key={t} delay={0.03 * i}>
                  <li className="flex items-baseline gap-3 zh body-prose-zh text-[0.98rem] text-cream/80">
                    <span className="num text-amber-soft/45 text-[0.7rem] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="eyebrow mb-3">In the console, the hotel configures</p>
              <p className="zh-light text-cream/45 mb-8 tracking-wider2 text-xs">
                Console 裡，旅館可以調整
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {configures.map((c, i) => (
                <Reveal key={c.en} delay={0.04 * i}>
                  <div className="card-line lift p-5 group">
                    <div className="flex items-center justify-between">
                      <p className="display text-cream text-[1.02rem]">
                        {c.en}
                      </p>
                      <span className="num text-amber-soft/40 text-[0.7rem]">
                        ◇
                      </span>
                    </div>
                    <p className="zh-light text-cream/50 text-sm mt-1">
                      {c.zh}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 md:mt-40">
          <Reveal>
            <div className="card-soft p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-soft/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-5">
                  <p className="eyebrow mb-3">The point</p>
                  <h3 className="display text-[1.6rem] md:text-[2rem] text-cream leading-[1.25]">
                    Agent 不會變成
                    <br />
                    <span className="text-cream/45">free-form salesperson</span>。
                  </h3>
                  <p className="zh-light text-amber-soft/80 mt-4 tracking-wider2 text-sm">
                    it becomes a governed representative.
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="body-prose-zh">
                    它變成旅館的、可被治理的代表。
                    一個只說旅館允許它說的話、只做旅館授權它做的事、
                    在不確定時懂得停下來的代表。
                  </p>
                  <p className="margin-note mt-6">
                    A representative who knows when to stop.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
