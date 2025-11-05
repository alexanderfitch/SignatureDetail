"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="py-20 md:py-28 bg-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our services or want to schedule an appointment? We're here to help you with all your
            auto detailing needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
