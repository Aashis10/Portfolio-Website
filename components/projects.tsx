"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp, Users, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "StockPilot Web App",
      description: "A comprehensive stock monitoring application with real-time data visualization and portfolio tracking capabilities.",
      image: "/modern-stock-market-dashboard-with-real-time-chart.jpg",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "Recharts"],
      challenge: "Implementing real-time data updates with Firebase while maintaining optimal performance and handling concurrent users.",
      solution: "Used Firebase Realtime Database with optimized listeners, implemented efficient data caching strategies, and built dynamic charts for data visualization.",
      outcome: "Successfully built a stock monitoring web app with user authentication, portfolio tracking, and real-time updates.",
      metrics: [
        { icon: Users, label: "Features", value: "5+" },
        { icon: TrendingUp, label: "Real-time", value: "Yes" },
        { icon: Zap, label: "Auth", value: "Secure" },
      ],
      liveUrl: "#",
      codeUrl: "https://github.com/Aashis10",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills, projects, and achievements with modern design and optimal SEO.",
      image: "/modern-professional-portfolio-website-design.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      challenge: "Creating a unique, memorable design that stands out while maintaining professional appeal and excellent performance.",
      solution: "Implemented custom animations, dark mode support, and interactive elements with accessibility in mind. Optimized for SEO and performance.",
      outcome: "Achieved 95+ Lighthouse score, responsive design, and showcases all skills and projects effectively.",
      metrics: [
        { icon: TrendingUp, label: "Lighthouse", value: "95+" },
        { icon: Zap, label: "SEO", value: "Optimized" },
        { icon: Users, label: "Responsive", value: "Yes" },
      ],
      liveUrl: "https://aashishbhusal.tech",
      codeUrl: "https://github.com/Aashis10",
    },
    {
      title: "Social Feed App (Prototype)",
      description: "A social media feed interface with like, comment, and media upload features built with modern web technologies.",
      image: "/social-media-feed-interface-with-posts-and-interac.jpg",
      tech: ["React", "Node.js", "MySQL", "Express"],
      challenge: "Developing a social media interface with like, comment, and media upload features while ensuring smooth user interactions.",
      solution: "Built a prototype social feed with interactive features including likes, comments, and media upload functionality using React and backend APIs.",
      outcome: "Delivered a working prototype demonstrating core social media features with clean UI and user-friendly interactions.",
      metrics: [
        { icon: Zap, label: "Features", value: "3+" },
        { icon: Users, label: "Interactive", value: "Yes" },
        { icon: TrendingUp, label: "Status", value: "Prototype" },
      ],
      liveUrl: "#",
      codeUrl: "https://github.com/Aashis10",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 text-pretty">
          Detailed case studies showcasing challenges, solutions, and measurable outcomes.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-pretty">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Challenge:</span>
                      <p className="text-muted-foreground text-pretty">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Solution:</span>
                      <p className="text-muted-foreground text-pretty">{project.solution}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-600 dark:text-green-400">Outcome:</span>
                      <p className="text-muted-foreground text-pretty">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-3 bg-muted rounded-lg">
                        <metric.icon className="h-4 w-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                        <div className="text-lg font-bold">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
