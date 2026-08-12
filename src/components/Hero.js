import Link from "next/link";
import StockPhoto from "./StockPhoto";
import PinnedSection from "./PinnedSection";
import { heroImages } from "@/lib/photos";

// שכבת תמונות רקע מלאה שמתחלפת בדעיכה איטית (fade), תמונה אחת בכל פעם, ברצף אינסופי.
const SLOT_SECONDS = 8;
const CYCLE_SECONDS = SLOT_SECONDS * heroImages.length;

function BackgroundSlideshow() {
  return (
    <div className="absolute inset-0">
      {heroImages.map((image, i) => (
        <div
          key={i}
          style={{
            animationDuration: `${CYCLE_SECONDS}s`,
            animationDelay: `${-(i * SLOT_SECONDS)}s`,
          }}
          className="animate-fade-slide absolute inset-0"
        >
          <StockPhoto
            src={image}
            alt="עבודת גימור לדוגמה"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      {/* הכהיה הדרגתית כדי שהטקסט הלבן יישאר קריא מעל התמונות */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
    </div>
  );
}

export default function Hero() {
  return (
    <PinnedSection
      id="hero"
      zIndex={1}
      className="flex h-[100svh] min-h-[600px] items-end overflow-hidden bg-ink"
    >
      <BackgroundSlideshow />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pb-24">
        <p className="heading-glow eyebrow text-sm font-semibold text-accent sm:text-base">
          נגרות בהתאמה אישית · עבודות בטון · חיפויי קיר
        </p>
        <h1 className="font-heading mt-5 max-w-3xl text-6xl leading-[1.05] text-white sm:text-8xl lg:text-9xl">
          ירין עבודות גימור בע&quot;מ
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-white/75 sm:text-lg">
          {/* תוכן דמו להחלפה */}
          עבודות גמר לפרויקטים פרטיים, מסחריים וציבוריים — מהתכנון ועד לגימור
          הסופי.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/#quote"
            className="border border-white/70 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-ink"
          >
            לבקשת הצעת מחיר
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-semibold text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
          >
            לצפייה בפרויקטים ←
          </Link>
        </div>
      </div>
    </PinnedSection>
  );
}
