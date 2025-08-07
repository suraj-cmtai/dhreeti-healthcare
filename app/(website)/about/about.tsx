"use client";

import TestimonialSection from "@/components/home/testimonial-section";
import CTA from "@/components/all/cta-section";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Users, Shield, Heart, Award, Target, Eye, CheckCircle, Star, Clock, Phone, Mail } from "lucide-react";
import HeroSection from "@/components/all/hero-section";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        {/* Page Header */}
        <HeroSection title={t('aboutPage.pageTitle')} description={t('aboutPage.pageDescription')} />

        {/* Detailed About Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full">
                    <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-800">{t('aboutPage.companyName')}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('aboutPage.heading.prefix')}{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      {t('aboutPage.heading.highlighted')}
                    </span>
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('aboutPage.paragraph1.prefix')}{" "}
                    <span className="font-semibold text-blue-600">{t('aboutPage.paragraph1.date')}</span>, {t('aboutPage.paragraph1.middle')}{" "}
                    <span className="font-semibold text-teal-600">{t('aboutPage.paragraph1.location')}</span>. {t('aboutPage.paragraph1.suffix')}
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('aboutPage.paragraph2')}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">{t('aboutPage.established')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-teal-600" />
                      <span className="text-sm text-gray-600">{t('aboutPage.location')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">{t('aboutPage.focus')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Shield className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">{t('aboutPage.stats.primaryCare.title')}</p>
                      <p className="text-sm opacity-90">{t('aboutPage.stats.primaryCare.subtitle')}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Heart className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">{t('aboutPage.stats.quality.title')}</p>
                      <p className="text-sm opacity-90">{t('aboutPage.stats.quality.subtitle')}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">{t('aboutPage.stats.accessible.title')}</p>
                      <p className="text-sm opacity-90">{t('aboutPage.stats.accessible.subtitle')}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Building2 className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">{t('aboutPage.stats.network.title')}</p>
                      <p className="text-sm opacity-90">{t('aboutPage.stats.network.subtitle')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('aboutPage.missionText')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('aboutPage.visionText')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.coreValues.prefix')}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {t('aboutPage.coreValues.highlighted')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('aboutPage.coreValues.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: t('aboutPage.values.compassion.title'),
                  description: t('aboutPage.values.compassion.description'),
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: Shield,
                  title: t('aboutPage.values.quality.title'),
                  description: t('aboutPage.values.quality.description'),
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Users,
                  title: t('aboutPage.values.community.title'),
                  description: t('aboutPage.values.community.description'),
                  color: "from-teal-500 to-teal-600"
                },
                {
                  icon: Target,
                  title: t('aboutPage.values.excellence.title'),
                  description: t('aboutPage.values.excellence.description'),
                  color: "from-green-500 to-emerald-500"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities & Services Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.facilities.prefix')}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {t('aboutPage.facilities.highlighted')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('aboutPage.facilities.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: t('aboutPage.services.primaryCare.title'),
                  description: t('aboutPage.services.primaryCare.description'),
                  features: t('aboutPage.services.primaryCare.features')
                },
                {
                  icon: Shield,
                  title: t('aboutPage.services.diagnostic.title'),
                  description: t('aboutPage.services.diagnostic.description'),
                  features: t('aboutPage.services.diagnostic.features')
                },
                {
                  icon: Users,
                  title: t('aboutPage.services.specialized.title'),
                  description: t('aboutPage.services.specialized.description'),
                  features: t('aboutPage.services.specialized.features')
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.achievements.prefix')}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {t('aboutPage.achievements.highlighted')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('aboutPage.achievements.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  number: t('aboutPage.stats.patients.number'), 
                  label: t('aboutPage.stats.patients.label'), 
                  icon: Users 
                },
                { 
                  number: t('aboutPage.stats.years.number'), 
                  label: t('aboutPage.stats.years.label'), 
                  icon: Calendar 
                },
                { 
                  number: t('aboutPage.stats.quality.number'), 
                  label: t('aboutPage.stats.quality.label'), 
                  icon: Award 
                },
                { 
                  number: t('aboutPage.stats.emergency.number'), 
                  label: t('aboutPage.stats.emergency.label'), 
                  icon: Clock 
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
                    <achievement.icon className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-lg opacity-90">{achievement.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />

        <TestimonialSection />
      </main>
    </div>
  )
}
