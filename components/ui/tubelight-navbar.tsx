"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  activeTab: string
  onTabChange: (name: string) => void
  className?: string
  scrolled?: boolean
}

export function TubelightNavbar({ items, activeTab, onTabChange, className, scrolled = false }: NavBarProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-background/5 border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name

        return (
          <Link
            key={item.name}
            href={item.url}
            onClick={() => onTabChange(item.name)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
              scrolled ? "text-slate-800/80 hover:text-slate-800" : "text-white/80 hover:text-white",
              isActive && (scrolled ? "text-slate-800" : "text-white"),
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            {Icon && (
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            )}
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-brand-blue/20 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-blue rounded-t-full">
                  <div className="absolute w-12 h-6 bg-brand-blue/40 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-brand-blue/40 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-brand-blue/30 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
