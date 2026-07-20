import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import IOSInstallPopup from "@/components/ios-install-popup"
import ScrollToTop from "@/components/scroll-to-top"
import { Inter, Outfit } from "next/font/google"

// Initialize modern fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.signatureautodetailingllc.com"),
  title: "Signature Auto Detailing | Mobile Auto Detailing in Omaha, NE",
  description:
    "Signature Auto Detailing - Perfection is our Signature. Mobile auto detailing services in Omaha. Professional interior and exterior detailing, paint correction, ceramic coating, headlight restoration, and more. We come to you!",
  robots: "index, follow",
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Signature Auto Detailing | Mobile Auto Detailing in Omaha, NE",
    description:
      "Signature Auto Detailing - Perfection is our Signature. Mobile auto detailing services in Omaha. Professional interior and exterior detailing, paint correction, ceramic coating, headlight restoration, and more. We come to you!",
    url: "https://www.signatureautodetailingllc.com",
    siteName: "Signature Auto Detailing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Auto Detailing | Mobile Auto Detailing in Omaha, NE",
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
      <body className={`${inter.variable} ${outfit.variable} font-sans text-white antialiased`}>
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
