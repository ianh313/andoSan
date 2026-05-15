"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Note = {
  id: string;
  zh: string;
  observation: string;
  insight: string;
  side?: "L" | "R";
  margin?: string;
};

const notes: Note[] = [
  {
    id: "2.1",
    zh: "重複性的訂房與詢問負擔",
    observation:
      "每天，最常出現的訊息其實大同小異——房價、空房、check-in 時間、寵物政策、停車位置。重複的問題，消耗了人最敏感、最寶貴的時間。",
    insight:
      "旅客不一定需要真人回覆。他們需要的是即時感、被接住的感覺、自然、清楚、有溫度。",
    side: "L",
    margin: "夜班 23:47 — 第七次回覆相同問題",
  },
  {
    id: "2.2",
    zh: "訂房體驗太像交易",
    observation:
      "從 OTA 到結帳頁，沒有任何一秒，旅館真正出現在旅客的世界裡。表單，金額，按鈕，確認。一切都很順——也很冷。",
    insight: "真正的 hospitality，其實從訂房就開始了。",
    side: "R",
  },
  {
    id: "2.3",
    zh: "旅程是斷裂的",
    observation:
      "旅客在訂房前、入住中、離開後，分別在三個不相連的系統裡：OTA、PMS、Email。沒有一個地方記得他們是誰。",
    insight: "Hospitality 最大的問題之一，是關係無法延續。",
    side: "L",
    margin: "他第三次來，我們仍然不認得他。",
  },
  {
    id: "2.4",
    zh: "智慧設備沒有靈魂",
    observation:
      "房內有平板、有 Alexa、有 QR code、有 LINE 群組。功能不缺。但沒有一個能讓人感覺：「這個地方在意我。」",
    insight: "問題不是缺乏智慧設備，而是缺乏統一且有情感的 interaction layer。",
    side: "R",
  },
  {
    id: "2.5",
    zh: "Feedback 蒐集不自然",
    observation:
      "退房三天後寄一封問卷，問你「願意推薦嗎？」——這是 NPS 的形式，不是體驗的延續。真實的反饋早在當下就出現過，只是沒人接住。",
    insight: "真正好的 feedback，應該發生在體驗正在發生的時候。",
    side: "L",
  },
  {
    id: "2.6",
    zh: "服務量能其實每天都不同",
    observation:
      "週二的下午與週六的晚上，是兩種完全不同的旅館。但服務 SOP 假裝它們一樣。",
    insight: "最好的 hospitality，不是固定 SOP，而是在正確時機投入正確的溫度。",
    side: "R",
    margin: "週六 21:30 — 全員忙線，無法主動關心",
  },
  {
    id: "2.7",
    zh: "Push notification 太像廣告",
    observation:
      "「歡迎入住！」「請填寫問卷！」「下次再來享受 9 折！」——這些訊息在最不對的時機出現，又佯裝關心。",
    insight: "人們不是討厭資訊，而是討厭沒有 context 的資訊。",
    side: "L",
  },
  {
    id: "2.8",
    zh: "關係結束得太快",
    observation:
      "退房那一刻，旅館與旅人之間的關係，幾乎瞬間蒸發。下一次連繫，是六個月後一封折扣信。",
    insight: "Hospitality 最大的浪費之一，是 relationship 沒有被延續。",
    side: "R",
  },
  {
    id: "2.9",
    zh: "營運洞察高度依賴人的直覺",
    observation:
      "「最近的客人感覺比較疲憊。」「這個月怎麼很多人問附近的小診所。」——這些直覺對的時候很對，但無法傳給下一個人。",
    insight:
      "如果 AI 長期理解房客、空間、情緒與需求，它或許能開始形成 hospitality intuition。",
    side: "L",
    margin: "直覺，是難以交班的資產。",
  },
  {
    id: "2.10",
    zh: "Google Review 回覆缺乏靈魂",
    observation:
      "公開的回覆，往往像是 SOP 範本：「感謝您的入住，期待再次見面。」沒人看，也沒人記得。",
    insight: "Review reply 不只是客服，而是空間與世界的持續對話。",
    side: "R",
  },
];

export function FieldNotes() {
  return (
    <section id="field-notes" className="section relative">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02" en="Field Notes" zh="現場筆記" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-cream">
                來自
                <span className="text-amber-soft/95">安娜與國王</span>
                的現場筆記。
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-prose-zh mt-8 max-w-prose2">
                這些不是設計文件，是一本攤開的筆記本。
                <br />
                記錄一間位於嘉義的泰式沉浸感旅館裡，
                <br className="hidden md:block" />
                日常運作中，被反覆撞見的十件事。
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-16">
            <Reveal delay={0.3}>
              <p className="margin-note">
                Anna &amp; the King — a small Thai-immersive hotel in Chiayi.
                A slow place. A place that holds people for a while.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 md:mt-32 relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-amber-soft/10 hidden md:block" />

          <ul className="space-y-24 md:space-y-32">
            {notes.map((n, i) => {
              const left = n.side === "L";
              return (
                <li key={n.id} className="relative">
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
                              note · {n.id}
                            </span>
                          </div>
                          <h3 className="zh display text-2xl md:text-[1.7rem] text-cream mt-3 leading-snug">
                            {n.zh}
                          </h3>
                          <p className="body-prose-zh text-[0.98rem] mt-5">
                            {n.observation}
                          </p>
                          <div className="mt-6 pl-5 border-l-2 border-amber-soft/40">
                            <p className="eyebrow mb-2">Insight</p>
                            <p className="pullquote text-cream text-[1.12rem] leading-[1.7]">
                              「{n.insight}」
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`md:col-span-5 ${
                          left ? "md:col-start-8" : "md:col-start-1 md:[direction:ltr]"
                        } mt-6 md:mt-16`}
                      >
                        {n.margin && (
                          <Reveal delay={0.15}>
                            <p className="margin-note max-w-xs">
                              — {n.margin}
                            </p>
                          </Reveal>
                        )}
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
