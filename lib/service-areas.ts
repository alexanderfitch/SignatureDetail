import type { ServicePageData } from "@/lib/service-pages"

const sharedFeatures = [
  "Fully mobile — we come to your home or office",
  "Interior details from $250, exterior from $200",
  "Full-service details from $350",
  "Paint correction and ceramic coating available",
  "Headlight restoration and clay-bar treatment",
  "Self-contained: we bring water, power, and equipment",
]

const sharedImages = [
  { src: "/images/services/full-service.webp", alt: "Full service mobile detail - Signature Auto Detailing" },
  { src: "/images/gallery/interior-2.webp", alt: "Interior detailing result - Signature Auto Detailing" },
  { src: "/images/gallery/exterior-1.webp", alt: "Exterior detailing result - Signature Auto Detailing" },
]

const sharedRelated = [
  { label: "All Services & Pricing", href: "/services" },
  { label: "Ceramic Coating", href: "/services/ceramic-coating-omaha" },
  { label: "Mobile Detailing", href: "/services/mobile-detailing-omaha" },
]

function areaFaqs(city: string): ServicePageData["faqs"] {
  return [
    {
      question: `Do you charge extra to come to ${city}?`,
      answer: `No — ${city} is inside our standard service area, so mobile service there costs the same as anywhere in the Omaha metro. We bring everything we need to your driveway or workplace.`,
    },
    {
      question: `How do I book a detail in ${city}?`,
      answer:
        "Book online through our booking page, or call/text (402) 850-4546. We'll confirm your address, vehicle, and service, and give you an exact quote up front.",
    },
    {
      question: `What services are available in ${city}?`,
      answer: `Every service we offer is available in ${city}: interior and exterior details, full-service details, paint correction, ceramic coating, headlight restoration, and clay-bar treatment.`,
    },
  ]
}

export const serviceAreas: ServicePageData[] = [
  {
    slug: "papillion",
    metaTitle: "Mobile Car Detailing Papillion, NE | Signature Auto Detailing",
    metaDescription:
      "Mobile car detailing in Papillion, NE — interior, exterior, ceramic coating, and paint correction at your home or office. Details from $200. Book online.",
    h1: "Mobile Car Detailing in Papillion, NE",
    subtitle: "Professional detailing at your Papillion home or office",
    price: "Details from $200",
    intro: [
      "Papillion drivers don't need to haul their vehicle to an Omaha shop and wait around — Signature Auto Detailing brings the full detail studio to you. We serve every Papillion neighborhood, from Shadow Lake and Walnut Creek to downtown, plus nearby La Vista and Sarpy County.",
      "Whether it's a deep interior clean after a busy sports season, a full exterior decontamination and wax, or long-term protection with paint correction and ceramic coating, we deliver showroom results in your own driveway.",
      "We're fully self-contained — water, power, professional equipment, and premium products all come with us.",
    ],
    featuresTitle: "Detailing services available in Papillion:",
    features: sharedFeatures,
    images: sharedImages,
    faqs: areaFaqs("Papillion"),
    related: sharedRelated,
  },
  {
    slug: "bellevue",
    metaTitle: "Mobile Car Detailing Bellevue, NE | Signature Auto Detailing",
    metaDescription:
      "Mobile car detailing in Bellevue, NE — we come to your home, office, or near Offutt AFB. Interior, exterior, ceramic coating & paint correction from $200.",
    h1: "Mobile Car Detailing in Bellevue, NE",
    subtitle: "We come to your Bellevue home, office, or base housing",
    price: "Details from $200",
    intro: [
      "From Olde Towne Bellevue to the neighborhoods around Offutt Air Force Base, Signature Auto Detailing brings professional mobile detailing straight to Bellevue driveways and parking lots.",
      "Nebraska winters are brutal on interiors — road salt, moisture, and grime work deep into carpets and trim. Our interior details extract all of it, while our exterior services, paint correction, and ceramic coatings protect your finish year-round.",
      "No shop visit, no waiting room. We arrive fully self-contained and return your vehicle looking its best while you get on with your day.",
    ],
    featuresTitle: "Detailing services available in Bellevue:",
    features: sharedFeatures,
    images: sharedImages,
    faqs: areaFaqs("Bellevue"),
    related: sharedRelated,
  },
  {
    slug: "elkhorn",
    metaTitle: "Mobile Car Detailing Elkhorn, NE | Signature Auto Detailing",
    metaDescription:
      "Mobile car detailing in Elkhorn, NE — interior and exterior details, paint correction, and ceramic coating at your home. From $200. Book online today.",
    h1: "Mobile Car Detailing in Elkhorn, NE",
    subtitle: "Driveway-side detailing across Elkhorn and West Omaha",
    price: "Details from $200",
    intro: [
      "Elkhorn's rapid growth means busy schedules — and Signature Auto Detailing keeps your vehicle pristine without adding another errand. We serve all of Elkhorn and the surrounding West Omaha corridor, from established neighborhoods to the newest developments.",
      "Choose a deep interior clean, a full exterior decontamination and protection package, or go further with paint correction and multi-year ceramic coating — all performed at your home with professional equipment we bring ourselves.",
      "Gravel roads and construction dust are no match for a proper detail. We'll have your paint smooth, glossy, and protected.",
    ],
    featuresTitle: "Detailing services available in Elkhorn:",
    features: sharedFeatures,
    images: sharedImages,
    faqs: areaFaqs("Elkhorn"),
    related: sharedRelated,
  },
  {
    slug: "gretna",
    metaTitle: "Mobile Car Detailing Gretna, NE | Signature Auto Detailing",
    metaDescription:
      "Mobile car detailing in Gretna, NE — professional interior and exterior detailing, ceramic coating, and paint correction at your door. From $200.",
    h1: "Mobile Car Detailing in Gretna, NE",
    subtitle: "Professional detailing brought to your Gretna driveway",
    price: "Details from $200",
    intro: [
      "Gretna sits right at the edge of the metro, which means long drives to most detail shops. Signature Auto Detailing removes the trip entirely — we bring the full mobile operation to your home or workplace anywhere in Gretna and western Sarpy County.",
      "Every service on our menu travels with us: deep interior cleaning and stain extraction, hand washing and paint decontamination, swirl-removing paint correction, and long-term ceramic coating protection.",
      "Highway commutes coat vehicles in tar, brake dust, and bugs. Our clay-bar and decontamination process strips it all before we protect the finish.",
    ],
    featuresTitle: "Detailing services available in Gretna:",
    features: sharedFeatures,
    images: sharedImages,
    faqs: areaFaqs("Gretna"),
    related: sharedRelated,
  },
]

export function getServiceArea(slug: string): ServicePageData | undefined {
  return serviceAreas.find((p) => p.slug === slug)
}
