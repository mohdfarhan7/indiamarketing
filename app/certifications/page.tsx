"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import {
  Award,
  Download,
  Eye,
  Shield,
  CheckCircle,
  FileText,
  Globe,
  Building,
  Calendar,
  ExternalLink,
} from "lucide-react"

// Certification data with actual certificate images
const certifications = [
  {
    id: "apeda",
    name: "APEDA Registration",
    fullName: "Agricultural and Processed Food Products Export Development Authority",
    authority: "Ministry of Commerce and Industry, Govt. of India",
    certificateNumber: "217850",
    validUpto: "30/05/2027",
    issuedDate: "31/05/2022",
    description:
      "Authorized to export all APEDA scheduled products including fruits, vegetables, processed foods, and agricultural products",
    image: "/images/certifications/apeda-certificate.jpeg",
    benefits: [
      "Export authorization for agricultural products",
      "Access to international markets",
      "Government backing for exports",
      "Quality assurance certification",
    ],
    category: "Export Authorization",
    color: "bg-green-600",
    icon: Globe,
  },
  {
    id: "fssai",
    name: "FSSAI License",
    fullName: "Food Safety and Standards Authority of India",
    authority: "Government of India",
    certificateNumber: "11425995000239",
    validUpto: "06/05/2026",
    issuedDate: "07/05/2025",
    description:
      "Central license for food safety compliance, enabling trade/retail operations as trader/merchant/exporter",
    image: "/images/certifications/fssai-certificate.jpeg",
    benefits: [
      "Food safety compliance",
      "Legal authorization for food trade",
      "Consumer trust and confidence",
      "International market acceptance",
    ],
    category: "Food Safety",
    color: "bg-blue-600",
    icon: Shield,
  },
  {
    id: "gst",
    name: "GST Registration",
    fullName: "Goods and Services Tax Registration",
    authority: "Government of India",
    certificateNumber: "DAGPP0812J",
    validUpto: "Ongoing",
    issuedDate: "Active",
    description: "Valid GST registration enabling legal business operations and tax compliance across India",
    image: "/images/certifications/gst-certificate.png",
    benefits: [
      "Legal business operations",
      "Tax compliance certification",
      "Interstate trade authorization",
      "Government recognition",
    ],
    category: "Tax Compliance",
    color: "bg-purple-600",
    icon: Building,
  },
  {
    id: "iec",
    name: "IEC Certificate",
    fullName: "Import Export Code",
    authority: "Ministry of Commerce and Industry",
    certificateNumber: "DAGPP0812J",
    validUpto: "Lifetime Validity",
    issuedDate: "Active",
    description: "Import Export Code enabling authorized international trade operations and customs clearance",
    image: "/images/certifications/iec-certificate.png",
    benefits: [
      "International trade authorization",
      "Customs clearance facility",
      "Export-import operations",
      "Global market access",
    ],
    category: "Trade Authorization",
    color: "bg-orange-600",
    icon: FileText,
  },
]

export default function CertificationsPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const handleDownload = (certName: string, imageUrl: string) => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `${certName}-certificate.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-6 py-2 text-lg">
              <Award className="w-5 h-5 mr-2" />
              Official Certifications
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Quality Certifications</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive certifications demonstrate our commitment to quality, safety, and legal compliance.
              These official documents validate our authorization to export premium agricultural products worldwide.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Award, number: "4+", label: "Official Certifications", color: "text-green-600" },
              { icon: CheckCircle, number: "100%", label: "Compliance Rate", color: "text-blue-600" },
              { icon: Globe, number: "17+", label: "Export Countries", color: "text-purple-600" },
              { icon: Shield, number: "15+", label: "Years Certified", color: "text-orange-600" },
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

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Official Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each certification represents our dedication to maintaining the highest standards in agricultural exports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${cert.color} rounded-lg flex items-center justify-center`}>
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {cert.name}
                        </CardTitle>
                        <Badge className="mt-2" variant="outline">
                          {cert.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{cert.fullName}</h3>
                  <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Certificate Details */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-gray-600">Certificate Number</div>
                      <div className="text-lg font-bold text-gray-800">{cert.certificateNumber}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">Valid Until</div>
                      <div className="text-lg font-bold text-green-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.validUpto}
                      </div>
                    </div>
                  </div>

                  {/* Authority */}
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">Issued by: {cert.authority}</span>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {cert.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                          onClick={() => setSelectedCertificate(cert.id)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">
                            {cert.name} - {cert.fullName}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <img
                            src={cert.image || "/placeholder.svg"}
                            alt={`${cert.name} Certificate`}
                            className="w-full h-auto rounded-lg shadow-lg"
                          />
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Certificate Number:</span> {cert.certificateNumber}
                              </div>
                              <div>
                                <span className="font-medium">Valid Until:</span> {cert.validUpto}
                              </div>
                              <div>
                                <span className="font-medium">Issued Date:</span> {cert.issuedDate}
                              </div>
                              <div>
                                <span className="font-medium">Authority:</span> {cert.authority}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => handleDownload(cert.name, cert.image)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">Trust & Compliance</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Our Certifications Matter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Our certifications guarantee that all products meet international quality and safety standards",
                color: "text-green-600",
              },
              {
                icon: Globe,
                title: "Global Acceptance",
                description:
                  "Recognized certifications ensure smooth customs clearance and market acceptance worldwide",
                color: "text-blue-600",
              },
              {
                icon: CheckCircle,
                title: "Legal Compliance",
                description: "Full compliance with Indian and international regulations for agricultural exports",
                color: "text-purple-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <item.icon className={`w-16 h-16 mx-auto mb-6 ${item.color}`} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Verified Quality, Trusted Worldwide</h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Our comprehensive certifications ensure that every product meets the highest standards. Partner with us for
            certified quality and reliable exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full"
              >
                Get Certified Quote
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+917803030603" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold w-full"
              >
                Verify Certificates
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
            <p className="text-gray-300 mb-6">Certified Excellence in Agricultural Exports</p>
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
