"use client";

import { useState } from "react";
import {
  IconCarpentry,
  IconWorkshop,
  IconConcrete,
  IconPVC,
  IconWallCladding,
  IconProjects,
} from "./icons";
import ScrollReveal from "./ScrollReveal";
import StockPhoto from "./StockPhoto";
import { services as servicePhotos } from "@/lib/photos";

// תוכן דמו להחלפה — טקסטים שיווקיים לדוגמה, ללא נתונים אמיתיים (שנות ניסיון/פרויקטים/לקוחות).
const services = [
  {
    title: "נגרות בהתאמה אישית",
    description:
      "תכנון וייצור פריטי עץ מותאמים במידה ובעיצוב אישי — מארונות אחסון ועד אלמנטים מיוחדים, בליווי צמוד מהרעיון ועד ההתקנה.",
    Icon: IconCarpentry,
    photo: servicePhotos.carpentry,
  },
  {
    title: "בתי מלאכה וייצור אלמנטים מיוחדים",
    description:
      "ייצור מוקפד של אלמנטים ייחודיים בבית המלאכה שלנו — פתרון מדויק לכל דרישה שאינה נכנסת לתבנית הסטנדרטית.",
    Icon: IconWorkshop,
    photo: servicePhotos.workshop,
  },
  {
    title: "עבודות בטון וגמרי בטון",
    description:
      "יציקות בטון וגימורים אדריכליים — משטחים חלקים, בטון חשוף ופתרונות עיצוביים שמשלבים חוזק עם מראה נקי ומודרני.",
    Icon: IconConcrete,
    photo: servicePhotos.concrete,
  },
  {
    title: "חיפויי קיר PVC",
    description:
      "פתרונות חיפוי PVC איכותיים ועמידים, מתקינים במהירות ובנקיות — מתאימים לחללים פנימיים ולסביבות רטובות כאחד.",
    Icon: IconPVC,
    photo: servicePhotos.pvc,
  },
  {
    title: "חיפויי קירות כלליים",
    description:
      "מגוון פתרונות חיפוי לקירות פנים וחוץ, בהתאמה לאופי הפרויקט ולסגנון העיצובי המבוקש — מגימור עדין ועד מראה בולט.",
    Icon: IconWallCladding,
    photo: servicePhotos.wallCladding,
  },
  {
    title: "עבודות גמר לפרויקטים פרטיים, מסחריים וציבוריים",
    description:
      "ליווי עבודות הגמר מתחילתן ועד סופן, בכל סוגי הפרויקטים — דירות פרטיות, שטחי מסחר ומבנים ציבוריים, בסטנדרט אחיד וגבוה.",
    Icon: IconProjects,
    photo: servicePhotos.finished,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="border-t border-border bg-background-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal as="div">
          <h2 className="font-heading text-3xl text-accent sm:text-4xl">
            התחומים שלנו
          </h2>
          <p className="mt-3 max-w-xl text-sm text-foreground-muted">
            לחצו על תחום כדי לראות פרטים נוספים
          </p>
        </ScrollReveal>

        <ScrollReveal
          as="div"
          delay={80}
          className="mt-14 grid gap-10 md:grid-cols-2 md:items-stretch md:gap-14"
        >
          {/* פאנל תמונה + תיאור */}
          <div className="order-2 flex flex-col overflow-hidden bg-surface md:order-1">
            <div
              key={current.title}
              className="animate-tab-fade-in aspect-[4/3] w-full"
            >
              <StockPhoto src={current.photo} alt={current.title} />
            </div>
            <div key={`${current.title}-text`} className="animate-tab-fade-in pt-6">
              <h3 className="font-heading heading-glow text-3xl text-accent">{current.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground-muted">
                {current.description}
              </p>
            </div>
          </div>

          {/* רשימת טאבים */}
          <div className="order-1 flex flex-col divide-y divide-border border-y border-border md:order-2">
            {services.map(({ title, Icon }, i) => {
              const isActive = i === active;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-4 px-2 py-5 text-right transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "border-accent text-accent"
                        : "border-border text-foreground-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`text-base font-semibold ${isActive ? "heading-glow text-accent" : ""}`}
                  >
                    {title}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
