"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { IconCheck } from "./icons";
import {
  IconCarpentry,
  IconWorkshop,
  IconConcrete,
  IconPVC,
  IconWallCladding,
} from "./icons";

const serviceOptions = [
  { label: "נגרות בהתאמה אישית", Icon: IconCarpentry },
  { label: "בתי מלאכה וייצור אלמנטים", Icon: IconWorkshop },
  { label: "עבודות בטון", Icon: IconConcrete },
  { label: "חיפויי PVC", Icon: IconPVC },
  { label: "חיפויי קירות כלליים", Icon: IconWallCladding },
];

export default function QuoteForm() {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleService(label) {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((s) => s !== label)
        : [...prev, label]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="quote"
      className="relative z-[7] border-t border-border bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl px-6">
        <ScrollReveal as="div" className="text-center">
          <h2 className="font-heading text-3xl text-accent sm:text-4xl">
            בקשת הצעת מחיר
          </h2>
          <p className="mt-3 text-sm text-foreground-muted">
            תוכן דמו להמחשה — הטופס אינו מחובר עדיין לשליחה אמיתית
          </p>
        </ScrollReveal>

        <ScrollReveal
          as="div"
          delay={80}
          className="mt-12 border border-border bg-surface p-6 sm:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                <IconCheck className="h-7 w-7" />
              </div>
              <p className="heading-glow text-xl font-semibold text-accent">הפנייה "נשלחה" בהצלחה</p>
              <p className="max-w-sm text-sm text-foreground-muted">
                זהו דמו להמחשה בלבד — לאחר חיבור לטופס אמיתי, פנייה כזו תגיע
                ישירות אליכם באימייל או בוואטסאפ.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setSelected([]);
                }}
                className="mt-2 border border-foreground/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                חזרה לטופס
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground-muted">
                    שם מלא
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="ישראל ישראלי"
                    className="border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-foreground focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground-muted">
                    טלפון
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="050-0000000"
                    dir="ltr"
                    className="border border-border bg-background px-3 py-2.5 text-right text-foreground placeholder:text-foreground-muted/60 focus:border-foreground focus:outline-none"
                  />
                </label>
              </div>

              <div>
                <span className="text-sm font-medium text-foreground-muted">
                  אילו שירותים מעניינים אתכם?
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {serviceOptions.map(({ label, Icon }) => {
                    const isSelected = selected.includes(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleService(label)}
                        aria-pressed={isSelected}
                        className={`flex items-center gap-2 border px-4 py-2 text-sm transition-colors duration-200 ${
                          isSelected
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-foreground-muted hover:border-foreground/50 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-foreground-muted">
                  פרטים נוספים (לא חובה)
                </span>
                <textarea
                  rows={3}
                  placeholder="ספרו לנו בקצרה על הפרויקט..."
                  className="resize-none border border-border bg-background px-3 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-foreground focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="bg-ink px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-ink-soft"
              >
                שליחת בקשה
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
