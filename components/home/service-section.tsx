"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Clock,
  TestTube,
  Scan,
  Activity,
  Baby,
  Pill,
  Stethoscope,
  Heart,
  Plus,
  Shield,
} from "lucide-react"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPaused, setIsPaused] = useState(false)

  const services = [
    {
      icon: Stethoscope,
      title: "O.P.D. Services",
      description: "Comprehensive outpatient department services with experienced doctors",
      schedule: {
        weekdays: "Monday to Friday: 8:00 AM - 6:00 PM",
        weekends: "Saturday & Sunday: 8:00 AM - 12:00 PM",
      },
      features: ["General Medicine", "Obstetrics & gynaecology"],
      bulletColor: "bg-blue-500",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: TestTube,
      title: "Pathology Services",
      description: "Complete blood and urine medical investigations with accurate results",
      features: [
        "All Kinds of Blood Tests", 
        "Clinical Hematology",
        "Clinical Biochemistry",
        "Clinical Microbiology",
        "Clinical Pathology"
      ],
      bulletColor: "bg-teal-500",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
    },
    {
      icon: Scan,
      title: "Radiology",
      description: "Advanced ultrasound imaging services for accurate diagnosis",
      features: [
        "Ultrasound (U.S.G.)", 
        "E.C.G."
      ],
      bulletColor: "bg-blue-500",
      color: "from-blue-500 to-teal-500",
      bgColor: "from-blue-50 to-teal-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Baby,
      title: "Surgery",
      description: "Comprehensive women's health and surgical services",
      features: [
        "Gynaecological surgery",
        "Minimally Invasive Surgery", 
        "Reproductive Health", 
        "Prenatal Care", 
        "Women's Wellness"
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "Complete pharmaceutical services with quality medications",
      features: ["Prescription Medicines", "Over-the-Counter Drugs", "Medical Supplies", "Health Consultations"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
  ]

  return (
    <section 
      ref={ref} 
      className="py-20 bg-white relative overflow-hidden w-full"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden max-w-7xl mx-auto w-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-teal-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-teal-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
      </div>
      {/* Floating Medical Vector Icons */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-auto max-w-7xl mx-auto w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Medical Cross */}
        <motion.div
          animate={!isPaused ? {
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          } : { rotate: 0, scale: 1 }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-12 h-12 text-blue-400/80"
        >
          <Plus className="w-full h-full" />
        </motion.div>
        {/* Floating Pills */}
        <motion.div
          animate={!isPaused ? {
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          } : { y: 0, rotate: 0 }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-16 w-8 h-8 text-green-400/80"
        >
          <Pill className="w-full h-full" />
        </motion.div>
        {/* Heart Monitor */}
        <motion.div
          animate={!isPaused ? {
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          } : { scale: 1, opacity: 0.6 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-16 w-10 h-10 text-red-400/80"
        >
          <Activity className="w-full h-full" />
        </motion.div>
        {/* Medical Shield */}
        <motion.div
          animate={!isPaused ? {
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1],
          } : { rotate: 0, scale: 1 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/4 w-9 h-9 text-blue-400/70"
        >
          <Shield className="w-full h-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services designed to meet all your medical needs under one roof
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 shadow-lg border ${service.borderColor} hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Add background medical icon inside each service card */}
              <div className="absolute top-4 right-4 opacity-5">
                <service.icon className="w-12 h-12" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-5">
                <Heart className="w-8 h-8" />
              </div>

              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{service.description}</p>

              {service.schedule && (
                <div className="space-y-2 mb-4 relative z-10">
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    <span>{service.schedule.weekdays}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-teal-600" />
                    <span>{service.schedule.weekends}</span>
                  </div>
                </div>
              )}

              {service.features && (
                <ul className="space-y-3 relative z-10 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-3 h-3 ${service.bulletColor || (service.title === "Pathology Services" ? "bg-teal-500" : service.title === "Radiology" ? "bg-blue-500" : `bg-gradient-to-r ${service.color}`)} rounded-full mr-3 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
