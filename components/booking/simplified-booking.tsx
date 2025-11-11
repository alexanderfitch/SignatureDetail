"use client"

import { useState } from "react"
import { Calendar, MapPin, Car, Check } from "lucide-react"
import Link from "next/link"

export default function SimplifiedBooking() {
  const [loading, setLoading] = useState(false)

  // Direct redirect to Urable with the actual link
  const redirectToUrable = () => {
    setLoading(true)
    window.location.href = "https://app.urable.com/virtual-shop/7rfRVyjfArlui9bPxZQL"
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Main Booking Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            <div className="text-center p-12 bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-purple text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book?</h2>
              <p className="text-lg mb-8 text-white/90 max-w-xl mx-auto">
                Schedule your mobile detailing service in just a few clicks. We'll come to you with everything needed.
              </p>
              <button
                onClick={redirectToUrable}
                className="btn bg-white text-brand-blue hover:bg-slate-100 px-10 py-4 text-lg font-bold shadow-lg"
                disabled={loading}
              >
                {loading ? "Loading..." : "Book Your Appointment"}
              </button>
              <p className="text-sm mt-4 text-white/80">
                Secure booking powered by Urable
              </p>
            </div>

            {/* Quick Benefits */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 mb-4">
                    <Calendar className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-800">Flexible Scheduling</h3>
                  <p className="text-sm text-slate-600">Choose your preferred date and time</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 mb-4">
                    <MapPin className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-800">We Come To You</h3>
                  <p className="text-sm text-slate-600">Service at your location</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 mb-4">
                    <Car className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-800">Premium Service</h3>
                  <p className="text-sm text-slate-600">Professional quality guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Info Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-slate-800 text-center">What to Expect</h3>
            <ul className="space-y-3 max-w-md mx-auto">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">We bring all equipment, water, and power</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">Serving Omaha and surrounding areas</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">100% satisfaction guaranteed</span>
              </li>
            </ul>
            <div className="text-center mt-6">
              <Link href="/contact" className="text-brand-blue hover:text-brand-blue-accent font-medium">
                Questions? Contact us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
