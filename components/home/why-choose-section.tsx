"use client"

import { motion, useScroll, Variants } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, TestTube, Shield, Heart, Scan, Activity } from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const diseases = [
  {
    icon: Activity,
    title: "Tuberculosis",
    description: "A bacterial infection primarily affecting the lungs, requiring comprehensive treatment.",
    symptoms: [
      "Persistent Cough",
      "Chest Pain",
      "Fatigue",
      "Weight Loss",
      "Night Sweats",
      "Fever"
    ]
  },
  {
    icon: Activity,
    title: "Dengue",
    description: "A viral infection spread by mosquitoes, causing severe flu-like symptoms.",
    symptoms: [
      "High Fever",
      "Severe Headache",
      "Joint Pain",
      "Rash",
      "Nausea",
      "Eye Pain"
    ]
  },
  {
    icon: Heart,
    title: "Hypertension",
    description: "High blood pressure condition requiring careful monitoring and management.",
    symptoms: [
      "Headaches",
      "Shortness of Breath",
      "Dizziness",
      "Chest Pain",
      "Vision Problems",
      "Irregular Heartbeat"
    ]
  },
  {
    icon: TestTube,
    title: "Diabetes",
    description: "A metabolic disorder affecting blood sugar levels and requiring lifestyle management.",
    symptoms: [
      "Excessive Thirst",
      "Frequent Urination",
      "Fatigue",
      "Blurred Vision",
      "Slow Healing",
      "Weight Changes"
    ]
  },
  {
    icon: Scan,
    title: "Thyroid",
    description: "Disorders affecting the thyroid gland and hormonal balance in the body.",
    symptoms: [
      "Weight Changes",
      "Fatigue",
      "Mood Changes",
      "Temperature Sensitivity",
      "Hair Loss",
      "Irregular Heartbeat"
    ]
  }
]

export default function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const cardProgresses = [0, 0.15, 0.3, 0.45, 0.6, 0.75]
  const progresses = cardProgresses.map((progress) => progress)

  return (
    <section
      id="why-choose"
      ref={containerRef}
      className="py-20 bg-gradient-section-light dark:bg-gradient-to-b dark:from-surface dark:to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Sticky Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="sticky top-24 h-fit p-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
              Expert treatment and care for various diseases with modern facilities and experienced specialists.
            </p>

            {/* Animated Background Elements */}
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-teal-100/50 rounded-full blur-xl"
              />
              <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-tr from-teal-100/50 to-blue-100/50 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Right Column - Stacking Cards */}
          <div className="relative">
            <div className="space-y-6">
              {diseases.map((disease, i) => {
                const Icon = disease.icon

                const y = progresses[i]
                const scale = 1 - i * 0.02
                const rotateX = -5 * i
                const opacity = i === 0 ? 1 : 0.85

                return (
                  <motion.div
                    key={i}
                    style={{
                      y: `${y * 100}%`,
                      rotateX: `${rotateX}deg`,
                      opacity,
                      top: `${6 + i * 2}rem`,
                    }}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: i * 0.1 }}
                    className={`group bg-gradient-to-br from-teal-50 to-blue-50 backdrop-blur-md rounded-2xl shadow-lg border border-teal-200 p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-200 sticky min-h-[420px]`}
                  >
                    <div className="relative z-20">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{disease.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{disease.description}</p>

                      {/* Symptom Tags */}
                      <div className="flex flex-wrap gap-2">
                        {disease.symptoms.map((symptom, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-teal-200 text-gray-700 group-hover:border-blue-200 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-2"></div>
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Background Icon */}
                    <div className="absolute top-4 right-4 opacity-5">
                      <Icon className="w-16 h-16" />
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-5">
                      <Heart className="w-12 h-12" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
