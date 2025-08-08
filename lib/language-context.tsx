"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'hi'
type Translations = Record<string, any>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const enTranslations = {
  navigation: {
    home: "Home",
    about: "About",
    services: "Services",
    doctors: "Doctors",
    events: "Events",
    contact: "Contact"
  },
  header: {
    bookAppointment: "Book Appointment",
    changeLanguage: "Change Language"
  },
  contact: {
    phone1: "9901515300",
    phone2: "9279797955",
    address: "Near D.E.O Office\nArrah, Bihar",
    timing: "Mon-Sat: 8am-8pm"
  },
  contactPage: {
    pageTitle: "Contact Us",
    pageDescription: "Get in touch with our team for any inquiries or to schedule an appointment. We're here to help you with all your healthcare needs.",
    info: {
      title: "Contact Information",
      location: "Our Location",
      phone: "Phone Numbers",
      email: "Email Address"
    },
    emergency: {
      title: "Emergency Contact",
      description: "For medical emergencies, please call our 24/7 emergency helpline immediately."
    },
    form: {
      title: "Send Us a Message",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email address",
      phone: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      message: "Your Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      sending: "Sending...",
      response: "We'll get back to you as soon as possible.",
      success: {
        title: "Message Sent!",
        message: "Thank you for contacting us. We'll respond to your inquiry shortly."
      }
    }
  },
  services: {
    opdServices: {
      title: "O.P.D. Services",
      description: "Comprehensive outpatient department services with experienced doctors"
    },
    pathology: {
      title: "Pathology Services",
      description: "Complete blood and urine medical investigations with accurate results"
    },
    radiology: {
      title: "Radiology Services",
      description: "Advanced ultrasound imaging services for accurate diagnosis"
    },
    pharmacy: {
      title: "Pharmacy Services",
      description: "Complete pharmaceutical services with quality medications"
    }
  },
  hero: {
    welcome: "Welcome to",
    clinicName: "Dhreeti Clinic",
    description: "Since 2022, we've revolutionized healthcare by making top-tier services accessible and affordable. We combine modern facilities with experienced, compassionate doctors to provide a new standard of reliable care. Our mission is to build a healthier community by ensuring everyone has access to the best medical services without financial strain.",
    bookAppointment: "Book an appointment",
    trustedBy: "Trusted by 1000+ patients",
    expertTeam: "Our Team of Expert Clinicians",
    teamDescription: "Our team of dedicated specialists, all with over seven years of experience, provides compassionate, personalized most trusted and effective care.",
    virtualTour: "Take a Virtual Tour",
    watchStory: "Watch Our Story"
  },
  about: {
    title: "About Dhreeti Clinic",
    subtitle: "A Legacy of Care and Excellence",
    description: "Established in 2022, Dhreeti Clinic has been at the forefront of providing exceptional healthcare services to the community. Our state-of-the-art facility is equipped with the latest medical technology and staffed by highly qualified healthcare professionals.",
    mission: "Our Mission",
    missionText: "To provide accessible, affordable, and high-quality healthcare services to all patients, regardless of their background or financial situation.",
    vision: "Our Vision",
    visionText: "To be the leading healthcare provider in the region, known for our excellence in patient care, innovation in medical practices, and commitment to community health.",
    values: "Our Values",
    value1Title: "Excellence",
    value1Text: "We strive for excellence in all aspects of our service.",
    value2Title: "Compassion",
    value2Text: "We treat all patients with empathy and understanding.",
    value3Title: "Integrity",
    value3Text: "We uphold the highest ethical standards in healthcare.",
    value4Title: "Innovation",
    value4Text: "We embrace new technologies and methods to improve care."
  },
  whyChoose: {
    title: "Why Choose Us",
    subtitle: "Excellence in Healthcare",
    description: "At Dhreeti Clinic, we are committed to providing the highest quality of care to our patients. Here's why you should choose us for your healthcare needs:",
    reason1Title: "Expert Doctors",
    reason1Text: "Our team consists of highly qualified and experienced medical professionals.",
    reason2Title: "Modern Facilities",
    reason2Text: "State-of-the-art equipment and facilities for accurate diagnosis and effective treatment.",
    reason3Title: "Patient-Centered Care",
    reason3Text: "We prioritize your comfort, safety, and well-being throughout your healthcare journey.",
    reason4Title: "Affordable Pricing",
    reason4Text: "Quality healthcare services at reasonable prices to ensure accessibility for all."
  },
  testimonials: {
    title: "Patient Testimonials",
    subtitle: "What Our Patients Say",
    description: "Don't just take our word for it. Hear from our satisfied patients about their experiences at Dhreeti Clinic.",
    testimonial1Name: "Rajesh Kumar",
    testimonial1Text: "I've been a patient at Dhreeti Clinic for over a year now, and I'm extremely satisfied with the care I've received. The doctors are knowledgeable and caring, and the staff is always friendly and helpful.",
    testimonial2Name: "Priya Sharma",
    testimonial2Text: "After struggling with my health issues for years, I finally found relief at Dhreeti Clinic. The doctors took the time to understand my concerns and developed a treatment plan that worked for me. I'm grateful for their expertise and compassion.",
    testimonial3Name: "Amit Patel",
    testimonial3Text: "The level of care and attention I received at Dhreeti Clinic was exceptional. From the moment I walked in, I felt welcomed and valued as a patient. The doctors explained everything clearly and addressed all my concerns."
  },
  diseases: {
    diabetes: {
      name: "Diabetes",
      symptoms: [
        "Frequent Urination",
        "Excessive Thirst",
        "Fatigue",
        "Blurred Vision",
        "Slow Healing",
        "Weight Loss",
        "Numbness",
        "Increased Hunger"
      ],
      cures: [
        "Maintain a healthy diet with low sugar and carbs",
        "Exercise regularly for at least 30 minutes daily",
        "Monitor blood sugar levels regularly",
        "Take prescribed medications as directed",
        "Regular check-ups with your doctor",
        "Choose whole grains over refined carbs",
        "Include plenty of vegetables and lean proteins",
        "Limit sugary drinks and processed foods"
      ],
      description: "A metabolic disorder affecting blood sugar levels and requiring lifestyle management."
    },
    hypertension: {
      name: "Hypertension",
      symptoms: [
        "Headaches",
        "Shortness of Breath",
        "Nosebleeds",
        "Flushing",
        "Dizziness",
        "Chest Pain",
        "Vision Problems",
        "Irregular Heartbeat"
      ],
      cures: [
        "Reduce salt intake",
        "Exercise regularly",
        "Maintain a healthy weight",
        "Limit alcohol consumption",
        "Manage stress effectively",
        "Eat a balanced diet rich in fruits and vegetables",
        "Monitor blood pressure regularly",
        "Take prescribed medications as directed"
      ],
      description: "High blood pressure condition requiring careful monitoring and management."
    },
    tuberculosis: {
      name: "Tuberculosis",
      symptoms: [
        "Persistent Cough (lasting more than 3 weeks)",
        "Chest Pain",
        "Coughing up Blood",
        "Unexplained Weight Loss",
        "Fever and Chills",
        "Night Sweats",
        "Fatigue",
        "Loss of Appetite"
      ],
      cures: [
        "Complete the full course of prescribed antibiotics (usually 6-9 months)",
        "Regular follow-up with healthcare provider",
        "Maintain a nutritious diet to support recovery",
        "Avoid smoking and alcohol consumption",
        "Practice good hygiene to prevent spreading the infection",
        "Stay isolated if advised by a doctor during the initial treatment phase",
        "Monitor for any side effects of medication and report them to your doctor",
        "Get vaccinated with BCG vaccine if recommended in high-risk areas"
      ],
      description: "A bacterial infection primarily affecting the lungs, requiring comprehensive treatment."
    },
    thyroid: {
      name: "Thyroid Disorders",
      symptoms: [
        "Fatigue",
        "Weight Changes",
        "Mood Swings",
        "Hair Loss",
        "Dry Skin",
        "Irregular Heartbeat",
        "Sensitivity to Cold/Heat",
        "Muscle Weakness"
      ],
      cures: [
        "Take thyroid medications as prescribed",
        "Regular thyroid function tests",
        "Eat a balanced diet with adequate iodine",
        "Manage stress",
        "Exercise regularly",
        "Avoid self-medicating",
        "Consult your doctor for dosage adjustments",
        "Monitor symptoms and report changes"
      ],
      description: "Disorders affecting the thyroid gland and hormonal balance in the body."
    },
    dengue: {
      name: "Dengue",
      symptoms: [
        "High Fever",
        "Severe Headache",
        "Joint Pain",
        "Rash",
        "Nausea",
        "Eye Pain"
      ],
      cures: [
        "Rest and hydration",
        "Pain relievers with acetaminophen",
        "Avoid aspirin and ibuprofen",
        "Seek medical attention if symptoms worsen",
        "Monitor for warning signs",
        "Follow up with healthcare provider"
      ],
      description: "A viral infection spread by mosquitoes, causing severe flu-like symptoms."
    },
    commonText: {
      symptomsIntro: "Here are the most common symptoms associated with",
      consultDoctor: "If you experience any of these, consult a healthcare professional for proper diagnosis and treatment."
    },
    viewDetails: "View Details",
    treatmentProtocol: "Treatment Protocol",
    treatmentDescription: "Evidence-based medical treatment and comprehensive care guidelines",
    medicalTreatmentPlan: "Medical Treatment Plan",
    disclaimer: {
      title: "Medical Disclaimer:",
      text: "This information is for educational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider for proper diagnosis and treatment."
    },
    clinic: {
      name: "Dhreeti Medical Clinic",
      tagline: "Advanced Healthcare Solutions • Board-Certified Physicians",
      contactUs: "Contact Us",
      location: "Our Location",
      hours: "Operating Hours"
    },
    scheduleConsultation: "Schedule Professional Consultation"
  },
  schemes: {
    special: "Special",
    title: "Schemes & Offers",
    description: "Take advantage of our special discounts and offers designed to make healthcare more affordable",
    consultation: {
      badge: "Consultation Hours",
      title: "Patient Consultation Hours",
      weekdays: "Monday to Friday",
      weekdayHours: "8 AM - 6 PM",
      weekends: "Saturday & Sunday",
      weekendHours: "8 AM - 12 PM",
      important: "Important",
      confirmMessage: "Please confirm your appointment and doctor's availability by phone before visiting."
    },
    monthly: {
      badge: "Monthly Offers",
      title: "Monthly Special Offers",
      offer1: {
        date: "9th of Every Month",
        price: "₹50",
        description: "Gynecology & Obstetrics - No consultation fee, only registration fee"
      },
      offer2: {
        date: "3rd of Every Month",
        price: "₹150",
        description: "HbA1c (3-month sugar) test"
      },
      offer3: {
        date: "9th of Every Month",
        price: "₹150",
        description: "Thyroid test"
      },
      offer4: {
        date: "15th of Every Month",
        price: "₹300",
        description: "PFT (Pulmonary Function Test) for shortness of breath"
      }
    },
    reduced: {
      badge: "Reduced Fees",
      title: "Reduced Test Fees",
      reducedText: "Reduced from previous price",
      test1: {
        name: "Ultrasound",
        price: "₹900"
      },
      test2: {
        name: "ECG",
        price: "₹200"
      },
      proTip: {
        title: "Pro Tip",
        text: "Book your appointments on special offer days to save money on tests and consultations."
      }
    },
    cta: {
      title: "Ready to Save on Healthcare?",
      description: "Don't miss out on these special offers! Call us now to book your appointment and take advantage of our reduced fees and monthly specials.",
      bookButton: "Book Appointment",
      contactButton: "Contact Us"
    }
  },
  aboutPage: {
    pageTitle: "About Dhreeti Clinic",
    pageDescription: "Learn more about our mission, vision, and commitment to providing quality healthcare services",
    companyName: "DHREETI HEALTHCARE AND RESEARCH PRIVATE LIMITED",
    heading: {
      prefix: "Advancing Healthcare in",
      highlighted: "Arrah, Bihar"
    },
    paragraph1: {
      prefix: "DHREETI HEALTHCARE AND RESEARCH PRIVATE LIMITED, established in",
      date: "February 2022",
      middle: "is a healthcare provider located in",
      location: "Arrah, Bihar",
      suffix: "Our core mission is to bolster basic healthcare within the region, operating under the conviction that a strong foundation of primary care is indispensable for the effective functioning of tertiary services."
    },
    paragraph2: "Our strategic vision involves creating a comprehensive network of high-quality primary healthcare centers. Through this initiative, we aim to guarantee accessible and dependable medical services for all individuals within the community.",
    established: "Est. February 2022",
    location: "Arrah, Bihar",
    focus: "Community Focused",
    stats: {
      primaryCare: {
        title: "Primary Care",
        subtitle: "Foundation"
      },
      quality: {
        title: "Quality",
        subtitle: "Healthcare",
        number: "100%",
        label: "Quality Assured"
      },
      accessible: {
        title: "Accessible",
        subtitle: "Services"
      },
      network: {
        title: "Network",
        subtitle: "Centers"
      },
      patients: {
        number: "5000+",
        label: "Patients Served"
      },
      years: {
        number: "2+",
        label: "Years of Service"
      },
      emergency: {
        number: "24/7",
        label: "Emergency Care"
      }
    },
    missionText: "Our mission at Dhreeti Clinic is simple: to make dependable healthcare both accessible and affordable. We provide essential medical services with a focus on patient care and trust, empowering our community in our three-tier city to lead healthier lives without financial burden.",
    visionText: "To be the leading and most trusted basic healthcare provider in our three-tier city, known for our commitment to excellence, affordability, and the well-being of every patient we serve. We envision a healthier community where quality care is a right, not a luxury.",
    coreValues: {
      prefix: "Our",
      highlighted: "Core Values",
      description: "The principles that guide our commitment to excellence in healthcare"
    },
    values: {
      compassion: {
        title: "Compassion",
        description: "We treat every patient with empathy and understanding"
      },
      quality: {
        title: "Quality",
        description: "Maintaining the highest standards in all our services"
      },
      community: {
        title: "Community",
        description: "Serving our local community with dedication"
      },
      excellence: {
        title: "Excellence",
        description: "Striving for excellence in everything we do"
      }
    },
    facilities: {
      prefix: "Our",
      highlighted: "Facilities & Services",
      description: "State-of-the-art facilities designed to provide comprehensive healthcare solutions"
    },
    services: {
      primaryCare: {
        title: "Primary Care",
        description: "Comprehensive outpatient services with experienced doctors",
        features: ["General Consultation", "Health Checkups", "Preventive Care"]
      },
      diagnostic: {
        title: "Diagnostic Services",
        description: "Advanced laboratory and imaging facilities",
        features: ["Blood Tests", "Ultrasound", "ECG Services"]
      },
      specialized: {
        title: "Specialized Care",
        description: "Expert care in various medical specialties",
        features: ["Women's Health", "Cardiac Care", "Emergency Services"]
      }
    },
    achievements: {
      prefix: "Our",
      highlighted: "Achievements",
      description: "Milestones that reflect our commitment to healthcare excellence"
    }
  },
  globalCta: {
    title: "Ready to Experience Quality Healthcare?",
    description: "Join thousands of patients who trust us with their healthcare needs. Contact us today to schedule your appointment.",
    email: "info@dhreeti.com",
    location: "Arrah, Bihar"
  },
  footer: {
    tagline: "Reliable and affordable health care for you.",
    quickLinks: "Quick Links",
    links: {
      about: "About Us",
      services: "Our Services",
      doctors: "Our Doctors",
      bookAppointment: "Book Appointment"
    },
    opdServices: "O.P.D. Services",
    contactInfo: "Contact Info",
    email: "dhreeti.india@gmail.com",
    copyright: "Dhreeti Clinic. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service"
  },
  appointment: {
    pageTitle: "Book Your Appointment",
    pageDescription: "Schedule your visit with our expert doctors. Fill out the form below to reserve your slot.",
    formTitle: "Book Your Appointment",
    formSubtitle: "Fill in the details below to schedule your visit",
    services: [
      "General Consultation",
      "Obstetrics & Gynecology",
      "Pathology Tests",
      "Radiology Services",
      "Pharmacy",
      "Emergency Care"
    ],
    success: {
      title: "Appointment Booked!",
      message: "Thank you for booking an appointment with us.",
      followUp: "We'll confirm your appointment shortly via email or phone."
    },
    form: {
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email",
      phone: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      service: "Select Service",
      servicePlaceholder: "Choose a service",
      doctor: "Select Doctor",
      doctorPlaceholder: "Choose a doctor",
      date: "Preferred Date",
      time: "Preferred Time",
      timePlaceholder: "Select time",
      notes: "Additional Notes",
      notesPlaceholder: "Any specific concerns or notes for the doctor...",
      processing: "Processing...",
      submit: "Book Appointment"
    }
  },
  privacy: {
    pageTitle: "Privacy Policy",
    pageDescription: "Your privacy and data security are our top priorities. Learn how we protect your personal and health information.",
    intro: {
      title: {
        prefix: "Our Commitment to",
        highlighted: "Your Privacy"
      },
      description: "At Dhreeti Clinic and Research Private Limited, we are committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare services."
    },
    sections: {
      information: {
        title: "Information We Collect",
        content: [
          "Personal information (name, contact details, medical history)",
          "Health records and treatment information",
          "Appointment and consultation details",
          "Payment and billing information",
          "Website usage data and cookies"
        ]
      },
      usage: {
        title: "How We Use Your Information",
        content: [
          "Provide medical care and treatment services",
          "Schedule appointments and manage patient records",
          "Communicate about healthcare services",
          "Process payments and billing",
          "Improve our healthcare services"
        ]
      },
      sharing: {
        title: "Information Sharing",
        content: [
          "We do not sell your personal information",
          "Share only with your explicit consent",
          "May share with healthcare providers for treatment",
          "Comply with legal requirements when necessary",
          "Protect patient safety and public health"
        ]
      },
      security: {
        title: "Data Security",
        content: [
          "Encrypted data transmission and storage",
          "Secure access controls and authentication",
          "Regular security audits and updates",
          "Staff training on data protection",
          "Compliance with healthcare privacy standards"
        ]
      },
      rights: {
        title: "Your Rights",
        content: [
          "Access your personal health information",
          "Request corrections to your records",
          "Withdraw consent for data sharing",
          "Request deletion of your data",
          "File complaints about privacy practices"
        ]
      },
      retention: {
        title: "Data Retention",
        content: [
          "Medical records retained as per legal requirements",
          "Personal data kept only as long as necessary",
          "Secure disposal of outdated information",
          "Regular review of data retention policies",
          "Compliance with healthcare regulations"
        ]
      }
    },
    additional: {
      title: "Additional Information",
      updates: {
        title: "Updates to This Policy",
        description1: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our website.",
        description2: "Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy."
      },
      compliance: {
        title: "Compliance",
        description1: "We comply with all applicable healthcare privacy laws and regulations, including but not limited to the Information Technology Act, 2000, and other relevant Indian healthcare privacy standards.",
        description2: "Our privacy practices are regularly reviewed and updated to ensure compliance with current legal requirements."
      }
    },
    contact: {
      title: "Contact Us",
      description: "If you have any questions about this Privacy Policy or our privacy practices, please contact us:",
      phone: {
        label: "Phone",
        value: "+91 98765 43210"
      },
      email: {
        label: "Email",
        value: "privacy@dhreetihealthcare.com"
      },
      address: {
        label: "Address",
        value: "Arrah, Bihar, India"
      }
    },
    cta: {
      title: "Have Questions About Privacy?",
      description: "We're here to help. Contact our privacy team for any concerns about your data protection.",
      contactButton: "Contact Privacy Team",
      downloadButton: "Download Policy"
    }
  },
  terms: {
    pageTitle: "Terms and Conditions",
    pageDescription: "Please read these terms carefully before using our healthcare services. These terms govern your relationship with Dhreeti Clinic.",
    intro: {
      title: {
        prefix: "Understanding Our",
        highlighted: "Terms of Service"
      },
      description: "These Terms and Conditions outline the rules, guidelines, and agreements that govern your use of our healthcare services. By accessing our services, you acknowledge that you have read, understood, and agree to be bound by these terms."
    },
    sections: {
      acceptance: {
        title: "Acceptance of Terms",
        content: [
          "By accessing and using our healthcare services, you agree to these terms",
          "These terms apply to all patients, visitors, and users of our services",
          "We reserve the right to modify these terms at any time",
          "Continued use after changes constitutes acceptance of new terms",
          "Please review these terms regularly for updates"
        ]
      },
      services: {
        title: "Healthcare Services",
        content: [
          "We provide comprehensive healthcare and medical services",
          "All services are subject to medical professional availability",
          "Emergency services are available 24/7",
          "Appointments are required for non-emergency care",
          "We maintain the right to refuse service when necessary"
        ]
      },
      responsibilities: {
        title: "Patient Responsibilities",
        content: [
          "Provide accurate and complete medical information",
          "Follow prescribed treatment plans and medications",
          "Attend scheduled appointments on time",
          "Inform us of any changes in health status",
          "Respect facility policies and other patients"
        ]
      },
      payment: {
        title: "Payment and Billing",
        content: [
          "All services must be paid for at the time of service",
          "We accept cash, cards, and digital payments",
          "Insurance claims are processed as per policy terms",
          "Late payments may result in service restrictions",
          "Refund policies apply as per healthcare regulations"
        ]
      },
      privacy: {
        title: "Privacy and Confidentiality",
        content: [
          "Patient information is kept strictly confidential",
          "Medical records are protected under healthcare laws",
          "Information sharing requires patient consent",
          "We comply with all privacy regulations",
          "Data security measures are in place"
        ]
      },
      liability: {
        title: "Limitation of Liability",
        content: [
          "We provide care to the best of our professional ability",
          "Medical outcomes cannot be guaranteed",
          "We are not liable for indirect or consequential damages",
          "Liability is limited to the extent permitted by law",
          "Patients acknowledge inherent medical risks"
        ]
      },
      appointment: {
        title: "Appointment and Cancellation",
        content: [
          "Appointments must be scheduled in advance",
          "24-hour notice required for cancellations",
          "No-shows may result in appointment restrictions",
          "Emergency appointments take priority",
          "Rescheduling is subject to availability"
        ]
      },
      conduct: {
        title: "Code of Conduct",
        content: [
          "Respectful behavior is required at all times",
          "No harassment or discrimination is tolerated",
          "Follow facility safety and hygiene protocols",
          "Maintain appropriate conduct in waiting areas",
          "Violations may result in service termination"
        ]
      }
    },
    additional: {
      title: "Important Information",
      governing: {
        title: "Governing Law",
        description1: "These terms are governed by the laws of India. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts in Arrah, Bihar.",
        description2: "We comply with all applicable healthcare laws and regulations in India."
      },
      severability: {
        title: "Severability",
        description1: "If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.",
        description2: "The invalidity of any provision does not affect the validity of the entire agreement."
      }
    },
    contact: {
      title: "Questions About Terms?",
      description: "If you have any questions about these Terms and Conditions, please contact our legal team:",
      phone: {
        label: "Phone",
        value: "+91 98765 43210"
      },
      email: {
        label: "Email",
        value: "legal@dhreetihealthcare.com"
      },
      address: {
        label: "Address",
        value: "Arrah, Bihar, India"
      }
    },
    cta: {
      title: "Need Legal Assistance?",
      description: "Our legal team is available to answer any questions about our terms and conditions.",
      contactButton: "Contact Legal Team",
      downloadButton: "Download Terms"
    }
  },
  servicesPage: {
    pageTitle: "Our Services",
    pageDescription: "Comprehensive healthcare services designed to meet all your medical needs under one roof",
    mainHeading: {
      prefix: "Complete",
      highlighted: "Healthcare Solutions",
      description: "From consultation to diagnosis, treatment to medication - we provide end-to-end healthcare services"
    },
    additionalHeading: {
      prefix: "Additional",
      highlighted: "Services"
    },
    whyChoose: {
      title: {
        prefix: "Why Choose",
        highlighted: "Our Services"
      },
      description: "Experience healthcare excellence with our comprehensive range of services",
      expertTeam: {
        title: "Expert Team",
        description: "Experienced doctors and specialists in all departments with 5+ years of experience"
      },
      qualityAssured: {
        title: "Quality Assured",
        description: "Highest standards of medical care and equipment with NABL accreditation"
      },
      quickService: {
        title: "Quick Service",
        description: "Fast results and minimal waiting times with same-day reports available"
      },
      comprehensiveCare: {
        title: "Comprehensive Care",
        description: "Complete healthcare solutions under one roof from consultation to medication"
      }
    },
    cta: {
      title: "Ready to Get Started?",
      description: "Book your appointment today and experience our comprehensive healthcare services",
      bookButton: "Book Appointment",
      callButton: "Call Now:",
      emergencyCare: "24/7 Emergency Care",
      qualityAssured: "Quality Assured"
    },
    opd: {
      generalMedicine: {
        title: "General Medicine",
        description: "Comprehensive medical care for adults and children",
        features: ["Health Checkups", "Disease Management", "Preventive Care", "Chronic Disease Care"],
        timing: "Mon-Fri: 8 AM - 6 PM"
      },
      gynecology: {
        title: "Obstetrics & Gynaecology",
        description: "Specialized care for women's health and pregnancy",
        features: ["Prenatal Care", "Gynecological Exams", "Family Planning", "Women's Wellness"],
        timing: "Mon-Fri: 9 AM - 5 PM"
      },
      healthCheckups: {
        title: "Health Checkups",
        description: "Comprehensive health screening and preventive care",
        features: ["Regular Checkups", "Vaccination", "Health Education", "Screening Tests"],
        timing: "Mon-Sat: 8 AM - 12 PM"
      },
      emergencyCare: {
        title: "Emergency Care",
        description: "24/7 emergency medical services with rapid response",
        features: ["Emergency Treatment", "Quick Response", "Critical Care", "Ambulance Service"],
        timing: "24/7 Available"
      }
    },
    pathology: {
      hematology: {
        title: "Clinical Hematology",
        description: "Complete blood count and blood disorder diagnosis",
        features: ["Complete Blood Count", "Hemoglobin Test", "Blood Grouping", "Anemia Diagnosis"],
        timing: "Results in 24 hours"
      },
      biochemistry: {
        title: "Clinical Biochemistry",
        description: "Biochemical analysis for metabolic disorders",
        features: ["Blood Sugar Tests", "Kidney Function", "Liver Function", "Lipid Profile"],
        timing: "Results in 24-48 hours"
      },
      microbiology: {
        title: "Clinical Microbiology",
        description: "Microbial culture and sensitivity testing",
        features: ["Culture Tests", "Antibiotic Sensitivity", "Infection Diagnosis", "Bacterial Analysis"],
        timing: "Results in 48-72 hours"
      },
      clinical: {
        title: "Clinical Pathology",
        description: "Tissue and cell analysis for disease diagnosis",
        features: ["Cytology Tests", "Histopathology", "Fine Needle Aspiration", "Tissue Analysis"],
        timing: "Results in 48-72 hours"
      },
      urinalysis: {
        title: "Urinalysis",
        description: "Complete urine examination and analysis",
        features: ["Urine Routine", "Microscopic Analysis", "Chemical Analysis", "Culture Tests"],
        timing: "Results in 24 hours"
      }
    },
    radiology: {
      ultrasound: {
        title: "U.S.G. (Ultrasound)",
        description: "High-resolution ultrasound imaging for various body parts",
        features: ["Abdominal Ultrasound", "Pelvic Ultrasound", "Pregnancy Ultrasound", "Cardiac Ultrasound"],
        timing: "Same-day reports available"
      },
      ecg: {
        title: "E.C.G. (Electrocardiogram)",
        description: "Heart rhythm and electrical activity monitoring",
        features: ["Resting ECG", "Stress ECG", "Holter Monitoring", "Cardiac Assessment"],
        timing: "Immediate results"
      },
      imaging: {
        title: "Digital Imaging",
        description: "High-quality digital imaging and reporting",
        features: ["Digital Reports", "Online Access", "Expert Interpretation", "Quality Assurance"],
        timing: "Quick processing"
      },
      emergency: {
        title: "Emergency Imaging",
        description: "Emergency radiology services for critical cases",
        features: ["Emergency Ultrasound", "Quick Diagnosis", "Critical Care Support", "24/7 Available"],
        timing: "24/7 Emergency Service"
      }
    },
    pharmacy: {
      prescription: {
        title: "Prescription Medicines",
        description: "Complete range of prescription and OTC medications",
        features: ["Prescription Drugs", "Over-the-Counter", "Generic Medicines", "Branded Medicines"],
        timing: "Licensed pharmacy"
      },
      surgical: {
        title: "Surgical Supplies",
        description: "Complete range of surgical supplies and medical equipment",
        features: ["Surgical Instruments", "Medical Devices", "Disposables", "First Aid Supplies"],
        timing: "Quality assured"
      },
      supplements: {
        title: "Health Supplements",
        description: "Vitamins, minerals and health supplements",
        features: ["Vitamins", "Minerals", "Protein Supplements", "Herbal Products"],
        timing: "Competitive pricing"
      },
      consultation: {
        title: "Medical Consultation",
        description: "Professional pharmaceutical consultation and guidance",
        features: ["Drug Interaction", "Dosage Guidance", "Side Effects", "Medication Review"],
        timing: "Expert consultation"
      },
      delivery: {
        title: "Home Delivery",
        description: "Convenient home delivery of medicines and supplies",
        features: ["Home Delivery", "Online Ordering", "Quick Delivery", "Safe Packaging"],
        timing: "Same-day delivery available"
      }
    },
    additional: {
      emergency: {
        title: "Emergency Care",
        description: "24/7 emergency medical services with rapid response"
      },
      checkups: {
        title: "Health Checkups",
        description: "Comprehensive health screening packages for all ages"
      },
      preventive: {
        title: "Preventive Care",
        description: "Vaccination and preventive healthcare services"
      },
      records: {
        title: "Health Records",
        description: "Digital health records and medical history management"
      }
    }
  },
  doctorsPage: {
    pageTitle: "Meet Our Expert Doctors",
    pageDescription: "Our team of experienced and compassionate doctors is dedicated to providing the highest quality healthcare for you and your family.",
    experienceYears: "{years} Years Experience",
    bookAppointment: "Book Appointment",
    callNow: "Call Now",
    contactInfo: {
      phone: "Phone",
      email: "Email",
      additionalRole: "Additional Role",
      availability: "Availability"
    },
    aboutDoctor: "About Doctor",
    areasOfExpertise: "Areas of Expertise",
    whyChoose: {
      title: {
        prefix: "Why Choose",
        highlighted: "Our Doctors"
      },
      description: "Experience healthcare excellence with our team of dedicated and experienced medical professionals",
      experienced: {
        title: "Experienced Team",
        description: "Our doctors have 10+ years of experience in their respective specialties"
      },
      awardWinning: {
        title: "Award Winning",
        description: "Recognized for excellence in patient care and medical expertise"
      },
      compassionate: {
        title: "Compassionate Care",
        description: "Dedicated to providing personalized and compassionate healthcare"
      },
      qualityAssured: {
        title: "Quality Assured",
        description: "Highest standards of medical care with modern facilities and equipment"
      }
    },
    doctors: {
      pragya: {
        name: "Dr. Pragya Pandey",
        specialization: "Obstetrics and Gynecology",
        location: "Arrah, Bihar",
        education: "MBBS",
        role: "Consultant",
        additionalRole: "Dhreeti Healthcare and Research Private Limited",
        about: "Dr. Pragya Pandey is a highly experienced Consultant in Obstetrics and Gynecology, with over 10 years of experience. She holds an MBBS degree and is dedicated to providing comprehensive and compassionate care to women at all stages of life. Dr. Pandey has a special interest in high-risk pregnancies, infertility, and laparoscopic surgery. She is also a Director at Dhreeti Clinic and Research Private Limited.",
        expertise: ["High-risk Pregnancies", "Infertility Treatment", "Laparoscopic Surgery", "Women's Health", "Prenatal Care", "Gynecological Surgery"],
        availability: "Mon-Fri: 9 AM - 6 PM, Sat: 9 AM - 2 PM"
      },
      ganesh: {
        name: "Dr. Ganesh Pandey",
        specialization: "General Medicine",
        location: "Arrah, Bihar",
        education: "MBBS",
        role: "Consultant",
        additionalRole: "Dhreeti Healthcare and Research Private Limited",
        about: "Dr. Ganesh Pandey is a seasoned General Physician and primary care provider, serving as the first point of contact for a wide range of health issues. With over 10 years of experience, he is trained to diagnose, treat, and manage a broad spectrum of illnesses in adults, acting as a central coordinator for patients' overall healthcare. Dr. Pandey specializes in treating common acute illnesses and infections including respiratory infections (common cold, flu, sinusitis, bronchitis, strep throat, pneumonia), gastrointestinal issues (stomach flu, diarrhea, nausea, vomiting, acid reflux, food allergies), urinary tract infections, skin conditions, and minor injuries. He also excels in managing chronic diseases such as diabetes, high cholesterol, obesity, hypertension, heart disease, asthma, COPD, arthritis, osteoporosis, and thyroid problems. Additionally, Dr. Pandey provides mental health support for anxiety and depression, along with comprehensive preventive care including routine health screenings, vaccinations, and lifestyle counseling. While he handles a vast array of conditions, he ensures proper referrals to specialists when needed while continuing to oversee and coordinate patient care for comprehensive treatment.",
        expertise: ["Acute Illnesses & Infections", "Chronic Disease Management", "Preventive Care", "Mental Health Support", "Health Screenings", "Lifestyle Counseling"],
        availability: "Mon-Fri: 8 AM - 7 PM, Sat: 8 AM - 3 PM"
      }
    }
  },
  eventsPage: {
    pageTitle: "Healthcare Events & Programs",
    pageDescription: "Join our community health initiatives, awareness programs, and medical camps designed to promote better health and wellness for everyone.",
    loading: "Loading events...",
    status: {
      registrationOpen: "Registration Open",
      registrationClosed: "Registration Closed",
      completed: "Completed"
    },
    attendees: "{count} attendees",
    highlights: "Highlights",
    registerNow: "Register Now",
    eventCompleted: "Event Completed",
    contactUs: "Contact Us",
    upcomingEvents: {
      title: {
        prefix: "Upcoming",
        highlighted: "Events"
      },
      description: "Don't miss out on our upcoming health programs, workshops, and medical camps",
      noEvents: {
        title: "No Upcoming Events",
        description: "We don't have any upcoming events at the moment. Please check back later for new health programs and workshops."
      }
    },
    pastEvents: {
      title: {
        prefix: "Past",
        highlighted: "Events"
      },
      description: "Take a look at our successful health programs and community initiatives",
      noEvents: {
        title: "No Past Events",
        description: "We haven't held any events yet. Stay tuned for our upcoming health programs and community initiatives."
      }
    }
  },
  serviceSection: {
    title: "Our Services",
    description: "Comprehensive healthcare services designed to meet all your medical needs under one roof",
    opd: {
      features: ["General Medicine", "Obstetrics & gynaecology"]
    },
    pathology: {
      features: [
        "All Kinds of Blood Tests", 
        "Clinical Hematology",
        "Clinical Biochemistry",
        "Clinical Microbiology",
        "Clinical Pathology"
      ]
    },
    radiology: {
      features: [
        "Ultrasound (U.S.G.)", 
        "E.C.G."
      ]
    },
    surgery: {
      title: "Surgery",
      description: "Comprehensive women's health and surgical services",
      features: [
        "Gynaecological surgery",
        "Minimally Invasive Surgery", 
        "Reproductive Health", 
        "Prenatal Care", 
        "Women's Wellness"
      ]
    },
    pharmacy: {
      features: [
        "Prescription Medicines", 
        "Over-the-Counter Drugs", 
        "Medical Supplies", 
        "Health Consultations"
      ]
    },
    schedule: {
      weekdays: "Monday to Friday: 8:00 AM - 6:00 PM",
      weekends: "Saturday & Sunday: 8:00 AM - 12:00 PM"
    }
  },
}

