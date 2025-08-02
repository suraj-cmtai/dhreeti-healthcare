"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Scale,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/all/hero-section";

export default function TermsPage() {
  const termsSections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        "By accessing and using our healthcare services, you agree to these terms",
        "These terms apply to all patients, visitors, and users of our services",
        "We reserve the right to modify these terms at any time",
        "Continued use after changes constitutes acceptance of new terms",
        "Please review these terms regularly for updates"
      ]
    },
    {
      title: "Healthcare Services",
      icon: Shield,
      content: [
        "We provide comprehensive healthcare and medical services",
        "All services are subject to medical professional availability",
        "Emergency services are available 24/7",
        "Appointments are required for non-emergency care",
        "We maintain the right to refuse service when necessary"
      ]
    },
    {
      title: "Patient Responsibilities",
      icon: Users,
      content: [
        "Provide accurate and complete medical information",
        "Follow prescribed treatment plans and medications",
        "Attend scheduled appointments on time",
        "Inform us of any changes in health status",
        "Respect facility policies and other patients"
      ]
    },
    {
      title: "Payment and Billing",
      icon: Scale,
      content: [
        "All services must be paid for at the time of service",
        "We accept cash, cards, and digital payments",
        "Insurance claims are processed as per policy terms",
        "Late payments may result in service restrictions",
        "Refund policies apply as per healthcare regulations"
      ]
    },
    {
      title: "Privacy and Confidentiality",
      icon: Shield,
      content: [
        "Patient information is kept strictly confidential",
        "Medical records are protected under healthcare laws",
        "Information sharing requires patient consent",
        "We comply with all privacy regulations",
        "Data security measures are in place"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        "We provide care to the best of our professional ability",
        "Medical outcomes cannot be guaranteed",
        "We are not liable for indirect or consequential damages",
        "Liability is limited to the extent permitted by law",
        "Patients acknowledge inherent medical risks"
      ]
    },
    {
      title: "Appointment and Cancellation",
      icon: Calendar,
      content: [
        "Appointments must be scheduled in advance",
        "24-hour notice required for cancellations",
        "No-shows may result in appointment restrictions",
        "Emergency appointments take priority",
        "Rescheduling is subject to availability"
      ]
    },
    {
      title: "Code of Conduct",
      icon: Award,
      content: [
        "Respectful behavior is required at all times",
        "No harassment or discrimination is tolerated",
        "Follow facility safety and hygiene protocols",
        "Maintain appropriate conduct in waiting areas",
        "Violations may result in service termination"
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210"
    },
    {
      icon: Mail,
      label: "Email",
      value: "legal@dhreetihealthcare.com"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Arrah, Bihar, India"
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <HeroSection title="Terms and Conditions" description="Please read these terms carefully before using our healthcare services. These terms govern your relationship with Dhreeti Healthcare." />


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
              Understanding Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These Terms and Conditions outline the rules, guidelines, and agreements that govern your use of our healthcare services. By accessing our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {termsSections.map((section, index) => (
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
                  {section.content.map((item, itemIndex) => (
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
              <h3 className="text-2xl font-bold text-gray-900">Important Information</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Governing Law</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These terms are governed by the laws of India. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts in Arrah, Bihar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We comply with all applicable healthcare laws and regulations in India.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Severability</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The invalidity of any provision does not affect the validity of the entire agreement.
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
              <h3 className="text-3xl font-bold mb-4">Questions About Terms?</h3>
              <p className="text-xl opacity-90">
                If you have any questions about these Terms and Conditions, please contact our legal team:
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Legal Assistance?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Our legal team is available to answer any questions about our terms and conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-md transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Legal Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Terms
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}