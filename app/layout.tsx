import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ando — A Living Hospitality System",
  description:
    "Ando 是一個 AI 原生的旅宿系統。一個讓旅館開始擁有靈魂的系統。Internal manifesto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="grain vignette">
        {children}
      </body>
    </html>
  );
}
