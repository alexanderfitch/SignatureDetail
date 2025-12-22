import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import IOSInstallPopup from "@/components/ios-install-popup"
import ScrollToTop from "@/components/scroll-to-top"
import { Inter, Roboto_Slab as V0_Font_Roboto_Slab } from 'next/font/google'

// Initialize fonts
const _robotoSlab = V0_Font_Roboto_Slab({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Signature Auto Detailing | Premium Mobile Auto Detailing Services | Perfection is our Signature",
  description:
    "Signature Auto Detailing - Perfection is our Signature. Mobile auto detailing services in Omaha. Professional interior and exterior detailing, paint correction, ceramic coating, headlight restoration, and more. We come to you!",
  keywords:
    "car detailing Omaha, mobile auto detailing, interior detailing, exterior detailing, paint correction, ceramic coating, headlight restoration, clay bar treatment, Signature Auto Detailing, Omaha",
  robots: "index, follow",
  alternates: {
    canonical: "https://detailomaha.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Signature Auto Detailing | Premium Mobile Auto Detailing Services | Perfection is our Signature",
    description:
      "Signature Auto Detailing - Perfection is our Signature. Mobile auto detailing services in Omaha. Professional interior and exterior detailing, paint correction, ceramic coating, headlight restoration, and more. We come to you!",
    url: "https://detailomaha.com",
    siteName: "Signature Auto Detailing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Auto Detailing | Premium Mobile Auto Detailing Services | Perfection is our Signature",
    description:
      "Signature Auto Detailing - Perfection is our Signature. Mobile auto detailing services in Omaha. Professional interior and exterior detailing, paint correction, ceramic coating, headlight restoration, and more. We come to you!",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-white`}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <IOSInstallPopup />
      </body>
    </html>
  )
}
