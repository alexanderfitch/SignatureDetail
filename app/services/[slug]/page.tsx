import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServicePageTemplate from "@/components/services/service-page-template"
import { getServicePage, servicePages } from "@/lib/service-pages"

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.signatureautodetailingllc.com/services/${page.slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) notFound()
  return <ServicePageTemplate page={page} />
}
