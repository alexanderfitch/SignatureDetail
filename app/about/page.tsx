import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import AboutContent from "@/components/about/about-content"
import TeamSection from "@/components/about/team-section"
import AboutCTA from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Our Auto Detailing Company | Omaha Car Detailing Experts",
  description:
    "Learn about our professional car detailing team in Omaha. Certified detailers with years of experience in ceramic coating, paint correction, and interior detailing.",
}

export default function AboutPage() {
  return (
    <div className="carbon-fiber-bg">
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <AboutCTA />
    </div>
  )
}
