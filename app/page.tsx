"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Journey from "@/components/journey"
import Skills from "@/components/skills"
import Process from "@/components/process"
import Projects from "@/components/projects"
import EducationExperience from "@/components/education-experience"
import Blog from "@/components/blog"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Process />
      <Projects />
      <EducationExperience />
      <Blog />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
