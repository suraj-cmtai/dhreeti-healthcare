"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Scale,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/all/hero-section";
import { useLanguage } from "@/lib/language-context";

export default function TermsPage() {
  const { t } = useLanguage();
  
  const termsSections = [
    {
      title: t('terms.sections.acceptance.title'),
      icon: CheckCircle,
      content: t('terms.sections.acceptance.content')
    },
    {
      title: t('terms.sections.services.title'),
      icon: Shield,
      content: t('terms.sections.services.content')
    },
    {
      title: t('terms.sections.responsibilities.title'),
      icon: Users,
      content: t('terms.sections.responsibilities.content')
    },
    {
      title: t('terms.sections.payment.title'),
      icon: Scale,
      content: t('terms.sections.payment.content')
    },
    {
      title: t('terms.sections.privacy.title'),
      icon: Shield,
      content: t('terms.sections.privacy.content')
    },
    {
      title: t('terms.sections.liability.title'),
      icon: AlertTriangle,
      content: t('terms.sections.liability.content')
    },
    {
      title: t('terms.sections.appointment.title'),
      icon: Calendar,
      content: t('terms.sections.appointment.content')
    },
    {
      title: t('terms.sections.conduct.title'),
      icon: Award,
      content: t('terms.sections.conduct.content')
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: t('terms.contact.phone.label'),
      value: t('terms.contact.phone.value')
    },
    {
      icon: Mail,
      label: t('terms.contact.email.label'),
      value: t('terms.contact.email.value')
    },
    {
      icon: MapPin,
      label: t('terms.contact.address.label'),
      value: t('terms.contact.address.value')
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <HeroSection title={t('terms.pageTitle')} description={t('terms.pageDescription')} />


      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('terms.intro.title.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t('terms.intro.title.highlighted')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('terms.intro.description')}
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>

                <div className="space-y-3">
                  {Array.isArray(section.content) && section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('terms.additional.title')}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('terms.additional.governing.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('terms.additional.governing.description1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.additional.governing.description2')}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('terms.additional.severability.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('terms.additional.severability.description1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.additional.severability.description2')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-3xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('terms.contact.title')}</h3>
              <p className="text-xl opacity-90">
                {t('terms.contact.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{info.label}</h4>
                  <p className="opacity-90">{info.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('terms.cta.title')}</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              {t('terms.cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-md transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('terms.cta.contactButton')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" />
                {t('terms.cta.downloadButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}