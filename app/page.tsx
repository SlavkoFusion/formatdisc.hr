import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import GovernancePipeline from "@/components/governance-pipeline"
import { PricingSection } from "@/components/pricing-section"
import { SaasOrderSection } from "@/components/saas-order-section"
import { PlaygroundSection } from "@/components/playground-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <GovernancePipeline />
      <AboutSection />
      <ProjectsSection />
      <PricingSection />
      <SaasOrderSection />
      <PlaygroundSection />
      <Footer />
    </main>
  )
}
