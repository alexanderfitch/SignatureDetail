import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactInfoFull() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Service Area</h3>
                <p className="text-slate-600">Mobile Service - Omaha and Surrounding Areas</p>
                <p className="text-slate-500 text-sm mt-2">
                  We come to you! Our mobile detailing service brings everything needed to detail your vehicle at your
                  home, office, or preferred location.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <a href="tel:+14028504546" className="text-slate-600 hover:text-brand-blue transition-colors text-lg">
                  (402) 850-4546
                </a>
                <p className="text-slate-500 text-sm mt-2">
                  Call us to discuss your detailing needs or to schedule an appointment.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <a
                  href="mailto:detailomahaneb@gmail.com"
                  className="text-slate-600 hover:text-brand-blue transition-colors text-lg"
                >
                  detailomahaneb@gmail.com
                </a>
                <p className="text-slate-500 text-sm mt-2">
                  Email us for quotes, information about our services, or to schedule an appointment.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Hours of Operation</h3>
                <ul className="text-slate-600 space-y-1">
                  <li>Monday - Friday: 8am - 6pm</li>
                  <li>Saturday: 9am - 4pm</li>
                  <li>Sunday: By appointment only</li>
                </ul>
                <p className="text-slate-500 text-sm mt-2">
                  We offer flexible scheduling to accommodate your busy lifestyle.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
              <p className="text-slate-600 mb-4">
                Follow us on social media for the latest updates, special offers, and to see our recent work.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors text-slate-700"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/detailomaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors text-slate-700"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors text-slate-700"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-blue-accent/10 rounded-lg p-6 border border-brand-blue/20">
              <h3 className="font-bold text-xl mb-3">Ready to Book?</h3>
              <p className="text-slate-600 mb-4">
                Schedule your mobile detailing appointment today and experience the Signature Auto Detailing difference.
              </p>
              <Link href="/booking" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
