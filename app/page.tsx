import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ContactSection from "../components/ContactSection"
import LocationSection from "../components/LocationSection"
import Footer from "../components/Footer"
import { FloatingButtons } from "../components/FloatingButtons"
import GallerySection from "@/components/GallerySection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <LocationSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
