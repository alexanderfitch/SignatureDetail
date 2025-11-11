"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Instagram, Heart, MessageCircle } from "lucide-react"

// Mock Instagram posts
const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Just completed this ceramic coating on a stunning black Audi RS7. The depth and gloss are incredible! #ceramiccoating #audiRS7 #detailing",
    likes: 124,
    comments: 18,
    date: "2 days ago",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Before and after paint correction on this red BMW M4. Swirl marks and scratches completely removed! #paintcorrection #bmwm4 #detailingmagic",
    likes: 98,
    comments: 12,
    date: "4 days ago",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Interior detail completed on this Mercedes S-Class. Leather cleaned and conditioned, all surfaces detailed. #interiordetailing #mercedes #luxurycar",
    likes: 156,
    comments: 22,
    date: "1 week ago",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Paint protection film installation on the full front end of this Porsche 911. Invisible protection that will last for years! #ppf #porsche911 #paintprotection",
    likes: 201,
    comments: 31,
    date: "1 week ago",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Check out the water beading on this ceramic coated Tesla Model 3! The hydrophobic properties make washing so much easier. #tesla #ceramiccoating #waterbeading",
    likes: 187,
    comments: 24,
    date: "2 weeks ago",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Wheel detail on this Lamborghini Huracan. Every spoke and caliper cleaned and protected. #wheeldetailing #lamborghini #detailsdone",
    likes: 243,
    comments: 36,
    date: "2 weeks ago",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Engine bay detail on this classic Mustang. Clean enough to eat off of! #enginedetail #fordmustang #classiccar",
    likes: 112,
    comments: 14,
    date: "3 weeks ago",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Full detail completed on this Jeep Wrangler after some serious off-roading. Looking brand new again! #jeep #offroad #detailsdone",
    likes: 98,
    comments: 11,
    date: "3 weeks ago",
  },
  {
    id: 9,
    image: "/placeholder.svg?height=600&width=600",
    caption:
      "Tips for maintaining your ceramic coating: 1. Use pH neutral soap 2. Two bucket wash method 3. Dry with microfiber towel #detailingtips #ceramiccoating #carcare",
    likes: 176,
    comments: 29,
    date: "1 month ago",
  },
]

export default function InstagramFeed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-12"
        >
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">Follow Us on Instagram</span>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="relative h-80">
                <Image src={post.image || "/placeholder.svg"} alt="Instagram post" fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-5 w-5 text-blue-400" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <p className="text-slate-600 text-sm">{post.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
