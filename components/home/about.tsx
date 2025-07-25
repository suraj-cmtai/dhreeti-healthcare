"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Building2,
  Target,
  Eye,
  Award,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Heart,
  Stethoscope,
  Activity,
  Plus,
  Microscope,
  Pill,
  Zap,
} from "lucide-react"

export default function AboutUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden w-full">
      {/* Enhanced Background Pattern with Medical Vectors */}
      <div className="absolute inset-0 opacity-5 max-w-7xl mx-auto w-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-teal-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Medical Vector Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-7xl mx-auto w-full">
        {/* Large Medical Cross */}
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

        {/* Floating Stethoscope */}
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

        {/* Heart Beat */}
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

        {/* DNA Helix Representation */}
        <motion.div
          animate={{
            rotate: [0, 360],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/3 left-16 w-8 h-8 text-blue-400/70"
        >
          <Activity className="w-full h-full" />
        </motion.div>

        {/* Microscope */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-1/3 w-14 h-14 text-teal-400/70"
        >
          <Microscope className="w-full h-full" />
        </motion.div>

        {/* Pills */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-2/3 left-1/3 w-6 h-6 text-green-400/80"
        >
          <Pill className="w-full h-full" />
        </motion.div>

        {/* Medical Shield */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/2 w-12 h-12 text-blue-400/70"
        >
          <Shield className="w-full h-full" />
        </motion.div>

        {/* Lightning/Energy */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 w-8 h-8 text-yellow-400/80"
        >
          <Zap className="w-full h-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 relative z-10">
        {/* Section Header with Medical Vector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative Medical Cross Behind Title */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 opacity-10">
            <Plus className="w-24 h-24 text-blue-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Dhreeti Healthcare
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advancing healthcare through innovative manufacturing and dedicated research since 2022
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
                <span className="text-sm font-semibold text-blue-800">Dhreeti Healthcare and Research Pvt. Ltd.</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Dhreeti Healthcare and Research Private Limited is dedicated to advancing healthcare through innovative
                manufacturing and dedicated research. Incorporated on{" "}
                <span className="font-semibold text-blue-600">February 16, 2022</span>, this private limited company is
                based in <span className="font-semibold text-teal-600">Arrah, Bihar</span>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The core business involves the manufacture of chemical products for healthcare applications. The company
                is committed to exploring new frontiers in this area, aiming to contribute significantly to the
                healthcare sector.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We strive to maintain the highest standards of quality and ethical practices in all endeavors, ensuring
                patient safety and satisfaction through our innovative solutions.
              </p>
            </div>

            {/* Company Stats */}
            
          </motion.div>

          {/* Right Content - Enhanced Visual Elements with Medical Vectors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 text-white overflow-hidden">
              {/* Background Medical Pattern */}
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
                    {/* Background Icon */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Users className="w-12 h-12" />
                    </div> */}
                    <Users className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">5000+</p>
                    <p className="text-sm opacity-90">Patients Served</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center relative overflow-hidden"
                  >
                    {/* Background Icon */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Award className="w-12 h-12" />
                    </div> */}
                    <Award className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">2+</p>
                    <p className="text-sm opacity-90">Years Experience</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center relative overflow-hidden"
                  >
                    {/* Background Icon */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Shield className="w-12 h-12" />
                    </div> */}
                    <Shield className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm opacity-90">Quality Assured</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center relative overflow-hidden"
                  >
                    {/* Background Icon */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Building2 className="w-12 h-12" />
                    </div> */}
                    <Building2 className="w-8 h-8 mx-auto mb-2 relative z-10" />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm opacity-90">Healthcare</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Medical Icons Around the Card */}
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

        {/* Enhanced Mission, Vision, Focus with Medical Vectors */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Medical Pattern */}
            <div className="absolute top-4 right-4 opacity-5">
              <Target className="w-16 h-16 text-blue-600" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Heart className="w-12 h-12 text-blue-600" />
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To contribute to a healthier society by developing high-quality chemical products for healthcare
              applications and conducting research to find innovative solutions for medical challenges.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Medical Pattern */}
            <div className="absolute top-4 right-4 opacity-5">
              <Eye className="w-16 h-16 text-teal-600" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Microscope className="w-12 h-12 text-teal-600" />
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a recognized leader in the healthcare manufacturing and research sector, known for our commitment to
              quality, innovation, and societal well-being.
            </p>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Medical Pattern */}
            <div className="absolute top-4 right-4 opacity-5">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Activity className="w-12 h-12 text-teal-600" />
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to maintaining the highest quality standards in our products and operations, ensuring
              patient safety and satisfaction through ethical practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
