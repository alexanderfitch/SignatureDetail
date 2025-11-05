"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Jay Murphy",
    vehicle: "Honda Civic",
    image: "/images/testimonials/jay.webp",
    quote:
      "Never expected that good of a Job from some high schoolers, but they come off like they've been doing this for 20 years. Car was left beautifully and treated well. Additionally, really had no complaints about cleanliness. After one month, the shine is holding perfectly.",
    rating: 5,
  },
  {
    name: "Anonymous",
    vehicle: "2018 Acura NSX",
    image: "/images/testimonials/nsx.webp",
    quote:
      "Best service completed on my 2018 Acura NSX. Joined their monthly service plan and they will be coming our once a month.",
    rating: 5,
  },
  {
    name: "Anna",
    vehicle: "",
    image: "/images/gallery/interior-2.webp",
    quote:
      "Travelled to me, took lots of time on small stains and grime in my car, deeply cared about the small details, and they were super easy to work with!! I recommend Detail Omaha for any detailing needs!",
    rating: 5,
  },
  {
    name: "Bethany Clark",
    vehicle: "Family Vehicles",
    image: "/images/gallery/interior-3.webp",
    quote:
      "We used Detail Omaha for both my car and my husband's car. The boys worked extremely hard and in the end you wouldn't even know that we have two young children and two dogs who ride in the cars all the time! The convenience of them coming to our house was a huge bonus. We will definitely use them again!",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}`} />
      ))
  }

  return (
    <section className="py-16 md:py-24 bg-zinc-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our detailing
            services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative h-20 w-20 md:h-32 md:w-32 rounded-xl overflow-hidden">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {renderStars(testimonials[current].rating)}
                  </div>
                  <blockquote className="text-xl md:text-2xl italic mb-4">"{testimonials[current].quote}"</blockquote>
                  <div>
                    <p className="font-bold text-lg">{testimonials[current].name}</p>
                    {testimonials[current].vehicle && <p className="text-gray-400">{testimonials[current].vehicle}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    current === index ? "bg-brand-red" : "bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-zinc-800 rounded-full p-2 shadow-lg hover:bg-zinc-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-zinc-800 rounded-full p-2 shadow-lg hover:bg-zinc-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
