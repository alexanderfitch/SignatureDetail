"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-300">
                We never compromise on quality. From the products we use to the techniques we employ, everything is
                selected to provide the best possible results for your vehicle.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">Attention to Detail</h3>
              <p className="text-gray-300">
                Our name says it all. We believe that the small details make a big difference, which is why we
                meticulously inspect and treat every aspect of your vehicle.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-300">
                Your satisfaction is our top priority. We work closely with each client to understand their needs and
                ensure that our services exceed their expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
