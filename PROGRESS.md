# Progress Log

Tracks the current state of work on gimur-site so we can pick up exactly where we left off.

## Status: 2026-07-22

- Verified the existing Next.js project (v16.2.10, Turbopack) runs correctly.
- Started the dev server (`npm run dev`) and opened it at http://localhost:3000.
- Agreed on a working style: always present a pool of options with a recommendation before making design/content/feature decisions, and always leave clearly marked spots for the user's own content.
- Agreed to maintain this file after each meaningful step so progress can be resumed precisely.

## Status: 2026-07-22 (update 2)

- Business: finishing works (עבודות גמר) contractor in the construction field.
- Desired feel: high quality, clean, professional, rounded/elegant font, plus one "cool" standout feature.
- User will bring all real content (text, photos, business details) tomorrow — we design and build together at that point.
- Prepared below: design options and a content checklist to run through when the user returns.

## Design options to present tomorrow

**Font (rounded, clean, professional, good Hebrew support):**
- Rubik — recommended. Distinctly rounded letterforms, modern, very common for quality IL business sites, pairs well with a minimal layout.
- Assistant — slightly more neutral/corporate, also clean and rounded.
- Varela Round — very rounded/soft, friendlier feel, less "corporate" than Rubik.

**Color palette (clean/professional, construction-finishing vibe):**
- Warm neutral: off-white / soft beige background, charcoal text, one warm accent (terracotta or muted gold) — feels premium and material-driven.
- Cool minimal: white/light-gray background, charcoal, single accent in deep blue or emerald — feels corporate/trustworthy.
- Dark premium: charcoal/near-black sections mixed with white, gold or copper accent — feels high-end/boutique.

