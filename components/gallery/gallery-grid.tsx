"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { X, Play } from "lucide-react"

// Gallery categories
const categories = [
  { id: "all", name: "All" },
  { id: "ceramic-coating", name: "Ceramic Coating" },
  { id: "paint-correction", name: "Paint Correction" },
  { id: "interior", name: "Interior Detailing" },
  { id: "exterior", name: "Exterior Detailing" },
]

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6168-YqVTV0K9Nx6FY0EzZ0hX2EdT2X5QTW.mp4", // Updated to the new MP4 file
    alt: "Ceramic coating application on black SUV - Signature Auto Detailing",
    category: "ceramic-coating",
    title: "Ceramic Coating",
    description:
      "Premium ceramic coating application on a black SUV, showcasing the incredible depth and mirror-like reflection. Our ceramic coatings provide long-lasting protection and an unmatched glossy finish.",
    isVideo: true,
    thumbnail: "/images/gallery/ceramic-coating-new.jpeg",
  },
  {
    id: 2,
    src: "/images/gallery/ceramic-coating-new.jpeg",
    alt: "Mirror finish ceramic coating on black vehicle - Signature Auto Detailing",
    category: "ceramic-coating",
    title: "Ceramic Coating",
    description:
      "Stunning mirror finish achieved with our professional ceramic coating. This black vehicle showcases the exceptional gloss and depth that our ceramic coatings provide, along with superior protection against environmental contaminants.",
    isVideo: false,
  },
  {
    id: 3,
    src: "/images/gallery/ceramic-coating-3.webp",
    alt: "Ceramic coating on red BMW sedan - Signature Auto Detailing",
    category: "ceramic-coating",
    title: "Ceramic Coating",
    description: "High-gloss ceramic coating on a red BMW sedan, enhancing the vibrant color and providing protection.",
    isVideo: false,
  },
  {
    id: 4,
    src: "/images/gallery/paint-correction-1.webp",
    alt: "Paint correction on black Maserati - Signature Auto Detailing",
    category: "paint-correction",
    title: "Paint Correction",
    description: "Professional paint correction on a black Maserati, removing swirl marks and enhancing the finish.",
    isVideo: false,
  },
  {
    id: 5,
    src: "/images/gallery/paint-correction-2.webp",
    alt: "Paint correction on Lexus SUV - Signature Auto Detailing",
    category: "paint-correction",
    title: "Paint Correction",
    description: "Multi-stage paint correction on a Lexus SUV, restoring the original shine and color depth.",
    isVideo: false,
  },
  {
    id: 6,
    src: "/images/gallery/paint-correction-3.webp",
    alt: "Paint correction on matte black Land Rover Defender - Signature Auto Detailing",
    category: "paint-correction",
    title: "Paint Correction",
    description: "Paint correction on a matte black Land Rover Defender, enhancing its unique finish.",
    isVideo: false,
  },
  {
    id: 7,
    src: "/images/gallery/interior-1.webp",
    alt: "Interior detailing of SUV rear seats - Signature Auto Detailing",
    category: "interior",
    title: "Interior Detailing",
    description:
      "Complete interior detailing of an SUV, restoring leather seats and all surfaces to like-new condition.",
    isVideo: false,
  },
  {
    id: 8,
    src: "/images/gallery/interior-2.webp",
    alt: "Interior detailing of luxury vehicle rear seats - Signature Auto Detailing",
    category: "interior",
    title: "Interior Detailing",
    description: "Detailed cleaning and conditioning of luxury vehicle interior, including seats and trim.",
    isVideo: false,
  },
  {
    id: 9,
    src: "/images/gallery/interior-3.webp",
    alt: "Interior detailing of Porsche - Signature Auto Detailing",
    category: "interior",
    title: "Interior Detailing",
    description: "Deep cleaning of a Porsche interior, removing stains and restoring the cabin to pristine condition.",
    isVideo: false,
  },
  {
    id: 10,
    src: "/images/gallery/exterior-1.webp",
    alt: "Exterior detailing of red Tesla - Signature Auto Detailing",
    category: "exterior",
    title: "Exterior Detailing",
    description: "Full exterior detail on a red Tesla, including clay bar treatment and paint sealant application.",
    isVideo: false,
  },
  {
    id: 11,
    src: "/images/gallery/exterior-2.webp",
    alt: "Exterior detailing of white Ford Bronco - Signature Auto Detailing",
    category: "exterior",
    title: "Exterior Detailing",
    description: "Mobile exterior detailing of a white Ford Bronco, including wheels, tires, and trim restoration.",
    isVideo: false,
  },
  {
    id: 12,
    src: "/images/gallery/exterior-3.webp",
    alt: "Exterior detailing of black Maserati SUV - Signature Auto Detailing",
    category: "exterior",
    title: "Exterior Detailing",
    description:
      "Professional mobile detailing of a black Maserati SUV with Signature Auto Detailing's signature service.",
    isVideo: false,
  },
]

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})
  const [videoError, setVideoError] = useState<{ [key: number]: boolean }>({})
  const [videoLoaded, setVideoLoaded] = useState<{ [key: number]: boolean }>({})
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({})

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  // Use direct URL for video in production
  useEffect(() => {
    // Check if we're in production (Vercel)
    const isProduction =
      process.env.NODE_ENV === "production" ||
      window.location.hostname.includes("vercel.app") ||
      !window.location.hostname.includes("localhost")

    if (isProduction) {
      // Log for debugging
      console.log("Running in production environment, using direct video URL")
    }
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

  // Handle video hover
  const handleMouseEnter = (id: number) => {
    const video = videoRefs.current[id]
    if (video && !videoError[id]) {
      // Only try to play if there's no error
      video.play().catch((err) => {
        console.error("Error playing video:", err)
        setVideoError((prev) => ({ ...prev, [id]: true }))
      })
    }
  }

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current[id]
    if (video && !videoError[id]) {
      video.pause()
      video.currentTime = 0
    }
  }

  // Handle video error
  const handleVideoError = (id: number, error: any) => {
    console.error(`Video with id ${id} failed to load:`, error)
    setVideoError((prev) => ({ ...prev, [id]: true }))
  }

  // Handle video loaded
  const handleVideoLoaded = (id: number) => {
    console.log(`Video with id ${id} loaded successfully`)
    setVideoLoaded((prev) => ({ ...prev, [id]: true }))
  }

  // Try to use the blob URL directly for the first video
  const getVideoUrl = (image: any) => {
    if (image.id === 1) {
      // Try to use the direct blob URL for the first video
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6168-YqVTV0K9Nx6FY0EzZ0hX2EdT2X5QTW.mp4"
    }
    return image.src
  }

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-brand-red text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image)}
              onMouseEnter={() => image.isVideo && !videoError[image.id] && handleMouseEnter(image.id)}
              onMouseLeave={() => image.isVideo && !videoError[image.id] && handleMouseLeave(image.id)}
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                {image.isVideo ? (
                  <>
                    {/* Always show thumbnail image initially */}
                    <Image
                      src={image.thumbnail || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        videoLoaded[image.id] && !videoError[image.id] ? "opacity-0" : "opacity-100"
                      }`}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAA//9k="
                      priority={index < 3}
                    />

                    <video
                      ref={(el) => (videoRefs.current[image.id] = el)}
                      src={getVideoUrl(image)}
                      muted
                      loop
                      playsInline
                      className={`object-cover w-full h-full transition-opacity duration-300 ${
                        videoLoaded[image.id] && !videoError[image.id] ? "opacity-100" : "opacity-0"
                      }`}
                      poster={image.thumbnail}
                      onError={(e) => handleVideoError(image.id, e)}
                      onLoadedData={() => handleVideoLoaded(image.id)}
                      crossOrigin="anonymous"
                    >
                      <source src={getVideoUrl(image)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div className="absolute inset-0 flex items-center justify-center bg-white/20 group-hover:opacity-0 transition-opacity">
                      <Play size={48} className="text-white opacity-80" />
                    </div>
                  </>
                ) : (
                  <>
                    {imageLoading[image.id] !== false && (
                      <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                    )}
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                        imageLoading[image.id] === false ? "opacity-100" : "opacity-0"
                      }`}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAA//9k="
                      priority={index < 3}
                      onLoad={() => setImageLoading((prev) => ({ ...prev, [image.id]: false }))}
                    />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <p className="text-sm text-slate-600">{image.description.substring(0, 60)}...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for enlarged image view */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="relative h-[60vh]">
                  {selectedImage.isVideo ? (
                    videoError[selectedImage.id] ? (
                      // Show thumbnail if video has error
                      <Image
                        src={selectedImage.thumbnail || "/placeholder.svg"}
                        alt={selectedImage.alt}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <video
                        src={getVideoUrl(selectedImage)}
                        controls
                        autoPlay
                        loop
                        className="w-full h-full object-contain"
                        onError={(e) => handleVideoError(selectedImage.id, e)}
                        poster={selectedImage.thumbnail}
                        crossOrigin="anonymous"
                      >
                        <source src={getVideoUrl(selectedImage)} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )
                  ) : (
                    <Image
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-slate-600">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
