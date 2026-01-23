"use client"

import { motion } from "framer-motion"

export default function BookingHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 my-0 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">
            Book Your Appointment
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Schedule your mobile detailing service in minutes. We come to you with everything needed.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
