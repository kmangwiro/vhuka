"use client"

import Image from "next/image"
import {
  Megaphone,
  Share2,
  Globe,
  Palette,
  Camera,
  FileText,
  Target,
  Lightbulb,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into customers.",
    image: "/images/services/digital.jpg",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media campaigns that build community, boost engagement, and grow your audience.",
    image: "/images/services/social-media.jpg",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance websites designed to convert visitors into customers with stunning UX/UI.",
    image: "/images/services/web.jpg",
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Compelling visual identities that capture your brand essence and stand out in the market.",
    image: "/images/services/branding.jpg",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional visual content that tells your brand story and captivates your audience.",
    image: "/images/services/photography.jpg",
  },
  {
    icon: FileText,
    title: "Content Creation",
    description: "Engaging content that resonates with your audience and drives meaningful interactions.",
    image: "/images/services/andy.jpg",
  },
  {
    icon: Target,
    title: "Advertising Campaigns",
    description: "Targeted advertising campaigns that maximize ROI and reach your ideal customers.",
    image: "/images/services/top.JPG",
  },
  {
    icon: Lightbulb,
    title: "Digital Consulting",
    description: "Expert guidance to help you navigate the digital landscape and achieve your business goals.",
    image: "/images/services/andy2.jpg",
  },
]

export function Services() {
  return (
      <section id="services" className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Comprehensive Digital Solutions for Business Growth
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              We offer end-to-end digital services designed to help your business thrive in the digital economy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-5 bg-card">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}
