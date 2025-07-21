import Image from "next/image";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Patient",
    avatar: "/images/doctor-male.png",
    quote: "Dhreeti Healthcare provided me with excellent care and attention. The doctors are very professional and the facilities are top-notch!",
  },
  {
    name: "Priya Verma",
    role: "Patient",
    avatar: "/images/doctor-female.png",
    quote: "I felt truly cared for at Dhreeti Clinic. The staff is friendly and the treatment was effective and affordable.",
  },
  {
    name: "Dr. S. Kumar",
    role: "Consultant",
    avatar: "/images/doctor-male.png",
    quote: "As a consultant, I am proud to be associated with Dhreeti Healthcare. The team is dedicated to patient well-being.",
  },
  {
    name: "Sunita Joshi",
    role: "Patient",
    avatar: "/images/doctor-female.png",
    quote: "The best clinic experience I have had. Highly recommended for anyone seeking quality healthcare!",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          What Our Patients Say
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scrollbar-hide">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl border-t-4 border-teal-400 flex flex-col items-center p-6 min-w-[260px] max-w-sm mx-auto"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 mb-4">
                <Image src={t.avatar} alt={t.name} width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div className="text-lg font-semibold text-teal-700 mb-1">{t.name}</div>
              <div className="text-xs text-gray-500 mb-3">{t.role}</div>
              <div className="text-gray-700 text-center italic">“{t.quote}”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 