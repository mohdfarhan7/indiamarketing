"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    productInterest: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      productInterest: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-6 py-2 text-lg">Contact Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to explore premium agricultural exports? Contact us for quotes, partnerships, or any inquiries.
              We're here to help you succeed in global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                <a
                  href="tel:+917803030603"
                  className="text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  +91 78030 30603
                </a>
                <p className="text-gray-600 text-sm mt-1">24/7 Support Available</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <a
                  href="mailto:INDIAMARKETING000@GMAIL.COM"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  INDIAMARKETING000@GMAIL.COM
                </a>
                <p className="text-gray-600 text-sm mt-1">Quick Response</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                   Airport Road, Nagchoon Main Road
                  Khandwa, Madhya Pradesh 450001
                  <br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/917803030603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Chat with Us
                </a>
                <p className="text-gray-600 text-sm mt-1">Instant Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Send us a Message</CardTitle>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="uae">UAE</SelectItem>
                          <SelectItem value="qatar">Qatar</SelectItem>
                          <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                          <SelectItem value="malaysia">Malaysia</SelectItem>
                          <SelectItem value="indonesia">Indonesia</SelectItem>
                          <SelectItem value="usa">USA</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                      <Select
                        value={formData.productInterest}
                        onValueChange={(value) => handleSelectChange("productInterest", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="spices">Spices</SelectItem>
                          <SelectItem value="pulses">Pulses</SelectItem>
                          <SelectItem value="dry-fruits">Dry Fruits</SelectItem>
                          <SelectItem value="grains">Grains</SelectItem>
                          <SelectItem value="fruits">Fruits</SelectItem>
                          <SelectItem value="animal-feeds">Animal Feeds</SelectItem>
                          <SelectItem value="all">All Products</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements, quantity needed, destination country, etc."
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 h-12 text-lg"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">We're here when you need us</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-700 text-sm font-medium">
                        📞 Emergency support available 24/7 for existing clients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Export Services */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Globe className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Export Services</h3>
                      <p className="text-gray-600">Comprehensive export solutions</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Custom packaging and labeling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Documentation and certification
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Logistics and shipping coordination
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Quality inspection and testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Market research and analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-600 to-green-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6 opacity-90">
                    For urgent inquiries or immediate support, reach out to us directly through phone or WhatsApp.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+917803030603" className="flex-1">
                      <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                    <a href="https://wa.me/917803030603" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">India Marketing</h3>
            <p className="text-gray-300 mb-6">Your Trusted Partner in Agricultural Exports</p>
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
