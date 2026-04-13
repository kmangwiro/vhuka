"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-2xl bg-[#2a2a2a] p-3 mx-auto flex items-center justify-center shadow-lg">
              <Image
                src="/images/vuka-logo.png"
                alt="Vuka Digital Group"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            {"Let's discuss how Vuka Digital Group can help you achieve your digital marketing goals and drive real business growth."}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-primary-foreground/80">
            <div>
              <div className="text-sm font-medium mb-1">Email Us</div>
              <a href="mailto:hello@vukadigital.co.za" className="text-primary-foreground hover:underline">
                hello@vukadigital.co.za
              </a>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Call Us</div>
              <a href="tel:+27123456789" className="text-primary-foreground hover:underline">
                +27 12 345 6789
              </a>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Visit Us</div>
              <span className="text-primary-foreground">Johannesburg, South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
