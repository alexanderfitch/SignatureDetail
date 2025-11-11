"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Shield, Droplet, Car, PenToolIcon as Tool, Sparkles, Zap } from "lucide-react"

const services = [
  {
    id: "full-service",
    title: "Full Service",
    price: "$350+",
    description:
      "Our most popular package delivers the ultimate transformation—inside and out. This premium detail includes a deep interior clean with full vacuuming, stain removal, and surface conditioning, paired with an exterior wash, shine, and wax. We go beyond basic cleaning to restore your vehicle to its former glory.",
    features: [
      "Complete interior vacuuming, steam cleaning, and sanitization",
      "Deep floor mat cleaning and carpet stain removal",
      "Dashboard, console, and trim conditioning",
      "Wheel and tire deep cleaning with high-gloss dressing",
      "Triple-stage exterior hand wash and decontamination",
      "Wax and exterior surface protection",
    ],
    images: [
      {
        src: "/images/gallery/paint-correction-1.webp",
        alt: "Full service paint correction on black Maserati - Signature Auto Detailing",
      },
      {
        src: "/images/gallery/interior-2.webp",
        alt: "Full service interior detailing of Maserati - Signature Auto Detailing",
      },
      {
        src: "/images/gallery/exterior-3.webp",
        alt: "Full service exterior detailing of black Maserati - Signature Auto Detailing",
      },
    ],
    icon: <Shield className="h-8 w-8 text-brand-red" />,
    layout: "triple",
  },
  {
    id: "interior-detailing",
    title: "Interior Detail",
    price: "$250+",
    description:
      "Our Interior Detail service provides a thorough deep clean of every surface inside your vehicle. From steam-cleaning upholstery and conditioning leather to sanitizing air vents and treating hard-to-reach areas, we leave no detail overlooked. Using premium products and professional techniques, we eliminate stains, neutralize odors, and restore your interior to like-new condition.",
    features: [
      "Deep cleaning of all interior surfaces",
      "Leather cleaning and conditioning",
      "Carpet and upholstery shampooing",
      "Odor removal and deodorizing",
      "UV protection for interior materials",
    ],
    beforeImage: "/images/services/interior-before.webp",
    afterImage: "/images/services/interior-after.webp",
    icon: <Car className="h-8 w-8 text-brand-red" />,
    layout: "before-after",
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detail",
    price: "$200+",
    description:
      "Our Exterior Detail service goes beyond a typical car wash. We meticulously clean every exterior surface, including wheels, tires, windows, and trim. We use a clay bar treatment to remove embedded contaminants from your paint, followed by a high-quality wax or sealant application to protect and enhance your vehicle's appearance.",
    features: [
      "Two-bucket wash method",
      "Clay bar decontamination",
      "Wheel and tire cleaning and dressing",
      "Paint sealant or wax application",
      "Glass cleaning and treatment",
    ],
    beforeImage: "/images/services/exterior-before.webp",
    afterImage: "/images/services/exterior-after.webp",
    icon: <Droplet className="h-8 w-8 text-brand-red" />,
    layout: "before-after",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    price: "$150",
    description:
      "Restore clarity and brightness to your foggy, yellowed, or oxidized headlights with our professional Headlight Restoration service. Not only does this improve the appearance of your vehicle, but it also significantly enhances nighttime visibility and safety. Our multi-step process removes oxidation and applies UV protection to prevent future deterioration.",
    features: [
      "Removal of yellowing and oxidation",
      "Multi-step wet sanding process",
      "Professional polishing for crystal clear results",
      "UV protective coating application",
      "Improved nighttime visibility and safety",
    ],
    beforeImage: "/images/services/headlight-before.jpeg",
    afterImage: "/images/services/headlight-after.jpeg",
    icon: <Zap className="h-8 w-8 text-brand-red" />,
    layout: "before-after",
  },
  {
    id: "clay-bar-treatment",
    title: "Clay-bar Treatment",
    price: "$100+",
    description:
      "Our Clay-bar Treatment removes embedded contaminants from your vehicle's paint that regular washing cannot eliminate. This process gently pulls out industrial fallout, rail dust, brake dust, and other bonded contaminants, leaving your paint incredibly smooth and ready for waxing or ceramic coating. Experience the difference of truly clean paint.",
    features: [
      "Removal of embedded contaminants",
      "Restoration of smooth paint surface",
      "Preparation for waxing or ceramic coating",
      "Enhanced paint clarity and gloss",
      "Improved effectiveness of paint protection products",
    ],
    singleImage: "/images/gallery/ceramic-coating-new.jpeg",
    icon: <Tool className="h-8 w-8 text-brand-red" />,
    layout: "single",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    price: "1-Step $600+ | 2-Step $800+",
    description:
      "Our Paint Correction service removes swirl marks, scratches, water spots, and oxidation from your vehicle's clear coat. Using a multi-stage polishing process, we restore your paint to a flawless, mirror-like finish. Choose between our 1-Step Correction for light imperfections or 2-Step Correction for more significant paint damage.",
    features: [
      "Removal of swirl marks and scratches",
      "Elimination of water spots and etching",
      "Restoration of faded and oxidized paint",
      "Enhancement of color depth and clarity",
      "Perfect preparation for ceramic coating",
    ],
    beforeImage: null,
    afterImage: null,
    icon: <Sparkles className="h-8 w-8 text-brand-red" />,
    layout: "before-after",
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    price: "Starting at $800+",
    description:
      "Our professional Ceramic Coating service provides long-lasting protection for your vehicle's paint. This advanced nanotechnology creates a semi-permanent bond with your paint, offering superior protection against UV rays, chemical stains, bird droppings, and environmental contaminants. The hydrophobic properties make washing easier and keep your vehicle looking pristine longer.",
    features: [
      "Multi-year protection against UV damage",
      "Hydrophobic surface that repels water and dirt",
      "Chemical resistance to acidic contaminants",
      "Enhanced gloss and depth of color",
      "Easy maintenance and cleaning",
    ],
    images: [
      {
        src: "/images/gallery/ceramic-coating-1.webp",
        alt: "Ceramic coating application on vehicle - Signature Auto Detailing",
      },
      {
        src: "/images/gallery/ceramic-coating-2.webp",
        alt: "Mirror finish ceramic coating - Signature Auto Detailing",
      },
      {
        src: "/images/gallery/ceramic-coating-3.webp",
        alt: "Ceramic coating on vehicle - Signature Auto Detailing",
      },
    ],
    icon: <Droplet className="h-8 w-8 text-brand-red" />,
    layout: "triple",
  },
]

