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


  return (
    <section
      className={`relative ${isMobile ? "min-h-[110vh]" : "min-h-screen"} flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-brand-blue/10 via-brand-blue-accent/5 to-brand-purple/10"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-brand-blue-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-20" ref={ref}>
        {/* Video placeholder background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-blue-accent/10 to-brand-purple/20 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 border-4 border-brand-blue/30 rounded-full flex items-center justify-center mx-auto"
              >
                <svg className="w-16 h-16 text-brand-blue/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <p className="mt-4 text-brand-blue/50 text-sm font-medium">Video Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        {isMobile && (
          <div className="grid gap-8 items-center relative z-20">

            <motion.div 
              initial="hidden" 
              animate={controls} 
              variants={variants} 
              className="text-center relative z-20"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-slate-800">Elevate Your</span>
                <span className="block bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-purple bg-clip-text text-transparent animate-gradient">
                  Driving Experience
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-4 text-slate-600 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium mobile auto detailing services in Omaha. We bring out the best in your vehicle with meticulous
                attention to detail.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-brand-blue-accent font-semibold max-w-xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Perfection is our Signature
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/booking" className="btn btn-primary">
                    Book Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services" className="btn btn-outline">
                    Our Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Desktop view - Original layout */}
        {!isMobile && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial="hidden" 
              animate={controls} 
              variants={variants} 
              className="text-center md:text-left relative z-20"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-slate-800">Elevate Your</span>
                <span className="block bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-purple bg-clip-text text-transparent animate-gradient">
                  Driving Experience
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-4 text-slate-600 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium mobile auto detailing services in Omaha. We bring out the best in your vehicle with meticulous
                attention to detail.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-brand-blue-accent font-semibold max-w-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Perfection is our Signature
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/booking" className="btn btn-primary">
                    Book Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services" className="btn btn-outline">
                    Our Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        )}
      </div>
    </section>
  )
}
