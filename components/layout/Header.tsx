"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      {/* Main Header */}
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-horizontal1.png" alt="Dhreeti Clinic" width={240} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group ${
                    isActive ? "text-blue-600" : ""
                  }`}
                  style={isActive ? { color: "#2563eb" } : {}}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-teal-500 transition-all duration-200 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              )
            })}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
              <Link href="/book-appointment">Book Appointment</Link>
              <ArrowRight className="h-4 w-4 text-white" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Open menu"
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md px-0 py-0"
                style={{ padding: 0 }}
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Header with logo and close button */}
                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <Image
                      src="/logo.png"
                      alt="Dhreeti Clinic"
                      width={200}
                      height={70}
                      className="h-16 w-auto"
                      priority
                    />
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 flex flex-col space-y-2 px-6 py-6 overflow-y-auto">
                    {navigation.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href)
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                            isActive
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          }`}
                          style={isActive ? { color: "#2563eb", backgroundColor: "#eff6ff", textDecoration: "underline" } : {}}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </nav>

                  {/* CTA Button */}
                  <div className="px-6 pb-4">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-base py-2.5 flex items-center justify-center gap-2">
                      <Link href="/book-appointment" className="flex items-center gap-2 w-full h-full justify-center">
                        Book Appointment
                        <ArrowRight className="h-4 w-4 text-white" />
                      </Link>
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="px-6 pb-6 space-y-3 text-sm text-gray-600 border-t pt-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="truncate">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="truncate">123 Health Street, Medical District</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Mon-Sat: 9AM-8PM</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}