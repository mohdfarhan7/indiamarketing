"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Search, Filter, Star, Award, Truck, Shield } from "lucide-react"
import Link from "next/link"

// Comprehensive product data with actual images
const allProducts = [
  // Vegetables
  {image.png
    id: 1,
    name: " Red Onions",
    category: "Vegetables",
    image: "/images/fresh-red-onions.jpeg",
    description:
      "Fresh, high-quality red onions with extended shelf life and superior taste. Sourced directly from certified farms.",
    features: ["Extended shelf life", "Rich in antioxidants", " grade", "Export quality"],
    specifications: {
      Size: "50-80mm diameter",
      Category:"Nasik Based",
      packing:"Jute Bag, Mesh Bag",
      Moisture: "86-88%",
      "Shelf Life": "6-8 months",
      Packaging: "10kg, 25kg, 50kg mesh bags",
    },
    certifications: ["APEDA", "FSSAI", "Organic"],
    exportCountries: ["UAE", "Qatar", "Saudi Arabia", "Malaysia"],
    price: "Competitive pricing available",
    featured: true,
  },
  {
    id: 2,
    name: "Fresh Potatoes",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1508313880080-c4bef0730395?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-quality potatoes perfect for various culinary applications. Grown in optimal soil conditions.",
    features: ["High starch content", "Uniform size", "Disease-free", "Long storage life"],
    specifications: {
      Size: "40-80mm",
      Category:"Jyoti 37,97, Pukhraj",
      "Dry Matter": "18-22%",
      "Shelf Life": "4-6 months",
      Packaging:"Jute Bag, Mesh Bag",
    },
    certifications: ["APEDA", "FSSAI"],
    exportCountries: ["Sri Lanka", "Maldives", "Bangladesh"],
    price: "Contact for pricing",
  },
  {
    id: 3,
    name: " Garlic",
    category: "Vegetables",
    image: "/images/garlic.jpg",
    description:
      "Fresh garlic bulbs with strong aroma and flavor. Carefully selected and processed for export quality.",
    features: ["Strong aroma", "High allicin content", "Uniform bulbs", "Export grade"],
    specifications: {
      Size: "4.5-6.5cm diameter",
      Moisture: "65-70%",
      "Shelf Life": "8-10 months",
      Packaging: "10kg, 20kg mesh bags",
    },
    certifications: ["APEDA", "FSSAI", "Global GAP"],
    exportCountries: ["USA", "Europe", "Middle East"],
    price: " pricing",
  },

  // Spices
  {
    id: 4,
    name: "Teja Red Chilli",
    category: "Spices",
    image: "/images/teja-red-chili-bowl.jpg",
    description:
      " Teja variety red chilli known for its intense heat and vibrant color. Perfect for spice blends.",
    features: ["High capsaicin content", "Vibrant red color", "Intense heat", " grade"],
    specifications: {
      Packaging: "Jute Bag, PP Bag 10kg, 25kg",
      Category: "S17",
      "Color Value": "180-220 ASTA",
    
    },
    certifications: ["Spice Board", "FSSAI", "ISO 22000"],
    exportCountries: ["USA", "UK", "Germany", "Australia"],
    price: " export pricing",
    featured: true,
    subCategory: "Teja S17",
  },
  {
    id: 5,
    name: "Mahi Red Chilli",
    category: "Spices",
    image: "/images/mahi-red-chilli.png",
    description: "High-quality Mahi variety red chilli with excellent color and moderate heat level.",
    features: ["Excellent color retention", "Moderate heat", " quality", "Export grade"],
    specifications: {
      Packaging: "Jute Bag, PP Bag 10kg, 25kg",
      Moisture: "8-10%",
      "Color Value": "160-200 ASTA",
      
    },
    certifications: ["Spice Board", "FSSAI"],
    exportCountries: ["Middle East", "Southeast Asia"],
    price: "Competitive pricing",
  },
  {
    id: 6,
    name: "Byadgi Red Chilli",
    category: "Spices",
    image: "/images/byadgi-red-chilli.jpg",
    description: "Famous Byadgi variety known for its deep red color and mild heat. Ideal for color extraction.",
    features: ["Deep red color", "Mild heat", "High color value", " quality"],
    specifications: {
      Packaging: "Jute Bag, PP Bag 10kg, 25kg",
      Moisture: "8-10%",
      "Color Value": "220-280 ASTA",
      
    },
    certifications: ["Spice Board", "FSSAI", "Organic"],
    exportCountries: ["USA", "Europe", "Japan"],
    price: " pricing",
  },
  {
    id: 7,
    name: "Black Pepper",
    category: "Spices",
    image: "/images/black-pepper.jpeg",
    description: " quality black pepper with strong aroma and pungent taste. The king of spices.",
    features: ["Strong aroma", "High piperine content", "Uniform size", " grade"],
    specifications: {
      Piperine: "5-9%",
      Moisture: "10-12%",
      "Volatile Oil": "2-4%",
      Packaging: "25kg PP bags",
    },
    certifications: ["Spice Board", "FSSAI", "Fair Trade"],
    exportCountries: ["USA", "Europe", "Middle East"],
    price: "Market competitive",
  },
  {
    id: 8,
    name: "Cinnamon",
    category: "Spices",
    image: "/images/cinnamon.jpeg",
    description: "Cinnamon with sweet aroma and delicate flavor. True cinnamon variety.",
    features: ["Sweet aroma", "Delicate flavor", " quality", "True cinnamon"],
    specifications: {
      "Volatile Oil": "1-2%",
      Moisture: "10-12%",
      Grade: "Alba, C5, C4",
      Packaging: "25kg cartons",
    },
    certifications: ["Spice Board", "FSSAI", "Organic"],
    exportCountries: ["USA", "Europe", "Japan"],
    price: " pricing",
  },
  {
    id: 9,
    name: "Star Anise",
    category: "Spices",
    image: "/images/star-anise.jpeg",
    description: " star anise with distinctive star shape and sweet licorice flavor.",
    features: ["Star-shaped pods", "Sweet licorice flavor", "High essential oil", " grade"],
    specifications: {
      "Essential Oil": "8-10%",
      Moisture: "10-12%",
      Size: "2-4cm",
      Packaging: "25kg cartons",
    },
    certifications: ["Spice Board", "FSSAI"],
    exportCountries: ["Europe", "USA", "Middle East"],
    price: " pricing",
  },
  {
    id: 18,
    name: " Turmeric",
    category: "Spices",
    image: "/images/fresh-turmeric-roots.jpg",
    description:
      "High-quality turmeric with excellent curcumin content and Turmeric powder and fingers are also available. And its Known for its medicinal properties.",
    features: ["High curcumin content", "Vibrant golden color", "Medicinal properties", " grade"],
    specifications: {
      "Curcumin Content": "3-5%",
      Moisture: "8-10%",
      "Color Value": "200-250 ASTA",
      Packaging: "25kg PP bags",
    },
    certifications: ["Spice Board", "FSSAI", "Organic"],
    exportCountries: ["USA", "Europe", "Middle East", "Southeast Asia"],
    price: " export pricing",
    featured: true,
  },

  // Pulses
  {
    id: 10,
    name: " Chickpeas",
    category: "Pulses",
    image: "/images/chickpeas.jpg",
    description:
      "High-quality chickpeas with excellent protein content and uniform size. Perfect for various culinary uses.",
    features: ["High protein content", "Uniform size", "Quick cooking", " grade"],
    specifications: {
      Protein: "18-22%",
      Size:"7MM - 12MM+",
      Moisture: "10-12%",
      Packaging: "25kg, 50kg PP bags",
    },
    certifications: ["APEDA", "FSSAI", "Organic"],
    exportCountries: ["Middle East", "Europe", "USA"],
    price: "Competitive pricing",
    featured: true,
    counts: [
      "40/42 COUNT (12+ MM)",
      "42/44 COUNT (12 MM)",
      "43/45 COUNT (11-12 MM)",
      "44/46 COUNT (11 MM)",
      "46/48 COUNT (10 MM)",
      "58/60 COUNT (9 MM)",
      "60/62 COUNT (8-9 MM)",
      "62/64 COUNT (7-8 MM)"
    ],
  },

  // Dry Fruits
  {
    id: 11,
    name: "Zahedi Dates",
    category: "Dry Fruits",
    image: "/images/zahedi-dates.jpeg",
    description: " Zahedi dates with golden color and firm texture. Excellent for export markets.",
    features: ["Golden color", "Firm texture", "Long shelf life", " quality"],
    specifications: {
      Moisture: "18-20%",
      Size: "2-4cm",
      "Sugar Content": "65-75%",
      Packaging: "5kg, 10kg cartons",
    },
    certifications: ["FSSAI", "Organic", "HACCP"],
    exportCountries: ["Europe", "USA", "Canada"],
    price: " pricing",
  },
  {
    id: 12,
    name: "Mazafati Dates",
    category: "Dry Fruits",
    image: "/images/mazafati-dates.jpg",
    description: "Soft and sweet Mazafati dates with dark color and rich flavor.  quality for export.",
    features: ["Soft texture", "Sweet taste", "Dark color", "Rich flavor"],
    specifications: {
      Moisture: "15-25%",
      Size: "2.5-4.5cm",
      "Sugar Content": "70-80%",
      Packaging: "5kg, 10kg cartons",
    },
    certifications: ["FSSAI", "Organic"],
    exportCountries: ["Europe", "USA", "Australia"],
    price: " pricing",
    featured: true,
  },
  {
    id: 13,
    name: "Dry Dates",
    category: "Dry Fruits",
    image: "/images/dry-dates.jpeg",
    description: " dry dates with extended shelf life and concentrated sweetness.",
    features: ["Extended shelf life", "Concentrated sweetness", "Firm texture", " grade"],
    specifications: {
      Moisture: "8-12%",
      Size: "2-3.5cm",
      "Sugar Content": "75-85%",
      Packaging: "10kg, 25kg cartons",
    },
    certifications: ["FSSAI", "HACCP"],
    exportCountries: ["Middle East", "Africa", "Europe"],
    price: "Competitive pricing",
  },

  // Grains
  {
    id: 14,
    name: " Corn Seeds",
    category: "Grains",
    image: "/images/corn-seeds.jpeg",
    description: "High-quality corn seeds suitable for various industrial and food applications. Also available for animal feed.",
    features: ["High starch content", "Uniform kernels", "Low moisture", " grade"],
    specifications: {
      Moisture: "12-14%",
      Protein: "8-10%",
      Starch: "70-75%",
      Packaging: "25kg, 50kg PP bags",
    },
    certifications: ["APEDA", "FSSAI"],
    exportCountries: ["Southeast Asia", "Middle East"],
    price: "Market competitive",
  },

  // Fruits
  {
    id: 15,
    name: " Bananas",
    category: "Fruits",
    image: "/images/green-banana.jpg",
    description: "Fresh,  quality bananas, 13.5 kg box available.",
    features: ["Sweet taste", "Extended shelf life", "Uniform size", "Export quality"],
    specifications: {
      Size: "15-25cm length",
      Category:"G9",
      "Sugar Content": "12-15%",
      "Shelf Life": "7-14 days",
      Packaging: "13.5kg cartons",
    },
    certifications: ["APEDA", "FSSAI", "Global GAP"],
    exportCountries: ["Middle East", "Europe"],
    price: "Seasonal pricing",
  },
  {
    id: 16,
    name: "Seasonal Fruits",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Fresh seasonal fruits including mangoes, pomegranates, and citrus fruits.",
    features: ["Seasonal availability", "Fresh quality", "Export grade", "Variety selection"],
    specifications: {
      Variety: "Mango, Pomegranate, Orange",
      Quality: "Export grade",
      Packaging: "Various sizes",
      Availability: "Seasonal",
    },
    certifications: ["APEDA", "FSSAI"],
    exportCountries: ["Global markets"],
    price: "Seasonal pricing",
  },

  // Animal Feeds
  {
    id: 17,
    name: " Animal Feeds",
    category: "Animal Feeds",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Nutritious animal feeds formulated for optimal livestock health and productivity. Millets, Sorghum are also available.",
    features: ["Balanced nutrition", "High protein", "Quality ingredients", "Veterinary approved"],
    specifications: {
      Protein: "16-24%",
      Moisture: "10-12%",
      Fiber: "8-12%",
      Packaging: "25kg, 50kg bags",
    },
    certifications: ["FSSAI", "ISO 9001"],
    exportCountries: ["Middle East", "Africa"],
    price: "Bulk pricing available",
  },
]

