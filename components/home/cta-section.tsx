"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    null
  )
}
