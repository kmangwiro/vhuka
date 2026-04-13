import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

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
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Free Consultation", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
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
              Vuka Digital Group is a strategic growth partner helping businesses succeed in the digital economy through powerful brands and digital systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
              className="font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              AstroCode
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
