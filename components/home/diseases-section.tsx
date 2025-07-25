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
import { Phone, MapPin, Clock, Heart, Stethoscope, Shield } from "lucide-react"

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

  return (
    <section ref={ref} className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-x-hidden overflow-y-hidden relative">
      {/* Animated Gradient Blobs & Medical Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-teal-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.22, 0.32, 0.22] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-200/40 to-blue-200/40 rounded-full blur-3xl"
        />
        {/* Floating Medical Icons */}
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-16 left-24 w-16 h-16 text-blue-400/60"
        >
          <Heart className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 right-32 w-14 h-14 text-teal-400/60"
        >
          <Stethoscope className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-12 h-12 text-blue-400/40"
        >
          <Shield className="w-full h-full" />
        </motion.div>
      </div>
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className={`flex flex-col md:flex-row${layout === "right" ? " md:flex-row-reverse" : ""} gap-12 items-center justify-center`}>
          {/* Left or Right: Large, clean image only */}
          <motion.div
            initial={{ opacity: 0, x: layout === "right" ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: layout === "right" ? 40 : -40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={bodyImage || "/placeholder.svg"}
              alt={`${diseaseName} affected areas`}
              width={340}
              height={420}
              className="w-full h-auto max-h-[420px] object-contain"
              priority
            />
          </motion.div>

          {/* Content (title, paragraph, points) */}
          <motion.div
            initial={{ opacity: 0, x: layout === "right" ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: layout === "right" ? -40 : 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex flex-col gap-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {diseaseName}
              </span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-2 max-w-xl">
              {`Here are the most common symptoms associated with ${diseaseName}. If you experience any of these, consult a healthcare professional for proper diagnosis and treatment.`}
            </p>
            <div className="w-full flex flex-wrap gap-3">
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-teal-700 font-medium shadow-sm"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Treatment Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-16 mt-12"
        >
          <div className="mx-auto">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 rounded-2xl animate-pulse"
                >
                  <Stethoscope className="w-6 h-6 mr-3" />
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
      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </section>
  )
}