import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroCarousel } from "@/components/sections/HeroCarousel"
import { FeaturesBar } from "@/components/sections/FeaturesBar"
import { BestsellersSection } from "@/components/sections/BestsellersSection"
import { AirPodsShowcase } from "@/components/sections/AirPodsShowcase"
import { TopPicksSection } from "@/components/sections/TopPicksSection"
import { BannerSlider } from "@/components/sections/BannerSlider"
import { ReviewsSection } from "@/components/sections/ReviewsSection"
import { ShippingSection } from "@/components/sections/ShippingSection"
import { BlogSection } from "@/components/sections/BlogSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <FeaturesBar />
      <BestsellersSection />
      <AirPodsShowcase />
      <TopPicksSection />
      <BannerSlider />
      <ReviewsSection />
      <ShippingSection />
      <BlogSection />
      <Footer />
    </div>
  )
}
