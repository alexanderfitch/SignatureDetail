import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-blue bg-gradient-to-r from-brand-blue to-brand-blue-accent bg-clip-text text-transparent">SIGNATURE</span>{" "}
              <span className="text-slate-800">AUTO DETAILING</span>
            </h3>
            <p className="text-slate-600 mb-4">
              Premium mobile auto detailing services in Omaha, Nebraska. Specializing in ceramic coating and interior
              detailing, we bring our services directly to you.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-500 hover:text-brand-blue transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/detailomaha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-500 hover:text-brand-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-500 hover:text-brand-blue transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Instagram Feed
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#full-service" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Full Service ($350+)
                </Link>
              </li>
              <li>
                <Link href="/services#interior-detailing" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Interior Detail ($250+)
                </Link>
              </li>
              <li>
                <Link href="/services#exterior-detailing" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Exterior Detail ($200+)
                </Link>
              </li>
              <li>
                <Link
                  href="/services#headlight-restoration"
                  className="text-slate-600 hover:text-brand-blue transition-colors"
                >
                  Headlight Restoration ($150)
                </Link>
              </li>
              <li>
                <Link href="/services#clay-bar-treatment" className="text-slate-600 hover:text-brand-blue transition-colors">
                  Clay-bar Treatment ($100+)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-800">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-brand-red flex-shrink-0 mt-1" />
                <span className="text-slate-600">Mobile Service - Omaha and Surrounding Areas</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-red flex-shrink-0" />
                <a href="tel:+14028504546" className="text-slate-600 hover:text-brand-blue transition-colors">
                  (402) 850-4546
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brand-red flex-shrink-0" />
                <a href="mailto:detailomahaneb@gmail.com" className="text-slate-600 hover:text-brand-blue transition-colors">
                  detailomahaneb@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-slate-600">
                <strong>Mobile Service:</strong>
                <br />
                We come to you! Serving Omaha and all surrounding areas.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Signature Auto Detailing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-brand-blue text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-500 hover:text-brand-blue text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-slate-500 hover:text-brand-blue text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
