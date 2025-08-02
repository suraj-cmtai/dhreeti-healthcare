import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    description: string;
}

export default function HeroSection({ title, description }: HeroSectionProps) {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </section>
    );
}
