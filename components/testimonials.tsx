"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    quote:
      "Working with Nexus Consulting transformed our business. Their strategic insights helped us increase revenue by 40% in just one year.",
    author: "Emily Watson",
    position: "CEO, TechStart Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "EW",
    rating: 5,
  },
  {
    quote:
      "The team at Nexus provided actionable recommendations that were tailored to our specific challenges. Their hands-on approach made all the difference.",
    author: "Robert Chen",
    position: "COO, Global Logistics",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "RC",
    rating: 5,
  },
  {
    quote:
      "Their organizational development program helped us build a more cohesive team and improve our operational efficiency by 25%.",
    author: "Sophia Martinez",
    position: "HR Director, Innovate Corp",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "SM",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hear from organizations that have achieved remarkable results with our consulting services.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + index * 0.1}s`,
              }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

