import ScrollReveal from "./ScrollReveal";
import PinnedSection from "./PinnedSection";
import { IconStar, IconQuote } from "./icons";

// תוכן דמו להחלפה — להחליף בהמלצות אמיתיות של לקוחות (ציטוט + שם, אפשר גם דירוג כוכבים)
const testimonials = [
  {
    quote:
      "התהליך היה מתואם ומקצועי מהיום הראשון — כל שלב בעבודות הגמר לוּוה בהסבר ברור ובעמידה בזמנים.",
    name: "לקוח פרטי, פרויקט נגרות",
    rating: 5,
  },
  {
    quote:
      "עבודת הבטון והחיפוי בוצעה בסטנדרט גבוה ובתשומת לב לפרטים הקטנים. התוצאה נראית בדיוק כמו שתוכנן.",
    name: "מנהל פרויקט, שטח מסחרי",
    rating: 5,
  },
  {
    quote:
      "שילוב הנגרות וחיפויי הקיר תחת גורם אחד חסך המון תיאומים מיותרים והתוצאה הסופית אחידה ומרשימה.",
    name: "לקוח פרטי, פרויקט שיפוץ",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <PinnedSection id="testimonials" zIndex={6} className="bg-background-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal as="div">
          <h2 className="font-heading text-3xl text-accent sm:text-4xl">
            מה הלקוחות אומרים
          </h2>
          <p className="mt-3 text-sm text-foreground-muted">
            תוכן דמו להחלפה
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 border-t border-border pt-12 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <blockquote className="h-full">
                <IconQuote className="h-6 w-6 text-accent" />
                <p className="mt-4 text-base leading-7 text-foreground">
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <footer className="heading-glow text-base font-semibold text-accent">
                    {t.name}
                  </footer>
                  <div className="flex gap-0.5 text-accent" aria-label={`דירוג ${t.rating} מתוך 5`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <IconStar key={s} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PinnedSection>
  );
}
