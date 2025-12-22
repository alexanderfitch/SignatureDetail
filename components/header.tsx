"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Home, Wrench, ImageIcon, Info, FileText, Phone } from "lucide-react"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { TubelightNavbar } from "@/components/ui/tubelight-navbar"

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "About", href: "/about", icon: Info },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Phone },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("Home")

  useEffect(() => {
    const currentLink = navLinks.find((link) => link.href === pathname)
    if (currentLink) {
      setActiveTab(currentLink.name)
    }
  }, [pathname])

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-effect shadow-lg py-3" : "py-5"}`}
      style={
        !scrolled
          ? {
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
            }
          : {}
      }
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="relative z-50 block h-20 overflow-hidden">
          {mounted ? (
            <img
              src="/images/bluelogoimage.png"
              alt="Signature Auto Detailing"
              width={320}
              height={100}
              className={`object-cover transition-all duration-300 hover:scale-105 w-auto h-24 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              style={{ objectPosition: "center 30%" }}
            />
          ) : (
            <div className="h-20 w-[320px] bg-transparent" aria-hidden="true" />
          )}
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <TubelightNavbar
            items={navLinks.map((link) => ({
              name: link.name,
              url: link.href,
              icon: link.icon,
            }))}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            scrolled={scrolled}
          />
          <Link href="/booking">
            <InteractiveHoverButton
              text="Book Now"
              className="bg-brand-blue border-brand-blue text-white hover:shadow-lg"
            />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden relative z-50 ${!scrolled ? "text-white" : "text-slate-800"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed inset-0 glass-effect shadow-2xl flex flex-col items-center justify-center z-40"
            style={{ top: 0, height: "100vh" }}
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-medium text-xl transition-colors hover:text-brand-blue ${
                      pathname === link.href ? "text-brand-blue" : "text-slate-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  <InteractiveHoverButton
                    text="Book Now"
                    className="bg-brand-blue border-brand-blue text-white hover:shadow-lg mt-4"
                  />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
