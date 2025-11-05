import type { Metadata } from "next"
import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GalleryCTA from "@/components/gallery/gallery-cta"

export const metadata: Metadata = {
  title: "Auto Detailing Gallery | Omaha Car Detailing Before & After",
  description:
    "View our gallery of before and after car detailing transformations. See the quality of our ceramic coating, paint correction, and interior detailing services in Omaha.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
    </>
  )
}
