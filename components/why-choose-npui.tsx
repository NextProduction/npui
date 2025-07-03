"use client"

import { GSAPAnimationWrapper } from "./gsap-animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AccessibilityIcon, CodeIcon, LayoutGridIcon, RocketIcon } from "lucide-react"

export function WhyChooseNpui() {
  const features = [
    {
      icon: <RocketIcon className="h-8 w-8 text-npui-primary" />,
      title: "Accelerated Development",
      description: "Build UIs faster with ready-to-use, high-quality components.",
    },
    {
      icon: <CodeIcon className="h-8 w-8 text-npui-primary" />,
      title: "Full Customization",
      description: "Direct access to component files for complete control and tailoring.",
    },
    {
      icon: <AccessibilityIcon className="h-8 w-8 text-npui-primary" />,
      title: "Accessibility First",
      description: "Components are built with accessibility in mind, following best practices.",
    },
    {
      icon: <LayoutGridIcon className="h-8 w-8 text-npui-primary" />,
      title: "Modular & Composable",
      description: "Combine components like building blocks to create complex interfaces.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-npui-card">
      <div className="container px-4 md:px-6">
        <GSAPAnimationWrapper
          selector=".why-choose-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="why-choose-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 opacity-0 translate-y-10">
            Why Choose <span className="text-npui-primary">npui</span>?
          </h2>
        </GSAPAnimationWrapper>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <GSAPAnimationWrapper
              key={feature.title}
              selector={`.feature-card-${index}`}
              animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.1 * index, ease: "power3.out" }}
              scrollTriggerProps={{
                trigger: `.feature-card-${index}`,
                start: "top 90%",
                toggleActions: "play none none none",
              }}
            >
              <Card
                className={`feature-card-${index} h-full border-npui-border bg-npui-background opacity-0 translate-y-10`}
              >
                <CardHeader className="flex flex-col items-center text-center">
                  {feature.icon}
                  <CardTitle className="mt-4 text-npui-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-npui-muted-foreground text-center">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </GSAPAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
