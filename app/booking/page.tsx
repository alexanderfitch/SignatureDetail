import type { Metadata } from "next"
import BookingHero from "@/components/booking/booking-hero"
import SimplifiedBooking from "@/components/booking/simplified-booking"

export const metadata: Metadata = {
  title: "Book Mobile Auto Detailing Services | Schedule Car Detailing in Omaha",
  description:
    "Schedule your mobile car detailing appointment in Omaha and surrounding areas. Easy online booking for full service detailing, interior detailing, and more.",
}

export default function BookingPage() {
  return (
    <>
      <BookingHero />
      <SimplifiedBooking />
    </>
  )
}
