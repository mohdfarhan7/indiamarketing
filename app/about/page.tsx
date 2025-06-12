"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Users, Globe, TrendingUp, Shield, Clock, Heart, Target, Download, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">About Us</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">India Marketing</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leading the way in agricultural exports from India to the world. With over 15 years of experience, we
                have built a reputation for quality, reliability, and excellence in international trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 text-white font-semibold w-full"
                  >
                    Get In Touch
                  </Button>
                </Link>
                <a href="tel:+917803030603" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 px-8 py-4 font-semibold w-full"
                  >
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Agricultural fields"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: "17+", label: "Export Countries", color: "text-green-600" },
              { icon: Users, number: "500+", label: "Happy Clients", color: "text-blue-600" },
              { icon: TrendingUp, number: "10,000+", label: "Tons Exported", color: "text-purple-600" },
              { icon: Award, number: "100%", label: "Quality Assured", color: "text-orange-600" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white"
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

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Our Story</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Journey of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">From Humble Beginnings to Global Success</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                India Marketing was founded with a simple vision: to connect the rich agricultural heritage of India
                with global markets. What started as a small trading company has grown into a leading exporter of
                premium agricultural products.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began in 2009 when our founder recognized the immense potential of Indian agricultural
                products in international markets. Through dedication, quality focus, and building strong relationships,
                we have established ourselves as a trusted partner for buyers worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we export to over 17 countries and continue to expand our reach while maintaining our commitment
                to quality and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Agricultural products"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality First",
                description: "We never compromise on quality and ensure every product meets international standards",
                color: "text-green-600",
              },
              {
                icon: Heart,
                title: "Customer Focus",
                description: "Our customers' success is our success. We build lasting partnerships based on trust",
                color: "text-red-600",
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "Timely delivery and consistent quality have made us a trusted partner worldwide",
                color: "text-blue-600",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We continuously innovate our processes to serve our customers better",
                color: "text-purple-600",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <value.icon className={`w-16 h-16 mx-auto mb-6 ${value.color}`} />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">Certifications</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Quality Assurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certifications reflect our commitment to maintaining the highest standards in agricultural exports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "APEDA Certified",
                description: "Agricultural and Processed Food Products Export Development Authority certification",
                icon: "🏆",
                pdfLink: "/certificates/apeda-registration.pdf",
                regNumber: "217850",
              },
              {
                name: "FSSAI Approved",
                description: "Food Safety and Standards Authority of India approval for food safety",
                icon: "✅",
                pdfLink: "/certificates/fssai-license.pdf",
                regNumber: "11425995000239",
              },
              {
                name: "Spices Board Registered",
                description: "Spices Board of India registration for spice exports",
                icon: "/images/spices-board-logo.jpeg",
                isImage: true,
                regNumber: "Registered Member",
              },
              {
                name: "GST Certificate",
                description: "Goods and Services Tax registration for legal business operations",
                icon: "📋",
                regNumber: "GST Registered",
              },
              {
                name: "Import/Export Code",
                description: "IEC registration for authorized international trade operations",
                icon: "🌍",
                regNumber: "DAGPP0812J",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white group"
              >
                <CardContent className="p-0">
                  {cert.isImage ? (
                    <img
                      src={cert.icon || "/placeholder.svg"}
                      alt={cert.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain"
                    />
                  ) : (
                    <div className="text-4xl mb-4">{cert.icon}</div>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{cert.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{cert.description}</p>
                  {cert.regNumber && <p className="text-sm font-medium text-green-600 mb-4">{cert.regNumber}</p>}
                  {cert.pdfLink && (
                    <a
                      href={cert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      View Certificate
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Join hundreds of satisfied clients worldwide. Experience the India Marketing difference in agricultural
            exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917803030603" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 px-8 py-4 text-lg font-semibold w-full"
              >
                Call +91 78030 30603
              </Button>
            </a>
            <a href="mailto:info@indiamarketing.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold w-full"
              >
                INDIAMARKETING000@GMAIL.COM
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">India Marketing</h3>
            <p className="text-gray-300 mb-6">Excellence in Agricultural Exports Since 2009</p>
            <div className="flex justify-center space-x-6 flex-wrap gap-y-3">
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 India Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
