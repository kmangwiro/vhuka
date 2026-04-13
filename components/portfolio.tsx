"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Branding", "Marketing", "Web Design", "Photography"]

const projects = [
  {
    title: "TechStart Rebrand",
    category: "Branding",
    industry: "Technology",
    description: "Complete brand identity overhaul for a tech startup",
    result: "200% increase in brand recognition",
    image: "/images/portfolio/techstart-rebrand.jpg",
  },
  {
    title: "LuxeStyle Campaign",
    category: "Marketing",
    industry: "Fashion",
    description: "Multi-channel marketing campaign for luxury fashion brand",
    result: "350% ROI on ad spend",
    image: "/images/portfolio/luxestyle-campaign.jpg",
  },
  {
    title: "FinServe Platform",
    category: "Web Design",
    industry: "Finance",
    description: "Modern web platform for financial services company",
    result: "150% increase in conversions",
    image: "/images/portfolio/finserve-platform.jpg",
  },
  {
    title: "Organic Foods Visual",
    category: "Photography",
    industry: "Food & Beverage",
    description: "Product photography for organic food company",
    result: "40% boost in engagement",
    image: "/images/portfolio/organic-foods.jpg",
  },
  {
    title: "HealthPlus Identity",
    category: "Branding",
    industry: "Healthcare",
    description: "Brand identity for healthcare startup",
    result: "Brand trust score increased by 85%",
    image: "/images/portfolio/healthplus-identity.jpg",
  },
  {
    title: "EduTech Launch",
    category: "Marketing",
    industry: "Education",
    description: "Launch campaign for educational technology platform",
    result: "10,000+ sign-ups in first month",
    image: "/images/portfolio/edutech-launch.jpg",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Work That Speaks for Itself
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs font-medium text-primary-foreground bg-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground">{project.industry}</span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{project.result}</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
