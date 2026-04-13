"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react"

const contactInfo = [
  {
    icon: Building2,
    label: "Company",
    value: "Vuka Digital Group",
    href: null,
  },
  {
    icon: MapPin,
    label: "Physical Address",
    value: "4th Floor, Three Anchor House, Corner First and Jason Moyo, Harare",
    href: "https://maps.google.com/?q=Three+Anchor+House+Harare",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+263 789 734 222",
    href: "tel:+263789734222",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "vukadigitalzw@gmail.com",
    href: "mailto:vukadigitalzw@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "vukadigitalgroup.co.zw",
    href: "https://vukadigitalgroup.co.zw",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 8:00 AM - 5:00 PM",
    href: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  // ✅ UPDATED: Send form to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = `
Hello Vuka Digital Group 👋

My name is: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}
    `

    const encodedText = encodeURIComponent(text)

    window.open(
        `https://wa.me/263789734222?text=${encodedText}`,
        "_blank"
    )
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
        "Hello Vuka Digital Group! I'm interested in your marketing services."
    )
    window.open(`https://wa.me/263789734222?text=${message}`, "_blank")
  }

  return (
      <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
              src="/images/contact-bg.jpg"
              alt="Contact background"
              fill
              className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#1a1a1a]/90 to-primary/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let's Build Something <span className="text-primary">Amazing Together</span>
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Ready to transform your digital presence? Reach out to our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT SIDE (unchanged) */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#1a1a1a]/80 border border-white/10">
                <div className="w-16 h-16 rounded-xl bg-[#2a2a2a] p-2 flex items-center justify-center">
                  <Image src="/images/vuka-logo.png" alt="Vuka" width={48} height={48} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Vuka Digital Group</h3>
                  <p className="text-white/60">Full-Service Marketing Agency</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                    <div key={index} className="p-5 rounded-xl bg-[#1a1a1a]/60 border border-white/10">
                      <div className="flex items-start gap-4">
                        <item.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-white/50">{item.label}</p>
                          <p className="text-white text-sm">{item.value}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              {/* WhatsApp Quick CTA */}
              <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="p-8 rounded-3xl bg-[#1a1a1a]/80 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <Input
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />

                <Textarea
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <Button type="submit" className="w-full gap-2">
                  Send via WhatsApp
                  <Send className="w-4 h-4" />
                </Button>

              </form>
            </div>
          </div>
        </div>
      </section>
  )
}