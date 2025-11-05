"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const teamMembers = [
  {
    name: "Sigmund Almazar",
    position: "Co-Founder",
    bio: "Hi, I'm Sigmund Almazar, one of the owners of Detail Omaha. As a senior at Westside High School, I've progressed our mobile detailing business with a focus on customer satisfaction. I take pride in doing the best possible work every time I provide our services. When I'm not working on cars, you can find me lifting weights, or singing in my free time.",
    image: "/images/team/siggy.webp",
  },
  {
    name: "Jack Thiel",
    position: "Co-Founder",
    bio: "I'm Jack Thiel, a senior at Westside High School. I'm in Detail Omaha because I love serving the community and meeting new people while providing quality services.",
    image: "/images/team/jack.webp",
  },
  {
    name: "Bobby Snodgrass",
    position: "Co-Founder",
    bio: "My name is Bobby Snodgrass, and I am 18 years old. My favorite thing about detailing is seeing the customers excitement after seeing the final result.",
    image: "/images/team/bobby.webp",
  },
  {
    name: "Omar Shukry",
    position: "Co-Founder",
    bio: "Hello, my name is Omar Shukry, and starting Detail Omaha pushed me to learn, adapt, and build something from the ground up. There's nothing more rewarding than putting in the work with my friends and seeing it pay off.",
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
    <section className="py-16 bg-zinc-900" ref={ref}>
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/team/team-group.webp"
              alt="Detail Omaha Team - Mobile Auto Detailing Experts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold">Our Team</h3>
              <p className="text-gray-300">
                Young entrepreneurs passionate about delivering exceptional mobile detailing services
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="card text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - Co-Founder of Detail Omaha mobile auto detailing service`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-brand-red font-medium mb-3">{member.position}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
