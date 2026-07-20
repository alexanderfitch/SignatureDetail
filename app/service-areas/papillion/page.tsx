import type { Metadata } from "next"
import ServicePageTemplate from "@/components/services/service-page-template"
import { getServiceArea } from "@/lib/service-areas"

const page = getServiceArea("papillion")!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/service-areas/papillion" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: "https://www.signatureautodetailingllc.com/service-areas/papillion",
  },
}

export default function Page() {
  return <ServicePageTemplate page={page} basePath="/service-areas" breadcrumbLabel="Service Areas" areaName="Papillion" />
}
