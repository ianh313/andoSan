"use client";

import { Reveal } from "./Reveal";

export function Closing() {
  return (
    <section id="closing" className="relative pt-32 pb-40 md:pt-44 md:pb-56 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0807] to-[#04040A]" />
        <div className="ember bg-amber-soft/10 w-[60vw] h-[60vw] top-[10%] left-[-15%] animate-emberpulse" />
        <div
          className="ember bg-burgundy-low/20 w-[40vw] h-[40vw] bottom-[-10%] right-[-10%] animate-emberpulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-12">The final principle · 最終原則</p>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <p className="display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.3] text-cream">
              The agent handles
              <span className="text-amber-soft"> communication</span>.
            </p>
            <p className="zh-light text-cream/55 mt-2 text-base tracking-wider2">
              Agent 負責溝通。
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.3] text-cream">
              The hotel delivers
              <span className="text-amber-soft"> hospitality</span>.
            </p>
            <p className="zh-light text-cream/55 mt-2 text-base tracking-wider2">
              旅館負責款待。
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.3] text-cream">
              The system turns
              <span className="text-amber-soft"> repeated judgment </span>
              into
              <span className="text-amber-soft"> institutional knowledge</span>.
            </p>
            <p className="zh-light text-cream/55 mt-2 text-base tracking-wider2">
              系統，把重複的判斷沉澱為制度知識。
            </p>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="hair max-w-md" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-prose-zh mt-12 max-w-prose2">
              Ando 不是要替代旅館的人，也不是要取代款待本身。
              <br />
              它只是嘗試讓一間獨立旅館裡，最稀有的東西——人的時間、人的判斷、
              人的注意力——能被花在它最值得被花的地方。
            </p>
          </Reveal>
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal>
            <h2 className="display text-[clamp(3.2rem,8vw,6.4rem)] leading-[1] text-cream tracking-tight">
              ANDO
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display text-xl md:text-2xl text-cream/80 mt-6">
              A governed hospitality agent system.
            </p>
            <p className="zh text-cream/60 mt-2 text-lg">
              為獨立旅館打造的，可被治理的款待 agent 系統。
            </p>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-wrap items-end justify-between text-xs gap-y-4">
          <span className="eyebrow-dim">v0.2 · Internal · 0 to 1 specification</span>
          <span className="zh-light text-cream/30 tracking-wider2">
            Not a chatbot. Not marketing automation. Not a free-form autonomous agent.
          </span>
        </div>
      </div>
    </section>
  );
}
