"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GSAPAnimationWrapper } from "./gsap-animations"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-npui-card text-center">
      <div className="container px-4 md:px-6">
        <GSAPAnimationWrapper
          selector=".cta-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="cta-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 opacity-0 translate-y-10">
            Ready to Build Something Amazing?
          </h2>
        </GSAPAnimationWrapper>
        <GSAPAnimationWrapper
          selector=".cta-description"
          animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }}
        >
          <p className="cta-description mx-auto max-w-[700px] text-npui-muted-foreground md:text-xl mb-8 opacity-0 translate-y-10">
            Start integrating npui components into your projects today and streamline your development workflow.
          </p>
        </GSAPAnimationWrapper>
        <GSAPAnimationWrapper
          selector=".cta-button"
          animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }}
        >
          <Button
            asChild
            size="lg"
            className="cta-button bg-npui-primary text-npui-primary-foreground hover:bg-npui-primary/90 opacity-0 translate-y-10"
          >
            <Link href="/docs">Get Started with npui</Link>
          </Button>
        </GSAPAnimationWrapper>
      </div>
    </section>
  )
}
