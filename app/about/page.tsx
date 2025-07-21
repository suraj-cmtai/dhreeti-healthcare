import AboutUsSection from "@/components/home/about";
import TestimonialSection from "@/components/home/testimonial";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dhriti Clinic</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Learn more about our mission, vision, and commitment to providing quality healthcare services
            </p>
          </div>
        </section>

        <AboutUsSection />
        <TestimonialSection />
      </main>

    </div>
  )
}
