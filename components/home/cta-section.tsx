"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-red-900/80 to-black" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Schedule your appointment today and experience the difference professional detailing makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn btn-primary text-lg px-8 py-4">
              Book Your Appointment
            </Link>
            <Link href="/contact" className="btn btn-outline text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
