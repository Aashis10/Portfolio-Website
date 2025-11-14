"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase } from 'lucide-react'

export default function EducationExperience() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Education & Experience</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">{"Bachelor's in Management & Information Technology (Hybrid)"}</h4>
              <p className="text-sm text-muted-foreground">Oxford College, Butwal, Nepal</p>
              <p className="text-sm text-muted-foreground">2021 - Present</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Freelance Web Developer</h4>
              <p className="text-sm text-muted-foreground">Nepal</p>
              <p className="text-sm text-muted-foreground">2021 - Present</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mt-2">
                <li>Built multiple responsive websites for clients</li>
                <li>Delivered projects from concept to deployment</li>
                <li>Used modern web technologies</li>
                <li>Achieved high client satisfaction</li>
              </ul>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-8 max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2">
          <h3 className="text-xl font-semibold mb-4">Achievements & Certifications</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
              <span>GitHub Education verified</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
              <span>Contributed to open-source projects on GitHub</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
              <span>Consistently building personal projects and improving full-stack skills</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
