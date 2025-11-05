"use client"

import { useState } from "react"
import { ArrowRight, Calendar, MapPin, Car } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SimplifiedBooking() {
  const [loading, setLoading] = useState(false)

  // Direct redirect to Urable with the actual link
  const redirectToUrable = () => {
    setLoading(true)
    window.location.href = "https://app.urable.com/virtual-shop/7rfRVyjfArlui9bPxZQL"
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-xl">
            <div className="text-center p-8 bg-gradient-to-r from-red-900/80 to-black">
              <h2 className="text-3xl font-bold mb-4">Book Your Mobile Detailing Service</h2>
              <button
                onClick={redirectToUrable}
                className="btn btn-primary px-10 py-4 text-lg font-bold"
                disabled={loading}
              >
                {loading ? "Loading..." : "Book Your Appointment Now"}
              </button>

              <p className="text-gray-400 text-sm mt-4">
                You'll be redirected to our secure booking platform powered by Urable
              </p>
            </div>

            <div className="relative h-64">
              <Image
                src="/images/services/exterior-detailing.webp"
                alt="Mobile detailing service - Detail Omaha"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gray-300">We bring our professional detailing services directly to your location</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-800 rounded-lg p-5 flex flex-col items-center text-center">
                  <Calendar className="h-10 w-10 text-brand-red mb-3" />
                  <h3 className="font-bold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-300 text-sm">Choose a date and time that works best for your schedule</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-5 flex flex-col items-center text-center">
                  <MapPin className="h-10 w-10 text-brand-red mb-3" />
                  <h3 className="font-bold mb-2">We Come To You</h3>
                  <p className="text-gray-300 text-sm">Service at your home, office, or preferred location</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-5 flex flex-col items-center text-center">
                  <Car className="h-10 w-10 text-brand-red mb-3" />
                  <h3 className="font-bold mb-2">Premium Service</h3>
                  <p className="text-gray-300 text-sm">Professional detailing with attention to every detail</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-zinc-800 rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-4">Our Service Area</h3>
            <p className="text-gray-300 mb-4">
              We proudly serve Omaha and all surrounding areas. Our mobile detailing service brings everything needed to
              detail your vehicle at your location.
            </p>
            <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
              <div className="flex items-center">
                <Link href="/services" className="text-brand-red hover:underline flex items-center">
                  View Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div>
                <Link href="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
