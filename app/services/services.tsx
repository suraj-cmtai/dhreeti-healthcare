"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  TestTube, 
  Scan, 
  Pill, 
  Heart, 
  Baby, 
  Activity, 
  Microscope, 
  Shield, 
  CheckCircle,
  Clock,
  Users,
  Award,
  Phone,
  Calendar,
  Eye,
  Droplets,
  Syringe,
  Thermometer,
  FileText,
  Star,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const mainServices = [
    {
      id: 1,
      icon: Stethoscope,
      title: "O.P.D. Services",
      description: "Comprehensive outpatient department services with experienced doctors",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      subCards: [
        {
          title: "General Medicine",
          icon: Heart,
          description: "Comprehensive medical care for adults and children",
          features: ["Health Checkups", "Disease Management", "Preventive Care", "Chronic Disease Care"],
          timing: "Mon-Fri: 8 AM - 6 PM"
        },
        {
          title: "Obstetrics & Gynaecology",
          icon: Baby,
          description: "Specialized care for women's health and pregnancy",
          features: ["Prenatal Care", "Gynecological Exams", "Family Planning", "Women's Wellness"],
          timing: "Mon-Fri: 9 AM - 5 PM"
        },
        {
          title: "Health Checkups",
          icon: Users,
          description: "Comprehensive health screening and preventive care",
          features: ["Regular Checkups", "Vaccination", "Health Education", "Screening Tests"],
          timing: "Mon-Sat: 8 AM - 12 PM"
        },
        {
          title: "Emergency Care",
          icon: Shield,
          description: "24/7 emergency medical services with rapid response",
          features: ["Emergency Treatment", "Quick Response", "Critical Care", "Ambulance Service"],
          timing: "24/7 Available"
        }
      ]
    },
    {
      id: 2,
      icon: TestTube,
      title: "Pathology Services",
      description: "Complete blood and urine medical investigations with accurate results",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      subCards: [
        {
          title: "Clinical Hematology",
          icon: Droplets,
          description: "Complete blood count and blood disorder diagnosis",
          features: ["Complete Blood Count", "Hemoglobin Test", "Blood Grouping", "Anemia Diagnosis"],
          timing: "Results in 24 hours"
        },
        {
          title: "Clinical Biochemistry",
          icon: Syringe,
          description: "Biochemical analysis for metabolic disorders",
          features: ["Blood Sugar Tests", "Kidney Function", "Liver Function", "Lipid Profile"],
          timing: "Results in 24-48 hours"
        },
        {
          title: "Clinical Microbiology",
          icon: Microscope,
          description: "Microbial culture and sensitivity testing",
          features: ["Culture Tests", "Antibiotic Sensitivity", "Infection Diagnosis", "Bacterial Analysis"],
          timing: "Results in 48-72 hours"
        },
        {
          title: "Clinical Pathology",
          icon: FileText,
          description: "Tissue and cell analysis for disease diagnosis",
          features: ["Cytology Tests", "Histopathology", "Fine Needle Aspiration", "Tissue Analysis"],
          timing: "Results in 48-72 hours"
        },
        {
          title: "Urinalysis",
          icon: Thermometer,
          description: "Complete urine examination and analysis",
          features: ["Urine Routine", "Microscopic Analysis", "Chemical Analysis", "Culture Tests"],
          timing: "Results in 24 hours"
        }
      ]
    },
    {
      id: 3,
      icon: Scan,
      title: "Radiology Services",
      description: "Advanced ultrasound imaging services for accurate diagnosis",
      color: "from-blue-500 to-teal-500",
      bgColor: "from-blue-50 to-teal-50",
      borderColor: "border-blue-200",
      subCards: [
        {
          title: "U.S.G. (Ultrasound)",
          icon: Eye,
          description: "High-resolution ultrasound imaging for various body parts",
          features: ["Abdominal Ultrasound", "Pelvic Ultrasound", "Pregnancy Ultrasound", "Cardiac Ultrasound"],
          timing: "Same-day reports available"
        },
        {
          title: "E.C.G. (Electrocardiogram)",
          icon: Activity,
          description: "Heart rhythm and electrical activity monitoring",
          features: ["Resting ECG", "Stress ECG", "Holter Monitoring", "Cardiac Assessment"],
          timing: "Immediate results"
        },
        {
          title: "Digital Imaging",
          icon: Scan,
          description: "High-quality digital imaging and reporting",
          features: ["Digital Reports", "Online Access", "Expert Interpretation", "Quality Assurance"],
          timing: "Quick processing"
        },
        {
          title: "Emergency Imaging",
          icon: Shield,
          description: "Emergency radiology services for critical cases",
          features: ["Emergency Ultrasound", "Quick Diagnosis", "Critical Care Support", "24/7 Available"],
          timing: "24/7 Emergency Service"
        }
      ]
    },
    {
      id: 4,
      icon: Pill,
      title: "Pharmacy Services",
      description: "Complete pharmaceutical services with quality medications",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      subCards: [
        {
          title: "Prescription Medicines",
          icon: Pill,
          description: "Complete range of prescription and OTC medications",
          features: ["Prescription Drugs", "Over-the-Counter", "Generic Medicines", "Branded Medicines"],
          timing: "Licensed pharmacy"
        },
        {
          title: "Surgical Supplies",
          icon: Shield,
          description: "Complete range of surgical supplies and medical equipment",
          features: ["Surgical Instruments", "Medical Devices", "Disposables", "First Aid Supplies"],
          timing: "Quality assured"
        },
        {
          title: "Health Supplements",
          icon: Heart,
          description: "Vitamins, minerals and health supplements",
          features: ["Vitamins", "Minerals", "Protein Supplements", "Herbal Products"],
          timing: "Competitive pricing"
        },
        {
          title: "Medical Consultation",
          icon: Users,
          description: "Professional pharmaceutical consultation and guidance",
          features: ["Drug Interaction", "Dosage Guidance", "Side Effects", "Medication Review"],
          timing: "Expert consultation"
        },
        {
          title: "Home Delivery",
          icon: MapPin,
          description: "Convenient home delivery of medicines and supplies",
          features: ["Home Delivery", "Online Ordering", "Quick Delivery", "Safe Packaging"],
          timing: "Same-day delivery available"
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Heart,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Health Checkups",
      description: "Comprehensive health screening packages for all ages",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Vaccination and preventive healthcare services",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Digital health records and medical history management",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs under one roof
          </p>
        </div>
      </section>

      {/* Main Services with Sub-Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Healthcare Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to diagnosis, treatment to medication - we provide end-to-end healthcare services
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="space-y-16">
            {mainServices.map((service, serviceIndex) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
                className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-xl border ${service.borderColor} relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-8 right-8 opacity-5">
                  <service.icon className="w-24 h-24" />
                </div>

                {/* Main Service Header */}
                <div className="flex items-center mb-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-lg text-gray-600">{service.description}</p>
                  </div>
                </div>

                {/* Sub-Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {service.subCards.map((subCard, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.2 + subIndex * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          <subCard.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{subCard.title}</h4>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{subCard.description}</p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <div className="space-y-2">
                          {subCard.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-700">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Timing */}
                      <div className="flex items-center text-xs text-gray-600">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{subCard.timing}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-12 mt-20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Additional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Services
              </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
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
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare excellence with our comprehensive range of services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced doctors and specialists in all departments with 5+ years of experience"
              },
              {
                icon: Award,
                title: "Quality Assured",
                description: "Highest standards of medical care and equipment with NABL accreditation"
              },
              {
                icon: Clock,
                title: "Quick Service",
                description: "Fast results and minimal waiting times with same-day reports available"
              },
              {
                icon: Shield,
                title: "Comprehensive Care",
                description: "Complete healthcare solutions under one roof from consultation to medication"
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your appointment today and experience our comprehensive healthcare services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-md transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-primary hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Arrah, Bihar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Emergency Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
