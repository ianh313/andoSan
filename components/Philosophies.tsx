"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Principle = {
  num: string;
  zh: string;
  en: string;
  body: string;
};

const principles: Principle[] = [
  {
    num: "01",
    zh: "Ando 不是 chatbot。",
    en: "Ando is not a chatbot.",
    body: "Chatbot 等於問答。Ando 是一個一直在場的角色——它知道現在是幾點、外面下著怎樣的雨、誰剛剛 check-in。問答只是它最表淺的一層。",
  },
  {
    num: "02",
    zh: "AI 不應該取代人，而是放大 hospitality。",
    en: "AI should amplify hospitality, not replace it.",
    body: "前台、夜班、廚房、清潔——他們的判斷、他們的記憶、他們的好心情，是這間旅館真正的資產。Ando 是放大器，不是替代品。",
  },
  {
    num: "03",
    zh: "Hospitality 的核心是分寸感。",
    en: "Hospitality is the art of measure.",
    body: "什麼時候出現，什麼時候安靜；什麼話該說，什麼話該收。所有壞的服務，幾乎都是分寸感壞了。所有好的 AI 體驗，也將是。",
  },
  {
    num: "04",
    zh: "一間旅館的靈魂來自人。",
    en: "A hotel's soul comes from people.",
    body: "AI 不創造靈魂。它只是把那些靈魂沒被聽見、沒被記住、沒被延續的部分，輕輕接住。",
  },
  {
    num: "05",
    zh: "Context 比 intelligence 更重要。",
    en: "Context matters more than intelligence.",
    body: "對的時機說一句最普通的話，遠勝於在錯誤的時機說一句很聰明的話。Ando 的核心不是更聰明的模型，而是更敏銳的脈絡。",
  },
];

export function Philosophies() {
  return (
    <section id="philosophy" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="04" en="Core Philosophies" zh="核心哲學" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            五條被刻進系統裡的規則。
            <br />
            <span className="text-cream/45">Five rules carved into the system.</span>
          </h2>
        </Reveal>

        <ul className="mt-24 md:mt-32 space-y-20 md:space-y-28">
          {principles.map((p, i) => (
            <li key={p.num} className="relative">
              <Reveal delay={0.05 * i}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
                  <div className="md:col-span-2 md:pt-2">
                    <span className="display text-5xl md:text-6xl text-amber-soft/40">
                      {p.num}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.18] text-cream">
                      <span className="zh">{p.zh}</span>
                    </h3>
                    <p className="zh-light text-cream/45 mt-3 tracking-wider2 text-sm">
                      {p.en}
                    </p>
                    <div className="hair mt-8 max-w-md" />
                    <p className="body-prose-zh mt-8 max-w-prose2">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
