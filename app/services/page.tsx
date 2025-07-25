import ServicesSection from "@/components/home/service-section";

export default function ServicesPage() {
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

      <ServicesSection />
    </>
  )
}
