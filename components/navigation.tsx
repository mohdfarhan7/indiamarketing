"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle, Phone, Mail, Linkedin } from "lucide-react"

const CompanyLogo = () => (
  <Link href="/" className="flex items-center space-x-3">
    <div className="relative w-72 h-16">
      <img
        src="/images/india-marketing-logo-new.jpeg"
        alt="India Marketing - Grow With Us"
        className="w-full h-full object-contain"
      />
    </div>
  </Link>
)

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Export Markets", href: "/markets" },
  { name: "About Us", href: "/about" },
  { name: "Certifications", href: "/certifications" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto">
            <a href="tel:+917803030603" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 78030 30603</span>
            </a>
            <a
              href="mailto:INDIAMARKETING000@GMAIL.COM"
              className="flex items-center space-x-2 hover:text-green-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>INDIAMARKETING000@GMAIL.COM</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aleem-pariyani-416347240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-green-200 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="hidden md:block mt-2 sm:mt-0">
            <span>🌍 Exporting to 17+ Countries Worldwide</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 h-auto sm:h-24 py-2 sm:py-0">
            <div className="w-48 h-12 sm:w-72 sm:h-16 flex items-center justify-center">
              <CompanyLogo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-green-600 border-b-2 border-green-600 pb-1"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://wa.me/917803030603" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-medium transition-colors ${
                          pathname === item.href ? "text-green-600" : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
