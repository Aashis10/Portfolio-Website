"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 rounded-full shadow-lg z-40 hover:scale-110 transition-transform"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
