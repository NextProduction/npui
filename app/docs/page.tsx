import Link from "next/link"
import { npuiComponents, npuiCategories } from "@/lib/components-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DocsPage() {
  const groupedComponents = npuiCategories.map((category) => ({
    category,
    components: npuiComponents.filter((comp) => comp.category === category.id),
  }))

  return (
    <div className="space-y-12 p-8">
      {" "}
      {/* Added padding for consistency */}
      <div>
        <h1 className="text-4xl font-bold tracking-tighter text-npui-primary mb-4">Documentation</h1>
        <p className="text-lg text-npui-muted-foreground">
          Explore the npui component library documentation to learn how to use each component.
        </p>
      </div>
      {groupedComponents.map((group) => (
        <section key={group.category.id} className="space-y-6">
          <h2 className="text-3xl font-bold text-npui-foreground">{group.category.name}</h2>
          <p className="text-npui-muted-foreground">{group.category.description}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.components.map((component) => (
              <Link key={component.slug} href={`/docs/${component.slug}`}>
                <Card className="h-full border-npui-border bg-npui-card transition-all hover:shadow-md hover:border-npui-primary/50">
                  <CardHeader>
                    <CardTitle className="text-npui-foreground">{component.name}</CardTitle>
                    <CardDescription className="text-npui-muted-foreground line-clamp-2">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Removed preview component, added category badge */}
                    <Badge variant="secondary" className="bg-npui-secondary text-npui-secondary-foreground">
                      {group.category.name}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
