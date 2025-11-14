"use client"

import { Card } from "@/components/ui/card"
import { Lightbulb, Palette, Code2, Rocket, CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and target audience to create a strategic roadmap.",
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      description: "Creating wireframes and mockups that align with your brand and user expectations.",
    },
    {
      icon: Code2,
      title: "Development",
      description: "Building clean, efficient code with best practices and modern technologies.",
    },
    {
      icon: CheckCircle,
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers to ensure flawless performance.",
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      description: "Launching your project and providing ongoing maintenance and support.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">How I Work</h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty">
            A proven process from idea to deployment, ensuring quality at every step.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex flex-col items-center text-center space-y-3 pt-2">
                  <div className="p-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg">
                    <step.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
