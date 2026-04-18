"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Script from "next/script"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our detailing
            services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
          <div className="elfsight-app-ae238bfc-b750-42c4-84f0-feecd8abcc5f" data-elfsight-app-lazy />
        </motion.div>
      </div>
    </section>
  )
}
