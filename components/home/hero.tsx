"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Plus, Heart, Stethoscope, Activity, Pill, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh]  pb-6 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
      {/* Blurred Gradient Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-teal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-teal-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-300/30 to-teal-300/30 rounded-full blur-2xl"></div>
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
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center justify-center h-full">
        {/* Heading and description */}
        <div className="text-center max-w-2xl mx-auto mt-4 md:mt-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight drop-shadow-[0_2px_8px_rgba(44,44,44,0.10)]">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Dhreeti Healthcare</span>
          </h1>
          <p className="mt-2 text-lg md:text-xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold drop-shadow-md">
            विश्वसनीय एवं किफायती स्वास्थ्य सेवा आपके लिए
          </p>
          <p className="mt-1 text-base md:text-lg text-gray-500">
            Providing reliable and affordable healthcare services with modern facilities and experienced doctors since 2022.
          </p>
        </div>
        {/* Doctor images */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mt-4 md:mt-6 h-[28vh] md:h-[36vh] lg:h-[40vh]">
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/doctor-male.png"
              alt="Dr. Specialist"
              width={180}
              height={260}
              className="w-[180px] h-[80%] md:w-[240px] md:h-[300px] lg:w-[360px] lg:h-full object-contain -mr-4 md:-mr-8 z-10"
              priority
            />
            <Image
              src="/images/doctor-female.png"
              alt="Dr. Expert"
              width={180}
              height={260}
              className="w-[180px] h-[80%] md:w-[240px] md:h-[300px] lg:w-[360px] lg:h-full object-contain -ml-4 md:-ml-8 z-20"
              priority
            />
          </div>
        </div>
        {/* Tag line below doctors */}
        <div className="mt-3 px-6 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-base shadow-md text-center">
          Our Specialists
        </div>
        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 text-base font-semibold shadow-xl hover:shadow-2xl transition-all border-0"
          >
            Book an appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-teal-400 text-teal-700 hover:bg-teal-50 px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all bg-white"
          >
            <PlayCircle className="w-5 h-5 mr-2" />
            Watch videos
          </Button>
        </div>
      </div>
    </section>
  );
}