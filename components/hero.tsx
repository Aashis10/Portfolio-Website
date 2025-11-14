"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Mail, Download, ArrowRight } from 'lucide-react'

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Aashis10", label: "GitHub", external: true },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aashish-bhusal", label: "LinkedIn", external: true },
    { icon: Instagram, href: "https://www.instagram.com/aashishbhusal7", label: "Instagram", external: true },
    { icon: Mail, href: "#contact", label: "Email", external: false },
  ]

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean) => {
    if (!external && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aashish Bhusal
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                Full-Stack Web Developer
              </p>
              <p className="text-base md:text-lg text-muted-foreground text-pretty">
                Passionate about building solutions that enhance user engagement and business outcomes with modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="group">
                <a href="#contact">
                  {"Let's Build Together"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/api/download-resume" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:scale-110 transition-transform"
                >
                  <a 
                    href={social.href} 
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    onClick={(e) => handleSocialClick(e, social.href, social.external)}
                  >
                    {React.createElement(social.icon, { className: "h-5 w-5" })}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2015.58.35_9c7c7ddd-XNN2zKn692Iw3fgInQoJTEw9sbnzfV.jpg"
                alt="Aashish Bhusal"
                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
