"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="py-20 md:py-28 bg-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-brand-red">Detail</span> Omaha
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about cars and committed to providing the highest quality detailing services in the Omaha
            area. Learn more about our team and our story.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
