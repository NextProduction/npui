import { NewHeroSection } from "@/components/new-hero-section"
import { AboutNpuiSection } from "@/components/about-npui-section"
import { WhyChooseNpui } from "@/components/why-choose-npui"
import { HowItWorks } from "@/components/how-it-works"
import { AllComponentsGrid } from "@/components/all-components-grid"
import { LatestComponentsCarousel } from "@/components/latest-components-carousel"
import { CategoryUtilsSection } from "@/components/category-utils-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <>
      <NewHeroSection />
      <AboutNpuiSection />
      <WhyChooseNpui />
      <HowItWorks />
      <CategoryUtilsSection />
      <AllComponentsGrid />
      <LatestComponentsCarousel />
      <TestimonialsSection />
      <CallToAction />
    </>
  )
}
