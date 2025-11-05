"use client"

import { motion } from "framer-motion"

export default function BlogHero() {
  return (
    <section className="py-20 md:py-28 bg-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-brand-red">Instagram</span> Feed
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow us on Instagram for the latest updates, behind-the-scenes content, video transformations, and tips
            for keeping your vehicle looking its best.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
