"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function IOSInstallPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if user is on iOS
    const checkIOS = () => {
      const ua = window.navigator.userAgent
      const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream
      setIsIOS(isIOS)
    }

    // Check if popup has been dismissed before
    const checkDismissed = () => {
      return localStorage.getItem("iosPopupDismissed") === "true"
    }

    checkIOS()

    // Only show popup if on iOS and not dismissed before
    if (isIOS && !checkDismissed()) {
      // Delay popup to not interrupt initial page load experience
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isIOS])

  const dismissPopup = () => {
    setShowPopup(false)
    localStorage.setItem("iosPopupDismissed", "true")
  }

  if (!showPopup) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="bg-zinc-900/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-zinc-800 max-w-md mx-auto">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold">Add to Home Screen</h3>
          <button
            onClick={dismissPopup}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-gray-300 text-sm mb-4">
          Add Detail Omaha to your home screen for quick access to our services.
        </p>

        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-zinc-800 rounded-lg p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 18.5L9 16H3V4H21V16H15L12 18.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 10H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Tap the share button</p>
            <p className="text-xs text-gray-400">Look for the share icon in Safari</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-zinc-800 rounded-lg p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Tap "Add to Home Screen"</p>
            <p className="text-xs text-gray-400">Scroll down and select this option</p>
          </div>
        </div>
      </div>
    </div>
  )
}
