"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Verb = {
  num: string;
  en: string;
  zh: string;
  desc: string;
  example: string;
  side?: "L" | "R";
};

const verbs: Verb[] = [
  {
    num: "01",
    en: "Noticing",
    zh: "覺察",
    desc: "「他比預定時間早到了三小時，看起來很疲憊。」這種留意不是流程，它需要一個沒被困在重複訊息裡的人。",
    example: "Agent 接住了重複的詢問之後，員工才有空抬頭。",
    side: "L",
  },
  {
    num: "02",
    en: "Preparing",
    zh: "準備",
    desc: "在他抵達之前，把房間的窗開一條縫，把熱茶準備好。準備，是 hospitality 最被低估的動作。",
    example: "Agent 把蛛絲馬跡整理成 service opportunity，員工去準備那杯茶。",
    side: "R",
  },
  {
    num: "03",
    en: "Judging",
    zh: "判斷",
    desc: "「這位客人此刻適合被搭話嗎？」「現在這個 surprise 該升級成什麼？」判斷，是員工不可被取代的核心。",
    example: "Agent 把 candidate 與信號交給員工，員工決定下一步。",
    side: "L",
  },
  {
    num: "04",
    en: "Surprising",
    zh: "驚喜",
    desc: "好的驚喜不是 SOP，是「剛剛好」。它需要對人的理解，而不只是對房型的理解。",
    example: "Agent 不發明驚喜。它把背景線索遞給能做出驚喜的人。",
    side: "R",
  },
  {
    num: "05",
    en: "Recovering",
    zh: "修復",
    desc: "當事情出錯，旅人想要的不是模板道歉。他想要被認真對待、被理解、被修復。",
    example: "Agent 偵測到不滿，把整段對話交回給員工——不再假裝有解。",
    side: "L",
  },
  {
    num: "06",
    en: "Caring",
    zh: "關心",
    desc: "Caring 是一種無法被產品化的東西。但你可以為它，騰出時間。",
    example: "Agent 接管不需要溫度的訊息，讓員工把溫度留給需要的時刻。",
    side: "R",
  },
];

export function FieldNotes() {
  return (
    <section id="human-parts" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02" en="Human Parts" zh="把人留給人" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream">
                Ando 不是用來
                <span className="text-cream/45">取代旅館人員</span>。
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25] text-cream mt-6">
                它是用來
                <span className="text-amber-soft"> 把時間還給他們</span>，
                <br />
                讓他們去做只有人能做的六件事。
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-16">
            <Reveal delay={0.3}>
              <p className="margin-note">
                The agent handles communication.
                <br />
                The hotel delivers hospitality.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32 relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-amber-soft/10 hidden md:block" />

          <ul className="space-y-24 md:space-y-32">
            {verbs.map((v, i) => {
              const left = v.side === "L";
              return (
                <li key={v.num} className="relative">
                  <Reveal delay={0.05 * (i % 4)}>
                    <div
                      className={`md:grid md:grid-cols-12 md:gap-10 ${
                        left ? "" : "md:[direction:rtl]"
                      }`}
                    >
                      <div
                        className={`md:col-span-6 ${left ? "" : "md:[direction:ltr]"} relative`}
                      >
                        <div className="card-soft lift rounded-sm p-7 md:p-9 relative">
                          <div className="absolute -top-3 left-7 px-3 py-1 bg-ink-deep border border-amber-soft/15">
                            <span className="num text-amber-soft/70 text-[0.72rem]">
                              human · {v.num}
                            </span>
                          </div>
                          <h3 className="display text-3xl md:text-[2rem] text-cream mt-3 leading-snug">
                            {v.en}
                          </h3>
                          <p className="zh-light text-cream/55 mt-1">{v.zh}</p>
                          <p className="zh body-prose-zh text-[0.98rem] mt-6">
                            {v.desc}
                          </p>
                          <div className="mt-6 pl-5 border-l-2 border-amber-soft/40">
                            <p className="eyebrow mb-2">How the agent helps</p>
                            <p className="zh body-prose-zh text-cream/75 text-[0.98rem]">
                              {v.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-32 md:mt-40">
          <Reveal>
            <p className="pullquote text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.5] text-cream max-w-4xl">
              「Agent 處理溝通。
              <br />
              旅館遞出款待。
              <br />
              系統，把重複的判斷變成可被傳承的制度。」
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
