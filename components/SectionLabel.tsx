import type { ReactNode } from "react";

export function SectionLabel({
  index,
  en,
  zh,
  className = "",
}: {
  index?: string;
  en?: string;
  zh?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {index && <span className="num text-[0.72rem]">{index}</span>}
      <div className="h-px flex-1 max-w-[3rem] bg-amber-soft/30" />
      <div className="flex items-baseline gap-3">
        {en && <span className="eyebrow">{en}</span>}
        {zh && <span className="zh-light text-cream/40 text-[0.78rem] tracking-wider2">{zh}</span>}
      </div>
    </div>
  );
}

export function ChapterMark({
  num,
  title,
  zh,
}: {
  num: string;
  title: string;
  zh?: string;
}) {
  return (
    <div className="flex items-start gap-6">
      <span className="num pt-2 text-amber-soft/60">{num}</span>
      <div>
        <h3 className="display text-2xl md:text-3xl text-cream">{title}</h3>
        {zh && <p className="zh-light text-cream/55 mt-1 text-[0.95rem]">{zh}</p>}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
