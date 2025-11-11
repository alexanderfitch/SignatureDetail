"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const teamMembers = [
  {
    name: "Sigmund Almazar",
    position: "Co-Founder",
    bio: "Hi, I'm Sigmund Almazar, one of the owners of Signature Auto Detailing. As a senior at Westside High School, I've progressed our mobile detailing business with a focus on customer satisfaction. I take pride in doing the best possible work every time I provide our services. When I'm not working on cars, you can find me lifting weights, or singing in my free time.",
    image: "/images/team/siggy.webp",
  },
  {
    name: "Omar Shukry",
    position: "Co-Founder",
    bio: "Hello, my name is Omar Shukry, and starting Signature Auto Detailing pushed me to learn, adapt, and build something from the ground up. There's nothing more rewarding than putting in the work with my friends and seeing it pay off.",
    image: "/images/team/omar.webp",
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Meet Our Founders
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="card text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - Co-Founder of Signature Auto Detailing mobile auto detailing service`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-brand-red font-medium mb-3">{member.position}</p>
              <p className="text-slate-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