export default function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Helper function to get a placeholder image with service name
  const getPlaceholderImage = (serviceName: string, type: string) => {
    return `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(`${serviceName} ${type}`)}`
  }

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`py-16 ${index !== services.length - 1 ? "border-b border-zinc-800" : ""}`}
          >
            {/* Mobile view */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">{service.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                        <p className="text-brand-red font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-brand-red mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  {service.layout === "single" && (
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={service.singleImage || getPlaceholderImage(service.title, "")}
                        alt={`${service.title} - Mobile auto detailing in Omaha`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {service.layout === "triple" && (
                    <div className="space-y-4">
                      {service.images?.map((image, i) => (
                        <div key={i} className="rounded-xl overflow-hidden shadow-xl">
                          <Image
                            src={image.src || getPlaceholderImage(service.title, `Image ${i + 1}`)}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {service.layout === "before-after" && (
                    <div className="space-y-4">
                      <div className="rounded-xl overflow-hidden shadow-xl">
                        <div className="relative">
                          <div className="absolute top-2 left-2 bg-slate-800/90 text-white text-xs px-2 py-1 rounded">
                            BEFORE
                          </div>
                          <Image
                            src={service.beforeImage || getPlaceholderImage(service.title, "Before")}
                            alt={`${service.title} Before - Mobile auto detailing in Omaha`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>

                      <div className="rounded-xl overflow-hidden shadow-xl">
                        <div className="relative">
                          <div className="absolute top-2 left-2 bg-brand-red/90 text-white text-xs px-2 py-1 rounded">
                            AFTER
                          </div>
                          <Image
                            src={service.afterImage || getPlaceholderImage(service.title, "After")}
                            alt={`${service.title} After - Mobile auto detailing in Omaha`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Desktop view */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Full width text content */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl mb-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{service.icon}</div>
                    <div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-brand-red font-semibold">{service.price}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-6 w-6 text-brand-red mr-2 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Single image layout */}
                {service.layout === "single" && (
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <div className="aspect-[21/9] relative">
                      <Image
                        src={service.singleImage || getPlaceholderImage(service.title, "")}
                        alt={`${service.title} - Mobile auto detailing in Omaha`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Triple image layout */}
                {service.layout === "triple" && (
                  <div className="grid grid-cols-3 gap-6">
                    {service.images?.map((image, i) => (
                      <div key={i} className="rounded-xl overflow-hidden shadow-xl">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={image.src || getPlaceholderImage(service.title, `Image ${i + 1}`)}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Before/After layout */}
                {service.layout === "before-after" && (
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <div className="relative">
                        <div className="absolute top-2 left-2 bg-slate-800/90 text-white text-xs px-2 py-1 rounded z-10">
                          BEFORE
                        </div>
                        <div className="aspect-[16/9] relative">
                          <Image
                            src={service.beforeImage || getPlaceholderImage(service.title, "Before")}
                            alt={`${service.title} Before - Mobile auto detailing in Omaha`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <div className="relative">
                        <div className="absolute top-2 left-2 bg-brand-red/90 text-white text-xs px-2 py-1 rounded z-10">
                          AFTER
                        </div>
                        <div className="aspect-[16/9] relative">
                          <Image
                            src={service.afterImage || getPlaceholderImage(service.title, "After")}
                            alt={`${service.title} After - Mobile auto detailing in Omaha`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
