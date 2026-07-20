import type { Metadata } from "next"
import ServicePageTemplate from "@/components/services/service-page-template"
import { getServicePage } from "@/lib/service-pages"

const page = getServicePage("paint-correction-omaha")!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/services/paint-correction-omaha" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: "https://www.signatureautodetailingllc.com/services/paint-correction-omaha",
  },
}

export default function Page() {
  return <ServicePageTemplate page={page} />
}
