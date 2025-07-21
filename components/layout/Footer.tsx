import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Shield,
  Award,
  Users,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t">
        
        {/* Newsletter */}
        <div className="pt-8 border-t border-gray-200">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for health tips and Healthcare updates</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      {/* Main Footer */}
      
      <div className="max-w-7xl w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Healthcare Info */}
          <div className="space-y-6">
            <div>
              <Image src="/logo.png" alt="Dhreeti Healthcare" width={120} height={120} className="h-16 w-auto mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                विश्वसनीय एवं किफायती स्वास्थ्य सेवा आपके लिए। Providing reliable and affordable healthcare services since
                2022.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Our Doctors", href: "/doctors" },
                { name: "Patient Portal", href: "/portal" },
                { name: "Health Tips", href: "/blog" },
                { name: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3">
              {["General Medicine", "Pediatrics", "Cardiology", "Orthopedics", "Dermatology", "Laboratory Tests"].map(
                (service) => (
                  <li key={service}>
                    <Link href="/services" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">
                    123 Health Street,
                    <br />
                    Medical District,
                    <br />
                    City - 123456
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">+91 98765 43210</p>
                  <p className="text-xs text-red-600">Emergency: +91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-gray-600">info@DhreetiHealthcare.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">
                    Mon - Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">5000+</p>
                <p className="text-xs text-gray-600">Happy Patients</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">15+</p>
                <p className="text-xs text-gray-600">Expert Doctors</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">2+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">24/7</p>
                <p className="text-xs text-gray-600">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl w-full mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-gray-400">© {new Date().getFullYear()} Dhreeti Healthcare. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
