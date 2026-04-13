"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X, ArrowLeft, Camera, Video, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Events", "Behind the Scenes", "Productions", "Team"]

const galleryItems = [
  {
    id: 1,
    type: "image",
    category: "Events",
    title: "Digital Marketing Workshop 2024",
    description: "Annual workshop helping businesses master digital marketing strategies",
    image: "/images/gallery/event-workshop.jpg",
    date: "March 2024",
    location: "Harare",
  },
  {
    id: 2,
    type: "image",
    category: "Team",
    title: "Creative Brainstorming Session",
    description: "Our team developing innovative campaign concepts for clients",
    image: "/images/gallery/team-brainstorm.jpg",
    date: "February 2024",
    location: "Vuka HQ",
  },
  {
    id: 3,
    type: "video",
    category: "Behind the Scenes",
    title: "Product Photography Session",
    description: "Behind the scenes of our professional product shoot",
    image: "/images/gallery/photoshoot-bts.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "January 2024",
    location: "Studio",
  },
  {
    id: 4,
    type: "image",
    category: "Events",
    title: "Client Partnership Signing",
    description: "Celebrating new partnerships with leading brands",
    image: "/images/gallery/client-meeting.jpg",
    date: "December 2023",
    location: "Harare",
  },
  {
    id: 5,
    type: "video",
    category: "Productions",
    title: "Commercial Video Production",
    description: "Creating high-impact video content for our clients",
    image: "/images/gallery/video-production.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "November 2023",
    location: "On Location",
  },
  {
    id: 6,
    type: "image",
    category: "Events",
    title: "Brand Launch Event",
    description: "Successful launch event for a major client rebrand",
    image: "/images/gallery/brand-launch.jpg",
    date: "October 2023",
    location: "Harare",
  },
  {
    id: 7,
    type: "image",
    category: "Behind the Scenes",
    title: "Social Media Content Creation",
    description: "Crafting engaging content for social platforms",
    image: "/images/gallery/social-content.jpg",
    date: "September 2023",
    location: "Studio",
  },
  {
    id: 8,
    type: "image",
    category: "Events",
    title: "Industry Networking Event",
    description: "Connecting with industry leaders and potential partners",
    image: "/images/gallery/networking-event.jpg",
    date: "August 2023",
    location: "Harare",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2a2a2a] p-1.5 flex items-center justify-center">
                <Image
                  src="/images/vuka-logo.png"
                  alt="Vuka Digital Group"
                  width={32}
                  height={32}
                  className="h-7 w-auto"
                />
              </div>
              <span className="text-xl font-bold text-foreground">Vuka Digital</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Moments That <span className="text-primary">Define Us</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our journey through events, productions, and behind-the-scenes moments that showcase our passion for creative excellence.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                      item.type === "video" 
                        ? "bg-red-500/90 text-white" 
                        : "bg-white/90 text-foreground"
                    }`}>
                      {item.type === "video" ? <Video className="w-3 h-3" /> : <Camera className="w-3 h-3" />}
                      {item.type === "video" ? "Video" : "Photo"}
                    </span>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-primary/90 text-primary-foreground rounded">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div 
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={selectedItem.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
              <p className="text-white/70 mb-4">{selectedItem.description}</p>
              <div className="flex items-center justify-center gap-6 text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {selectedItem.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {selectedItem.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden bg-[#1a1a1a] p-8 md:p-12 text-center">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want to Be Part of Our Story?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Let us help you create memorable moments and impactful campaigns for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" className="bg-[#3a3a3a] text-white hover:bg-[#4a4a4a]">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2a2a2a] p-1 flex items-center justify-center">
              <Image
                src="/images/vuka-logo.png"
                alt="Vuka Digital Group"
                width={24}
                height={24}
                className="h-5 w-auto"
              />
            </div>
            <span className="font-semibold text-foreground">Vuka Digital Group</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vuka Digital Group. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
