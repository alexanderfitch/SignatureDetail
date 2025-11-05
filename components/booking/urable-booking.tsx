"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function UrableBooking() {
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
          <div className="bg-zinc-900 rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Book Your Mobile Detailing Service</h2>

            <div className="mb-8">
              <div className="bg-zinc-800 p-4 rounded-lg mb-6">
                <p className="text-center text-gray-300">
                  Our booking system is powered by Urable, providing you with a seamless scheduling experience.
                </p>
              </div>

              <div className="text-center mb-8">
                <p className="text-gray-300 mb-6">Click below to access our online booking system where you can:</p>
                <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Select your preferred detailing package</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Choose a convenient date and time</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide your location details</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Securely complete your booking</span>
                  </li>
                </ul>
                <button onClick={redirectToUrable} className="btn btn-primary px-8 py-4 text-lg" disabled={loading}>
                  {loading ? "Loading..." : "Book Your Appointment Now"}
                </button>
              </div>
            </div>

            {/* Alternative direct link option */}
            <div className="text-center">
              <p className="text-gray-300 mb-4">You can also access our booking page directly:</p>
              <Link
                href="https://app.urable.com/virtual-shop/7rfRVyjfArlui9bPxZQL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-red hover:underline"
              >
                app.urable.com/virtual-shop/7rfRVyjfArlui9bPxZQL <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-zinc-900 rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-4">About Our Mobile Service</h3>
            <p className="text-gray-300 mb-4">
              We bring our professional detailing services directly to you! Our mobile service covers Omaha and all
              surrounding areas, making it convenient to get your vehicle detailed without leaving your home or office.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">What to Expect</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional equipment brought to your location</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We bring our own water and power supply</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Eco-friendly products and methods</span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Service Area</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Omaha and all surrounding areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Residential and commercial locations</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No travel fee within 20 miles of Omaha</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
