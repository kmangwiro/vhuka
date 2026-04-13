"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" }, // ✅ added
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappLink =
      "https://wa.me/263789734222?text=Hi%20Vuka%20Digital,%20I%20would%20like%20to%20book%20a%20consultation."

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                  <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="#services">
                <Button variant="outline" size="sm">
                  View Our Work
                </Button>
              </Link>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Book a Consultation
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-border">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                      <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                  ))}

                  <div className="flex flex-col gap-2 pt-4">
                    <Link href="#services" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" size="sm">
                        ViewBB Our Work
                      </Button>
                    </Link>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      <Button
                          size="sm"
                          className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Book a Consultation
                      </Button>
                    </a>
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}