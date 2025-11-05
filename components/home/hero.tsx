"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }

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
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  const carVariants = {
    hidden: isMobile ? { opacity: 0, y: 100 } : { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      y: isMobile ? 0 : undefined,
      x: isMobile ? undefined : 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.5,
      },
    },
  }

  return (
    <section
      className={`relative ${isMobile ? "min-h-[110vh]" : "min-h-screen"} flex items-center pt-20 overflow-hidden`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carbon-fibre-hero.webp"
          alt="Carbon fiber background - Detail Omaha mobile auto detailing"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-20" ref={ref}>
        {/* Mobile view - Car appears above text */}
        {isMobile && (
          <div className="grid gap-8 items-center">
            <motion.div initial="hidden" animate={controls} variants={carVariants} className="mb-4">
              <Image
                src="/images/lexus-hero-iso.webp"
                alt="Luxury car being detailed by Detail Omaha mobile detailing service"
                width={600}
                height={400}
                className="object-contain rounded-lg shadow-2xl mx-auto"
                priority
              />
            </motion.div>

            <motion.div initial="hidden" animate={controls} variants={variants} className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block">Elevate Your</span>
                <span className="text-brand-red">Driving Experience</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl mx-auto">
                Premium mobile auto detailing services in Omaha. We bring out the best in your vehicle with meticulous
                attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn btn-primary">
                  Book Now
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        )}

        {/* Desktop view - Original layout */}
        {!isMobile && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate={controls} variants={variants} className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block">Elevate Your</span>
                <span className="text-brand-red">Driving Experience</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
                Premium mobile auto detailing services in Omaha. We bring out the best in your vehicle with meticulous
                attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/booking" className="btn btn-primary">
                  Book Now
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate={controls} variants={carVariants}>
              <Image
                src="/images/lexus-hero-iso.webp"
                alt="Luxury car being detailed by Detail Omaha mobile detailing service"
                width={600}
                height={400}
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
