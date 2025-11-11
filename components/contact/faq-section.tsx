"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does ceramic coating last?",
    answer:
      "Our professional ceramic coatings typically last 2-5 years depending on the package chosen and how well the vehicle is maintained. Regular maintenance washes and proper care will help maximize the longevity of your coating.",
  },
  {
    question: "What is paint correction?",
    answer:
      "Paint correction is the process of removing imperfections in your vehicle's clear coat such as swirl marks, scratches, water spots, and oxidation to restore a flawless finish. Our multi-stage paint correction process uses specialized compounds and polishes to achieve a mirror-like finish.",
  },
  {
    question: "How often should I detail my car?",
    answer:
      "For optimal results, we recommend a full detail every 3-4 months, with maintenance washes every 2-3 weeks depending on your driving conditions and environment. Vehicles that are daily drivers or exposed to harsh elements may require more frequent detailing.",
  },
  {
    question: "Do you offer mobile detailing services?",
    answer:
      "Yes, we offer mobile detailing services within the Omaha metro area for select packages. Please contact us for availability and pricing. Our mobile service brings the same high-quality results to your home or office.",
  },
  {
    question: "What's the difference between wax and ceramic coating?",
    answer:
      "Traditional wax provides a temporary layer of protection that typically lasts 1-3 months. Ceramic coatings chemically bond to your vehicle's paint, creating a semi-permanent layer of protection that lasts years rather than months, with superior hardness, hydrophobic properties, and resistance to chemicals and UV rays.",
  },
  {
    question: "How long does a full detail take?",
    answer:
      "The time required depends on the service package and your vehicle's condition. A basic detail may take 2-4 hours, while a full correction with ceramic coating application can take 1-3 days. We'll provide a time estimate when you book your appointment.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors ${
                  openIndex === index ? "bg-brand-blue text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                }`}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-slate-50 rounded-b-lg">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
