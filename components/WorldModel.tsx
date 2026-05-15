"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const entities = [
  { en: "Traveler", zh: "旅人" },
  { en: "Hotel", zh: "旅館" },
  { en: "Staff", zh: "員工" },
  { en: "Space", zh: "空間" },
  { en: "Local Community", zh: "在地社群" },
  { en: "Events", zh: "事件" },
  { en: "Journey State", zh: "旅程狀態" },
  { en: "Memory", zh: "記憶" },
  { en: "Personality", zh: "人格" },
  { en: "Service Capacity", zh: "服務量能" },
];

const relations = [
  { a: "Traveler", b: "Hotel", zh: "旅人 ↔ 旅館" },
  { a: "Traveler", b: "Traveler", zh: "旅人 ↔ 旅人" },
  { a: "Traveler", b: "Local", zh: "旅人 ↔ 在地" },
  { a: "Traveler", b: "City", zh: "旅人 ↔ 城市" },
  { a: "Hotel", b: "Community", zh: "旅館 ↔ 社群" },
  { a: "AI", b: "Spatial Identity", zh: "AI ↔ 空間人格" },
];

const states = [
  { en: "inspiration", zh: "被吸引" },
  { en: "planning", zh: "規劃" },
  { en: "anticipation", zh: "期待" },
  { en: "transit", zh: "移動中" },
  { en: "arrival", zh: "抵達" },
  { en: "exploration", zh: "探索" },
  { en: "exhaustion", zh: "疲憊" },
  { en: "social openness", zh: "社交開放" },
  { en: "deep night", zh: "深夜" },
  { en: "reflection", zh: "反思" },
  { en: "departure", zh: "離開" },
  { en: "afterglow", zh: "餘韻" },
];

function Constellation() {
  const radius = 220;
  const cx = 280;
  const cy = 240;
  return (
    <div className="relative w-full aspect-[7/6] max-w-2xl mx-auto">
      <svg viewBox="0 0 560 480" className="w-full h-full">
        <defs>
          <radialGradient id="dotg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A86A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#C9A86A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {entities.map((e, i) => {
          const a = (i / entities.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(a) * radius;
          const y = cy + Math.sin(a) * radius;
          return (
            <g key={e.en}>
              {entities.map((_, j) => {
                if (j <= i) return null;
                const a2 = (j / entities.length) * Math.PI * 2 - Math.PI / 2;
                const x2 = cx + Math.cos(a2) * radius;
                const y2 = cy + Math.sin(a2) * radius;
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={x}
                    y1={y}
                    x2={x2}
                    y2={y2}
                    stroke="#C9A86A"
                    strokeOpacity={0.06}
                    strokeWidth={0.5}
                  />
                );
              })}
            </g>
          );
        })}

        <circle cx={cx} cy={cy} r={64} fill="url(#dotg)" opacity={0.5} />
        <circle cx={cx} cy={cy} r={4} fill="#EFE7D6" opacity={0.9} />
        <text
          x={cx}
          y={cy + 24}
          textAnchor="middle"
          fontFamily="EB Garamond, serif"
          fontSize="14"
          fill="#EFE7D6"
          opacity={0.6}
          letterSpacing="0.18em"
        >
          ANDO
        </text>

        {entities.map((e, i) => {
          const a = (i / entities.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(a) * radius;
          const y = cy + Math.sin(a) * radius;
          return (
            <motion.g
              key={e.en}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.05 * i }}
            >
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="#C9A86A"
                strokeOpacity={0.18}
                strokeWidth={0.6}
              />
              <circle cx={x} cy={y} r={3.5} fill="#C9A86A" opacity={0.9} />
              <text
                x={x + (Math.cos(a) > 0 ? 12 : -12)}
                y={y + 4}
                textAnchor={Math.cos(a) > 0 ? "start" : "end"}
                fontFamily="EB Garamond, serif"
                fontSize="12"
                fill="#EFE7D6"
                opacity={0.85}
              >
                {e.en}
              </text>
              <text
                x={x + (Math.cos(a) > 0 ? 12 : -12)}
                y={y + 18}
                textAnchor={Math.cos(a) > 0 ? "start" : "end"}
                fontFamily="Noto Serif TC, serif"
                fontSize="10"
                fill="#C9A86A"
                opacity={0.55}
              >
                {e.zh}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

export function WorldModel() {
  return (
    <section id="world" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="05" en="System World Model" zh="系統世界觀模型" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream max-w-4xl">
            這不是架構圖。
            <br />
            <span className="text-cream/55">
              這是一張，旅館裡每一段關係互相牽動的圖。
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <Constellation />
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <p className="eyebrow mb-4">Core entities</p>
              <p className="zh-light text-cream/40 mb-6 tracking-wider2 text-xs">
                核心實體
              </p>
              <ul className="space-y-2">
                {entities.map((e) => (
                  <li
                    key={e.en}
                    className="flex items-baseline justify-between border-b border-amber-soft/8 pb-2"
                  >
                    <span className="display text-cream text-lg">{e.en}</span>
                    <span className="zh-light text-cream/50 text-sm">{e.zh}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-3">Relationship Graph</p>
              <h3 className="display text-3xl md:text-4xl text-cream">
                關係圖譜
              </h3>
              <p className="body-prose-zh mt-6">
                每一條關係，都是 Ando 觀察、記憶與行動的單位。
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relations.map((r, i) => (
                <Reveal key={r.zh} delay={0.04 * i}>
                  <li className="card-line p-5 lift">
                    <p className="display text-cream text-lg">
                      {r.a} <span className="text-amber-soft/70">↔</span> {r.b}
                    </p>
                    <p className="zh-light text-cream/45 text-sm mt-1">{r.zh}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 md:mt-40">
          <Reveal>
            <p className="eyebrow mb-3">Journey States</p>
            <h3 className="display text-3xl md:text-4xl text-cream">
              旅程狀態
            </h3>
            <p className="body-prose-zh mt-6 max-w-prose2">
              一段旅程，不是 check-in 與 check-out 兩個瞬間。
              它有十二種微小的、流動的、被忽略過太久的狀態。
            </p>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-x-3 gap-y-4 max-w-5xl">
            {states.map((s, i) => (
              <Reveal key={s.en} delay={0.04 * i}>
                <div className="px-5 py-3 card-line lift">
                  <p className="display text-cream text-base md:text-lg">
                    {s.en}
                  </p>
                  <p className="zh-light text-cream/45 text-xs mt-0.5">{s.zh}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
