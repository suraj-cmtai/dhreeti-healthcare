"use client"

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Heart, Stethoscope, Activity, Pill, Shield, ArrowRight } from "lucide-react";
import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden pt-4 sm:pt-0">
        {/* Enhanced Blurred Gradient Circles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-teal-200/30 to-blue-200/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-300/20 to-teal-300/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        {/* Animated Floating Medical Icons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Plus (Medical Cross) - Top Left */}
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-12 left-12 w-16 h-16 text-blue-400/70"
          >
            <Plus className="w-full h-full" />
          </motion.div>
          {/* Heart - Top Right */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-20 right-16 w-14 h-14 text-red-400/80"
          >
            <Heart className="w-full h-full" />
          </motion.div>
          {/* Stethoscope - Center Left */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-1/2 left-10 -translate-y-1/2 w-12 h-12 text-teal-400/80"
          >
            <Stethoscope className="w-full h-full" />
          </motion.div>
          {/* Activity (Heartbeat) - Bottom Right */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-12 h-12 text-pink-400/80"
          >
            <Activity className="w-full h-full" />
          </motion.div>
          {/* Pill - Bottom Left */}
          <motion.div
            animate={{ rotate: [0, 180, 360], scale: [1, 0.8, 1] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-16 left-24 w-10 h-10 text-green-400/80"
          >
            <Pill className="w-full h-full" />
          </motion.div>
          {/* Shield - Center Right */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-1/2 right-10 -translate-y-1/2 w-12 h-12 text-blue-500/70"
          >
            <Shield className="w-full h-full" />
          </motion.div>
        </div>
        {/* Caduceus background image */}
        <Image
          src="/images/caduceus-glass.png"
          alt="Caduceus Symbol"
          fill
          className="object-contain object-center opacity-10 pointer-events-none select-none z-0"
          priority
        />
        {/* Circular pattern behind doctors */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <svg width="600" height="600" className="opacity-30" fill="none">
            <circle cx="300" cy="300" r="250" stroke="#1c6cb2" strokeWidth="8" opacity="0.12" />
            <circle cx="300" cy="300" r="180" stroke="#3ba0b0" strokeWidth="6" opacity="0.10" />
            <circle cx="300" cy="300" r="120" stroke="#47afb5" strokeWidth="4" opacity="0.08" />
          </svg>
        </div>
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 mt-16 sm:mt-0"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Welcome to{' '}
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  Dhreeti Clinic
                </motion.span>
              </h1>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                विश्वसनीय एवं किफायती स्वास्थ्य सेवा आपके लिए
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 max-w-xl">
              Since 2022, we've revolutionized healthcare by making top-tier services accessible and affordable. We combine modern facilities with experienced, compassionate doctors to provide a new standard of reliable care. Our mission is to build a healthier community by ensuring everyone has access to the best medical services without financial strain.             </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInScale}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-lg font-semibold shadow-md transition-all transform"
              >
                Book an appointment
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={fadeInScale}
              className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100 shadow-md transition-all"
            >
              <div className="flex -space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-white"
                >
                  <Shield className="w-4 h-4" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white"
                >
                  <Heart className="w-4 h-4" />
                </motion.div>
              </div>
              <span className="text-gray-700 font-medium">Trusted by 1000+ patients</span>
            </motion.div>
          </motion.div>

          {/* Right side - Doctor Images with fade mask */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 sm:mt-0"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/doctor-male.png"
                alt="Dr. Specialist"
                width={400}
                height={600}
                className="absolute left-1/2 top-[2%] sm:top-[5%] transform -translate-x-[60%] h-[80%] sm:h-[85%] w-auto object-contain z-10 transition-transform hover:scale-102"
                priority
              />
              <Image
                src="/images/doctor-female.png"
                alt="Dr. Expert"
                width={400}
                height={600}
                className="absolute left-1/2 top-[2%] sm:top-[5%] transform -translate-x-[40%] h-[80%] sm:h-[85%] w-auto object-contain z-20 transition-transform hover:scale-102"
                priority
              />

              {/* Text for Doctors Team */}
              <div className="absolute bottom-2 sm:bottom-6 rounded-lg left-1/2 transform -translate-x-1/2 z-20 bg-white/90 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-6 text-center w-[90%] sm:w-[600px]">
                <h3 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                Our Team of Expert Clinicians
                </h3>
                <p className="text-gray-700 text-xs sm:text-lg">
                Our team of dedicated specialists, all with over seven years of experience, provides compassionate, personalized most trusted and effective care.              </p>
              </div>

              {/* Background Circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-teal-100/30 to-blue-100/30 filter blur-md"></div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Compact Video Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto relative">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Take a Virtual Tour
              </h2>
            </motion.div>

            {/* Compact Video Container */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Corner Decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-teal-500/30 rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg"></div>

              {/* Glass Container */}
              <div className="relative backdrop-blur-sm bg-white/30 p-4 rounded-xl shadow-lg border border-white/20">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                  <VideoWithFallback />
                </div>

                {/* Small Info Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-teal-100/50 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-teal-500" />
                  <span className="text-gray-700 text-sm font-medium">Watch Our Story</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// VideoWithFallback component
function VideoWithFallback() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const handleToggle = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    // Use aspect-video to enforce 16:9 ratio
    <div className="relative w-full h-full aspect-video">
      {!videoError ? (
        <>
          <video
            ref={videoRef}
            src="/videos/dhreeti-clinic.mp4"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            style={{ background: "#fff", objectFit: "cover" }}
          />
          <button
            type="button"
            onClick={handleToggle}
            className="absolute inset-0 flex items-center justify-center focus:outline-none group z-10"
            tabIndex={0}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <span className="bg-white/80 rounded-full p-4 shadow-lg">
              {isPlaying ? (
                <Pause className="w-16 h-16 text-teal-500 group-hover:scale-110 transition-transform" />
              ) : (
                <Play className="w-16 h-16 text-teal-500 group-hover:scale-110 transition-transform" />
              )}
            </span>
          </button>
        </>
      ) : (
        <Image
            src="/logo-horizontal.png"
          alt="Dhreeti Clinic Logo"
          fill
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  )
}