"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface GSAPAnimationWrapperProps {
  children: React.ReactNode
  selector: string
  animationProps?: gsap.TweenVars
  scrollTriggerProps?: ScrollTrigger.Vars
}

export function GSAPAnimationWrapper({
  selector,
  animationProps = { opacity: 0, y: 50, duration: 1, ease: "power3.out" },
  scrollTriggerProps = { trigger: selector, start: "top 80%", toggleActions: "play none none none" },
  children,
}: GSAPAnimationWrapperProps) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        gsap.utils.selector(containerRef.current)(selector),
        { opacity: 0, y: 50 }, // Initial state
        {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            ...scrollTriggerProps,
          },
        },
      )
    }
  }, [selector, animationProps, scrollTriggerProps])

  return <div ref={containerRef}>{children}</div>
}
