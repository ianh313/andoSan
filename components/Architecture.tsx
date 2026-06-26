"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const accumulates = [
  { en: "Confirmed hotel knowledge", zh: "已確認的旅館知識" },
  { en: "Staff-approved service patterns", zh: "員工背書的服務模式" },
  { en: "Repeated staff corrections", zh: "反覆出現的員工修正" },
  { en: "Improved response strategy", zh: "更恰當的回應策略" },
  { en: "Safer commercial boundaries", zh: "更安全的商業邊界" },
  { en: "Better local recommendation logic", zh: "更可信的在地推薦邏輯" },
  { en: "Better timing for follow-up", zh: "更恰當的追蹤時機" },
  { en: "Better understanding of when not to engage", zh: "更懂得何時不要打擾" },
];

export function Architecture() {
  return (
    <section id="asset" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="08" en="The Long Asset" zh="長期資產" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] text-cream">
                旅館真正的長期資產，
                <br />
                不是
                <span className="text-cream/45"> raw traveler data</span>
                。
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="display text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.3] text-cream mt-8">
                而是
                <span className="text-amber-soft">「這間旅館學到了什麼，
                <br />
                可以把人服務得更好」</span>
                的那份累積。
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:pt-10">
            <Reveal delay={0.3}>
              <p className="margin-note">
                Traveler memory is consent-aware, retrievable only under policy,
                and subject to correction, deletion, suppression and expiry.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <Reveal>
            <p className="eyebrow mb-3">What the hotel accumulates over time</p>
            <p className="zh-light text-cream/45 mb-10 tracking-wider2 text-xs">
              旅館長期累積下來的，是這些
            </p>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {accumulates.map((a, i) => (
              <Reveal key={a.en} delay={0.03 * i}>
                <li className="group flex items-start gap-5 py-6 border-b border-amber-soft/10">
                  <span className="num text-amber-soft/50 text-xs pt-2 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="display text-cream text-xl md:text-[1.35rem]">
                        {a.en}
                      </h3>
                      <span className="zh-light text-cream/45 text-sm whitespace-nowrap text-right">
                        {a.zh}
                      </span>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal>
            <div className="card-soft p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-soft/5 blur-3xl rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative">
                <p className="pullquote text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.4] text-cream max-w-4xl">
                  「It should feel like the best front-desk colleague's instincts
                  <br />
                  are gradually becoming part of the hotel's operating system.」
                </p>
                <p className="margin-note mt-6 max-w-3xl">
                  最好的前台同事腦中的直覺，會慢慢，變成這間旅館作業系統的一部分。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
