"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Lightbulb, TrendingUp, Users } from "lucide-react"

const services = [
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Strategic Planning",
    description: "Develop comprehensive business strategies aligned with your goals and market opportunities.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
    title: "Performance Optimization",
    description: "Identify inefficiencies and implement solutions to enhance operational performance.",
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
    title: "Organizational Development",
    description: "Build high-performing teams and create structures that support your business objectives.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-amber-600 dark:text-amber-400" />,
    title: "Innovation Consulting",
    description: "Transform ideas into actionable strategies and develop new products or services.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive consulting solutions tailored to meet your business needs and drive sustainable growth.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + index * 0.1}s`,
              }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-gray-800">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

