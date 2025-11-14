import type { Metadata } from "next"
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aashish Bhusal - Full-Stack Web Developer | Modern Web Solutions",
  description:
    "Full-Stack Web Developer specializing in Next.js, React, TypeScript, and modern web technologies. Building scalable, performant web applications that deliver exceptional user experiences. View my portfolio, projects, and get in touch.",
  keywords: [
    "Aashish Bhusal",
    "Full-Stack Developer",
    "Web Developer Nepal",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Aashish Bhusal" }],
  creator: "Aashish Bhusal",
  publisher: "Aashish Bhusal",
  metadataBase: new URL("https://aashishbhusal.tech"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aashishbhusal.tech",
    title: "Aashish Bhusal - Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in modern web technologies. View my portfolio and projects.",
    siteName: "Aashish Bhusal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashish Bhusal - Full-Stack Web Developer",
    description: "Full-Stack Web Developer specializing in modern web technologies.",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
