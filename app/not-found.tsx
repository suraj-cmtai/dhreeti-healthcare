import { Button } from "@/components/ui/button";
import { Home, Search, Phone, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for seems to have wandered off. 
          Don't worry, we're here to help you find your way back to health.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Link href="/" className="block">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white transition-all duration-300 transform w-fit">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link href="/services" className="block">
            <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 w-fit">
              <Search className="w-4 h-4 mr-2" />
              Browse Services
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-4">Quick Navigation:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              >
                Services
              </Button>
            </Link>
            <Link href="/doctors">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              >
                Doctors
              </Button>
            </Link>
            <Link href="/book-appointment">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              >
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 