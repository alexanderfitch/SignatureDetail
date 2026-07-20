import type { Metadata } from "next"
import ServicePageTemplate from "@/components/services/service-page-template"
import { getServicePage } from "@/lib/service-pages"

const page = getServicePage("mobile-detailing-omaha")!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/services/mobile-detailing-omaha" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: "https://www.signatureautodetailingllc.com/services/mobile-detailing-omaha",
  },
}

export default function Page() {
  return <ServicePageTemplate page={page} />
}
