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
  awards: string[];
  availability: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Pragya Pandey",
    image: "/doctor-female.png",
    specialization: "Obstetrics and Gynecology",
    experience: 10,
    location: "Arrah, Bihar",
    phone: "+91 98765 43210",
    email: "dr.pragya@dhreetihealthcare.com",
    education: "MBBS",
    role: "Consultant",
    additionalRole: "Director at Dhreeti Healthcare and Research Private Limited",
    about: "Dr. Pragya Pandey is a highly experienced Consultant in Obstetrics and Gynecology, with over 10 years of experience. She holds an MBBS degree and is dedicated to providing comprehensive and compassionate care to women at all stages of life. Dr. Pandey has a special interest in high-risk pregnancies, infertility, and laparoscopic surgery. She is also a Director at Dhreeti Healthcare and Research Private Limited.",
    expertise: ["High-risk Pregnancies", "Infertility Treatment", "Laparoscopic Surgery", "Women's Health", "Prenatal Care", "Gynecological Surgery"],
    awards: ["Excellence in Women's Health 2023", "Best Gynecologist Award 2022", "Patient Care Excellence 2021"],
    availability: "Mon-Fri: 9 AM - 6 PM, Sat: 9 AM - 2 PM"
  },
  {
    id: 2,
    name: "Dr. Ganesh Pandey",
    image: "/doctor-male.png",
    specialization: "General Medicine",
    experience: 10,
    location: "Arrah, Bihar",
    phone: "+91 98765 43211",
    email: "dr.ganesh@dhreetihealthcare.com",
    education: "MBBS",
    role: "Consultant",
    additionalRole: "Director at Dhreeti Healthcare and Research Private Limited",
    about: "Dr. Ganesh Pandey is a seasoned Consultant in General Medicine, with over 10 years of experience in diagnosing and treating a wide range of medical conditions. He holds an MBBS degree and is known for his holistic approach to patient care, focusing on preventive medicine and health education. Dr. Pandey's expertise includes managing chronic diseases, infectious diseases, and providing general health check-ups. He also serves as a Director at Dhreeti Healthcare and Research Private Limited.",
    expertise: ["Chronic Disease Management", "Infectious Diseases", "Preventive Medicine", "Health Check-ups", "General Consultation", "Emergency Care"],
    awards: ["Excellence in General Medicine 2023", "Patient Care Award 2022", "Community Health Champion 2021"],
    availability: "Mon-Fri: 8 AM - 7 PM, Sat: 8 AM - 3 PM"
  }
];

export default function DoctorsPage() {
  return (
    <>
      {/* Banner Section */}
      <HeroSection title="Meet Our Expert Doctors" description="Our team of experienced and compassionate doctors is dedicated to providing the highest quality healthcare for you and your family." />

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
                        <span className="text-gray-700">{doctor.experience} Years Experience</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-3">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{doctor.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                      <Button className="flex-1 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-xs sm:text-sm lg:text-base px-2 sm:px-4">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Book Appointment
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white text-primary hover:bg-white hover:text-primary border-primary hover:border-primary min-w-0 text-xs sm:text-sm lg:text-base px-2 sm:px-4"
                      >
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Call Now
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
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-semibold text-gray-900">{doctor.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-semibold text-gray-900">{doctor.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Additional Role</p>
                          <p className="font-semibold text-gray-900 text-sm">{doctor.additionalRole}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Availability</p>
                          <p className="font-semibold text-gray-900 text-sm">{doctor.availability}</p>
                        </div>
                      </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="w-7 h-7 text-red-500 mr-3" />
                        About Doctor
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{doctor.about}</p>
                    </div>

                    {/* Expertise & Awards Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Expertise */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Shield className="w-7 h-7 text-blue-500 mr-3" />
                          Areas of Expertise
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

                      {/* Awards */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Award className="w-7 h-7 text-yellow-500 mr-3" />
                          Awards & Recognition
                        </h3>
                        <div className="space-y-3">
                          {doctor.awards.map((award, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Star className="w-5 h-5 text-yellow-500" />
                              <span className="text-gray-700">{award}</span>
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Our Doctors
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare excellence with our team of dedicated and experienced medical professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Experienced Team",
                description: "Our doctors have 10+ years of experience in their respective specialties"
              },
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized for excellence in patient care and medical expertise"
              },
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Dedicated to providing personalized and compassionate healthcare"
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Highest standards of medical care with modern facilities and equipment"
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
