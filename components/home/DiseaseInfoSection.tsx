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
import { Phone, MapPin, Clock, Heart, Stethoscope, Shield, Award } from "lucide-react"

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
        right: "-130px",
        top: `${20 + index * 65}px`,
      }
    }

    // Desktop/Tablet: position around the border of image container
    const imageWidth = 400
    const imageHeight = 500
    const bubbleOffset = 90

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
    <section ref={ref} className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
        {/* Section Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent inline-block">
              {diseaseName}
            </span>
          </h2>
        </motion.div> */}

        {/* Main Disease Visualization */}
        <div className="flex justify-center mt-4 mb-16 max-w-6xl mx-auto">
          {/* Mobile Layout: Stack image and bubbles vertically, grid for bubbles */}
          <div className="md:hidden flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 mb-12"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-3xl opacity-50 blur-sm"></div>
                <Image
                  src={bodyImage || "/placeholder.svg"}
                  alt={`${diseaseName} affected areas`}
                  width={280}
                  height={340}
                  className="relative mx-auto filter drop-shadow-xl rounded-2xl"
                  priority
                />
              </div>
              
              {/* Disease Name Overlay - Center of Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"
              >
                <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl border-2 border-blue-200/50">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    {diseaseName}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Symptom Bubbles: grid layout */}
            <div className="w-full pb-4 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                {visibleSymptoms.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 180,
                      damping: 16,
                    }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3.5 shadow-lg border border-blue-200/50 hover:border-teal-300/50 hover:shadow-xl transition-all cursor-pointer group transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transform group-hover:scale-110 transition-transform"></div>
                      <span className="font-medium text-gray-800 text-sm sm:text-base leading-tight">{symptom}</span>
                    </div>
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
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-100 to-teal-100 rounded-3xl opacity-40 blur-lg"></div>
                <Image
                  src={bodyImage || "/placeholder.svg"}
                  alt={`${diseaseName} affected areas`}
                  width={440}
                  height={550}
                  className="relative mx-auto filter drop-shadow-2xl rounded-2xl"
                  priority
                />
              </div>

              {/* Disease Name Overlay - Center of Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"
              >
                <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-xl shadow-xl border-2 border-blue-200/50">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    {diseaseName}
                  </h3>
                </div>
              </motion.div>
            </motion.div>

            {/* Symptom Bubbles - Around Border */}
            {visibleSymptoms.map((symptom, index) => {
              const position = getBorderPosition(index, visibleSymptoms.length)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.15,
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
                      width: "220px",
                      height: "220px",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.line
                      x1="110"
                      y1="110"
                      x2="110"
                      y2="110"
                      stroke="url(#gradient)"
                      strokeWidth="1.5"
                      strokeDasharray="6,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
                      transition={{ duration: 1.2, delay: 0.7 + index * 0.1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Floating Symptom Bubble */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 5 + index * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="relative z-20"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                      }}
                      className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-blue-200/50 hover:border-teal-300/50 transition-all cursor-pointer group min-w-max"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                        <span className="font-medium text-gray-800 whitespace-nowrap text-sm">{symptom}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Professional Treatment Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-16 mt-8"
        >
          <div className="mx-auto">            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                >
                  <Stethoscope className="w-5 h-5 mr-3" />
                  View Details
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                <DialogHeader className="text-center pb-6 border-b border-gray-200">
                  <DialogTitle className="text-3xl font-bold text-blue-600 mb-2">
                    {diseaseName} Treatment Protocol
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 text-lg">
                    Evidence-based medical treatment and comprehensive care guidelines
                  </DialogDescription>
                </DialogHeader>

                {/* Treatment Instructions */}
                <div className="mt-8">
                  <div className="flex items-center mb-6">
                    <Heart className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Medical Treatment Plan</h3>
                  </div>
                  <div className="space-y-4">
                    {cures.map((instruction, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200/50">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium leading-relaxed">{instruction}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Disclaimer */}
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider for proper diagnosis and treatment.
                  </p>
                </div>

                {/* Clinic Contact Details */}
                <div className="mt-8 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-blue-200/50">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dhriti Medical Clinic</h3>
                    <p className="text-gray-600">Advanced Healthcare Solutions • Board-Certified Physicians</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">Contact Us</p>
                        <p className="text-gray-700 font-medium">+91 98765 43210</p>
                        <p className="text-sm text-red-600 font-medium">Emergency: +91 98765 43211</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">Our Location</p>
                        <p className="text-gray-700">123 Health Street</p>
                        <p className="text-gray-700">Medical District, City</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">Operating Hours</p>
                        <p className="text-gray-700">Mon-Sat: 9AM-8PM</p>
                        <p className="text-gray-700">Sunday: 10AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Action */}
                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Schedule Professional Consultation
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  )
}