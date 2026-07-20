import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServicePageTemplate from "@/components/services/service-page-template"
import { getServiceArea, serviceAreas } from "@/lib/service-areas"

export function generateStaticParams() {
  return serviceAreas.map((page) => ({ city: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const page = getServiceArea(city)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/service-areas/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.signatureautodetailingllc.com/service-areas/${page.slug}`,
    },
  }
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const page = getServiceArea(city)
  if (!page) notFound()
  const cityName = page.h1.replace("Mobile Car Detailing in ", "").replace(", NE", "")
  return <ServicePageTemplate page={page} basePath="/service-areas" breadcrumbLabel="Service Areas" areaName={cityName} />
}
