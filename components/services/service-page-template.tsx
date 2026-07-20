import Image from "next/image"
import Link from "next/link"
import type { ServicePageData } from "@/lib/service-pages"

const SITE_URL = "https://www.signatureautodetailingllc.com"

export default function ServicePageTemplate({ page }: { page: ServicePageData }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    url: `${SITE_URL}/services/${page.slug}`,
    areaServed: { "@type": "City", name: "Omaha", containedInPlace: { "@type": "State", name: "Nebraska" } },
    provider: { "@id": `${SITE_URL}/#business` },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: page.h1, item: `${SITE_URL}/services/${page.slug}` },
    ],
  }

  return (
    <div className="page-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-brand-blue to-brand-blue-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{page.h1}</h1>
          <p className="text-xl text-white/90 mb-2">{page.subtitle}</p>
          <p className="text-2xl font-semibold text-white mb-8">{page.price}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn btn-primary">
              Book Now
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-5">
            {page.intro.map((paragraph, i) => (
              <p key={i} className="text-slate-700 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Features */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{page.featuresTitle}</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {page.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {page.images.map((image, i) => (
              <div key={i} className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {page.faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related links */}
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Explore More</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {page.related.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="px-5 py-2 rounded-full bg-white shadow border border-slate-200 text-brand-blue font-medium hover:border-brand-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-accent rounded-3xl shadow-xl p-8 md:p-10 mt-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to book?</h2>
            <p className="text-white/90 mb-6">
              We come to you anywhere in the Omaha metro. Call or text{" "}
              <a href="tel:+14028504546" className="underline font-semibold">
                (402) 850-4546
              </a>{" "}
              or book online in minutes.
            </p>
            <Link href="/booking" className="btn bg-white text-brand-blue font-semibold hover:bg-slate-100">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
