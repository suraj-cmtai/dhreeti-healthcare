"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Building2,
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Heart,
  Stethoscope,
  Activity,
  Plus,
  Microscope,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AboutUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 max-w-7xl mx-auto w-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-teal-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-7xl mx-auto w-full">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-16 right-16 w-16 h-16 text-blue-400/80"
        >
          <Plus className="w-full h-full" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-20 w-12 h-12 text-teal-400/80"
        >
          <Stethoscope className="w-full h-full" />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-10 h-10 text-red-400/80"
        >
          <Heart className="w-full h-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 opacity-10">
            <Plus className="w-24 h-24 text-blue-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full">
                <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-800">DHREETI HEALTHCARE AND RESEARCH PRIVATE LIMITED
                </span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.description')}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4">
                  <Heart className="w-12 h-12" />
                </div>
                <div className="absolute top-8 right-8">
                  <Stethoscope className="w-10 h-10" />
                </div>
                <div className="absolute bottom-4 left-8">
                  <Activity className="w-14 h-14" />
                </div>
                <div className="absolute bottom-8 right-4">
                  <Plus className="w-8 h-8" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Microscope className="w-16 h-16" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-teal-600/90 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center relative overflow-hidden"
                  >
                    <Users className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">5000+</p>
                    <p className="text-sm opacity-90">Patients Served</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center relative overflow-hidden"
                  >
                    <Award className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">2+</p>
                    <p className="text-sm opacity-90">Years Experience</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center relative overflow-hidden"
                  >
                    <Shield className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm opacity-90">Quality Assured</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center relative overflow-hidden"
                  >
                    <Building2 className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm opacity-90">Healthcare</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <Heart className="w-6 h-6 text-red-500" />
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, -360],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <Stethoscope className="w-5 h-5 text-blue-600" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mission, Vision, Focus Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-blue-100 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 opacity-5">
              <Target className="w-16 h-16 text-blue-600" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Heart className="w-12 h-12 text-blue-600" />
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.missionText')}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-teal-100 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 opacity-5">
              <Eye className="w-16 h-16 text-teal-600" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Microscope className="w-12 h-12 text-teal-600" />
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.visionText')}
            </p>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-blue-100 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 opacity-5">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Activity className="w-12 h-12 text-teal-600" />
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.values')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.value1Title')}: {t('about.value1Text')}<br />
              {t('about.value2Title')}: {t('about.value2Text')}<br />
              {t('about.value3Title')}: {t('about.value3Text')}<br />
              {t('about.value4Title')}: {t('about.value4Text')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
