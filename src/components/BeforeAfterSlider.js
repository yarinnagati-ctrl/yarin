"use client";

import { useState } from "react";
import { IconArrows } from "./icons";

// סליידר גרירה להשוואת "לפני" ו"אחרי". פועל ב-LTR פנימית (מוסכמה ויזואלית מוכרת),
// גם בתוך אתר RTL — כמו בכל אתרי תיק העבודות המקבילים.
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "לפני",
  afterLabel = "אחרי",
  className = "",
}) {
  const [value, setValue] = useState(50);

  return (
    <div
      dir="ltr"
      className={`relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-border shadow-sm ${className}`}
    >
      <div className="absolute inset-0">{after}</div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        {before}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90"
        style={{ left: `${value}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-accent-dark shadow-lg">
          <IconArrows className="h-4 w-4" />
        </div>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
        {afterLabel}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label={`השוואת ${beforeLabel} ו${afterLabel}`}
        className="ba-slider absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
