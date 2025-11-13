"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

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
              className={`h-20 w-auto object-cover transition-all duration-300 hover:scale-105 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              style={{ objectPosition: "center 30%" }}
            />
          ) : (
            <div className="h-20 w-[320px] bg-transparent" aria-hidden="true" />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-all duration-300 relative group px-4 py-2 rounded-lg ${
                pathname === link.href
                  ? "text-brand-blue"
                  : scrolled
                    ? "text-slate-700 hover:text-brand-blue"
                    : "text-white hover:text-blue-200"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-blue-accent transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/booking" className="btn btn-primary">
              Book Now
            </Link>
          </motion.div>
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
                <Link href="/booking" className="btn btn-primary mt-4" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
