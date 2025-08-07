"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  Stethoscope,
  CheckCircle,
} from 'lucide-react';
import HeroSection from '@/components/all/hero-section';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from '@/lib/features/appointmentSlice';
import { RootState } from '@/lib/store';
import { Appointment } from '@/lib/features/appointmentSlice';
import SchemeSection from '@/components/home/scheme-section';

export default function AppointmentForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.appointments);
  
  const [formData, setFormData] = useState<Omit<Appointment, '_id' | 'createdAt'>>({  
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    status: 'pending',
    notes: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Add current timestamp for createdAt
      const appointmentData = {
        ...formData,
        createdAt: new Date().toISOString(),
      };
      
      await dispatch(addAppointment(appointmentData) as any);
      setSubmitted(true);
      setFormData({
        patientName: '',
        patientEmail: '',
        patientPhone: '',
        date: '',
        time: '',
        service: '',
        notes: '',
        status: 'pending',
        doctor: '',
      });
      
      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (err) {
      console.error("Error submitting appointment:", err);
    }
  };

  const services = [
    "General Consultation",
    "Obstetrics & Gynecology",
    "Pathology Tests",
    "Radiology Services",
    "Pharmacy",
    "Emergency Care"
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  return (
    <div>
      {/* Banner Section */}
      <HeroSection title="Book Your Appointment" description="Schedule your visit with our expert doctors. Fill out the form below to reserve your slot." />

      {/* Appointment Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="gap-12 items-start">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-8 lg:p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Appointment</h2>
                <p className="text-gray-600">Fill in the details below to schedule your visit</p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-green-800 mb-2">Appointment Booked!</h3>
                  <p className="text-green-700 text-lg mb-4">
                    Thank you for booking an appointment with us.
                  </p>
                  <p className="text-gray-600">
                    We'll confirm your appointment shortly via email or phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="patientName" className="text-md font-semibold text-gray-700 flex items-center">
                        <User className="w-4 h-4 mr-2 text-blue-500" />
                        Full Name
                      </Label>
                      <Input
                        type="text"
                        id="patientName"
                        name="patientName"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientEmail" className="text-md font-semibold text-gray-700 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-500" />
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="patientEmail"
                        name="patientEmail"
                        value={formData.patientEmail}
                        onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patientPhone" className="text-md font-semibold text-gray-700 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-blue-500" />
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="patientPhone"
                      name="patientPhone"
                      value={formData.patientPhone}
                      onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-md font-semibold text-gray-700 flex items-center">
                      <Stethoscope className="w-4 h-4 mr-2 text-blue-500" />
                      Select Service
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange('service', value)}
                    >
                      <SelectTrigger className="w-full h-14 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Doctor Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="doctor" className="text-md font-semibold text-gray-700 flex items-center">
                      <User className="w-4 h-4 mr-2 text-blue-500" />
                      Select Doctor
                    </Label>
                    <Select
                      value={formData.doctor}
                      onValueChange={(value) => handleSelectChange('doctor', value)}
                    >
                      <SelectTrigger className="w-full h-14 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Dr. Ganesh Pandey">Dr. Ganesh Pandey</SelectItem>
                        <SelectItem value="Dr. Pragya Pandey">Dr. Pragya Pandey</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-md font-semibold text-gray-700 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        Preferred Date
                      </Label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-md font-semibold text-gray-700 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        Preferred Time
                      </Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => handleSelectChange('time', value)}
                      >
                        <SelectTrigger className="w-full h-14 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot, index) => (
                            <SelectItem key={index} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-md font-semibold text-gray-700 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-blue-500" />
                      Additional Notes
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl resize-none"
                      placeholder="Any specific concerns or notes for the doctor..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Appointment
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
            </motion.div>
          </div>
        </div>
      </section>
      <SchemeSection />
    </div>
  );
}
