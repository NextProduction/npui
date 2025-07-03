"use client"

import { npuiComponents } from "@/lib/components-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GSAPAnimationWrapper } from "./gsap-animations"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LatestComponentsCarousel() {
  // Get the latest 5 components, or fewer if not enough exist
  const latestComponents = npuiComponents.slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-npui-card">
      <div className="container px-4 md:px-6">
        <GSAPAnimationWrapper
          selector=".latest-carousel-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="latest-carousel-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 opacity-0 translate-y-10">
            Discover Our Latest Components
          </h2>
        </GSAPAnimationWrapper>

        <GSAPAnimationWrapper
          selector=".latest-carousel"
          animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto latest-carousel opacity-0 translate-y-10"
          >
            <CarouselContent className="-ml-4">
              {latestComponents.map((component, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col border-npui-border bg-npui-background transition-all hover:shadow-lg">
                      <CardHeader className="pb-0">
                        <CardTitle className="text-npui-foreground">{component.name}</CardTitle>
                        <CardDescription className="text-npui-muted-foreground line-clamp-2">
                          {component.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between p-4">
                        <div className="relative flex h-32 items-center justify-center rounded-md border border-dashed border-npui-border bg-npui-card p-2 mb-4">
                          {component.variants[0]?.preview || (
                            <span className="text-npui-muted-foreground text-sm">No preview available</span>
                          )}
                        </div>
                        <Button
                          asChild
                          variant="secondary"
                          className="w-full bg-npui-secondary text-npui-secondary-foreground hover:bg-npui-secondary/80"
                        >
                          <Link href={`/docs/${component.slug}`}>View Docs</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </GSAPAnimationWrapper>
      </div>
    </section>
  )
}
