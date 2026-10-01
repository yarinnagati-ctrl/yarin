// האתר מוגש מ-GitHub Pages תחת תת-נתיב https://yarinnagati-ctrl.github.io/yarin/
// ולא משורש הדומיין, אז צריך basePath כדי שנכסי /_next וכל שאר הקישורים יפנו למקום הנכון.
// בסביבת פיתוח מקומית ניתן לדרוס עם NEXT_PUBLIC_BASE_PATH="" כדי להגיש משורש "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/yarin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  // sitemap.xml/robots.txt כבר משתמשים ב-URL-ים עם "/" בסוף (כמו /gallery/), וזו גם
  // המוסכמה הקיימת בשורש הריפו (gallery/index.html) — עדיף על פני gallery.html שטוח.
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // סביבת ה-preview של Base44 ניגשת ל-dev server דרך מתחם חיצוני — צריך לאפשר את ה-origin.
  allowedDevOrigins: process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? ["3000-" + process.env.BASE44_PUBLIC_HOST_SUFFIX]
    : [],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
  },
};

export default nextConfig;
