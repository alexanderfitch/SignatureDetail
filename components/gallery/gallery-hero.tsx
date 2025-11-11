"use client"

import { motion } from "framer-motion"

export default function GalleryHero() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Work <span className="text-brand-red">Gallery</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Browse through our portfolio of completed projects. See the transformation that our professional detailing
            services can bring to your vehicle.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
