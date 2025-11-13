"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [controls, inView])

  useEffect(() => {
    const video1 = videoRef.current
    const video2 = video2Ref.current

    if (!video1 || !video2) return

    // Set playback rate to 0.75 for slower, smoother playback
    video1.playbackRate = 0.75
    video2.playbackRate = 0.75

    const handleVideoTimeUpdate = () => {
      const currentVideo = activeVideo === 1 ? video1 : video2
      const nextVideo = activeVideo === 1 ? video2 : video1

      // Start transition 1 second before end
      if (currentVideo.duration - currentVideo.currentTime < 1 && !isTransitioning) {
        setIsTransitioning(true)
        nextVideo.currentTime = 0
        nextVideo.play()

        // Switch active video after blur transition
        setTimeout(() => {
          setActiveVideo(activeVideo === 1 ? 2 : 1)
          setIsTransitioning(false)
        }, 1000)
      }
    }

    const currentVideo = activeVideo === 1 ? video1 : video2
    currentVideo.addEventListener("timeupdate", handleVideoTimeUpdate)

    return () => {
      currentVideo.removeEventListener("timeupdate", handleVideoTimeUpdate)
    }
  }, [activeVideo, isTransitioning])

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
      className={`relative ${isMobile ? "min-h-[110vh]" : "min-h-screen"} flex items-center pt-20 overflow-hidden`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            activeVideo === 1 ? "opacity-100" : "opacity-0"
          } ${isTransitioning && activeVideo === 1 ? "blur-sm" : "blur-0"}`}
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0135-auYtcrlHi084TDCmvfLTCadcMmvc23.mov"
            type="video/mp4"
          />
        </video>
        <video
          ref={video2Ref}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            activeVideo === 2 ? "opacity-100" : "opacity-0"
          } ${isTransitioning && activeVideo === 2 ? "blur-sm" : "blur-0"}`}
          muted
          playsInline
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0135-auYtcrlHi084TDCmvfLTCadcMmvc23.mov"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-20" ref={ref}>
        {/* Mobile view */}
        {isMobile && (
          <div className="grid gap-8 items-center relative z-20">
            <motion.div initial="hidden" animate={controls} variants={variants} className="text-center relative z-20">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-white drop-shadow-lg">Elevate Your</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                  Driving Experience
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-4 text-white drop-shadow-lg max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium mobile auto detailing services in Omaha. We bring out the best in your vehicle with meticulous
                attention to detail.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl mb-8 text-blue-300 font-semibold max-w-xl mx-auto drop-shadow-lg"
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
                  <Link
                    href="/services"
                    className="btn btn-outline bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Desktop view */}
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
                <span className="block text-white drop-shadow-lg">Elevate Your</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                  Driving Experience
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-4 text-white drop-shadow-lg max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium mobile auto detailing services in Omaha. We bring out the best in your vehicle with meticulous
                attention to detail.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl mb-8 text-blue-300 font-semibold max-w-xl drop-shadow-lg"
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
                  <Link
                    href="/services"
                    className="btn btn-outline bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                  >
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
