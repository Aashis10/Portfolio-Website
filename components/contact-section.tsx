"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, to: "aashishbhusal50@gmail.com" }),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "aashishbhusal50@gmail.com", href: "mailto:aashishbhusal50@gmail.com" },
    { icon: MapPin, label: "Location", value: "Nepal", href: null },
    { icon: Phone, label: "GitHub", value: "Aashis10", href: "https://github.com/Aashis10" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{"Let's Work Together"}</h2>
            <p className="text-muted-foreground text-pretty">
              Have a project in mind? {"Let's"} discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      <info.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
