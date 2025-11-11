import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import AboutContent from "@/components/about/about-content"
import TeamSection from "@/components/about/team-section"
import AboutCTA from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Signature Auto Detailing | Omaha Mobile Car Detailing Experts",
  description:
    "Learn about Signature Auto Detailing's professional mobile detailing team. Sigmund and Omar bring everything in a fully-equipped van—water, electricity, and professional detailing services—right to your location.",
}

export default function AboutPage() {
  return (
    <div className="page-bg">
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <AboutCTA />
    </div>
  )
}
