import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Youtube,
} from "lucide-react"

const footerLinks = {
  services: [
    { label: "Digital Marketing", href: "#" },
    { label: "Social Media Management", href: "#" },
    { label: "Website Development", href: "#" },
    { label: "Branding & Design", href: "#" },
    { label: "Photography", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/263789734222",
    label: "WhatsApp",
  },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
      <footer className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2a] p-1.5 flex items-center justify-center">
                  <Image
                      src="/images/vuka-logo.png"
                      alt="Vuka Digital Group"
                      width={32}
                      height={32}
                      className="h-7 w-auto"
                  />
                </div>
                <span className="text-xl font-bold">Vuka Digital</span>
              </Link>

              <p className="text-accent-foreground/70 max-w-sm mb-6 leading-relaxed">
                Vuka Digital Group is a strategic growth partner helping businesses
                succeed in the digital economy through powerful brands and digital systems.
              </p>

              {/* Socials */}
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                          href={link.href}
                          className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                          href={link.href}
                          className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-accent-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">

            <p className="text-sm text-accent-foreground/60">
              © {new Date().getFullYear()} Vuka Digital Group. All rights reserved.
            </p>

            <p className="text-sm text-accent-foreground/60 flex items-center gap-1.5">
              Built with passion by{" "}
              <a
                  href="https://www.astrocode.co.zw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                AstroCode
              </a>
            </p>
          </div>
        </div>
      </footer>
  )
}