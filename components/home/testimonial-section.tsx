"use client"

import { motion, Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const testimonials = [
  {
    name: "Priya Sharma",
    image: "/indian-woman-patient-smiling.png",
    rating: 5,
    text: "Excellent care and very professional staff. Dr. was very patient in explaining my condition and the treatment options. Highly recommended!",
    treatment: "Diabetes Management",
  },
  {
    name: "Rajesh Kumar",
    image:
      "/male-doctor.png",
    rating: 5,
    text: "The diagnostic services are top-notch. Quick results and accurate reports. The staff is courteous and the facility is very clean.",
    treatment: "Health Checkup",
  },
  {
    name: "Anita Patel",
    image: "/female-doctor.png",
    rating: 5,
    text: "I've been coming here for my regular checkups for over a year. The doctors are knowledgeable and the service is consistently good.",
    treatment: "Preventive Care",
  },
  {
    name: "Suresh Gupta",
    image: "/male-doctor.png",
    rating: 5,
    text: "Great experience with the cardiology department. The ECG service was quick and the doctor explained everything clearly.",
    treatment: "Cardiac Care",
  },
  {
    name: "Meera Singh",
    image: "/female-patient.png",
    rating: 5,
    text: "The gynecology services are excellent. Very comfortable environment and professional care. Thank you for the wonderful service!",
    treatment: "Women's Health",
  },
  {
    name: "Amit Verma",
    image: "/male-patient.png",
    rating: 5,
    text: "Outstanding pathology services. Results were delivered on time and the staff was very helpful throughout the process.",
    treatment: "Lab Tests",
  },
]

// Duplicate testimonials for seamless loop
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

export default function TestimonialSection() {
  const [currentX, setCurrentX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentX((prev) => {
        const cardWidth = 384 // w-96 = 384px
        const gap = 24 // gap-6 = 24px
        const moveDistance = cardWidth + gap
        const resetPoint = -(testimonials.length * moveDistance)

        if (prev <= resetPoint) {
          return 0
        }
        return prev - 2
      })
    }, 30) // Faster, smooth continuous movement

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-teal-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-teal-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          variants={fadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from our valued patients who trust us with their healthcare
          </p>
        </motion.div>

        {/* Continuous Sliding Testimonials */}
        <div className="relative px-4">
          <div className="overflow-hidden py-8 px-4">
            <motion.div
              className="flex gap-6 py-4"
              style={{
                transform: `translateX(${currentX}px)`,
                width: `${extendedTestimonials.length * 408}px`, // 384px + 24px gap
              }}
              transition={{ type: "tween", ease: "linear", duration: 0 }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 w-96 p-3"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="h-full bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl group backdrop-blur-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {testimonial.image.startsWith("https://") ? (
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-teal-200">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ) : (
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full border-2 border-teal-200"
                          />
                        )}
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-medium">{testimonial.treatment}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-teal-500 text-teal-500" />
                        ))}
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal-300" />
                        <p className="text-gray-600 italic pl-6 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays for Seamless Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10 my-8" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none z-10 my-8" />
        </div>

      </div>
    </section>
  )
}
