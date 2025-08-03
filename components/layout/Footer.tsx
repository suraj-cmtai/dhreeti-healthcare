import Link from "next/link"
import Image from "next/image"
import {  
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t">
      {/* Main Footer */}
      
      <div className="max-w-7xl w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Healthcare Info */}
          <div className="space-y-6">
            <div>
              <Image src="/logo.png" alt="Dhreeti Clinic" width={120} height={120} className="h-16 w-auto mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                विश्वसनीय एवं किफायती स्वास्थ्य सेवा आपके लिए। Providing reliable and affordable healthcare services since 2022.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/19TuNETpAt/" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="Check out Dhreeti Clinic (@Dhreeti_clinic): https://x.com/Dhreeti_clinic?t=3zlw98gcpnzE1rRBA3kr8Q&s=08" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/dhreeti_clinic?igsh=MXRlYjM2dzhhaHBzYw==" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/dr-pragya-and-dr-ganesh-3427022a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
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
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              O.P.D. Services
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-700 text-sm font-semibold">Monday to Friday</span>
                <br />
                <span className="text-gray-600 text-sm">8 a.m. to 6 p.m.</span>
              </li>
              <li>
                <span className="text-gray-700 text-sm font-semibold">Saturday &amp; Sunday</span>
                <br />
                <span className="text-gray-600 text-sm">8 a.m. to 12 p.m.</span>
              </li>
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
                    Near D.E.O Office Moulabagh<br />
                    Arrah Bhojpur Bihar<br />
                    Pin No 802301
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">9901515300</p>
                  <p className="text-sm text-gray-600">9279797955</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-gray-600">dhreeti.india@gmail.com</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl w-full mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-gray-400">© {new Date().getFullYear()} Dhreeti Clinic. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
