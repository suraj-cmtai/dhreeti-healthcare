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
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage();
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
      <HeroSection title={t('contact.pageTitle')} description={t('contact.pageDescription')} />

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
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('contact.info.title')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{t('contact.info.location')}</h3>
                      <p className="text-gray-600">
                        {t('contact.address').split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < t('contact.address').split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{t('contact.info.phone')}</h3>
                      <p className="text-gray-600">{t('contact.phone1')}</p>
                      <p className="text-gray-600">{t('contact.phone2')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{t('contact.info.email')}</h3>
                      <p className="text-gray-600">{t('footer.email')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{t('footer.opdServices')}</h3>
                      <p className="text-gray-600">
                        <span className="font-semibold">{t('schemes.consultation.weekdays')}:</span> {t('schemes.consultation.weekdayHours')}<br />
                        <span className="font-semibold">{t('schemes.consultation.weekends')}:</span> {t('schemes.consultation.weekendHours')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{t('contact.emergency.title')}</h3>
                <p className="text-gray-600">
                  {t('contact.emergency.description')}
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('contact.form.title')}</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-green-800 mb-2">{t('contact.form.success.title')}</h3>
                  <p className="text-green-700">
                    {t('contact.form.success.message')}
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">{t('contact.form.name')}</label>
                    <Input 
                      id="name"
                      name="name"
                      type="text" 
                      placeholder={t('contact.form.namePlaceholder')}
                      className="bg-white/50"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">{t('contact.form.email')}</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="bg-white/50"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">{t('contact.form.phone')}</label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      placeholder={t('contact.form.phonePlaceholder')}
                      className="bg-white/50"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">{t('contact.form.message')}</label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder={t('contact.form.messagePlaceholder')}
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
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.submit')}
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
                {t('contact.form.response')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}