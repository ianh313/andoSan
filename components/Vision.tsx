"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const qualities = [
  {
    en: "Contextual",
    zh: "情境化",
    desc: "理解時間、天氣、疲憊度、心境與所處空間。",
  },
  {
    en: "Memory-driven",
    zh: "記憶驅動",
    desc: "記得旅人喜歡的咖啡，記得三年前那場雨。",
  },
  {
    en: "Personality-aware",
    zh: "人格感知",
    desc: "知道一間旅館是安靜的、慢的、不喧嘩的。",
  },
];

const verbs = [
  { en: "Accompany travelers", zh: "陪伴旅人" },
  { en: "Amplify spatial personality", zh: "放大空間人格" },
  { en: "Sustain relationships", zh: "延續關係" },
  { en: "Bridge local culture", zh: "串聯地方文化" },
  { en: "Let a place feel inhabited", zh: "讓空間更像真正存在的地方" },
];

export function Vision() {
  return (
    <section id="vision" className="section relative">
      <div className="absolute inset-0 -z-10">
        <div className="ember bg-amber-soft/8 w-[40vw] h-[40vw] top-[10%] right-[-5%] opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="03" en="Vision" zh="願景" />
        </Reveal>

        <div className="mt-16 max-w-4xl">
          <Reveal delay={0.1}>
            <p className="display text-[clamp(2.2rem,5vw,4rem)] leading-[1.12] text-cream/45">
              Ando 不是飯店助手。
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="display text-[clamp(2.2rem,5vw,4rem)] leading-[1.12] mt-4 text-cream">
              它是一個
              <span className="text-amber-soft">活著的</span>
              <br />
              旅宿互動層。
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="zh-light text-cream/45 mt-6 text-lg tracking-wider2">
              a living hospitality layer
            </p>
          </Reveal>
        </div>

        <div className="mt-28 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {qualities.map((q, i) => (
            <Reveal key={q.en} delay={0.1 * i}>
              <div className="card-line lift p-8 h-full">
                <span className="num text-amber-soft/60 text-xs">
                  0{i + 1}
                </span>
                <h3 className="display text-2xl md:text-[1.8rem] mt-5 text-cream">
                  {q.en}
                </h3>
                <p className="zh-light text-cream/55 mt-1 text-base">{q.zh}</p>
                <div className="hair mt-6" />
                <p className="zh body-prose-zh text-[0.96rem] mt-6">
                  {q.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-32 md:mt-44 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4">What Ando does</p>
              <h3 className="display text-3xl md:text-4xl text-cream leading-[1.2]">
                Ando 將會 —
              </h3>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-1">
              {verbs.map((v, i) => (
                <Reveal key={v.en} delay={0.06 * i}>
                  <li className="group flex items-baseline justify-between gap-6 py-5 border-b border-amber-soft/10">
                    <span className="zh display text-cream text-[1.4rem] md:text-[1.6rem]">
                      {v.zh}
                    </span>
                    <span className="eyebrow-dim group-hover:text-amber-soft/80 transition-colors duration-700 text-right">
                      {v.en}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal>
            <div className="card-soft p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-soft/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <p className="eyebrow mb-3">A fictional department</p>
                  <h3 className="display text-[1.8rem] md:text-[2.2rem] text-cream leading-[1.2]">
                    Traveler
                    <br />
                    Success
                    <br />
                    Department
                  </h3>
                  <p className="zh-light text-amber-soft/80 mt-3 tracking-wider2 text-sm">
                    旅人成功部門
                  </p>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="body-prose-zh">
                    Ando 像是一個藏在旅館裡，從未被列入組織架構，
                    卻每一晚都在工作的部門。
                  </p>
                  <p className="body-prose-zh mt-6">
                    它不是完全的人類。
                    <br />
                    也不只是一個 AI。
                  </p>
                  <p className="pullquote mt-8 text-amber-soft/90 text-xl md:text-2xl leading-[1.55]">
                    「它是空間意識的延伸。」
                  </p>
                  <p className="margin-note mt-3">
                    An extension of spatial consciousness.
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
