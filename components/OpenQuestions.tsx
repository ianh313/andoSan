"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const categories = [
  {
    en: "Boundary",
    zh: "邊界問題",
    questions: [
      "哪些情況該由 agent 直接回答？哪些必須讓員工接手？",
      "Pre-approved 商業規則的最小單位是什麼？",
      "Holding-message 應該存在到哪一秒？",
      "Tool fallback 失敗時，agent 該假裝沒事還是說真話？",
    ],
  },
  {
    en: "Consent",
    zh: "同意問題",
    questions: [
      "旅人脫口而出的資訊，何時可以變成 candidate memory？",
      "哪些資料應該預設不被記住？",
      "Long-term outreach 的同意如何被收集、被撤回？",
      "刪除請求應該擴散到哪些表？",
    ],
  },
  {
    en: "Initiative",
    zh: "主動問題",
    questions: [
      "Agent 何時應該開口？何時應該安靜？",
      "怎麼判斷旅人現在不想被打擾？",
      "「克制」要如何被量化、被審計？",
      "Proactive outreach 的頻率天花板，誰來訂？",
    ],
  },
  {
    en: "Operational",
    zh: "營運問題",
    questions: [
      "員工 review 的 SLA 該是多久？",
      "Holding message 累積過多時，怎麼分流？",
      "Agent 草稿與員工 final 之間，差距如何被衡量？",
      "什麼樣的 review，可以反過來生成新的 Skill Contract？",
    ],
  },
  {
    en: "Trust",
    zh: "信任問題",
    questions: [
      "Audit 給誰看？",
      "Memory 解釋給旅人聽，要解釋到哪一層？",
      "Agent 出錯時，旅館如何承擔？",
      "員工會不會反過來信任系統勝過自己的判斷？",
    ],
  },
  {
    en: "Long-term",
    zh: "長期問題",
    questions: [
      "Institutional knowledge 可以被打包、被轉讓、被遺忘嗎？",
      "服務直覺被 codify 之後，員工會更自由還是更被約束？",
      "當許多旅館共用一套底層，hospitality 會更多元，還是更同質？",
      "這套系統，能不能讓「款待」變得更難被規模化的方式，被傳承？",
    ],
  },
];

export function OpenQuestions() {
  return (
    <section id="questions" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="09" en="Open Questions" zh="開放問題" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] text-cream max-w-4xl">
            governance 不是
            <span className="text-cream/45">一勞永逸</span>。
            <br />
            這些問題，我們會
            <span className="text-amber-soft"> 持續帶著</span>。
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-prose-zh mt-8 max-w-prose2">
            這些是還沒有定論的開放問題。
            我們不急著給答案，但每一次決定，都會逼我們重新面對它們其中一個。
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
                  {c.questions.map((q) => (
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