const categories = ["All", "Vegetables", "Spices", "Pulses", "Dry Fruits", "Grains", "Fruits", "Animal Feeds"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesFeatured = !showFeaturedOnly || product.featured

    return matchesSearch && matchesCategory && matchesFeatured
  })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 px-6 py-2 text-lg">Our Products</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"> Agricultural Products</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-quality agricultural products, carefully sourced from certified
              farms and processed to meet international standards
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant={showFeaturedOnly ? "default" : "outline"}
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className="h-12 px-6"
              >
                <Star className="w-4 h-4 mr-2" />
                Featured Only
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-green-600 text-white">{product.category}</Badge>
                    {product.featured && (
                      <Badge className="bg-yellow-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specifications Preview */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Specifications:</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      {Object.entries(product.specifications)
                        .slice(0, 2)
                        .map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="font-medium">{key}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <div className="flex gap-1">
                      {product.certifications.slice(0, 2).map((cert, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800 text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Export Countries */}
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">
                      Exports to: {product.exportCountries.slice(0, 2).join(", ")}
                      {product.exportCountries.length > 2 && ` +${product.exportCountries.length - 2} more`}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Quality Assured</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{product.price}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                        Get Quote
                      </Button>
                    </Link>
                    <a href={`tel:+917803030603`} className="flex-1">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                        Call Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Custom Requirements?</h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            We can customize our products according to your specific requirements. Contact our export team for
            personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917803030603" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full"
              >
                Call Export Team
              </Button>
            </a>
            <a href="https://wa.me/917803030603" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold w-full"
              >
                WhatsApp Us
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
            <p className="text-gray-300 mb-6"> Agricultural Products Worldwide</p>
            <div className="flex justify-center space-x-6">
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
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 India Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
