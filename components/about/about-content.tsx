"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Truck, Droplet, Zap, Sparkles } from "lucide-react"

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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">We Bring Everything to You</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Our fully-equipped mobile detailing van brings everything needed for professional detailing services right to your location. No need for water hookups or electrical outlets—we've got it all covered!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully-Equipped Van</h3>
              <p className="text-slate-600">
                Our professional mobile detailing van is a complete detailing studio on wheels, bringing all our equipment and supplies directly to your location.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <Droplet className="h-12 w-12 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold mb-3">Water On Board</h3>
              <p className="text-slate-600">
                We carry our own water supply, so you don't need to worry about water access. Our van is equipped with a complete water system for all detailing needs.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold mb-3">Power Generation</h3>
              <p className="text-slate-600">
                Our van generates its own electricity, powering all our professional equipment including buffers, vacuums, and steam cleaners—no electrical outlet needed.
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-brand-blue/10 to-brand-blue-accent/10 border border-brand-blue/20">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Sparkles className="h-10 w-10 text-brand-red" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Professional Service, Complete Convenience</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Sigmund and Omar bring everything needed for professional auto detailing in their fully-equipped van: water, electricity, premium products, and professional-grade equipment. Simply park us in your driveway, and we'll handle everything. <span className="text-brand-blue-accent font-semibold">Perfection is our Signature</span>—and we make it easy for you.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
