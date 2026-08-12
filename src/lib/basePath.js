// next/link ו-next/image מוסיפים את ה-basePath אוטומטית, אבל src גולמי (עבור <Image>,
// useTexture וכו') לא — צריך להוסיף אותו ידנית. ראו next.config.mjs.
export function withBasePath(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
