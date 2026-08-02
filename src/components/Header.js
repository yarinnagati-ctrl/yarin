"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/#about", label: "אודות" },
  { href: "/#services", label: "שירותים" },
  { href: "/gallery", label: "גלריה" },
  { href: "/#before-after", label: "לפני ואחרי" },
  { href: "/#testimonials", label: "המלצות" },
  { href: "/#quote", label: "הצעת מחיר" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="פתח תפריט"
          aria-expanded={open}
          className="group p-2"
        >
          <span
            className="font-accent text-2xl italic tracking-wide text-white transition-colors group-hover:text-accent-soft"
          >
            Menu
          </span>
        </button>
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.14em] text-white"
        >
          {/* TODO: לוגו */}
          ירין עבודות גימור בע&quot;מ
        </Link>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/60"
        />
      )}

      <nav
        aria-label="תפריט ראשי"
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col gap-1 bg-ink p-8 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="סגור תפריט"
          className="mb-8 self-start p-2 text-2xl leading-none text-white/60 hover:text-white"
        >
          ×
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-lg text-white/80 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        {/* TODO: מספר טלפון אמיתי */}
        <a
          href="tel:+972500000000"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-lg border-t border-white/15 px-3 pt-6 text-lg font-semibold text-white hover:text-accent-soft"
        >
          צור קשר
        </a>
      </nav>
    </header>
  );
}
