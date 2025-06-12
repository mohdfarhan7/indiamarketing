"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import {
  Camera,
  Video,
  Play,
  Volume2,
  VolumeX,
  Download,
  Eye,
  Package,
  Truck,
  Globe,
  Shield,
  Filter,
  Grid3X3,
  List,
} from "lucide-react"

// Gallery data with categories
const galleryItems = [
  {
    id: 1,
    type: "image",
    category: "Container Loading",
    title: "Premium Onion Export Loading",
    description:
      "Systematic loading of premium quality onions in mesh bags, properly stacked on wooden pallets for international shipping",
    image: "/images/gallery/container-loading-1.jpeg",
    tags: ["Export", "Onions", "Container", "Packaging"],
  },
  {
    id: 2,
    type: "image",
    category: "Logistics",
    title: "Container Exterior View",
    description:
      "Professional shipping container setup with proper securing framework for safe international transport",
    image: "/images/gallery/container-exterior.jpeg",
    tags: ["Logistics", "Container", "Shipping", "Export"],
  },
  {
    id: 4,
    type: "image",
    category: "Container Loading",
    title: "Organized Product Stacking",
    description:
      "Efficient utilization of container space with properly organized stacking of agricultural products in export-grade packaging",
    image: "/images/gallery/container-loading-2.jpeg",
    tags: ["Stacking", "Organization", "Export", "Efficiency"],
  },
  {
    id: 5,
    type: "image",
    category: "Packaging",
    title: "Wooden Framework System",
    description:
      "Professional wooden securing framework ensuring products remain stable during long-distance international shipping",
    image: "/images/gallery/container-framework.jpeg",
    tags: ["Framework", "Security", "Packaging", "Safety"],
  },
  {
    id: 6,
    type: "image",
    category: "Container Loading",
    title: "Maximum Space Utilization",
    description:
      "Expert container loading demonstrating maximum space utilization while maintaining product safety and quality",
    image: "/images/gallery/container-loading-3.jpeg",
    tags: ["Efficiency", "Space", "Loading", "Professional"],
  },
  {
    id: 7,
    type: "image",
    category: "Container Loading",
    title: "Premium Product Export",
    description: "High-quality agricultural products properly packaged and loaded for export to international markets",
    image: "/images/gallery/container-loading-4.jpeg",
    tags: ["Premium", "Quality", "Export", "International"],
  },
  {
    id: 10,
    type: "video",
    category: "Gallery",
    title: "Video 1",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/1.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 11,
    type: "video",
    category: "Gallery",
    title: "Video 2",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/2.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 12,
    type: "video",
    category: "Gallery",
    title: "Gallery Video 3",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/3.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 13,
    type: "video",
    category: "Gallery",
    title: "Video 4",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/4.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 14,
    type: "video",
    category: "Gallery",
    title: "Video 5",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/5.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 15,
    type: "video",
    category: "Gallery",
    title: "Video 6",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/6.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 16,
    type: "video",
    category: "Gallery",
    title: "Video 7",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/7.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 17,
    type: "video",
    category: "Gallery",
    title: "Video 8",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/8.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 18,
    type: "video",
    category: "Gallery",
    title: "Video 9",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/9.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 19,
    type: "video",
    category: "Gallery",
    title: "Video 10",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/10.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 20,
    type: "video",
    category: "Gallery",
    title: "Video 11",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/11.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 21,
    type: "video",
    category: "Gallery",
    title: "Video 12",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/12.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 22,
    type: "video",
    category: "Gallery",
    title: "Gallery Video 13",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/13.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 23,
    type: "video",
    category: "Gallery",
    title: "Video 14",
    description: "Showcase of export operations and product quality.",
    video: "/images/videos/14.mp4",
    thumbnail: "",
    tags: ["Gallery", "Video", "Export"],
  },
  {
    id: 24,
    type: "image",
    category: "Gallery",
    title: "Photo 1",
    description: "Showcase of export operations and product quality.",
    image: "/images/photos/WhatsApp Image 2025-06-07 at 18.41.54_bad6b1fb.jpg",
    tags: ["Gallery", "Photo", "Export"],
  },
  {
    id: 25,
    type: "image",
    category: "Gallery",
    title: "Photo 2",
    description: "Showcase of export operations and product quality.",
    image: "/images/photos/IMG-20250607-WA0049.jpg",
    tags: ["Gallery", "Photo", "Export"],
  },
  {
    id: 26,
    type: "image",
    category: "Gallery",
    title: "Photo 3",
    description: "Showcase of export operations and product quality.",
    image: "/images/photos/IMG-20250607-WA0048.jpg",
    tags: ["Gallery", "Photo", "Export"],
  },
  {
    id: 27,
    type: "image",
    category: "Gallery",
    title: "Photo 4",
    description: "Showcase of export operations and product quality.",
    image: "/images/photos/IMG-20250607-WA0047.jpg",
    tags: ["Gallery", "Photo", "Export"],
  },
  {
    id: 28,
    type: "image",
    category: "Gallery",
    title: "Gallery Photo 5",
    description: "Showcase of export operations and product quality.",
    image: "/images/photos/IMG-20250607-WA0046.jpg",
    tags: ["Gallery", "Photo", "Export"],
  },
  {
    id: 29,
    type: "image",
    category: "Gallery",
    title: "Gallery Photo 6",
    description: "Showcase of export operations and product quality.",
    image: "/images/photos/IMG-20250607-WA0045.jpg",
    tags: ["Gallery", "Photo", "Export"],
  },
  {
    id: 30,
    type: "image",
    category: "Gallery",
    title: "Gallery Photo 7",
    description: "Showcase of export operations and product quality.",
    image: "/images/photos/IMG-20250607-WA0044.jpg",
    tags: ["Gallery", "Photo", "Export"],
  },
]

