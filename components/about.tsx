"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=200&width=200",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Strategy Director",
    image: "/placeholder.svg?height=200&width=200",
    initials: "MC",
  },
  {
    name: "Olivia Rodriguez",
    role: "Operations Lead",
    image: "/placeholder.svg?height=200&width=200",
    initials: "OR",
  },
  {
    name: "David Kim",
    role: "Financial Advisor",
    image: "/placeholder.svg?height=200&width=200",
    initials: "DK",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              style={{
                transform: isInView ? "none" : "translateX(-50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                About Our Firm
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2010, SJ Consulting has been at the forefront of business transformation, helping
                organizations navigate complex challenges and capitalize on emerging opportunities.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our team of experienced consultants brings diverse expertise across industries, combining strategic
                thinking with practical implementation to deliver tangible results for our clients.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-blue-600 rounded"></div>
                  <span className="font-semibold">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-teal-500 rounded"></div>
                  <span className="font-semibold">200+ Clients Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-indigo-500 rounded"></div>
                  <span className="font-semibold">95% Success Rate</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white">
                Learn More About Us
              </Button>
            </div>

            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg blur-lg opacity-30"></div>
                <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Leadership Team</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {team.map((member, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <Avatar className="h-24 w-24 mb-3">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <h4 className="font-bold">{member.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

