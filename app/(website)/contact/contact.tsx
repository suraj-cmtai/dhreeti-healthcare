"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"
import HeroSection from "@/components/all/hero-section"

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <HeroSection title="Contact Us" description="Get in touch with us for appointments, inquiries, or emergency care" />

      {/* Contact Content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 sm:space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-teal-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Our Location</h3>
                      <p className="text-gray-600">
                        Near D.E.O Office Moulabagh<br />
                        Arrah Bhojpur Bihar<br />
                        Pin No 802301
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Mobile Number</h3>
                      <p className="text-gray-600">9901515300</p>
                      <p className="text-gray-600">9279797955</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">E-mail</h3>
                      <p className="text-gray-600">dhreeti.india@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">O.P.D. Services</h3>
                      <p className="text-gray-600">
                        <span className="font-semibold">Monday to Friday:</span> 8 a.m. to 6 p.m.<br />
                        <span className="font-semibold">Saturday &amp; Sunday:</span> 8 a.m. to 12 p.m.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Emergency Services</h3>
                <p className="text-gray-600">
                  24/7 emergency support available at our facility. For emergencies, please call our mobile numbers above.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="Your first name"
                      className="bg-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Your last name"
                      className="bg-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder="Your phone number"
                    className="bg-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    placeholder="How can we help you?"
                    className="bg-white/50 min-h-[120px]"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-2 px-6 rounded-lg font-medium shadow-md"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <p className="text-sm text-gray-500 mt-6 text-center">
                We'll get back to you within 24 hours during business days.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}