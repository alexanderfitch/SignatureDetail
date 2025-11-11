import type { Metadata } from "next"
import ServiceHero from "@/components/services/service-hero"
import ServicesList from "@/components/services/services-list"
import ServiceCTA from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Auto Detailing Services in Omaha | Interior & Exterior Detailing",
  description:
    "Professional car detailing services in Omaha including ceramic coating, paint correction, interior detailing, and more. Serving Omaha and surrounding areas.",
}

export default function ServicesPage() {
  return (
    <div className="page-bg">
      <ServiceHero />
      <ServicesList />
      <ServiceCTA />
    </div>
  )
}
