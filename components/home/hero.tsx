"use client"

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Plus, Heart, Stethoscope, Activity, Pill, Shield } from "lucide-react";
import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Hero() {
    return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden pt-24">
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
        <div className="relative z-10 w-full max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Dhreeti Healthcare
                </span>
              </h1>
              <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                विश्वसनीय एवं किफायती स्वास्थ्य सेवा आपके लिए
              </p>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Providing reliable and affordable healthcare services with modern facilities and experienced doctors since 2022.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Book an appointment
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100 shadow-lg">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-white">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
              <span className="text-gray-700 font-medium">Trusted by thousands of patients</span>
            </div>
          </div>

          {/* Right side - Doctor Images with fade mask */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
            <div className="relative w-full h-full">
              <Image
                src="/images/doctor-male.png"
                alt="Dr. Specialist"
                width={400}
                height={600}
                className="absolute left-1/2 transform -translate-x-[60%] h-[90%] w-auto object-contain z-10"
                priority
              />
              <Image
                src="/images/doctor-female.png"
                alt="Dr. Expert"
                width={400}
                height={600}
                className="absolute left-1/2 transform -translate-x-[40%] h-[90%] w-auto object-contain z-20"
                priority
              />
              
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-teal-100/30 to-blue-100/30 filter blur-md"></div>
              </div>
          
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto z-10 px-4"
        >
          {/* 16:9 Aspect Ratio Container */}
          <div className="relative w-full aspect-video rounded-xl shadow-card-light overflow-hidden glass-light border border-primary/10">
            <VideoWithFallback />
          </div>
        </motion.div>
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
            src="/dhriti-clinic.mp4"
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
          alt="Dhreeti Healthcare Logo"
          fill
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  )
}