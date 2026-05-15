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
          <p className="eyebrow mb-12">Closing thought · 結語</p>
        </Reveal>

        <div className="space-y-12">
          <Reveal delay={0.1}>
            <p className="display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.3] text-cream">
              Ando 想做的，
              <br />
              不是更聰明的旅館軟體。
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.35] text-cream/85">
              而是嘗試讓科技
              <br />
              重新幫助空間
              <span className="text-amber-soft"> 變得有人味</span>。
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="body-prose-zh max-w-prose2">
              不是透過模擬人類。
              <br />
              而是透過：
              記憶、時機、情境、氛圍、延續，與關心。
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <p className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.4] text-cream/85 mt-16">
              一間旅館的靈魂，
              <br />
              從來不是 automation 建立的。
              <br />
              而是被累積下來的
              <span className="text-amber-soft"> moments</span>。
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <p className="pullquote text-[1.2rem] md:text-[1.4rem] leading-[1.7] text-cream/75 mt-12 max-w-prose2">
              「Ando 想做的，只是讓這些 moments，
              <br />
              不要那麼容易消失。」
            </p>
          </Reveal>
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal>
            <div className="hair max-w-md" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-[clamp(3.2rem,8vw,6.4rem)] leading-[1] text-cream mt-12 tracking-tight">
              ANDO
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="display text-xl md:text-2xl text-cream/80 mt-6">
              A living hospitality system.
            </p>
            <p className="zh text-cream/60 mt-2 text-lg">
              一個活著的旅宿系統。
            </p>
          </Reveal>
        </div>

        <div className="mt-24 flex items-end justify-between text-xs">
          <span className="eyebrow-dim">v0.1 · Internal · 內部閱讀版</span>
          <span className="zh-light text-cream/30 tracking-wider2">
            Anna &amp; the King — and the quiet rooms that come after.
          </span>
        </div>
      </div>
    </section>
  );
}
