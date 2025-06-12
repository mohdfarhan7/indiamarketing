"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Globe, MapPin, TrendingUp, Users, Package, ArrowRight } from "lucide-react"

// Export countries with detailed information
const exportMarkets = [
  {
    region: "Middle East",
    countries: [
      {
        name: "UAE",
        flag: "https://flagcdn.com/w80/ae.png",
        capital: "Abu Dhabi",
        mainProducts: ["Onions", "Potatoes", "Spices", "Dates"],
        marketSize: "Large",
        growth: "15%",
        description: "Major hub for re-exports to other Middle Eastern countries",
      },
      {
        name: "Qatar",
        flag: "https://flagcdn.com/w80/qa.png",
        capital: "Doha",
        mainProducts: ["Vegetables", "Fruits", "Pulses"],
        marketSize: "Medium",
        growth: "12%",
        description: "Growing demand for premium agricultural products",
      },
      {
        name: "Saudi Arabia",
        flag: "https://flagcdn.com/w80/sa.png",
        capital: "Riyadh",
        mainProducts: ["Spices", "Grains", "Animal Feeds"],
        marketSize: "Large",
        growth: "18%",
        description: "Largest market in the Middle East region",
      },
      {
        name: "Iraq",
        flag: "https://flagcdn.com/w80/iq.png",
        capital: "Baghdad",
        mainProducts: ["Onions", "Potatoes", "Chickpeas"],
        marketSize: "Medium",
        growth: "10%",
        description: "Emerging market with increasing demand",
      },
      {
        name: "Iran",
        flag: "https://flagcdn.com/w80/ir.png",
        capital: "Tehran",
        mainProducts: ["Dates", "Spices", "Grains"],
        marketSize: "Large",
        growth: "8%",
        description: "Traditional trading partner with strong ties",
      },
    ],
  },
  {
    region: "Southeast Asia",
    countries: [
      {
        name: "Malaysia",
        flag: "https://flagcdn.com/w80/my.png",
        capital: "Kuala Lumpur",
        mainProducts: ["Spices", "Pulses", "Animal Feeds"],
        marketSize: "Large",
        growth: "14%",
        description: "Strategic location for Southeast Asian distribution",
      },
      {
        name: "Indonesia",
        flag: "https://flagcdn.com/w80/id.png",
        capital: "Jakarta",
        mainProducts: ["Onions", "Garlic", "Spices"],
        marketSize: "Very Large",
        growth: "16%",
        description: "Largest market in Southeast Asia",
      },
      {
        name: "Thailand",
        flag: "https://flagcdn.com/w80/th.png",
        capital: "Bangkok",
        mainProducts: ["Vegetables", "Fruits", "Spices"],
        marketSize: "Large",
        growth: "11%",
        description: "Growing demand for Indian agricultural products",
      },
      {
        name: "Vietnam",
        flag: "https://flagcdn.com/w80/vn.png",
        capital: "Hanoi",
        mainProducts: ["Spices", "Pulses", "Grains"],
        marketSize: "Medium",
        growth: "13%",
        description: "Rapidly growing economy with increasing imports",
      },
      {
        name: "Philippines",
        flag: "https://flagcdn.com/w80/ph.png",
        capital: "Manila",
        mainProducts: ["Onions", "Garlic", "Spices"],
        marketSize: "Medium",
        growth: "9%",
        description: "Island nation with consistent demand",
      },
    ],
  },
  {
    region: "South Asia & Others",
    countries: [
      {
        name: "Sri Lanka",
        flag: "https://flagcdn.com/w80/lk.png",
        capital: "Colombo",
        mainProducts: ["Vegetables", "Pulses", "Spices"],
        marketSize: "Medium",
        growth: "7%",
        description: "Close neighbor with strong trade relations",
      },
      {
        name: "Maldives",
        flag: "https://flagcdn.com/w80/mv.png",
        capital: "Malé",
        mainProducts: ["Vegetables", "Fruits", "Pulses"],
        marketSize: "Small",
        growth: "5%",
        description: "Tourism-driven economy with premium demand",
      },
      {
        name: "Taiwan",
        flag: "https://flagcdn.com/w80/tw.png",
        capital: "Taipei",
        mainProducts: ["Spices", "Grains", "Animal Feeds"],
        marketSize: "Medium",
        growth: "6%",
        description: "High-value market for premium products",
      },
    ],
  },
  {
    region: "Western Markets",
    countries: [
      {
        name: "USA",
        flag: "https://flagcdn.com/w80/us.png",
        capital: "Washington D.C.",
        mainProducts: ["Spices", "Organic Products", "Specialty Items"],
        marketSize: "Very Large",
        growth: "8%",
        description: "Premium market for organic and specialty products",
      },
      {
        name: "France",
        flag: "https://flagcdn.com/w80/fr.png",
        capital: "Paris",
        mainProducts: ["Spices", "Organic Vegetables", "Specialty Grains"],
        marketSize: "Large",
        growth: "5%",
        description: "European gateway for premium agricultural products",
      },
    ],
  },
  {
    region: "Africa",
    countries: [
      {
        name: "Egypt",
        flag: "https://flagcdn.com/w80/eg.png",
        capital: "Cairo",
        mainProducts: ["Onions", "Potatoes", "Pulses"],
        marketSize: "Large",
        growth: "12%",
        description: "Gateway to African markets",
      },
      {
        name: "Tanzania",
        flag: "https://flagcdn.com/w80/tz.png",
        capital: "Dodoma",
        mainProducts: ["Pulses", "Spices", "Grains"],
        marketSize: "Medium",
        growth: "10%",
        description: "Emerging market with growing demand for pulses and spices",
      },
      {
        name: "Ghana",
        flag: "https://flagcdn.com/w80/gh.png",
        capital: "Accra",
        mainProducts: ["Grains", "Pulses", "Fruits"],
        marketSize: "Medium",
        growth: "9%",
        description: "West African hub for grains and pulses imports",
      },
      {
        name: "Benin",
        flag: "https://flagcdn.com/w80/bj.png",
        capital: "Porto-Novo",
        mainProducts: ["Pulses", "Spices", "Vegetables"],
        marketSize: "Small",
        growth: "7%",
        description: "Expanding market for pulses and vegetables in West Africa",
      },
      {
        name: "Morocco",
        flag: "https://flagcdn.com/w80/ma.png",
        capital: "Rabat",
        mainProducts: ["Pulses", "Spices", "Fruits"],
        marketSize: "Medium",
        growth: "8%",
        description: "North African market with growing demand for pulses and spices",
      },
    ],
  },
]

