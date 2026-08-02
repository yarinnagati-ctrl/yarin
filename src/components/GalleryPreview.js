import Link from "next/link";
import StockPhoto from "./StockPhoto";
import ScrollReveal from "./ScrollReveal";
import { galleryPreview } from "@/lib/photos";

// תוכן דמו להחלפה — להחליף בתמונות פרויקטים אמיתיות (מומלץ: זוגות לפני/אחרי)
const previewItems = [
  { title: "פרויקט נגרות", category: "נגרות בהתאמה אישית", photo: galleryPreview[0] },
  { title: "פרויקט בטון", category: "עבודות בטון", photo: galleryPreview[1] },
  { title: "פרויקט חיפוי", category: "חיפויי קיר PVC", photo: galleryPreview[2] },
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal
          as="div"
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-heading text-3xl text-accent sm:text-4xl">
              פרויקטים נבחרים
            </h2>
            <p className="mt-3 text-sm text-foreground-muted">
              תוכן דמו להחלפה — תצוגה מקדימה מתוך גלריית הפרויקטים
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden shrink-0 border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background sm:block"
          >
            לכל הפרויקטים
          </Link>
        </ScrollReveal>
      </div>

      {/* רשת פרויקטים מקיר לקיר — בהשראת מבנה הגלריה של a-weiss.co.il */}
      <div className="mt-12 grid grid-cols-1 gap-[2px] sm:grid-cols-3">
        {previewItems.map(({ title, category, photo }, i) => {
          const isCarpentry = category === "נגרות בהתאמה אישית";
          return (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="group relative aspect-[4/5] overflow-hidden bg-surface">
                <div
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                    isCarpentry ? "p-6 sm:p-10" : ""
                  }`}
                >
                  <StockPhoto src={photo} alt={title} />
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="heading-glow eyebrow text-sm font-semibold text-accent">
                    {category}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 text-center sm:hidden">
        <Link
          href="/gallery"
          className="inline-block border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
        >
          לכל הפרויקטים
        </Link>
      </div>
    </section>
  );
}
