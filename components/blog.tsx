"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Explore best practices for creating performant and maintainable web applications using Next.js and React Server Components.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Performance"],
      image: "/nextjs-development.png",
    },
    {
      title: "The Power of TypeScript in Modern Web Development",
      excerpt: "Discover how TypeScript can improve code quality, developer experience, and help catch bugs before they reach production.",
      date: "Jan 8, 2025",
      readTime: "4 min read",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      image: "/typescript-code.png",
    },
    {
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Learn practical techniques to optimize your React applications for better performance and user experience.",
      date: "Dec 28, 2024",
      readTime: "6 min read",
      tags: ["React", "Performance", "Optimization"],
      image: "/react-performance.jpg",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Latest Blog Posts</h2>
          <p className="text-muted-foreground text-pretty">
            Sharing knowledge and insights about web development, best practices, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold line-clamp-2 text-balance">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 text-pretty">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="link" className="p-0 h-auto group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
