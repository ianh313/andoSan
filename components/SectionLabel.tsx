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
      <div className="h-px flex-1 max-w-[3rem] bg-amber-deep/30" />
      <div className="flex items-baseline gap-3">
        {en && <span className="eyebrow">{en}</span>}
        {zh && (
          <span className="zh-light text-ink-mute/80 text-[0.78rem] tracking-wider2">
            {zh}
          </span>
        )}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