// Market statistics
const marketStats = [
  { label: "Total Export Countries", value: "17+", icon: Globe },
  { label: "Annual Export Volume", value: "10,000+ Tons", icon: Package },
  { label: "Market Growth Rate", value: "12% YoY", icon: TrendingUp },
  { label: "Active Clients", value: "500+", icon: Users },
]

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-6 py-2 text-lg">Global Reach</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Export Markets</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We serve premium agricultural products to 17+ countries across 5 continents, building strong partnerships
              and delivering quality that meets international standards.
            </p>
          </div>

          {/* Market Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {marketStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Markets by Region */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {exportMarkets.map((region, regionIndex) => (
            <div key={regionIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{region.region}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {region.countries.map((country, countryIndex) => (
                  <Card
                    key={countryIndex}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={country.flag || "/placeholder.svg"}
                          alt={`${country.name} flag`}
                          className="w-12 h-8 rounded shadow-sm group-hover:scale-110 transition-transform duration-300"
                        />
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {country.name}
                          </CardTitle>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {country.capital}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Market Size and Growth */}
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-gray-600">Market Size</div>
                          <Badge
                            className={`${
                              country.marketSize === "Very Large"
                                ? "bg-green-600"
                                : country.marketSize === "Large"
                                  ? "bg-blue-600"
                                  : country.marketSize === "Medium"
                                    ? "bg-yellow-600"
                                    : "bg-gray-600"
                            } text-white`}
                          >
                            {country.marketSize}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Growth Rate</div>
                          <div className="text-lg font-bold text-green-600">{country.growth}</div>
                        </div>
                      </div>

                      {/* Main Products */}
                      <div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">Main Products:</div>
                        <div className="flex flex-wrap gap-2">
                          {country.mainProducts.map((product, productIndex) => (
                            <Badge key={productIndex} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">{country.description}</p>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Link href="/contact">
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                            Explore Market
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Expansion Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">Market Expansion</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Growing Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are continuously expanding our reach to new markets while strengthening relationships in existing ones.
              Our commitment to quality and reliability has made us a trusted partner worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Research",
                description: "Continuous analysis of global market trends and opportunities",
                icon: "🔍",
              },
              {
                title: "Quality Compliance",
                description: "Meeting international standards and certifications for each market",
                icon: "✅",
              },
              {
                title: "Logistics Network",
                description: "Efficient supply chain management for timely global deliveries",
                icon: "🚢",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Enter New Markets?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Partner with us to expand your reach in global agricultural markets. Our expertise and network can help you
            succeed internationally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917803030603">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              >
                Call Export Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              >
                Get Market Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">India Marketing</h3>
            <p className="text-gray-300 mb-6">Connecting Indian Agriculture to Global Markets</p>
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
