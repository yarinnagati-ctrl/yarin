import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import GalleryPreview from "@/components/GalleryPreview";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <GalleryPreview />
      <About />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <QuoteForm />
    </>
  );
}
