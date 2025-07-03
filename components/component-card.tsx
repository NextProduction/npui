import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { NpuiComponent } from "@/lib/components-data"

interface ComponentCardProps {
  component: NpuiComponent
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-npui-border bg-npui-card transition-all hover:shadow-lg">
      <CardHeader className="pb-0">
        <CardTitle className="text-npui-foreground">{component.name}</CardTitle>
        <CardDescription className="text-npui-muted-foreground line-clamp-2">{component.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-4">
        <div className="relative flex h-32 items-center justify-center rounded-md border border-dashed border-npui-border bg-npui-background p-2 mb-4">
          {/* Render the first variant's preview for the card */}
          {component.variants[0]?.preview || <span className="text-npui-muted-foreground">No preview available</span>}
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
  )
}
