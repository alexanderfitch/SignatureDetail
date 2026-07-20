import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import ValueProps from "@/components/home/value-props"
import ServicesPreview from "@/components/home/services-preview"
import Testimonials from "@/components/home/testimonials"
import LocationMap from "@/components/home/location-map"
import CTASection from "@/components/home/cta-section"
import { LocalBusinessSchema } from "@/components/schema"

export const metadata: Metadata = {
  title: "Premium Auto Detailing in Omaha | 5.0★ on Google | Signature Auto Detailing",
  description:
    "5.0-star rated mobile car detailing in Omaha. Professional ceramic coating, interior detailing, and paint correction — we come to you. Book your appointment today!",
}

export default function Home() {
  return (
    <div>
      <LocalBusinessSchema />
      <Hero />
      <ServicesPreview />
      <ValueProps />
      <Testimonials />
      <LocationMap />
      <CTASection />
    </div>
  )
}
