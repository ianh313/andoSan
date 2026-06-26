"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { content } from "@/lib/content";

export function IdealCustomerSection() {
  const c = content.fit;
  return (
    <section id="fit" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="07" en="Who Ando is for" zh="適合誰" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-12 display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.2] max-w-4xl">
            <span className="zh block">{c.titleA}</span>
            <span className="zh block">
              <span className="text-amber-deep">{c.titleB}</span>
            </span>
            <span className="zh block">{c.titleC}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="zh body-prose-zh mt-12 max-w-prose2">{c.body}</p>
        </Reveal>

        <ul className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
          {c.examples.map((e, i) => (
            <Reveal key={e} delay={0.06 * i}>
              <li className="card-line lift p-7 md:p-8 h-full">
                <span className="num text-amber-deep/55 text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="zh display text-ink text-[1.2rem] md:text-[1.3rem] leading-[1.5] mt-5">
                  {e}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <div className="mt-20 md:mt-28 max-w-3xl">
            <p className="zh display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.5] text-ink">
              {c.closingA}
            </p>
            <p className="zh display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.5] mt-3 text-ink">
              但你相信，
              <span className="text-amber-deep">每位旅客都值得被好好對待</span>
              。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
