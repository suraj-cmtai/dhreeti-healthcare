import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function SchemeSection() {
    return (
        <div>
      {/* Schemes & Offers Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Special{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Schemes & Offers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of our special discounts and offers designed to make healthcare more affordable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Consultation Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Consultation Hours</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    Patient Consultation Hours
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-800">Monday to Friday</span>
                      <span className="text-blue-600 font-semibold">8 AM - 6 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-800">Saturday & Sunday</span>
                      <span className="text-green-600 font-semibold">8 AM - 12 PM</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong>Important:</strong> Please confirm your appointment and doctor's availability by phone before visiting.
                    </p>
                    <div className="mt-3 space-y-1">
                      <p className="text-sm text-gray-600">📞 <strong>9901515300</strong></p>
                      <p className="text-sm text-gray-600">📞 <strong>9279797955</strong></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Monthly Special Offers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <Badge className="bg-green-100 text-green-800">Monthly Offers</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    Monthly Special Offers
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">9th of Every Month</span>
                        <span className="text-green-600 font-bold">₹50</span>
                      </div>
                      <p className="text-sm text-gray-600">Gynecology & Obstetrics - No consultation fee, only registration fee</p>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">3rd of Every Month</span>
                        <span className="text-blue-600 font-bold">₹150</span>
                      </div>
                      <p className="text-sm text-gray-600">HbA1c (3-month sugar) test</p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">9th of Every Month</span>
                        <span className="text-purple-600 font-bold">₹150</span>
                      </div>
                      <p className="text-sm text-gray-600">Thyroid test</p>
                    </div>
                    
                    <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">15th of Every Month</span>
                        <span className="text-orange-600 font-bold">₹300</span>
                      </div>
                      <p className="text-sm text-gray-600">PFT (Pulmonary Function Test) for shortness of breath</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Reduced Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <Badge className="bg-red-100 text-red-800">Reduced Fees</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    Reduced Test Fees
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">Ultrasound</span>
                        <span className="text-red-600 font-bold">₹900</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Reduced from previous price</p>
                    </div>
                    
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">ECG</span>
                        <span className="text-red-600 font-bold">₹200</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Reduced from previous price</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">
                        💡 <strong>Pro Tip:</strong> Book your appointments on special offer days to save money on tests and consultations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action for Offers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Save on Healthcare?
              </h3>
              <p className="text-gray-600 mb-6">
                Don't miss out on these special offers! Call us now to book your appointment and take advantage of our reduced fees and monthly specials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                  onClick={() => window.location.href = '/book-appointment'}
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>        </div>
    );
}