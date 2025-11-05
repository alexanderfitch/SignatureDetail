import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold mb-1">Service Area</h4>
            <p className="text-gray-300">Mobile Service - Omaha and Surrounding Areas</p>
            <p className="text-gray-400 text-sm mt-1">We come to you! No need to leave your home or office.</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold mb-1">Phone</h4>
            <a href="tel:+14028504546" className="text-gray-300 hover:text-white transition-colors">
              (402) 850-4546
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold mb-1">Email</h4>
            <a href="mailto:detailomahaneb@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              detailomahaneb@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold mb-3">Connect With Us</h4>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://instagram.com/detailomaha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
