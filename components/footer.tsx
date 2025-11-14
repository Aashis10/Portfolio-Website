"use client"

import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Aashis10", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aashish-bhusal", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/aashishbhusal7", label: "Instagram" },
    { icon: Mail, href: "mailto:aashishbhusal50@gmail.com", label: "Email" },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by Aashish Bhusal © {currentYear}
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:scale-110 transition-transform"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
