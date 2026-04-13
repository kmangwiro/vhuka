"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Megaphone, Palette, Globe, Camera } from "lucide-react"

export function Hero() {
  const whatsappLink =
      "https://wa.me/263789734222?text=Hi%20Vuka%20Digital,%20I%20would%20like%20to%20book%20a%20consultation."

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
              src="/images/hero-bg.jpg"
              alt="Digital Marketing Background"
              fill
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                Your Digital Growth Partner
              </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                We Build Brands &{" "}
                <span className="text-primary">Drive Digital Growth</span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                Vuka Digital Group is a full-service digital marketing agency specializing in{" "}
                <strong className="text-white">brand strategy</strong>,{" "}
                <strong className="text-white">social media marketing</strong>,{" "}
                <strong className="text-white">web development</strong>,{" "}
                <strong className="text-white">content creation</strong>, and{" "}
                <strong className="text-white">professional photography</strong>.
              </p>

              {/* Service Pills */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
                  <Megaphone className="w-4 h-4 text-primary" />
                  Digital Marketing
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
                  <Palette className="w-4 h-4 text-primary" />
                  Branding
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
                  <Globe className="w-4 h-4 text-primary" />
                  Web Development
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
                  <Camera className="w-4 h-4 text-primary" />
                  Photography
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  >
                    Get a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>

              </div>

              {/* Stats */}
              <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
                <div>
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-sm text-white/60">Brands Supported</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/60">Campaigns Executed</div>
                </div>
                <div className="w-px h-12 bg-white/20 hidden sm:block" />
                <div className="hidden sm:block">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-white/60">Industries Served</div>
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:block">

              {/* Logo */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(128,0,32,0.15),transparent_60%)]" />
                <Image
                    src="/images/vuka-logo.png"
                    alt="Vuka Digital Group"
                    fill
                    className="object-contain p-16"
                    priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">+</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Growth Rate</div>
                    <div className="text-xs text-muted-foreground">+340% Average</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">★</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Client Rating</div>
                    <div className="text-xs text-muted-foreground">4.9/5 Stars</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-primary rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">50M+</div>
                    <div className="text-xs text-white/80">Reach Generated</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
  )
}