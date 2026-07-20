export interface ServicePageFAQ {
  question: string
  answer: string
}

export interface ServicePageData {
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  subtitle: string
  price: string
  intro: string[]
  featuresTitle: string
  features: string[]
  images: { src: string; alt: string }[]
  faqs: ServicePageFAQ[]
  related: { label: string; href: string }[]
}

export const servicePages: ServicePageData[] = [
  {
    slug: "ceramic-coating-omaha",
    metaTitle: "Ceramic Coating Omaha, NE | Signature Auto Detailing",
    metaDescription:
      "Professional ceramic coating in Omaha starting at $800. Multi-year paint protection with hydrophobic finish, applied by mobile detailing pros. We come to you — get a free quote.",
    h1: "Ceramic Coating in Omaha, NE",
    subtitle: "Multi-year paint protection, applied at your home or office",
    price: "Starting at $800+",
    intro: [
      "A professional ceramic coating is the best long-term protection you can give your vehicle's paint. Our advanced nanotechnology coating creates a semi-permanent bond with your clear coat, shielding it from UV rays, chemical stains, bird droppings, road salt, and Nebraska's harsh seasonal swings.",
      "The hydrophobic finish means water, dirt, and grime slide right off — washes take half the time and your paint keeps a deep, glass-like gloss for years instead of months. Every coating begins with a full decontamination and paint prep so the coating bonds to clean, correction-ready paint.",
      "Because we're fully mobile, the entire process happens at your home or office anywhere in the Omaha metro. No shop drop-off, no rental car, no hassle.",
    ],
    featuresTitle: "What's included with every ceramic coating:",
    features: [
      "Full wash and clay-bar decontamination before application",
      "Multi-year protection against UV damage and oxidation",
      "Hydrophobic surface that repels water, dirt, and road grime",
      "Chemical resistance to bird droppings, sap, and acidic contaminants",
      "Dramatically enhanced gloss and depth of color",
      "Easier washing and lower maintenance for years",
    ],
    images: [
      { src: "/images/gallery/ceramic-coating-1.webp", alt: "Ceramic coating application on a vehicle in Omaha - Signature Auto Detailing" },
      { src: "/images/gallery/ceramic-coating-2.webp", alt: "Mirror finish after ceramic coating in Omaha - Signature Auto Detailing" },
      { src: "/images/gallery/ceramic-coating-3.webp", alt: "Hydrophobic ceramic coated paint in Omaha - Signature Auto Detailing" },
    ],
    faqs: [
      {
        question: "How much does ceramic coating cost in Omaha?",
        answer:
          "Our ceramic coating packages start at $800. Final pricing depends on vehicle size and paint condition — vehicles with swirl marks or scratches usually need paint correction first so the coating locks in a flawless finish. We provide an exact quote before any work begins.",
      },
      {
        question: "How long does a ceramic coating last?",
        answer:
          "A professionally applied and properly maintained ceramic coating provides multiple years of protection — far beyond the weeks you get from wax or the months from a paint sealant.",
      },
      {
        question: "Do I need paint correction before ceramic coating?",
        answer:
          "If your paint has swirl marks, light scratches, or water spots, we recommend paint correction first. A ceramic coating locks in whatever is underneath it, so correcting the paint beforehand ensures a flawless, glossy result.",
      },
      {
        question: "Do you come to me for ceramic coating?",
        answer:
          "Yes. Signature Auto Detailing is a fully mobile service — we apply ceramic coatings at your home or office throughout Omaha and surrounding areas, including Papillion, Bellevue, Elkhorn, and Gretna.",
      },
      {
        question: "Is ceramic coating worth it in Nebraska?",
        answer:
          "Absolutely. Between summer UV exposure, winter road salt and brine, and year-round hail and storm seasons, Nebraska is tough on paint. A ceramic coating is the most durable barrier available against all of it.",
      },
    ],
    related: [
      { label: "Paint Correction", href: "/services/paint-correction-omaha" },
      { label: "Interior Detailing", href: "/services/interior-detailing-omaha" },
      { label: "All Services & Pricing", href: "/services" },
    ],
  },
  {
    slug: "paint-correction-omaha",
    metaTitle: "Paint Correction Omaha, NE | 1-Step & 2-Step | Signature Auto Detailing",
    metaDescription:
      "Professional paint correction in Omaha — remove swirl marks, scratches, and oxidation. 1-Step from $600, 2-Step from $800. Mobile service, we come to you.",
    h1: "Paint Correction in Omaha, NE",
    subtitle: "Remove swirls, scratches, and oxidation for a mirror finish",
    price: "1-Step $600+ | 2-Step $800+",
    intro: [
      "Swirl marks, fine scratches, water spots, and oxidation build up in your clear coat from automatic car washes, improper hand washing, and everyday exposure. Paint correction is the machine-polishing process that removes those defects permanently — not fills or hides them the way glazes and waxes do.",
      "Our 1-Step Correction handles light swirling and restores strong gloss in a single polishing stage. Our 2-Step Correction adds a dedicated cutting stage for deeper scratches, heavy swirls, and oxidized paint, finishing with a refining polish for a true mirror finish.",
      "Paint correction is also the ideal preparation for a ceramic coating — correcting first means the coating locks in perfect paint. Ask about combined correction + coating pricing.",
    ],
    featuresTitle: "What paint correction removes:",
    features: [
      "Swirl marks and wash-induced micro-scratches",
      "Water spots and mineral etching",
      "Faded, dull, and oxidized paint",
      "Light clear-coat scratches",
      "Restores color depth, clarity, and gloss",
      "Perfect preparation for ceramic coating",
    ],
    images: [
      { src: "/images/gallery/paint-correction-1.webp", alt: "Paint correction on black Maserati in Omaha - Signature Auto Detailing" },
      { src: "/images/gallery/exterior-2.webp", alt: "Glossy corrected paint finish in Omaha - Signature Auto Detailing" },
      { src: "/images/gallery/exterior-1.webp", alt: "Exterior paint after professional correction in Omaha - Signature Auto Detailing" },
    ],
    faqs: [
      {
        question: "How much does paint correction cost in Omaha?",
        answer:
          "Our 1-Step Paint Correction starts at $600 and our 2-Step Correction starts at $800. Pricing depends on vehicle size and the severity of the paint defects. We inspect your paint and give you an exact quote before starting.",
      },
      {
        question: "What's the difference between 1-step and 2-step correction?",
        answer:
          "A 1-step correction uses a single polishing stage to remove light swirl marks and restore gloss. A 2-step correction adds an initial compounding stage that cuts deeper defects — heavier scratches, etching, and oxidation — before the final refining polish.",
      },
      {
        question: "Will the swirl marks come back?",
        answer:
          "Paint correction permanently removes defects from the clear coat. New swirls only appear if the paint is washed improperly afterward. We'll show you safe wash techniques, and a ceramic coating adds a sacrificial layer that makes future swirling far less likely.",
      },
      {
        question: "Is paint correction safe for my clear coat?",
        answer:
          "Yes. We measure and work conservatively, removing only the microns necessary to level the defects. Machine polishing by a trained professional is the industry-standard way to restore automotive paint.",
      },
    ],
    related: [
      { label: "Ceramic Coating", href: "/services/ceramic-coating-omaha" },
      { label: "Exterior Detailing", href: "/services" },
      { label: "All Services & Pricing", href: "/services" },
    ],
  },
  {
    slug: "mobile-detailing-omaha",
    metaTitle: "Mobile Car Detailing Omaha, NE — We Come to You | Signature Auto Detailing",
    metaDescription:
      "Fully mobile car detailing in Omaha. Interior, exterior, and full-service details at your home or office from $200. Serving Omaha, Papillion, Bellevue, Elkhorn & Gretna.",
    h1: "Mobile Car Detailing in Omaha — We Come to You",
    subtitle: "Professional detailing at your home or office, no drop-off required",
    price: "Details from $200 | Full Service $350+",
    intro: [
      "Skip the shop. Signature Auto Detailing brings professional-grade equipment, water, power, and premium products directly to your driveway or office parking lot anywhere in the Omaha metro.",
      "While you work, relax, or spend time with family, we transform your vehicle on-site: deep interior cleaning and stain extraction, meticulous hand washing and decontamination, paint protection, and more. Every service we offer — from a full-service detail to ceramic coating — is available as a mobile appointment.",
      "We serve Omaha and all surrounding communities including Papillion, Bellevue, Elkhorn, Gretna, La Vista, Millard, and Council Bluffs.",
    ],
    featuresTitle: "Why Omaha chooses mobile detailing:",
    features: [
      "Zero drop-off or pickup — we work at your location",
      "Fully self-contained: we bring water, power, and equipment",
      "Same premium results as a fixed shop",
      "Interior, exterior, and full-service packages available",
      "Flexible scheduling around your workday",
      "Serving the entire Omaha metro and surrounding towns",
    ],
    images: [
      { src: "/images/services/full-service.webp", alt: "Mobile full service detail in Omaha driveway - Signature Auto Detailing" },
      { src: "/images/services/exterior-detailing.webp", alt: "Mobile exterior detailing in Omaha - Signature Auto Detailing" },
      { src: "/images/services/interior-detailing.webp", alt: "Mobile interior detailing in Omaha - Signature Auto Detailing" },
    ],
    faqs: [
      {
        question: "What do I need to provide for a mobile detail?",
        answer:
          "Just a place to park. We arrive fully self-contained with water, power, and all professional equipment and products. A driveway, curbside spot, or office parking space works great.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve Omaha and all surrounding areas within roughly 30 miles, including Papillion, Bellevue, Elkhorn, Gretna, La Vista, Millard, Bennington, and Council Bluffs.",
      },
      {
        question: "How much does mobile detailing cost in Omaha?",
        answer:
          "Exterior details start at $200, interior details at $250, and our most popular full-service detail starts at $350. Paint correction, ceramic coating, headlight restoration, and clay-bar treatment are also available as mobile services.",
      },
      {
        question: "How long does a mobile detail take?",
        answer:
          "Most interior or exterior details take 2–3 hours; a full-service detail typically runs 3–5 hours depending on vehicle size and condition. We'll give you a time estimate when you book.",
      },
    ],
    related: [
      { label: "Ceramic Coating", href: "/services/ceramic-coating-omaha" },
      { label: "Interior Detailing", href: "/services/interior-detailing-omaha" },
      { label: "All Services & Pricing", href: "/services" },
    ],
  },
  {
    slug: "interior-detailing-omaha",
    metaTitle: "Interior Car Detailing Omaha, NE | Deep Clean from $250 | Signature Auto Detailing",
    metaDescription:
      "Deep interior car detailing in Omaha from $250 — steam cleaning, stain and odor removal, leather conditioning. Mobile service at your home or office.",
    h1: "Interior Car Detailing in Omaha, NE",
    subtitle: "Deep cleaning, stain extraction, and odor removal — at your door",
    price: "$250+",
    intro: [
      "Your interior takes more abuse than any other part of your vehicle — spills, pet hair, kids, road salt tracked in all winter. Our interior detail is a true deep clean of every surface, not a quick vacuum-and-wipe.",
      "We steam-clean and shampoo upholstery and carpets, extract stains, condition leather, sanitize touchpoints and air vents, and treat every panel with UV protection. Odors aren't masked with fragrance — they're removed at the source.",
      "As a fully mobile service, we restore your interior in your own driveway or office parking lot anywhere in the Omaha metro.",
    ],
    featuresTitle: "What's included in every interior detail:",
    features: [
      "Complete vacuuming including seats, carpets, and trunk",
      "Steam cleaning and shampooing of upholstery and carpets",
      "Stain extraction and odor elimination",
      "Leather cleaning and conditioning",
      "Dashboard, console, and trim deep clean with UV protection",
      "Air vent and touchpoint sanitization",
    ],
    images: [
      { src: "/images/gallery/interior-2.webp", alt: "Interior detailing of Maserati in Omaha - Signature Auto Detailing" },
      { src: "/images/gallery/interior-3.webp", alt: "Deep cleaned car interior in Omaha - Signature Auto Detailing" },
      { src: "/images/services/interior-detailing.webp", alt: "Professional interior detail in Omaha - Signature Auto Detailing" },
    ],
    faqs: [
      {
        question: "How much does interior detailing cost in Omaha?",
        answer:
          "Our interior detail starts at $250. Heavily soiled vehicles, pet hair removal, or significant stain treatment may adjust the price — we confirm an exact quote before we start.",
      },
      {
        question: "Can you remove stains and odors?",
        answer:
          "Yes. We use hot-water extraction, steam, and professional-grade chemistry to pull stains out of upholstery and carpet and to eliminate odors at their source rather than covering them up.",
      },
      {
        question: "How long does an interior detail take?",
        answer:
          "Most interior details take 2–4 hours depending on vehicle size and condition. Pet hair and heavy staining add time — we'll estimate accurately when you book.",
      },
      {
        question: "Do you detail interiors in the winter?",
        answer:
          "Yes, we operate year-round. Winter is actually the most important time for interior care — road salt and moisture tracked into carpets can cause permanent staining and corrosion if left untreated.",
      },
    ],
    related: [
      { label: "Full Service Detail", href: "/services" },
      { label: "Mobile Detailing", href: "/services/mobile-detailing-omaha" },
      { label: "All Services & Pricing", href: "/services" },
    ],
  },
  {
    slug: "fleet-commercial-detailing-omaha",
    metaTitle: "Fleet & Commercial Vehicle Detailing Omaha, NE | Signature Auto Detailing",
    metaDescription:
      "Fleet and commercial vehicle detailing in Omaha. On-site mobile service for company cars, trucks, and vans — flexible scheduling and volume pricing. Get a fleet quote.",
    h1: "Fleet & Commercial Detailing in Omaha, NE",
    subtitle: "On-site detailing for company vehicles — your lot, your schedule",
    price: "Custom volume pricing",
    intro: [
      "Your vehicles are rolling billboards for your business. Clean, well-maintained company cars, trucks, and vans project professionalism to every customer who sees them — and protect the resale value of your fleet investment.",
      "We bring the entire operation to your lot: water, power, equipment, and a consistent process for every vehicle. Schedule recurring maintenance details weekly, monthly, or quarterly, and keep the whole fleet presentable without pulling vehicles out of service for shop visits.",
      "From a handful of sales vehicles to full work-truck fleets, we build a package around your vehicle count, condition, and schedule.",
    ],
    featuresTitle: "Why Omaha businesses choose us for fleet detailing:",
    features: [
      "Fully mobile — we detail at your lot or job site",
      "Recurring maintenance schedules (weekly, monthly, quarterly)",
      "Volume pricing for multiple vehicles",
      "Interior sanitization for shared and customer-facing vehicles",
      "Exterior protection against Nebraska road salt and sun",
      "Consistent, documented results across the whole fleet",
    ],
    images: [
      { src: "/images/services/exterior-detailing.webp", alt: "Commercial vehicle exterior detailing in Omaha - Signature Auto Detailing" },
      { src: "/images/services/full-service.webp", alt: "Fleet vehicle full detail in Omaha - Signature Auto Detailing" },
      { src: "/images/gallery/exterior-1.webp", alt: "Detailed company vehicle in Omaha - Signature Auto Detailing" },
    ],
    faqs: [
      {
        question: "How does fleet detailing pricing work?",
        answer:
          "Fleet pricing is customized by vehicle count, vehicle type, condition, and service frequency. Recurring schedules receive volume discounts versus one-time details. Contact us for a walkthrough and written quote.",
      },
      {
        question: "Can you work around our business hours?",
        answer:
          "Yes. We schedule fleet work to minimize downtime — including early mornings, evenings, and weekends — so vehicles are back in service when you need them.",
      },
      {
        question: "What types of commercial vehicles do you detail?",
        answer:
          "Company cars, pickups, cargo and passenger vans, box trucks, and specialty vehicles. If it drives, we can detail it — ask us about anything unusual.",
      },
    ],
    related: [
      { label: "Mobile Detailing", href: "/services/mobile-detailing-omaha" },
      { label: "Ceramic Coating", href: "/services/ceramic-coating-omaha" },
      { label: "All Services & Pricing", href: "/services" },
    ],
  },
]

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug)
}
