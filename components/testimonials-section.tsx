"use client"

import { GSAPAnimationWrapper } from "./gsap-animations"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alice Johnson",
      title: "Lead Developer at TechCorp",
      quote:
        "npui has revolutionized our development workflow. The components are incredibly flexible and easy to integrate. A true game-changer!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Bob Williams",
      title: "UI/UX Designer",
      quote:
        "As a designer, I love the full customization npui offers. It allows me to bring my visions to life without fighting the framework.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Charlie Brown",
      title: "Startup Founder",
      quote: "Getting our MVP out quickly was crucial, and npui made it possible. The speed and quality are unmatched.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-npui-background">
      <div className="container px-4 md:px-6">
        <GSAPAnimationWrapper
          selector=".testimonials-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="testimonials-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 opacity-0 translate-y-10">
            What Our Users Say
          </h2>
        </GSAPAnimationWrapper>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <GSAPAnimationWrapper
              key={testimonial.name}
              selector={`.testimonial-card-${index}`}
              animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.1 * index, ease: "power3.out" }}
              scrollTriggerProps={{
                trigger: `.testimonial-card-${index}`,
                start: "top 90%",
                toggleActions: "play none none none",
              }}
            >
              <Card
                className={`testimonial-card-${index} h-full border-npui-border bg-npui-card opacity-0 translate-y-10`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage alt={`@${testimonial.name}`} src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-lg font-semibold text-npui-foreground mb-2">"{testimonial.quote}"</p>
                  <p className="text-sm text-npui-muted-foreground">
                    - {testimonial.name}, {testimonial.title}
                  </p>
                </CardContent>
              </Card>
            </GSAPAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
