import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "npui - Modern Component Library for React",
  description:
    "npui is a modern, accessible, and highly customizable component library for React. Accelerate your development with beautiful, ready-to-use UI components built with Tailwind CSS.", // Enhanced description for SEO
  keywords: [
    "npui",
    "react components",
    "component library",
    "tailwind css",
    "ui kit",
    "frontend development",
    "next.js",
    "react hooks",
    "javascript utilities",
    "contribute",
    "open source",
    "avatar",
    "badge",
    "progress bar",
    "toast notifications",
    "calendar",
    "alert dialog",
    "hover card",
    "separator",
    "developer guide",
    "cli",
    "npm publish",
    "scalability",
    "performance",
    "production ready",
    "error handling",
    "security",
    "monitoring", 
    "playground", 
  ],
  openGraph: {
    title: "npui - Modern Component Library for React",
    description:
      "npui is a modern, accessible, and highly customizable component library for React. Accelerate your development with beautiful, ready-to-use UI components built with Tailwind CSS.",
    url: "https://nextproduction.dev/npui", // Placeholder URL
    siteName: "npui",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "npui Component Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "npui - Modern Component Library for React",
    description:
      "npui is a modern, accessible, and highly customizable component library for React. Accelerate your development with beautiful, ready-to-use UI components built with Tailwind CSS.",
    images: ["/placeholder.svg?height=675&width=1200"], // Placeholder image for Twitter
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-npui-background text-npui-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
