import ScrollReveal from "./ScrollReveal";

// תוכן דמו להחלפה — ניסוחים כלליים, לא נתונים/הסמכות ספציפיים
const values = [
  {
    title: "ליווי מקצה לקצה",
    text: "מהתכנון הראשוני ועד לגימור הסופי — ליווי צמוד בכל שלב בפרויקט.",
  },
  {
    title: "כל התחומים תחת קורת גג אחת",
    text: "נגרות, בטון וחיפויי קיר בתיאום מלא, ללא צורך בריבוי קבלני משנה.",
  },
  {
    title: "סטנדרט גימור אחיד",
    text: "תשומת לב לפרטים הקטנים כך שהתוצאה הסופית נראית מתוכננת כמכלול אחד.",
  },
  {
    title: "התאמה אישית",
    text: "פתרונות מותאמים לאופי הפרויקט, לתקציב וללוחות הזמנים של הלקוח.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal as="div" className="max-w-3xl">
          <h2 className="font-heading text-3xl text-accent sm:text-4xl">
            אודות
          </h2>
          <p className="mt-2 text-xs text-foreground-muted">
            תוכן דמו להחלפה
          </p>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            {/* TODO: טקסט אודות אמיתי - מה מייחד אתכם, תחומי ההתמחות, אזורי פעילות */}
            אנו מלווים פרויקטים מהתכנון ועד לגימור הסופי, ומשלבים תחת קורת גג
            אחת נגרות בהתאמה אישית, ייצור אלמנטים בבית המלאכה, עבודות בטון
            וחיפויי קיר — כך שהתוצאה נראית מתוכננת כמכלול אחד.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-x-8 gap-y-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <h3 className="font-heading heading-glow text-xl text-accent">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground-muted">
                {v.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
