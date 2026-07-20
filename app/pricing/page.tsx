import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Car Detailing Prices in Omaha, NE | Signature Auto Detailing",
  description:
    "How much does car detailing cost in Omaha? Transparent pricing: exterior from $200, interior from $250, full service from $350, paint correction from $600, ceramic coating from $800.",
  alternates: { canonical: "/pricing" },
}

const pricing = [
  {
    service: "Exterior Detail",
    price: "$200+",
    href: "/services",
    includes: "Two-bucket hand wash, clay-bar decontamination, wheels and tires, wax or sealant protection",
  },
  {
    service: "Interior Detail",
    price: "$250+",
    href: "/services/interior-detailing-omaha",
    includes: "Deep vacuum, steam cleaning, stain extraction, leather conditioning, odor removal, UV protection",
  },
  {
    service: "Full Service Detail",
    price: "$350+",
    href: "/services",
    includes: "Complete interior deep clean plus full exterior wash, decontamination, and protection",
  },
  {
    service: "Headlight Restoration",
    price: "$150",
    href: "/services",
    includes: "Wet sanding, polishing, and UV coating to restore clarity and night visibility",
  },
  {
    service: "Clay-bar Treatment",
    price: "$100+",
    href: "/services",
    includes: "Removal of embedded contaminants for glass-smooth paint, ideal before wax or coating",
  },
  {
    service: "Paint Correction (1-Step)",
    price: "$600+",
    href: "/services/paint-correction-omaha",
    includes: "Single-stage machine polish removing light swirls and restoring gloss",
  },
  {
    service: "Paint Correction (2-Step)",
    price: "$800+",
    href: "/services/paint-correction-omaha",
    includes: "Compound + polish stages for deeper scratches, etching, and oxidation",
  },
  {
    service: "Ceramic Coating",
    price: "$800+",
    href: "/services/ceramic-coating-omaha",
    includes: "Full paint prep plus multi-year nano-ceramic protection with hydrophobic finish",
  },
]

const faqs = [
  {
    question: "How much does car detailing cost in Omaha?",
    answer:
      "In Omaha, professional detailing typically ranges from about $150 for a single service like headlight restoration to $800+ for paint correction or ceramic coating. At Signature Auto Detailing, exterior details start at $200, interior details at $250, and our most popular full-service detail at $350. Final pricing depends on vehicle size and condition, and we confirm an exact quote before starting.",
  },
  {
    question: "Why do prices vary by vehicle?",
    answer:
      "A lifted crew-cab truck simply has more surface area and interior volume than a coupe, and a vehicle with years of buildup takes longer than a maintained one. We price by size and condition so you never subsidize someone else's project car.",
  },
  {
    question: "Does mobile service cost extra?",
    answer:
      "No. Mobile service is included in our standard pricing throughout the Omaha metro, including Papillion, Bellevue, Elkhorn, and Gretna. We bring water, power, and all equipment to you.",
  },
  {
    question: "Is professional detailing worth it compared to a car wash?",
    answer:
      "A $15 automatic wash and a professional detail are different products. Automatic washes commonly install swirl marks in your clear coat, while a detail safely deep-cleans, decontaminates, and protects both paint and interior — preserving the vehicle's condition and resale value.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function PricingPage() {
  return (
    <div className="page-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-12 bg-gradient-to-r from-brand-blue to-brand-blue-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Car Detailing Prices in Omaha, NE</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transparent pricing, no surprises. Every price below includes mobile service — we come to you anywhere in
            the Omaha metro.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-brand-blue to-brand-blue-accent text-white">
                    <th className="p-5 font-semibold">Service</th>
                    <th className="p-5 font-semibold whitespace-nowrap">Starting Price</th>
                    <th className="p-5 font-semibold hidden md:table-cell">What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0">
                      <td className="p-5 font-medium text-slate-800">
                        <Link href={row.href} className="hover:text-brand-blue transition-colors">
                          {row.service}
                        </Link>
                      </td>
                      <td className="p-5 text-brand-blue font-bold whitespace-nowrap">{row.price}</td>
                      <td className="p-5 text-slate-600 hidden md:table-cell">{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-slate-500 text-sm mt-4 text-center">
            Prices vary with vehicle size and condition. You'll always get an exact quote before we start.
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mt-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Detailing Cost FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-accent rounded-3xl shadow-xl p-8 md:p-10 mt-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get an exact quote in minutes</h2>
            <p className="text-white/90 mb-6">
              Call or text{" "}
              <a href="tel:+14028504546" className="underline font-semibold">
                (402) 850-4546
              </a>{" "}
              or book online — we serve Omaha, Papillion, Bellevue, Elkhorn, Gretna, and beyond.
            </p>
            <Link href="/booking" className="btn bg-white text-brand-blue font-semibold hover:bg-slate-100">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
