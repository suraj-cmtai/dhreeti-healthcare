"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Heart, 
  Star,
  Calendar,
  Clock,
  Shield,
  Users,
  Building2,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CTA from "@/components/all/cta-section";
import HeroSection from "@/components/all/hero-section";
import { useLanguage } from "@/lib/language-context";

interface Doctor {
  id: number;
  name: string;
  image: string;
  specialization: string;
  experience: number;
  location: string;
  phone: string;
  email: string;
  education: string;
  role: string;
  additionalRole: string;
  about: string;
  expertise: string[];
  availability: string;
}

export default function DoctorsPage() {
  const { t } = useLanguage();
  
  const getExpertise = (key: string): string[] => {
    const expertise = t(key);
    return Array.isArray(expertise) ? expertise : [];
  };
  
  const doctors: Doctor[] = [
    {
      id: 1,
      name: t('doctorsPage.doctors.pragya.name'),
      image: "/doctor-female.png",
      specialization: t('doctorsPage.doctors.pragya.specialization'),
      experience: 10,
      location: t('doctorsPage.doctors.pragya.location'),
      phone: t('contact.phone2'),
      email: t('footer.email'),
      education: t('doctorsPage.doctors.pragya.education'),
      role: t('doctorsPage.doctors.pragya.role'),
      additionalRole: t('doctorsPage.doctors.pragya.additionalRole'),
      about: t('doctorsPage.doctors.pragya.about'),
      expertise: getExpertise('doctorsPage.doctors.pragya.expertise'),
      availability: t('doctorsPage.doctors.pragya.availability')
    },
    {
      id: 2,
      name: t('doctorsPage.doctors.ganesh.name'),
      image: "/doctor-male.png",
      specialization: t('doctorsPage.doctors.ganesh.specialization'),
      experience: 10,
      location: t('doctorsPage.doctors.ganesh.location'),
      phone: t('contact.phone1'),
      email: t('footer.email'),
      education: t('doctorsPage.doctors.ganesh.education'),
      role: t('doctorsPage.doctors.ganesh.role'),
      additionalRole: t('doctorsPage.doctors.ganesh.additionalRole'),
      about: t('doctorsPage.doctors.ganesh.about'),
      expertise: getExpertise('doctorsPage.doctors.ganesh.expertise'),
      availability: t('doctorsPage.doctors.ganesh.availability')
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <HeroSection title={t('doctorsPage.pageTitle')} description={t('doctorsPage.pageDescription')} />

      {/* Doctors Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className={`mb-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:flex lg:items-center lg:gap-16">
                {/* Doctor Image & Basic Info */}
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-6">
                      <div className="w-48 h-48 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                        <Image src={doctor.image} alt={doctor.name} width={450} height={450} className="rounded-full" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-3">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                    <p className="text-2xl text-teal-600 font-semibold mb-1">{doctor.specialization}</p>
                    <p className="text-lg text-gray-600 mb-4">{doctor.role}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{doctor.education}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <Clock className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-700">{t('doctorsPage.experienceYears').replace('{years}', doctor.experience.toString())}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{doctor.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                      <Button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-xs sm:text-sm lg:text-base px-2 sm:px-4">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {t('doctorsPage.bookAppointment')}
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white text-primary hover:bg-white hover:text-primary border-primary hover:border-primary min-w-0 text-xs sm:text-sm lg:text-base px-2 sm:px-4"
                      >
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {t('doctorsPage.callNow')}
                      </Button>
                    </div>
                    
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="lg:w-2/3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-white/50">
                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{t('doctorsPage.contactInfo.phone')}</p>
                          <p className="font-semibold text-gray-900">{doctor.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{t('doctorsPage.contactInfo.email')}</p>
                          <p className="font-semibold text-gray-900">{doctor.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{t('doctorsPage.contactInfo.additionalRole')}</p>
                          <p className="font-semibold text-gray-900 text-sm">{doctor.additionalRole}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{t('doctorsPage.contactInfo.availability')}</p>
                          <p className="font-semibold text-gray-900 text-sm">{doctor.availability}</p>
                        </div>
                      </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="w-7 h-7 text-red-500 mr-3" />
                        {t('doctorsPage.aboutDoctor')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{doctor.about}</p>
                    </div>

                    {/* Expertise & Awards Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Expertise */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Shield className="w-7 h-7 text-blue-500 mr-3" />
                          {t('doctorsPage.areasOfExpertise')}
                        </h3>
                        <div className="space-y-3">
                          {doctor.expertise.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('doctorsPage.whyChoose.title.prefix')}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t('doctorsPage.whyChoose.title.highlighted')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('doctorsPage.whyChoose.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: t('doctorsPage.whyChoose.experienced.title'),
                description: t('doctorsPage.whyChoose.experienced.description')
              },
              {
                icon: Award,
                title: t('doctorsPage.whyChoose.awardWinning.title'),
                description: t('doctorsPage.whyChoose.awardWinning.description')
              },
              {
                icon: Heart,
                title: t('doctorsPage.whyChoose.compassionate.title'),
                description: t('doctorsPage.whyChoose.compassionate.description')
              },
              {
                icon: Shield,
                title: t('doctorsPage.whyChoose.qualityAssured.title'),
                description: t('doctorsPage.whyChoose.qualityAssured.description')
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
      <CTA />
    </>
  );
}
