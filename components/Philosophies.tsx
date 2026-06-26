"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Mechanism = {
  num: string;
  en: string;
  zh: string;
  headline: string;
  body: string;
  details: { label: string; zh: string }[];
};

const mechanisms: Mechanism[] = [
  {
    num: "I",
    en: "Memory",
    zh: "記憶",
    headline: "Governed service intelligence.",
    body: "不是把旅人講過的話都收進資料庫。系統會分清楚：哪些是當下對話、哪些是趨勢信號、哪些是這趟旅程的 artifact、哪些是員工確認過的記憶、哪些是旅館自己的制度知識。旅人的資料不是旅館的資產，是一份 consent-aware 的託付。",
    details: [
      { label: "Temporary conversation context", zh: "當下對話脈絡" },
      { label: "Current engagement signal", zh: "當前互動信號" },
      { label: "Trip-level artifact", zh: "旅程級 artifact" },
      { label: "Staff note", zh: "員工備註" },
      { label: "Candidate memory", zh: "候選記憶" },
      { label: "Active memory", zh: "已啟用記憶" },
      { label: "Institutional hotel knowledge", zh: "旅館制度知識" },
      { label: "Deleted or suppressed data", zh: "已刪除 / 已壓制" },
    ],
  },
  {
    num: "II",
    en: "Conversation",
    zh: "對話",
    headline: "Purposeful, bounded, and adaptive.",
    body: "Ando 的對話不是等問題的客服 bot。每一次互動，都有一個 governed objective——幫助訂房、回答實務、引導抵達、收集 feedback、發現一個個人化機會。完成之後，就退場。它不會因為「可以說」而繼續說。",
    details: [
      { label: "Core journey touchpoints", zh: "旅程觸點（hotel-approved）" },
      { label: "Traveler-triggered conversations", zh: "旅人觸發對話" },
      { label: "Dynamic small talk & receptivity", zh: "讀空氣的小聊" },
      { label: "Purposeful conversation objectives", zh: "目的明確的對話目標" },
    ],
  },
  {
    num: "III",
    en: "Safety",
    zh: "安全",
    headline: "Correctness first. Humans remain the heroes.",
    body: "對旅館來說，省時間很值錢。但正確、安全、信任，更值錢。任何牽涉錢、優惠、退款、補償、即時房況、voucher、commercial exception 的請求，都必須走 verified tool 或員工審核。Agent 不協商，不發明，不在低信心時假裝。",
    details: [
      { label: "Money & discounts", zh: "金額與優惠" },
      { label: "Refunds & compensation", zh: "退款與補償" },
      { label: "Live rates & availability", zh: "即時房況與費率" },
      { label: "Voucher validity", zh: "voucher 有效性" },
      { label: "Booking confirmation", zh: "訂房確認" },
      { label: "Commercial exception", zh: "商業例外" },
    ],
  },
];

export function Philosophies() {
  return (
    <section id="mechanisms" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="04" en="Three Mechanisms" zh="三個機制" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 display text-[clamp(2rem,4vw,3.2rem)] leading-[1.18] text-cream max-w-4xl">
            這個產品的可能性，
            <br />
            被三個機制
            <span className="text-amber-soft"> 同時撐住</span>。
          </h2>
        </Reveal>

        <ul className="mt-24 md:mt-32 space-y-24 md:space-y-32">
          {mechanisms.map((m, i) => (
            <li key={m.num}>
              <Reveal delay={0.05 * i}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  <div className="md:col-span-3">
                    <span className="display text-6xl md:text-7xl text-amber-soft/40">
                      {m.num}
                    </span>
                    <h3 className="display text-3xl md:text-[2.2rem] mt-5 text-cream">
                      {m.en}
                    </h3>
                    <p className="zh-light text-cream/55 mt-1 text-lg">{m.zh}</p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.3] text-cream">
                      {m.headline}
                    </p>
                    <div className="hair mt-8 max-w-md" />
                    <p className="body-prose-zh mt-8 max-w-prose2">{m.body}</p>

                    <div className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
                      {m.details.map((d) => (
                        <div
                          key={d.label}
                          className="px-4 py-2.5 card-line lift"
                        >
                          <p className="display text-cream text-[0.95rem]">
                            {d.label}
                          </p>
                          <p className="zh-light text-cream/45 text-xs mt-0.5">
                            {d.zh}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
