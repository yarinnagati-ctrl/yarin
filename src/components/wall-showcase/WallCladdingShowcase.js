"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BACKDROP_ASPECT } from "./wallRect";
import WallQuoteCTA from "./WallQuoteCTA";

// ה-Canvas של Three.js נטען רק בצד הלקוח — לא נחוץ ב-SSR/ב-export הסטטי.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// קטע "חוויית ההתקנה" — מוצג בתחתית דף הבית, לפני הפוטר.
// הקיר (תמונה) נעול לחלוטין ולא זז לעולם — רק הקרשים מעליו מונפשים.
// בסיום ההתקנה "קופצת" פנימה בקשת הצעת המחיר, מעל התמונה המושלמת.
export default function WallCladdingShowcase() {
  const wrapperRef = useRef(null);
  const pinRef = useRef(null);
  const progressRef = useRef({ value: 0 });

  const [revealed, setRevealed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // תצוגת נגישות: מי שמעדיף פחות תנועה מקבל מיד את הקיר המושלם, בלי pin/scroll-jack.
  useEffect(() => {
    if (reducedMotion) {
      progressRef.current.value = 1;
      setRevealed(true);
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (!mounted || reducedMotion) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        // מרחק גלילה ארוך יותר — קצב איטי ויוקרתי יותר להתקנה
        end: "+=450%",
        pin: pinRef.current,
        scrub: 1.2,
        onUpdate: (self) => {
          progressRef.current.value = self.progress;
          setRevealed((prev) => {
            const next = self.progress > 0.96;
            return prev === next ? prev : next;
          });
        },
      });

      return () => trigger.kill();
    }, wrapperRef);

    return () => ctx.revert();
  }, [mounted, reducedMotion]);

  return (
    <section
      ref={wrapperRef}
      className="relative bg-ink"
      style={{ height: reducedMotion ? undefined : "550vh" }}
    >
      <div
        ref={pinRef}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-ink"
      >
        <div
          className="relative w-full max-w-[1900px]"
          style={{ aspectRatio: BACKDROP_ASPECT }}
        >
          {/* רקע פוטוריאליסטי סטטי — הקיר, החדר, התאורה והעציץ נעולים לצמיתות */}
          <Image
            src="/images/wall-showcase/room-backdrop.jpg"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />

          {mounted && <Scene progressRef={progressRef} reducedMotion={reducedMotion} />}
        </div>

        {/* בקשת הצעת מחיר "קופצת" מעל הסצנה בסיום ההתקנה */}
        <div
          className={`absolute inset-0 flex items-center justify-center overflow-y-auto p-4 transition-all duration-1000 ease-out sm:p-8 ${
            revealed
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          <div className="w-full max-w-lg">
            <WallQuoteCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
