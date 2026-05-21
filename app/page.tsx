import { FloatingWhatsApp } from "@/components/FloatingWhatsApp/FloatingWhatsApp";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { FinalFormSection } from "@/sections/FinalFormSection/FinalFormSection";
import { GallerySection } from "@/sections/GallerySection/GallerySection";
import { HeroSection } from "@/sections/HeroSection/HeroSection";
import { LocationSection } from "@/sections/LocationSection/LocationSection";
import { PlantsSection } from "@/sections/PlantsSection/PlantsSection";
import { ProjectSection } from "@/sections/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LocationSection />
        <ProjectSection />
        <PlantsSection />
        <GallerySection />
        <FinalFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
