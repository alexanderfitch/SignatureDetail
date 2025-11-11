"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocationMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our mobile detailing service brings premium car care directly to your location in Omaha and surrounding
            areas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d-96.03580800000001!3d41.2565369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0x46424d4fae37b604!2sOmaha%2C%20NE!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Signature Auto Detailing Service Area"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Service Area</h4>
                  <p className="text-slate-600">Mobile Service - Omaha and Surrounding Areas</p>
                  <p className="text-slate-500 text-sm mt-1">We come to you! No need to leave your home or office.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:+14028504546" className="text-slate-600 hover:text-brand-blue transition-colors">
                    (402) 850-4546
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a
                    href="mailto:detailomahaneb@gmail.com"
                    className="text-slate-600 hover:text-brand-blue transition-colors"
                  >
                    detailomahaneb@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Hours of Operation</h4>
                  <p className="text-slate-600">Monday - Friday: 8am - 6pm</p>
                  <p className="text-slate-600">Saturday: 9am - 4pm</p>
                  <p className="text-slate-600">Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
