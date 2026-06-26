import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ando — 為旅宿打造的 AI 服務夥伴",
  description:
    "Ando 是為旅宿打造的 AI 服務夥伴。它幫飯店回覆訊息、照顧旅程、發現服務機會，讓員工把時間留給真正有溫度的 hospitality。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="paper-grain">{children}</body>
    </html>
  );
}
