"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Component = {
  num: string;
  en: string;
  zh: string;
  description: string;
};

const components: Component[] = [
  {
    num: "01",
    en: "Hotel Identity Teaching",
    zh: "旅館自我教學",
    description:
      "旅館如何把自己是誰、怎麼說話、想創造怎樣的體驗——教給系統。這是一切後續行為的源頭。",
  },
  {
    num: "02",
    en: "Inbound Understanding",
    zh: "入站訊息理解",
    description:
      "把旅人的訊息正確理解：他在問什麼？此刻在旅程的哪裡？情緒如何？需要多少主動？",
  },
  {
    num: "03",
    en: "Hospitality Job",
    zh: "款待工作",
    description:
      "Agent 現在到底在做哪一份工作？訂房協助？抵達準備？問題回收？feedback 收集？每一份工作的成功標準不同。",
  },
  {
    num: "04",
    en: "Plan & Coordinate",
    zh: "計畫與協調",
    description:
      "Agent 怎麼計畫、怎麼選擇工具、怎麼決定下一步——以及，何時應該停下來、留給人。",
  },
  {
    num: "05",
    en: "Memory & Retrieval",
    zh: "記憶與檢索",
    description:
      "什麼可以被記住、什麼只是暫時 context、什麼需要被刪除——以及，需要時，如何在 policy 允許下取回。",
  },
  {
    num: "06",
    en: "Message Delivery",
    zh: "訊息發送",
    description:
      "決定一句話該不該發、什麼時候發、發到哪個頻道、是否需要 holding-message、是否需要先審核。",
  },
  {
    num: "07",
    en: "Data Lifecycle",
    zh: "資料生命週期",
    description:
      "資料如何被刪除、匯出、壓制、遺忘。Consent-aware 是寫進系統骨架裡的，不是外掛。",
  },
  {
    num: "08",
    en: "Staff Review & Teaching",
    zh: "員工審核與教學",
    description:
      "員工如何審核 draft、修正方向、教會系統。他們的修正，會回到 Skill Contracts、知識庫、記憶政策。",
  },
  {
    num: "09",
    en: "Audit & Monitoring",
    zh: "稽核與監控",
    description:
      "每一個決定都可被追溯。誰提議了什麼？誰允許了什麼？誰拒絕了什麼？發生了什麼？",
  },
  {
    num: "10",
    en: "Governed Loops",
    zh: "受治理的迴圈",
    description:
      "一段服務不是一次 request/response，而是一段會繼續、會等待、會升級、會重試、會壓制、會結束的工作。Loop，是讓系統像服務一樣思考。",
  },
  {
    num: "11",
    en: "Security",
    zh: "安全",
    description:
      "對抗 prompt injection、tool abuse、memory poisoning、data leakage、過度自治。最後一道牆，是寫在系統最深處的。",
  },
];

export function BehaviorSystems() {
  return (
    <section id="components" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="07" en="Eleven Components" zh="十一個構件" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] text-cream max-w-4xl">
            在教 agent 學會
            <span className="text-cream/55">行為之前</span>
            ，
            <br />
            我們先把
            <span className="text-amber-soft"> 它周圍的作業系統</span>
            蓋起來。
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-prose-zh mt-8 max-w-prose2">
            十一個構件，定義了 agent 能用什麼知識、正在做什麼工作、怎麼計畫、
            能記住什麼、何時必須交給員工、訊息怎麼出去、資料怎麼被刪除、
            系統怎麼被稽核、迴圈怎麼繼續或停止、以及，如何防止它被濫用。
          </p>
        </Reveal>

        <ul className="mt-24 md:mt-32 space-y-14 md:space-y-20">
          {components.map((c, i) => (
            <li key={c.num} className="relative">
              <Reveal delay={0.03 * (i % 5)}>
                <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  <header className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="num text-amber-soft/70 text-sm">
                        component · {c.num}
                      </span>
                      <span className="block w-10 h-px bg-amber-soft/30" />
                    </div>
                    <h3 className="display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] text-cream">
                      {c.en}
                    </h3>
                    <p className="zh-light text-cream/55 mt-2 text-base">
                      {c.zh}
                    </p>
                  </header>

                  <div className="md:col-span-7 md:col-start-6 md:pl-10 md:border-l border-amber-soft/10">
                    <p className="body-prose-zh">{c.description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-32 md:mt-40">
          <Reveal>
            <p className="pullquote text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.5] text-cream max-w-4xl">
              「合在一起，它們讓 Ando 成為一個 governed hospitality agent system。
              <br />
              <span className="text-cream/50">不是 chatbot，不是 marketing automation，也不是 free-form 自主 agent。」</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
