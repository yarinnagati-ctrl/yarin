"use client";

import { useState } from "react";
import StockPhoto from "./StockPhoto";
import {
  IconCarpentry,
  IconWorkshop,
  IconConcrete,
  IconPVC,
  IconWallCladding,
} from "./icons";
import { galleryByCategory } from "@/lib/photos";

const categories = [
  { label: "נגרות בהתאמה אישית", Icon: IconCarpentry, key: "carpentry" },
  { label: "בתי מלאכה וייצור אלמנטים", Icon: IconWorkshop, key: "workshop" },
  { label: "עבודות בטון וגמרי בטון", Icon: IconConcrete, key: "concrete" },
  { label: "חיפויי קיר PVC", Icon: IconPVC, key: "pvc" },
  { label: "חיפויי קירות כלליים", Icon: IconWallCladding, key: "wallCladding" },
];

const ALL = "הכל";

// תוכן דמו להחלפה — להחליף בפרויקטים אמיתיים (רצוי זוגות לפני/אחרי)
const projects = Array.from({ length: 10 }, (_, i) => {
  const category = categories[i % categories.length];
  const pool = galleryByCategory[category.key];
  return {
    id: i + 1,
    title: `פרויקט ${category.label}`,
    category: category.label,
    photo: pool[Math.floor(i / categories.length) % pool.length],
  };
});

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered =
    activeCategory === ALL
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-border py-5">
        {[ALL, ...categories.map((c) => c.label)].map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setActiveCategory(label)}
            aria-pressed={activeCategory === label}
            className={`text-base font-semibold transition-colors duration-200 ${
              activeCategory === label
                ? "heading-glow text-accent underline decoration-accent underline-offset-8"
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map(({ id, title, category, photo }) => (
          <div
            key={id}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
              <StockPhoto src={photo} alt={title} />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="heading-glow eyebrow text-sm font-semibold text-accent">
                {category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
