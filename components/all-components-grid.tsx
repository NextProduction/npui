"use client"

import { npuiComponents } from "@/lib/components-data"
import { ComponentCard } from "./component-card"
import { GSAPAnimationWrapper } from "./gsap-animations"

export function AllComponentsGrid() {
  return (
    <section className="py-16 md:py-24 bg-npui-background">
      <div className="container px-4 md:px-6">
        <GSAPAnimationWrapper
          selector=".all-components-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="all-components-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 opacity-0 translate-y-10">
            Explore All Components
          </h2>
        </GSAPAnimationWrapper>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {npuiComponents.map((component, index) => (
            <GSAPAnimationWrapper
              key={component.slug}
              selector={`.all-component-card-${index}`}
              animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.05 * index, ease: "power3.out" }}
              scrollTriggerProps={{
                trigger: `.all-component-card-${index}`,
                start: "top 90%",
                toggleActions: "play none none none",
              }}
            >
              <div className={`all-component-card-${index} opacity-0 translate-y-10`}>
                <ComponentCard component={component} />
              </div>
            </GSAPAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
