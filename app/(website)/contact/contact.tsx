"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import HeroSection from "@/components/all/hero-section"
import { useDispatch, useSelector } from "react-redux"
import { addLead } from "@/lib/features/leadSlice"
import { useState } from "react"
import { RootState } from "@/lib/store"
import { Lead } from "@/lib/features/leadSlice"

export default function ContactPage() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state: RootState) => state.leads)
  
  const [formData, setFormData] = useState<Omit<Lead, '_id'>>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "General Inquiry",
    status: "new",
    source: "Website Contact Form"
  })
  
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      await dispatch(addLead(formData) as any)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "General Inquiry",
        status: "new",
        source: "Website Contact Form"
      })
      
      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
      
    } catch (err) {
      console.error("Error submitting form:", err)
    }
  }

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
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input 
                      id="name"
                      name="name"
                      type="text" 
                      placeholder="Your full name"
                      className="bg-white/50"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="your@email.com"
                      className="bg-white/50"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      placeholder="Your phone number"
                      className="bg-white/50"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      className="bg-white/50 min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-2 px-6 rounded-lg font-medium shadow-md"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                </form>
              )}

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