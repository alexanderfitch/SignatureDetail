"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Full Service",
    price: "$350+",
    description: "Comprehensive interior and exterior detailing for a complete transformation of your vehicle.",
    image: "/images/services/full-service.webp",
    link: "/services#full-service",
  },
  {
    title: "Interior Detail",
    price: "$250+",
    description: "Deep cleaning and conditioning of all interior surfaces for a fresh, like-new cabin experience.",
    image: "/images/services/interior-detailing.webp",
    link: "/services#interior-detailing",
  },
  {
    title: "Exterior Detail",
    price: "$200+",
    description: "Thorough exterior cleaning, decontamination, and protection to restore your vehicle's shine.",
    image: "/images/services/exterior-detailing.webp",
    link: "/services#exterior-detailing",
  },
]

export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of mobile detailing services to keep your vehicle looking its absolute best.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl bg-zinc-900 shadow-xl"
              variants={itemVariants}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - ${service.price} - Detail Omaha mobile auto detailing`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <span className="text-brand-red font-semibold">{service.price}</span>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-brand-red font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
