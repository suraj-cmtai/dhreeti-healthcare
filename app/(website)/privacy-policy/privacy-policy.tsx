"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Users,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/all/hero-section";

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information (name, contact details, medical history)",
        "Health records and treatment information",
        "Appointment and consultation details",
        "Payment and billing information",
        "Website usage data and cookies"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "Provide medical care and treatment services",
        "Schedule appointments and manage patient records",
        "Communicate about healthcare services",
        "Process payments and billing",
        "Improve our healthcare services"
      ]
    },
    {
      title: "Information Sharing",
      icon: Shield,
      content: [
        "We do not sell your personal information",
        "Share only with your explicit consent",
        "May share with healthcare providers for treatment",
        "Comply with legal requirements when necessary",
        "Protect patient safety and public health"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "Encrypted data transmission and storage",
        "Secure access controls and authentication",
        "Regular security audits and updates",
        "Staff training on data protection",
        "Compliance with healthcare privacy standards"
      ]
    },
    {
      title: "Your Rights",
      icon: CheckCircle,
      content: [
        "Access your personal health information",
        "Request corrections to your records",
        "Withdraw consent for data sharing",
        "Request deletion of your data",
        "File complaints about privacy practices"
      ]
    },
    {
      title: "Data Retention",
      icon: Calendar,
      content: [
        "Medical records retained as per legal requirements",
        "Personal data kept only as long as necessary",
        "Secure disposal of outdated information",
        "Regular review of data retention policies",
        "Compliance with healthcare regulations"
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
      value: "privacy@dhreetihealthcare.com"
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
      <HeroSection title="Privacy Policy" description="Your privacy and data security are our top priorities. Learn how we protect your personal and health information." />

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
              Our Commitment to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Your Privacy
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Dhreeti Healthcare and Research Private Limited, we are committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare services.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {privacySections.map((section, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900">Additional Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Updates to This Policy</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our website.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Compliance</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We comply with all applicable healthcare privacy laws and regulations, including but not limited to the Information Technology Act, 2000, and other relevant Indian healthcare privacy standards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our privacy practices are regularly reviewed and updated to ensure compliance with current legal requirements.
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
              <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
              <p className="text-xl opacity-90">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Have Questions About Privacy?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              We're here to help. Contact our privacy team for any concerns about your data protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-md transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Privacy Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Policy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}