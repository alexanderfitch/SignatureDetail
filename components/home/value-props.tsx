"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Award, Clock, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-10 w-10 text-brand-red" />,
    title: "Premium Protection",
    description:
      "No matter which service you choose, we always apply a protectant—whether it's to interior surfaces or exterior finishes. It helps preserve materials, repel dust, and keep your car looking fresh longer.",
  },
  {
    icon: <Award className="h-10 w-10 text-brand-red" />,
    title: "Quality Guarantee",
    description:
      "We stand behind our work with a 100% satisfaction guarantee. We never leave a job until you're happy, and if you're not completely satisfied, we'll make it right—no questions asked.",
  },
  {
    icon: <Clock className="h-10 w-10 text-brand-red" />,
    title: "Time Efficient",
    description:
      "We respect your time by offering a fast, stress-free detailing experience that comes to you. Our mobile service is designed for your convenience—delivering professional results without compromising on quality or attention to detail.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-brand-red" />,
    title: "Showroom Finish",
    description:
      "Every vehicle we detail leaves a lasting impression—restored to a condition that often looks better than the day you bought it. We don't just clean cars; we bring them back to life.",
  },
]

export default function ValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose <span className="text-brand-red">Detail</span> Omaha
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card hover:bg-zinc-800 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
