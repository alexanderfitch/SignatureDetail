import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactInfo from "@/components/contact/contact-info-full"
import FAQSection from "@/components/contact/faq-section"
import { FAQSchema } from "@/components/schema"

export const metadata: Metadata = {
  title: "Contact Our Mobile Auto Detailing Team | Detail Omaha",
  description:
    "Contact Detail Omaha's mobile detailing experts. Get answers to your questions about our services including full service detailing, interior and exterior detailing, and more.",
}

export default function ContactPage() {
  return (
    <>
      <FAQSchema />
      <ContactHero />
      <div className="container mx-auto px-4 py-12">
        <ContactInfo />
      </div>
      <FAQSection />
    </>
  )
}
