"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Phone, Mail, MapPin, GraduationCap, User } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  image: string;
  specialization: string;
  experience: number;
  location: string;
  phone: string;
  email: string;
  education: string;
  awards: string[];
  about: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Rakesh Kumar",
    image: "/doctors/dr-rakesh.jpg",
    specialization: "Cardiologist",
    experience: 15,
    location: "Moulabagh, Arrah",
    phone: "9901515300",
    email: "dr.rakesh@gmail.com",
    education: "MBBS, MD (Cardiology)",
    awards: ["Best Doctor Award 2023", "Excellence in Cardiology 2022"],
    about: "Dr. Rakesh Kumar is a highly skilled cardiologist with a passion for providing the best possible care to his patients. With over 15 years of experience, he has a deep understanding of heart conditions and their treatments.",
  },
  {
    id: 2,
    name: "Dr. Rakesh Kumar",
    image: "/doctors/dr-rakesh.jpg",
    specialization: "Cardiologist",
    experience: 15,
    location: "Moulabagh, Arrah",
    phone: "9901515300",
    email: "dr.rakesh@gmail.com",
    education: "MBBS, MD (Cardiology)",
    awards: ["Best Doctor Award 2023", "Excellence in Cardiology 2022"],
    about: "Dr. Rakesh Kumar is a highly skilled cardiologist with a passion for providing the best possible care to his patients. With over 15 years of experience, he has a deep understanding of heart conditions and their treatments.",
  },    
  {
    id: 3,
    name: "Dr. Rakesh Kumar",
    image: "/doctors/dr-rakesh.jpg",
    specialization: "Cardiologist",
    experience: 15,
    location: "Moulabagh, Arrah",
    phone: "9901515300",
    email: "dr.rakesh@gmail.com",
    education: "MBBS, MD (Cardiology)",
    awards: ["Best Doctor Award 2023", "Excellence in Cardiology 2022"],
    about: "Dr. Rakesh Kumar is a highly skilled cardiologist with a passion for providing the best possible care to his patients. With over 15 years of experience, he has a deep understanding of heart conditions and their treatments.",
  },  
  // Add more doctors here as needed
];

export default function DoctorsPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Meet Our Expert Doctors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Our team of experienced and compassionate doctors is dedicated to providing the highest quality healthcare for you and your family.
          </motion.p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {doctors.map((doctor, idx) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-8 flex flex-col items-center hover:shadow-2xl transition-shadow"
                >
                  <div className="relative mb-4">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-teal-200 shadow-lg object-cover"
                    />
                    <span className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-full p-2 shadow">
                      <User className="w-5 h-5" />
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-1 text-gray-900">{doctor.name}</h2>
                  <p className="text-teal-700 font-medium mb-2">{doctor.specialization}</p>
                  <div className="flex flex-wrap justify-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-gray-600 text-sm bg-blue-50 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-blue-500" /> {doctor.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 text-sm bg-teal-50 px-3 py-1 rounded-full">
                      <GraduationCap className="w-4 h-4 text-teal-500" /> {doctor.education}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-gray-600 text-sm bg-blue-50 px-3 py-1 rounded-full">
                      <Phone className="w-4 h-4 text-blue-500" /> {doctor.phone}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 text-sm bg-teal-50 px-3 py-1 rounded-full">
                      <Mail className="w-4 h-4 text-teal-500" /> {doctor.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 text-sm font-medium">
                      {doctor.awards.join(", ")}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {doctor.experience} Years Experience
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed text-center mb-2">
                    {doctor.about}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
