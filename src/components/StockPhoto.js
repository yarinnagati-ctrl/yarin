import Image from "next/image";

// תמונת מלאי (stock) לשימוש זמני עד להחלפה בתמונות פרויקטים אמיתיות של העסק.
export default function StockPhoto({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-surface/85 px-2.5 py-1 text-[10px] font-semibold text-foreground-muted shadow-sm backdrop-blur">
        תוכן דמו
      </span>
    </div>
  );
}
