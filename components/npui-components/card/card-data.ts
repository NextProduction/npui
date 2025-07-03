import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" // Corrected import
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const cardProps: PropDetail[] = [
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for styling.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the card.",
  },
]

export const cardVariants: ComponentVariant[] = [
  {
    title: "Basic Card",
    description: "A simple card with a title, description, and content area.",
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MyCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card. You can put any information here.</p>
      </CardContent>
    </Card>
  )
}`,
    preview: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the card. You can put any information here.</p>
        </CardContent>
      </Card>
    ),
  },
]
