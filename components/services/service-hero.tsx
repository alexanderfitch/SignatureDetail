"use client"

import { motion } from "framer-motion"

export default function ServiceHero() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Premium <span className="text-brand-red">Detailing Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional detailing options tailored to meet your needs—all from the
            convenience of your driveway. Whether you're looking for routine monthly maintenance or addressing specific
            concerns, we've got you covered with services designed to keep your vehicle in top condition.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
