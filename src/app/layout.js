import { Rubik, Cormorant_Garamond, Suez_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-accent",
});

const suezOne = Suez_One({
  subsets: ["hebrew", "latin"],
  weight: ["400"],
  variable: "--font-heading",
});

// TODO: כותרת ותיאור אמיתיים לצורכי SEO — תוכן דמו להחלפה
export const metadata = {
  title: "ירין עבודות גימור בע\"מ - נגרות, בטון וגמרי בניין",
  description:
    "תוכן דמו להחלפה: עסק לעבודות גמר לפרויקטים פרטיים, מסחריים וציבוריים — נגרות בהתאמה אישית, בית מלאכה, עבודות בטון, חיפויי PVC וחיפויי קירות.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${cormorant.variable} ${suezOne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
