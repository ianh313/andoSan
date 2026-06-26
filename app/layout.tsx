import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ando — A Governed Hospitality Agent System",
  description:
    "Ando is a governed hospitality agentic system for independent hotels. The agent handles communication. The hotel delivers hospitality. The system turns repeated judgment into institutional knowledge.",
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
