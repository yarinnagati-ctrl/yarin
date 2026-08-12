// האתר מוגש מ-GitHub Pages תחת תת-נתיב https://yarinnagati-ctrl.github.io/yarin/
// ולא משורש הדומיין, אז צריך basePath כדי שנכסי /_next וכל שאר הקישורים יפנו למקום הנכון.
const basePath = "/yarin";

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
