"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (GA_ID && pathname && window.gtag) {
      window.gtag("config", GA_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  // Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in the deployment environment to enable tracking
  if (!GA_ID) return null

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
