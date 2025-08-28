import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const carouselProps: PropDetail[] = [
  {
    name: "opts",
    type: "EmblaOptionsType",
    description: "Options for the Embla Carousel instance.",
    default: "{}",
  },
  {
    name: "plugins",
    type: "EmblaPluginType[]",
    description: "Plugins to extend carousel functionality.",
    default: "[]",
  },
  {
    name: "orientation",
    type: `"horizontal" | "vertical"`,
    description: "The orientation of the carousel.",
    default: `"horizontal"`,
  },
  {
    name: "setApi",
    type: "(api: CarouselApi) => void",
    description: "Callback to get the Embla Carousel API instance.",
    default: "undefined",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for styling the carousel container.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The carousel content (CarouselContent, CarouselItem, etc.).",
  },
]

export const carouselVariants: ComponentVariant[] = [
  {
    title: "Basic Image Carousel",
    description: "A simple carousel displaying a series of images.",
    code: `import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ImageCarousel() {
  const images = [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ]
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image || "/placeholder.svg"} alt={\`Image \${index + 1}\`} className="w-full h-full object-cover rounded-md" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
    preview: (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=Image%20${index + 1}`}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  },
  {
    title: "Content Carousel",
    description: "A carousel displaying various content cards.",
    code: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ContentCarousel() {
  const items = [
    { title: "Card 1", content: "This is the first card's content." },
    { title: "Card 2", content: "This is the second card's content." },
    { title: "Card 3", content: "This is the third card's content." },
    { title: "Card 4", content: "This is the fourth card's content." },
  ]
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-lg font-semibold">{item.content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
    preview: (
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{`Card ${index + 1}`}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-lg font-semibold">{`Content for Card ${index + 1}`}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  },
]
