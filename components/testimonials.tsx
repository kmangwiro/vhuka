"use client"

import Image from "next/image"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Vuka Digital transformed our online presence completely. Our leads increased by 300% within three months of working with them. Their strategic approach and creative execution exceeded all our expectations.",
    author: "",
    role: "",
    company: "Education",
    image: "/images/testimonials/Brayde.jpg",
    rating: 5,
  },
  {
    quote: "The team's strategic approach to our marketing campaign exceeded all expectations. They truly understand digital growth and delivered results that directly impacted our bottom line.",
    author: "",
    role: "",
    company: "Cars",
    image: "/images/testimonials/Notre.jpg",
    rating: 5,
  },
  {
    quote: "Professional, creative, and results-driven. Vuka Digital is the best investment we made for our brand visibility. Our patient inquiries have doubled since partnering with them.",
    author: "Marvellous Ndlovu",
    role: "Founder, Marvel Industries",
    company: "Engineering",
    image: "/images/testimonials/Marvel.jpg",
    rating: 5,
  },
]

export function Testimonials() {
  return (
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Trusted by Growing Brands
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Don't just take our word for it. Hear from the businesses we've helped achieve digital success."}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                >

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                    {/* Stars */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Quote className="w-8 h-8 text-primary/30 mb-3" />
                    <p className="text-sm text-card-foreground mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative ring-2 ring-primary/20">
                        <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            sizes="48px"
                            className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">
                          {testimonial.author || "Anonymous"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-primary font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* 🔥 MODERN TRUST MARQUEE */}
          <div className="mt-20">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Trusted by leading brands across Africa
            </p>

            <div className="relative overflow-hidden">

              {/* Gradient edges */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />

              {/* Marquee */}
              <div className="flex gap-16 animate-marquee whitespace-nowrap">

                {/* Set 1 */}
                <div className="flex gap-16">
                  <span className="text-2xl font-bold text-foreground/60">TechStart</span>
                  <span className="text-2xl font-bold text-foreground/60">LuxeStyle</span>
                  <span className="text-2xl font-bold text-foreground/60">HealthPlus</span>
                  <span className="text-2xl font-bold text-foreground/60">FinServe</span>
                  <span className="text-2xl font-bold text-foreground/60">EduTech</span>
                </div>

                {/* Duplicate */}
                <div className="flex gap-16">
                  <span className="text-2xl font-bold text-foreground/60">TechStart</span>
                  <span className="text-2xl font-bold text-foreground/60">LuxeStyle</span>
                  <span className="text-2xl font-bold text-foreground/60">HealthPlus</span>
                  <span className="text-2xl font-bold text-foreground/60">FinServe</span>
                  <span className="text-2xl font-bold text-foreground/60">EduTech</span>
                  <span className="text-2xl font-bold text-foreground/60">Marvel Industries</span>
                  <span className="text-2xl font-bold text-foreground/60">AstroCode</span>
                  <span className="text-2xl font-bold text-foreground/60">Notre</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
  )
}