const hiTranslations = {
  navigation: {
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    doctors: "डॉक्टर",
    events: "कार्यक्रम",
    contact: "संपर्क"
  },
  header: {
    bookAppointment: "अपॉइंटमेंट बुक करें",
    changeLanguage: "भाषा बदलें"
  },
  contact: {
    phone1: "9901515300",
    phone2: "9279797955",
    address: "डी.ई.ओ कार्यालय के पास\nआरा, बिहार",
    timing: "सोम-शनि: सुबह 8 बजे - शाम 8 बजे"
  },
  contactPage: {
    pageTitle: "संपर्क करें",
    pageDescription: "किसी भी जानकारी के लिए या अपॉइंटमेंट शेड्यूल करने के लिए हमारी टीम से संपर्क करें। हम आपकी सभी स्वास्थ्य देखभाल जरूरतों में आपकी मदद करने के लिए यहां हैं।",
    info: {
      title: "संपर्क जानकारी",
      location: "हमारा स्थान",
      phone: "फोन नंबर",
      email: "ईमेल पता"
    },
    emergency: {
      title: "आपातकालीन संपर्क",
      description: "चिकित्सा आपात स्थिति के लिए, कृपया हमारी 24/7 आपातकालीन हेल्पलाइन पर तुरंत कॉल करें।"
    },
    form: {
      title: "हमें संदेश भेजें",
      name: "पूरा नाम",
      namePlaceholder: "अपना पूरा नाम दर्ज करें",
      email: "ईमेल पता",
      emailPlaceholder: "अपना ईमेल पता दर्ज करें",
      phone: "फोन नंबर",
      phonePlaceholder: "अपना फोन नंबर दर्ज करें",
      message: "आपका संदेश",
      messagePlaceholder: "हम आपकी कैसे मदद कर सकते हैं?",
      submit: "संदेश भेजें",
      sending: "भेज रहा है...",
      response: "हम जल्द से जल्द आपसे संपर्क करेंगे।",
      success: {
        title: "संदेश भेज दिया गया!",
        message: "हमसे संपर्क करने के लिए धन्यवाद। हम जल्द ही आपकी पूछताछ का जवाब देंगे।"
      }
    }
  },
  services: {
    opdServices: {
      title: "ओ.पी.डी. सेवाएं",
      description: "अनुभवी डॉक्टरों के साथ व्यापक आउटपेशेंट विभाग सेवाएं"
    },
    pathology: {
      title: "पैथोलॉजी सेवाएं",
      description: "सटीक परिणामों के साथ पूर्ण रक्त और मूत्र चिकित्सा जांच"
    },
    radiology: {
      title: "रेडियोलॉजी सेवाएं",
      description: "सटीक निदान के लिए उन्नत अल्ट्रासाउंड इमेजिंग सेवाएं"
    },
    pharmacy: {
      title: "फार्मेसी सेवाएं",
      description: "गुणवत्तापूर्ण दवाओं के साथ पूर्ण फार्मास्युटिकल सेवाएं"
    }
  },
  hero: {
    welcome: "धृति क्लिनिक मे",
    clinicName: "आपका स्वागत है",
    description: "2022 से, हमने उच्च स्तरीय सेवाओं को सुलभ और किफायती बनाकर स्वास्थ्य सेवा में क्रांति ला दी है। हम विश्वसनीय देखभाल के एक नए मानक प्रदान करने के लिए आधुनिक सुविधाओं को अनुभवी, करुणामय डॉक्टरों के साथ जोड़ते हैं। हमारा मिशन एक स्वस्थ समुदाय का निर्माण करना है, यह सुनिश्चित करके कि हर किसी को वित्तीय तनाव के बिना सर्वोत्तम चिकित्सा सेवाओं तक पहुंच है।",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    trustedBy: "1000+ मरीजों द्वारा विश्वसनीय",
    expertTeam: "हमारी विशेषज्ञ चिकित्सकों की टीम",
    teamDescription: "हमारी समर्पित विशेषज्ञों की टीम, सभी सात साल से अधिक के अनुभव के साथ, करुणामय, व्यक्तिगत सबसे विश्वसनीय और प्रभावी देखभाल प्रदान करती है।",
    virtualTour: "वर्चुअल टूर लें",
    watchStory: "हमारी कहानी देखें"
  },
  about: {
    title: "धृति क्लिनिक के बारे में",
    subtitle: "देखभाल और उत्कृष्टता की विरासत",
    description: "2022 में स्थापित, धृति क्लिनिक समुदाय को असाधारण स्वास्थ्य सेवाएं प्रदान करने में अग्रणी रहा है। हमारी अत्याधुनिक सुविधा नवीनतम चिकित्सा प्रौद्योगिकी से सुसज्जित है और अत्यधिक योग्य स्वास्थ्य देखभाल पेशेवरों द्वारा संचालित है।",
    mission: "हमारा मिशन",
    missionText: "सभी मरीजों को उनकी पृष्ठभूमि या वित्तीय स्थिति की परवाह किए बिना, सुलभ, किफायती और उच्च गुणवत्ता वाली स्वास्थ्य सेवाएं प्रदान करना।",
    vision: "हमारी विजन",
    visionText: "क्षेत्र में अग्रणी स्वास्थ्य सेवा प्रदाता बनना, जो रोगी देखभाल में हमारी उत्कृष्टता, चिकित्सा प्रथाओं में नवाचार और सामुदायिक स्वास्थ्य के प्रति प्रतिबद्धता के लिए जाना जाता है।",
    values: "हमारे मूल्य",
    value1Title: "उत्कृष्टता",
    value1Text: "हम अपनी सेवा के सभी पहलुओं में उत्कृष्टता के लिए प्रयास करते हैं।",
    value2Title: "करुणा",
    value2Text: "हम सभी मरीजों के साथ सहानुभूति और समझ के साथ व्यवहार करते हैं।",
    value3Title: "अखंडता",
    value3Text: "हम स्वास्थ्य देखभाल में उच्चतम नैतिक मानकों को बनाए रखते हैं।",
    value4Title: "नवाचार",
    value4Text: "हम देखभाल में सुधार के लिए नई तकनीकों और विधियों को अपनाते हैं।"
  },
  whyChoose: {
    title: "हमें क्यों चुनें",
    subtitle: "स्वास्थ्य सेवा में उत्कृष्टता",
    description: "धृति क्लिनिक में, हम अपने मरीजों को उच्चतम गुणवत्ता की देखभाल प्रदान करने के लिए प्रतिबद्ध हैं। यहां बताया गया है कि आपको अपनी स्वास्थ्य देखभाल जरूरतों के लिए हमें क्यों चुनना चाहिए:",
    reason1Title: "विशेषज्ञ डॉक्टर",
    reason1Text: "हमारी टीम में अत्यधिक योग्य और अनुभवी चिकित्सा पेशेवर शामिल हैं।",
    reason2Title: "आधुनिक सुविधाएं",
    reason2Text: "सटीक निदान और प्रभावी उपचार के लिए अत्याधुनिक उपकरण और सुविधाएं।",
    reason3Title: "मरीज-केंद्रित देखभाल",
    reason3Text: "हम आपकी स्वास्थ्य देखभाल यात्रा के दौरान आपके आराम, सुरक्षा और कल्याण को प्राथमिकता देते हैं।",
    reason4Title: "किफायती मूल्य निर्धारण",
    reason4Text: "सभी के लिए पहुंच सुनिश्चित करने के लिए उचित कीमतों पर गुणवत्तापूर्ण स्वास्थ्य सेवाएं।"
  },
  testimonials: {
    title: "मरीजों के प्रशंसापत्र",
    subtitle: "हमारे मरीज क्या कहते हैं",
    description: "सिर्फ हमारी बात मत मानिए। धृति क्लिनिक में अपने अनुभवों के बारे में हमारे संतुष्ट मरीजों से सुनिए।",
    testimonial1Name: "राजेश कुमार",
    testimonial1Text: "मैं अब एक साल से अधिक समय से धृति क्लिनिक का मरीज हूं, और मुझे मिली देखभाल से मैं बेहद संतुष्ट हूं। डॉक्टर जानकार और देखभाल करने वाले हैं, और स्टाफ हमेशा मित्रवत और सहायक होता है।",
    testimonial2Name: "प्रिया शर्मा",
    testimonial2Text: "वर्षों तक अपने स्वास्थ्य संबंधी समस्याओं से जूझने के बाद, मुझे आखिरकार धृति क्लिनिक में राहत मिली। डॉक्टरों ने मेरी चिंताओं को समझने के लिए समय निकाला और मेरे लिए एक उपचार योजना विकसित की जो मेरे लिए काम करती थी। मैं उनकी विशेषज्ञता और करुणा के लिए आभारी हूं।",
    testimonial3Name: "अमित पटेल",
    testimonial3Text: "धृति क्लिनिक में मुझे मिली देखभाल और ध्यान का स्तर असाधारण था। जैसे ही मैं अंदर गया, मुझे एक मरीज के रूप में स्वागत और सम्मान महसूस हुआ। डॉक्टरों ने सब कुछ स्पष्ट रूप से समझाया और मेरी सभी चिंताओं का समाधान किया।"
  },
  diseases: {
    diabetes: {
      name: "मधुमेह",
      symptoms: [
        "बार-बार पेशाब आना",
        "अत्यधिक प्यास",
        "थकान",
        "धुंधली दृष्टि",
        "धीमा उपचार",
        "वजन घटना",
        "सुन्नता",
        "भूख बढ़ना"
      ],
      cures: [
        "कम शर्करा और कार्ब्स के साथ स्वस्थ आहार बनाए रखें",
        "प्रतिदिन कम से कम 30 मिनट नियमित रूप से व्यायाम करें",
        "नियमित रूप से रक्त शर्करा के स्तर की निगरानी करें",
        "निर्देशानुसार निर्धारित दवाएं लें",
        "अपने डॉक्टर के साथ नियमित जांच",
        "परिष्कृत कार्ब्स के बजाय साबुत अनाज चुनें",
        "बहुत सारी सब्जियां और दुबला प्रोटीन शामिल करें",
        "मीठे पेय और प्रसंस्कृत खाद्य पदार्थों को सीमित करें"
      ],
      description: "रक्त शर्करा के स्तर को प्रभावित करने वाला एक चयापचय विकार जिसके लिए जीवनशैली प्रबंधन की आवश्यकता होती है।"
    },
    hypertension: {
      name: "उच्च रक्तचाप",
      symptoms: [
        "सिरदर्द",
        "सांस की तकलीफ",
        "नाक से खून आना",
        "फ्लशिंग",
        "चक्कर आना",
        "सीने में दर्द",
        "दृष्टि समस्याएं",
        "अनियमित हृदय गति"
      ],
      cures: [
        "नमक का सेवन कम करें",
        "नियमित रूप से व्यायाम करें",
        "स्वस्थ वजन बनाए रखें",
        "शराब का सेवन सीमित करें",
        "तनाव को प्रभावी ढंग से प्रबंधित करें",
        "फलों और सब्जियों से भरपूर संतुलित आहार खाएं",
        "नियमित रूप से रक्तचाप की निगरानी करें",
        "निर्देशानुसार निर्धारित दवाएं लें"
      ],
      description: "उच्च रक्तचाप की स्थिति जिसके लिए सावधानीपूर्वक निगरानी और प्रबंधन की आवश्यकता होती है।"
    },
    tuberculosis: {
      name: "क्षय रोग (टीबी)",
      symptoms: [
        "लगातार खांसी (3 हफ्ते से अधिक समय तक)",
        "सीने में दर्द",
        "खांसी में खून आना",
        "अस्पष्टीकृत वजन घटना",
        "बुखार और ठंड लगना",
        "रात में पसीना आना",
        "थकान",
        "भूख न लगना"
      ],
      cures: [
        "निर्धारित एंटीबायोटिक्स का पूरा कोर्स पूरा करें (आमतौर पर 6-9 महीने)",
        "स्वास्थ्य सेवा प्रदाता के साथ नियमित फॉलो-अप",
        "रिकवरी का समर्थन करने के लिए पौष्टिक आहार बनाए रखें",
        "धूम्रपान और शराब के सेवन से बचें",
        "संक्रमण के फैलने को रोकने के लिए अच्छी स्वच्छता का अभ्यास करें",
        "प्रारंभिक उपचार चरण के दौरान डॉक्टर द्वारा सलाह दिए जाने पर अलग रहें",
        "दवा के किसी भी दुष्प्रभाव की निगरानी करें और उन्हें अपने डॉक्टर को रिपोर्ट करें",
        "उच्च जोखिम वाले क्षेत्रों में अनुशंसित होने पर बीसीजी वैक्सीन लगवाएं"
      ],
      description: "मुख्य रूप से फेफ़ड़ों को प्रभावित करने वाला एक बैक्टीरियल संक्रमण, जिसके लिए व्यापक उपचार की आवश्यकता होती है।"
    },
    thyroid: {
      name: "थायराइड विकार",
      symptoms: [
        "थकान",
        "वजन में परिवर्तन",
        "मूड स्विंग्स",
        "बाल झड़ना",
        "सूखी त्वचा",
        "अनियमित हृदय गति",
        "ठंड/गर्मी के प्रति संवेदनशीलता",
        "मांसपेशियों की कमजोरी"
      ],
      cures: [
        "निर्धारित थायराइड दवाएं लें",
        "नियमित थायराइड फंक्शन टेस्ट",
        "पर्याप्त आयोडीन के साथ संतुलित आहार खाएं",
        "तनाव का प्रबंधन करें",
        "नियमित रूप से व्यायाम करें",
        "स्वयं दवा लेने से बचें",
        "खुराक समायोजन के लिए अपने डॉक्टर से परामर्श करें",
        "लक्षणों की निगरानी करें और परिवर्तनों की रिपोर्ट करें"
      ],
      description: "थायराइड ग्रंथि और शरीर में हार्मोनल संतुलन को प्रभावित करने वाले विकार।"
    },
    dengue: {
      name: "डेंगू",
      symptoms: [
        "तेज बुखार",
        "गंभीर सिरदर्द",
        "जोड़ों का दर्द",
        "चकत्ते",
        "मतली",
        "आंखों में दर्द"
      ],
      cures: [
        "आराम और हाइड्रेशन",
        "एसिटामिनोफेन के साथ दर्द निवारक",
        "एस्पिरिन और इबुप्रोफेन से बचें",
        "लक्षण बिगड़ने पर चिकित्सा सहायता लें",
        "चेतावनी के संकेतों की निगरानी करें",
        "स्वास्थ्य सेवा प्रदाता के साथ फॉलो अप करें"
      ],
      description: "मच्छरों द्वारा फैलने वाला एक वायरल संक्रमण, जो गंभीर फ्लू जैसे लक्षण पैदा करता है।"
    },
    commonText: {
      symptomsIntro: "यहां सबसे आम लक्षण दिए गए हैं जो संबंधित हैं",
      consultDoctor: "यदि आप इनमें से किसी भी लक्षण का अनुभव करते हैं, तो उचित निदान और उपचार के लिए स्वास्थ्य पेशेवर से परामर्श करें।"
    },
    viewDetails: "विवरण देखें",
    treatmentProtocol: "उपचार प्रोटोकॉल",
    treatmentDescription: "साक्ष्य-आधारित चिकित्सा उपचार और व्यापक देखभाल दिशानिर्देश",
    medicalTreatmentPlan: "चिकित्सा उपचार योजना",
    disclaimer: {
      title: "चिकित्सा अस्वीकरण:",
      text: "यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह को प्रतिस्थापित नहीं करनी चाहिए। उचित निदान और उपचार के लिए हमेशा योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें।"
    },
    clinic: {
      name: "धृति मेडिकल क्लिनिक",
      tagline: "उन्नत स्वास्थ्य देखभाल समाधान • बोर्ड-प्रमाणित चिकित्सक",
      contactUs: "संपर्क करें",
      location: "हमारा स्थान",
      hours: "कार्य समय"
    },
    scheduleConsultation: "पेशेवर परामर्श शेड्यूल करें"
  },
  schemes: {
    special: "विशेष",
    title: "योजनाएं और ऑफर",
    description: "स्वास्थ्य सेवा को अधिक किफायती बनाने के लिए डिज़ाइन किए गए हमारे विशेष छूट और ऑफर का लाभ उठाएं",
    consultation: {
      badge: "परामर्श समय",
      title: "मरीज परामर्श समय",
      weekdays: "सोमवार से शुक्रवार",
      weekdayHours: "सुबह 8 बजे - शाम 6 बजे",
      weekends: "शनिवार और रविवार",
      weekendHours: "सुबह 8 बजे - दोपहर 12 बजे",
      important: "महत्वपूर्ण",
      confirmMessage: "आने से पहले कृपया अपनी अपॉइंटमेंट और डॉक्टर की उपलब्धता की फोन पर पुष्टि करें।"
    },
    monthly: {
      badge: "मासिक ऑफर",
      title: "मासिक विशेष ऑफर",
      offer1: {
        date: "हर महीने की 9 तारीख",
        price: "₹50",
        description: "स्त्री रोग और प्रसूति - कोई परामर्श शुल्क नहीं, केवल पंजीकरण शुल्क"
      },
      offer2: {
        date: "हर महीने की 3 तारीख",
        price: "₹150",
        description: "HbA1c (3-महीने का शुगर) टेस्ट"
      },
      offer3: {
        date: "हर महीने की 9 तारीख",
        price: "₹150",
        description: "थायराइड टेस्ट"
      },
      offer4: {
        date: "हर महीने की 15 तारीख",
        price: "₹300",
        description: "PFT (पल्मोनरी फंक्शन टेस्ट) सांस की तकलीफ के लिए"
      }
    },
    reduced: {
      badge: "कम शुल्क",
      title: "कम टेस्ट शुल्क",
      reducedText: "पिछले मूल्य से कम किया गया",
      test1: {
        name: "अल्ट्रासाउंड",
        price: "₹900"
      },
      test2: {
        name: "ईसीजी",
        price: "₹200"
      },
      proTip: {
        title: "प्रो टिप",
        text: "टेस्ट और परामर्श पर पैसे बचाने के लिए विशेष ऑफर वाले दिनों पर अपनी अपॉइंटमेंट बुक करें।"
      }
    },
    cta: {
      title: "गुणवत्तापूर्ण स्वास्थ्य सेवा का अनुभव करने के लिए तैयार हैं?",
      description: "हजारों मरीजों के साथ जुड़ें जो अपनी स्वास्थ्य देखभाल की जरूरतों के लिए हम पर भरोसा करते हैं। अपनी अपॉइंटमेंट शेड्यूल करने के लिए आज ही हमसे संपर्क करें।",
      email: "info@dhreeti.com",
      location: "आरा, बिहार"
    }
  },
  aboutPage: {
    pageTitle: "धृति क्लिनिक के बारे में",
    pageDescription: "हमारे मिशन, विजन और गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करने की प्रतिबद्धता के बारे में अधिक जानें",
    companyName: "धृति हेल्थकेयर एंड रिसर्च प्राइवेट लिमिटेड",
    heading: {
      prefix: "आरा, बिहार में",
      highlighted: "स्वास्थ्य सेवा को आगे बढ़ाना"
    },
    paragraph1: {
      prefix: "धृति हेल्थकेयर एंड रिसर्च प्राइवेट लिमिटेड, स्थापित",
      date: "फरवरी 2022",
      middle: "में, एक स्वास्थ्य सेवा प्रदाता है जो स्थित है",
      location: "आरा, बिहार",
      suffix: "हमारा मुख्य मिशन क्षेत्र के भीतर बुनियादी स्वास्थ्य सेवा को मजबूत करना है, इस विश्वास के तहत काम करना कि प्राथमिक देखभाल की एक मजबूत नींव तृतीयक सेवाओं के प्रभावी कामकाज के लिए अपरिहार्य है।"
    },
    paragraph2: "Our strategic vision involves creating a comprehensive network of high-quality primary healthcare centers. Through this initiative, we aim to guarantee accessible and dependable medical services for all individuals within the community.",
    established: "स्थापित फरवरी 2022",
    location: "आरा, बिहार",
    focus: "समुदाय केंद्रित",
    stats: {
      primaryCare: {
        title: "प्राथमिक देखभाल",
        subtitle: "आधार"
      },
      quality: {
        title: "गुणवत्ता",
        subtitle: "स्वास्थ्य सेवा",
        number: "100%",
        label: "गुणवत्ता आश्वासन"
      },
      accessible: {
        title: "सुलभ",
        subtitle: "सेवाएं"
      },
      network: {
        title: "नेटवर्क",
        subtitle: "केंद्र"
      },
      patients: {
        number: "5000+",
        label: "मरीजों की सेवा की गई"
      },
      years: {
        number: "2+",
        label: "सेवा के वर्ष"
      },
      emergency: {
        number: "24/7",
        label: "आपातकालीन देखभाल"
      }
    },
    missionText: "धृति क्लिनिक में हमारा मिशन सरल है: विश्वसनीय स्वास्थ्य सेवा को सुलभ और किफायती दोनों बनाना। हम रोगी देखभाल और विश्वास पर ध्यान केंद्रित करके आवश्यक चिकित्सा सेवाएं प्रदान करते हैं, हमारे तीन-स्तरीय शहर में हमारे समुदाय को वित्तीय बोझ के बिना स्वस्थ जीवन जीने के लिए सशक्त बनाते हैं।",
    visionText: "हमारे तीन-स्तरीय शहर में अग्रणी और सबसे विश्वसनीय बुनियादी स्वास्थ्य सेवा प्रदाता बनना, जो उत्कृष्टता, किफायती और हर मरीज के कल्याण के प्रति हमारी प्रतिबद्धता के लिए जाना जाता है। हम एक स्वस्थ समुदाय की कल्पना करते हैं जहां गुणवत्तापूर्ण देखभाल एक विलासिता नहीं, अधिकार है।",
    coreValues: {
      prefix: "हमारे",
      highlighted: "मूल मूल्य",
      description: "वे सिद्धांत जो स्वास्थ्य सेवा में उत्कृष्टता के प्रति हमारी प्रतिबद्धता का मार्गदर्शन करते हैं"
    },
    values: {
      compassion: {
        title: "करुणा",
        description: "हम हर मरीज के साथ सहानुभूति और समझ के साथ व्यवहार करते हैं"
      },
      quality: {
        title: "गुणवत्ता",
        description: "हमारी सभी सेवाओं में उच्चतम मानकों को बनाए रखना"
      },
      community: {
        title: "समुदाय",
        description: "हमारे स्थानीय समुदाय की समर्पण के साथ सेवा करना"
      },
      excellence: {
        title: "उत्कृष्टता",
        description: "हम जो कुछ भी करते हैं उसमें उत्कृष्टता के लिए प्रयास करना"
      }
    },
    facilities: {
      prefix: "हमारी",
      highlighted: "सुविधाएं और सेवाएं",
      description: "व्यापक स्वास्थ्य देखभाल समाधान प्रदान करने के लिए डिज़ाइन की गई अत्याधुनिक सुविधाएं"
    },
    services: {
      primaryCare: {
        title: "प्राथमिक देखभाल",
        description: "अनुभवी डॉक्टरों के साथ व्यापक बाह्य रोगी सेवाएं",
        features: ["सामान्य परामर्श", "स्वास्थ्य जांच", "निवारक देखभाल"]
      },
      diagnostic: {
        title: "नैदानिक सेवाएं",
        description: "उन्नत प्रयोगशाला और इमेजिंग सुविधाएं",
        features: ["रक्त परीक्षण", "अल्ट्रासाउंड", "ईसीजी सेवाएं"]
      },
      specialized: {
        title: "विशेष देखभाल",
        description: "विभिन्न चिकित्सा विशेषताओं में विशेषज्ञ देखभाल",
        features: ["महिला स्वास्थ्य", "हृदय देखभाल", "आपातकालीन सेवाएं"]
      }
    },
    achievements: {
      prefix: "हमारी",
      highlighted: "उपलब्धियां",
      description: "मील के पत्थर जो स्वास्थ्य सेवा उत्कृष्टता के प्रति हमारी प्रतिबद्धता को दर्शाते हैं"
    }
  },
  globalCta: {
    title: "गुणवत्तापूर्ण स्वास्थ्य सेवा का अनुभव करने के लिए तैयार हैं?",
    description: "हजारों मरीजों के साथ जुड़ें जो अपनी स्वास्थ्य देखभाल की जरूरतों के लिए हम पर भरोसा करते हैं। अपनी अपॉइंटमेंट शेड्यूल करने के लिए आज ही हमसे संपर्क करें।",
    email: "info@dhreeti.com",
    location: "आरा, बिहार"
  },
  footer: {
    tagline: "आपके लिए विश्वसनीय और किफायती स्वास्थ्य सेवा।",
    quickLinks: "त्वरित लिंक",
    links: {
      about: "हमारे बारे में",
      services: "हमारी सेवाएं",
      doctors: "हमारे डॉक्टर",
      bookAppointment: "अपॉइंटमेंट बुक करें"
    },
    opdServices: "ओ.पी.डी. सेवाएं",
    contactInfo: "संपर्क जानकारी",
    email: "dhreeti.india@gmail.com",
    copyright: "धृति क्लिनिक। सर्वाधिकार सुरक्षित।",
    privacyPolicy: "गोपनीयता नीति",
    terms: "सेवा की शर्तें"
  },
  appointment: {
    pageTitle: "अपनी अपॉइंटमेंट बुक करें",
    pageDescription: "हमारे विशेषज्ञ डॉक्टरों के साथ अपनी विजिट शेड्यूल करें। अपना स्लॉट रिजर्व करने के लिए नीचे दिया गया फॉर्म भरें।",
    formTitle: "अपनी अपॉइंटमेंट बुक करें",
    formSubtitle: "अपनी विजिट शेड्यूल करने के लिए नीचे विवरण भरें",
    services: [
      "सामान्य परामर्श",
      "प्रसूति एवं स्त्री रोग",
      "पैथोलॉजी टेस्ट",
      "रेडियोलॉजी सेवाएं",
      "फार्मेसी",
      "आपातकालीन देखभाल"
    ],
    success: {
      title: "अपॉइंटमेंट बुक हो गई!",
      message: "हमारे साथ अपॉइंटमेंट बुक करने के लिए धन्यवाद।",
      followUp: "हम जल्द ही ईमेल या फोन के माध्यम से आपकी अपॉइंटमेंट की पुष्टि करेंगे।"
    },
    form: {
      fullName: "पूरा नाम",
      fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
      email: "ईमेल पता",
      emailPlaceholder: "अपना ईमेल दर्ज करें",
      phone: "फोन नंबर",
      phonePlaceholder: "अपना फोन नंबर दर्ज करें",
      service: "सेवा चुनें",
      servicePlaceholder: "एक सेवा चुनें",
      doctor: "डॉक्टर चुनें",
      doctorPlaceholder: "एक डॉक्टर चुनें",
      date: "पसंदीदा तिथि",
      time: "पसंदीदा समय",
      timePlaceholder: "समय चुनें",
      notes: "अतिरिक्त नोट्स",
      notesPlaceholder: "डॉक्टर के लिए कोई विशेष चिंता या नोट्स...",
      processing: "प्रोसेसिंग...",
      submit: "अपॉइंटमेंट बुक करें"
    }
  },
  privacy: {
    pageTitle: "गोपनीयता नीति",
    pageDescription: "आपकी गोपनीयता और डेटा सुरक्षा हमारी सर्वोच्च प्राथमिकता है। जानें कि हम आपकी व्यक्तिगत और स्वास्थ्य जानकारी की रक्षा कैसे करते हैं।",
    intro: {
      title: {
        prefix: "आपकी गोपनीयता के प्रति",
        highlighted: "हमारी प्रतिबद्धता"
      },
      description: "धृति क्लिनिक एंड रिसर्च प्राइवेट लिमिटेड में, हम आपकी गोपनीयता की रक्षा और आपकी व्यक्तिगत और स्वास्थ्य जानकारी की सुरक्षा सुनिश्चित करने के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी स्वास्थ्य सेवाओं का उपयोग करते हैं तो हम आपकी जानकारी कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।"
    },
    sections: {
      information: {
        title: "हम जो जानकारी एकत्र करते हैं",
        content: [
          "व्यक्तिगत जानकारी (नाम, संपर्क विवरण, चिकित्सा इतिहास)",
          "स्वास्थ्य रिकॉर्ड और उपचार की जानकारी",
          "अपॉइंटमेंट और परामर्श विवरण",
          "भुगतान और बिलिंग जानकारी",
          "वेबसाइट उपयोग डेटा और कुकीज़"
        ]
      },
      usage: {
        title: "हम आपकी जानकारी का उपयोग कैसे करते हैं",
        content: [
          "चिकित्सा देखभाल और उपचार सेवाएं प्रदान करना",
          "अपॉइंटमेंट शेड्यूल करना और रोगी रिकॉर्ड प्रबंधित करना",
          "स्वास्थ्य सेवाओं के बारे में संवाद करना",
          "भुगतान और बिलिंग प्रोसेस करना",
          "हमारी स्वास्थ्य सेवाओं में सुधार करना"
        ]
      },
      sharing: {
        title: "जानकारी साझा करना",
        content: [
          "हम आपकी व्यक्तिगत जानकारी नहीं बेचते हैं",
          "केवल आपकी स्पष्ट सहमति से साझा करते हैं",
          "उपचार के लिए स्वास्थ्य सेवा प्रदाताओं के साथ साझा कर सकते हैं",
          "आवश्यक होने पर कानूनी आवश्यकताओं का पालन करते हैं",
          "रोगी सुरक्षा और सार्वजनिक स्वास्थ्य की रक्षा करते हैं"
        ]
      },
      security: {
        title: "डेटा सुरक्षा",
        content: [
          "एन्क्रिप्टेड डेटा ट्रांसमिशन और स्टोरेज",
          "सुरक्षित एक्सेस कंट्रोल और प्रमाणीकरण",
          "नियमित सुरक्षा ऑडिट और अपडेट",
          "डेटा सुरक्षा पर स्टाफ प्रशिक्षण",
          "स्वास्थ्य गोपनीयता मानकों का अनुपालन"
        ]
      },
      rights: {
        title: "आपके अधिकार",
        content: [
          "अपनी व्यक्तिगत स्वास्थ्य जानकारी तक पहुंच",
          "अपने रिकॉर्ड में सुधार का अनुरोध करना",
          "डेटा साझा करने के लिए सहमति वापस लेना",
          "अपने डेटा को हटाने का अनुरोध करना",
          "गोपनीयता प्रथाओं के बारे में शिकायतें दर्ज करना"
        ]
      },
      retention: {
        title: "डेटा प्रतिधारण",
        content: [
          "कानूनी आवश्यकताओं के अनुसार चिकित्सा रिकॉर्ड बनाए रखना",
          "व्यक्तिगत डेटा केवल जितना आवश्यक हो उतना ही रखा जाता है",
          "पुरानी जानकारी का सुरक्षित निपटान",
          "डेटा प्रतिधारण नीतियों की नियमित समीक्षा",
          "स्वास्थ्य सेवा नियमों का अनुपालन"
        ]
      }
    },
    additional: {
      title: "अतिरिक्त जानकारी",
      updates: {
        title: "इस नीति के अपडेट",
        description1: "हम समय-समय पर अपनी प्रथाओं में परिवर्तन या अन्य परिचालन, कानूनी या नियामक कारणों के लिए इस गोपनीयता नीति को अपडेट कर सकते हैं। हम आपको किसी भी महत्वपूर्ण परिवर्तन के बारे में हमारी वेबसाइट पर नई गोपनीयता नीति पोस्ट करके सूचित करेंगे।",
        description2: "किसी भी परिवर्तन के बाद हमारी सेवाओं का आपका निरंतर उपयोग अपडेट की गई गोपनीयता नीति की स्वीकृति को दर्शाता है।"
      },
      compliance: {
        title: "अनुपालन",
        description1: "हम सभी लागू स्वास्थ्य सेवा गोपनीयता कानूनों और नियमों का पालन करते हैं, जिसमें सूचना प्रौद्योगिकी अधिनियम, 2000, और अन्य प्रासंगिक भारतीय स्वास्थ्य सेवा गोपनीयता मानक शामिल हैं, लेकिन इन्हीं तक सीमित नहीं हैं।",
        description2: "हमारी गोपनीयता प्रथाओं की नियमित रूप से समीक्षा की जाती है और वर्तमान कानूनी आवश्यकताओं के अनुपालन को सुनिश्चित करने के लिए अपडेट किया जाता है।"
      }
    },
    contact: {
      title: "संपर्क करें",
      description: "यदि आपके पास इस गोपनीयता नीति या हमारी गोपनीयता प्रथाओं के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:",
      phone: {
        label: "फोन",
        value: "+91 98765 43210"
      },
      email: {
        label: "ईमेल",
        value: "privacy@dhreetihealthcare.com"
      },
      address: {
        label: "पता",
        value: "आरा, बिहार, भारत"
      }
    },
    cta: {
      title: "गोपनीयता के बारे में प्रश्न हैं?",
      description: "हम मदद करने के लिए यहां हैं। अपने डेटा सुरक्षा के बारे में किसी भी चिंता के लिए हमारी गोपनीयता टीम से संपर्क करें।",
      contactButton: "गोपनीयता टीम से संपर्क करें",
      downloadButton: "नीति डाउनलोड करें"
    }
  },
  terms: {
    pageTitle: "नियम और शर्तें",
    pageDescription: "हमारी स्वास्थ्य सेवाओं का उपयोग करने से पहले कृपया इन नियमों को ध्यान से पढ़ें। ये नियम धृति क्लिनिक के साथ आपके संबंध को नियंत्रित करते हैं।",
    intro: {
      title: {
        prefix: "हमारी सेवा के",
        highlighted: "नियमों को समझना"
      },
      description: "ये नियम और शर्तें उन नियमों, दिशानिर्देशों और समझौतों को रेखांकित करती हैं जो हमारी स्वास्थ्य सेवाओं के आपके उपयोग को नियंत्रित करती हैं। हमारी सेवाओं का उपयोग करके, आप स्वीकार करते हैं कि आपने इन नियमों को पढ़ लिया है, समझ लिया है और इनसे बाध्य होने के लिए सहमत हैं।"
    },
    sections: {
      acceptance: {
        title: "नियमों की स्वीकृति",
        content: [
          "हमारी स्वास्थ्य सेवाओं का उपयोग करके, आप इन नियमों से सहमत होते हैं",
          "ये नियम सभी रोगियों, आगंतुकों और हमारी सेवाओं के उपयोगकर्ताओं पर लागू होते हैं",
          "हम किसी भी समय इन नियमों को संशोधित करने का अधिकार रखते हैं",
          "परिवर्तनों के बाद निरंतर उपयोग नए नियमों की स्वीकृति का संकेत देता है",
          "कृपया अपडेट के लिए इन नियमों की नियमित रूप से समीक्षा करें"
        ]
      },
      services: {
        title: "स्वास्थ्य सेवाएं",
        content: [
          "हम व्यापक स्वास्थ्य और चिकित्सा सेवाएं प्रदान करते हैं",
          "सभी सेवाएं चिकित्सा पेशेवर की उपलब्धता के अधीन हैं",
          "आपातकालीन सेवाएं 24/7 उपलब्ध हैं",
          "गैर-आपातकालीन देखभाल के लिए अपॉइंटमेंट आवश्यक है",
          "हम आवश्यक होने पर सेवा से इनकार करने का अधिकार रखते हैं"
        ]
      },
      responsibilities: {
        title: "रोगी की जिम्मेदारियां",
        content: [
          "सटीक और पूर्ण चिकित्सा जानकारी प्रदान करें",
          "निर्धारित उपचार योजनाओं और दवाओं का पालन करें",
          "निर्धारित अपॉइंटमेंट पर समय पर पहुंचें",
          "स्वास्थ्य स्थिति में किसी भी परिवर्तन के बारे में हमें सूचित करें",
          "सुविधा नीतियों और अन्य रोगियों का सम्मान करें"
        ]
      },
      payment: {
        title: "भुगतान और बिलिंग",
        content: [
          "सभी सेवाओं का भुगतान सेवा के समय किया जाना चाहिए",
          "हम नकद, कार्ड और डिजिटल भुगतान स्वीकार करते हैं",
          "बीमा दावों को पॉलिसी शर्तों के अनुसार संसाधित किया जाता है",
          "देर से भुगतान के परिणामस्वरूप सेवा प्रतिबंध हो सकते हैं",
          "रिफंड नीतियां स्वास्थ्य सेवा नियमों के अनुसार लागू होती हैं"
        ]
      },
      privacy: {
        title: "गोपनीयता और विश्वसनीयता",
        content: [
          "रोगी की जानकारी को पूरी तरह से गोपनीय रखा जाता है",
          "चिकित्सा रिकॉर्ड स्वास्थ्य सेवा कानूनों के तहत संरक्षित हैं",
          "जानकारी साझा करने के लिए रोगी की सहमति आवश्यक है",
          "हम सभी गोपनीयता नियमों का पालन करते हैं",
          "डेटा सुरक्षा उपाय लागू हैं"
        ]
      },
      liability: {
        title: "देयता की सीमा",
        content: [
          "हम अपनी पेशेवर क्षमता के अनुसार सर्वोत्तम देखभाल प्रदान करते हैं",
          "चिकित्सा परिणामों की गारंटी नहीं दी जा सकती",
          "हम अप्रत्यक्ष या परिणामी क्षति के लिए उत्तरदायी नहीं हैं",
          "देयता कानून द्वारा अनुमत सीमा तक सीमित है",
          "रोगी अंतर्निहित चिकित्सा जोखिमों को स्वीकार करते हैं"
        ]
      },
      appointment: {
        title: "अपॉइंटमेंट और रद्दीकरण",
        content: [
          "अपॉइंटमेंट पहले से शेड्यूल किया जाना चाहिए",
          "रद्दीकरण के लिए 24 घंटे का नोटिस आवश्यक है",
          "अपॉइंटमेंट पर न आने के परिणामस्वरूप अपॉइंटमेंट प्रतिबंध हो सकते हैं",
          "आपातकालीन अपॉइंटमेंट को प्राथमिकता दी जाती है",
          "पुनर्निर्धारण उपलब्धता के अधीन है"
        ]
      },
      conduct: {
        title: "आचार संहिता",
        content: [
          "हर समय सम्मानजनक व्यवहार आवश्यक है",
          "किसी भी प्रकार के उत्पीड़न या भेदभाव को बर्दाश्त नहीं किया जाता",
          "सुविधा सुरक्षा और स्वच्छता प्रोटोकॉल का पालन करें",
          "प्रतीक्षा क्षेत्रों में उचित आचरण बनाए रखें",
          "उल्लंघन के परिणामस्वरूप सेवा समाप्ति हो सकती है"
        ]
      }
    },
    additional: {
      title: "महत्वपूर्ण जानकारी",
      governing: {
        title: "शासी कानून",
        description1: "ये नियम भारत के कानूनों द्वारा शासित हैं। इन नियमों या हमारी सेवाओं से उत्पन्न होने वाले किसी भी विवाद आरा, बिहार के न्यायालयों के विशेष अधिकार क्षेत्र के अधीन होंगे।",
        description2: "हम भारत में सभी लागू स्वास्थ्य सेवा कानूनों और नियमों का पालन करते हैं।"
      },
      severability: {
        title: "पृथक्करणीयता",
        description1: "यदि इन नियमों का कोई प्रावधान अप्रवर्तनीय या अमान्य पाया जाता है, तो शेष प्रावधान कानून द्वारा अनुमत पूर्ण सीमा तक वैध और प्रवर्तनीय रहेंगे।",
        description2: "किसी भी प्रावधान की अमान्यता पूरे समझौते की वैधता को प्रभावित नहीं करती है।"
      }
    },
    contact: {
      title: "नियमों के बारे में प्रश्न?",
      description: "यदि आपके पास इन नियमों और शर्तों के बारे में कोई प्रश्न हैं, तो कृपया हमारी कानूनी टीम से संपर्क करें:",
      phone: {
        label: "फोन",
        value: "+91 98765 43210"
      },
      email: {
        label: "ईमेल",
        value: "legal@dhreetihealthcare.com"
      },
      address: {
        label: "पता",
        value: "आरा, बिहार, भारत"
      }
    },
    cta: {
      title: "कानूनी सहायता की आवश्यकता है?",
      description: "हमारी कानूनी टीम हमारे नियमों और शर्तों के बारे में किसी भी प्रश्न का उत्तर देने के लिए उपलब्ध है।",
      contactButton: "कानूनी टीम से संपर्क करें",
      downloadButton: "नियम डाउनलोड करें"
    }
  },
  servicesPage: {
    pageTitle: "हमारी सेवाएं",
    pageDescription: "व्यापक स्वास्थ्य सेवाएं जो आपकी सभी चिकित्सा आवश्यकताओं को एक छत के नीचे पूरा करने के लिए डिज़ाइन की गई हैं",
    mainHeading: {
      prefix: "संपूर्ण",
      highlighted: "स्वास्थ्य समाधान",
      description: "परामर्श से लेकर निदान, उपचार से लेकर दवा तक - हम एंड-टू-एंड स्वास्थ्य सेवाएं प्रदान करते हैं"
    },
    additionalHeading: {
      prefix: "अतिरिक्त",
      highlighted: "सेवाएं"
    },
    whyChoose: {
      title: {
        prefix: "हमें क्यों चुनें",
        highlighted: "हमारी सेवाएं"
      },
      description: "हमारी व्यापक सेवाओं के साथ स्वास्थ्य सेवा उत्कृष्टता का अनुभव करें",
      expertTeam: {
        title: "विशेषज्ञ टीम",
        description: "5+ वर्षों के अनुभव के साथ सभी विभागों में अनुभवी डॉक्टर और विशेषज्ञ"
      },
      qualityAssured: {
        title: "गुणवत्ता आश्वासन",
        description: "NABL मान्यता के साथ चिकित्सा देखभाल और उपकरणों के उच्चतम मानक"
      },
      quickService: {
        title: "त्वरित सेवा",
        description: "तेज परिणाम और न्यूनतम प्रतीक्षा समय के साथ उसी दिन रिपोर्ट उपलब्ध"
      },
      comprehensiveCare: {
        title: "व्यापक देखभाल",
        description: "परामर्श से लेकर दवा तक एक छत के नीचे पूर्ण स्वास्थ्य समाधान"
      }
    },
    cta: {
      title: "शुरू करने के लिए तैयार हैं?",
      description: "आज ही अपनी अपॉइंटमेंट बुक करें और हमारी व्यापक स्वास्थ्य सेवाओं का अनुभव करें",
      bookButton: "अपॉइंटमेंट बुक करें",
      callButton: "अभी कॉल करें:",
      emergencyCare: "24/7 आपातकालीन देखभाल",
      qualityAssured: "गुणवत्ता आश्वासन"
    },
    opd: {
      generalMedicine: {
        title: "जनरल मेडिसिन",
        description: "वयस्कों और बच्चों के लिए व्यापक चिकित्सा देखभाल",
        features: ["स्वास्थ्य जांच", "रोग प्रबंधन", "निवारक देखभाल", "क्रोनिक रोग देखभाल"],
        timing: "सोम-शुक्र: सुबह 8 बजे - शाम 6 बजे"
      },
      gynecology: {
        title: "प्रसूति एवं स्त्री रोग",
        description: "महिलाओं के स्वास्थ्य और गर्भावस्था के लिए विशेष देखभाल",
        features: ["प्रसव पूर्व देखभाल", "स्त्री रोग परीक्षण", "परिवार नियोजन", "महिला स्वास्थ्य"],
        timing: "सोम-शुक्र: सुबह 9 बजे - शाम 5 बजे"
      },
      healthCheckups: {
        title: "स्वास्थ्य जांच",
        description: "व्यापक स्वास्थ्य स्क्रीनिंग और निवारक देखभाल",
        features: ["नियमित जांच", "टीकाकरण", "स्वास्थ्य शिक्षा", "स्क्रीनिंग टेस्ट"],
        timing: "सोम-शनि: सुबह 8 बजे - दोपहर 12 बजे"
      },
      emergencyCare: {
        title: "आपातकालीन देखभाल",
        description: "त्वरित प्रतिक्रिया के साथ 24/7 आपातकालीन चिकित्सा सेवाएं",
        features: ["आपातकालीन उपचार", "त्वरित प्रतिक्रिया", "गंभीर देखभाल", "एम्बुलेंस सेवा"],
        timing: "24/7 उपलब्ध"
      }
    },
    pathology: {
      hematology: {
        title: "क्लिनिकल हेमेटोलॉजी",
        description: "संपूर्ण रक्त गणना और रक्त विकार निदान",
        features: ["संपूर्ण रक्त गणना", "हीमोग्लोबिन टेस्ट", "रक्त समूह", "एनीमिया निदान"],
        timing: "24 घंटे में परिणाम"
      },
      biochemistry: {
        title: "क्लिनिकल बायोकेमिस्ट्री",
        description: "चयापचय विकारों के लिए जैव रासायनिक विश्लेषण",
        features: ["रक्त शर्करा परीक्षण", "किडनी फंक्शन", "लिवर फंक्शन", "लिपिड प्रोफाइल"],
        timing: "24-48 घंटे में परिणाम"
      },
      microbiology: {
        title: "क्लिनिकल माइक्रोबायोलॉजी",
        description: "माइक्रोबियल कल्चर और संवेदनशीलता परीक्षण",
        features: ["कल्चर टेस्ट", "एंटीबायोटिक संवेदनशीलता", "संक्रमण निदान", "बैक्टीरियल विश्लेषण"],
        timing: "48-72 घंटे में परिणाम"
      },
      clinical: {
        title: "क्लिनिकल पैथोलॉजी",
        description: "रोग निदान के लिए ऊतक और कोशिका विश्लेषण",
        features: ["साइटोलॉजी टेस्ट", "हिस्टोपैथोलॉजी", "फाइन नीडल एस्पिरेशन", "ऊतक विश्लेषण"],
        timing: "48-72 घंटे में परिणाम"
      },
      urinalysis: {
        title: "मूत्र विश्लेषण",
        description: "संपूर्ण मूत्र परीक्षा और विश्लेषण",
        features: ["मूत्र रूटीन", "माइक्रोस्कोपिक विश्लेषण", "रासायनिक विश्लेषण", "कल्चर टेस्ट"],
        timing: "24 घंटे में परिणाम"
      }
    },
    radiology: {
      ultrasound: {
        title: "अल्ट्रासाउंड (यू.एस.जी.)",
        description: "विभिन्न शरीर के अंगों के लिए उच्च-रिज़ॉल्यूशन अल्ट्रासाउंड इमेजिंग",
        features: ["पेट का अल्ट्रासाउंड", "पेल्विक अल्ट्रासाउंड", "गर्भावस्था अल्ट्रासाउंड", "कार्डियक अल्ट्रासाउंड"],
        timing: "उसी दिन रिपोर्ट उपलब्ध"
      },
      ecg: {
        title: "ई.सी.जी. (इलेक्ट्रोकार्डियोग्राम)",
        description: "हृदय लय और विद्युत गतिविधि की निगरानी",
        features: ["रेस्टिंग ईसीजी", "स्ट्रेस ईसीजी", "होल्टर मॉनिटरिंग", "कार्डियक असेसमेंट"],
        timing: "तत्काल परिणाम"
      },
      imaging: {
        title: "डिजिटल इमेजिंग",
        description: "उच्च-गुणवत्ता वाली डिजिटल इमेजिंग और रिपोर्टिंग",
        features: ["डिजिटल रिपोर्ट", "ऑनलाइन एक्सेस", "विशेषज्ञ व्याख्या", "गुणवत्ता आश्वासन"],
        timing: "त्वरित प्रोसेसिंग"
      },
      emergency: {
        title: "आपातकालीन इमेजिंग",
        description: "गंभीर मामलों के लिए आपातकालीन रेडियोलॉजी सेवाएं",
        features: ["आपातकालीन अल्ट्रासाउंड", "त्वरित निदान", "गंभीर देखभाल सहायता", "24/7 उपलब्ध"],
        timing: "24/7 आपातकालीन सेवा"
      }
    },
    pharmacy: {
      prescription: {
        title: "प्रिस्क्रिप्शन दवाएं",
        description: "प्रिस्क्रिप्शन और ओटीसी दवाओं की पूरी रेंज",
        features: ["प्रिस्क्रिप्शन ड्रग्स", "ओवर-द-काउंटर", "जेनेरिक दवाएं", "ब्रांडेड दवाएं"],
        timing: "लाइसेंस प्राप्त फार्मेसी"
      },
      surgical: {
        title: "सर्जिकल सप्लाई",
        description: "सर्जिकल सप्लाई और मेडिकल उपकरणों की पूरी रेंज",
        features: ["सर्जिकल इंस्ट्रूमेंट्स", "मेडिकल डिवाइस", "डिस्पोजेबल्स", "फर्स्ट एड सप्लाई"],
        timing: "गुणवत्ता आश्वासन"
      },
      supplements: {
        title: "स्वास्थ्य सप्लीमेंट्स",
        description: "विटामिन, मिनरल्स और स्वास्थ्य सप्लीमेंट्स",
        features: ["विटामिन", "मिनरल्स", "प्रोटीन सप्लीमेंट्स", "हर्बल प्रोडक्ट्स"],
        timing: "प्रतिस्पर्धी मूल्य निर्धारण"
      },
      consultation: {
        title: "मेडिकल परामर्श",
        description: "पेशेवर फार्मास्युटिकल परामर्श और मार्गदर्शन",
        features: ["ड्रग इंटरैक्शन", "डोसेज गाइडेंस", "साइड इफेक्ट्स", "मेडिकेशन रिव्यू"],
        timing: "विशेषज्ञ परामर्श"
      },
      delivery: {
        title: "होम डिलीवरी",
        description: "दवाओं और सप्लाई की सुविधाजनक होम डिलीवरी",
        features: ["होम डिलीवरी", "ऑनलाइन ऑर्डरिंग", "त्वरित डिलीवरी", "सुरक्षित पैकेजिंग"],
        timing: "उसी दिन डिलीवरी उपलब्ध"
      }
    },
    additional: {
      emergency: {
        title: "आपातकालीन देखभाल",
        description: "त्वरित प्रतिक्रिया के साथ 24/7 आपातकालीन चिकित्सा सेवाएं"
      },
      checkups: {
        title: "स्वास्थ्य जांच",
        description: "सभी उम्र के लिए व्यापक स्वास्थ्य स्क्रीनिंग पैकेज"
      },
      preventive: {
        title: "निवारक देखभाल",
        description: "टीकाकरण और निवारक स्वास्थ्य सेवाएं"
      },
      records: {
        title: "स्वास्थ्य रिकॉर्ड",
        description: "डिजिटल स्वास्थ्य रिकॉर्ड और मेडिकल हिस्ट्री प्रबंधन"
      }
    }
  },
  doctorsPage: {
    pageTitle: "हमारे विशेषज्ञ डॉक्टरों से मिलें",
    pageDescription: "हमारी अनुभवी और करुणामय डॉक्टरों की टीम आपको और आपके परिवार को उच्चतम गुणवत्ता वाली स्वास्थ्य सेवा प्रदान करने के लिए समर्पित है।",
    experienceYears: "{years} वर्षों का अनुभव",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    callNow: "अभी कॉल करें",
    contactInfo: {
      phone: "फोन",
      email: "ईमेल",
      additionalRole: "अतिरिक्त भूमिका",
      availability: "उपलब्धता"
    },
    aboutDoctor: "डॉक्टर के बारे में",
    areasOfExpertise: "विशेषज्ञता के क्षेत्र",
    whyChoose: {
      title: {
        prefix: "हमारे डॉक्टरों को",
        highlighted: "क्यों चुनें"
      },
      description: "हमारी समर्पित और अनुभवी चिकित्सा पेशेवरों की टीम के साथ स्वास्थ्य सेवा उत्कृष्टता का अनुभव करें",
      experienced: {
        title: "अनुभवी टीम",
        description: "हमारे डॉक्टरों के पास अपने-अपने विशेषज्ञताओं में 10+ वर्षों का अनुभव है"
      },
      awardWinning: {
        title: "पुरस्कार विजेता",
        description: "रोगी देखभाल और चिकित्सा विशेषज्ञता में उत्कृष्टता के लिए मान्यता प्राप्त"
      },
      compassionate: {
        title: "करुणामय देखभाल",
        description: "व्यक्तिगत और करुणामय स्वास्थ्य देखभाल प्रदान करने के लिए समर्पित"
      },
      qualityAssured: {
        title: "गुणवत्ता आश्वासन",
        description: "आधुनिक सुविधाओं और उपकरणों के साथ चिकित्सा देखभाल के उच्चतम मानक"
      }
    },
    doctors: {
      pragya: {
        name: "डॉ. प्रज्ञा पांडेय",
        specialization: "प्रसूति एवं स्त्री रोग",
        location: "आरा, बिहार",
        education: "एमबीबीएस",
        role: "परामर्शदाता",
        additionalRole: "धृति हेल्थकेयर एंड रिसर्च प्राइवेट लिमिटेड",
        about: "डॉ. प्रज्ञा पांडेय प्रसूति एवं स्त्री रोग में एक अत्यधिक अनुभवी परामर्शदाता हैं, जिनके पास 10 वर्षों से अधिक का अनुभव है। वह एमबीबीएस की डिग्री रखती हैं और जीवन के सभी चरणों में महिलाओं को व्यापक और करुणामय देखभाल प्रदान करने के लिए समर्पित हैं। डॉ. पांडेय की उच्च जोखिम वाली गर्भावस्था, बांझपन और लैप्रोस्कोपिक सर्जरी में विशेष रुचि है। वह धृति क्लिनिक एंड रिसर्च प्राइवेट लिमिटेड में निदेशक भी हैं।",
        expertise: ["उच्च जोखिम वाली गर्भावस्था", "बांझपन उपचार", "लैप्रोस्कोपिक सर्जरी", "महिला स्वास्थ्य", "प्रसव पूर्व देखभाल", "स्त्री रोग संबंधी सर्जरी"],
        availability: "सोम-शुक्र: सुबह 9 बजे - शाम 6 बजे, शनि: सुबह 9 बजे - दोपहर 2 बजे"
      },
      ganesh: {
        name: "डॉ. गणेश पांडेय",
        specialization: "जनरल मेडिसिन",
        location: "आरा, बिहार",
        education: "एमबीबीएस",
        role: "परामर्शदाता",
        additionalRole: "धृति हेल्थकेयर एंड रिसर्च प्राइवेट लिमिटेड",
        about: "डॉ. गणेश पांडेय एक अनुभवी जनरल फिजिशियन और प्राथमिक देखभाल प्रदाता हैं, जो विभिन्न स्वास्थ्य समस्याओं के लिए पहले संपर्क बिंदु के रूप में कार्य करते हैं। 10 वर्षों से अधिक के अनुभव के साथ, वे वयस्कों में बीमारियों के व्यापक स्पेक्ट्रम का निदान, उपचार और प्रबंधन करने के लिए प्रशिक्षित हैं, जो रोगियों के समग्र स्वास्थ्य देखभाल के लिए एक केंद्रीय समन्वयक के रूप में कार्य करते हैं। डॉ. पांडेय श्वसन संक्रमण (आम सर्दी, फ्लू, साइनसाइटिस, ब्रोंकाइटिस, स्ट्रेप थ्रोट, निमोनिया), गैस्ट्रोइंटेस्टाइनल समस्याएं (पेट फ्लू, दस्त, मतली, उल्टी, एसिड रिफ्लक्स, खाद्य एलर्जी), मूत्र पथ के संक्रमण, त्वचा की स्थिति और मामूली चोटों सहित सामान्य तीव्र बीमारियों और संक्रमणों के उपचार में विशेषज्ञ हैं। वे मधुमेह, उच्च कोलेस्ट्रॉल, मोटापा, उच्च रक्तचाप, हृदय रोग, अस्थमा, सीओपीडी, गठिया, ऑस्टियोपोरोसिस और थायरॉयड समस्याओं जैसी पुरानी बीमारियों के प्रबंधन में भी उत्कृष्ट हैं। इसके अतिरिक्त, डॉ. पांडेय चिंता और अवसाद के लिए मानसिक स्वास्थ्य सहायता के साथ-साथ नियमित स्वास्थ्य स्क्रीनिंग, टीकाकरण और जीवनशैली परामर्श सहित व्यापक निवारक देखभाल प्रदान करते हैं। जबकि वे स्थितियों की एक विस्तृत श्रृंखला को संभालते हैं, वे आवश्यकता पड़ने पर विशेषज्ञों को उचित रेफरल सुनिश्चित करते हैं, जबकि व्यापक उपचार के लिए रोगी देखभाल की निगरानी और समन्वय जारी रखते हैं।",
        expertise: ["तीव्र बीमारियां और संक्रमण", "पुरानी बीमारियों का प्रबंधन", "निवारक देखभाल", "मानसिक स्वास्थ्य सहायता", "स्वास्थ्य स्क्रीनिंग", "जीवनशैली परामर्श"],
        availability: "सोम-शुक्र: सुबह 8 बजे - शाम 7 बजे, शनि: सुबह 8 बजे - दोपहर 3 बजे"
      }
    }
  },
  eventsPage: {
    pageTitle: "हेल्थकेयर इवेंट्स और प्रोग्राम्स",
    pageDescription: "हमारे सामुदायिक स्वास्थ्य पहल, जागरूकता कार्यक्रमों और चिकित्सा शिविरों में शामिल हों, जो सभी के लिए बेहतर स्वास्थ्य और कल्याण को बढ़ावा देने के लिए डिज़ाइन किए गए हैं।",
    loading: "इवेंट्स लोड हो रहे हैं...",
    status: {
      registrationOpen: "रजिस्ट्रेशन खुला है",
      registrationClosed: "रजिस्ट्रेशन बंद है",
      completed: "पूरा हुआ"
    },
    attendees: "{count} प्रतिभागी",
    highlights: "मुख्य बातें",
    registerNow: "अभी रजिस्टर करें",
    eventCompleted: "इवेंट पूरा हुआ",
    contactUs: "संपर्क करें",
    upcomingEvents: {
      title: {
        prefix: "आगामी",
        highlighted: "इवेंट्स"
      },
      description: "हमारे आगामी स्वास्थ्य कार्यक्रमों, कार्यशालाओं और चिकित्सा शिविरों को न चूकें",
      noEvents: {
        title: "कोई आगामी इवेंट नहीं",
        description: "फिलहाल हमारे पास कोई आगामी इवेंट नहीं है। नए स्वास्थ्य कार्यक्रमों और कार्यशालाओं के लिए बाद में फिर से देखें।"
      }
    },
    pastEvents: {
      title: {
        prefix: "पिछले",
        highlighted: "इवेंट्स"
      },
      description: "हमारे सफल स्वास्थ्य कार्यक्रमों और सामुदायिक पहलों पर एक नज़र डालें",
      noEvents: {
        title: "कोई पिछला इवेंट नहीं",
        description: "हमने अभी तक कोई इवेंट आयोजित नहीं किया है। हमारे आगामी स्वास्थ्य कार्यक्रमों और सामुदायिक पहलों के लिए बने रहें।"
      }
    }
  },
  serviceSection: {
    title: "हमारी सेवाएं",
    description: "व्यापक स्वास्थ्य सेवाएं जो आपकी सभी चिकित्सा आवश्यकताओं को एक छत के नीचे पूरा करने के लिए डिज़ाइन की गई हैं",
    opd: {
      features: ["सामान्य चिकित्सा", "प्रसूति एवं स्त्री रोग"]
    },
    pathology: {
      features: [
        "सभी प्रकार के रक्त परीक्षण", 
        "क्लिनिकल हेमेटोलॉजी",
        "क्लिनिकल बायोकेमिस्ट्री",
        "क्लिनिकल माइक्रोबायोलॉजी",
        "क्लिनिकल पैथोलॉजी"
      ]
    },
    radiology: {
      features: [
        "अल्ट्रासाउंड (यू.एस.जी.)", 
        "ई.सी.जी."
      ]
    },
    surgery: {
      title: "सर्जरी",
      description: "व्यापक महिला स्वास्थ्य और सर्जिकल सेवाएं",
      features: [
        "स्त्री रोग संबंधी सर्जरी",
        "न्यूनतम इनवेसिव सर्जरी", 
        "प्रजनन स्वास्थ्य", 
        "प्रसव पूर्व देखभाल", 
        "महिला कल्याण"
      ]
    },
    pharmacy: {
      features: [
        "प्रिस्क्रिप्शन दवाएं", 
        "ओवर-द-काउंटर दवाएं", 
        "चिकित्सा आपूर्ति", 
        "स्वास्थ्य परामर्श"
      ]
    },
    schedule: {
      weekdays: "सोमवार से शुक्रवार: सुबह 8:00 बजे - शाम 6:00 बजे",
      weekends: "शनिवार और रविवार: सुबह 8:00 बजे - दोपहर 12:00 बजे"
    }
  },
}

const translations: Record<Language, Translations> = {
  en: enTranslations,
  hi: hiTranslations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Initialize language from localStorage or default to English
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en'
    setLanguage(newLang)
  }

  // Translation function
  const t = (key: string) => {
    const keys = key.split('.')
    let result: any = translations[language]
    
    // Handle nested keys
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k]
      } else {
        // Fallback to English if translation not found
        let fallback = translations['en']
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk]
          } else {
            console.warn(`Translation key not found: ${key}`)
            return key // Return the key if no translation found
          }
        }
        return fallback
      }
    }
    
    // Return the result (could be string, array, or object)
    return result
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
