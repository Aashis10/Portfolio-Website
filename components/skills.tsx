"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5/CSS3", level: 95, badge: "Advanced" },
        { name: "JavaScript/JSX", level: 90, badge: "Advanced" },
        { name: "React", level: 90, badge: "Advanced" },
        { name: "Next.js", level: 88, badge: "Advanced" },
        { name: "Tailwind CSS", level: 92, badge: "Advanced" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85, badge: "Advanced" },
        { name: "PHP", level: 82, badge: "Advanced" },
        { name: "MySQL", level: 85, badge: "Advanced" },
        { name: "Firebase", level: 80, badge: "Advanced" },
        { name: "SpringBoot", level: 75, badge: "Intermediate" },
        { name: "Django", level: 75, badge: "Intermediate" },
      ],
    },
    {
      category: "Tools & Languages",
      skills: [
        { name: "Git/GitHub", level: 90, badge: "Advanced" },
        { name: "Vercel", level: 90, badge: "Advanced" },
        { name: "VS Code", level: 95, badge: "Expert" },
        { name: "Postman", level: 85, badge: "Advanced" },
        { name: "Python", level: 80, badge: "Advanced" },
        { name: "Java", level: 78, badge: "Intermediate" },
      ],
    },
  ]

  const learning = ["GraphQL", "Docker", "AWS", "TypeScript", "PostgreSQL", "Microservices"]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-6">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.badge}
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2">
          <h3 className="text-xl font-semibold mb-4">🚀 Currently Exploring</h3>
          <p className="text-muted-foreground mb-4 text-pretty">
            Always learning and expanding my skill set. Here's what I'm currently diving into:
          </p>
          <div className="flex flex-wrap gap-2">
            {learning.map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
