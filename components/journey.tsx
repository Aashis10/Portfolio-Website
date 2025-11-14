"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

export default function Journey() {
  const milestones = [
    {
      year: "2021",
      title: "Started Web Development Journey",
      description: "Began learning HTML, CSS, and JavaScript. Built first personal website.",
    },
    {
      year: "2022",
      title: "Mastered Frontend Frameworks",
      description: "Learned React and started building dynamic web applications. Contributed to open-source projects.",
    },
    {
      year: "2023",
      title: "Full-Stack Development",
      description: "Expanded skills to backend with Node.js, PHP, and databases. Launched first full-stack project.",
    },
    {
      year: "2024",
      title: "Advanced Technologies",
      description: "Mastered Next.js, TypeScript, and modern development practices. Working with multiple clients.",
    },
    {
      year: "2025",
      title: "Continuous Growth",
      description: "Currently building sophisticated web solutions and exploring cloud technologies and AI integration.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">My Journey</h2>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-pretty">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
