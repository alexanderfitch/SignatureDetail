import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function BookingInfo() {
  return (
    <div className="space-y-8">
      <div className="card">
        <h3 className="text-2xl font-bold mb-4">Why Book With Us</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
            <span>Certified professional detailers with years of experience</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
            <span>Premium products and state-of-the-art equipment</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
            <span>Convenient online booking and scheduling</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
            <span>Satisfaction guaranteed on all services</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
            <span>Complimentary vehicle inspection with every service</span>
          </li>
        </ul>
      </div>

      <div className="card">
        <h3 className="text-2xl font-bold mb-4">Popular Services</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="relative h-16 w-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
              <Image src="/placeholder.svg?height=100&width=100" alt="Ceramic Coating" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold">Ceramic Coating</h4>
              <p className="text-sm text-slate-600">
                Long-lasting protection with a brilliant shine that repels water, dirt, and contaminants.
              </p>
              <Link href="/services#ceramic-coating" className="text-sm text-brand-red hover:underline">
                Learn more
              </Link>
            </div>
          </div>

          <div className="flex items-start">
            <div className="relative h-16 w-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
              <Image src="/placeholder.svg?height=100&width=100" alt="Paint Correction" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold">Paint Correction</h4>
              <p className="text-sm text-slate-600">
                Remove swirls, scratches, and imperfections to restore your vehicle's finish.
              </p>
              <Link href="/services#paint-correction" className="text-sm text-brand-red hover:underline">
                Learn more
              </Link>
            </div>
          </div>

          <div className="flex items-start">
            <div className="relative h-16 w-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Interior Detailing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold">Interior Detailing</h4>
              <p className="text-sm text-slate-600">
                Deep cleaning and conditioning of all interior surfaces for a fresh, like-new cabin experience.
              </p>
              <Link href="/services#interior-detailing" className="text-sm text-brand-red hover:underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-brand-blue/10 to-brand-blue-accent/10 rounded-xl p-6 shadow-xl border border-brand-blue/20">
        <h3 className="text-xl font-bold mb-3">Need Help Choosing?</h3>
        <p className="text-slate-600 mb-4">
          Not sure which service is right for your vehicle? Contact us for a personalized recommendation.
        </p>
        <Link href="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
