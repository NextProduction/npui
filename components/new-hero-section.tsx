"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function NewHeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%", // Start animation when top of hero is 80% in view
        toggleActions: "play none none none",
      },
    })

    // Animate background shapes/elements
    tl.fromTo(
      gsap.utils.selector(heroRef.current)(".hero-shape"),
      { opacity: 0, scale: 0.8, y: 50, rotation: -30 },
      {
        opacity: 0.1, // Keep them subtle
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      },
      0, // Start at the beginning of the timeline
    )

    // Animate title
    tl.fromTo(
      gsap.utils.selector(heroRef.current)(".hero-title"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      0.3, // Start slightly after shapes
    )

    // Animate description
    tl.fromTo(
      gsap.utils.selector(heroRef.current)(".hero-description"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      0.6, // Start after title
    )

    // Animate buttons
    tl.fromTo(
      gsap.utils.selector(heroRef.current)(".hero-buttons"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      0.9, // Start after description
    )
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden py-20 md:py-32 lg:py-48 text-center bg-npui-background">
      {/* Background shapes for visual interest */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hero-shape absolute w-48 h-48 bg-npui-primary/10 rounded-full -top-10 -left-10 blur-3xl opacity-0"></div>
        <div className="hero-shape absolute w-64 h-64 bg-npui-accent/10 rounded-full -bottom-20 -right-20 blur-3xl opacity-0"></div>
        <div className="hero-shape absolute w-32 h-32 bg-npui-secondary/10 rounded-lg top-1/4 left-1/4 rotate-45 blur-2xl opacity-0"></div>
        <div className="hero-shape absolute w-40 h-40 bg-npui-muted/10 rounded-xl bottom-1/3 right-1/4 -rotate-30 blur-2xl opacity-0"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <h1 className="hero-title text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6 opacity-0">
          Build Faster with <span className="text-npui-primary">npui</span>
        </h1>
        <p className="hero-description mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl mb-8 opacity-0">
          A modern, accessible, and highly customizable component library for React. Accelerate your development with
          beautiful, ready-to-use UI components.
        </p>
        <div className="hero-buttons flex flex-col gap-4 sm:flex-row justify-center opacity-0">
          <Button asChild size="lg" className="bg-npui-primary text-npui-primary-foreground hover:bg-npui-primary/90">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-npui-border text-npui-foreground hover:bg-npui-secondary hover:border-npui-secondary bg-transparent"
          >
            <Link href="/examples">View Examples</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
