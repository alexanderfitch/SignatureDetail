import type { Metadata } from "next"
import BlogHero from "@/components/blog/blog-hero"
import InstagramFeed from "@/components/instagram-feed"
import BlogCTA from "@/components/blog/blog-cta"

export const metadata: Metadata = {
  title: "Auto Detailing Blog | Car Care Tips & Tricks from Omaha Experts",
  description:
    "Follow our Instagram feed for car detailing tips, ceramic coating information, and auto care advice from Omaha detailing experts.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <InstagramFeed />
      <BlogCTA />
    </>
  )
}
