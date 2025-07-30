"use client";

import TestimonialSection from "@/components/home/testimonial-section";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Users, Shield, Heart, Award, Target, Eye, CheckCircle, Star, Clock, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dhreeti Healthcare</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Learn more about our mission, vision, and commitment to providing quality healthcare services
            </p>
          </div>
        </section>

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
                    <span className="text-sm font-semibold text-blue-800">Dhreeti Healthcare and Research Pvt. Ltd.</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Advancing Healthcare in{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Arrah, Bihar
                    </span>
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dhreeti Healthcare and Research Private Limited, established in{" "}
                    <span className="font-semibold text-blue-600">February 2022</span>, is a healthcare provider located in{" "}
                    <span className="font-semibold text-teal-600">Arrah, Bihar</span>. Our core mission is to bolster basic healthcare within the region, operating under the conviction that a strong foundation of primary care is indispensable for the effective functioning of tertiary services.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our strategic vision involves creating a comprehensive network of high-quality primary healthcare centers. Through this initiative, we aim to guarantee accessible and dependable medical services for all individuals within the community.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Est. February 2022</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-teal-600" />
                      <span className="text-sm text-gray-600">Arrah, Bihar</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Community Focused</span>
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
                      <p className="text-2xl font-bold">Primary Care</p>
                      <p className="text-sm opacity-90">Foundation</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Heart className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">Quality</p>
                      <p className="text-sm opacity-90">Healthcare</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">Accessible</p>
                      <p className="text-sm opacity-90">Services</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Building2 className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">Network</p>
                      <p className="text-sm opacity-90">Centers</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To bolster basic healthcare within the region by creating a comprehensive network of high-quality primary healthcare centers, ensuring that every individual has access to dependable medical services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To establish a strong foundation of primary care that serves as the cornerstone for effective tertiary healthcare services, guaranteeing accessible and dependable medical care for all community members.
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
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Core Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our commitment to excellence in healthcare
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Compassion",
                  description: "We treat every patient with empathy and understanding",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: Shield,
                  title: "Quality",
                  description: "Maintaining the highest standards in all our services",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Serving our local community with dedication",
                  color: "from-teal-500 to-teal-600"
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Striving for excellence in everything we do",
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
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Facilities & Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art facilities designed to provide comprehensive healthcare solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Primary Care",
                  description: "Comprehensive outpatient services with experienced doctors",
                  features: ["General Consultation", "Health Checkups", "Preventive Care"]
                },
                {
                  icon: Shield,
                  title: "Diagnostic Services",
                  description: "Advanced laboratory and imaging facilities",
                  features: ["Blood Tests", "Ultrasound", "ECG Services"]
                },
                {
                  icon: Users,
                  title: "Specialized Care",
                  description: "Expert care in various medical specialties",
                  features: ["Women's Health", "Cardiac Care", "Emergency Services"]
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
                    {service.features.map((feature, featureIndex) => (
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
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Milestones that reflect our commitment to healthcare excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "5000+", label: "Patients Served", icon: Users },
                { number: "2+", label: "Years of Service", icon: Calendar },
                { number: "100%", label: "Quality Assured", icon: Award },
                { number: "24/7", label: "Emergency Care", icon: Clock }
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

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Experience Quality Healthcare?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of patients who trust us with their healthcare needs. Contact us today to schedule your appointment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <Mail className="w-5 h-5" />
                  <span>info@dhreeti.com</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span>Arrah, Bihar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <TestimonialSection />
      </main>
    </div>
  )
}
