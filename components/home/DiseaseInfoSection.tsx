"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone, MapPin, Clock, Heart } from "lucide-react"

interface DiseaseInfoProps {
  diseaseName: string
  bodyImage: string
  symptoms: string[]
  cures: string[]
  layout?: "center" | "left" | "right"
}

export default function DiseaseInfoSection({
  diseaseName,
  bodyImage,
  symptoms,
  cures,
  layout = "center",
}: DiseaseInfoProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Responsive symptom display
  const getVisibleSymptoms = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return symptoms.slice(0, 4) // Mobile: max 4
      if (window.innerWidth < 1024) return symptoms.slice(0, 6) // Tablet: max 6
    }
    return symptoms // Desktop: all symptoms
  }

  const visibleSymptoms = getVisibleSymptoms()

  // Position bubbles around the border of the image container
  const getBorderPosition = (index: number, total: number) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    if (isMobile) {
      // Mobile: bubbles on the right side in vertical stack
      return {
        right: "-120px",
        top: `${20 + index * 60}px`,
      }
    }

    // Desktop/Tablet: position around the border of image container
    const imageWidth = 400
    const imageHeight = 500
    const bubbleOffset = 80

    // Distribute bubbles around the perimeter
    const perimeter = 2 * (imageWidth + imageHeight)
    const segmentLength = perimeter / total
    const currentPosition = index * segmentLength

    let x, y

    if (currentPosition <= imageWidth) {
      // Top edge
      x = currentPosition - imageWidth / 2
      y = -imageHeight / 2 - bubbleOffset
    } else if (currentPosition <= imageWidth + imageHeight) {
      // Right edge
      x = imageWidth / 2 + bubbleOffset
      y = currentPosition - imageWidth - imageHeight / 2
    } else if (currentPosition <= 2 * imageWidth + imageHeight) {
      // Bottom edge
      x = 2 * imageWidth + imageHeight - currentPosition - imageWidth / 2
      y = imageHeight / 2 + bubbleOffset
    } else {
      // Left edge
      x = -imageWidth / 2 - bubbleOffset
      y = imageHeight / 2 - (currentPosition - 2 * imageWidth - imageHeight)
    }

    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
    }
  }

  return (
    <section ref={ref} className="w-full py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-48"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {diseaseName}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about the symptoms and get expert treatment at Dhriti Clinic
          </p>
        </motion.div>

        {/* Main Disease Visualization */}
        <div className="flex justify-center mt-12 mb-12 md:mt-24 md:mb-48">
          {/* Mobile Layout: Stack image and bubbles vertically, grid for bubbles */}
          <div className="md:hidden flex flex-col items-center w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 mb-6"
                    >
                      <Image
                        src={bodyImage || "/placeholder.svg"}
                        alt="Human Anatomy"
                width={180}
                height={220}
                className="mx-auto filter drop-shadow-lg"
              />
              {/* Disease Name Overlay - Center of Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      >
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-blue-200">
                          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            {diseaseName}
                          </h3>
                        </div>
                      </motion.div>
                    </motion.div>
            {/* Symptom Bubbles: grid or horizontal scroll if >4 */}
            <div className={`w-full ${visibleSymptoms.length > 4 ? "overflow-x-auto" : ""} pb-2`}>
              <div className={`grid ${visibleSymptoms.length > 2 ? "grid-cols-2" : "grid-cols-1"} gap-3 min-w-[220px]`}>
                    {visibleSymptoms.map((symptom, index) => (
                      <motion.div
                        key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                        transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.08,
                          type: "spring",
                      stiffness: 180,
                      damping: 16,
                        }}
                    className="bg-white rounded-2xl px-4 py-3 shadow-lg border-2 border-blue-200 hover:border-teal-300 transition-all cursor-pointer group min-w-[140px] flex items-center space-x-2"
                      >
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800 whitespace-nowrap text-sm">{symptom}</span>
                      </motion.div>
                    ))}
                  </div>
            </div>
            </div>

            {/* Desktop/Tablet Layout */}
            <div className="hidden md:block relative">
              {/* Human Body Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <Image
                  src={bodyImage || "/placeholder.svg"}
                  alt="Human Anatomy"
                  width={400}
                  height={500}
                  className="mx-auto filter drop-shadow-2xl"
                />

                {/* Disease Name Overlay - Center of Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl border-2 border-blue-200">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      {diseaseName}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>

              {/* Symptom Bubbles - Around Border */}
              {visibleSymptoms.map((symptom, index) => {
                const position = getBorderPosition(index, visibleSymptoms.length)
              const bubbleClass = "bg-white rounded-2xl px-4 py-3 shadow-lg border-2 border-blue-200 hover:border-teal-300 transition-all cursor-pointer group min-w-max";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={position}
                  >
                    {/* Connecting Line to Center */}
                    <svg
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        width: "200px",
                        height: "200px",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <motion.line
                        x1="100"
                        y1="100"
                        x2="100"
                        y2="100"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="8,4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Floating Symptom Bubble */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="relative z-20"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                        }}
                      className={bubbleClass + " text-sm md:text-base px-3 md:px-4 py-2 md:py-3"}
                      >
                        <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                        <span className="font-semibold text-gray-800 whitespace-nowrap">{symptom}</span>
                        </div>
                    </motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
          </div>
        </div>

        {/* Cure Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mb-20"
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Heart className="w-6 h-6 mr-3" />
                View Treatment Options
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-600 text-center">
                  {diseaseName} Treatment & Care
                </DialogTitle>
                <DialogDescription className="text-gray-600 text-center">
                  Comprehensive treatment options and care instructions from our medical experts
                </DialogDescription>
              </DialogHeader>

              {/* Treatment Instructions */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Treatment Instructions</h3>
                <div className="grid gap-3">
                  {cures.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic Contact Details */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Contact Dhriti Clinic</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-red-600">Emergency: +91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Visit Us</p>
                      <p className="text-gray-600">123 Health Street</p>
                      <p className="text-gray-600">Medical District</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Timing</p>
                      <p className="text-gray-600">Mon-Sat: 9AM-8PM</p>
                      <p className="text-gray-600">Sunday: 10AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Now Button */}
              <div className="mt-6 text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Now for Consultation
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Clinic Details Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Expert Care at Dhriti Clinic</h3>
            <p className="text-gray-600">Our experienced doctors are here to help you manage and treat {diseaseName}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-sm text-red-600">Emergency: +91 98765 43211</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-600">123 Health Street</p>
              <p className="text-gray-600">Medical District</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Timing</h4>
              <p className="text-gray-600">Mon-Sat: 9AM-8PM</p>
              <p className="text-gray-600">Sunday: 10AM-6PM</p>
            </div>
          </div>
        </motion.div> */}

        {/* Final Contact Now Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="hidden md:inline-flex w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-xl font-semibold bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Phone className="w-6 h-6 mr-3" />
            Contact Now for Consultation
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}
