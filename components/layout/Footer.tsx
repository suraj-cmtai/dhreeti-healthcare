'use client'

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
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t">
      {/* Main Footer */}

      <div className="max-w-7xl w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Healthcare Info */}
          <div className="space-y-6">
            <div>
              <Image src="/logo-horizontal1.png" alt="Dhreeti Clinic" width={300} height={120} className="h-14 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('footer.tagline')}
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
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('footer.links.about'), href: "/about" },
                { name: t('footer.links.services'), href: "/services" },
                { name: t('footer.links.doctors'), href: "/doctors" },
                { name: t('footer.links.bookAppointment'), href: "/book-appointment" },
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
              {t('footer.opdServices')}
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-700 text-sm font-semibold">{t('schemes.consultation.weekdays')}</span>
                <br />
                <span className="text-gray-600 text-sm">{t('schemes.consultation.weekdayHours')}</span>
              </li>
              <li>
                <span className="text-gray-700 text-sm font-semibold">{t('schemes.consultation.weekends')}</span>
                <br />
                <span className="text-gray-600 text-sm">{t('schemes.consultation.weekendHours')}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">
                    {t('contact.address').split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < t('contact.address').split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">{t('contact.phone1')}</p>
                  <p className="text-sm text-gray-600">{t('contact.phone2')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-gray-600">{t('footer.email')}</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl w-full mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-gray-400">© {new Date().getFullYear()} {t('footer.copyright')}</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
