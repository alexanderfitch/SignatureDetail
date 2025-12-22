"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Instagram, Heart, MessageCircle } from "lucide-react"

// This would be replaced with actual Instagram API data
// For now, we'll use mock data with car images only
const mockInstagramPosts = [
  {
    id: "1",
    type: "image",
    media_url: "/images/gallery/ceramic-coating-1.webp",
    permalink: "https://instagram.com/p/example1",
    likes: 124,
    comments: 18,
  },
  {
    id: "2",
    type: "image",
    media_url: "/images/gallery/ceramic-coating-2.webp",
    permalink: "https://instagram.com/p/example2",
    likes: 98,
    comments: 12,
  },
  {
    id: "3",
    type: "image",
    media_url: "/images/gallery/ceramic-coating-3.webp",
    permalink: "https://instagram.com/p/example3",
    likes: 156,
    comments: 22,
  },
  {
    id: "4",
    type: "image",
    media_url: "/images/gallery/exterior-1.webp",
    permalink: "https://instagram.com/p/example4",
    likes: 187,
    comments: 24,
  },
  {
    id: "5",
    type: "image",
    media_url: "/images/gallery/exterior-2.webp",
    permalink: "https://instagram.com/p/example5",
    likes: 243,
    comments: 36,
  },
  {
    id: "6",
    type: "image",
    media_url: "/images/gallery/exterior-3.webp",
    permalink: "https://instagram.com/p/example6",
    likes: 112,
    comments: 14,
  },
  {
    id: "7",
    type: "image",
    media_url: "/images/gallery/paint-correction-1.webp",
    permalink: "https://instagram.com/p/example7",
    likes: 176,
    comments: 29,
  },
  {
    id: "8",
    type: "image",
    media_url: "/images/gallery/paint-correction-2.webp",
    permalink: "https://instagram.com/p/example8",
    likes: 203,
    comments: 31,
  },
  {
    id: "9",
    type: "image",
    media_url: "/images/gallery/paint-correction-3.webp",
    permalink: "https://instagram.com/p/example9",
    likes: 189,
    comments: 27,
  },
]

export default function InstagramFeed() {
  const [posts, setPosts] = useState(mockInstagramPosts)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({})

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  useEffect(() => {
    // This would be replaced with actual Instagram API call
    const fetchInstagramPosts = async () => {
      try {
        // In a real implementation, you would fetch from Instagram Graph API
        // Example:
        // const response = await fetch('/api/instagram');
        // const data = await response.json();
        // setPosts(data);

        // For now, simulate API call with mock data
        setTimeout(() => {
          setPosts(mockInstagramPosts)
          setLoading(false)
        }, 1000)
      } catch (err) {
        console.error("Error fetching Instagram posts:", err)
        setError("Unable to load Instagram posts. Please try again later.")
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

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
            href="https://instagram.com/detailomaha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">Follow Signature Auto Detailing on Instagram</span>
          </Link>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-slate-600">{error}</p>
            <Link
              href="https://instagram.com/detailomaha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-red hover:underline mt-4"
            >
              Visit our Instagram page directly
            </Link>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="relative h-80 bg-slate-100">
                  {imageLoading[post.id] !== false && (
                    <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
                  )}
                  <Image
                    src={post.media_url || "/placeholder.svg"}
                    alt="Signature Auto Detailing Instagram post"
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      imageLoading[post.id] === false ? "opacity-100" : "opacity-0"
                    }`}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAA//9k="
                    priority={index < 3}
                    onLoad={() => setImageLoading((prev) => ({ ...prev, [post.id]: false }))}
                  />
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
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-12">
          <Link
            href="https://instagram.com/detailomaha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
