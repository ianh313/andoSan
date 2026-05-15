"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const dimensions = [
  { left: { en: "Quiet", zh: "安靜" }, right: { en: "Expressive", zh: "外放" }, pos: 0.28 },
  { left: { en: "Healing", zh: "療癒" }, right: { en: "Energetic", zh: "活力" }, pos: 0.32 },
  { left: { en: "Local", zh: "在地" }, right: { en: "Cosmopolitan", zh: "都市" }, pos: 0.38 },
  { left: { en: "Elegant", zh: "優雅" }, right: { en: "Playful", zh: "玩心" }, pos: 0.48 },
  { left: { en: "Social", zh: "社交" }, right: { en: "Introspective", zh: "內省" }, pos: 0.6 },
];

const variables = [
  "語氣",
  "幽默感",
  "主動程度",
  "推薦哲學",
  "情感溫度",
  "節奏感",
  "互動密度",
];

const cities = [
  {
    name: "Taipei",
    zh: "台北",
    qualities: ["快速", "密集", "夜生活感"],
    description: "在這裡，Ando 比較像一位熟悉巷弄的老朋友。它不急著替你規劃，但你想拐進哪條街，它都跟得上。",
  },
  {
    name: "Chiayi",
    zh: "嘉義",
    qualities: ["慢", "安靜", "有留白感"],
    description: "在這裡，Ando 更安靜一點。它說的話比較少，停頓比較多，像是希望你也能慢下來看看這座城。",
  },
];

function Slider({
  left,
  right,
  pos,
  index,
}: {
  left: { en: string; zh: string };
  right: { en: string; zh: string };
  pos: number;
  index: number;
}) {
  return (
    <div className="relative">
      <div className="flex items-baseline justify-between mb-3">
        <div>
          <p className="display text-cream text-lg">{left.en}</p>
          <p className="zh-light text-cream/45 text-xs">{left.zh}</p>
        </div>
        <div className="text-right">
          <p className="display text-cream text-lg">{right.en}</p>
          <p className="zh-light text-cream/45 text-xs">{right.zh}</p>
        </div>
      </div>
      <div className="relative h-px bg-amber-soft/15">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.05 * index, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="absolute inset-0 bg-amber-soft/40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + 0.05 * index }}
          style={{ left: `${pos * 100}%` }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-soft ring-4 ring-amber-soft/15"
        />
      </div>
    </div>
  );
}

export function Personality() {
  return (
    <section id="personality" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="06" en="Personality System" zh="人格系統" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            每間旅館，
            <br />
            都應該擁有自己的
            <span className="text-amber-soft"> Ando 人格</span>。
          </h2>
        </Reveal>

        <div className="mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <p className="eyebrow mb-3">Tuning a soul</p>
              <p className="zh-light text-cream/45 mb-10 tracking-wider2 text-xs">
                為一個地方調出靈魂
              </p>
            </Reveal>
            <div className="space-y-10">
              {dimensions.map((d, i) => (
                <Reveal key={d.left.en} delay={0.05 * i}>
                  <Slider {...d} index={i} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              <div className="card-soft p-7 lift">
                <p className="eyebrow mb-2">Variables</p>
                <p className="zh-light text-cream/45 mb-6 text-xs tracking-wider2">
                  可調節變數
                </p>
                <ul className="space-y-3">
                  {variables.map((v, i) => (
                    <li
                      key={v}
                      className="flex items-baseline gap-3 zh body-prose-zh text-[0.98rem]"
                    >
                      <span className="num text-amber-soft/40 text-xs">
                        0{i + 1}
                      </span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-32 md:mt-40">
          <Reveal>
            <p className="eyebrow mb-3">City Identity</p>
            <h3 className="display text-3xl md:text-4xl text-cream">
              城市人格
            </h3>
            <p className="body-prose-zh mt-6 max-w-prose2">
              Ando 不只是旅館的人格，
              也是它所在城市的一段聲音。同一個系統，在不同城市裡，會有不同的呼吸節奏。
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cities.map((c, i) => (
              <Reveal key={c.name} delay={0.1 * i}>
                <div className="card-soft p-9 md:p-12 lift relative overflow-hidden h-full">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-soft/5 blur-3xl rounded-full" />
                  <div className="relative">
                    <p className="num text-amber-soft/60 text-xs">city · 0{i + 1}</p>
                    <h4 className="display text-4xl md:text-5xl text-cream mt-4">
                      {c.name}
                    </h4>
                    <p className="zh-light text-cream/50 mt-1">{c.zh}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.qualities.map((q) => (
                        <span
                          key={q}
                          className="px-3 py-1 zh-light text-xs text-amber-soft/85 border border-amber-soft/20"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                    <p className="body-prose-zh mt-8 text-[0.98rem]">
                      {c.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
