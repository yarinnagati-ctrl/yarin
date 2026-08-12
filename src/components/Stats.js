"use client";

import { useEffect, useRef, useState } from "react";

// תוכן דמו להחלפה — מספרים לדוגמה, להחליף בנתונים אמיתיים של העסק.
const stats = [
  { label: "שנות ניסיון", value: 12, suffix: "+" },
  { label: "פרויקטים שהושלמו", value: 150, suffix: "+" },
  { label: "לקוחות מרוצים", value: 90, suffix: "+" },
  { label: "ערים בהן פעלנו", value: 8, suffix: "+" },
];

const DURATION_MS = 1400;

function useCountUp(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function StatItem({ stat, active }) {
  const value = useCountUp(stat.value, active);

  return (
    <div className="flex flex-col items-center gap-2 px-6 py-10 text-center sm:py-0">
      <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="heading-glow eyebrow text-sm text-accent sm:text-base">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-[2] bg-ink py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-white/10 px-6 sm:divide-x sm:divide-x-reverse md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
