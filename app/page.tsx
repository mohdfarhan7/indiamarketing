"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import LoadingSpinner from "@/components/loading-spinner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Award,
  Users,
  Package,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react"

// Hero slider data with high-quality images
const heroSlides = [
  {
    title: "Fresh Vegetables & Fruits",
    subtitle: "Farm-fresh produce delivered worldwide with  packaging",
    image: "/images/premium-red-onions-hero.jpeg",
    cta: "View Catalog",
  },
  {
    title: " Agricultural Exports",
    subtitle: "Connecting Indian farms to global markets with uncompromising quality",
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: "Explore Products",
  },
  {
    title: "Authentic Indian Spices",
    subtitle: "Traditional flavors meeting international quality standards",
    image: "/images/spices-herbs-collection.jpeg",
    cta: "Get Quote",
  },
]

// Featured products for homepage with actual images
const featuredProducts = [
  {
    name: " Red Onions",
    category: "Vegetables",
    image: "/images/fresh-red-onions.jpeg",
    description: "Fresh, high-quality red onions with extended shelf life",
  },
  {
    name: "Turmeric",
    category: "Spices",
    image: "/images/fresh-turmeric-roots.jpg",
    description: "High-quality turmeric with excellent curcumin content and medicinal properties",
    types: ["Ayurvedic", "Turmeric", "Turmeric Powder"],
  },
  {
    name: "Chickpeas",
    category: "Pulses",
    image: "/images/chickpeas.jpg",
    description: "High-protein chickpeas meeting international standards",
  },
  {
    name: "Mazafati Dates",
    category: "Dry Fruits",
    image: "/images/mazafati-dates.jpg",
    description: " soft dates with natural sweetness",
  },
]

// Export countries with flag images
const exportCountries = [
  { name: "India", flag: "https://flagcdn.com/w80/in.png", code: "IN" },
  { name: "UAE", flag: "https://flagcdn.com/w80/ae.png", code: "AE" },
  { name: "Qatar", flag: "https://flagcdn.com/w80/qa.png", code: "QA" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/w80/sa.png", code: "SA" },
  { name: "Maldives", flag: "https://flagcdn.com/w80/mv.png", code: "MV" },
  { name: "Indonesia", flag: "https://flagcdn.com/w80/id.png", code: "ID" },
  { name: "Malaysia", flag: "https://flagcdn.com/w80/my.png", code: "MY" },
  { name: "Sri Lanka", flag: "https://flagcdn.com/w80/lk.png", code: "LK" },
  { name: "Vietnam", flag: "https://flagcdn.com/w80/vn.png", code: "VN" },
  { name: "Thailand", flag: "https://flagcdn.com/w80/th.png", code: "TH" },
  { name: "Taiwan", flag: "https://flagcdn.com/w80/tw.png", code: "TW" },
  { name: "USA", flag: "https://flagcdn.com/w80/us.png", code: "US" },
  { name: "Philippines", flag: "https://flagcdn.com/w80/ph.png", code: "PH" },
  { name: "Iraq", flag: "https://flagcdn.com/w80/iq.png", code: "IQ" },
  { name: "Iran", flag: "https://flagcdn.com/w80/ir.png", code: "IR" },
  { name: "Egypt", flag: "https://flagcdn.com/w80/eg.png", code: "EG" },
  { name: "France", flag: "https://flagcdn.com/w80/fr.png", code: "FR" },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(timer)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Enhanced Slider */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-green-600/90 text-white px-6 py-2 text-sm font-medium backdrop-blur-sm">
                🌍 Trusted by 500+ Global Clients
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 hover:border-green-700 text-lg px-8 py-4 shadow-xl font-semibold w-full sm:w-auto backdrop-blur-sm"
                  >
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/90 text-gray-900 border-2 border-white hover:bg-white hover:text-gray-900 hover:border-white text-lg px-8 py-4 font-semibold w-full sm:w-auto shadow-lg backdrop-blur-sm"
                  >
                    Watch Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: "17+", label: "Export Countries", color: "text-green-600" },
              { icon: Package, number: "7", label: "Product Categories", color: "text-blue-600" },
              { icon: Users, number: "500+", label: "Happy Clients", color: "text-purple-600" },
              { icon: TrendingUp, number: "15+", label: "Years Experience", color: "text-orange-600" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">Featured Products</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"> Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully selected range of agricultural products, sourced from the finest farms and
              processed with international quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">{product.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link href="/products" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 text-white"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Export Markets Section with Flag Images */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Global Reach</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Exporting Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We proudly serve customers across 17+ countries, delivering  agricultural products with reliable
              logistics and quality assurance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {exportCountries.map((country, index) => (
              <Card
                key={index}
                className="group text-center p-4 hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative mb-3">
                    <img
                      src={country.flag || "/placeholder.svg"}
                      alt={`${country.name} flag`}
                      className="w-12 h-8 mx-auto rounded shadow-sm group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                    {country.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/markets">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4"
              >
                <Globe className="mr-2 w-5 h-5" />
                Explore Export Markets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Excellence in Every Export</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "APEDA and FSSAI certified products with rigorous quality control at every step",
                color: "text-green-600",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Reliable logistics network ensuring on-time delivery to global destinations",
                color: "text-blue-600",
              },
              {
                icon: Award,
                title: " Standards",
                description: "International quality standards with sustainable farming practices",
                color: "text-purple-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <feature.icon className={`w-16 h-16 mx-auto mb-6 ${feature.color}`} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Export  Products?</h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Join hundreds of satisfied clients worldwide. Get a custom quote for your agricultural export needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 border-2 border-white hover:border-gray-100 px-8 py-4 text-lg font-semibold w-full shadow-lg"
              >
                Get Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+917803030603" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-600 hover:border-white px-8 py-4 text-lg font-semibold w-full"
              >
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-72 h-16">
                    <img
                      src="/images/india-marketing-logo-new.jpeg"
                      alt="India Marketing - Grow With Us"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading exporter of  agricultural products, connecting Indian farms to global markets with
                quality assurance.
              </p>
              <div className="flex space-x-3 flex-wrap">
                <div className="flex space-x-3 flex-wrap gap-y-3">
                  <Badge className="bg-green-600">APEDA Certified</Badge>
                  <Badge className="bg-blue-600">FSSAI Approved</Badge>
                  <Badge className="bg-purple-600 flex items-center gap-2">
                    <img src="/images/spices-board-logo.jpeg" alt="Spices Board" className="w-4 h-4" />
                    Spices Board
                  </Badge>
                  <Badge className="bg-orange-600">GST Registered</Badge>
                  <Badge className="bg-red-600">IEC Certified</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/markets" className="hover:text-white transition-colors">
                    Export Markets
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Products</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Fresh Vegetables</li>
                <li> Spices</li>
                <li>Quality Pulses</li>
                <li>Dry Fruits</li>
                <li>Grains & Cereals</li>
                <li>Animal Feeds</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="tel:+917803030603" className="hover:text-white transition-colors">
                    📞 +91 78030 30603
                  </a>
                </li>
                <li>
                  <a href="mailto:INDIAMARKETING000@GMAIL.COM" className="hover:text-white transition-colors">
                    ✉️ INDIAMARKETING000@GMAIL.COM
                  </a>
                </li>
                <li>📍 Airport Road, Nagchoon Main Road</li>
                <li>📍 Khandwa, Madhya Pradesh 450001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 India Marketing. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
