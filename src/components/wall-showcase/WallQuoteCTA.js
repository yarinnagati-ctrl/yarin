"use client";

import { useState } from "react";
import { IconCheck } from "../icons";

// גרסה מצומצמת ושקופה של בקשת הצעת מחיר — "קופצת" מעל תמונת הקיר המושלם
// בסיום ההתקנה. רק שני שדות חיוניים (שם + טלפון), פאנל זכוכית שקוף במקום
// כרטיס אטום, כך שהחיפוי נשאר גלוי מאחורי הטופס.
export default function WallQuoteCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full rounded-2xl border border-white/20 bg-black/25 p-6 text-center backdrop-blur-md sm:p-10">
      <h2 className="font-heading text-2xl text-white sm:text-4xl">
        בקשת הצעת מחיר
      </h2>
      <p className="mt-2 text-sm text-white/70">
        תוכן דמו להמחשה — הטופס אינו מחובר עדיין לשליחה אמיתית
      </p>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
            <IconCheck className="h-7 w-7" />
          </div>
          <p className="text-lg font-semibold text-white">הפנייה "נשלחה" בהצלחה</p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-2 border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            חזרה לטופס
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-white/70">שם מלא</span>
              <input
                type="text"
                required
                placeholder="ישראל ישראלי"
                className="border border-white/30 bg-white/10 px-3 py-2.5 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-white/70">טלפון</span>
              <input
                type="tel"
                required
                placeholder="050-0000000"
                dir="ltr"
                className="border border-white/30 bg-white/10 px-3 py-2.5 text-right text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 bg-white px-6 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors duration-300 hover:bg-white/85"
          >
            שליחת בקשה
          </button>
        </form>
      )}
    </div>
  );
}
