"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  TestTube, 
  Scan, 
  Pill, 
  Heart, 
  Baby, 
  Activity, 
  Microscope, 
  Shield, 
  CheckCircle,
  Clock,
  Users,
  Award,
  Phone,
  Calendar,
  Eye,
  Droplets,
  Syringe,
  Thermometer,
  FileText,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/all/hero-section";
import { useRouter } from "next/navigation"; 
import SchemeSection from "@/components/home/scheme-section";
import { useLanguage } from "@/lib/language-context";

export default function ServicesPage() {
  const router = useRouter();
  const { t } = useLanguage();
  
  const mainServices = [
    {
      id: 1,
      icon: Stethoscope,
      title: t('services.opdServices.title'),
      description: t('services.opdServices.description'),
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      subCards: [
        {
          title: t('servicesPage.opd.generalMedicine.title'),
          icon: Heart,
          description: t('servicesPage.opd.generalMedicine.description'),
          features: t('servicesPage.opd.generalMedicine.features'),
          timing: t('servicesPage.opd.generalMedicine.timing')
        },
        {
          title: t('servicesPage.opd.gynecology.title'),
          icon: Baby,
          description: t('servicesPage.opd.gynecology.description'),
          features: t('servicesPage.opd.gynecology.features'),
          timing: t('servicesPage.opd.gynecology.timing')
        },
        {
          title: t('servicesPage.opd.healthCheckups.title'),
          icon: Users,
          description: t('servicesPage.opd.healthCheckups.description'),
          features: t('servicesPage.opd.healthCheckups.features'),
          timing: t('servicesPage.opd.healthCheckups.timing')
        },
        {
          title: t('servicesPage.opd.emergencyCare.title'),
          icon: Shield,
          description: t('servicesPage.opd.emergencyCare.description'),
          features: t('servicesPage.opd.emergencyCare.features'),
          timing: t('servicesPage.opd.emergencyCare.timing')
        }
      ]
    },
    {
      id: 2,
      icon: TestTube,
      title: t('services.pathology.title'),
      description: t('services.pathology.description'),
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      subCards: [
        {
          title: t('servicesPage.pathology.hematology.title'),
          icon: Droplets,
          description: t('servicesPage.pathology.hematology.description'),
          features: t('servicesPage.pathology.hematology.features'),
          timing: t('servicesPage.pathology.hematology.timing')
        },
        {
          title: t('servicesPage.pathology.biochemistry.title'),
          icon: Syringe,
          description: t('servicesPage.pathology.biochemistry.description'),
          features: t('servicesPage.pathology.biochemistry.features'),
          timing: t('servicesPage.pathology.biochemistry.timing')
        },
        {
          title: t('servicesPage.pathology.microbiology.title'),
          icon: Microscope,
          description: t('servicesPage.pathology.microbiology.description'),
          features: t('servicesPage.pathology.microbiology.features'),
          timing: t('servicesPage.pathology.microbiology.timing')
        },
        {
          title: t('servicesPage.pathology.clinical.title'),
          icon: FileText,
          description: t('servicesPage.pathology.clinical.description'),
          features: t('servicesPage.pathology.clinical.features'),
          timing: t('servicesPage.pathology.clinical.timing')
        },
        {
          title: t('servicesPage.pathology.urinalysis.title'),
          icon: Thermometer,
          description: t('servicesPage.pathology.urinalysis.description'),
          features: t('servicesPage.pathology.urinalysis.features'),
          timing: t('servicesPage.pathology.urinalysis.timing')
        }
      ]
    },
    {
      id: 3,
      icon: Scan,
      title: t('services.radiology.title'),
      description: t('services.radiology.description'),
      color: "from-blue-500 to-teal-500",
      bgColor: "from-blue-50 to-teal-50",
      borderColor: "border-blue-200",
      subCards: [
        {
          title: t('servicesPage.radiology.ultrasound.title'),
          icon: Eye,
          description: t('servicesPage.radiology.ultrasound.description'),
          features: t('servicesPage.radiology.ultrasound.features'),
          timing: t('servicesPage.radiology.ultrasound.timing')
        },
        {
          title: t('servicesPage.radiology.ecg.title'),
          icon: Activity,
          description: t('servicesPage.radiology.ecg.description'),
          features: t('servicesPage.radiology.ecg.features'),
          timing: t('servicesPage.radiology.ecg.timing')
        },
        {
          title: t('servicesPage.radiology.imaging.title'),
          icon: Scan,
          description: t('servicesPage.radiology.imaging.description'),
          features: t('servicesPage.radiology.imaging.features'),
          timing: t('servicesPage.radiology.imaging.timing')
        },
        {
          title: t('servicesPage.radiology.emergency.title'),
          icon: Shield,
          description: t('servicesPage.radiology.emergency.description'),
          features: t('servicesPage.radiology.emergency.features'),
          timing: t('servicesPage.radiology.emergency.timing')
        }
      ]
    },
    {
      id: 4,
      icon: Pill,
      title: t('services.pharmacy.title'),
      description: t('services.pharmacy.description'),
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      subCards: [
        {
          title: t('servicesPage.pharmacy.prescription.title'),
          icon: Pill,
          description: t('servicesPage.pharmacy.prescription.description'),
          features: t('servicesPage.pharmacy.prescription.features'),
          timing: t('servicesPage.pharmacy.prescription.timing')
        },
        {
          title: t('servicesPage.pharmacy.surgical.title'),
          icon: Shield,
          description: t('servicesPage.pharmacy.surgical.description'),
          features: t('servicesPage.pharmacy.surgical.features'),
          timing: t('servicesPage.pharmacy.surgical.timing')
        },
        {
          title: t('servicesPage.pharmacy.supplements.title'),
          icon: Heart,
          description: t('servicesPage.pharmacy.supplements.description'),
          features: t('servicesPage.pharmacy.supplements.features'),
          timing: t('servicesPage.pharmacy.supplements.timing')
        },
        {
          title: t('servicesPage.pharmacy.consultation.title'),
          icon: Users,
          description: t('servicesPage.pharmacy.consultation.description'),
          features: t('servicesPage.pharmacy.consultation.features'),
          timing: t('servicesPage.pharmacy.consultation.timing')
        },
        {
          title: t('servicesPage.pharmacy.delivery.title'),
          icon: MapPin,
          description: t('servicesPage.pharmacy.delivery.description'),
          features: t('servicesPage.pharmacy.delivery.features'),
          timing: t('servicesPage.pharmacy.delivery.timing')
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Heart,
      title: t('servicesPage.additional.emergency.title'),
      description: t('servicesPage.additional.emergency.description'),
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: t('servicesPage.additional.checkups.title'),
      description: t('servicesPage.additional.checkups.description'),
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: t('servicesPage.additional.preventive.title'),
      description: t('servicesPage.additional.preventive.description'),
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: FileText,
      title: t('servicesPage.additional.records.title'),
      description: t('servicesPage.additional.records.description'),
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <HeroSection title={t('servicesPage.pageTitle')} description={t('servicesPage.pageDescription')} />

      {/* Main Services with Sub-Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('servicesPage.mainHeading.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t('servicesPage.mainHeading.highlighted')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesPage.mainHeading.description')}
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="space-y-16">
            {mainServices.map((service, serviceIndex) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
                className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-xl border ${service.borderColor} relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-8 right-8 opacity-5">
                  <service.icon className="w-24 h-24" />
                </div>

                {/* Main Service Header */}
                <div className="flex items-center mb-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-lg text-gray-600">{service.description}</p>
                  </div>
                </div>

                {/* Sub-Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {service.subCards.map((subCard, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.2 + subIndex * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          <subCard.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{subCard.title}</h4>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{subCard.description}</p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <div className="space-y-2">
                          {Array.isArray(subCard.features) && subCard.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-700">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Timing */}
                      <div className="flex items-center text-xs text-gray-600">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{subCard.timing}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-12 mt-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('servicesPage.additionalHeading.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t('servicesPage.additionalHeading.highlighted')}
              </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('servicesPage.whyChoose.title.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t('servicesPage.whyChoose.title.highlighted')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesPage.whyChoose.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: t('servicesPage.whyChoose.expertTeam.title'),
                description: t('servicesPage.whyChoose.expertTeam.description')
              },
              {
                icon: Award,
                title: t('servicesPage.whyChoose.qualityAssured.title'),
                description: t('servicesPage.whyChoose.qualityAssured.description')
              },
              {
                icon: Clock,
                title: t('servicesPage.whyChoose.quickService.title'),
                description: t('servicesPage.whyChoose.quickService.description')
              },
              {
                icon: Shield,
                title: t('servicesPage.whyChoose.comprehensiveCare.title'),
                description: t('servicesPage.whyChoose.comprehensiveCare.description')
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SchemeSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('servicesPage.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('servicesPage.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => router.push("/book-appointment")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-md transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('servicesPage.cta.bookButton')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("tel:+919901515300")}
                className="border-2 border-white text-primary hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('servicesPage.cta.callButton')} {t('contact.phone1')}
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{t('contact.address').split('\n')[1]}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{t('servicesPage.cta.emergencyCare')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>{t('servicesPage.cta.qualityAssured')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
