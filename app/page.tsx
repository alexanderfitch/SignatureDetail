import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import ValueProps from "@/components/home/value-props"
import ServicesPreview from "@/components/home/services-preview"
import Testimonials from "@/components/home/testimonials"
import LocationMap from "@/components/home/location-map"
import CTASection from "@/components/home/cta-section"
import { LocalBusinessSchema } from "@/components/schema"

export const metadata: Metadata = {
  title: "Premium Auto Detailing in Omaha | Professional Car Detailing Services",
  description:
    "Luxury car detailing services in Omaha. Professional ceramic coating, interior detailing, and paint correction. Book your appointment today!",
}

export default function Home() {
  return (
    <div>
      <LocalBusinessSchema />
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <Testimonials />
      <LocationMap />
      <CTASection />
    </div>
  )
}
