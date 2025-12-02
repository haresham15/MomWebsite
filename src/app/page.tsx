import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import ChettinadSection from "@/components/ChettinadSection";
import Memories from "@/components/Memories";
import PhotoCarousel from "@/components/PhotoCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Letter />
      <ChettinadSection />
      <Memories />
      <PhotoCarousel />
      <Footer />
    </main>
  );
}
