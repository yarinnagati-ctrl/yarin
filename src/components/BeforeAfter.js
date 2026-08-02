import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";
import StockPhoto from "./StockPhoto";
import ScrollReveal from "./ScrollReveal";
import { beforeAfterPairs } from "@/lib/photos";

// תמונת פרויקט אמיתית — ללא תגית "תוכן דמו" (בניגוד ל-StockPhoto)
function ProjectPhoto({ src, alt }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image src={src} alt={alt} fill sizes="33vw" className="object-cover" />
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal as="div">
          <h2 className="font-heading text-3xl text-accent sm:text-4xl">
            לפני ואחרי
          </h2>
          <p className="mt-3 max-w-xl text-sm text-foreground-muted">
            תוכן דמו להחלפה — גררו את הסליידר כדי להשוות בין מצב הפתיחה
            לתוצאה הסופית
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {beforeAfterPairs.map(({ title, before, after, real }, i) => {
            const Photo = real ? ProjectPhoto : StockPhoto;
            return (
            <ScrollReveal key={title} delay={i * 100}>
              <div>
                <BeforeAfterSlider
                  before={<Photo src={before} alt={`${title} - לפני`} />}
                  after={<Photo src={after} alt={`${title} - אחרי`} />}
                />
                <p className="heading-glow mt-4 text-base font-semibold text-accent">
                  {title}
                </p>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
