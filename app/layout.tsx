import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans, Sora } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import IOSInstallPopup from "@/components/ios-install-popup"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Detail Omaha | Premium Mobile Auto Detailing Services",
  description:
    "Mobile auto detailing services in Omaha. Professional interior and exterior detailing, headlight restoration, and more. We come to you!",
  keywords:
    "car detailing Omaha, mobile auto detailing, interior detailing, exterior detailing, headlight restoration, clay bar treatment, paint correction, Omaha",
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
    title: "Detail Omaha | Premium Mobile Auto Detailing Services",
    description:
      "Mobile auto detailing services in Omaha. Professional interior and exterior detailing, headlight restoration, and more. We come to you!",
    url: "https://detailomaha.com",
    siteName: "Detail Omaha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detail Omaha | Premium Mobile Auto Detailing Services",
    description:
      "Mobile auto detailing services in Omaha. Professional interior and exterior detailing, headlight restoration, and more. We come to you!",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${sora.variable} font-sans text-white`}>
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
