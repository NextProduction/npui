"use client"

import { GSAPAnimationWrapper } from "./gsap-animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LayersIcon, CodeIcon } from "lucide-react"

export function CategoryUtilsSection() {
  return (
    <section className="py-16 md:py-24 bg-npui-background">
      <div className="container px-4 md:px-6 space-y-12">
        <GSAPAnimationWrapper
          selector=".category-utils-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="category-utils-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 opacity-0 translate-y-10">
            Organized for Scalability: Categories & Utilities
          </h2>
        </GSAPAnimationWrapper>

        <div className="grid gap-8 md:grid-cols-2">
          <GSAPAnimationWrapper
            selector=".categories-card"
            animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }}
          >
            <Card className="categories-card h-full border-npui-border bg-npui-card opacity-0 translate-y-10">
              <CardHeader>
                <LayersIcon className="h-8 w-8 text-npui-primary mb-4" />
                <CardTitle className="text-npui-foreground">Component Categories</CardTitle>
              </CardHeader>
              <CardContent className="text-npui-muted-foreground">
                <p className="mb-4">
                  To keep our growing library organized, components are now grouped into logical categories like
                  "General Purpose," "Form Elements," and "Feedback & Status." This makes it easier to browse and find
                  the exact component you need.
                </p>
                <p>
                  Each component's data (props, variants) is co-located with its component file, ensuring that all
                  relevant information is together, simplifying maintenance and expansion.
                </p>
              </CardContent>
            </Card>
          </GSAPAnimationWrapper>

          <GSAPAnimationWrapper
            selector=".utilities-card"
            animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }}
          >
            <Card className="utilities-card h-full border-npui-border bg-npui-card opacity-0 translate-y-10">
              <CardHeader>
                <CodeIcon className="h-8 w-8 text-npui-primary mb-4" />
                <CardTitle className="text-npui-foreground">Essential Utilities</CardTitle>
              </CardHeader>
              <CardContent className="text-npui-muted-foreground">
                <p className="mb-4">
                  Our library leverages small, focused utility functions to keep the codebase clean and efficient. For
                  instance, the `cn` helper from `lib/utils.ts` is used for conditionally joining Tailwind CSS classes,
                  enhancing readability and maintainability.
                </p>
                <p>
                  These utilities are designed to be lightweight and reusable, supporting a consistent and scalable
                  development experience across all `npui` components.
                </p>
              </CardContent>
            </Card>
          </GSAPAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
