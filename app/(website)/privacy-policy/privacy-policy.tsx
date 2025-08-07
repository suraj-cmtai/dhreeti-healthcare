"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Users,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/all/hero-section";
import { useLanguage } from "@/lib/language-context";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();
  
  const privacySections = [
    {
      title: t('privacy.sections.information.title'),
      icon: Eye,
      content: t('privacy.sections.information.content')
    },
    {
      title: t('privacy.sections.usage.title'),
      icon: Users,
      content: t('privacy.sections.usage.content')
    },
    {
      title: t('privacy.sections.sharing.title'),
      icon: Shield,
      content: t('privacy.sections.sharing.content')
    },
    {
      title: t('privacy.sections.security.title'),
      icon: Lock,
      content: t('privacy.sections.security.content')
    },
    {
      title: t('privacy.sections.rights.title'),
      icon: CheckCircle,
      content: t('privacy.sections.rights.content')
    },
    {
      title: t('privacy.sections.retention.title'),
      icon: Calendar,
      content: t('privacy.sections.retention.content')
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: t('privacy.contact.phone.label'),
      value: t('privacy.contact.phone.value')
    },
    {
      icon: Mail,
      label: t('privacy.contact.email.label'),
      value: t('privacy.contact.email.value')
    },
    {
      icon: MapPin,
      label: t('privacy.contact.address.label'),
      value: t('privacy.contact.address.value')
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <HeroSection title={t('privacy.pageTitle')} description={t('privacy.pageDescription')} />

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
              {t('privacy.intro.title.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t('privacy.intro.title.highlighted')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('privacy.intro.description')}
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {privacySections.map((section, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900">{t('privacy.additional.title')}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('privacy.additional.updates.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.additional.updates.description1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.additional.updates.description2')}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('privacy.additional.compliance.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.additional.compliance.description1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.additional.compliance.description2')}
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
              <h3 className="text-3xl font-bold mb-4">{t('privacy.contact.title')}</h3>
              <p className="text-xl opacity-90">
                {t('privacy.contact.description')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('privacy.cta.title')}</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              {t('privacy.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-md transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('privacy.cta.contactButton')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" />
                {t('privacy.cta.downloadButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}