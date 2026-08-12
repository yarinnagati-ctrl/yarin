// עוטף סקשן "כותרת ראשית" כך שהוא נשאר מוצמד לראש המסך לרגע לפני שהסקשן
// הבא גולש מעליו ומכסה אותו — אפקט "החלפת שקופית" בגלילה, בלי גלילה מקוננת.
export default function PinnedSection({
  id,
  zIndex,
  dwell = 18,
  className = "",
  children,
}) {
  return (
    <div
      className="pin-slide relative"
      style={{ minHeight: `calc(100svh + ${dwell}vh)` }}
    >
      <section
        id={id}
        className={`pin-slide-inner sticky top-0 min-h-[100svh] ${className}`}
        style={{ zIndex }}
      >
        {children}
      </section>
    </div>
  );
}
