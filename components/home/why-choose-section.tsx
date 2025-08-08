"use client"

import { motion } from "framer-motion"
import { TestTube, Shield, Heart, Scan, Activity } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Define the disease type
interface Disease {
  icon: any;
  title: string;
  symptoms: string[];
}

const diseases: Disease[] = [
  {
    icon: Activity,
    title: "tuberculosis",
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
    title: "dengue",
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
    title: "hypertension",
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
    title: "diabetes",
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
    title: "thyroid",
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
  const { t } = useLanguage()
  
  // Duplicate the diseases array for seamless looping
  const marqueeDiseases = [...diseases, ...diseases]

  return (
    <section
      id="why-choose"
      className="relative py-12 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-teal-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/40 to-blue-200/40 rounded-full blur-3xl"
        />
      </div>
      <div className="mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-teal-700 font-semibold text-sm shadow">
            <Shield className="w-5 h-5 text-teal-500" />
            {t('whyChoose.title')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {t('whyChoose.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('whyChoose.description')}
          </p>
        </div>
        {/* Marquee Row */}
        <div className="relative overflow-x-hidden px-8 md:px-16 pt-4 pb-8">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: [0, -1920] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            style={{ willChange: "transform" }}
          >
            {marqueeDiseases.map((disease, i) => {
              const Icon = disease.icon
              // Get disease key
              const diseaseKey = disease.title;
              // Try to get translated title, description and symptoms
              const translatedTitle = t(`diseases.${diseaseKey}.name`);
              const translatedDescription = t(`diseases.${diseaseKey}.description`);
              const translatedSymptoms = t(`diseases.${diseaseKey}.symptoms`);
              
              // Ensure symptoms is an array
              const symptomsArray: string[] = Array.isArray(translatedSymptoms) ? translatedSymptoms : disease.symptoms;
              
              return (
                <div
                  key={i}
                  className="group bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-teal-200 p-8 pt-16 min-w-[340px] max-w-xs flex-shrink-0 hover:shadow-3xl transition-all duration-300 hover:border-blue-300 relative overflow-hidden"
                >
                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute top-8 right-4 w-14 h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg z-0"
                  >
                    <Icon className="w-7 h-7 text-teal-500" />
                  </motion.div>
                  <div className="relative z-20">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{translatedTitle}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{translatedDescription}</p>
                    {/* Symptom Tags */}
                    <div className="flex flex-wrap gap-2">
                      {symptomsArray.slice(0, 6).map((symptom: string, index: number) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-white to-teal-50 border border-teal-200 text-gray-700 group-hover:border-blue-200 transition-colors shadow-sm"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-2"></span>
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Background Icon */}
                  <div className="absolute top-4 right-4 opacity-5">
                    <Icon className="w-12 h-12" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-5">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
