"use client"

import { Code, Database, Layers } from 'lucide-react'
import { Card } from "@/components/ui/card"

export default function About() {
  const specialties = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, PHP, and database management systems.",
    },
    {
      icon: Layers,
      title: "Full Stack Solutions",
      description: "Delivering end-to-end web solutions from concept to deployment, ensuring seamless integration.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-pretty">
            <p>
              My journey into web development started with a simple curiosity: how do websites work? That curiosity quickly evolved into a passion for creating digital experiences that solve real problems and delight users.
            </p>
            <p>
              I specialize in building modern web applications with a focus on performance, accessibility, and user experience. Every project I take on is an opportunity to learn something new and push the boundaries of what's possible on the web.
            </p>
            <p>
              What sets me apart is my commitment to writing clean, maintainable code and my ability to bridge the gap between technical requirements and business goals. I believe in building solutions that not only work today but are sustainable for the future.
            </p>
            <p className="font-semibold text-foreground">
              My vision: To create impactful digital solutions that empower businesses and enhance user experiences across the globe.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {specialties.map((specialty) => (
            <Card key={specialty.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <specialty.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{specialty.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{specialty.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
