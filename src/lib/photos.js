// תמונות מלאי (Pexels, רישיון חופשי לשימוש מסחרי) — תוכן דמו להחלפה בתמונות פרויקטים אמיתיות.
// כל תמונה מסומנת בתג "תוכן דמו" קטן על ידי StockPhoto.js.

const carpentry = [
  "https://images.pexels.com/photos/30216939/pexels-photo-30216939/free-photo-of-skilled-carpenters-at-work-in-dubai-workshop.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6790066/pexels-photo-6790066.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6790097/pexels-photo-6790097.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/37178416/pexels-photo-37178416/free-photo-of-carpenter-measuring-wooden-plank-in-workshop.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

// סדר: גס/לפני (2 ראשונות) -> מוקפד/אחרי (2 אחרונות)
const concrete = [
  "https://images.pexels.com/photos/37121405/pexels-photo-37121405/free-photo-of-construction-workers-smoothing-fresh-concrete-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/36833957/pexels-photo-36833957/free-photo-of-black-and-white-construction-site-with-concrete-forms.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/37763125/pexels-photo-37763125/free-photo-of-modern-architectural-interior-with-curved-staircase.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/31636027/pexels-photo-31636027/free-photo-of-modern-interior-architecture-with-concrete-design.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const pvc = [
  "https://images.pexels.com/photos/7045321/pexels-photo-7045321.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/207909/pexels-photo-207909.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6908566/pexels-photo-6908566.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const wallCladding = [
  "https://images.pexels.com/photos/17500796/pexels-photo-17500796/free-photo-of-exterior-staircase-and-stone-wall-cladding.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/27182597/pexels-photo-27182597/free-photo-of-a-building-with-wooden-slats-on-the-side.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/35698021/pexels-photo-35698021/free-photo-of-textured-stone-wall-in-natural-lighting.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const site = [
  "https://images.pexels.com/photos/36847988/pexels-photo-36847988/free-photo-of-construction-worker-pouring-concrete-on-job-site.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2383649/pexels-photo-2383649.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/26107204/pexels-photo-26107204/free-photo-of-a-builder-standing-next-to-a-hole-filled-with-concrete.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const finishedInterior = [
  "https://images.pexels.com/photos/33685845/pexels-photo-33685845/free-photo-of-modern-minimalist-luxury-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/34964854/pexels-photo-34964854/free-photo-of-elegant-modern-living-room-interior-design.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export const categories = {
  carpentry,
  concrete,
  pvc,
  wallCladding,
  site,
  finishedInterior,
};

// Hero — תמונת רקע מלאה שמתחלפת בין 4 סלוטים
export const heroImages = [carpentry[0], concrete[2], pvc[0], wallCladding[0]];

// תמונה מייצגת אחת לכל תחום, לטאבים האינטראקטיביים ב-Services.js
export const services = {
  carpentry: carpentry[0],
  workshop: carpentry[1],
  concrete: concrete[3],
  pvc: pvc[0],
  wallCladding: wallCladding[0],
  finished: finishedInterior[0],
};

// תצוגה מקדימה של הגלריה בעמוד הבית
export const galleryPreview = [carpentry[2], concrete[0], pvc[1]];

// זוגות לפני/אחרי
export const beforeAfterPairs = [
  {
    title: "פילוס וריצוף אפוקסי",
    before: "/images/before-after/floor-before.jpg",
    after: "/images/before-after/floor-after.jpg",
    real: true,
  },
  { title: "חיפוי קיר", before: site[0], after: wallCladding[0] },
  { title: "עבודת נגרות", before: carpentry[2], after: carpentry[0] },
];

// בריכת תמונות לכל קטגוריה בגלריה המלאה (GalleryGrid.js)
export const galleryByCategory = {
  carpentry,
  workshop: carpentry,
  concrete,
  pvc,
  wallCladding,
};
