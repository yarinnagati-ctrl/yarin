import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "גלריית פרויקטים - ירין עבודות גימור בע\"מ",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <p className="heading-glow eyebrow text-center text-sm font-semibold text-accent sm:text-base">
        גלריה
      </p>
      <h1 className="font-heading mt-4 text-center text-5xl sm:text-7xl">
        הפרויקטים שלנו
      </h1>
      <p className="mt-4 text-center text-sm text-foreground-muted">
        תוכן דמו להחלפה — סננו לפי תחום כדי לראות דוגמאות רלוונטיות
      </p>

      <GalleryGrid />
    </section>
  );
}