**"Cool feature" candidates:**
- Before/After slider — recommended. Interactive drag slider comparing a project's before/after photos; it's the single most persuasive feature for a finishing-work business and doubles as portfolio proof.
- Filterable project gallery (by service type: ריצוף / צבע / גבס / קרמיקה וכו').
- Floating WhatsApp quick-contact button.
- Scroll-reveal animations on sections/gallery.
- Quote/estimate request form with service checkboxes.

## Content checklist to gather from the user tomorrow

- שם העסק (סופי) + סלוגן/תמצית קצרה
- לוגו קיים? אם לא — צבעים/סגנון מועדפים
- טלפון / וואטסאפ ליצירת קשר, אימייל
- אזורי שירות (ערים/אזור בארץ)
- רשימת שירותים/התמחויות (למשל: ריצוף, טיח, צבע, גבס, קרמיקה, שיש, פרקט...)
- טקסט "אודות" — שנות ניסיון, מס' פרויקטים, מה מייחד אותם
- תמונות איכותיות של פרויקטים (רצוי זוגות לפני/אחרי)
- המלצות לקוחות (ציטוט + שם, אפשר גם דירוג כוכבים)
- רישיונות/הסמכות אם רלוונטי
- קישורים לרשתות חברתיות (אינסטגרם/פייסבוק)
- שעות פעילות, וכתובת אם רלוונטי

## Status: 2026-07-22 (update 3)

- Decided site structure: hybrid — one-page home (anchored sections) + a separate full `/gallery` page.
- Home page section order: Hero → Services → Gallery (preview) → About → Testimonials → Contact.
- Built the structural skeleton (no final font/palette/feature yet — all placeholder content marked with TODO comments and visible Hebrew placeholder text so it's obvious what still needs real content):
  - `src/app/layout.js` — root layout, `lang="he" dir="rtl"`, Header + Footer wrap all pages.
  - `src/components/Header.js`, `Footer.js` — nav links to home sections + `/gallery`.
  - `src/components/Hero.js`, `Services.js`, `GalleryPreview.js`, `About.js`, `Testimonials.js`, `Contact.js` — one per home section, each with clearly marked placeholder content.
  - `src/app/page.js` — assembles the home sections in order.
  - `src/app/gallery/page.js` — full gallery page with static category chips (filtering not wired up yet) and a placeholder project grid.
- Removed the default Geist font wiring from `layout.js`/`globals.css` since font choice (Rubik / Assistant / Varela Round) is still pending — body currently falls back to Arial/Helvetica.
- Verified with `npm run build` (succeeds) and visually in the browser (RTL layout, nav, all sections, gallery page) — all correct.

## Status: 2026-07-22 (update 4)

- Feature decided: floating WhatsApp bubble (fixed bottom-left, visible on every page/section) — added `src/components/WhatsAppButton.js`, rendered from `layout.js` so it persists across all pages.
- Reduced "צור קשר" redundancy per user feedback: removed the duplicate CTA button from `Hero.js` (now just one "לגלריית הפרויקטים" button) and removed the duplicate WhatsApp button from `Contact.js` (now one heading, one call button, and a note pointing to the floating bubble).
- Added real content: `Services.js` now lists the business's actual specialties (no longer placeholder) —
  - עבודות ריצוף וחיפוי: התקנת פרקטים, שטיחים מקיר לקיר וחיפויי PVC
  - עבודות בטון: יציקות מדה מתפלסת ועבודות בטון יצוק באתר
  - נגרות ובתי מלאכה: החברה רשומה גם תחת סיווג של בתי מלאכה לעץ
- Verified all changes visually in the browser (bubble stays fixed while scrolling, services show real text, contact section simplified).
- WhatsApp number in `WhatsAppButton.js` and `Contact.js` is still a placeholder (`972500000000`) — needs the real number.

## Status: 2026-07-22 (update 5)

- Removed the "צור קשר" link from the header nav (`Header.js`) per user request — the nav had it plus the standalone Contact section, which felt redundant. Nav is now: ראשי / שירותים / גלריה / אודות / המלצות. The Contact section stays as the one dedicated, separate section at the bottom of the home page; reachable by scrolling or via the floating WhatsApp bubble.

## Status: 2026-07-22 (update 6)

- Reversed the previous approach per user clarification: contact is no longer a standalone page section. Instead:
  - Deleted `src/components/Contact.js` entirely and removed it from `src/app/page.js`. Home page sections are now: Hero → Services → Gallery (preview) → About → Testimonials → Footer (no Contact section).
  - `Header.js` now has a visually distinct "צור קשר" button (black pill, separate from the plain-text nav links) that calls the placeholder phone number directly (`tel:+972500000000`).
  - The floating WhatsApp bubble (`WhatsAppButton.js`, from `layout.js`) is unchanged and still the persistent quick-contact option on every page.
- Verified with `npm run build` (succeeds) and visually in the browser: nav shows the standalone "צור קשר" button, Testimonials now flows straight into the Footer with no contact section in between.

## Status: 2026-07-22 (update 7)

- Renamed the "ראשי" nav link to "דף הבית" in `Header.js`, linking straight to `/`. Confirmed (already true by Next.js file-based routing) that the site root `/` serves the home page directly — anyone landing on the domain lands on the home page by default. `/gallery` is the only separate route.
- Note: no git repository is set up for this project yet, and Git itself isn't installed on this machine — flagged to the user, still waiting on how they want the project backed up/saved (git init + commit vs. a zip backup vs. something else).

## Status: 2026-07-24

- Rebuilt `Hero.js` as a full-bleed 3-column skeleton, referencing the structure of https://tbsc.co.il/ (user-provided example — layout/structure only, not their content/images): left and right columns are tall image strips that auto-scroll vertically in opposite directions (CSS keyframe animation, `animate-scroll-up` / `animate-scroll-down` added to `globals.css`, respects `prefers-reduced-motion`), center column is a fixed white panel with a framed placeholder logo box + business-name placeholder. Each side column currently holds 4 placeholder "תמונה N" slots (duplicated internally for a seamless loop) — TODO: swap in real project photos and the real logo once sent.
- Scoped down per user request ("רק את השלד") — skeleton/structure only, no header/nav changes. Deliberately did NOT duplicate a "צור קשר" pill + hamburger menu on top of the hero (like tbsc.co.il has) since this site already has a persistent `Header` with nav + contact button, and we'd previously removed redundant contact CTAs per user feedback — flagged this deviation to the user.
- Side image columns are hidden on mobile (`hidden md:block`) — only the center logo/name shows on small screens, section height drops from 85vh to 60vh. Not yet explicitly confirmed with the user; may revisit.
- Verified `npm run build` succeeds and visually in Chrome (both columns animate in opposite directions, logo/name centered, rest of page unaffected).
- Still waiting on: the actual logo file and project photos to drop into the placeholder slots.

## Status: 2026-07-24 (update 2)

- Replaced the horizontal nav bar in `Header.js` with a right-side sliding drawer menu, per user request: hamburger icon (3 lines) in the header, only nav item now inline; clicking it slides in a fixed right-side panel (`translate-x-full` → `translate-x-0`, with a dark overlay behind it that also closes on click) listing, in the requested order: דף הבית, אודות, שירותים, גלריה, המלצות, then צור קשר (separated with a border, styled as the standout/last item, still `tel:` placeholder). `Header.js` is now a client component (`"use client"` + `useState`) to support the open/close toggle.
- Hit a real bug from the Next.js 16 Turbopack dev server on this project (the kind of thing `AGENTS.md` warns to watch for): after editing `Header.js`, the new Tailwind utility classes (`inset-y-0`, `translate-x-full`, `w-72`, `shadow-xl`, etc.) were silently missing from the served CSS chunk even after multiple recompiles/reloads — confirmed via inspecting the actual served `globals*.css` in the browser. Fix was deleting the `.next` cache folder and restarting `npm run dev` from a clean state. **If a future style change visually doesn't seem to apply during dev even though the file/JSX looks correct, try a clean `.next` cache + dev server restart before assuming the code is wrong.**
- Verified `npm run build` succeeds and confirmed visually in Chrome: drawer closed by default, opens on hamburger click with correct order and working close (× button and overlay click).

## Status: 2026-07-24 (update 3)

- Reordered home page sections in `src/app/page.js` to match the sidebar drawer order exactly: Hero (דף הבית) → About (אודות) → Services (שירותים) → GalleryPreview (גלריה) → Testimonials (המלצות). Previously Services came before About. `צור קשר` stays a header/drawer action (no matching page section, same as before). Verified `npm run build` succeeds and visually in Chrome, scrolling through the new order.

## Status: 2026-07-24 (update 4)

- Changed the Hero side-column image motion per user feedback — replaced the continuous vertical scroll/marquee with a slow crossfade: each column now shows one image at a time, stacked absolutely, cycling through a fade-out/fade-in with the incoming image gently rising into place (`fade-slide` keyframes in `globals.css`, replacing the old `scroll-up`/`scroll-down` ones). 4 images per column, 8s each (32s full cycle), right column offset by 4s from the left so they don't crossfade in sync. Respects `prefers-reduced-motion` (shows static image, no animation).
- Verified `npm run build` succeeds and confirmed visually in Chrome that both columns fade through images slowly and independently.

## Status: 2026-07-24 (update 5)

- Synced the Hero crossfade per user feedback: both side columns now transition at the exact same moment (identical `animationDelay` per slot, no more time offset between columns), instead of each column fading independently. To avoid showing the same photo in both columns at once, the right column's image *sequence* is shifted by half the cycle (`sequenceOffset = 2` out of 4 images) rather than its timing — so at every moment the two columns are always mid-transition together but always display two different images.
- Verified `npm run build` succeeds and confirmed visually in Chrome across multiple transitions: columns fade in/out together, image numbers never match between the two sides.

## Status: 2026-07-24 (update 6)

- Backed up the project per user request: created `C:\Users\User\gimur-site-backup-2026-07-24.zip` (all source/config files — `src/`, `public/`, `package.json`, `PROGRESS.md`, etc. — excluding `node_modules` and `.next`, matching `.gitignore`). User explicitly chose a quick zip snapshot over setting up Git for now (Git still isn't installed on this machine).
- If more backups are made later, use the same dated-filename pattern (`gimur-site-backup-YYYY-MM-DD.zip`) in `C:\Users\User\`.

## Next steps

- Waiting on the user to send the logo + project photos to replace the Hero placeholders.
- Still pending decisions: font (Rubik recommended / Assistant / Varela Round), color palette (warm neutral recommended / cool minimal / dark premium).
- Still need real content from the user per the checklist below (business name, real phone/WhatsApp number, service areas, about text, project photos, testimonials), then swap it into the remaining TODO-marked spots.
- Gallery category filter buttons are currently static (non-functional) — wire up real filtering once there are real project categories/photos.
- Still open: how the user wants the project saved/backed up (see note above).
- Confirm mobile hero behavior (side columns hidden vs. some visible) once the user sees it on a phone-sized screen.