const categories = ["All", "Container Loading", "Logistics", "Operations", "Packaging"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const filteredItems = galleryItems.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  const VideoPlayer = ({ src, poster }: { src: string; poster?: string }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)

    return (
      <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
        <video
          className="w-full h-full object-cover"
          poster={poster}
          muted={isMuted}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-black/50 text-white hover:bg-black/70"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-6 py-2 text-lg">
              <Camera className="w-5 h-5 mr-2" />
              Our Gallery
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Export Operations Gallery</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our professional export operations, container loading processes, and quality packaging systems.
              See how we ensure premium agricultural products reach global markets safely and efficiently.
            </p>
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Camera, number: "50+", label: "Export Photos", color: "text-green-600" },
              { icon: Video, number: "15+", label: "Operation Videos", color: "text-blue-600" },
              { icon: Package, number: "1000+", label: "Containers Shipped", color: "text-purple-600" },
              { icon: Globe, number: "17+", label: "Countries Served", color: "text-orange-600" },
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

      {/* Filter and View Controls */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-green-600 hover:bg-green-700"
                      : "border-green-600 text-green-600 hover:bg-green-50"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">View:</span>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-green-600" : ""}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-green-600" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                <div className={`relative ${viewMode === "list" ? "w-1/3" : "h-64"} overflow-hidden`}>
                  {item.type === "image" ? (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-800 ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${item.type === "video" ? "bg-red-600" : "bg-green-600"} text-white`}>
                      {item.type === "video" ? <Video className="w-3 h-3 mr-1" /> : <Camera className="w-3 h-3 mr-1" />}
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                          onClick={() => setSelectedItem(item)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View {item.type === "video" ? "Video" : "Image"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{item.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          {item.type === "image" ? (
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-auto rounded-lg shadow-lg"
                            />
                          ) : (
                            <VideoPlayer src={item.video} poster={item.thumbnail} />
                          )}
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-700 mb-3">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = item.type === "image" ? item.image : item.video
                        link.download = `${item.title}.${item.type === "image" ? "jpg" : "mp4"}`
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Camera className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Professional Export Operations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Quality Packaging",
                description: "Premium mesh bags and wooden pallets ensure product safety during international shipping",
                color: "text-green-600",
              },
              {
                icon: Truck,
                title: "Systematic Loading",
                description: "Expert container loading maximizing space while maintaining product integrity",
                color: "text-blue-600",
              },
              {
                icon: Shield,
                title: "Safety Standards",
                description: "Wooden framework and securing systems ensure products arrive in perfect condition",
                color: "text-purple-600",
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <process.icon className={`w-16 h-16 mx-auto mb-6 ${process.color}`} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience Professional Export Operations</h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            See how our systematic approach and professional operations ensure your agricultural products reach global
            markets safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full"
              >
                Start Your Export Journey
              </Button>
            </Link>
            <a href="tel:+917803030603" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold w-full"
              >
                Discuss Your Requirements
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
            <p className="text-gray-300 mb-6">Professional Agricultural Export Operations</p>
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
