"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GSAPAnimationWrapper } from "./gsap-animations"

gsap.registerPlugin(ScrollTrigger)

export function HowItWorks() {
  const puzzleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: puzzleRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(
      gsap.utils.selector(puzzleRef.current)(".puzzle-piece"),
      { opacity: 0, scale: 0.5, y: 50, rotation: -45 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
      },
    ).fromTo(
      gsap.utils.selector(puzzleRef.current)(".puzzle-text"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.5", // Start text animation slightly before puzzle pieces finish
    )
  }, [])

  return (
    <section className="py-16 md:py-24 bg-npui-background">
      <div className="container px-4 md:px-6 text-center">
        <GSAPAnimationWrapper
          selector=".how-it-works-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="how-it-works-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 opacity-0 translate-y-10">
            How it Works: The <span className="text-npui-primary">npui</span> Puzzle
          </h2>
        </GSAPAnimationWrapper>

        <div ref={puzzleRef} className="relative flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="grid grid-cols-2 gap-4 max-w-md w-full">
            <div className="puzzle-piece relative h-32 w-full rounded-lg bg-npui-primary/20 border border-npui-primary flex items-center justify-center text-npui-primary-foreground text-lg font-semibold shadow-lg opacity-0">
              <span className="puzzle-text">Component A</span>
            </div>
            <div className="puzzle-piece relative h-32 w-full rounded-lg bg-npui-accent/20 border border-npui-accent flex items-center justify-center text-npui-accent-foreground text-lg font-semibold shadow-lg opacity-0">
              <span className="puzzle-text">Component B</span>
            </div>
            <div className="puzzle-piece relative h-32 w-full rounded-lg bg-npui-secondary/20 border border-npui-secondary flex items-center justify-center text-npui-secondary-foreground text-lg font-semibold shadow-lg opacity-0">
              <span className="puzzle-text">Component C</span>
            </div>
            <div className="puzzle-piece relative h-32 w-full rounded-lg bg-npui-muted/20 border border-npui-muted flex items-center justify-center text-npui-muted-foreground text-lg font-semibold shadow-lg opacity-0">
              <span className="puzzle-text">Component D</span>
            </div>
          </div>
          <div className="text-npui-muted-foreground max-w-md text-lg md:text-left space-y-4">
            <p className="puzzle-text opacity-0">
              npui components are like individual puzzle pieces, each designed to be self-contained and highly
              functional.
            </p>
            <p className="puzzle-text opacity-0">
              You pick the pieces you need, and they seamlessly snap together to form a complete, beautiful UI.
            </p>
            <p className="puzzle-text opacity-0">
              This modular approach gives you ultimate flexibility and control over your project's design and
              functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
