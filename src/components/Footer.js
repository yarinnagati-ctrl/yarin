export default function Footer() {
  return (
    <footer className="bg-ink text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-white">
            מאיר סרביאן בע&quot;מ
          </p>
          <p className="mt-4 max-w-xs">
            {/* תוכן דמו להחלפה */}
            נגרות בהתאמה אישית · עבודות בטון · חיפויי קיר · עבודות גמר
            לפרויקטים פרטיים, מסחריים וציבוריים
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            יצירת קשר
          </span>
          {/* TODO: פרטי קשר אמיתיים */}
          <a href="tel:+972500000000" dir="ltr" className="text-right text-white/80 hover:text-white">
            050-0000000
          </a>
          <a href="mailto:info@example.com" className="text-white/80 hover:text-white">
            info@example.com
          </a>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            עקבו אחרינו
          </span>
          {/* TODO: קישורים לרשתות חברתיות */}
          <div className="flex gap-4">
            <a href="#" aria-label="פייסבוק" className="text-white/60 hover:text-white">Facebook</a>
            <a href="#" aria-label="אינסטגרם" className="text-white/60 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs">
          {/* TODO: מספר עוסק/ח.פ אם רלוונטי */}
          © {new Date().getFullYear()} מאיר סרביאן בע&quot;מ. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
